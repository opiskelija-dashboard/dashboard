
import { TOGGLE_WIDGET_VISIBILITY } from '../actions/index'

export default function widgets(state = {"filter": "Oma sivu"}, action) {
  switch (action.type) {
    case TOGGLE_WIDGET_VISIBILITY:
      return Object.assign({}, state,
        { filter: action.filter }
      );
    default:
      return state;
  }
}
