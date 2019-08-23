import * as authAPI from "../../API/auth";
import * as actions from "./actions";

export const login = (username, password) => async dispatch => {
  const data = await authAPI.login(username, password);
  if (data) {
    dispatch(actions.login(data.token));
  }
};
