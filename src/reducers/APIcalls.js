import {
  CONNECT_BACKEND
} from "../actions/index";

export default function APIcalls(
  state = {
    dashboard_token: null,
    skillsData: [],
    fetchError: false,
    isFetching: true
  },
  action
) {
  if (action.error) {
    action.type = "HANDLE_ERROR";
  }
  switch (action.type) {
    case CONNECT_BACKEND:
      return Object.assign({}, state, {
        dashboard_token: action.payload.data.data.token
      });
    case "HANDLE_ERROR":
      console.log("an error occurred during a http request");
      return Object.assign({}, state, { fetchError: true });
    default:
      return state;
  }
}
