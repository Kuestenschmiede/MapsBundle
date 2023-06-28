/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, { Component } from "react";

export class RouterLayerSelection extends Component {

  constructor(props) {
    super(props);

    this.setLayer = this.setLayer.bind(this);
    this.setLayerValue = this.setLayerValue.bind(this);
    this.setLayerOrValue = this.setLayerOrValue.bind(this);
  }

  setLayer(event) {
    let layer = event.target.value;
    this.props.router.setLayer(parseInt(layer, 10));
  }

  setLayerValue(event) {
    let value = event.target.value;
    this.props.router.setLayerValue(value);
  }
  setLayerOrValue (event) {
    let value = JSON.parse(event.target.value);
    let currentLayer = this.props.router.state.mode === "route" ? this.props.router.state.layerRoute : this.props.router.state.layerArea;
    if (parseInt(value.id) !== parseInt(currentLayer)) {
      this.props.router.setLayer(parseInt(value.id, 10));
    }
    this.props.router.setLayerValue(value.name);
  }

  render() {
    const scope = this;
    let defaultLayer = 0;

    const arrLayers = scope.props.router.objLayers;
    let layerValueSelection = "";
    if (!this.props.router.props.mapController.data.layerChanger) {
      if (this.props.router.state.mode === "route") {
        defaultLayer = this.props.router.state.layerRoute;
      } else if (this.props.router.state.mode === "area") {
        defaultLayer = this.props.router.state.layerArea;
      }
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
              <select className="c4g-router-layer-selection" onChange={this.setLayer} value={defaultLayer}>
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
    else {
      if (this.props.router.state.mode === "route") {
        defaultLayer = JSON.stringify({id: this.props.router.state.layerRoute, name: this.props.router.state.layerValueRoute})
      } else if (this.props.router.state.mode === "area") {
        defaultLayer = JSON.stringify({id: this.props.router.state.layerArea, name: this.props.router.state.layerValueArea})
      }
      let options = [];
      if (Object.keys(this.props.layers).length > 1) {
        options = Object.keys(this.props.layers).map((id) => {
          let layer = arrLayers[id].layerData;
          if (Object.keys(this.props.layers[id]).length > 1) {
            return <optgroup key={id} style={{color: "var(--main-color)"}} label={layer.name}>
              {Object.keys(this.props.layers[id]).map((name) => {
                let option = this.props.layers[id][name];
                return <option key={name} style={{color: "var(--main-color)"}} value={JSON.stringify({id: id, name: name})}>{name}</option>
              })}
            </optgroup>;
          }
          else {
            return Object.keys(this.props.layers[id]).map((name) => {
              let option = this.props.layers[id][name];
              return <option key={name} style={{color: "var(--main-color)"}} value={JSON.stringify({id: id, name: name})}>{name}</option>
            })
          }

        });
      }
      else {
        options = Object.keys(this.props.layers).map((id) => {
          let layer = arrLayers[id].layerData;
          return Object.keys(this.props.layers[id]).map((name) => {
            let option = this.props.layers[id][name];
            return <option key={name} style={{color: "var(--main-color)"}} value={JSON.stringify({id: id, name: name})}>{name}</option>
          });
        });
      }

      return (
        <select className="c4g-router-layer-selection" onChange={this.setLayerOrValue} value={defaultLayer}>
          {options}
      </select>
      );
    }
  }
}