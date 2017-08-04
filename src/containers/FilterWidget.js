import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import LeaderBoardContainer from '../containers/LeaderBoardContainer'
import { Badges } from '../components/Badges'
import { MyPage } from '../components/MyPage'

class FilterWidget extends Component {
  render() {
    switch (this.props.filter) {
      case "Leaderboard":
        return (
          <LeaderBoardContainer />
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
          <p>Väärin painettu nappia</p>
        )
    }
  }
}


const mapStateToProps = state => {
  return {
    filter: state.Widgets.filter
  }
}


export default connect(mapStateToProps, null)(FilterWidget);
