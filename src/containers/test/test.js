<<<<<<< HEAD:src/test/test.js
=======


>>>>>>> f06c90118bd37c4efaea229b01765ad4859f5717:src/containers/test/test.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';
import UserCoursePoints from '../UserCoursePoints.js';
var assert = require('assert');

describe('UserCoursePoints', () => {

    const mockState = {
        coursePoints : null
    };

    const mockStore = configureStore();
    const store = mockStore(mockState);
    const wrapper = shallow(
      <Provider store={store}>
        <UserCoursePoints />
      </Provider>
    );

  it('renders a container component', () => {
    expect(wrapper.find(UserCoursePoints).length).to.equal(1);
  });
});
