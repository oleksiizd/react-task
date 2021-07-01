import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { parsedDataState, parsedDataObj } from "./parsedDataSlice.types";

const initialState: parsedDataState = {
  parsedData: [],
  headerData: [],
};

export const parsedDataSlice = createSlice({
  name: "getParsedData",
  initialState,
  reducers: {
    dataAdd: (state, action: PayloadAction<parsedDataObj[]>) => {
      state.parsedData = action.payload;
    },
    headerAdd: (state, action: PayloadAction<string[]>) => {
      state.headerData = action.payload;
    },
  },
});

export const { dataAdd, headerAdd } = parsedDataSlice.actions;

export default parsedDataSlice.reducer;
