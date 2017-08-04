import React, { Component } from "react";
import { LeaderBoard } from "../components/LeaderBoard";

class LeaderBoardContainer extends Component {
  render() {
    //dummy data
    const columns = [
        {
          Header: "Name",
          columns: [
            {
              Header: "First Name",
              accessor: "firstName"
            },
            {
              Header: "Last Name",
              id: "lastName",
              accessor: d => d.lastName
            }
          ]
        },
        {
          Header: "Info",
          columns: [
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "Status",
              accessor: "status"
            }
          ]
        },
        {
          Header: "Stats",
          columns: [
            {
              Header: "Visits",
              accessor: "visits"
            }
          ]
        }
      ]

    const data = [
      {id: '1', points: '3'},
      {id: '2', points: '5'}
    ]

    return (
      <LeaderBoard data={data} columns={columns} />
    )
  }
}

export default (LeaderBoardContainer);
