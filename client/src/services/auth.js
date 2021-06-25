import api from "./api-config";

export const loginUser = async (loginData) => {
  // directs to authentication controller
  const resp = await api.post("/auth/login", { authentication: loginData });
  // store token in local storage
  localStorage.setItem("authToken", resp.data.token);
  // attach an authorization header for each instance of axios ()
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async (registerData) => {
  // directs to user controller
  const resp = await api.post("/users/", { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const verifyUser = async () => {
  // get the token that was set
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  // logout by removing the token from local storage
  api.defaults.headers.common.authorization = null;
};
