import APIcalls from './APIcalls'
import Widgets from './widgets'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  APIcalls,
  Widgets
})

export default rootReducer