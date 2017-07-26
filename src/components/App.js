import React, { Component } from "react";
import "../App.css";
import FilterWidget from "./FilterWidget";
import NavBar from "./NavBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <div name="navbar">
          <NavBar />
        </div>
        <div>
          <FilterWidget />
        </div>
      </div>
    );
  }
}
