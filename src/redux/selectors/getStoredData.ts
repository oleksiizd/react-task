import { parsedDataObj } from "../../components/parsedDataInterface";

export const getStoredData = (state: { storedData: parsedDataObj[] }) =>
  state.storedData;
