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

import React, { Component } from "react";
import {cssConstants} from "./../c4g-maps-constant.js";
import {C4gStarboardLayerElement} from "./c4g-starboard-layer-element";
import {Titlebar} from "./c4g-titlebar.jsx";

export class StarboardLayerswitcher extends Component {

  constructor(props) {
    super(props);
    const scope = this;

    this.setLayerFilter = this.setLayerFilter.bind(this);
    this.state = {
      initialized: false,
      layerFilter: ""
    };
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

  render() {
    const mapData = this.props.mapController.data;
    let layers, states;

    // deep clone arrays before passing them as arguments
    // otherwise we would modify the objects inside the props
    // [layers, states] = this.filterLayers(JSON.parse(JSON.stringify(this.props.objLayers)),
    //   JSON.parse(JSON.stringify(this.props.layerStates)));
    layers = this.props.objLayers;
    states = this.props.layerStates;
    if (!this.props.active) {
      return null;
    }
    return (
    <React.Fragment>
      <div className="contentHeadline">{this.props.headline}</div>
      <div className={"c4g-starboard-layertree-filter without-button"}>
        <input className={"c4g-starboard-layertree-filter-field"} type="text" onInput={this.setLayerFilter} placeholder={"\uf002"}/>
      </div>
      <div className={"c4g-content-layertree"}>
        <div className={cssConstants.STARBOARD_LAYERTREE}>
          <ul>
            {layers.map((item, id) => {

              // if (item.pid === this.props.mapController.data.id) //skip childs of layers
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