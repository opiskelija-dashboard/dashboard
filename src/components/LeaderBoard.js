import React from "react";
import "../App.css";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export const LeaderBoard = props => {
  return (
    <div className="WidgetContainer">
      <ReactTable
        data={props.data}
        columns={props.columns}
        defaultPageSize={10}
        className="-striped -highlight"
        defaultSorted={[
            {
              id: "points",
              desc: true
            }
          ]}
      />
    </div>
  );
};
