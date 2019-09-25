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
import {HorizontalPanel} from "./c4g-horizontal-panel.jsx";
import {FeatureFilterList} from "./c4g-feature-filter-list.jsx";
import {Fill, Stroke, Style} from "ol/style";

export class FeatureFilter extends Component {
  constructor(props) {
    super(props);
    this.filterLayers = this.filterLayers.bind(this);
    this.loadFilters();
    this.state = {
      filters: [],
      open: true
    }
  }

  render() {
    let filters = this.state.filters;
    if (filters && filters.length > 0) {
      return (
          <div className={"c4g-router-panel c4g-open"}>
            <ul>
            {filters.map((feature, index) => {
              return <FeatureFilterList feature={feature} filterLayers={this.filterLayers} mapController={this.props.mapController} key={index}/>
            })
            }
            </ul>
          </div>

      );
    }
    return (<div/>);
  }
  filterLayers (property){
    // console.log(this.props.mapController.map);
    let arrLayers = this.props.mapController.map.getLayers().getArray();
    arrLayers.map((feature, index) => {
      this.filterLayer(feature, property);
    });
  }
  filterLayer (layer, property) {
    if (layer.getLayers && typeof layer.getLayers === "function") {
      let arrLayers = layer.getLayers().getArray();
      arrLayers.map((feature, index) => {
        this.filterLayer(feature, property);
      });
    }
    else if (layer.getStyle && typeof layer.getStyle === "function") {
      let source = layer.getSource();
      source.forEachFeature((feature) => {
        if (property === "all" || feature.get(property)) {
          if (feature.get('oldStyle')) {
            feature.setStyle(feature.get('oldStyle'));
          }
        }
        else {
          if (!feature.get('oldStyle')) {
            let oldStyle = feature.getStyle() || layer.getStyle();
            feature.set('oldStyle',  oldStyle);
          }
          feature.setStyle(new Style({
            stroke: new Stroke({
              color: "rgba(0,0,0,0)",
              width: 0
            }),
            fill: new Fill({
              color: "rgba(0,0,0,0)"
            })
          }))
        }
      })
    }
    else {
      console.log(layer);
    }
  }
  getRandomColor() {
    var letters = 'FFFF456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 8; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  loadFilters() {
    const scope = this;
    let url = "con4gis/filterService/" + this.props.mapController.data.id;
    fetch(url).then(function (response) {
      return response.json().then(function(jsonData) {
        jsonData = JSON.parse(jsonData);
        scope.setState({filters: jsonData}, () => {console.log(scope.state.filters)})
      });
    })
  }
}