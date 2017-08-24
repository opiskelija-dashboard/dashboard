import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import Heatmap from '../Heatmap';
import CalendarHeatmap from "react-calendar-heatmap";

test.skip('renders without crashing', t => {
  const wrapper = shallow(
    <Heatmap
      endDate={new Date()}
      numDays={7}
      values={[]}
    />
  )

  t.deepEqual(wrapper.find(CalendarHeatmap).length(), 1);
});
