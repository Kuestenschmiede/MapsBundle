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
import {HorizontalPanel} from "./c4g-horizontal-panel.jsx";

export class FeatureFilter extends HorizontalPanel {
  constructor(props) {
    super(props);

    this.state.filters = {};
    this.loadFilters();
  }

  render() {
    return (
      <div>

      </div>
    );
  }

  loadFilters() {
    const scope = this;
    let url = "con4gis/filterService/" + this.props.mapController.data.id;
    fetch(url).then(function (response) {
      return response.json().then(function(jsonData) {
        jsonData = JSON.parse(jsonData);
        scope.setState({filters: jsonData}, () => {console.log(scope.state.filters)})
      });
    })
  }

  filterLayers() {

  }

}