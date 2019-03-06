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

import {cssConstants} from "./c4g-maps-constant";

'use strict';

export class Print extends ol.control.Control {

  /**
   * Control to toggle the browser/desvice position on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  constructor (opt_options) {
    super(opt_options);
    var self = this;
    var options = opt_options || {};

    var element,
      button;

    // default options
    options = $.extend({
      className: cssConstants.PRINT,
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
      let canvas = document.getElementsByClassName("ol-unselectable")[0];

      canvas.toBlob(function(blob) {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'map.png';
        a.click();
        window.URL.revokeObjectURL(url);
      });
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + cssConstants.OL_UNSELECTABLE + ' c4g-portside-control ol-control';

    if (options.switchable) {
      // button
      button = document.createElement('button');
      button.title = options.tipLabel;
      button.className = cssConstants.PRINT;
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
  }

}