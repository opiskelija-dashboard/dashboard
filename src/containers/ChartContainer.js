import React, { Component } from "react";
import { Chart } from "../components/Chart";
import { connect } from "react-redux";

class ChartContainer extends Component {
  
  chartMax() {
    var maxVal = 0;
    for(var i=0; i < this.props.progressData.length; i++) {
      maxVal = Math.max(
        maxVal,
        this.props.progressData[i].users_points,
        this.props.progressData[i].everyones_average
      );
    }
    return (10 * Math.ceil(maxVal / 10));
  }

  render() {
    const options = {
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              max: this.chartMax(),
              min: 0
            }
          }
        ]
      }
    };
    const data = {
      labels: this.props.progressData.map((item) => item.date),
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
          data: this.props.progressData.map((item) => item.users_points)
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
          data: this.props.progressData.map((item) => item.everyones_average)
        }
      ]
    };

    return <Chart data={data} options={options} />;
  }
}

//Connect chart container to it's data in the store

const mapStateToProps = state => {
  return {
    progressData: state.points.progressData.data
  };
};

export default connect(mapStateToProps, null)(ChartContainer);