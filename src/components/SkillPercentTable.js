import React from 'react';
import { ProgressBar } from '../components/ProgressBar'
import "../App.css";

export const SkillPercentTable = (props) => (

  <div className="center">
    <div>
      { <ProgressBar taito1={props.taito1} /> }
    </div>
  </div>


)
