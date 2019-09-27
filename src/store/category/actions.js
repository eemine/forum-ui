import * as types from "./types";

export const getCategories = categories => ({
  type: types.GET_CATEGORIES,
  payload: categories
});
