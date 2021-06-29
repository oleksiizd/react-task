import { ActionTypes } from "../actions/action.types";

interface DataAddAction {
  type: ActionTypes.DATA_ADD;
  payload: {}[];
}

export type Action = DataAddAction;
