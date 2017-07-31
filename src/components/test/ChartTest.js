import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import { Chart } from '../Chart'

test('component renders', t => {
  const wrapper = shallow(
    <Chart />
  )

  t.deepEqual(wrapper.find('div').length, 1);
});
