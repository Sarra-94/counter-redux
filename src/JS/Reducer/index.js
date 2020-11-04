import { combineReducers } from "redux";
import { count } from "./counter";
export const rootReducers = combineReducers({ count: count });
