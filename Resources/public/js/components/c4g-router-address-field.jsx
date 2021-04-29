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
import {transform} from "ol/proj";

export class RouterAddressField extends Component {

  constructor(props) {
    super(props);

    this.languageConstants = getLanguage(this.props.router.props.mapController.data);

    this.getPosition = this.getPosition.bind(this);
    this.removeContent = this.removeContent.bind(this);
    if (props.router.mapData.initialPosition && (props.name === "routingFrom" || props.name === "areaFrom")) {
      this.getPosition();
    }
    else if (props.router.mapData.initialDestination && props.name === "routingTo") {
      let setToCenter = (data)=> {
        let center = props.router.props.mapController.map.getView().getCenter();
        let coordinates = {};
        coordinates.coords = {};
        coordinates.coords.longitude = transform(center, "EPSG:3857", "EPSG:4326")[0];
        coordinates.coords.latitude = transform(center, "EPSG:3857", "EPSG:4326")[1];
        this.handlePosition(coordinates);
      }
      window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
      window.c4gMapsHooks.layer_loaded.push(setToCenter);
    }
  }

  render() {
    let positionButton = null;
    if (this.props.withPosition) {
      positionButton = <button className="c4g-router-position" onMouseUp={this.getPosition} title={this.languageConstants.ROUTE_POSITION}/>;
    }
    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <AutocompleteInput type="search" className={this.props.class} name={this.props.name}
                           cssId={this.props.cssId} objFunctions={this.props.objFunctions} objSettings={this.props.objSettings} popup={this.props.popup}
                           containerAddresses={this.props.containerAddresses} autoComplete="off" router={this.props.router} value={this.props.value} index={this.props.index}/>
        {positionButton}
        <button className={"c4g-router-input-clear"} onMouseUp={this.removeContent} title={this.languageConstants.REMOVE_ADDRESS}/>
      </div>
    );
  }

  removeContent(event) {
    jQuery("#" + this.props.cssId).val('');
    this.props.clearInput(event);
  }

  getPosition() {
    const scope = this;
    let handleNewPosition = function (pos) {
      scope.handlePosition(pos);
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleNewPosition);
    } else {
      console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.");
    }
  }

  /**
   * Takes the input coordinates and executes the reverse search. On success, the result location is inserted in the
   * given input field and the given property of this.
   * @param coordinates
   */
  handlePosition(coordinates) {
    let coords = coordinates.coords;
    if (this.props.name === "routingFrom") {
      this.props.router.setRouteFrom(coords.longitude, coords.latitude);
    }
    else if (this.props.name === "overValue") {

    }
    else if (this.props.name === "routingTo") {
      this.props.router.setRouteTo(coords.longitude, coords.latitude);
    }
    if (this.props.name === "areaFrom") {
      this.props.router.setAreaPoint(coords.longitude, coords.latitude);
    }
    this.props.router.recalculateRoute();
  }
}