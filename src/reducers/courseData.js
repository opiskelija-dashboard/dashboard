import { SET_COURSE_ID } from "../actions/index";

export default function courseData( state = { courseId: null }, action ) {
  switch (action.type) {
    case SET_COURSE_ID:
      return Object.assign({}, state, {
        courseId: action.courseId
      });
    default:
      return state;
  }
}