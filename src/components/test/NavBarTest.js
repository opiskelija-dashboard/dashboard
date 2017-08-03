import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { NavBar } from '../NavBar';
import ButtonContainer from '../../containers/ButtonContainer';

test('component renders without crashing', t => {
  const mockStore = configureStore();
<<<<<<< HEAD
  const initialState = { "filter": "asdasd" }
=======
  const initialState = {"Widgets": {"filter": "asdasd"}}
>>>>>>> 1d7d61221d132fbe8932e36d17800f9eacf7aa1e
  const store = mockStore(initialState);

  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <NavBar />
    </Provider>,
    div
  );
});

test('renders three ButtonContainers', t => {
  const wrapper = shallow(
    <NavBar />
  )

  t.deepEqual(wrapper.find(ButtonContainer).length, 3);
});
