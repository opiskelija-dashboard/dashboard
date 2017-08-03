import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

import App from '../App'

test('component renders', t => {
  const mockStore = configureStore();
  const initialState = {};
  const store = mockStore(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  )
  t.deepEqual(wrapper.find(App).length, 1);
});
