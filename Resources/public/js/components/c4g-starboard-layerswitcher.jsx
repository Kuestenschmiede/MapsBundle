/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	    Küstenschmiede GmbH Software & Design
 * @link            https://www.con4gis.org
 *
 */

import React, {Component} from "react";
import {cssConstants} from "./../c4g-maps-constant.js";
import {C4gStarboardLayerElement} from "./c4g-starboard-layer-element";

export class StarboardLayerswitcher extends Component {

  constructor(props) {
    super(props);
    const scope = this;

    this.setLayerFilter = this.setLayerFilter.bind(this);
    this.toggleAllLayers = this.toggleAllLayers.bind(this);
    this.state = {
      initialized: false,
      layerFilter: ""
    };
    this.buttonEnabled = false;
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

  filterFunc(strFilter, layer, digDeeper = true) {
    let show = false;
    if (layer.name.toLowerCase().indexOf(strFilter) !== -1
        || layer.name.toUpperCase().indexOf(strFilter.toUpperCase()) !== -1) {
      show = true;
    } else if (digDeeper) {
      for (let childId in layer.childs) {
        if (layer.childs.hasOwnProperty(childId) && !show) {
          show = this.filterFunc(strFilter, layer.childs[childId]);
        }
      }
    }
    return show;
  }

  toggleAllLayers() {
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

    if (!scope.buttonEnabled) {
      states = activateLayers(layers, states);
    } else {
      states = deactivateLayers(layers, states);
    }

    this.props.parentCallback(states);
  }

  render() {
    let layers, states, filter;
    layers = this.props.objLayers;
    states = this.props.layerStates;
    if (!this.props.active) {
      return null;
    }

    filter = '';
    if (this.props.mapController.data.layerswitcher.filter) {
      filter = <div className={"c4g-starboard-layertree-filter without-button"}>
               <input className={"c4g-starboard-layertree-filter-field"} type="text" onInput={this.setLayerFilter} placeholder={"\uf002"}/>
               </div>
    }

    let headline = "";
    if (this.props.mapController.data.starboard.button) {
      headline = <a className={"c4g-starboard-headline-link " + (this.buttonEnabled ? "c4g-active" : "c4g-inactive")} onMouseUp={this.toggleAllLayers}>{this.props.headline}</a>;
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
              if (this.filterFunc(this.state.layerFilter, item)) {
                return <C4gStarboardLayerElement key={id} id={id} mapController={this.props.mapController}
                                                 parentCallback={this.callbackFunction}
                                                 layer={item}
                                                 styleData={this.props.styleData}
                                                 layerStates={states[id]}
                                                 byPassChilds={this.filterFunc(this.state.layerFilter, item, false)}
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