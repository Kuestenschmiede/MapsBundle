/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

import {utils} from "./c4g-maps-utils";
import {cssConstants} from "./c4g-maps-constant";
import {Control} from "ol/control";
import {Geolocation} from "ol";
import {transform} from "ol/proj";

'use strict';
export class Home extends Control {


  /**
   * Control to toggle the intial map position on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  constructor(opt_options) {
    super(opt_options);

    var self = this;
    var options = opt_options || {};

    var element,
      button;

    // default options
    options = jQuery.extend({
      className: cssConstants.OL_ZOOM_HOME+' '+cssConstants.OL_CONTROL,
      switchable: true,
      enabled: true,
      mapController: undefined
    }, options);

    if (!options.mapController) {
      return false;
    }

    var view = options.mapController.map.getView();
    var mapData = options.mapController.data;

    var toggle = function (event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();

      view.setCenter(transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'));
      view.setZoom(parseInt(mapData.center.zoom, 10));
      view.setRotation(parseFloat(mapData.center.rotation));

      // check userposition
      var geoLocation;
      if (mapData.geolocation) {
        geoLocation = new Geolocation({
          tracking: true,
          projection: view.getProjection()
        });

        geoLocation.on('change', function (evt) {
          view.setCenter(geoLocation.getPosition());
          if (mapData.geolocation_zoom) {
            view.setZoom(parseInt(mapData.geolocation_zoom, 10));
          }
          geoLocation.setTracking(false);
        });
      }

      options.mapController.map.setView(view);
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + cssConstants.OL_UNSELECTABLE + ' button';

    if (options.switchable) {
      // button
      button = document.createElement('button');
      button.title = options.tipLabel;
      element.appendChild(button);

      // set onClick to the toggle-function
      button.addEventListener('click', toggle, {useCapture: false, passive: true});
      button.addEventListener('touchstart', toggle, {useCapture: false, passive: true});
    }

    Control.call(this, {
      element: element,
      target: options.target
    });
  }
}