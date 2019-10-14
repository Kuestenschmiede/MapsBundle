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
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickInside = this.handleClickInside.bind(this);
    this.loadFilters();
    this.state = {
      filters: [],
      open: true,
      arrChecked: [],
      openedList: -1
    };
    this.props.mapController.filter = this;
  }

  render() {
    const scope = this;
    let filters = this.state.filters;
    if (filters && filters.length > 0) {
      let div = filters.map((feature, index) => {
        let checkedItem = scope.state.arrChecked[index];
        let openedList = scope.state.openedList === index;
        return <FeatureFilterList feature={feature} open={openedList} setOpen={this.setOpen} checkedItem={checkedItem} filterLayers={this.filterLayers} id={index} key={index}/>
      });
      return (
          <div className={"c4g-feature-filter"}>
            <ul className={"c4g-feature-filter-list"} onMouseUp={(evt) => this.handleClickInside(evt)} ref={this.setWrapperRef}>
              {div}
            </ul>
          </div>

      );
    }
    return (<div/>);
  }

  filterLayers (property, listId, value){
    let newState = this.state.arrChecked;
    newState[listId] = {
      identifier: property,
      value: value
    };
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
    } else if (layer.getStyle && typeof layer.getStyle === "function") {
      let source = layer.getSource();
      source.forEachFeature((feature) => {
        let show = true;
        for (let key in this.state.arrChecked) {
          if (this.state.arrChecked.hasOwnProperty(key)) {
            let objChecked = this.state.arrChecked[key];
            let property = objChecked.identifier;
            if (!(property === "all" || (feature.get(property) && !objChecked.value) || ((objChecked.value == feature.get(property)) && objChecked.value))) {
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
  }

  loadFilters() {
    const scope = this;
    let url = "con4gis/filterService/" + this.props.mapController.data.profile + "/" + this.props.mapController.data.lang;
    fetch(url).then(function (response) {
      return response.json().then(function(jsonData) {
        jsonData = JSON.parse(jsonData);
        let arrChecked = [];
        for (let i = 0; i < jsonData.length; i++) {
          arrChecked.push({
            identifier: "all"
          });
        }
        scope.setState({filters: jsonData, arrChecked: arrChecked})
      });
    })
  }
  
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * hide FilterFeatureList if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({openedList: -1});
    }
  }
  handleClickInside(event) {
    let path = event.nativeEvent.path;
    if (path[0] === event.currentTarget) {
      this.setState({openedList: -1});
    }
  }
}