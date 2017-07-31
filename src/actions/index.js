import axios from 'axios';

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
