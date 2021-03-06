import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const middlewares = applyMiddleware(thunkMiddleware);
const store = createStore(reducers, composeWithDevTools(middlewares));

export default store;
