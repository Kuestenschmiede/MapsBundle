import {cssConstants} from "./c4g-maps-constant";
import {langConstants} from "./c4g-maps-i18n";
'use strict';
export class OverviewMap {

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
  constructor (options) {

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
    element.className = cssConstants.OVERVIEWMAP + ' ' + cssConstants.OL_UNSELECTABLE + ' ' + cssConstants.OL_CONTROL;
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
      target: element
    });
    return ovm;
  }

}