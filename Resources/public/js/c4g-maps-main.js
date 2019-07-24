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

import {MapController} from "./c4g-maps"

window.initMap = function(mapData) {
  let mapController = new MapController(mapData);
};

window.initMaps = function(mapData) {
  for (let key in mapData) {
    if (mapData.hasOwnProperty(key)) {
      let mapController = new MapController(mapData[key]);
    }
  }
};
jQuery(document).ready(function() {
  if (typeof window.mapData !== "undefined") {
    window.initMaps(window.mapData);
  }
});

