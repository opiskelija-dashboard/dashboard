import React from "react";
import "../App.css";
import ChartContainer from "../containers/ChartContainer";
import ProgressBarContainer from "../containers/ProgressBarContainer";
import CalendarContainer from "../containers/CalendarContainer";

export const MyPage = () =>
  <div className="center">
    <div className="WidgetContainer">
      <ChartContainer />
    </div>

    <div className="WidgetContainer">
      <ProgressBarContainer />
    </div>

    <div className="WidgetContainer">

      <p>Päivän tummuus kertoo aktiivisuudestasi</p>

      <CalendarContainer />

    </div>
  </div>
