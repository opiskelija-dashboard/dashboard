import React from "react";
import { Line } from "react-chartjs-2";



export const Chart = (props) => {
  return (
    <div>
      <h2>Edistyminen</h2>
      <Line
        data={props.data}
        width="auto"
        height="auto"
        options={{
          maintainAspectRatio: true
        }}
      />
    </div>
  );
}
