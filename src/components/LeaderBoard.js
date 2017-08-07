import React from "react";
import "../App.css";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export const LeaderBoard = props => {
  console.log(props.data);
  return (
    <div>
      <h2>LeaderBoard</h2>
      <ReactTable
        data={props.data}
        columns={props.columns}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  );
};
