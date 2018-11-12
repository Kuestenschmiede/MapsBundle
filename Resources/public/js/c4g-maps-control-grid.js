// "namespace"

this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

import {cssConstants} from "./c4g-maps-constant";
import {langConstantsEnglish} from "./c4g-maps-constant-i18n-en";
import {langConstantsGerman} from "./c4g-maps-constant-i18n-de";

let langConstants = {};

if (typeof mapData !== "undefined") {
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
   * Control to toggle a grid on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  c4g.maps.control.Grid = function (opt_options) {

    var self = this;
    var options = opt_options || {};

    var element,
        button;

    var objGrid = new ol.Graticule({
        /*
        strokeStyle: new ol.style.Stroke({
            width: 2,
            lineDash: [0.5, 4]
        }),*/
        showLabels: true
    });

    // default options
    options = $.extend({
      className: cssConstants.GRATICULE,
      switchable: true,
      tipLabel: langConstants.CTRL_GRID,
      label: '#',
      disableLabel: '[]'
    }, options);

    // @TODO move functions to prototype?
    //
    // function to enable the grid
    var enable = function () {
      objGrid.setMap(self.getMap());
      $(element).addClass(cssConstants.ENABLED);
      // if (options.caching) {
      //     c4g.maps.utils.storeValue('grid', '1');
      // }
    };

    // function to disable the grid
    var disable = function () {
      objGrid.setMap(null);
      $(element).removeClass(cssConstants.ENABLED);
      // if (options.caching) {
      //     c4g.maps.utils.storeValue('grid', '0');
      // }
    };

    // function to toggle the grid
    var toggle = function (event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();
      if (objGrid.getMap()) {
        disable();
      } else {
        enable();
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + cssConstants.OL_UNSELECTABLE + ' ' + cssConstants.OL_CONTROL;

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

    // if (options.caching && (c4g.maps.utils.getValue('grid') == '1')) {
    //     objGrid.setMap(self.getMap());
    //     $(element).addClass(cssConstants.ENABLED);
    // }

  };
  ol.inherits(c4g.maps.control.Grid, ol.control.Control);


  /*
   * Add methods
   */
  c4g.maps.control.Grid.prototype = $.extend(c4g.maps.control.Grid.prototype, {

    // nothing to add here

  }); // end of "add methods" ---

}(jQuery, this.c4g));

export var Grid = this.c4g.maps.control.Grid;