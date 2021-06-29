import { combineReducers } from "redux";
import dataAddReducer from "./dataAddReducer";

const reducers = combineReducers({
  storedData: dataAddReducer,
});

export default reducers;
