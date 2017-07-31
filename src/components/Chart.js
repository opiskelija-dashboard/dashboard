import React from "react";
import { Line } from "react-chartjs-2";

export class Chart extends React.Component {
  render() {
    return(
    <div>
      <h2>Edistyminen</h2>
      <Line
        data={this.props.data}
        width="auto"
        height="auto"
        options={this.props.options}
      />
    </div>)
  };
};