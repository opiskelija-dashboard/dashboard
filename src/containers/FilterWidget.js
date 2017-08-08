import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { LeaderBoard } from '../layouts/LeaderBoard'
import { Badges } from '../layouts/Badges'
import { MyPage } from '../layouts/MyPage'

class FilterWidget extends Component {
  render() {
    switch (this.props.filter) {
      case "Leaderboard":
        return (
          <LeaderBoard />
        )
      case "Badget":
        return (
          <Badges />
        )
      case "Oma sivu":
        return (
          <MyPage />
        )
      default:
        return (
          <p>Error</p>
        )
    }
  }
}


const mapStateToProps = state => {
  return {
    filter: state.widgets.filter
  }
}


export default connect(mapStateToProps, null)(FilterWidget);
