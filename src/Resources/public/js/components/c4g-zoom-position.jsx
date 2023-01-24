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
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {getLanguage} from "../c4g-maps-i18n";
import {Geolocation} from "ol";

export default class ZoomPosition extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    let element,
      button;

    let mapController = props.mapController;
    let view = mapController.map.getView();
    let mapData = mapController.data;
    let langConstants = getLanguage(mapData);

    let toggle = function (event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();

      let funcLocation = function (evt) {
        let pos = scope.props.mapController.geolocation.getPosition()
        if (pos) {
          view.setCenter(pos);
          view.setZoom(18);
          mapController.map.setView(view);
        }
      }
      scope.props.mapController.geolocation.once('change', funcLocation);
      if (scope.props.mapController.geolocation.getTracking()) {
        scope.props.mapController.geolocation.dispatchEvent('change');
      }
      else {
        scope.props.mapController.geolocation.setTracking(true);
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = cssConstants.OL_ZOOM_POS + ' ' + cssConstants.OL_CONTROL + ' ' + cssConstants.OL_UNSELECTABLE;

    // button
    button = document.createElement('button');
    button.title = langConstants.CTRL_ZOOM_POS;
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, {useCapture: false, passive: true});
    button.addEventListener('touchstart', toggle, {useCapture: false, passive: true});
    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    let control = new Control({
      element: element,
      target: this.props.target
    });
    let index = mapController.arrComponents.findIndex(element => element.name === "zoomPosition");
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.zoomPosition = control;
  }

  render() {
    return null;
  }

}