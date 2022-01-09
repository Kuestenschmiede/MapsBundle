/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import {cssConstants} from "./c4g-maps-constant";
import {Overlay} from "ol";

'use strict';
export class TooltipPopUp {


  /**
   * @TODO
   * [TooltipPopUp description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  constructor (opt_options) {

    var self,
      addClassName,
      closeButton;

    self = this;
    this.options = opt_options || {};

    // default options
    this.options = jQuery.extend({
      // className: ''
      // closeFunction: null
      // map: null
      horizontal: false,
      closeable: false,
      offset: [1, -1],
      position: [0, 0]
    }, this.options);

    // prepare additional classes
    addClassName = '';
    if (this.options.className) {
      addClassName = ' ' + this.options.className;
    }
    if (this.options.horizontal) {
      addClassName += ' ' + cssConstants.HORIZONTAL;
    }
    if (this.options.closeable) {
      addClassName += ' ' + cssConstants.CLOSEABLE;
    }

    this.element = document.createElement('div');
    this.element.className = cssConstants.TOOLTIP_POPUP + addClassName;

    if (this.options.closeable) {
      closeButton = document.createElement('button');
      closeButton.className = cssConstants.ICON + ' ' + cssConstants.POPUP_CLOSE;
      this.element.appendChild(closeButton);

      jQuery(closeButton).click(function () {
        self.close();
      });
    }

    this.contentContainer = document.createElement('div');
    this.element.appendChild(this.contentContainer);

    this.overlay = new Overlay({
      element: this.element,
      insertFirst: false,
      offset: this.options.offset,
      positioning: this.options.orientation
    });

    if (this.options.map) {
      this.options.map.addOverlay(this.overlay);
    }

    if (this.options.position) {
      this.overlay.setPosition(this.options.position);
    }
  }

  close () {
    if (typeof this.options.closeFunction === 'function') {
      this.options.closeFunction();
    }

    if (this.options.map) {
      this.options.map.removeOverlay(this.overlay);
    }
  }

  /**
   * @TODO
   * [show description]
   *
   * @return  {[type]}  [description]
   */
  show () {
    if (jQuery(this.element).hasClass(cssConstants.HIDE)) {
      jQuery(this.element).removeClass(cssConstants.HIDE);
    }
  }

  /**
   * @TODO
   * [hide description]
   *
   * @return  {[type]}  [description]
   */
  hide () {
    if (!jQuery(this.element).hasClass(cssConstants.HIDE)) {
      jQuery(this.element).addClass(cssConstants.HIDE);
    }
  }

  /**
   * @TODO
   * [getContent description]
   *
   */
  getContent () {
    return this.contentContainer.innerHTML;
  }

  /**
   * @TODO
   * [getPosition description]
   *
   */
  getPosition () {
    return this.overlay.getPosition();
  }

  /**
   * @TODO
   * [setContent description]
   *
   * @param  {[type]}  content  [description]
   */
  setContent (content) {
    this.contentContainer.innerHTML = content;
  }

  /**
   * @TODO
   * [setPosition description]
   *
   * @param  {[type]}  coordinates  [description]
   */
  setPosition (coordinates) {
    this.overlay.setPosition(coordinates);
  }

} // End of "add methods to TooltipPopUp"
