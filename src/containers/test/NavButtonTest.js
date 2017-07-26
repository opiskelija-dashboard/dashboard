import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavButton from '../NavButton'


const mockStore = configureStore();
const initialState = { "filter": "asdasd" };

test('renders without crashing', t => {
  const store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <NavButton />
    </Provider>
  )

  t.deepEqual(wrapper.find('Button').length, 1);

});
