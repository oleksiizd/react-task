import { parsedDataObj } from "../../components/TableWeather/TableWeather.types";

export const getStoredData = (state: { storedData: parsedDataObj }) =>
  state.storedData;
