import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLeaderBoardData } from '../actions/index' 

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class LeaderBoardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {tableData: this.modifyTableData()}
  }

  modifyTableData() {
    let ownData = null;
    let ownIndex = 100;
    for(var i=0; i < this.props.leaderBoardData.length; i++) {
      if(this.props.leaderBoardData[i].user_id === 15653) {
        ownData = this.props.leaderBoardData[i];
        ownIndex = i;
      }
    }
    if(this.props.leaderBoardData.length > 9) {
      let data = this.props.leaderBoardData.slice(0,10);
      if(ownIndex > 9) data.push(ownData);
      return data;
    } else {
      return this.props.leaderBoardData.slice(0);
    }
  }
 
  componentDidMount() {
    if(this.props.leaderboardUpdated === true) {
      console.log('didMount fetches leaderboard');
      this.props.fetchLeaderboard(this.props.dashboard_token, this.props.courseId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.leaderboardUpdated === false && nextProps.leaderboardUpdated === true) {
      this.props.fetchLeaderboard(nextProps.dashboard_token, nextProps.courseId);
    }
    if(this.props.leaderBoardData !== nextProps.leaderBoardData) {
      this.setState({tableData: this.modifyTableData()})
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
        data={this.state.chartData}
        columns={columns}
        showPagination={false}
        pageSizeOptions={[this.state.tableData.length]}
        defaultPageSize={this.state.tableData.length}
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
