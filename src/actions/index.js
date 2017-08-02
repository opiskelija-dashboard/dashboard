import axios from 'axios';
import store from 'store'


export const fetchCoursePoints = () => {
  const request = axios.get("https://student-dashboard-api.herokuapp.com/points");
    return {
      type: 'FETCH_COURSE_POINTS',
      payload: request
    }
}

export const connectBackend = () => {
  if(store.get("tmc.user")) {
    const user = store.get('tmc.user');
    /***request jwt token from dashboard api**/
    const conn_url = "https://student-dashboard-api.herokuapp.com/new-dash-session";
    const request = axios.post(conn_url,
      {
        tmc_username: user.username,
        tmc_access_token: user.accessToken
      }
    );
    return {
      type: 'CONNECT_BACKEND',
      payload: request
    }
  }
}

export const fetchDailyPoints = () => {
  const url = "https://student-dashboard-api.herokuapp.com/submissions";
  const request = axios.get(url);
  return {
    type: 'FETCH_DAILY_POINTS',
    payload: request
  }
}

export const TOGGLE_WIDGET_VISIBILITY = 'TOGGLE_WIDGET_VISIBILITY';

export const toggleVisibility = (filter) => {
  return {
    type: TOGGLE_WIDGET_VISIBILITY,
    filter
  }
}
