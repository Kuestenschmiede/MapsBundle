import {MapController} from "./c4g-maps"

jQuery(document).ready(function() {
  if (mapData) {
    initMaps(mapData);
  }
  // let mapController = new MapController(mapData);
  // let mapData = mapData || null;
  // if (mapData) {
  //   initMaps();
  // }
});

window.initMaps = function(mapData) {
  let mapController = new MapController(mapData);
};