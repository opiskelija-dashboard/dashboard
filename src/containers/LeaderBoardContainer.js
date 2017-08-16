import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLeaderBoardData } from '../actions/index' 

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class LeaderBoardContainer extends Component {

  componentDidMount() {
    if(this.props.leaderboardUpdated === true) {
      this.props.fetchLeaderboard(this.props.dashboard_token, this.props.courseId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.leaderboardUpdated === false && nextProps.leaderboardUpdated === true) {
      this.props.fetchLeaderboard(nextProps.dashboard_token, nextProps.courseId);
    }
  }

  render() {
    const columns = [
      {
        columns: [
          {
            Header: "Sijoitus",
            accessor: "index",
            Cell: row =>{
              if(row.original.user_id === 15653) {
                return (
                  <div>{row.value}.  [ohtu_dashboard]</div>
                )
              }
              return(
                <div>{row.value}.</div>
              )
              }

          },
          {
            Header: "Pisteet",
            accessor: "points",
            sortable: false
          }
        ]
      }
    ];

    return (
      <ReactTable
        getTrProps = {(state, rowInfo, column) => {
          if(rowInfo) {
            return {
              style: {
                background: (() => {
                  if(rowInfo.original.user_id === 15653) {
                    return 'rgba(0,255,0,0.5)'
                  } else if(rowInfo.index % 2 !== 0){
                    return 'rgb(240, 240, 240)'
                  } else {
                    return 'rgb(247,247,247)';
                  } 
                })()
              }
            }
          } else {
            return {
              style: {
                background: 'initial'
              }
            }
          }
        }}
        data={this.props.leaderBoardData}
        columns={columns}
        showPagination={false}
        pageSizeOptions={[this.props.leaderBoardData.length]}
        defaultPageSize={this.props.leaderBoardData.length}
        className="-striped -highlight"
        defaultSorted={[
          {
            id: "points",
            desc: true
          },
          {
            id: "index",
            asc: true
          }
        ]}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    leaderBoardData: (() => {
      let ownData = null;
      let ownIndex = 100;
      for(var i=0; i<state.APIcalls.leaderBoardData.length; i++) {
        if(state.APIcalls.leaderBoardData[i].user_id === 15653) {
          ownData = state.APIcalls.leaderBoardData[i];
          ownIndex = i;
        }
      }
      if(state.APIcalls.leaderBoardData.length > 9) {
        let data = state.APIcalls.leaderBoardData.slice(0,10);
        if(ownIndex > 9) data.push(ownData);
        return data;
      } else {
        return state.APIcalls.leaderBoardData
      }
    })(),

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
