/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import {utils} from "../c4g-maps-utils";

export class FeatureFilterItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const scope = this;
        return (
            <div className="c4g-filter-form-element">
                <label>
                    <input
                        type="radio"
                        onChange={(evt) => {this.props.filterLayers(scope.props.feature.identifier, scope.props.parentId, scope.props.feature.value, scope.props.value.field);}}
                        checked={scope.props.checked.identifier === scope.props.feature.identifier}
                        value={this.props.feature.identifier}
                    />
                    {utils.decodeHTML(this.props.feature.translation)}
                </label>
            </div>
        );
    }
}