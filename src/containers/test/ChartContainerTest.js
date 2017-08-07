import test from "ava";
import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import ChartContainer from "../ChartContainer";
import { Chart } from "../../components/Chart";



test.beforeEach(t => {
  const mockStore = configureStore();

  const initialState = {
    APIcalls: {
      progressData: [],
      progressLabels: [],
      maxpoints: 20
    }
  };

  t.context.store = mockStore(initialState);
});

test("renders without crashing", t => {
  const wrapper = shallow(
    <Provider store={t.context.store}>
      <ChartContainer />
    </Provider>
  );
  t.deepEqual(wrapper.find(ChartContainer).length, 1);
});

test("chartcontainer renders chart", t => {
  window.HTMLCanvasElement.prototype.getContext = null;

  const wrapper = mount(
    <Provider store={t.context.store}>
      <ChartContainer />
    </Provider>
  );
  t.deepEqual(wrapper.find(Chart).length, 1);
});
