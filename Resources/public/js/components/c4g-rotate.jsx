/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, {Component} from "react";
import {Rotate as OlRotate} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {getLanguage} from "../c4g-maps-i18n";

export class Rotate extends Component {

  constructor(props) {
    super(props);

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);
    let langConstants = getLanguage(props.mapController.data);

    let control = new OlRotate({
      label: ' ',
      labelActive: ' ',
      tipLabel: langConstants.CTRL_RESET_ROTATION,
      target: this.props.target
    });

    let mapController = props.mapController;
    mapController.mapsControls.controls.rotate = control;
    mapController.map.addControl(control);
  }

  render() {
    return null;
  }

}