import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import ProgressBarContainer from '../ProgressBarContainer'

test('component renders correctly', t => {
  const wrapper = shallow(
    <ProgressBarContainer />
  )

  t.deepEqual(wrapper.find('.progressBarContainer').length, 1);
});
