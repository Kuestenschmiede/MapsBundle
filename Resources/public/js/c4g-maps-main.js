import {MapController} from "./c4g-maps"

jQuery(document).ready(function() {
  if (mapData) {
    initMaps(mapData);
  }
});

window.initMaps = function(mapData) {
  let mapController = new MapController(mapData);
};