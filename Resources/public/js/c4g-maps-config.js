 'use strict';
export var config = {
  osm: {

    CycleMap: {
      attributions: 'Style by <a target="_blank" href="http://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
    },

    German: {
      attributions: 'Style by <a target="_blank" href="http://www.openstreetmap.de/germanstyle.html">openstreetmap.de</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
    },

    LandscapeMap: {
      attributions: 'Style by <a target="_blank" href="http://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/landscape/{z}/{x}/{y}.png'
    },

    Mapnik: {
      attributions: ol.source.OSM.ATTRIBUTION,
      crossOrigin: 'anonymous',
    },

    NONE: '' // last line
  },

  stamen: {
    Toner: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'toner',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous',
    },

    TonerLabels: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'toner-labels',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous',
    },

    TonerLines: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'toner-lines',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous',
    },

    Terrain: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'terrain',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous',
    },

    Watercolor: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'watercolor',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous',
    },

    NONE: ''
  },

  mapquest: {

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
 },

  mapbox: {

    Mapbox: {
      tileSize: [512, 512],
      attributions: '© <a target="_blank" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous',
    },

    MapboxClassic: {
      attributions: '© <a target="_blank" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous',
    }
  },

  klokan: {

    OpenMapTiles: {
      format: new ol.format.MVT(),
      tileGrid:  ol.tilegrid.createXYZ({tileSize: 512, maxZoom: 22}), //ToDo maxZoom from configuration
      tilePixelRatio: 8,
      attributions: '© <a target="_blank" href="https://openmaptiles.org/">OpenMapTiles</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    },

    TileHosting: {
      format: new ol.format.MVT(),
      tileGrid:  ol.tilegrid.createXYZ({tileSize: 512, maxZoom: 22}), //ToDo maxZoom from configuration
      tilePixelRatio: 8,
      attributions: '© <a target="_blank" href="https://tilehosting.com/">TileHosting</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous',
    }
  },

  here: {

    HERE: {
      tileSize: [512, 512],
      attributions: 'Map Tiles © <a target="_blank" href="https://developer.here.com">HERE</a>'+ ' ' +
        ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous',
    }

  },

  thunderforest: {

    Thunderforest: {
      tileSize: [512, 512],
      attributions: 'Map Tiles © <a target="_blank" href="https://www.thunderforest.com/">Thunderforest</a>' + ' ' +
        ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 19,
      crossOrigin: 'anonymous',
    }

  }
};
