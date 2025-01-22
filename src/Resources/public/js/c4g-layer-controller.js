/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import {Cluster, Vector as VectorSource} from "ol/source";
import {transform, transformExtent} from "ol/proj";
import OSMXML from "ol/format/OSMXML";
import GML3 from "ol/format/GML3";
import GML32 from "ol/format/GML32";
import GML2 from "ol/format/GML2";
import {bbox, all} from "ol/loadingstrategy";
import {Vector} from "ol/layer";
import * as olFormats from "ol/format";
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4';
import Projection from 'ol/proj/Projection';
import Collection from 'ol/Collection';
import {utils} from './c4g-maps-utils';
import {Fill, Style, Text, Circle} from 'ol/style';
import {Point} from "ol/geom";
import Feature from 'ol/Feature';
import * as olExtent from 'ol/extent';

let olFormat = jQuery.extend({
  OSMXML: OSMXML,
  GML2: GML2,
  GML32: GML32,
  GML3: GML3,
}, olFormats);

export class BetterLayerController {

  constructor(proxy) {
    this.handleZoom = this.handleZoom.bind(this);
    const scope = this;
    this.proxy = proxy;
    this.loaders = [];
    this.controllers = {};
    this.arrLocstyles = [];
    this.objIds = {};
    this.currentZoomLevel = 0;
    this.extent = {
      maxX: -Infinity,
      maxY: -Infinity,
      minX: Infinity,
      minY: Infinity
    };
    this.mapController = proxy.options.mapController;
    this.vectorCollection = new Collection();
    this.loaderFunction = function(extent, resolution, projection) {
      for (let i in scope.loaders) {
        if (scope.loaders.hasOwnProperty(i)) {
          const requestData = scope.loaders[i];
          if (!requestData.preventLoading) {
            if (!requestData.params && !requestData.url) {
              let responseFunc = function (data) {
                let features = [];
                let layer = scope.objLayers.find(element => element.id == requestData.layerId) || {};
                for(let i = 0; i < data.length; i++){
                  let contentData = data[i];
                  let feature = scope.parseOwnData(contentData, layer);
                  features.push(feature);
                }
                scope.addFeatures(features, requestData.chain);
                scope.mapController.setObjLayers(scope.arrLayers);
              };
              scope.performOwnData(requestData,
                  {
                    "extent": extent,
                    "resolution": resolution,
                    "projection": projection
                  },
                  responseFunc)
            }
            else {
              let layer = scope.objLayers.find(element => element.id == requestData.layerId) || {};
              scope.performOvp({
                    "url": requestData.url,
                    "params": requestData.params,
                    "locstyleId": requestData.locstyle,
                    "chain": requestData.chain,
                    "layer": layer
                  }, {
                    "extent": extent,
                    "resolution": resolution,
                    "projection": projection
                  });
            }

          }
          else {
            requestData.arrExtents.push(extent)
          }
        }
      }
    };
    this.vectorSource = new VectorSource({
      features: this.vectorCollection,
      loader: this.loaderFunction,
      strategy: bbox
    });
    this.vectorSources = [];
    this.clusterStyleFunction = function(feature, resolution) {
      let size = false;
      let returnStyle = [];
      if (feature && feature.get && feature.get('features')) {
        let features = feature.get('features');
        size = features.length;
        feature = features[0];
      }
      if (feature && feature.getStyle()) {
        returnStyle = feature.getStyle();
      }
      else if (feature && feature.get && feature.get('locstyle')) {
        let locstyle = feature.get('locstyle');
        if (scope.proxy.locationStyleController.arrLocStyles && scope.proxy.locationStyleController.arrLocStyles[locstyle]) {
          if (!scope.proxy.locationStyleController.arrLocStyles[locstyle].style) {
            scope.proxy.locationStyleController.arrLocStyles[locstyle].style = scope.proxy.locationStyleController.arrLocStyles[locstyle].getStyleFunction();
          }
          let style = scope.proxy.locationStyleController.arrLocStyles[locstyle].style;
          if (typeof style === "function") {
            returnStyle = style(feature, resolution, false);
          }
          else {
            returnStyle = scope.proxy.locationStyleController.arrLocStyles[locstyle].style;
          }
        }
      }
      if (size > 1 && returnStyle && Array.isArray(returnStyle)) {
        let zIndex = 0;
        if (returnStyle[0] && returnStyle[0].setZIndex && feature.get('zindex')) {
          zIndex += feature.get('zindex');
        }
        if (returnStyle[0] &&returnStyle[0].setZIndex) {
          let geometry = feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326").getCoordinates();
          zIndex += 100 - geometry[1];
          returnStyle[0].setZIndex(zIndex);
        }
        let iconOffset = [0, 0];
        let scale = 1;
        if (returnStyle[0]) {
          if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && typeof returnStyle[0].getImage().getRadius === "function") {
            let radius = parseInt(returnStyle[0].getImage().getRadius(), 10);
            if (radius) {
              iconOffset = [-radius, radius];
            }
          } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getAnchor && typeof returnStyle[0].getImage().getAnchor === "function") {
            iconOffset = returnStyle[0].getImage().getAnchor() || [0, 0];
          }
          if (returnStyle[0].getImage() && returnStyle[0].getImage().getScale() && returnStyle[0].getImage().getScale() !== 1) {
            scale = returnStyle[0].getImage().getScale();
            iconOffset = [iconOffset[0] * scale, iconOffset[1] * scale];
          }
          if (scope.proxy.mapData.cluster_fillcolor) {
            let countFeatures = scope.vectorCollection.getLength();
            // let scaleForCount = (size/countFeatures - 1/countFeatures) * 2;
            let scaleForCount = ((size - 1)/countFeatures);
            scale += scaleForCount;
          }
        }

        let fillcolor = utils.getRgbaFromHexAndOpacity(scope.proxy.mapData.cluster_fillcolor,{
          unit: '%',
          value: 70
        });

        let fontcolor = scope.proxy.mapData.cluster_fontcolor;
        if (feature.get('cluster_fillcolor')) {
          fillcolor = utils.getRgbaFromHexAndOpacity(feature.get('cluster_fillcolor'),{
            unit: '%',
            value: 70
          });
        }
        if (feature.get('cluster_fontcolor')) {
          fontcolor = feature.get('cluster_fontcolor');
        }
        fontcolor = utils.getRgbaFromHexAndOpacity(fontcolor);
        returnStyle.push(
            new Style({
              text: new Text({
                text: "●",
                font: "60px sans-serif",
                offsetX: -1 * iconOffset[0],
                offsetY: -1 * iconOffset[1],
                scale: scale,
                fill: new Fill({
                  color: fillcolor
                })
              }),
              zIndex: zIndex
            })
        );
        returnStyle.push(
            new Style({
              text: new Text({
                text: size.toString(),
                offsetX: -1 * iconOffset[0],
                offsetY: -1 * iconOffset[1] + 3,
                scale: scale,
                fill: new Fill({
                  color: fontcolor
                })
              }),
              zIndex: zIndex
            })
        );
        if (feature && feature.get("markLocstyle")) {
          let color = "#" + scope.proxy.mapData.starboard.colorZoomMarker;
          let markFill = new Fill({
            color: color
          });
          let radius;
          if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && returnStyle[0].getImage().getRadius()) {
            radius = parseInt(returnStyle[0].getImage().getRadius());
          }
          else if (returnStyle[0].getImage() && returnStyle[0].getImage().getIcon && returnStyle[0].getImage() && returnStyle[0].getImage().getIcon()) {
            radius = returnStyle[0].getImage().getIcon().getSize();
            radius = radius[0];
          }
          else {
            radius = 25
          }
          let markStyle = new Style({
            image: new Circle({
              fill: markFill,
              radius: radius
            }),
            fill: markFill
          });
          returnStyle.push(markStyle);
        }
      }
      else if (returnStyle && Array.isArray(returnStyle)) {
        let zIndex = 0;
        if (returnStyle[0] && returnStyle[0].setZIndex && feature.get('zindex')) {
          zIndex += feature.get('zindex');
        }
        if (returnStyle[0] &&returnStyle[0].setZIndex) {
          let geometry = feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326").getCoordinates();
          geometry = typeof geometry[0] == "number" ? geometry : geometry[0];
          geometry = typeof geometry[0] == "number" ? geometry : geometry[0];
          zIndex += 100 - geometry[1];
          returnStyle[0].setZIndex(zIndex);
        }
        if (feature && feature.get("markLocstyle")) {
          let color = "#" + scope.proxy.mapData.starboard.colorZoomMarker;
          let markFill = new Fill({
            color: color
          });
          let radius;
          if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && returnStyle[0].getImage().getRadius()) {
            radius = parseInt(returnStyle[0].getImage().getRadius());
          }
          else if (returnStyle[0].getImage() && returnStyle[0].getImage().getIcon && returnStyle[0].getImage() && returnStyle[0].getImage().getIcon()) {
            radius = returnStyle[0].getImage().getIcon().getSize();
            radius = radius[0];
          }
          else {
            radius = 25
          }
          let markStyle = new Style({
            image: new Circle({
              fill: markFill,
              radius: radius
            }),
            fill: markFill
          });
          returnStyle.push(markStyle);
        }
      }

      return returnStyle
    };
    if (this.mapController.data.cluster_all) {
      this.vectorSource = new Cluster({
        source: this.vectorSource,
        geometryFunction: this.geometryFunction,
        distance: this.mapController.data.cluster_distance || 20
      });
    }
    this.vectorLayer = new Vector({
      source: this.vectorSource,
      zIndex: 10
    });
    this.vectorLayers = [];
    this.layerRequests = {};
    this.ovpKey = this.mapController.data.ovp_key;
    window.c4gMapsHooks.hook_map_zoom = window.c4gMapsHooks.hook_map_zoom || [];
    window.c4gMapsHooks.hook_map_zoom.push(this.handleZoom);
  }

  hide (id, hideElement, layerId, layerKey) {
    let features,
        vectorLayer;
    if (Array.isArray(hideElement)) {
      features = hideElement;
    }
    else if (hideElement instanceof Vector) {
      vectorLayer = hideElement
    }
    else {
      features = this.objIds[layerId];
    }
    if (features) {
      this.mapController.map.getView().dispatchEvent({
        type: "change:resolution"
      });
      if (id >= 0) {
        let loader = this.loaders[id];
        if (loader) {
          this.loaders[id].preventLoading = true;
          if (loader.request) {
            loader.request.abort();
          }
        }
      }
      if (features.length > 0) {
        for (let featureId in features) {
          if (features.hasOwnProperty(featureId)) {
            this.vectorCollection.remove(features[featureId]);
          }
        }
      }
    }
    else if (vectorLayer) {
      this.mapController.map.removeLayer(vectorLayer);
    }
  }

  show (id, showElement, layerId, layerKey) {

    let features,
        vectorLayer;
    if (Array.isArray(showElement)) {
      features = showElement;
      this.currentZoomLevel++;
      for (let i in features) {
        if (features.hasOwnProperty(i)) {
          if (this.mapController.filter) {
            features[i].set('zindex', this.currentZoomLevel);
            if (!!parseFloat(this.mapController.data.filterHandling)) {
              this.mapController.filter.hideFeatureMulti(features[i]);
            }
            else {
              this.mapController.filter.hideFeature(features[i]);
            }
          }
        }
      }
    }
    else if (showElement instanceof Vector){
      vectorLayer = showElement;
      if (this.mapController.filter) {
        if (!!parseFloat(this.mapController.data.filterHandling)) {
          this.mapController.filter.filterLayerMulti(vectorLayer);
        }
        else {
          this.mapController.filter.filterLayer(vectorLayer);
        }
      }
    } else {
      features = this.objIds[layerId];
    }

    if (id >= 0 && this.loaders[id] && this.loaders[id].preventLoading) {
      this.loaders[id].preventLoading = false;
      for (let extentId in this.loaders[id].arrExtents) {
        if (this.loaders[id].arrExtents.hasOwnProperty(extentId) && this.vectorSource) {
          let extent = this.loaders[id].arrExtents[extentId];
          this.vectorSource.removeLoadedExtent(extent);
        }
      }
      this.loaders[id].arrExtents = [];
    }
    if (features) {
       for (let i in features) {
        if (features.hasOwnProperty(i)) {
          let mapArr = this.vectorCollection.getArray();
          let found = false;
          for (let j in mapArr) {
            if (mapArr[j].ol_uid == features[i].ol_uid) {
              found = true;
            }
          }

          if (!found) {
            this.vectorCollection.push(features[i]);
          }

        }
      }
    }
    else if (vectorLayer) {
      this.mapController.map.addLayer(vectorLayer);
    }
  }
  zoomTo(layer) {
    let extent;
    let features;
    if (layer.childs && layer.childs.length) {
      for (let i in layer.childs) {
        if (layer.childs.hasOwnProperty(i)) {
          extent = this.getChildsExtent(extent, layer.childs[i]);
        }
      }
    }
    if (!layer.features || layer.features.length === 0) {
      features = this.objIds[layer.id];
    }
    else {
      features = layer.features;
    }
    for (let i in features) {
      if (features.hasOwnProperty(i)) {
        if (!extent) {
          extent = features[i].getGeometry().clone().getExtent();
        }
        else {
          extent = olExtent.extend(extent, features[i].getGeometry().clone().getExtent());
        }
      }
    }

    if (!extent) {
      return false;
    }
    let width = jQuery(".c4g-starboard-container").css('width');
    if (width) {
      width = width.split(".");
      width = Array.isArray(width) ? width[0] : width;
      width = parseInt(width) +  50;
    }
    else {
      width = 50;
    }
    let maxZoom = parseInt(this.proxy.mapData.starboard.maxZoom) || 22;
    if (features && features.length === 1) {
      let fnCallback = (bool) => {
        if (bool) {
          window.setTimeout(() => {
            let extent = features[0].getGeometry().clone().getExtent();
            let pixel = this.mapController.map.getPixelFromCoordinate([(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2]);
            let featuresAtPixel = this.mapController.map.getFeaturesAtPixel(pixel, {hitTolerance: 10});
            if (featuresAtPixel && featuresAtPixel[0] && featuresAtPixel[0].get('features') && featuresAtPixel[0].get('features').length > 1) {
              let coords = featuresAtPixel[0].getGeometry().getCoordinates();
              // pixel = this.mapController.map.getPixelFromCoordinate(coords);
              this.mapController.map.dispatchEvent({
                type: "click",
                pixel: pixel
              });
            }
          }, 100);
        }
      }
      this.mapController.map.getView().fit(extent, {
        padding: [50,width,50,50],
        duration: 500,
        maxZoom: maxZoom,
        callback: fnCallback
      });
    }
    else {
      this.mapController.map.getView().fit(extent, {
        padding: [50,width,50,50],
        duration: 500,
        maxZoom: maxZoom
      });
    }
    return true
  }
  getChildsExtent(extent, child) {
    if (child.childs && child.childs.length) {
      for (let i in child.childs) {
        if (child.childs.hasOwnProperty(i)) {
          extent = this.getChildsExtent(extent, child.childs[i]);
        }
      }
    }
    if (child.features && child.features.length) {
      for (let i in child.features) {
        if (child.features.hasOwnProperty(i)) {
          if (!extent) {
            extent = child.features[i].getGeometry().clone().getExtent();
          }
          else {
            extent = olExtent.extend(extent, child.features[i].getGeometry().clone().getExtent())
          }
        }
      }
    }
    else {
      extent = this.getExtentForLayer(extent, child.key);
    }
    return extent;
  }
  getExtentForLayer(extent, layerKey) {
    let features = this.objIds[layerId];
    if (features && features.length) {
      for (let i in features) {
        if (features.hasOwnProperty(i)) {
          if (!extent) {
            extent = features[i].getGeometry().getExtent();
          }
          else {
            extent = olExtent.extend(extent,features[i].getGeometry().getExtent());
          }
        }
      }
    }
    return extent;
  }
  setChildFeatureFlag(child, flag, value) {
    if (child.childs && child.childs.length) {
      for (let i in child.childs) {
        if (child.childs.hasOwnProperty(i)) {
          this.setChildFeatureFlag(child.childs[i], flag, value);
        }
      }
    }
    if (child.features && child.features.length) {
      for (let i in child.features) {
        if (child.features.hasOwnProperty(i)) {
          child.features[i].set(flag, value);
        }
      }
    }
  }

  loadLayers () {
    let self = this;
    if (this.proxy.mapId === 0) {
      window.setTimeout(()=>{self.mapController.setLayersInitial([], [])},50);
      return false;
    }

    jQuery.ajax(this.proxy.api_layer_url, {
      dataType: this.mapController.data.jsonp ? "jsonp" : "json"

    }).done(function (data) {
      utils.callHookFunctions(window.c4gMapsHooks.hook_layer, data);
      utils.callHookFunctions(window.c4gMapsHooks.loaded, self.proxy);
      self.objLayers = data.layer;
      let structure = [];
      let features = [];

      let tabStructures = [];
      for (let layerId in data.layer) {
        if (data.layer.hasOwnProperty(layerId)) {
          if (data.layer[layerId].type === "startab") {
            let newTab = [self.getStructureFromLayer(data.layer[layerId], tabStructures.length)];
            newTab.awesomeIcon = data.layer[layerId].awesomeicon;
            tabStructures.push(newTab);
          } else {
            let newChild = self.getStructureFromLayer(data.layer[layerId], structure.length);
            if (newChild.hide_in_starboard) {
              structure = newChild.childs ? structure.concat(newChild.childs) : structure;
              features = newChild.features ? features.concat(newChild.features) : features;
            } else {
              structure.push(newChild);
            }
          }
        }
      }
      let arrStates = [];
      for (let structId in structure) {
        if (structure.hasOwnProperty(structId)) {
          arrStates.push(self.getInitialStates(structure[structId]));
          if (features) {
            features = features.concat(self.getFeaturesFromStruct(structure[structId]));
          }
        }
      }
      let tabStates = [];
      for (let structId in tabStructures) {
        if (tabStructures.hasOwnProperty(structId)) {
          tabStates.push(self.getInitialStates(tabStructures[structId][0]));
        }
      }
      self.arrLayers = structure;
      self.proxy.locationStyleController.loadLocationStyles(self.arrLocstyles, {"done": (styleData) => {
        self.mapController.setLocStyles(styleData, ()=> {
          window.setTimeout(()=> {
            let getZoom = self.mapController.map.getView().getZoom();
            self.mapController.map.getView().setZoom(getZoom + 0.265);
            // self.mapController.map.getView().setZoom(getZoom);

          }, 100);
          window.setTimeout(()=> {
            let getZoom = self.mapController.map.getView().getZoom();
            self.mapController.map.getView().setZoom(getZoom - 0.265);
          }, 300);
        });
      }});
      self.vectorCollection.extend(features);
      self.mapController.map.addLayer(self.vectorLayer);
      self.mapController.setLayersInitial(self.arrLayers, arrStates);
      self.mapController.setTabLayers(tabStructures, tabStates);
      if (self.proxy.mapData.calc_extent === "LOCATIONS" || self.proxy.mapData.calc_extent === "CENTERLOCS") {
        if (self.extent && !(self.extent.maxX === Infinity || self.extent.maxX === -Infinity)) {
          let view = self.mapController.map.getView();
          let padding = [
              parseInt(self.mapController.props.mapData.min_gap, 10),
              parseInt(self.mapController.props.mapData.min_gap, 10),
              parseInt(self.mapController.props.mapData.min_gap, 10),
              parseInt(self.mapController.props.mapData.min_gap, 10)
          ];
          let extent = [
              self.extent.minX,
              self.extent.minY,
              self.extent.maxX,
              self.extent.maxY
          ];

          if (self.proxy.mapData.calc_extent === "CENTERLOCS") {
            // ssss
            view.fit(extent, {
              maxZoom:self.mapController.data.center.zoom
            });
          }
          else {
            view.fit(extent, {
              padding: padding
            });
          }
        }
      }
      utils.callHookFunctions(window.c4gMapsHooks.layer_loaded, self);
      self.proxy.layers_loaded = true
      return true;
    }).fail(function () {
      console.warn('An error occured while trying to load the layers...');
      return false;
    }).always(function () {
      // this.proxy.starboard.spinner.hide();
    });
  } // end of "loadLayer()"
  getInitialStates(layer) {
    let childStates = [];
    if (layer.childs && layer.childs.length > 0) {
      for (let childId in layer.childs) {
        if (layer.childs.hasOwnProperty(childId)) {
          childStates.push(this.getInitialStates(layer.childs[childId]));
        }
      }
    }
    let zoom = this.mapController.map.getView().getZoom();
    return {
      active: !layer.hide,
      collapsed: !parseFloat(layer.initial_opened),
      greyed: layer.zoom && !this.compareZoom(layer.zoom),
      id: layer.id,
      childStates: childStates,
      cssClass: layer.cssClass,
    }
  }
  getFeaturesFromStruct(structure) {
    let features = [];
    let zoom = this.mapController.map.getView().getZoom();
    let greyed = structure.zoom && !this.compareZoom(structure.zoom);
    if (structure.childs && structure.childs.length > 0) {
      for (let structId in structure.childs) {
        if (structure.childs.hasOwnProperty(structId)) {
            features = features.concat(this.getFeaturesFromStruct(structure.childs[structId]));
          }
      }
    }
    if (structure.features && !greyed && !structure.hide) {
      features = features.concat(structure.features);
    }

    return features;
  }

  getStructureFromLayer(layer, idChain) {
    let scope = this;
    let popup = false;
    let features = [];
    let childs = [];
    let hide = !!layer.hide;
    if (scope.mapController.data.layers && scope.mapController.data.layers.length > 0) { //hide or show according to permalink - overwrites layerService
      let arrLayerIds;
      if (typeof scope.mapController.data.layers === "string" || scope.mapController.data.layers instanceof String) {
        arrLayerIds = scope.mapController.data.layers.split(',');
      } else {
        arrLayerIds = scope.mapController.data.layers;
      }

      let funcLayerIds = (value) => {
        return value == layer.id
      }
      if (arrLayerIds.find(funcLayerIds)) { //in permalink
        hide = false;
      }
      else { //not in permalink
        hide = true;
      }
    }
    if (layer.activeForBaselayers && layer.activeForBaselayers !== "all") { //initial handling for activate with baselayer
      let found = layer.activeForBaselayers.includes(scope.mapController.state.activeBaselayerId || scope.mapController.data.default_baselayer);
      hide = !found;
    }
    let vectorLayer = false;
    let loaderId = -1;
    let possibleLocstyle = layer.locstyle;
    if (layer.content && layer.content.length > 0) {
      features = this.getFeaturesForLayer(layer);
      possibleLocstyle = layer.locstyle || layer.content[0].locationStyle
    }

    let checkLocstyle = this.arrLocstyles.findIndex((element) => element === possibleLocstyle);
    if (checkLocstyle === -1 && possibleLocstyle) {
      this.arrLocstyles.push(possibleLocstyle);
    }
    if (layer.async_content && layer.async_content != 0 && !layer.excludeFromSingleLayer) {
      let url = "";
      let locstyleId = 0;
      let params = "";
      let hoverLocation;
      let hoverStyle;
      let forceNodes = false;
      let showAddGeoms = false;
      let layerId = layer.id;
      if (layer.content && layer.content[0] && layer.content[0].data) {
        let data = layer.content[0].data;
        url = data.url;
        popup = data.popup;
        hoverLocation = data.hover_location;
        hoverStyle = data.hover_style;
        params = data.params;
        locstyleId = layer.locstyle;
      }
      if (layer.content && layer.content[0] && layer.content[0].settings) {
        forceNodes = layer.content[0].settings.forceNodes;
        showAddGeoms = !!layer.content[0].settings.showAdditionalGeometries;
      }
      checkLocstyle = this.arrLocstyles.findIndex((element) => element === locstyleId);
      if (checkLocstyle === -1 && locstyleId) {
        this.arrLocstyles.push(locstyleId);
      }
      loaderId = this.loaders.length;
      this.loaders.push({
        chain: idChain,
        url: url,
        preventLoading: hide,
        forceNodes: forceNodes,
        arrExtents: [],
        popup: popup,
        showAddGeoms: showAddGeoms,
        locstyleId: locstyleId,
        hover_location: hoverLocation,
        hover_style: hoverStyle,
        params: params,
        layerId: layerId
      });

    }
    if (layer.childs && layer.childs.length > 0) {
      for (let layerId in layer.childs) {
        if (layer.childs.hasOwnProperty(layerId)) {
          let childChain = idChain + "," + childs.length;
          let newChild = this.getStructureFromLayer(layer.childs[layerId], childChain);
          if (newChild.hide_in_starboard) {
            childs = newChild.childs ? childs.concat(newChild.childs) : childs;
            features = newChild.features ? features.concat(newChild.features) : features;

            if (this.mapController.filter) {
              if (!!parseFloat(this.mapController.data.filterHandling)) {
                this.mapController.filter.filterLayerMulti(vectorLayer);
              }
              else {
                this.mapController.filter.filterLayer(vectorLayer);
              }
            }
          }
          else {
            childs.push(newChild);
          }
        }
      }
      childs.filter((elem, index) => {
        let index2 = childs.findIndex((elem2) => {
          return elem['id'] === elem2['id'];
        });
        return index === index2;
      });
    }
    else if (layer.split_geojson) {
      let nameField = layer.geojson_attributes.split(',')[0];
      let zoomTo = !!layer.geojson_zoom;
      for (let featureId in features) {
        if (features.hasOwnProperty(featureId)) {
          childs.push({
            "features"            : [features[featureId]],
            "vectorLayer"         : false,
            "zoom"                : layer.zoom,
            "initial_opened"      : layer.initial_opened,
            "locstyle"            : possibleLocstyle,
            "zoomTo"              : zoomTo,
            "activeForBaselayers" : layer.activeForBaselayers,
            "id"                  : features[featureId].ol_uid,
            "key"                 : layer.key,
            "name"                : features[featureId].get(nameField),
            "hide"                : hide,
            "childs"              : [],
            "cssClass"            : layer.cssClass
          })
        }
      }
      features = [];
    }
    if (layer.excludeFromSingleLayer) {
      let customStyleFunc = false;
      let vectorSource = new VectorSource();
      if (layer.async_content && layer.async_content !== "0") {
        let strategy = layer.type === "table" || (layer.content && layer.content[0].settings.boundingBox) ? bbox : all;
        vectorSource = new VectorSource({"strategy": strategy});
        const scope = this;

        let loaderFunc = function(extent, resolution, projection) {
          if (layer.content && layer.content[0].settings.boundingBox && (extent[0] === Infinity || extent[0] === -Infinity)) {
            vectorSource.removeLoadedExtent();
          }
          else if (layer.type === "overpass") {
            let content = layer.content[0];
            let data = content.data;

            scope.performOvp({
                  "url": data.url,
                  "layerId": layer.id,
                  "layer": layer,
                  "vectorSource": vectorSource,
                  "params": data.params,
                  "locstyleId": layer.locstyle
                },
                {
                  "extent": extent,
                  "resolution": resolution,
                  "projection": projection
                })
          }
          else if (layer.type === "table") {
            let responseFunc = function (data) {
              let features = [];
              for(let i = 0; i < data.length; i++){
                let contentData = data[i];
                let feature = scope.parseOwnData(contentData, layer);
                features.push(feature);
              }
              if (vectorSource instanceof Cluster) {
                vectorSource.getSource().addFeatures(features);
              }
              else {
                vectorSource.addFeatures(features);
              }

            };
            scope.performOwnData({
              "layerId": layer.id,
              "locstyleId": layer.locstyle
            },
            {
              "extent": extent,
              "resolution": resolution,
              "projection": projection
            },
            responseFunc)
          }
          else {
            if (layer.content && layer.content['0'] && layer.content['0'].data) {
              let content = layer.content['0'];
              let responseFunc = (response) => {
                response.json().then((json) => {
                  vectorSource.clear();
                  if (olFormat[content.format]) {
                    let format = new olFormat[content.format]({
                      dataProjection: "EPSG:4326",
                      featureProjection: "EPSG:3857",
                    });
                    let features = format.readFeatures(json);
                    if (layer.split_geojson) {
                      let nameField = layer.geojson_attributes.split(',')[0];
                      layer.childs = [];
                      let searchFunction = (element) => {
                        return element.id === layer.id;
                      };
                      let arrLayers = scope.arrLayers;
                      let arrLayerStates = scope.mapController.state.arrLayerStates;
                      let index = arrLayers.findIndex(searchFunction);
                      arrLayerStates[index].childStates = [];
                      arrLayers[index].childs = [];
                      for (let featureId in features) {
                        if (features.hasOwnProperty(featureId)) {
                          let possibleLocstyle = layer.locationStyle || content.locationStyle;
                          if (!features[featureId].get('locstyle')) {
                            features[featureId].set('locstyle', layer.locationStyle || content.locationStyle);
                          }
                          else {
                            possibleLocstyle = features[featureId].get('locstyle');
                          }
                          arrLayers[index].childs.push({
                            "features"        : [features[featureId]],
                            "vectorLayer"     : false,
                            "zoom"            : layer.zoom,
                            "initial_opened"  : layer.initial_opened,
                            "locstyle"        : possibleLocstyle,
                            "zoomTo"          : true,
                            "activateWithBl"  : false,
                            "id"              : features[featureId].get("positionId"),
                            "key"             : layer.key,
                            "name"            : features[featureId].get(nameField),
                            "childs"          : [],
                            "cssClass"        : layer.cssClass,
                          });
                          arrLayers[index].ignoreChilds = true;
                          arrLayerStates[index].childStates.push({
                            "active": true,
                            "childStates": [],
                            "collapsed": false,
                            "greyed": undefined,
                            "id": features[featureId].get("positionId")
                          });
                        }
                      }
                      scope.mapController.setLayersInitial(arrLayers, arrLayerStates);
                    }
                    else {
                      for (let i in features) {
                        if (features.hasOwnProperty(i)) {
                          if (!features[i].get('locstyle')) {
                            features[i].set('locstyle', layer.locationStyle || content.locationStyle);
                          }
                        }
                      }
                    }
                    if (vectorSource instanceof Cluster) {
                      vectorSource.getSource().addFeatures(features);
                    }
                    else {
                      vectorSource.addFeatures(features);
                    }
                  }
                });
              };
              scope.performOtherData(content, responseFunc);
            }
          }
        };
        vectorSource.setLoader(loaderFunc);
        if (layer.content && layer.content[0] && layer.content[0].settings && layer.content[0].settings.refresh) {
          let interval = layer.content[0].settings.interval || 10000;
          window.setInterval(() => {
            loaderFunc();
          },interval);
        }
      }
      else if (features && features.length){
        vectorSource.addFeatures(features);
      }
      else {
        let content = layer.content[0];
        let featureProjection = "EPSG:3857";
        let dataProjection = "EPSG:4326";

        customStyleFunc = function (feature, resolution) {
          let size = false;
          let returnStyle = [];
          if (feature && feature.get && feature.get('features')) {
            let features = feature.get('features');
            size = features.length;
            feature = features[0];
          }
          if (layer && layer.locstyle && layer.locstyle !== "0") {
            if (scope.proxy.locationStyleController.arrLocStyles && scope.proxy.locationStyleController.arrLocStyles[layer.locstyle] && scope.proxy.locationStyleController.arrLocStyles[layer.locstyle]) {
              if (!scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].style) {
                scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].style = scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].getStyleFunction();
              }
              let style = scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].style;
              if (typeof style === "function") {
                returnStyle = style(feature, resolution, false);
              }
              else {
                returnStyle = scope.proxy.locationStyleController.arrLocStyles[locstyle].style;
              }
            }
          }
          if (size > 1 && returnStyle && Array.isArray(returnStyle)) {
            let iconOffset = [0, 0];
            if (returnStyle[0]) {
              if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && typeof returnStyle[0].getImage().getRadius === "function") {
                let radius = parseInt(returnStyle[0].getImage().getRadius(), 10);
                if (radius) {
                  iconOffset = [-radius, radius];
                }
              } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getAnchor && typeof returnStyle[0].getImage().getAnchor === "function") {
                iconOffset = returnStyle[0].getImage().getAnchor() || [0, 0];
              }
            }

            let fillcolor = utils.getRgbaFromHexAndOpacity('4975A8',{
              unit: '%',
              value: 70
            });

            let fontcolor = '#FFFFFF';

            returnStyle.push(
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
            returnStyle.push(
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
          return returnStyle
        };

        if (content) {
          if (content.data && content.data.properties && content.data.properties.projection && content.data.properties.projCode) {
            // if (!proj4(contentData.data.properties.projection)) {
            proj4.defs(content.data.properties.projection, content.data.properties.projCode);
            register(proj4);
            // }
            dataProjection = new Projection({
              code: content.data.properties.projection
            });
          }
          let format = new olFormat[content['format']]({
            featureProjection: featureProjection,
            dataProjection: dataProjection
          });
          if (layer.type === "wfs") {
            if (content.locstyleWfs) {
              for (let i in content.locstyleWfs) {
                if (content.locstyleWfs.hasOwnProperty(i)) {
                  let locstyle = content.locstyleWfs[i].locstyle;
                  let checkLocstyle = this.arrLocstyles.findIndex((element) => element === locstyle);
                  if (checkLocstyle === -1 && locstyle) {
                    this.arrLocstyles.push(locstyle);
                  }
                }
              }
            }
            vectorSource = new VectorSource({
              format: new olFormat['WFS']({
                version: content.data.version,
                gmlFormat: format
              }),
              loader: function(extent, resolution, projection, success, failure) {
                const proj = projection.getCode();
                let newExt = transformExtent(extent, projection, "EPSG:4326");
                newExt = [newExt[1], newExt[0], newExt[3], newExt[2]];
                const url = content.data.url + newExt.join(',');

                fetch (url, {
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then((response) => {
                  response.json().then((data) => {
                    const features = format.readFeatures(data);
                    for (let i in features) {
                      if (features.hasOwnProperty(i)) {
                        let feature = features[i];
                        let locstyle = scope.getWfsStyle(feature, content);
                        feature.set('locstyle', locstyle)
                        let id = feature.getId();
                        if (!vectorSource.getFeatureById(id)) {
                          vectorSource.addFeature(feature);
                        }
                      }
                    }
                    success(features);
                  });
                }).catch(() => {
                  vectorSource.removeLoadedExtent(extent);
                  failure();
                });
              },
              strategy: bbox
            });
            customStyleFunc = false;
            popup = content.data && content.data.popup ? content.data.popup : false;
          }
          else {
            vectorSource = new VectorSource({
              format: format,
              url: content.data.url
            });
            popup = content.data && content.data.popup ? content.data.popup : false;
          }
        }
        
      }
      this.vectorSources.push(vectorSource);
      if (layer.cluster) {
        vectorSource = new Cluster({
          source: vectorSource,
          geometryFunction: this.geometryFunction,
          distance: parseInt(layer.cluster.distance, 10)
        });
      }
      vectorLayer = new Vector({
          source: vectorSource,
          style: customStyleFunc || this.clusterStyleFunction,
          zIndex: parseInt(layer.zIndex || "0")
      });
      this.vectorLayers.push(vectorLayer);
      vectorLayer.popup = popup;
      scope.proxy.hook_locstyles_loaded.push(function(lostyleController) {
        vectorLayer.changed();
      });
      let greyed = layer.zoom && !this.compareZoom(layer.zoom);
      if (!hide && !greyed) {
        // vectorLayer.setZIndex(1);
        this.mapController.map.addLayer(vectorLayer);
      }
      features = false;
    }
    if (layer.hideInStarboard) {
      return {
        childs: childs,
        features: features,
        hide_in_starboard: true
      }
    }
    else {
      return {
        "features"            : features,
        "vectorLayer"         : vectorLayer,
        "loader"              : loaderId,
        "zoom"                : layer.zoom,
        "initial_opened"      : layer.initial_opened,
        "locstyle"            : possibleLocstyle,
        "activeForBaselayers" : layer.activeForBaselayers,
        "popup"               : popup || layer.popup,
        "id"                  : layer.id,
        "key"                 : layer.key,
        "name"                : layer.name,
        "tags"                : layer.tags,
        "hide"                : hide,
        "childs"              : childs,
        "zoomTo"              : layer.zoomTo,
        "cssClass"            : layer.cssClass,
      };
    }
  }

  getFeaturesForLayer(layer) {
    let features = [];
    const featureProjection = "EPSG:3857";
    for (let contentId in layer.content) {
      if (layer.content.hasOwnProperty(contentId)) {
        let content = layer.content[contentId];
        let contentData = content.data;
        if (contentData) {
          let dataProjection = "EPSG:4326";
          if (contentData.properties && contentData.properties.projection && contentData.properties.projCode) {
            // if (!proj4(contentData.data.properties.projection)) {
            proj4.defs(contentData.properties.projection, contentData.properties.projCode);
            register(proj4);
            // }
            dataProjection = new Projection({
              code: contentData.properties.projection
            });
          }
          let format;
          if (layer.content[contentId].type === "urlData") {
            if (layer.type === "kml") {
              return false
            }
            else if (layer.type === "gpx") {
              return false;
            }
          }
          else if (contentData.properties){
            format = new olFormat[layer.content[contentId].type]({
              featureProjection: featureProjection,
              dataProjection: contentData.properties.projection
            });
          }

          let locstyle = content.locationStyle || layer.locstyle;
          let checkLocstyle = this.arrLocstyles.findIndex((element) => element === locstyle);
          if (checkLocstyle === -1 && locstyle) {
            this.arrLocstyles.push(locstyle);
          }
          if (layer.content[contentId].type === "GeoJSON") {
            if (contentData.type === "FeatureCollection") {
              for (let i in contentData.features) {
                if (contentData.features.hasOwnProperty(i)) {
                  let singleFeature = format.readFeature(contentData.features[i]);
                  if (!singleFeature.get('locstyle')) {
                    singleFeature.set('locstyle', locstyle);
                  }
                  else {
                    checkLocstyle = this.arrLocstyles.findIndex((element) => element === singleFeature.get('locstyle'));
                    if (checkLocstyle === -1 && singleFeature.get('locstyle')) {
                      this.arrLocstyles.push(singleFeature.get('locstyle'));
                    }
                  }
                  if (content.hover_location) {
                    singleFeature.set('hover_style', content.hover_style);
                    singleFeature.set('hover_location', content.hover_location);
                  }
                  if (content.loc_linkurl) {
                    singleFeature.set('loc_linkurl', content.loc_linkurl);
                  }
                  if (contentData.properties) {
                    if (!singleFeature.get('tooltip')) {
                      singleFeature.set('tooltip', contentData.properties.tooltip)
                    }
                    if (!singleFeature.get('label')) {
                      singleFeature.set('label', contentData.properties.label);
                    }
                    if (!singleFeature.get('popup')) {
                      singleFeature.set('popup', contentData.properties.popup);
                    }
                  }
                  features.push(singleFeature);
                }
              }
            }
            else if (contentData && contentData.type) {
              let feature = format.readFeature(contentData);
              feature.set('locstyle', locstyle);
              feature.set('noFilter', layer.noRealFilter);
              if (content.hover_location) {
                feature.set('hover_style', content.hover_style);
                feature.set('hover_location', content.hover_location);
              }
              if (contentData.loc_linkurl) {
                feature.set('loc_linkurl', contentData.loc_linkurl);
              }

              features.push(feature);
            }
          }
          else if (format) {
            fetch(contentData.url).then((response) => {
              response.text().then((text) => {
                let parser = new DOMParser();
                let data = parser.parseFromString(text, "text/xml");
                let tempFeatures = format.readFeature(data.childNodes[0].outerHTML);
                for (let featId in tempFeatures) {
                  if (tempFeatures.hasOwnProperty(featId)) {
                    let feature = tempFeatures[featId];
                    feature.set('locstyle', locstyle);
                    if (contentData.hover_location) {
                      feature.set('hover_style', contentData.hover_style);
                      feature.set('hover_location', contentData.hover_location);
                    }
                    if (contentData.loc_linkurl) {
                      feature.set('loc_linkurl', contentData.loc_linkurl);
                    }
                    features.push(feature);
                  }
                }
              });
            });
          }
        }
      }
    }
    if (this.proxy.mapData.calc_extent === "LOCATIONS" || this.proxy.mapData.calc_extent === "CENTERLOCS") {
      for (let i in features) {
        if (features.hasOwnProperty(i)) {
          let extent = features[i].getGeometry().getExtent();
          if (this.extent.maxX < extent[2]) {
            this.extent.maxX = extent[2];
          }
          if (this.extent.maxY < extent[3]) {
            this.extent.maxY = extent[3];
          }
          if (this.extent.minX > extent[0]) {
            this.extent.minX = extent[0];
          }
          if (this.extent.minY > extent[1]) {
            this.extent.minY = extent[1];
          }

        }
      }
    }
    if (!this.objIds.hasOwnProperty(layer.id)) {
      if (!layer.split_geojson) {
        this.objIds[layer.id] = features;
      }
      return features;
    }
    else {
      return [];
    }
  }
  geometryFunction (feature) {
    let geometry = feature.getGeometry();
    if (geometry instanceof Point) {
      return geometry;
    }
    else {
      return null;
    }
  }

  performOvp(requestData, mapConf) {
    if (this.controllers[requestData.layerId]) {    //abort request, if new exists
      this.controllers[requestData.layerId].abort();
      delete this.controllers[requestData.layerId];
    }
    const scope = this;
    this.controllers[requestData.layerId] = new AbortController();
    const signal = this.controllers[requestData.layerId].signal;
    let boundingArray = transformExtent(mapConf.extent, mapConf.projection, 'EPSG:4326');
    let strBoundingBox = "";
    let url = requestData.url;
    let params = decodeURIComponent(requestData.params);
    if (url) {
      if (url.indexOf('{key}') > -1) {
        url = url.replace('{key}', scope.ovpKey);
      }

      const bboxTag = params.indexOf('(bbox)') >= 0 ? /\(bbox\)/g : /\{{bbox\}}/g;
      url += url.includes("?") ? "&" : "?";
      if (params && params.substr(0, 1).trim() === "<") {
        strBoundingBox = '<bbox-query s="' + boundingArray[1] + '" n="' + boundingArray[3] + '" w="' + boundingArray[0] + '" e="' + boundingArray[2] + '"/>';
        url += 'data=' + encodeURIComponent(params.replace(bboxTag, strBoundingBox));
        url = url.replace('output=json', 'output=xml');
        fetch(url, {signal}).then((response) => {
          response.text().then((resp) => {scope.parseOvpData(resp, requestData)}).catch((error) => {console.log(error.message)});
        })
        .catch((error) => {
          if (error.code && error.code !== 20) {
            console.log('Fetch Error :-S', error.message);
          }
        });
      } else {
        strBoundingBox = boundingArray[1] + ',' + boundingArray[0] + ',' + boundingArray[3] + ',' + boundingArray[2];
        url += 'data=' + encodeURIComponent(params.replace(bboxTag, strBoundingBox).replace('out:json', 'out:xml'));
        fetch(url, {signal}).then((response) => {
          response.text().then((resp) => {scope.parseOvpData(resp, requestData)}).catch((error) => {console.log(error.message)});
        })
        .catch((error) => {
          if (error.code && error.code !== 20) {
            console.log('Fetch Error :-S', error.message);
          }
        });
      }
    }
  }
  parseOvpData (response, requestData) {
    let layer = requestData.layer;
    let content = layer.content[0];
    let data = content.data;
    let features;
    if (typeof response === "string") {
      let text = response;
      if (!!!content.settings.showAdditionalGeometries) {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(response, "text/xml");
        let featuresDoc = xmlDoc.getElementsByTagName('way');
        for (let i = 0; i < featuresDoc.length; i++) {
          let singleFeature = featuresDoc[i];
          for (let j = 0; j < singleFeature.children.length; j++) {
            let nodeId = singleFeature.children[j].getAttribute('ref');
            let nodeElement = xmlDoc.getElementById(nodeId);
            while (nodeElement && nodeElement.children.length > 0) {
              nodeElement.removeChild(nodeElement.children[0]);
            }
          }
        }
        let serializer = new XMLSerializer();
        text = serializer.serializeToString(xmlDoc);
      }

      let format = new OSMXML();
      try {
        features = format.readFeatures(text, {featureProjection: "EPSG:3857"});
      } catch (e) {
        console.warn('Can not read feature.');
      }
    }
    else {
      return false;
    }
    // set popups for features
    if (data.popup) {
      for (let i = 0; i < features.length; i++) {
        let popup = {};
        for (let j in data.popup) {
          if (data.popup.hasOwnProperty(j)) {
            popup[j] = data.popup[j];
          }
        }
        features[i].set('popup', popup);
        features[i].set('noFilter', layer.noRealFilter);
      }
    }

    let requestDatas = (layer.content && layer.content[0].settings) ? layer.content[0].settings: {};
    for (let featureId in features) {
      if (features.hasOwnProperty(featureId)) {
        if (features[featureId].getGeometry().getType() === "Polygon") {
          if (requestDatas.forceNodes) {
            features[featureId].setGeometry(features[featureId].getGeometry().getInteriorPoint());
          }
          if (!features[featureId].getId().includes('way')) {
            features[featureId].set('osm_type', 'way');
          }
        }
        else if (features[featureId].getGeometry().getType() === "MultiPolygon") {
          if (requestDatas.forceNodes) {
            features[featureId].setGeometry(features[featureId].getGeometry()[0].getInteriorPoint());
          }
          if (!features[featureId].getId().includes('relation')) {
            features[featureId].set('osm_type', 'relation');
          }
        }
        else if (features[featureId].getGeometry().getType() === "Point") {
          if (!features[featureId].getId().includes('node')) {
            features[featureId].set('osm_type', 'node');
          }
        }

        if (this.mapController.filter) {
          if (!!parseFloat(this.mapController.data.filterHandling)) {
            this.mapController.filter.hideFeatureMulti(features[featureId]);
          }
          else {
            this.mapController.filter.hideFeature(features[featureId]);
          }
        }
        features[featureId].set('locstyle', layer.locstyle);
        if (content.hover_location) {
          features[featureId].set('hover_style', content.hover_style);
          features[featureId].set('hover_location', content.hover_location);
        }
        if (content.loc_linkurl) {
          features[featureId].set('loc_linkurl', content.loc_linkurl);
        }
        if (content.cluster_fillcolor && content.cluster_fontcolor) {
          features[featureId].set('cluster_fillcolor', content.cluster_fillcolor);
          features[featureId].set('cluster_fontcolor', content.cluster_fontcolor);
        }
      }
    }
    if (requestData.chain || requestData.chain > -1) {
      this.addFeatures(features, requestData.chain);
      this.mapController.setObjLayers(this.arrLayers);
    }
    else {
      if (requestData.vectorSource instanceof Cluster) {
        requestData.vectorSource.getSource().addFeatures(features);
      }
      else {
        requestData.vectorSource.addFeatures(features);
      }
    }
  }
  performOwnData (requestData, mapConf, responseFunc) {
    const scope = this;
    if (this.controllers[requestData.layerId]) {    //abort request, if new exists
      this.controllers[requestData.layerId].abort();
      delete this.controllers[requestData.layerId];
    }
    if (mapConf.extent[0] === Infinity || mapConf.extent[0] === -Infinity ||
        mapConf.extent[1] === Infinity || mapConf.extent[1] === -Infinity ||
        mapConf.extent[2] === Infinity || mapConf.extent[2] === -Infinity ||
        mapConf.extent[3] === Infinity || mapConf.extent[3] === -Infinity) {
      return false
    }
    // @Todelü implement handling for other projections
    let boundingArray = transformExtent(mapConf.extent, mapConf.projection, 'EPSG:4326');
    let strBoundingBox = boundingArray[0] + ',' + boundingArray [1] + ';' + boundingArray[2] + ',' + boundingArray[3];

    let url = scope.proxy.api_layercontentdata_url + '/' + requestData.layerId + '/' + strBoundingBox;

    this.controllers[requestData.layerId] = new AbortController();
    const signal = this.controllers[requestData.layerId].signal;
    fetch(url, {signal}).then((response) => {
      response.json().then(responseFunc).catch((error) => {console.log(error.message)});
    })
    .catch((error) => {
      if (error.code && error.code !== 20) {
        console.log('Fetch Error :-S', error.message);
      }
    });
  }
  performOtherData (content, responseFunc) {
    let data = content.data;
    let settings = content.settings;
    fetch(data.url).then((response) => {
      responseFunc(response);
    }).catch(() => {
      console.log("Tell me why");
    })
  }
  parseOwnData (contentData, layer) {
    var resultCoordinate = transform([parseFloat(contentData['geox']), parseFloat(contentData['geoy'])], 'EPSG:4326', 'EPSG:3857')
    var point = new Point(resultCoordinate);
    let contentFeature = new Feature(point);
    contentFeature.setId(contentData.id);
    contentFeature.set('noFilter', layer.noRealFilter);
    contentFeature.set('hover_location', layer.hover_location);
    contentFeature.set('hover_style', layer.hover_style);
    let popup = contentData['popup'] ? contentData['popup'] : jQuery.extend({},layer.popup);
    if(popup && popup.content && popup.content.search && popup.content.search('itemId')){
      popup.content = popup.content.replace('itemId',contentData['id']);
    }
    if(contentData['label']){
      contentFeature.set('label',contentData['label'])
    }
    if(contentData['tooltip']){
      contentFeature.set('tooltip',contentData['tooltip'])
    }
    if (contentData.loc_linkurl) {
      contentFeature.set('loc_linkurl', contentData.loc_linkurl);
    }
    contentFeature.set('popup', popup);
    contentFeature.set('zoom_onclick', layer.zoom_onclick);
    contentFeature.set('tid', contentData['id']);
    let locstyle = contentData['locstyle'] || layer.locstyle;
    contentFeature.set('locstyle', locstyle);

    if (this.mapController.filter) {
      if (!!parseFloat(this.mapController.data.filterHandling)) {
        this.mapController.filter.hideFeatureMulti(contentFeature);
      }
      else {
        this.mapController.filter.hideFeature(contentFeature);
      }
    }
    return contentFeature;
  }
  addFeatures (features, chain) {
    const scope = this;
    let addedFeatures;
    let layer;
    let oldLength = scope.vectorCollection.getLength(); //necesarry to distinct redundant features

    scope.vectorCollection.extend(features);
    addedFeatures = scope.vectorCollection.getArray().slice(oldLength);

    if (typeof chain === "string") {
      let arrChain = chain.split(',');
      let i = 1;
      layer = scope.arrLayers[arrChain[0]];
      while(chain[i]) {
        layer = layer.childs[arrChain[i]];
        i++;
      }
    }
    else {
      layer = scope.arrLayers[chain]
    }
    if (layer.features) {
      layer.features = layer.features.concat(addedFeatures);
    }
    else if (layer.vectorLayer) {
      let source = layer.vectorLayer.getSource().getSource();
      source.addFeatures(features);
    }
  }
  handleZoom(proxy) {
    const mapController = proxy.options.mapController;
    const childStates = mapController.state.arrLayerStates;
    const objLayers = mapController.state.objLayers;
    const zoom = mapController.map.getView().getZoom();
    for (let id in childStates) {
      if (childStates.hasOwnProperty(id) && objLayers[id]) {
        childStates[id] = this.handleZoomChilds(zoom, childStates[id], objLayers[id]);
      }
    }
    this.mapController ? this.mapController.setLayerStates(childStates) : '';
  }
  handleZoomChilds (zoom, childState, child) {
    for (let id in childState.childStates) {
      if (childState.childStates.hasOwnProperty(id)) {
        childState.childStates[id] = this.handleZoomChilds(zoom, childState.childStates[id], child.childs[id]);
      }
    }
    let greyed = child.zoom && !this.compareZoom(child.zoom);
    if (childState['greyed'] !== greyed) {
      if (greyed || !!child.hide) {
        this.hide(child.loader, child.features || child.vectorLayer);
      }
      else {
        this.show(child.loader, child.features || child.vectorLayer);
      }
    }
    childState['greyed'] = greyed;

    return childState;

  }
  compareZoom(layerZoom) {
    let zoom = this.mapController.map.getView().getZoom();
    return (parseInt(layerZoom.min, 10) < zoom && parseInt(layerZoom.max, 10) > zoom);
  }
  getWfsStyle (feature, content) {
    let locstyleWfs = content.locstyleWfs;
    for (let i in locstyleWfs) {
      if (locstyleWfs.hasOwnProperty(i)) {
        let element = locstyleWfs[i];
        let value = feature.get(element.key);
        switch (element.compare) {
          case "==":
            if (value == element.value) {
              return element.locstyle;
            }
            break;
          case ">":
            if (value > element.value) {
              return element.locstyle;
            }
            break;
          case "<":
            if (value < element.value) {
              return element.locstyle;
            }
            break;
        }
      }
    }
    return content.locationStyle;
  }
}
