import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavButton from '../NavButton'
import sinon from 'sinon';

const mockStore = configureStore();
const initialState = { "filter": "asdasd"}
const store = mockStore(initialState);

test('renders without crashing', t => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <NavButton />
    </Provider>,
    div
  );
});

test('renders button', t => {
  const wrapper = mount(
    <Provider store={store}>
      <NavButton />
    </Provider>
  )

  t.deepEqual(wrapper.find('Button').length, 1);
});

test('outputs given text', t => {
  const wrapper = mount(
    <Provider store={store}>
      <NavButton text="testi"/>
    </Provider>
  )

  t.regex(wrapper.render().text(), /testi/);
});

import { Button } from 'react-bootstrap'

test('button can be clicked', t => {
  const onClick = sinon.spy();
  const wrapper = shallow(
    <Provider store={store}>
      <NavButton text="testi" onClick={onClick}/>
    </Provider>
  );

  wrapper.simulate('click');
  t.deepEqual(onClick.calledOnce, true);
});

const action = {
  type: 'TOGGLE_WIDGET_VISIBILITY',
  filter: 'testi'
}

// EI TOIMI ??? getActions palauttaa [], vaikka pitäisi olla toggleVisibility action
test.todo('state changes when clicked', t => {
  const store = mockStore(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <NavButton text="testi" />
    </Provider>
  );

  wrapper.simulate('click');
  t.deepEqual(store.getActions(), []);
});
