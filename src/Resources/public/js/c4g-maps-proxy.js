/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
'use strict';

import {C4gBaselayerController} from "./c4g-baselayer-controller";
import {BetterLayerController} from "./c4g-layer-controller";
import {C4gLocationStyleController} from "./c4g-locationstyle-controller";
import {C4gPopupController} from "./c4g-popup-controller";
import {utils} from "./c4g-maps-utils";
import {cssConstants} from "./c4g-maps-constant";
import {getLanguage} from "./c4g-maps-i18n";
import {Vector} from "ol/layer";
import {LineString, Point} from "ol/geom";
import {toLonLat} from "ol/proj";
import {Circle, Fill, Stroke, Style, Text} from "ol/style";
import {Feature} from "ol";
import {Cluster, Vector as VectorSource} from "ol/source";

let langConstants = {};

export class MapProxy {
  constructor(options){
    var mapData;

    this.options = jQuery.extend({
      mapController: false
    }, options);
    if (!this.options.mapController) {
      return false;
    }

    // c4g.maps.editorStyles = c4g.maps.editorStyles || {};

    //window.c4gMapsHooks.proxy_fillPopup = [];

    this.hook_baselayer_loaded = [];
    this.hook_baselayer_visibility = [];
    this.hook_layer_loaded = [];
    this.hook_layer_visibility = [];
    this.hook_map_click = [];
    this.hook_map_zoom = [];
    this.hook_locstyles_loaded = [];

    // add global hook for accessibility when there is no proxy reference
    window.c4gMapsHooks = window.c4gMapsHooks || {};
    window.c4gMapsHooks.proxy_layer_loaded = window.c4gMapsHooks.proxy_layer_loaded || [];
    window.c4gMapsHooks.proxy_layer_drawn = window.c4gMapsHooks.proxy_layer_drawn || [];
    window.c4gMapsHooks.proxy_baselayer_loaded = window.c4gMapsHooks.proxy_baselayer_loaded || [];

    this.baselayerIds = [];
    this.layerIds = [];
    this.activeLayerIds = {};

    this.requestFunctions = {};
    this.request = {};

    this.baselayers_loaded = false;
    this.layers_loaded = false;

    mapData = this.options.mapController.data;
    langConstants = getLanguage(mapData);
    this.mapData = mapData;
    this.mapId = mapData.id;
    this.api_baselayer_url = this.options.mapController.data.api.baselayer + '/' + mapData.profile + '/' + this.mapData.lang;
    this.api_layer_url = this.options.mapController.data.api.layer + '/' + this.mapId + '/' + this.mapData.lang;
    this.api_layercontent_url = this.options.mapController.data.api.layercontent;
    //this.api_layercontentdata_url = this.options.mapController.data.api.layercontentdata;
    this.api_layercontentdata_url = "con4gis/layerContentDataService";
    this.api_locstyle_url = this.options.mapController.data.api.locstyle;
    this.api_infowindow_url = this.options.mapController.data.api.infowindow;
    this.options = options;
    this.clickObserverActive = true;


    // this.initialize();
  }

  initialize() {
    var self,
      map;

    self = this;
    map = this.options.mapController.map;

    this.baselayerController = new C4gBaselayerController(this);
    this.baselayerController.loadBaseLayers();
    this.layerController = new BetterLayerController(this);
    this.layerController.loadLayers();
    this.locationStyleController = new C4gLocationStyleController(this);
    this.popupController = new C4gPopupController(this);

    //TODO check this, nearly the same as below
    map.on('change:view', function () {
      // zoom-observer
      //
      map.getView().on('change:resolution', function () {
        var layerId,
          layer;

        // check layer zoom-bounds
        // @TODO: Use "self.activeLayerIds = false" ?
        for (layerId in self.activeLayerIds) {
          if (self.activeLayerIds.hasOwnProperty(layerId)) {
            layer = self.layerController.arrLayers[layerId];
            // if (self.checkLayerIsActiveForZoom(layerId)) {
            //   if (layer.isInactive) {
            //     self.layerController.showLayer(layerId);
            //   }
            // } else {
            //   self.layerController.hideLayer(layerId, true);
            // }
          }
        }

        // hooks
        utils.callHookFunctions(self.hook_map_zoom, self);

        if (self.options.mapController.data.caching && map.getView().getZoom()) {
            utils.storeValue('zoom', map.getView().getZoom());
        }


      }); // end of "zoom-observer"
    }); // end of "zoom-observer"

    // zoom-observer
    //
    map.getView().on('change:resolution', function () {
      var layerId,
        layer;

      // check layer zoom-bounds
      // @TODO: Use "self.activeLayerIds = false" ?
      for (layerId in self.activeLayerIds) {
        if (self.activeLayerIds.hasOwnProperty(layerId)) {
          layer = self.layerController.arrLayers[layerId];
          // if (self.checkLayerIsActiveForZoom(layerId)) {
          //   if (layer.isInactive) {
          //     self.layerController.showLayer(layerId);
          //   }
          // } else {
          //   self.layerController.hideLayer(layerId, true);
          // }
        }
      }

      // hooks
      utils.callHookFunctions(window.c4gMapsHooks.hook_map_zoom, self);

      if (self.options.mapController.data.caching && map.getView().getZoom()) {
          utils.storeValue('zoom', map.getView().getZoom());
      }

    }); // end of "zoom-observer"

    map.getView().on('change:center', function(evt){
        if (self.options.mapController.data.caching) {
            var coordinate = toLonLat(map.getView().getCenter());
            if (coordinate) {
                utils.storeValue('lon', coordinate[0]);
                utils.storeValue('lat', coordinate[1]);
            }
        }
        window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];
        utils.callHookFunctions(window.c4gMapsHooks.map_center_changed, map.getView().getCenter());
    }); // end of "center-observer"

    // click-observer
    //
    map.on('click', function (clickEvent) {

      var feature,
        fFeatures,
        layer,
        currentZoom,
        minZoom,
        newCenter,
        coord,
        setPopup,
        styleFunc,
        styleCluster;

      if (!self.clickObserverActive) {
        return false;
      }

      feature = map.forEachFeatureAtPixel(clickEvent.pixel,
        function (feature, layer) {
          return feature;
        },
        {
          hitTolerance: 5
        }
      );

      layer = map.forEachFeatureAtPixel(clickEvent.pixel,
        function (feature, layer) {
          return layer;
        },
        {
          hitTolerance: 5
        }
      );
      if (feature && feature.get('closeCluster')) {
        map.getView().dispatchEvent({
          type: "change:resolution"
        });
        return;
      }

      if(layer && layer.getStyle()) {
        styleFunc = layer.getStyle();
        if(typeof styleFunc === "function" && styleFunc(feature, currentZoom) && styleFunc(feature, currentZoom)['0']){
          styleCluster = styleFunc(feature, currentZoom) && styleFunc(feature, currentZoom)['0'] ? styleFunc(feature, currentZoom)['0'] : false;
          if (styleCluster && styleCluster.getImage()) {
              styleCluster.getImage().setScale(styleCluster.getImage().getScale()*0.7);
          }
        }
      }

      fFeatures = feature ? feature.get('features') : false;
      if (!(fFeatures && fFeatures.length === 1)) {
        // cluster multiple POI
        if (fFeatures) {
          if(fFeatures[0].get('cluster_popup') == 1) {
            map.getView().setCenter(clickEvent.coordinate);
            currentZoom = map.getView().getZoom();
            minZoom = self.options.mapController.data.cluster_all ? self.options.mapController.data.cluster_zoom : fFeatures['0'].get('cluster_zoom');
            if (currentZoom >= minZoom) {
              setPopup =[];
              setPopup.content = '';
              setPopup.async = false;
              for(var i = 0; i < fFeatures.length; i++){
                if (fFeatures[i].get && fFeatures[i].get('popup') && fFeatures[i].get('popup').content) {
                  setPopup.content = setPopup.content.concat(fFeatures[i].get('popup').content);
                }
              }
              feature = fFeatures[0].clone();
              feature.set('popup',setPopup);
            }
            else {
              map.getView().setZoom(currentZoom+1);
            }
          } else {
            layer.getSource().removeFeature(feature);
            currentZoom = map.getView().getZoom();
            newCenter = map.getCoordinateFromPixel(clickEvent.pixel);
            minZoom = fFeatures['0'].get('cluster_zoom') || self.options.mapController.data.cluster_zoom ;

            if (currentZoom >= minZoom) {
              //open the cluster after zooming
              var pix = map.getView().getResolution();
              var max = fFeatures.length;
              let clustDistance = self.options.mapController.data.cluster_dist_spider ? self.options.mapController.data.cluster_dist_spider : 20;
              let arrLinestring = [];
              var r = pix * clustDistance * (0.5 + max / 4);
              let stringSource = new VectorSource();
              for (var i = 0; i < max; i++) {
                var a = 2 * Math.PI * i / max;
                if (max == 2 || max == 4) a += Math.PI / 4;
                var p = [newCenter[0] + r * Math.sin(a), newCenter[1] + r * Math.cos(a)];
                var coordinate = toLonLat(p);
                let featureLinestring = new Feature(new LineString([newCenter, p]));
                featureLinestring.set('closeCluster', true);
                stringSource.addFeature(featureLinestring);
                let tempFeature = fFeatures[i].clone();
                tempFeature.setGeometry(new Point(p));
                layer.getSource().getSource().removeFeature(fFeatures[i]);
                stringSource.addFeature(tempFeature);
              }
              let layerStyleFunction = layer.getStyle();
              let styleFunction = (feature, resolution) => {
                if (feature && feature.getGeometry().getType() === "LineString") {
                  return new Style({
                    stroke: new Stroke({
                      width: 0.3,
                      color: "#000070"
                    })
                  });
                }
                else {
                  return layerStyleFunction(feature, resolution);
                }
              }

              let stringLayer = new Vector({
                zIndex: 9000001,
                source: stringSource,
                style: styleFunction
              });
              map.getView().once('change:resolution', function(evt) {
                layer.getSource().getSource().addFeatures(fFeatures);
                map.removeLayer(stringLayer);
              });
              map.addLayer(stringLayer);
            } else {
              currentZoom += 1;
              map.getView().animate({
                center: newCenter,
                zoom: currentZoom,
                duration: 500
              })
            }
          }
        }
      } else if ((fFeatures && fFeatures.length === 1)) {
        feature = fFeatures[0];
      }

      if (self.options.mapController.mapsControls.controls.editor && self.options.mapController.mapsControls.controls.editor.isOpen()) {
        // do not show popup when editor is open
        if (feature && feature.get('projectId')) {
            // but call click hooks
            let result = utils.callHookFunctions(self.hook_map_click, clickEvent);
            return false;
        }
      }

      if (feature && feature.get('loc_linkurl')) {
        let link = feature.get('loc_linkurl');
        while (link.lastIndexOf("[") != -1) {
          let subStr = link.substring(link.lastIndexOf('[') + 1, link.lastIndexOf(']'));
          let featureElement = "";
          if (feature.get(subStr)) {
            featureElement = feature.get(subStr).toLowerCase();
            featureElement.replace(" ", "-");
            featureElement = encodeURIComponent(featureElement);
          }
          link = link.substring(0, link.lastIndexOf('[')) + featureElement + link.substring(link.lastIndexOf(']') + 1);
        }
        if (self.options.mapController.data.link_newwindow === '1') {
          window.open(link);
        }
        else{
          window.open(link, "_self");
        }

      } else {
        if (feature && feature.get('zoom_onclick') && feature.get('zoom_onclick') != 0) {
          map.getView().setZoom(feature.get('zoom_onclick'));
          map.getView().setCenter(feature.getGeometry().getCoordinates());
        } else if (layer && layer.zoom_onclick && layer.zoom_onclick != 0) {
          map.getView().setZoom(layer.zoom_onclick);
          map.getView().setCenter(clickEvent.coordinate);
        }
        self.handlePopup(feature, layer);

        // hooks
        utils.callHookFunctions(window.c4gMapsHooks.hook_map_click, clickEvent);
      }
    }); // end of "click-observer"

  } // end of "initial"*
  handlePopup (feature, layer) {
    let popupInfos = {};
    const scope = this;
    if (feature && feature.get('popup')) {
      // single POI
      popupInfos = feature.get('popup');
      if (popupInfos && popupInfos.content === "${FNfnStandardInfoPopup}") {
        let popupContent = "${FNfnStandardInfoPopup}";
        popupContent = utils.replaceFunctionPlaceholders(popupContent, feature, layer, this.options.mapController.data.lang, this);
        popupInfos = popupInfos || {};
        popupInfos.content = popupContent;
        popupInfos.async = false;
      }
    }
    else if (layer && layer.popup) {
      popupInfos = layer.popup;
    }
    else {
      if (!this.mapData.popupMultiple) {
        this.popupController.removePopup();
      }
      return;
    }
    if (this.mapData.caching && parseInt(this.mapData.popupHandling, 10)) {
      utils.storeValue('popupInfos', JSON.stringify(popupInfos));
    }
    if (popupInfos.async === false || popupInfos.async == '0') {
      let objPopup = {};
      objPopup.popup = popupInfos;
      objPopup.feature = feature;
      objPopup.layer = layer;
      // Call the popup hook for plugin specific popup content
      if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
        utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {popup: objPopup, mapController: this.options.mapController});
      }
      if (this.mapData.popupMultiple) {
        this.popupController.addPopup(objPopup);
      }
      else {
        this.popupController.setPopup(objPopup);
      }
    } else {
      if (popupInfos.content && (typeof popupInfos.content === 'string') && popupInfos.content.indexOf(':') !== -1) {
        jQuery.ajax({
          dataType: "json",
          url: this.api_infowindow_url + '/' + popupInfos.content
        }).done(function(data) {
          var popupInfo = {
            async: popupInfos.async,
            content: data.content,
            popup: popupInfos.popup,
            routing_link: popupInfos.routing_link
          };

          let objPopup = {};
          objPopup.popup = popupInfo;
          objPopup.feature = feature;
          objPopup.layer = layer;

          // Call the popup hook for plugin specific popup content
          if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
            utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {popup: objPopup, mapController: scope.options.mapController});
          }
          if (scope.mapData.popupMultiple) {
            scope.popupController.addPopup(objPopup);
          }
          else {
            scope.popupController.setPopup(objPopup);
          }
        });
      }
    }
  }
  activateClickObserver() {
    this.clickObserverActive = true;
  }

  deactivateClickObserver() {
    this.clickObserverActive = false;
  }

  /**
   * @TODO: [checkLocationStyles description]
   *
   * @param   {[type]}  opt_options  [description]
   *
   * @return  {[type]}               [description]
   */
  // checkLocationStyles(opt_options) {
  //
  //   var options,
  //     neededLayerStyles,
  //     getLayerStyles,
  //     self = this;
  //
  //   if (opt_options && typeof opt_options === "object") {
  //     options = opt_options;
  //   } else {
  //     options = {};
  //   }
  //
  //   this.locationStyleController.arrLocStyles= this.locationStyleController.arrLocStyles || {};
  //
  //   neededLayerStyles = [];
  //   getLayerStyles = function (layers) {
  //     var i,
  //       element,
  //       index;
  //
  //     // ToDo: Rekursion integrieren (test mit forum)
  //     for (index in layers) {
  //       if (layers.hasOwnProperty(index)) {
  //         element = layers[index];
  //
  //         if (element.content) {
  //           for (i = 0; i < element.content.length; i += 1) {
  //
  //             if (element.content[i]) {
  //               if (
  //                 element.content[i].locationStyle
  //                 && element.content[i].locationStyle !== "0"
  //                 && neededLayerStyles.indexOf(element.content[i].locationStyle) === -1
  //                 && (
  //                   !self.locationStyleController.arrLocStyles[element.content[i].locationStyle]
  //                   || self.locationStyleController.arrLocStyles[element.content[i].locationStyle].style === undefined
  //                 )
  //               ) {
  //                 neededLayerStyles.push(element.content[i].locationStyle);
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   };
  //
  //   getLayerStyles(this.layerController.arrLayers);
  //
  //   if (neededLayerStyles.length > 0) {
  //     this.locationStyleController.loadLocationStyles(neededLayerStyles, options);
  //   } else {
  //     if (options.done && typeof options.done === "function") {
  //       options.done();
  //     }
  //   }
  // } // end of "checkLocationStyles()"

  checkLayerIsActiveForZoom(layerId, opt_zoom) {
    var layer,
      zoom,
      layerContent,
      locstyle;

    if (!this.layerController.arrLayers[layerId]) {
      return false;
    }

    layer = this.layerController.arrLayers[layerId];

    if (opt_zoom) {
      zoom = opt_zoom;
    } else if (this.options.mapController.map.getView().getZoom() > -1) {
      zoom = this.options.mapController.map.getView().getZoom();
    } else {
      zoom = false;
    }
    if (layer.zoom === undefined) {
      if (layer.content && layer.content.length > 0) {
        for (var i = 0; i < layer.content.length; i++) {
          layerContent = layer.content[i];
          if (layerContent.locationStyle) {
            locstyle = this.locationStyleController.arrLocStyles[layerContent.locationStyle];
            // TODO check all locstyles and take the most constraining zoom value
            if (locstyle) {
              layer.zoom = {};
              if (locstyle.maxzoom) {
                layer.zoom.max = locstyle.maxzoom;
              }
              if (locstyle.minzoom) {
                layer.zoom.min = locstyle.minzoom;
              }
              if (layer.zoom.max || layer.zoom.min) {
                break;
              }
            }
          }
        }
      }
    }
    if ((typeof zoom === "number") && layer.zoom
      && (layer.zoom.min > zoom || (layer.zoom.max > 0 && layer.zoom.max < zoom))
    ) {
      return false;
    }

    return true;
  } // end of "checkLayerIsActive()"
}
