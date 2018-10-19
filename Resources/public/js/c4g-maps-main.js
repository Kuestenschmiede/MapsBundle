import {MapController} from "./c4g-maps"

jQuery(document).ready(function() {
  let mapData = mapData || null;
  if (mapData) {
    initMaps();
  }
});

window.initMaps = function() {
  let mapController = new MapController(mapData);
};