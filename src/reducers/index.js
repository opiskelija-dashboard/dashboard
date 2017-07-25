import { combineReducers } from 'redux';
import { FETCH_COURSE_POINTS } from '../actions/index';

export default function(state = {"filter": "Oma sivu"}, action) {
  switch (action.type) {
    case 'TOGGLE_WIDGET_VISIBILITY':
    return Object.assign({}, state,
      { filter: action.filter.text }
    );
    default: return state;
  }
}


/*********to be announced
const rootReducer = combineReducers({});
*/
