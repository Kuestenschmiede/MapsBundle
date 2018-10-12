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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-interaction-geopicker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-maps-interaction-geopicker.js":
/*!***************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-interaction-geopicker.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.interaction = this.c4g.maps.interaction || {};

(function ($, c4g) {
    'use strict';

    /**
     *
     * @param options
     * @returns {boolean}
     * @constructor
     */

    c4g.maps.interaction.GeoPicker = function (options) {
        var mapData, mapContainer, lat, lon, latIdx, lonIdx, latRnd, lonRnd;

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
                latRnd = Math.round(Math.random() * (99999999999 - 1) + 1);
                lonRnd = Math.round(Math.random() * (99999999999 - 1) + 1);
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
    };
    ol.inherits(c4g.maps.interaction.GeoPicker, ol.interaction.Interaction);

    /*
     * Add methods
     */
    c4g.maps.interaction.GeoPicker.prototype = $.extend(c4g.maps.interaction.GeoPicker.prototype, {

        geoPickerStyleFunction: function geoPickerStyleFunction(feature, projection, getId) {
            var color, white, result;

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
                result.push(new ol.style.Style({
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
                result.push(new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 20,
                        stroke: new ol.style.Stroke({
                            color: white,
                            width: 4
                        })
                    }),
                    zIndex: Infinity
                }));
                result.push(new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 20,
                        stroke: new ol.style.Stroke({
                            color: color,
                            width: 2
                        })
                    }),
                    zIndex: Infinity
                }));
                result.push(new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 40,
                        stroke: new ol.style.Stroke({
                            color: white,
                            width: 4
                        })
                    }),
                    zIndex: Infinity
                }));
                result.push(new ol.style.Style({
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

            result.push(new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 60,
                    stroke: new ol.style.Stroke({
                        color: white,
                        width: 4
                    })
                }),
                zIndex: Infinity
            }));

            result.push(new ol.style.Style({
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
        },

        handleEvent: function handleEvent(mapBrowserEvent) {
            if (mapBrowserEvent.type === "singleclick") {
                if (!this.options.disableClickEvent && !this.options.mapContainer.data.geopicker.disabled) {
                    return !this.pick(mapBrowserEvent.coordinate);
                }
            }

            return true;
        },

        pick: function pick(coordinate) {
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

    }); // end of "add methods" ---
})(jQuery, this.c4g);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1pbnRlcmFjdGlvbi1nZW9waWNrZXIuanMiXSwibmFtZXMiOlsiYzRnIiwibWFwcyIsImludGVyYWN0aW9uIiwiJCIsIkdlb1BpY2tlciIsIm9wdGlvbnMiLCJtYXBEYXRhIiwibWFwQ29udGFpbmVyIiwibGF0IiwibG9uIiwibGF0SWR4IiwibG9uSWR4IiwibGF0Um5kIiwibG9uUm5kIiwiZGF0YSIsImNvbnNvbGUiLCJ3YXJuIiwiJGZpZWxkR2VvWCIsImdlb3BpY2tlciIsImlucHV0X2dlb194IiwiJGZpZWxkR2VvWSIsImlucHV0X2dlb195Iiwib3B0aWNMYXllclNvdXJjZSIsIm9sIiwic291cmNlIiwiVmVjdG9yIiwib3B0aWNMYXllclZlY3RvciIsImxheWVyIiwic3R5bGUiLCJnZW9QaWNrZXJTdHlsZUZ1bmN0aW9uIiwib3B0aWNMYXllckZlYXR1cmUiLCJ2YWwiLCJhbm9ueW1vdXMiLCJyZW1vdmUiLCJpbmRleE9mIiwicmVwbGFjZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBhcnNlSW50Iiwic3Vic3RyIiwibGVuZ3RoIiwiRmVhdHVyZSIsImdlb21ldHJ5IiwiZ2VvbSIsIlBvaW50IiwicHJvaiIsImZyb21Mb25MYXQiLCJwYXJzZUZsb2F0IiwicGlja2VyQ29sb3IiLCJhZGRGZWF0dXJlIiwibWFwIiwiZ2V0VmlldyIsImZpdCIsImdldEV4dGVudCIsImdldFNpemUiLCJzZXRab29tIiwiZ2VvTG9jYXRpb24iLCJzZXRUcmFja2luZyIsImFkZExheWVyIiwiSW50ZXJhY3Rpb24iLCJjYWxsIiwiaGFuZGxlRXZlbnQiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsImV4dGVuZCIsImZlYXR1cmUiLCJwcm9qZWN0aW9uIiwiZ2V0SWQiLCJjb2xvciIsIndoaXRlIiwicmVzdWx0IiwiZ2V0IiwicHVzaCIsIlN0eWxlIiwiaW1hZ2UiLCJDaXJjbGUiLCJyYWRpdXMiLCJmaWxsIiwiRmlsbCIsInN0cm9rZSIsIlN0cm9rZSIsIndpZHRoIiwiekluZGV4IiwiSW5maW5pdHkiLCJtYXBCcm93c2VyRXZlbnQiLCJ0eXBlIiwiZGlzYWJsZUNsaWNrRXZlbnQiLCJkaXNhYmxlZCIsInBpY2siLCJjb29yZGluYXRlIiwiYXJyTGF0TG9uIiwidG9Mb25MYXQiLCJjbGVhciIsImNoYW5nZSIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0EsS0FBS0EsR0FBTCxHQUFXLEtBQUtBLEdBQUwsSUFBWSxFQUF2QjtBQUNBLEtBQUtBLEdBQUwsQ0FBU0MsSUFBVCxHQUFnQixLQUFLRCxHQUFMLENBQVNDLElBQVQsSUFBaUIsRUFBakM7QUFDQSxLQUFLRCxHQUFMLENBQVNDLElBQVQsQ0FBY0MsV0FBZCxHQUE0QixLQUFLRixHQUFMLENBQVNDLElBQVQsQ0FBY0MsV0FBZCxJQUE2QixFQUF6RDs7QUFFQyxXQUFVQyxDQUFWLEVBQWFILEdBQWIsRUFBa0I7QUFDakI7O0FBRUE7Ozs7Ozs7QUFNQUEsUUFBSUMsSUFBSixDQUFTQyxXQUFULENBQXFCRSxTQUFyQixHQUFpQyxVQUFVQyxPQUFWLEVBQW1CO0FBQ2xE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QjBFLE1BQWhCOztBQUdBLG1CQUFPLElBQVA7QUFDRDs7QUF4STJGLEtBQW5ELENBQTNDLENBbkdpQixDQTZPYjtBQUVMLENBL09BLEVBK09DQyxNQS9PRCxFQStPUyxLQUFLL0YsR0EvT2QsQ0FBRCxDIiwiZmlsZSI6ImM0Zy1tYXBzLWludGVyYWN0aW9uLWdlb3BpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1pbnRlcmFjdGlvbi1nZW9waWNrZXIuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmludGVyYWN0aW9uID0gdGhpcy5jNGcubWFwcy5pbnRlcmFjdGlvbiB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjNGcubWFwcy5pbnRlcmFjdGlvbi5HZW9QaWNrZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBtYXBEYXRhLFxuICAgICAgICBtYXBDb250YWluZXIsXG4gICAgICAgIGxhdCxcbiAgICAgICAgbG9uLFxuICAgICAgICBsYXRJZHgsXG4gICAgICAgIGxvbklkeCxcbiAgICAgICAgbGF0Um5kLFxuICAgICAgICBsb25SbmQ7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMubWFwQ29udGFpbmVyIHx8ICF0aGlzLm9wdGlvbnMubWFwQ29udGFpbmVyLmRhdGEpIHtcbiAgICAgIGNvbnNvbGUud2FybignVGhlIEdlb1BpY2tlciBuZWVkcyBhIFwibWFwQ29udGFpbmVyXCIgaW4gb3JkZXIgdG8gd29yay4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBtYXBEYXRhID0gdGhpcy5vcHRpb25zLm1hcENvbnRhaW5lci5kYXRhO1xuICAgIG1hcENvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5tYXBDb250YWluZXI7XG4gICAgLy8gY29uZmlndXJhdGUgZ2VvcGlja2VyXG4gICAgdGhpcy4kZmllbGRHZW9YID0gJChtYXBEYXRhLmdlb3BpY2tlci5pbnB1dF9nZW9feCk7XG4gICAgdGhpcy4kZmllbGRHZW9ZID0gJChtYXBEYXRhLmdlb3BpY2tlci5pbnB1dF9nZW9feSk7XG5cbiAgICB0aGlzLm9wdGljTGF5ZXJTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3Rvcih7fSk7XG4gICAgdGhpcy5vcHRpY0xheWVyVmVjdG9yID0gbmV3IG9sLmxheWVyLlZlY3Rvcih7XG4gICAgICBzb3VyY2U6IHRoaXMub3B0aWNMYXllclNvdXJjZSxcbiAgICAgIHN0eWxlOiB0aGlzLmdlb1BpY2tlclN0eWxlRnVuY3Rpb25cbiAgICB9KTtcbiAgICB0aGlzLm9wdGljTGF5ZXJGZWF0dXJlID0gbnVsbDtcblxuICAgIGlmICh0aGlzLiRmaWVsZEdlb1gudmFsKCkgJiYgdGhpcy4kZmllbGRHZW9ZLnZhbCgpKSB7XG4gICAgICBsYXQgPSB0aGlzLiRmaWVsZEdlb1kudmFsKCk7XG4gICAgICBsb24gPSB0aGlzLiRmaWVsZEdlb1gudmFsKCk7XG5cbiAgICAgIGlmIChtYXBEYXRhLmdlb3BpY2tlci5hbm9ueW1vdXMpIHtcbiAgICAgICAgICB0aGlzLiRmaWVsZEdlb1kucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy4kZmllbGRHZW9YLnJlbW92ZSgpO1xuXG4gICAgICAgICAgbGF0SWR4ID0gbGF0LmluZGV4T2YoJy4nKTtcbiAgICAgICAgICBsb25JZHggPSBsb24uaW5kZXhPZignLicpO1xuICAgICAgICAgIGxhdCA9IGxhdC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICAgICAgbG9uID0gbG9uLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgICAgICBsYXRSbmQgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogKDk5OTk5OTk5OTk5IC0gMSkpICsgMSk7XG4gICAgICAgICAgbG9uUm5kID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqICg5OTk5OTk5OTk5OSAtIDEpKSArIDEpO1xuICAgICAgICAgIGlmIChsYXRSbmQgPiA0OTk5OTk5OTk5OSkge1xuICAgICAgICAgICAgICBsYXQgPSBwYXJzZUludChsYXQpIC0gbGF0Um5kO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxhdCA9IHBhcnNlSW50KGxhdCkgKyBsYXRSbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsb25SbmQgPCA1MDAwMDAwMDAwMCkge1xuICAgICAgICAgICAgICBsb24gPSBwYXJzZUludChsb24pIC0gbG9uUm5kO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvbiA9IHBhcnNlSW50KGxvbikgKyBsb25SbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhdCA9IGxhdCArIFwiXCI7XG4gICAgICAgICAgbG9uID0gbG9uICsgXCJcIjtcbiAgICAgICAgICBsYXQgPSBsYXQuc3Vic3RyKDAsIGxhdElkeCkgKyAnLicgKyBsYXQuc3Vic3RyKGxhdElkeCwgbGF0Lmxlbmd0aCAtIGxhdElkeCk7XG4gICAgICAgICAgbG9uID0gbG9uLnN1YnN0cigwLCBsb25JZHgpICsgJy4nICsgbG9uLnN1YnN0cihsb25JZHgsIGxvbi5sZW5ndGggLSBsb25JZHgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGljTGF5ZXJGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IG9sLmdlb20uUG9pbnQob2wucHJvai5mcm9tTG9uTGF0KFtwYXJzZUZsb2F0KGxvbiksIHBhcnNlRmxvYXQobGF0KV0pKSxcbiAgICAgICAgcGlja2VyQ29sb3I6IFswLCAxODAsIDEwMCwgMV0sXG4gICAgICAgIGFub255bW91czogbWFwRGF0YS5nZW9waWNrZXIuYW5vbnltb3VzXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5vcHRpY0xheWVyU291cmNlLmFkZEZlYXR1cmUodGhpcy5vcHRpY0xheWVyRmVhdHVyZSk7XG5cbiAgICAgIG1hcENvbnRhaW5lci5tYXAuZ2V0VmlldygpLmZpdCh0aGlzLm9wdGljTGF5ZXJTb3VyY2UuZ2V0RXh0ZW50KCksIG1hcENvbnRhaW5lci5tYXAuZ2V0U2l6ZSgpKTtcbiAgICAgIC8vIHNldCB6b29tIHNvIHdlIGNhbiBzZWUgc29tZSB0aWxlcyB3aXRob3V0IGVycm9yXG4gICAgICBtYXBDb250YWluZXIubWFwLmdldFZpZXcoKS5zZXRab29tKDE1KTtcbiAgICB9IGVsc2UgaWYgKG1hcERhdGEuZ2VvTG9jYXRpb24gJiYgdHlwZW9mIG1hcERhdGEuZ2VvTG9jYXRpb24uc2V0VHJhY2tpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG1hcERhdGEuZ2VvTG9jYXRpb24uc2V0VHJhY2tpbmcodHJ1ZSk7XG4gICAgfVxuICAgIG1hcENvbnRhaW5lci5tYXAuYWRkTGF5ZXIodGhpcy5vcHRpY0xheWVyVmVjdG9yKTtcblxuICAgIC8vVE9ETyB3ZW5uIGdlb3BpY2tlci5jbGlja0Rpc2FibGVkIChvZGVyIHNvKSBnZXNldHp0IGlzdCwgdGhpcy5vcHRpb25zLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oKXt9XG5cbiAgICAvLyBpbmhlcml0YW5jZS1zdHVmZlxuICAgIG9sLmludGVyYWN0aW9uLkludGVyYWN0aW9uLmNhbGwodGhpcywge1xuICAgICAgaGFuZGxlRXZlbnQ6IHRoaXMub3B0aW9ucy5oYW5kbGVFdmVudCB8fCB0aGlzLmhhbmRsZUV2ZW50XG4gICAgICAvLyBoYW5kbGVFdmVudDogdGhpcy5vcHRpb25zLmhhbmRsZUV2ZW50IHx8IGM0Zy5tYXBzLmludGVyYWN0aW9uLkdlb1BpY2tlci5oYW5kbGVFdmVudFxuICAgIH0pO1xuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5pbnRlcmFjdGlvbi5HZW9QaWNrZXIsIG9sLmludGVyYWN0aW9uLkludGVyYWN0aW9uKTtcblxuXG4gIC8qXG4gICAqIEFkZCBtZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5pbnRlcmFjdGlvbi5HZW9QaWNrZXIucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuaW50ZXJhY3Rpb24uR2VvUGlja2VyLnByb3RvdHlwZSwge1xuXG4gICAgZ2VvUGlja2VyU3R5bGVGdW5jdGlvbjogZnVuY3Rpb24gKGZlYXR1cmUsIHByb2plY3Rpb24sIGdldElkKSB7XG4gICAgICB2YXIgY29sb3IsXG4gICAgICAgICAgd2hpdGUsXG4gICAgICAgICAgcmVzdWx0O1xuXG4gICAgICBpZiAoZ2V0SWQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICB3aGl0ZSA9IFsyNTUsIDI1NSwgMjU1LCAxXTtcbiAgICAgIGlmIChmZWF0dXJlICYmIHR5cGVvZiBmZWF0dXJlLmdldCA9PT0gJ2Z1bmN0aW9uJyAmJiBmZWF0dXJlLmdldCgncGlja2VyQ29sb3InKSkge1xuICAgICAgICBjb2xvciA9IGZlYXR1cmUuZ2V0KCdwaWNrZXJDb2xvcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sb3IgPSBbMjAwLCAwLCAwLCAwLjddO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSBbXTtcbiAgICAgIGlmIChmZWF0dXJlICYmIHR5cGVvZiBmZWF0dXJlLmdldCA9PT0gJ2Z1bmN0aW9uJyAmJiAhZmVhdHVyZS5nZXQoJ2Fub255bW91cycpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICBpbWFnZTogbmV3IG9sLnN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBvbC5zdHlsZS5GaWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogSW5maW5pdHlcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogSW5maW5pdHlcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogSW5maW5pdHlcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogSW5maW5pdHlcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogSW5maW5pdHlcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQucHVzaChcbiAgICAgICAgbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgICBpbWFnZTogbmV3IG9sLnN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgICByYWRpdXM6IDYwLFxuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlLFxuICAgICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB6SW5kZXg6IEluZmluaXR5XG4gICAgICAgIH0pKTtcblxuICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgICAgcmFkaXVzOiA2MCxcbiAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgd2lkdGg6IDJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgekluZGV4OiBJbmZpbml0eVxuICAgICAgICB9KSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIGhhbmRsZUV2ZW50OiBmdW5jdGlvbiAobWFwQnJvd3NlckV2ZW50KSB7XG4gICAgICBpZiAobWFwQnJvd3NlckV2ZW50LnR5cGUgPT09IFwic2luZ2xlY2xpY2tcIikge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlQ2xpY2tFdmVudCAmJiAhdGhpcy5vcHRpb25zLm1hcENvbnRhaW5lci5kYXRhLmdlb3BpY2tlci5kaXNhYmxlZCkge1xuICAgICAgICAgIHJldHVybiAhdGhpcy5waWNrKG1hcEJyb3dzZXJFdmVudC5jb29yZGluYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcGljazogZnVuY3Rpb24gKGNvb3JkaW5hdGUpIHtcbiAgICAgIHZhciBhcnJMYXRMb247XG5cbiAgICAgIGFyckxhdExvbiA9IG9sLnByb2oudG9Mb25MYXQoY29vcmRpbmF0ZSk7XG5cbiAgICAgIHRoaXMub3B0aWNMYXllckZlYXR1cmUgPSBuZXcgb2wuRmVhdHVyZSh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgb2wuZ2VvbS5Qb2ludChjb29yZGluYXRlKVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMub3B0aWNMYXllclNvdXJjZS5jbGVhcigpO1xuICAgICAgdGhpcy5vcHRpY0xheWVyU291cmNlLmFkZEZlYXR1cmUodGhpcy5vcHRpY0xheWVyRmVhdHVyZSk7XG5cbiAgICAgIHRoaXMuJGZpZWxkR2VvWC52YWwoYXJyTGF0TG9uWzBdKTtcbiAgICAgIHRoaXMuJGZpZWxkR2VvWS52YWwoYXJyTGF0TG9uWzFdKTtcbiAgICAgIHRoaXMuJGZpZWxkR2VvWC5jaGFuZ2UoKTtcbiAgICAgIHRoaXMuJGZpZWxkR2VvWS5jaGFuZ2UoKTtcblxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtaW50ZXJhY3Rpb24tZ2VvcGlja2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==