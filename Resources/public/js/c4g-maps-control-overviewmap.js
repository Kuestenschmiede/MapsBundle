// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

import {cssConstants} from "./c4g-maps-constant";
import {langConstantsGerman} from "./c4g-maps-constant-i18n-de";
import {langConstantsEnglish} from "./c4g-maps-constant-i18n-en";

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
   * Displays a overviewmap on the map.
   *   This class wraps the ovm a bit differently than
   *   the standard ol-overviemap, to allow proper css-transitions.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  c4g.maps.control.OverviewMap = function (options) {

    var element,
        trigger,
        triggerIcon,
        ovm;

    // default options
    options = $.extend({
      collapsed: true,
      tipLabel: langConstants.CTRL_OVERVIEWMAP,
      layers: [new ol.layer.Tile({source: new ol.source.OSM()})]
    }, options);

    element = document.createElement('div');
    element.className = cssConstants.OL_CONTROL + ' ' + cssConstants.OVERVIEWMAP + ' ' + cssConstants.OL_UNSELECTABLE;
    if (options.collapsed) {
      element.className += ' ' + cssConstants.CLOSE;
    } else {
      element.className += ' ' + cssConstants.OPEN;
    }
    options.target.appendChild(element);

    trigger = document.createElement('button');
    trigger.title = options.tipLabel;
    element.appendChild(trigger);

    triggerIcon = document.createElement('span');
    triggerIcon.className = cssConstants.ICON;
    trigger.appendChild(triggerIcon);

    $(trigger).click(function () {
      if ($(element).hasClass(cssConstants.CLOSE)) {
        $(element).removeClass(cssConstants.CLOSE)
            .addClass(cssConstants.OPEN);
      } else {
        $(element).addClass(cssConstants.CLOSE)
            .removeClass(cssConstants.OPEN);
      }
      try {
        this.blur();
      } catch (ignore) {
      }
    });

    ovm = new ol.control.OverviewMap({
      collapsible: false,
      collapsed: false,
      target: element,
      layers: options.layers
    });

    return ovm;
  };


  /*
   * Add methods
   */
  c4g.maps.control.OverviewMap.prototype = $.extend(c4g.maps.control.OverviewMap.prototype, {

    // nothing to add here

  }); // end of "add methods" ---

}(jQuery, this.c4g));

export var OverviewMap = this.c4g.maps.control.OverviewMap;