
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
       console.log(action.payload.data.data.token);
       return Object.assign({}, state,
        { dashboard_token: action.payload.data.data.token });
    case FETCH_DAILY_POINTS:
      console.log('Received data from backend:', action.payload.data);
      return Object.assign({}, state,
        { progressData: action.payload.data.points },
        { progressLabels: action.payload.data.days },
        { courseMaxPoints: 15 }
      );
    case 'HANDLE_ERROR':
      console.log("there was an error while making request");
      break;
    default:
      return state;
  }
}
