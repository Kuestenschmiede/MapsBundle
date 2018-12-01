import {cssConstants} from "./c4g-maps-constant";
import {langConstants} from "./c4g-maps-constant-i18n-de";
'use strict';
export class Position extends ol.control.Control {


  /**
   * Control to toggle the browser/desvice position on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  constructor(opt_options) {
    super(opt_options);

    var self = this;
    var options = opt_options || {};

    var element,
      button;

    // default options
    options = $.extend({
      className: cssConstants.OL_ZOOM_POS,
      switchable: true,
      enabled: true,
      mapController: undefined
    }, options);

    if (!options.mapController) {
      return false;
    }

    var view = options.mapController.map.getView();
    var mapData = options.mapController.data;

    var enable = function () {
      $(element).addClass(cssConstants.ENABLED);
    };

    var disable = function () {
      $(element).removeClass(cssConstants.ENABLED);
    };

    var toggle = function (event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();

      var geoLocation = new ol.Geolocation({
        tracking: true,
        projection: view.getProjection()
      });

      geoLocation.on('change', function (evt) {
        view.setCenter(geoLocation.getPosition());
        // if (mapData.geolocation_zoom) {
        //    view.setZoom(mapData.geolocation_zoom);
        // } else {
        view.setZoom(18);
        //}
        geoLocation.setTracking(false);
        options.mapController.map.setView(view);
        c4g.maps.utils.redrawMapView(options.mapController);
      });
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
    ol.inherits(Position, ol.control.Control);
  }
}