import { combineReducers } from "redux";
import userReducer from "./user";
import categoryReducer from "./category";

export default combineReducers({
  user: userReducer,
  categories: categoryReducer
});
