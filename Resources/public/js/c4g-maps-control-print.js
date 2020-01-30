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

import {cssConstants} from './c4g-maps-constant';
import {Control} from 'ol/control';
import {toBlob} from 'dom-to-image-more';
import {saveAs} from 'file-saver';


'use strict';
export class Print extends Control {

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
    options = jQuery.extend({
      className: cssConstants.PRINT,
      switchable: true,
      enabled: true,
      mapController: undefined
    }, options);

    if (!options.mapController) {
      return false;
    }

    var map = options.mapController.map;
    var mapData = options.mapController.data;

    // export options for html-to-image.
    // See: https://github.com/bubkoo/html-to-image#options
    var exportOptions = {
      filter: function(element) {
        return element.className ? (((element.className.indexOf('ol-control') === -1) || element.className.indexOf('ol-attribution') !== -1) && (element.className.indexOf('c4g-open') === -1)) : true;
      },
      bgcolor: '#000000'
    };

    var toggle = function (event) {
       event.stopPropagation();
       if (map.getTarget()) {
          let target = document.getElementById(map.getTarget());
          toBlob(target, exportOptions)
              .then(function(blob) {
                 saveAs(blob, 'map.png');
               });
       }
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
      button.addEventListener('click', toggle, {useCapture: false, passive: true});
      button.addEventListener('touchstart', toggle, {useCapture: false, passive: true});
    }

    // inheritance-stuff
    Control.call(this, {
      element: element,
      target: options.target
    });
  }

}
