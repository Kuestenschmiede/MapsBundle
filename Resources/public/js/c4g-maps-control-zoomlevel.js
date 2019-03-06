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

'use strict';
export class Zoomlevel extends ol.control.Control {
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
    options = $.extend({
      className: cssConstants.ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);

    let mapView = options.mapController.map.getView();

    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = mapView.getZoom();

    updateZoomlevel = function () {
      element.innerHTML = parseInt(mapView.getZoom());
    };

    options.mapController.map.getView().on('change:resolution', function() {
      updateZoomlevel();
    });

    this.view = mapView;

    // inheritance-stuff
    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });
  }
}

