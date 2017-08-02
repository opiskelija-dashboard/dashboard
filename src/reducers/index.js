

export default function(state = {"filter": "Oma sivu", dashboard_token: null }, action) {
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
       console.log(action.payload.data.data.token);
       return Object.assign({}, state,
        { dashboard_token: action.payload.data.data.token });
      
    case 'FETCH_DAILY_POINTS':
      console.log('Received data from backend:', action.payload.data);
      return Object.assign({}, state,
        { progressData: action.payload.data.points },
        { progressLabels: action.payload.data.days },
        { courseMaxPoints: 15 }
      );
    default: return state;
  }
}

