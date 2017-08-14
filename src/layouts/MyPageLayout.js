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

    <div className="WidgetContainer CalendarContainer">
      <div className="asdasd">
        Viikko 1
        <CalendarContainer />
      </div>
      <div className="asdasd">
        <CalendarContainer />
      </div>
      <div className="asdasd">
        <CalendarContainer />
      </div>
      <div className="asdasd">
        <CalendarContainer />
      </div>
    </div>
  </div>;
