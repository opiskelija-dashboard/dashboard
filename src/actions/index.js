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
  /***remove write when able to login***/
  if(!store.get('tmc.user')) {
    store.set('tmc.user',
      { accessToken: "Bearer c114d429c93fd38de8fa10e20f9b0d9a8683603e623a2359bf603ce9bcbb717b" })
  }
  const token = store.get('tmc.user');
  /***replace when api is ready***/
  const conn_url = "https://student-dashboard-api.herokuapp.com/";
  const request = axios.post(conn_url,
    { accessToken: token.accessToken }
  );
  return {
    type: 'CONNECT_BACKEND',
    payload: request
  }
}

export const toggleVisibility = (filter) => {
  return {
    type: 'TOGGLE_WIDGET_VISIBILITY',
    filter
  }
}
