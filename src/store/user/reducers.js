import * as types from "./types";
import { UESR_TOKEN } from "../../utilities/constants";

const userToken = localStorage.getItem(UESR_TOKEN);
const initialState = userToken
  ? {
      token: userToken
    }
  : {};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOG_IN:
      localStorage.setItem(UESR_TOKEN, payload);
      return {
        token: payload
      };
    case types.LOG_OUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
