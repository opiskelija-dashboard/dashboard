import { combineReducers } from 'redux';
import { FETCH_COURSE_POINTS } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_COURSE_POINTS:
      return Object.assign({}, state,
        { coursePoints: action.payload.data.length }
      );
    case 'TOGGLE_WIDGET_VISIBILITY':
      return [...state,
        { action: action.filter }
      ];
    default: return state;
  }
}


/*********to be announced
const rootReducer = combineReducers({});
*/
