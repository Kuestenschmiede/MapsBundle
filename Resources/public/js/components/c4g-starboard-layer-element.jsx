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
            childs: props.childs
        };

    }

    render() {
        const scope = this;
        let span = null;
        if(this.props.hasChilds) {
            span = <span className={cssConstants.ICON}></span>;
        }
        let layerClick = function(e) {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (!scope.state.active) {
                scope.props.mapController.proxy.layerController.showLayer(scope.props.id);
                scope.setState({"active": true});
            }
            else {
                scope.props.mapController.proxy.layerController.hideLayer(scope.props.id);
                scope.setState({"active": false});
            }
        };
        return (
            <li className={cssConstants.CLOSE} onMouseUp={(event) => layerClick(event)}>
                {span}
                <ul>
                {this.state.childs.map(item => (
                    <C4gStarboardLayerElement key={item.id} hide={item.hide} id={item.id} mapController={this.props.mapController} name={item.name} childs={item.childs}></C4gStarboardLayerElement>
                ))}
                </ul>
                <a>{this.props.name}</a>
            </li>
        );
    }
}