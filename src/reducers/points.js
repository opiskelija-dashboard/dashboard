import {
  FETCH_DAILY_POINTS,
  FETCH_SKILLS_DATA,
  FETCH_LEADERBOARD_DATA,
  UPDATE_LEADERBOARD
} from "../actions/index";

export default function points(
  state = {
    dashboard_token: null,
    skillsData: [],
    fetchError: false,
    chartFetch: true,
    skillsFetch: true,
    leaderBoardFetch: true,
    progressData: [],
    leaderBoardData: [],
    leaderboardUpdated: false
  },
  action
) {
  if (action.error) {
    action.type = "HANDLE_ERROR";
  }
  switch (action.type) {
    case FETCH_DAILY_POINTS:
      return Object.assign(
        {},
        state,
        { progressData: action.payload.data },
        { chartFetch: false }
      );
    case FETCH_SKILLS_DATA:
      return Object.assign({}, state, {
        skillsData: action.payload.data.data,
        skillsFetch: false
      });
    case FETCH_LEADERBOARD_DATA:
      return Object.assign({}, state, {
        leaderBoardData: action.payload.data.data,
        leaderBoardFetch: false
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
