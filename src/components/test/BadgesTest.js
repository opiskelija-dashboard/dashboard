import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import { Badges } from '../Badges'

test('component renders', t => {
  const wrapper = shallow(
    <Badges />
  )

  t.deepEqual(wrapper.find('div').length, 1);
});
