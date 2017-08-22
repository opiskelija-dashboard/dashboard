import APIcalls from "./APIcalls";
import widgets from "./widgets";
import courseData from "./courseData";
import points from "./points";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  APIcalls,
  widgets,
  courseData,
  points
});

export default rootReducer;
