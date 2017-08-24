import React, { Component } from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";

import ChartContainer from '../containers/ChartContainer'
import ProgressBarContainer from "../containers/ProgressBarContainer";
import CalendarContainer from "../containers/CalendarContainer";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class MyPageGrid extends Component {

  render() {
    const layoutLg = [
      {i: 'chart', x: 0, y: 0, w: 10, h: 3},
      {i: 'skills', x: 0, y: 4, w: 5, h: 3},
      {i: 'heatmap', x: 6, y: 4, w: 5, h: 3}
    ];

    const layoutMd = [
      {i: 'a', x: 0, y: 0, w: 6, h: 2},
      {i: 'b', x: 2, y: 0, w: 3, h: 2},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    const layouts = {lg:layoutLg, md: layoutMd}

    return (
      <div style={{marginTop: '10px'}}>
        <ResponsiveReactGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{lg: 980, sm: 768}}
          cols={{lg: 10, sm: 6}}
        >
            <div style={{height: '100%'}} key={'chart'}>
              <ChartContainer />
            </div>

            <div style={{overflow: 'auto', height: '100%'}} key={'skills'}>
              <ProgressBarContainer />
            </div>

            <div style={{height: '100%'}} key={'heatmap'}>
              <CalendarContainer />
            </div>
        </ResponsiveReactGridLayout>
      </div>
    )
  }
}
