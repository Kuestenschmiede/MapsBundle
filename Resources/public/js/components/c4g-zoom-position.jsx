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
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {getLanguage} from "../c4g-maps-i18n";
import {Geolocation} from "ol";

export class ZoomPosition extends Component {

  constructor(props) {
    super(props);

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

      let geoLocation = new Geolocation({
        tracking: true,
        projection: view.getProjection()
      });

      geoLocation.on('change', function (evt) {
        view.setCenter(geoLocation.getPosition());
        // if (mapData.geolocation_zoom) {
        //    view.setZoom(mapData.geolocation_zoom);
        // } else {
        view.setZoom(18);
        //}
        geoLocation.setTracking(false);
        mapController.map.setView(view);
      });
    };

    // wrapper div
    element = document.createElement('div');
    element.className = cssConstants.OL_ZOOM_POS + ' ' + cssConstants.OL_CONTROL + ' ' + cssConstants.OL_UNSELECTABLE + ' button';

    // button
    button = document.createElement('button');
    button.title = langConstants.CTRL_ZOOM_POS;
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, {useCapture: false, passive: true});
    button.addEventListener('touchstart', toggle, {useCapture: false, passive: true});
    let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    let control = new Control({
      element: element,
      target: controlContainerTopLeft
    });

    mapController.mapsControls.controls.zoomPosition = control;
    mapController.map.addControl(control);
  }

  render() {
    return null;
  }

}