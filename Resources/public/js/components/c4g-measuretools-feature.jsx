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
import {getLanguage} from "../c4g-maps-i18n";

export class MeasuredFeature extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const scope = this;
    return (
      <div>
        <div>
          <label htmlFor={"measureElement_" + this.props.idx}>Name: </label>
          <input type="text" name={"measureElement_" + this.props.idx} defaultValue={this.props.label}/>
        </div>
        {Object.keys(this.props.measuredValues).map(function(element, index) {
          let obj = scope.props.measuredValues[element];
          return (<p key={index}>
            <strong>{obj.description}</strong>
            <span>{obj.value + " m"}</span>
          </p>)
        })}
      </div>
    );
  }

}