import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLeaderBoardData } from '../actions/index' 

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class LeaderBoardContainer extends Component {

  componentDidMount() {
    if(this.props.leaderBoardUpdated === true) {
      this.props.fetchLeaderboard(this.props.dashboard_token, this.props.courseId);
    }
  }

  componentWillUpdate(nextProps) {
    if(nextProps.leaderboardUpdated !== this.props.leaderBoardUpdated) {
      this.props.fetchLeaderboard(this.props.dashboard_token, this.props.courseId);
    } 
  }

  render() {
    const columns = [
      {
        columns: [
          {
            Header: "Opiskelija id",
            accessor: "user_id",
            Cell: row =>(
              <div
                style={{
                  height: '100%',
                  //change 15653 to user_id decoded from token when this property is available
                  backgroundColor: row.value === 15653 ? 'rgba(0,255,0, 0.5)' : 'initial' 
                }}
             >{row.value}</div>
            )

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
    leaderBoardData: state.APIcalls.leaderBoardData,
    courseId : state.courseData.courseId,
    dashboard_token: state.APIcalls.dashboard_token,
    leaderboardUpdated: state.APIcalls.leaderboardUpdated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLeaderboard: (token, courseId) => dispatch(fetchLeaderBoardData(token, courseId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardContainer);
