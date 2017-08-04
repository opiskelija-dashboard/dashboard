
import {
  FETCH_COURSE_POINTS,
  CONNECT_BACKEND,
  FETCH_DAILY_POINTS
} from '../actions/index'

export default function APIcalls(state = {dashboard_token: null }, action) {
  if(action.error) {
    action.type = 'HANDLE_ERROR'
  }
  switch (action.type) {
    case FETCH_COURSE_POINTS:
      return Object.assign({}, state,
        { coursePoints: action.payload.data.length }
      );
    case CONNECT_BACKEND:
       return Object.assign({}, state,
        { dashboard_token: action.payload.data.data.token });
    case FETCH_DAILY_POINTS:
      return Object.assign({}, state,
        { progressData: action.payload.data.points },
        { progressLabels: action.payload.data.days },
        { courseMaxPoints: 50 }
      );
    case 'HANDLE_ERROR':
      console.log("an error occurred during a http request");
      return state;
    default:
      return state;
  }
}
