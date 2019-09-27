import * as types from "./types";

const initialState = [];

const categoryReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_CATEGORIES:
      return payload;
    default:
      return state;
  }
};

export default categoryReducers;
