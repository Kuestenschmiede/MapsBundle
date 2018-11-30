'use strict';

export class GeoPicker {


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

    this.options = options || {};

    if (!this.options.mapContainer || !this.options.mapContainer.data) {
      console.warn('The GeoPicker needs a "mapContainer" in order to work.');
      return false;
    }

    mapData = this.options.mapContainer.data;
    mapContainer = this.options.mapContainer;
    // configurate geopicker
    this.$fieldGeoX = $(mapData.geopicker.input_geo_x);
    this.$fieldGeoY = $(mapData.geopicker.input_geo_y);

    this.opticLayerSource = new ol.source.Vector({});
    this.opticLayerVector = new ol.layer.Vector({
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
        latRnd = Math.round((Math.random() * (99999999999 - 1)) + 1);
        lonRnd = Math.round((Math.random() * (99999999999 - 1)) + 1);
        if (latRnd > 49999999999) {
          lat = parseInt(lat) - latRnd;
        } else {
          lat = parseInt(lat) + latRnd;
        }
        if (lonRnd < 50000000000) {
          lon = parseInt(lon) - lonRnd;
        } else {
          lon = parseInt(lon) + lonRnd;
        }
        lat = lat + "";
        lon = lon + "";
        lat = lat.substr(0, latIdx) + '.' + lat.substr(latIdx, lat.length - latIdx);
        lon = lon.substr(0, lonIdx) + '.' + lon.substr(lonIdx, lon.length - lonIdx);
      }

      this.opticLayerFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([parseFloat(lon), parseFloat(lat)])),
        pickerColor: [0, 180, 100, 1],
        anonymous: mapData.geopicker.anonymous
      });

      this.opticLayerSource.addFeature(this.opticLayerFeature);

      mapContainer.map.getView().fit(this.opticLayerSource.getExtent(), mapContainer.map.getSize());
      // set zoom so we can see some tiles without error
      mapContainer.map.getView().setZoom(15);
    } else if (mapData.geoLocation && typeof mapData.geoLocation.setTracking === 'function') {
      mapData.geoLocation.setTracking(true);
    }
    mapContainer.map.addLayer(this.opticLayerVector);

    //TODO wenn geopicker.clickDisabled (oder so) gesetzt ist, this.options.handleEvent = function(){}

    // inheritance-stuff
    ol.interaction.Interaction.call(this, {
      handleEvent: this.options.handleEvent || this.handleEvent
      // handleEvent: this.options.handleEvent || c4g.maps.interaction.GeoPicker.handleEvent
    });
    ol.inherits(this, ol.interaction.Interaction);
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
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 2,
            fill: new ol.style.Fill({
              color: color
            }),
            stroke: new ol.style.Stroke({
              color: white,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
      result.push(
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 20,
            stroke: new ol.style.Stroke({
              color: white,
              width: 4
            })
          }),
          zIndex: Infinity
        }));
      result.push(
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 20,
            stroke: new ol.style.Stroke({
              color: color,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
      result.push(
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 40,
            stroke: new ol.style.Stroke({
              color: white,
              width: 4
            })
          }),
          zIndex: Infinity
        }));
      result.push(
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 40,
            stroke: new ol.style.Stroke({
              color: color,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
    }

    result.push(
      new ol.style.Style({
        image: new ol.style.Circle({
          radius: 60,
          stroke: new ol.style.Stroke({
            color: white,
            width: 4
          })
        }),
        zIndex: Infinity
      }));

    result.push(
      new ol.style.Style({
        image: new ol.style.Circle({
          radius: 60,
          stroke: new ol.style.Stroke({
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

    arrLatLon = ol.proj.toLonLat(coordinate);

    this.opticLayerFeature = new ol.Feature({
      geometry: new ol.geom.Point(coordinate)
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