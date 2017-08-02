import React from "react";
import "../App.css";
import ChartContainer from "../containers/ChartContainer";
import ProgressBarContainer from "../containers/ProgressBarContainer";

export const MyPage = () => (
  <div className="center">
    <div className="WidgetContainer">
      <ChartContainer />
    </div>

    <div className="WidgetContainer">
      <ProgressBarContainer />
    </div>

  </div>
)
