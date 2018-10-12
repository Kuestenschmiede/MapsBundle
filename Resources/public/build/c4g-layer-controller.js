/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-layer-controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-layer-controller.js":
/*!*****************************************************!*\
  !*** ./Resources/public/js/c4g-layer-controller.js ***!
  \*****************************************************/
/*! exports provided: C4gLayerController */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gLayerController", function() { return C4gLayerController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_layer__ = __webpack_require__(/*! ./c4g-layer */ "./Resources/public/js/c4g-layer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var c4g = this.c4g;

var C4gLayerController = function () {
  function C4gLayerController(proxy) {
    _classCallCheck(this, C4gLayerController);

    this.proxy = proxy;
    this.mapController = proxy.options.mapController;
    this.arrLayers = {};
    this.layerRequests = {};
  }

  _createClass(C4gLayerController, [{
    key: "loadLayers",
    value: function loadLayers() {
      var self = this;
      if (this.mapId === 0) {
        return false;
      }

      //jQuery.ajax("maps/layerService",{//this.proxy.api_layer_url,{
      jQuery.ajax(this.proxy.api_layer_url, {
        dataType: this.mapController.data.jsonp ? "jsonp" : "json"

      }).done(function (data) {
        self.addLayers(data.layer, data.foreignLayers);
        self.proxy.layers_loaded = true;
        __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(self.proxy.hook_layer_loaded, self.proxy.layerIds);
        // utils.callHookFunctions(c4g.maps.hook.proxy_layer_loaded, {layerIds: self.proxy.layerIds, proxy: self.proxy});
        self.proxy.checkLocationStyles({
          done: function done() {
            self.drawLayerInitial();
          }
        });
        return true;
      }).fail(function () {
        // @TODO: error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the layers...');
        return false;
      }).always(function () {
        // this.proxy.starboard.spinner.hide();
      });
    } // end of "loadLayer()"

  }, {
    key: "addLayers",
    value: function addLayers(layers, foreignLayers) {
      var i, j, k, p, isVisible, layer, storedItem, linkItems, uid, currentZoom, fnHandleAndAppendLayerChilds, endlessLoopId, parentId, parentIds, permalinkedLayers, child, _fnHandleChilds, key, starboard, fnAddToHook;

      var self = this;
      isVisible = false;

      permalinkedLayers = this.mapController.data.layers || [];

      fnHandleAndAppendLayerChilds = function fnHandleAndAppendLayerChilds(objItem) {
        var toggle, entryWrapper;

        if (objItem.hasChilds) {
          objItem.visibleChilds = self.addLayers(objItem.childs, foreignLayers);
        }
      }; // end of "fnHandleAndAppendLayerChilds()"

      // wrapper function to avoid closure accessibility
      fnAddToHook = function fnAddToHook(layer) {
        var layername, layerid, layericon;

        if (layer.childs && layer.childs.length > 0) {
          layername = layer.name;
          layerid = layer.tabId;
          layericon = layer.awesomeicon;
          c4g.maps.starboardTabs = c4g.maps.starboardTabs || {};
          starboard = self.proxy.options.mapController.controls.starboard;
          starboard.hook_layerswitcher_loaded.push(function () {
            c4g.maps.starboardTabs[layerid] = new c4g.maps.control.starboardplugin.Customtab(starboard, {
              name: layername,
              tabId: layerid,
              awesomeicon: layericon
            });
          });
        }
      };

      if (layers && layers.length > 0) {
        for (i = 0; i < layers.length; i += 1) {
          if (this.arrLayers[layers[i].id]) {
            layer = this.arrLayers[layers[i].id];
          } else {
            layer = new __WEBPACK_IMPORTED_MODULE_0__c4g_layer__["C4gLayer"](layers[i]); //layers[i];
          }

          linkItems = false;
          //console.log(layer);
          if (_typeof(layer.content) === "object") {
            layer.content = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].objectToArray(layer.content);
          }

          // endless-loop prevention
          //
          parentId = layer.pid;
          parentIds = {};
          // build parent-ids chain
          while (self.arrLayers[parentId]) {
            if (parentIds[parentId]) {
              console.warn('Caught endless-loop (ID: ' + layer.id + ')');
              break;
            }
            parentIds[parentId] = true;
            parentId = this.arrLayers[parentId].pid;
          }

          if (layer.content && layer.content[0] && layer.content[0].cssClass) {
            layer.cssClass = layer.content[0].cssClass;
          }

          if (!parentIds[parentId]) {

            // prepare layer data if they are a new starboard tab
            if (layer.type === "startab") {
              layer.editable = true;
              layer.renderSpecial = true;
              layer.tabId = layer.id;
              if (!layer.layername) {
                layer.display = true;
              }
              // iterate childs and tell them to not load in layerswitcher
              _fnHandleChilds = function fnHandleChilds(fLayer) {
                for (var count = 0; count < fLayer.childs.length; count++) {
                  var childArr = fLayer.childs[count];
                  childArr.editable = true;
                  childArr.tabId = fLayer.tabId;
                  childArr.renderSpecial = true;
                  if (self.arrLayers[childArr.id]) {
                    child = self.arrLayers[childArr.id];
                  } else {
                    child = new __WEBPACK_IMPORTED_MODULE_0__c4g_layer__["C4gLayer"](childArr); //layers[i];
                  }
                  // set renderSpecial to remove it from normal layerswitcher
                  self.arrLayers[child.id] = child;
                  fLayer.childs[count] = child;
                  if (child.hasChilds) {
                    // recursive call
                    _fnHandleChilds(child);
                  }
                }
              }; // end of fnHandleChilds

              if (layer.hasChilds) {
                _fnHandleChilds(layer);
              }
              fnAddToHook(layer);
            }

            uid = layer.id || __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getUniqueId();
            this.arrLayers[uid] = layer;
            if (this.proxy.checkLayerIsActiveForZoom(layer.id)) {
              layer.isInactive = false;
            } else {
              layer.isInactive = true;
            }

            this.proxy.layerIds.push(layer.id);

            if (layer.display) {
              isVisible = true;
              fnHandleAndAppendLayerChilds(layer);
            } else if (layer.pid && this.arrLayers[layer.pid]) {
              // set hide when layers are not displayed in the starboard
              layer.hide = this.arrLayers[layer.pid].hide;
            }

            var visible = false;
            if (permalinkedLayers.length > 0) {
              for (p = 0; p < permalinkedLayers.length; p += 1) {
                if (permalinkedLayers[p] == layer.id) {
                  visible = true;
                  break;
                }
              }
            }

            if (layer.hide !== "1" || visible) {
              this.proxy.activeLayerIds[layer.id] = 'invisible';
            }
          }
        } // end of for-loop

        // wrapperElement.appendChild(wrapper);
      }

      return isVisible;
    } // end of "addLayers()"

  }, {
    key: "loadLayerContent",
    value: function loadLayerContent(itemUid) {

      var self = this,
          i,
          layers,
          features,
          featureProjection,
          dataProjection,
          layerGroup,
          contentData,
          requestData,
          requestContentData,
          requestVectorSource,
          vectorLayer,
          vectorSource,
          vectorStyle,
          clusterSource,
          styleForCluster,
          refreshInterval,
          refreshAjaxVars,
          fnAttachDataToLayer;

      refreshAjaxVars = {};

      fnAttachDataToLayer = function fnAttachDataToLayer(layer, data) {
        data.properties = data.properties || {};

        layer.popup = data.popup || data.properties.popup || false;
        layer.tooltip = data.tooltip || data.properties.tooltip || false;
        layer.tooltip_length = data.tooltip_length || data.properties.tooltip_length || false;
        layer.label = data.label || data.properties.label || false;
        layer.zoom_onclick = data.zoom_onclick || data.properties.zoom_onclick || false;
      };

      if (this.arrLayers[itemUid].content) {
        layers = [];

        var contentFeatures = [];
        for (i = 0; i < this.arrLayers[itemUid].content.length; i += 1) {
          contentData = this.arrLayers[itemUid].content[i];
          styleForCluster = function styleForCluster(feature, resolution) {

            var size, style, fFeatures, iconOffset, radius, k, fillcolor, fontcolor;

            if (contentData && contentData.locationStyle && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle]) {
              style = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style(feature, resolution);

              if (!style) {
                style = [];
                self.fittingExtends[itemUid] = vectorSource.getExtent();
              }

              if (feature !== undefined && feature !== null && feature.self !== window) {
                if (feature.get('features')) {
                  fFeatures = feature.get('features');
                } else {
                  fFeatures = [];
                  fFeatures[0] = feature;
                }
                size = fFeatures.length;
                if (size > 1) {
                  if (fFeatures[0].getStyle() && size < 1000) {
                    // limit for performance
                    style[0] = fFeatures[0].getStyle()[0];
                    for (k = 0; k < fFeatures.length; k += 1) {
                      if (!fFeatures[k].getStyle()) {
                        style = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style(fFeatures[0], resolution);
                        break;
                      }
                    }
                  } else {
                    style = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style(fFeatures[0], resolution);
                  }
                  if (!style) {
                    style = [];
                  }

                  // calculate bubble-offset
                  iconOffset = [0, 0];
                  if (style[0]) {
                    if (_typeof(style[0].getImage()) && style[0].getImage().getRadius && typeof style[0].getImage().getRadius === "function") {
                      radius = parseInt(style[0].getImage().getRadius(), 10);
                      if (radius) {
                        iconOffset = [0, radius];
                      }
                    } else if (style[0].getImage() && style[0].getImage().getAnchor && typeof style[0].getImage().getAnchor === "function") {
                      iconOffset = style[0].getImage().getAnchor() || [0, 0];
                    }
                  }

                  fillcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity('4975A8', {
                    unit: '%',
                    value: 70
                  });

                  if (contentData.cluster_fillcolor) {
                    fillcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(contentData.cluster_fillcolor, {
                      unit: '%',
                      value: 70
                    });
                  }
                  fontcolor = '#FFFFFF';
                  if (contentData.cluster_fontcolor) {
                    fontcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(contentData.cluster_fontcolor, {
                      unit: '%',
                      value: 100
                    });
                  }

                  style.push(new ol.style.Style({
                    text: new ol.style.Text({
                      text: "●",
                      font: "60px sans-serif",
                      offsetX: -1 * iconOffset[0],
                      offsetY: -1 * iconOffset[1],
                      fill: new ol.style.Fill({
                        color: fillcolor
                      })
                    })
                  }));
                  style.push(new ol.style.Style({
                    text: new ol.style.Text({
                      text: size.toString(),
                      offsetX: -1 * iconOffset[0],
                      offsetY: -1 * iconOffset[1] + 3,
                      fill: new ol.style.Fill({
                        color: fontcolor
                      })
                    })
                  }));
                } else if (size === 1 && fFeatures[0].getStyle()) {
                  return fFeatures[0].getStyle();
                }
              }
            }
            return style;
          }; // end of styleForCluster()

          if (contentData && contentData.type === "urlData") {

            requestData = {};
            requestData.url = contentData.data.url;
            if (contentData.data.params) {
              requestData.params = decodeURIComponent(contentData.data.params);
            }

            if (contentData.settings.boundingBox) {
              requestContentData = contentData;
              requestVectorSource = new ol.source.Vector({
                loader: function loader(extent, resolution, projection) {
                  var boundingArray, strBoundingBox, url;

                  boundingArray = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
                  strBoundingBox = '<bbox-query s="' + boundingArray[1] + '" n="' + boundingArray[3] + '" w="' + boundingArray[0] + '" e="' + boundingArray[2] + '"/>';
                  url = requestData.url;

                  if (requestData.params) {
                    url += '?data=' + encodeURIComponent(requestData.params.replace(/\(bbox\)/g, strBoundingBox));
                  }

                  if (self.layerRequests === undefined) {
                    self.layerRequests = {};
                  }
                  if (self.layerRequests['layerRequest' + itemUid] !== undefined) {
                    self.layerRequests['layerRequest' + itemUid].abort();
                  }

                  self.layerRequests['layerRequest' + itemUid] = jQuery.ajax({
                    url: url
                  }).done(function (response) {
                    var j, format, centerPoint, rFeatures, osmNodes, osmNds, nodeIdx, ndIdx, infoNodes, newTag, ref, lineExtent;

                    delete self.layerRequests['layerRequest' + itemUid];

                    // preprocessing the osm_xml to find relation-nodes with information
                    if (response && response.children && response.children[0]) {
                      // 1) find nodes with data
                      osmNodes = response.children[0].getElementsByTagName('node');
                      if (osmNodes) {
                        infoNodes = {};
                        for (nodeIdx in osmNodes) {
                          if (osmNodes.hasOwnProperty(nodeIdx) && osmNodes[nodeIdx] && osmNodes[nodeIdx].children && osmNodes[nodeIdx].children.length > 0) {
                            infoNodes[osmNodes[nodeIdx].getAttribute('id')] = osmNodes[nodeIdx];
                            // infoNodes[osmNodes[nodeIdx].getAttribute('id')] = nodeIdx;
                          }
                        }
                      }

                      // 2) check and handle relations
                      osmNds = response.children[0].getElementsByTagName('nd');
                      if (osmNds) {
                        for (ndIdx in osmNds) {
                          if (ndIdx) {
                            if (osmNds.hasOwnProperty(ndIdx) && osmNds[ndIdx]) {
                              try {

                                ref = osmNds[ndIdx].getAttribute('ref');
                                if (infoNodes && ref && infoNodes[ref]) {
                                  if (requestContentData && requestContentData.settings) {
                                    if (requestContentData.settings.showAdditionalGeometries) {
                                      // mark as additional information
                                      if (response) {
                                        newTag = response.createElement('tag');
                                        if (newTag && osmNds[ndIdx].parentElement && osmNds[ndIdx].parentElement.getAttribute('id')) {
                                          newTag.setAttribute('k', 'c4g_osm_ref');
                                          newTag.setAttribute('v', osmNds[ndIdx].parentElement.getAttribute('id'));
                                          infoNodes[ref].appendChild(newTag);
                                        }
                                      }
                                    } else {
                                      // remove additional information
                                      infoNodes[ref].innerHTML = '';
                                    }
                                  }
                                }
                              } catch (e) {
                                console.warn('Could not check and handle relations.');
                              }
                            }
                          }
                        }
                      }
                    }
                    // import osm_xml
                    format = new ol.format.OSMXML();
                    if (format && response) {
                      try {
                        rFeatures = format.readFeatures(response, { featureProjection: projection });
                      } catch (e) {
                        console.warn('Can not read feature.');
                        //console.log(e.stack);
                      }
                    }

                    // postprocessing features
                    if (rFeatures && rFeatures.length > 0) {
                      for (j = 0; j < rFeatures.length; j += 1) {

                        if (rFeatures[j].getGeometry().getType() === "Point") {
                          rFeatures[j].set('osm_type', 'node');
                        } else {
                          rFeatures[j].set('osm_type', 'way');
                        }
                        rFeatures[j].set('c4g_type', 'osm');
                        rFeatures[j].set('cluster_zoom', contentData.cluster_zoom);
                        rFeatures[j].set('cluster_popup', contentData.cluster_popup);
                        rFeatures[j].set('loc_linkurl', contentData.loc_linkurl);
                        rFeatures[j].set('hover_location', contentData.hover_location);
                        rFeatures[j].set('hover_style', contentData.hover_style);
                        rFeatures[j].set('zoom_onclick', contentData.data.zoom_onclick);
                        rFeatures[j].set('label', contentData.data.label);

                        if (requestContentData.settings.forceNodes) {
                          // convert tracks and areas to points
                          if (rFeatures[j].getGeometry().getType() === "Polygon") {
                            centerPoint = rFeatures[j].getGeometry().getInteriorPoint().getCoordinates();
                            rFeatures[j].setGeometry(new ol.geom.Point(centerPoint));
                          } else if (rFeatures[j].getGeometry().getType() === "LineString") {
                            // @TODO: prüfen ob dies korrekter mittelpunkt ist
                            lineExtent = rFeatures[j].getGeometry().getExtent();
                            centerPoint = ol.extent.getCenter(lineExtent);
                            rFeatures[j].setGeometry(new ol.geom.Point(centerPoint));
                          }
                        }
                        if (rFeatures[j].get('c4g_osm_ref')) {
                          // if (requestContentData.settings.showAdditionalGeometries) {
                          if (requestContentData.settings.additionalStyle) {
                            // @TODO: load and attach style
                          } else {
                            rFeatures[j].setStyle(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].reduceStyle(requestContentData.locationStyle));
                          }
                          // } else {
                          //   continue;
                          // }
                        }
                      }
                      try {
                        requestVectorSource.addFeatures(rFeatures);
                      } catch (e) {
                        console.warn('Could not add features to source. The "forceNodes"-option should be used.');
                      }
                    }
                    //self.combineLayers(self);
                  }); // end of AJAX
                },
                strategy: ol.loadingstrategy.bbox
              });

              vectorSource = requestVectorSource;
            } else {

              if (typeof ol.format[contentData.format] === "function") {

                //StaticVector
                vectorSource = new ol.source.Vector({
                  format: new ol.format[contentData.format](),
                  url: requestData.url,
                  projection: 'EPSG:3857',
                  strategy: ol.loadingstrategy.all
                });

                if (contentData.settings && contentData.settings.refresh === true) {
                  if (self.layerRequests === undefined) {
                    self.layerRequests = {};
                  }

                  refreshInterval = typeof contentData.settings.interval === 'number' ? contentData.settings.interval : 10000;
                  /* do it with better ajax-handling
                   self.layerRequests['layerRequest' + itemUid] = window.setInterval(function () {
                   vectorSource.clear();
                   }, refreshInterval);
                   */

                  // Anfang Einschub neue AJAX-Layer
                  refreshAjaxVars.blnHasPositionIds = false;
                  refreshAjaxVars.arrPositionIds = [];
                  refreshAjaxVars.objFeatures = {};

                  vectorSource.set('refreshInterval', refreshInterval);

                  vectorSource.set('refreshFunction', function () {

                    if (!vectorSource.get('hasIds')) {
                      vectorSource.forEachFeature(function (feature) {
                        if (feature.get('positionId')) {
                          refreshAjaxVars.blnHasPositionIds = true;
                          refreshAjaxVars.arrPositionIds.push(feature.get('positionId'));
                          refreshAjaxVars.objFeatures[feature.get('positionId')] = feature;
                        }
                      });
                      if (refreshAjaxVars.blnHasPositionIds) {
                        vectorSource.set('hasIds', true);
                      }
                    }

                    jQuery.ajax({
                      url: requestData.url,
                      done: function done(data) {

                        if (data.renewableResponse) {
                          // update of stations
                          jQuery.each(data.features, function (index, featureData) {
                            if (featureData.type && featureData.type === "Feature") {
                              var feature = new ol.format[contentData.format]().readFeature(featureData, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                              });
                              var layer = self.arrLayers[featureData.properties.id];
                              var popupContent = featureData.properties.popup;
                              layer.vectorLayer.getLayers().forEach(function (element, index, array) {
                                if (!self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId]) {
                                  self.proxy.locationStyleController.loadLocationStyles([featureData.properties.styleId], { done: function done() {
                                      element.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                                    } });
                                } else {
                                  element.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                                }
                                element.getSource().forEachFeature(function (nestedFeature) {
                                  nestedFeature.set('popup', popupContent);
                                });
                              });
                              layer.content[0].locationStyle = featureData.properties.styleId;

                              if (!self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId]) {
                                self.proxy.locationStyleController.loadLocationStyles([featureData.properties.styleId], { done: function done() {
                                    feature.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                                  } });
                              } else {
                                feature.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                              }

                              if (self.proxy.activeLayerIds[layer.id]) {
                                self.hideLayer(layer.id);
                                self.showLayer(layer.id);
                              }
                              // vectorSource.addFeature(feature);
                            }
                          });
                        }

                        if (data.features) {

                          refreshAjaxVars.arrNewPositionIds = [];
                          refreshAjaxVars.objNewFeatures = {};

                          jQuery.each(data.features, function (index, featureData) {
                            if (featureData.type && featureData.type == "Feature") {
                              refreshAjaxVars.feature = new ol.format[contentData.format]().readFeature(featureData, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                              });
                              refreshAjaxVars.feature.set('cluster_zoom', contentData.cluster_zoom);
                              refreshAjaxVars.feature.set('loc_linkurl', contentData.loc_linkurl);
                              refreshAjaxVars.feature.set('hover_location', contentData.hover_location);
                              refreshAjaxVars.feature.set('hover_style', contentData.hover_style);
                              if (refreshAjaxVars.feature.get('positionId')) {
                                refreshAjaxVars.arrNewPositionIds.push(refreshAjaxVars.feature.get('positionId'));
                                refreshAjaxVars.objNewFeatures[refreshAjaxVars.feature.get('positionId')] = refreshAjaxVars.feature;
                              }
                            }
                          });

                          jQuery.each(refreshAjaxVars.arrPositionIds, function (index, positionId) {
                            if (refreshAjaxVars.arrNewPositionIds.indexOf(positionId) == -1) {
                              // positions id in neuer antwort nicht mehr enthalten -> lösche feature
                              if (typeof refreshAjaxVars.objFeatures[positionId] !== "undefined") {
                                vectorSource.removeFeature(refreshAjaxVars.objFeatures[positionId]);
                                delete refreshAjaxVars.arrPositionIds[index];
                              }
                            }
                          });

                          jQuery.each(refreshAjaxVars.arrNewPositionIds, function (index, positionId) {
                            if (refreshAjaxVars.arrPositionIds.indexOf(positionId) == -1) {
                              // positions id ist noch nicht vorhanden -> neues feature
                              refreshAjaxVars.arrPositionIds.push(positionId);
                              refreshAjaxVars.objFeatures[positionId] = refreshAjaxVars.objNewFeatures[positionId];
                              vectorSource.addFeature(refreshAjaxVars.objNewFeatures[positionId]);
                            }
                          });
                        }
                      }
                    });
                  });

                  self.proxy.requestFunctions['request_' + itemUid] = {
                    'function': vectorSource.get('refreshFunction'),
                    'interval': refreshInterval
                  };

                  // Ende Einschub neue AJAX-Layer
                }
              } else {
                console.warn('Format type ' + contentData.format + ' in ol.format not found.');
              }
            }

            if (contentData.settings.cluster) {

              clusterSource = new ol.source.Cluster({
                distance: 40,
                //threshold: 2, //minimum element count
                source: vectorSource,
                zoom: contentData.cluster_zoom
              });
              //console.log(clusterSource);
              this.styleForCluster = styleForCluster;

              //vectorLayer = utils.getVectorLayer(clusterSource, styleForCluster);

              vectorLayer = new ol.layer.AnimatedCluster({ name: 'Cluster',
                source: clusterSource,
                // Use a style function for cluster symbolisation
                style: styleForCluster
              });
            } else {
              vectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(vectorSource, self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] ? self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style : null);
            }

            /* Fit to extend */
            if (contentData.settings && contentData.settings.fitToExtend) {

              self.fittingExtends = self.fittingExtends || {};

              vectorSource.on('change', function () {

                // check currently stored id's
                for (i in self.fittingExtends) {
                  if (self.fittingExtends.hasOwnProperty(i)) {
                    if (typeof self.proxy.activeLayerIds[i] === "undefined" || self.proxy.activeLayerIds[0] == "invisible") {
                      delete self.fittingExtends[i];
                    }
                  }
                }

                self.fittingExtends[itemUid] = vectorSource.getExtent(); //vectorSource.getFeatures();
                __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].fitToExtents(self.fittingExtends, self.mapController.map);
              });
            }
            // end of fit to extend

            fnAttachDataToLayer(vectorLayer, contentData.data);
            layers.push(vectorLayer);
          } else if (this.arrLayers[itemUid].type === "table" || this.arrLayers[itemUid].type === "link") {
            var layerContent = this.arrLayers[itemUid].content;
            contentData = layerContent[0];
            if (contentData && contentData.data.properties && contentData.data.properties.projection) {
              dataProjection = contentData.data.properties.projection;
              featureProjection = this.mapController.map.getView().getProjection();
            } else {
              dataProjection = undefined;
            }

            // force all nodes into one layer


            var contentFeature = new ol.format[layerContent[i].format]({}).readFeatures(layerContent[i].data, {
              featureProjection: featureProjection,
              dataProjection: dataProjection
            })[0];
            contentFeature.set('cluster_zoom', contentData.cluster_zoom);
            contentFeature.set('cluster_popup', contentData.cluster_popup);
            contentFeature.set('loc_linkurl', contentData.loc_linkurl);
            contentFeature.set('hover_location', contentData.hover_location);
            contentFeature.set('hover_style', contentData.hover_style);
            contentFeature.set('popup', layerContent[i].data.properties.popup);
            contentFeature.set('zoom_onclick', contentData.zoom_onclick);
            contentFeatures.push(contentFeature);

            if (i + 1 === this.arrLayers[itemUid].content.length) {
              vectorSource = new ol.source.Vector({
                features: contentFeatures,
                projection: 'EPSG:3857',
                format: new ol.format.GeoJSON()

              });
              if (contentData && contentData.settings && contentData.settings.cluster) {
                clusterSource = new ol.source.Cluster({
                  distance: 40,
                  zoom: contentData.cluster_zoom,

                  //threshold: 2, //minimum element count
                  source: vectorSource
                });
                //vectorLayer = utils.getVectorLayer(clusterSource, styleForCluster);

                vectorLayer = new ol.layer.AnimatedCluster({ name: 'Cluster',
                  source: clusterSource,
                  // Use a style function for cluster symbolisation
                  style: styleForCluster
                });
              } else {
                vectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(vectorSource, contentData && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] ? self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style : null);
              }
              layers.push(vectorLayer);
            }
            //return;
          } else {
            if (this.arrLayers[itemUid].content.length > 1) {
              //TODO: refactoren und kürzen!
              // we have overpass request with reassigned forum layers
              // forum layers can not be drawn via the normal drawLayer, because they do not have a Uid
              if (contentData && typeof ol.format[contentData.format] === "function") {
                if (contentData.data.properties && contentData.data.properties.projection) {
                  dataProjection = contentData.data.properties.projection;
                  featureProjection = this.mapController.map.getView().getProjection();
                } else {
                  dataProjection = undefined;
                }

                features = new ol.format[contentData.format]({}).readFeatures(contentData.data, {
                  featureProjection: featureProjection,
                  dataProjection: dataProjection
                });

                var missingStyles = [];
                var unstyledFeatures = [];
                for (var j = 0; j < features.length; j += 1) {
                  if (features[j].get('styleId')) {
                    if (self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')] && self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style) {
                      features[j].setStyle(self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style);
                    } else {
                      missingStyles.push(features[j].get('styleId'));
                      unstyledFeatures.push(features[j]);
                    }
                  }
                }

                vectorStyle = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style;

                if (missingStyles.length > 0) {
                  //TODO there are unstyled features because some styles were not loaded
                } else {
                  vectorSource = new ol.source.Vector({
                    features: features,
                    projection: 'EPSG:3857',
                    format: new ol.format.GeoJSON()
                  });
                  clusterSource = new ol.source.Cluster({
                    distance: 40,
                    zoom: contentData.cluster_zoom,

                    //threshold: 2, //minimum element count
                    source: vectorSource
                  });

                  vectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(clusterSource, vectorStyle);
                  if (contentData.data && contentData.data.properties) {
                    if (contentData.data.properties.popup) {
                      vectorLayer.popup = contentData.data.properties.popup;
                    }
                    if (contentData.data.properties.tooltip) {
                      vectorLayer.tooltip = contentData.data.properties.tooltip;
                    }
                    if (contentData.data.properties.label) {
                      vectorLayer.label = contentData.data.properties.label;
                    }
                    if (contentData.data.properties.onclick_zoom) {
                      vectorLayer.onclick_zoom = contentData.data.properties.onclick_zoom;
                    }
                  }
                  layers.push(vectorLayer);
                }
              } else {
                if (contentData) {
                  console.warn('Format type ' + contentData.format + ' in ol.format not found.');
                } else {
                  //no contentData, maybe a link
                }
              }
            } else {
              // normal, not overpass layer
              self.drawLayer(itemUid);
              return;
            }
          }
        }

        // add vector layer group
        layerGroup = new ol.layer.Group({
          layers: layers
        });
        this.arrLayers[itemUid].vectorLayer = layerGroup;
        self.mapController.map.addLayer(layerGroup);
        //self.combine(self);
      } else if (this.arrLayers[itemUid].async_content == 1) {
        styleForCluster = function styleForCluster(feature, resolution) {
          var styleId, style, iconOffset, radius, fillcolor, fontcolor;
          if (feature && feature.get('features')) {
            if (styleId = feature.get('features')[0].get('locationStyle')) {
              if (self.proxy.locationStyleController.arrLocStyles[styleId] && self.proxy.locationStyleController.arrLocStyles[styleId].style) {
                style = self.proxy.locationStyleController.arrLocStyles[styleId].style(feature.get('features')[0], resolution);
              }
            }
            if (!style) {
              style = [];
            }
            if (feature.get('features').length > 1) {
              // calculate bubble-offset
              iconOffset = [0, 0];
              if (style[0]) {
                if (typeof style[0].getImage().getRadius === "function") {
                  radius = parseInt(style[0].getImage().getRadius(), 10);
                  if (radius) {
                    iconOffset = [0, radius];
                  }
                } else if (typeof style[0].getImage().getAnchor === "function") {
                  iconOffset = style[0].getImage().getAnchor() || [0, 0];
                }
              }

              fillcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity('4975A8', {
                unit: '%',
                value: 70
              });

              if (contentData.cluster_fillcolor) {
                fillcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(contentData.cluster_fillcolor, {
                  unit: '%',
                  value: 70
                });
              }
              if (feature.get('features')[0].get('cluster_fillcolor')) {
                fillcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(feature.get('features')[0].get('cluster_fillcolor'), {
                  unit: '%',
                  value: 70
                });
              }
              fontcolor = '#FFFFFF';
              if (feature.get('features')[0].get('cluster_fontcolor')) {
                fontcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(feature.get('features')[0].get('cluster_fontcolor'), {
                  unit: '%',
                  value: 100
                });
              }

              style.push(new ol.style.Style({
                text: new ol.style.Text({
                  text: "●",
                  font: "60px sans-serif",
                  offsetX: -1 * iconOffset[0],
                  offsetY: -1 * iconOffset[1],
                  fill: new ol.style.Fill({
                    color: fillcolor
                  })
                })
              }));
              style.push(new ol.style.Style({
                text: new ol.style.Text({
                  text: feature.get('features').length.toString(),
                  offsetX: -1 * iconOffset[0],
                  offsetY: -1 * iconOffset[1] + 3,
                  fill: new ol.style.Fill({
                    color: fontcolor
                  })
                })
              }));
            }
          }

          if (style) {
            return style;
          }
        };
        requestVectorSource = new ol.source.Vector({
          loader: function loader(extent, resolution, projection) {
            var boundingArray, strBoundingBox, url;
            self.mapController.spinner.show();
            boundingArray = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
            strBoundingBox = boundingArray[0] + ',' + boundingArray[1] + ';' + boundingArray[2] + ',' + boundingArray[3];
            if (self.layerRequests === undefined) {
              self.layerRequests = {};
            }
            if (self.layerRequests['layerDataRequest' + itemUid] !== undefined) {
              self.layerRequests['layerDataRequest' + itemUid].abort();
            }
            if (!self.proxy.locationStyleController.arrLocStyles[self.arrLayers[itemUid].locstyle]) {
              self.proxy.locationStyleController.loadLocationStyles([self.arrLayers[itemUid].locstyle], { done: function done() {} });
            }

            self.layerRequests['layerDataRequest' + itemUid] = jQuery.ajax({
              url: self.proxy.api_layercontentdata_url + '/' + self.arrLayers[itemUid].id + '/' + strBoundingBox
            }).done(function (data) {
              if (data.length > 0 && !contentFeatures) {
                contentFeatures = [];
              }
              var layer = self.arrLayers[itemUid];
              loopData: for (var _i = 0; _i < data.length; _i++) {
                contentData = data[_i];
                for (var _j = 0; _j < contentFeatures.length; _j++) {
                  if (contentData.id === contentFeatures[_j].id) continue loopData;
                }
                var resultCoordinate = ol.proj.transform([parseFloat(contentData['geox']), parseFloat(contentData['geoy'])], 'EPSG:4326', 'EPSG:3857');
                var point = new ol.geom.Point(resultCoordinate);
                contentFeature = new ol.Feature(point);
                contentFeature.setId(contentData.id);
                contentFeature.set('cluster_zoom', layer.cluster.zoom);
                contentFeature.set('cluster_popup', layer.cluster.popup);
                contentFeature.set('cluster_fillcolor', layer.cluster.fillcolor);
                contentFeature.set('cluster_fontcolor', layer.cluster.fontcolor);
                contentFeature.set('loc_linkurl', layer.loc_linkurl);
                contentFeature.set('hover_location', layer.hover_location);
                contentFeature.set('hover_style', layer.hover_style);
                var popup = contentData['popup'] ? contentData['popup'] : Object.assign({}, layer.popup);
                if (popup && popup.content && popup.content.search && popup.content.search('itemId')) {
                  popup.content = popup.content.replace('itemId', contentData['id']);
                }
                if (contentData['label']) {
                  contentFeature.set('label', contentData['label']);
                }
                if (contentData['tooltip']) {
                  contentFeature.set('tooltip', contentData['tooltip']);
                }
                contentFeature.set('popup', popup);
                contentFeature.set('zoom_onclick', layer.zoom_onclick);
                contentFeature.set('tid', contentData['id']);
                var locstyle = contentData['locstyle'] || layer.locstyle;
                contentFeature.set('locationStyle', locstyle);
                if (locstyle && self.proxy.locationStyleController.arrLocStyles[locstyle] && self.proxy.locationStyleController.arrLocStyles[locstyle].style) {
                  contentFeature.setStyle(self.proxy.locationStyleController.arrLocStyles[locstyle].style);
                  contentFeatures.push(contentFeature);
                } else {
                  if (!unstyledFeatures) {
                    unstyledFeatures = [];
                  }
                  if (!missingStyles) {
                    missingStyles = [];
                  }
                  contentFeature.set('styleId', locstyle);
                  unstyledFeatures.push(contentFeature);
                  missingStyles[locstyle] = locstyle;
                }
              }
              if (missingStyles) {
                self.proxy.locationStyleController.loadLocationStyles(missingStyles, { done: function done() {
                    for (i = 0; i < unstyledFeatures.length; i++) {
                      var styleId = unstyledFeatures[i].get('styleId');
                      unstyledFeatures[i].setStyle(self.proxy.locationStyleController.arrLocStyles[styleId].style);
                      requestVectorSource.addFeature(unstyledFeatures[i]);
                    }
                    missingStyles = undefined;
                  } });
              }

              if (data.length > 0) {
                requestVectorSource.addFeatures(contentFeatures);
              }
            }).always(function () {
              self.mapController.spinner.hide();
            });
          },
          strategy: ol.loadingstrategy.bbox
        });

        if (this.arrLayers[itemUid].cluster) {
          var layer = self.arrLayers[itemUid];
          var map = self.mapController.map;
          var currentZoom = map.getView().getZoom();
          var clusterDistance = this.arrLayers[itemUid].cluster.distance || 20;
          if (currentZoom >= layer.cluster.zoom) {
            clusterDistance = 0;
          }

          clusterSource = new ol.source.Cluster({
            distance: clusterDistance,
            //threshold: 2, //minimum element count
            source: requestVectorSource
          });
          vectorLayer = new ol.layer.AnimatedCluster({ name: 'Cluster',
            source: clusterSource,
            // Use a style function for cluster symbolisation
            style: styleForCluster
          });
        } else {
          vectorLayer = new ol.layer.Vector({
            name: 'Layer',
            source: requestVectorSource
          });
        }
        layers = layers || [];
        layers.push(vectorLayer);
        layerGroup = new ol.layer.Group({
          layers: layers
        });
        this.arrLayers[itemUid].vectorLayer = layerGroup;
        self.mapController.map.addLayer(layerGroup);
      } else {
        self.mapController.spinner.show();
        jQuery.ajax({
          dataType: self.mapController.data.jsonp ? "jsonp" : "json",
          url: self.proxy.api_layercontent_url + '/' + self.arrLayers[itemUid].id
        }).done(function (data) {
          var j = void 0,
              newLocationStyles = void 0;

          if (data.length > 0) {
            newLocationStyles = [];

            for (j = 0; j < data.length; j += 1) {

              self.arrLayers[itemUid].content = self.arrLayers[itemUid].content || [];

              self.arrLayers[itemUid].content.push(data[j]);
              newLocationStyles.push(data[j].locationStyle);
            }

            self.proxy.checkLocationStyles({
              done: function done() {
                // @TODO: check this!
                self.loadLayerContent(itemUid);
              }
            });
          }
        }).always(function () {
          self.mapController.spinner.hide();
        });
      }
    } // end of "loadLayerContent()"

  }, {
    key: "hideLayer",
    value: function hideLayer(layerUid, keepLayer) {

      var layer, i, j;

      layer = this.arrLayers[layerUid];
      if (!layer) {
        //console.warn('Cannot hide unknown layer (' + layerUid + ')');
        return false;
      }

      // check if layer is listed as "active"
      // otherwise there is nothing to remove or change
      if (this.proxy.activeLayerIds[layerUid]) {
        // remove layer from map (if it was visible before)
        if (this.proxy.activeLayerIds[layerUid] === 'visible' && layer.vectorLayer) {
          // [info]: do not use "layer.vectorLayer.setVisible(false);"
          //         see "showLayer()" for more information
          this.mapController.map.removeLayer(layer.vectorLayer);
        }
        // only mark as "invisible" if "keepLayer" is "true"
        // this is needed for the zoom-bounds
        if (keepLayer) {
          this.proxy.activeLayerIds[layerUid] = 'invisible';
        } else {
          delete this.proxy.activeLayerIds[layerUid];
        }
      }

      // childs needed to be checked independent from its parents state


      //ToDo loading problem
      if (layer && layer.hasChilds) {
        for (i = 0; i < layer.childs.length; i += 1) {
          this.hideLayer(layer.childs[i].id);
        }
      }
      if (layer.isInactive) {
        __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
        return;
      }
      layer.isInactive = true;

      if (this.layerRequests && typeof this.layerRequests['layer_request_' + layerUid] !== "undefined") {
        if (typeof this.layerRequests['layer_request_' + layerUid] == "number") {
          try {
            window.clearInterval(this.layerRequests['layer_request_' + layerUid]);
            delete this.layerRequests['layer_request_' + layerUid];
          } catch (e) {}
        }
      }
      //this.combineLayers(this);
      this.mapController.map.getView().setCenter([this.mapController.map.getView().getCenter()[0] + 0.001, this.mapController.map.getView().getCenter()[1]]);
      // hooks
      __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
    } // end of "hideLayer()"

  }, {
    key: "hideChildLayer",
    value: function hideChildLayer(layerUid, childUid) {
      var layer = this.arrLayers[layerUid];
      childUid = childUid.replace(layerUid, '');
      var childLayer = layer.vectorLayer.getLayers().getArray()[childUid];
      childLayer.set('visible', false);
    }
  }, {
    key: "showChildLayer",
    value: function showChildLayer(layerUid, childUid) {
      var layer = this.arrLayers[layerUid];
      childUid = childUid.replace(layerUid, '');
      var childLayer = layer.vectorLayer.getLayers().getArray()[childUid];
      childLayer.set('visible', true);
    }
  }, {
    key: "showLayer",
    value: function showLayer(layerUid) {
      var layer, mapLayers, addLayer, i, j, activeForZoom;

      activeForZoom = this.proxy.checkLayerIsActiveForZoom(layerUid);
      layer = this.arrLayers[layerUid];

      if (activeForZoom) {
        if (this.proxy.activeLayerIds[layerUid] !== 'visible') {
          //if (layer.link_id) {
          //  this.proxy.activeLayerIds[layer.link_id] = 'visible';
          //} else
          if (layer && layer.vectorLayer) {
            // [info]: do not use: "layer.vectorLayer.setVisible(true);"
            //         Always add and remove Layers, so that the last
            //         clicked layer is always ontop of the others.

            // check if layer is really not already on the map
            // to prevent adding the same layer multiple times
            addLayer = true;
            mapLayers = this.mapController.map.getLayers();
            mapLayers.forEach(function (element, index, array) {
              if (element === layer.vectorLayer) {
                addLayer = false;
              }
            });
            if (addLayer) {
              if (layer.vectorLayer.getLayers().getArray()[0] && layer.vectorLayer.getLayers().getArray()[0].popup && layer.vectorLayer.getLayers().getArray()[0].popup.showPopupOnActive) {
                c4g.maps.popup.$content.html('');
                c4g.maps.popup.$popup.addClass(c4g.maps.constant.css.ACTIVE).addClass(c4g.maps.constant.css.LOADING);
                c4g.maps.popup.spinner.show();
                var popupInfos = layer.vectorLayer.getLayers().getArray()[0].popup;
                var features = layer.vectorLayer.getLayers().getArray()[0].getSource().getFeatures();
                var coord = features['0'].getGeometry().getCoordinates();
                if (popupInfos.async === false) {
                  var objPopup = {};
                  objPopup.popup = popupInfos;
                  objPopup.feature = features['0'];
                  objPopup.layer = layer.vectorLayer.getLayers().getArray()[0];
                  // Call the popup hook for plugin specific popup content
                  if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                    __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
                  }
                  this.proxy.setPopup(objPopup);
                } else {
                  var self = this;
                  jQuery.ajax({
                    dataType: "json",
                    url: self.api_infowindow_url + '/' + popupInfos.content,
                    done: function done(data) {
                      var popupInfo = {
                        async: popupInfos.async,
                        content: data.content,
                        popup: popupInfos.popup,
                        routing_link: popupInfos.routing_link
                      };

                      var objPopup = {};
                      objPopup.popup = popupInfo;
                      objPopup.feature = features['0'];
                      objPopup.layer = layer;

                      // Call the popup hook for plugin specific popup content
                      if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                        __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
                      }

                      self.proxy.setPopup(objPopup);
                    }
                  });
                }
              }
              this.mapController.map.addLayer(layer.vectorLayer);
            }
          } else {
            this.loadLayerContent(layerUid);
          }
          this.proxy.activeLayerIds[layerUid] = 'visible';
        } else {
          //if (layer.link_id) {
          //  this.proxy.activeLayerIds[layer.link_id] = 'invisible';
          //} else {
          //this.proxy.activeLayerIds[layerUid] = 'invisible';
          //}
        }
      }

      if (layer && layer.hasChilds && activeForZoom) {
        for (i = 0; i < layer.childs.length; i += 1) {
          this.showLayer(layer.childs[i].id);
        }
      }

      if (layer && activeForZoom) {
        layer.isInactive = false;
      }

      if (typeof this.proxy.requestFunctions['request_' + layerUid] !== "undefined") {

        if (this.layerRequests && typeof this.layerRequests['layer_request_' + layerUid] === "undefined") {
          this.layerRequests['layer_request_' + layerUid] = window.setInterval(this.proxy.requestFunctions['request_' + layerUid].function, this.proxy.requestFunctions['request_' + layerUid].interval);
        }
      }
      //this.combineLayers(this);
      // hooks
      __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
    } // end of "showLayer()"

  }, {
    key: "drawLayer",
    value: function drawLayer(itemUid) {

      var self, element, elementContent, layers, i, j, missingStyles, unstyledFeatures, features, dataProjection, featureProjection, vectorSource, vectorLayer, vectorStyle, layerGroup;

      self = this;
      element = this.arrLayers[itemUid];

      // if (!element.hide) {

      layers = [];
      if (element.content && element.content.length > 0) {
        for (i = 0; i < element.content.length; i += 1) {

          elementContent = element.content[i];
          if (!elementContent) {
            continue;
          }
          if (typeof ol.format[elementContent.format] === "function") {

            // if (element.content[i].origType === 'single') {
            //   featureProjection = this.mapController.map.getView().getProjection();
            // } else {
            //   featureProjection = undefined;
            // }
            if (elementContent.data.properties && elementContent.data.properties.projection) {
              dataProjection = elementContent.data.properties.projection;
              featureProjection = this.mapController.map.getView().getProjection();
            } else {
              dataProjection = undefined;
            }

            if (elementContent.format === "OSMXML") {
              continue;
            }
            if (elementContent.data.geometry && elementContent.data.geometry.type === "Circle") {
              // draw circle geometries
              features = [];
              var feature = new ol.Feature(new ol.geom.Circle(ol.proj.fromLonLat(elementContent.data.geometry.center), parseFloat(elementContent.data.geometry.radius)));
              feature.set('styleId', elementContent.locationStyle);
              features.push(feature);
            } else {
              // remaining geometries
              features = new ol.format[elementContent.format]({}).readFeatures(elementContent.data, {
                featureProjection: featureProjection,
                dataProjection: dataProjection
              });
            }

            missingStyles = [];
            unstyledFeatures = [];
            for (j = 0; j < features.length; j += 1) {
              // features[j].setId(utils.getUniqueId());
              // features[j].set('projection', this.mapController.map.getView().getProjection());
              // features[j].set('projection', "EPSG:4326");
              features[j].set('hover_location', elementContent.hover_location);
              features[j].set('hover_style', elementContent.hover_style);
              if (features[j].get('styleId')) {
                if (self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')] && self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style) {
                  features[j].setStyle(self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style);
                } else {
                  missingStyles.push(features[j].get('styleId'));
                  unstyledFeatures.push(features[j]);
                }
              } else if (elementContent.locationStyle) {
                // feature has no property styleId, but elementContent has locationstyle
                if (self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle] && self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].style) {
                  //features[j].setStyle(self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].style);
                } else {
                  missingStyles.push(elementContent.locationStyle);
                  unstyledFeatures.push(features[j]);
                  features[j].set('styleId', elementContent.locationStyle);
                }
              }
            }

            vectorStyle = self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle] && self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].style;
            if (self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle] && self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].fnStyleFunction) {

              vectorStyle = Function("feature", "data", "map", self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].fnStyleFunction);
            }
            if (missingStyles.length > 0) {
              this.proxy.locationStyleController.loadLocationStyles(missingStyles, {
                done: function done() {
                  var f, fLayerGroup, fLayers, fVectorLayer, fVectorSource;
                  for (f = 0; f < unstyledFeatures.length; f += 1) {
                    if (self.proxy.locationStyleController.arrLocStyles[unstyledFeatures[f].get('styleId')]) {
                      unstyledFeatures[f].setStyle(self.proxy.locationStyleController.arrLocStyles[unstyledFeatures[f].get('styleId')].style);
                    }
                  }

                  fVectorSource = new ol.source.Vector({
                    features: features,
                    projection: 'EPSG:3857',
                    format: new ol.format.GeoJSON()
                  });

                  fVectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(fVectorSource, vectorStyle);

                  // layers.push(vectorLayer);
                  if (self.arrLayers[itemUid].fVectorLayer) {
                    fLayerGroup = self.arrLayers[itemUid].vectorLayer;
                    fLayers = fLayerGroup.getLayers();

                    if (elementContent.data && elementContent.data.properties) {
                      if (elementContent.data.properties.popup) {
                        fVectorLayer.popup = elementContent.data.properties.popup;
                      }
                      if (elementContent.data.properties.tooltip) {
                        fVectorLayer.tooltip = elementContent.data.properties.tooltip;
                      }
                      if (elementContent.data.properties.label) {
                        fVectorLayer.label = elementContent.data.properties.label;
                      }
                      if (elementContent.data.properties.zoom_onclick) {
                        fVectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                      }
                    }

                    fLayers.push(fVectorLayer);
                    fLayerGroup.setLayers(fLayers);
                  } else {
                    if (elementContent.data && elementContent.data.properties) {
                      if (elementContent.data.properties.popup) {
                        fVectorLayer.popup = elementContent.data.properties.popup;
                      }
                      if (elementContent.data.properties.tooltip) {
                        fVectorLayer.tooltip = elementContent.data.properties.tooltip;
                      }
                      if (elementContent.data.properties.label) {
                        fVectorLayer.label = elementContent.data.properties.label;
                      }
                      if (elementContent.data.properties.zoom_onclick) {
                        fVectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                      }
                    }
                    fLayerGroup = new ol.layer.Group({
                      layers: [fVectorLayer]
                    });
                    self.arrLayers[itemUid].vectorLayer = fLayerGroup;
                    self.mapController.map.addLayer(fLayerGroup);
                  }
                }
              });
            } else {
              if (element.split_geojson) {
                for (var _i2 = 0; _i2 < features.length; _i2++) {
                  vectorSource = new ol.source.Vector({
                    projection: 'EPSG:3857',
                    format: new ol.format.GeoJSON()
                  });
                  vectorSource.addFeature(features[_i2]);
                  vectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(vectorSource, vectorStyle);
                  for (var _j2 = 0; _j2 < element.geojson_attributes.split(',').length; _j2++) {
                    vectorLayer.set(element.geojson_attributes.split(',')[_j2], features[_i2].get(element.geojson_attributes.split(',')[_j2]));
                  }
                  layers.push(vectorLayer);
                  if (elementContent.data.properties.popup) {
                    vectorLayer.popup = elementContent.data.properties.popup;
                  }
                  if (elementContent.data.properties.tooltip) {
                    vectorLayer.tooltip = elementContent.data.properties.tooltip;
                  }
                  if (elementContent.data.properties.label) {
                    vectorLayer.label = elementContent.data.properties.label;
                  }
                  if (elementContent.data.properties.zoom_onclick) {
                    vectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                  }
                }
              } else {
                vectorSource = new ol.source.Vector({
                  features: features,
                  projection: 'EPSG:3857',
                  format: new ol.format.GeoJSON()
                });
                vectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(vectorSource, vectorStyle);

                if (elementContent.data && elementContent.data.properties) {
                  if (elementContent.data.properties.popup) {
                    vectorLayer.popup = elementContent.data.properties.popup;
                  }
                  if (elementContent.data.properties.tooltip) {
                    vectorLayer.tooltip = elementContent.data.properties.tooltip;
                  }
                  if (elementContent.data.properties.label) {
                    vectorLayer.label = elementContent.data.properties.label;
                  }
                  if (elementContent.data.properties.zoom_onclick) {
                    vectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                  }
                }

                layers.push(vectorLayer);
              }
            }
          } else {
            console.warn('Format type ' + elementContent.format + ' in ol.format not found.');
          }
        }
      }

      layerGroup = new ol.layer.Group({
        layers: layers
      });

      this.arrLayers[itemUid].vectorLayer = layerGroup;
      this.mapController.map.addLayer(layerGroup);
      if (layerGroup.getLayers().getArray()[0] && layerGroup.getLayers().getArray()[0].popup && layerGroup.getLayers().getArray()[0].popup.showPopupOnActive) {
        c4g.maps.popup.$content.html('');
        c4g.maps.popup.$popup.addClass(c4g.maps.constant.css.ACTIVE).addClass(c4g.maps.constant.css.LOADING);
        c4g.maps.popup.spinner.show();
        var popupInfos = layerGroup.getLayers().getArray()[0].popup;
        var layer = layerGroup.getLayers().getArray()[0];
        var coord = features['0'].getGeometry().getCoordinates();
        if (popupInfos.async === false) {
          var objPopup = {};
          objPopup.popup = popupInfos;
          objPopup.feature = features['0'];
          objPopup.layer = layer;
          // Call the popup hook for plugin specific popup content
          if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
            __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
          }
          self.proxy.setPopup(objPopup);
        } else {
          jQuery.ajax({
            dataType: "json",
            url: self.api_infowindow_url + '/' + popupInfos.content,
            done: function done(data) {
              var popupInfo = {
                async: popupInfos.async,
                content: data.content,
                popup: popupInfos.popup,
                routing_link: popupInfos.routing_link
              };

              var objPopup = {};
              objPopup.popup = popupInfo;
              objPopup.feature = features['0'];
              objPopup.layer = layer;

              // Call the popup hook for plugin specific popup content
              if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
              }

              self.proxy.setPopup(objPopup);
            }
          });
        }
      }

      //hooks
      // }
    } // end of "drawLayer()"

  }, {
    key: "drawLayerInitial",
    value: function drawLayerInitial() {
      var layerId, layer;

      for (layerId in this.proxy.activeLayerIds) {
        if (this.proxy.activeLayerIds.hasOwnProperty(layerId)) {
          this.showLayer(layerId);
        }
      }
      for (var l in this.arrLayers) {
        if (this.arrLayers.hasOwnProperty(l)) {
          layer = this.arrLayers[l];
          if (layer.hide === "1") {
            this.hideLayer(layer.id);
          }
        }
      }
    } // end of "drawLayerInitial()"

  }]);

  return C4gLayerController;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-layer.js":
/*!******************************************!*\
  !*** ./Resources/public/js/c4g-layer.js ***!
  \******************************************/
/*! exports provided: C4gLayer */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gLayer", function() { return C4gLayer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gLayer = function C4gLayer(layerArr) {
  _classCallCheck(this, C4gLayer);

  this.id = layerArr['id'];
  this.pid = layerArr['pid'];
  this.async_content = layerArr['async_content'];
  this.content = layerArr['content'];
  this.cssClass = layerArr['cssClass'];
  this.hide = layerArr['hide'];
  this.hide_child = layerArr['hide_child'];
  this.type = layerArr['type'];
  this.cluster = layerArr['cluster'];
  this.zoom = layerArr['zoom'];
  this.zoom_locations = layerArr['zoom_locations'];
  this.display = layerArr['display'];
  this.hasChilds = layerArr['hasChilds'];
  this.childs = layerArr['childs'];
  this.childsCount = layerArr['childsCount'];
  this.renderSpecial = layerArr['renderSpecial'];
  this.editable = true;
  this.type = layerArr['type'];
  this.locstyle = layerArr['locstyle'];
  this.name = layerArr['name'];
  this.tabId = layerArr['tabId'];
  this.split_geojson = layerArr['split_geojson'];
  this.geojson_attributes = layerArr['geojson_attributes'];
  this.geojson_zoom = layerArr['geojson_zoom'];
  this.layername = layerArr['layername'];
  this.visibleChilds = false;
  this.vectorLayer = null;
  this.hideWhenInTab = layerArr['hide_when_in_tab'];

  if (layerArr.projectId) {
    this.projectId = layerArr.projectId;
  }
  if (layerArr.popup) {
    this.popup = layerArr.popup;
  }
  this.awesomeicon = layerArr['awesomeicon'];
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant.js":
/*!**************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant.js ***!
  \**************************************************/
/*! exports provided: cssConstants */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssConstants", function() { return cssConstants; });
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.constant = this.c4g.maps.constant || {};

(function ($, c4g) {
  'use strict';

  /**
   * CSS constants
   */

  c4g.maps.constant.css = $.extend(c4g.maps.constant.css, {

    OPEN: 'c4g-open',
    CLOSE: 'c4g-close',
    CLOSEABLE: 'c4g-closeable',
    ENABLED: 'c4g-enabled',
    DISABLED: 'c4g-disabled',
    HIDE: 'c4g-hide',
    ICON: 'c4g-icon',
    CONTROL: 'c4g-control',
    COPY: 'c4g-copy',
    REFRESH: 'c4g-refresh',
    ACTIVE: 'c4g-active',
    INACTIVE: 'c4g-inactive',
    LOADING: 'c4g-loading',
    ANIMATION_SPIN: 'c4g-animation-spin',
    LARGE: 'c4g-large',
    SMALL: 'c4g-small',
    HORIZONTAL: 'c4g-horizontal',
    VERTICAL: 'c4g-vertical',

    ATTRIBUTION_LOGO: 'c4g-attribution-logo',
    CONTROL_CONTAINER_TL: 'c4g-control-container-top-left',
    CONTROL_CONTAINER_TR: 'c4g-control-container-top-right',
    CONTROL_CONTAINER_BL: 'c4g-control-container-bottom-left',
    CONTROL_CONTAINER_BL_SUB: 'c4g-control-container-bottom-left-sub',
    CONTROL_CONTAINER_BR: 'c4g-control-container-bottom-right',
    EDITOR_DRAW_CONTENT_POINT: 'c4g-draw-content-point',
    EDITOR_DRAW_CONTENT_FREEHAND: 'c4g-draw-content-freehand',
    EDITOR_DRAW_CONTENT_LINESTRING: 'c4g-draw-content-line',
    EDITOR_DRAW_CONTENT_POLYGON: 'c4g-draw-content-polygon',
    EDITOR_DRAW_CONTENT_CIRCLE: 'c4g-draw-content-circle',
    EDITOR_DRAW_CONTENT_PROJECT: 'c4g-draw-content-project',
    EDITOR_DRAW_TRIGGER: 'c4g-draw-trigger',
    EDITOR_CONTENT_SELECT: 'c4g-content-select',
    EDITOR_DRAW_OPTIONS: 'c4g-editor-draw-options',
    EDITOR_FEATURE_APPLY: 'c4g-editor-feature-apply',
    EDITOR_FEATURE_DELETE: 'c4g-editor-feature-delete',
    EDITOR_FEATURE_MODIFY: 'c4g-editor-feature-modify',
    EDITOR_VIEW_TRIGGER_SELECT: 'c4g-editor-view-trigger-select',
    EDITOR_VIEW_TRIGGER_DRAW_POINT: 'c4g-editor-view-trigger-draw-point',
    EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-editor-view-trigger-draw-freehand',
    EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-editor-view-trigger-draw-line',
    EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-editor-view-trigger-draw-polygon',
    EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-editor-view-trigger-draw-circle',
    GEOSEARCH: 'c4g-geosearch',
    GEOSEARCH_WRAPPER: 'c4g-geosearch-wrapper',
    GEOSEARCH_TRIGGER: 'c4g-geosearch-trigger',
    GEOSEARCH_START: 'c4g-geosearch-start',
    GRATICULE: 'c4g-graticule',
    MEASURETOOLS_VIEW_TRIGGER_SELECT: 'c4g-measuretools-view-trigger-select',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-measuretools-view-trigger-draw-line',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-measuretools-view-trigger-draw-polygon',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-measuretools-view-trigger-draw-circle',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-measuretools-view-trigger-draw-freehand',
    PRINT: 'c4g-print',
    INFOPAGE_VIEW_TRIGGER: 'c4g-infopage-view-trigger',
    INFOPAGE: 'c4g-infopage',
    ADDITIONALPANEL_VIEW_TRIGGER: 'c4g-additionalpanel-view-trigger',
    ADDITIONALPANEL: 'c4g-additionalpanel',
    ACCOUNT_VIEW_TRIGGER: 'c4g-account-view-trigger',
    ACCOUNT: 'c4g-account',
    OVERVIEWMAP: 'c4g-overviewmap',
    OVERVIEWMAP_WRAPPER: 'c4g-overviewmap-wrapper',
    GEOBOOKMARKS: 'c4g-geobookmarks',
    PERMALINK: 'c4g-permalink',
    PERMALINK_POPUP: 'c4g-permalink-popup',
    POPUP_CLOSE: 'c4g-popup-close',
    POPUP_ROUTE_WRAPPER: 'c4g-popup-route-wrapper',
    POPUP_ROUTE_FROM: 'c4g-popup-route-from',
    POPUP_ROUTE_TO: 'c4g-popup-route-to',
    PORTSIDE: 'c4g-portside',
    PORTSIDE_CONTAINER: 'c4g-portside-container',
    PORTSIDE_CONTROL: 'c4g-portside-control',
    PORTSIDE_WRAPPER: 'c4g-portside-wrapper',
    PORTSIDE_TITLEBAR: 'c4g-portside-titlebar',
    PORTSIDE_TOP_TOOLBAR: 'c4g-portside-top-toolbar',
    PORTSIDE_CONTENT_CONTAINER: 'c4g-portside-content-container',
    PORTSIDE_BOTTOM_TOOLBAR: 'c4g-portside-bottom-toolbar',
    PORTSIDE_STATUSBAR: 'c4g-portside-statusbar',
    PORTSIDE_VIEWTRIGGERBAR: 'c4g-portside-viewtriggerbar',
    PORTSIDE_HEADLINE: 'c4g-portside-headline',
    PORTSIDE_BUTTONBAR: 'c4g-portside-buttonbar',
    PORTSIDE_BUTTON: 'c4g-portside-button',
    PORTSIDE_HIDE: 'c4g-portside-hide',
    PORTSIDE_CLOSE: 'c4g-portside-close',
    SPINNER: 'c4g-spinner',
    STARBOARD: 'c4g-starboard',
    STARBOARD_CONTAINER: 'c4g-starboard-container',
    STARBOARD_CONTROL: 'c4g-starboard-control',
    STARBOARD_WRAPPER: 'c4g-starboard-wrapper',
    STARBOARD_TITLEBAR: 'c4g-starboard-titlebar',
    STARBOARD_CONTENT_CONTAINER: 'c4g-starboard-content-container',
    STARBOARD_BOTTOM_TOOLBAR: 'c4g-starboard-bottom-toolbar',
    STARBOARD_STATUSBAR: 'c4g-starboard-statusbar',
    STARBOARD_VIEWTRIGGERBAR: 'c4g-starboard-viewtriggerbar',
    STARBOARD_HEADLINE: 'c4g-starboard-headline',
    STARBOARD_BUTTONBAR: 'c4g-starboard-buttonbar',
    STARBOARD_BUTTON: 'c4g-starboard-button',
    STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'c4g-starboard-view-trigger-baselayerswitcher',
    STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'c4g-starboard-view-trigger-layerswitcher',
    STARBOARD_CLOSE: 'c4g-starboard-close',
    STARBOARD_CONTENT_BASELAYERSWITCHER: 'c4g-content-baselayerswitcher',
    STARBOARD_BASELAYERTREE: 'c4g-baselayertree',
    STARBOARD_LAYERTREE: 'c4g-layertree',
    STARBOARD_CONTENT_LAYERSWITCHER: 'c4g-content-layerswitcher',
    TOOLTIP_POPUP: 'c4g-tooltip-popup',
    ZOOM_LEVEL: 'c4g-zoom-level',

    ROUTER_INPUT_WRAPPER: 'c4g-router-input-wrapper',
    ROUTER_PROFILE_WRAPPER: 'c4g-router-profile-wrapper',
    ROUTER_INPUT_FROM: 'c4g-router-input-from',
    ROUTER_INPUT_TO: 'c4g-router-input-to',
    ROUTER_INPUT_CLEAR: 'c4g-router-input-clear',
    ROUTER_BUTTONBAR: 'c4g-router-buttonbar',
    ROUTER_ATTRIBUTION_WRAPPER: 'c4g-router-attribution-wrapper',
    ROUTER_INSTRUCTIONS_WRAPPER: 'c4g-router-instructions-wrapper',
    ROUTER_INSTRUCTIONS_HEADER: 'c4g-router-instructions-header',

    ROUTER_SWITCH: 'c4g-router-switch',
    ROUTER_OVER: 'c4g-router-over',
    ROUTER_PRINT: 'c4g-router-print',

    ROUTER_PROFILE_CAR: 'c4g-router-profile-car',
    ROUTER_PROFILE_HGV: 'c4g-router-profile-hgv',
    ROUTER_PROFILE_BIKE: 'c4g-router-profile-bike',
    ROUTER_PROFILE_FOOT: 'c4g-router-profile-foot',
    ROUTER_PROFILE_WHEELCHAIR: 'c4g-router-profile-wheelchair',

    ROUTER_INSTRUCTIONS_TABLE: 'c4g-router-instruction-table',
    ROUTER_INSTRUCTIONS_ITEM: 'c4g-router-instruction-item',
    ROUTER_INSTRUCTIONS_ITEM_ODD: 'c4g-router-instruction-item--odd',
    ROUTER_INSTRUCTIONS_ITEM_EVEN: 'c4g-router-instruction-item--even',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION: 'c4g-router-instruction-item_direction',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON: 'c4g-router-instruction-item_direction-icon',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT: 'c4g-router-instruction-item_text',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE: 'c4g-router-instruction-item_distance',

    OL_CONTROL: 'ol-control',
    OL_UNSELECTABLE: 'ol-unselectable',

    OL_OVERLAYCONTAINER: 'ol-overlaycontainer',
    OL_OVERLAYCONTAINER_SE: 'ol-overlaycontainer-stopevent',
    OL_VIEWPORT: 'ol-viewport',
    OL_ZOOM: 'ol-zoom',
    OL_ZOOM_IN: 'ol-zoom-in',
    OL_ZOOM_EXT: 'ol-zoom-extent',
    OL_ZOOM_HOME: 'ol-zoom-home',
    OL_ZOOM_POS: 'ol-zoom-position',
    OL_ZOOM_WITH_EXT: 'ol-zoom-with-extent',
    OL_ZOOM_WITH_HOME: 'ol-zoom-with-home',
    OL_ZOOM_WITH_POS: 'ol-zoom-with-position',
    OL_ZOOM_SLIDER: 'ol-zoom-slider',
    OL_ZOOM_WITH_SLIDER: 'ol-zoom-with-slider',

    NONE: '' // last line
  }); // end of "css constants" ---
})(jQuery, this.c4g);

var cssConstants = this.c4g.maps.constant.css;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-zoomlevel.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-zoomlevel.js ***!
  \***********************************************************/
/*! exports provided: Zoomlevel */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zoomlevel", function() { return Zoomlevel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};



(function ($, c4g) {
  'use strict';

  /**
   * Displays the current zoomlevel on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */

  c4g.maps.control.Zoomlevel = function (options) {

    var self, element, updateZoomlevel;

    self = this;

    if (!options || !options.mapView) {
      console.warn('Zoomlevel control needs to know the map.');
      return false;
    }

    // default options
    options = $.extend({
      className: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);

    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = options.mapView.getZoom();

    updateZoomlevel = function updateZoomlevel() {
      element.innerHTML = parseInt(options.mapView.getZoom());
    };

    options.mapView.on('change:resolution', updateZoomlevel);
    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });
  };
  ol.inherits(c4g.maps.control.Zoomlevel, ol.control.Control);

  /*
   * Add methods
   */
  c4g.maps.control.Zoomlevel.prototype = $.extend(c4g.maps.control.Zoomlevel.prototype, {

    // nothing to add here

  }); // end of "add methods" ---
})(jQuery, this.c4g);

var Zoomlevel = this.c4g.maps.control.Zoomlevel;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-utils.js":
/*!***********************************************!*\
  !*** ./Resources/public/js/c4g-maps-utils.js ***!
  \***********************************************/
/*! exports provided: utils */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_control_zoomlevel__ = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "./Resources/public/js/c4g-maps-control-zoomlevel.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};




(function ($, c4g) {
  'use strict';

  /**
   * c4g-Maps utility functions
   */

  c4g.maps.utils = $.extend(c4g.maps.utils, {
    /**
     *  Converts the first letter of a given string to uppercase, leaving the remaining string untouched.
     *
     *  @param    {string}    the string to capitalize
     *
     *  @return   {string}    the capitalized string
     */
    capitalizeFirstLetter: function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    /**
     * Generate an unique id.
     *
     * The id is 9 characters long and prefixed with an underscore.
     *
     * @return  {string}  The generated id.
     */
    getUniqueId: function getUniqueId() {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    },

    /**
     * Encode input strings for GeoJSON-Objects properly,
     * so they will not break the Code.
     * Transforms:
     *   \ -> \\;
     *   " -> '';
     *   Ä -> &Auml;
     *   ä -> &auml;
     *   Ö -> &Ouml;
     *   ö -> &ouml;
     *   Ü -> &Uuml;
     *   ü -> &uuml;
     *
     * @param   {string}  input  [description]
     *
     * @return  {string}         [description]
     */
    encodeGeoJsonProperty: function encodeGeoJsonProperty(input) {
      var output;

      if (!input) {
        return '';
      }

      output = input.replace(/\\/g, '\\\\').replace(/\"/g, '\'\'').replace(/Ä/g, '&Auml;').replace(/ä/g, '&auml;').replace(/Ö/g, '&Ouml;').replace(/ö/g, '&ouml;').replace(/Ü/g, '&Uuml;').replace(/ü/g, '&uuml;');

      return output;
    }, // end of encodeGeoJsonProperty()

    /**
     * Decode input strings for GeoJSON-Objects properly,
     * so they will be displayed correctly.
     * Transforms:
     *   \\     -> \;
     *   ''     -> ";
     *   &Auml; -> Ä
     *   &auml; -> ä
     *   &Ouml; -> Ö
     *   &ouml; -> ö
     *   &Uuml; -> Ü
     *   &uuml; -> ü
     *
     * @param   {string}  input  [description]
     *
     * @return  {string}         [description]
     */
    decodeGeoJsonProperty: function decodeGeoJsonProperty(input) {
      var output;

      if (!input) {
        return '';
      }
      if (typeof input !== "string") {
        input = input + "";
      }

      output = input.replace(/\\\\/g, '\\').replace(/\'\'/g, '\"').replace(/&Auml;/g, 'Ä').replace(/&auml;/g, 'ä').replace(/&Ouml;/g, 'Ö').replace(/&ouml;/g, 'ö').replace(/&Uuml;/g, 'Ü;').replace(/&uuml;/g, 'ü');

      return output;
    }, // end of decodeGeoJsonProperty()

    /**
     * Create or replace an URL-parameter.
     *
     * If `opt_getKey` is `false` or `undefined` the given parameter, `param`,
     * will be applied as "hash-parameter".
     * e.g.:
     *   https://myurl.de:port/path/to/maps#param
     * Note, that already existing "hash-parameters" will be overriden,
     * whereas existing "GET-parameters" stay untouched.
     *
     * If `opt_getKey` is set, it will be applied as "GET-parameter".
     * e.g.:
     *   https://myurl.de:port/path/to/maps?opt_getKey=param
     * If the key described by `opt_getKey` is already existing, its value will be overriden,
     * otherwise the key-value-pair will be appended appropriatly.
     * Already existing "hash-parameters" will stay untouched.
     *
     * If `opt_execute` is `false` or `undefined`, the function will return the new link as `string`,
     * otherwise the "href/location" will be changed directly in the browser, which can cause a pagereload.
     *
     * @param  {string}                    param        [description]
     * @param  {undefined|boolean|string}  opt_getKey   Default: `undefined`
     * @param  {undefined|boolean}         opt_execute  Default: `undefined`
     */
    setUrlParam: function setUrlParam(param, opt_getKey, opt_execute) {
      var link, searchParam, paramReplaced, i;

      if ((typeof param === "undefined" ? "undefined" : _typeof(param)) === undefined) {
        return false;
      }

      link = location.origin + location.pathname;

      if (!opt_getKey) {
        // use hash-parameter
        if (opt_execute) {
          location.hash = param;
          return true;
        }
        link += location.search + '#' + param;
      } else {
        // use GET-parameter
        if (location.search) {
          // there are already search-parameters
          paramReplaced = false;
          opt_getKey = opt_getKey.toLowerCase();
          // replace parameter if already existent
          searchParam = location.search.replace(/([^=\?\&]+)=([^&]+)/gi, function (match, key, value, offset, originString) {
            if (key === opt_getKey) {
              paramReplaced = true;
              return key + '=' + param;
            }
            return match;
          });
          // otherwise append as new parameter
          if (!paramReplaced) {
            searchParam += '&' + opt_getKey + '=' + param;
          }
        } else {
          // this will be the only search-parameter in the URL
          searchParam = '?' + opt_getKey + '=' + param;
        }
        if (opt_execute) {
          location.search = searchParam;
          return true;
        }
        link += searchParam + location.hash;
      }

      return link;
    }, // end of setUrlParam()

    /**
     * Get search or hash URL-parameter as string.
     *
     * If `opt_getKey` is `false` or `undefined`, the hash-parameter of the URL is returned,
     * otherwise it will search for a GET-parameter and return its value.
     *
     * If a parameter is not existent, or empty, an empty string will be returned.
     *
     * @param   {undefined|string}  opt_getKey  Default: `undefined`
     *
     * @return  {string}                        The found parameter.
     */
    getUrlParam: function getUrlParam(opt_getKey) {
      var param, regEx;

      if (!opt_getKey) {
        param = location.hash.substring(1);
      } else {
        if (!location.search) {
          param = '';
        } else {
          regEx = new RegExp('[\?\&]' + opt_getKey + '=([^&]+)', 'i');
          param = regEx.exec(location.search);
          param = param ? param[1] : '';
        }
      }

      return param;
    }, // end of getUrlParam()

    /**
     * Delta-encode an array of numbers.
     * Note that the array will be sorted (lowest to highest)
     * before encoding.
     *
     * So after the encoding the first value of the output contains
     * the smallest number of the set and each following number just
     * represents the offset to its previous neighbor.
     *
     * This is mostly efficient for high numbers, that are "close to each other".
     *
     * Example:
     *   [1337, 11, 101, 123, 96, 69, 42, 42]
     *   will be sorted
     *   [11, 42, 42, 69, 96, 101, 123, 1337]
     *   and encoded to
     *   [11, 31, 0, 27, 27, 5, 22, 1214]
     *
     * @param   {array<numbers>}  arrInput  [description]
     *
     * @return  {array<numbers>}            [description]
     */
    deltaEncode: function deltaEncode(arrInput) {
      var arrOutput, i;

      if (!arrInput) {
        return [];
      }
      if (arrInput.length === 1) {
        return arrInput;
      }

      arrInput.sort(function (a, b) {
        return a - b;
      });

      arrOutput = [];
      arrOutput[0] = arrInput[0];
      for (i = 1; i < arrInput.length; i += 1) {
        arrOutput[i] = arrInput[i] - arrInput[i - 1];
      }

      return arrOutput;
    }, // end of deltaEncode()

    /**
     * Decode a delta-encoded array.
     * See `deltaEncode` function for more detailed information.
     *
     * @param   {array<numbers>}  arrInput  [description]
     *
     * @return  {array<numbers>}            [description]
     */
    deltaDecode: function deltaDecode(arrInput) {
      var arrOutput, i;

      if (!arrInput) {
        return [];
      }

      arrOutput = [];
      arrOutput[0] = parseInt(arrInput[0], 10);
      if (isNaN(arrInput[0])) {
        return [];
      }
      for (i = 1; i < arrInput.length; i += 1) {
        arrOutput[i] = parseInt(arrInput[i], 10) + arrOutput[i - 1];
        if (isNaN(arrOutput[i])) {
          return [];
        }
      }

      return arrOutput;
    }, // end of deltaDecode()

    /**
     * Check and call functions in `arrHookFunctions` with given `parameters`.
     *
     * @param   {array<function>}   arrHookFunctions  [description]
     * @param   {mixed}             parameters        [description]
     */
    callHookFunctions: function callHookFunctions(arrHookFunctions, parameters) {
      var j;

      if (arrHookFunctions && arrHookFunctions.length > 0) {
        for (j = 0; j < arrHookFunctions.length; j += 1) {
          if (typeof arrHookFunctions[j] === 'function') {
            arrHookFunctions[j](parameters);
          }
        }
      }
    }, // end of "callHookFunctions()"

    /**
     * Convert a hex-formated color value into rgba()-format.
     *
     * @param   {string|number}  hex          [description]
     * @param   {string|number}  opt_opacity  [description]
     *
     * @return  {string}                      [description]
     */
    getRgbaFromHexAndOpacity: function getRgbaFromHexAndOpacity(hex, opt_opacity, opt_array) {

      var bigint, r, g, b, a;

      bigint = parseInt(hex, 16);
      if (opt_opacity && opt_opacity.value) {
        opt_opacity.value = parseInt(opt_opacity.value);
      }

      if (opt_opacity && typeof opt_opacity !== 'number') {
        if ((typeof opt_opacity === "undefined" ? "undefined" : _typeof(opt_opacity)) === 'object' && opt_opacity.value) {
          opt_opacity = opt_opacity.value;
        } else {
          opt_opacity = 100;
        }
      }

      r = bigint >> 16 & 255;
      g = bigint >> 8 & 255;
      b = bigint & 255;
      a = opt_opacity ? opt_opacity / 100 : 1;
      if (opt_array) {
        return [r, g, b, a];
      }

      return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    },

    /**
     * Reduce a defined style, to a simpler version.
     *
     * The reduced style is the first style of the defined styleset,
     * with a 1px thick stroke and a circle with a 5px radius.
     *
     * This can be used to display additional geometries with a main-geometry,
     * without having to define a whole new style.
     *
     * @param   {number|string}           styleId  [description]
     *
     * @return  {array<ol.style.Style>}            [description]
     */
    reduceStyle: function reduceStyle(styleId) {
      var style, reducedStyle, fillStyle, strokeStyle;

      if (!c4g.maps.locationStyles[styleId] || !c4g.maps.locationStyles[styleId].style) {
        return [];
      }

      style = c4g.maps.locationStyles[styleId].style()[0];

      fillStyle = style.getFill();
      strokeStyle = style.getStroke();
      strokeStyle.setWidth(1);

      reducedStyle = new ol.style.Style({
        image: new ol.style.Circle({
          fill: fillStyle,
          stroke: strokeStyle,
          radius: 5
        }),
        // text: style.getText(),
        stroke: strokeStyle,
        fill: fillStyle
      });

      return [reducedStyle];
    }, // end of "reduceStyle"

    /**
     * Measure the dimensions of the given geometry.
     *
     * If the geometry is a `LineString` the function will measure its length,
     * is it a `Polygon` it will measure the acreage,
     * otherwise it will return `0`.
     *
     * If the optional `opt_forceLineMeasure` parameter is `true`
     * and the geometry is a `Polygon` it will measure its perimeter instead
     * of its acreage.
     *
     * @param   {ol.geom.LineString|ol.geom.Polygon}   geometry              [description]
     * @param   {undefined|boolean}                    opt_forceLineMeasure  [description]
     *
     * @return  {array<string>|number}                                       [description]
     */
    measureGeometry: function measureGeometry(geometry, opt_forceLineMeasure, opt_forceSurfaceMeasure) {
      var value, sphere, coordinates, coord1, coord2, result, i;

      if (!geometry) {
        return false;
      }

      //sphere = new ol.Sphere(6378137);
      result = {};

      if (geometry instanceof ol.geom.LineString || geometry instanceof ol.geom.Polygon && opt_forceLineMeasure) {

        coordinates = geometry.getCoordinates();
        if (geometry instanceof ol.geom.Polygon) {
          coordinates = coordinates[0];
        }
        value = 0;
        for (i = 0; i < coordinates.length - 1; i += 1) {
          coord1 = ol.proj.transform(coordinates[i], 'EPSG:3857', 'EPSG:4326');
          coord2 = ol.proj.transform(coordinates[i + 1], 'EPSG:3857', 'EPSG:4326');
          value += ol.sphere.getDistance(coord1, coord2, 6378137);
        }
        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 1000) {
          result.htmlValue = (Math.round(value / 1000 * 100) / 100).toFixed(2) + ' ' + 'km';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm';
        }
      } else if (geometry instanceof ol.geom.Polygon) {
        //geometry = /** @type {ol.geom.Polygon} */(geometry.clone().transform('EPSG:3857', 'EPSG:4326'));
        //coordinates = geometry.getLinearRing(0).getCoordinates();
        value = Math.abs(ol.sphere.getArea(geometry));
        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 10000) {
          result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
        }
      } else if (geometry instanceof ol.geom.Circle && opt_forceSurfaceMeasure) {
        var center = geometry.getCenter();
        var radius = geometry.getRadius();
        var edgeCoordinate = [center[0] + radius, center[1]];
        //var wgs84Sphere = new ol.Sphere(6378137);
        var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

        value = Math.PI * Math.sqrt(value);

        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 10000) {
          result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
        }
      } else if (geometry instanceof ol.geom.Circle) {
        var center = geometry.getCenter();
        var radius = geometry.getRadius();
        var edgeCoordinate = [center[0] + radius, center[1]];
        //var wgs84Sphere = new ol.Sphere(6378137);
        var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (result.rawValue > 10000) {
          result.htmlValue = (Math.round(value * 100 / 100) / 1000).toFixed(2) + ' ' + 'km';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm';
        }
      } else {
        result = 0;
      }

      return result;
    },

    /**
     * Calculate extent for an array of geometries.
     *
     * @param   {Array.<ol.geom.simpleGeometry>}  arrGeometries  [description]
     *
     * @return  {ol.Extent}                                      [description]
     */
    getExtentForGeometries: function getExtentForGeometries(arrGeometries) {
      var extentSource;

      if (!arrGeometries) {
        console.warn('Geometries missing for extent calculation');
        return false;
      }

      extentSource = new ol.source.Vector();
      extentSource.addFeatures(arrGeometries);

      return extentSource.getExtent() || ol.Extent([0, 0, 0, 0]);
    }, // end of getExtentForGeometries()

    /**
     * Fit view of `map` to a given array of `extents`.
     * Animated if `opt_animationDuration` is an integer > 0.
     *
     * @param   {object}     extents                 [description]
     * @param   {ol.Map}     map                    [description]
     * @param   {integer}    opt_animationDuration  [description]
     *
     * @return  {boolean}                           [description]
     */
    fitToExtents: function fitToExtents(extents, map, opt_padding, opt_animationDuration) {
      var view, padding, extent, key;

      if (!extents || !map) {
        console.warn('Missing extent or map for fitExtent');
        return false;
      }
      //extent = ol.extent.createEmpty();

      for (key in extents) {
        if (extents.hasOwnProperty(key)) {
          if (typeof extent === "undefined") {
            extent = extents[key];
          } else {
            ol.extent.extend(extent, extents[key]);
          }
        }
      }

      this.fitToExtent(extent, map, opt_padding, 5, 0, 0, 2);
    }, // end of fitToExtents

    /**
     * Fit view of `map` to a given `extent`.
     * Animated if `opt_animationDuration` is an integer > 0.
     *
     * @param   {ol.Extent}  extent                 [description]
     * @param   {ol.Map}     map                    [description]
     * @param   {array}      opt_padding            [description]
     * @param   {integer}    opt_animationDuration  [description]
     * @param   {integer}    opt_minZoom            [description]
     * @param   {integer}    opt_maxZoom            [description]
     * @param   {integer}    opt_minResolution      [description]
     *
     * @return  {boolean}                           [description]
     */
    fitToExtent: function fitToExtent(extent, map, opt_padding, opt_animationDuration, opt_minZoom, opt_maxZoom, opt_minResolution) {
      var view, padding, fitOptions;

      if (!extent || !map) {
        console.warn('Missing extent or map for fitExtent');
        return false;
      }

      view = map.getView();

      fitOptions = {
        'padding': opt_padding || [25, 25, 25, 25]
      };

      if (opt_minResolution && opt_minResolution > 0) {
        fitOptions.minResolution = opt_minResolution;
      }

      if (opt_minZoom && opt_minZoom >= 0) {
        fitOptions.minZoom = opt_minZoom;
      }

      if (opt_maxZoom && opt_maxZoom >= 0) {
        fitOptions.maxZoom = opt_maxZoom;
      }

      // animate the "fitting" when a duration is given and its greater than 0
      if (opt_animationDuration && opt_animationDuration > 0) {
        view.animate({
          start: +new Date(),
          duration: opt_animationDuration,
          resolution: view.getResolution(),
          center: [0, 0]
          //rotation: Math.PI
        });
        // map.beforeRender(
        //     ol.animation.pan({
        //       start: +new Date(),
        //       duration: opt_animationDuration,
        //       source: view.getCenter()
        //     }),
        //     ol.animation.zoom({
        //       start: +new Date(),
        //       duration: opt_animationDuration,
        //       resolution: view.getResolution()
        //     })
        // );
      }

      try {
        view.fit(extent, map.getSize(), { padding: [25, 25, 25, 25] });
        //view.fit(extent, map.getSize());
        //view.setZoom(view.getZoom()-1);
        return true;
      } catch (e) {
        return false;
      }
    }, // end of fitToExtent()

    /**
     * Convenience function to run all placeholder functions at once.
     *
     * @param   {string}                      strInput   [description]
     * @param   {ol.Feature}                  feature    [description]
     * @param   {ol.layer.Layer | undefined}  opt_layer  [description]
     *
     * @return  {string}                                 [description]
     */
    replaceAllPlaceholders: function replaceAllPlaceholders(strInput, feature, opt_layer) {
      var strOutput;

      // only check the first two parameters as they will be used by all placeholder-functions
      // -> for performance
      if (!strInput || !feature) {
        return strInput;
      }

      strOutput = this.replaceFunctionPlaceholders(strInput, feature, opt_layer);
      strOutput = this.replaceEditorVarsPlaceholders(strOutput, feature);
      strOutput = this.replaceAttributePlaceholders(strOutput, feature);

      return strOutput;
    }, // end of replaceAllPlaceholders()

    /**
     * Replace every occurance of `${FNfunctionName}`, in `strInput`,
     * with the result of `window.functionName(feature, style)`, if it exist.
     * Otherwise the placeholder will be simply removed (/replaced with '').
     * Style will be taken either from the feature, or the layer.
     *
     * @param   {string}          strInput  [description]
     * @param   {ol.Feature}      feature   [description]
     * @param   {ol.layer.Layer}  layer     [description]
     *
     * @return  {string}                    [description]
     */
    replaceFunctionPlaceholders: function replaceFunctionPlaceholders(strInput, feature, layer) {
      var strOutput;

      if (!strInput || !feature || !layer) {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{FN([^\}]*)\}/g, function (match, functionName, offset, originString) {
        var style;

        // check if function exists
        if (typeof window[functionName] === 'function') {
          // search style
          if (typeof feature.getStyle === 'function' && feature.getStyle() && typeof feature.getStyle() === 'function') {
            style = feature.getStyle();
          } else if (typeof layer.getStyle === 'function' && layer.getStyle()) {
            style = layer.getStyle();
          } else {
            return '';
          }
          return window[functionName](feature, style);
        }
        return '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceFunctionPlaceholders()

    /**
     * Replace placeholders, in `strInput`, for variables set by the geoEditor.
     * Valid placeholders are: ([key] represents the stringname of the variables key)
     *   `${EL[key]}`   =>  Label for the variable
     *   `${EVL[key]}`  =>  Label for the variable, if a value is set too
     *   `${EV[key]}`   =>  Value of the variable
     *   `${EVV[key]}`  =>  Same as `${EV[key]}`
     *
     * If no appropriate value can be found for a placeholder
     * it will simply be removed (/replaced with '').
     *
     * @param   {string}      strInput  [description]
     * @param   {ol.Feature}  feature   [description]
     *
     * @return  {string}                [description]
     */
    replaceEditorVarsPlaceholders: function replaceEditorVarsPlaceholders(strInput, feature) {
      var strOutput;

      if (!strInput || !feature || typeof feature.get !== 'function') {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{(EV?[LV])([^\}]*)\}/g, function (match, type, evKey, offset, originString) {
        var editorVars, i;

        // check if feature has editorVars
        if (feature.get('editorVars')) {
          editorVars = feature.get('editorVars');
          // search for editorVar with key == evKey
          for (i = 0; i < editorVars.length; i += 1) {
            if (editorVars[i].key === evKey) {
              // if type is 'EVL' display label only if a value is set too
              if (type === 'EL' || type === 'EVL' && editorVars[i].value) {
                return editorVars[i].label;
              } else {
                return editorVars[i].value;
              }
            }
          }
        }
        return '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceEditorVarsPlaceholders()

    /**
     * Replace every occurance of `${attr}`, in `strInput`,
     * with the result of `feature.get(attr)`, if it exist.
     * Otherwise the placeholder will be simply removed (/replaced with '').
     *
     * @param   {string}      strInput  [description]
     * @param   {ol.Feature}  feature   [description]
     *
     * @return  {string}                [description]
     */
    replaceAttributePlaceholders: function replaceAttributePlaceholders(strInput, feature) {
      var strOutput;

      if (!strInput || !feature || typeof feature.get !== 'function') {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{([^\}]*)\}/g, function (match, attr, offset, originString) {
        return feature.get(attr) || '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceAttributePlaceholders()

    objectToArray: function objectToArray(object) {
      if (object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === 'object') {
        object = Object.keys(object).map(function (key) {
          return object[key];
        });
      }
      return object;
    }, // end of objectToArray()

    getVectorLayer: function getVectorLayer(source, style) {
      var fnStyle;

      // make sure that the style is a function
      if (typeof style === 'function') {
        fnStyle = style;
      } else if (style !== undefined) {
        fnStyle = function fnStyle() {
          return style;
        };
      }

      return new ol.layer.Vector({
        source: source,
        style: fnStyle
      });
    },
    // end of "getVectorLayer()"

    /**
     * Extracts the subdomain from the current request host and returns it.
     * @returns {string | *}
     */
    getCurrentSubdomain: function getCurrentSubdomain() {
      return window.location.href;
    },


    redrawMapView: function redrawMapView(mapController) {
      var mapData = mapController.data;
      var controlContainerTopLeft = document.createElement('div');
      controlContainerTopLeft.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_TL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;
      mapController.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);

      var controlContainerBottomLeft = document.createElement('div');
      controlContainerBottomLeft.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_BL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;
      $(controlContainerTopLeft).after(controlContainerBottomLeft);
      mapController.leftSlideElements.push(controlContainerBottomLeft);

      var controlContainerBottomLeftSub = document.createElement('div');
      controlContainerBottomLeftSub.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_BL_SUB + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;

      if (mapData.scaleline) {
        mapController.map.removeControl(mapController.controls.scaleline);
        mapController.controls.scaleline = new ol.control.ScaleLine({
          mapView: mapController.map.getView(),
          target: controlContainerBottomLeft,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.scaleline);
      }

      $(controlContainerBottomLeft).append(controlContainerBottomLeftSub);

      if (mapData.zoomlevel) {
        mapController.map.removeControl(mapController.controls.zoomlevel);
        mapController.controls.zoomlevel = new __WEBPACK_IMPORTED_MODULE_1__c4g_maps_control_zoomlevel__["Zoomlevel"]({
          mapView: mapController.map.getView(),
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.zoomlevel);
      }

      if (mapData.mouseposition) {
        mapController.map.removeControl(mapController.controls.mouseposition);
        mapController.controls.mouseposition = new ol.control.MousePosition({
          projection: 'EPSG:4326',
          coordinateFormat: ol.coordinate.toStringHDMS,
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.mouseposition);
      }
    },
    getValue: function getValue(key) {
      return localStorage[key] || '';
    },
    storeValue: function storeValue(key, value) {
      localStorage[key] = value; // only strings
    }
  });
})(jQuery, this.c4g);

var utils = this.c4g.maps.utils;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbGF5ZXItY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1sYXllci5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyJdLCJuYW1lcyI6WyJjNGciLCJDNGdMYXllckNvbnRyb2xsZXIiLCJwcm94eSIsIm1hcENvbnRyb2xsZXIiLCJvcHRpb25zIiwiYXJyTGF5ZXJzIiwibGF5ZXJSZXF1ZXN0cyIsInNlbGYiLCJtYXBJZCIsImpRdWVyeSIsImFqYXgiLCJhcGlfbGF5ZXJfdXJsIiwiZGF0YVR5cGUiLCJkYXRhIiwianNvbnAiLCJkb25lIiwiYWRkTGF5ZXJzIiwibGF5ZXIiLCJmb3JlaWduTGF5ZXJzIiwibGF5ZXJzX2xvYWRlZCIsInV0aWxzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJob29rX2xheWVyX2xvYWRlZCIsImxheWVySWRzIiwiY2hlY2tMb2NhdGlvblN0eWxlcyIsImRyYXdMYXllckluaXRpYWwiLCJmYWlsIiwiY29uc29sZSIsIndhcm4iLCJhbHdheXMiLCJsYXllcnMiLCJpIiwiaiIsImsiLCJwIiwiaXNWaXNpYmxlIiwic3RvcmVkSXRlbSIsImxpbmtJdGVtcyIsInVpZCIsImN1cnJlbnRab29tIiwiZm5IYW5kbGVBbmRBcHBlbmRMYXllckNoaWxkcyIsImVuZGxlc3NMb29wSWQiLCJwYXJlbnRJZCIsInBhcmVudElkcyIsInBlcm1hbGlua2VkTGF5ZXJzIiwiY2hpbGQiLCJmbkhhbmRsZUNoaWxkcyIsImtleSIsInN0YXJib2FyZCIsImZuQWRkVG9Ib29rIiwib2JqSXRlbSIsInRvZ2dsZSIsImVudHJ5V3JhcHBlciIsImhhc0NoaWxkcyIsInZpc2libGVDaGlsZHMiLCJjaGlsZHMiLCJsYXllcm5hbWUiLCJsYXllcmlkIiwibGF5ZXJpY29uIiwibGVuZ3RoIiwibmFtZSIsInRhYklkIiwiYXdlc29tZWljb24iLCJtYXBzIiwic3RhcmJvYXJkVGFicyIsImNvbnRyb2xzIiwiaG9va19sYXllcnN3aXRjaGVyX2xvYWRlZCIsInB1c2giLCJjb250cm9sIiwic3RhcmJvYXJkcGx1Z2luIiwiQ3VzdG9tdGFiIiwiaWQiLCJDNGdMYXllciIsImNvbnRlbnQiLCJvYmplY3RUb0FycmF5IiwicGlkIiwiY3NzQ2xhc3MiLCJ0eXBlIiwiZWRpdGFibGUiLCJyZW5kZXJTcGVjaWFsIiwiZGlzcGxheSIsImZMYXllciIsImNvdW50IiwiY2hpbGRBcnIiLCJnZXRVbmlxdWVJZCIsImNoZWNrTGF5ZXJJc0FjdGl2ZUZvclpvb20iLCJpc0luYWN0aXZlIiwiaGlkZSIsInZpc2libGUiLCJhY3RpdmVMYXllcklkcyIsIml0ZW1VaWQiLCJmZWF0dXJlcyIsImZlYXR1cmVQcm9qZWN0aW9uIiwiZGF0YVByb2plY3Rpb24iLCJsYXllckdyb3VwIiwiY29udGVudERhdGEiLCJyZXF1ZXN0RGF0YSIsInJlcXVlc3RDb250ZW50RGF0YSIsInJlcXVlc3RWZWN0b3JTb3VyY2UiLCJ2ZWN0b3JMYXllciIsInZlY3RvclNvdXJjZSIsInZlY3RvclN0eWxlIiwiY2x1c3RlclNvdXJjZSIsInN0eWxlRm9yQ2x1c3RlciIsInJlZnJlc2hJbnRlcnZhbCIsInJlZnJlc2hBamF4VmFycyIsImZuQXR0YWNoRGF0YVRvTGF5ZXIiLCJwcm9wZXJ0aWVzIiwicG9wdXAiLCJ0b29sdGlwIiwidG9vbHRpcF9sZW5ndGgiLCJsYWJlbCIsInpvb21fb25jbGljayIsImNvbnRlbnRGZWF0dXJlcyIsImZlYXR1cmUiLCJyZXNvbHV0aW9uIiwic2l6ZSIsInN0eWxlIiwiZkZlYXR1cmVzIiwiaWNvbk9mZnNldCIsInJhZGl1cyIsImZpbGxjb2xvciIsImZvbnRjb2xvciIsImxvY2F0aW9uU3R5bGUiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsImZpdHRpbmdFeHRlbmRzIiwiZ2V0RXh0ZW50IiwidW5kZWZpbmVkIiwid2luZG93IiwiZ2V0IiwiZ2V0U3R5bGUiLCJnZXRJbWFnZSIsImdldFJhZGl1cyIsInBhcnNlSW50IiwiZ2V0QW5jaG9yIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5IiwidW5pdCIsInZhbHVlIiwiY2x1c3Rlcl9maWxsY29sb3IiLCJjbHVzdGVyX2ZvbnRjb2xvciIsIm9sIiwiU3R5bGUiLCJ0ZXh0IiwiVGV4dCIsImZvbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImZpbGwiLCJGaWxsIiwiY29sb3IiLCJ0b1N0cmluZyIsInVybCIsInBhcmFtcyIsImRlY29kZVVSSUNvbXBvbmVudCIsInNldHRpbmdzIiwiYm91bmRpbmdCb3giLCJzb3VyY2UiLCJWZWN0b3IiLCJsb2FkZXIiLCJleHRlbnQiLCJwcm9qZWN0aW9uIiwiYm91bmRpbmdBcnJheSIsInN0ckJvdW5kaW5nQm94IiwicHJvaiIsInRyYW5zZm9ybUV4dGVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJhYm9ydCIsInJlc3BvbnNlIiwiZm9ybWF0IiwiY2VudGVyUG9pbnQiLCJyRmVhdHVyZXMiLCJvc21Ob2RlcyIsIm9zbU5kcyIsIm5vZGVJZHgiLCJuZElkeCIsImluZm9Ob2RlcyIsIm5ld1RhZyIsInJlZiIsImxpbmVFeHRlbnQiLCJjaGlsZHJlbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGFzT3duUHJvcGVydHkiLCJnZXRBdHRyaWJ1dGUiLCJzaG93QWRkaXRpb25hbEdlb21ldHJpZXMiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwiZSIsIk9TTVhNTCIsInJlYWRGZWF0dXJlcyIsImdldEdlb21ldHJ5IiwiZ2V0VHlwZSIsInNldCIsImNsdXN0ZXJfem9vbSIsImNsdXN0ZXJfcG9wdXAiLCJsb2NfbGlua3VybCIsImhvdmVyX2xvY2F0aW9uIiwiaG92ZXJfc3R5bGUiLCJmb3JjZU5vZGVzIiwiZ2V0SW50ZXJpb3JQb2ludCIsImdldENvb3JkaW5hdGVzIiwic2V0R2VvbWV0cnkiLCJnZW9tIiwiUG9pbnQiLCJnZXRDZW50ZXIiLCJhZGRpdGlvbmFsU3R5bGUiLCJzZXRTdHlsZSIsInJlZHVjZVN0eWxlIiwiYWRkRmVhdHVyZXMiLCJzdHJhdGVneSIsImxvYWRpbmdzdHJhdGVneSIsImJib3giLCJhbGwiLCJyZWZyZXNoIiwiaW50ZXJ2YWwiLCJibG5IYXNQb3NpdGlvbklkcyIsImFyclBvc2l0aW9uSWRzIiwib2JqRmVhdHVyZXMiLCJmb3JFYWNoRmVhdHVyZSIsInJlbmV3YWJsZVJlc3BvbnNlIiwiZWFjaCIsImluZGV4IiwiZmVhdHVyZURhdGEiLCJyZWFkRmVhdHVyZSIsInBvcHVwQ29udGVudCIsImdldExheWVycyIsImZvckVhY2giLCJlbGVtZW50IiwiYXJyYXkiLCJzdHlsZUlkIiwibG9hZExvY2F0aW9uU3R5bGVzIiwiZ2V0U291cmNlIiwibmVzdGVkRmVhdHVyZSIsImhpZGVMYXllciIsInNob3dMYXllciIsImFyck5ld1Bvc2l0aW9uSWRzIiwib2JqTmV3RmVhdHVyZXMiLCJwb3NpdGlvbklkIiwiaW5kZXhPZiIsInJlbW92ZUZlYXR1cmUiLCJhZGRGZWF0dXJlIiwicmVxdWVzdEZ1bmN0aW9ucyIsImNsdXN0ZXIiLCJDbHVzdGVyIiwiZGlzdGFuY2UiLCJ6b29tIiwiQW5pbWF0ZWRDbHVzdGVyIiwiZ2V0VmVjdG9yTGF5ZXIiLCJmaXRUb0V4dGVuZCIsIm9uIiwiZml0VG9FeHRlbnRzIiwibWFwIiwibGF5ZXJDb250ZW50IiwiZ2V0VmlldyIsImdldFByb2plY3Rpb24iLCJjb250ZW50RmVhdHVyZSIsIkdlb0pTT04iLCJtaXNzaW5nU3R5bGVzIiwidW5zdHlsZWRGZWF0dXJlcyIsIm9uY2xpY2tfem9vbSIsImRyYXdMYXllciIsIkdyb3VwIiwiYWRkTGF5ZXIiLCJhc3luY19jb250ZW50Iiwic3Bpbm5lciIsInNob3ciLCJsb2NzdHlsZSIsImFwaV9sYXllcmNvbnRlbnRkYXRhX3VybCIsImxvb3BEYXRhIiwicmVzdWx0Q29vcmRpbmF0ZSIsInRyYW5zZm9ybSIsInBhcnNlRmxvYXQiLCJwb2ludCIsIkZlYXR1cmUiLCJzZXRJZCIsIk9iamVjdCIsImFzc2lnbiIsInNlYXJjaCIsImdldFpvb20iLCJjbHVzdGVyRGlzdGFuY2UiLCJhcGlfbGF5ZXJjb250ZW50X3VybCIsIm5ld0xvY2F0aW9uU3R5bGVzIiwibG9hZExheWVyQ29udGVudCIsImxheWVyVWlkIiwia2VlcExheWVyIiwicmVtb3ZlTGF5ZXIiLCJob29rX2xheWVyX3Zpc2liaWxpdHkiLCJjbGVhckludGVydmFsIiwic2V0Q2VudGVyIiwiY2hpbGRVaWQiLCJjaGlsZExheWVyIiwiZ2V0QXJyYXkiLCJtYXBMYXllcnMiLCJhY3RpdmVGb3Jab29tIiwic2hvd1BvcHVwT25BY3RpdmUiLCIkY29udGVudCIsImh0bWwiLCIkcG9wdXAiLCJhZGRDbGFzcyIsImNvbnN0YW50IiwiY3NzIiwiQUNUSVZFIiwiTE9BRElORyIsInBvcHVwSW5mb3MiLCJnZXRGZWF0dXJlcyIsImNvb3JkIiwiYXN5bmMiLCJvYmpQb3B1cCIsImhvb2siLCJwcm94eV9maWxsUG9wdXAiLCJzZXRQb3B1cCIsImFwaV9pbmZvd2luZG93X3VybCIsInBvcHVwSW5mbyIsInJvdXRpbmdfbGluayIsInNldEludGVydmFsIiwiZnVuY3Rpb24iLCJlbGVtZW50Q29udGVudCIsImdlb21ldHJ5IiwiQ2lyY2xlIiwiZnJvbUxvbkxhdCIsImNlbnRlciIsImZuU3R5bGVGdW5jdGlvbiIsIkZ1bmN0aW9uIiwiZiIsImZMYXllckdyb3VwIiwiZkxheWVycyIsImZWZWN0b3JMYXllciIsImZWZWN0b3JTb3VyY2UiLCJzZXRMYXllcnMiLCJzcGxpdF9nZW9qc29uIiwiZ2VvanNvbl9hdHRyaWJ1dGVzIiwic3BsaXQiLCJsYXllcklkIiwibCIsImxheWVyQXJyIiwiaGlkZV9jaGlsZCIsInpvb21fbG9jYXRpb25zIiwiY2hpbGRzQ291bnQiLCJnZW9qc29uX3pvb20iLCJoaWRlV2hlbkluVGFiIiwicHJvamVjdElkIiwiJCIsImV4dGVuZCIsIk9QRU4iLCJDTE9TRSIsIkNMT1NFQUJMRSIsIkVOQUJMRUQiLCJESVNBQkxFRCIsIkhJREUiLCJJQ09OIiwiQ09OVFJPTCIsIkNPUFkiLCJSRUZSRVNIIiwiSU5BQ1RJVkUiLCJBTklNQVRJT05fU1BJTiIsIkxBUkdFIiwiU01BTEwiLCJIT1JJWk9OVEFMIiwiVkVSVElDQUwiLCJBVFRSSUJVVElPTl9MT0dPIiwiQ09OVFJPTF9DT05UQUlORVJfVEwiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJFRElUT1JfRFJBV19DT05URU5UX1BPSU5UIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORyIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfQ0lSQ0xFIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUIiwiRURJVE9SX0RSQVdfVFJJR0dFUiIsIkVESVRPUl9DT05URU5UX1NFTEVDVCIsIkVESVRPUl9EUkFXX09QVElPTlMiLCJFRElUT1JfRkVBVFVSRV9BUFBMWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJHRU9TRUFSQ0giLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIkdFT1NFQVJDSF9UUklHR0VSIiwiR0VPU0VBUkNIX1NUQVJUIiwiR1JBVElDVUxFIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIlBSSU5UIiwiSU5GT1BBR0VfVklFV19UUklHR0VSIiwiSU5GT1BBR0UiLCJBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSIiwiQURESVRJT05BTFBBTkVMIiwiQUNDT1VOVF9WSUVXX1RSSUdHRVIiLCJBQ0NPVU5UIiwiT1ZFUlZJRVdNQVAiLCJPVkVSVklFV01BUF9XUkFQUEVSIiwiR0VPQk9PS01BUktTIiwiUEVSTUFMSU5LIiwiUEVSTUFMSU5LX1BPUFVQIiwiUE9QVVBfQ0xPU0UiLCJQT1BVUF9ST1VURV9XUkFQUEVSIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiUE9SVFNJREUiLCJQT1JUU0lERV9DT05UQUlORVIiLCJQT1JUU0lERV9DT05UUk9MIiwiUE9SVFNJREVfV1JBUFBFUiIsIlBPUlRTSURFX1RJVExFQkFSIiwiUE9SVFNJREVfVE9QX1RPT0xCQVIiLCJQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUiIsIlBPUlRTSURFX0JPVFRPTV9UT09MQkFSIiwiUE9SVFNJREVfU1RBVFVTQkFSIiwiUE9SVFNJREVfVklFV1RSSUdHRVJCQVIiLCJQT1JUU0lERV9IRUFETElORSIsIlBPUlRTSURFX0JVVFRPTkJBUiIsIlBPUlRTSURFX0JVVFRPTiIsIlBPUlRTSURFX0hJREUiLCJQT1JUU0lERV9DTE9TRSIsIlNQSU5ORVIiLCJTVEFSQk9BUkQiLCJTVEFSQk9BUkRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0NPTlRST0wiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9USVRMRUJBUiIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUiIsIlNUQVJCT0FSRF9TVEFUVVNCQVIiLCJTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJTVEFSQk9BUkRfQlVUVE9OQkFSIiwiU1RBUkJPQVJEX0JVVFRPTiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfQ0xPU0UiLCJTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsIlNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVIiLCJUT09MVElQX1BPUFVQIiwiWk9PTV9MRVZFTCIsIlJPVVRFUl9JTlBVVF9XUkFQUEVSIiwiUk9VVEVSX1BST0ZJTEVfV1JBUFBFUiIsIlJPVVRFUl9JTlBVVF9GUk9NIiwiUk9VVEVSX0lOUFVUX1RPIiwiUk9VVEVSX0lOUFVUX0NMRUFSIiwiUk9VVEVSX0JVVFRPTkJBUiIsIlJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVIiLCJST1VURVJfU1dJVENIIiwiUk9VVEVSX09WRVIiLCJST1VURVJfUFJJTlQiLCJST1VURVJfUFJPRklMRV9DQVIiLCJST1VURVJfUFJPRklMRV9IR1YiLCJST1VURVJfUFJPRklMRV9CSUtFIiwiUk9VVEVSX1BST0ZJTEVfRk9PVCIsIlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUiIsIk9MX09WRVJMQVlDT05UQUlORVJfU0UiLCJPTF9WSUVXUE9SVCIsIk9MX1pPT00iLCJPTF9aT09NX0lOIiwiT0xfWk9PTV9FWFQiLCJPTF9aT09NX0hPTUUiLCJPTF9aT09NX1BPUyIsIk9MX1pPT01fV0lUSF9FWFQiLCJPTF9aT09NX1dJVEhfSE9NRSIsIk9MX1pPT01fV0lUSF9QT1MiLCJPTF9aT09NX1NMSURFUiIsIk9MX1pPT01fV0lUSF9TTElERVIiLCJOT05FIiwiY3NzQ29uc3RhbnRzIiwiWm9vbWxldmVsIiwidXBkYXRlWm9vbWxldmVsIiwibWFwVmlldyIsImNsYXNzTmFtZSIsInVuZGVmaW5lZEhUTUwiLCJkb2N1bWVudCIsIkNvbnRyb2wiLCJjYWxsIiwidGFyZ2V0IiwiaW5oZXJpdHMiLCJwcm90b3R5cGUiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiTWF0aCIsInJhbmRvbSIsInN1YnN0ciIsImVuY29kZUdlb0pzb25Qcm9wZXJ0eSIsImlucHV0Iiwib3V0cHV0IiwiZGVjb2RlR2VvSnNvblByb3BlcnR5Iiwic2V0VXJsUGFyYW0iLCJwYXJhbSIsIm9wdF9nZXRLZXkiLCJvcHRfZXhlY3V0ZSIsImxpbmsiLCJzZWFyY2hQYXJhbSIsInBhcmFtUmVwbGFjZWQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInBhdGhuYW1lIiwiaGFzaCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJvZmZzZXQiLCJvcmlnaW5TdHJpbmciLCJnZXRVcmxQYXJhbSIsInJlZ0V4Iiwic3Vic3RyaW5nIiwiUmVnRXhwIiwiZXhlYyIsImRlbHRhRW5jb2RlIiwiYXJySW5wdXQiLCJhcnJPdXRwdXQiLCJzb3J0IiwiYSIsImIiLCJkZWx0YURlY29kZSIsImlzTmFOIiwiYXJySG9va0Z1bmN0aW9ucyIsInBhcmFtZXRlcnMiLCJoZXgiLCJvcHRfb3BhY2l0eSIsIm9wdF9hcnJheSIsImJpZ2ludCIsInIiLCJnIiwicmVkdWNlZFN0eWxlIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsb2NhdGlvblN0eWxlcyIsImdldEZpbGwiLCJnZXRTdHJva2UiLCJzZXRXaWR0aCIsImltYWdlIiwic3Ryb2tlIiwibWVhc3VyZUdlb21ldHJ5Iiwib3B0X2ZvcmNlTGluZU1lYXN1cmUiLCJvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSIsInNwaGVyZSIsImNvb3JkaW5hdGVzIiwiY29vcmQxIiwiY29vcmQyIiwicmVzdWx0IiwiTGluZVN0cmluZyIsIlBvbHlnb24iLCJnZXREaXN0YW5jZSIsInJhd1ZhbHVlIiwicm91bmQiLCJ0b0ZpeGVkIiwiaHRtbFZhbHVlIiwiYWJzIiwiZ2V0QXJlYSIsImVkZ2VDb29yZGluYXRlIiwiUEkiLCJzcXJ0IiwiZ2V0RXh0ZW50Rm9yR2VvbWV0cmllcyIsImFyckdlb21ldHJpZXMiLCJleHRlbnRTb3VyY2UiLCJFeHRlbnQiLCJleHRlbnRzIiwib3B0X3BhZGRpbmciLCJvcHRfYW5pbWF0aW9uRHVyYXRpb24iLCJ2aWV3IiwicGFkZGluZyIsImZpdFRvRXh0ZW50Iiwib3B0X21pblpvb20iLCJvcHRfbWF4Wm9vbSIsIm9wdF9taW5SZXNvbHV0aW9uIiwiZml0T3B0aW9ucyIsIm1pblJlc29sdXRpb24iLCJtaW5ab29tIiwibWF4Wm9vbSIsImFuaW1hdGUiLCJzdGFydCIsIkRhdGUiLCJkdXJhdGlvbiIsImdldFJlc29sdXRpb24iLCJmaXQiLCJnZXRTaXplIiwicmVwbGFjZUFsbFBsYWNlaG9sZGVycyIsInN0cklucHV0Iiwib3B0X2xheWVyIiwic3RyT3V0cHV0IiwicmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzIiwicmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMiLCJyZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzIiwiZnVuY3Rpb25OYW1lIiwiZXZLZXkiLCJlZGl0b3JWYXJzIiwiYXR0ciIsIm9iamVjdCIsImtleXMiLCJmblN0eWxlIiwiZ2V0Q3VycmVudFN1YmRvbWFpbiIsImhyZWYiLCJyZWRyYXdNYXBWaWV3IiwibWFwRGF0YSIsImNvbnRyb2xDb250YWluZXJUb3BMZWZ0IiwiJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50IiwicHJlcGVuZCIsImNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0IiwiYWZ0ZXIiLCJsZWZ0U2xpZGVFbGVtZW50cyIsImNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViIiwic2NhbGVsaW5lIiwicmVtb3ZlQ29udHJvbCIsIlNjYWxlTGluZSIsImFkZENvbnRyb2wiLCJhcHBlbmQiLCJ6b29tbGV2ZWwiLCJtb3VzZXBvc2l0aW9uIiwiTW91c2VQb3NpdGlvbiIsImNvb3JkaW5hdGVGb3JtYXQiLCJjb29yZGluYXRlIiwidG9TdHJpbmdIRE1TIiwiZ2V0VmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzdG9yZVZhbHVlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1sYXllci1jb250cm9sbGVyLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVmNjRiYjAyZGM1YzNlOTBiZDk3IiwiaW1wb3J0IHtDNGdMYXllcn0gZnJvbSBcIi4vYzRnLWxheWVyXCJcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuL2M0Zy1tYXBzLXV0aWxzXCJcblxudmFyIGM0ZyA9IHRoaXMuYzRnO1xuXG5leHBvcnQgY2xhc3MgQzRnTGF5ZXJDb250cm9sbGVye1xuICBjb25zdHJ1Y3Rvcihwcm94eSl7XG4gICAgdGhpcy5wcm94eSA9IHByb3h5O1xuICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlcjtcbiAgICB0aGlzLmFyckxheWVycyA9IHt9O1xuICAgIHRoaXMubGF5ZXJSZXF1ZXN0cyA9IHt9O1xuICB9XG4gIFxuICBsb2FkTGF5ZXJzICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHRoaXMubWFwSWQgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL2pRdWVyeS5hamF4KFwibWFwcy9sYXllclNlcnZpY2VcIix7Ly90aGlzLnByb3h5LmFwaV9sYXllcl91cmwse1xuICAgIGpRdWVyeS5hamF4KHRoaXMucHJveHkuYXBpX2xheWVyX3VybCx7XG4gICAgICBkYXRhVHlwZTogdGhpcy5tYXBDb250cm9sbGVyLmRhdGEuanNvbnAgPyBcImpzb25wXCIgOiBcImpzb25cIlxuXG4gICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgc2VsZi5hZGRMYXllcnMoZGF0YS5sYXllciwgZGF0YS5mb3JlaWduTGF5ZXJzKTtcbiAgICAgIHNlbGYucHJveHkubGF5ZXJzX2xvYWRlZCA9IHRydWU7XG4gICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhzZWxmLnByb3h5Lmhvb2tfbGF5ZXJfbG9hZGVkLCBzZWxmLnByb3h5LmxheWVySWRzKTtcbiAgICAgIC8vIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2sucHJveHlfbGF5ZXJfbG9hZGVkLCB7bGF5ZXJJZHM6IHNlbGYucHJveHkubGF5ZXJJZHMsIHByb3h5OiBzZWxmLnByb3h5fSk7XG4gICAgICBzZWxmLnByb3h5LmNoZWNrTG9jYXRpb25TdHlsZXMoe1xuICAgICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5kcmF3TGF5ZXJJbml0aWFsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBAVE9ETzogZXJyb3ItbWVzc2FnZXNcbiAgICAgIC8vICAgMSkgVmlzaWJsZSBtZXNzYWdlIDQgdXNlcnMgKGkxOG4pXG4gICAgICAvLyAgIDIpIFRlY2huaWNhbCBjb25zb2xlLndhcm5cbiAgICAgIGNvbnNvbGUud2FybignQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSB0cnlpbmcgdG8gbG9hZCB0aGUgbGF5ZXJzLi4uJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHRoaXMucHJveHkuc3RhcmJvYXJkLnNwaW5uZXIuaGlkZSgpO1xuICAgIH0pO1xuICB9IC8vIGVuZCBvZiBcImxvYWRMYXllcigpXCJcbiAgYWRkTGF5ZXJzKGxheWVycywgZm9yZWlnbkxheWVycykge1xuICAgIHZhciBpLFxuICAgICAgaixcbiAgICAgIGssXG4gICAgICBwLFxuICAgICAgaXNWaXNpYmxlLFxuICAgICAgbGF5ZXIsXG4gICAgICBzdG9yZWRJdGVtLFxuICAgICAgbGlua0l0ZW1zLFxuICAgICAgdWlkLFxuICAgICAgY3VycmVudFpvb20sXG4gICAgICBmbkhhbmRsZUFuZEFwcGVuZExheWVyQ2hpbGRzLFxuICAgICAgZW5kbGVzc0xvb3BJZCxcbiAgICAgIHBhcmVudElkLFxuICAgICAgcGFyZW50SWRzLFxuICAgICAgcGVybWFsaW5rZWRMYXllcnMsXG4gICAgICBjaGlsZCxcbiAgICAgIGZuSGFuZGxlQ2hpbGRzLFxuICAgICAga2V5LFxuICAgICAgc3RhcmJvYXJkLFxuICAgICAgZm5BZGRUb0hvb2s7XG5cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaXNWaXNpYmxlID0gZmFsc2U7XG5cbiAgICBwZXJtYWxpbmtlZExheWVycyA9IHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmxheWVycyB8fCBbXTtcblxuICAgIGZuSGFuZGxlQW5kQXBwZW5kTGF5ZXJDaGlsZHMgPSBmdW5jdGlvbiAob2JqSXRlbSkge1xuICAgICAgdmFyIHRvZ2dsZSxcbiAgICAgICAgZW50cnlXcmFwcGVyO1xuXG4gICAgICBpZiAob2JqSXRlbS5oYXNDaGlsZHMpIHtcbiAgICAgICAgb2JqSXRlbS52aXNpYmxlQ2hpbGRzID0gc2VsZi5hZGRMYXllcnMob2JqSXRlbS5jaGlsZHMsIGZvcmVpZ25MYXllcnMpO1xuICAgICAgfVxuICAgIH07IC8vIGVuZCBvZiBcImZuSGFuZGxlQW5kQXBwZW5kTGF5ZXJDaGlsZHMoKVwiXG5cbiAgICAvLyB3cmFwcGVyIGZ1bmN0aW9uIHRvIGF2b2lkIGNsb3N1cmUgYWNjZXNzaWJpbGl0eVxuICAgIGZuQWRkVG9Ib29rID0gZnVuY3Rpb24obGF5ZXIpIHtcbiAgICAgIHZhciBsYXllcm5hbWUsIGxheWVyaWQsIGxheWVyaWNvbjtcblxuICAgICAgaWYgKGxheWVyLmNoaWxkcyAmJiBsYXllci5jaGlsZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBsYXllcm5hbWUgPSBsYXllci5uYW1lO1xuICAgICAgICBsYXllcmlkID0gbGF5ZXIudGFiSWQ7XG4gICAgICAgIGxheWVyaWNvbiA9IGxheWVyLmF3ZXNvbWVpY29uO1xuICAgICAgICBjNGcubWFwcy5zdGFyYm9hcmRUYWJzID0gYzRnLm1hcHMuc3RhcmJvYXJkVGFicyB8fCB7fTtcbiAgICAgICAgc3RhcmJvYXJkID0gc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIuY29udHJvbHMuc3RhcmJvYXJkO1xuICAgICAgICBzdGFyYm9hcmQuaG9va19sYXllcnN3aXRjaGVyX2xvYWRlZC5wdXNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgYzRnLm1hcHMuc3RhcmJvYXJkVGFic1tsYXllcmlkXSA9IG5ldyBjNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbi5DdXN0b210YWIoc3RhcmJvYXJkLCB7XG4gICAgICAgICAgICBuYW1lOiBsYXllcm5hbWUsXG4gICAgICAgICAgICB0YWJJZDogbGF5ZXJpZCxcbiAgICAgICAgICAgIGF3ZXNvbWVpY29uOiBsYXllcmljb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChsYXllcnMgJiYgbGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsYXllcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyTGF5ZXJzW2xheWVyc1tpXS5pZF0pIHtcbiAgICAgICAgICBsYXllciA9IHRoaXMuYXJyTGF5ZXJzW2xheWVyc1tpXS5pZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGF5ZXIgPSBuZXcgQzRnTGF5ZXIobGF5ZXJzW2ldKTsvL2xheWVyc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtJdGVtcyA9IGZhbHNlO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGxheWVyKTtcbiAgICAgICAgaWYgKHR5cGVvZiBsYXllci5jb250ZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgbGF5ZXIuY29udGVudCA9IHV0aWxzLm9iamVjdFRvQXJyYXkobGF5ZXIuY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbmRsZXNzLWxvb3AgcHJldmVudGlvblxuICAgICAgICAvL1xuICAgICAgICBwYXJlbnRJZCA9IGxheWVyLnBpZDtcbiAgICAgICAgcGFyZW50SWRzID0ge307XG4gICAgICAgIC8vIGJ1aWxkIHBhcmVudC1pZHMgY2hhaW5cbiAgICAgICAgd2hpbGUgKHNlbGYuYXJyTGF5ZXJzW3BhcmVudElkXSkge1xuICAgICAgICAgIGlmIChwYXJlbnRJZHNbcGFyZW50SWRdKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NhdWdodCBlbmRsZXNzLWxvb3AgKElEOiAnICsgbGF5ZXIuaWQgKyAnKScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudElkc1twYXJlbnRJZF0gPSB0cnVlO1xuICAgICAgICAgIHBhcmVudElkID0gdGhpcy5hcnJMYXllcnNbcGFyZW50SWRdLnBpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXllci5jb250ZW50ICYmIGxheWVyLmNvbnRlbnRbMF0gJiYgbGF5ZXIuY29udGVudFswXS5jc3NDbGFzcykge1xuICAgICAgICAgIGxheWVyLmNzc0NsYXNzID0gbGF5ZXIuY29udGVudFswXS5jc3NDbGFzcztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCFwYXJlbnRJZHNbcGFyZW50SWRdKSB7XG5cbiAgICAgICAgICAvLyBwcmVwYXJlIGxheWVyIGRhdGEgaWYgdGhleSBhcmUgYSBuZXcgc3RhcmJvYXJkIHRhYlxuICAgICAgICAgIGlmIChsYXllci50eXBlID09PSBcInN0YXJ0YWJcIikge1xuICAgICAgICAgICAgbGF5ZXIuZWRpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgbGF5ZXIucmVuZGVyU3BlY2lhbCA9IHRydWU7XG4gICAgICAgICAgICBsYXllci50YWJJZCA9IGxheWVyLmlkO1xuICAgICAgICAgICAgaWYgKCFsYXllci5sYXllcm5hbWUpIHtcbiAgICAgICAgICAgICAgbGF5ZXIuZGlzcGxheSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpdGVyYXRlIGNoaWxkcyBhbmQgdGVsbCB0aGVtIHRvIG5vdCBsb2FkIGluIGxheWVyc3dpdGNoZXJcbiAgICAgICAgICAgIGZuSGFuZGxlQ2hpbGRzID0gZnVuY3Rpb24oZkxheWVyKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBmTGF5ZXIuY2hpbGRzLmxlbmd0aDsgY291bnQrKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZEFyciA9IGZMYXllci5jaGlsZHNbY291bnRdO1xuICAgICAgICAgICAgICAgIGNoaWxkQXJyLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGlsZEFyci50YWJJZCA9IGZMYXllci50YWJJZDtcbiAgICAgICAgICAgICAgICBjaGlsZEFyci5yZW5kZXJTcGVjaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hcnJMYXllcnNbY2hpbGRBcnIuaWRdKSB7XG4gICAgICAgICAgICAgICAgICBjaGlsZCA9IHNlbGYuYXJyTGF5ZXJzW2NoaWxkQXJyLmlkXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY2hpbGQgPSBuZXcgQzRnTGF5ZXIoY2hpbGRBcnIpOy8vbGF5ZXJzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBzZXQgcmVuZGVyU3BlY2lhbCB0byByZW1vdmUgaXQgZnJvbSBub3JtYWwgbGF5ZXJzd2l0Y2hlclxuICAgICAgICAgICAgICAgIHNlbGYuYXJyTGF5ZXJzW2NoaWxkLmlkXSA9IGNoaWxkO1xuICAgICAgICAgICAgICAgIGZMYXllci5jaGlsZHNbY291bnRdID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NoaWxkcykge1xuICAgICAgICAgICAgICAgICAgLy8gcmVjdXJzaXZlIGNhbGxcbiAgICAgICAgICAgICAgICAgIGZuSGFuZGxlQ2hpbGRzKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07IC8vIGVuZCBvZiBmbkhhbmRsZUNoaWxkc1xuXG4gICAgICAgICAgICBpZiAobGF5ZXIuaGFzQ2hpbGRzKSB7XG4gICAgICAgICAgICAgIGZuSGFuZGxlQ2hpbGRzKGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZuQWRkVG9Ib29rKGxheWVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1aWQgPSBsYXllci5pZCB8fCB1dGlscy5nZXRVbmlxdWVJZCgpO1xuICAgICAgICAgIHRoaXMuYXJyTGF5ZXJzW3VpZF0gPSBsYXllcjtcbiAgICAgICAgICBpZih0aGlzLnByb3h5LmNoZWNrTGF5ZXJJc0FjdGl2ZUZvclpvb20obGF5ZXIuaWQpKXtcbiAgICAgICAgICAgIGxheWVyLmlzSW5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxheWVyLmlzSW5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucHJveHkubGF5ZXJJZHMucHVzaChsYXllci5pZCk7XG5cbiAgICAgICAgICBpZiAobGF5ZXIuZGlzcGxheSkge1xuICAgICAgICAgICAgaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZuSGFuZGxlQW5kQXBwZW5kTGF5ZXJDaGlsZHMobGF5ZXIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGF5ZXIucGlkICYmIHRoaXMuYXJyTGF5ZXJzW2xheWVyLnBpZF0pIHtcbiAgICAgICAgICAgIC8vIHNldCBoaWRlIHdoZW4gbGF5ZXJzIGFyZSBub3QgZGlzcGxheWVkIGluIHRoZSBzdGFyYm9hcmRcbiAgICAgICAgICAgIGxheWVyLmhpZGUgPSB0aGlzLmFyckxheWVyc1tsYXllci5waWRdLmhpZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAocGVybWFsaW5rZWRMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChwID0gMDsgcCA8IHBlcm1hbGlua2VkTGF5ZXJzLmxlbmd0aDsgcCArPSAxKSB7XG4gICAgICAgICAgICAgIGlmIChwZXJtYWxpbmtlZExheWVyc1twXSA9PSBsYXllci5pZCkge1xuICAgICAgICAgICAgICAgIHZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKChsYXllci5oaWRlICE9PSBcIjFcIikgfHwgKHZpc2libGUpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3h5LmFjdGl2ZUxheWVySWRzW2xheWVyLmlkXSA9ICdpbnZpc2libGUnO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9IC8vIGVuZCBvZiBmb3ItbG9vcFxuXG4gICAgICAvLyB3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNWaXNpYmxlO1xuICB9IC8vIGVuZCBvZiBcImFkZExheWVycygpXCJcbiAgbG9hZExheWVyQ29udGVudChpdGVtVWlkKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBpLFxuICAgICAgbGF5ZXJzLFxuICAgICAgZmVhdHVyZXMsXG4gICAgICBmZWF0dXJlUHJvamVjdGlvbixcbiAgICAgIGRhdGFQcm9qZWN0aW9uLFxuICAgICAgbGF5ZXJHcm91cCxcbiAgICAgIGNvbnRlbnREYXRhLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0Q29udGVudERhdGEsXG4gICAgICByZXF1ZXN0VmVjdG9yU291cmNlLFxuICAgICAgdmVjdG9yTGF5ZXIsXG4gICAgICB2ZWN0b3JTb3VyY2UsXG4gICAgICB2ZWN0b3JTdHlsZSxcbiAgICAgIGNsdXN0ZXJTb3VyY2UsXG4gICAgICBzdHlsZUZvckNsdXN0ZXIsXG4gICAgICByZWZyZXNoSW50ZXJ2YWwsXG4gICAgICByZWZyZXNoQWpheFZhcnMsXG4gICAgICBmbkF0dGFjaERhdGFUb0xheWVyO1xuXG4gICAgcmVmcmVzaEFqYXhWYXJzID0ge307XG5cbiAgICBmbkF0dGFjaERhdGFUb0xheWVyID0gZnVuY3Rpb24gKGxheWVyLCBkYXRhKSB7XG4gICAgICBkYXRhLnByb3BlcnRpZXMgPSBkYXRhLnByb3BlcnRpZXMgfHwge307XG5cbiAgICAgIGxheWVyLnBvcHVwID0gZGF0YS5wb3B1cCB8fCBkYXRhLnByb3BlcnRpZXMucG9wdXAgfHwgZmFsc2U7XG4gICAgICBsYXllci50b29sdGlwID0gZGF0YS50b29sdGlwIHx8IGRhdGEucHJvcGVydGllcy50b29sdGlwIHx8IGZhbHNlO1xuICAgICAgbGF5ZXIudG9vbHRpcF9sZW5ndGggPSBkYXRhLnRvb2x0aXBfbGVuZ3RoIHx8IGRhdGEucHJvcGVydGllcy50b29sdGlwX2xlbmd0aCB8fCBmYWxzZTtcbiAgICAgIGxheWVyLmxhYmVsID0gZGF0YS5sYWJlbCB8fCBkYXRhLnByb3BlcnRpZXMubGFiZWwgfHwgZmFsc2U7XG4gICAgICBsYXllci56b29tX29uY2xpY2sgPSBkYXRhLnpvb21fb25jbGljayB8fCBkYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrIHx8IGZhbHNlO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5hcnJMYXllcnNbaXRlbVVpZF0uY29udGVudCkge1xuICAgICAgbGF5ZXJzID0gW107XG5cbiAgICAgICAgICB2YXIgY29udGVudEZlYXR1cmVzID0gW107XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYXJyTGF5ZXJzW2l0ZW1VaWRdLmNvbnRlbnQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb250ZW50RGF0YSA9IHRoaXMuYXJyTGF5ZXJzW2l0ZW1VaWRdLmNvbnRlbnRbaV07XG4gICAgICAgICAgc3R5bGVGb3JDbHVzdGVyID0gZnVuY3Rpb24gKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcblxuICAgICAgICAgICAgdmFyIHNpemUsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBmRmVhdHVyZXMsXG4gICAgICAgICAgICAgIGljb25PZmZzZXQsXG4gICAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgICAgayxcbiAgICAgICAgICAgICAgZmlsbGNvbG9yLFxuICAgICAgICAgICAgICBmb250Y29sb3I7XG5cbiAgICAgICAgICAgIGlmIChjb250ZW50RGF0YSAmJiBjb250ZW50RGF0YS5sb2NhdGlvblN0eWxlICYmIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NvbnRlbnREYXRhLmxvY2F0aW9uU3R5bGVdKSB7XG4gICAgICAgICAgICAgIHN0eWxlID0gc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY29udGVudERhdGEubG9jYXRpb25TdHlsZV0uc3R5bGUoZmVhdHVyZSwgcmVzb2x1dGlvbik7XG5cbiAgICAgICAgICAgICAgaWYgKCFzdHlsZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gW107XG4gICAgICAgICAgICAgICAgc2VsZi5maXR0aW5nRXh0ZW5kc1tpdGVtVWlkXSA9IHZlY3RvclNvdXJjZS5nZXRFeHRlbnQoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChmZWF0dXJlICE9PSB1bmRlZmluZWQgJiYgZmVhdHVyZSAhPT0gbnVsbCAmJiBmZWF0dXJlLnNlbGYgIT09IHdpbmRvdykge1xuICAgICAgICAgICAgICAgIGlmKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKXtcbiAgICAgICAgICAgICAgICAgIGZGZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgZkZlYXR1cmVzID0gW107XG4gICAgICAgICAgICAgICAgICBmRmVhdHVyZXNbMF0gPSBmZWF0dXJlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaXplID0gZkZlYXR1cmVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChmRmVhdHVyZXNbMF0uZ2V0U3R5bGUoKSAmJiBzaXplIDwgMTAwMCkgeyAvLyBsaW1pdCBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVbMF0gPSBmRmVhdHVyZXNbMF0uZ2V0U3R5bGUoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGZGZWF0dXJlcy5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICghZkZlYXR1cmVzW2tdLmdldFN0eWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0gc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY29udGVudERhdGEubG9jYXRpb25TdHlsZV0uc3R5bGUoZkZlYXR1cmVzWzBdLCByZXNvbHV0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjb250ZW50RGF0YS5sb2NhdGlvblN0eWxlXS5zdHlsZShmRmVhdHVyZXNbMF0sIHJlc29sdXRpb24pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKCFzdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgYnViYmxlLW9mZnNldFxuICAgICAgICAgICAgICAgICAgaWNvbk9mZnNldCA9IFswLCAwXTtcbiAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVswXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlWzBdLmdldEltYWdlKCkgJiYgc3R5bGVbMF0uZ2V0SW1hZ2UoKS5nZXRSYWRpdXMgJiYgdHlwZW9mIHN0eWxlWzBdLmdldEltYWdlKCkuZ2V0UmFkaXVzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSBwYXJzZUludChzdHlsZVswXS5nZXRJbWFnZSgpLmdldFJhZGl1cygpLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbk9mZnNldCA9IFswLCByYWRpdXNdO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHlsZVswXS5nZXRJbWFnZSgpICYmIHN0eWxlWzBdLmdldEltYWdlKCkuZ2V0QW5jaG9yICYmIHR5cGVvZiBzdHlsZVswXS5nZXRJbWFnZSgpLmdldEFuY2hvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWNvbk9mZnNldCA9IHN0eWxlWzBdLmdldEltYWdlKCkuZ2V0QW5jaG9yKCkgfHwgWzAsIDBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGZpbGxjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSgnNDk3NUE4Jyx7XG4gICAgICAgICAgICAgICAgICAgIHVuaXQ6ICclJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDcwXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnREYXRhLmNsdXN0ZXJfZmlsbGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShjb250ZW50RGF0YS5jbHVzdGVyX2ZpbGxjb2xvcix7XG4gICAgICAgICAgICAgICAgICAgICAgdW5pdDogJyUnLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiA3MFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGZvbnRjb2xvciA9ICcjRkZGRkZGJztcbiAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50RGF0YS5jbHVzdGVyX2ZvbnRjb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBmb250Y29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoY29udGVudERhdGEuY2x1c3Rlcl9mb250Y29sb3Ise1xuICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6ICclJyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBzdHlsZS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG5ldyBvbC5zdHlsZS5UZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi4pePXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiBcIjYwcHggc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogLTEgKiBpY29uT2Zmc2V0WzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogLTEgKiBpY29uT2Zmc2V0WzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZmlsbGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgc3R5bGUucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzaXplLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAtMSAqIGljb25PZmZzZXRbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtMSAqIGljb25PZmZzZXRbMV0gKyAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZm9udGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2l6ZSA9PT0gMSAmJiBmRmVhdHVyZXNbMF0uZ2V0U3R5bGUoKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZGZWF0dXJlc1swXS5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgfTsgLy8gZW5kIG9mIHN0eWxlRm9yQ2x1c3RlcigpXG5cbiAgICAgICAgICBpZiAoY29udGVudERhdGEgJiYgKGNvbnRlbnREYXRhLnR5cGUgPT09IFwidXJsRGF0YVwiKSkge1xuXG4gICAgICAgICAgICByZXF1ZXN0RGF0YSA9IHt9O1xuICAgICAgICAgICAgcmVxdWVzdERhdGEudXJsID0gY29udGVudERhdGEuZGF0YS51cmw7XG4gICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgcmVxdWVzdERhdGEucGFyYW1zID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvbnRlbnREYXRhLmRhdGEucGFyYW1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnRlbnREYXRhLnNldHRpbmdzLmJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICAgIHJlcXVlc3RDb250ZW50RGF0YSA9IGNvbnRlbnREYXRhO1xuICAgICAgICAgICAgICByZXF1ZXN0VmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe1xuICAgICAgICAgICAgICAgIGxvYWRlcjogZnVuY3Rpb24gKGV4dGVudCwgcmVzb2x1dGlvbiwgcHJvamVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgdmFyIGJvdW5kaW5nQXJyYXksXG4gICAgICAgICAgICAgICAgICAgIHN0ckJvdW5kaW5nQm94LFxuICAgICAgICAgICAgICAgICAgICB1cmw7XG5cbiAgICAgICAgICAgICAgICAgIGJvdW5kaW5nQXJyYXkgPSBvbC5wcm9qLnRyYW5zZm9ybUV4dGVudChleHRlbnQsIHByb2plY3Rpb24sICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICAgICAgICAgIHN0ckJvdW5kaW5nQm94ID0gJzxiYm94LXF1ZXJ5IHM9XCInICsgYm91bmRpbmdBcnJheVsxXSArICdcIiBuPVwiJyArIGJvdW5kaW5nQXJyYXlbM10gKyAnXCIgdz1cIicgKyBib3VuZGluZ0FycmF5WzBdICsgJ1wiIGU9XCInICsgYm91bmRpbmdBcnJheVsyXSArICdcIi8+JztcbiAgICAgICAgICAgICAgICAgIHVybCA9IHJlcXVlc3REYXRhLnVybDtcblxuICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3REYXRhLnBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJz9kYXRhPScgKyBlbmNvZGVVUklDb21wb25lbnQocmVxdWVzdERhdGEucGFyYW1zLnJlcGxhY2UoL1xcKGJib3hcXCkvZywgc3RyQm91bmRpbmdCb3gpKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubGF5ZXJSZXF1ZXN0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGF5ZXJSZXF1ZXN0cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubGF5ZXJSZXF1ZXN0c1snbGF5ZXJSZXF1ZXN0JyArIGl0ZW1VaWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXllclJlcXVlc3RzWydsYXllclJlcXVlc3QnICsgaXRlbVVpZF0uYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgc2VsZi5sYXllclJlcXVlc3RzWydsYXllclJlcXVlc3QnICsgaXRlbVVpZF0gPSBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaixcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgY2VudGVyUG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgckZlYXR1cmVzLFxuICAgICAgICAgICAgICAgICAgICAgIG9zbU5vZGVzLFxuICAgICAgICAgICAgICAgICAgICAgIG9zbU5kcyxcbiAgICAgICAgICAgICAgICAgICAgICBub2RlSWR4LFxuICAgICAgICAgICAgICAgICAgICAgIG5kSWR4LFxuICAgICAgICAgICAgICAgICAgICAgIGluZm9Ob2RlcyxcbiAgICAgICAgICAgICAgICAgICAgICBuZXdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgcmVmLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVFeHRlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNlbGYubGF5ZXJSZXF1ZXN0c1snbGF5ZXJSZXF1ZXN0JyArIGl0ZW1VaWRdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXByb2Nlc3NpbmcgdGhlIG9zbV94bWwgdG8gZmluZCByZWxhdGlvbi1ub2RlcyB3aXRoIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5jaGlsZHJlbiAmJiByZXNwb25zZS5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIDEpIGZpbmQgbm9kZXMgd2l0aCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgb3NtTm9kZXMgPSByZXNwb25zZS5jaGlsZHJlblswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbm9kZScpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChvc21Ob2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb05vZGVzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG5vZGVJZHggaW4gb3NtTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9zbU5vZGVzLmhhc093blByb3BlcnR5KG5vZGVJZHgpICYmIG9zbU5vZGVzW25vZGVJZHhdICYmIG9zbU5vZGVzW25vZGVJZHhdLmNoaWxkcmVuICYmIG9zbU5vZGVzW25vZGVJZHhdLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvTm9kZXNbb3NtTm9kZXNbbm9kZUlkeF0uZ2V0QXR0cmlidXRlKCdpZCcpXSA9IG9zbU5vZGVzW25vZGVJZHhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluZm9Ob2Rlc1tvc21Ob2Rlc1tub2RlSWR4XS5nZXRBdHRyaWJ1dGUoJ2lkJyldID0gbm9kZUlkeDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIC8vIDIpIGNoZWNrIGFuZCBoYW5kbGUgcmVsYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgb3NtTmRzID0gcmVzcG9uc2UuY2hpbGRyZW5bMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ25kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG9zbU5kcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChuZElkeCBpbiBvc21OZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5kSWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9zbU5kcy5oYXNPd25Qcm9wZXJ0eShuZElkeCkgJiYgb3NtTmRzW25kSWR4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPSBvc21OZHNbbmRJZHhdLmdldEF0dHJpYnV0ZSgncmVmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvTm9kZXMgJiYgcmVmICYmIGluZm9Ob2Rlc1tyZWZdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RDb250ZW50RGF0YSAmJiByZXF1ZXN0Q29udGVudERhdGEuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0Q29udGVudERhdGEuc2V0dGluZ3Muc2hvd0FkZGl0aW9uYWxHZW9tZXRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgYXMgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYWcgPSByZXNwb25zZS5jcmVhdGVFbGVtZW50KCd0YWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VGFnICYmIG9zbU5kc1tuZElkeF0ucGFyZW50RWxlbWVudCAmJiBvc21OZHNbbmRJZHhdLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCdrJywgJ2M0Z19vc21fcmVmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCd2Jywgb3NtTmRzW25kSWR4XS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvTm9kZXNbcmVmXS5hcHBlbmRDaGlsZChuZXdUYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb05vZGVzW3JlZl0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGNoZWNrIGFuZCBoYW5kbGUgcmVsYXRpb25zLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpbXBvcnQgb3NtX3htbFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSBuZXcgb2wuZm9ybWF0Lk9TTVhNTCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0ICYmIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlcyA9IGZvcm1hdC5yZWFkRmVhdHVyZXMocmVzcG9uc2UsIHtmZWF0dXJlUHJvamVjdGlvbjogcHJvamVjdGlvbn0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FuIG5vdCByZWFkIGZlYXR1cmUuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUuc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHBvc3Rwcm9jZXNzaW5nIGZlYXR1cmVzXG4gICAgICAgICAgICAgICAgICAgIGlmIChyRmVhdHVyZXMgJiYgckZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgckZlYXR1cmVzLmxlbmd0aDsgaiArPSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyRmVhdHVyZXNbal0uZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09IFwiUG9pbnRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByRmVhdHVyZXNbal0uc2V0KCdvc21fdHlwZScsICdub2RlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByRmVhdHVyZXNbal0uc2V0KCdvc21fdHlwZScsICd3YXknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXQoJ2M0Z190eXBlJywgJ29zbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgckZlYXR1cmVzW2pdLnNldCgnY2x1c3Rlcl96b29tJywgY29udGVudERhdGEuY2x1c3Rlcl96b29tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXQoJ2NsdXN0ZXJfcG9wdXAnLCBjb250ZW50RGF0YS5jbHVzdGVyX3BvcHVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXQoJ2xvY19saW5rdXJsJywgY29udGVudERhdGEubG9jX2xpbmt1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgckZlYXR1cmVzW2pdLnNldCgnaG92ZXJfbG9jYXRpb24nLCBjb250ZW50RGF0YS5ob3Zlcl9sb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByRmVhdHVyZXNbal0uc2V0KCdob3Zlcl9zdHlsZScsIGNvbnRlbnREYXRhLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXQoJ3pvb21fb25jbGljaycsIGNvbnRlbnREYXRhLmRhdGEuem9vbV9vbmNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXQoJ2xhYmVsJywgY29udGVudERhdGEuZGF0YS5sYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0Q29udGVudERhdGEuc2V0dGluZ3MuZm9yY2VOb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHRyYWNrcyBhbmQgYXJlYXMgdG8gcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyRmVhdHVyZXNbal0uZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09IFwiUG9seWdvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUG9pbnQgPSByRmVhdHVyZXNbal0uZ2V0R2VvbWV0cnkoKS5nZXRJbnRlcmlvclBvaW50KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByRmVhdHVyZXNbal0uc2V0R2VvbWV0cnkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgb2wuZ2VvbS5Qb2ludChjZW50ZXJQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJGZWF0dXJlc1tqXS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gXCJMaW5lU3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAVE9ETzogcHLDvGZlbiBvYiBkaWVzIGtvcnJla3RlciBtaXR0ZWxwdW5rdCBpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lRXh0ZW50ID0gckZlYXR1cmVzW2pdLmdldEdlb21ldHJ5KCkuZ2V0RXh0ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUG9pbnQgPSBvbC5leHRlbnQuZ2V0Q2VudGVyKGxpbmVFeHRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXRHZW9tZXRyeShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBvbC5nZW9tLlBvaW50KGNlbnRlclBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyRmVhdHVyZXNbal0uZ2V0KCdjNGdfb3NtX3JlZicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChyZXF1ZXN0Q29udGVudERhdGEuc2V0dGluZ3Muc2hvd0FkZGl0aW9uYWxHZW9tZXRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0Q29udGVudERhdGEuc2V0dGluZ3MuYWRkaXRpb25hbFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQFRPRE86IGxvYWQgYW5kIGF0dGFjaCBzdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXRTdHlsZSh1dGlscy5yZWR1Y2VTdHlsZShyZXF1ZXN0Q29udGVudERhdGEubG9jYXRpb25TdHlsZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RWZWN0b3JTb3VyY2UuYWRkRmVhdHVyZXMockZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBhZGQgZmVhdHVyZXMgdG8gc291cmNlLiBUaGUgXCJmb3JjZU5vZGVzXCItb3B0aW9uIHNob3VsZCBiZSB1c2VkLicpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL3NlbGYuY29tYmluZUxheWVycyhzZWxmKTtcbiAgICAgICAgICAgICAgICAgIH0pOyAvLyBlbmQgb2YgQUpBWFxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHJhdGVneTogb2wubG9hZGluZ3N0cmF0ZWd5LmJib3hcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgdmVjdG9yU291cmNlID0gcmVxdWVzdFZlY3RvclNvdXJjZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbC5mb3JtYXRbY29udGVudERhdGEuZm9ybWF0XSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAgICAgICAvL1N0YXRpY1ZlY3RvclxuICAgICAgICAgICAgICAgIHZlY3RvclNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKHtcbiAgICAgICAgICAgICAgICAgIGZvcm1hdDogbmV3IG9sLmZvcm1hdFtjb250ZW50RGF0YS5mb3JtYXRdKCksXG4gICAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3REYXRhLnVybCxcbiAgICAgICAgICAgICAgICAgIHByb2plY3Rpb246ICdFUFNHOjM4NTcnLFxuICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k6IG9sLmxvYWRpbmdzdHJhdGVneS5hbGxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50RGF0YS5zZXR0aW5ncyAmJiBjb250ZW50RGF0YS5zZXR0aW5ncy5yZWZyZXNoID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5sYXllclJlcXVlc3RzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXllclJlcXVlc3RzID0ge307XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJlZnJlc2hJbnRlcnZhbCA9ICh0eXBlb2YgY29udGVudERhdGEuc2V0dGluZ3MuaW50ZXJ2YWwgPT09ICdudW1iZXInKSA/IGNvbnRlbnREYXRhLnNldHRpbmdzLmludGVydmFsIDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAvKiBkbyBpdCB3aXRoIGJldHRlciBhamF4LWhhbmRsaW5nXG4gICAgICAgICAgICAgICAgICAgc2VsZi5sYXllclJlcXVlc3RzWydsYXllclJlcXVlc3QnICsgaXRlbVVpZF0gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgIHZlY3RvclNvdXJjZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgIH0sIHJlZnJlc2hJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgLy8gQW5mYW5nIEVpbnNjaHViIG5ldWUgQUpBWC1MYXllclxuICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLmJsbkhhc1Bvc2l0aW9uSWRzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICByZWZyZXNoQWpheFZhcnMuYXJyUG9zaXRpb25JZHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5vYmpGZWF0dXJlcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICB2ZWN0b3JTb3VyY2Uuc2V0KCdyZWZyZXNoSW50ZXJ2YWwnLCByZWZyZXNoSW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgICB2ZWN0b3JTb3VyY2Uuc2V0KCdyZWZyZXNoRnVuY3Rpb24nLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2ZWN0b3JTb3VyY2UuZ2V0KCdoYXNJZHMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZlY3RvclNvdXJjZS5mb3JFYWNoRmVhdHVyZShmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdwb3NpdGlvbklkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLmJsbkhhc1Bvc2l0aW9uSWRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLmFyclBvc2l0aW9uSWRzLnB1c2goZmVhdHVyZS5nZXQoJ3Bvc2l0aW9uSWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5vYmpGZWF0dXJlc1tmZWF0dXJlLmdldCgncG9zaXRpb25JZCcpXSA9IGZlYXR1cmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZnJlc2hBamF4VmFycy5ibG5IYXNQb3NpdGlvbklkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yU291cmNlLnNldCgnaGFzSWRzJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdERhdGEudXJsLFxuICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlbmV3YWJsZVJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBvZiBzdGF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLmZlYXR1cmVzLCBmdW5jdGlvbiAoaW5kZXgsIGZlYXR1cmVEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVEYXRhLnR5cGUgJiYgZmVhdHVyZURhdGEudHlwZSA9PT0gXCJGZWF0dXJlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmZWF0dXJlID0gKG5ldyBvbC5mb3JtYXRbY29udGVudERhdGEuZm9ybWF0XSgpKS5yZWFkRmVhdHVyZShmZWF0dXJlRGF0YSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiAnRVBTRzozODU3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXIgPSBzZWxmLmFyckxheWVyc1tmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3B1cENvbnRlbnQgPSBmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIudmVjdG9yTGF5ZXIuZ2V0TGF5ZXJzKCkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLnN0eWxlSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoW2ZlYXR1cmVEYXRhLnByb3BlcnRpZXMuc3R5bGVJZF0sIHtkb25lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLnN0eWxlSWRdLnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldFN0eWxlKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2ZlYXR1cmVEYXRhLnByb3BlcnRpZXMuc3R5bGVJZF0uc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0U291cmNlKCkuZm9yRWFjaEZlYXR1cmUoZnVuY3Rpb24obmVzdGVkRmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZEZlYXR1cmUuc2V0KCdwb3B1cCcsIHBvcHVwQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jb250ZW50WzBdLmxvY2F0aW9uU3R5bGUgPSBmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLnN0eWxlSWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbZmVhdHVyZURhdGEucHJvcGVydGllcy5zdHlsZUlkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhbZmVhdHVyZURhdGEucHJvcGVydGllcy5zdHlsZUlkXSwge2RvbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLnN0eWxlSWRdLnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLnNldFN0eWxlKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2ZlYXR1cmVEYXRhLnByb3BlcnRpZXMuc3R5bGVJZF0uc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllci5pZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5oaWRlTGF5ZXIobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dMYXllcihsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2ZWN0b3JTb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5mZWF0dXJlcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5hcnJOZXdQb3NpdGlvbklkcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoQWpheFZhcnMub2JqTmV3RmVhdHVyZXMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLmZlYXR1cmVzLCBmdW5jdGlvbiAoaW5kZXgsIGZlYXR1cmVEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVEYXRhLnR5cGUgJiYgZmVhdHVyZURhdGEudHlwZSA9PSBcIkZlYXR1cmVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLmZlYXR1cmUgPSAobmV3IG9sLmZvcm1hdFtjb250ZW50RGF0YS5mb3JtYXRdKCkpLnJlYWRGZWF0dXJlKGZlYXR1cmVEYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246ICdFUFNHOjM4NTcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5mZWF0dXJlLnNldCgnY2x1c3Rlcl96b29tJywgY29udGVudERhdGEuY2x1c3Rlcl96b29tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5mZWF0dXJlLnNldCgnbG9jX2xpbmt1cmwnLCBjb250ZW50RGF0YS5sb2NfbGlua3VybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoQWpheFZhcnMuZmVhdHVyZS5zZXQoJ2hvdmVyX2xvY2F0aW9uJywgY29udGVudERhdGEuaG92ZXJfbG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLmZlYXR1cmUuc2V0KCdob3Zlcl9zdHlsZScsIGNvbnRlbnREYXRhLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWZyZXNoQWpheFZhcnMuZmVhdHVyZS5nZXQoJ3Bvc2l0aW9uSWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoQWpheFZhcnMuYXJyTmV3UG9zaXRpb25JZHMucHVzaChyZWZyZXNoQWpheFZhcnMuZmVhdHVyZS5nZXQoJ3Bvc2l0aW9uSWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5vYmpOZXdGZWF0dXJlc1tyZWZyZXNoQWpheFZhcnMuZmVhdHVyZS5nZXQoJ3Bvc2l0aW9uSWQnKV0gPSByZWZyZXNoQWpheFZhcnMuZmVhdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlZnJlc2hBamF4VmFycy5hcnJQb3NpdGlvbklkcywgZnVuY3Rpb24gKGluZGV4LCBwb3NpdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZnJlc2hBamF4VmFycy5hcnJOZXdQb3NpdGlvbklkcy5pbmRleE9mKHBvc2l0aW9uSWQpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbnMgaWQgaW4gbmV1ZXIgYW50d29ydCBuaWNodCBtZWhyIGVudGhhbHRlbiAtPiBsw7ZzY2hlIGZlYXR1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVmcmVzaEFqYXhWYXJzLm9iakZlYXR1cmVzW3Bvc2l0aW9uSWRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvclNvdXJjZS5yZW1vdmVGZWF0dXJlKHJlZnJlc2hBamF4VmFycy5vYmpGZWF0dXJlc1twb3NpdGlvbklkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZShyZWZyZXNoQWpheFZhcnMuYXJyUG9zaXRpb25JZHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlZnJlc2hBamF4VmFycy5hcnJOZXdQb3NpdGlvbklkcywgZnVuY3Rpb24gKGluZGV4LCBwb3NpdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZnJlc2hBamF4VmFycy5hcnJQb3NpdGlvbklkcy5pbmRleE9mKHBvc2l0aW9uSWQpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbnMgaWQgaXN0IG5vY2ggbmljaHQgdm9yaGFuZGVuIC0+IG5ldWVzIGZlYXR1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5hcnJQb3NpdGlvbklkcy5wdXNoKHBvc2l0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLm9iakZlYXR1cmVzW3Bvc2l0aW9uSWRdID0gcmVmcmVzaEFqYXhWYXJzLm9iak5ld0ZlYXR1cmVzW3Bvc2l0aW9uSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yU291cmNlLmFkZEZlYXR1cmUocmVmcmVzaEFqYXhWYXJzLm9iak5ld0ZlYXR1cmVzW3Bvc2l0aW9uSWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LnJlcXVlc3RGdW5jdGlvbnNbJ3JlcXVlc3RfJyArIGl0ZW1VaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAnZnVuY3Rpb24nOiB2ZWN0b3JTb3VyY2UuZ2V0KCdyZWZyZXNoRnVuY3Rpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgJ2ludGVydmFsJzogcmVmcmVzaEludGVydmFsXG4gICAgICAgICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgICAgICAgIC8vIEVuZGUgRWluc2NodWIgbmV1ZSBBSkFYLUxheWVyXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Zvcm1hdCB0eXBlICcgKyBjb250ZW50RGF0YS5mb3JtYXQgKyAnIGluIG9sLmZvcm1hdCBub3QgZm91bmQuJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnRlbnREYXRhLnNldHRpbmdzLmNsdXN0ZXIpIHtcblxuICAgICAgICAgICAgICBjbHVzdGVyU291cmNlID0gbmV3IG9sLnNvdXJjZS5DbHVzdGVyKHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogNDAsXG4gICAgICAgICAgICAgICAgLy90aHJlc2hvbGQ6IDIsIC8vbWluaW11bSBlbGVtZW50IGNvdW50XG4gICAgICAgICAgICAgICAgc291cmNlOiB2ZWN0b3JTb3VyY2UsXG4gICAgICAgICAgICAgICAgem9vbTogY29udGVudERhdGEuY2x1c3Rlcl96b29tXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNsdXN0ZXJTb3VyY2UpO1xuICAgICAgICAgICAgICB0aGlzLnN0eWxlRm9yQ2x1c3RlciA9IHN0eWxlRm9yQ2x1c3RlcjtcblxuICAgICAgICAgICAgICAvL3ZlY3RvckxheWVyID0gdXRpbHMuZ2V0VmVjdG9yTGF5ZXIoY2x1c3RlclNvdXJjZSwgc3R5bGVGb3JDbHVzdGVyKTtcblxuICAgICAgICAgICAgICB2ZWN0b3JMYXllciA9IG5ldyBvbC5sYXllci5BbmltYXRlZENsdXN0ZXIoXG4gICAgICAgICAgICAgICAge1x0bmFtZTogJ0NsdXN0ZXInLFxuICAgICAgICAgICAgICAgICAgc291cmNlOiBjbHVzdGVyU291cmNlLFxuICAgICAgICAgICAgICAgICAgLy8gVXNlIGEgc3R5bGUgZnVuY3Rpb24gZm9yIGNsdXN0ZXIgc3ltYm9saXNhdGlvblxuICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlRm9yQ2x1c3RlclxuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZlY3RvckxheWVyID0gdXRpbHMuZ2V0VmVjdG9yTGF5ZXIodmVjdG9yU291cmNlLCBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjb250ZW50RGF0YS5sb2NhdGlvblN0eWxlXSA/IHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NvbnRlbnREYXRhLmxvY2F0aW9uU3R5bGVdLnN0eWxlIDogbnVsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIEZpdCB0byBleHRlbmQgKi9cbiAgICAgICAgICAgIGlmIChjb250ZW50RGF0YS5zZXR0aW5ncyAmJiBjb250ZW50RGF0YS5zZXR0aW5ncy5maXRUb0V4dGVuZCkge1xuXG4gICAgICAgICAgICAgIHNlbGYuZml0dGluZ0V4dGVuZHMgPSBzZWxmLmZpdHRpbmdFeHRlbmRzIHx8IHt9O1xuXG4gICAgICAgICAgICAgIHZlY3RvclNvdXJjZS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgY3VycmVudGx5IHN0b3JlZCBpZCdzXG4gICAgICAgICAgICAgICAgZm9yIChpIGluIHNlbGYuZml0dGluZ0V4dGVuZHMpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmZpdHRpbmdFeHRlbmRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi5wcm94eS5hY3RpdmVMYXllcklkc1tpXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBzZWxmLnByb3h5LmFjdGl2ZUxheWVySWRzWzBdID09IFwiaW52aXNpYmxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi5maXR0aW5nRXh0ZW5kc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuZml0dGluZ0V4dGVuZHNbaXRlbVVpZF0gPSB2ZWN0b3JTb3VyY2UuZ2V0RXh0ZW50KCk7Ly92ZWN0b3JTb3VyY2UuZ2V0RmVhdHVyZXMoKTtcbiAgICAgICAgICAgICAgICB1dGlscy5maXRUb0V4dGVudHMoc2VsZi5maXR0aW5nRXh0ZW5kcywgc2VsZi5tYXBDb250cm9sbGVyLm1hcCk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbmQgb2YgZml0IHRvIGV4dGVuZFxuXG4gICAgICAgICAgICBmbkF0dGFjaERhdGFUb0xheWVyKHZlY3RvckxheWVyLCBjb250ZW50RGF0YS5kYXRhKTtcbiAgICAgICAgICAgIGxheWVycy5wdXNoKHZlY3RvckxheWVyKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLmFyckxheWVyc1tpdGVtVWlkXS50eXBlID09PSBcInRhYmxlXCIpIHx8ICh0aGlzLmFyckxheWVyc1tpdGVtVWlkXS50eXBlID09PSBcImxpbmtcIikpIHtcbiAgICAgICAgICAgIHZhciBsYXllckNvbnRlbnQgPSB0aGlzLmFyckxheWVyc1tpdGVtVWlkXS5jb250ZW50O1xuICAgICAgICAgICAgY29udGVudERhdGEgPSBsYXllckNvbnRlbnRbMF07XG4gICAgICAgICAgICBpZiAoY29udGVudERhdGEgJiYgY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzICYmIGNvbnRlbnREYXRhLmRhdGEucHJvcGVydGllcy5wcm9qZWN0aW9uKSB7XG4gICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uID0gY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLnByb2plY3Rpb247XG4gICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uID0gdGhpcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZvcmNlIGFsbCBub2RlcyBpbnRvIG9uZSBsYXllclxuXG5cbiAgICAgICAgICAgIHZhciBjb250ZW50RmVhdHVyZSA9IG5ldyBvbC5mb3JtYXRbbGF5ZXJDb250ZW50W2ldLmZvcm1hdF0oe30pLnJlYWRGZWF0dXJlcyhsYXllckNvbnRlbnRbaV0uZGF0YSwge1xuICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogZmVhdHVyZVByb2plY3Rpb24sXG4gICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiBkYXRhUHJvamVjdGlvblxuICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2NsdXN0ZXJfem9vbScsIGNvbnRlbnREYXRhLmNsdXN0ZXJfem9vbSk7XG4gICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2NsdXN0ZXJfcG9wdXAnLCBjb250ZW50RGF0YS5jbHVzdGVyX3BvcHVwKTtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnbG9jX2xpbmt1cmwnLCBjb250ZW50RGF0YS5sb2NfbGlua3VybCk7XG4gICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2hvdmVyX2xvY2F0aW9uJywgY29udGVudERhdGEuaG92ZXJfbG9jYXRpb24pO1xuICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdob3Zlcl9zdHlsZScsIGNvbnRlbnREYXRhLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgncG9wdXAnLCBsYXllckNvbnRlbnRbaV0uZGF0YS5wcm9wZXJ0aWVzLnBvcHVwKTtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnem9vbV9vbmNsaWNrJywgY29udGVudERhdGEuem9vbV9vbmNsaWNrKTtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlcy5wdXNoKGNvbnRlbnRGZWF0dXJlKTtcblxuXG4gICAgICAgICAgICBpZihpKzEgPT09IHRoaXMuYXJyTGF5ZXJzW2l0ZW1VaWRdLmNvbnRlbnQubGVuZ3RoKXtcbiAgICAgICAgICAgICAgdmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe1xuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBjb250ZW50RmVhdHVyZXMsXG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6Mzg1NycsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBuZXcgb2wuZm9ybWF0Lkdlb0pTT04oKSxcblxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnREYXRhICYmIGNvbnRlbnREYXRhLnNldHRpbmdzICYmIGNvbnRlbnREYXRhLnNldHRpbmdzLmNsdXN0ZXIpIHtcbiAgICAgICAgICAgICAgICBjbHVzdGVyU291cmNlID0gbmV3IG9sLnNvdXJjZS5DbHVzdGVyKHtcbiAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiA0MCxcbiAgICAgICAgICAgICAgICAgIHpvb206IGNvbnRlbnREYXRhLmNsdXN0ZXJfem9vbSxcblxuICAgICAgICAgICAgICAgICAgLy90aHJlc2hvbGQ6IDIsIC8vbWluaW11bSBlbGVtZW50IGNvdW50XG4gICAgICAgICAgICAgICAgICBzb3VyY2U6IHZlY3RvclNvdXJjZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vdmVjdG9yTGF5ZXIgPSB1dGlscy5nZXRWZWN0b3JMYXllcihjbHVzdGVyU291cmNlLCBzdHlsZUZvckNsdXN0ZXIpO1xuXG4gICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIgPSBuZXcgb2wubGF5ZXIuQW5pbWF0ZWRDbHVzdGVyKFxuICAgICAgICAgICAgICAgICAge1x0bmFtZTogJ0NsdXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGNsdXN0ZXJTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBhIHN0eWxlIGZ1bmN0aW9uIGZvciBjbHVzdGVyIHN5bWJvbGlzYXRpb25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlRm9yQ2x1c3RlclxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ZWN0b3JMYXllciA9IHV0aWxzLmdldFZlY3RvckxheWVyKHZlY3RvclNvdXJjZSwgY29udGVudERhdGEgJiYgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY29udGVudERhdGEubG9jYXRpb25TdHlsZV0gPyBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjb250ZW50RGF0YS5sb2NhdGlvblN0eWxlXS5zdHlsZSA6IG51bGwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxheWVycy5wdXNoKHZlY3RvckxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcnJMYXllcnNbaXRlbVVpZF0uY29udGVudC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIC8vVE9ETzogcmVmYWN0b3JlbiB1bmQga8O8cnplbiFcbiAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBvdmVycGFzcyByZXF1ZXN0IHdpdGggcmVhc3NpZ25lZCBmb3J1bSBsYXllcnNcbiAgICAgICAgICAgICAgLy8gZm9ydW0gbGF5ZXJzIGNhbiBub3QgYmUgZHJhd24gdmlhIHRoZSBub3JtYWwgZHJhd0xheWVyLCBiZWNhdXNlIHRoZXkgZG8gbm90IGhhdmUgYSBVaWRcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnREYXRhICYmICh0eXBlb2Ygb2wuZm9ybWF0W2NvbnRlbnREYXRhLmZvcm1hdF0gPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzICYmIGNvbnRlbnREYXRhLmRhdGEucHJvcGVydGllcy5wcm9qZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbiA9IGNvbnRlbnREYXRhLmRhdGEucHJvcGVydGllcy5wcm9qZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb24gPSB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZlYXR1cmVzID0gKG5ldyBvbC5mb3JtYXRbY29udGVudERhdGEuZm9ybWF0XSh7fSkpLnJlYWRGZWF0dXJlcyhjb250ZW50RGF0YS5kYXRhLCB7XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogZmVhdHVyZVByb2plY3Rpb24sXG4gICAgICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogZGF0YVByb2plY3Rpb25cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBtaXNzaW5nU3R5bGVzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHVuc3R5bGVkRmVhdHVyZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZlYXR1cmVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZXNbal0uZ2V0KCdzdHlsZUlkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2ZlYXR1cmVzW2pdLmdldCgnc3R5bGVJZCcpXSAmJiBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlc1tqXS5nZXQoJ3N0eWxlSWQnKV0uc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlc1tqXS5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlc1tqXS5nZXQoJ3N0eWxlSWQnKV0uc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdTdHlsZXMucHVzaChmZWF0dXJlc1tqXS5nZXQoJ3N0eWxlSWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgdW5zdHlsZWRGZWF0dXJlcy5wdXNoKGZlYXR1cmVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZlY3RvclN0eWxlID0gc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY29udGVudERhdGEubG9jYXRpb25TdHlsZV0gJiYgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY29udGVudERhdGEubG9jYXRpb25TdHlsZV0uc3R5bGU7XG5cbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1N0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAvL1RPRE8gdGhlcmUgYXJlIHVuc3R5bGVkIGZlYXR1cmVzIGJlY2F1c2Ugc29tZSBzdHlsZXMgd2VyZSBub3QgbG9hZGVkXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZlY3RvclNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzozODU3JyxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBuZXcgb2wuZm9ybWF0Lkdlb0pTT04oKVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBjbHVzdGVyU291cmNlID0gbmV3IG9sLnNvdXJjZS5DbHVzdGVyKHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDQwLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiBjb250ZW50RGF0YS5jbHVzdGVyX3pvb20sXG5cbiAgICAgICAgICAgICAgICAgICAgLy90aHJlc2hvbGQ6IDIsIC8vbWluaW11bSBlbGVtZW50IGNvdW50XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogdmVjdG9yU291cmNlXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIgPSB1dGlscy5nZXRWZWN0b3JMYXllcihjbHVzdGVyU291cmNlLCB2ZWN0b3JTdHlsZSk7XG4gICAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YSAmJiBjb250ZW50RGF0YS5kYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLnBvcHVwID0gY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIudG9vbHRpcCA9IGNvbnRlbnREYXRhLmRhdGEucHJvcGVydGllcy50b29sdGlwO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLmxhYmVsID0gY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLm9uY2xpY2tfem9vbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci5vbmNsaWNrX3pvb20gPSBjb250ZW50RGF0YS5kYXRhLnByb3BlcnRpZXMub25jbGlja196b29tO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxheWVycy5wdXNoKHZlY3RvckxheWVyKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdGb3JtYXQgdHlwZSAnICsgY29udGVudERhdGEuZm9ybWF0ICsgJyBpbiBvbC5mb3JtYXQgbm90IGZvdW5kLicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvL25vIGNvbnRlbnREYXRhLCBtYXliZSBhIGxpbmtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIG5vcm1hbCwgbm90IG92ZXJwYXNzIGxheWVyXG4gICAgICAgICAgICAgIHNlbGYuZHJhd0xheWVyKGl0ZW1VaWQpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG5cbiAgICAgIC8vIGFkZCB2ZWN0b3IgbGF5ZXIgZ3JvdXBcbiAgICAgIGxheWVyR3JvdXAgPSBuZXcgb2wubGF5ZXIuR3JvdXAoe1xuICAgICAgICBsYXllcnM6IGxheWVyc1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFyckxheWVyc1tpdGVtVWlkXS52ZWN0b3JMYXllciA9IGxheWVyR3JvdXA7XG4gICAgICBzZWxmLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKGxheWVyR3JvdXApO1xuICAgICAgLy9zZWxmLmNvbWJpbmUoc2VsZik7XG5cbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLmFyckxheWVyc1tpdGVtVWlkXS5hc3luY19jb250ZW50ID09IDEpe1xuICAgICAgICAgIHN0eWxlRm9yQ2x1c3RlciA9IGZ1bmN0aW9uKGZlYXR1cmUsIHJlc29sdXRpb24pe1xuICAgICAgICAgICAgICB2YXIgc3R5bGVJZCxcbiAgICAgICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICAgICAgaWNvbk9mZnNldCxcbiAgICAgICAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgICAgICAgIGZpbGxjb2xvcixcbiAgICAgICAgICAgICAgICAgIGZvbnRjb2xvcjtcbiAgICAgICAgICAgICAgaWYoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSl7XG4gICAgICAgICAgICAgICAgICBpZihzdHlsZUlkID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJylbMF0uZ2V0KCdsb2NhdGlvblN0eWxlJykpe1xuICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdICYmIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLnN0eWxlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXS5zdHlsZShmZWF0dXJlLmdldCgnZmVhdHVyZXMnKVswXSxyZXNvbHV0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZighc3R5bGUpe1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0gW107XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZihmZWF0dXJlLmdldCgnZmVhdHVyZXMnKS5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgYnViYmxlLW9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgIGljb25PZmZzZXQgPSBbMCwgMF07XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGVbMF0uZ2V0SW1hZ2UoKS5nZXRSYWRpdXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzID0gcGFyc2VJbnQoc3R5bGVbMF0uZ2V0SW1hZ2UoKS5nZXRSYWRpdXMoKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25PZmZzZXQgPSBbMCwgcmFkaXVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3R5bGVbMF0uZ2V0SW1hZ2UoKS5nZXRBbmNob3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbk9mZnNldCA9IHN0eWxlWzBdLmdldEltYWdlKCkuZ2V0QW5jaG9yKCkgfHwgWzAsIDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KCc0OTc1QTgnLHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNzBcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbnRlbnREYXRhLmNsdXN0ZXJfZmlsbGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShjb250ZW50RGF0YS5jbHVzdGVyX2ZpbGxjb2xvcix7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0OiAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpWzBdLmdldCgnY2x1c3Rlcl9maWxsY29sb3InKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShmZWF0dXJlLmdldCgnZmVhdHVyZXMnKVswXS5nZXQoJ2NsdXN0ZXJfZmlsbGNvbG9yJykse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDcwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBmb250Y29sb3IgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICAgICAgICAgICAgaWYoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJylbMF0uZ2V0KCdjbHVzdGVyX2ZvbnRjb2xvcicpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpWzBdLmdldCgnY2x1c3Rlcl9mb250Y29sb3InKSx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0OiAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLil49cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBcIjYwcHggc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0xICogaWNvbk9mZnNldFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtMSAqIGljb25PZmZzZXRbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZmlsbGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbmV3IG9sLnN0eWxlLlRleHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpLmxlbmd0aC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0xICogaWNvbk9mZnNldFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtMSAqIGljb25PZmZzZXRbMV0gKyAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBvbC5zdHlsZS5GaWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGZvbnRjb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmKHN0eWxlKXtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVxdWVzdFZlY3RvclNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKHtcbiAgICAgICAgICAgICAgbG9hZGVyOiBmdW5jdGlvbiAoZXh0ZW50LCByZXNvbHV0aW9uLCBwcm9qZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgYm91bmRpbmdBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICBzdHJCb3VuZGluZ0JveCxcbiAgICAgICAgICAgICAgICAgICAgICB1cmw7XG4gICAgICAgICAgICAgICAgICBzZWxmLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5zaG93KCk7XG4gICAgICAgICAgICAgICAgICBib3VuZGluZ0FycmF5ID0gb2wucHJvai50cmFuc2Zvcm1FeHRlbnQoZXh0ZW50LCBwcm9qZWN0aW9uLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgICAgICAgICBzdHJCb3VuZGluZ0JveCA9IGJvdW5kaW5nQXJyYXlbMF0rJywnK2JvdW5kaW5nQXJyYXlbMV0rJzsnK2JvdW5kaW5nQXJyYXlbMl0rJywnK2JvdW5kaW5nQXJyYXlbM107XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5sYXllclJlcXVlc3RzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxheWVyUmVxdWVzdHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmxheWVyUmVxdWVzdHNbJ2xheWVyRGF0YVJlcXVlc3QnICsgaXRlbVVpZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGF5ZXJSZXF1ZXN0c1snbGF5ZXJEYXRhUmVxdWVzdCcgKyBpdGVtVWlkXS5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYoIXNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3NlbGYuYXJyTGF5ZXJzW2l0ZW1VaWRdLmxvY3N0eWxlXSl7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoW3NlbGYuYXJyTGF5ZXJzW2l0ZW1VaWRdLmxvY3N0eWxlXSwge2RvbmU6IGZ1bmN0aW9uKCkge319KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgc2VsZi5sYXllclJlcXVlc3RzWydsYXllckRhdGFSZXF1ZXN0JyArIGl0ZW1VaWRdID0galF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VsZi5wcm94eS5hcGlfbGF5ZXJjb250ZW50ZGF0YV91cmwgKyAnLycgKyBzZWxmLmFyckxheWVyc1tpdGVtVWlkXS5pZCArJy8nK3N0ckJvdW5kaW5nQm94LFxuICAgICAgICAgICAgICAgICAgfSkuZG9uZSggZnVuY3Rpb24gKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubGVuZ3RoID4gMCAmJiAhY29udGVudEZlYXR1cmVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXllciA9IHNlbGYuYXJyTGF5ZXJzW2l0ZW1VaWRdO1xuICAgICAgICAgICAgICAgICAgICAgIGxvb3BEYXRhOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RGF0YSA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgY29udGVudEZlYXR1cmVzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZW50RGF0YS5pZCA9PT0gY29udGVudEZlYXR1cmVzW2pdLmlkKSBjb250aW51ZSBsb29wRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDb29yZGluYXRlID0gb2wucHJvai50cmFuc2Zvcm0oW3BhcnNlRmxvYXQoY29udGVudERhdGFbJ2dlb3gnXSksIHBhcnNlRmxvYXQoY29udGVudERhdGFbJ2dlb3knXSldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBuZXcgb2wuZ2VvbS5Qb2ludChyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUocG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0SWQoY29udGVudERhdGEuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdjbHVzdGVyX3pvb20nLCBsYXllci5jbHVzdGVyLnpvb20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdjbHVzdGVyX3BvcHVwJywgbGF5ZXIuY2x1c3Rlci5wb3B1cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2NsdXN0ZXJfZmlsbGNvbG9yJywgbGF5ZXIuY2x1c3Rlci5maWxsY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdjbHVzdGVyX2ZvbnRjb2xvcicsIGxheWVyLmNsdXN0ZXIuZm9udGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnbG9jX2xpbmt1cmwnLCBsYXllci5sb2NfbGlua3VybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2hvdmVyX2xvY2F0aW9uJywgbGF5ZXIuaG92ZXJfbG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdob3Zlcl9zdHlsZScsIGxheWVyLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cCA9IGNvbnRlbnREYXRhWydwb3B1cCddID8gY29udGVudERhdGFbJ3BvcHVwJ10gOiBPYmplY3QuYXNzaWduKHt9LGxheWVyLnBvcHVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvcHVwICYmIHBvcHVwLmNvbnRlbnQgJiYgcG9wdXAuY29udGVudC5zZWFyY2ggJiYgcG9wdXAuY29udGVudC5zZWFyY2goJ2l0ZW1JZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuY29udGVudCA9IHBvcHVwLmNvbnRlbnQucmVwbGFjZSgnaXRlbUlkJyxjb250ZW50RGF0YVsnaWQnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZW50RGF0YVsnbGFiZWwnXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnbGFiZWwnLGNvbnRlbnREYXRhWydsYWJlbCddKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29udGVudERhdGFbJ3Rvb2x0aXAnXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCd0b29sdGlwJyxjb250ZW50RGF0YVsndG9vbHRpcCddKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdwb3B1cCcsIHBvcHVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnem9vbV9vbmNsaWNrJywgbGF5ZXIuem9vbV9vbmNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgndGlkJywgY29udGVudERhdGFbJ2lkJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY3N0eWxlID0gY29udGVudERhdGFbJ2xvY3N0eWxlJ10gfHwgbGF5ZXIubG9jc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2xvY2F0aW9uU3R5bGUnLCBsb2NzdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihsb2NzdHlsZSAmJiBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0gJiYgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlcy5wdXNoKGNvbnRlbnRGZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXVuc3R5bGVkRmVhdHVyZXMpe3Vuc3R5bGVkRmVhdHVyZXMgPVtdO31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighbWlzc2luZ1N0eWxlcyl7bWlzc2luZ1N0eWxlcyA9IFtdO31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ3N0eWxlSWQnLGxvY3N0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnN0eWxlZEZlYXR1cmVzLnB1c2goY29udGVudEZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdTdHlsZXNbbG9jc3R5bGVdID0gbG9jc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmKG1pc3NpbmdTdHlsZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhtaXNzaW5nU3R5bGVzLCB7ZG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGkgPSAwOyBpIDwgdW5zdHlsZWRGZWF0dXJlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZUlkID11bnN0eWxlZEZlYXR1cmVzW2ldLmdldCgnc3R5bGVJZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnN0eWxlZEZlYXR1cmVzW2ldLnNldFN0eWxlKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFZlY3RvclNvdXJjZS5hZGRGZWF0dXJlKHVuc3R5bGVkRmVhdHVyZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nU3R5bGVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RWZWN0b3JTb3VyY2UuYWRkRmVhdHVyZXMoY29udGVudEZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdHJhdGVneTogb2wubG9hZGluZ3N0cmF0ZWd5LmJib3hcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmKHRoaXMuYXJyTGF5ZXJzW2l0ZW1VaWRdLmNsdXN0ZXIpe1xuICAgICAgICAgICAgbGV0IGxheWVyID0gc2VsZi5hcnJMYXllcnNbaXRlbVVpZF07XG4gICAgICAgICAgICBsZXQgbWFwID0gc2VsZi5tYXBDb250cm9sbGVyLm1hcDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Wm9vbSA9IG1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpO1xuICAgICAgICAgICAgbGV0IGNsdXN0ZXJEaXN0YW5jZSA9IHRoaXMuYXJyTGF5ZXJzW2l0ZW1VaWRdLmNsdXN0ZXIuZGlzdGFuY2UgfHwgMjA7XG4gICAgICAgICAgICBpZiAoY3VycmVudFpvb20gPj0gbGF5ZXIuY2x1c3Rlci56b29tKSB7XG4gICAgICAgICAgICAgIGNsdXN0ZXJEaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsdXN0ZXJTb3VyY2UgPSBuZXcgb2wuc291cmNlLkNsdXN0ZXIoe1xuICAgICAgICAgICAgICBkaXN0YW5jZTogY2x1c3RlckRpc3RhbmNlLFxuICAgICAgICAgICAgICAvL3RocmVzaG9sZDogMiwgLy9taW5pbXVtIGVsZW1lbnQgY291bnRcbiAgICAgICAgICAgICAgc291cmNlOiByZXF1ZXN0VmVjdG9yU291cmNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIgPSBuZXcgb2wubGF5ZXIuQW5pbWF0ZWRDbHVzdGVyKFxuICAgICAgICAgICAgICAgICAge1x0bmFtZTogJ0NsdXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogY2x1c3RlclNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgYSBzdHlsZSBmdW5jdGlvbiBmb3IgY2x1c3RlciBzeW1ib2xpc2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlRm9yQ2x1c3RlclxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIHZlY3RvckxheWVyID0gbmV3IG9sLmxheWVyLlZlY3RvcihcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTGF5ZXInLFxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogcmVxdWVzdFZlY3RvclNvdXJjZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYXllcnMgPSBsYXllcnMgfHwgW107XG4gICAgICAgICAgbGF5ZXJzLnB1c2godmVjdG9yTGF5ZXIpO1xuICAgICAgICBsYXllckdyb3VwID0gbmV3IG9sLmxheWVyLkdyb3VwKHtcbiAgICAgICAgICAgIGxheWVyczogbGF5ZXJzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFyckxheWVyc1tpdGVtVWlkXS52ZWN0b3JMYXllciA9IGxheWVyR3JvdXA7XG4gICAgICAgIHNlbGYubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIobGF5ZXJHcm91cCk7XG5cblxuICAgICAgfVxuICAgICAgIGVsc2V7XG4gICAgICAgIHNlbGYubWFwQ29udHJvbGxlci5zcGlubmVyLnNob3coKTtcbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgIGRhdGFUeXBlOiBzZWxmLm1hcENvbnRyb2xsZXIuZGF0YS5qc29ucCA/IFwianNvbnBcIiA6IFwianNvblwiLFxuICAgICAgICAgIHVybDogc2VsZi5wcm94eS5hcGlfbGF5ZXJjb250ZW50X3VybCArICcvJyArIHNlbGYuYXJyTGF5ZXJzW2l0ZW1VaWRdLmlkLFxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgbGV0IGosXG4gICAgICAgICAgICAgICAgbmV3TG9jYXRpb25TdHlsZXM7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdMb2NhdGlvblN0eWxlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGRhdGEubGVuZ3RoOyBqICs9IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFyckxheWVyc1tpdGVtVWlkXS5jb250ZW50ID0gc2VsZi5hcnJMYXllcnNbaXRlbVVpZF0uY29udGVudCB8fCBbXTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFyckxheWVyc1tpdGVtVWlkXS5jb250ZW50LnB1c2goZGF0YVtqXSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xvY2F0aW9uU3R5bGVzLnB1c2goZGF0YVtqXS5sb2NhdGlvblN0eWxlKTtcbiAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5wcm94eS5jaGVja0xvY2F0aW9uU3R5bGVzKHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQFRPRE86IGNoZWNrIHRoaXMhXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvYWRMYXllckNvbnRlbnQoaXRlbVVpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5tYXBDb250cm9sbGVyLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuXG4gIH0gLy8gZW5kIG9mIFwibG9hZExheWVyQ29udGVudCgpXCJcblxuICBoaWRlTGF5ZXIobGF5ZXJVaWQsIGtlZXBMYXllcikge1xuXG4gICAgdmFyIGxheWVyLFxuICAgICAgaSxcbiAgICAgIGo7XG5cbiAgICBsYXllciA9IHRoaXMuYXJyTGF5ZXJzW2xheWVyVWlkXTtcbiAgICBpZiAoIWxheWVyKSB7XG4gICAgICAvL2NvbnNvbGUud2FybignQ2Fubm90IGhpZGUgdW5rbm93biBsYXllciAoJyArIGxheWVyVWlkICsgJyknKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBsYXllciBpcyBsaXN0ZWQgYXMgXCJhY3RpdmVcIlxuICAgIC8vIG90aGVyd2lzZSB0aGVyZSBpcyBub3RoaW5nIHRvIHJlbW92ZSBvciBjaGFuZ2VcbiAgICBpZiAodGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllclVpZF0pIHtcbiAgICAgIC8vIHJlbW92ZSBsYXllciBmcm9tIG1hcCAoaWYgaXQgd2FzIHZpc2libGUgYmVmb3JlKVxuICAgICAgaWYgKHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbbGF5ZXJVaWRdID09PSAndmlzaWJsZScgJiYgbGF5ZXIudmVjdG9yTGF5ZXIpIHtcbiAgICAgICAgLy8gW2luZm9dOiBkbyBub3QgdXNlIFwibGF5ZXIudmVjdG9yTGF5ZXIuc2V0VmlzaWJsZShmYWxzZSk7XCJcbiAgICAgICAgLy8gICAgICAgICBzZWUgXCJzaG93TGF5ZXIoKVwiIGZvciBtb3JlIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIobGF5ZXIudmVjdG9yTGF5ZXIpO1xuICAgICAgfVxuICAgICAgLy8gb25seSBtYXJrIGFzIFwiaW52aXNpYmxlXCIgaWYgXCJrZWVwTGF5ZXJcIiBpcyBcInRydWVcIlxuICAgICAgLy8gdGhpcyBpcyBuZWVkZWQgZm9yIHRoZSB6b29tLWJvdW5kc1xuICAgICAgaWYgKGtlZXBMYXllcikge1xuICAgICAgICB0aGlzLnByb3h5LmFjdGl2ZUxheWVySWRzW2xheWVyVWlkXSA9ICdpbnZpc2libGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbbGF5ZXJVaWRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNoaWxkcyBuZWVkZWQgdG8gYmUgY2hlY2tlZCBpbmRlcGVuZGVudCBmcm9tIGl0cyBwYXJlbnRzIHN0YXRlXG5cblxuICAgIC8vVG9EbyBsb2FkaW5nIHByb2JsZW1cbiAgICBpZiAobGF5ZXIgJiYgbGF5ZXIuaGFzQ2hpbGRzKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGF5ZXIuY2hpbGRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyKGxheWVyLmNoaWxkc1tpXS5pZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGxheWVyLmlzSW5hY3RpdmUpe1xuICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnModGhpcy5wcm94eS5ob29rX2xheWVyX3Zpc2liaWxpdHksIGxheWVyVWlkKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsYXllci5pc0luYWN0aXZlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmxheWVyUmVxdWVzdHMgJiYgdHlwZW9mIHRoaXMubGF5ZXJSZXF1ZXN0c1snbGF5ZXJfcmVxdWVzdF8nICsgbGF5ZXJVaWRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMubGF5ZXJSZXF1ZXN0c1snbGF5ZXJfcmVxdWVzdF8nICsgbGF5ZXJVaWRdID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmxheWVyUmVxdWVzdHNbJ2xheWVyX3JlcXVlc3RfJyArIGxheWVyVWlkXSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMubGF5ZXJSZXF1ZXN0c1snbGF5ZXJfcmVxdWVzdF8nICsgbGF5ZXJVaWRdO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvL3RoaXMuY29tYmluZUxheWVycyh0aGlzKTtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRDZW50ZXIoW3RoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpWzBdKzAuMDAxLHRoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpWzFdXSk7XG4gICAgLy8gaG9va3NcbiAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh0aGlzLnByb3h5Lmhvb2tfbGF5ZXJfdmlzaWJpbGl0eSwgbGF5ZXJVaWQpO1xuICB9IC8vIGVuZCBvZiBcImhpZGVMYXllcigpXCJcbiAgaGlkZUNoaWxkTGF5ZXIobGF5ZXJVaWQsIGNoaWxkVWlkKXtcbiAgICBsZXQgbGF5ZXIgPSB0aGlzLmFyckxheWVyc1tsYXllclVpZF1cbiAgICBjaGlsZFVpZCA9IGNoaWxkVWlkLnJlcGxhY2UobGF5ZXJVaWQsJycpO1xuICAgIGxldCBjaGlsZExheWVyID0gbGF5ZXIudmVjdG9yTGF5ZXIuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKVtjaGlsZFVpZF1cbiAgICBjaGlsZExheWVyLnNldCgndmlzaWJsZScsIGZhbHNlKTtcbiAgfVxuICBzaG93Q2hpbGRMYXllcihsYXllclVpZCwgY2hpbGRVaWQpe1xuICAgICAgbGV0IGxheWVyID0gdGhpcy5hcnJMYXllcnNbbGF5ZXJVaWRdXG4gICAgICBjaGlsZFVpZCA9IGNoaWxkVWlkLnJlcGxhY2UobGF5ZXJVaWQsJycpO1xuICAgICAgbGV0IGNoaWxkTGF5ZXIgPSBsYXllci52ZWN0b3JMYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpW2NoaWxkVWlkXVxuICAgICAgY2hpbGRMYXllci5zZXQoJ3Zpc2libGUnLCB0cnVlKTtcbiAgfVxuXG4gIHNob3dMYXllcihsYXllclVpZCkge1xuICAgIHZhciBsYXllcixcbiAgICAgIG1hcExheWVycyxcbiAgICAgIGFkZExheWVyLFxuICAgICAgaSxcbiAgICAgIGosXG4gICAgICBhY3RpdmVGb3Jab29tO1xuXG4gICAgYWN0aXZlRm9yWm9vbSA9IHRoaXMucHJveHkuY2hlY2tMYXllcklzQWN0aXZlRm9yWm9vbShsYXllclVpZCk7XG4gICAgbGF5ZXIgPSB0aGlzLmFyckxheWVyc1tsYXllclVpZF07XG5cbiAgICBpZiAoYWN0aXZlRm9yWm9vbSkge1xuICAgICAgaWYgKHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbbGF5ZXJVaWRdICE9PSAndmlzaWJsZScpIHtcbiAgICAgICAgLy9pZiAobGF5ZXIubGlua19pZCkge1xuICAgICAgICAvLyAgdGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllci5saW5rX2lkXSA9ICd2aXNpYmxlJztcbiAgICAgICAgLy99IGVsc2VcbiAgICAgICAgaWYgKGxheWVyICYmIGxheWVyLnZlY3RvckxheWVyKSB7XG4gICAgICAgICAgLy8gW2luZm9dOiBkbyBub3QgdXNlOiBcImxheWVyLnZlY3RvckxheWVyLnNldFZpc2libGUodHJ1ZSk7XCJcbiAgICAgICAgICAvLyAgICAgICAgIEFsd2F5cyBhZGQgYW5kIHJlbW92ZSBMYXllcnMsIHNvIHRoYXQgdGhlIGxhc3RcbiAgICAgICAgICAvLyAgICAgICAgIGNsaWNrZWQgbGF5ZXIgaXMgYWx3YXlzIG9udG9wIG9mIHRoZSBvdGhlcnMuXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBsYXllciBpcyByZWFsbHkgbm90IGFscmVhZHkgb24gdGhlIG1hcFxuICAgICAgICAgIC8vIHRvIHByZXZlbnQgYWRkaW5nIHRoZSBzYW1lIGxheWVyIG11bHRpcGxlIHRpbWVzXG4gICAgICAgICAgYWRkTGF5ZXIgPSB0cnVlO1xuICAgICAgICAgIG1hcExheWVycyA9IHRoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0TGF5ZXJzKCk7XG4gICAgICAgICAgbWFwTGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IGxheWVyLnZlY3RvckxheWVyKSB7XG4gICAgICAgICAgICAgIGFkZExheWVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGFkZExheWVyKSB7XG4gICAgICAgICAgICBpZihsYXllci52ZWN0b3JMYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpWzBdICYmIGxheWVyLnZlY3RvckxheWVyLmdldExheWVycygpLmdldEFycmF5KClbMF0ucG9wdXAgJiYgbGF5ZXIudmVjdG9yTGF5ZXIuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKVswXS5wb3B1cC5zaG93UG9wdXBPbkFjdGl2ZSl7XG4gICAgICAgICAgICAgIGM0Zy5tYXBzLnBvcHVwLiRjb250ZW50Lmh0bWwoJycpO1xuICAgICAgICAgICAgICBjNGcubWFwcy5wb3B1cC4kcG9wdXAuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkFDVElWRSkuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkxPQURJTkcpO1xuICAgICAgICAgICAgICBjNGcubWFwcy5wb3B1cC5zcGlubmVyLnNob3coKTtcbiAgICAgICAgICAgICAgdmFyIHBvcHVwSW5mb3MgPSBsYXllci52ZWN0b3JMYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpWzBdLnBvcHVwO1xuICAgICAgICAgICAgICB2YXIgZmVhdHVyZXMgPSBsYXllci52ZWN0b3JMYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpWzBdLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICAgICAgICAgIHZhciBjb29yZCA9IGZlYXR1cmVzWycwJ10uZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgICAgICBpZiAocG9wdXBJbmZvcy5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqUG9wdXAgPSB7fTtcbiAgICAgICAgICAgICAgICBvYmpQb3B1cC5wb3B1cCA9IHBvcHVwSW5mb3M7XG4gICAgICAgICAgICAgICAgb2JqUG9wdXAuZmVhdHVyZSA9IGZlYXR1cmVzWycwJ107XG4gICAgICAgICAgICAgICAgb2JqUG9wdXAubGF5ZXIgPSBsYXllci52ZWN0b3JMYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpWzBdO1xuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIHBvcHVwIGhvb2sgZm9yIHBsdWdpbiBzcGVjaWZpYyBwb3B1cCBjb250ZW50XG4gICAgICAgICAgICAgICAgaWYgKGM0Zy5tYXBzLmhvb2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYzRnLm1hcHMuaG9vay5wcm94eV9maWxsUG9wdXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3h5LnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgdXJsOiBzZWxmLmFwaV9pbmZvd2luZG93X3VybCArICcvJyArIHBvcHVwSW5mb3MuY29udGVudCxcbiAgICAgICAgICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3B1cEluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHBvcHVwSW5mb3MuYXN5bmMsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgIHBvcHVwOiBwb3B1cEluZm9zLnBvcHVwLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmdfbGluazogcG9wdXBJbmZvcy5yb3V0aW5nX2xpbmtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqUG9wdXAgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgb2JqUG9wdXAucG9wdXAgPSBwb3B1cEluZm87XG4gICAgICAgICAgICAgICAgICAgIG9ialBvcHVwLmZlYXR1cmUgPSBmZWF0dXJlc1snMCddO1xuICAgICAgICAgICAgICAgICAgICBvYmpQb3B1cC5sYXllciA9IGxheWVyO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIHBvcHVwIGhvb2sgZm9yIHBsdWdpbiBzcGVjaWZpYyBwb3B1cCBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChjNGcubWFwcy5ob29rICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGM0Zy5tYXBzLmhvb2sucHJveHlfZmlsbFBvcHVwID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2sucHJveHlfZmlsbFBvcHVwLCBvYmpQb3B1cCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihsYXllci52ZWN0b3JMYXllcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9hZExheWVyQ29udGVudChsYXllclVpZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllclVpZF0gPSAndmlzaWJsZSc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9pZiAobGF5ZXIubGlua19pZCkge1xuICAgICAgICAvLyAgdGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllci5saW5rX2lkXSA9ICdpbnZpc2libGUnO1xuICAgICAgICAvL30gZWxzZSB7XG4gICAgICAgIC8vdGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllclVpZF0gPSAnaW52aXNpYmxlJztcbiAgICAgICAgLy99XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxheWVyICYmIGxheWVyLmhhc0NoaWxkcyAmJiBhY3RpdmVGb3Jab29tKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGF5ZXIuY2hpbGRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuc2hvd0xheWVyKGxheWVyLmNoaWxkc1tpXS5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxheWVyICYmIGFjdGl2ZUZvclpvb20pIHtcbiAgICAgIGxheWVyLmlzSW5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJveHkucmVxdWVzdEZ1bmN0aW9uc1sncmVxdWVzdF8nICsgbGF5ZXJVaWRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgIGlmICh0aGlzLmxheWVyUmVxdWVzdHMgJiYgdHlwZW9mIHRoaXMubGF5ZXJSZXF1ZXN0c1snbGF5ZXJfcmVxdWVzdF8nICsgbGF5ZXJVaWRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHRoaXMubGF5ZXJSZXF1ZXN0c1snbGF5ZXJfcmVxdWVzdF8nICsgbGF5ZXJVaWRdID0gd2luZG93LnNldEludGVydmFsKHRoaXMucHJveHkucmVxdWVzdEZ1bmN0aW9uc1sncmVxdWVzdF8nICsgbGF5ZXJVaWRdLmZ1bmN0aW9uLCB0aGlzLnByb3h5LnJlcXVlc3RGdW5jdGlvbnNbJ3JlcXVlc3RfJyArIGxheWVyVWlkXS5pbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgLy90aGlzLmNvbWJpbmVMYXllcnModGhpcyk7XG4gICAgLy8gaG9va3NcbiAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh0aGlzLnByb3h5Lmhvb2tfbGF5ZXJfdmlzaWJpbGl0eSwgbGF5ZXJVaWQpO1xuICB9IC8vIGVuZCBvZiBcInNob3dMYXllcigpXCJcblxuICBkcmF3TGF5ZXIoaXRlbVVpZCkge1xuXG4gICAgdmFyIHNlbGYsXG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudENvbnRlbnQsXG4gICAgICBsYXllcnMsXG4gICAgICBpLFxuICAgICAgaixcbiAgICAgIG1pc3NpbmdTdHlsZXMsXG4gICAgICB1bnN0eWxlZEZlYXR1cmVzLFxuICAgICAgZmVhdHVyZXMsXG4gICAgICBkYXRhUHJvamVjdGlvbixcbiAgICAgIGZlYXR1cmVQcm9qZWN0aW9uLFxuICAgICAgdmVjdG9yU291cmNlLFxuICAgICAgdmVjdG9yTGF5ZXIsXG4gICAgICB2ZWN0b3JTdHlsZSxcbiAgICAgIGxheWVyR3JvdXA7XG5cbiAgICBzZWxmID0gdGhpcztcbiAgICBlbGVtZW50ID0gdGhpcy5hcnJMYXllcnNbaXRlbVVpZF07XG5cbiAgICAvLyBpZiAoIWVsZW1lbnQuaGlkZSkge1xuXG4gICAgbGF5ZXJzID0gW107XG4gICAgaWYgKGVsZW1lbnQuY29udGVudCAmJiBlbGVtZW50LmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnQuY29udGVudC5sZW5ndGg7IGkgKz0gMSkge1xuXG4gICAgICAgIGVsZW1lbnRDb250ZW50ID0gZWxlbWVudC5jb250ZW50W2ldO1xuICAgICAgICBpZiAoIWVsZW1lbnRDb250ZW50KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvbC5mb3JtYXRbZWxlbWVudENvbnRlbnQuZm9ybWF0XSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAvLyBpZiAoZWxlbWVudC5jb250ZW50W2ldLm9yaWdUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgIC8vICAgZmVhdHVyZVByb2plY3Rpb24gPSB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAvLyAgIGZlYXR1cmVQcm9qZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzICYmIGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy5wcm9qZWN0aW9uKSB7XG4gICAgICAgICAgICBkYXRhUHJvamVjdGlvbiA9IGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy5wcm9qZWN0aW9uO1xuICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb24gPSB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5mb3JtYXQgPT09IFwiT1NNWE1MXCIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YS5nZW9tZXRyeSAmJiBlbGVtZW50Q29udGVudC5kYXRhLmdlb21ldHJ5LnR5cGUgPT09IFwiQ2lyY2xlXCIpIHtcbiAgICAgICAgICAgIC8vIGRyYXcgY2lyY2xlIGdlb21ldHJpZXNcbiAgICAgICAgICAgIGZlYXR1cmVzID0gW107XG4gICAgICAgICAgICBsZXQgZmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKFxuICAgICAgICAgICAgICBuZXcgb2wuZ2VvbS5DaXJjbGUoXG4gICAgICAgICAgICAgICAgb2wucHJvai5mcm9tTG9uTGF0KGVsZW1lbnRDb250ZW50LmRhdGEuZ2VvbWV0cnkuY2VudGVyKSxcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGVsZW1lbnRDb250ZW50LmRhdGEuZ2VvbWV0cnkucmFkaXVzKVxuICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIGZlYXR1cmUuc2V0KCdzdHlsZUlkJywgZWxlbWVudENvbnRlbnQubG9jYXRpb25TdHlsZSk7XG4gICAgICAgICAgICBmZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyByZW1haW5pbmcgZ2VvbWV0cmllc1xuICAgICAgICAgICAgZmVhdHVyZXMgPSAobmV3IG9sLmZvcm1hdFtlbGVtZW50Q29udGVudC5mb3JtYXRdKHt9KSkucmVhZEZlYXR1cmVzKGVsZW1lbnRDb250ZW50LmRhdGEsIHtcbiAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IGZlYXR1cmVQcm9qZWN0aW9uLFxuICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogZGF0YVByb2plY3Rpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1pc3NpbmdTdHlsZXMgPSBbXTtcbiAgICAgICAgICB1bnN0eWxlZEZlYXR1cmVzID0gW107XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IGZlYXR1cmVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAvLyBmZWF0dXJlc1tqXS5zZXRJZCh1dGlscy5nZXRVbmlxdWVJZCgpKTtcbiAgICAgICAgICAgIC8vIGZlYXR1cmVzW2pdLnNldCgncHJvamVjdGlvbicsIHRoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFByb2plY3Rpb24oKSk7XG4gICAgICAgICAgICAvLyBmZWF0dXJlc1tqXS5zZXQoJ3Byb2plY3Rpb24nLCBcIkVQU0c6NDMyNlwiKTtcbiAgICAgICAgICAgIGZlYXR1cmVzW2pdLnNldCgnaG92ZXJfbG9jYXRpb24nLCBlbGVtZW50Q29udGVudC5ob3Zlcl9sb2NhdGlvbik7XG4gICAgICAgICAgICBmZWF0dXJlc1tqXS5zZXQoJ2hvdmVyX3N0eWxlJywgZWxlbWVudENvbnRlbnQuaG92ZXJfc3R5bGUpO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmVzW2pdLmdldCgnc3R5bGVJZCcpKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlc1tqXS5nZXQoJ3N0eWxlSWQnKV0gJiYgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbZmVhdHVyZXNbal0uZ2V0KCdzdHlsZUlkJyldLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZXNbal0uc2V0U3R5bGUoc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbZmVhdHVyZXNbal0uZ2V0KCdzdHlsZUlkJyldLnN0eWxlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nU3R5bGVzLnB1c2goZmVhdHVyZXNbal0uZ2V0KCdzdHlsZUlkJykpO1xuICAgICAgICAgICAgICAgIHVuc3R5bGVkRmVhdHVyZXMucHVzaChmZWF0dXJlc1tqXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudENvbnRlbnQubG9jYXRpb25TdHlsZSkge1xuICAgICAgICAgICAgICAvLyBmZWF0dXJlIGhhcyBubyBwcm9wZXJ0eSBzdHlsZUlkLCBidXQgZWxlbWVudENvbnRlbnQgaGFzIGxvY2F0aW9uc3R5bGVcbiAgICAgICAgICAgICAgaWYgKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdICYmIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgLy9mZWF0dXJlc1tqXS5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tlbGVtZW50Q29udGVudC5sb2NhdGlvblN0eWxlXS5zdHlsZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZ1N0eWxlcy5wdXNoKGVsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGUpO1xuICAgICAgICAgICAgICAgIHVuc3R5bGVkRmVhdHVyZXMucHVzaChmZWF0dXJlc1tqXSk7XG4gICAgICAgICAgICAgICAgZmVhdHVyZXNbal0uc2V0KCdzdHlsZUlkJywgZWxlbWVudENvbnRlbnQubG9jYXRpb25TdHlsZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2ZWN0b3JTdHlsZSA9IHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdICYmIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdLnN0eWxlO1xuICAgICAgICAgIGlmKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdICYmIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdLmZuU3R5bGVGdW5jdGlvbikge1xuXG4gICAgICAgICAgICB2ZWN0b3JTdHlsZSA9IEZ1bmN0aW9uKFwiZmVhdHVyZVwiLFwiZGF0YVwiLFwibWFwXCIsc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbZWxlbWVudENvbnRlbnQubG9jYXRpb25TdHlsZV0uZm5TdHlsZUZ1bmN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1pc3NpbmdTdHlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMobWlzc2luZ1N0eWxlcywge1xuICAgICAgICAgICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGYsXG4gICAgICAgICAgICAgICAgICBmTGF5ZXJHcm91cCxcbiAgICAgICAgICAgICAgICAgIGZMYXllcnMsXG4gICAgICAgICAgICAgICAgICBmVmVjdG9yTGF5ZXIsXG4gICAgICAgICAgICAgICAgICBmVmVjdG9yU291cmNlO1xuICAgICAgICAgICAgICAgIGZvciAoZiA9IDA7IGYgPCB1bnN0eWxlZEZlYXR1cmVzLmxlbmd0aDsgZiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdW5zdHlsZWRGZWF0dXJlc1tmXS5nZXQoJ3N0eWxlSWQnKV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zdHlsZWRGZWF0dXJlc1tmXS5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t1bnN0eWxlZEZlYXR1cmVzW2ZdLmdldCgnc3R5bGVJZCcpXS5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBmVmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe1xuICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzozODU3JyxcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IG5ldyBvbC5mb3JtYXQuR2VvSlNPTigpXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgZlZlY3RvckxheWVyID0gdXRpbHMuZ2V0VmVjdG9yTGF5ZXIoZlZlY3RvclNvdXJjZSwgdmVjdG9yU3R5bGUpO1xuXG4gICAgICAgICAgICAgICAgICAvLyBsYXllcnMucHVzaCh2ZWN0b3JMYXllcik7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5hcnJMYXllcnNbaXRlbVVpZF0uZlZlY3RvckxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZkxheWVyR3JvdXAgPSBzZWxmLmFyckxheWVyc1tpdGVtVWlkXS52ZWN0b3JMYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICBmTGF5ZXJzID0gZkxheWVyR3JvdXAuZ2V0TGF5ZXJzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YSAmJiBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy5wb3B1cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZlZlY3RvckxheWVyLnBvcHVwID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZlZlY3RvckxheWVyLnRvb2x0aXAgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmVmVjdG9yTGF5ZXIubGFiZWwgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy56b29tX29uY2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZWZWN0b3JMYXllci56b29tX29uY2xpY2sgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgZkxheWVycy5wdXNoKGZWZWN0b3JMYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgZkxheWVyR3JvdXAuc2V0TGF5ZXJzKGZMYXllcnMpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YSAmJiBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy5wb3B1cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZlZlY3RvckxheWVyLnBvcHVwID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZlZlY3RvckxheWVyLnRvb2x0aXAgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmVmVjdG9yTGF5ZXIubGFiZWwgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy56b29tX29uY2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZWZWN0b3JMYXllci56b29tX29uY2xpY2sgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGZMYXllckdyb3VwID0gbmV3IG9sLmxheWVyLkdyb3VwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJzOiBbZlZlY3RvckxheWVyXVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXJyTGF5ZXJzW2l0ZW1VaWRdLnZlY3RvckxheWVyID0gZkxheWVyR3JvdXA7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihmTGF5ZXJHcm91cCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuc3BsaXRfZ2VvanNvbikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6Mzg1NycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IG5ldyBvbC5mb3JtYXQuR2VvSlNPTigpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2ZWN0b3JTb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyID0gdXRpbHMuZ2V0VmVjdG9yTGF5ZXIodmVjdG9yU291cmNlLCB2ZWN0b3JTdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGo8IGVsZW1lbnQuZ2VvanNvbl9hdHRyaWJ1dGVzLnNwbGl0KCcsJykubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLnNldChlbGVtZW50Lmdlb2pzb25fYXR0cmlidXRlcy5zcGxpdCgnLCcpW2pdLGZlYXR1cmVzW2ldLmdldChlbGVtZW50Lmdlb2pzb25fYXR0cmlidXRlcy5zcGxpdCgnLCcpW2pdKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXllcnMucHVzaCh2ZWN0b3JMYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMucG9wdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLnBvcHVwID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIudG9vbHRpcCA9IGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy50b29sdGlwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLmxhYmVsID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci56b29tX29uY2xpY2sgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB2ZWN0b3JTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3Rvcih7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6Mzg1NycsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogbmV3IG9sLmZvcm1hdC5HZW9KU09OKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2ZWN0b3JMYXllciA9IHV0aWxzLmdldFZlY3RvckxheWVyKHZlY3RvclNvdXJjZSwgdmVjdG9yU3R5bGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDb250ZW50LmRhdGEgJiYgZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMucG9wdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLnBvcHVwID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIudG9vbHRpcCA9IGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy50b29sdGlwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLmxhYmVsID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci56b29tX29uY2xpY2sgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGF5ZXJzLnB1c2godmVjdG9yTGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybignRm9ybWF0IHR5cGUgJyArIGVsZW1lbnRDb250ZW50LmZvcm1hdCArICcgaW4gb2wuZm9ybWF0IG5vdCBmb3VuZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGF5ZXJHcm91cCA9IG5ldyBvbC5sYXllci5Hcm91cCh7XG4gICAgICBsYXllcnM6IGxheWVyc1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJMYXllcnNbaXRlbVVpZF0udmVjdG9yTGF5ZXIgPSBsYXllckdyb3VwO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIobGF5ZXJHcm91cCk7XG4gICAgaWYobGF5ZXJHcm91cC5nZXRMYXllcnMoKS5nZXRBcnJheSgpWzBdICYmIGxheWVyR3JvdXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKVswXS5wb3B1cCAmJiBsYXllckdyb3VwLmdldExheWVycygpLmdldEFycmF5KClbMF0ucG9wdXAuc2hvd1BvcHVwT25BY3RpdmUpe1xuICAgICAgYzRnLm1hcHMucG9wdXAuJGNvbnRlbnQuaHRtbCgnJyk7XG4gICAgICBjNGcubWFwcy5wb3B1cC4kcG9wdXAuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkFDVElWRSkuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkxPQURJTkcpO1xuICAgICAgYzRnLm1hcHMucG9wdXAuc3Bpbm5lci5zaG93KCk7XG4gICAgICB2YXIgcG9wdXBJbmZvcyA9IGxheWVyR3JvdXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKVswXS5wb3B1cDtcbiAgICAgIHZhciBsYXllciA9IGxheWVyR3JvdXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKVswXTtcbiAgICAgIHZhciBjb29yZCA9IGZlYXR1cmVzWycwJ10uZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgaWYgKHBvcHVwSW5mb3MuYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgIHZhciBvYmpQb3B1cCA9IHt9O1xuICAgICAgICBvYmpQb3B1cC5wb3B1cCA9IHBvcHVwSW5mb3M7XG4gICAgICAgIG9ialBvcHVwLmZlYXR1cmUgPSBmZWF0dXJlc1snMCddO1xuICAgICAgICBvYmpQb3B1cC5sYXllciA9IGxheWVyO1xuICAgICAgICAvLyBDYWxsIHRoZSBwb3B1cCBob29rIGZvciBwbHVnaW4gc3BlY2lmaWMgcG9wdXAgY29udGVudFxuICAgICAgICBpZiAoYzRnLm1hcHMuaG9vayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYucHJveHkuc2V0UG9wdXAob2JqUG9wdXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICB1cmw6IHNlbGYuYXBpX2luZm93aW5kb3dfdXJsICsgJy8nICsgcG9wdXBJbmZvcy5jb250ZW50LFxuICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgcG9wdXBJbmZvID0ge1xuICAgICAgICAgICAgICBhc3luYzogcG9wdXBJbmZvcy5hc3luYyxcbiAgICAgICAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxuICAgICAgICAgICAgICBwb3B1cDogcG9wdXBJbmZvcy5wb3B1cCxcbiAgICAgICAgICAgICAgcm91dGluZ19saW5rOiBwb3B1cEluZm9zLnJvdXRpbmdfbGlua1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIG9ialBvcHVwID0ge307XG4gICAgICAgICAgICBvYmpQb3B1cC5wb3B1cCA9IHBvcHVwSW5mbztcbiAgICAgICAgICAgIG9ialBvcHVwLmZlYXR1cmUgPSBmZWF0dXJlc1snMCddO1xuICAgICAgICAgICAgb2JqUG9wdXAubGF5ZXIgPSBsYXllcjtcblxuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcG9wdXAgaG9vayBmb3IgcGx1Z2luIHNwZWNpZmljIHBvcHVwIGNvbnRlbnRcbiAgICAgICAgICAgIGlmIChjNGcubWFwcy5ob29rICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGM0Zy5tYXBzLmhvb2sucHJveHlfZmlsbFBvcHVwID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnByb3h5LnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vaG9va3NcbiAgICAvLyB9XG4gIH0gLy8gZW5kIG9mIFwiZHJhd0xheWVyKClcIlxuXG4gIGRyYXdMYXllckluaXRpYWwoKSB7XG4gICAgdmFyIGxheWVySWQsXG4gICAgICBsYXllcjtcblxuICAgIGZvciAobGF5ZXJJZCBpbiB0aGlzLnByb3h5LmFjdGl2ZUxheWVySWRzKSB7XG4gICAgICBpZiAodGhpcy5wcm94eS5hY3RpdmVMYXllcklkcy5oYXNPd25Qcm9wZXJ0eShsYXllcklkKSkge1xuICAgICAgICB0aGlzLnNob3dMYXllcihsYXllcklkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgbCBpbiB0aGlzLmFyckxheWVycykge1xuICAgICAgaWYgKHRoaXMuYXJyTGF5ZXJzLmhhc093blByb3BlcnR5KGwpKSB7XG4gICAgICAgIGxheWVyID0gdGhpcy5hcnJMYXllcnNbbF07XG4gICAgICAgIGlmIChsYXllci5oaWRlID09PSBcIjFcIikge1xuICAgICAgICAgIHRoaXMuaGlkZUxheWVyKGxheWVyLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBlbmQgb2YgXCJkcmF3TGF5ZXJJbml0aWFsKClcIlxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbGF5ZXItY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBDNGdMYXllcntcbiAgXG4gIGNvbnN0cnVjdG9yKGxheWVyQXJyKSB7XG4gICAgdGhpcy5pZCA9IGxheWVyQXJyWydpZCddO1xuICAgIHRoaXMucGlkID0gbGF5ZXJBcnJbJ3BpZCddO1xuICAgIHRoaXMuYXN5bmNfY29udGVudCA9IGxheWVyQXJyWydhc3luY19jb250ZW50J107XG4gICAgdGhpcy5jb250ZW50ID0gbGF5ZXJBcnJbJ2NvbnRlbnQnXTtcbiAgICB0aGlzLmNzc0NsYXNzID0gbGF5ZXJBcnJbJ2Nzc0NsYXNzJ107XG4gICAgdGhpcy5oaWRlID0gbGF5ZXJBcnJbJ2hpZGUnXTtcbiAgICB0aGlzLmhpZGVfY2hpbGQgPSBsYXllckFyclsnaGlkZV9jaGlsZCddO1xuICAgIHRoaXMudHlwZSA9IGxheWVyQXJyWyd0eXBlJ107XG4gICAgdGhpcy5jbHVzdGVyID0gbGF5ZXJBcnJbJ2NsdXN0ZXInXTtcbiAgICB0aGlzLnpvb20gPSBsYXllckFyclsnem9vbSddO1xuICAgIHRoaXMuem9vbV9sb2NhdGlvbnMgPSBsYXllckFyclsnem9vbV9sb2NhdGlvbnMnXTtcbiAgICB0aGlzLmRpc3BsYXkgPSBsYXllckFyclsnZGlzcGxheSddO1xuICAgIHRoaXMuaGFzQ2hpbGRzID0gbGF5ZXJBcnJbJ2hhc0NoaWxkcyddO1xuICAgIHRoaXMuY2hpbGRzID0gbGF5ZXJBcnJbJ2NoaWxkcyddO1xuICAgIHRoaXMuY2hpbGRzQ291bnQgPSBsYXllckFyclsnY2hpbGRzQ291bnQnXTtcbiAgICB0aGlzLnJlbmRlclNwZWNpYWwgPSBsYXllckFyclsncmVuZGVyU3BlY2lhbCddO1xuICAgIHRoaXMuZWRpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMudHlwZSA9IGxheWVyQXJyWyd0eXBlJ107XG4gICAgdGhpcy5sb2NzdHlsZSA9IGxheWVyQXJyWydsb2NzdHlsZSddO1xuICAgIHRoaXMubmFtZSA9IGxheWVyQXJyWyduYW1lJ107XG4gICAgdGhpcy50YWJJZCA9IGxheWVyQXJyWyd0YWJJZCddO1xuICAgIHRoaXMuc3BsaXRfZ2VvanNvbiA9IGxheWVyQXJyWydzcGxpdF9nZW9qc29uJ107XG4gICAgdGhpcy5nZW9qc29uX2F0dHJpYnV0ZXMgPSBsYXllckFyclsnZ2VvanNvbl9hdHRyaWJ1dGVzJ107XG4gICAgdGhpcy5nZW9qc29uX3pvb20gPSBsYXllckFyclsnZ2VvanNvbl96b29tJ107XG4gICAgdGhpcy5sYXllcm5hbWUgPSBsYXllckFyclsnbGF5ZXJuYW1lJ107XG4gICAgdGhpcy52aXNpYmxlQ2hpbGRzID0gZmFsc2U7XG4gICAgdGhpcy52ZWN0b3JMYXllciA9IG51bGw7XG4gICAgdGhpcy5oaWRlV2hlbkluVGFiID0gbGF5ZXJBcnJbJ2hpZGVfd2hlbl9pbl90YWInXTtcblxuICAgIGlmIChsYXllckFyci5wcm9qZWN0SWQpIHtcbiAgICAgIHRoaXMucHJvamVjdElkID0gbGF5ZXJBcnIucHJvamVjdElkO1xuICAgIH1cbiAgICBpZihsYXllckFyci5wb3B1cCl7XG4gICAgICB0aGlzLnBvcHVwID0gbGF5ZXJBcnIucG9wdXA7XG4gICAgfVxuICAgIHRoaXMuYXdlc29tZWljb24gPSBsYXllckFyclsnYXdlc29tZWljb24nXVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbGF5ZXIuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnN0YW50ID0gdGhpcy5jNGcubWFwcy5jb25zdGFudCB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDU1MgY29uc3RhbnRzXG4gICAqL1xuICBjNGcubWFwcy5jb25zdGFudC5jc3MgPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5jc3MsIHtcblxuICAgIE9QRU46ICdjNGctb3BlbicsXG4gICAgQ0xPU0U6ICdjNGctY2xvc2UnLFxuICAgIENMT1NFQUJMRTogJ2M0Zy1jbG9zZWFibGUnLFxuICAgIEVOQUJMRUQ6ICdjNGctZW5hYmxlZCcsXG4gICAgRElTQUJMRUQ6ICdjNGctZGlzYWJsZWQnLFxuICAgIEhJREU6ICdjNGctaGlkZScsXG4gICAgSUNPTjogJ2M0Zy1pY29uJyxcbiAgICBDT05UUk9MOiAnYzRnLWNvbnRyb2wnLFxuICAgIENPUFk6ICdjNGctY29weScsXG4gICAgUkVGUkVTSDogJ2M0Zy1yZWZyZXNoJyxcbiAgICBBQ1RJVkU6ICdjNGctYWN0aXZlJyxcbiAgICBJTkFDVElWRTogJ2M0Zy1pbmFjdGl2ZScsXG4gICAgTE9BRElORzogJ2M0Zy1sb2FkaW5nJyxcbiAgICBBTklNQVRJT05fU1BJTjogJ2M0Zy1hbmltYXRpb24tc3BpbicsXG4gICAgTEFSR0U6ICdjNGctbGFyZ2UnLFxuICAgIFNNQUxMOiAnYzRnLXNtYWxsJyxcbiAgICBIT1JJWk9OVEFMOiAnYzRnLWhvcml6b250YWwnLFxuICAgIFZFUlRJQ0FMOiAnYzRnLXZlcnRpY2FsJyxcblxuICAgIEFUVFJJQlVUSU9OX0xPR086ICdjNGctYXR0cmlidXRpb24tbG9nbycsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVEw6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX1RSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1yaWdodCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkw6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JMX1NVQjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdC1zdWInLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1yaWdodCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVDogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9pbnQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQ6ICdjNGctZHJhdy1jb250ZW50LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkc6ICdjNGctZHJhdy1jb250ZW50LWxpbmUnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTjogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9seWdvbicsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEU6ICdjNGctZHJhdy1jb250ZW50LWNpcmNsZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUOiAnYzRnLWRyYXctY29udGVudC1wcm9qZWN0JyxcbiAgICBFRElUT1JfRFJBV19UUklHR0VSOiAnYzRnLWRyYXctdHJpZ2dlcicsXG4gICAgRURJVE9SX0NPTlRFTlRfU0VMRUNUOiAnYzRnLWNvbnRlbnQtc2VsZWN0JyxcbiAgICBFRElUT1JfRFJBV19PUFRJT05TOiAnYzRnLWVkaXRvci1kcmF3LW9wdGlvbnMnLFxuICAgIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnYzRnLWVkaXRvci1mZWF0dXJlLWFwcGx5JyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdjNGctZWRpdG9yLWZlYXR1cmUtZGVsZXRlJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdjNGctZWRpdG9yLWZlYXR1cmUtbW9kaWZ5JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2ludCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1mcmVlaGFuZCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIEdFT1NFQVJDSDogJ2M0Zy1nZW9zZWFyY2gnLFxuICAgIEdFT1NFQVJDSF9XUkFQUEVSOiAnYzRnLWdlb3NlYXJjaC13cmFwcGVyJyxcbiAgICBHRU9TRUFSQ0hfVFJJR0dFUjogJ2M0Zy1nZW9zZWFyY2gtdHJpZ2dlcicsXG4gICAgR0VPU0VBUkNIX1NUQVJUOiAnYzRnLWdlb3NlYXJjaC1zdGFydCcsXG4gICAgR1JBVElDVUxFOiAnYzRnLWdyYXRpY3VsZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1zZWxlY3QnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1saW5lJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctcG9seWdvbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctY2lyY2xlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBQUklOVDonYzRnLXByaW50JyxcbiAgICBJTkZPUEFHRV9WSUVXX1RSSUdHRVI6ICdjNGctaW5mb3BhZ2Utdmlldy10cmlnZ2VyJyxcbiAgICBJTkZPUEFHRTogJ2M0Zy1pbmZvcGFnZScsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hZGRpdGlvbmFscGFuZWwtdmlldy10cmlnZ2VyJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdjNGctYWRkaXRpb25hbHBhbmVsJyxcbiAgICBBQ0NPVU5UX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hY2NvdW50LXZpZXctdHJpZ2dlcicsXG4gICAgQUNDT1VOVDogJ2M0Zy1hY2NvdW50JyxcbiAgICBPVkVSVklFV01BUDogJ2M0Zy1vdmVydmlld21hcCcsXG4gICAgT1ZFUlZJRVdNQVBfV1JBUFBFUjogJ2M0Zy1vdmVydmlld21hcC13cmFwcGVyJyxcbiAgICBHRU9CT09LTUFSS1M6ICdjNGctZ2VvYm9va21hcmtzJyxcbiAgICBQRVJNQUxJTks6ICdjNGctcGVybWFsaW5rJyxcbiAgICBQRVJNQUxJTktfUE9QVVA6ICdjNGctcGVybWFsaW5rLXBvcHVwJyxcbiAgICBQT1BVUF9DTE9TRTogJ2M0Zy1wb3B1cC1jbG9zZScsXG4gICAgUE9QVVBfUk9VVEVfV1JBUFBFUjogJ2M0Zy1wb3B1cC1yb3V0ZS13cmFwcGVyJyxcbiAgICBQT1BVUF9ST1VURV9GUk9NOiAnYzRnLXBvcHVwLXJvdXRlLWZyb20nLFxuICAgIFBPUFVQX1JPVVRFX1RPOiAnYzRnLXBvcHVwLXJvdXRlLXRvJyxcbiAgICBQT1JUU0lERTogJ2M0Zy1wb3J0c2lkZScsXG4gICAgUE9SVFNJREVfQ09OVEFJTkVSOiAnYzRnLXBvcnRzaWRlLWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQ09OVFJPTDogJ2M0Zy1wb3J0c2lkZS1jb250cm9sJyxcbiAgICBQT1JUU0lERV9XUkFQUEVSOiAnYzRnLXBvcnRzaWRlLXdyYXBwZXInLFxuICAgIFBPUlRTSURFX1RJVExFQkFSOiAnYzRnLXBvcnRzaWRlLXRpdGxlYmFyJyxcbiAgICBQT1JUU0lERV9UT1BfVE9PTEJBUjogJ2M0Zy1wb3J0c2lkZS10b3AtdG9vbGJhcicsXG4gICAgUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGVudC1jb250YWluZXInLFxuICAgIFBPUlRTSURFX0JPVFRPTV9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLWJvdHRvbS10b29sYmFyJyxcbiAgICBQT1JUU0lERV9TVEFUVVNCQVI6ICdjNGctcG9ydHNpZGUtc3RhdHVzYmFyJyxcbiAgICBQT1JUU0lERV9WSUVXVFJJR0dFUkJBUjogJ2M0Zy1wb3J0c2lkZS12aWV3dHJpZ2dlcmJhcicsXG4gICAgUE9SVFNJREVfSEVBRExJTkU6ICdjNGctcG9ydHNpZGUtaGVhZGxpbmUnLFxuICAgIFBPUlRTSURFX0JVVFRPTkJBUjogJ2M0Zy1wb3J0c2lkZS1idXR0b25iYXInLFxuICAgIFBPUlRTSURFX0JVVFRPTjogJ2M0Zy1wb3J0c2lkZS1idXR0b24nLFxuICAgIFBPUlRTSURFX0hJREU6ICdjNGctcG9ydHNpZGUtaGlkZScsXG4gICAgUE9SVFNJREVfQ0xPU0U6ICdjNGctcG9ydHNpZGUtY2xvc2UnLFxuICAgIFNQSU5ORVI6ICdjNGctc3Bpbm5lcicsXG4gICAgU1RBUkJPQVJEOiAnYzRnLXN0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGFpbmVyJyxcbiAgICBTVEFSQk9BUkRfQ09OVFJPTDogJ2M0Zy1zdGFyYm9hcmQtY29udHJvbCcsXG4gICAgU1RBUkJPQVJEX1dSQVBQRVI6ICdjNGctc3RhcmJvYXJkLXdyYXBwZXInLFxuICAgIFNUQVJCT0FSRF9USVRMRUJBUjogJ2M0Zy1zdGFyYm9hcmQtdGl0bGViYXInLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGVudC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUjogJ2M0Zy1zdGFyYm9hcmQtYm90dG9tLXRvb2xiYXInLFxuICAgIFNUQVJCT0FSRF9TVEFUVVNCQVI6ICdjNGctc3RhcmJvYXJkLXN0YXR1c2JhcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXN0YXJib2FyZC12aWV3dHJpZ2dlcmJhcicsXG4gICAgU1RBUkJPQVJEX0hFQURMSU5FOiAnYzRnLXN0YXJib2FyZC1oZWFkbGluZScsXG4gICAgU1RBUkJPQVJEX0JVVFRPTkJBUjogJ2M0Zy1zdGFyYm9hcmQtYnV0dG9uYmFyJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OOiAnYzRnLXN0YXJib2FyZC1idXR0b24nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0NMT1NFOiAnYzRnLXN0YXJib2FyZC1jbG9zZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUU6ICdjNGctYmFzZWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0xBWUVSVFJFRTogJ2M0Zy1sYXllcnRyZWUnLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1sYXllcnN3aXRjaGVyJyxcbiAgICBUT09MVElQX1BPUFVQOiAnYzRnLXRvb2x0aXAtcG9wdXAnLFxuICAgIFpPT01fTEVWRUw6ICdjNGctem9vbS1sZXZlbCcsXG5cbiAgICBST1VURVJfSU5QVVRfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5wdXQtd3JhcHBlcicsXG4gICAgUk9VVEVSX1BST0ZJTEVfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyJyxcbiAgICBST1VURVJfSU5QVVRfRlJPTTogJ2M0Zy1yb3V0ZXItaW5wdXQtZnJvbScsXG4gICAgUk9VVEVSX0lOUFVUX1RPOiAnYzRnLXJvdXRlci1pbnB1dC10bycsXG4gICAgUk9VVEVSX0lOUFVUX0NMRUFSOiAnYzRnLXJvdXRlci1pbnB1dC1jbGVhcicsXG4gICAgUk9VVEVSX0JVVFRPTkJBUjogJ2M0Zy1yb3V0ZXItYnV0dG9uYmFyJyxcbiAgICBST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUjogJ2M0Zy1yb3V0ZXItYXR0cmlidXRpb24td3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtd3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy1oZWFkZXInLFxuXG4gICAgUk9VVEVSX1NXSVRDSDogJ2M0Zy1yb3V0ZXItc3dpdGNoJyxcbiAgICBST1VURVJfT1ZFUjogJ2M0Zy1yb3V0ZXItb3ZlcicsXG4gICAgUk9VVEVSX1BSSU5UOiAnYzRnLXJvdXRlci1wcmludCcsXG5cbiAgICBST1VURVJfUFJPRklMRV9DQVI6ICdjNGctcm91dGVyLXByb2ZpbGUtY2FyJyxcbiAgICBST1VURVJfUFJPRklMRV9IR1Y6ICdjNGctcm91dGVyLXByb2ZpbGUtaGd2JyxcbiAgICBST1VURVJfUFJPRklMRV9CSUtFOiAnYzRnLXJvdXRlci1wcm9maWxlLWJpa2UnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0ZPT1Q6ICdjNGctcm91dGVyLXByb2ZpbGUtZm9vdCcsXG4gICAgUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13aGVlbGNoYWlyJyxcblxuXG5cbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi10YWJsZScsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1vZGQnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1ldmVuJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbi1pY29uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fdGV4dCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXN0YW5jZScsXG5cbiAgICBPTF9DT05UUk9MOiAnb2wtY29udHJvbCcsXG4gICAgT0xfVU5TRUxFQ1RBQkxFOiAnb2wtdW5zZWxlY3RhYmxlJyxcblxuICAgIE9MX09WRVJMQVlDT05UQUlORVI6ICdvbC1vdmVybGF5Y29udGFpbmVyJyxcbiAgICBPTF9PVkVSTEFZQ09OVEFJTkVSX1NFOiAnb2wtb3ZlcmxheWNvbnRhaW5lci1zdG9wZXZlbnQnLFxuICAgIE9MX1ZJRVdQT1JUOiAnb2wtdmlld3BvcnQnLFxuICAgIE9MX1pPT006ICdvbC16b29tJyxcbiAgICBPTF9aT09NX0lOOiAnb2wtem9vbS1pbicsXG4gICAgT0xfWk9PTV9FWFQ6ICdvbC16b29tLWV4dGVudCcsXG4gICAgT0xfWk9PTV9IT01FOiAnb2wtem9vbS1ob21lJyxcbiAgICBPTF9aT09NX1BPUzogJ29sLXpvb20tcG9zaXRpb24nLFxuICAgIE9MX1pPT01fV0lUSF9FWFQ6ICdvbC16b29tLXdpdGgtZXh0ZW50JyxcbiAgICBPTF9aT09NX1dJVEhfSE9NRTogJ29sLXpvb20td2l0aC1ob21lJyxcbiAgICBPTF9aT09NX1dJVEhfUE9TOiAnb2wtem9vbS13aXRoLXBvc2l0aW9uJyxcbiAgICBPTF9aT09NX1NMSURFUjogJ29sLXpvb20tc2xpZGVyJyxcbiAgICBPTF9aT09NX1dJVEhfU0xJREVSOiAnb2wtem9vbS13aXRoLXNsaWRlcicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgY3NzQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5jc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGN1cnJlbnQgem9vbWxldmVsIG9uIHRoZSBtYXAuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyAge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICpcbiAgICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICBvcHRfb3B0aW9ucyAgKm9wdGlvbmFsKiBjb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZixcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgdXBkYXRlWm9vbWxldmVsO1xuXG4gICAgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubWFwVmlldykge1xuICAgICAgY29uc29sZS53YXJuKCdab29tbGV2ZWwgY29udHJvbCBuZWVkcyB0byBrbm93IHRoZSBtYXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlpPT01fTEVWRUwsXG4gICAgICB1bmRlZmluZWRIVE1MOiAnJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpO1xuXG4gICAgdXBkYXRlWm9vbWxldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwYXJzZUludChvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5tYXBWaWV3Lm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIHVwZGF0ZVpvb21sZXZlbCk7XG4gICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogb3B0aW9ucy50YXJnZXRcbiAgICB9KTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwsIG9sLmNvbnRyb2wuQ29udHJvbCk7XG5cblxuICAvKlxuICAgKiBBZGQgbWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlLCB7XG5cbiAgICAvLyBub3RoaW5nIHRvIGFkZCBoZXJlXG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFpvb21sZXZlbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1pvb21sZXZlbH0gZnJvbSBcIi4vYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWxcIlxuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIGM0Zy1NYXBzIHV0aWxpdHkgZnVuY3Rpb25zXG4gICAqL1xuICBjNGcubWFwcy51dGlscyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLnV0aWxzLCB7XG4gICAgLyoqXG4gICAgICogIENvbnZlcnRzIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBnaXZlbiBzdHJpbmcgdG8gdXBwZXJjYXNlLCBsZWF2aW5nIHRoZSByZW1haW5pbmcgc3RyaW5nIHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqICBAcGFyYW0gICAge3N0cmluZ30gICAgdGhlIHN0cmluZyB0byBjYXBpdGFsaXplXG4gICAgICpcbiAgICAgKiAgQHJldHVybiAgIHtzdHJpbmd9ICAgIHRoZSBjYXBpdGFsaXplZCBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXI6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYW4gdW5pcXVlIGlkLlxuICAgICAqXG4gICAgICogVGhlIGlkIGlzIDkgY2hhcmFjdGVycyBsb25nIGFuZCBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgVGhlIGdlbmVyYXRlZCBpZC5cbiAgICAgKi9cbiAgICBnZXRVbmlxdWVJZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gTWF0aC5yYW5kb20gc2hvdWxkIGJlIHVuaXF1ZSBiZWNhdXNlIG9mIGl0cyBzZWVkaW5nIGFsZ29yaXRobS5cbiAgICAgIC8vIENvbnZlcnQgaXQgdG8gYmFzZSAzNiAobnVtYmVycyArIGxldHRlcnMpLCBhbmQgZ3JhYiB0aGUgZmlyc3QgOSBjaGFyYWN0ZXJzXG4gICAgICAvLyBhZnRlciB0aGUgZGVjaW1hbC5cbiAgICAgIHJldHVybiAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuY29kZSBpbnB1dCBzdHJpbmdzIGZvciBHZW9KU09OLU9iamVjdHMgcHJvcGVybHksXG4gICAgICogc28gdGhleSB3aWxsIG5vdCBicmVhayB0aGUgQ29kZS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFwgLT4gXFxcXDtcbiAgICAgKiAgIFwiIC0+ICcnO1xuICAgICAqICAgw4QgLT4gJkF1bWw7XG4gICAgICogICDDpCAtPiAmYXVtbDtcbiAgICAgKiAgIMOWIC0+ICZPdW1sO1xuICAgICAqICAgw7YgLT4gJm91bWw7XG4gICAgICogICDDnCAtPiAmVXVtbDtcbiAgICAgKiAgIMO8IC0+ICZ1dW1sO1xuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIGlucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBlbmNvZGVHZW9Kc29uUHJvcGVydHk6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG91dHB1dDtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFwvZywgJ1xcXFxcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXFwiL2csICdcXCdcXCcnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OEL2csICcmQXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OkL2csICcmYXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OWL2csICcmT3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O2L2csICcmb3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OcL2csICcmVXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O8L2csICcmdXVtbDsnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiBlbmNvZGVHZW9Kc29uUHJvcGVydHkoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGlucHV0IHN0cmluZ3MgZm9yIEdlb0pTT04tT2JqZWN0cyBwcm9wZXJseSxcbiAgICAgKiBzbyB0aGV5IHdpbGwgYmUgZGlzcGxheWVkIGNvcnJlY3RseS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFxcXCAgICAgLT4gXFw7XG4gICAgICogICAnJyAgICAgLT4gXCI7XG4gICAgICogICAmQXVtbDsgLT4gw4RcbiAgICAgKiAgICZhdW1sOyAtPiDDpFxuICAgICAqICAgJk91bWw7IC0+IMOWXG4gICAgICogICAmb3VtbDsgLT4gw7ZcbiAgICAgKiAgICZVdW1sOyAtPiDDnFxuICAgICAqICAgJnV1bWw7IC0+IMO8XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgaW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlY29kZUdlb0pzb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICB2YXIgb3V0cHV0O1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dCArIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFxcXFxcL2csICdcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXCdcXCcvZywgJ1xcXCInXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZBdW1sOy9nLCAnw4QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZhdW1sOy9nLCAnw6QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZPdW1sOy9nLCAnw5YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZvdW1sOy9nLCAnw7YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZVdW1sOy9nLCAnw5w7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mdXVtbDsvZywgJ8O8J1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgZGVjb2RlR2VvSnNvblByb3BlcnR5KClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBvciByZXBsYWNlIGFuIFVSTC1wYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCB0aGUgZ2l2ZW4gcGFyYW1ldGVyLCBgcGFyYW1gLFxuICAgICAqIHdpbGwgYmUgYXBwbGllZCBhcyBcImhhc2gtcGFyYW1ldGVyXCIuXG4gICAgICogZS5nLjpcbiAgICAgKiAgIGh0dHBzOi8vbXl1cmwuZGU6cG9ydC9wYXRoL3RvL21hcHMjcGFyYW1cbiAgICAgKiBOb3RlLCB0aGF0IGFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiB3aGVyZWFzIGV4aXN0aW5nIFwiR0VULXBhcmFtZXRlcnNcIiBzdGF5IHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBzZXQsIGl0IHdpbGwgYmUgYXBwbGllZCBhcyBcIkdFVC1wYXJhbWV0ZXJcIi5cbiAgICAgKiBlLmcuOlxuICAgICAqICAgaHR0cHM6Ly9teXVybC5kZTpwb3J0L3BhdGgvdG8vbWFwcz9vcHRfZ2V0S2V5PXBhcmFtXG4gICAgICogSWYgdGhlIGtleSBkZXNjcmliZWQgYnkgYG9wdF9nZXRLZXlgIGlzIGFscmVhZHkgZXhpc3RpbmcsIGl0cyB2YWx1ZSB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiBvdGhlcndpc2UgdGhlIGtleS12YWx1ZS1wYWlyIHdpbGwgYmUgYXBwZW5kZWQgYXBwcm9wcmlhdGx5LlxuICAgICAqIEFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIHN0YXkgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9leGVjdXRlYCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIG5ldyBsaW5rIGFzIGBzdHJpbmdgLFxuICAgICAqIG90aGVyd2lzZSB0aGUgXCJocmVmL2xvY2F0aW9uXCIgd2lsbCBiZSBjaGFuZ2VkIGRpcmVjdGx5IGluIHRoZSBicm93c2VyLCB3aGljaCBjYW4gY2F1c2UgYSBwYWdlcmVsb2FkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgcGFyYW0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbnxzdHJpbmd9ICBvcHRfZ2V0S2V5ICAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbn0gICAgICAgICBvcHRfZXhlY3V0ZSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKi9cbiAgICBzZXRVcmxQYXJhbTogZnVuY3Rpb24gKHBhcmFtLCBvcHRfZ2V0S2V5LCBvcHRfZXhlY3V0ZSkge1xuICAgICAgdmFyIGxpbmssXG4gICAgICAgICAgc2VhcmNoUGFyYW0sXG4gICAgICAgICAgcGFyYW1SZXBsYWNlZCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAodHlwZW9mIHBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsaW5rID0gbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgIGlmICghb3B0X2dldEtleSkge1xuICAgICAgICAvLyB1c2UgaGFzaC1wYXJhbWV0ZXJcbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHBhcmFtO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgKz0gbG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGFyYW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2UgR0VULXBhcmFtZXRlclxuICAgICAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgLy8gdGhlcmUgYXJlIGFscmVhZHkgc2VhcmNoLXBhcmFtZXRlcnNcbiAgICAgICAgICBwYXJhbVJlcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgb3B0X2dldEtleSA9IG9wdF9nZXRLZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAvLyByZXBsYWNlIHBhcmFtZXRlciBpZiBhbHJlYWR5IGV4aXN0ZW50XG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcbiAgICAgICAgICAgICAgLyhbXj1cXD9cXCZdKyk9KFteJl0rKS9naSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBrZXksIHZhbHVlLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG9wdF9nZXRLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHBhcmFtUmVwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIG90aGVyd2lzZSBhcHBlbmQgYXMgbmV3IHBhcmFtZXRlclxuICAgICAgICAgIGlmICghcGFyYW1SZXBsYWNlZCkge1xuICAgICAgICAgICAgc2VhcmNoUGFyYW0gKz0gJyYnICsgb3B0X2dldEtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzIHdpbGwgYmUgdGhlIG9ubHkgc2VhcmNoLXBhcmFtZXRlciBpbiB0aGUgVVJMXG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSAnPycgKyBvcHRfZ2V0S2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uc2VhcmNoID0gc2VhcmNoUGFyYW07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluayArPSBzZWFyY2hQYXJhbSArIGxvY2F0aW9uLmhhc2g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaW5rO1xuICAgIH0sIC8vIGVuZCBvZiBzZXRVcmxQYXJhbSgpXG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2VhcmNoIG9yIGhhc2ggVVJMLXBhcmFtZXRlciBhcyBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCwgdGhlIGhhc2gtcGFyYW1ldGVyIG9mIHRoZSBVUkwgaXMgcmV0dXJuZWQsXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgc2VhcmNoIGZvciBhIEdFVC1wYXJhbWV0ZXIgYW5kIHJldHVybiBpdHMgdmFsdWUuXG4gICAgICpcbiAgICAgKiBJZiBhIHBhcmFtZXRlciBpcyBub3QgZXhpc3RlbnQsIG9yIGVtcHR5LCBhbiBlbXB0eSBzdHJpbmcgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHt1bmRlZmluZWR8c3RyaW5nfSAgb3B0X2dldEtleSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGZvdW5kIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKG9wdF9nZXRLZXkpIHtcbiAgICAgIHZhciBwYXJhbSxcbiAgICAgICAgICByZWdFeDtcblxuICAgICAgaWYgKCFvcHRfZ2V0S2V5KSB7XG4gICAgICAgIHBhcmFtID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgIHBhcmFtID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVnRXggPSBuZXcgUmVnRXhwKCdbXFw/XFwmXScgKyBvcHRfZ2V0S2V5ICsgJz0oW14mXSspJywgJ2knKTtcbiAgICAgICAgICBwYXJhbSA9IHJlZ0V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtID8gcGFyYW1bMV0gOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW07XG4gICAgfSwgLy8gZW5kIG9mIGdldFVybFBhcmFtKClcblxuICAgIC8qKlxuICAgICAqIERlbHRhLWVuY29kZSBhbiBhcnJheSBvZiBudW1iZXJzLlxuICAgICAqIE5vdGUgdGhhdCB0aGUgYXJyYXkgd2lsbCBiZSBzb3J0ZWQgKGxvd2VzdCB0byBoaWdoZXN0KVxuICAgICAqIGJlZm9yZSBlbmNvZGluZy5cbiAgICAgKlxuICAgICAqIFNvIGFmdGVyIHRoZSBlbmNvZGluZyB0aGUgZmlyc3QgdmFsdWUgb2YgdGhlIG91dHB1dCBjb250YWluc1xuICAgICAqIHRoZSBzbWFsbGVzdCBudW1iZXIgb2YgdGhlIHNldCBhbmQgZWFjaCBmb2xsb3dpbmcgbnVtYmVyIGp1c3RcbiAgICAgKiByZXByZXNlbnRzIHRoZSBvZmZzZXQgdG8gaXRzIHByZXZpb3VzIG5laWdoYm9yLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBtb3N0bHkgZWZmaWNpZW50IGZvciBoaWdoIG51bWJlcnMsIHRoYXQgYXJlIFwiY2xvc2UgdG8gZWFjaCBvdGhlclwiLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiAgIFsxMzM3LCAxMSwgMTAxLCAxMjMsIDk2LCA2OSwgNDIsIDQyXVxuICAgICAqICAgd2lsbCBiZSBzb3J0ZWRcbiAgICAgKiAgIFsxMSwgNDIsIDQyLCA2OSwgOTYsIDEwMSwgMTIzLCAxMzM3XVxuICAgICAqICAgYW5kIGVuY29kZWQgdG9cbiAgICAgKiAgIFsxMSwgMzEsIDAsIDI3LCAyNywgNSwgMjIsIDEyMTRdXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8bnVtYmVycz59ICBhcnJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG51bWJlcnM+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWx0YUVuY29kZTogZnVuY3Rpb24gKGFycklucHV0KSB7XG4gICAgICB2YXIgYXJyT3V0cHV0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghYXJySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgaWYgKGFycklucHV0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gYXJySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIGFycklucHV0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgfSk7XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gYXJySW5wdXRbMF07XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYXJySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyT3V0cHV0W2ldID0gYXJySW5wdXRbaV0gLSBhcnJJbnB1dFtpIC0gMV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJPdXRwdXQ7XG5cbiAgICB9LCAvLyBlbmQgb2YgZGVsdGFFbmNvZGUoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGEgZGVsdGEtZW5jb2RlZCBhcnJheS5cbiAgICAgKiBTZWUgYGRlbHRhRW5jb2RlYCBmdW5jdGlvbiBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxudW1iZXJzPn0gIGFycklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8bnVtYmVycz59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlbHRhRGVjb2RlOiBmdW5jdGlvbiAoYXJySW5wdXQpIHtcbiAgICAgIHZhciBhcnJPdXRwdXQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFhcnJJbnB1dCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gcGFyc2VJbnQoYXJySW5wdXRbMF0sIDEwKTtcbiAgICAgIGlmIChpc05hTihhcnJJbnB1dFswXSkpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMTsgaSA8IGFycklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyck91dHB1dFtpXSA9IHBhcnNlSW50KGFycklucHV0W2ldLCAxMCkgKyBhcnJPdXRwdXRbaSAtIDFdO1xuICAgICAgICBpZiAoaXNOYU4oYXJyT3V0cHV0W2ldKSkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyT3V0cHV0O1xuXG4gICAgfSwgLy8gZW5kIG9mIGRlbHRhRGVjb2RlKClcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFuZCBjYWxsIGZ1bmN0aW9ucyBpbiBgYXJySG9va0Z1bmN0aW9uc2Agd2l0aCBnaXZlbiBgcGFyYW1ldGVyc2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8ZnVuY3Rpb24+fSAgIGFyckhvb2tGdW5jdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7bWl4ZWR9ICAgICAgICAgICAgIHBhcmFtZXRlcnMgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjYWxsSG9va0Z1bmN0aW9uczogZnVuY3Rpb24gKGFyckhvb2tGdW5jdGlvbnMsIHBhcmFtZXRlcnMpIHtcbiAgICAgIHZhciBqO1xuXG4gICAgICBpZiAoYXJySG9va0Z1bmN0aW9ucyAmJiBhcnJIb29rRnVuY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGFyckhvb2tGdW5jdGlvbnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyckhvb2tGdW5jdGlvbnNbal0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyckhvb2tGdW5jdGlvbnNbal0ocGFyYW1ldGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIFwiY2FsbEhvb2tGdW5jdGlvbnMoKVwiXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgaGV4LWZvcm1hdGVkIGNvbG9yIHZhbHVlIGludG8gcmdiYSgpLWZvcm1hdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSAgaGV4ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0gIG9wdF9vcGFjaXR5ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5OiBmdW5jdGlvbiAoaGV4LCBvcHRfb3BhY2l0eSwgb3B0X2FycmF5KSB7XG5cbiAgICAgIHZhciBiaWdpbnQsIHIsIGcsIGIsIGE7XG5cbiAgICAgIGJpZ2ludCA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgaWYgKG9wdF9vcGFjaXR5ICYmIG9wdF9vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgIG9wdF9vcGFjaXR5LnZhbHVlID0gcGFyc2VJbnQob3B0X29wYWNpdHkudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X29wYWNpdHkgJiYgdHlwZW9mIG9wdF9vcGFjaXR5ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdF9vcGFjaXR5ID09PSAnb2JqZWN0JyAmJiBvcHRfb3BhY2l0eS52YWx1ZSkge1xuICAgICAgICAgIG9wdF9vcGFjaXR5ID0gb3B0X29wYWNpdHkudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0X29wYWNpdHkgPSAxMDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgICAgZyA9IChiaWdpbnQgPj4gOCkgJiAyNTU7XG4gICAgICBiID0gYmlnaW50ICYgMjU1O1xuICAgICAgYSA9IG9wdF9vcGFjaXR5ID8gKG9wdF9vcGFjaXR5IC8gMTAwKSA6IDE7XG4gICAgICBpZihvcHRfYXJyYXkpe1xuICAgICAgICByZXR1cm4gW3IsZyxiLGFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLFwiICsgYSArIFwiKVwiO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWR1Y2UgYSBkZWZpbmVkIHN0eWxlLCB0byBhIHNpbXBsZXIgdmVyc2lvbi5cbiAgICAgKlxuICAgICAqIFRoZSByZWR1Y2VkIHN0eWxlIGlzIHRoZSBmaXJzdCBzdHlsZSBvZiB0aGUgZGVmaW5lZCBzdHlsZXNldCxcbiAgICAgKiB3aXRoIGEgMXB4IHRoaWNrIHN0cm9rZSBhbmQgYSBjaXJjbGUgd2l0aCBhIDVweCByYWRpdXMuXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgYWRkaXRpb25hbCBnZW9tZXRyaWVzIHdpdGggYSBtYWluLWdlb21ldHJ5LFxuICAgICAqIHdpdGhvdXQgaGF2aW5nIHRvIGRlZmluZSBhIHdob2xlIG5ldyBzdHlsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ8c3RyaW5nfSAgICAgICAgICAgc3R5bGVJZCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG9sLnN0eWxlLlN0eWxlPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVkdWNlU3R5bGU6IGZ1bmN0aW9uIChzdHlsZUlkKSB7XG4gICAgICB2YXIgc3R5bGUsXG4gICAgICAgICAgcmVkdWNlZFN0eWxlLFxuICAgICAgICAgIGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2VTdHlsZTtcblxuICAgICAgaWYgKCFjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXSB8fCAhYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0uc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBzdHlsZSA9IGM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdLnN0eWxlKClbMF07XG5cbiAgICAgIGZpbGxTdHlsZSA9IHN0eWxlLmdldEZpbGwoKTtcbiAgICAgIHN0cm9rZVN0eWxlID0gc3R5bGUuZ2V0U3Ryb2tlKCk7XG4gICAgICBzdHJva2VTdHlsZS5zZXRXaWR0aCgxKTtcblxuICAgICAgcmVkdWNlZFN0eWxlID0gbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgIHJhZGl1czogNVxuICAgICAgICB9KSxcbiAgICAgICAgLy8gdGV4dDogc3R5bGUuZ2V0VGV4dCgpLFxuICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICBmaWxsOiBmaWxsU3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gW3JlZHVjZWRTdHlsZV07XG4gICAgfSwgLy8gZW5kIG9mIFwicmVkdWNlU3R5bGVcIlxuXG4gICAgLyoqXG4gICAgICogTWVhc3VyZSB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZ2l2ZW4gZ2VvbWV0cnkuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgZ2VvbWV0cnkgaXMgYSBgTGluZVN0cmluZ2AgdGhlIGZ1bmN0aW9uIHdpbGwgbWVhc3VyZSBpdHMgbGVuZ3RoLFxuICAgICAqIGlzIGl0IGEgYFBvbHlnb25gIGl0IHdpbGwgbWVhc3VyZSB0aGUgYWNyZWFnZSxcbiAgICAgKiBvdGhlcndpc2UgaXQgd2lsbCByZXR1cm4gYDBgLlxuICAgICAqXG4gICAgICogSWYgdGhlIG9wdGlvbmFsIGBvcHRfZm9yY2VMaW5lTWVhc3VyZWAgcGFyYW1ldGVyIGlzIGB0cnVlYFxuICAgICAqIGFuZCB0aGUgZ2VvbWV0cnkgaXMgYSBgUG9seWdvbmAgaXQgd2lsbCBtZWFzdXJlIGl0cyBwZXJpbWV0ZXIgaW5zdGVhZFxuICAgICAqIG9mIGl0cyBhY3JlYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29sLmdlb20uTGluZVN0cmluZ3xvbC5nZW9tLlBvbHlnb259ICAgZ2VvbWV0cnkgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7dW5kZWZpbmVkfGJvb2xlYW59ICAgICAgICAgICAgICAgICAgICBvcHRfZm9yY2VMaW5lTWVhc3VyZSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PHN0cmluZz58bnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBtZWFzdXJlR2VvbWV0cnk6IGZ1bmN0aW9uIChnZW9tZXRyeSwgb3B0X2ZvcmNlTGluZU1lYXN1cmUsIG9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlKSB7XG4gICAgICB2YXIgdmFsdWUsXG4gICAgICAgICAgc3BoZXJlLFxuICAgICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgICAgIGNvb3JkMSxcbiAgICAgICAgICBjb29yZDIsXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvL3NwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICByZXN1bHQgPSB7fTtcblxuICAgICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5MaW5lU3RyaW5nIHx8IChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbiAmJiBvcHRfZm9yY2VMaW5lTWVhc3VyZSkpIHtcblxuICAgICAgICBjb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgY29vcmQxID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgY29vcmQyID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaSArIDFdLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICAgIHZhbHVlICs9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShjb29yZDEsIGNvb3JkMiwgNjM3ODEzNyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsdWUgPiAxMDAwKSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAnICcgKyAnbSc7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAvL2dlb21ldHJ5ID0gLyoqIEB0eXBlIHtvbC5nZW9tLlBvbHlnb259ICovKGdlb21ldHJ5LmNsb25lKCkudHJhbnNmb3JtKCdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JykpO1xuICAgICAgICAvL2Nvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0TGluZWFyUmluZygwKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKG9sLnNwaGVyZS5nZXRBcmVhKGdlb21ldHJ5KSk7XG4gICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICcgJyArICdtPHN1cD4yPC9zdXA+JztcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUgJiYgb3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUpIHtcbiAgICAgICAgICB2YXIgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgICAgICAgIHZhciBlZGdlQ29vcmRpbmF0ZSA9IFtjZW50ZXJbMF0gKyByYWRpdXMsIGNlbnRlclsxXV07XG4gICAgICAgICAgLy92YXIgd2dzODRTcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oY2VudGVyLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShlZGdlQ29vcmRpbmF0ZSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgNjM3ODEzN1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICB2YWx1ZSA9IE1hdGguUEkgKiBNYXRoLnNxcnQodmFsdWUpO1xuXG4gICAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAnbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfVxuXG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkNpcmNsZSkge1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbWV0cnkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgdmFyIGVkZ2VDb29yZGluYXRlID0gW2NlbnRlclswXSArIHJhZGl1cywgY2VudGVyWzFdXTtcbiAgICAgICAgICAvL3ZhciB3Z3M4NFNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb2wuc3BoZXJlLmdldERpc3RhbmNlKFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShjZW50ZXIsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGVkZ2VDb29yZGluYXRlLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICA2Mzc4MTM3XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAocmVzdWx0LnJhd1ZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKCh2YWx1ZSAqIDEwMCkgLyAxMDApIC8gMTAwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ20nO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBleHRlbnQgZm9yIGFuIGFycmF5IG9mIGdlb21ldHJpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QXJyYXkuPG9sLmdlb20uc2ltcGxlR2VvbWV0cnk+fSAgYXJyR2VvbWV0cmllcyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge29sLkV4dGVudH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzOiBmdW5jdGlvbiAoYXJyR2VvbWV0cmllcykge1xuICAgICAgdmFyIGV4dGVudFNvdXJjZTtcblxuICAgICAgaWYgKCFhcnJHZW9tZXRyaWVzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignR2VvbWV0cmllcyBtaXNzaW5nIGZvciBleHRlbnQgY2FsY3VsYXRpb24nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBleHRlbnRTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgZXh0ZW50U291cmNlLmFkZEZlYXR1cmVzKGFyckdlb21ldHJpZXMpO1xuXG4gICAgICByZXR1cm4gZXh0ZW50U291cmNlLmdldEV4dGVudCgpIHx8IG9sLkV4dGVudChbMCwgMCwgMCwgMF0pO1xuICAgIH0sIC8vIGVuZCBvZiBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzKClcblxuICAgIC8qKlxuICAgICAqIEZpdCB2aWV3IG9mIGBtYXBgIHRvIGEgZ2l2ZW4gYXJyYXkgb2YgYGV4dGVudHNgLlxuICAgICAqIEFuaW1hdGVkIGlmIGBvcHRfYW5pbWF0aW9uRHVyYXRpb25gIGlzIGFuIGludGVnZXIgPiAwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29iamVjdH0gICAgIGV4dGVudHMgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9hbmltYXRpb25EdXJhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZpdFRvRXh0ZW50czogZnVuY3Rpb24gKGV4dGVudHMsIG1hcCwgb3B0X3BhZGRpbmcsIG9wdF9hbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgdmFyIHZpZXcsXG4gICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICBleHRlbnQsXG4gICAgICAgICAga2V5O1xuXG4gICAgICBpZiAoIWV4dGVudHMgfHwgIW1hcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgZXh0ZW50IG9yIG1hcCBmb3IgZml0RXh0ZW50Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vZXh0ZW50ID0gb2wuZXh0ZW50LmNyZWF0ZUVtcHR5KCk7XG5cbiAgICAgIGZvciAoa2V5IGluIGV4dGVudHMpIHtcbiAgICAgICAgaWYgKGV4dGVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZXh0ZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBleHRlbnQgPSBleHRlbnRzW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sLmV4dGVudC5leHRlbmQoZXh0ZW50LCBleHRlbnRzW2tleV0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZml0VG9FeHRlbnQoZXh0ZW50LCBtYXAsIG9wdF9wYWRkaW5nLCA1LCAwLCAwLCAyKTtcblxuXG4gICAgfSwgLy8gZW5kIG9mIGZpdFRvRXh0ZW50c1xuXG4gICAgLyoqXG4gICAgICogRml0IHZpZXcgb2YgYG1hcGAgdG8gYSBnaXZlbiBgZXh0ZW50YC5cbiAgICAgKiBBbmltYXRlZCBpZiBgb3B0X2FuaW1hdGlvbkR1cmF0aW9uYCBpcyBhbiBpbnRlZ2VyID4gMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvbC5FeHRlbnR9ICBleHRlbnQgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2FycmF5fSAgICAgIG9wdF9wYWRkaW5nICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfYW5pbWF0aW9uRHVyYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21pblpvb20gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9tYXhab29tICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWluUmVzb2x1dGlvbiAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBmaXRUb0V4dGVudDogZnVuY3Rpb24gKGV4dGVudCwgbWFwLCBvcHRfcGFkZGluZywgb3B0X2FuaW1hdGlvbkR1cmF0aW9uLCBvcHRfbWluWm9vbSwgb3B0X21heFpvb20sIG9wdF9taW5SZXNvbHV0aW9uKSB7XG4gICAgICB2YXIgdmlldyxcbiAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgIGZpdE9wdGlvbnM7XG5cbiAgICAgIGlmICghZXh0ZW50IHx8ICFtYXApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGV4dGVudCBvciBtYXAgZm9yIGZpdEV4dGVudCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZpZXcgPSBtYXAuZ2V0VmlldygpO1xuXG4gICAgICBmaXRPcHRpb25zID0ge1xuICAgICAgICAncGFkZGluZyc6IG9wdF9wYWRkaW5nIHx8IFsyNSwgMjUsIDI1LCAyNV1cbiAgICAgIH07XG5cbiAgICAgIGlmIChvcHRfbWluUmVzb2x1dGlvbiAmJiBvcHRfbWluUmVzb2x1dGlvbiA+IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5taW5SZXNvbHV0aW9uID0gb3B0X21pblJlc29sdXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfbWluWm9vbSAmJiBvcHRfbWluWm9vbSA+PSAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWluWm9vbSA9IG9wdF9taW5ab29tO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X21heFpvb20gJiYgb3B0X21heFpvb20gPj0gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1heFpvb20gPSBvcHRfbWF4Wm9vbTtcbiAgICAgIH1cblxuICAgICAgLy8gYW5pbWF0ZSB0aGUgXCJmaXR0aW5nXCIgd2hlbiBhIGR1cmF0aW9uIGlzIGdpdmVuIGFuZCBpdHMgZ3JlYXRlciB0aGFuIDBcbiAgICAgIGlmIChvcHRfYW5pbWF0aW9uRHVyYXRpb24gJiYgb3B0X2FuaW1hdGlvbkR1cmF0aW9uID4gMCkge1xuICAgICAgICB2aWV3LmFuaW1hdGUoe1xuICAgICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgIHJlc29sdXRpb246IHZpZXcuZ2V0UmVzb2x1dGlvbigpLFxuICAgICAgICAgIGNlbnRlcjogWzAsIDBdXG4gICAgICAgICAgLy9yb3RhdGlvbjogTWF0aC5QSVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gbWFwLmJlZm9yZVJlbmRlcihcbiAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi5wYW4oe1xuICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgIHNvdXJjZTogdmlldy5nZXRDZW50ZXIoKVxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgICBvbC5hbmltYXRpb24uem9vbSh7XG4gICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgLy8gICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZpZXcuZml0KGV4dGVudCwgbWFwLmdldFNpemUoKSwge3BhZGRpbmc6IFsyNSwgMjUsIDI1LCAyNV19KTtcbiAgICAgICAgLy92aWV3LmZpdChleHRlbnQsIG1hcC5nZXRTaXplKCkpO1xuICAgICAgICAvL3ZpZXcuc2V0Wm9vbSh2aWV3LmdldFpvb20oKS0xKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgZml0VG9FeHRlbnQoKVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcnVuIGFsbCBwbGFjZWhvbGRlciBmdW5jdGlvbnMgYXQgb25jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIHN0cklucHV0ICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgICAgICAgICAgICAgICAgIGZlYXR1cmUgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllciB8IHVuZGVmaW5lZH0gIG9wdF9sYXllciAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUFsbFBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIC8vIG9ubHkgY2hlY2sgdGhlIGZpcnN0IHR3byBwYXJhbWV0ZXJzIGFzIHRoZXkgd2lsbCBiZSB1c2VkIGJ5IGFsbCBwbGFjZWhvbGRlci1mdW5jdGlvbnNcbiAgICAgIC8vIC0+IGZvciBwZXJmb3JtYW5jZVxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyhzdHJPdXRwdXQsIGZlYXR1cmUpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzKHN0ck91dHB1dCwgZmVhdHVyZSk7XG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBbGxQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7Rk5mdW5jdGlvbk5hbWV9YCwgaW4gYHN0cklucHV0YCxcbiAgICAgKiB3aXRoIHRoZSByZXN1bHQgb2YgYHdpbmRvdy5mdW5jdGlvbk5hbWUoZmVhdHVyZSwgc3R5bGUpYCwgaWYgaXQgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHNpbXBseSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICogU3R5bGUgd2lsbCBiZSB0YWtlbiBlaXRoZXIgZnJvbSB0aGUgZmVhdHVyZSwgb3IgdGhlIGxheWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gICAgICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllcn0gIGxheWVyICAgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBsYXllcikge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCAhbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHtGTihbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgZnVuY3Rpb25OYW1lLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmdW5jdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93W2Z1bmN0aW9uTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIHN0eWxlXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZmVhdHVyZS5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBmZWF0dXJlLmdldFN0eWxlKCkgJiYgdHlwZW9mIGZlYXR1cmUuZ2V0U3R5bGUoKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gZmVhdHVyZS5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsYXllci5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBsYXllci5nZXRTdHlsZSgpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBsYXllci5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gd2luZG93W2Z1bmN0aW9uTmFtZV0oZmVhdHVyZSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzLCBpbiBgc3RySW5wdXRgLCBmb3IgdmFyaWFibGVzIHNldCBieSB0aGUgZ2VvRWRpdG9yLlxuICAgICAqIFZhbGlkIHBsYWNlaG9sZGVycyBhcmU6IChba2V5XSByZXByZXNlbnRzIHRoZSBzdHJpbmduYW1lIG9mIHRoZSB2YXJpYWJsZXMga2V5KVxuICAgICAqICAgYCR7RUxba2V5XX1gICAgPT4gIExhYmVsIGZvciB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWTFtrZXldfWAgID0+ICBMYWJlbCBmb3IgdGhlIHZhcmlhYmxlLCBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgKiAgIGAke0VWW2tleV19YCAgID0+ICBWYWx1ZSBvZiB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWVltrZXldfWAgID0+ICBTYW1lIGFzIGAke0VWW2tleV19YFxuICAgICAqXG4gICAgICogSWYgbm8gYXBwcm9wcmlhdGUgdmFsdWUgY2FuIGJlIGZvdW5kIGZvciBhIHBsYWNlaG9sZGVyXG4gICAgICogaXQgd2lsbCBzaW1wbHkgYmUgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhFVj9bTFZdKShbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgdHlwZSwgZXZLZXksIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWRpdG9yVmFycyxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmZWF0dXJlIGhhcyBlZGl0b3JWYXJzXG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKSkge1xuICAgICAgICAgICAgICBlZGl0b3JWYXJzID0gZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKTtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIGZvciBlZGl0b3JWYXIgd2l0aCBrZXkgPT0gZXZLZXlcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVkaXRvclZhcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yVmFyc1tpXS5rZXkgPT09IGV2S2V5KSB7XG4gICAgICAgICAgICAgICAgICAvLyBpZiB0eXBlIGlzICdFVkwnIGRpc3BsYXkgbGFiZWwgb25seSBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnRUwnIHx8ICh0eXBlID09PSAnRVZMJyAmJiBlZGl0b3JWYXJzW2ldLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVmFyc1tpXS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JWYXJzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7YXR0cn1gLCBpbiBgc3RySW5wdXRgLFxuICAgICAqIHdpdGggdGhlIHJlc3VsdCBvZiBgZmVhdHVyZS5nZXQoYXR0cilgLCBpZiBpdCBleGlzdC5cbiAgICAgKiBPdGhlcndpc2UgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2ltcGx5IHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgYXR0ciwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlLmdldChhdHRyKSB8fCAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMoKVxuXG4gICAgb2JqZWN0VG9BcnJheTogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmplY3QgPSBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSwgLy8gZW5kIG9mIG9iamVjdFRvQXJyYXkoKVxuXG4gICAgZ2V0VmVjdG9yTGF5ZXIoc291cmNlLCBzdHlsZSkge1xuICAgICAgICB2YXIgZm5TdHlsZTtcblxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgc3R5bGUgaXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmblN0eWxlID0gc3R5bGU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm5TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICBzdHlsZTogZm5TdHlsZVxuICAgICAgICB9KTtcbiAgICB9LC8vIGVuZCBvZiBcImdldFZlY3RvckxheWVyKClcIlxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHN1YmRvbWFpbiBmcm9tIHRoZSBjdXJyZW50IHJlcXVlc3QgaG9zdCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgKn1cbiAgICAgKi9cbiAgICBnZXRDdXJyZW50U3ViZG9tYWluKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0sXG5cbiAgICByZWRyYXdNYXBWaWV3OiBmdW5jdGlvbiAobWFwQ29udHJvbGxlcikge1xuICAgICAgdmFyIG1hcERhdGEgPSBtYXBDb250cm9sbGVyLmRhdGE7XG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICBtYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5wcmVwZW5kKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgJChjb250cm9sQ29udGFpbmVyVG9wTGVmdCkuYWZ0ZXIoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuICAgICAgbWFwQ29udHJvbGxlci5sZWZ0U2xpZGVFbGVtZW50cy5wdXNoKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1Yi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcblxuICAgICAgaWYgKG1hcERhdGEuc2NhbGVsaW5lKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSA9IG5ldyBvbC5jb250cm9sLlNjYWxlTGluZSh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgfVxuXG4gICAgICAkKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KS5hcHBlbmQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIpO1xuXG4gICAgICBpZiAobWFwRGF0YS56b29tbGV2ZWwpIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsID0gbmV3IFpvb21sZXZlbCh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAobWFwRGF0YS5tb3VzZXBvc2l0aW9uKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uID0gbmV3IG9sLmNvbnRyb2wuTW91c2VQb3NpdGlvbih7XG4gICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgY29vcmRpbmF0ZUZvcm1hdDogb2wuY29vcmRpbmF0ZS50b1N0cmluZ0hETVMsXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtrZXldIHx8ICcnO1xuICAgIH0sXG4gICAgc3RvcmVWYWx1ZTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWU7IC8vIG9ubHkgc3RyaW5nc1xuICAgIH1cbiAgfSk7XG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIHV0aWxzID0gdGhpcy5jNGcubWFwcy51dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==