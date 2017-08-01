import React from "react";
import "../App.css";
import ChartContainer from "../containers/ChartContainer";
import ProgressBarContainer from "../containers/ProgressBarContainer";

export const MyPage = () => (
  <div className="center">
    <ChartContainer />

    <ProgressBarContainer />
  </div>
)
