import { combineReducers } from 'redux';
import fetchCoursePointsReducer from '../reducers/fetchCoursePointsReducer.js';
import connectBackendReducer from '../reducers/connectBackendReducer.js';

export default combineReducers({
  fetchCoursePointsReducer,
  connectBackendReducer
});

