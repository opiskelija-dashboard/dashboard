import React from "react";
import { Line } from "react-chartjs-2";



export const Chart = props => {
  const options = {
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            max: props.chartMax,
            min: 0
          }
        }
      ]
    }
  };
  
  const data = {
    labels: props.progressData.map((item) => item.date),
    datasets: [
      {
        label: "Omat pisteet",
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
        data: props.progressData.map((item) => item.users_points)
      },
      {
        label: "Kurssin keskiarvo",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(150,150,150,1)",
        borderColor: "rgba(150,150,150,1)",
        borderCapStyle: "butt",
        borderJoinStyle: "miter",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        data: props.progressData.map((item) => item.everyones_average)
      }
    ]
  };

  return(
    <div style={{margin: "auto", overflow: "hidden"}}>
      <Line
        data={data}
        options={options}
      />
    </div>
  )
}
