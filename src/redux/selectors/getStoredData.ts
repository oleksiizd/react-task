import { createSelector } from "reselect";
import { RootState } from "../configureStore";
import { IParsedDataObj } from "../parsedDataSlice/types";

const selectSelf = (state: RootState) => state;

const combinedData = (state: RootState): [IParsedDataObj[], string[]] => [
  state.getStoredData.parsedData,
  state.getStoredData.headerData,
];

/*export const getStoredData = createSelector(selectHeaderData, selectParsedData);*/

export const getParsedData = createSelector(selectSelf, combinedData);
