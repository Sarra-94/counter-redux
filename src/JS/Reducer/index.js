import { combineReducers } from "redux";
import { count } from "./countReducer";
export const rootReducer = combineReducers({ count: count });
