import axios from "axios";
import { USER_TOKEN } from "./constants";

const userToken = localStorage.getItem(USER_TOKEN);

export const initAxiosConfig = () => {
  axios.defaults.baseURL = "/api/v1";
  axios.defaults.headers.post["Content-Type"] = "application/json";

  if (userToken) {
    setToken(userToken);
  }
};

export const setToken = token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeToken = () => {
  axios.defaults.headers.common["Authorization"] = undefined;
};
