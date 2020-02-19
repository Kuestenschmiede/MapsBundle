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
import {utils} from "../c4g-maps-utils"

export class FeatureFilterMultiCheckboxItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="c4g-filter-form-element">
                <label>
                    <input
                        type="checkbox"
                        checked={this.props.checked}
                        onChange={(evt) => {evt.stopPropagation()}}
                        onClick={(evt) => {this.props.filterLayers(this.props.feature.identifier, this.props.parentId, this.props.feature.value);}}
                        value={this.props.feature.identifier}
                    />
                    {utils.decodeHTML(this.props.feature.translation)}
                </label>
            </div>
        );
    }
}