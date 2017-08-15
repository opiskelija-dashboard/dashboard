import axios from "axios";
import store from "store";
//import { makeData } from "../makeData";
import { API_BASE_URL } from "../config"

export const FETCH_COURSE_POINTS = "FETCH_COURSE_POINTS";

export const fetchCoursePoints = (token, courseId) => {
  const request = axios.get(
    API_BASE_URL + "/points/course/" + courseId,
    { Authorization: "Bearer " + token }
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
    API_BASE_URL + "/new-dash-session";
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

export const fetchDailyPoints = (token, courseId) => {
  const url = API_BASE_URL + "/cumulative-points"/*course/" + courseId*/;
  const request = axios.get(url, {
    headers: { Authorization: "Bearer " + token }
  });
  return {
    type: FETCH_DAILY_POINTS,
    payload: request
  };
};


export const FETCH_SKILLS_DATA = "FETCH_SKILLS_DATA";

export const fetchSkillsData = (token, courseId) => {
  const url = API_BASE_URL + "/skill-percentages"/*course/" + courseId*/;
  const request = axios.get(url, {
    headers: { Authorization: "Bearer " + token }
  });
  return {
    type: FETCH_SKILLS_DATA,
    payload: request
  };
};


export const UPDATE_LEADERBOARD = "UPDATE_LEADERBOARD";

export const updateLeaderboard = (token, courseId) => {
  const url = API_BASE_URL + "/leaderboard/course/" + courseId + "/update";
  const request = axios.get(url,
    { headers: { 'Authorization': 'Bearer ' + token }})
  return {
    type: UPDATE_LEADERBOARD,
    payload: request
  }
}


export const FETCH_LEADERBOARD_DATA = "FETCH_LEADERBOARD_DATA";

export const fetchLeaderBoardData = (token, courseId) => {
  const url = API_BASE_URL + "/leaderboard/course/" + courseId + "/all";
  const request = axios.get(url,
    { headers: { 'Authorization': 'Bearer ' + token }}
  );
  //const request = makeData();
  return {
    type: FETCH_LEADERBOARD_DATA,
    payload: request
  };
};

export const SET_COURSE_ID = "SET_COURSE_ID";

export const setCourseId = (id) => {
  return {
    type: SET_COURSE_ID,
    courseId : id
  }  
};

export const TOGGLE_WIDGET_VISIBILITY = "TOGGLE_WIDGET_VISIBILITY";

export const toggleVisibility = filter => {
  return {
    type: TOGGLE_WIDGET_VISIBILITY,
    filter
  };
};


