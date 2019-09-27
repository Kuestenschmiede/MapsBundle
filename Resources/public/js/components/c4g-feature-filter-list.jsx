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
        const scope = this;
        let form;
        if (this.props.open) {
            form =
                <form>
                    {this.props.feature.filters.map((feature, index) => {
                        return <FeatureFilterItem feature={feature} parentId={this.props.id} checked={this.props.checkedItem === feature.value} filterLayers={this.props.filterLayers} mapController={this.props.mapController} key={index}/>
                    })}
                </form>
        }
        return (
            <li>
                <strong onMouseUp={(evt) => this.props.setOpen(this.props.id)}>{this.props.feature.name}</strong>
                {form}
            </li>
        );
    }
}