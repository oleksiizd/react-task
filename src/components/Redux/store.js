import { createStore } from "redux";
import redusers from "./reducers/combinedReducers";

const store = createStore(redusers, {});
