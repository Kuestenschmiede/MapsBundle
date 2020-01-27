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

    this.state = {
      initialized: false
    };
  }

  callbackFunction = (key, newState) => {
    let newStates = this.props.layerStates;
    newStates[key] = newState;
    this.props.parentCallback(newStates)
  };
  render() {
    let closeStarboard = function(){
      let button = jQuery("." + cssConstants.STARBOARD_CONTROL + "> button");
      button.trigger('click');
    };
    const mapData = this.props.mapController.data;
    return (
      <div className={cssConstants.STARBOARD_WRAPPER}>
        <Titlebar wrapperClass={"c4g-starboard-header"} headerClass={cssConstants.STARBOARD_HEADLINE}
          header={mapData.starboard.label || "Starboard"} closeBtnClass={cssConstants.STARBOARD_CLOSE} closeBtnCb={closeStarboard}>
        </Titlebar>
        <div className={cssConstants.CONTROL + " " + cssConstants.STARBOARD_BUTTONBAR}>

        </div>
        <div className={cssConstants.STARBOARD_CONTENT_CONTAINER}>
          <div className="contentHeadline"/>
          <div className={cssConstants.STARBOARD_CONTENT_LAYERSWITCHER}>
            <div className={cssConstants.STARBOARD_LAYERTREE}>
              <ul>
                {this.props.objLayers.map((item, id) => {
                  // if (item.pid === this.props.mapController.data.id) //skip childs of layers
                    return <C4gStarboardLayerElement key={id} id={id} mapController={this.props.mapController}
                                                     parentCallback={this.callbackFunction}
                                                     layer={item}
                                                     layerStates={this.props.layerStates[id]}
                                                     fnResize={this.props.fnResize}/>;
                })}
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}