import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import ChartContainer from '../ChartContainer';
import { Chart } from '../../components/Chart'

const mockStore = configureStore();

const initialState = { 
  progressData: [],
  progressLabels: [],
  maxpoints: 20
}

test('renders without crashing', t => {
  const store  = mockStore(initialState);
  const wrapper= shallow(
    <Provider store={store}>
      <ChartContainer />
    </Provider>
  );
  t.deepEqual(wrapper.find(ChartContainer).length, 1);
});

test('chartcontainer renders chart', t => {
  const store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <ChartContainer />
    </Provider>
  );
  t.deepEqual(wrapper.find(Chart).length, 1);
});