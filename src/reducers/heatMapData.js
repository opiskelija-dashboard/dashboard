import {
  FETCH_HEAT_MAP_DATA,
  FETCH_HEAT_MAP_AVERAGE_DATA
} from "../actions/index";

export default function heatMapData(
  state = {
    userData: {},
    averageData: {}
  }, action ) {
      
  if(action.error) {
      action.type = "HEAT_MAP_FETCH_ERROR"
  }
  switch(action.type) {
    case FETCH_HEAT_MAP_DATA:
      return Object.assign({}, state,
        { userData: action.payload.data.data }
      );
    case FETCH_HEAT_MAP_AVERAGE_DATA:
      return Object.assign({}, state,
        { averageData: action.payload.data.data }
      );
    case "HEAT_MAP_FETCH_ERROR":
      console.log("http error fetching heat map data");
      return state;
    default:
      return state;
  }
}