/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
import {C4gLayer} from "./c4g-layer"
import {utils} from "./c4g-maps-utils"
import {cssConstants} from "./c4g-maps-constant";
import {Customtab} from "./c4g-maps-control-starboardplugin-customtab";
import {Stroke, Style} from "ol/style";
import {Text} from "ol/style";
import {Fill} from "ol/style";
import {Vector as VectorSource} from "ol/source";
import {transformExtent} from "ol/proj";
import {transform} from "ol/proj";
import {Point, LineString, Polygon, MultiPolygon} from "ol/geom";
import {Feature} from "ol";
import OSMXML from "ol/format/OSMXML";
import {all} from "ol/loadingstrategy";
import {bbox} from "ol/loadingstrategy";
import {Vector, Group} from "ol/layer";
import {Cluster} from "ol/source";
import Circle from "ol/geom/Circle";
import CircleStyle from 'ol/style/Circle';
import {fromLonLat} from "ol/proj";
import {GeoJSON} from "ol/format";
import {getCenter, boundingExtent} from "ol/extent";
import * as olFormat from "ol/format";
import ol_layer_AnimatedCluster from "ol-ext/layer/AnimatedCluster";
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4';
import Projection from 'ol/proj/Projection';
import Collection from 'ol/Collection';
const osmtogeojson = require('osmtogeojson');

export class BetterLayerController {

    constructor(proxy) {
        const scope = this;
        this.proxy = proxy;
        this.loaders = [];
        this.arrLocstyles = [];
        this.mapController = proxy.options.mapController;
        this.vectorCollection = new Collection();
        this.loaderFunction = function(extent, resolution, projection) {
            let boundingArray = transformExtent(extent, projection, 'EPSG:4326');
            for (let i in scope.loaders) {
                if (scope.loaders.hasOwnProperty(i)) {
                    const requestData = scope.loaders[i];
                    if (!requestData.preventLoading) {
                        if (requestData.request) {
                            requestData.request.abort();
                        }
                        let strBoundingBox = "";
                        let url = requestData.url;
                        let params = decodeURIComponent(requestData.params);
                        if (url) {
                            if (url.indexOf('{key}') > -1) {
                                url = url.replace('{key}', self.ovpKey);
                            }
                            if(params && params.substr(0, 1).trim() === "<"){
                                strBoundingBox = '<bbox-query s="' + boundingArray[1] + '" n="' + boundingArray[3] + '" w="' + boundingArray[0] + '" e="' + boundingArray[2] + '"/>';
                            }
                            else{
                                strBoundingBox = boundingArray[1] + ',' + boundingArray[0] + ',' + boundingArray[3] + ',' + boundingArray[2];
                            }
                            const bboxTag = params.indexOf('(bbox)') >= 0 ? /\(bbox\)/g : /\{{bbox\}}/g
                            url += url.includes("?") ? "&" : "?";
                            url += 'data=' + encodeURIComponent(params.replace(bboxTag, strBoundingBox));
                            requestData.request = jQuery.ajax({
                                url: url,
                                loader: requestData
                            }).done(function (response) {
                                delete this.loader.request;
                                let features;
                                let format = new OSMXML();
                                if (format && response) {
                                    try {
                                        features = format.readFeatures(response, {featureProjection: projection});
                                    } catch (e) {
                                        console.warn('Can not read feature.');
                                    }
                                    let oldLength = scope.vectorCollection.getLength(); //necesarry to distinct redundant features

                                    scope.vectorCollection.extend(features);

                                    let addedFeatures = scope.vectorCollection.getArray().slice(oldLength);
                                    let layer;
                                    if (typeof this.loader.chain === "string") {
                                        let chain = this.loader.chain.split(',');
                                        let i = 1;
                                        layer = scope.arrLayers[chain[0]];
                                        while(chain[i]) {
                                            layer = layer.childs[chain[i]];
                                            i++;
                                        }
                                    }
                                    else {
                                        layer = scope.arrLayers[this.loader.chain]
                                    }

                                    layer.features = layer.features.concat(addedFeatures);
                                    scope.mapController.setObjLayers(scope.arrLayers);

                                }
                            });
                        }

                    }
                }
            }
            scope.vectorSource.removeLoadedExtent(extent);
        }
        this.vectorSource = new VectorSource({
            features: this.vectorCollection,
            loader: this.loaderFunction,
            strategy: bbox
        });
        this.clusterStyleFunction = function(feature, resolution) {
            // let size = "";
            // if (feature.get('features') && feature.get('features').length && feature.get('features').length > 1) {
            //     size = feature.get('features').length.toString();
            // }
            // let geometryType = feature.getGeometry() ? feature.getGeometry().getType(): "Point";
            // if (geometryType === "Point") {
            //     return new Style({
            //         text: new Text({
            //             text: size,
            //             offsetX: -10,
            //             offsetY: -10,
            //         }),
            //         stroke: new Stroke({
            //             color: 'blue',
            //             width: 2
            //         }),
            //         fill: new Fill({
            //             color: 'blue'
            //         }),
            //         image: new CircleStyle({
            //             radius: 10,
            //             fill: new Fill({
            //                 color: 'blue'
            //             }),
            //             stroke: new Stroke({
            //                 color: 'blue'
            //             })
            //         })
            //     });
            // }
            // else {
            //     return new Style({
            //         stroke: new Stroke({
            //             color: 'black',
            //             width: 3
            //         }),
            //         fill: new Fill({
            //             color: 'rgba(0, 0, 0, 0.4)'
            //         }),
            //         // geometry: feature.getGeometry()
            //     });
            // }
            if (feature && feature.get && feature.get('locstyle')) {
                let locstyle = feature.get('locstyle');
                if (this.proxy.locationStyleController.arrLocStyles[locstyle].style) {
                    return this.proxy.locationStyleController.arrLocStyles[locstyle].style
                }
            }
            else {}

        };

        this.clusterSource = new Cluster({
            source: this.vectorSource,
            geometryFunction: function (feature) {
                let type = feature.getGeometry().getType();
                if (type === "MultiPolygon") {
                    return null;//feature.getGeometry().getInteriorPoints()[0];
                }
                else if (type === "Polygon"){
                    return null;//feature.getGeometry().getInteriorPoint();
                }
                else {
                    return  feature.getGeometry();
                }
            }
        });
        this.vectorLayer = new Vector({
            source: this.vectorSource,
            style: this.clusterStyleFunction
        });
        this.layerRequests = {};
        this.ovpKey = this.mapController.data.ovp_key;
        proj4.defs("EPSG:31467", "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +datum=potsdam +units=m +no_defs");
        register(proj4);
    }



    loadLayers () {
        let self = this;
        if (this.mapId === 0) {
            return false;
        }

        jQuery.ajax(this.proxy.api_layer_url,{
            dataType: this.mapController.data.jsonp ? "jsonp" : "json"

        }).done(function (data) {
            self.objLayers = data.layer;
            // self.mapController.setObjLayers(self.objLayers);
            let format = {
                    "EPSG:4326": new GeoJSON({
                    dataProjection: "EPSG:4326",
                    featureProjection: "EPSG:3857"
                }),
                    "EPSG:31467": new GeoJSON({
                    dataProjection: "EPSG:31467",
                    featureProjection: "EPSG:3857"
                })
            };
            let structure = [];
            let features = [];

            for (let layerId in data.layer) {
                if (data.layer.hasOwnProperty(layerId)) {
                    let newChild = self.getStructureFromLayer(data.layer[layerId], format, structure.length);
                    if (newChild.hide_in_starboardDromedarCase) {
                        structure = structure.concat(newChild.childs);
                        features = features.concat(newChild.features);
                    }
                    else {
                        structure.push(newChild);
                    }

                }
            }
            let arrStates = [];
            for (let structId in structure) {
                if (structure.hasOwnProperty(structId)) {
                    arrStates.push(self.getInitialStates(structure[structId]));
                    features = features.concat(self.getFeaturesFromStruct(structure[structId]));
                }
            }
            self.arrLayers = structure;
            self.proxy.locationStyleController.loadLocationStyles(self.arrLocstyles);
            self.vectorCollection.extend(features);
            self.mapController.map.addLayer(self.vectorLayer);
            self.mapController.setLayersInitial(self.arrLayers, arrStates);

            return true;
        }).fail(function () {
            console.warn('An error occured while trying to load the layers...');
            return false;
        }).always(function () {
            // this.proxy.starboard.spinner.hide();
        });
    } // end of "loadLayer()"
    getInitialStates(layer) {
        let childStates = [];
        if (layer.childs && layer.childs.length > 0) {
            for (let childId in layer.childs) {
                if (layer.childs.hasOwnProperty(childId)) {
                    childStates.push(this.getInitialStates(layer.childs[childId]));
                }
            }
        }
        return {
            active: !layer.hide,
            childStates: childStates
        }
    }
    getFeaturesFromStruct(structure) {
        let features = [];
        if (!structure.hide) {
            if (structure.childs && structure.childs.length > 0) {
                for (let structId in structure.childs) {
                    if (structure.childs.hasOwnProperty(structId)) {
                        if (!structure.childs[structId].hide) {
                            features = features.concat(this.getFeaturesFromStruct(structure.childs[structId]));
                        }
                    }
                }
            }
            features = features.concat(structure.features);
        }
        return features;
    }

    getStructureFromLayer(layer, format, idChain) {
        let features = [];
        let childs = [];
        let loaderId = -1;
        if (layer.content && layer.content.length > 0) {
            features = this.getFeaturesForLayer(layer);
        }
        let checkLocstyle = this.arrLocstyles.findIndex((element) => element === layer.locstyle);
        if (checkLocstyle === -1 && layer.locstyle) {
            this.arrLocstyles.push(layer.locstyle);
        }
        if (layer.async_content) {
            let url = "";
            let locstyleId = 0;
            let params = "";
            let layerId = layer.id;
            if (layer.content && layer.content[0] && layer.content[0].data) {
                let data = layer.content[0].data;
                url = data.url;
                params = data.params;
                locstyleId = layer.locstyle;
            }
            checkLocstyle = this.arrLocstyles.findIndex((element) => element === locstyleId);
            if (checkLocstyle === -1 && locstyleId) {
                this.arrLocstyles.push(locstyleId);
            }
            loaderId = this.loaders.length;
            this.loaders.push({
                chain: idChain,
                url: url,
                locstyleId: locstyleId,
                params: params,
                layerId: layerId
            });
        }
        if (layer.childs && layer.childs.length > 0) {
            for (let layerId in layer.childs) {
                if (layer.childs.hasOwnProperty(layerId)) {
                    let childChain = idChain + "," + childs.length;
                    let newChild = this.getStructureFromLayer(layer.childs[layerId], format, childChain);
                    if (newChild.hide_in_starboardDromedarCase) {
                        childs = childs.concat(newChild.childs)
                        features = features.concat(newChild.features)
                    }
                    else {
                        childs.push(newChild);
                    }
                }
            }
        }
        if (layer.hideInStarboard) {
         return {
             childs: childs,
             features: features,
             hide_in_starboardDromedarCase: true
         }
        }
        else {
            return {
                "features"  : features,
                "loader"    : loaderId,
                "name"      : layer.name,
                "hide"      : !!layer.hide,
                "childs"    : childs
            };
        }
    }
    getFeaturesForLayer(layer) {
        let features = [];
        const featureProjection = "EPSG:3857";
        for (let contentId in layer.content) {
            if (layer.content.hasOwnProperty(contentId)) {
                let contentData = layer.content[contentId].data;
                if (contentData && contentData.properties) {
                    let format = new olFormat[layer.content[contentId].type]({
                        featureProjection: featureProjection,
                        dataProjection: contentData.properties.projection
                    });
                    if (layer.content[contentId].type === "GeoJSON") {
                        if (contentData.type === "FeatureCollection") {
                            for (let i in contentData.features) {
                                if (contentData.features.hasOwnProperty(i)) {
                                    let singleFeature = format.readFeature(contentData.features[i]);
                                    singleFeature.set('locstyle', layer.locstyle)
                                    features.push(singleFeature);
                                }
                            }
                        }
                        else {
                            let feature = format.readFeature(contentData)
                            feature.set('locstyle', layer.locstyle)

                            features.push(feature);
                        }
                    }
                }
            }
        }
        return features;
    }
}
