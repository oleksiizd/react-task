import { ActionTypes } from "../actions/enumType";
import { parsedDataObj } from "../../components/parsedDataInterface";

interface DataAddAction {
  type: ActionTypes.DATA_ADD;
  payload: parsedDataObj[];
}

export type Action = DataAddAction;
