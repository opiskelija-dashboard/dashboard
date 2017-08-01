import React from "react";
import "../App.css";
import { ProgressBar as BootStrapProgressBar } from 'react-bootstrap'

export const ProgressBar = (props) => (
  <div>
    <BootStrapProgressBar>
      <BootStrapProgressBar bsStyle="info" now={props.firstBar}/>
      <BootStrapProgressBar bsStyle= { props.usrAbove ? "success" : "danger" } now={props.secondBar} striped={props.usrAbove} active/>
    </BootStrapProgressBar>

  </div>
)
