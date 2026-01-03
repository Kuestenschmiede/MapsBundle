/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import {Interaction} from "ol/interaction";
import {Feature} from "ol";
import {Point} from "ol/geom";
import {Circle, Fill, Stroke, Style} from "ol/style";
import {Vector} from "ol/layer";
import {Vector as VectorSource} from "ol/source";
import {fromLonLat, toLonLat} from "ol/proj";
import {isEmpty} from 'ol/extent';

'use strict';

export class GeoPicker extends Interaction {


  /**
   *
   * @param options
   * @returns {boolean}
   * @constructor
   */
  constructor(options) {
    var mapData,
      mapContainer,
      lat,
      lon,
      latIdx,
      lonIdx,
      latRnd,
      lonRnd;

    super({handleEvent: options.handleEvent});
    this.options = options || {};

    if (!this.options.mapContainer || !this.options.mapContainer.data) {
      console.warn('The GeoPicker needs a "mapContainer" in order to work.');
      return false;
    }

    mapData = this.options.mapContainer.data;
    mapContainer = this.options.mapContainer;
    // configurate geopicker
    this.$fieldGeoX = jQuery(mapData.geopicker.input_geo_x);
    this.$fieldGeoY = jQuery(mapData.geopicker.input_geo_y);

    this.opticLayerSource = new VectorSource({});
    this.opticLayerVector = new Vector({
      source: this.opticLayerSource,
      style: this.geoPickerStyleFunction
    });
    this.opticLayerFeature = null;

    if (this.$fieldGeoX.val() && this.$fieldGeoY.val()) {
      lat = this.$fieldGeoY.val();
      lon = this.$fieldGeoX.val();

      if (mapData.geopicker.anonymous) {
        this.$fieldGeoY.remove();
        this.$fieldGeoX.remove();

        latIdx = lat.indexOf('.');
        lonIdx = lon.indexOf('.');
        lat = lat.replace(/\D/g, "");
        lon = lon.replace(/\D/g, "");
        latRnd = Math.round((Math.random() * (9999999999 - 1)) + 1);
        lonRnd = Math.round((Math.random() * (9999999999 - 1)) + 1);
        if (latRnd > 4999999999) {
          lat = parseInt(lat) - latRnd;
        } else {
          lat = parseInt(lat) + latRnd;
        }
        if (lonRnd < 5000000000) {
          lon = parseInt(lon) - lonRnd;
        } else {
          lon = parseInt(lon) + lonRnd;
        }
        lat = lat + "";
        lon = lon + "";
        lat = lat.substr(0, latIdx) + '.' + lat.substr(latIdx, lat.length - latIdx);
        lon = lon.substr(0, lonIdx) + '.' + lon.substr(lonIdx, lon.length - lonIdx);
      }

      this.opticLayerFeature = new Feature({
        geometry: new Point(fromLonLat([parseFloat(lon), parseFloat(lat)])),
        pickerColor: [0, 180, 100, 1],
        anonymous: mapData.geopicker.anonymous
      });

      this.opticLayerSource.addFeature(this.opticLayerFeature);

      if (!isEmpty(this.opticLayerSource.getExtent())) {
        mapContainer.map.getView().fit(this.opticLayerSource.getExtent(), mapContainer.map.getSize());
      }

      // set zoom so we can see some tiles without error
      mapContainer.map.getView().setZoom(15);
    } else if (mapData.geoLocation && typeof mapData.geoLocation.setTracking === 'function') {
      mapData.geoLocation.setTracking(true);
    }
    mapContainer.map.addLayer(this.opticLayerVector);

    //TODO wenn geopicker.clickDisabled (oder so) gesetzt ist, this.options.handleEvent = function(){}
  };


  geoPickerStyleFunction(feature, projection, getId) {
    var color,
      white,
      result;

    if (getId) {
      return -1;
    }

    white = [255, 255, 255, 1];
    if (feature && typeof feature.get === 'function' && feature.get('pickerColor')) {
      color = feature.get('pickerColor');
    } else {
      color = [200, 0, 0, 0.7];
    }

    result = [];
    if (feature && typeof feature.get === 'function' && !feature.get('anonymous')) {
      result.push(
        new Style({
          image: new Circle({
            radius: 2,
            fill: new Fill({
              color: color
            }),
            stroke: new Stroke({
              color: white,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
      result.push(
        new Style({
          image: new Circle({
            radius: 20,
            stroke: new Stroke({
              color: white,
              width: 4
            })
          }),
          zIndex: Infinity
        }));
      result.push(
        new Style({
          image: new Circle({
            radius: 20,
            stroke: new Stroke({
              color: color,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
      result.push(
        new Style({
          image: new Circle({
            radius: 40,
            stroke: new Stroke({
              color: white,
              width: 4
            })
          }),
          zIndex: Infinity
        }));
      result.push(
        new Style({
          image: new Circle({
            radius: 40,
            stroke: new Stroke({
              color: color,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
    }

    result.push(
      new Style({
        image: new Circle({
          radius: 60,
          stroke: new Stroke({
            color: white,
            width: 4
          })
        }),
        zIndex: Infinity
      }));

    result.push(
      new Style({
        image: new Circle({
          radius: 60,
          stroke: new Stroke({
            color: color,
            width: 2
          })
        }),
        zIndex: Infinity
      }));

    return result;
  }

  handleEvent(mapBrowserEvent) {
    if (mapBrowserEvent.type === "singleclick") {
      if (!this.options.disableClickEvent && !this.options.mapContainer.data.geopicker.disabled) {
        return !this.pick(mapBrowserEvent.coordinate);
      }
    }

    return true;
  }

  pick(coordinate) {
    var arrLatLon;

    arrLatLon = toLonLat(coordinate);

    this.opticLayerFeature = new Feature({
      geometry: new Point(coordinate)
    });

    this.opticLayerSource.clear();
    this.opticLayerSource.addFeature(this.opticLayerFeature);

    this.$fieldGeoX.val(arrLatLon[0]);
    this.$fieldGeoY.val(arrLatLon[1]);
    this.$fieldGeoX.change();
    this.$fieldGeoY.change();


    return true;
  }
}