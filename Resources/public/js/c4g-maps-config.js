// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.config = this.c4g.maps.config || {};

(function ($, c4g) {
  'use strict';

  /**
   * osmSourceDefinitions
   */
  c4g.maps.config.osm = $.extend(c4g.maps.config.osm, {

    CycleMap: {
      attributions: 'Style by <a target="_blank" href="http://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
    },

    German: {
      attributions: 'Style by <a target="_blank" href="http://www.openstreetmap.de/germanstyle.html">openstreetmap.de</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      crossOrigin: null,
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
    },

    GermanTransport: {
      attributions: 'Style by <a target="_blank" href="http://www.memomaps.de">Memomaps</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      crossOrigin: null,
      minZoom: 0,
      maxZoom: 19,
      url: 'http://tile.memomaps.de/tilegen/{z}/{x}/{y}.png'
    },

    LandscapeMap: {
      attributions: 'Style by <a target="_blank" href="http://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/landscape/{z}/{x}/{y}.png'
    },

    Mapnik: {
      attributions: ol.source.OSM.ATTRIBUTION,
    },

    TransportMap: {
      attributions: 'Style by <a target="_blank" href="http://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' +ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 19,
      url: 'http://{a-c}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png'
    },

    NONE: '' // last line
  }); // end of "osmSourceDefinitions" ---

  /**
   * stamenSourceDefinitions
   */
  c4g.maps.config.stamen = $.extend(c4g.maps.config.stamen, {

    Toner: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'toner',
      minZoom: 0,
      maxZoom: 18
    },

    TonerLabels: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'toner-labels',
      minZoom: 0,
      maxZoom: 18
    },

    TonerLines: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'toner-lines',
      minZoom: 0,
      maxZoom: 18
    },

    Terrain: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'terrain',
      minZoom: 0,
      maxZoom: 18
    },

    Watercolor: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'watercolor',
      minZoom: 0,
      maxZoom: 18
    },

    NONE: ''
  });

  /**
   * mapquestSourceDefinitions
   */
  c4g.maps.config.mapquest = $.extend(c4g.maps.config.mapquest, {

    MapQuestOpen: {
      layer: 'osm'
    },

    MapQuestHyb: {
      layer: 'hyb'
    },

    MapQuestSat: {
      layer: 'sat'
    },

    NONE: ''
  });

  /**
   * mapboxSourceDefinitions
   */
  c4g.maps.config.mapbox = {

    Mapbox: {
      tileSize: [512, 512],
      attributions: '© <a target="_blank" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22
    },

    MapboxClassic: {
      attributions: '© <a target="_blank" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22
    }
  };

    /**
     * klokanSourceDefinitions
     */
    //ToDo not ready
    c4g.maps.config.klokan = {

        OpenMapTiles: {
            format: new ol.format.MVT(),
            tileGrid:  ol.tilegrid.createXYZ({tileSize: 512, maxZoom: 22}), //ToDo maxZoom from configuration
            tilePixelRatio: 8,
            attributions: '© <a target="_blank" href="https://openmaptiles.org/">OpenMapTiles</a>' + ' ' +
            ol.source.OSM.ATTRIBUTION,
            minZoom: 0,
            maxZoom: 22
        },

        TileHosting: {
            format: new ol.format.MVT(),
            tileGrid:  ol.tilegrid.createXYZ({tileSize: 512, maxZoom: 22}), //ToDo maxZoom from configuration
            tilePixelRatio: 8,
            attributions: '© <a target="_blank" href="https://tilehosting.com/">TileHosting</a>' + ' ' +
            ol.source.OSM.ATTRIBUTION,
            minZoom: 0,
            maxZoom: 22
        }
    };

    /**
     * hereSourceDefinitions
     */
    c4g.maps.config.here = {

        HERE: {
            tileSize: [512, 512],
            attributions: 'Map Tiles © <a target="_blank" href="https://developer.here.com">HERE</a>'+ ' ' +
                ol.source.OSM.ATTRIBUTION,
            minZoom: 0,
            maxZoom: 22
        }

    };

    /**
     * thunderforestSourceDefinitions
     */
    c4g.maps.config.thunderforest = {

        Thunderforest: {
            tileSize: [512, 512],
            attributions: 'Map Tiles © <a target="_blank" href="https://www.thunderforest.com/">Thunderforest</a>' + ' ' +
                ol.source.OSM.ATTRIBUTION,
            minZoom: 0,
            maxZoom: 19
        }

    };



}(jQuery, this.c4g));