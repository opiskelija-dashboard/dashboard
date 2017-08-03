import APIcalls from './APIcalls'
import Widgets from './Widgets'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  APIcalls,
  Widgets
})

export default rootReducer
