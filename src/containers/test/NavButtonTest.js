import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavButton from '../NavButton'


const mockStore = configureStore();
const initialState = { "filter": "asdasd"}

test('NavButton renders without crashing', t => {
  const div = document.createElement('div');
  const store = mockStore(initialState);
  ReactDOM.render(
    <Provider store={store}>
      <NavButton />
    </Provider>,
    div
  );
});

test('renders button', t => {
  const store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <NavButton />
    </Provider>
  )

  t.deepEqual(wrapper.find('Button').length, 1);

});
