import { ActionTypes } from "./Action.types";
import { parsedDataObj } from "../redux-toolkit/parsedDataSlice/parsedDataSlice.types";

const addData = (argumentData: parsedDataObj[]) => {
  return {
    type: ActionTypes.DATA_ADD,
    payload: argumentData,
  };
};

export default addData;
