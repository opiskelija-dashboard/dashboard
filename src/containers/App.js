import React from "react";
import "../App.css";
import FilterWidget from "../containers/FilterWidget";
import { NavBar } from "../components/NavBar";
import { connectBackend, fetchDailyPoints, fetchSkillsData } from "../actions/index";
import { connect } from 'react-redux';
import {Alert} from 'react-bootstrap'
import { ThreeBounce } from 'better-react-spinkit'

class App extends React.Component {
  componentDidMount() {
    this.props.connectBackend();
  }

  componentWillUpdate(nextProps) {
    if(nextProps.dashboard_token) {
      this.props.fetchDailyPoints(nextProps.dashboard_token);
      this.props.fetchSkillsData(nextProps.dashboard_token);
    }
  }

  render() {
    const fetchError = this.props.fetchError;
    const isFetching = this.props.isFetching;

    return (
      <div className="appContainer">
        {fetchError &&
          <div className="marginTop">
            <Alert bsStyle="warning">
              <p>Virhe ladattaessa tietoja palvelimelta!</p>
              <p>Olethan kirjautunut sisään?</p>
            </Alert>
          </div>
        }
        {isFetching && !fetchError &&
          <div className="marginTop">
            <ThreeBounce size={40} />
          </div>
        }

        {!isFetching &&
          <div>
            <NavBar />
            <div className="Container">
              <FilterWidget />
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dashboard_token: state.APIcalls.dashboard_token,
    fetchError: state.APIcalls.fetchError,
    isFetching: state.APIcalls.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    connectBackend: () => dispatch(connectBackend()),
    fetchDailyPoints: (token) => dispatch(fetchDailyPoints(token)),
    fetchSkillsData: (token) => dispatch(fetchSkillsData(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
