import { configureStore } from "@reduxjs/toolkit";
import parsedDataSlice from "./parsedDataSlice/parsedDataSlice";

const store = configureStore({
  reducer: {
    getParsedData: parsedDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
