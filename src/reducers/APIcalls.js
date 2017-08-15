import {
  FETCH_COURSE_POINTS,
  CONNECT_BACKEND,
  FETCH_DAILY_POINTS,
  FETCH_SKILLS_DATA,
  FETCH_LEADERBOARD_DATA,
  UPDATE_LEADERBOARD
} from "../actions/index";

export default function APIcalls(
  state = {
    dashboard_token: null,
    skillsData: [],
    fetchError: false,
    isFetching: true,
    leaderboardUpdated: false
  },
  action
) {
  if (action.error) {
    action.type = "HANDLE_ERROR";
  }
  switch (action.type) {
    case FETCH_COURSE_POINTS:
      return Object.assign({}, state, {
        coursePoints: action.payload.data.length
      });
    case CONNECT_BACKEND:
      return Object.assign({}, state, {
        dashboard_token: action.payload.data.data.token
      });
    case FETCH_DAILY_POINTS:
      return Object.assign(
        {},
        state,
        { progressData: action.payload.data.points },
        { progressLabels: action.payload.data.days },
        { progressAverage: action.payload.data.average },
        { courseMaxPoints: 50 },
        { isFetching: false }
      );
    case FETCH_SKILLS_DATA:
      return Object.assign({}, state, {
        skillsData: action.payload.data.skill_percentage
      });
    case FETCH_LEADERBOARD_DATA:
      return Object.assign({}, state, {
        leaderBoardData: action.payload.data.data
      });
    case UPDATE_LEADERBOARD:
      return Object.assign({}, state,
        { leaderboardUpdated: true }
      );
    case "HANDLE_ERROR":
      console.log("an error occurred during a http request");
      return Object.assign({}, state, { fetchError: true });
    default:
      return state;
  }
}
