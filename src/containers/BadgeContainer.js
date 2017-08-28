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

    return (
      <div>
        <ResponsiveReactGridLayout
          layouts={layouts}
          breakpoints={{lg: 980}}
          cols={{lg: 12}}
        >
          {generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}
