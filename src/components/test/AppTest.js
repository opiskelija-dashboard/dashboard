import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import { App } from '../App'

test('component renders', t => {
  const wrapper = shallow(
    <App />
  )

  t.deepEqual(wrapper.find('.appContainer').length, 1);
});
