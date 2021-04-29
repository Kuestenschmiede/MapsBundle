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

export class RouterLayerSelection extends Component {

  constructor(props) {
    super(props);

    this.setLayer = this.setLayer.bind(this);
    this.setLayerValue = this.setLayerValue.bind(this);
  }

  setLayer(event) {
    let layer = event.target.value;
    this.props.router.setLayer(parseInt(layer, 10));
  }

  setLayerValue(event) {
    let value = event.target.value;
    this.props.router.setLayerValue(value);
  }

  render() {
    const scope = this;
    let defaultLayer = 0;
    if (this.props.router.state.mode === "route") {
      defaultLayer = this.props.router.state.layerRoute;
    } else if (this.props.router.state.mode === "area") {
      defaultLayer = this.props.router.state.layerArea;
    }
    const arrLayers = scope.props.router.objLayers;
    let layerValueSelection = "";
    if (this.props.layers && (Object.keys(this.props.layers[defaultLayer]).length > 1)) {
      layerValueSelection = <div className={"c4g-router-layer-value-selection"}>
        {Object.keys(this.props.layers[defaultLayer]).map((name) => {
          return <button className={this.props.activeLayerValue === name ? "c4g-active" : "c4g-inactive"} onMouseUp={this.setLayerValue} key={this.props.layers[defaultLayer][name].mapLabel} value={name} title={name}>{name}</button>
        })}
      </div>;
    }

    if (this.props.layers && (Object.keys(this.props.layers).length > 1)) {
      return (
        <React.Fragment>
          <select className="c4g-router-layer-selection" onChange={this.setLayer} defaultValue={defaultLayer}>
            {Object.keys(this.props.layers).map((id) => {
              let layer = arrLayers[id].layerData;

              return <option key={id} value={id}>{layer.name}</option>
            })}
          </select>
          {layerValueSelection}
        </React.Fragment>
      );
    } else {
      return (<React.Fragment>{layerValueSelection}</React.Fragment>);
    }
  }
}