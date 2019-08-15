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
        this.state = {
            initialized: false,
            layers: []
        };
        let funcHook = function (itemData) {
            let arrLayers = [];
            let tempLayers = scope.props.mapController.proxy.layerController.arrLayers;
            for(let i = 0; i < itemData.length; i++) {
                arrLayers.push(tempLayers[itemData[i]]);
            }
            if (scope.updater.isMounted(scope)) {
                scope.setState({"layers": arrLayers});
            }
            else{
                scope.state.layers = arrLayers;
            }
        };
        props.mapController.proxy.hook_layer_loaded.push(funcHook)

    }

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
                        >
                        </button>
                    </div>
                </div>
                <div className={cssConstants.STARBOARD_CONTENT_CONTAINER}>
                    <div className="contentHeadline"></div>
                    <div className={cssConstants.STARBOARD_CONTENT_LAYERSWITCHER}>
                        <div className={cssConstants.STARBOARD_LAYERTREE}>
                            <ul>
                                {this.state.layers.map(item => {
                                    if (item.pid === this.props.mapController.data.id) //skip childs of layers
                                        return <C4gStarboardLayerElement key={item.id} id={item.id} mapController={this.props.mapController}
                                                                  childs={item.childs}
                                                                  name={item.name}></C4gStarboardLayerElement>
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