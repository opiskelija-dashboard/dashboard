import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import CalendarContainer from '../CalendarContainer';


test.beforeEach(t => {
  const mockStore = configureStore();

  const initialState = {
    APIcalls: {
      progressData: [],
      progressLabels: [],
      maxpoints: 20
    }
  };

  t.context.store = mockStore(initialState);
});

test.skip('renders without crashing', t => {
  const wrapper = mount(
    <Provider store={t.context.store}>
      <CalendarContainer />
    </Provider>
  )

  t.truthy(wrapper.find('.CalendarWeek'));
});
