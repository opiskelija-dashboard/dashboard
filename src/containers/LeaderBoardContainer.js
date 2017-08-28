import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLeaderBoardData } from '../actions/index'
import { ThreeBounce } from "better-react-spinkit";
import jwt_decode from 'jwt-decode';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class LeaderBoardContainer extends Component {

  modifyTableData(storeData) {
    let ownData = null;
    let ownIndex = 100;
    for(var i=0; i < storeData.length; i++) {
      if(storeData[i].user_id === jwt_decode(this.props.dashboard_token).tmcuid) {
        ownData = storeData[i];
        ownIndex = i;
      }
    }
    if(storeData.length > 9) {
      let data = storeData.slice(0,10);
      if(ownIndex > 9) data.push(ownData);
      return data;
    } else {
      return storeData.slice(0);
    }
  }

  componentDidMount() {
    if(this.props.leaderboardUpdated === true) {
      this.props.fetchLeaderboard(this.props.dashboard_token, this.props.courseId);
    }
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.leaderboardUpdated === false && nextProps.leaderboardUpdated === true) {
      this.props.fetchLeaderboard(nextProps.dashboard_token, nextProps.courseId);
      return false;
    }
    return true;
  }

  render() {
    const columns = [
      {
        columns: [
          {
            Header: "Sijoitus",
            accessor: "index",
            Cell: row =>{
              if(row.original.user_id === jwt_decode(this.props.dashboard_token).tmcuid) {
                return (
                  <div>{row.value}.  [{jwt_decode(this.props.dashboard_token).tmcusr}]</div>
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

    const data = this.modifyTableData(this.props.leaderBoardData);

    const table = (
      <ReactTable
        getTrProps = {(state, rowInfo, column) => {
          if(rowInfo) {
            return {
              style: {
                background: (() => {
                  if(rowInfo.original.user_id === jwt_decode(this.props.dashboard_token).tmcuid) {
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
        data={data}
        columns={columns}
        showPagination={false}
        pageSizeOptions={[data.length]}
        defaultPageSize={data.length}
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
    )

    const isFetching = this.props.isFetching;

    return (
      <div>
        {isFetching &&
          <ThreeBounce size={40} />
        }

        {!isFetching &&
          table
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    leaderBoardData: state.points.leaderBoardData,
    courseId : state.courseData.courseId,
    dashboard_token: state.APIcalls.dashboard_token,
    leaderboardUpdated: state.points.leaderboardUpdated,
    isFetching: state.points.leaderBoardFetch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLeaderboard: (token, courseId) => dispatch(fetchLeaderBoardData(token, courseId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardContainer);
