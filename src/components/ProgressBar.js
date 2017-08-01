import React from "react";
import "../App.css";
import { ProgressBar as BootStrapProgressBar } from 'react-bootstrap'

export const ProgressBar = (props) => (
  <div>
    <BootStrapProgressBar now={35}/>
  </div>
)
