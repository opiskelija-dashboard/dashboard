import test from "ava";
import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";

import { Chart } from "../Chart";

test("component renders", t => {
  const data = [
    {
      date: "2017-01-16",
      users_points: 0,
      everyones_average: 2,
      everyone_count: 58,
      all_points_count: 159
    },
    {
      date: "2017-01-17",
      users_points: 0,
      everyones_average: 2,
      everyone_count: 103,
      all_points_count: 300
    }
  ];
  window.HTMLCanvasElement.prototype.getContext = null;
  const wrapper = mount(<Chart progressData={data} />);

  t.deepEqual(wrapper.find("div").length, 1);
});
