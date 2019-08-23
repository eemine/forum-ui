import axios from "axios";
import { setToken } from "../utilities/axios";

export const login = async (username, password) => {
  const response = await axios.post("/auth/login", { username, password });
  if (response && response.data) {
    setToken(response.data.payload.token);
    return response.data.payload;
  }
};
