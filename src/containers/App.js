import React from "react";
import "../App.css";
import FilterWidget from "../containers/FilterWidget";
import { NavBar } from "../components/NavBar";
import {
  connectBackend,
  fetchDailyPoints,
  fetchSkillsData,
  fetchLeaderBoardData
} from "../actions/index";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import { ThreeBounce } from "better-react-spinkit";

class App extends React.Component {
  componentDidMount() {
    this.props.connectBackend();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.dashboard_token) {
      this.props.fetchDailyPoints(nextProps.dashboard_token);
      this.props.fetchSkillsData(nextProps.dashboard_token);
      this.props.fetchLeaderBoardData(nextProps.dashboard_token);
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
    isFetching: state.APIcalls.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    connectBackend: () => dispatch(connectBackend()),
    fetchDailyPoints: token => dispatch(fetchDailyPoints(token)),
    fetchSkillsData: token => dispatch(fetchSkillsData(token)),
    fetchLeaderBoardData: token => dispatch(fetchLeaderBoardData(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
