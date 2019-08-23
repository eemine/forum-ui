import * as types from "./types";
import { USER_TOKEN } from "../../utilities/constants";

const userToken = localStorage.getItem(USER_TOKEN);
const initialState = userToken
  ? {
      token: userToken
    }
  : {};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOG_IN:
      localStorage.setItem(USER_TOKEN, payload);
      return {
        token: payload
      };
    case types.LOG_OUT:
      localStorage.removeItem(USER_TOKEN);
      return {};
    default:
      return state;
  }
};

export default userReducer;
