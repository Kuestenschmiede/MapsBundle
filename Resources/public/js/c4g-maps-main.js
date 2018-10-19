import {MapController} from "./c4g-maps"

jQuery(document).ready(function() {
  if (typeof mapData !== "undefined") {
    initMaps(mapData);
  }
});

window.initMaps = function(mapData) {
  let mapController = new MapController(mapData);
};