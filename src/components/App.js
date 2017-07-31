import React from "react";
import "../App.css";
import FilterWidget from "../containers/FilterWidget";
import { NavBar } from "./NavBar";

export const App = () => (
  <div className="appContainer">
    <NavBar />
    <div className="WidgetContainer">
      <FilterWidget />
    </div>
  </div>
)
