/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import * as olExtent from "ol/extent";
import {cssConstants} from "./../c4g-maps-constant.js";
import {C4gStarboardStyle} from "./c4g-starboard-style";
import {Vector} from "ol/layer";
import Feature from 'ol/Feature';

export class C4gStarboardLayerElement extends Component {

  constructor(props) {
    super(props);
    const scope = this;

    this.layerClick = this.layerClick.bind(this);
    this.layerZoomTo = this.layerZoomTo.bind(this);
    this.spanClick = this.spanClick.bind(this);
    this.changeCollapseState = this.changeCollapseState.bind(this);
    this.parentCallback = this.parentCallback.bind(this);
  }


  showLayer(showElements = null) {
    const scope = this;
    let features = false;
    let vectorLayer = false;
    if (showElements) {
      if (Array.isArray(showElements)) {
        features = showElements;
      } else if (showElements instanceof Vector) {
        vectorLayer = showElements;
      }
    } else {
      features = features || scope.props.layer.features;
      vectorLayer = vectorLayer || scope.props.layer.vectorLayer;
    }
    features = features || scope.props.layer.features;
    let layerController = scope.props.mapController.proxy.layerController;
    if (features && features.length > 0) {
      layerController.show(scope.props.layer.loader, features,scope.props.id);
    } else if (vectorLayer){
      layerController.show(scope.props.layer.loader, vectorLayer, scope.props.id);
    }
    else {
      layerController.show(false, false, scope.props.id);
    }
    scope.props.mapController.setLayerStateWithId(scope.props.id, true)
  }

  hideLayer(hideElements = null) {
    const scope = this;
    let features = false;
    let vectorLayer = false;
    if (hideElements) {
      if (Array.isArray(hideElements)) {
        features = hideElements;
      } else if (hideElements instanceof Vector) {
        vectorLayer = hideElements;
      }
    } else {
      features = features || scope.props.layer.features;
      vectorLayer = vectorLayer || scope.props.layer.vectorLayer;
    }
    let layerController = scope.props.mapController.proxy.layerController;
    if (features && features.length > 0) {
      layerController.hide(scope.props.layer.loader, features, scope.props.id);
    } else if (vectorLayer) {
      layerController.hide(scope.props.layer.loader, vectorLayer, scope.props.id);
    }
    else {
      layerController.hide(false, false, scope.props.id);
    }
    scope.props.mapController.setLayerStateWithId(scope.props.id, false)
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
    this.props.mapController.setLayerStateWithId(childState.id, active)
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
    this.props.parentCallback(this.props.keyId, newState)
  }
  layerEnter(e) {
    if (e.which === 13) {
      this.layerClick(e);
    }
  }
  layerClick(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (this.props.layerStates.greyed) {
      return false;
    }
    if (!this.props.layerStates.active) {
      this.showLayer();
      if (this.props.layerStates.collapsed) {
        let layerState = this.props.layerStates;
        layerState.collapsed = false;
        this.props.changeCollapseState(this.props.keyId, layerState);
      }
    }
    else {
      this.hideLayer();
    }
    let newState = this.props.layerStates;
    if (this.props.layer.childs && this.props.layer.childs.length > 0 && !this.props.layer.ignoreChilds) {
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
    // this.props.parentCallback(this.props.keyId, newState)
  }
  layerZoomTo(e) {
    if (!this.props.layerStates.active) {
      this.layerClick(e);
    }
    let boolZoomTo = this.props.mapController.proxy.layerController.zoomTo(this.props.layer);
    if (boolZoomTo) {
      this.props.mapController.proxy.layerController.setChildFeatureFlag(this.props.layer, "markLocstyle", true);
      window.setTimeout(() => {
        this.props.mapController.proxy.layerController.setChildFeatureFlag(this.props.layer, "markLocstyle", false);
      }, 3000);
    }
    if (this.props.mapController.proxy.mapData.starboard.openPopup) {
      let feature, layer;
      if (this.props.layer.popup) {
        feature = new Feature();
        layer = new Vector();
        feature.set('popup',this.props.layer.popup);
      }
      else if (this.props.layer.features && this.props.layer.features.length === 1){
        layer = new Vector();
        feature = this.props.layer.features[0];
      }
      this.props.mapController.proxy.handlePopup(feature, layer);

    }
  }
  layerZoomToEnter(e) {
    if (e.which === 13) {
      this.layerZoomTo(e);
    }
  }
  changeCollapseState(id, state) {
    this.props.layerStates.childStates[id] = state;
    this.props.changeCollapseState(this.props.keyId, this.props.layerStates);
  }
  spanClick(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.props.layerStates.collapsed = !this.props.layerStates.collapsed;
    this.props.changeCollapseState(this.props.keyId, this.props.layerStates)
  }
  render() {
    const scope = this;
    let stylePicture = null;
    let spanZoom = null;

    if (this.props.mapController.data.starboard.showLocstyles === "1" && this.props.layer.locstyle && this.props.styleData && this.props.styleData.arrLocStyles && this.props.styleData.arrLocStyles[this.props.layer.locstyle]) {
      if (this.props.layer.zoomTo) {
        stylePicture = <C4gStarboardStyle styleData={this.props.styleData} styleId={this.props.layer.locstyle} tooltip={this.props.lang.STARBOARD_ELEMENT_ZOOM_BEFORE+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_ZOOM_AFTER} clickEvent={this.layerZoomTo}/>;
      }
      else {
        stylePicture = <C4gStarboardStyle styleData={this.props.styleData} styleId={this.props.layer.locstyle} tooltip={this.props.layer.name}/>;
      }
    }
    else if (this.props.layer.zoomTo && !this.props.mapController.data.starboard.invertZoomActivate) {
      spanZoom = <span className={"c4g-geojson-button"} title={this.props.lang.STARBOARD_ELEMENT_ZOOM_BEFORE+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_ZOOM_AFTER} onMouseUp={(event) => this.layerZoomTo(event)}/>;
    }
    let cssClass = this.props.layerStates.active ? cssConstants.ACTIVE : cssConstants.INACTIVE;
    if (this.props.layerStates.greyed) {
      cssClass += " " + cssConstants.DISABLED;
    }
    let openClose = this.props.layerStates.collapsed ? cssConstants.CLOSE : cssConstants.OPEN;
    let objChilds = this.props.layer.childs;
    let linkText;
    let linkSwitch;
    if (this.props.mapController.data.starboard.invertZoomActivate && this.props.layer.zoomTo) {
      linkText = <React.Fragment>
        <a tabIndex={1} title={this.props.layer.name} alt={this.props.lang.STARBOARD_ELEMENT_TRIGGER_1+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_TRIGGER_2} className={"c4g-starboard-text"} onKeyPress={(event) => this.layerEnter(event)} onMouseUp={(event) => this.layerZoomTo(event)} onKeyPress={(event) => this.layerZoomToEnter(event)}><span className={"c4g-starboard-list-element__text"}>{this.props.layer.name}</span></a>
      </React.Fragment>

      linkSwitch = <a className={cssClass + " c4g-starboard-checkbox-icon"} onMouseUp={(event) => this.layerClick(event)}></a>
      }
    else {
      linkText = <a tabIndex={1} title={this.props.layer.name} alt={this.props.lang.STARBOARD_ELEMENT_TRIGGER_1+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_TRIGGER_2} className={cssClass} onKeyPress={(event) => this.layerEnter(event)} onMouseUp={(event) => this.layerClick(event)}><span className={"c4g-starboard-list-element__text"}>{this.props.layer.name}</span></a>;
    }

    if (objChilds && objChilds.length) {
      let span = <span alt={this.props.lang.STARBOARD_ELEMENT_CHILDS} className={cssConstants.ICON} onMouseUp={(event) => this.spanClick(event)}/>;

      return (
        <li data-layer-id={this.props.id} className={openClose + " c4g-starboard-list-element"}>
          {span}
          {stylePicture}
          {spanZoom}
          {linkText}
          {linkSwitch}
          <ul>
            {objChilds.map((item, id) => {
              if (this.props.byPassChilds || this.props.filterFunc(this.props.strFilter, item, this.props.layerStates.childStates[id])) {
                return <C4gStarboardLayerElement key={id} keyId={id} id={item.id} mapController={this.props.mapController}
                                          parentCallback={this.parentCallback}
                                          strFilter={this.props.strFilter}
                                          filterFunc={this.props.filterFunc}
                                          changeCollapseState={this.changeCollapseState}
                                          lang={this.props.lang}
                                          byPassChilds={this.props.byPassChilds || this.props.filterFunc(this.props.strFilter, item, false, false)}
                                          layerStates={this.props.layerStates.childStates[id]}
                                          layer={item}
                                          styleData={this.props.styleData}
                                          fnResize={this.props.fnResize}/>
              }

            })}
          </ul>
        </li>
      );
    }
    else {
      let layerClick = this.layerClick;
      if (this.props.layer.zoomTo) {
        layerClick = this.layerZoomTo;
        cssClass = "c4g-geojson-button";
        linkSwitch = null;
      }
      return (
          <li data-layer-id={this.props.id} tabIndex={1} className={openClose + " c4g-starboard-list-element"}>
            {stylePicture}
            {spanZoom}
            {linkText}
            {linkSwitch}
          </li>
      )
    }
  }

}