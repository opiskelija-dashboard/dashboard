import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import { ProgressBar } from '../ProgressBar'
import { Progress } from "semantic-ui-react";

test('component renders two bars', t => {
  const wrapper = shallow(
    <ProgressBar />
  )

  t.deepEqual(wrapper.find(Progress).length, 2);
});
