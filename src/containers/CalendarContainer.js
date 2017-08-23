import React, { Component } from "react";
import {Calendar} from '../components/Calendar'
import Moment from 'moment'
import { connect } from 'react-redux'

class CalendarContainer extends Component {

  userData(avgData, userData) {
    let arr = [];
    let keys = Object.keys(avgData);
    keys.sort();
    let startDow = Moment(keys[0]).day();
    while(keys[0]){
      let daysInWeek = 7-startDow;
      let nextWeek = keys.splice(0, daysInWeek);
      let week = [];
      for(let i = 0 ; i < nextWeek.length; i++) {
        if(userData[nextWeek[i]]) {
          week.push({ date: nextWeek[i] , count: userData[nextWeek[i]]});
        } else {
          week.push({ date: nextWeek[i], count: 0})
        }
      }
      arr.push(week);
      startDow = 0;
    }
    return arr;
  };

  averageData(data) {
    let wks = [];
    let keys = Object.keys(data);
    keys.sort();
    let startDow = Moment(keys[0]).day();
    while(keys[0]){
      let daysInWeek = 7-startDow;
      let nextWeek = keys.splice(0, daysInWeek);
      let week = [];
      for(let i = 0 ; i < nextWeek.length; i++) {
        week.push({ date: nextWeek[i] , count: data[nextWeek[i]]});
      }
      wks.push(week);
      startDow = 0;
    }
    return wks;
  };


  render() {
    const averageWeeks = this.averageData(this.props.heatMapAverageData);
    const userWeeks = this.userData(this.props.heatMapAverageData, this.props.heatMapData);

    const renderCalendars = () => {
      let calendars = [];
      for(let i = 0; i < averageWeeks.length; i++) {
        let start = Moment(averageWeeks[i][0].date, "YYYY-MM-DD");
        let end = Moment(averageWeeks[i][averageWeeks[i].length-1].date, "YYYY-MM-DD");

        calendars.push(
          <div key={i} className="CalendarWeek">
            <p style={{fontSize: 20}}>{start.week() +' '} 
              <span style={{fontSize: 16}}>
                 ({start.format("DD.MM")} - 
                 {' '+ end.format("DD.MM")})
              </span>
            </p>
            <Calendar
              endDate={userWeeks[i][userWeeks[i].length-1].date}
              numDays={userWeeks[i].length}
              values={userWeeks[i]}
            />
            <Calendar
              endDate={averageWeeks[i][averageWeeks[i].length-1].date}
              numDays={averageWeeks[i].length}
              values={averageWeeks[i]}
            />
          </div>)
      }
      return calendars;
    }

    return (
      <div>
        <div className="CalendarWeek">
          <p>Viikko</p>
          <p>Oma aktiivisuutesi</p>
          <p>Kurssin keskiarvoaktiivisuus</p>
        </div>
        <div className="CalendarWeek">
          <div>&nbsp;</div>
          <div>
          <div className="day-labels">
            <div className="day">Su</div>
            <div className="day">Ma</div>
            <div className="day">Ti</div>
            <div className="day">Ke</div>
            <div className="day">To</div>
            <div className="day">Pe</div>
            <div className="day">La</div>
          </div>
          </div>
          <div>
            <div className="day-labels">
            <div className="day">Su</div>
            <div className="day">Ma</div>
            <div className="day">Ti</div>
            <div className="day">Ke</div>
            <div className="day">To</div>
            <div className="day">Pe</div>
            <div className="day">La</div>
          </div>
          </div>
        </div>
        {renderCalendars()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    heatMapData: state.heatMapData.userData,
    heatMapAverageData: state.heatMapData.averageData,
  }
}


export default connect(mapStateToProps, null)(CalendarContainer);