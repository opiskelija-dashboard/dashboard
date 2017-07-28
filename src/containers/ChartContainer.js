import React, { Component } from "react";
import { Chart } from '../components/Chart'

export default class ChartContainer extends Component {


  render() {
    //dummy data
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
          data: [0, 25, 41, 79, 101, 151, 194, 260]
        }
      ]
    };

    return (
      <Chart data={data} />
    )
  }
}
