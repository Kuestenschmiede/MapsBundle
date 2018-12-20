import {cssConstants} from "./c4g-maps-constant";

'use strict';
export class Zoomlevel extends ol.control.Control {
  constructor(options) {
    super(options);
    var self,
      element,
      updateZoomlevel;

    self = this;

    if (!options || !options.mapController) {
      console.warn('Zoomlevel control needs to know the map.');
      return false;
    }

    // default options
    options = $.extend({
      className: cssConstants.ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);

    let mapView = options.mapController.map.getView();

    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = mapView.getZoom();

    updateZoomlevel = function () {
      element.innerHTML = parseInt(mapView.getZoom());
    };

    options.mapController.map.getView().on('change:resolution', function() {
      updateZoomlevel();
    });

    this.view = mapView;

    // inheritance-stuff
    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });
  }
}

