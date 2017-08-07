import axios from "axios";
import store from "store";
import { makeData } from "../makeData";

export const FETCH_COURSE_POINTS = "FETCH_COURSE_POINTS";

export const fetchCoursePoints = token => {
  const request = axios.get(
    "https://student-dashboard-api.herokuapp.com/points",
    {
      Authorization: "Bearer " + token
    }
  );
  return {
    type: FETCH_COURSE_POINTS,
    payload: request
  };
};

export const CONNECT_BACKEND = "CONNECT_BACKEND";

export const connectBackend = () => {
  if (!store.get("tmc.user")) {
    store.set("tmc.user", {
      username: "ohtu_dashboard",
      accessToken:
        "c114d429c93fd38de8fa10e20f9b0d9a8683603e623a2359bf603ce9bcbb717b"
    });
  }
  const user = store.get("tmc.user");
  const conn_url =
    "https://student-dashboard-api.herokuapp.com/new-dash-session";
  const request = axios.post(conn_url, {
    tmc_username: user.username,
    tmc_access_token: user.accessToken
  });
  return {
    type: CONNECT_BACKEND,
    payload: request
  };
};

export const FETCH_DAILY_POINTS = "FETCH_DAILY_POINTS";

export const fetchDailyPoints = token => {
  const url = "https://student-dashboard-api.herokuapp.com/cumulative-points";
  const request = axios.get(url, {
    headers: { Authorization: "Bearer " + token }
  });
  return {
    type: FETCH_DAILY_POINTS,
    payload: request
  };
};

export const FETCH_SKILLS_DATA = "FETCH_SKILLS_DATA";

export const fetchSkillsData = token => {
  const url = "https://student-dashboard-api.herokuapp.com/skill-percentages";
  const request = axios.get(url, {
    headers: { Authorization: "Bearer " + token }
  });
  return {
    type: FETCH_SKILLS_DATA,
    payload: request
  };
};

export const FETCH_LEADERBOARD_DATA = "FETCH_LEADERBOARD_DATA";

export const fetchLeaderBoardData = token => {
  // TÄMÄ KÄYTTÖÖN, kun backend tuo jotain
  // const url = "https://student-dashboard-api.herokuapp.com/JOTAIN_TÄHÄN";
  // const request = axios.get(url,
  //   { headers: { 'Authorization': 'Bearer ' + token }}
  // );
  const request = makeData();
  return {
    type: FETCH_LEADERBOARD_DATA,
    payload: request
  };
};

export const TOGGLE_WIDGET_VISIBILITY = "TOGGLE_WIDGET_VISIBILITY";

export const toggleVisibility = filter => {
  return {
    type: TOGGLE_WIDGET_VISIBILITY,
    filter
  };
};
