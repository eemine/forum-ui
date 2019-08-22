import * as types from "./types";

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.LOG_IN:
      return {
        ...payload
      };
    case types.LOG_OUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
