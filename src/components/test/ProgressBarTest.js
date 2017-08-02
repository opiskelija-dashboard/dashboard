import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import { ProgressBar } from '../ProgressBar'
import { ProgressBar as BootStrapProgressBar } from "react-bootstrap";

test('component renders', t => {
  const wrapper = shallow(
    <ProgressBar />
  )

  t.deepEqual(wrapper.find(BootStrapProgressBar).length, 2);
});
