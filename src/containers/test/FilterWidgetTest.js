import test from "ava";
import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import sinon from "sinon";

import FilterWidget from "../FilterWidget";
import { LeaderBoard } from "../../layouts/LeaderBoardLayout";
import { Badges } from "../../layouts/BadgesLayout";

test.beforeEach(t => {
  const mockStore = configureStore();
  const initialState = {
    widgets: { filter: "random" },
    APIcalls: { id: "joku", points: "10" }
   };
  t.context.store = mockStore(initialState);
});

test("component renders", t => {
  const wrapper = mount(
    <Provider store={t.context.store}>
      <FilterWidget />
    </Provider>
  );

  t.deepEqual(wrapper.find(FilterWidget).length, 1);
});

// Näissä täytyy tehdä uudet storet, koska mock storen statea
// ei ilmeisesti pysty vaihtamaan lennosta

test("when state is 'Leaderboard' LeaderBoard -component renders", t => {
  const mockStore = configureStore();
  const initialState = {
    widgets: { filter: "Leaderboard" },
    APIcalls: {
      leaderBoardData: [{ user_id: "joku", points: "10" }],
      dashboard_token: "adasd",
      leaderboardUpdated: false
    },
    courseData: {
      courseId: 214
    }
   };
  const store = mockStore(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <FilterWidget />
    </Provider>
  );

  t.deepEqual(wrapper.find(LeaderBoard).length, 1);
});

test("when state is 'Badget' Badges -component renders", t => {
  const mockStore = configureStore();
  const initialState = {
    widgets: { filter: "Badget" },
    APIcalls: { id: "joku", points: "10" }
   };
  const store = mockStore(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <FilterWidget />
    </Provider>
  );

  t.deepEqual(wrapper.find(Badges).length, 1);
});
