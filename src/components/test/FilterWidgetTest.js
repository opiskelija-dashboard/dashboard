

import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect, html } from 'chai';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import FilterWidget from '../FilterWidget';
var assert = require('assert');

describe('FilterWidget', () => {

    const mockState = {
        filter: 'asdasd'
    };

    const mockStore = configureStore();
    const store = mockStore(mockState);
    const wrapper = shallow(
      <Provider store={store}>
        <FilterWidget />
      </Provider>
    );

  it('renders a container component', () => {
    expect(wrapper.type()).to.equal('p');
  });
});
