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
import {RouterInstruction} from "./c4g-router-instruction.jsx";
import {toHumanDistance, toHumanTime} from "./../c4g-router-time-conversions";

export default class RouterInstructionsContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let instructions = [];
    let time = "";
    let distance = "";
    let profile = "";

    if (this.props.routerInstructions && this.props.routerInstructions.instructions) {
      instructions = this.props.routerInstructions.instructions;
    }

    if (instructions.length === 0) {
      return ("");
    } else {
      // instructions present, container open
      return (
        <div className={this.props.className}>
          {this.props.header}
          {this.props.switcher}
          {instructions.map((item, index) => {
            return <RouterInstruction imgPath={item.type} instrText={item.instruction} instrDist={item.length} key={index} id={index} mapController={this.props.mapController} dataStart={item.begin_shape_index} dataEnd={item.end_shape_index} routerWaySource={this.props.routerWaySource} routerHintSource={this.props.routerHintSource}/>
          })}
        </div>
      );
    }
  }
}