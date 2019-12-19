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
  let $overlaycontainer_stopevent = jQuery(mapData.filterDiv)[0];
  ReactDOM.render(React.createElement(MapController, {
    mapData: mapData,
  }), $overlaycontainer_stopevent);
};

window.initMaps = function(mapData) {
  for (let key in mapData) {
    if (mapData.hasOwnProperty(key)) {
      // let mapController = new MapController();
      //  let $overlaycontainer_stopevent = jQuery('#' + mapData[key].mapDiv + ' .' + cssConstants.OL_OVERLAYCONTAINER_SE)[0];
       let $overlaycontainer_stopevent = jQuery(mapData[key].filterDiv)[0];


      ReactDOM.render(React.createElement(MapController, {
        mapData: mapData[key],
      }), $overlaycontainer_stopevent);
    }
  }
};
jQuery(document).ready(function() {
  if (typeof window.mapData !== "undefined") {
    window.initMaps(window.mapData);
  }
});

