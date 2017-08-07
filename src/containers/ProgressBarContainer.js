import React, { Component } from "react";
import "../App.css";
import { ProgressBar } from "../components/ProgressBar";
import { connect } from "react-redux";

class ProgressBarContainer extends Component {
  countPercentages(average, userPoints) {
    let overAverage = userPoints >= average;

    return (
      <ProgressBar
        over={overAverage}
        firstBar={userPoints}
        secondBar={average}
      />
    );
  }

  render() {
    let average = [];
    let label = [];
    let users = [];
    console.log(this.props.skillsData);
    for (let i = 0; i < this.props.skillsData.length; i++) {
      average.push(this.props.skillsData[i].average);
      label.push(this.props.skillsData[i].label);
      users.push(this.props.skillsData[i].user);
    }

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

const mapStateToProps = state => {
  return {
    skillsData: state.APIcalls.skillsData
  };
};

export default connect(mapStateToProps, null)(ProgressBarContainer);
