

import React from 'react';
import { shallow, mount } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';
import NavButton from '../NavButton';
var assert = require('assert');

describe('NavButton', () => {

    const mockState = {
        filter: null
    };

    const mockStore = configureStore();
    const store = mockStore(mockState);
    const wrapper = shallow(
      <Provider store={store}>
        <NavButton text="testi" />
      </Provider>
    );

  it('renders a container component', () => {
    expect(wrapper.find(NavButton).length).to.equal(1);
  });
});
