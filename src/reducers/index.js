import APIcalls from './APIcalls'
import widgets from './widgets'
import courseData from './courseData'
import badges from './badges'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  APIcalls,
  widgets,
  courseData,
  badges
})

export default rootReducer
