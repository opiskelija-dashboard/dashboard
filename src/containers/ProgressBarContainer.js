import React, { Component } from "react";
import "../App.css";
import { SkillPercentTable } from "../components/SkillPercentTable";
import { ProgressBar } from '../components/ProgressBar'

export default class ProgressBarContainer extends Component {

  countPercentages() {

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

    let data = {
      "taito1": [40, 90],
      "taito2": [60, 70],
      "taito3": [80, 20],
      "taito4": [10, 10]
    }


    return(
      <SkillPercentTable data={data} />
    )
  }
}
