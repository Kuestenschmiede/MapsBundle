class C4gOverlayController{
    constructor(baselayer){
        this._baselayer = baselayer;
        this._arrOverlays = [];
    }

    get baselayer() {
        return this._baselayer;
    }

    set baselayer(value) {
        this._baselayer = value;
    }

    get arrOverlays() {
        return this._arrOverlays;
    }

    set arrOverlays(value) {
        this._arrOverlays = value;
    }
    showOverlayLayer(overlayId){
        var self = this,
            overlayLayerConfig,
            osmSourceConfigs = c4g.maps.config.osm,
            stamenSourceConfigs = c4g.maps.config.stamen,
            layerOptions,
            overlayLayer,
            noUrl;

        layerOptions = {};
        overlayLayer = new ol.layer.Tile({
            source: new ol.source.OSM()
        });

        overlayLayerConfig = this._arrOverlays[overlayId];

        switch (overlayLayerConfig.provider) {
            case 'osm':
                if (osmSourceConfigs[overlayLayerConfig.style]) {
                    overlayLayer = new ol.layer.Tile({
                        source: new ol.source.OSM(
                            jQuery.extend(
                                osmSourceConfigs[overlayLayerConfig.style],
                                layerOptions
                            )
                        )
                    });
                } else if (stamenSourceConfigs[overlayLayerConfig.style]) {
                    // Stamen
                    overlayLayer = new ol.layer.Tile({
                        source: new ol.source.Stamen(
                            jQuery.extend(
                                stamenSourceConfigs[overlayLayerConfig.style],
                                layerOptions
                            )
                        )
                    });
                    // } else if (mapQuestSourceConfigs[overlayLayerConfig.style]) {
                    //   // mapQuest
                    //   overlayLayer = new ol.layer.Tile({
                    //     source: new ol.source.MapQuest(mapQuestSourceConfigs[overlayLayerConfig.style])
                    //   });
                } else if (overlayLayerConfig.style === 'osm_custom') {
                    // custom
                    noUrl = true;
                    if (overlayLayerConfig.attribution) {
                        layerOptions.attributions = overlayLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION;
                    }

                    if (overlayLayerConfig.url) {
                        layerOptions.url = overlayLayerConfig.url;
                        noUrl = false;
                    } else if (overlayLayerConfig.urls) {
                        layerOptions.urls = overlayLayerConfig.urls;
                        noUrl = false;
                    }
                    if (!noUrl) {
                        overlayLayer = new ol.layer.Tile({
                            source: new ol.source.XYZ(layerOptions)
                        });
                    } else {
                        console.warn('custom url(s) missing -> switch to default');
                    }
                } else {
                    console.warn('unsupported osm-style -> switch to default');
                }
                break;
            case 'google':
                //@todo
                console.warn('google-maps are currently unsupported');
                break;
            case 'bing':
                if (baseLayerConfig.apiKey && overlayLayerConfig.style) {
                    overlayLayer = new ol.layer.Tile({
                        source: new ol.source.BingMaps({
                            culture: navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage),
                            key: overlayLayerConfig.apiKey,
                            imagerySet: overlayLayerConfig.style
                        })
                    });
                } else {
                    console.warn('wrong bing-key or invalid imagery-set!');
                }
                break;
            case 'wms':
                overlayLayer = new ol.layer.Tile({
                    source: new ol.source.TileWMS({
                        url: overlayLayerConfig.url,
                        params: {
                            LAYERS: overlayLayerConfig.params.layers,
                            VERSION: overlayLayerConfig.params.version,
                            //FORMAT: overlayLayerConfig.params.format,
                            TRANSPARENT: overlayLayerConfig.params.transparent
                        },
                        gutter: overlayLayerConfig.gutter,
                        attributions: overlayLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION
                    }),
                    //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
                });
                break;
            case 'owm':
                overlayLayer = new ol.layer.Tile({
                    source: new ol.source.XYZ({
                        url: overlayLayerConfig.url + overlayLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + overlayLayerConfig.api_key,
                        attributions: overlayLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION
                    }),
                    //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
                });
                break;
            default:
                console.warn('unsupported provider');
                break;
        }
        overlayLayer.setOpacity(parseInt(overlayLayerConfig.opacity)/100);
        this.arrOverlays[overlayId].layer = overlayLayer;
        return this.arrOverlays[overlayId].layer
    }
}