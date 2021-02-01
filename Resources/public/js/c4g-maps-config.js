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

import {MVT} from "ol/format";
import {createXYZ} from "ol/tilegrid";

//copy link to add noopener
export const OSM_REL_ATTRIBUTION = '&#169; ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> ' +
    'contributors.';

export var config = {
  osm: {

    CycleMap: {
      attributions: 'Style by <a target="_blank" rel="noopener" href="https://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' +
          OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
    },

    German: {
      attributions: 'Style by <a target="_blank" rel="noopener" href="https://www.openstreetmap.de/germanstyle.html">openstreetmap.de</a>' + ' ' +
          OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
    },

    LandscapeMap: {
      attributions: 'Style by <a target="_blank" rel="noopener" href="https://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' +
          OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/landscape/{z}/{x}/{y}.png'
    },

    Mapnik: {
      attributions: OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous',
    },

    NONE: '' // last line
  },

  stamen: {
    Toner: {
      attributions: 'Map tiles by <a target="_blank" rel="noopener" href="https://stamen.com">Stamen Design</a>, under <a  target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a  target="_blank" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a  target="_blank" rel="noopener" href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      layer: 'toner',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous',
    },

    TonerLabels: {
      attributions: 'Map tiles by <a target="_blank" rel="noopener" href="https://stamen.com">Stamen Design</a>, under <a target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_blank" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_blank" rel="noopener" href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      layer: 'toner-labels',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous',
    },

    TonerLines: {
      attributions: 'Map tiles by <a target="_blank" rel="noopener" href="https://stamen.com">Stamen Design</a>, under <a target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_blank" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_blank" rel="noopener" href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      layer: 'toner-lines',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous',
    },

    Terrain: {
      attributions: 'Map tiles by <a target="_blank" rel="noopener" href="https://stamen.com">Stamen Design</a>, under <a target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_blank" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_blank" rel="noopener" href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      layer: 'terrain',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous',
    },

    Watercolor: {
      attributions: 'Map tiles by <a target="_blank" rel="noopener" href="https://stamen.com">Stamen Design</a>, under <a target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_blank" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
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
      attributions: '© <a target="_blank" rel="noopener" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' +
          OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous',
    },

    MapboxClassic: {
      attributions: '© <a target="_blank" rel="noopener" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' +
          OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous',
    }
  },
  otm: {
    attributions: 'Kartendaten: ' + OSM_REL_ATTRIBUTION + ', SRTN | Kartendarstellung © <a target="_blank" rel="noopener" href="https://opentopomap.org/">OpenTopoMap</a> (<a target="_blank" rel="noopener" href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  },
  mapz: {
    attributions: '© 2021 <a target=\"_blank\" href=\"http://www.mapz.com\">mapz.com </a>' + ' ' + OSM_REL_ATTRIBUTION,
    minZoom: 0,
    maxZoom: 22,
    tilePixelRatio: 2
  },
  klokan: {

    OpenMapTiles: {
      format: new MVT(),
      tileGrid:  createXYZ({tileSize: 512, maxZoom: 22}), //ToDo maxZoom from configuration
      tilePixelRatio: 8,
      attributions: '© <a target="_blank" rel="noopener" href="https://openmaptiles.org/">OpenMapTiles</a>' + ' ' +
          OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    },

    TileHosting: {
      format: new MVT(),
      tileGrid:  createXYZ({tileSize: 512, maxZoom: 22}), //ToDo maxZoom from configuration
      tilePixelRatio: 8,
      attributions: '© <a target="_blank" rel="noopener" href="https://tilehosting.com/">TileHosting</a>' + ' ' +
          OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous',
    }
  },

  here: {

    HERE: {
      tileSize: [512, 512],
      attributions: 'Map Tiles &copy; ' + new Date().getFullYear() + ' ' +
          '<a target="_blank" rel="noopener" href="https://developer.here.com">HERE</a>' + ' ' +
          OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous',
    }
  },

  thunderforest: {

    Thunderforest: {
      tileSize: [512, 512],
      attributions: 'Map Tiles © <a target="_blank" rel="noopener" href="https://www.thunderforest.com/">Thunderforest</a>' + ' ' +
          OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 19,
      crossOrigin: 'anonymous',
    }

  }
};
