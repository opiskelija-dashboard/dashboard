import { Component } from "react";
import { render } from "react-dom";



class Leaderboard extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.data
    };
  }
}
