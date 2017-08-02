import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import { ProgressBar } from '../ProgressBar'

test('component renders', t => {
  const wrapper = shallow(
    <ProgressBar />
  )

  t.deepEqual(value, expected, 'message');
});
