/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export class OverlayControls extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const scope = this;
    const overlays = this.props.overlayController.arrOverlays;
    const callback = function(idx) {
      let value = jQuery("#c4g-overlay-toggle_" + idx).val();
      scope.props.overlayController.arrOverlays[idx].changeOpacity(value);
    };
    return (
      <ul className={"c4g-overlays"}>
        {overlays.map(function(element, index) {
          let entry = <li key={index}>
            <a>
              <span>{element.name}</span>
              <input id ={"c4g-overlay-toggle_"+ index} className={"c4g-overlay-toggle"} type="range" onInput={() => callback(index)}
                     min={0} max={100} step={10} defaultValue={element.opacity}/>
            </a>
          </li>;
          return entry;
        })}
      </ul>
    );
  }

}