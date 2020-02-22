/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
import {cssConstants} from "./c4g-maps-constant";
import {getLanguage} from "./c4g-maps-i18n";
import {OverviewMap as OvMap} from "ol/control";

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
        triggerIcon;

    let langConstants = getLanguage(options.mapController.data);
    // default options
    this.options = jQuery.extend({
      collapsed: false,
      tipLabel: langConstants.CTRL_OVERVIEWMAP,
      layers: [Object.create(options.layers[0])]
    }, options);
    this.mapController = options.mapController;

    element = document.createElement('div');
    element.className = cssConstants.OVERVIEWMAP + ' ' + cssConstants.OL_UNSELECTABLE + ' ' + cssConstants.OL_CONTROL;
    if (options.collapsed) {
      element.className += ' ' + cssConstants.CLOSE;
    } else {
      element.className += ' ' + cssConstants.OPEN;
    }
    options.target.appendChild(element);

    trigger = document.createElement('button');
    trigger.title = this.options.tipLabel;
    element.appendChild(trigger);

    triggerIcon = document.createElement('span');
    triggerIcon.className = cssConstants.ICON;
    trigger.appendChild(triggerIcon);

    jQuery(trigger).click(function () {
      if (jQuery(element).hasClass(cssConstants.CLOSE)) {
        jQuery(element).removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN);
        jQuery(options.ovmTarget).removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN);
      } else {
        jQuery(element).addClass(cssConstants.CLOSE).removeClass(cssConstants.OPEN);
        jQuery(options.ovmTarget).addClass(cssConstants.CLOSE).removeClass(cssConstants.OPEN);
      }
    });

    this.ovm = new OvMap({
      collapsed: options.collapsed || true,
      collapsible: false,
      rotateWithView: true,
      className: 'ol-overviewmap ol-custom-overviewmap',
      target: options.ovmTarget,
      layers: options.layers
    });

    this.element = element;
  }

  removeFromMap() {
    this.element.parentNode.removeChild(this.element);
  }

  getOverviewMap() {
    return this.ovm;
  }

  isOpen() {
    if (jQuery(this.element).hasClass(cssConstants.OPEN)) {
      return true;
    } else {
      return false;
    }
  }

}