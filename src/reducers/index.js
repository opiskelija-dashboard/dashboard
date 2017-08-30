import APIcalls from "./APIcalls";
import widgets from "./widgets";
import courseData from "./courseData";
import heatMap from "./heatMap";
import points from "./points";
import badges from './badges'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  APIcalls,
  widgets,
  courseData,
  points,
  heatMap,
  badges
});

export default rootReducer;
