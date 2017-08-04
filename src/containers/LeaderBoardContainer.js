import React, { Component } from "react";
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
      ]

    const data = [
      {id: '715517', points: '5/5'},
      {id: 'h4x0r', points: '5000'}
    ]

    return (
      <LeaderBoard data={data} columns={columns} />
    )
  }
}

export default (LeaderBoardContainer);
