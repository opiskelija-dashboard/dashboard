import React from "react";
import "../App.css";
import { ProgressBar as BootStrapProgressBar } from "react-bootstrap";

export const ProgressBar = props =>
  <div className="progressBarPair">
    <BootStrapProgressBar bsStyle="success" now={props.firstBar} />
    <BootStrapProgressBar
      bsStyle={props.usrAbove ? "success" : "warning"}
      now={props.secondBar}
      striped={props.usrAbove}
      active
    />
  </div>;
