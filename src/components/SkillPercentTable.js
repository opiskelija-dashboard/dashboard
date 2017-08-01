import React from 'react';
import { ProgressBar } from '../components/ProgressBar'
import "../App.css";

export const SkillPercentTable = (props) => (

  <div>
    <table>
      <tbody>
        <tr>
          <th>Taito 1</th>

          <td>
            {<ProgressBar taito1={props.taito1} />}
          </td>
        </tr>
      </tbody>
    </table>
  </div>


)
