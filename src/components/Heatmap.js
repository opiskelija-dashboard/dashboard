import React from 'react';
import CalendarHeatmap from "react-calendar-heatmap";




export const Heatmap = props => {

  const customTitleForValue = value => {
    return value ? `asdassdasdasdas` : null;
  }
  
  const customTooltipDataAttrs = { 'data-toggle': 'tooltip' };

  const classForValue = value => {
    if (!value) {
      return "color-empty dashboardTooltip";
    }

    return `color-dashboard-${value.count} dashboardTooltip`;
  }

  return (
    <CalendarHeatmap
      horizontal={false}
      showMonthLabels={false}
      endDate={props.endDate}
      numDays={props.numDays}
      values={props.values}
      classForValue={classForValue}
      titleForValue={customTitleForValue}
    />
  )
}
