import React, { Component } from "react";
import "../App.css";
import { ProgressBar } from "../components/ProgressBar";
import { connect } from "react-redux";
import { ThreeBounce } from "better-react-spinkit";

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
    for (let i = 0; i < this.props.skillsData.length; i++) {
      average.push(this.props.skillsData[i].all);
      label.push(this.props.skillsData[i].label);
      users.push(this.props.skillsData[i].user);
    }

    // list sisältää datan pituuden verran ProgressBareja, joihin
    // lasketaan sopiva averagen ja käyttäjän pisteiden määrä
    const list = label.map((data, index) =>
      <div key={index}>
        <div className="headerLeft">
          <p>
            {data}
          </p>
        </div>
        <div>
          {this.countPercentages(average[index], users[index])}
        </div>
      </div>
    );

    const isFetching = this.props.isFetching;

    return (
      <div style={{overflow: 'auto', height: '100%'}}>
        {isFetching &&
          <ThreeBounce size={40} />
        }

        {!isFetching &&
          <div style={{padding: '20px'}} className="progressBarContainer">
            <p>
              Ylempi palkki kuvaa omaa edistymistäsi, alempi palkki on kurssin
              opiskelijoiden keskiarvo.
            </p>
            {list}
          </div>

        }
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    skillsData: state.points.skillsData,
    isFetching: state.points.skillsFetch
  };
};

export default connect(mapStateToProps, null)(ProgressBarContainer);
