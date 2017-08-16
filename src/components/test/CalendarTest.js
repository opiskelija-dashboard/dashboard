import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';

import Calendar from '../Calendar';

test.skip('renders without crashing', t => {
  const wrapper = shallow(
    <Calendar
      endDate={new Date()}
      numDays={7}
      values={[]}
    />
  )

  t.deepEqual(wrapper.find('.asdasd').length(), 1);
});
