import React, { Component } from "react";
import "../App.css";
import { ProgressBar } from "../components/ProgressBar";

export default class ProgressBarContainer extends Component {

  countPercentages(average, userPoints) {
    let overAverage = userPoints >= average;
    let color;

    return (
      <ProgressBar
        over={overAverage}
        firstBar={userPoints}
        secondBar={average}
      />
    );
  }

  render() {
    let average = [40, 60, 80, 10];

    let label = ["taito1", "taito2", "taito3", "taito4"];

    let users = [90, 48, 20, 10];

    // list sisältää datan pituuden verran ProgressBareja, joihin
    // lasketaan sopiva averagen ja käyttäjän pisteiden määrä
    const list = label.map((data, index) =>
      <div key={index}>
        <div className="floatLeft">
          <p>
            {data}
          </p>
        </div>
        <div>
          {this.countPercentages(average[index], users[index])}
        </div>
      </div>
    );

    return (
      <div className="progressBarContainer">
        <p>
          Ylempi palkki kuvaa omaa edistymistäsi, alempi palkki on kurssin
          opiskelijoiden keskiarvo.
        </p>
        {list}
      </div>
    );
  }
}