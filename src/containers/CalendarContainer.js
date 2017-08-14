import React, { Component } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
// import { connect } from "react-redux";

export default class CalendarContainer extends Component {
  render() {
    const endDate = new Date("2017-08-12");
    const numDays = 7;
    const values = [
      { date: "2017-08-01", count: 1 },
      { date: "2017-08-02", count: 4 },
      { date: "2017-08-03", count: 2 },
      { date: "2017-08-04", count: 3 },
      { date: "2017-08-05", count: 1 },
      { date: "2017-08-06", count: 1 },
      { date: "2017-08-07", count: 4 },
      { date: "2017-08-08", count: 3 },
      { date: "2017-08-09", count: 2 },
      { date: "2017-08-10", count: 4 },
      { date: "2017-08-11", count: 2 }
    ];
    const value = value => {
      if (!value) {
        return "color-empty";
      }
      return `color-dashboard-${value.count}`;
    };

    return (
      <CalendarHeatmap
        horizontal={false}
        showMonthLabels={false}
        endDate={endDate}
        numDays={numDays}
        values={values}
        classForValue={value}
      />
    );
  }
}
