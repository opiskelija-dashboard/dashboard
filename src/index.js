import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import ReduxPromise from "redux-promise";

let storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

let store = storeWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
