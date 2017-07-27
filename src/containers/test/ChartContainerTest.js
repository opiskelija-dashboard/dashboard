import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import ChartContainer from '../ChartContainer';
import { Chart } from '../../components/chart'

test('renders chart', t => {
  const wrapper = shallow(
    <ChartContainer />
  )

  t.deepEqual(wrapper.find(Chart).length, 1);
});
