import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { LeaderBoard } from '../components/LeaderBoard'
import { Badges } from '../components/Badges'
import { MyPage } from '../components/MyPage'

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
          <p>Väärin painettu nappia</p>
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
