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

export class StarboardLayerswitcher extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    let objLayerStates = {};
    for (let i = 0; i < props.objLayers.length; i++) {
      if (props.objLayers.hasOwnProperty(i)) {
        let layer = props.objLayers[i];
        let childs = false;
        if (layer.childs.length > 0) {
          childs = scope.addChildStates(layer);
        }
        else if (layer.content && layer.content.length > 0) {
          childs = scope.addContentChildStates(layer)
        }
        objLayerStates[layer.id] = {
          name: layer.name,
          hide: !!layer.hide,
          childs: childs
        };
      }
    }
    this.state = {
      initialized: false,
      layerStates: objLayerStates
    };
  }
  // componentDidUpdate() {
  //   let objLayerStates = this.state.layerStates;
  //   this.didUpdate = false;
  //   for (let i = 0; i < this.props.objLayers.length; i++) {
  //     if (this.props.objLayers.hasOwnProperty(i)) {
  //       let layer = this.props.objLayers[i];
  //       if (!this.state.layerStates[layer.id]) {
  //         this.didUpdate = true;
  //         let childs = false;
  //         if (layer.childs.length > 0) {
  //           childs = this.addChildStates(layer);
  //         }
  //         else if (layer.content && layer.content.length > 0) {
  //           childs = this.addContentChildStates(layer)
  //         }
  //         objLayerStates[layer.id] = {
  //           name: layer.name,
  //           hide: !!layer.hide,
  //           childs: childs
  //         };
  //       }
  //     }
  //     // if (this.updater.isMounted(this)) {
  //     //   this.setState({
  //     //     "layers": arrLayers,
  //     //     "layerStates": objLayerStates
  //     //   });
  //     // }
  //     // else{
  //     //   scope.state.layers = arrLayers;
  //     //   scope.state.layerStates = objLayerStates;
  //     // }
  //   };
  //   // window.c4gMapsHooks.proxy_layer_drawn.push(funcHook)
  //
  // };

  // componentDidMount() {
  //   if (this.props.open) {
  //     // ToDo there must be a better solution to this...
  //     window.setTimeout(() => this.props.openfunc(), 500);
  //   }
  //   if (this.didUpdate) {
  //     this.setState({layerStates: objLayerStates});
  //   }
  // }

  //
  // addChildStates(layerElement) {
  //   let objChildStates = {};
  //   for (let i = 0; i < layerElement.childs.length; i++) {
  //     let childs = false;
  //     if (layerElement.childs[i].childs && layerElement.childs[i].childs.length > 0) {
  //       childs = this.addChildStates(layerElement.childs[i]);
  //     }
  //     else if (layerElement.childs[i].content && layerElement.childs[i].content.length > 0) {
  //       childs = this.addContentChildStates(layerElement.childs[i])
  //     }
  //     objChildStates[layerElement.childs[i].id] = {
  //       name: layerElement.childs[i].name,
  //       hide: !!layerElement.childs[i].hide,
  //       childs: childs,
  //       content: layerElement.childs[i].content[0],
  //       contentFeature : false
  //     };
  //   }
  //   return objChildStates;
  // };
  // addContentChildStates(layerElement) {
  //   let objChildStates = {};
  //   if (layerElement.content[0].combinedJSON) {
  //     let vectorLayer = layerElement.vectorLayer
  //     if (vectorLayer) {
  //       for(let j = 0; j < layerElement.content.length; j++) {
  //         for (let i = 0; i < layerElement.content[j].data.features.length; i++) {
  //           let feature = layerElement.content[j].data.features[i];
  //           let vectorSource = this.getSource(vectorLayer, j);
  //           console.log(vectorSource.getFeatures());
  //           let olFeature = vectorSource.getFeatureById(feature.properties.id);
  //           objChildStates[feature.properties.id] = {
  //             name: feature.properties.title,
  //             hide: !!layerElement.hide,
  //             childs: false,
  //             content: false,
  //             contentFeature : olFeature,
  //             identifier: j
  //           }
  //         }
  //       }
  //
  //     }
  //   }
  //
  //   return objChildStates;
  // };

  getSource = (layer, identifier = 0) => {
    if (layer.getSource && layer.getSource()) {
      let source = layer.getSource();
      if (source.getSource && source.getSource()) {
        return this.getSource(source);
      }
      else {
        return source;
      }
    }
    else if (layer.getLayers && layer.getLayers()) {
      let layers = layer.getLayers().getArray();
      return this.getSource(layers[identifier])
    }
  };

  callbackFunction = (childData) => {
    this.setState({layerStates: childData})
  };

  render() {
    let closeStarboard = function(){
      let button = jQuery("." + cssConstants.STARBOARD_CONTROL + "> button");
      button.trigger('click');
    };
    return (
      <div className={cssConstants.STARBOARD_WRAPPER}>
        <div className={cssConstants.STARBOARD_TITLEBAR}>
          <div className={cssConstants.CONTROL + " " + cssConstants.STARBOARD_BUTTONBAR}>
            <button
              className={cssConstants.STARBOARD_CLOSE}
              onMouseUp={closeStarboard}
            />
          </div>
        </div>
        <div className={cssConstants.STARBOARD_CONTENT_CONTAINER}>
          <div className="contentHeadline"/>
          <div className={cssConstants.STARBOARD_CONTENT_LAYERSWITCHER}>
            <div className={cssConstants.STARBOARD_LAYERTREE}>
              <ul>
                {this.props.objLayers.map((item, id) => {
                  // if (item.pid === this.props.mapController.data.id) //skip childs of layers
                    return <C4gStarboardLayerElement key={id} mapController={this.props.mapController}
                                                     parentCallback={this.callbackFunction}
                                                     layer={item}
                                                      fnResize={this.props.fnResize}/>;
                  return null;
                })}
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}