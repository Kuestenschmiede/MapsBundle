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
import {Control} from "ol/control";
import {getLanguage} from "./../c4g-maps-i18n";
import {cssConstants} from "./../c4g-maps-constant";

export class GeoSearchResults extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const scope = this;
    return (
      <div className={"c4g-geosearch-results " + this.props.className}>
        <ul id={"resultcontainer"}>
          {this.props.results.map(function(element, index) {
            return (<li key={index}><button key={index} id={index} className={"searchResultButton"} name={element} onMouseUp={() => scope.props.zoomFunc(index)}>{element}</button></li>)
          })}
        </ul>
      </div>
    );
  }

}