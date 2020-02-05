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

  filterMatches(string) {
    if (string.toLowerCase().indexOf(this.state.layerFilter) !== -1
      || string.toLowerCase().indexOf(this.state.layerFilter.toLowerCase()) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  filterLayers(layers, states) {
    let returnLayers = [];
    let returnStates = [];
    if (this.state.layerFilter === "") {
      return [layers, states];
    }
    for (let i = 0; i < layers.length; i++) {
      let currentLayer = layers[i];
      // check if layer matches
      if (this.filterMatches(currentLayer.name)) {
        returnLayers.push(layers[i]);
        returnStates.push(states[i]);
      } else {
        if (currentLayer.childs && currentLayer.childs.length > 0) {
          // layer has childs
          let checkedChilds, checkedStates;
          [checkedChilds, checkedStates] = this.filterLayers(currentLayer.childs, states[i].childStates);
          if (checkedChilds.length > 0) {
            layers[i].childs = checkedChilds;
            states[i].childStates = checkedStates;
            returnLayers.push(layers[i]);
            returnStates.push(states[i]);
          }
        } else {
          // has no childs and does not match; don't add it
        }
      }
    }
    return [returnLayers, returnStates];
  }

  render() {

    const mapData = this.props.mapController.data;
    let layers, states;

    // deep clone arrays before passing them as arguments
    // otherwise we would modify the objects inside the props
    [layers, states] = this.filterLayers(JSON.parse(JSON.stringify(this.props.objLayers)),
      JSON.parse(JSON.stringify(this.props.layerStates)));
    return (
    <React.Fragment>
      <div className="contentHeadline"/>
      <div className={"c4g-content-layertree"}>
        <div className={cssConstants.STARBOARD_LAYERTREE}>
          <ul>
            {layers.map((item, id) => {
              // if (item.pid === this.props.mapController.data.id) //skip childs of layers
                return <C4gStarboardLayerElement key={id} id={id} mapController={this.props.mapController}
                                                 parentCallback={this.callbackFunction}
                                                 layer={item}
                                                 layerStates={states[id]}
                                                 fnResize={this.props.fnResize}/>;
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
    );
  }
}