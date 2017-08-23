import React, { Component } from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";

import ChartContainer from '../containers/ChartContainer'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class MyPageGrid extends Component {

  render() {
    const layoutLg = [
      {i: 'a', x: 0, y: 0, w: 12, h: 4, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    const layoutMd = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    const layouts = {lg:layoutLg, md: layoutMd}

    return (
      <div>
        <ResponsiveReactGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        >
            <div key={'a'} className="WidgetContainer">
              <ChartContainer />
            </div>
            <div key={'b'}>b</div>
            <div key={'c'}>c</div>
        </ResponsiveReactGridLayout>
      </div>
    )
  }
}
