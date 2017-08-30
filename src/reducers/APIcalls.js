import {
  CONNECT_BACKEND
} from "../actions/index";

import jwt_decode from 'jwt-decode';

export default function APIcalls(
  state = {
    dashboard_token: null,
    skillsData: [],
    fetchError: false,
    isFetching: true,
    isAdmin: false,
    userName: null,
    tmcuid: null
  },
  action
) {
  if (action.error) {
    action.type = "HANDLE_ERROR";
  }
  switch (action.type) {
    case CONNECT_BACKEND:
    const token = action.payload.data.data.token;
      const decoded = jwt_decode(token);


      return Object.assign({}, state, {
        dashboard_token: token,
        tmcadm: decoded.tmcadm,
        tmcusr: decoded.tmcusr,
        tmcuid: decoded.tmcuid
      });
    case "HANDLE_ERROR":
      console.log("an error occurred during a http request");
      return Object.assign({}, state, { fetchError: true });
    default:
      return state;
  }
}
