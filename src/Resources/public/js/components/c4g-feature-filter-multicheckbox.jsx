/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
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
        let className, classNameText;
        if (this.props.feature.filters.length > 2) {
            if (this.props.open) {
                className = "c4g-open";
                form =
                    <form>
                        {this.props.feature.filters.map((feature, index) => {
                            let checked = !!(this.props.checkedItems.find((element) => element.identifier === feature.identifier && element.value === feature.value));
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

            className += " fi_wrapper fi_" + utils.removeUmlauts(this.props.feature.name);
            let liClass =  "c4g-item-checked c4g-item-"+utils.removeUmlauts(this.props.feature.name);
            return (
                <li className={liClass}>
                    <div className={className} onMouseUp={(evt) => {this.props.setOpen(this.props.id); evt.stopPropagation(); evt.preventDefault();}}><span/>{utils.decodeHTML(this.props.feature.name)}</div>
                    {numberSpan}
                    {form}
                </li>
            );
        }
        else {
            className = "fi_wrapper fi_" + utils.removeUmlauts(this.props.feature.name);
            classNameText = "fi_text fi_" + utils.removeUmlauts(this.props.feature.name) + "_text";
            let liClass =  "c4g-item-checked c4g-item-"+utils.removeUmlauts(this.props.feature.name);
            liClass += this.props.checkedItems.length === 0 ? "" : " clicked";
            let clickEvent;
            if (!this.props.feature.link) {
                clickEvent = (evt) => {
                    this.props.filterLayers(this.props.feature.filters[1].identifier, this.props.id, true);
                    evt.stopPropagation();
                    evt.preventDefault();
                }
            }
            else {
                clickEvent = (evt) => {
                    window.open(this.props.feature.link, '_self');
                }
            }
            let img = null;
            if (this.props.feature.image) {
                img = <img src={this.props.feature.image} title={this.props.feature.name} width={this.props.feature.width} height={this.props.feature.height}/>
            }
            return (
                <li className={liClass}>
                    <div className={className} onMouseUp={clickEvent}><span className={classNameText}>{img}{utils.decodeHTML(this.props.feature.name)}</span></div>
                </li>
            );
        }

    }
}