import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

import App from '../App'

import { connectBackend, setCourseId } from "../../actions/index";
import { fetchDailyPoints } from "../../actions/index";

test.beforeEach(t => {
  const mockStore = configureStore();
  const initialState = {
    "widgets": { "filter": "random" },
    "APIcalls": { "dashboard_token": "random"},
    "courseData": { "courseId": "214"},
    "points": { "fetchError": false, "isFetching": false } 
  };
  t.context.store = mockStore(initialState);

  t.context.wrapper = mount(
    <Provider store={t.context.store}>
      <App />
    </Provider>
  )
});

test('component renders', t => {
  t.deepEqual(t.context.wrapper.find(App).length, 1);
});

test('component dispatches correctly', t => {
  let actions = t.context.store.getActions();
  t.deepEqual(actions[0]['type'], setCourseId()['type']);
  t.deepEqual(actions[1]['type'], connectBackend()['type']);
});
