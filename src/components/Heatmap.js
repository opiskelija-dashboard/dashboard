import React from 'react';
import CalendarHeatmap from "react-calendar-heatmap";

const classForValue = value => {
  if (!value) {
    return "color-empty";
  }
  return `color-dashboard-${value.count}`;
};

export const Heatmap = props => {
  return (
    <CalendarHeatmap
      horizontal={false}
      showMonthLabels={false}
      endDate={props.endDate}
      numDays={props.numDays}
      values={props.values}
      classForValue={classForValue}
    />
  )
}
