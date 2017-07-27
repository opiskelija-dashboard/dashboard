import React, { Component } from "react";
import "../App.css";
import FilterWidget from "./FilterWidget";
import { NavBar } from "./NavBar";

export default class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <NavBar />
        <div className="WidgetContainer">
          <FilterWidget />
        </div>
      </div>
    );
  }
}
