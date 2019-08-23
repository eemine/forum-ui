import axios from "axios";

export const register = (
  username,
  email,
  password,
  firstName,
  lastName,
  gender,
  imagePath
) => {
  return axios.post("/api/v1/users/register", {
    username,
    email,
    password,
    firstName,
    lastName,
    gender,
    imagePath
  });
};
