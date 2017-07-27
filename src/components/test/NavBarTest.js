import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import { NavBar } from '../NavBar'
import ButtonContainer from '../../containers/ButtonContainer'

test('renders three ButtonContainers', t => {
  const wrapper = shallow(
    <NavBar />
  )

  t.deepEqual(wrapper.find(ButtonContainer).length, 3);
});
