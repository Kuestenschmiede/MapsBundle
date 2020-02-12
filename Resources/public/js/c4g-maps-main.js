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

import {MapController} from "components/c4g-maps.jsx";
import ReactDOM from "react-dom";
import React from "react";
import {Search} from "./components/c4g-search";
import {cssConstants} from "./c4g-maps-constant";

window.initMap = function(mapData) {
  let mapDiv = jQuery("#c4g_map_" + mapData.mapId)[0];
  ReactDOM.render(React.createElement(MapController, {
    mapData: mapData,
  }), mapDiv);
};

window.initMaps = function(mapData) {
  for (let key in mapData) {
    if (mapData.hasOwnProperty(key)) {
      let mapDiv = jQuery("#c4g_map_" + mapData[key].mapId)[0];

      ReactDOM.render(React.createElement(MapController, {
        mapData: mapData[key],
      }), mapDiv);
    }
  }
};
jQuery(document).ready(function() {
  if (typeof window.mapData !== "undefined") {
    window.initMaps(window.mapData);
  }
});

