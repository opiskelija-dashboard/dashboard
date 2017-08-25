import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import HeatmapContainer from '../HeatmapContainer';


test.beforeEach(t => {
  const mockStore = configureStore();

  const initialState = {
    heatMap: {
      userData: {},
      averageData: {}
    }
  };

  t.context.store = mockStore(initialState);
});

test('renders without crashing', t => {
  const wrapper = mount(
    <Provider store={t.context.store}>
      <HeatmapContainer />
    </Provider>
  )

  t.truthy(wrapper.find('.CalendarWeek'));
});
