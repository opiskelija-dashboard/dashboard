import APIcalls from './APIcalls'
import widgets from './widgets'
import courseData from './courseData'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  APIcalls,
  widgets,
  courseData
})

export default rootReducer
