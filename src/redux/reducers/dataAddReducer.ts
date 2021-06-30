import { Action } from "./reducers.types";
import { ActionTypes } from "../actions/enumType";

const dataAddReducer = (state: [] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.DATA_ADD:
      return action.payload;
    default:
      return state;
  }
};

export default dataAddReducer;
