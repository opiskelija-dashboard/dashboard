import React from "react";
import "../App.css";
import { ProgressBar as BootStrapProgressBar } from "react-bootstrap";

export const ProgressBar = props =>
  <div className="progressBarPair">
    <BootStrapProgressBar bsStyle="info" now={props.firstBar} />
    <BootStrapProgressBar
      bsStyle={props.color}
      now={props.secondBar}
    />
  </div>;
