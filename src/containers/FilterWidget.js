import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { LeaderBoard } from '../layouts/LeaderBoardLayout'
import { Badges } from '../layouts/BadgesLayout'
import { AdminPage } from '../layouts/AdminPageLayout'
import MyPageGridLayout from '../layouts/MyPageGrid'

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
          <MyPageGridLayout />
        )
      case "Admin page":
        return (
          <AdminPage />
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
