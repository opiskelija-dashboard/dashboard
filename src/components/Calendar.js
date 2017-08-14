import React from 'react';
import CalendarHeatmap from "react-calendar-heatmap";

const customTooltipDataAttrs = { 'data-toggle': 'tooltip' };

const customOnClick = value => {
  if (value) {
    alert(`Clicked on ${value.date} with value ${value.count}`);
  }
}

const customTitleForValue = value => {
  return value ? `${value.date} with value ${value.count}` : null;
}

const classForValue = value => {
  if (!value) {
    return "color-empty";
  }
  return `color-dashboard-${value.count}`;
};

export const Calendar = props => (


  <div className="asdasd">
    <CalendarHeatmap
      horizontal={false}
      showMonthLabels={false}
      endDate={props.endDate}
      numDays={props.numDays}
      values={props.values}
      classForValue={classForValue}
      titleForValue={props.titleForValue}
      tooltipDataAttrs={customTooltipDataAttrs}
      onClick={customOnClick}
    />
  </div>


)
