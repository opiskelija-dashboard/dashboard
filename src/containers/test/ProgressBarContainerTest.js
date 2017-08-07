import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import ProgressBarContainer from '../ProgressBarContainer'

test.beforeEach(t => {
  const mockStore = configureStore();

  const initialState = {
    APIcalls: {
      skillsData: ["random"]
    }
  };

  t.context.store = mockStore(initialState);
});

test('component renders correctly', t => {
  const wrapper = mount(
    <Provider store={t.context.store} >
      <ProgressBarContainer />
    </Provider>
  )

  t.deepEqual(wrapper.find('.progressBarContainer').length, 1);
});
