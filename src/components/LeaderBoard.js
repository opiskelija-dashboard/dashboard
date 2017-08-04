import React from "react";
import "../App.css";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export const LeaderBoard = props =>
  <div>
    <h2>LeaderBoard</h2>
    <ReactTable
      data={props.data}
      columns={[
        {
          columns: [
            {
              Header: "Opiskelijan Id",
              accessor: "opiskelijaId"
            },
            {
              Header: "Last Name",
              id: "lastName",
              accessor: d => d.lastName
            }
          ]
        },
        {
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
          columns: [
            {
              Header: "Visits",
              accessor: "visits"
            }
          ]
        }
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
    />
  </div>;
