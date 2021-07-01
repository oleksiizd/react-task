import { ActionTypes } from "../actions/Action.types";
import { parsedDataObj } from "../redux-toolkit/parsedDataSlice/parsedDataSlice.types";

export interface DataAddAction {
  type: ActionTypes.DATA_ADD;
  payload: parsedDataObj[];
}
