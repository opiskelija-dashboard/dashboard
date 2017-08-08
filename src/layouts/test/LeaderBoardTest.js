import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import { LeaderBoard } from '../LeaderBoardLayout'

test('component renders', t => {
  const wrapper = shallow(
    <LeaderBoard />
  )

  t.deepEqual(wrapper.find('div').length, 1);
});
