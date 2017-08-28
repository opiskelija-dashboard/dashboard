import React from 'react';
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from 'react-tooltip';

export const Heatmap = props => {

  const averageText = props.user ? '' : 'keskimäärin';

  const customTooltipDataAttrs = value => (
    { 'data-tip':
      `Tehtäviä tehty ${averageText} ${value.count}`
    }
  );

  const classForValue = value => {
    if (!value) {
      return "color-empty dashboardTooltip";
    }

    return `color-dashboard-${value.count} dashboardTooltip`;
  }

  return (
    <div>
      <ReactTooltip />

      <CalendarHeatmap
        horizontal={false}
        showMonthLabels={false}
        endDate={props.endDate}
        numDays={props.numDays}
        values={props.values}
        classForValue={classForValue}
        tooltipDataAttrs={customTooltipDataAttrs}
      />
    </div>

  )
}
