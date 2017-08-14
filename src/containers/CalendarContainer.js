import React, { Component } from "react";
import {Calendar} from '../components/Calendar'
// import { connect } from "react-redux";

export default class CalendarContainer extends Component {
  render() {
    const endDate = new Date("2017-08-12");
    const numDays = 7;
    const weeks = [
    [
      { date: "2017-08-06", count: 1},
      { date: "2017-08-07", count: 1},
      { date: "2017-08-08", count: 4},
      { date: "2017-08-09", count: 3},
      { date: "2017-08-10", count: 2},
      { date: "2017-08-11", count: 4},
      { date: "2017-08-12", count: 2}
    ],
    [
      { date: "2017-08-06", count: 3},
      { date: "2017-08-07", count: 3},
      { date: "2017-08-08", count: 2},
      { date: "2017-08-09", count: 1},
      { date: "2017-08-10", count: 4},
      { date: "2017-08-11", count: 2},
      { date: "2017-08-12", count: 1}
    ]];

    const renderCalendars = weeks.map((v, index) =>
      <div key={index} className="CalendarWeek">
        <p style={{fontSize: 20}}>Viikkonumero</p>
        <Calendar
          endDate={endDate}
          numDays={numDays}
          values={v}
        />
        <Calendar
          endDate={endDate}
          numDays={numDays}
          values={v}
        />
      </div>
    )
    

    return (
      <div>

        {renderCalendars}
      </div>
    );
  }
}
