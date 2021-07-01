import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParsedDataState, ParsedDataObj } from "./types";

const initialState: ParsedDataState = {
  parsedData: [],
  headerData: [],
};

export const parsedDataSlice = createSlice({
  name: "getParsedData",
  initialState,
  reducers: {
    dataAdd: (state, action: PayloadAction<ParsedDataObj[]>) => {
      state.parsedData = action.payload;
    },
    headerAdd: (state, action: PayloadAction<string[]>) => {
      state.headerData = action.payload;
    },
  },
});

export const { dataAdd, headerAdd } = parsedDataSlice.actions;

export default parsedDataSlice.reducer;
