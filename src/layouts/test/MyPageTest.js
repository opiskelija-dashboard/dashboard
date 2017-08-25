import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import MyPageGrid from '../MyPageGrid'

test('component renders', t => {
  const wrapper = shallow(
    <MyPageGrid />
  )

  t.deepEqual(wrapper.find('#MyPageGrid').length, 1);
});
