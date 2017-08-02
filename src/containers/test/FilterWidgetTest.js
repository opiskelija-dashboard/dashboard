import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

import FilterWidget from '../FilterWidget'
import { LeaderBoard } from '../../components/LeaderBoard'
import { Badges } from '../../components/Badges'

test("component renders", t => {
  const mockStore = configureStore();
  const initialState = {"Widgets": { "filter": "random" }};
  const store = mockStore(initialState);

  const wrapper = mount(
    <Provider store={store} >
      <FilterWidget />
    </Provider>
  )

  t.deepEqual(wrapper.find(FilterWidget).length, 1);
});

test('when state is \'Leaderboard\' LeaderBoard -component renders', t => {
  const mockStore = configureStore();
  const initialState = {"Widgets": { "filter": "Leaderboard" }};
  const store = mockStore(initialState);

  const wrapper = mount(
    <Provider store={store} >
      <FilterWidget />
    </Provider>
  )

  t.deepEqual(wrapper.find(LeaderBoard).length, 1);
});

test('when state is \'Badget\' Badges -component renders', t => {
  const mockStore = configureStore();
  const initialState = {"Widgets": { "filter": "Badget" }};
  const store = mockStore(initialState);

  const wrapper = mount(
    <Provider store={store} >
      <FilterWidget />
    </Provider>
  )

  t.deepEqual(wrapper.find(Badges).length, 1);
});
