import {
  FETCH_HEAT_MAP_DATA,
  FETCH_HEAT_MAP_AVERAGE_DATA
} from "../actions/index";

export default function heatMap(
  state = {
    userData: {},
    averageData: {},
    userIsFetching: true,
    averageIsFetching: true,
    fetchError: false
  }, action ) {

  if(action.error) {
    action.type = "HEAT_MAP_FETCH_ERROR"
  }
  switch(action.type) {
    case FETCH_HEAT_MAP_DATA:
      return Object.assign({}, state,
        { userData: action.payload.data.data },
        { userIsFetching: false }
      );
    case FETCH_HEAT_MAP_AVERAGE_DATA:
      return Object.assign({}, state,
        { averageData: action.payload.data.data },
        { averageIsFetching: false }
      );
    case "HEAT_MAP_FETCH_ERROR":
      return Object.assign({}, state,
        { fetchError: true }
      );
    default:
      return state;
  }
}
