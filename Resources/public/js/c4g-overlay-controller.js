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

import {config} from "./c4g-maps-config";
import {OSM, Stamen, TileWMS, XYZ} from "ol/source";
import {Image, Tile} from "ol/layer";
import ol_source_GeoImage from "ol-ext/source/GeoImage";

//copy link to add noopener
export const OSM_REL_ATTRIBUTION = '&#169; ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> ' +
    'contributors.';

export class C4gOverlayController {

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

    let isSecure = window.isSecureContext;
    if (isSecure) {
      layerOptions.crossOrigin = 'anonymous';
    }

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
        } else if (overlayLayerConfig.style === 'osm_custom') {
          // custom
          noUrl = true;
          if (overlayLayerConfig.attribution) {
            layerOptions.attributions = overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION;
          }

          if (overlayLayerConfig.url) {
            layerOptions.url = overlayLayerConfig.url;
            noUrl = false;
          } else if (overlayLayerConfig.urls && overlayLayerConfig.urls.length > 0) {
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
      case 'sea':
        // custom
          noUrl = true;
          if (overlayLayerConfig.attribution) {
            layerOptions.attributions = overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION;
          }
          if (overlayLayerConfig.urls) {
            layerOptions.urls = overlayLayerConfig.urls;
            noUrl = false;
          }
          if (!noUrl) {
            overlayLayer = new Tile({
              source: new XYZ(layerOptions)
            });
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
            attributions: overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION
          }),
          //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
        });
        break;
      case 'owm':
        overlayLayer = new Tile({
          source: new XYZ({
            url: overlayLayerConfig.url + overlayLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + overlayLayerConfig.api_key,
            attributions: overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION
          }),
          //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
        });
        break;
      case 'geoimage':
        let objSource = JSON.parse(overlayLayerConfig.geoImageJson);
        objSource.url = overlayLayerConfig.imageSrc ? overlayLayerConfig.imageSrc : objSource.url;
        objSource.attributions = overlayLayerConfig.attribution;
        overlayLayer = new Image({
          source: new ol_source_GeoImage(
            objSource
          )
        });
        break;
      default:
        console.warn('unsupported provider');
        break;
    }
    this.arrOverlays[overlayId].layer = overlayLayer;
    // this.arrOverlays[overlayId].changeOpacity(parseInt(overlayLayerConfig.opacity)/100);
    this.arrOverlays[overlayId].changeOpacity(overlayLayerConfig.opacity);
    return this.arrOverlays[overlayId].layer
  }
}