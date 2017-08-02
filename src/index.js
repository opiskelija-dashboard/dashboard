import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import ReduxPromise from "redux-promise";
import { connectBackend } from './actions/index.js';

let storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

let store = storeWithMiddleware(reducers);

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

store.dispatch(connectBackend());
//store.dispatch(fetchDailyPoints());
