import {MapController} from "./c4g-maps"

jQuery(document).ready(function() {
  if (typeof mapData !== "undefined") {
    window.initMaps(mapData);
  }
});

window.initMaps = function(mapData) {
  let mapController = new MapController(mapData);
};