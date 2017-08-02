import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavButton from '../ButtonContainer'
import sinon from 'sinon';

//tested components
import { Button } from 'react-bootstrap'
import { NavButton as NoRedux } from '../ButtonContainer'

//tested actions
import { toggleVisibility } from '../../actions/index'

//tested reducers
import reducer from '../../reducers/index'



test.beforeEach(t => {
  const mockStore = configureStore();
  const initialState = {"Widgets": {"filter": "asdasd"}};
  t.context.store = mockStore(initialState);
});

test('renders without crashing', t => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={t.context.store}>
      <NavButton />
    </Provider>,
    div
  );
});

test('renders button', t => {
  const wrapper = mount(
    <Provider store={t.context.store}>
      <NavButton />
    </Provider>
  )

  t.deepEqual(wrapper.find(Button).length, 1);
});

test('outputs given text', t => {
  const wrapper = mount(
    <Provider store={t.context.store}>
      <NavButton text="testi"/>
    </Provider>
  )

  t.regex(wrapper.render().text(), /testi/);
});

//test without redux to dodge dispatch
test('button can be clicked', t => {
  const onClick = sinon.spy();
  const wrapper = mount(
    <NoRedux text="testi" toggleFilter={onClick}/>
  );

  wrapper.find(Button).simulate('click');
  t.deepEqual(onClick.calledOnce, true);
});

test('dispatch triggers when clicked', t => {
  t.context.store.replaceReducer(reducer)
  const wrapper = mount(
    <Provider store={t.context.store}>
      <NavButton text="testi" />
    </Provider>
  );

  wrapper.find(Button).simulate('click');
  t.deepEqual(t.context.store.getActions(), [toggleVisibility("testi")]);
});
