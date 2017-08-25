import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import LeaderBoardContainer from '../LeaderBoardContainer'

test.beforeEach(t => {
  const mockStore = configureStore();

  const initialState = {
    points: {
      leaderBoardData: []
    },
    courseData: {
      courseId: '214'
    },
    APIcalls: {
      dashboard_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0bWN1c3IiOiJvaHR1X2Rhc2hib2FyZCIsInRtY3RvayI6ImMxMTRkNDI5YzkzZmQzOGRlOGZhMTBlMjBmOWIwZDlhODY4MzYwM2U2MjNhMjM1OWJmNjAzY2U5YmNiYjcxN2IiLCJ0bWN1aWQiOjE1NjUzLCJleHAiOjE1MDM3MzQ4MjJ9.WbbD-eQAGD455vHhup6hVGN6Jz5ijU3-F4wTvqufboo'
    }
  };

  t.context.store = mockStore(initialState);
});

test('component renders correctly', t => {
  const wrapper = mount(
    <Provider store={t.context.store} >
      <LeaderBoardContainer />
    </Provider>
  )

  t.deepEqual(wrapper.find('LeaderBoardContainer').length, 1);
});