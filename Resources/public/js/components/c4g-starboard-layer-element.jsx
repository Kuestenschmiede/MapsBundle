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
import {Vector} from "ol/layer";
import {Cluster as ClusterSource} from "ol/source";
import {Cluster} from "ol/layer";

export class C4gStarboardLayerElement extends Component {

  constructor(props) {
    super(props);
    const scope = this;

    this.state = {
      collapsed: true
    };
    this.layerClick = this.layerClick.bind(this);
    this.spanClick = this.spanClick.bind(this);
    this.parentCallback = this.parentCallback.bind(this);
  }


  showLayer(showElements = null) {
    const scope = this;
    let features = false;
    let vectorLayer = false;
    if (showElements) {
      if (showElements.isArray && showElements.isArray()) {
        features = showElements;
      }
      else if (showElements instanceof Vector) {
        vectorLayer = showElements;
      }
    }
    else {
      features = features || scope.props.layer.features;
      vectorLayer = vectorLayer || scope.props.layer.vectorLayer;
    }
    features = features || scope.props.layer.features;
    let layerController = scope.props.mapController.proxy.layerController;
    if (scope.props.layer.loader >= 0 && layerController.loaders[scope.props.layer.loader] && layerController.loaders[scope.props.layer.loader].preventLoading) {
      layerController.loaders[scope.props.layer.loader].preventLoading = false;
    }
    if (features) {
      layerController.vectorCollection.extend(features);
    }
    else if (vectorLayer) {
      layerController.mapController.map.addLayer(scope.props.layer.vectorLayer);
    }
  }

  hideLayer(hideElements = null) {
    const scope = this;
    let features = false;
    let vectorLayer = false;
    if (hideElements) {
      if (hideElements.isArray && hideElements.isArray()) {
        features = hideElements;
      }
      else if (hideElements instanceof Vector) {
        vectorLayer = hideElements;
      }
    }
    else {
      features = features || scope.props.layer.features;
      vectorLayer = vectorLayer || scope.props.layer.vectorLayer;
    }
    let layerController = scope.props.mapController.proxy.layerController;

    if (features) {
      if (scope.props.layer.loader >= 0) {
        let loader = layerController.loaders[scope.props.layer.loader];
        layerController.loaders[scope.props.layer.loader].preventLoading = true;
        if (loader.request) {
          loader.request.abort();
        }
      }
      if (features.length > 0) {
        for (let featureId in features) {
          if (features.hasOwnProperty(featureId)) {
            layerController.vectorCollection.remove(features[featureId]);
          }
        }
      }
    }
    else if (vectorLayer) {
      layerController.mapController.map.removeLayer(vectorLayer);
    }
  }
  changeChildState (child, childState, active) {
    if (active) {
      this.showLayer(child.features || child.vectorLayer);
    }
    else {
      this.hideLayer(child.features || child.vectorLayer);
    }
    if (child.childs && child.childs.length > 0) {
      for (let childId in child.childs) {
        if (child.childs.hasOwnProperty(childId)) {
          let currentChildState = childState.childStates[childId].active;
          if (currentChildState !== active) {
            childState.childStates[childId] = this.changeChildState(child.childs[childId], childState.childStates[childId], active);
          }
        }
      }
    }
    childState.active = active;
    return childState;
  }
  parentCallback (key, newChildState) {
    let newState = this.props.layerStates;
    newState.childStates[key] = newChildState;
    if (newState.active != newChildState.active) {
      // newState.active = newChildState.active;
      if (newChildState.active) {
        this.showLayer();
      }
      else {
        this.hideLayer();
      }
    }
    this.props.parentCallback(this.props.id, newState)
  }
  layerClick(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (!this.props.layerStates.active) {
      this.showLayer();
    }
    else {
      this.hideLayer();
    }
    let newState = this.props.layerStates;
    newState.active = !newState.active;
    if (this.props.layer.childs && this.props.layer.childs.length > 0) {
      let layerChilds = this.props.layer.childs;
      for (let childId in layerChilds) {
        if (layerChilds.hasOwnProperty(childId)) {
          let currentChildState = newState.childStates[childId].active;
          if (currentChildState !== newState.active) {
            newState.childStates[childId] = this.changeChildState(layerChilds[childId], newState.childStates[childId], newState.active);
          }
        }
      }
    }
    this.props.parentCallback(this.props.id, newState)
  }
  spanClick(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      collapsed : !this.state.collapsed
    });
  }
  render() {
    const scope = this;
    let span = null;
    if (this.props.layer.childs && this.props.layer.childs.length > 0) {
      span = <span className={cssConstants.ICON} onMouseUp={(event) => this.spanClick(event)}/>;
    }
    let cssClass = this.props.layerStates.active ? cssConstants.ACTIVE : cssConstants.INACTIVE;
    let openClose = this.state.collapsed ? cssConstants.CLOSE : cssConstants.OPEN;
    let objChilds = this.props.layer.childs;

    if (objChilds) {
      return (
        <li className={openClose}>
          {span}
          <a className={cssClass} onMouseUp={(event) => this.layerClick(event)}>{this.props.layer.name}</a>
          <ul>
            {objChilds.map((item, id) => {
              if (this.props.byPassChilds || this.props.filterFunc(this.props.strFilter, item)) {
                return <C4gStarboardLayerElement key={id} id={id} mapController={this.props.mapController}
                                          parentCallback={this.parentCallback}
                                          strFilter={this.props.strFilter}
                                          filterFunc={this.props.filterFunc}
                                          byPassChilds={this.props.byPassChilds || this.props.filterFunc(this.props.strFilter, item, false)}
                                          layerStates={this.props.layerStates.childStates[id]}
                                          layer={item}
                                          fnResize={this.props.fnResize}/>
              }

            })}
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