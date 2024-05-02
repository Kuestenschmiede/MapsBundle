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
import {Rotate as OlRotate} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {getLanguage} from "../c4g-maps-i18n";

export default class Rotate extends Component {

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
    if (control && control.element && control.element.children) {
      if (control.element.children[0]) {
        let button = control.element.children[0];
        if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
          let span = document.createElement('span');
          button.title = "";
          span.innerText = langConstants.CTRL_RESET_ROTATION;
          button.appendChild(span);
        }
      }
    }

    let mapController = props.mapController;
    let index = mapController.arrComponents.findIndex(element => element.name === "rotate");
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.rotate = control;
  }

  render() {
    return null;
  }

}