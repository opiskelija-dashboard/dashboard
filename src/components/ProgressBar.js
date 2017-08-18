import React from "react";
import "../App.css";
import { Progress } from "semantic-ui-react";

export const ProgressBar = props =>
  <div className="progressBarPair">
    <Progress
    percent={props.firstBar}
    label={'Oma edistyminen ' + props.firstBar + '%'}
    indicating
    autoSuccess
   />
    <Progress
      percent={props.secondBar}
      label={'Keskiarvo edistyminen ' + props.secondBar + '%'}
      color='teal'
    />
  </div>
