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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-geosearch.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-maps-control-geosearch.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-geosearch.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

(function ($, c4g) {
    'use strict';

    /**
     * @TODO description
     *
     * @constructor
     * @extends  {ol.control.Control}
     *
     * @param    {Object}              opt_options  *optional* control options.
     */

    c4g.maps.control.GeoSearch = function (opt_options) {

        var self, options, element, button, searchWrapper, searchInput, searchButton, resultTrigger, resultWrapper;

        self = this;
        // this.element = element;
        // this.searchWrapper = searchWrapper;
        // this.resultWrapper = resultWrapper;

        options = opt_options || {};

        // default options
        options = $.extend({
            mapController: undefined,
            className: c4g.maps.constant.css.GEOSEARCH,
            extDiv: false,
            collapsible: true,
            collapsed: true,
            tipLabel: c4g.maps.constant.i18n.CTRL_GEOSEARCH,
            label: '>>',
            collapsedLabel: '(?)',
            attribution: true,
            // customAttribution: '',
            // engineUrl: false,
            searchZoom: 12,
            zoomBounds: false,
            results: false,
            quicksearch: true,
            animate: true,
            markResult: true,
            popup: true,
            caching: 0,
            autopick: false
        }, options);

        // prepare search-configuration
        //
        this.config = {};
        // searchEngineUrl
        // if (typeof options.engineUrl === 'string') {
        //   // if it is a string, then it is (hopefully) a URL, that we can use directly
        //   // @TODO add a URL-check
        //   this.config.url = options.engineUrl;
        // } else {
        //   // if it is none of the above, then use the default URL
        //   this.config.url = 'https://nominatim.openstreetmap.org/search';
        // }
        this.config.url = options.mapController.data.api.geosearch + "/" + options.mapController.data.profile;
        // zoomlevel when centering the found location
        this.config.zoomlevel = options.searchZoom;
        // zoom to bounds instead of zoomlevel when centering the found location
        this.config.zoombounds = options.zoomBounds;
        // quicksearch-option (instantly jump to the first found location)
        this.config.quicksearch = options.quicksearch;
        // animation (animate flight to targeted location)
        this.config.animate = options.animate;
        // highlight the result location
        this.config.markResult = options.markResult;
        this.config.popup = options.popup;

        this.config.autopick = options.autopick;
        this.config.mapController = options.mapController;
        this.config.results = options.results;

        this.config.collapsed = options.collapsed;

        this.config.caching = options.caching;

        // @TODO
        // Attribution

        // check extDiv
        if (options.extDiv && document.getElementById(options.extDiv)) {
            options.extDiv = document.getElementById(options.extDiv);
        } else {
            options.extDiv = false;
        }

        // controlwrapper div
        element = document.createElement('div');
        element.className = options.className + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE + ' ' + c4g.maps.constant.css.OL_CONTROL;

        if ((options.collapsed && !options.extDiv) & !(this.config.caching && c4g.maps.utils.getValue('geosearch') == '1')) {
            $(element).addClass(c4g.maps.constant.css.CLOSE);
        } else {
            $(element).addClass(c4g.maps.constant.css.OPEN);
        }

        // wrapper div
        this.searchWrapper = document.createElement('div');
        this.searchWrapper.className = c4g.maps.constant.css.GEOSEARCH_WRAPPER;
        element.appendChild(this.searchWrapper);

        // search-field
        searchInput = document.createElement('input');
        searchInput.type = 'text';
        this.searchWrapper.appendChild(searchInput);

        // @TODO
        // // result-trigger
        // resultTrigger = document.createElement('button');
        // resultTrigger.className = 'RT';
        // searchWrapper.appendChild(resultTrigger);

        // $(resultTrigger).click(function () {
        //   try {
        //     this.blur();
        //   } catch (ignore) {}
        //   self.toggleResults();
        // });

        // // result-wrapper
        // resultWrapper = document.createElement('div');
        // resultWrapper.className = 'RESULTS ' + c4g.maps.constant.css.CLOSE;
        // resultWrapper.innerHTML = 'no results';
        // searchWrapper.appendChild(resultWrapper);
        // this.resultWrapper = resultWrapper;

        // search-button
        searchButton = document.createElement('button');
        searchButton.className = c4g.maps.constant.css.GEOSEARCH_START;
        searchButton.title = c4g.maps.constant.i18n.CTRL_START_SEARCH;
        this.searchWrapper.appendChild(searchButton);

        $(searchButton).click(function () {
            try {
                this.blur();
            } catch (ignore) {}
            if (searchInput.value) {

                self.findLocation(searchInput.value);
            }
        });

        $(searchInput).keypress(function (e) {
            if (e.which === 13) {
                if (searchInput.value) {

                    self.findLocation(searchInput.value);

                    if (document.getElementById("resultcontainer")) {
                        document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
                    }
                    if (self.config.results) {

                        var searchResultContainer = document.createElement('ul');
                        searchResultContainer.setAttribute("id", "resultcontainer");
                        if (self.results) {
                            for (var i = 0; i < self.results.length; i++) {
                                var searchResult = document.createElement('li');
                                var searchResultButton = document.createElement('button');
                                searchResultButton.setAttribute("id", i);
                                searchResultButton.setAttribute('class', 'searchResultButton');
                                searchResultButton.addEventListener('click', function () {
                                    self.zoomTo(this.getAttribute("id"));
                                });

                                searchResultButton.setAttribute("name", self.results[i].display_name);
                                searchResultButton.innerHTML = self.results[i].display_name;
                                searchResult.appendChild(searchResultButton);
                                searchResultContainer.appendChild(searchResult);
                            }
                            searchWrapper.appendChild(searchResultContainer);
                        }
                    }
                }
                return false;
            }
        });

        if (options.collapsible && !options.extDiv) {
            // button
            button = document.createElement('button');
            button.className = c4g.maps.constant.css.GEOSEARCH_TRIGGER;
            button.title = options.tipLabel;
            element.appendChild(button);

            // set onClick to the toggle-function
            $(button).click(function () {
                try {
                    this.blur();
                } catch (ignore) {}
                self.toggle();
            });
        } else if (options.extDiv) {
            options.target = options.extDiv;
        }

        // inheritance-stuff
        ol.control.Control.call(this, {
            element: element,
            target: options.target
        });
    };
    ol.inherits(c4g.maps.control.GeoSearch, ol.control.Control);

    /*
     * Add methods
     */
    c4g.maps.control.GeoSearch.prototype = $.extend(c4g.maps.control.GeoSearch.prototype, {

        /**
         * @TODO
         *
         * @return  {[type]}  [description]
         */
        open: function open() {
            if ($(this.element).hasClass(c4g.maps.constant.css.CLOSE)) {
                $(this.element).addClass(c4g.maps.constant.css.OPEN).removeClass(c4g.maps.constant.css.CLOSE).find('input')[0].focus();
                if (this.config.caching) {
                    c4g.maps.utils.storeValue('geosearch', '1');
                }
            }
        },

        /**
         * @TODO
         *
         * @return  {[type]}  [description]
         */
        close: function close() {
            if ($(this.element).hasClass(c4g.maps.constant.css.OPEN)) {
                $(this.element).addClass(c4g.maps.constant.css.CLOSE).removeClass(c4g.maps.constant.css.OPEN);
                // this.closeResults();
                if (document.getElementById("resultcontainer")) {
                    document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
                }
                if (this.config.caching) {
                    c4g.maps.utils.storeValue('geosearch', '0');
                }
            }
        },

        /**
         * @TODO
         *
         * @return  {[type]}  [description]
         */
        toggle: function toggle() {
            if ($(this.element).hasClass(c4g.maps.constant.css.CLOSE)) {
                this.open();
            } else {
                this.close();
            }
        },

        // /**
        //  * @TODO
        //  *
        //  * @return  {[type]}  [description]
        //  */
        // openResults: function () {
        //   if ($(this.resultWrapper).hasClass(c4g.maps.constant.css.CLOSE)) {
        //     $(this.resultWrapper).addClass(c4g.maps.constant.css.OPEN)
        //       .removeClass(c4g.maps.constant.css.CLOSE);
        //   }
        // },

        // /**
        //  * @TODO
        //  *
        //  * @return  {[type]}  [description]
        //  */
        // closeResults: function () {
        //   if ($(this.resultWrapper).hasClass(c4g.maps.constant.css.OPEN)) {
        //     $(this.resultWrapper).addClass(c4g.maps.constant.css.CLOSE)
        //       .removeClass(c4g.maps.constant.css.OPEN);
        //   }
        // },

        // /**
        //  * @TODO
        //  *
        //  * @return  {[type]}  [description]
        //  */
        // toggleResults: function () {
        //   if ($(this.resultWrapper).hasClass(c4g.maps.constant.css.CLOSE)) {
        //     this.openResults();
        //   } else {
        //     this.closeResults();
        //   }
        // },

        /**
         * @TODO
         *
         * @return  {[type]}  [description]
         */
        clearResults: function clearResults() {
            this.resultWrapper.innerHTML = '';
        },

        /**
         * @TODO
         *
         * @param   {[type]}  location  [description]
         *
         * @return  {[type]}            [description]
         */
        zoomTo: function zoomTo(index) {
            var self, map, animate, markResult, result, resultCoordinate, flyTo, completeSearch, animationDuration, zoomType;

            flyTo = function flyTo(map, location, zoomlevel, zoombounds, boundingbox, markResult, animate) {
                var duration = 2000;
                var zoom = zoomlevel; //mapView.getZoom();
                var parts = 2;
                var called = false;

                function callback(complete) {
                    --parts;
                    if (called) {
                        return;
                    }
                    if (parts === 0 || !complete) {
                        called = true;

                        if (zoombounds && boundingbox) {
                            // translate osm-extent to ol3-extent

                            osmExtent = [];
                            osmExtent.push(parseFloat(boundingbox[2]));
                            osmExtent.push(parseFloat(boundingbox[0]));
                            osmExtent.push(parseFloat(boundingbox[3]));
                            osmExtent.push(parseFloat(boundingbox[1]));

                            window.setTimeout(function () {
                                mapView.fit(ol.proj.transformExtent(osmExtent, 'EPSG:4326', 'EPSG:3857'), map.getSize(), {
                                    minZoom: mapView.get('minZoom') || 0,
                                    maxZoom: mapView.get('maxZoom') || 19,
                                    duration: duration / 2,
                                    easing: ol.easing.easeOut
                                });
                            }, duration);
                        }

                        completeSearch(markResult, animate);
                    }
                }

                map.getView().animate({
                    center: location,
                    duration: duration
                }, callback);
                map.getView().animate({
                    zoom: zoom - 1,
                    duration: duration / 2
                }, {
                    zoom: zoom,
                    duration: duration / 2
                }, callback);
            };

            completeSearch = function completeSearch(markResult, animate) {
                var addMarker, markerSource, animateMarker;

                markerSource = new ol.source.Vector();
                map.addLayer(new ol.layer.Vector({
                    style: new ol.style.Style(),
                    source: markerSource
                }));

                addMarker = function addMarker() {
                    markerSource.addFeature(new ol.Feature(new ol.geom.Point(resultCoordinate)));
                };

                animateMarker = function animateMarker(feature) {
                    var animationStep, start, duration, listenerKey;

                    start = new Date().getTime();
                    duration = 3000;

                    animationStep = function animationStep(event) {
                        var vectorContext, frameState, elapsed, elapsedRatio, radius, opacity, marker, flashGeom;

                        vectorContext = event.vectorContext;
                        frameState = event.frameState;
                        flashGeom = feature.getGeometry().clone();
                        elapsed = frameState.time - start;
                        elapsedRatio = elapsed / duration;
                        radius = ol.easing.linear(1 - elapsedRatio) * 100;
                        if (radius < 0) {
                            radius = 0;
                        }
                        opacity = ol.easing.linear(elapsedRatio);

                        marker = new ol.style.Style({
                            image: new ol.style.Circle({
                                radius: radius,
                                snapToPixel: false,
                                stroke: new ol.style.Stroke({
                                    color: 'rgba(200, 0, 0, ' + opacity + ')',
                                    width: 3,
                                    opacity: opacity
                                })
                            })
                        });

                        vectorContext.setStyle(marker);
                        vectorContext.drawGeometry(flashGeom, null);

                        if (elapsed > duration) {
                            markerSource.clear();
                            ol.Observable.unByKey(listenerKey);
                            return;
                        }
                        // continue postcompose animation
                        frameState.animate = true;
                    }; // end of "animationStep"

                    listenerKey = map.on('postcompose', animationStep);
                }; // end of "animateMarker"

                markerSource.on('addfeature', function (event) {
                    animateMarker(event.feature);
                });

                if (animate) {
                    if (zoomType === 'zoom') {
                        window.setTimeout(addMarker, animationDuration / 2);
                    } else {
                        window.setTimeout(addMarker, animationDuration);
                    }
                } else {
                    addMarker();
                }
            };

            self = this;
            map = this.getMap();

            result = self.results[index];
            resultCoordinate = ol.proj.transform([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

            if (animate) {
                resolution = mapView.getResolution();
                viewExtent = mapView.calculateExtent(map.getSize());
                if (ol.extent.containsCoordinate(viewExtent, resultCoordinate)) {
                    zoomType = 'zoom';
                } else {
                    if (Math.abs(currentCoordinate[0] - resultCoordinate[0]) > Math.abs(currentCoordinate[1] - resultCoordinate[1])) {
                        coordDif = Math.abs(currentCoordinate[0] - resultCoordinate[0]);
                        difContext = ol.extent.getWidth(viewExtent);
                    } else {
                        coordDif = Math.abs(currentCoordinate[1] - resultCoordinate[1]);
                        difContext = ol.extent.getHeight(viewExtent);
                    }
                    if (coordDif > 0) {
                        resolution *= coordDif / difContext;
                    }
                    zoomType = 'bounce';
                }

                flyTo(map, resultCoordinate, self.config.zoomlevel, self.config.zoombounds, result.boundingbox, this.config.markResult, this.config.animate);
            } else {
                completeSearch(this.config.markResult, this.config.animate);
                map.getView().setCenter(resultCoordinate);
                if (self.config.zoomlevel >= 0) {
                    map.getView().setZoom(self.config.zoomlevel);
                }
            }
        },

        findLocation: function findLocation(location, opt_options) {
            var self, map, animate, animationDuration, markResult;

            self = this;
            map = this.getMap();

            // show spinner
            this.config.mapController.spinner.show();

            animate = this.config.animate;
            animationDuration = 2000;
            markResult = this.config.markResult;

            if ((typeof opt_options === 'undefined' ? 'undefined' : _typeof(opt_options)) === 'object') {
                if (opt_options.animate !== undefined) {
                    animate = opt_options.animate;
                }
                if (opt_options.markResult !== undefined) {
                    markResult = opt_options.markResult;
                }
            }

            // @TODO
            // check bounds
            //   are there restriction-bounds on the map?
            //   -> else use extent-bounds

            // @TODO
            // highlight found area/location


            if (this.config.quicksearch) {

                // AJAX -> @nominatim
                $.ajax({
                    crossDomain: true,
                    dataType: "json",
                    url: this.config.url,
                    data: {
                        format: "json",
                        q: location
                    }
                }).done(function (results) {

                    var mapView, currentCoordinate, resultCoordinate, coordDif, difContext, viewExtent, result, osmExtent, resolution, zoomType, flyTo, completeSearch;

                    mapView = map.getView();

                    flyTo = function flyTo(map, location, zoomlevel, zoombounds, boundingbox, markResult, animate) {
                        var duration = 2000;
                        var zoom = zoomlevel; //mapView.getZoom();
                        var parts = 2;
                        var called = false;

                        function callback(complete) {
                            --parts;
                            if (called) {
                                return;
                            }
                            if (parts === 0 || !complete) {
                                called = true;

                                if (zoombounds && boundingbox) {
                                    // translate osm-extent to ol3-extent

                                    osmExtent = [];
                                    osmExtent.push(parseFloat(boundingbox[2]));
                                    osmExtent.push(parseFloat(boundingbox[0]));
                                    osmExtent.push(parseFloat(boundingbox[3]));
                                    osmExtent.push(parseFloat(boundingbox[1]));

                                    window.setTimeout(function () {
                                        mapView.fit(ol.proj.transformExtent(osmExtent, 'EPSG:4326', 'EPSG:3857'), map.getSize(), {
                                            minZoom: mapView.get('minZoom') || 0,
                                            maxZoom: mapView.get('maxZoom') || 19,
                                            duration: duration / 2,
                                            easing: ol.easing.easeOut
                                        });
                                    }, duration);
                                }

                                completeSearch(markResult, animate);
                            }
                        }

                        map.getView().animate({
                            center: location,
                            duration: duration
                        }, callback);
                        map.getView().animate({
                            zoom: zoom - 1,
                            duration: duration / 2
                        }, {
                            zoom: zoom,
                            duration: duration / 2
                        }, callback);
                    };

                    completeSearch = function completeSearch(markResult, animate) {
                        // result marker & animation
                        if (markResult) {
                            var addMarker, markerSource, animateMarker;

                            markerSource = new ol.source.Vector();
                            map.addLayer(new ol.layer.Vector({
                                style: new ol.style.Style(),
                                source: markerSource
                            }));

                            addMarker = function addMarker() {
                                markerSource.addFeature(new ol.Feature(new ol.geom.Point(resultCoordinate)));
                            };

                            animateMarker = function animateMarker(feature) {
                                var animationStep, start, duration, listenerKey;

                                start = new Date().getTime();
                                duration = 3000;

                                animationStep = function animationStep(event) {
                                    var vectorContext, frameState, elapsed, elapsedRatio, radius, opacity, marker, flashGeom;

                                    vectorContext = event.vectorContext;
                                    frameState = event.frameState;
                                    flashGeom = feature.getGeometry().clone();
                                    elapsed = frameState.time - start;
                                    elapsedRatio = elapsed / duration;
                                    radius = ol.easing.linear(1 - elapsedRatio) * 100;
                                    if (radius < 0) {
                                        radius = 0;
                                    }
                                    opacity = ol.easing.linear(elapsedRatio);

                                    var marker = new ol.style.Style({
                                        image: new ol.style.Circle({
                                            radius: radius,
                                            snapToPixel: false,
                                            stroke: new ol.style.Stroke({
                                                color: 'rgba(200, 0, 0, ' + opacity + ')',
                                                width: 3,
                                                opacity: opacity
                                            })
                                        })
                                    });

                                    vectorContext.setStyle(marker);
                                    vectorContext.drawGeometry(flashGeom, null);

                                    if (elapsed > duration) {
                                        markerSource.clear();
                                        ol.Observable.unByKey(listenerKey);
                                        return;
                                    }
                                    // continue postcompose animation
                                    frameState.animate = true;
                                }; // end of "animationStep"

                                listenerKey = map.on('postcompose', animationStep);
                            }; // end of "animateMarker"

                            markerSource.on('addfeature', function (event) {
                                animateMarker(event.feature);
                            });

                            if (animate) {
                                if (zoomType === 'zoom') {
                                    window.setTimeout(addMarker, animationDuration / 2);
                                } else {
                                    window.setTimeout(addMarker, animationDuration);
                                }
                            } else {
                                addMarker();
                            }
                        } // end of result marker & animation handling
                    };

                    if (results[0]) {
                        result = results[0];
                        self.results = results;
                        currentCoordinate = mapView.getCenter();
                        resultCoordinate = ol.proj.transform([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

                        if (animate) {
                            flyTo(map, resultCoordinate, self.config.zoomlevel, self.config.zoombounds, result.boundingbox, markResult, animate);
                        } else {
                            completeSearch(self.config.markResult, self.config.animate);
                            mapView.setCenter(resultCoordinate);
                            if (self.config.zoomlevel >= 0) {
                                map.getView().setZoom(self.config.zoomlevel);
                            }
                        }

                        var pixel = map.getPixelFromCoordinate(resultCoordinate);
                        var feature = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
                            return feature;
                        });
                        var layer = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
                            return layer;
                        });
                        if (self.config.popup) {
                            var popupInfos = {};
                            if (feature && feature.get('popup')) {
                                // single POI
                                popupInfos = feature.get('popup');
                            } else if (layer && layer.popup) {
                                popupInfos = layer.popup;
                            } else {
                                feature = false;
                            }
                            if (feature) {
                                var geometry = feature.getGeometry();
                                if (geometry instanceof ol.geom.Point) {
                                    var coord = geometry.getCoordinates();
                                } else {
                                    var coord = resultCoordinate;
                                }

                                c4g.maps.popup.popup.setPosition(coord);
                                if (popupInfos.content) {
                                    c4g.maps.popup.$content.html('');
                                    c4g.maps.popup.$popup.addClass(c4g.maps.constant.css.ACTIVE).addClass(c4g.maps.constant.css.LOADING);
                                    c4g.maps.popup.spinner.show();

                                    if (popupInfos.async === false || popupInfos.async == '0') {
                                        var objPopup = {};
                                        objPopup.popup = popupInfos;
                                        objPopup.feature = feature;
                                        objPopup.layer = layer;
                                        // Call the popup hook for plugin specific popup content
                                        if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                                            c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
                                        }
                                        self.config.mapController.proxy.setPopup(objPopup);
                                    } else {
                                        $.ajax({
                                            dataType: "json",
                                            url: self.api_infowindow_url + '/' + popupInfos.content,
                                            done: function done(data) {
                                                var popupInfo = {
                                                    async: popupInfos.async,
                                                    content: data.content,
                                                    popup: popupInfos.popup,
                                                    routing_link: popupInfos.routing_link
                                                };

                                                objPopup = {};
                                                objPopup.popup = popupInfo;
                                                objPopup.feature = feature;
                                                objPopup.layer = layer;

                                                // Call the popup hook for plugin specific popup content
                                                if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                                                    c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
                                                }

                                                self.setPopup(objPopup);
                                            }
                                        });
                                    }
                                } else {
                                    c4g.maps.popup.$popup.removeClass(c4g.maps.constant.css.ACTIVE);
                                }
                            } else {
                                c4g.maps.popup.$popup.removeClass(c4g.maps.constant.css.ACTIVE);
                            }
                        }

                        if (self.config.autopick && self.config.mapController.geopicker && typeof self.config.mapController.geopicker.pick === 'function') {
                            self.config.mapController.geopicker.pick(resultCoordinate);
                        }
                    } else {
                        alert(c4g.maps.constant.i18n.SEARCH_NOT_FOUND);
                    }
                    // self.resultWrapper.innerHTML = '@ console';

                    if (document.getElementById("resultcontainer")) {
                        document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
                    }
                    if (self.config.results) {

                        var searchResultContainer = document.createElement('ul');
                        searchResultContainer.setAttribute("id", "resultcontainer");
                        if (self.results) {
                            for (var i = 0; i < self.results.length; i++) {
                                var searchResult = document.createElement('li');
                                var searchResultButton = document.createElement('button');
                                searchResultButton.setAttribute("id", i);
                                searchResultButton.setAttribute('class', 'searchResultButton');
                                searchResultButton.addEventListener('click', function () {
                                    self.zoomTo(this.getAttribute("id"));
                                });

                                searchResultButton.setAttribute("name", self.results[i].display_name);
                                searchResultButton.innerHTML = self.results[i].display_name;
                                searchResult.appendChild(searchResultButton);
                                searchResultContainer.appendChild(searchResult);
                            }
                            self.searchWrapper.appendChild(searchResultContainer);
                        }
                    }
                })

                // AJAX-failure
                //
                .fail(function () {
                    // @TODO
                    // self.resultWrapper.innerHTML = 'ohoh!';
                })

                // AJAX-always
                //
                .always(function () {
                    self.config.mapController.spinner.hide();
                });
            } else {
                // @TODO
            }
        }

    }); // end of "add methods" ---
})(jQuery, this.c4g);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLWdlb3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJjNGciLCJtYXBzIiwiY29udHJvbCIsIiQiLCJHZW9TZWFyY2giLCJvcHRfb3B0aW9ucyIsInNlbGYiLCJvcHRpb25zIiwiZWxlbWVudCIsImJ1dHRvbiIsInNlYXJjaFdyYXBwZXIiLCJzZWFyY2hJbnB1dCIsInNlYXJjaEJ1dHRvbiIsInJlc3VsdFRyaWdnZXIiLCJyZXN1bHRXcmFwcGVyIiwiZXh0ZW5kIiwibWFwQ29udHJvbGxlciIsInVuZGVmaW5lZCIsImNsYXNzTmFtZSIsImNvbnN0YW50IiwiY3NzIiwiR0VPU0VBUkNIIiwiZXh0RGl2IiwiY29sbGFwc2libGUiLCJjb2xsYXBzZWQiLCJ0aXBMYWJlbCIsImkxOG4iLCJDVFJMX0dFT1NFQVJDSCIsImxhYmVsIiwiY29sbGFwc2VkTGFiZWwiLCJhdHRyaWJ1dGlvbiIsInNlYXJjaFpvb20iLCJ6b29tQm91bmRzIiwicmVzdWx0cyIsInF1aWNrc2VhcmNoIiwiYW5pbWF0ZSIsIm1hcmtSZXN1bHQiLCJwb3B1cCIsImNhY2hpbmciLCJhdXRvcGljayIsImNvbmZpZyIsInVybCIsImRhdGEiLCJhcGkiLCJnZW9zZWFyY2giLCJwcm9maWxlIiwiem9vbWxldmVsIiwiem9vbWJvdW5kcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfQ09OVFJPTCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJhZGRDbGFzcyIsIkNMT1NFIiwiT1BFTiIsIkdFT1NFQVJDSF9XUkFQUEVSIiwiYXBwZW5kQ2hpbGQiLCJ0eXBlIiwiR0VPU0VBUkNIX1NUQVJUIiwidGl0bGUiLCJDVFJMX1NUQVJUX1NFQVJDSCIsImNsaWNrIiwiYmx1ciIsImlnbm9yZSIsInZhbHVlIiwiZmluZExvY2F0aW9uIiwia2V5cHJlc3MiLCJlIiwid2hpY2giLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzZWFyY2hSZXN1bHRDb250YWluZXIiLCJzZXRBdHRyaWJ1dGUiLCJpIiwibGVuZ3RoIiwic2VhcmNoUmVzdWx0Iiwic2VhcmNoUmVzdWx0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInpvb21UbyIsImdldEF0dHJpYnV0ZSIsImRpc3BsYXlfbmFtZSIsImlubmVySFRNTCIsIkdFT1NFQVJDSF9UUklHR0VSIiwidG9nZ2xlIiwidGFyZ2V0Iiwib2wiLCJDb250cm9sIiwiY2FsbCIsImluaGVyaXRzIiwicHJvdG90eXBlIiwib3BlbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJmaW5kIiwiZm9jdXMiLCJzdG9yZVZhbHVlIiwiY2xvc2UiLCJjbGVhclJlc3VsdHMiLCJpbmRleCIsIm1hcCIsInJlc3VsdCIsInJlc3VsdENvb3JkaW5hdGUiLCJmbHlUbyIsImNvbXBsZXRlU2VhcmNoIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ6b29tVHlwZSIsImxvY2F0aW9uIiwiYm91bmRpbmdib3giLCJkdXJhdGlvbiIsInpvb20iLCJwYXJ0cyIsImNhbGxlZCIsImNhbGxiYWNrIiwiY29tcGxldGUiLCJvc21FeHRlbnQiLCJwdXNoIiwicGFyc2VGbG9hdCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJtYXBWaWV3IiwiZml0IiwicHJvaiIsInRyYW5zZm9ybUV4dGVudCIsImdldFNpemUiLCJtaW5ab29tIiwiZ2V0IiwibWF4Wm9vbSIsImVhc2luZyIsImVhc2VPdXQiLCJnZXRWaWV3IiwiY2VudGVyIiwiYWRkTWFya2VyIiwibWFya2VyU291cmNlIiwiYW5pbWF0ZU1hcmtlciIsInNvdXJjZSIsIlZlY3RvciIsImFkZExheWVyIiwibGF5ZXIiLCJzdHlsZSIsIlN0eWxlIiwiYWRkRmVhdHVyZSIsIkZlYXR1cmUiLCJnZW9tIiwiUG9pbnQiLCJmZWF0dXJlIiwiYW5pbWF0aW9uU3RlcCIsInN0YXJ0IiwibGlzdGVuZXJLZXkiLCJEYXRlIiwiZ2V0VGltZSIsImV2ZW50IiwidmVjdG9yQ29udGV4dCIsImZyYW1lU3RhdGUiLCJlbGFwc2VkIiwiZWxhcHNlZFJhdGlvIiwicmFkaXVzIiwib3BhY2l0eSIsIm1hcmtlciIsImZsYXNoR2VvbSIsImdldEdlb21ldHJ5IiwiY2xvbmUiLCJ0aW1lIiwibGluZWFyIiwiaW1hZ2UiLCJDaXJjbGUiLCJzbmFwVG9QaXhlbCIsInN0cm9rZSIsIlN0cm9rZSIsImNvbG9yIiwid2lkdGgiLCJzZXRTdHlsZSIsImRyYXdHZW9tZXRyeSIsImNsZWFyIiwiT2JzZXJ2YWJsZSIsInVuQnlLZXkiLCJvbiIsImdldE1hcCIsInRyYW5zZm9ybSIsImxvbiIsImxhdCIsInJlc29sdXRpb24iLCJnZXRSZXNvbHV0aW9uIiwidmlld0V4dGVudCIsImNhbGN1bGF0ZUV4dGVudCIsImV4dGVudCIsImNvbnRhaW5zQ29vcmRpbmF0ZSIsIk1hdGgiLCJhYnMiLCJjdXJyZW50Q29vcmRpbmF0ZSIsImNvb3JkRGlmIiwiZGlmQ29udGV4dCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwic2V0Q2VudGVyIiwic2V0Wm9vbSIsInNwaW5uZXIiLCJzaG93IiwiYWpheCIsImNyb3NzRG9tYWluIiwiZGF0YVR5cGUiLCJmb3JtYXQiLCJxIiwiZG9uZSIsImdldENlbnRlciIsInBpeGVsIiwiZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZSIsImZvckVhY2hGZWF0dXJlQXRQaXhlbCIsInBvcHVwSW5mb3MiLCJnZW9tZXRyeSIsImNvb3JkIiwiZ2V0Q29vcmRpbmF0ZXMiLCJzZXRQb3NpdGlvbiIsImNvbnRlbnQiLCIkY29udGVudCIsImh0bWwiLCIkcG9wdXAiLCJBQ1RJVkUiLCJMT0FESU5HIiwiYXN5bmMiLCJvYmpQb3B1cCIsImhvb2siLCJwcm94eV9maWxsUG9wdXAiLCJjYWxsSG9va0Z1bmN0aW9ucyIsInByb3h5Iiwic2V0UG9wdXAiLCJhcGlfaW5mb3dpbmRvd191cmwiLCJwb3B1cEluZm8iLCJyb3V0aW5nX2xpbmsiLCJnZW9waWNrZXIiLCJwaWNrIiwiYWxlcnQiLCJTRUFSQ0hfTk9UX0ZPVU5EIiwiZmFpbCIsImFsd2F5cyIsImhpZGUiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0EsS0FBS0EsR0FBTCxHQUFXLEtBQUtBLEdBQUwsSUFBWSxFQUF2QjtBQUNBLEtBQUtBLEdBQUwsQ0FBU0MsSUFBVCxHQUFnQixLQUFLRCxHQUFMLENBQVNDLElBQVQsSUFBaUIsRUFBakM7QUFDQSxLQUFLRCxHQUFMLENBQVNDLElBQVQsQ0FBY0MsT0FBZCxHQUF3QixLQUFLRixHQUFMLENBQVNDLElBQVQsQ0FBY0MsT0FBZCxJQUF5QixFQUFqRDs7QUFFQyxXQUFVQyxDQUFWLEVBQWFILEdBQWIsRUFBa0I7QUFDakI7O0FBRUE7Ozs7Ozs7OztBQVFBQSxRQUFJQyxJQUFKLENBQVNDLE9BQVQsQ0FBaUJFLFNBQWpCLEdBQTZCLFVBQVVDLFdBQVYsRUFBdUI7O0FBRWxELFlBQUlDLElBQUosRUFDSUMsT0FESixFQUVJQyxPQUZKLEVBR0lDLE1BSEosRUFJSUMsYUFKSixFQUtJQyxXQUxKLEVBTUlDLFlBTkosRUFPSUMsYUFQSixFQVFJQyxhQVJKOztBQVVBUixlQUFPLElBQVA7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SixZQUFuQixDQUFnQyxJQUFoQyxFQUFzQ0MsQ0FBdEM7QUFDQUcsbURBQW1CSixZQUFuQixDQUFnQyxPQUFoQyxFQUF5QyxvQkFBekM7QUFDQUksbURBQW1CQyxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNEMsWUFBWTtBQUN0RDFFLHlDQUFLMkUsTUFBTCxDQUFZLEtBQUtDLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNELGlDQUZEOztBQUlBSCxtREFBbUJKLFlBQW5CLENBQWdDLE1BQWhDLEVBQXVDckUsS0FBSzJCLE9BQUwsQ0FBYTJDLENBQWIsRUFBZ0JPLFlBQXZEO0FBQ0FKLG1EQUFtQkssU0FBbkIsR0FBOEI5RSxLQUFLMkIsT0FBTCxDQUFhMkMsQ0FBYixFQUFnQk8sWUFBOUM7QUFDQUwsNkNBQWFuQixXQUFiLENBQXlCb0Isa0JBQXpCO0FBQ0FMLHNEQUFzQmYsV0FBdEIsQ0FBa0NtQixZQUFsQztBQUVEO0FBQ0R4RSxpQ0FBS0ksYUFBTCxDQUFtQmlELFdBQW5CLENBQStCZSxxQkFBL0I7QUFDRDtBQUNGO0FBQ0YsaUJBcFRMOztBQXNUSTtBQUNBO0FBdlRKLGlCQXdUS2lLLElBeFRMLENBd1RVLFlBQVk7QUFDaEI7QUFDQTtBQUNELGlCQTNUTDs7QUE2VEk7QUFDQTtBQTlUSixpQkErVEtDLE1BL1RMLENBK1RZLFlBQVk7QUFDbEJ0Tyx5QkFBS2tDLE1BQUwsQ0FBWXhCLGFBQVosQ0FBMEJzTCxPQUExQixDQUFrQ3VDLElBQWxDO0FBQ0QsaUJBalVMO0FBbVVELGFBdFVELE1Bc1VPO0FBQ0w7QUFDRDtBQUVGOztBQTVwQm1GLEtBQS9DLENBQXZDLENBbE9pQixDQWc0QmI7QUFFTCxDQWw0QkEsRUFrNEJDQyxNQWw0QkQsRUFrNEJTLEtBQUs5TyxHQWw0QmQsQ0FBRCxDIiwiZmlsZSI6ImM0Zy1tYXBzLWNvbnRyb2wtZ2Vvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtZ2Vvc2VhcmNoLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUzNjM0ZWE0NTk3Y2Q1YjczNWQwIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIEBUT0RPIGRlc2NyaXB0aW9uXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyAge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICpcbiAgICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICBvcHRfb3B0aW9ucyAgKm9wdGlvbmFsKiBjb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLkdlb1NlYXJjaCA9IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgdmFyIHNlbGYsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGJ1dHRvbixcbiAgICAgICAgc2VhcmNoV3JhcHBlcixcbiAgICAgICAgc2VhcmNoSW5wdXQsXG4gICAgICAgIHNlYXJjaEJ1dHRvbixcbiAgICAgICAgcmVzdWx0VHJpZ2dlcixcbiAgICAgICAgcmVzdWx0V3JhcHBlcjtcblxuICAgIHNlbGYgPSB0aGlzO1xuICAgIC8vIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgLy8gdGhpcy5zZWFyY2hXcmFwcGVyID0gc2VhcmNoV3JhcHBlcjtcbiAgICAvLyB0aGlzLnJlc3VsdFdyYXBwZXIgPSByZXN1bHRXcmFwcGVyO1xuXG4gICAgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkLFxuICAgICAgY2xhc3NOYW1lOiBjNGcubWFwcy5jb25zdGFudC5jc3MuR0VPU0VBUkNILFxuICAgICAgZXh0RGl2OiBmYWxzZSxcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgdGlwTGFiZWw6IGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4uQ1RSTF9HRU9TRUFSQ0gsXG4gICAgICBsYWJlbDogJz4+JyxcbiAgICAgIGNvbGxhcHNlZExhYmVsOiAnKD8pJyxcbiAgICAgIGF0dHJpYnV0aW9uOiB0cnVlLFxuICAgICAgLy8gY3VzdG9tQXR0cmlidXRpb246ICcnLFxuICAgICAgLy8gZW5naW5lVXJsOiBmYWxzZSxcbiAgICAgIHNlYXJjaFpvb206IDEyLFxuICAgICAgem9vbUJvdW5kczogZmFsc2UsXG4gICAgICByZXN1bHRzOiBmYWxzZSxcbiAgICAgIHF1aWNrc2VhcmNoOiB0cnVlLFxuICAgICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICAgIG1hcmtSZXN1bHQ6IHRydWUsXG4gICAgICBwb3B1cDogdHJ1ZSxcbiAgICAgIGNhY2hpbmc6IDAsXG4gICAgICBhdXRvcGljazogZmFsc2VcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIC8vIHByZXBhcmUgc2VhcmNoLWNvbmZpZ3VyYXRpb25cbiAgICAvL1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgLy8gc2VhcmNoRW5naW5lVXJsXG4gICAgLy8gaWYgKHR5cGVvZiBvcHRpb25zLmVuZ2luZVVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAgIC8vIGlmIGl0IGlzIGEgc3RyaW5nLCB0aGVuIGl0IGlzIChob3BlZnVsbHkpIGEgVVJMLCB0aGF0IHdlIGNhbiB1c2UgZGlyZWN0bHlcbiAgICAvLyAgIC8vIEBUT0RPIGFkZCBhIFVSTC1jaGVja1xuICAgIC8vICAgdGhpcy5jb25maWcudXJsID0gb3B0aW9ucy5lbmdpbmVVcmw7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIC8vIGlmIGl0IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGVuIHVzZSB0aGUgZGVmYXVsdCBVUkxcbiAgICAvLyAgIHRoaXMuY29uZmlnLnVybCA9ICdodHRwczovL25vbWluYXRpbS5vcGVuc3RyZWV0bWFwLm9yZy9zZWFyY2gnO1xuICAgIC8vIH1cbiAgICB0aGlzLmNvbmZpZy51cmwgPSBvcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZ2Vvc2VhcmNoICsgXCIvXCIgKyBvcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlO1xuICAgIC8vIHpvb21sZXZlbCB3aGVuIGNlbnRlcmluZyB0aGUgZm91bmQgbG9jYXRpb25cbiAgICB0aGlzLmNvbmZpZy56b29tbGV2ZWwgPSBvcHRpb25zLnNlYXJjaFpvb207XG4gICAgLy8gem9vbSB0byBib3VuZHMgaW5zdGVhZCBvZiB6b29tbGV2ZWwgd2hlbiBjZW50ZXJpbmcgdGhlIGZvdW5kIGxvY2F0aW9uXG4gICAgdGhpcy5jb25maWcuem9vbWJvdW5kcyA9IG9wdGlvbnMuem9vbUJvdW5kcztcbiAgICAvLyBxdWlja3NlYXJjaC1vcHRpb24gKGluc3RhbnRseSBqdW1wIHRvIHRoZSBmaXJzdCBmb3VuZCBsb2NhdGlvbilcbiAgICB0aGlzLmNvbmZpZy5xdWlja3NlYXJjaCA9IG9wdGlvbnMucXVpY2tzZWFyY2g7XG4gICAgLy8gYW5pbWF0aW9uIChhbmltYXRlIGZsaWdodCB0byB0YXJnZXRlZCBsb2NhdGlvbilcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRlID0gb3B0aW9ucy5hbmltYXRlO1xuICAgIC8vIGhpZ2hsaWdodCB0aGUgcmVzdWx0IGxvY2F0aW9uXG4gICAgdGhpcy5jb25maWcubWFya1Jlc3VsdCA9IG9wdGlvbnMubWFya1Jlc3VsdDtcbiAgICB0aGlzLmNvbmZpZy5wb3B1cCA9IG9wdGlvbnMucG9wdXA7XG5cbiAgICB0aGlzLmNvbmZpZy5hdXRvcGljayA9IG9wdGlvbnMuYXV0b3BpY2s7XG4gICAgdGhpcy5jb25maWcubWFwQ29udHJvbGxlciA9IG9wdGlvbnMubWFwQ29udHJvbGxlcjtcbiAgICB0aGlzLmNvbmZpZy5yZXN1bHRzID0gb3B0aW9ucy5yZXN1bHRzO1xuXG4gICAgdGhpcy5jb25maWcuY29sbGFwc2VkID0gb3B0aW9ucy5jb2xsYXBzZWQ7XG5cbiAgICB0aGlzLmNvbmZpZy5jYWNoaW5nID0gb3B0aW9ucy5jYWNoaW5nO1xuXG4gICAgLy8gQFRPRE9cbiAgICAvLyBBdHRyaWJ1dGlvblxuXG4gICAgLy8gY2hlY2sgZXh0RGl2XG4gICAgaWYgKG9wdGlvbnMuZXh0RGl2ICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuZXh0RGl2KSkge1xuICAgICAgb3B0aW9ucy5leHREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmV4dERpdik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMuZXh0RGl2ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY29udHJvbHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWUgKyAnICcgKyBjNGcubWFwcy5jb25zdGFudC5jc3MuT0xfVU5TRUxFQ1RBQkxFICsgJyAnICsgYzRnLm1hcHMuY29uc3RhbnQuY3NzLk9MX0NPTlRST0w7XG5cbiAgICBpZiAoKG9wdGlvbnMuY29sbGFwc2VkICYmICFvcHRpb25zLmV4dERpdikgJiEgKHRoaXMuY29uZmlnLmNhY2hpbmcgJiYgYzRnLm1hcHMudXRpbHMuZ2V0VmFsdWUoJ2dlb3NlYXJjaCcpID09ICcxJykpXG4gICAge1xuICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhjNGcubWFwcy5jb25zdGFudC5jc3MuQ0xPU0UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5PUEVOKTtcbiAgICB9XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIHRoaXMuc2VhcmNoV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuc2VhcmNoV3JhcHBlci5jbGFzc05hbWUgPSBjNGcubWFwcy5jb25zdGFudC5jc3MuR0VPU0VBUkNIX1dSQVBQRVI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNlYXJjaFdyYXBwZXIpO1xuXG4gICAgLy8gc2VhcmNoLWZpZWxkXG4gICAgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNlYXJjaElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGhpcy5zZWFyY2hXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcblxuICAgIC8vIEBUT0RPXG4gICAgLy8gLy8gcmVzdWx0LXRyaWdnZXJcbiAgICAvLyByZXN1bHRUcmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgLy8gcmVzdWx0VHJpZ2dlci5jbGFzc05hbWUgPSAnUlQnO1xuICAgIC8vIHNlYXJjaFdyYXBwZXIuYXBwZW5kQ2hpbGQocmVzdWx0VHJpZ2dlcik7XG5cbiAgICAvLyAkKHJlc3VsdFRyaWdnZXIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgIHRyeSB7XG4gICAgLy8gICAgIHRoaXMuYmx1cigpO1xuICAgIC8vICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgIC8vICAgc2VsZi50b2dnbGVSZXN1bHRzKCk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyAvLyByZXN1bHQtd3JhcHBlclxuICAgIC8vIHJlc3VsdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyByZXN1bHRXcmFwcGVyLmNsYXNzTmFtZSA9ICdSRVNVTFRTICcgKyBjNGcubWFwcy5jb25zdGFudC5jc3MuQ0xPU0U7XG4gICAgLy8gcmVzdWx0V3JhcHBlci5pbm5lckhUTUwgPSAnbm8gcmVzdWx0cyc7XG4gICAgLy8gc2VhcmNoV3JhcHBlci5hcHBlbmRDaGlsZChyZXN1bHRXcmFwcGVyKTtcbiAgICAvLyB0aGlzLnJlc3VsdFdyYXBwZXIgPSByZXN1bHRXcmFwcGVyO1xuXG4gICAgLy8gc2VhcmNoLWJ1dHRvblxuICAgIHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNlYXJjaEJ1dHRvbi5jbGFzc05hbWUgPSBjNGcubWFwcy5jb25zdGFudC5jc3MuR0VPU0VBUkNIX1NUQVJUO1xuICAgIHNlYXJjaEJ1dHRvbi50aXRsZSA9IGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4uQ1RSTF9TVEFSVF9TRUFSQ0g7XG4gICAgdGhpcy5zZWFyY2hXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG5cbiAgICAgICQoc2VhcmNoQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZWFyY2hJbnB1dC52YWx1ZSkge1xuXG4gICAgICAgICAgICAgIHNlbGYuZmluZExvY2F0aW9uKHNlYXJjaElucHV0LnZhbHVlKTtcblxuICAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgJChzZWFyY2hJbnB1dCkua2V5cHJlc3MoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgICAgIGlmIChzZWFyY2hJbnB1dC52YWx1ZSkge1xuXG4gICAgICAgICAgICAgIHNlbGYuZmluZExvY2F0aW9uKHNlYXJjaElucHV0LnZhbHVlKTtcblxuICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdGNvbnRhaW5lclwiKSl7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdGNvbnRhaW5lclwiKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0Y29udGFpbmVyXCIpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZihzZWxmLmNvbmZpZy5yZXN1bHRzKXtcblxuICAgICAgICAgICAgICAgICAgdmFyIHNlYXJjaFJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcInJlc3VsdGNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYucmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VhcmNoUmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlYXJjaFJlc3VsdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlYXJjaFJlc3VsdEJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuem9vbVRvKHRoaXMuZ2V0QXR0cmlidXRlKFwiaWRcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsc2VsZi5yZXN1bHRzW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdEJ1dHRvbi5pbm5lckhUTUwgPXNlbGYucmVzdWx0c1tpXS5kaXNwbGF5X25hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdC5hcHBlbmRDaGlsZChzZWFyY2hSZXN1bHRCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0KTtcblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaFJlc3VsdENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgaWYgKG9wdGlvbnMuY29sbGFwc2libGUgJiYgIW9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICAvLyBidXR0b25cbiAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5HRU9TRUFSQ0hfVFJJR0dFUjtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IG9wdGlvbnMudGlwTGFiZWw7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgIC8vIHNldCBvbkNsaWNrIHRvIHRoZSB0b2dnbGUtZnVuY3Rpb25cbiAgICAgICQoYnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICB9XG4gICAgICAgIHNlbGYudG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICBvcHRpb25zLnRhcmdldCA9IG9wdGlvbnMuZXh0RGl2O1xuICAgIH1cblxuICAgIC8vIGluaGVyaXRhbmNlLXN0dWZmXG4gICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogb3B0aW9ucy50YXJnZXRcbiAgICB9KTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5HZW9TZWFyY2gsIG9sLmNvbnRyb2wuQ29udHJvbCk7XG5cblxuICAvKlxuICAgKiBBZGQgbWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5HZW9TZWFyY2gucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5HZW9TZWFyY2gucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBAVE9ET1xuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBvcGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5DTE9TRSkpIHtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5PUEVOKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5DTE9TRSlcbiAgICAgICAgICAgIC5maW5kKCdpbnB1dCcpWzBdLmZvY3VzKCk7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmNhY2hpbmcpIHtcbiAgICAgICAgICAgICAgYzRnLm1hcHMudXRpbHMuc3RvcmVWYWx1ZSgnZ2Vvc2VhcmNoJywgJzEnKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBUT0RPXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5PUEVOKSkge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkNMT1NFKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5PUEVOKTtcbiAgICAgICAgLy8gdGhpcy5jbG9zZVJlc3VsdHMoKTtcbiAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdGNvbnRhaW5lclwiKSl7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0Y29udGFpbmVyXCIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRjb250YWluZXJcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuY2FjaGluZykge1xuICAgICAgICAgICAgICBjNGcubWFwcy51dGlscy5zdG9yZVZhbHVlKCdnZW9zZWFyY2gnLCAnMCcpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5DTE9TRSkpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEBUT0RPXG4gICAgLy8gICpcbiAgICAvLyAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgIC8vICAqL1xuICAgIC8vIG9wZW5SZXN1bHRzOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICBpZiAoJCh0aGlzLnJlc3VsdFdyYXBwZXIpLmhhc0NsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5DTE9TRSkpIHtcbiAgICAvLyAgICAgJCh0aGlzLnJlc3VsdFdyYXBwZXIpLmFkZENsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5PUEVOKVxuICAgIC8vICAgICAgIC5yZW1vdmVDbGFzcyhjNGcubWFwcy5jb25zdGFudC5jc3MuQ0xPU0UpO1xuICAgIC8vICAgfVxuICAgIC8vIH0sXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBAVE9ET1xuICAgIC8vICAqXG4gICAgLy8gICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAvLyAgKi9cbiAgICAvLyBjbG9zZVJlc3VsdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgIGlmICgkKHRoaXMucmVzdWx0V3JhcHBlcikuaGFzQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLk9QRU4pKSB7XG4gICAgLy8gICAgICQodGhpcy5yZXN1bHRXcmFwcGVyKS5hZGRDbGFzcyhjNGcubWFwcy5jb25zdGFudC5jc3MuQ0xPU0UpXG4gICAgLy8gICAgICAgLnJlbW92ZUNsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5PUEVOKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQFRPRE9cbiAgICAvLyAgKlxuICAgIC8vICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgLy8gICovXG4gICAgLy8gdG9nZ2xlUmVzdWx0czogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgaWYgKCQodGhpcy5yZXN1bHRXcmFwcGVyKS5oYXNDbGFzcyhjNGcubWFwcy5jb25zdGFudC5jc3MuQ0xPU0UpKSB7XG4gICAgLy8gICAgIHRoaXMub3BlblJlc3VsdHMoKTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRoaXMuY2xvc2VSZXN1bHRzKCk7XG4gICAgLy8gICB9XG4gICAgLy8gfSxcblxuICAgIC8qKlxuICAgICAqIEBUT0RPXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNsZWFyUmVzdWx0czogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXN1bHRXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEBUT0RPXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7W3R5cGVdfSAgbG9jYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHpvb21UbzogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBzZWxmLFxuICAgICAgICAgICAgbWFwLFxuICAgICAgICAgICAgYW5pbWF0ZSxcbiAgICAgICAgICAgIG1hcmtSZXN1bHQsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICByZXN1bHRDb29yZGluYXRlLFxuICAgICAgICAgICAgZmx5VG8sXG4gICAgICAgICAgICBjb21wbGV0ZVNlYXJjaCxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgem9vbVR5cGU7XG5cbiAgICAgICAgZmx5VG8gPSBmdW5jdGlvbiAobWFwLCBsb2NhdGlvbiwgem9vbWxldmVsLCB6b29tYm91bmRzLCBib3VuZGluZ2JveCwgbWFya1Jlc3VsdCwgYW5pbWF0ZSkge1xuICAgICAgICAgICAgdmFyIGR1cmF0aW9uID0gMjAwMDtcbiAgICAgICAgICAgIHZhciB6b29tID0gem9vbWxldmVsOy8vbWFwVmlldy5nZXRab29tKCk7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSAyO1xuICAgICAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYWxsYmFjayhjb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIC0tcGFydHM7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJ0cyA9PT0gMCB8fCAhY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoem9vbWJvdW5kcyAmJiBib3VuZGluZ2JveCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNsYXRlIG9zbS1leHRlbnQgdG8gb2wzLWV4dGVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBvc21FeHRlbnQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9zbUV4dGVudC5wdXNoKHBhcnNlRmxvYXQoYm91bmRpbmdib3hbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9zbUV4dGVudC5wdXNoKHBhcnNlRmxvYXQoYm91bmRpbmdib3hbMF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9zbUV4dGVudC5wdXNoKHBhcnNlRmxvYXQoYm91bmRpbmdib3hbM10pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9zbUV4dGVudC5wdXNoKHBhcnNlRmxvYXQoYm91bmRpbmdib3hbMV0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFZpZXcuZml0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybUV4dGVudChvc21FeHRlbnQsICdFUFNHOjQzMjYnLCAnRVBTRzozODU3JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5nZXRTaXplKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblpvb206IG1hcFZpZXcuZ2V0KCdtaW5ab29tJykgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFpvb206IG1hcFZpZXcuZ2V0KCdtYXhab29tJykgfHwgMTksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24gLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBvbC5lYXNpbmcuZWFzZU91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVTZWFyY2gobWFya1Jlc3VsdCwgYW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXAuZ2V0VmlldygpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGNlbnRlcjogbG9jYXRpb24sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgICAgICAgICBtYXAuZ2V0VmlldygpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHpvb206IHpvb20gLSAxLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIDJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB6b29tOiB6b29tLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIDJcbiAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXBsZXRlU2VhcmNoID0gZnVuY3Rpb24obWFya1Jlc3VsdCwgYW5pbWF0ZSkge1xuICAgICAgICAgICAgdmFyIGFkZE1hcmtlcixcbiAgICAgICAgICAgICAgICBtYXJrZXJTb3VyY2UsXG4gICAgICAgICAgICAgICAgYW5pbWF0ZU1hcmtlcjtcblxuICAgICAgICAgICAgbWFya2VyU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3IoKTtcbiAgICAgICAgICAgIG1hcC5hZGRMYXllcihuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgICAgICAgICBzdHlsZTogbmV3IG9sLnN0eWxlLlN0eWxlKCksXG4gICAgICAgICAgICAgICAgc291cmNlOiBtYXJrZXJTb3VyY2VcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgYWRkTWFya2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1hcmtlclNvdXJjZS5hZGRGZWF0dXJlKFxuICAgICAgICAgICAgICAgICAgICBuZXcgb2wuRmVhdHVyZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBvbC5nZW9tLlBvaW50KHJlc3VsdENvb3JkaW5hdGUpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYW5pbWF0ZU1hcmtlciA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvblN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJLZXk7XG5cbiAgICAgICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gMzAwMDtcblxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblN0ZXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZlY3RvckNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxhcHNlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsYXBzZWRSYXRpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFzaEdlb207XG5cbiAgICAgICAgICAgICAgICAgICAgdmVjdG9yQ29udGV4dCA9IGV2ZW50LnZlY3RvckNvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lU3RhdGUgPSBldmVudC5mcmFtZVN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBmbGFzaEdlb20gPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxhcHNlZCA9IGZyYW1lU3RhdGUudGltZSAtIHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBlbGFwc2VkUmF0aW8gPSBlbGFwc2VkIC8gZHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJhZGl1cyA9IG9sLmVhc2luZy5saW5lYXIoMSAtIGVsYXBzZWRSYXRpbykgKiAxMDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYWRpdXMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgPSBvbC5lYXNpbmcubGluZWFyKGVsYXBzZWRSYXRpbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWFya2VyID0gbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbmFwVG9QaXhlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDIwMCwgMCwgMCwgJyArIG9wYWNpdHkgKyAnKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHZlY3RvckNvbnRleHQuc2V0U3R5bGUobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgdmVjdG9yQ29udGV4dC5kcmF3R2VvbWV0cnkoZmxhc2hHZW9tLCBudWxsKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxhcHNlZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sLk9ic2VydmFibGUudW5CeUtleShsaXN0ZW5lcktleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gY29udGludWUgcG9zdGNvbXBvc2UgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lU3RhdGUuYW5pbWF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTsgLy8gZW5kIG9mIFwiYW5pbWF0aW9uU3RlcFwiXG5cbiAgICAgICAgICAgICAgICBsaXN0ZW5lcktleSA9IG1hcC5vbigncG9zdGNvbXBvc2UnLCBhbmltYXRpb25TdGVwKTtcblxuICAgICAgICAgICAgfTsgLy8gZW5kIG9mIFwiYW5pbWF0ZU1hcmtlclwiXG5cbiAgICAgICAgICAgIG1hcmtlclNvdXJjZS5vbignYWRkZmVhdHVyZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGVNYXJrZXIoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoem9vbVR5cGUgPT09ICd6b29tJykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhZGRNYXJrZXIsIGFuaW1hdGlvbkR1cmF0aW9uIC8gMik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoYWRkTWFya2VyLCBhbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRNYXJrZXIoKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgIG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG5cbiAgICAgICAgcmVzdWx0ID0gc2VsZi5yZXN1bHRzW2luZGV4XTtcbiAgICAgICAgcmVzdWx0Q29vcmRpbmF0ZSA9IG9sLnByb2oudHJhbnNmb3JtKFtwYXJzZUZsb2F0KHJlc3VsdC5sb24pLCBwYXJzZUZsb2F0KHJlc3VsdC5sYXQpXSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuXG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gbWFwVmlldy5nZXRSZXNvbHV0aW9uKCk7XG4gICAgICAgICAgICB2aWV3RXh0ZW50ID0gbWFwVmlldy5jYWxjdWxhdGVFeHRlbnQobWFwLmdldFNpemUoKSk7XG4gICAgICAgICAgICBpZiAob2wuZXh0ZW50LmNvbnRhaW5zQ29vcmRpbmF0ZSh2aWV3RXh0ZW50LCByZXN1bHRDb29yZGluYXRlKSkge1xuICAgICAgICAgICAgICAgIHpvb21UeXBlID0gJ3pvb20nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoY3VycmVudENvb3JkaW5hdGVbMF0gLSByZXN1bHRDb29yZGluYXRlWzBdKSA+IE1hdGguYWJzKGN1cnJlbnRDb29yZGluYXRlWzFdIC0gcmVzdWx0Q29vcmRpbmF0ZVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmREaWYgPSBNYXRoLmFicyhjdXJyZW50Q29vcmRpbmF0ZVswXSAtIHJlc3VsdENvb3JkaW5hdGVbMF0pO1xuICAgICAgICAgICAgICAgICAgICBkaWZDb250ZXh0ID0gb2wuZXh0ZW50LmdldFdpZHRoKHZpZXdFeHRlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkRGlmID0gTWF0aC5hYnMoY3VycmVudENvb3JkaW5hdGVbMV0gLSByZXN1bHRDb29yZGluYXRlWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgZGlmQ29udGV4dCA9IG9sLmV4dGVudC5nZXRIZWlnaHQodmlld0V4dGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb29yZERpZiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvbiAqPSBjb29yZERpZiAvIGRpZkNvbnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHpvb21UeXBlID0gJ2JvdW5jZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZseVRvKG1hcCwgcmVzdWx0Q29vcmRpbmF0ZSwgc2VsZi5jb25maWcuem9vbWxldmVsLCBzZWxmLmNvbmZpZy56b29tYm91bmRzLCByZXN1bHQuYm91bmRpbmdib3gsIHRoaXMuY29uZmlnLm1hcmtSZXN1bHQsIHRoaXMuY29uZmlnLmFuaW1hdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29tcGxldGVTZWFyY2godGhpcy5jb25maWcubWFya1Jlc3VsdCwgdGhpcy5jb25maWcuYW5pbWF0ZSk7XG4gICAgICAgICAgICBtYXAuZ2V0VmlldygpLnNldENlbnRlcihyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy56b29tbGV2ZWwgPj0gMCkge1xuICAgICAgICAgICAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Wm9vbShzZWxmLmNvbmZpZy56b29tbGV2ZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgZmluZExvY2F0aW9uOiBmdW5jdGlvbiAobG9jYXRpb24sIG9wdF9vcHRpb25zKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBtYXAsXG4gICAgICAgICAgYW5pbWF0ZSxcbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICBtYXJrUmVzdWx0O1xuXG4gICAgICBzZWxmID0gdGhpcztcbiAgICAgIG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG5cbiAgICAgIC8vIHNob3cgc3Bpbm5lclxuICAgICAgdGhpcy5jb25maWcubWFwQ29udHJvbGxlci5zcGlubmVyLnNob3coKTtcblxuICAgICAgYW5pbWF0ZSA9IHRoaXMuY29uZmlnLmFuaW1hdGU7XG4gICAgICBhbmltYXRpb25EdXJhdGlvbiA9IDIwMDA7XG4gICAgICBtYXJrUmVzdWx0ID0gdGhpcy5jb25maWcubWFya1Jlc3VsdDtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRfb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKG9wdF9vcHRpb25zLmFuaW1hdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGFuaW1hdGUgPSBvcHRfb3B0aW9ucy5hbmltYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRfb3B0aW9ucy5tYXJrUmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBtYXJrUmVzdWx0ID0gb3B0X29wdGlvbnMubWFya1Jlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIC8vIEBUT0RPXG4gICAgICAvLyBjaGVjayBib3VuZHNcbiAgICAgIC8vICAgYXJlIHRoZXJlIHJlc3RyaWN0aW9uLWJvdW5kcyBvbiB0aGUgbWFwP1xuICAgICAgLy8gICAtPiBlbHNlIHVzZSBleHRlbnQtYm91bmRzXG5cbiAgICAgIC8vIEBUT0RPXG4gICAgICAvLyBoaWdobGlnaHQgZm91bmQgYXJlYS9sb2NhdGlvblxuXG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5xdWlja3NlYXJjaCkge1xuXG4gICAgICAgIC8vIEFKQVggLT4gQG5vbWluYXRpbVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICB1cmw6IHRoaXMuY29uZmlnLnVybCxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGZvcm1hdDogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgcTogbG9jYXRpb25cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG5cbiAgICAgICAgICAgICAgdmFyIG1hcFZpZXcsXG4gICAgICAgICAgICAgICAgICBjdXJyZW50Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgIHJlc3VsdENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICBjb29yZERpZixcbiAgICAgICAgICAgICAgICAgIGRpZkNvbnRleHQsXG4gICAgICAgICAgICAgICAgICB2aWV3RXh0ZW50LFxuICAgICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgb3NtRXh0ZW50LFxuICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvbixcbiAgICAgICAgICAgICAgICAgIHpvb21UeXBlLFxuICAgICAgICAgICAgICAgICAgZmx5VG8sXG4gICAgICAgICAgICAgICAgICBjb21wbGV0ZVNlYXJjaDtcblxuICAgICAgICAgICAgICBtYXBWaWV3ID0gbWFwLmdldFZpZXcoKTtcblxuICAgICAgICAgICAgICBmbHlUbyA9IGZ1bmN0aW9uIChtYXAsIGxvY2F0aW9uLCB6b29tbGV2ZWwsIHpvb21ib3VuZHMsIGJvdW5kaW5nYm94LCBtYXJrUmVzdWx0LCBhbmltYXRlKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgICAgICAgdmFyIHpvb20gPSB6b29tbGV2ZWw7Ly9tYXBWaWV3LmdldFpvb20oKTtcbiAgICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IDI7XG4gICAgICAgICAgICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLS1wYXJ0cztcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRzID09PSAwIHx8ICFjb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh6b29tYm91bmRzICYmIGJvdW5kaW5nYm94KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2xhdGUgb3NtLWV4dGVudCB0byBvbDMtZXh0ZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9zbUV4dGVudCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFswXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFszXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFsxXSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwVmlldy5maXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtRXh0ZW50KG9zbUV4dGVudCwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluWm9vbTogbWFwVmlldy5nZXQoJ21pblpvb20nKSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Wm9vbTogbWFwVmlldy5nZXQoJ21heFpvb20nKSB8fCAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IG9sLmVhc2luZy5lYXNlT3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZVNlYXJjaChtYXJrUmVzdWx0LCBhbmltYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIG1hcC5nZXRWaWV3KCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBsb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgICAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgIG1hcC5nZXRWaWV3KCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgem9vbTogem9vbSAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gMlxuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgIHpvb206IHpvb20sXG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gMlxuICAgICAgICAgICAgICAgICAgfSwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgY29tcGxldGVTZWFyY2ggPSBmdW5jdGlvbihtYXJrUmVzdWx0LCBhbmltYXRlKSB7XG4gICAgICAgICAgICAgICAgICAvLyByZXN1bHQgbWFya2VyICYgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICBpZiAobWFya1Jlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGRNYXJrZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlclNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZU1hcmtlcjtcblxuICAgICAgICAgICAgICAgICAgICAgIG1hcmtlclNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZExheWVyKG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogbmV3IG9sLnN0eWxlLlN0eWxlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbWFya2VyU291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgYWRkTWFya2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJTb3VyY2UuYWRkRmVhdHVyZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBvbC5GZWF0dXJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBvbC5nZW9tLlBvaW50KHJlc3VsdENvb3JkaW5hdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVNYXJrZXIgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uU3RlcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcktleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IDMwMDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU3RlcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY3RvckNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGFwc2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsYXBzZWRSYXRpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhc2hHZW9tO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JDb250ZXh0ID0gZXZlbnQudmVjdG9yQ29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lU3RhdGUgPSBldmVudC5mcmFtZVN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhc2hHZW9tID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGFwc2VkID0gZnJhbWVTdGF0ZS50aW1lIC0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGFwc2VkUmF0aW8gPSBlbGFwc2VkIC8gZHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSBvbC5lYXNpbmcubGluZWFyKDEgLSBlbGFwc2VkUmF0aW8pICogMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhZGl1cyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSA9IG9sLmVhc2luZy5saW5lYXIoZWxhcHNlZFJhdGlvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc25hcFRvUGl4ZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDIwMCwgMCwgMCwgJyArIG9wYWNpdHkgKyAnKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IG9wYWNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckNvbnRleHQuc2V0U3R5bGUobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckNvbnRleHQuZHJhd0dlb21ldHJ5KGZsYXNoR2VvbSwgbnVsbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGFwc2VkID4gZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbC5PYnNlcnZhYmxlLnVuQnlLZXkobGlzdGVuZXJLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlIHBvc3Rjb21wb3NlIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVTdGF0ZS5hbmltYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTsgLy8gZW5kIG9mIFwiYW5pbWF0aW9uU3RlcFwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJLZXkgPSBtYXAub24oJ3Bvc3Rjb21wb3NlJywgYW5pbWF0aW9uU3RlcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICB9OyAvLyBlbmQgb2YgXCJhbmltYXRlTWFya2VyXCJcblxuICAgICAgICAgICAgICAgICAgICAgIG1hcmtlclNvdXJjZS5vbignYWRkZmVhdHVyZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlTWFya2VyKGV2ZW50LmZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHpvb21UeXBlID09PSAnem9vbScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFkZE1hcmtlciwgYW5pbWF0aW9uRHVyYXRpb24gLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFkZE1hcmtlciwgYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTWFya2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9Ly8gZW5kIG9mIHJlc3VsdCBtYXJrZXIgJiBhbmltYXRpb24gaGFuZGxpbmdcblxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHNbMF0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICAgICAgICAgIHNlbGYucmVzdWx0cz1yZXN1bHRzO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb29yZGluYXRlID0gbWFwVmlldy5nZXRDZW50ZXIoKTtcbiAgICAgICAgICAgICAgICByZXN1bHRDb29yZGluYXRlID0gb2wucHJvai50cmFuc2Zvcm0oW3BhcnNlRmxvYXQocmVzdWx0LmxvbiksIHBhcnNlRmxvYXQocmVzdWx0LmxhdCldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmx5VG8obWFwLCByZXN1bHRDb29yZGluYXRlLCBzZWxmLmNvbmZpZy56b29tbGV2ZWwsIHNlbGYuY29uZmlnLnpvb21ib3VuZHMsIHJlc3VsdC5ib3VuZGluZ2JveCwgbWFya1Jlc3VsdCwgYW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlU2VhcmNoKHNlbGYuY29uZmlnLm1hcmtSZXN1bHQsIHNlbGYuY29uZmlnLmFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICAgbWFwVmlldy5zZXRDZW50ZXIocmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuem9vbWxldmVsID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Wm9vbShzZWxmLmNvbmZpZy56b29tbGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwaXhlbCA9IG1hcC5nZXRQaXhlbEZyb21Db29yZGluYXRlKHJlc3VsdENvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIHZhciBmZWF0dXJlID0gbWFwLmZvckVhY2hGZWF0dXJlQXRQaXhlbChwaXhlbCxcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGxheWVyID0gbWFwLmZvckVhY2hGZWF0dXJlQXRQaXhlbChwaXhlbCxcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmKHNlbGYuY29uZmlnLnBvcHVwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvcHVwSW5mb3MgPXt9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCgncG9wdXAnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2luZ2xlIFBPSVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBJbmZvcyA9IGZlYXR1cmUuZ2V0KCdwb3B1cCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheWVyICYmIGxheWVyLnBvcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cEluZm9zID0gbGF5ZXIucG9wdXA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnZW9tZXRyeSA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29vcmQgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29vcmQgPSByZXN1bHRDb29yZGluYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjNGcubWFwcy5wb3B1cC5wb3B1cC5zZXRQb3NpdGlvbihjb29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBJbmZvcy5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzRnLm1hcHMucG9wdXAuJGNvbnRlbnQuaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzRnLm1hcHMucG9wdXAuJHBvcHVwLmFkZENsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5BQ1RJVkUpLmFkZENsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5MT0FESU5HKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjNGcubWFwcy5wb3B1cC5zcGlubmVyLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cEluZm9zLmFzeW5jID09PSBmYWxzZSB8fCBwb3B1cEluZm9zLmFzeW5jID09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqUG9wdXAgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqUG9wdXAucG9wdXAgPSBwb3B1cEluZm9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3B1cC5mZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqUG9wdXAubGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcG9wdXAgaG9vayBmb3IgcGx1Z2luIHNwZWNpZmljIHBvcHVwIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGM0Zy5tYXBzLmhvb2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYzRnLm1hcHMuaG9vay5wcm94eV9maWxsUG9wdXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjNGcubWFwcy51dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1hcENvbnRyb2xsZXIucHJveHkuc2V0UG9wdXAob2JqUG9wdXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlbGYuYXBpX2luZm93aW5kb3dfdXJsICsgJy8nICsgcG9wdXBJbmZvcy5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9wdXBJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogcG9wdXBJbmZvcy5hc3luYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogcG9wdXBJbmZvcy5wb3B1cCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZ19saW5rOiBwb3B1cEluZm9zLnJvdXRpbmdfbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3B1cCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvcHVwLnBvcHVwID0gcG9wdXBJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvcHVwLmZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvcHVwLmxheWVyID0gbGF5ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIHRoZSBwb3B1cCBob29rIGZvciBwbHVnaW4gc3BlY2lmaWMgcG9wdXAgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjNGcubWFwcy5ob29rICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGM0Zy5tYXBzLmhvb2sucHJveHlfZmlsbFBvcHVwID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjNGcubWFwcy51dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0UG9wdXAob2JqUG9wdXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM0Zy5tYXBzLnBvcHVwLiRwb3B1cC5yZW1vdmVDbGFzcyhjNGcubWFwcy5jb25zdGFudC5jc3MuQUNUSVZFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYzRnLm1hcHMucG9wdXAuJHBvcHVwLnJlbW92ZUNsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5BQ1RJVkUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYXV0b3BpY2sgJiYgc2VsZi5jb25maWcubWFwQ29udHJvbGxlci5nZW9waWNrZXIgJiYgdHlwZW9mIHNlbGYuY29uZmlnLm1hcENvbnRyb2xsZXIuZ2VvcGlja2VyLnBpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1hcENvbnRyb2xsZXIuZ2VvcGlja2VyLnBpY2socmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYzRnLm1hcHMuY29uc3RhbnQuaTE4bi5TRUFSQ0hfTk9UX0ZPVU5EKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBzZWxmLnJlc3VsdFdyYXBwZXIuaW5uZXJIVE1MID0gJ0AgY29uc29sZSc7XG5cbiAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRjb250YWluZXJcIikpe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0Y29udGFpbmVyXCIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRjb250YWluZXJcIikpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmKHNlbGYuY29uZmlnLnJlc3VsdHMpe1xuXG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaFJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJyZXN1bHRjb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWFyY2hSZXN1bHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGkpO1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWFyY2hSZXN1bHRCdXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi56b29tVG8odGhpcy5nZXRBdHRyaWJ1dGUoXCJpZFwiKSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0QnV0dG9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIixzZWxmLnJlc3VsdHNbaV0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0QnV0dG9uLmlubmVySFRNTCA9c2VsZi5yZXN1bHRzW2ldLmRpc3BsYXlfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0LmFwcGVuZENoaWxkKHNlYXJjaFJlc3VsdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hSZXN1bHQpO1xuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzZWxmLnNlYXJjaFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIEFKQVgtZmFpbHVyZVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gQFRPRE9cbiAgICAgICAgICAgICAgLy8gc2VsZi5yZXN1bHRXcmFwcGVyLmlubmVySFRNTCA9ICdvaG9oISc7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBBSkFYLWFsd2F5c1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXBDb250cm9sbGVyLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEBUT0RPXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLWdlb3NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=