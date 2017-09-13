// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

(function ($, c4g) {
  'use strict';

  /**
   * Displays a overviewmap on the map.
   *   This class wraps the ovm a bit differently than
   *   the standard ol-overviemap, to allow proper css-transitions.
   *
   *   Not clean, but unique ;)
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
      tipLabel: c4g.maps.constant.i18n.CTRL_OVERVIEWMAP,
      layers: [new ol.layer.Tile({source: new ol.source.OSM()})]
    }, options);

    element = document.createElement('div');
    element.className = c4g.maps.constant.css.OL_CONTROL + ' ' + c4g.maps.constant.css.OVERVIEWMAP + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;
    if (options.collapsed) {
      element.className += ' ' + c4g.maps.constant.css.CLOSE;
    } else {
      element.className += ' ' + c4g.maps.constant.css.OPEN;
    }
    options.target.appendChild(element);

    trigger = document.createElement('button');
    trigger.title = options.tipLabel;
    element.appendChild(trigger);

    triggerIcon = document.createElement('span');
    triggerIcon.className = c4g.maps.constant.css.ICON;
    trigger.appendChild(triggerIcon);

    $(trigger).click(function () {
      if ($(element).hasClass(c4g.maps.constant.css.CLOSE)) {
        $(element).removeClass(c4g.maps.constant.css.CLOSE)
            .addClass(c4g.maps.constant.css.OPEN);
      } else {
        $(element).addClass(c4g.maps.constant.css.CLOSE)
            .removeClass(c4g.maps.constant.css.OPEN);
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