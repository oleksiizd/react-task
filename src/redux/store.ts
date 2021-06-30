import { createStore } from "redux";
import reducers from "./reducers/combinedReducers";

const myStore = createStore(reducers);

export default myStore;
