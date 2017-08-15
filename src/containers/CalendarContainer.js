import React, { Component } from "react";
import {Calendar} from '../components/Calendar'
import Moment from 'moment'
// import { connect } from "react-redux";

export default class CalendarContainer extends Component {
  render() {
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
      { date: "2017-08-13", count: 3},
      { date: "2017-08-14", count: 3},
      { date: "2017-08-15", count: 2},
      { date: "2017-08-16", count: 1},
      { date: "2017-08-17", count: 4},
      { date: "2017-08-18", count: 2},
      { date: "2017-08-19", count: 1}
    ]];

    const renderCalendars = weeks.map((v, index) =>
      <div key={index} className="CalendarWeek">
        <p style={{fontSize: 20}}>{Moment(v[0].date, "YYYY-MM-DD").week()}</p>
        <Calendar
          endDate={v[6].date}
          numDays={numDays}
          values={v}
        />
        <Calendar
          endDate={v[6].date}
          numDays={numDays}
          values={v}
        />
      </div>
    )


    return (
      <div>
        <div className="CalendarWeek">
          <p>Viikkonumero</p>
          <p>Oma aktiivisuutesi</p>
          <p>Kurssin keskiarvoaktiivisuus</p>
        </div>

        {renderCalendars}
      </div>
    );
  }
}
