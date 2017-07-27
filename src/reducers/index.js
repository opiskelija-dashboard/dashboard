export default function(state = {"filter": "Oma sivu"}, action) {
  switch (action.type) {
    case 'FETCH_COURSE_POINTS':
      return Object.assign({}, state,
        { coursePoints: action.payload.data.length }
      );
    case 'TOGGLE_WIDGET_VISIBILITY':
      return Object.assign({}, state,
        { filter: action.filter }
      );
    case 'CONNECT_BACKEND':
      console.log("payload:", action.payload);
      return state;
    default: return state;
  }
}

