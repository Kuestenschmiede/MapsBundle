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

import {cssConstants} from "./c4g-maps-constant";
import {Control} from "ol/control";
import {Geolocation} from "ol";

'use strict';
export class Position extends Control {


  /**
   * Control to toggle the browser/device position on the map.
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
      className: cssConstants.OL_ZOOM_POS+' '+cssConstants.OL_CONTROL,
      switchable: true,
      enabled: true,
      mapController: undefined
    }, options);

    if (!options.mapController) {
      return false;
    }

    var view = options.mapController.map.getView();
    var mapData = options.mapController.data;

    var enable = function () {
      jQuery(element).addClass(cssConstants.ENABLED);
    };

    var disable = function () {
      jQuery(element).removeClass(cssConstants.ENABLED);
    };

    var toggle = function (event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();

      var geoLocation = new Geolocation({
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
        options.mapController.map.setView(view);
      });
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

    // inheritance-stuff
    Control.call(this, {
      element: element,
      target: options.target
    });
    // ol.inherits(Position, ol.control.Control);
  }
}