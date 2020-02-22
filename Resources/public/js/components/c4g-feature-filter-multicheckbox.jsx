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

import React, {Component} from "react";
import {utils} from "../c4g-maps-utils"
import {FeatureFilterMultiCheckboxItem} from "./c4g-feature-multicheckbox-item.jsx";

export class FeatureFilterMultiCheckbox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const scope = this;
        let form = null;
        let className;
        if (this.props.open) {
            className = "c4g-open";
            form =
                <form>
                    {this.props.feature.filters.map((feature, index) => {
                        let checked = !!(this.props.checkedItems.find((element) => element.identifier === feature.identifier));
                        return <FeatureFilterMultiCheckboxItem feature={feature} parentId={this.props.id} checked={checked} filterLayers={this.props.filterLayers} key={index}/>
                    })}
                </form>
        }
        else {
            className = "c4g-close";
        }
        let numberSpan = null;
        if (this.props.checkedItems.length > 0) {
            let number = this.props.checkedItems[0].identifier === "all" ? this.props.checkedItems.length -1 : this.props.checkedItems.length;
            numberSpan = <span className={"sum"}> {number} </span>
        }

        className += " fi_" + utils.removeUmlauts(this.props.feature.name);
        let liClass =  "c4g-item-checked";
        return (
            <li className={liClass}>
                <strong className={className} onMouseUp={(evt) => {this.props.setOpen(this.props.id); evt.stopPropagation(); evt.preventDefault();}}><span/>{utils.decodeHTML(this.props.feature.name)}</strong>
                {numberSpan}
                {form}
            </li>
        );
    }
}