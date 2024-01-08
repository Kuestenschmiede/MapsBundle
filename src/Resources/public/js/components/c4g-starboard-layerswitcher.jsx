/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import {cssConstants} from "./../c4g-maps-constant.js";
import {C4gStarboardLayerElement} from "./c4g-starboard-layer-element";

export class StarboardLayerswitcher extends Component {

  constructor(props) {
    super(props);
    const scope = this;

    let index = props.mapController.arrComponents.findIndex(element => element.name === "layerswitcher");
    props.mapController.arrComponents[index].component = this;
    this.setLayerFilter = this.setLayerFilter.bind(this);
    this.toggleAllLayers = this.toggleAllLayers.bind(this);
    this.changeCollapseState = this.changeCollapseState.bind(this);
    this.state = {
      initialized: false,
      layerFilter: ""
    };
    // this.buttonEnabled = this.getInitialStates();
  }

  getInitialStates = () => {
    this.initialCounterOff = 0;
    this.initialCounterOn = 0;
    for (let i in this.props.layerStates) {
      if (this.props.layerStates.hasOwnProperty(i)) {
        if (this.props.layerStates[i].active) {
          this.initialCounterOn++;
        }
        else {
          this.initialCounterOff++;
        }
        if (this.props.layerStates[i].childStates) {
          for (let j in this.props.layerStates[i].childStates) {
            if (this.props.layerStates[i].childStates.hasOwnProperty(j)) {
              this.getInitialStateChild(this.props.layerStates[i].childStates[j])
            }
          }
        }
      }
    }
    return this.initialCounterOn > this.initialCounterOff;
  }
  getInitialStateChild (child) {
    if (child.active) {
      this.initialCounterOn++;
    }
    else {
      this.initialCounterOff++;
    }
    if (child.childStates) {
      for (let i in child.childStates) {
        if (child.childStates.hasOwnProperty(i)) {
          this.getInitialStateChild(child.childStates[i]);
        }
      }
    }
  }

  callbackFunction = (key, newState) => {
    let newStates = this.props.layerStates;
    newStates[key] = newState;
    this.props.parentCallback(newStates)
  };

  setLayerFilter() {
    let filterValue = jQuery(".c4g-starboard-layertree-filter-field").val() || ""; //fallback
    this.setState({layerFilter: filterValue});
  }

  filterFunc(strFilter, layer, state = {}, digDeeper = true) {
    let show = false;
    if (layer && layer.name && (layer.name.toLowerCase().indexOf(strFilter.toLowerCase()) !== -1
        || layer.name.toUpperCase().indexOf(strFilter.toUpperCase()) !== -1)) {
      show = true;
      if (strFilter && state) {
        state.collapsed = false;
      }
    } else if(layer.tags && layer.tags.find((element) => {return element.toLowerCase().indexOf(strFilter.toLowerCase()) !== -1})){
      show = true
      if (strFilter && state) {
        state.collapsed = false;
      }
    } else if (digDeeper) {
      for (let childId in layer.childs) {
        if (layer.childs.hasOwnProperty(childId) && !show) {
          show = this.filterFunc(strFilter, layer.childs[childId], state.childStates[childId]);
          if (strFilter && show && state) {
            state.collapsed = false;
          }
        }
      }
    }
    return show;
  }

  toggleAllLayers(bool = null, ids = []) {
    const scope = this;
    let states = this.props.layerStates;
    let layers = this.props.objLayers;
    function activateLayers(layers, states) {
      for (let i = 0; i < states.length; i++) {
        if (!states[i].active) {
          scope.props.mapController.proxy.layerController.show(layers[i].loader, layers[i].features || layers[i].vectorLayer);
        }
        states[i].active = true;
        if (states[i].childStates && states[i].childStates.length > 0) {
          states[i].childStates = activateLayers(layers[i].childs, states[i].childStates);
        }
      }
      scope.buttonEnabled = true;
      return states;
    }
    function deactivateLayers(layers, states) {
      for (let i = 0; i < states.length; i++) {
        if (ids.includes(layers[i].id)) {
          break;
        }
        if (states[i].active) {
          scope.props.mapController.proxy.layerController.hide(layers[i].loader, layers[i].features || layers[i].vectorLayer);
        }
        states[i].active = false;
        if (states[i].childStates && states[i].childStates.length > 0) {
          states[i].childStates = deactivateLayers(layers[i].childs, states[i].childStates);
        }
      }
      scope.buttonEnabled = false;
      return states;
    }
    function activateSpecificLayers(layers, states) {
      for (let i = 0; i < states.length; i++) {
        if (ids.includes(layers[i].id)) {
          if (!states[i].active) {
            scope.props.mapController.proxy.layerController.show(layers[i].loader, layers[i].features || layers[i].vectorLayer);
          }
          states[i].active = true;
        }
        else {
          if (states[i].active) {
            scope.props.mapController.proxy.layerController.hide(layers[i].loader, layers[i].features || layers[i].vectorLayer);
          }
          states[i].active = false;
        }
        if (states[i].childStates && states[i].childStates.length > 0) {
          states[i].childStates = activateSpecificLayers(layers[i].childs, states[i].childStates);
        }
      }
      scope.buttonEnabled = !scope.buttonEnabled;
      return states;
    }
    if (bool) {
      states = activateSpecificLayers(layers, states);
    }
    else {
      if (scope.buttonEnabled) {
        states = deactivateLayers(layers, states);
      } else {
        states = activateLayers(layers, states);
      }
    }

    this.props.parentCallback(states);
  }
  changeCollapseState(id, state) {

  }
  render() {
    if (this.props.layerStates && this.props.layerStates.length > 0 && !(this.initialCounterOff && this.initialCounterOn)) {
      this.buttonEnabled = this.getInitialStates();
    }

    let layers, states, filter;
    layers = this.props.objLayers;
    states = this.props.layerStates;
    if (!this.props.active) {
      return null;
    }

    filter = '';
    if (this.props.mapController.data.layerswitcher.filter) {
      let placeholder = this.props.mapController.data.layerswitcher.filter_placeholder || "\uf002";
      filter = <div className={"c4g-starboard-layertree-filter without-button"}>
               <input className={"c4g-starboard-layertree-filter-field"} type="text" onInput={this.setLayerFilter} placeholder={placeholder}/>
               </div>
    }

    let headline = "";
    if (this.props.mapController.data.starboard.button) {
      headline = <a className={"c4g-starboard-headline-link " + (this.buttonEnabled ? "c4g-active" : "c4g-inactive")} onMouseUp={this.toggleAllLayers}>{this.props.headline || this.props.lang.LAYERSWITCHER_TOGGLE_ALL}</a>;
    } else {
      headline = <div className="contentHeadline">{this.props.headline}</div>;
    }

    return (
    <React.Fragment>
      {headline}
      {filter}
      <div className={"c4g-content-layertree"}>
        <div className={cssConstants.STARBOARD_LAYERTREE}>
          <ul>
            {layers.map((item, id) => {
              if (this.filterFunc(this.state.layerFilter, item, states[id])) {
                return <C4gStarboardLayerElement key={id} keyId={id} id={item.id} mapController={this.props.mapController}
                                                 parentCallback={this.callbackFunction}
                                                 layer={item}
                                                 styleData={this.props.styleData}
                                                 changeCollapseState={this.props.changeCollapseState}
                                                 layerStates={states[id]}
                                                 lang={this.props.lang}
                                                 byPassChilds={this.filterFunc(this.state.layerFilter, item,false, false)}
                                                 strFilter={this.state.layerFilter}
                                                 filterFunc={this.filterFunc}
                                                 fnResize={this.props.fnResize}/>;
              }
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
    );
  }
}