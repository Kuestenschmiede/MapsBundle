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
    this.setOpen = this.setOpen.bind(this);
    this.loadFilters();
    this.state = {
      filters: [],
      open: true,
      arrChecked: [],
      openedList: -1
    }
  }

  render() {
    const scope = this;
    let filters = this.state.filters;
    if (filters && filters.length > 0) {
      let div = filters.map((feature, index) => {
        let checkedItem = scope.state.arrChecked[index];
        let openedList = scope.state.openedList === index;
        return <FeatureFilterList feature={feature} open={openedList} setOpen={this.setOpen} checkedItem={checkedItem} filterLayers={this.filterLayers} mapController={this.props.mapController} id={index} key={index}/>
      })
      return (
          <div className={"c4g-feature-filter"}>
            <ul className={"c4g-feature-filter-list"}>
              {div}
            </ul>
          </div>

      );
    }
    return (<div/>);
  }
  filterLayers (property, listId){
    let newState = this.state.arrChecked;
    newState[listId] = property
    this.setState({arrChecked: newState}, () => {
        let arrLayers = this.props.mapController.map.getLayers().getArray();
        arrLayers.map((feature, index) => {
          this.filterLayer(feature);
        });
      }
    );

  }
  setOpen (openId) {
    if (this.state.openedList === openId) {
      this.setState({openedList: -1});
    }
    else {
      this.setState({openedList: openId});
    }
  }
  filterLayer (layer) {
    if (layer.getLayers && typeof layer.getLayers === "function") {
      let arrLayers = layer.getLayers().getArray();
      arrLayers.map((feature, index) => {
        this.filterLayer(feature);
      });
    }
    else if (layer.getStyle && typeof layer.getStyle === "function") {
      let source = layer.getSource();
      source.forEachFeature((feature) => {
        let show = true;
        for (let key in this.state.arrChecked) {
          if (this.state.arrChecked.hasOwnProperty(key)) {
            let property = this.state.arrChecked[key];
            if (!(property === "all" || feature.get(property))) {
              show = false;
            }
          }

        }
        if (show) {
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
        let arrChecked = [];
        for (let i = 0; i < jsonData.length; i++) {
          arrChecked.push("all");
        }
        scope.setState({filters: jsonData, arrChecked: arrChecked}, () => {console.log(scope.state.filters)})
      });
    })
  }
}