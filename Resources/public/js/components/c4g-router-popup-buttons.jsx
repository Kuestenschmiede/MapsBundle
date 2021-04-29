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
import {AutocompleteInput} from "./c4g-autocomplete-input.jsx";
import {Point} from "ol/geom";
import {getLanguage} from "./../routing-constant-i18n";
import {toLonLat} from "ol/proj";

export class RouterPopupButtons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let routeFrom = () => {
            this.props.config.router.openControls(true);
            this.props.config.router.setMode("route");
            // from address
            let fromCoords = toLonLat(this.props.config.feature.getGeometry().getCoordinates(), "EPSG:3857");
            this.props.config.router.setRouteFrom(fromCoords[0], fromCoords[1]);
        };
        let routeTo = () => {
            this.props.config.router.openControls(true);
            this.props.config.router.setMode("route");
            // to address
            let toCoords = toLonLat(this.props.config.feature.getGeometry().getCoordinates(), "EPSG:3857");
            this.props.config.router.setRouteTo(toCoords[0], toCoords[1]);
        };
        return <div>
            <button className={"c4g-icon c4g-popup-route-from"} title={this.props.config.router.languageConstants.POPUP_ROUTE_FROM} onMouseUp={()=>{routeFrom()}}/>
            <button className={"c4g-icon c4g-popup-route-to"} title={this.props.config.router.languageConstants.POPUP_ROUTE_TO} onMouseUp={()=>{routeTo()}}/>
        </div>
    }
}