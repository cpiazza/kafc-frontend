import rootReducers from "./reducers"
import {createStore} from "redux";

const initialState = {};

const store = createStore(
  rootReducers,
  initialState
);

export default store;
