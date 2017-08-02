import React from "react";
import "../App.css";
import { ProgressBar as BootStrapProgressBar } from "react-bootstrap";

export const ProgressBar = props =>
  <div className="progressBarPair">
    <BootStrapProgressBar bsStyle="success" now={props.firstBar}
    label={props.firstBar + '%'}
    striped={props.over}
    active={props.over}
   />
    <BootStrapProgressBar
      bsStyle="info"
      now={props.secondBar}
      label={props.secondBar + '%'}
    />
  </div>
