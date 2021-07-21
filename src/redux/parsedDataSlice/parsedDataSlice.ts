import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IParsedDataState, IParsedDataObj } from "./types";

const initialState: IParsedDataState = {
  parsedData: [],
  headerData: [],
};

export const parsedDataSlice = createSlice({
  name: "getParsedData",
  initialState,
  reducers: {
    dataAdd: (state, action: PayloadAction<IParsedDataObj[]>) => {
      state.parsedData = action.payload;
    },
    headerAdd: (state, action: PayloadAction<string[]>) => {
      state.headerData = action.payload;
    },
  },
});

export const { dataAdd, headerAdd } = parsedDataSlice.actions;

export default parsedDataSlice.reducer;
