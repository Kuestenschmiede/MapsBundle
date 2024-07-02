/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, { Component } from "react";
import {Point, Polygon, LineString} from "ol/geom";
import {getLanguage} from "./../routing-constant-i18n";
import {toLonLat} from "ol/proj";
import GPX from "ol/format/GPX";

export class RouterPopupButtons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const scope = this;
        let geometry = this.props.config.feature.getGeometry();
        if (geometry) {
            if (geometry instanceof LineString) {
                const editRoute = () => {
                    let coordinates = geometry.getCoordinates();
                    let i = 1;
                    while (coordinates.length > 15) {
                        geometry = geometry.simplify(i);
                        coordinates = geometry.getCoordinates();
                        i += 2;
                        if (i > 42) { //prevent endless loop & magic number is magic
                            import("./../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js").then(module => {
                                let alertHandler = new module.AlertHandler();
                                alertHandler.showInfoDialog(scope.props.config.router.languageConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.config.router.languageConstants.ROUTER_ERROR_LINESTRING);
                            });
                            return;
                        }
                    };
                    this.props.config.router.openControls(true);
                    this.props.config.router.setMode("route");
                    let fromCoordinate = toLonLat(coordinates[0], "EPSG:3857");
                    this.props.config.router.setRouteFrom(fromCoordinate[0], fromCoordinate[1]);
                    let overCoordinates = coordinates.slice(1, coordinates.length - 2)
                    this.props.config.router.addOverPoints(overCoordinates);
                    let toCoordinate = toLonLat(coordinates[coordinates.length - 1], "EPSG:3857");
                    this.props.config.router.setRouteTo(toCoordinate[0], toCoordinate[1]);
                }
                const exportRoute = () => {
                    let feature = scope.props.config.feature;
                    let format = new GPX();
                    let strExport = format.writeFeatures([feature], {
                        featureProjection: "EPSG:3857",
                        dataProjection: "EPSG:4326",
                        decimals: 3
                    });
                    var element = document.createElement('a');
                    element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(strExport));
                    let name = feature.get('name') || "route";
                    element.setAttribute('download', name + ".gpx");

                    element.style.display = 'none';
                    document.body.appendChild(element);

                    element.click();

                    document.body.removeChild(element);

                }
                return <div>
                    <button className={"c4g-icon c4g-popup-route-download"} title={this.props.config.router.languageConstants.ROUTER_DOWNLOAD} onMouseUp={()=>{exportRoute()}}/>
                    <button className={"c4g-icon c4g-popup-route-edit"} title={this.props.config.router.languageConstants.POPUP_ROUTE_EDIT} onMouseUp={()=>{editRoute()}}/>
                </div>
            }
            else {
                let coordinates;
                if (geometry instanceof Polygon) {
                    let extent = geometry.getExtent();
                    coordinates = [
                        (extent[0] + extent[2]) / 2,
                        (extent[1] + extent[3]) / 2
                    ];
                }
                else {
                    coordinates = geometry.getCoordinates();
                }
                let routeFrom = () => {
                    this.props.config.router.openControls(true);
                    this.props.config.router.setMode("route");
                    // from address
                    let fromCoords = toLonLat(coordinates, "EPSG:3857");
                    this.props.config.router.setRouteFrom(fromCoords[0], fromCoords[1]);
                };
                let routeTo = () => {
                    this.props.config.router.openControls(true);
                    this.props.config.router.setMode("route");
                    // to address
                    let toCoords = toLonLat(coordinates, "EPSG:3857");
                    this.props.config.router.setRouteTo(toCoords[0], toCoords[1]);
                };

                return <div>
                    <button className={"c4g-icon c4g-popup-route-from"} title={this.props.config.router.languageConstants.POPUP_ROUTE_FROM} onMouseUp={()=>{routeFrom()}}/>
                    <button className={"c4g-icon c4g-popup-route-to"} title={this.props.config.router.languageConstants.POPUP_ROUTE_TO} onMouseUp={()=>{routeTo()}}/>
                </div>;
            }
        }
        else {
            return null;
        }
    }
}