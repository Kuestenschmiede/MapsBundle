class C4gBaselayerController {
    constructor(proxy) {
        this._proxy = proxy;
        this._mapController = proxy.options.mapController;
        this._arrBaselayers = [];
        this._baselayerIds = [];
    }

    get proxy() {
        return this._proxy;
    }

    set proxy(value) {
        this._proxy = value;
    }

    get mapController() {
        return this._mapController;
    }

    set mapController(value) {
        this._mapController = value;
    }

    get arrBaselayers() {
        return this._arrBaselayers;
    }

    set arrBaselayers(value) {
        this._arrBaselayers = value;
    }

    get baselayerIds() {
        return this._baselayerIds;
    }

    set baselayerIds(value) {
        this._baselayerIds = value;
    }

    loadBaseLayers() {
        var self;

        self = this;

        jQuery.ajax({
            dataType: this.mapController.data.jsonp ? "jsonp" : "json",
            url: this.proxy.api_baselayer_url
        })
            .done(function (data) {
                if (data.baselayer) {
                    self.addBaseLayers(data.baselayer);
                }
                return true;
            })
            .fail(function () {
                // @TODO error-messages
                //   1) Visible message 4 users (i18n)
                //   2) Technical console.warn
                console.warn('An error occured while trying to load the baselayers. Do you have configured a default profile with baselayers?');
                self.mapController.spinner.hide();
                return false;
            })
            .always(function () {
                //self.mapController.spinner.hide();
            });

    }// end of "loadBaseLayers()"

    addBaseLayers(baselayers) {
        var baselayer,
            uid,
            i,
            j;

        // sort baselayer (for internal list)
        baselayers.sort(function (a, b) {
            if ((!a.sort && !b.sort) || (parseInt(a.sort, 10) === parseInt(b.sort, 10))) {
                if (!a.name || !b.name) {
                    return (!b.name) ? -1 : 1;
                }
                return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1;
            }
            if (!a.sort || !b.sort) {
                return (!b.sort) ? -1 : 1;
            }
            return (parseInt(a.sort, 10) > parseInt(b.sort, 10)) ? 1 : -1;
        });

        // build baselayer-list
        if (baselayers.length > 0) {
            for (i = 0; i < baselayers.length; i += 1) {

                baselayer = baselayers[i];

                uid = baselayer.id || c4g.maps.utils.getUniqueId();
                this._baselayerIds.push(uid);
                if (!this.arrBaselayers[uid]) {
                    this.arrBaselayers[uid] = new C4gBaselayer(baselayer);
                }

                // @TODO: check initial baselayer-handling
                if (this.mapController.data.baselayer && parseInt(uid, 10) === parseInt(this.mapController.data.baselayer, 10)) {
                    this.showBaseLayer(uid);
                }

                if(baselayer.hasOverlays && false){
                    if(!c4g.maps.overlays){
                        c4g.maps.overlays = [];
                    }
                    for (j = 0; j< baselayer.overlays.length; j++){
                        if(!c4g.maps.overlays[baselayer.overlays[j].id]){
                            c4g.maps.overlays[baselayer.overlays[j].id] = baselayer.overlays[j];
                            c4g.maps.overlays[baselayer.overlays[j].id].vectorLayer = this.showOverlayLayer(baselayer.overlays[j].id);
                        }


                    }
                }
            }
        }

        if (!this.activeBaselayerId) {
            // no baselayer was activated
            if (baselayers.length > 0 && baselayers[0].id) {
                // take first baselayer if possible
                uid = baselayers[0].id;
            } else {
                // otherwise build default baselayer
                uid = 0;
                this._baselayerIds.push(uid);
                if (!this.arrBaselayers[uid]) {
                    this.arrBaselayers[uid] = {
                        id: 0,
                        name: 'c4g_default',
                        provider: 'osm',
                        style: 'Mapnik'
                    };
                }
            }
            this.showBaseLayer(uid);

        }
        this.proxy.baselayers_loaded = true;

        c4g.maps.utils.callHookFunctions(this.hook_baselayer_loaded, this._baselayerIds);
    } // end of "addBaseLayers()"
    showBaseLayer(baseLayerUid) {

        let self = this,
            baseLayerConfig,
            layers,
            baselayer,
            addBaselayer,
            baseLayers,
            osmSourceConfigs,
            stamenSourceConfigs,
            //mapQuestSourceConfigs,
            mapboxSourceConfigs,
            klokanSourceConfigs,
            hereSourceConfigs,
            thunderforestSourceConfigs,
            newBaselayer,
            layerOptions,
            noUrl,
            i,
            view;

        baseLayerConfig = this.arrBaselayers[baseLayerUid];


        if ((typeof baseLayerConfig !== "undefined") && !baseLayerConfig.layer) {
            // create layer
            osmSourceConfigs = c4g.maps.config.osm;
            stamenSourceConfigs = c4g.maps.config.stamen;
            //mapQuestSourceConfigs = c4g.maps.config.mapquest;
            mapboxSourceConfigs = c4g.maps.config.mapbox;
            klokanSourceConfigs = c4g.maps.config.klokan;
            hereSourceConfigs = c4g.maps.config.here;
            thunderforestSourceConfigs = c4g.maps.config.thunderforest;

            //newBaselayer = new ol.layer.Tile({
            //  source: new ol.source.OSM()
            //});

            layerOptions = {};

            if (baseLayerConfig.attribution) {
                if (layerOptions.attributions) {
                    layerOptions.attributions = layerOptions.attributions + ' ' + baseLayerConfig.attribution;
                } else {
                    layerOptions.attributions = ol.source.OSM.ATTRIBUTION + ' ' + baseLayerConfig.attribution;
                }
            } else if (!layerOptions.attributions) {
                switch (baseLayerConfig.provider) {
                    case 'osm':
                        if (stamenSourceConfigs[baseLayerConfig.style]) {
                            layerOptions.attributions = stamenSourceConfigs[baseLayerConfig.style].attributions;
                            /*
                                          } else if (mapQuestSourceConfigs[baseLayerConfig.style]) {
                                            layerOptions.attributions = mapQuestSourceConfigs[baseLayerConfig.style].attributions;
                            */
                        } else if (osmSourceConfigs[baseLayerConfig.style]) {
                            layerOptions.attributions = osmSourceConfigs[baseLayerConfig.style].attributions;
                        } else {
                            layerOptions.attributions = ol.source.OSM.ATTRIBUTION;
                        }
                        break;
                    case 'mapbox':
                        layerOptions.attributions = mapboxSourceConfigs[baseLayerConfig.mapbox_type].attributions;
                        break;
                    case 'klokan':
                        layerOptions.attributions = klokanSourceConfigs[baseLayerConfig.klokan_type].attributions;
                        break;
                    case 'here':
                        layerOptions.attributions = hereSourceConfigs[baseLayerConfig.here_type].attributions;
                        break;
                    case 'thunder':
                        layerOptions.attributions = thunderforestSourceConfigs[baseLayerConfig.thunderforest_type].attributions;
                        break;
                    default:
                        layerOptions.attributions = ol.source.OSM.ATTRIBUTION;
                        break;
                }
            }

            //ToDo helper class for attributions

            //additional attribution
            if (this.mapController.data && this.mapController.data.attribution && this.mapController.data.attribution.additional) {
                if (layerOptions.attributions) {
                    let additionalAttribution = this.mapController.data.attribution.additional;

                    exists = false;
                    for (i = 0; i < layerOptions.attributions.length; i += 1) {
                        if (layerOptions.attributions[i] == additionalAttribution) {
                            exists = true;
                            break;
                        }
                    }

                    if (!exists) {
                        layerOptions.attributions = layerOptions.attributions + ' ' + additionalAttribution;
                    }
                } else {
                    layerOptions.attributions = this.mapController.data.attribution.additional;
                }
            }

            //ToDo type class for geosearch_engine
            //geosearch attribution
            var geosearch_attribution = '';
            if (this.mapController.data.geosearch) {
                var geosearch_engine = this.mapController.data.geosearch.geosearch_engine;

                if (this.mapController.data &&
                    this.mapController.data.attribution) {

                    switch (geosearch_engine) {
                        case '4':
                            geosearch_attribution = ''; //con4gis mapservices
                            break;
                        case '3':
                            if (this.mapController.data.geosearch.custom_attribution) {
                                geosearch_attribution = this.mapController.data.geosearch.custom_attribution;
                            }
                            break;
                        case '2':
                            geosearch_attribution =
                                'Nominatim Search Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" alt="" />';
                            break;
                        case '1':
                        default:
                            geosearch_attribution =
                                'Nominatim Search Courtesy of <a href="http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy" target="_blank">OpenStreetMap</a>';
                            break;
                    }


                    var geosearchAttribution = geosearch_attribution;

                    var exists = false;
                    if (!layerOptions.attributions) {
                        layerOptions.attributions = [];
                    }
                    for (i = 0; i < layerOptions.attributions.length; i += 1) {
                        if (layerOptions.attributions[i] == geosearchAttribution) {
                            exists = true;
                            break;
                        }
                    }

                    if (!exists) {
                        layerOptions.attributions = layerOptions.attributions + ' ' + geosearchAttribution;
                    }
                    else {
                        layerOptions.attributions = geosearchAttribution;
                    }
                }
            }

            if (baseLayerConfig.sorting) {
                layerOptions.sort = baseLayerConfig.sorting;
            }
            if (baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0) {
                layerOptions.minZoom = baseLayerConfig.minZoom;
            }
            if (baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0) {
                layerOptions.maxZoom = baseLayerConfig.maxZoom;
            }

            // TODO: diese Mechanik auslagern (wird auch in c4g-maps.js verwendet und für die overlay benötigt

            switch (baseLayerConfig.provider) {
                case 'osm':
                    if (osmSourceConfigs[baseLayerConfig.style]) {
                        newBaselayer = new ol.layer.Tile({
                            source: new ol.source.OSM(
                                jQuery.extend(
                                    osmSourceConfigs[baseLayerConfig.style],
                                    layerOptions
                                )
                            )
                        });
                    } else if (stamenSourceConfigs[baseLayerConfig.style]) {
                        // Stamen
                        newBaselayer = new ol.layer.Tile({
                            source: new ol.source.Stamen(
                                jQuery.extend(
                                    stamenSourceConfigs[baseLayerConfig.style],
                                    layerOptions
                                )
                            )
                        });
                        // } else if (mapQuestSourceConfigs[baseLayerConfig.style]) {
                        //   // mapQuest
                        //   newBaselayer = new ol.layer.Tile({
                        //     source: new ol.source.MapQuest(mapQuestSourceConfigs[baseLayerConfig.style])
                        //   });
                    } else if (baseLayerConfig.style === 'osm_custom') {
                        // custom
                        noUrl = true;
                        if (baseLayerConfig.url) {
                            layerOptions.url = baseLayerConfig.url;
                            noUrl = false;
                        } else if (baseLayerConfig.urls) {
                            layerOptions.urls = baseLayerConfig.urls;
                            noUrl = false;
                        }
                        if (!noUrl) {
                            newBaselayer = new ol.layer.Tile({
                                source: new ol.source.XYZ(layerOptions)
                            });
                        } else {
                            console.warn('custom url(s) missing -> switch to default');
                        }
                    } else {
                        console.warn('unsupported osm-style -> switch to default');
                    }
                    break;
                case 'mapbox':
                    if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.mapbox_type) {

                        if (baseLayerConfig.mapbox_type === 'Mapbox') {
                            layerOptions.url = baseLayerConfig.url + baseLayerConfig.app_id + '/tiles/{z}/{x}/{y}?access_token=' + baseLayerConfig.api_key;
                            newBaselayer = new ol.layer.Tile({
                                source: new ol.source.XYZ(jQuery.extend(
                                    mapboxSourceConfigs[baseLayerConfig.mapbox_type],
                                    layerOptions))
                            });
                        } else {
                            layerOptions.url = baseLayerConfig.url_classic + baseLayerConfig.app_id + '/{z}/{x}/{y}.png?access_token=' + baseLayerConfig.api_key;

                            newBaselayer = new ol.layer.Tile({
                                source: new ol.source.XYZ(jQuery.extend(
                                    mapboxSourceConfigs[baseLayerConfig.mapbox_type],
                                    layerOptions
                                ))
                            });
                        }
                    }else if(baseLayerConfig.hide_in_be){
                        layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
                        newBaselayer = new ol.layer.Tile({
                            source: new ol.source.XYZ(jQuery.extend(
                                mapboxSourceConfigs[baseLayerConfig.mapbox_type],
                                layerOptions))
                        });
                    }
                    else {
                        console.warn('wrong mapbox configuration!');
                    }
                    break;
                case 'klokan':
                    if (baseLayerConfig.api_key && baseLayerConfig.klokan_type) {

                        if (baseLayerConfig.klokan_type === 'OpenMapTiles') {
                            layerOptions.url = baseLayerConfig.url + '{z}/{x}/{y}.pbf';
                            newBaselayer = new ol.layer.VectorTile({
                                source: new ol.source.VectorTile(jQuery.extend(
                                    klokanSourceConfigs[baseLayerConfig.klokan_type],
                                    layerOptions))
                            });

                            //ToDo style url
                            fetch(baseLayerConfig.url + '/styles/'+baseLayerConfig.style+'/style.json').then(function(response) {
                                response.json().then(function(glStyle) {
                                    olms.applyStyle(newBaselayer, glStyle, 'openmaptiles');
                                });
                            });
                        } else {
                            layerOptions.url = baseLayerConfig.url + '/data/v3/{z}/{x}/{y}.pbf?key='+baseLayerConfig.api_key;
                            newBaselayer = new ol.layer.VectorTile({
                                source: new ol.source.VectorTile(jQuery.extend(
                                    klokanSourceConfigs[baseLayerConfig.klokan_type],
                                    layerOptions))
                            });

                            fetch(baseLayerConfig.url + '/styles/'+baseLayerConfig.style+'/style.json?key='+baseLayerConfig.api_key).then(function(response) {
                                response.json().then(function(glStyle) {
                                    olms.applyStyle(newBaselayer, glStyle, 'openmaptiles');
                                });
                            });
                        }
                    } else {
                        console.warn('wrong klokan configuration!');
                    }
                    break;
                case 'here':
                    if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.here_type) {

                        if (baseLayerConfig.style == 'normal') {
                            layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png' +
                                '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                        } else
                        if (baseLayerConfig.style == 'transit') {
                            layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day.transit/{z}/{x}/{y}/256/png' +
                                '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                        } else
                        if (baseLayerConfig.style == 'pedestrian') {
                            layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/pedestrian.day/{z}/{x}/{y}/256/png' +
                                '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                        } else
                        if (baseLayerConfig.style == 'terrain') {
                            layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/terrain.day/{z}/{x}/{y}/256/png' +
                                '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                        } else
                        if (baseLayerConfig.style == 'satellite') {
                            layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png' +
                                '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                        } else
                        if (baseLayerConfig.style == 'hybrid') {
                            layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png' +
                                '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                        }

                        newBaselayer = new ol.layer.Tile({
                            source: new ol.source.XYZ(jQuery.extend(
                                hereSourceConfigs[baseLayerConfig.here_type],
                                layerOptions))
                        });
                    }
                    else if(baseLayerConfig.hide_in_be){
                        layerOptions.url = layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
                        newBaselayer = new ol.layer.Tile({
                            source: new ol.source.XYZ(jQuery.extend(
                                mapboxSourceConfigs[baseLayerConfig.here_type],
                                layerOptions))
                        });
                    }
                    else {
                        console.warn('wrong HERE configuration!');
                    }
                    break;
                case 'thunder':
                    if (baseLayerConfig.api_key && baseLayerConfig.thunderforest_type) {

                        if (baseLayerConfig.style) {
                            layerOptions.url = "https://tile.thunderforest.com/"+baseLayerConfig.style+"/{z}/{x}/{y}.png?apikey="+baseLayerConfig.api_key;
                        }

                        newBaselayer = new ol.layer.Tile({
                            source: new ol.source.XYZ(jQuery.extend(
                                thunderforestSourceConfigs[baseLayerConfig.thunderforest_type],
                                layerOptions))
                        });
                    }else if(baseLayerConfig.hide_in_be){
                        layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
                        newBaselayer = new ol.layer.Tile({
                            source: new ol.source.XYZ(jQuery.extend(
                                mapboxSourceConfigs[baseLayerConfig.thunderforest_type],
                                layerOptions))
                        });
                    }
                    else {
                        console.warn('wrong Thunderforest configuration!');
                    }
                    break;
                case 'google':
                    //@todo
                    console.warn('google-maps are currently unsupported');
                    break;
                case 'bing':
                    if (baseLayerConfig.apiKey && baseLayerConfig.style) {
                        newBaselayer = new ol.layer.Tile({
                            source: new ol.source.BingMaps({
                                culture: navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage),
                                key: baseLayerConfig.apiKey,
                                imagerySet: baseLayerConfig.style
                            })
                        });
                    } else {
                        console.warn('wrong bing-key or invalid imagery-set!');
                    }
                    break;
                case 'wms':
                    newBaselayer = new ol.layer.Tile({
                        source: new ol.source.TileWMS({
                            url: baseLayerConfig.url,
                            params: {
                                LAYERS: baseLayerConfig.params.layers,
                                VERSION: baseLayerConfig.params.version,
                                //FORMAT: baseLayerConfig.params.format,
                                TRANSPARENT: baseLayerConfig.params.transparent
                            },
                            gutter: baseLayerConfig.gutter,
                            attributions: baseLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION
                        }),
                        //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
                    });
                    break;
                case 'owm':
                    newBaselayer = new ol.layer.Tile({
                        source: new ol.source.XYZ({
                            url: baseLayerConfig.url + baseLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + baseLayerConfig.api_key,
                            attributions: baseLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION
                        }),
                        //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
                    });
                    break;

                default:
                    console.warn('unsupported provider');
                    break;
            }

            if (baseLayerConfig.hasOverlays) {

                for (i = 0; i < baseLayerConfig.overlays.length; i += 1) {
                    if(!c4g.maps.overlays){
                        c4g.maps.overlays = [];
                    }
                    c4g.maps.overlays[baseLayerConfig.overlays[i].id] = baseLayerConfig.overlays[i];
                    if(this.mapController.data.baselayer && parseInt(baseLayerConfig.id, 10) === parseInt(this.proxy.activeBaselayerId, 10)) {
                        self.mapController.map.addLayer(self.showOverlayLayer(baseLayerConfig.overlays[i].id));
                    }
                }

            }

            this.arrBaselayers[baseLayerUid].layer = newBaselayer;
        }

        layers = this.mapController.map.getLayers();

        // secure
        if (layers.item(0).get('checkSum') === "baseMapsLayer") {
            baseLayers = layers.item(0).getLayers();

            if (typeof this.arrBaselayers[baseLayerUid] !== "undefined") {
                baselayer = this.arrBaselayers[baseLayerUid].layer;

                addBaselayer = true;
                baseLayers.forEach(function (element, index, array) {
                    if (element === baselayer) {
                        element.setVisible(true);
                        addBaselayer = false;
                    } else {
                        element.setVisible(false);
                    }
                }, this);

                if (addBaselayer) {
                    baseLayers.push(baselayer);
                }
                view = this.mapController.map.getView();
                var zoom = view.getZoom();
                var center = view.getCenter();
                if ((baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0) ||
                    (baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0)) {
                    if (baseLayerConfig.minZoom && (view.getZoom() < baseLayerConfig.minZoom)) {
                        view.setZoom(baseLayerConfig.minZoom);
                    } else if (baseLayerConfig.maxZoom && (view.getZoom() > baseLayerConfig.maxZoom)) {
                        view.setZoom(baseLayerConfig.maxZoom);
                    }

                    var mapData = this.mapController.data;
                    if (mapData.zoomlevel || mapData.mouseposition) {
                        var controlContainerTopLeft = document.createElement('div');
                        controlContainerTopLeft.className = c4g.maps.constant.css.CONTROL_CONTAINER_TL + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;
                        this.mapController.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);

                        var controlContainerBottomLeft = document.createElement('div');
                        controlContainerBottomLeft.className = c4g.maps.constant.css.CONTROL_CONTAINER_BL + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;
                        $(controlContainerTopLeft).after(controlContainerBottomLeft);
                        this.mapController.leftSlideElements.push(controlContainerBottomLeft);

                        var controlContainerBottomLeftSub = document.createElement('div');
                        controlContainerBottomLeftSub.className = c4g.maps.constant.css.CONTROL_CONTAINER_BL_SUB + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;

                        var newView = new ol.View({
                            center: center,
                            projection: view.getProjection(),
                            zoom: zoom,
                            minZoom: parseInt(baseLayerConfig.minZoom, 10) || 0,
                            maxZoom: parseInt(baseLayerConfig.maxZoom, 10) || 19,
                            rotation: view.getRotation(),
                            resolution: view.getResolution(),
                        });

                        this.mapController.map.setView(newView);
                        c4g.maps.utils.redrawMapView(this.mapController);

                        // if (mapData.scaleline) {
                        //   this.mapController.map.removeControl(this.mapController.controls.scaleline);
                        //   this.mapController.controls.scaleline = new ol.control.ScaleLine({
                        //     mapView: this.mapController.map.getView(),
                        //     target: controlContainerBottomLeft,
                        //     undefinedHTML: 'N/A'
                        //   });
                        //   this.mapController.map.addControl(this.mapController.controls.scaleline);
                        // }
                        //
                        // $(controlContainerBottomLeft).append(controlContainerBottomLeftSub);
                        //
                        // if (mapData.zoomlevel) {
                        //   this.mapController.map.removeControl(this.mapController.controls.zoomlevel);
                        //   this.mapController.controls.zoomlevel = new c4g.maps.control.Zoomlevel({
                        //     mapView: this.mapController.map.getView(),
                        //     target: controlContainerBottomLeftSub,
                        //     undefinedHTML: 'N/A'
                        //   });
                        //   this.mapController.map.addControl(this.mapController.controls.zoomlevel);
                        // }
                        //
                        // if (mapData.mouseposition) {
                        //   this.mapController.map.removeControl(this.mapController.controls.mouseposition);
                        //   this.mapController.controls.mouseposition = new ol.control.MousePosition({
                        //     projection: 'EPSG:4326',
                        //     coordinateFormat: ol.coordinate.toStringHDMS,
                        //     target: controlContainerBottomLeftSub,
                        //     undefinedHTML: 'N/A'
                        //   });
                        //   this.mapController.map.addControl(this.mapController.controls.mouseposition);
                        // }
                    }

                }
            }
        }

        if (typeof baseLayerConfig !== "undefined") {
            this.proxy.activeBaselayerId = baseLayerConfig.id;

            c4g.maps.utils.callHookFunctions(this.hook_baselayer_visibility, baseLayerConfig);

            /**
             * Cesium integration
             */
            if (typeof baseLayerConfig !== "undefined") {
                var mapData = this.mapController.data;
                if (mapData.cesium && mapData.cesium.enable) {
                    if (!this.ol3d) {
                        this.ol3d = new olcs.OLCesium({map: this.mapController.map});
                    }
                    if (mapData.cesium.always || (baseLayerConfig.cesium)) {
                        this.ol3d.setEnabled(true);
                    } else {
                        if (this.ol3d.getEnabled()) {
                            this.ol3d.setEnabled(false);
                            c4g.maps.utils.redrawMapView(this.mapController);
                        }

                    }

                }
            }
        }
    } // end of "showBaseLayer()"
}