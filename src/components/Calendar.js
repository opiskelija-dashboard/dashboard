import React from 'react';
import CalendarHeatmap from "react-calendar-heatmap";
import { Popup } from 'semantic-ui-react'

const classForValue = value => {
  if (!value) {
    return "color-empty";
  }
  return `color-dashboard-${value.count}`;
};

export const Calendar = props => {
  const map = (
    <CalendarHeatmap
      horizontal={false}
      showMonthLabels={false}
      endDate={props.endDate}
      numDays={props.numDays}
      values={props.values}
      classForValue={classForValue}
    />
  )

  return (
    <div className="asdasd">
      <Popup trigger={map} >
        TESTITESTI
      </Popup>
    </div>
  )
}
