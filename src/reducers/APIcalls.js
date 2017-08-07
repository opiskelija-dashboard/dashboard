
import {
  FETCH_COURSE_POINTS,
  CONNECT_BACKEND,
  FETCH_DAILY_POINTS,
  FETCH_SKILLS_DATA
} from '../actions/index'

export default function APIcalls(state = {dashboard_token: null, skillsData: [], fetchError: false, isFetching: true }, action) {
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
        { courseMaxPoints: 50 },
        { isFetching: false}
      );
    case FETCH_SKILLS_DATA:
      return Object.assign({}, state,
       { skillsData: action.payload.data.skills }
      );
    case 'HANDLE_ERROR':
      console.log("an error occurred during a http request");
      return Object.assign({}, state,
       { fetchError: true }
      );
    default:
      return state;
  }
}
