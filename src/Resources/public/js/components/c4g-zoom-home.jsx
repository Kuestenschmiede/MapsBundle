/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {getLanguage} from "../c4g-maps-i18n";
import {transform} from "ol/proj";
import {Geolocation} from "ol";

export default class ZoomHome extends Component {
  constructor(props) {
    super(props);

    let element,
      button;

    let mapController = props.mapController;
    let view = mapController.map.getView();
    let mapData = mapController.data;
    let langConstants = getLanguage(mapController.data);

    let toggle = function (event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();
      if (mapData.calc_extent === "LOCATIONS" || mapData.calc_extent === "CENTERLOCS") {
        let extent = mapController.proxy.layerController.extent;
        if (extent && !(extent.maxX === Infinity || extent.maxX === -Infinity)) {
          let view = mapController.map.getView();
          let padding = [
            parseInt(mapData.min_gap, 10),
            parseInt(mapData.min_gap, 10),
            parseInt(mapData.min_gap, 10),
            parseInt(mapData.min_gap, 10)
          ];
          let realExtent = [
            extent.minX,
            extent.minY,
            extent.maxX,
            extent.maxY
          ];

          if (mapData.calc_extent === "CENTERLOCS") {
            // ssss
            view.fit(realExtent, {
              maxZoom:mapData.center.zoom
            });
          }
          else {
            view.fit(realExtent, {
              padding: padding
            });
          }
        }
      }
      else {
        view.setCenter(transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'));
        view.setZoom(parseInt(mapData.center.zoom, 10));
        view.setRotation(parseFloat(mapData.center.rotation));
      }

      // check userposition
      let geoLocation;
      if (mapData.geolocation) {
        let funcLocation = function (evt) {
          view.setCenter(scope.props.mapController.geolocation.getPosition());
          if (mapData.geolocation_zoom) {
            view.setZoom(parseInt(mapData.geolocation_zoom, 10));
          }
        }
        scope.props.mapController.geolocation.once('change', funcLocation);
        if (this.props.mapController.geolocation.getTracking()) {
          this.props.mapController.geolocation.dispatchEvent('change');
        }
        else {
          this.props.mapController.geolocation.setTracking(true);
        }
      }

      mapController.map.setView(view);
    };

    // wrapper div
    element = document.createElement('div');
    element.className = cssConstants.OL_ZOOM_HOME+' '+cssConstants.OL_CONTROL + ' ' + cssConstants.OL_UNSELECTABLE;
    // button
    button = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      let span = document.createElement('span');
      span.innerText = langConstants.CTRL_ZOOM_HOME;
      button.appendChild(span);
    }
    else {
      button.title = langConstants.CTRL_ZOOM_HOME;
    }
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, {useCapture: false, passive: true});
    button.addEventListener('touchstart', toggle, {useCapture: false, passive: true});

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    let control = new Control({
      element: element,
      target: this.props.target
    });
    let index = mapController.arrComponents.findIndex(element => element.name === "zoomHome");
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.zoomHome = control;
  }

  render() {
    return null;
  }

}