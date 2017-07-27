import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Kurssin alku", "Viikko 1", "Viikko 2", "Viikko 3", "Viikko 4", "Viikko 5", "Viikko 6", "Viikko 7"],
  datasets: [
    {
      label: "Omat pisteet (dummy)",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 5, 10, 20, 35, 42, 44, 60]
    },
    {
      label: "Läpipääsyraja (dummy)",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(150,150,150,1)",
      borderColor: "rgba(150,150,150,1)",
      borderCapStyle: "butt",
      borderDash: [20],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [30, 30, 30, 30, 30, 30, 30, 30]
    }
  ],
  options: {
    legend: {
      display: false,
      labels: {
        fontColor: "rgb(255, 99, 132)"
      }
    }
  }
};

export const Chart = () => (
    <div>
      <h2>Edistyminen</h2>
      <Line
        data={data}
        width="auto"
        height="auto"
        options={{
          maintainAspectRatio: true
        }}
      />
    </div>
)
