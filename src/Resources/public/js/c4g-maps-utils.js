/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import * as popupFunctionsDE from "./c4g-maps-popup-info-de";
import * as popupFunctionsEN from "./c4g-maps-popup-info-en";
import {Vector} from "ol/layer";
import Circle from "ol/geom/Circle";
import {transform} from "ol/proj";
import {getArea, getDistance} from "ol/sphere";
import {Extent} from "ol/interaction";
import {Vector as VectorSource} from "ol/source";
import {extend} from "ol/extent";
import JSBI from 'jsbi/dist/jsbi.mjs';


let popupFunctions = popupFunctionsDE;

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    popupFunctions = popupFunctionsDE;
  } else if (mapData.lang === "en") {
    popupFunctions = popupFunctionsEN;
  } else {
    // fallback
    popupFunctions = popupFunctionsEN;
  }
} else {
  popupFunctions = popupFunctionsEN;
}

export var utils = {
  /**
   *  Converts the first letter of a given string to uppercase, leaving the remaining string untouched.
   *
   *  @param    {string}    the string to capitalize
   *
   *  @return   {string}    the capitalized string
   */
  capitalizeFirstLetter: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },


  /**
   * Generate an unique id.
   *
   * The id is 9 characters long and prefixed with an underscore.
   *
   * @return  {string}  The generated id.
   */
  getUniqueId: function () {
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
  encodeGeoJsonProperty: function (input) {
    var output;

    if (!input) {
      return '';
    }

    output = input.replace(
      /\\/g, '\\\\'
    ).replace(
      /\"/g, '\'\''
    ).replace(
      /Ä/g, '&Auml;'
    ).replace(
      /ä/g, '&auml;'
    ).replace(
      /Ö/g, '&Ouml;'
    ).replace(
      /ö/g, '&ouml;'
    ).replace(
      /Ü/g, '&Uuml;'
    ).replace(
      /ü/g, '&uuml;'
    );

    return output;
  }, // end of encodeGeoJsonProperty()
  removeUmlauts: function (input) {
    if (!input) {
      return '';
    }
    return input.toLowerCase().replace(/\s/g, ""
    ).replace(
        /\\/g, '\\\\'
    ).replace(
        /\"/g, '\'\''
    ).replace(
        /ä/g, 'ae'
    ).replace(
        /ö/g, 'oe'
    ).replace(
        /ü/g, 'ue'
    ).replace(
        /ß/g, 'ss'
    );
  },

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
  decodeGeoJsonProperty: function (input) {
    var output;

    if (!input) {
      return '';
    }
    if (typeof input !== "string") {
      input = input + "";
    }

    output = input.replace(
      /\\\\/g, '\\'
    ).replace(
      /\'\'/g, '\"'
    ).replace(
      /&Auml;/g, 'Ä'
    ).replace(
      /&auml;/g, 'ä'
    ).replace(
      /&Ouml;/g, 'Ö'
    ).replace(
      /&ouml;/g, 'ö'
    ).replace(
      /&Uuml;/g, 'Ü;'
    ).replace(
      /&uuml;/g, 'ü'
    );

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
  setUrlParam: function (param, opt_getKey, opt_execute) {
    var link,
      searchParam,
      paramReplaced,
      i;

    if (typeof param === undefined) {
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
        searchParam = location.search.replace(
          /([^=\?\&]+)=([^&]+)/gi,
          function (match, key, value, offset, originString) {
            if (key === opt_getKey) {
              paramReplaced = true;
              return key + '=' + param;
            }
            return match;
          }
        );
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
  getUrlParam: function (opt_getKey) {
    var param,
      regEx;

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
  deltaEncode: function (arrInput) {
    var arrOutput,
      i;

    if (!arrInput) {
      return [];
    }
    if (arrInput.length === 1) {
      return arrInput;
    }

    arrInput.sort(function (a, b) {
      return JSBI.toNumber(JSBI.subtract(JSBI.BigInt(a), JSBI.BigInt(b)));
    });
    arrOutput = [];
    arrOutput[0] = arrInput[0].toString();
    for (i = 1; i < arrInput.length; i += 1) {
      arrOutput[i] = JSBI.subtract(JSBI.BigInt(arrInput[i]), JSBI.BigInt(arrInput[i - 1])).toString();
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
  deltaDecode: function (arrInput) {
    var arrOutput;

    if (!arrInput) {
      return [];
    }
    if (arrInput[0].indexOf("{") !== -1) {
      // cannot delta decode uuids
      return arrInput;
    }

    arrOutput = [];
    arrOutput[0] = JSBI.BigInt(arrInput[0]);
    // if (isNaN(arrInput[0])) {
    //   return [];
    // }
    for (let i = 1; i < arrInput.length; i += 1) {
      arrOutput[i] = JSBI.add(JSBI.BigInt(arrInput[i]), arrOutput[i - 1]);
    }
    for (let i = 0; i <arrOutput.length; i++) {
      arrOutput[i] = arrOutput[i].toString();
    }


    return arrOutput;

  }, // end of deltaDecode()

  /**
   * Check and call functions in `arrHookFunctions` with given `parameters`.
   *
   * @param   {array<function>}   arrHookFunctions  [description]
   * @param   {mixed}             parameters        [description]
   */
  callHookFunctions: function (arrHookFunctions, parameters) {
    var j,
        arrResult = [];
    if (arrHookFunctions && arrHookFunctions.length > 0) {
      for (j = 0; j < arrHookFunctions.length; j += 1) {
        if (typeof arrHookFunctions[j] === 'function') {
          let tmpResult = arrHookFunctions[j](parameters);
          if (tmpResult) {
            arrResult.push(tmpResult);
          }
        }
      }
    }
    return arrResult;
  }, // end of "callHookFunctions()"

  /**
   * Convert a hex-formated color value into rgba()-format.
   *
   * @param   {string|number}  hex          [description]
   * @param   {string|number}  opt_opacity  [description]
   *
   * @return  {string}                      [description]
   */
  getRgbaFromHexAndOpacity: function (hex, opt_opacity, opt_array) {

    var bigint, r, g, b, a;

    bigint = parseInt(hex, 16);
    if (opt_opacity && opt_opacity.value) {
      opt_opacity.value = parseInt(opt_opacity.value);
    }

    if (opt_opacity && typeof opt_opacity !== 'number') {
      if (typeof opt_opacity === 'object' && opt_opacity.value) {
        opt_opacity = opt_opacity.value;
      } else if (!opt_opacity) {
        opt_opacity = 100;
      }
    }

    r = (bigint >> 16) & 255;
    g = (bigint >> 8) & 255;
    b = bigint & 255;
    a = opt_opacity ? (opt_opacity / 100) : 1;
    if(opt_array){
      return [r,g,b,a];
    }

    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  },

  getSingleCoordinateForGeom (geometry) {
    let coordinate,
    x,
    y;
    let type = geometry.getType();
    switch (type) {
      case "Point":
        coordinate = geometry.getCoordinates();
        break;
      case "LineString":
      case "LinearRing":
        x = (geometry.getFirstCoordinate()[0] + geometry.getLastCoordinate()[0]) / 2;
        y = (geometry.getFirstCoordinate()[1] + geometry.getLastCoordinate()[1]) / 2;
        coordinate = [x, y];
        break;
      case "Polygon":
      case "MultiPoint":
        let coordinates = geometry.getCoordinates();
        let i;
        for (i = 0; i < coordinates.length; i++) {
          x += coordinates[i][0];
          y += coordinates[i][1];
        }
        coordinate = [x/i, y/i];
        break;
      default:
        coordinate = [0,0];
        break;
    }
    return coordinate;
  },

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
  measureGeometry: function (geometry, opt_forceLineMeasure, opt_forceSurfaceMeasure) {
    var value,
      sphere,
      coordinates,
      coord1,
      coord2,
      result,
      i;

    if (!geometry) {
      return false;
    }

    //sphere = new ol.Sphere(6378137);
    result = {};
    if (geometry.getType() === 'LineString' || (geometry.getType() === 'Polygon' && opt_forceLineMeasure)) {

      coordinates = geometry.getCoordinates();
      if (geometry.getType() === 'Polygon') {
        coordinates = coordinates[0];
      }
      value = 0;
      for (i = 0; i < coordinates.length - 1; i += 1) {
        coord1 = transform(coordinates[i], 'EPSG:3857', 'EPSG:4326');
        coord2 = transform(coordinates[i + 1], 'EPSG:3857', 'EPSG:4326');
        value += getDistance(coord1, coord2, 6378137);
      }
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 1000) {
        result.htmlValue = (Math.round(value / 1000 * 100) / 100).toFixed(2) +
          ' ' + 'km';
      } else {
        result.htmlValue = result.rawValue +
          ' ' + 'm';
      }

    } else if (geometry.getType() === 'Polygon') {
      //geometry = /** @type {Polygon} */(geometry.clone().transform('EPSG:3857', 'EPSG:4326'));
      //coordinates = geometry.getLinearRing(0).getCoordinates();
      value = Math.abs(getArea(geometry));
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 10000) {
        result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) +
          ' ' + 'km<sup>2</sup>';
      } else {
        result.htmlValue = result.rawValue +
          ' ' + 'm<sup>2</sup>';
      }

    } else if (geometry.getType() === 'Circle' && opt_forceSurfaceMeasure) {
      var center = geometry.getCenter();
      var radius = geometry.getRadius();
      var edgeCoordinate = [center[0] + radius, center[1]];
      //var wgs84Sphere = new ol.Sphere(6378137);
      var value = getDistance(
        transform(center, 'EPSG:3857', 'EPSG:4326'),
        transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'),
        6378137
      );

      value = Math.PI * Math.pow(value, 2);

      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 10000) {
        result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) +
          ' ' + 'km<sup>2</sup>';
      } else {
        result.htmlValue = result.rawValue +
          ' ' + 'm<sup>2</sup>';
      }


    } else if (geometry.getType() === 'Circle') {
      var center = geometry.getCenter();
      var radius = geometry.getRadius();
      var edgeCoordinate = [center[0] + radius, center[1]];
      //var wgs84Sphere = new ol.Sphere(6378137);
      var value = getDistance(
        transform(center, 'EPSG:3857', 'EPSG:4326'),
        transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'),
        6378137
      );

      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (result.rawValue > 10000) {
        result.htmlValue = (Math.round((value * 100) / 100) / 1000).toFixed(2) +
          ' ' + 'km';
      } else {
        result.htmlValue = result.rawValue +
          ' ' + 'm';
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
  getExtentForGeometries: function (arrGeometries) {
    var extentSource;

    if (!arrGeometries) {
      console.warn('Geometries missing for extent calculation');
      return false;
    }

    extentSource = new VectorSource();
    extentSource.addFeatures(arrGeometries);

    return extentSource.getExtent() || Extent([0, 0, 0, 0]);
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
  fitToExtents: function (extents, map, opt_padding, opt_animationDuration) {
    var view,
      padding,
      extent,
      key;

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
          extend(extent, extents[key])
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
  fitToExtent: function (extent, map, opt_padding, opt_animationDuration, opt_minZoom, opt_maxZoom, opt_minResolution) {
    var view,
      padding,
      fitOptions;

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
      });
    }

    try {
      view.fit(extent, map.getSize(), {padding: [25, 25, 25, 25]});
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
   * @param   {string}                      language   [description]
   *
   * @return  {string}                                 [description]
   */
  replaceAllPlaceholders: function (strInput, feature, opt_layer, language) {
    var strOutput;

    // only check the first two parameters as they will be used by all placeholder-functions
    // -> for performance
    if (!strInput || !feature) {
      return strInput;
    }

    strOutput = this.replaceFunctionPlaceholders(strInput, feature, opt_layer, language);
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
   * @param   {string}          language  [description]
   *
   * @return  {string}                    [description]
   */
  replaceFunctionPlaceholders: function (strInput, feature, layer, language, proxy = false) {
    var strOutput;

    if (!strInput || !feature || !layer) {
      return strInput;
    }
    popupFunctions = language === 'de' || language === 'de-DE' ? popupFunctionsDE : popupFunctionsEN;

    strOutput = strInput.replace(
      /\$\{FN([^\}]*)\}/g,
      function (match, functionName, offset, originString) {

        // check if function exists
        if (typeof popupFunctions[functionName] === 'function') {

          // search style
          let styleSrc = "";
          if (proxy && feature.get('locstyle')) {
            let locstyleArr = proxy.locationStyleController.arrLocStyles[feature.get('locstyle')].locStyleArr;
            styleSrc = locstyleArr.icon_src ? locstyleArr.icon_src : locstyleArr.svgSrc ? locstyleArr.svgSrc : "";
          }
          return popupFunctions[functionName](feature, styleSrc);
        }
        return '';
      }
    ); // end of replace()

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
  replaceEditorVarsPlaceholders: function (strInput, feature) {
    var strOutput;

    if (!strInput || !feature || typeof feature.get !== 'function') {
      return strInput;
    }

    strOutput = strInput.replace(
      /\$\{(EV?[LV])([^\}]*)\}/g,
      function (match, type, evKey, offset, originString) {
        var editorVars,
          i;

        // check if feature has editorVars
        if (feature.get('editorVars')) {
          editorVars = feature.get('editorVars');
          // search for editorVar with key == evKey
          for (i = 0; i < editorVars.length; i += 1) {
            if (editorVars[i].key === evKey) {
              // if type is 'EVL' display label only if a value is set too
              if (type === 'EL' || (type === 'EVL' && editorVars[i].value)) {
                return editorVars[i].label;
              } else {
                return editorVars[i].value;
              }
            }
          }
        }
        return '';
      }
    ); // end of replace()

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
  replaceAttributePlaceholders: function (strInput, feature) {
    var strOutput;

    if (!strInput || !feature || typeof feature.get !== 'function') {
      return strInput;
    }

    strOutput = strInput.replace(
      /\$\{([^\}]*)\}/g,
      function (match, attr, offset, originString) {
        return feature.get(attr) || '';
      }
    ); // end of replace()

    return strOutput;
  }, // end of replaceAttributePlaceholders()

  objectToArray: function (object) {
    if (object && typeof object === 'object') {
      object = Object.keys(object).map(function (key) {
        return object[key];
      });
    }
    return object;
  }, // end of objectToArray()

  getVectorLayer(source, style, zIndex) {
    var fnStyle;

    // make sure that the style is a function
    if (typeof style === 'function') {
      fnStyle = style;
    } else if (style !== undefined) {
      fnStyle = function () {
        return style;
      };
    }

    return new Vector({
      source: source,
      style: fnStyle,
      zIndex: zIndex
    });
  },// end of "getVectorLayer()"

  /**
   * Extracts the subdomain from the current request host and returns it.
   * @returns {string | *}
   */
  getCurrentSubdomain() {
    return window.location.href;
  },

  /**
   * Returns the current domain (without the subdomain)
   */
  getCurrentDomain() {
    let domain = window.location.hostname;
    let arrDomain = domain.split('.');
    if (arrDomain.length > 2) {
      // there is a subdomain
      return arrDomain[arrDomain.length - 2];
    } else {
      return arrDomain[0];
    }
  },

  getValue: function (key) {
    return localStorage[key] || '';
  },
  storeValue: function (key, value) {
    localStorage[key] = value; // only strings
  },
  decodeHTML (html) {
    let txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
};