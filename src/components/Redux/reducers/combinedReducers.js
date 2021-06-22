import { combineReducers } from "redux";
import { parsedDataReducer } from "./parsedDataReducer";

const redusers = combineReducers({
  parsedDataReducer: parsedDataReducer,
});

export default redusers;
