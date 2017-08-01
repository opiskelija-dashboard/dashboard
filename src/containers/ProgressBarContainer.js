import React, { Component } from "react";
import "../App.css";
import { SkillPercentTable } from "../components/SkillPercentTable";

export default class ProgressBarContainer extends Component {


  render() {



    return(
      <SkillPercentTable taito1={40} />
    )
  }
}
