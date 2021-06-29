import { ActionTypes } from "./action.types";
import { Action } from "../reducers/reducers.types";
import { Dispatch } from "redux";

const addData = (argumentData: {}[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.DATA_ADD,
      payload: argumentData,
    });
  };
};

export default addData;
