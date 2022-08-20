import Axios from "axios";
import { getAccessToken } from "./token-service";

const getRequestHeaders = (apiDetails: any, access_token: string) => {
  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + access_token,
  };
  switch (apiDetails.requestBodyType) {
    case "QUERY-STRING":
      headers = {
        ...headers,
        "Content-Type": "application/x-www-form-urlencoded",
      };
      break;
    case "FORM-DATA":
      headers = {
        ...headers,
        "Content-Type": "multipart/form-data",
      };
      break;
    case "NO-AUTH":
      delete headers["Authorization"];
      break;
    default:
      headers = { ...headers };
  }
  return headers;
};

export default function makeApiRequest(
  apiDetails: any,
  requestData: any,
  params?: any
) {
  // API URL
  let baseURL = process.env.REACT_APP_API_ENDPOINT as string;
  const access_token: string = getAccessToken();
  const controller = new AbortController();
  const headers = getRequestHeaders(apiDetails, access_token);
  let transformedRequestData = transformRequestData(apiDetails, requestData);
  let axiosReqParams: any = {
    baseURL: baseURL,
    url: apiDetails.controllerName,
    method: apiDetails.requestMethod,
    responseType: "json",
    timeout: 60 * 3 * 1000,
    cancelToken: 0,
    headers: headers,
    ...transformedRequestData,
    signal: controller.signal,
  };

  console.log(baseURL);

  if (params) {
    axiosReqParams = {
      ...axiosReqParams,
      params: params,
    };
  }

  let response = Axios.request(axiosReqParams)
    .then((response) => response)
    .catch((error) => {
      const errorResponse = manageErrorResponse(error);
      throw errorResponse;
    });

  // controller.abort();

  return response;
}

const basicAuth = {
  username: "clientid",
  password: "secret",
};

const transformRequestData = (apiDetails, requestData) => {
  const transformedRequestData: any = {};
  let formData = new FormData();
  for (let data in requestData) {
    formData.append(data, requestData[data]);
  }
  switch (apiDetails.requestBodyType) {
    case "LOGIN":
      transformedRequestData.auth = basicAuth;
      transformedRequestData.data = formData;
      break;
    case "FORM-DATA":
      transformedRequestData.data = formData;
      break;
    default:
      transformedRequestData.data = requestData;
      break;
  }

  return transformedRequestData;
};

const manageErrorResponse = (error) => {
  const { message, config, code, request, response, isAxiosError } = error;

  let errorResponse = {
    message: message, // Something happened in setting up the request that triggered an Error
    data: null,
    status: code || 400,
    noconnection: false,
    config: config, // Request Params Configs
    isAxiosError: isAxiosError, //If Axios Error
  };

  if (response) {
    errorResponse.data = response.data; // The server responded with a status code and data
  } else if (request) {
    errorResponse.message = "Server could not be reached."; // No response was received
    errorResponse.noconnection = true;
  }

  return errorResponse;
};
