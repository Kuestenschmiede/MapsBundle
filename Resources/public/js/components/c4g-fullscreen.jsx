/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import {FullScreen} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {getLanguage} from "../c4g-maps-i18n";

export default class Fullscreen extends Component {
  constructor(props) {
    super(props);

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);
    let langConstants = getLanguage(props.mapController.data);

    let control = new FullScreen({
      label: ' ',
      labelActive: ' ',
      tipLabel: langConstants.CTRL_FULLSCREEN,
      target: this.props.target
    });

    let mapController = props.mapController;
    mapController.mapsControls.controls.fullscreen = control;
    mapController.map.addControl(control);
  }

  render() {
    return null;
  }

}