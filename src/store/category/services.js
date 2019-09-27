import * as categoryAPI from "../../API/category";
import * as actions from "./actions";

export const getCategories = () => async dispatch => {
  const data = await categoryAPI.getCategories();
  if (data) {
    dispatch(actions.getCategories(data.categories));
  }
};
