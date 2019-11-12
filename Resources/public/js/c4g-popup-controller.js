/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import {cssConstants} from "./c4g-maps-constant";
import {Overlay} from "ol";
import {Spinner} from "./c4g-maps-misc-spinner";
import {utils} from "./c4g-maps-utils";

export class C4gPopupController {
  constructor(proxy) {
    this.mapController = proxy.options.mapController;
    this.mapData = proxy.options.mapController.data;
  }

  addPopUp(popupContent) {

    let popUpElement,
      popUpCloseElement,
      popUpContent,
      popup;


    if (window.c4gMapsPopup && window.c4gMapsPopup.popup) {
      this.mapController.map.removeOverlay(window.c4gMapsPopup.popup);
    }

    popUpElement = document.createElement('div');
    popUpElement.setAttribute('id', 'c4g_popup_' + this.mapData.mapId);
    popUpElement.className = 'c4g-popup-wrapper';

    popUpCloseElement = document.createElement('button');
    popUpCloseElement.className = "c4g-popup-close c4g-icon";

    popUpContent = document.createElement('div');
    popUpContent.className = "c4g-popup-content";

    popUpElement.appendChild(popUpCloseElement);
    popUpElement.appendChild(popUpContent);
    jQuery(popUpCloseElement).click(function (event) {
      event.preventDefault();
      window.c4gMapsPopup.$popup.removeClass(cssConstants.ACTIVE);
    });

    if (parseInt(this.mapData.popupHandling, 10) !== 2) {
      let autoPan = parseInt(this.mapData.popupHandling, 10) === 1;
      if (autoPan) {
        // let mapSelector = "#" + this.options.mapController.data.mapDiv + " > div > canvas";
        // let mapElement = document.querySelector(mapSelector);
        // let maxHeightPopup = mapElement.offsetHeight - 50;
        // $(popUpElement).css("max-height", maxHeightPopup);
      }
      popup = new Overlay({
        element: popUpElement,
        positioning: 'bottom-left',
        offset: [-50, 0],
        autoPan: autoPan,
        autoPanAnimation: {
          duration: 250
        },
        autoPanMargin: 20
      });
    }
    else {
      $(popUpElement).addClass('c4g-popup-wrapper-nonose');
      popup = new Overlay({
        element: popUpElement,
        positioning: 'center-center',
        offset: [-50, 0],
        autoPan: false,
      });
    }
    window.c4gMapsPopup = {};
    window.c4gMapsPopup.popup = popup;
    // attach a spinner to the popup
    window.c4gMapsPopup.spinner = new Spinner({target: popUpElement});

    this.mapController.map.addOverlay(popup);

    window.c4gMapsPopup.$popup = jQuery(window.c4gMapsPopup.popup.getElement());
    window.c4gMapsPopup.$content = jQuery('.c4g-popup-content', window.c4gMapsPopup.$popup);
    this.currentPopup = window.c4gMapsPopup;

  } // end of "addPopUp()"

  setPopup(popupConfig) {
    var feature,
      layer,
      popupContent,
      self = this;

    if (parseInt(this.mapData.popupHandling, 10) !== 2) {
      let autoPan = parseInt(this.mapData.popupHandling, 10) === 1;
      if (autoPan) {
        let mapSelector = "#" + this.mapController.data.mapDiv + " canvas";
        let mapElement = document.querySelector(mapSelector);
        let maxHeightPopup = mapElement.offsetHeight - 50;
        $(window.c4gMapsPopup.popup.element).css("max-height", maxHeightPopup);
      }
    }
    feature = popupConfig.feature;
    layer = popupConfig.layer;
    if (feature.get('features')) {
      let features = feature.get('features');
      for (let i = 0; i < features.length; i++) {
        popupContent += utils.replaceAllPlaceholders(popupConfig.popup.content, features[i], layer, this.mapController.data.lang);
      }
    }
    else {
      popupContent = utils.replaceAllPlaceholders(popupConfig.popup.content, feature, layer, this.mapController.data.lang);
    }
    if (popupContent.trim()) {
      window.c4gMapsPopup.$content.html(popupContent);
      if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_appendPopup === 'object') {
        utils.callHookFunctions(window.c4gMapsHooks.proxy_appendPopup, {popup: popupConfig, mapController: this.mapController});
      }
      if (feature.getGeometry() && feature.getGeometry().getType() === 'Point') {
        if (self.mapData.popupHandling && self.mapData.popupHandling !== '2') {
          window.c4gMapsPopup.popup.setPosition(feature.getGeometry().getCoordinates());
        }
        else {

          window.c4gMapsPopup.popup.setPosition(self.mapController.map.getView().getCenter());
        }
      }
      else if(feature.getGeometry() && feature.getGeometry().getType() === 'Polygon') {
        let extent = feature.getGeometry().getExtent();
        let center = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2,];
        window.c4gMapsPopup.popup.setPosition(center);
      }
    } else {
      // hide popup if there is no valid content left
      window.c4gMapsPopup.$popup.removeClass(cssConstants.ACTIVE);
    }

    window.c4gMapsPopup.$popup.removeClass(cssConstants.LOADING);
    window.c4gMapsPopup.spinner.hide();
  } // end of "setPopup()"
}