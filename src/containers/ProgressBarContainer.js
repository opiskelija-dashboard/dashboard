import React, { Component } from "react";
import "../App.css";
import { ProgressBar } from '../components/ProgressBar'

export default class ProgressBarContainer extends Component {

  countPercentages(average, userPoints) {
    let overAverage = (userPoints > average);
    let firstBar;
    let secondBar;

    if (overAverage) {
      firstBar = average;
      secondBar = userPoints - average;
    } else {
      firstBar = userPoints;
      secondBar = average - userPoints;
    }


    return <ProgressBar usrAbove={overAverage} firstBar={firstBar} secondBar={secondBar} />
  }

  render() {
    let average = [
      40,
      60,
      80,
      10
    ]

    let label = [
      "taito1",
      "taito2",
      "taito3",
      "taito4"
    ]

    let users = [
      90,
      70,
      20,
      10
    ]

    const list = label.map((data, index) =>
      <div key={index} className="progressBarContainer">
        <div className="floatLeft">
          <p>{ data }</p>
        </div>
        <div>
          { this.countPercentages(average[index], users[index]) }
        </div>
      </div>
    )

    return(
      <div>
        { list }
      </div>

    )
  }
}
