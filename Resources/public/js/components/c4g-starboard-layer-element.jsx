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

export class C4gStarboardLayerElement extends Component {

    constructor(props) {
        super(props);
        const scope = this;
        if (scope.props.objStates[scope.props.id].contentFeature) {
            this.state = {
                initialized: false,
                active: !props.objStates[props.id].hide,
                collapsed: this.props.collapsed,
                disabled: props.mapController.proxy.checkLayerIsActiveForZoom(scope.props.pid)
            };
        }
        else {
            this.state = {
                initialized: false,
                active: !props.objStates[props.id].hide,
                collapsed: this.props.collapsed,
                disabled: props.mapController.proxy.checkLayerIsActiveForZoom(scope.props.id)
            };
        }


    }

    static getDerivedStateFromProps(props, state) {
        if (state.active === props.objStates[props.id].hide) {
            return {
                active: !props.objStates[props.id].hide
            }
        }
        return null;
    }

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
    getSource = (layer) => {
        if (layer.getSource && layer.getSource()) {
            return layer.getSource();
        }
        else if (layer.getLayers && layer.getLayers()) {
            let layers = layer.getLayers().getArray();
            for (let singleLayer in layers) {
                if(layers.hasOwnProperty(singleLayer)) {
                    return this.getSource(layers[singleLayer]);
                }
            }
        }
    };

    removeElement = (elementId) => {

    }

    layerClick = (e) => {
        const scope = this;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        scope.callbackFunction();
        if (scope.props.objStates[scope.props.id].contentFeature) {
            let vectorLayer = scope.props.mapController.proxy.layerController.arrLayers[scope.props.pid].vectorLayer;
            let vectorSource = scope.getSource(vectorLayer);
            let feature = scope.props.objStates[scope.props.id].contentFeature;
            if (scope.state.active && vectorSource.getFeatureById(scope.props.id)) {
                vectorSource.removeFeature(feature);
            }
            else if (!scope.state.active && !vectorSource.getFeatureById(scope.props.id)){
                vectorSource.addFeature(feature)
            }
        }
        else {
            if (!scope.state.active) {
                scope.props.mapController.proxy.layerController.showLayer(scope.props.id);
            } else {
                scope.props.mapController.proxy.layerController.hideLayer(scope.props.id);
            }
        }

    };

    render() {
        const scope = this;
        let span = null;
        let bodyClass = document.getElementsByTagName("body")[0].className;
        let isMobile = bodyClass.includes("phone") || bodyClass.includes("tablet") || bodyClass.includes("ios");
        if (this.props.objStates && this.props.objStates[this.props.id] && this.props.objStates[this.props.id].childs) {
            let spanClick = function(e) {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                if (scope.state.collapsed) {
                    scope.setState({collapsed: false});
                }
                else {
                    scope.setState({collapsed: true});
                }
                scope.props.fnResize();
            };
            let className = "";
            let layers = this.props.mapController.proxy.layerController.arrLayers;
            if ((layers[this.props.id].childs && layers[this.props.id].childs.length > 0)
                || (layers[this.props.id].content && layers[this.props.id].content[0] && layers[this.props.id].content[0].combinedJSON))
            {
                className = cssConstants.ICON;
            } else {
                className = "";
            }
            if (isMobile) {
                span = <span className={className} onTouchStart={(event) => spanClick(event)}/>;
            } else {
                span = <span className={className} onMouseUp={(event) => spanClick(event)}/>;
            }
        }
        let cssClass = scope.state.active ? cssConstants.ACTIVE : cssConstants.INACTIVE;
        if (!scope.props.mapController.proxy.checkLayerIsActiveForZoom(scope.props.id)) {
            cssClass += " " + cssConstants.DISABLED;
        }
        let openClose = this.state.collapsed ? cssConstants.CLOSE : cssConstants.OPEN;
        let objChilds = this.props.objStates[this.props.id].childs;
        let anchor = "";
        if (isMobile) {
            anchor = <a className={cssClass} onTouchStart={(event) => this.layerClick(event)}>{this.props.name}</a>;
        } else {
            anchor = <a className={cssClass} onMouseUp={(event) => this.layerClick(event)}>{this.props.name}</a>
        }
        return (
            <li className={openClose}>
                {span}
                {anchor}
                <ul>
                    {Object.keys(objChilds).map(item => (
                        <C4gStarboardLayerElement key={item} pid={this.props.id} objStates={objChilds}
                                                  parentCallback={this.callbackFunction} id={item} fnResize={this.props.fnResize}
                                                  mapController={this.props.mapController} name={objChilds[item].name}
                                                  content={objChilds[item].content} collapsed={!this.props.objStates[this.props.id].childs.initial_opened}/>
                    ))}
                </ul>
            </li>
        );
    }

}