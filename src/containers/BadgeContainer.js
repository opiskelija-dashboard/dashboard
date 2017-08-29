import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import {Badge} from '../components/Badge'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ShowcaseLayout extends Component {

  render() {

    const badges = [
      {badgedef_id: 0, name: 'Eka Tehtävä', flavor_text: 'Olet suorittanut ensimmäisen tehtävän!', iconref: 'TiArchive'},
      {badgedef_id: 1, name: 'Tullut jäädäkseen', flavor_text: 'Ensimmäisen viikon tehtävät suoritettu!', iconref: 'TiAnchor'},
      {badgedef_id: 2, name: 'Alas bisnekseen', flavor_text: 'Palautit tehtävän deadlinepäivänä!', iconref: 'TiArrowDownOutline'},
      {badgedef_id: 4, name: 'Takaisin koodaamaan', flavor_text: 'Palautit tehtävän kolmen päivän tauon jälkeen!', iconref: 'TiArrowLoopOutline'},
      {badgedef_id: 5, name: 'Kiertomestari', flavor_text: 'Suoritit for-loop tehtävät!', iconref: 'TiArrowSync'},
      {badgedef_id: 6, name: 'Argumenttimestari', flavor_text: 'Suoritit olio-ohjelmointitehtävän!', iconref: 'TiAttachment'},
      {badgedef_id: 7, name: 'Kansioiden Kuningas', flavor_text: 'Luit onnistuneesti tietoa kansiosta!', iconref: 'TiFolderOpen', big: true}
    ];

    const layout = badges.map((b, i) => {
      const x = (i % 6) * 2;

      if(b.big) {
        return {
          i: b.badgedef_id.toString(),
          x: x,
          y: 0,
          w: 3,
          h: 2,
          badge: b
        }
      }

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
        const color = b.badge.big ? 'teal' : '';
        const size = b.badge.big ? 150 : 60;

        return (
          <div key={b.i} style={{backgroundColor: color}}>
            <Badge
              name={b.badge.name}
              icon={b.badge.iconref}
              text={b.badge.flavor_text}
              size={size}
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
