import React, { Component } from "react";
import { Chart } from "../components/Chart";
import { connect } from "react-redux";
import { ThreeBounce } from "better-react-spinkit";

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
    const isFetching = this.props.isFetching;

    return(
      <div style={{height: '100%', padding: '0 5px 0 5px'}}>
        {isFetching &&
          <ThreeBounce size={40} />
        }

        {!isFetching &&
          <Chart
            progressData={this.props.progressData}
            chartMax={this.chartMax()}
          />
        }
      </div>
    );
  }
}

//Connect chart container to it's data in the store

const mapStateToProps = state => {
  return {
    progressData: state.points.progressData.data,
    isFetching: state.points.chartFetch
  };
};

export default connect(mapStateToProps, null)(ChartContainer);
