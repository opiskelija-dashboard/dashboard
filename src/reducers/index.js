import { combineReducers } from 'redux';
import { FETCH_COURSE_POINTS } from '../actions/index';

export default function(state = {"filter": "Oma sivu"}, action) {
  switch (action.type) {
    case FETCH_COURSE_POINTS:
      return Object.assign({}, state,
        { coursePoints: action.payload.data.length }
      );
    case 'TOGGLE_WIDGET_VISIBILITY':
      return Object.assign({}, state,
        { filter: action.filter.text }
      );
    default: return state;
  }
}