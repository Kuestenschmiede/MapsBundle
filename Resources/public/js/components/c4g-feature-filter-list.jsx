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
import {FeatureFilterItem} from "./c4g-feature-filter-item.jsx";

export class FeatureFilterList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <strong>{this.props.feature.name}</strong>
                <form>
                    {this.props.feature.filters.map((feature, index) => {
                        return <FeatureFilterItem feature={feature} parentId={this.props.id} checkedItem={this.props.checkedItem} filterLayers={this.props.filterLayers} mapController={this.props.mapController} key={index}/>
                    })}
                </form>
            </li>
        );
    }
}