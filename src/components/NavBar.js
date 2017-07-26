import React, { Component } from "react";
import "../App.css";
import NavButton from '../containers/NavButton'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <NavButton text="Oma sivu" />

        <NavButton text="Leaderboard" />

        <NavButton text="Badget" />
      </div>
    );
  }
}

export default NavBar;
