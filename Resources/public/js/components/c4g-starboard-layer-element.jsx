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
        this.state = {
            initialized: false,
            active: !props.objStates[props.id].hide,
            collapsed: this.props.collapsed,
            disabled: props.mapController.proxy.checkLayerIsActiveForZoom(scope.props.id)
        };

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
        return objChild
    };

    render() {
        const scope = this;
        let span = null;
        if(this.props.objStates && this.props.objStates[this.props.id] && this.props.objStates[this.props.id] && this.props.objStates[this.props.id].childs) {
            let spanClick = function(e) {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                if (scope.state.collapsed) {
                    scope.setState({collapsed: false});
                }
                else {
                    scope.setState({collapsed: true});
                }
            };
            span = <span className={cssConstants.ICON} onMouseUp={(event) => spanClick(event)}/>;
        }
        let layerClick = function(e) {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            scope.callbackFunction();
            if (!scope.state.active) {
                scope.props.mapController.proxy.layerController.showLayer(scope.props.id);
            }
            else {
                scope.props.mapController.proxy.layerController.hideLayer(scope.props.id);
            }
        };
        let cssClass = scope.state.active ? cssConstants.ACTIVE : cssConstants.INACTIVE;
        if (!scope.props.mapController.proxy.checkLayerIsActiveForZoom(scope.props.id)) {
            cssClass += " " + cssConstants.DISABLED;
        }
        let openClose = this.state.collapsed ? cssConstants.CLOSE : cssConstants.OPEN;
        let objChilds = this.props.objStates[this.props.id].childs;
        return (
            <li className={openClose}>
                {span}
                <a className={cssClass} onMouseUp={(event) => layerClick(event)}>{this.props.name}</a>
                <ul>
                {Object.keys(objChilds).map(item => (
                    <C4gStarboardLayerElement key={item} objStates={objChilds} parentCallback={this.callbackFunction} id={item} mapController={this.props.mapController} name={objChilds[item].name}/>
                ))}
                </ul>
            </li>
        );
    }
}