// "namespace"
import {langConstantsEnglish} from "./c4g-maps-constant-i18n-en";

this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

import {cssConstants} from "./c4g-maps-constant";
import {langConstantsGerman} from "./c4g-maps-constant-i18n-de";
import {utils} from "./c4g-maps-utils";

let langConstants = {};

if (mapData) {
  if (mapData.lang === "de") {
    langConstants = langConstantsGerman;
  } else if (mapData.lang === "en") {
    langConstants = langConstantsEnglish;
  } else {
    // fallback
    langConstants = langConstantsGerman;
  }
}

(function ($, c4g) {
  'use strict';

  /**
   * Control to toggle the intial map position on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  c4g.maps.control.Home = function (opt_options) {

    var self = this;
    var options = opt_options || {};

    var element,
        button;

    // default options
    options = $.extend({
      className: cssConstants.OL_ZOOM_HOME,
      switchable: true,
      enabled: true,
      mapController: undefined
    }, options);

    if (!options.mapController) {
      return false;
    }

    var view = options.mapController.map.getView();
    var mapData = options.mapController.data;

    var toggle = function (event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();

      view.setCenter(ol.proj.transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'));
      view.setZoom(parseInt(mapData.center.zoom, 10));
      view.setRotation(parseFloat(mapData.center.rotation));

      // check userposition
      var geoLocation;
      if (mapData.geolocation) {
        geoLocation = new ol.Geolocation({
          tracking: true,
          projection: view.getProjection()
        });

        geoLocation.on('change', function (evt) {
          view.setCenter(geoLocation.getPosition());
          if (mapData.geolocation_zoom) {
            view.setZoom(parseInt(mapData.geolocation_zoom, 10));
          }
          geoLocation.setTracking(false);
        });
      }

      options.mapController.map.setView(view);
      utils.redrawMapView(options.mapController);
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + cssConstants.OL_UNSELECTABLE + ' button';

    if (options.switchable) {
      // button
      button = document.createElement('button');
      button.title = options.tipLabel;
      element.appendChild(button);

      // set onClick to the toggle-function
      button.addEventListener('click', toggle, false);
      button.addEventListener('touchstart', toggle, false);
    }

    // inheritance-stuff
    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });
  };
  ol.inherits(c4g.maps.control.Home, ol.control.Control);


  /*
   * Add methods
   */
  c4g.maps.control.Home.prototype = $.extend(c4g.maps.control.Home.prototype, {

    // nothing to add here

  }); // end of "add methods" ---

}(jQuery, this.c4g));

export var Home = this.c4g.maps.control.Home;