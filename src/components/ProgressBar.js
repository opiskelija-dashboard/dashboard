import React from "react";
import "../App.css";
import { Line } from 'rc-progress';

export const ProgressBar = (props) => (
  <Line strokeWidth={1} percent={props.taito1} />
)
