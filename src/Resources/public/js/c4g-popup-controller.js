/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import {C4gPopup} from './c4g-popup';

export class C4gPopupController {

  constructor(proxy) {
    this.mapController = proxy.options.mapController;
    this.mapData = proxy.options.mapController.data;
    this.popupHandling = parseInt(this.mapData.popupHandling, 10);
    this.external = !!this.mapData.popupDiv;
    this.popups = [];
  }

  addPopUp(popupConfig = null) {
    this.popups.push(new C4gPopup(this));
    if (popupConfig) {
      this.popups[this.popups.length -1].setContent(popupConfig);
    }
  } // end of "addPopUp()"
  setPopup(popupConfig) {
    if (!this.popups[0]) {
      this.popups.push(new C4gPopup(this));
    }
    this.popups[0].setContent(popupConfig);
  } // end of "setPopup()"
}