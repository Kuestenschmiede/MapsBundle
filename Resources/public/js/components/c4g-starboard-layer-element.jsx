/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, { Component } from "react";
import {cssConstants} from "./../c4g-maps-constant.js";
import Collection from "ol/Collection";
import {Vector as VectorSource} from "ol/source";
import {Cluster} from "ol/source";

export class C4gStarboardLayerElement extends Component {

    constructor(props) {
        super(props);
        const scope = this;
        // if (props.objStates[props.id]) {
        //     if (props.objStates[props.id].contentFeature) {
        //         this.state = {
        //             initialized: false,
        //             active: !props.objStates[props.id].hide,
        //             collapsed: this.props.collapsed,
        //             // disabled: props.mapController.proxy.checkLayerIsActiveForZoom(scope.props.pid)
        //         };
        //     }
        //     else {
        //         this.state = {
        //             initialized: false,
        //             active: !props.objStates[props.id].hide,
        //             collapsed: this.props.collapsed,
        //             // disabled: props.mapController.proxy.checkLayerIsActiveForZoom(scope.props.id)
        //         };
        //     }
        // }
        // else {
        //     this.state = {
        //         initialized: false,
        //         active: false,
        //         collapsed: props.collapsed,
        //         // disabled: props.mapController.proxy.checkLayerIsActiveForZoom(scope.props.id)
        //     }
        // }
        this.state = {
            active: !props.layer.hide
        }
        this.layerClick = this.layerClick.bind(this);
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.objStates[props.id]) {
    //         if (state.active === props.objStates[props.id].hide) {
    //             return {
    //                 active: !props.objStates[props.id].hide
    //             }
    //         }
    //     }
    //     return null;
    // }

    callbackFunction = (objChild = null) => {
        if (!objChild) {
            let objReturn = this.props.objStates;
            let newState = !objReturn[this.props.id].hide;
            objReturn[this.props.id].hide = newState;
            if (objReturn[this.props.id].childs)
            {
                for (let key in objReturn[this.props.id].childs) {
                    if (objReturn[this.props.id].childs.hasOwnProperty(key)) {
                        this.hideShowChilds(objReturn[this.props.id].childs[key], newState);
                    }
                }
            }
            this.props.parentCallback(objReturn);
        }
        else {
            let objReturn = this.props.objStates;
            objReturn[this.props.id].childs = objChild;
            this.props.parentCallback(objReturn);
        }

    };

    hideShowChilds = (objChild, newState) => {
        objChild.hide = newState;
        if (objChild.childs) {
            for (let key in objChild.childs) {
                if (objChild.childs.hasOwnProperty(key)) {
                   this.hideShowChilds(objChild.childs[key], newState)
                }
            }
        }
        if (!newState && objChild.contentFeature) {
            let id = objChild.contentFeature.getId();
            let vectorLayer = this.props.mapController.proxy.layerController.arrLayers[this.props.id].vectorLayer;
            let vectorSource = this.getSource(vectorLayer);
            if (vectorSource && !vectorSource.getFeatureById(id)) {
                vectorSource.addFeature(objChild.contentFeature);
            }
        }
        return objChild
    };
    getSource = (layer, identifier = 0) => {
        if (layer.getSource && layer.getSource()) {
            let source = layer.getSource();
            if (source.getSource && source.getSource()) {
                return this.getSource(source);
            }
            else {
                return source;
            }
        }
        else if (layer.getLayers && layer.getLayers()) {
            let layers = layer.getLayers().getArray();
            return this.getSource(layers[identifier])
        }
    };

    removeElement = (elementId) => {

    }

    // layerClick = (e) => {
    //     const scope = this;
    //     e.stopPropagation();
    //     e.nativeEvent.stopImmediatePropagation();
    //     scope.callbackFunction();
    //     if (scope.props.objStates[scope.props.id] && scope.props.objStates[scope.props.id].contentFeature) {
    //         let vectorLayer = scope.props.mapController.proxy.layerController.arrLayers[scope.props.pid].vectorLayer;
    //         let vectorSource = scope.getSource(vectorLayer, scope.props.objStates[scope.props.id].identifier);
    //         let feature = scope.props.objStates[scope.props.id].contentFeature;
    //         if (scope.state.active && vectorSource.getFeatureById(scope.props.id)) {
    //             vectorSource.removeFeature(feature);
    //         }
    //         else if (!scope.state.active && !vectorSource.getFeatureById(scope.props.id)){
    //             vectorSource.addFeature(feature);
    //         }
    //     }
    //     else {
    //         let vectorLayer = scope.props.mapController.proxy.layerController.arrLayers[parseInt(scope.props.id)].vectorLayer;
    //         if (!scope.state.active) {
    //             scope.props.mapController.map.addLayer(vectorLayer);
    //         } else {
    //             scope.props.mapController.map.removeLayer(vectorLayer);
    //         }
    //     }
    //
    // };

    layerClick(e) {
        const scope = this;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        let layerController = scope.props.mapController.proxy.layerController;
        let vectorSource = layerController.vectorSource;
        let clusterSource = layerController.clusterSource;
        let vectorLayer = layerController.vectorLayer;
        if (scope.state.active) {
            let vectorCollection = layerController.vectorCollection;
            let featureArray = vectorCollection.getArray();
            if (scope.props.layer.features && scope.props.layer.features.length > 0) {

                let length = vectorCollection.getLength();
                for (let featureId in scope.props.layer.features) {
                    if (scope.props.layer.features.hasOwnProperty(featureId)) {
                        let delIndex = featureArray.indexOf(scope.props.layer.features[featureId]);
                        featureArray.splice(delIndex, 1);
                        length--;
                    }
                }
                vectorCollection.set('length', length);
                vectorCollection.dispatchEvent('change');
                vectorSource.dispatchEvent('change');
            }
        }
        else {
            let arrFeatures = layerController.vectorCollection.getArray();
            delete layerController.vectorCollection;
            delete layerController.vectorSource;
            delete layerController.clusterSource;
            // delete layerController.vectorLayer;

            if (scope.props.layer.features && scope.props.layer.features.length > 0) {
                arrFeatures = arrFeatures.concat(scope.props.layer.features);
            }
            layerController.vectorCollection = new Collection(arrFeatures);
            layerController.vectorSource = new VectorSource({
                features: layerController.vectorCollection
            });
            layerController.clusterSource = new Cluster({
                source: layerController.vectorSource,
                geometryFunction: function (feature) {
                    let type = feature.getGeometry().getType();
                    if (type === "MultiPolygon") {
                        return feature.getGeometry().getInteriorPoints()[0];
                    }
                    else if (type === "Polygon"){
                        return feature.getGeometry().getInteriorPoint();
                    }
                    else {
                        return  feature.getGeometry();
                    }
                }
            });
            layerController.vectorLayer.setSource(layerController.clusterSource);
        }
        scope.setState({
            "active": !scope.state.active
        });
    }
    render() {
        const scope = this;
        let span = null;
        // if(this.props.objStates && this.props.objStates[this.props.id] && this.props.objStates[this.props.id] && this.props.objStates[this.props.id].childs) {
        //     let spanClick = function(e) {
        //         e.stopPropagation();
        //         e.nativeEvent.stopImmediatePropagation();
        //         if (scope.state.collapsed) {
        //             scope.setState({collapsed: false});
        //         }
        //         else {
        //             scope.setState({collapsed: true});
        //         }
        //     };
        //     span = <span className={cssConstants.ICON} onMouseUp={(event) => spanClick(event)}/>;
        // }
        if (this.props.layer.childs && this.props.layer.childs.length > 0) {
            span = <span className={cssConstants.ICON} onMouseUp={(event) => spanClick(event)}/>;
        }
        let cssClass = scope.state.active ? cssConstants.ACTIVE : cssConstants.INACTIVE;
        // if (!scope.props.mapController.proxy.checkLayerIsActiveForZoom(scope.props.id)) {
        //     cssClass += " " + cssConstants.DISABLED;
        // }
        let openClose = this.state.collapsed ? cssConstants.CLOSE : cssConstants.OPEN;
        // let objChilds = this.props.objStates[this.props.id].childs;
        let objChilds = this.props.layer.childs;
        // if (this.props.objLayers.datShit) {
        //     nameShit += this.props.objLayers.datShit;
        // }
        if (objChilds) {
            return (
                <li className={openClose}>
                    {span}
                    <a className={cssClass} onMouseUp={(event) => this.layerClick(event)}>{this.props.layer.name}</a>
                    <ul>
                        {objChilds.map((item, id) => (
                            // <C4gStarboardLayerElement key={item} pid={this.props.id} objLayers={this.props.objLayers} objStates={objChilds} parentCallback={this.callbackFunction} id={item} mapController={this.props.mapController} name={objChilds[item].name} content={objChilds[item].content}/>
                            <C4gStarboardLayerElement key={id} mapController={this.props.mapController}
                                                      parentCallback={this.callbackFunction}
                                                      layer={item}
                                                      fnResize={this.props.fnResize}/>
                        ))}
                    </ul>
                </li>
            );
        }
        else {
            return (
                <li className={openClose}>
                    {span}
                    <a className={cssClass} onMouseUp={(event) => this.layerClick(event)}>{this.props.layer.name}</a>
                </li>
            )
        }

    }
}