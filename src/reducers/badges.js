
import {
  FETCH_BADGE_DATA
} from '../actions/index'

export default function badges(state = {
  
}, action) {
  switch (action.type) {
    case FETCH_BADGE_DATA:
      return Object.assign({}, state,
        {badges: action.payload.data.data}
      )
    default:
      return state;
  }
}
