import React, { Component } from "react";
import { connect } from "react-redux";
import { LeaderBoard } from "../components/LeaderBoard";

class LeaderBoardContainer extends Component {
  render() {
    //dummy data
    const columns = [
      {
        columns: [
          {
            Header: "Opiskelija id",
            accessor: "id"
          },
          {
            Header: "Pisteet",
            accessor: "points"
          }
        ]
      }
    ];

    return <LeaderBoard data={this.props.leaderBoardData} columns={columns} />;
  }
}

const mapStateToProps = state => {
  return {
    leaderBoardData: state.APIcalls.leaderBoardData
  };
};

export default connect(mapStateToProps, null)(LeaderBoardContainer);
