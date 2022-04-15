import { combineReducers } from "redux";
import { pageReducer } from "./pageReducer";

const reducers = combineReducers({
  pageData: pageReducer,
});

export default reducers;
