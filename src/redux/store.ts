import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/combinedReducers";
import thunk from "redux-thunk";

const myStore = createStore(reducers, applyMiddleware(thunk));

export default myStore;
