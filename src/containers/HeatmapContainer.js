import React, { Component } from "react";
import {Heatmap} from '../components/Heatmap'
import Moment from 'moment'
<<<<<<< HEAD:src/containers/HeatmapContainer.js
// import { connect } from "react-redux";

export default class HeatmapContainer extends Component {
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
        <Heatmap
          endDate={v[6].date}
          numDays={numDays}
          values={v}
        />
        <Heatmap
          endDate={v[6].date}
          numDays={numDays}
          values={v}
        />
      </div>
    )
=======
import { connect } from 'react-redux'
import { ThreeBounce } from 'better-react-spinkit'

class CalendarContainer extends Component {

  userData(avgData, userData) {
    let allWeeks = [];
    //active course dates in ascending order 
    let dateKeys = Object.keys(avgData);
    dateKeys.sort();
    let startDow = Moment(dateKeys[0]).day();
    while(dateKeys[0]){
      //number of active course days on calendar week (1st week may be short)
      let daysInNextWeek = 7-startDow;
      let nextWeek = dateKeys.splice(0, daysInNextWeek);
      let weekData = nextWeek.map((day, index) => {
        if(userData[day]) {
          return { date: day , count: userData[day] };
        } else {
          return { date: day, count: 0}
        }
      })
      allWeeks.push(weekData);
      //all the following weeks start from sunday
      startDow = 0;
    }
    return allWeeks;
  };

  averageData(avgData) {
    let allWeeks = [];
    let dateKeys = Object.keys(avgData);
    dateKeys.sort();
    let startDow = Moment(dateKeys[0]).day();
    while(dateKeys[0]){
      let daysInNextWeek = 7-startDow;
      let nextWeek = dateKeys.splice(0, daysInNextWeek);
      let week = nextWeek.map((day) => {
        return { date: day , count: avgData[day] }
      })
      allWeeks.push(week);
      startDow = 0;
    }
    return allWeeks;
  };

  renderCalendars() {
    const averageWeeks = this.averageData(this.props.heatMapAverageData);
    const userWeeks = this.userData(this.props.heatMapAverageData, this.props.heatMapData);
    let calendars = averageWeeks.map((avgWeek, weekIndex) => {
      let start = Moment(avgWeek[0].date, "YYYY-MM-DD");
      let end = Moment(avgWeek[avgWeek.length-1].date, "YYYY-MM-DD");
      return(
        <div key={weekIndex} className="CalendarWeek">
          <p className="week-label"> {start.week() + ' '} 
            <span className="date-range">
                ({ start.format("DD.MM.") } - 
                { ' '+ end.format("DD.MM.") })
            </span>
          </p>
          <Calendar id="userCalendar"
            endDate={userWeeks[weekIndex][userWeeks[weekIndex].length-1].date}
            numDays={userWeeks[weekIndex].length}
            values={userWeeks[weekIndex]}
          />
          <Calendar id="avgCalendar"
            endDate={avgWeek[avgWeek.length-1].date}
            numDays={avgWeek.length}
            values={avgWeek}
          />
        </div>)
    })
    return calendars;
  }
  
>>>>>>> 34993c660cdf985fead497d122025f4b81dcfe09:src/containers/CalendarContainer.js

  render() {      
    const userIsFetching = this.props.userIsFetching;
    const averageIsFetching = this.props.averageIsFetching;
    const fetchError = this.props.fetchError;

    return (
      <div>
        { fetchError &&
          <div>Tietoa haettaessa tapahtui virhe. Yritä myöhemmin uudestaan.</div>
        }
        { (userIsFetching || averageIsFetching) && !fetchError &&
          <ThreeBounce size={40} />
        }
        { !(userIsFetching || averageIsFetching || fetchError) &&
          <div>
            <p>Tumma väri kertoo aktiivisuudesta kyseisenä päivänä.</p>
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
        
            {this.renderCalendars()}

          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    heatMapData: state.heatMap.userData,
    heatMapAverageData: state.heatMap.averageData,
    fetchError: state.heatMap.fetchError,
    userIsFetching: state.heatMap.userIsFetching,
    averageIsFetching: state.heatMap.averageIsFetching
  }
}


export default connect(mapStateToProps, null)(CalendarContainer);