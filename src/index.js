import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import ReduxPromise from "redux-promise";
import {setCourseId} from "./actions/index"

let storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

let envExtension = (process.env.NODE_ENV === 'development') ?
  [
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ] :
  [rootReducer];


let store = storeWithMiddleware(
  ...envExtension
);

ReactDOM.render(
  <Provider store={store}>
    <div className="Centered">
      <div className="app">
        <App />
      </div>
    </div>
  </Provider>,
  document.getElementById('root')
)
