/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
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
    this.activeBaselayerId = undefined;
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
        popupInfos,
        currentZoom,
        minZoom,
        newCenter,
        coord,
        setPopup,
        styleFunc,
        styleCluster,
        objPopup;

      if (!self.clickObserverActive) {
        return false;
      }

      feature = map.forEachFeatureAtPixel(clickEvent.pixel,
        function (feature, layer) {
          return feature;
        }
      );

      layer = map.forEachFeatureAtPixel(clickEvent.pixel,
        function (feature, layer) {
          return layer;
        }
      );

      if(layer && layer.getStyle()) {
        styleFunc = layer.getStyle();
        if(typeof styleFunc === "function" && styleFunc(feature, currentZoom) && styleFunc(feature, currentZoom)['0']){
          styleCluster = styleFunc(feature, currentZoom)['0'].clone();
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
      popupInfos = {};
      if (feature && feature.get('popup')) {
        // single POI
        popupInfos = feature.get('popup');
        if (popupInfos && popupInfos.content === "${FNfnStandardInfoPopup}") {
          let popupContent = "${FNfnStandardInfoPopup}";
          popupContent = utils.replaceFunctionPlaceholders(popupContent, feature, layer, self.options.mapController.data.lang, self);
          popupInfos = popupInfos || {};
          popupInfos.content = popupContent;
          popupInfos.async = false;
        }
      } else if (layer && layer.popup) {
        popupInfos = layer.popup;
      } else {
        feature = false;
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

        if (feature) {
          if (popupInfos.async === false || popupInfos.async == '0') {
            objPopup = {};
            objPopup.popup = popupInfos;
            objPopup.feature = feature;
            objPopup.layer = layer;
            // Call the popup hook for plugin specific popup content
            if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
              utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {popup: objPopup, mapController: self.options.mapController});
            }
            if (self.mapData.popupMultiple) {
              self.popupController.addPopup(objPopup);
            }
            else {
              self.popupController.setPopup(objPopup);
            }          } else {
            jQuery.ajax({
              dataType: "json",
              url: self.api_infowindow_url + '/' + popupInfos.content
            }).done(function(data) {
              var popupInfo = {
                async: popupInfos.async,
                content: data.content,
                popup: popupInfos.popup,
                routing_link: popupInfos.routing_link
              };

              objPopup = {};
              objPopup.popup = popupInfo;
              objPopup.feature = feature;
              objPopup.layer = layer;

              // Call the popup hook for plugin specific popup content
              if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
                utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {popup: objPopup, mapController: self.options.mapController});
              }
              if (self.mapData.popupMultiple) {
                self.popupController.addPopup(objPopup);
              }
              else {
                self.popupController.setPopup(objPopup);
              }
            });
          }
        }
        else {
          if (!self.mapData.popupMultiple) {
            self.popupController.removePopup();
          }
        }

        // hooks
        utils.callHookFunctions(window.c4gMapsHooks.hook_map_click, clickEvent);
      }
    }); // end of "click-observer"

  } // end of "initial"*

  activateClickObserver() {
    this.clickObserverActive = true;
  }

  deactivateClickObserver() {
    this.clickObserverActive = false;
  }

  combine(proxy) {
    var func = function(event) {
      proxy.combineLayers(proxy);
      proxy.options.mapController.map.un('postrender', func);
    };
    proxy.options.mapController.map.on('postrender', func)
  }

  /**
   * @TODO: [checkLocationStyles description]
   *
   * @param   {[type]}  opt_options  [description]
   *
   * @return  {[type]}               [description]
   */
  checkLocationStyles(opt_options) {

    var options,
      neededLayerStyles,
      getLayerStyles,
      self = this;

    if (opt_options && typeof opt_options === "object") {
      options = opt_options;
    } else {
      options = {};
    }

    this.locationStyleController.arrLocStyles= this.locationStyleController.arrLocStyles || {};

    neededLayerStyles = [];
    getLayerStyles = function (layers) {
      var i,
        element,
        index;

      // ToDo: Rekursion integrieren (test mit forum)
      for (index in layers) {
        if (layers.hasOwnProperty(index)) {
          element = layers[index];

          if (element.content) {
            for (i = 0; i < element.content.length; i += 1) {

              if (element.content[i]) {
                if (
                  element.content[i].locationStyle
                  && element.content[i].locationStyle !== "0"
                  && neededLayerStyles.indexOf(element.content[i].locationStyle) === -1
                  && (
                    !self.locationStyleController.arrLocStyles[element.content[i].locationStyle]
                    || self.locationStyleController.arrLocStyles[element.content[i].locationStyle].style === undefined
                  )
                ) {
                  neededLayerStyles.push(element.content[i].locationStyle);
                }
              }
            }
          }
        }
      }
    };

    getLayerStyles(this.layerController.arrLayers);

    if (neededLayerStyles.length > 0) {
      this.locationStyleController.loadLocationStyles(neededLayerStyles, options);
    } else {
      if (options.done && typeof options.done === "function") {
        options.done();
      }
    }
  } // end of "checkLocationStyles()"

  combineLayers(proxy){

    var i,
      j,
      k,
      layerId,
      layers,
      contentDataLayer,
      contentData,
      layer,
      layerGroups =[],
      source,
      style,
      features=[],
      styles=[],
      oneFeature,
      feature,
      vectorSource,
      clusterSource,
      vectorLayer;


    if(proxy.options.mapController.data.cluster_all === '1'){
      contentData = proxy.options.mapController.data;
      for( i in proxy.activeLayerIds) {//loop to get all layers
        layers = c4g.maps.layers[i];

        if(layers.type === "gpx"){
          continue
        }

        if(layers && layers.vectorLayer ){
          if(layers.vectorLayer.getLayers() && layers.vectorLayer.getLayers().getArray()[0] && layers.vectorLayer.getLayers().getArray()[0].getSource() && layers.vectorLayer.getLayers().getArray()[0].getSource().getFeatures().length > 0){
            proxy.options.mapController.map.removeLayer(layers.vectorLayer);
          }

          contentDataLayer = layers.content;
          layers.vectorLayer.getLayers().content = contentDataLayer;
          layerGroups.push(layers.vectorLayer.getLayers());


        }
      }
      for(k =0; k<layerGroups.length;k++){//loop to extract features from layers
        if(layerGroups[k].getArray().length>0){
          layer = layerGroups[k].getArray();
          source = layer["0"].getSource();
          style = layer["0"].getStyle();

          oneFeature = true;
          feature = source.getFeatures();
          for(j = 0; j < feature.length; j ++){//loop over all features from a source
            if(feature[j].get("features")){
              for(i = 0; i < feature[j].get("features").length; i++){//loop for clustered features
                if(layerGroups[k].content[j]){
                  style = this.locationStyleController.arrLocStyles[layerGroups[k].content[j].locationStyle];
                }
                else if(layerGroups[k].content[0]){
                  style = this.locationStyleController.arrLocStyles[layerGroups[k].content[0].locationStyle];
                }

                feature[j].get("features")[i].setStyle(style.style);
                if(!feature[j].get("features")[i].get('popup')){
                  feature[j].get("features")[i].set('popup',layer['0'].popup);
                }

              }
              features.push(feature[j].get("features"));

              oneFeature = false;
            }

          }
          if (oneFeature) {//single not clustered feature
            if (feature.length >= 1) {
              if (!feature['0'].get('popup')) {
                feature['0'].set('popup',layer.popup)
              }
              features.push(feature);
            }
          }
        }
      }

      vectorSource = new VectorSource({
        projection: 'EPSG:3857'

      });

      for (i = 0; i < features.length; i ++) {
        vectorSource.addFeatures(features[i]);
      }

      clusterSource = new Cluster({
        distance: 40,
        //threshold: 2, //minimum element count
        source: vectorSource
      });
      var styleForCluster = function(feature, resolution){
        if(feature && feature.get('features') && feature.get('features')['0'].getStyle()){
          style = feature.get('features')['0'].getStyle()(feature);
          if (feature !== undefined && feature !== null && feature.self !== window) {
            var fFeatures = feature.get('features');
            var size = fFeatures.length;
            if (size > 1) {
              if (!style) {
                style = [];
              }

              // calculate bubble-offset
              var iconOffset = [0, 0];
              if (style[0]) {
                if (typeof style[0].getImage().getRadius === "function") {
                  var radius = parseInt(style[0].getImage().getRadius(), 10);
                  if (radius) {
                    iconOffset = [0, radius];
                  }
                } else if (typeof style[0].getImage().getAnchor === "function") {
                  iconOffset = style[0].getImage().getAnchor() || [0, 0];
                }
              }

              var fillcolor = utils.getRgbaFromHexAndOpacity('4975A8',{
                unit: '%',
                value: 70
              });

              if (contentData.cluster_fillcolor) {
                fillcolor = utils.getRgbaFromHexAndOpacity(contentData.cluster_fillcolor,{
                  unit: '%',
                  value: 70
                });
              }
              var fontcolor = contentData.cluster_fontcolor ? '#' + contentData.cluster_fontcolor : '#FFFFFF';

              style.push(
                new Style({
                  text: new Text({
                    text: "●",
                    font: "60px sans-serif",
                    offsetX: -1 * iconOffset[0],
                    offsetY: -1 * iconOffset[1],
                    fill: new Fill({
                      color: fillcolor
                    })
                  })
                })
              );
              style.push(
                new Style({
                  text: new Text({
                    text: size.toString(),
                    offsetX: -1 * iconOffset[0],
                    offsetY: -1 * iconOffset[1] + 3,
                    fill: new Fill({
                      color: fontcolor
                    })
                  })
                })
              );
            }
          }

        }

        else{
          if(feature && feature.get('features') && feature.get('features')['0'].getStyle()){
            return feature.get('features')['0'].getStyle()(feature);
          }
          else{
            return null;
          }
        }
        return style;
      };

      //vectorLayer = self.getVectorLayer(clusterSource, styleForCluster);

      vectorLayer = new Vector({
        name: 'Cluster',
        source: clusterSource,
        style: styleForCluster

      });

      var allLayers = proxy.options.mapController.map.getLayers().getArray();
      var missingLayer = true;
      for(i = 0; i < allLayers.length; i++){

        if(allLayers[i].clusters) {
          allLayers[i] = vectorLayer;
          missingLayer = false
        }
      }
      if(missingLayer){
        proxy.options.mapController.map.addLayer(vectorLayer);
      }
    }



  }//end of combineLayers


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
