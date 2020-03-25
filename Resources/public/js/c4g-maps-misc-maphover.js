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

import {TooltipPopUp} from "./c4g-maps-misc-tooltippopup";
import {utils} from "./c4g-maps-utils";
import {unByKey} from "ol/Observable";
import {cssConstants} from "./c4g-maps-constant";

'use strict';
export class MapHover {

  /**
   * @TODO
   * [MapHover description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  constructor(options) {

    this.options = options || {};

    // default options
    this.options = jQuery.extend({
      // mapController: undefined,
      activate: true
    }, this.options);

    if (!this.options.mapController) {
      console.warn('MapHover needs a mapController');
      return false;
    }

    // set needed vars
    this.listenerKey = false;
    this.map = this.options.mapController.map;
    this.lastFeatureStyle = null;
    this.lastHoveredFeature = null;

    // create tooltip
    this.hoverTooltip = new TooltipPopUp({
      map: this.map,
      offset: [10, 10],
      horizontal: true,
      closeable: false
    });
    this.hoverTooltip.hide();

    if (this.options.activate) {
      this.activate();
    }
  }


  /**
   * @TODO: [activate description]
   *
   * @return  {[type]}  [description]
   */
  activate() {
    if (!this.listenerKey) {
      this.listenerKey = this.map.on('pointermove', this.getHoverFunction(), this);
      //this.map.on('pointermove', this.changeFeatureStyles(), this);
    }
  } // end of "activate()"


  /**
   * @TODO: [deactivate description]
   *
   * @return  {[type]}  [description]
   */
  deactivate() {
    if (this.listenerKey) {
      unByKey(this.listenerKey);
      this.listenerKey = false;
    }
  } // end of "deactivate()"


  /**
   * @TODO: [isActive description]
   *
   * @return  {[type]}  [description]
   */
  isActive() {
    if (this.listenerKey) {
      return true;
    }
    return false;
  } // end of "getState()"


  /**
   * @TODO: [getHoverFunction description]
   *
   * @return  {[type]}  [description]
   */
  getHoverFunction() {

    var self = this;

    return function (event) {

      var hovered,
        clustered,
        tooltipContent,
        tooltipHelper,
        features,
        tooltipLength,
        resolution,
        canvas,
        mapData = self.options.mapController.data,
        proxy = self.options.mapController.proxy;

      clustered = false;
      hovered = self.map.forEachFeatureAtPixel(event.pixel,
        (feature, layer) => {
          return {
            feature: feature,
            layer: layer
          };
        });
      resolution = self.map.getView().getResolution();

      if (!hovered) {
        self.hoverTooltip.hide();
        canvas = document.querySelector(".ol-viewport");
        jQuery(canvas).css('cursor', 'default');
        if (mapData.hover_popups === '1' && mapData.hover_popups_stay != '1') {
          window.c4gMapsPopup.$popup.removeClass(cssConstants.ACTIVE);
        }

        if (self.lastHoveredFeature && self.lastFeatureStyle) {
          self.lastHoveredFeature.setStyle(self.lastFeatureStyle);
          self.lastHoveredFeature = null;
        }
        return false;
      }


      canvas = document.querySelector(".ol-viewport");
      jQuery(canvas).css('cursor', 'pointer');

      if (hovered.feature && typeof hovered.feature.get === 'function' && hovered.feature.get('features')) {
        if (hovered.feature.get('features')[1]) {
          clustered = true;
        }
        else {
          hovered.feature = hovered.feature.get('features')[0];
        }
      }
      if (hovered.feature.getGeometry() && hovered.feature.getGeometry().getType() === 'LineString') {
        return false;
      }
      if (hovered.feature.get("hover_location") || (self.lastHoveredFeature && self.lastHoveredFeature.get("hover_location"))) {
        if (self.lastHoveredFeature && hovered.feature === self.lastHoveredFeature) {
          return false;
        }

        //set back styles when the features are not hovered anymore
        if (self.lastFeatureStyle) {
          if (self.lastHoveredFeature) {
            if (hovered.feature !== self.lastHoveredFeature) {
              if (self.lastFeatureStyle) {
                self.lastHoveredFeature.setStyle(self.lastFeatureStyle);
                //console.log("Changed back feature style");
              } else if (self.lastLayerStyle) {
                self.lastHoveredFeature.setStyle(self.lastLayerStyle);
                //console.log("Changed back layer-feature style");
              }
            }
          }
        }


        if (hovered.feature && typeof hovered.feature.getStyleFunction &&
          typeof hovered.feature.getStyleFunction === 'function' &&
          typeof hovered.feature.getStyleFunction() === 'function') {
          self.lastHoveredFeature = hovered.feature;

          if (!(self.lastFeatureStyle = hovered.feature.getStyle())) {
            self.lastLayerStyle = hovered.layer.getStyle();
            self.lastFeatureStyle = self.lastLayerStyle(self.lastHoveredFeature);
          }

          //TODO get onhover style from db (vllt schon in proxy drin?)
          if (hovered.feature.get('hover_style') && proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")]) {
            if (proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction) {
              hovered.feature.setStyle(Function("feature", "data", "map", proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction)(hovered.feature));
            }
            else {
              let style = proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].style(hovered.feature);
              hovered.feature.setStyle(style);
            }
          }

        }
        else if (hovered.layer && typeof hovered.layer.getStyleFunction &&
          typeof hovered.layer.getStyleFunction === 'function' &&
          typeof hovered.layer.getStyleFunction() === 'function') {

          if (hovered.feature) {
            self.lastHoveredFeature = hovered.feature;
          }
          else {
            self.lastHoveredFeature = hovered.layer.getSource().getFeatures()[0];
            self.lastHoveredFeature = self.lastHoveredFeature.get('features')[0];
          }

          self.lastLayerStyle = hovered.layer.getStyle();
          self.lastFeatureStyle = self.lastLayerStyle(self.lastHoveredFeature);
          if (hovered.feature.get('hover_style')) {
            if (!proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")]) {
              var arrIds = [];
              arrIds.push(hovered.feature.get("hover_style"));
              proxy.locationStyleController.loadLocationStyles(arrIds);
              self.lastHoveredFeature = null;
              return null;
            }
            if (proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction) {
              hovered.feature.setStyle(Function("feature", "data", "map", proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction)(hovered.feature));
            }
            else {
              let style = proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].style(hovered.feature);
              hovered.feature.setStyle(style);
            }
          }

        }
      }

      if (hovered && hovered.feature && hovered.feature.get('styleUrl')) {
        //if this property is set, we have a feature that has none of our styles => no tooltip
        return false;
      }
      // catch the case the layer is a baselayer (vector tiles)
      if (hovered && hovered.layer && hovered.layer.type === "VECTOR_TILE") {
        return false;
      }

      // set hover tooltips
      tooltipContent = false;
      if (!clustered && hovered.feature && typeof hovered.feature.get === 'function' && (hovered.feature.get('tooltip') || hovered.feature.get('graphicTitle'))) {
        tooltipContent = hovered.feature.get('tooltip');
        if (!tooltipContent) {
          tooltipContent = hovered.feature.get('graphicTitle');
        } else if (typeof tooltipContent === 'object' && tooltipContent.element && tooltipContent.element.childNodes[1]) {
          tooltipContent = tooltipContent.element.childNodes[1].innerHTML;
        }
        // @TODO: Check & fix
      } else if (hovered.feature && typeof hovered.feature.getStyleFunction &&
        hovered.feature.get('locstyle') &&
        proxy.locationStyleController.arrLocStyles &&
        proxy.locationStyleController.arrLocStyles[hovered.feature.get('locstyle')] &&
        proxy.locationStyleController.arrLocStyles[hovered.feature.get('locstyle')].tooltip) {
        tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.feature.get('locstyle')].tooltip;
        // @TODO: Check
      } else if (hovered.layer && typeof hovered.layer.getStyleFunction &&
        typeof hovered.layer.getStyleFunction === 'function' &&
        typeof hovered.layer.getStyleFunction() === 'function' &&
        proxy.locationStyleController.arrLocStyles &&
        proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()] &&
        proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()].tooltip) {
        tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()].tooltip;
      } else if (hovered.layer &&
        typeof hovered.layer.getStyleFunction === 'function' &&
        typeof hovered.layer.getStyleFunction() === 'function' &&
        proxy.locationStyleController.arrLocStyles &&
        proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)] &&
        proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)].tooltip) {
        tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)].tooltip;
      } else if (hovered.layer && hovered.layer.tooltip) {
        tooltipContent = hovered.layer.tooltip;
      }
      if (clustered && hovered.feature.get('features')) {
        features = hovered.feature.get('features');
        if (features[0].get('tooltip') && features[0].get('tooltip_length')) {
          tooltipContent = features[0].get('tooltip');
          tooltipLength = parseInt(features[0].get('tooltip_length'));
          for (var i = 1; i < features.length; i++) {
            if (features[i].get('tooltip') && features[i].get('tooltip') != '') {
              tooltipContent = tooltipContent + ', ' + features[i].get('tooltip');
            }
          }
          if (tooltipContent.length > tooltipLength + 3) {
            if (tooltipContent = tooltipContent.slice(0, tooltipLength)) {
              tooltipContent = tooltipContent + '...';
            }

          }
        }
        else if (hovered.layer.tooltip && hovered.layer.tooltip_length) {
          tooltipHelper = tooltipContent;
          tooltipContent = '';
          tooltipLength = parseInt(hovered.layer.tooltip_length);
          for (i = 0; i < features.length; i++) {
            var singleTooltip = utils.replaceAllPlaceholders(tooltipHelper, features[i], hovered.layer, mapData.lang);
            if (singleTooltip != '') {
              if (tooltipContent == '') tooltipContent = singleTooltip;
              else tooltipContent = tooltipContent + ', ' + singleTooltip;
            }
          }
          if (tooltipContent.length > tooltipLength + 3) {
            if (tooltipContent = tooltipContent.slice(0, tooltipLength)) {
              tooltipContent = tooltipContent + '...';
            }

          }
        }

      }

      if (tooltipContent) {
        tooltipContent = utils.decodeGeoJsonProperty(tooltipContent);

        // replace placeholders if possible
        if (hovered.feature.get('features')) {


        }
        tooltipContent = utils.replaceAllPlaceholders(tooltipContent, hovered.feature, hovered.layer, mapData.lang);


        if (tooltipContent.trim()) {
          // popup config
          self.hoverTooltip.setPosition(event.coordinate);
          self.hoverTooltip.setContent(tooltipContent);
          self.hoverTooltip.show();
        } else {
          self.hoverTooltip.hide();
        }
      } else {
        self.hoverTooltip.hide();
      }
      if (mapData.hover_popups === '1' && !clustered && hovered.feature) {
        var popupInfos = {};

        if (hovered.feature.get('popup')) {
          popupInfos = hovered.feature.get('popup');
        }
        else if (hovered.feature.get('loc_linkurl')) {
          return;
        }
        else if (hovered.layer && hovered.layer.popup) {
          popupInfos = hovered.layer.popup;
        }
        else {
          return;
        }
        var coord = hovered.feature.getGeometry().getCoordinates();
        if (!coord || (coord && coord[0] && coord[0].length)) {
          var extent = hovered.feature.getGeometry().getExtent();
          coord = self.map.getCoordinateFromPixel(event.pixel);
          coord = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
        }

        window.c4gMapsPopup.popup.setPosition(coord);

        if (popupInfos.content) {
          self.options.mapController.proxy.popupController.addPopUp(popupInfos.content);
          if (self.options.mapController.proxy.mapData.popupHandling !== '3') {
            window.c4gMapsPopup.$content.html('');
            window.c4gMapsPopup.$popup.addClass(cssConstants.ACTIVE).addClass(cssConstants.LOADING);
            window.c4gMapsPopup.spinner.show();
          }

          if (popupInfos.async === false || popupInfos.async == '0') {
            let objPopup = {};
            objPopup.popup = popupInfos;
            objPopup.feature = hovered.feature;
            objPopup.layer = hovered.layer;
            // Call the popup hook for plugin specific popup content
            if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
              utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {popup: objPopup, mapController: self.options.mapController});
            }
            self.options.mapController.proxy.popupController.setPopup(objPopup);
          } else {
            jQuery.ajax({
              dataType: "json",
              url: self.options.mapController.proxy.api_infowindow_url + '/' + popupInfos.content
            }).done(function(data) {
              var popupInfo = {
                async: popupInfos.async,
                content: data.content,
                popup: popupInfos.popup,
                routing_link: popupInfos.routing_link
              };

              let objPopup = {};
              objPopup.popup = popupInfo;
              objPopup.feature = hovered.feature;
              objPopup.layer = hovered.layer;

              // Call the popup hook for plugin specific popup content
              if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
                utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {popup: objPopup, mapController: self.options.mapController});
              }
              self.options.mapController.proxy.popupController.setPopup(objPopup);
            });
          }
        } else {
          if (self.options.mapController.proxy.mapData.popupHandling !== '3') {
            window.c4gMapsPopup.$popup.removeClass(cssConstants.ACTIVE);
          } else {
            self.options.mapController.proxy.popupController.close();
          }
        }
          /*  window.c4gMapsPopup.$content.html('');
          window.c4gMapsPopup.$popup.addClass(cssConstants.ACTIVE).addClass(cssConstants.LOADING);
          window.c4gMapsPopup.spinner.show();

          let popupProxy = self.options.mapController.proxy.popupController;

          if (popupInfos.async === false) {
            var objPopup = {};
            objPopup.popup = popupInfos;
            objPopup.feature = hovered.feature;
            objPopup.layer = hovered.layer;
            // Call the popup hook for plugin specific popup content
            if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
              utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
            }
            popupProxy.setPopup(objPopup);
          } else {
            jQuery.ajax({
              dataType: "json",
              url: popupProxy.api_infowindow_url + '/' + popupInfos.content,
              done: function (data) {
                var popupInfo = {
                  async: popupInfos.async,
                  content: data.content,
                  popup: popupInfos.popup,
                  routing_link: popupInfos.routing_link
                };

                var objPopup = {};
                objPopup.popup = popupInfo;
                objPopup.feature = hovered.feature;
                objPopup.layer = hovered.layer;

                // Call the popup hook for plugin specific popup content
                if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
                  utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                }

                popupProxy.setPopup(objPopup);
              }
            });
          }
        } else {
          window.c4gMapsPopup.$popup.removeClass(cssConstants.ACTIVE);*/
      }


    };
  } // end of "getHoverFunction()"

  changeFeatureStyles() {
    //TODO: change style of features which are hovered and have the option to change style on hover enabled
  }


}
