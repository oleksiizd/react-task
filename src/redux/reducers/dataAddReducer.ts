import { DataAddAction } from "./reducers.types";
import { ActionTypes } from "../actions/Action.types";

const dataAddReducer = (state: [] = [], action: DataAddAction) => {
  switch (action.type) {
    case ActionTypes.DATA_ADD:
      return action.payload;
    default:
      return state;
  }
};

export default dataAddReducer;
