export enum REQUESTMETHODS {
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
}

export const apiList = {
  login: {
    controllerName: "/login",
    actionName: "LOGIN",
    requestMethod: REQUESTMETHODS.POST,
  },
};
