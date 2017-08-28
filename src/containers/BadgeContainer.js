import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import {Badge} from '../components/Badge'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ShowcaseLayout extends Component {

  render() {

    const badges = [
      {badgedef_id: 0, name: 'Eka Tehtävä', flavor_text: 'flavor text', iconref: 'TiArchive'},
      {badgedef_id: 1, name: 'asdasd', flavor_text: 'flavor text', iconref: 'TiAnchor'},
      {badgedef_id: 2, name: 'Joku muu', flavor_text: 'flavor text', iconref: 'TiArrowDownOutline'},
      {badgedef_id: 3, name: 'Peenis', flavor_text: 'flavor text', iconref: 'TiArrowLoopOutline'},
      {badgedef_id: 4, name: 'denis', flavor_text: 'flavor text', iconref: 'TiArrowLoopOutline'},
      {badgedef_id: 5, name: 'kiasiis', flavor_text: 'flavor text', iconref: 'TiArrowLoopOutline'},
      {badgedef_id: 6, name: 'kusususu', flavor_text: 'flavor text', iconref: 'TiArrowLoopOutline'},
      {badgedef_id: 7, name: 'kekekeke', flavor_text: 'flavor text', iconref: 'TiArrowLoopOutline'}
    ];

    const layout = badges.map((b, i) => {
      const x = (i % 6) * 2;
      return {
        i: b.badgedef_id.toString(),
        x: x,
        y: 0,
        w: 2,
        h: 1,
        badge: b
      }
    })

    const layouts = {lg:layout}


    const generateDOM = () => {
      return layout.map((b, i) => {
        return (
          <div key={b.i}>
            <Badge
              name={b.badge.name}
              icon={b.badge.iconref}
            />
          </div>
        )
      })
    }

    // const layout = [
    //   {i:'k', x: 0, y: 0, w:2, h:1},
    //   {i:'s', x: 2, y: 0, w:2, h:1},
    //   {i:'d', x: 4, y: 0, w:2, h:1},
    //   {i:'v', x: 6, y: 0, w:2, h:1},
    //   {i:'1', x: 6, y: 0, w:2, h:1},
    //   {i:'2', x: 6, y: 0, w:2, h:1},
    //   {i:'3', x: 6, y: 0, w:2, h:1},
    //   {i:'4', x: 6, y: 0, w:2, h:1},
    //   {i:'5', x: 6, y: 0, w:2, h:1}
    //
    // ]

    // const layoutSm = [
    //   {i: 'chart', x: 0, y: 0, w: 6, h: 2},
    //   {i: 'skills', x: 0, y: 3, w: 6, h: 2},
    //   {i: 'heatmap', x: 0, y: 6, w: 6, h: 2}
    // ];

    // const generateDOM = () => [
    //       <div key={'k'}>
    //         EKA
    //       </div>,
    //       <div key={'s'}>
    //         TOKA
    //       </div>,
    //       <div key={'d'}>
    //         KOLMAS
    //       </div>,
    //       <div key={'v'}>
    //         NELJÄS
    //       </div>,
    //       <div key={'1'}>
    //         VIIDES
    //       </div>,
    //       <div key={'2'}>
    //         KUUDES
    //       </div>,
    //       <div key={'3'}>
    //         SEISKA
    //       </div>,
    //       <div key={'4'}>
    //         KASI
    //       </div>,
    //       <div key={'5'}>
    //         YSI
    //       </div>
    //   ]

    return (
      <div>
        <ResponsiveReactGridLayout
          layouts={layouts}
          breakpoints={{lg: 980, sm: 768}}
          cols={{lg: 12}}
        >
          {generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}
