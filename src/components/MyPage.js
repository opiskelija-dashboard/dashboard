import React from "react";
import "../App.css";
import Chart from "./Chart";

export const MyPage = () =>
  <div>
    <h1>Oma sivu</h1>
    <hr />
    <Chart>
      <canvas
        height="360"
        width="720"
        style="display: block; width: 720px; height: 360px;"
      />
    </Chart>
  </div>;
