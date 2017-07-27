export default function Widgets(state = {"filter": "Oma sivu"}, action) {
  switch (action.type) {
    case 'TOGGLE_WIDGET_VISIBILITY':
      return Object.assign({}, state,
        { filter: action.filter.text }
      );
    default:
      return state;
  }
}
