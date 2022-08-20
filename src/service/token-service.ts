const accessToken = btoa(btoa("access_token"));
const refreshToken = btoa(btoa("refresh_token"));

export const getAccessToken = (): string => {
  let accessToken = "";
  try {
    accessToken = atob(localStorage.getItem(accessToken) || "");
  } catch (e) {
    console.log("Local Store error", e);
  }
  return accessToken;
};
