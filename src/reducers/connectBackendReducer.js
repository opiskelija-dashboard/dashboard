import { CONNECT_BACKEND } from '../actions/connectBackend.js';

export default function (state = {}, action) {
    switch (action.type) {
      case CONNECT_BACKEND:
        console.log("payload:", action.payload);
        return Object.assign({}, state
        );
      default:
       return state;
    }
}
