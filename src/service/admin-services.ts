import Axios from "axios";

const token: any = `1|HiuP7wA4W72xWctgXnEYHZcdpto7TXT3Ztjbw5T3`;

const getPermissions = async (all: boolean) => {
  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  const { data } = await Axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}permissions`,
    {
      params: {
        all
      },

      headers,
    }
  );
  return data;
};

const storePermissions = async ({ name }) => {
  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  return Axios.post(
    `${process.env.REACT_APP_API_ENDPOINT}permissions`,
    { name },
    {
      headers,
    }
  );
};

const storeRoles = async ({ name, permissions }) => {
  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  return Axios.post(
    `${process.env.REACT_APP_API_ENDPOINT}roles`,
    { name, permissions },
    {
      headers,
    }
  );
};
const getRoles = async () => {
  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const { data } = await Axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}roles`,
    { headers }
  );
  return data;
};

const getUsers = async () => {
  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const { data } = await Axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}users`,
    { headers }
  );
  return data;
};
const getFaculties = async () => {
  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const { data } = await Axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}faculties`,
    { headers }
  );
  return data;
};
const getPrograms = async () => {
  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const { data } = await Axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}programs`,
    { headers }
  );
  return data;
};

const getCourses = async () => {
  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const { data } = await Axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}subjects`,
    { headers }
  );
  return data;
};

export const adminServices = {
  getPermissions,
  getRoles,
  getUsers,
  getFaculties,
  getPrograms,
  getCourses,
  storePermissions,
  storeRoles,
};
