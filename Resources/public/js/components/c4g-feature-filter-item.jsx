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
import {Vector, Group} from "ol/layer";
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';

export class FeatureFilterItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const scope = this;
        return (
            <div className="form-check">
                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        onChange={(evt) => this.props.filterLayers(scope.props.feature.value)}
                        value={this.props.feature.value}
                        className="form-check-inputs"
                    />
                    {this.props.feature.translation}
                </label>
            </div>
        );
    }
}