import React from "react";
import "../App.css";
import FilterWidget from "../containers/FilterWidget";
import { NavBar } from "../components/NavBar";
import {
  connectBackend,
  fetchDailyPoints,
  fetchSkillsData,
  fetchLeaderBoardData,
  fetchBadgeData,
  setCourseId,
  updateLeaderboard,
  fetchHeatMapData,
  fetchHeatMapAverageData
} from "../actions/index";
import { connect } from "react-redux";
// import { ThreeBounce } from "better-react-spinkit";
import { COURSE_ID } from "../config";

class App extends React.Component {

  componentDidMount() {
    /* this call currently sets the course id (from config file). course ids can be foud in shadow-ohpe source code
    /assets/js/student-dashboard.js and later we might use those (on the other hand, we were told
    by the customer that we can assume that we're on a certain course all the time) */
    this.props.setCourseId(COURSE_ID);
    this.props.connectBackend();
  }

  fetchData(nextProps) {
    this.props.fetchSkillsData(nextProps.dashboard_token, nextProps.courseId);
    this.props.fetchHeatMapData(nextProps.dashboard_token, nextProps.courseId);
    this.props.updateLeaderboard(nextProps.dashboard_token,nextProps.courseId);
    this.props.fetchDailyPoints(nextProps.dashboard_token, nextProps.courseId);
    this.props.fetchHeatMapAverageData(nextProps.dashboard_token, nextProps.courseId);

    if (this.props.tmcadm) {
      this.adminFetches(nextProps);
    }
  }

  adminFetches(nextProps) {
    this.props.fetchBadgeData(nextProps.dashboard_token);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isFetching !== this.props.isFetching ||
      nextProps.fetchError !== this.props.fetchError) {
      return;
    }
    if(nextProps.dashboard_token && nextProps.courseId) {
      this.fetchData(nextProps);
    }
  }

  render() {
    return (
      <div className="appContainer">
        <NavBar admin={this.props.tmcadm}/>
        <div className="Container">
          <FilterWidget />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dashboard_token: state.APIcalls.dashboard_token,
    fetchError: state.points.fetchError,
    isFetching: state.points.isFetching,
    courseId: state.courseData.courseId,
    tmcadm: state.APIcalls.tmcadm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    connectBackend: () => dispatch(connectBackend()),
    fetchBadgeData: (token, courseId) => dispatch(fetchBadgeData(token, courseId)),
    fetchDailyPoints: (token, courseId) => dispatch(fetchDailyPoints(token, courseId)),
    fetchSkillsData: (token, courseId) => dispatch(fetchSkillsData(token, courseId)),
    fetchLeaderBoardData: (token, courseId) => dispatch(fetchLeaderBoardData(token, courseId)),
    setCourseId: (id) => dispatch(setCourseId(id)),
    updateLeaderboard: (token, courseId) => dispatch(updateLeaderboard(token, courseId)),
    fetchHeatMapData: (token, courseId) => dispatch(fetchHeatMapData(token, courseId)),
    fetchHeatMapAverageData: (token, courseId) => dispatch(fetchHeatMapAverageData(token, courseId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
