import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import ReduxPromise from 'redux-promise';


let storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

let store = storeWithMiddleware(reducers)

ReactDOM.render (
  <Provider store={store}>
    <div className="Centered">
      <div className="App-header">
        <h2>Opiskelijan dashboard</h2>
      </div>

      <App />

    </div>
  </Provider>,
  document.getElementById('root')
)