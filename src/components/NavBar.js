import React, { Component } from "react";
import "../App.css";
import ButtonContainer from '../containers/ButtonContainer'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <ButtonContainer text="Oma sivu" />

        <ButtonContainer text="Leaderboard" />

        <ButtonContainer text="Badget" />
      </div>
    );
  }
}

export default NavBar;
