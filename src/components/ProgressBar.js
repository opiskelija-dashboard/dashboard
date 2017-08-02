import React from "react";
import "../App.css";
import { ProgressBar as BootStrapProgressBar } from "react-bootstrap";

export const ProgressBar = props =>
  <div className="progressBarPair">
    <BootStrapProgressBar bsStyle="success" now={props.firstBar} />
    <BootStrapProgressBar
      bsStyle={props.usrAbove ? "warning" : "danger"}
      now={props.secondBar}
    />
  </div>;
