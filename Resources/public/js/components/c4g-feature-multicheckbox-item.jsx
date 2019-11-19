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

export class FeatureFilterMultiCheckboxItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const scope = this;
        let checked = scope.props.checked.find((element) => element.identifier === scope.props.feature.identifier);
        return (
            <div className="c4g-filter-form-element">
                <label>
                    <input
                        type="radio"
                        checked={checked}
                        onClick={(evt) => {this.props.filterLayers(scope.props.feature.identifier, scope.props.parentId, scope.props.feature.value);}}
                        value={this.props.feature.identifier}
                    />
                    {this.props.feature.translation}
                </label>
            </div>
        );
    }
}