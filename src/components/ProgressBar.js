import React from "react";
import "../App.css";
import { Line } from 'rc-progress';

export const ProgressBar = props =>
  <div className="progressBarPair">
    <Line
    percent={props.firstBar}
    strokeWidth={1.5}
    trailWidth={1.5}
    strokeColor='#00723b'
   />
   <p>Oma edistyminen {props.firstBar}%</p>
    <Line
      percent={props.secondBar}
      strokeWidth={1.5}
      trailWidth={1.5}
      // label={'}
    />
    <p>Keskiarvo edistyminen {props.secondBar}%</p>
  </div>
