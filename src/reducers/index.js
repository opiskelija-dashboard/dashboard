import APIcalls from './APIcalls'
import widgets from './widgets'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  APIcalls,
  widgets
})

export default rootReducer
