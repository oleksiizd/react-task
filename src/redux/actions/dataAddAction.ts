import { ActionTypes } from "./enumType";
import { parsedDataObj } from "../../components/parsedDataInterface";

const addData = (argumentData: parsedDataObj[]) => {
  return {
    type: ActionTypes.DATA_ADD,
    payload: argumentData,
  };
};

export default addData;
