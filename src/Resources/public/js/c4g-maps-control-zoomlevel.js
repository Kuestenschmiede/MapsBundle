/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import {cssConstants} from "./c4g-maps-constant";
import {Control} from "ol/control";

'use strict';
export class Zoomlevel extends Control {
  constructor(options) {
    super(options);
    var self,
      element,
      updateZoomlevel;

    self = this;

    if (!options || !options.mapController) {
      console.warn('Zoomlevel control needs to know the map.');
      return false;
    }

    // default options
    options = jQuery.extend({
      className: cssConstants.ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);

    let mapView = options.mapController.map.getView();

    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = parseInt(mapView.getZoom());

    updateZoomlevel = function () {
      element.innerHTML = parseInt(mapView.getZoom());
    };

    options.mapController.map.getView().on('change:resolution', function() {
      updateZoomlevel();
    });

    this.view = mapView;

    // inheritance-stuff
    Control.call(this, {
      element: element,
      target: options.target
    });
  }
}

