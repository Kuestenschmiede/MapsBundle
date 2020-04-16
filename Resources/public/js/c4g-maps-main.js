/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

import {MapController} from "components/c4g-maps.jsx";
import ReactDOM from "react-dom";
import React from "react";

window.initMap = function(mapData) {
  let mapDiv = null;
  if (mapData.mapDiv) {
    mapDiv = document.querySelector("#" + mapData.mapDiv);
  } else {
    mapDiv = jQuery("#c4g_map_" + mapData.mapId)[0];
  }
  return ReactDOM.render(React.createElement(MapController, {
    mapData: mapData,
  }), mapDiv);
};

window.initMaps = function(mapData) {
  for (let key in mapData) {
    if (mapData.hasOwnProperty(key)) {
      let mapDiv = jQuery("#c4g_map_" + mapData[key].mapId)[0];
      if (mapDiv) {
        ReactDOM.render(React.createElement(MapController, {
          mapData: mapData[key],
        }), mapDiv);
      }
    }
  }
};
jQuery(document).ready(function() {
  if (typeof window.mapData !== "undefined") {
    window.initMaps(window.mapData);
  }
});

