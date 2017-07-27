import axios from 'axios';

const TEST_USER = {
  ACCESS_TOKEN: "Bearer c114d429c93fd38de8fa10e20f9b0d9a8683603e623a2359bf603ce9bcbb717b",
  ROOT_URL: "https://tmc.mooc.fi/api/v8",
  USER_ID: "15653",
  COURSE_ID: "214"
};

export const FETCH_COURSE_POINTS = 'FETCH_COURSE_POINTS';

export const fetchCoursePoints = () => {
    const request = axios.get("https://student-dashboard-api.herokuapp.com/points");
    return {
        type: 'FETCH_COURSE_POINTS',
        payload: request
    };
}

export const TOGGLE_WIDGET_VISIBILITY = 'TOGGLE_WIDGET_VISIBILITY';

export const toggleVisibility = (filter) => {
  return {
    type: TOGGLE_WIDGET_VISIBILITY,
    filter
  }
}
