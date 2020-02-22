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

'use strict';
export class Spinner {

  /**
   * @TODO
   * [Spinner description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  constructor(opt_options) {

    var options,
      target,
      spinnerSpan;

    options = opt_options || {};

    // default options
    options = jQuery.extend({
      className: '',
      target: '.' + cssConstants.OL_VIEWPORT
    }, options);

    if (options.className) {
      options.className = ' ' + options.className;
    }

    this.element = document.createElement('div');
    this.element.className = cssConstants.SPINNER + options.className + ' ' + cssConstants.HIDE;
    jQuery(options.target).append(this.element);

    spinnerSpan = document.createElement('span');
    spinnerSpan.className = cssConstants.ICON + ' ' + cssConstants.ANIMATION_SPIN;
    this.element.appendChild(spinnerSpan);

    this.additionalActivationCounter = 0;

  }

  show() {
    if (jQuery(this.element).hasClass(cssConstants.HIDE)) {
      jQuery(this.element).removeClass(cssConstants.HIDE);
    } else {
      this.additionalActivationCounter += 1;
    }
  }

  hide() {
    if (jQuery(this.element).hasClass(cssConstants.HIDE)) {
      //console.warn('Spinner is already hidden.');
    } else {
      if (this.additionalActivationCounter === 0) {
        jQuery(this.element).addClass(cssConstants.HIDE);
      } else {
        this.additionalActivationCounter -= 1;
      }
    }
  }
}