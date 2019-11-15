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
import ReactDOM from "react-dom";
import React from "react";
import {PopupContainer} from "./components/c4g-popup-container.jsx";

export class C4gPopupController {

  constructor(proxy) {
    this.mapController = proxy.options.mapController;
    this.mapData = proxy.options.mapController.data;
    this.currentPopup = null;
    this.containerOpen = false;
  }

  addPopUp(popupContent) {

    let popUpElement,
      popUpCloseElement,
      popUpContent,
      popup;

    let popupOptions = {open: this.containerOpen, alwaysExtended: this.mapData.openDirectly, hideOther: this.mapController.hideOtherBottomComponents};
    this.popupHandling = parseInt(this.mapData.popupHandling, 10);

    if (window.c4gMapsPopup && window.c4gMapsPopup.popup) {
      this.mapController.map.removeOverlay(window.c4gMapsPopup.popup);
    }

    if (this.popupHandling === 3) {
      if (this.popupContainer) {
        ReactDOM.unmountComponentAtNode(this.popupContainer);
        delete this.mapController.components.popup;
        this.popupContainer.parentNode.removeChild(this.popupContainer);
      }
      this.popupContainer = document.createElement('div');
      this.popupComponent = ReactDOM.render(React.createElement(PopupContainer, popupOptions), this.popupContainer);
      this.mapController.$overlaycontainer_stopevent.append(this.popupContainer);
      this.currentPopup = this.popupComponent;
      this.mapController.components.popup = this.popupComponent;
      window.c4gMapsPopup = {};
      window.c4gMapsPopup.popup = this;
    } else {
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

      if (this.popupHandling === 1 || this.popupHandling === 0) {
        let autoPan = this.popupHandling === 1;
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
      } else if (this.popupHandling === 2) {
        $(popUpElement).addClass('c4g-popup-wrapper-nonose');
        popup = new Overlay({
          element: popUpElement,
          positioning: 'center-center',
          offset: [-50, 0],
          autoPan: false,
        });
      }
      window.c4gMapsPopup = {};
      window.c4gMapsPopup.popup = this;
      // attach a spinner to the popup
      window.c4gMapsPopup.spinner = new Spinner({target: popUpElement});

      this.mapController.map.addOverlay(popup);
      this.currentPopup = popup;
      window.c4gMapsPopup.$popup = jQuery(this.getElement());
      window.c4gMapsPopup.$content = jQuery('.c4g-popup-content', window.c4gMapsPopup.$popup);
    }
  } // end of "addPopUp()"

  setPopup(popupConfig) {
    var feature,
      layer,
      popupContent,
      self = this;

    feature = popupConfig.feature;
    layer = popupConfig.layer;
    if (feature.get('features')) {
      let features = feature.get('features');
      for (let i = 0; i < features.length; i++) {
        popupContent += utils.replaceAllPlaceholders(popupConfig.popup.content, features[i], layer, this.mapController.data.lang);
      }
    } else {
      popupContent = utils.replaceAllPlaceholders(popupConfig.popup.content, feature, layer, this.mapController.data.lang);
    }
    if (this.popupHandling !== 3) {
      if (parseInt(this.mapData.popupHandling, 10) !== 2) {
        let autoPan = parseInt(this.mapData.popupHandling, 10) === 1;
        if (autoPan) {
          let mapSelector = "#" + this.mapController.data.mapDiv + " canvas";
          let mapElement = document.querySelector(mapSelector);
          let maxHeightPopup = mapElement.offsetHeight - 50;
          $(window.c4gMapsPopup.popup.element).css("max-height", maxHeightPopup);
        }
      }

      if (popupContent.trim()) {
        window.c4gMapsPopup.$content.html(popupContent);
        if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_appendPopup === 'object') {
          utils.callHookFunctions(window.c4gMapsHooks.proxy_appendPopup, {popup: popupConfig, mapController: this.mapController});
        }
        if (feature.getGeometry() && feature.getGeometry().getType() === 'Point') {
          if (self.mapData.popupHandling && self.mapData.popupHandling !== '2') {
            window.c4gMapsPopup.popup.setPosition(feature.getGeometry().getCoordinates());
          } else {
            window.c4gMapsPopup.popup.setPosition(self.mapController.map.getView().getCenter());
          }
        } else if(feature.getGeometry() && feature.getGeometry().getType() === 'Polygon') {
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
    } else {
      this.currentPopup.setState({content: popupContent});
    }


  } // end of "setPopup()"

  close () {
    if (this.popupHandling < 3) {
      this.currentPopup.close();
    } else {
      this.currentPopup.setState({open: false});
    }
  }

  /**
   * @TODO
   * [show description]
   *
   * @return  {[type]}  [description]
   */
  show () {
    if (this.popupHandling < 3) {
      this.currentPopup.show();
    } else {
      console.log("show");
    }
  }

  /**
   * @TODO
   * [hide description]
   *
   * @return  {[type]}  [description]
   */
  hide () {
    if (this.popupHandling < 3) {
      this.currentPopup.hide();
    }
  }

  /**
   * @TODO
   * [getContent description]
   *
   */
  getContent () {
    if (this.popupHandling < 3) {
      return this.currentPopup.getContent();
    }

  }

  /**
   * @TODO
   * [getPosition description]
   *
   */
  getPosition () {
    if (this.popupHandling < 3) {
      return this.currentPopup.getPosition();
    }
  }

  /**
   * @TODO
   * [setContent description]
   *
   * @param  {[type]}  content  [description]
   */
  setContent (content) {
    if (this.popupHandling < 3) {
      this.currentPopup.setContent(content);
    } else {
      this.currentPopup.setContent(content);
    }
  }

  /**
   * @TODO
   * [setPosition description]
   *
   * @param  {[type]}  coordinates  [description]
   */
  setPosition (coordinates) {
    if (this.popupHandling < 3) {
      this.currentPopup.setPosition(coordinates);
    } else {
      this.containerOpen = true;
    }
  }

  getElement () {
    if (this.popupHandling < 3) {
      return this.currentPopup.getElement();
    }
  }
}