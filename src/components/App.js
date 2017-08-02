import React from "react";
import "../App.css";
import FilterWidget from "../containers/FilterWidget";
import { NavBar } from "./NavBar";
import { connectBackend } from "../actions/index";
import { fetchDailyPoints } from "../actions/index";
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.props.connectBackend();
  }

  componentWillUpdate(nextProps) {
   if(nextProps.dashboard_token) {
     this.props.fetchDailyPoints();
    }
  }

  render() {
    return (
      <div className="appContainer">
        <NavBar />
        <div className="WidgetContainer">
          <FilterWidget />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dashboard_token: state.dashboard_token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    connectBackend: () => dispatch(connectBackend()),
    fetchDailyPoints: (token) => dispatch(fetchDailyPoints(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);