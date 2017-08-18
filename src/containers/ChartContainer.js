import React, { Component } from "react";
import { Chart } from "../components/Chart";
import { connect } from "react-redux";

class ChartContainer extends Component {
  averageLine() {
    if (this.props.progressData) {
      return new Array(this.props.progressData.length).fill(this.props.average);
    }
    return [];
  }

  render() {
    //dummy data
    const options = {
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              max: this.props.maxPoints,
              min: 0
            }
          }
        ]
      }
    };
    console.log("chart renders with progressData ", this.props.progressData);
    const data = {
      labels: this.props.progressData.map(function(item){return item.day}),
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
          data: this.props.progressData.map(function(item){return item.points})
        },
        {
          label: "Läpipääsyraja",
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
          data: this.averageLine()
        }
      ]
    };

    return <Chart data={data} options={options} />;
  }
}

//Connect chart container to it's data in the store

const mapStateToProps = state => {
  return {
    progressLabels: state.APIcalls.progressLabels,
    progressData: state.APIcalls.progressData,
    maxPoints: state.APIcalls.courseMaxPoints,
    average: state.APIcalls.progressAverage
  };
};

export default connect(mapStateToProps, null)(ChartContainer);
