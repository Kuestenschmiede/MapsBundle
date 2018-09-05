// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};

//for jslint
/*jslint browser:true*/
/*jslint todo:true */
/*global window*/
/*global ol*/
/*global Browser*/
/*global Document:true */
/*global jQuery*/

(function ($, c4g) {
    'use strict';

    /**
     * [MapController description]
     * @param {json-object}  mapData  Object to configure con4gis-maps.
     *                                See "docs/mapData-values.md"
     *                                to get a list of valid values for this object.
     */
    c4g.maps.MapController = function (mapData) {

        //---
        this.map = null;
        // this.controls = null;
        this.leftSlideElements = [];
        this.rightSlideElements = [];

        var self = this,
            permalink = false,
            minZoom,
            maxZoom,
            view,
            geoLocation,
            controls = [],
            interactions = [],
            displayAllLocations,
            domMapDiv,
            kinetic,
            controlContainerTopLeft,
            controlContainerBottomLeft,
            controlContainerTopRight,
            controlContainerBottomRight,
            controlContainerBottomLeftSub,
            starboard_label,
            logoLink,
            logoGraphic,
            removeElement,
            enableStarboard = true;

        //--
        mapData = $.extend({
            api: {},
            addIdToDiv: false,
            mapId: 1,
            mapDiv: 'c4g_map',
            center: {},
            calc_extent: 'CENTERZOOM',
            attribution: {},
            editor: {},
            measuretools: {},
            exporttools: {},
            infopage: {},
            account: {},
            starboard: {},
            layerswitcher: {},
            baselayerswitcher: {},
            geosearch: {}
        }, mapData);
        if (mapData.calc_extent === 'LOCATIONS') {
            mapData = $.extend({
                min_gap: 25
            }, mapData);
        }

        // center
        mapData.center = $.extend({
            lat: 52.22,
            lon: 9.43,
            rotation: 0,
            zoom: 6
        }, mapData.center);
        // attribution
        mapData.attribution = $.extend({
            enable: true,
            collapsed: false
        }, mapData.attribution);
        // geosearch
        mapData.geosearch = $.extend({
            enable: false,
            div: false
        }, mapData.geosearch);
        // permalink
        mapData.permalink = $.extend({
            enable: false,
            get_parameter: false
        }, mapData.permalink);
        this.data = mapData;
        if (mapData.addIdToDiv) {
            mapData.mapDiv += '_' + mapData.mapId;
        }
        // PHPStorm marks this as error, but it is none
        // This is needed for preventing an error with the OSM-Overpass API
        // which occurs when MooTools is loaded
        if (window.MooTools && Browser.Document) {
            Document = Browser.Document;
        }
        this.proxy = new MapProxy({mapController: this});

        // check permalink
        if (mapData.permalink.enable) {
            permalink = c4g.maps.utils.getUrlParam(mapData.permalink.get_parameter);

            if (permalink) {
                permalink = permalink.split('/');
                switch (permalink.length) {
                case 6:
                    permalink[0] = parseFloat(permalink[0]);
                    mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
                    permalink[1] = parseFloat(permalink[1]);
                    mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
                    permalink[2] = parseInt(permalink[2], 10);
                    mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom;
                    permalink[3] = parseFloat(permalink[3]);
                    mapData.center.rotation = !isNaN(permalink[3]) ? permalink[3] : mapData.center.rotation;
                    permalink[4] = parseInt(permalink[4], 10);
                    mapData.baselayer = !isNaN(permalink[4]) ? permalink[4] : mapData.baselayer;
                    mapData.layers = permalink[5].split(':');
                    // decode deltaEncoding
                    mapData.layers = c4g.maps.utils.deltaDecode(mapData.layers);
                    break;
                case 2:
                    // baselayer and layers only
                    permalink[0] = parseInt(permalink[0], 10);
                    mapData.baselayer = !isNaN(permalink[0]) ? permalink[0] : mapData.baselayer;
                    mapData.layers = permalink[1].split(':');
                    // decode deltaEncoding
                    mapData.layers = c4g.maps.utils.deltaDecode(mapData.layers);
                    break;
                case 1:
                    // layers only
                    mapData.layers = permalink[0].split(':');
                    // decode deltaEncoding
                    mapData.layers = c4g.maps.utils.deltaDecode(mapData.layers);
                    break;
                default:
                    // invalid count of permalink parameters
                    permalink = false;
                }
                if (mapData.layers.length < 1) {
                    mapData.layers = false;
                    permalink = false;
                }
            } else {
                // just to make sure this var is really "false"
                permalink = false;
            }
        }

        if (mapData.minZoom && mapData.minZoom > 0) {
            minZoom = mapData.minZoom;
        } else {
            minZoom = 0;
        }

        if (mapData.maxZoom && mapData.maxZoom > 0) {
            maxZoom = mapData.maxZoom;
        } else {
            maxZoom = 19;
        }

        if (mapData.caching) {
            if ((c4g.maps.utils.getValue('lon')) && (c4g.maps.utils.getValue('lat'))) {
                mapData.center.lon = c4g.maps.utils.getValue('lon');
                mapData.center.lat = c4g.maps.utils.getValue('lat');
            }

            if (c4g.maps.utils.getValue('zoom')) {
                mapData.center.zoom = c4g.maps.utils.getValue('zoom');
            }
        }

        view = new ol.View({
            // projection: ol.proj.get('EPSG:4326'),
            // center: [parseFloat(mapData.center_lon), parseFloat(mapData.center_lat)],
            // minResolution: undefined,
            // maxResolution: undefined,
            center: ol.proj.transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'),
            zoom: parseInt(mapData.center.zoom, 10),
            minZoom: parseInt(minZoom, 10),
            maxZoom: parseInt(maxZoom, 10),
            rotation: parseFloat(mapData.center.rotation)
        });

        // check userposition
        if (mapData.geolocation && !permalink ) {
            geoLocation = new ol.Geolocation({
                //tracking: !mapData.geopicker,
                tracking: true,
                projection: view.getProjection()
            });
            geoLocation.on('change', function (evt) {
              if (geoLocation) {
                view.setCenter(geoLocation.getPosition());
                if (mapData.geolocation_zoom) {
                  view.setZoom(parseInt(mapData.geolocation_zoom, 10));
                }
                geoLocation.setTracking(false);
                if (self.map) {
                  self.map.setView(view);
                  if (self.$overlaycontainer_stopevent) {
                    c4g.maps.utils.redrawMapView(self);
                  }
                }
              }
            });
        }

        // enable default Controls/Interactions if there is no profile
        // [note]: maybe change this in the future? -> "no default"-option?
        if (!mapData.profile) {
            controls = ol.control.defaults();
            interactions = ol.interaction.defaults();
        }

        // set default base layer when backend geopicker is enabled
        if (mapData.geopicker && mapData.geopicker.type === "backend") {
            if (mapData.default_baselayer) {
                this.proxy.hook_baselayer_loaded.push(function (baselayerIds) {
                    self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
                });
            } // end inner if
            this.map = new ol.Map({
                controls: controls,
                interactions: interactions,
                layers: [
                    new ol.layer.Group({
                        title: 'Base maps',
                        layers: [],
                        checkSum: 'baseMapsLayer'
                    })
                ],
                loadTilesWhileAnimating: true,
                target: mapData.mapDiv,
                view: view
            });
        } else {
            // initialize Map
            //

            if (mapData.default_baselayer) {
                this.proxy.hook_baselayer_loaded.push(function (baselayerIds) {
                    if (mapData.baselayer && baselayerIds.indexOf(mapData.baselayer.toString()) > -1) {
                        mapData.default_baselayer = mapData.baselayer;
                    }

                    if (mapData.caching) {
                        if (c4g.maps.utils.getValue('baselayer')) {
                            mapData.default_baselayer = c4g.maps.utils.getValue('baselayer');
                        }
                    }

                    self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
                });
            }
            this.map = new ol.Map({
                controls: controls,
                interactions: interactions,
                layers: [
                    new ol.layer.Group({
                        title: 'Base maps',
                        layers: [],
                        checkSum: 'baseMapsLayer'
                    })
                ],
                loadTilesWhileAnimating: true,
                target: mapData.mapDiv,
                view: view
            });
        }

        mapData.map = this.map;

      // set extent to make all locations visible if wanted
        if (mapData.calc_extent === "LOCATIONS") {
            displayAllLocations = function (layerIds) {
                var layers = self.proxy.layerController.arrLayers,
                    layer,
                    geometry,
                    coords,
                    padding,
                    coordinates,
                    extent,
                    featureList,
                    featureArray,
                    key,
                    vectorArray,
                    layerGroup,
                    center;
                // delete function from hook array
                delete this[this.indexOf(displayAllLocations)];
                coordinates = [];
                // calculate resulting extent of all geometries
                for (key in layers) {
                    if (layers.hasOwnProperty(key)) {
                        layer = layers[key];
                        if(layer.type == "overpass"){
                            continue
                        }
                        vectorArray = layer.content;
                        if (vectorArray === undefined) {
                            // catch case of linked layers
                            continue;
                        }
                        if (typeof vectorArray === "object") {
                            vectorArray = c4g.maps.utils.objectToArray(vectorArray);
                        }
                        layerGroup = layer.vectorLayer;
                        if (vectorArray && vectorArray.forEach && typeof vectorArray.forEach === 'function') {
                            vectorArray.forEach(function (vectorLayer) {
                                if (vectorLayer &&
                                        vectorLayer.data &&
                                        vectorLayer.data.geometry &&
                                        vectorLayer.data.geometry.coordinates) {
                                    if (vectorLayer.data.geometry.type === "Point") {
                                        coords = ol.proj.transform([parseFloat(vectorLayer.data.geometry.coordinates[0]),
                                            parseFloat(vectorLayer.data.geometry.coordinates[1])], 'EPSG:4326', 'EPSG:3857');
                                        if(coords[0]=="Infinity"||coords[0]=="-Infinity"){
                                            return
                                        }
                                        geometry = new ol.geom.Point(coords);
                                        coordinates.push(geometry.getCoordinates());
                                    }
                                }
                            });
                        }
                        if (layerGroup) {
                          // handle more complex geometries
                            featureList = layerGroup.getLayers();
                            featureArray = featureList.getArray();
                            featureArray.forEach(function (feature) {
                                if (layer.type === "kml") {
                                    var source = feature.getSource();
                                        //var sourceFeatures = source.getFeatures();
                                    source.getExtent().forEach(function (coordinate) {
                                        coordinates.push(coordinate);
                                    });
                                } else {
                                    coordinates.push(ol.extent.getTopRight(feature.getSource().getExtent()));
                                    coordinates.push(ol.extent.getTopLeft(feature.getSource().getExtent()));
                                    coordinates.push(ol.extent.getBottomRight(feature.getSource().getExtent()));
                                    coordinates.push(ol.extent.getBottomLeft(feature.getSource().getExtent()));
                                }
                            });
                        }
                    }
                }
                extent = ol.extent.boundingExtent(coordinates);
                if(extent[0]=="Infinity"||extent[0]=="-Infinity"){
                    return
                }
                //TODO: catch case min_gap is already an array
                padding = [mapData.min_gap, mapData.min_gap, mapData.min_gap, mapData.min_gap];
                self.map.getView().fit(extent, self.map.getSize(), {padding: padding});
                center = self.map.getView().getCenter();
                if (isNaN(center[0])) {
                    self.map.getView().setCenter([50, 10]);
                    self.map.getView().setZoom(mapData.minZoom || 10);
                }
            };
            this.proxy.hook_layer_visibility.push(displayAllLocations);
        }

        // set map-size and -margin
        domMapDiv = document.getElementById(mapData.mapDiv);

        if (domMapDiv && domMapDiv.style) {
            if (mapData.width) {
                domMapDiv.style.width = mapData.width;
            }
            if (mapData.height) {
                domMapDiv.style.height = mapData.height;
            }
            if (mapData.margin) {
                domMapDiv.style.margin = mapData.margin;
            }
        } else {
            console.warn('can not get element by id mapData.mapDiv');
            return;
        }

        this.map.updateSize();
        this.proxy.initialize();
        // this.proxy.loadBaseLayers();
        // this.proxy.loadLayers();
        // ---

        // save overlaycontainer
        this.$overlaycontainer_stopevent = $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_OVERLAYCONTAINER_SE);
        // add Spinner
        this.spinner = new c4g.maps.misc.Spinner({className: c4g.maps.constant.css.LARGE});
        // add mapHover
        this.mapHover = new c4g.maps.misc.MapHover({mapController: this});

        // add interactions ===
        //

        // mouse navigation
        if (mapData.mouse_nav) {
            // drag pan and kinetic scrolling
            if (mapData.mouse_nav.drag_pan) {
                kinetic = mapData.mouse_nav.kinetic ? new ol.Kinetic(-0.005, 0.05, 100) : null;
                this.map.addInteraction(new ol.interaction.DragPan({kinetic: kinetic}));
            }
            // mousewheel zoom
            if (mapData.mouse_nav.wheel_zoom) {
                this.map.addInteraction(new ol.interaction.MouseWheelZoom());
            }
            // doubleclick zoom
            if (mapData.mouse_nav.doubleclick_zoom) {
                this.map.addInteraction(new ol.interaction.DoubleClickZoom());
            }
            // box zoom
            if (mapData.mouse_nav.drag_zoom) {
                this.map.addInteraction(new ol.interaction.DragZoom({condition: ol.events.condition.shiftKeyOnly}));
            }
            // drag rotate (& zoom)
            if (mapData.mouse_nav.drag_rotate_zoom) {
                this.map.addInteraction(new ol.interaction.DragRotateAndZoom({condition: ol.events.condition.altKeyOnly}));
            } else if (mapData.mouse_nav.drag_rotate) {
                this.map.addInteraction(new ol.interaction.DragRotate({condition: ol.events.condition.altKeyOnly}));
            }
        }
        // touch navigation
        if (mapData.touch_nav) {
            // rotate (pinch)
            if (mapData.touch_nav.rotate) {
                this.map.addInteraction(new ol.interaction.PinchRotate());
            }
            // zoom (pinch)
            if (mapData.touch_nav.zoom) {
                this.map.addInteraction(new ol.interaction.PinchZoom({constrainResolution: true}));
            }
        }
        // keyboard navigation
        if (mapData.keyboard_nav) {
            // pan (arrow keys)
            if (mapData.keyboard_nav.pan) {
                this.map.addInteraction(new ol.interaction.KeyboardPan());
            }
            // zoom ("+" and "-" key)
            if (mapData.keyboard_nav.zoom) {
                this.map.addInteraction(new ol.interaction.KeyboardZoom());
            }
        }
        // ===

        // add control-containers ===
        //
        // top-left
        controlContainerTopLeft = document.createElement('div');
        controlContainerTopLeft.className = c4g.maps.constant.css.CONTROL_CONTAINER_TL + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;
        this.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);
        // bottom-left
        controlContainerBottomLeft = document.createElement('div');
        controlContainerBottomLeft.className = c4g.maps.constant.css.CONTROL_CONTAINER_BL + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;
        $(controlContainerTopLeft).after(controlContainerBottomLeft);
        // element needs to be moved when Portside will be opened
        this.leftSlideElements.push(controlContainerBottomLeft);
        // top-right
        controlContainerTopRight = document.createElement('div');
        controlContainerTopRight.className = c4g.maps.constant.css.CONTROL_CONTAINER_TR + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;
        $(controlContainerBottomLeft).after(controlContainerTopRight);
        // element needs to be moved when Starboard will be opened
        this.rightSlideElements.push(controlContainerTopRight);
        // bottom-right
        controlContainerBottomRight = document.createElement('div');
        controlContainerBottomRight.className = c4g.maps.constant.css.CONTROL_CONTAINER_BR + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;
        $(controlContainerTopRight).after(controlContainerBottomRight);
        // element needs to be moved when Starboard will be opened
        this.rightSlideElements.push(controlContainerBottomRight);
        // ===
        // add controls ===
        this.controls = {};
        //


        // account
        if (mapData.account && typeof c4g.maps.control.Account === 'function') {
            this.controls.account = new c4g.maps.control.Account({
                tipLabel: c4g.maps.constant.i18n.CTRL_ACCOUNT,
                target: controlContainerTopLeft,
                caching: mapData.caching,
                mapController: this
            });
            this.map.addControl(this.controls.account);
        }

        // zoom-controls
        if (mapData.zoom_panel || mapData.zoom_slider) {
            this.controls.zoom = new ol.control.Zoom({
                zoomInLabel: ' ',
                zoomOutLabel: ' ',
                zoomInTipLabel: c4g.maps.constant.i18n.CTRL_ZOOM_IN,
                zoomOutTipLabel: c4g.maps.constant.i18n.CTRL_ZOOM_OUT,
                target: controlContainerTopLeft
            });
            this.map.addControl(this.controls.zoom);

            if (mapData.zoom_slider) {
                this.controls.zoomslider = new ol.control.ZoomSlider(
                    {
                        label: ' ',
                        tipLabel: c4g.maps.constant.i18n.CTRL_ZOOM_SLIDER,
                        target: controlContainerTopLeft
                    }
                );
                this.map.addControl(this.controls.zoomslider);
            }
        }
        if (mapData.zoom_extent &! mapData.zoom_slider) {
            this.controls.zoom_extent = new ol.control.ZoomToExtent({
                label: ' ',
                tipLabel: c4g.maps.constant.i18n.CTRL_ZOOM_EXT,
                target: controlContainerTopLeft
            });
            this.map.addControl(this.controls.zoom_extent);
        }
        if (mapData.zoom_home &! mapData.zoom_slider) {
            this.controls.zoom_home = new c4g.maps.control.Home({
                label: ' ',
                disableLabel: ' ',
                tipLabel: c4g.maps.constant.i18n.CTRL_ZOOM_HOME,
                target: controlContainerTopLeft,
                mapController: this
            });
            this.map.addControl(this.controls.zoom_home);
        }
        if (mapData.zoom_position &! mapData.zoom_slider) {
            this.controls.zoom_position = new c4g.maps.control.Position({
                label: ' ',
                disableLabel: ' ',
                tipLabel: c4g.maps.constant.i18n.CTRL_ZOOM_POS,
                target: controlContainerTopLeft,
                mapController: this
            });
            this.map.addControl(this.controls.zoom_position);
        }

        // combined zoom-controls
        if (mapData.zoom_slider) {
            $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM).addClass(c4g.maps.constant.css.OL_ZOOM_WITH_SLIDER).removeClass(c4g.maps.constant.css.OL_ZOOM);
            $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM_SLIDER + ' button').addClass(c4g.maps.constant.css.OL_ZOOM_SLIDER));
            $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM_SLIDER + '.' + c4g.maps.constant.css.OL_CONTROL).remove();
        }

        if (mapData.zoom_panel && mapData.zoom_extent) {
            $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM).addClass(c4g.maps.constant.css.OL_ZOOM_WITH_EXT).removeClass(c4g.maps.constant.css.OL_ZOOM);
            $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM_EXT + ' button').addClass(c4g.maps.constant.css.OL_ZOOM_EXT));
            $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM_EXT + '.' + c4g.maps.constant.css.OL_CONTROL).remove();
        }

        if (mapData.zoom_panel && mapData.zoom_home) {
            $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM).addClass(c4g.maps.constant.css.OL_ZOOM_WITH_HOME).removeClass(c4g.maps.constant.css.OL_ZOOM);
            $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM_HOME + ' button').addClass(c4g.maps.constant.css.OL_ZOOM_HOME));
            removeElement = controlContainerTopLeft.querySelector('.' + c4g.maps.constant.css.OL_ZOOM_HOME + '.' + c4g.maps.constant.css.OL_UNSELECTABLE + '.button');
            if (removeElement) {
                try {
                    removeElement.remove();
                } catch(err) {
                    //ie 11 error
                }
            }
        }

        if (mapData.zoom_panel && mapData.zoom_position) {
            $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM).addClass(c4g.maps.constant.css.OL_ZOOM_WITH_POS).removeClass(c4g.maps.constant.css.OL_ZOOM);
            $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM_POS + ' button').addClass(c4g.maps.constant.css.OL_ZOOM_POS));
            $('#' + mapData.mapDiv + ' .' + c4g.maps.constant.css.OL_ZOOM_POS + '.' + c4g.maps.constant.css.OL_CONTROL).remove();
            removeElement = controlContainerTopLeft.querySelector('.' + c4g.maps.constant.css.OL_ZOOM_POS + '.' + c4g.maps.constant.css.OL_UNSELECTABLE + '.button');
            if (removeElement) {
                try {
                    removeElement.remove();
                } catch(err) {
                    //ie 11 error
                }
            }
        }

        // fullscreen
        if (mapData.fullscreen) {
            this.controls.fullscreen = new ol.control.FullScreen({
                label: ' ',
                labelActive: ' ',
                tipLabel: c4g.maps.constant.i18n.CTRL_FULLSCREEN,
                target: controlContainerTopLeft
            });
            this.map.addControl(this.controls.fullscreen);
        }

        // router
        if (mapData.router_enable && typeof c4g.maps.control.Router === 'function') {
            this.controls.router = new c4g.maps.control.Router({
                tipLabel: c4g.maps.constant.i18n.CTRL_ROUTER,
                target: controlContainerTopLeft,
                caching: mapData.caching,
                mapController: this
            });
            this.map.addControl(this.controls.router);
        }
        // editor
        if (mapData.editor.enable && typeof c4g.maps.control.Editor === 'function') {
            this.controls.editor = new c4g.maps.control.Editor({
                tipLabel: c4g.maps.constant.i18n.CTRL_EDITOR,
                type: mapData.editor.type || 'frontend',
                target: mapData.editor.target || controlContainerTopLeft,
                initOpen: mapData.editor.open || false,
                dataField: mapData.editor.data_field || false,
                caching: mapData.caching,
                mapController: this
            });
            this.map.addControl(this.controls.editor);
        }
        // measuretools
        if (mapData.measuretools.enable && typeof c4g.maps.control.Measuretools === 'function') {
            this.controls.measuretools = new c4g.maps.control.Measuretools({
                tipLabel: c4g.maps.constant.i18n.CTRL_MEASURETOOLS,
                target: controlContainerTopLeft,
                caching: mapData.caching,
                mapController: this
            });
            this.map.addControl(this.controls.measuretools);
        }
        // exporttools
        if (mapData.exporttools.enable && typeof c4g.maps.control.Exporttools === 'function') {
            this.controls.exporttools = new c4g.maps.control.Exporttools({
                tipLabel: c4g.maps.constant.i18n.CTRL_EXPORTTOOLS,
                target: controlContainerTopLeft,
                caching: mapData.caching,
                mapController: this
            });
            this.map.addControl(this.controls.exporttools);
        }
        // show graticule (grid)
        if (mapData.graticule) {
            this.controls.graticule = new c4g.maps.control.Grid({
                label: ' ',
                disableLabel: ' ',
                tipLabel: c4g.maps.constant.i18n.CTRL_GRID,
                caching: mapData.caching,
                target: controlContainerTopLeft
            });
            this.map.addControl(this.controls.graticule);
        }
        // rotate-control
        //TODO: use something like "mapData.rotate"
        //   Check: mapData.mouse_nav (defined?)
        if (mapData.mouse_nav && (mapData.mouse_nav.drag_rotate || (mapData.mouse_nav.drag_rotate && mapData.mouse_nav.drag_rotate_zoom))) {
            this.controls.rotate = new ol.control.Rotate({
                label: ' ',
                tipLabel: c4g.maps.constant.i18n.CTRL_RESET_ROTATION,
                target: controlContainerTopLeft
            });
            this.map.addControl(this.controls.rotate);
        }
        // infopage
        if (mapData.infopage && typeof c4g.maps.control.Infopage === 'function') {
            this.controls.infopage = new c4g.maps.control.Infopage({
                tipLabel: c4g.maps.constant.i18n.CTRL_INFOPAGE,
                target: controlContainerTopLeft,
                caching: mapData.caching,
                mapController: this
            });
            this.map.addControl(this.controls.infopage);
        }

        // scaleline
        if (mapData.scaleline) {
            this.controls.scaleline = new ol.control.ScaleLine({
                target: controlContainerBottomLeft
            });
            this.map.addControl(this.controls.scaleline);
        }

        // zoom-level & mouse-position
        if (mapData.zoomlevel || mapData.mouseposition) {
          // wrapper for zoom-level and mouse-position
            controlContainerBottomLeftSub = document.createElement('div');
            controlContainerBottomLeftSub.className = c4g.maps.constant.css.CONTROL_CONTAINER_BL_SUB + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;
            $(controlContainerBottomLeft).append(controlContainerBottomLeftSub);
            // display zoom-level
            if (mapData.zoomlevel) {
                this.controls.zoomlevel = new c4g.maps.control.Zoomlevel({
                    mapView: view,
                    target: controlContainerBottomLeftSub,
                    undefinedHTML: 'N/A'
                });
                this.map.addControl(this.controls.zoomlevel);
            }
            // display mouse-position
            if (mapData.mouseposition) {
                this.controls.mouseposition = new ol.control.MousePosition({
                    projection: 'EPSG:4326',
                    coordinateFormat: ol.coordinate.toStringHDMS,
                    target: controlContainerBottomLeftSub,
                    undefinedHTML: 'N/A'
                });
                this.map.addControl(this.controls.mouseposition);
            }
        }

        // geosearch
        if (c4g.maps.control && c4g.maps.control.GeoSearch && typeof c4g.maps.control.GeoSearch === 'function' && (mapData.geosearch.enable)) {
            this.controls.geosearch = new c4g.maps.control.GeoSearch({
                mapController: this,
                target: controlContainerTopRight,
                extDiv: mapData.geosearch.div || false,
                collapsible: true,
                collapsed:  mapData.geosearch.collapsed,
                label: ' ',
                collapsedLabel: '',
                // engineUrl: mapData.geosearch.engine,
                searchZoom: mapData.geosearch.searchzoom,
                zoomBounds: mapData.geosearch.zoombounds,
                quicksearch: true,
                animate: mapData.geosearch.animate,
                markResult: mapData.geosearch.markresult,
                popup: mapData.geosearch.popup,
                autopick: mapData.geopicker,
                caching: mapData.caching,
                results: mapData.geosearch.results
            });
            this.map.addControl(this.controls.geosearch);
        }

        // geobookmarks - not ready
        if (mapData.geobookmarks) {
            this.controls.geobookmarks = new ol.control.GeoBookmark({
                //target: controlContainerTopRight
                label: ' ',
                tipLabel: c4g.maps.constant.i18n.CTRL_GEOBOOKMARKS,
                placeholder: c4g.maps.constant.i18n.GEOBOOKMARKS_PLACEHOLDER,
                namespace: 'c4g_geobookmarks'/*,
                className: c4g.maps.constant.css.GEOBOOKMARKS*/ //ToDo implement for own styling
            });
            this.map.addControl(this.controls.geobookmarks);
            this.rightSlideElements.push('.ol-bookmark');

        }

        // overview-map
        if (mapData.overviewmap) {
            this.controls.overviewmap = new c4g.maps.control.OverviewMap({
                target: controlContainerTopRight
            });
            this.map.addControl(this.controls.overviewmap);
        }

        if (mapData.starboard.label) {
            starboard_label = c4g.maps.constant.i18n.CTRL_STARBOARD.replace('Starboard', mapData.starboard.label).replace('starboard', mapData.starboard.label);
        }

        // starboard
      if (mapData.geopicker && mapData.geopicker.type === "backend") {
        enableStarboard = false;
      }
      
      // popup margin
      //this.leftSlideElements.push('.ol-overlay-container');
      //this.rightSlideElements.push('.ol-overlay-container');

      if (c4g.maps.control && c4g.maps.control.Starboard && typeof c4g.maps.control.Starboard === 'function' && enableStarboard) {
          this.controls.starboard = new c4g.maps.control.Starboard({
            create: mapData.starboard.enable || false,
            headline: mapData.starboard.label,
            tipLabel: starboard_label || false,
            caching: mapData.caching,
            mapController: this,
            extDiv: mapData.starboard.div,
            defaultOpen: mapData.starboard.open,
            filter: mapData.starboard.filter,
            button: mapData.starboard.button,
            baselayerSwitcherCreate: mapData.baselayerswitcher.enable,
            baselayerSwitcherTitle: mapData.baselayerswitcher.label,
            layerSwitcherCreate: mapData.layerswitcher.enable,
            layerSwitcherTitle: mapData.layerswitcher.label
          });
          this.map.addControl(this.controls.starboard);
        }



        // backend-geopicker
        if (mapData.geopicker && (mapData.geopicker.type === "backend" || mapData.geopicker.type === "frontend")) {
          this.controls.geopicker = new c4g.maps.interaction.GeoPicker({
              mapContainer: this
          });
          this.map.addInteraction(this.controls.geopicker);
          if (mapData.geopicker.type === "frontend") {
            // substring is needed here for taking out the #
            if (mapData.geopicker.input_geo_x && mapData.geopicker.input_geo_x) {
              var geoxField = document.getElementById(mapData.geopicker.input_geo_x.substring(1));
              var geoyField = document.getElementById(mapData.geopicker.input_geo_y.substring(1));
              if (geoxField && geoyField) {
                var locGeox = geoxField.value;
                var locGeoy = geoyField.value;
                if (locGeox && locGeoy) {
                  var numerized = [parseFloat(locGeox, 10), parseFloat(locGeoy, 10)];
                  var transformed = ol.proj.transform(numerized, ol.proj.get('EPSG:4326'), ol.proj.get('EPSG:3857'));
                  geoLocation = null;
                  this.map.getView().setCenter(transformed);
                }
              }
            }
          }
        }

        // show attribution
        if (mapData.attribution.enable) {
            // @TODO: create own attribution-control
            if (mapData.attribution.cfg_logo) {
                logoLink = document.createElement('a');
                logoLink.href = 'https://con4gis.org';
                logoLink.target = '_blank';
                logoLink.className = c4g.maps.constant.css.ATTRIBUTION_LOGO;
                logoGraphic = document.createElement('img');
                logoGraphic.src = 'bundles/con4gismaps/images/logo_con4gis.svg';
                logoLink.appendChild(logoGraphic);
                controlContainerBottomRight.appendChild(logoLink);
            }
            this.controls.attribution = new ol.control.Attribution({
                label: ' ',
                tipLabel: c4g.maps.constant.i18n.CTRL_ATTRIBUTION,
                collapseLabel: ' ',
                target: controlContainerBottomRight
            });
            this.controls.attribution.setCollapsed(mapData.attribution.collapsed === '1');
            this.map.addControl(this.controls.attribution);
        }

        // show permalink
        if (mapData.permalink.enable) {
            this.controls.permalink = new c4g.maps.control.Permalink({
                label: ' ',
                tipLabel: c4g.maps.constant.i18n.CTRL_PERMALINK,
                mapController: this,
                getParameter: mapData.permalink.get_parameter,
                target: controlContainerBottomRight
            });
            this.map.addControl(this.controls.permalink);
        }

        //themeData
        if (mapData.themeData) {
            domMapDiv = document.getElementById(mapData.mapDiv);
            if (mapData.themeData['useglobal']) {
              domMapDiv = document.getElementById('wrapper');
            };

            if (mapData.themeData['maincolor']) {
                var mainColor = c4g.maps.utils.getRgbaFromHexAndOpacity(mapData.themeData['maincolor'], mapData.themeData['mainopacity']);
                var fontColor = c4g.maps.utils.getRgbaFromHexAndOpacity(mapData.themeData['fontcolor'], mapData.themeData['fontopacity']);
                var shadowColor = c4g.maps.utils.getRgbaFromHexAndOpacity(mapData.themeData['shadowcolor'], mapData.themeData['shadowopacity']);

                if (domMapDiv && domMapDiv.style) {
                    domMapDiv.style.setProperty('--main-color', mainColor);
                    domMapDiv.style.setProperty('--font-color', fontColor);
                    domMapDiv.style.setProperty('--shadow-color', shadowColor);
                }
            }

            if (mapData.themeData['buttonradius']) {
                domMapDiv.style.setProperty('--button-radius-percent', mapData.themeData['buttonradius']+'%');
                domMapDiv.style.setProperty('--button-radius-pixel', mapData.themeData['buttonradius']+'px');
            }
        }

      if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.mapController_addControls === 'object') {
        c4g.maps.utils.callHookFunctions(c4g.maps.hook.mapController_addControls, this);
      }
    };

}(jQuery, this.c4g)); // 'The End' :)    - ! Do not write stuff after this line ! -