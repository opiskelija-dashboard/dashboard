import React, { Component } from "react";
import { connect } from "react-redux";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

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

    return (
      <ReactTable
        data={this.props.leaderBoardData}
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight"
        defaultSorted={[
          {
            id: "points",
            desc: true
          }
        ]}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    leaderBoardData: state.APIcalls.leaderBoardData
  };
};

export default connect(mapStateToProps, null)(LeaderBoardContainer);
