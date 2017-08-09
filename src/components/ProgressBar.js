import React from "react";
import "../App.css";
import { Progress } from "semantic-ui-react";

export const ProgressBar = props =>
  <div className="progressBarPair">
    <Progress
    percent={props.firstBar}
    label={props.firstBar + '%'}
    indicating
    autoSuccess
   />
    <Progress
      percent={props.secondBar}
      label={props.secondBar + '%'}
      color='teal'
    />
  </div>
