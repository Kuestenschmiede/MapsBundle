/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

import {C4gOverlay} from "./c4g-overlay"
import {config} from "./c4g-maps-config";
import {OSM} from "ol/source";
import {Tile} from "ol/layer";
import {Stamen} from "ol/source";
import {XYZ, BingMaps, TileWMS} from "ol/source";

export class C4gOverlayController{
  constructor(baselayer) {
    this.baselayer = baselayer;
    this.arrOverlays = [];
  }

  showOverlayLayer(overlayId) {
    var self = this,
      overlayLayerConfig,
      osmSourceConfigs = config.osm,
      stamenSourceConfigs = config.stamen,
      layerOptions,
      overlayLayer,
      noUrl;

    layerOptions = {};
    overlayLayer = new Tile({
      source: new OSM()
    });

    overlayLayerConfig = this.arrOverlays[overlayId];

    switch (overlayLayerConfig.provider) {
      case 'osm':
        if (osmSourceConfigs[overlayLayerConfig.style]) {
          overlayLayer = new Tile({
            source: new OSM(
              jQuery.extend(
                osmSourceConfigs[overlayLayerConfig.style],
                layerOptions
              )
            )
          });
        } else if (stamenSourceConfigs[overlayLayerConfig.style]) {
          // Stamen
          overlayLayer = new Tile({
            source: new Stamen(
              jQuery.extend(
                stamenSourceConfigs[overlayLayerConfig.style],
                layerOptions
              )
            )
          });
          // } else if (mapQuestSourceConfigs[overlayLayerConfig.style]) {
          //   // mapQuest
          //   overlayLayer = new Tile({
          //     source: new ol.source.MapQuest(mapQuestSourceConfigs[overlayLayerConfig.style])
          //   });
        } else if (overlayLayerConfig.style === 'osm_custom') {
          // custom
          noUrl = true;
          if (overlayLayerConfig.attribution) {
            layerOptions.attributions = overlayLayerConfig.attribution + ' ' + OSM.ATTRIBUTION;
          }

          if (overlayLayerConfig.url) {
            layerOptions.url = overlayLayerConfig.url;
            noUrl = false;
          } else if (overlayLayerConfig.urls) {
            layerOptions.urls = overlayLayerConfig.urls;
            noUrl = false;
          }
          if (!noUrl) {
            overlayLayer = new Tile({
              source: new XYZ(layerOptions)
            });
          } else {
            console.warn('custom url(s) missing -> switch to default');
          }
        } else {
          console.warn('unsupported osm-style -> switch to default');
        }
        break;
      case 'google':
        //@todo
        console.warn('google-maps are currently unsupported');
        break;
      case 'bing':
        if (baseLayerConfig.apiKey && overlayLayerConfig.style) {
          overlayLayer = new Tile({
            source: new BingMaps({
              culture: navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage),
              key: overlayLayerConfig.apiKey,
              imagerySet: overlayLayerConfig.style
            })
          });
        } else {
          console.warn('wrong bing-key or invalid imagery-set!');
        }
        break;
      case 'wms':
        overlayLayer = new Tile({
          source: new TileWMS({
            url: overlayLayerConfig.url,
            params: {
              LAYERS: overlayLayerConfig.params.layers,
              VERSION: overlayLayerConfig.params.version,
              //FORMAT: overlayLayerConfig.params.format,
              TRANSPARENT: overlayLayerConfig.params.transparent
            },
            gutter: overlayLayerConfig.gutter,
            attributions: overlayLayerConfig.attribution + ' ' + OSM.ATTRIBUTION
          }),
          //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
        });
        break;
      case 'owm':
        overlayLayer = new Tile({
          source: new XYZ({
            url: overlayLayerConfig.url + overlayLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + overlayLayerConfig.api_key,
            attributions: overlayLayerConfig.attribution + ' ' + OSM.ATTRIBUTION
          }),
          //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
        });
        break;
      case 'geoimage':
        let objSource = JSON.parse(overlayLayerConfig.geoImageJson);
        objSource.url = overlayLayerConfig.imageSrc ? overlayLayerConfig.imageSrc : objSource.url;
        overlayLayer = new ol.layer.Image({
          source: new ol.source.GeoImage(
            objSource
          )
        });
        break;
      default:
        console.warn('unsupported provider');
        break;
    }
    this.arrOverlays[overlayId].layer = overlayLayer;
    this.arrOverlays[overlayId].changeOpacity(parseInt(overlayLayerConfig.opacity)/100);
    return this.arrOverlays[overlayId].layer
  }
}