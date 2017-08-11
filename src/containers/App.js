import React from "react";
import "../App.css";
import FilterWidget from "../containers/FilterWidget";
import { NavBar } from "../components/NavBar";
import {
  connectBackend,
  fetchDailyPoints,
  fetchSkillsData,
  fetchLeaderBoardData,
  setCourseId
} from "../actions/index";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import { ThreeBounce } from "better-react-spinkit";

class App extends React.Component {
  componentDidMount() {
    this.props.setCourseId('214');
    this.props.connectBackend();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.dashboard_token && nextProps.courseId) {
      this.props.fetchDailyPoints(nextProps.dashboard_token, nextProps.courseId);
      this.props.fetchSkillsData(nextProps.dashboard_token, nextProps.courseId);
      this.props.fetchLeaderBoardData(nextProps.dashboard_token, nextProps.courseId);
    }
  }

  render() {
    const fetchError = this.props.fetchError;
    const isFetching = this.props.isFetching;

    return (
      <div className="appContainer">
        {fetchError &&
          <div className="marginTop">
            <Segment>
              <p>Virhe ladattaessa tietoja palvelimelta!</p>
              <p>Olethan kirjautunut sisään?</p>
            </Segment>
          </div>}
        {isFetching &&
          !fetchError &&
          <div className="marginTop">
            <ThreeBounce size={40} />
          </div>}

        {!isFetching &&
          <div>
            <NavBar />
            <div className="Container">
              <FilterWidget />
            </div>
          </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dashboard_token: state.APIcalls.dashboard_token,
    fetchError: state.APIcalls.fetchError,
    isFetching: state.APIcalls.isFetching,
    courseId: state.courseData.courseId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    connectBackend: () => dispatch(connectBackend()),
    fetchDailyPoints: (token, courseId) => dispatch(fetchDailyPoints(token, courseId)),
    fetchSkillsData: (token, courseId) => dispatch(fetchSkillsData(token, courseId)),
    fetchLeaderBoardData: (token, courseId) => dispatch(fetchLeaderBoardData(token, courseId)),
    setCourseId: (id) => dispatch(setCourseId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
