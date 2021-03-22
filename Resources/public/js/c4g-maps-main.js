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

import ReactDOM from "react-dom";
import React, {Suspense} from "react";
const MapController = React.lazy(() => import('./components/c4g-maps.jsx'));


window.initMap = function(mapData) {
  let mapDiv = null;

  if (mapData.mapDiv) {
    mapDiv = document.querySelector("#" + mapData.mapDiv);
  } else {
    mapDiv = jQuery("#c4g_map_" + mapData.mapId)[0];
  }

  if (mapDiv) {
    jQuery(mapDiv).css("height", "20px");
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          observer.unobserve(entry.target);
          return ReactDOM.render(
              <Suspense fallback={<div>Loading...</div>}>
                <MapController mapData={mapData}/>
              </Suspense>,
              jQuery("#c4g-map-container-" + mapData.mapId)[0]
          );
        }
      });
    });
    observer.observe(mapDiv)

    // return ReactDOM.render(React.createElement(MapController, {
    //   mapData: mapData,
    // }), jQuery("#c4g-map-container-" + mapData.mapId)[0]);
  }
};

window.initMaps = function(mapData) {

  for (let key in mapData) {
    if (mapData.hasOwnProperty(key)) {
      let mapDiv;
      if (mapData[key].mapDiv) {
        mapDiv = jQuery(mapData[key].mapDiv)[0] || jQuery("#" + mapData[key].mapDiv)[0] || jQuery( "." + mapData[key].mapDiv)[0]
      }
      else {
        mapDiv = jQuery("#c4g_map_" + mapData[key].mapId)[0];
      }
      if (mapDiv) {
        jQuery(mapDiv).css("height", "20px");
        let observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
              observer.unobserve(entry.target);
              return ReactDOM.render(
                  <Suspense fallback={<div>Loading...</div>}>
                    <MapController mapData={mapData[key]}/>
                  </Suspense>,
                  jQuery("#c4g-map-container-" + mapData[key].mapId)[0]
              );
            }
          });
        });
        observer.observe(mapDiv);

        // ReactDOM.render(React.createElement(MapController, {
        //   mapData: mapData[key],
        // }), jQuery("#c4g-map-container-" + mapData[key].mapId)[0]);
      }
    }
  }
};
jQuery(document).ready(function() {
  if (typeof window.mapData !== "undefined") {
    window.initMaps(window.mapData);
  }
});

