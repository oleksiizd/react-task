import { parsedDataObj } from "../redux-toolkit/parsedDataSlice/parsedDataSlice.types";

export const getStoredData = (state: { storedData: parsedDataObj[] }) =>
  state.storedData;
