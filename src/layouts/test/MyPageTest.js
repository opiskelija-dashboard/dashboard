import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import { MyPage } from '../MyPageLayout'

test('component renders', t => {
  const wrapper = shallow(
    <MyPage />
  )

  t.deepEqual(wrapper.find('.center').length, 1);
});
