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

import {C4gBaselayer} from "./c4g-baselayer";
import {C4gOverlay} from "./c4g-overlay";
import {config} from "./c4g-maps-config";
import {utils} from "./c4g-maps-utils";
import TileLayer from "ol/layer/Tile";
import TileJSON from "ol/source/TileJSON";
import {BingMaps, ImageStatic, OSM, Stamen, TileWMS, XYZ} from "ol/source";
import {ATTRIBUTION as OSM_ATTRIBUTION} from "ol/source/OSM";
import {default as VectorTileSource} from "ol/source/VectorTile";
import {Group as LayerGroup, Image} from "ol/layer";
import OLCesium from 'ol-cesium/src/olcs/OLCesium.js';
import {applyStyle} from 'ol-mapbox-style';
import VectorTileLayer from 'ol/layer/VectorTile';
import ol_source_GeoImage from "ol-ext/source/GeoImage";
import Projection from "ol/proj/Projection";

export class C4gBaselayerController {
  constructor(proxy) {
    this.proxy = proxy;
    this.mapController = proxy.options.mapController;
    this.arrBaselayers = {};
    this.baselayerIds = [];
    this.baseKeys = this.mapController.data.base_keys;
  }

  loadBaseLayers() {
    var self;

    self = this;

    jQuery.ajax(this.proxy.api_baselayer_url,{
      dataType: this.mapController.data.jsonp ? "jsonp" : "json"
    })
      .done(function (data) {
        if (data.baselayer) {
          self.addBaseLayers(data.baselayer);
          utils.callHookFunctions(window.c4gMapsHooks.proxy_baselayer_loaded);
        }
        return true;
      })
      .fail(function () {
        // @TODO error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the baselayers. Do you have configured a default profile with baselayers?');
        self.mapController.spinner.hide();
        return false;
      })
      .always(function () {
        //self.mapController.spinner.hide();
      });

  }// end of "loadBaseLayers()"

  addBaseLayers(baselayers) {
    var baselayer,
      uid,
      i,
      j;

    // build baselayer-list
    if (baselayers.length > 0) {
      for (i = 0; i < baselayers.length; i += 1) {

        baselayer = baselayers[i];

        uid = baselayer.id || utils.getUniqueId();
        this.baselayerIds.push(uid);
        if (!this.arrBaselayers[uid]) {
          this.arrBaselayers[uid] = new C4gBaselayer(baselayer, this);
        }

        // @TODO: check initial baselayer-handling
        if (this.mapController.data.baselayer && parseInt(uid, 10) === parseInt(this.mapController.data.baselayer, 10)) {
          // check default from content/module (overrides profile settings)
          this.showBaseLayer(uid);
        } else if (this.mapController.data.default_baselayer && parseInt(uid, 10) === parseInt(this.mapController.data.default_baselayer, 10)) {
          // check default from profile
          this.showBaseLayer(uid);
        }

      }
    }

    if (!this.proxy.activeBaselayerId) {
      // no baselayer was activated
      if (baselayers.length > 0 && baselayers[0].id) {
        // take first baselayer if possible
        uid = baselayers[0].id;
      } else {
        // otherwise build default baselayer
        uid = 0;
        this.baselayerIds.push(uid);
        if (!this.arrBaselayers[uid]) {
          this.arrBaselayers[uid] = {
            id: 0,
            name: 'c4g_default',
            provider: 'osm',
            style: 'Mapnik'
          };
        }
      }
      this.showBaseLayer(uid);

    }
    this.proxy.baselayers_loaded = true;

    utils.callHookFunctions(this.proxy.hook_baselayer_loaded, this.baselayerIds);
  } // end of "addBaseLayers()"

  createBaseLayer(layerOptions, baseLayerConfig, sourceConfigs){
    var newBaselayer = {};
    layerOptions = layerOptions || {};

    let isSecure = window.isSecureContext;
    if (isSecure) {
      layerOptions.crossOrigin = 'anonymous';
    }

    switch (baseLayerConfig.provider) {
      case 'custom':
        // custom
        let noUrl = true;
        if (baseLayerConfig.url) {
          layerOptions.url = baseLayerConfig.url;
          noUrl = false;
        } else if (baseLayerConfig.urls) {
          layerOptions.urls = baseLayerConfig.urls;
          noUrl = false;
        }
        if (!noUrl) {
          newBaselayer = new TileLayer({
            source: new XYZ(layerOptions),
            extent: baseLayerConfig.extend
          });
        } else {
          console.warn('custom url(s) missing -> switch to default');
        }
        break;
      case 'osm':
        if (sourceConfigs.osm[baseLayerConfig.style]) {
          newBaselayer = new TileLayer({
            source: new OSM(
              jQuery.extend(
                sourceConfigs.osm[baseLayerConfig.style],
                layerOptions
              )
            )
          });
        }
        else if (baseLayerConfig.style === 'osm_custom') {
          // custom
          let noUrl = true;
          if (baseLayerConfig.url) {
            layerOptions.url = baseLayerConfig.url;
            noUrl = false;
          } else if (baseLayerConfig.urls) {
            layerOptions.urls = baseLayerConfig.urls;
            noUrl = false;
          }
          if (!noUrl) {
            newBaselayer = new TileLayer({
              source: new XYZ(layerOptions)
            });
          } else {
            console.warn('custom url(s) missing -> switch to default');
          }
        } else {
          console.warn('unsupported osm-style -> switch to default');
        }
        break;
      case 'stamen':
        if (sourceConfigs.stamen[baseLayerConfig.style]) {
          // Stamen
          if (baseLayerConfig.style === 'Watercolor') {
            newBaselayer = new LayerGroup({
              layers: [new TileLayer({
                source: new Stamen({
                  layer: 'watercolor'
                })
              }),
                new TileLayer({
                  source: new Stamen({
                    layer: 'terrain-labels'
                  })
                })]
            });
          } else {
            newBaselayer = new TileLayer({
              source: new Stamen(
                  jQuery.extend(
                      sourceConfigs.stamen[baseLayerConfig.style]
                  )
              )
            });
          }
        }
        else {
          console.warn('unsupported osm-style -> switch to default');
        }
        break;
      case 'con4gisIo':
        let config = this.baseKeys[baseLayerConfig.id];
        layerOptions.url = baseLayerConfig.url.replace('{key}', config['key']);
        layerOptions.attributions = config.attribution + ' ' + layerOptions.attributions;
        newBaselayer = new TileLayer({
          source: new XYZ(layerOptions)
        });
        break;
      case 'mapbox':
        if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.mapbox_type) {

          if (baseLayerConfig.mapbox_type === 'Mapbox') {
            layerOptions.url = baseLayerConfig.url + baseLayerConfig.app_id + '/tiles/{z}/{x}/{y}?access_token=' + baseLayerConfig.api_key;
            newBaselayer = new TileLayer({
              source: new XYZ(
                jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.mapbox_type], layerOptions)
              )
            });
          } else {
            layerOptions.url = baseLayerConfig.url_classic + baseLayerConfig.app_id + '/{z}/{x}/{y}.png?access_token=' + baseLayerConfig.api_key;

            newBaselayer = new TileLayer({
              source: new XYZ(jQuery.extend(
                sourceConfigs.mapbox[baseLayerConfig.mapbox_type],
                layerOptions
              ))
            });
          }
        } else if (baseLayerConfig.hide_in_be) {
          layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
          newBaselayer = new TileLayer({
            source: new XYZ(jQuery.extend(
              sourceConfigs.mapbox[baseLayerConfig.mapbox_type],
              layerOptions))
          });
        } else {
          console.warn('wrong mapbox configuration!');
        }
        break;
      case 'klokan':
        if (baseLayerConfig.api_key && baseLayerConfig.klokan_type) {

          if(baseLayerConfig.url.charAt(baseLayerConfig.url.length - 1) != '/') {
            baseLayerConfig.url = baseLayerConfig.url+'/';
          }

          if (baseLayerConfig.klokan_type === 'OpenMapTiles') {
            layerOptions.url = baseLayerConfig.url + '{z}/{x}/{y}.pbf';
            newBaselayer = new VectorTileLayer({
              source: new VectorTileSource(jQuery.extend(
                sourceConfigs.klokan[baseLayerConfig.klokan_type],
                layerOptions))
            });

            fetch(baseLayerConfig.url + 'styles/' + baseLayerConfig.style +'.json').then(function(response) {
              response.json().then(function(glStyle) {
                applyStyle(newBaselayer, glStyle, 'openmaptiles');
              });
            });
          } else {
            //layerOptions.url = baseLayerConfig.url + '{z}/{x}/{y}.pbf?key='+baseLayerConfig.api_key;
             newBaselayer = new TileLayer({
               source: new TileJSON({
                  url: baseLayerConfig.url + 'styles/' + baseLayerConfig.style+'.json?key='+baseLayerConfig.api_key
               })
            });
            // newBaselayer = new VectorTileLayer({
            //   source: new VectorTileSource(jQuery.extend(
            //     sourceConfigs.klokan[baseLayerConfig.klokan_type],
            //     layerOptions))
            // });
            //
            // fetch(baseLayerConfig.url + baseLayerConfig.style+'/style.json?key='+baseLayerConfig.api_key).then(function(response) {
            //   response.json().then(function(glStyle) {
            //     applyStyle(newBaselayer, glStyle, 'openmaptiles');
            //   });
            // });
          }
        } else {
          console.warn('wrong klokan configuration!');
        }
        break;
      case 'here':
        if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.here_type) {

          if (baseLayerConfig.style === 'normal') {
            layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png' +
              '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
          } else
          if (baseLayerConfig.style === 'transit') {
            layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day.transit/{z}/{x}/{y}/256/png' +
              '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
          } else
          if (baseLayerConfig.style === 'pedestrian') {
            layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/pedestrian.day/{z}/{x}/{y}/256/png' +
              '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
          } else
          if (baseLayerConfig.style === 'terrain') {
            layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/terrain.day/{z}/{x}/{y}/256/png' +
              '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
          } else
          if (baseLayerConfig.style === 'satellite') {
            layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png' +
              '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
          } else
          if (baseLayerConfig.style === 'hybrid') {
            layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png' +
              '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
          }

          newBaselayer = new TileLayer({
            preload: Infinity,
            source: new XYZ(jQuery.extend(
              sourceConfigs.here[baseLayerConfig.here_type],
              layerOptions))
          });
        }
        else if(baseLayerConfig.hide_in_be){
          layerOptions.url = layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
          newBaselayer = new TileLayer({
            source: new XYZ(jQuery.extend(
              sourceConfigs.mapbox[baseLayerConfig.here_type],
              layerOptions))
          });
        }
        else {
          console.warn('wrong HERE configuration!');
        }
        break;
      case 'thunder':
        if (baseLayerConfig.api_key && baseLayerConfig.thunderforest_type) {

          if (baseLayerConfig.style) {
            layerOptions.url = "https://tile.thunderforest.com/"+baseLayerConfig.style+"/{z}/{x}/{y}.png?apikey="+baseLayerConfig.api_key;
          }

          newBaselayer = new TileLayer({
            source: new XYZ(jQuery.extend(
              sourceConfigs.thunderforest[baseLayerConfig.thunderforest_type],
              layerOptions))
          });
        }else if(baseLayerConfig.hide_in_be){
          layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
          newBaselayer = new TileLayer({
            source: new XYZ(jQuery.extend(
              sourceConfigs.mapbox[baseLayerConfig.thunderforest_type],
              layerOptions))
          });
        }
        else {
          console.warn('wrong Thunderforest configuration!');
        }
        break;
      case 'google':
        //@todo
        console.warn('google-maps are currently unsupported');
        break;
      case 'bing':
        if (baseLayerConfig.api_key && baseLayerConfig.style) {
          newBaselayer = new TileLayer({
            source: new BingMaps({
              culture: navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage),
              key: baseLayerConfig.api_key,
              imagerySet: baseLayerConfig.style
            })
          });
        } else {
          console.warn('wrong bing-key or invalid imagery-set!');
        }
        break;
      case 'wms':
        if(baseLayerConfig.url.indexOf('https') !== -1){
          newBaselayer = new TileLayer({
            source: new TileWMS({
              url: baseLayerConfig.url,
              params: {
                LAYERS: baseLayerConfig.params.layers,
                VERSION: baseLayerConfig.params.version,
                //FORMAT: baseLayerConfig.params.format,
                TRANSPARENT: baseLayerConfig.params.transparent
              },
              gutter: baseLayerConfig.gutter,
              attributions: baseLayerConfig.attribution + ' ' + OSM_ATTRIBUTION,
              crossOrigin: 'anonymous'
            }),
            //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
          });
        }
        else{
          newBaselayer = new TileLayer({
            source: new TileWMS({
              url: baseLayerConfig.url,
              params: {
                LAYERS: baseLayerConfig.params.layers,
                VERSION: baseLayerConfig.params.version,
                //FORMAT: baseLayerConfig.params.format,
                TRANSPARENT: baseLayerConfig.params.transparent
              },
              gutter: baseLayerConfig.gutter,
              attributions: baseLayerConfig.attribution + ' ' + OSM_ATTRIBUTION
            }),
            //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
          });
        }
        break;
      case 'image':
        var projection = new Projection({
          code: 'image',
          units: 'pixels',
          extent: baseLayerConfig.extent ? baseLayerConfig.extent : [0, 0, 1920, 1080]
        });
        newBaselayer = new Image({
          source: new ImageStatic({
            url: baseLayerConfig.imageSrc,
            imageExtent: baseLayerConfig.extent ? baseLayerConfig.extent : [0, 0, 1920, 1080],
            projection: projection
          })
        });
        // const self = this;
        // setTimeout(function(){
        //   self.mapController.map.getView().setCenter(ol.extent.getCenter(baseLayerConfig.extent ? baseLayerConfig.extent : [0, 0, 886, 435]));
        //   self.mapController.map.getView().setZoom(18);
        //   }, 3000);


        break;
      case 'geoimage':
        let  arrSource = JSON.parse(baseLayerConfig.geoImageJson);
        arrSource.url = baseLayerConfig.imageSrc ? baseLayerConfig.imageSrc : arrSource.url;
        newBaselayer = new Image(
          jQuery.extend({source: new ol_source_GeoImage(
              arrSource
            )}, layerOptions)
        );
        break;
      case 'owm':
        newBaselayer = new TileLayer({
          source: new XYZ({
            url: baseLayerConfig.url + baseLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + baseLayerConfig.api_key,
            attributions: baseLayerConfig.attribution + ' ' + OSM_ATTRIBUTION
          }),
          //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
        });
        break;
      case 'group':
        let baseLayerGroup = [];
        for(let index in baseLayerConfig['layerGroup']){
          if(baseLayerConfig['layerGroup'].hasOwnProperty(index)) {

            let element = this.createBaseLayer(null, baseLayerConfig['layerGroup'][index], sourceConfigs);
            let maxZoom = this.proxy.options.mapController.map.getView().getResolutionForZoom(baseLayerConfig['layerGroup'][index]['minZoom']);
            let minZoom = this.proxy.options.mapController.map.getView().getResolutionForZoom(baseLayerConfig['layerGroup'][index]['maxZoom']);
            element.setMinResolution(minZoom);
            element.setMaxResolution(maxZoom);
            baseLayerGroup.push(element);
          }
        }
        newBaselayer = new LayerGroup({
          layers: baseLayerGroup
        });
        break;

      default:
        console.warn('unsupported provider');
        break;
    }
    return newBaselayer;

  }

  filterLayersForBaselayer(baselayerId) {
    let arrLayers = this.proxy.layerController.arrLayers;
    for (let id in arrLayers) {
      if (arrLayers.hasOwnProperty(id)) {
        let layer = arrLayers[id];
        if (layer) {
          let showLayer = false;
          if (layer.activeForBaselayers === "all" || layer.renderSpecial) {
            continue;
          }
          else {
            if (layer.activeForBaselayers) {
              showLayer = !!layer.activeForBaselayers.includes(baselayerId);
            }
          }
          if (showLayer) {
            arrLayers[id].display = true;
            this.proxy.layerController.showLayer(id);
          } else {
            arrLayers[id].display = false;
            this.proxy.layerController.hideLayer(id);
          }
        }
      }
    }
    // let starboard = this.proxy.options.mapController.controls.starboard;
    // if (this.proxy.options.mapController.data.layerswitcher.enable) {
    //   if (starboard && starboard.initialized) {
    //     if (!starboard.plugins.layerswitcher) {
    //       starboard.plugins.layerswitcher = new Layerswitcher(starboard);
    //     }
    //     starboard.plugins.layerswitcher.loadContent();
    //     // starboard.plugins.layerswitcher.activate();
    //   }
    // }

  }

  showBaseLayer(baseLayerUid) {

    let self = this,
      layers,
      baselayer,
      addBaselayer,
      baseLayers,
      sourceConfigs = [],
      newBaselayer,
      layerOptions,
      i,
      view;
    
    let baseLayerConfig = this.arrBaselayers[baseLayerUid];
    if (this.proxy.layers_loaded) {
      this.filterLayersForBaselayer(baseLayerUid);
    } else {
      this.proxy.hook_layer_loaded.push(function() {
        self.filterLayersForBaselayer(baseLayerUid);
      });
    }


    if ((typeof baseLayerConfig !== "undefined") && !baseLayerConfig.layer) {
      // create layer
      sourceConfigs.osm = config.osm;
      sourceConfigs.stamen = config.stamen;
      //mapQuestSourceConfigs = c4g.maps.config.mapquest;
      sourceConfigs.mapbox = config.mapbox;
      sourceConfigs.klokan = config.klokan;
      sourceConfigs.here = config.here;
      sourceConfigs.thunderforest = config.thunderforest;

      //newBaselayer = new TileLayer({
      //  source: new OSM()
      //});

      layerOptions = {};

      if (baseLayerConfig.attribution) {
        if (layerOptions.attributions) {
          layerOptions.attributions = layerOptions.attributions + ' ' + baseLayerConfig.attribution;
        } else {
          layerOptions.attributions = OSM_ATTRIBUTION + ' ' + baseLayerConfig.attribution;
        }
      } else if (!layerOptions.attributions) {
        switch (baseLayerConfig.provider) {
          case 'osm':
            if (sourceConfigs.osm[baseLayerConfig.style]) {
              layerOptions.attributions = sourceConfigs.osm[baseLayerConfig.style].attributions;
            } else {
              layerOptions.attributions = OSM_ATTRIBUTION;
            }
            break;
          case 'stamen':
            layerOptions.attributions = sourceConfigs.stamen[baseLayerConfig.style].attributions;
            break;
          case 'mapbox':
            layerOptions.attributions = sourceConfigs.mapbox[baseLayerConfig.mapbox_type].attributions;
            break;
          case 'klokan':
            layerOptions.attributions = sourceConfigs.klokan[baseLayerConfig.klokan_type].attributions;
            break;
          case 'here':
            layerOptions.attributions = sourceConfigs.here[baseLayerConfig.here_type].attributions;
            break;
          case 'thunder':
            layerOptions.attributions = sourceConfigs.thunderforest[baseLayerConfig.thunderforest_type].attributions;
            break;
          case 'con4gisIo':
            layerOptions.attributions = 'Mapservices via <a href="https://con4gis.io" target="_blank" rel="noopener">con4gis.io</a>. '+OSM_ATTRIBUTION;
            break;
          default:
            layerOptions.attributions = OSM_ATTRIBUTION;
            break;
        }
      }

      //ToDo helper class for attributions

      //additional attribution
      if (this.mapController.data && this.mapController.data.attribution && this.mapController.data.attribution.additional) {
        if (layerOptions.attributions) {
          let additionalAttribution = this.mapController.data.attribution.additional;

          exists = false;
          for (i = 0; i < layerOptions.attributions.length; i += 1) {
            if (layerOptions.attributions[i] === additionalAttribution) {
              exists = true;
              break;
            }
          }

          if (!exists) {
            layerOptions.attributions = layerOptions.attributions + ' ' + additionalAttribution;
          }
        } else {
          layerOptions.attributions = this.mapController.data.attribution.additional;
        }
      }

      //ToDo type class for geosearch_engine
      //geosearch attribution
      if (this.mapController.data.geosearch) {

        if (this.mapController.data &&
          this.mapController.data.attribution) {

         let geosearchAttribution = this.mapController.data.attribution.geosearch ? this.mapController.data.attribution.geosearch : "";
          var exists = false;
          if (!layerOptions.attributions) {
            layerOptions.attributions = [];
          }
          for (i = 0; i < layerOptions.attributions.length; i += 1) {
            if (layerOptions.attributions[i] === geosearchAttribution) {
              exists = true;
              break;
            }
          }

          if (!exists) {
            layerOptions.attributions = layerOptions.attributions + ' ' + geosearchAttribution;
          }
          else {
            layerOptions.attributions = geosearchAttribution;
          }

          let routerAttribution = this.mapController.data.attribution.router ? " - " + this.mapController.data.attribution.router : "";
          var exists = false;
          if (!layerOptions.attributions) {
            layerOptions.attributions = [];
          }
          for (i = 0; i < layerOptions.attributions.length; i += 1) {
            if (layerOptions.attributions[i] === routerAttribution) {
              exists = true;
              break;
            }
          }

          if (!exists) {
            layerOptions.attributions = layerOptions.attributions + ' ' + routerAttribution;
          }
          else {
            layerOptions.attributions = routerAttribution;
          }
        }
      }

      if (baseLayerConfig.sorting) {
        layerOptions.sort = baseLayerConfig.sorting;
      }
      if (baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0) {
        layerOptions.minZoom = baseLayerConfig.minZoom;
      }
      if (baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0) {
        layerOptions.maxZoom = baseLayerConfig.maxZoom;
      }

      newBaselayer = this.createBaseLayer(layerOptions, baseLayerConfig, sourceConfigs);
      if (baseLayerConfig.hasOverlays) {
        for (i = 0; i< baseLayerConfig.overlays.length; i++) {
          if (!baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id]) {
            baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id] = new C4gOverlay(baseLayerConfig.overlays[i],this.mapController);
            baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id].layer = baseLayerConfig.overlayController.showOverlayLayer(baseLayerConfig.overlays[i].id);
          }
        }
      }

      this.arrBaselayers[baseLayerUid].layer = newBaselayer;
    }

    layers = this.mapController.map.getLayers();

    // secure
    if (layers.item(0).get('checkSum') === "baseMapsLayer") {
      baseLayers = layers.item(0).getLayers();

      if (typeof this.arrBaselayers[baseLayerUid] !== "undefined") {
        baselayer = this.arrBaselayers[baseLayerUid].layer;

        if (baselayer) {
          addBaselayer = true;
          baseLayers.forEach(function (element, index, array) {
            if (element && (element === baselayer)) {
              element.setVisible(true);
              addBaselayer = false;
            } else if (element) {
              element.setVisible(false);
            } else {
              addBaselayer = false;
            }
          }, this);

          if (addBaselayer) {
            baseLayers.push(baselayer);
          }
        }

        view = this.mapController.map.getView();
        var zoom = view.getZoom();
        var center = view.getCenter();
        if ((baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0) ||
          (baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0)) {
          if (baseLayerConfig.minZoom && (view.getZoom() < baseLayerConfig.minZoom)) {
            view.setZoom(baseLayerConfig.minZoom);
          } else if (baseLayerConfig.maxZoom && (view.getZoom() > baseLayerConfig.maxZoom)) {
            view.setZoom(baseLayerConfig.maxZoom);
          }

          var mapData = this.mapController.data;
          // if (mapData.zoomlevel || mapData.mouseposition) {
          view.setMinZoom(parseInt(baseLayerConfig.minZoom, 10) || 0);
          view.setMaxZoom(parseInt(baseLayerConfig.maxZoom, 10) || 19);
          this.mapController.map.setView(view);
          // }
        }
      }
    }

    if (typeof baseLayerConfig !== "undefined") {
      this.proxy.activeBaselayerId = baseLayerConfig.id;

      utils.callHookFunctions(this.proxy.hook_baselayer_visibility, baseLayerConfig);

      /**
       * Cesium integration
       */
      if (typeof baseLayerConfig !== "undefined") {
        var mapData = this.mapController.data;
        if (mapData.cesium && mapData.cesium.enable && (mapData.cesium.always || baseLayerConfig.cesium)) {
          if (!this.ol3d) {
            this.ol3d = new OLCesium({
              map: this.mapController.map,
              createSynchronizers: false/*,
                            time() {
                                const val = timeElt.value;
                                if (ol3d.getCesiumScene().globe.enableLighting && val) {
                                    const d = new Date();
                                    d.setUTCHours(val);
                                    return Cesium.JulianDate.fromDate(d);
                                }
                                return Cesium.JulianDate.now();
                            }*/});
          }
          /*const scene = ol3d.getCesiumScene();
          const terrainProvider = new Cesium.CesiumTerrainProvider({
              url: '//assets.agi.com/stk-terrain/world',
              requestVertexNormals: true
          });
          scene.terrainProvider = terrainProvider;*/
          this.ol3d.setEnabled(true);
          /*window['toggleTime'] = function() {
              scene.globe.enableLighting = !scene.globe.enableLighting;
              if (timeElt.style.display == 'none') {
                  timeElt.style.display = 'inline-block';
              } else {
                  timeElt.style.display = 'none';
              }
          };*/

          if (!jQuery(".c4g-control-container-top-left").hasClass("c4g-cesium-enabled")) {
            jQuery(".c4g-control-container-top-left").addClass("c4g-cesium-enabled");
          }

        } else {
          if (this.ol3d && this.ol3d.getEnabled()) {
            this.ol3d.setEnabled(false);
          }
          if (jQuery(".c4g-control-container-top-left").hasClass("c4g-cesium-enabled")) {
            jQuery(".c4g-control-container-top-left").removeClass("c4g-cesium-enabled");
          }
        }
      }
    }
  } // end of "showBaseLayer()"
}