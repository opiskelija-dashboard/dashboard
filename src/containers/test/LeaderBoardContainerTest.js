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
    }
  };

  t.context.store = mockStore(initialState);
});

test.skip('component renders correctly', t => {
  const wrapper = mount(
    <Provider store={t.context.store} >
      <LeaderBoardContainer />
    </Provider>
  )

  t.deepEqual(wrapper.find('LeaderBoardContainer').length, 1);
});