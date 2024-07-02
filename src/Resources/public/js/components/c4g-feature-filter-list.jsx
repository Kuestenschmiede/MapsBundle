/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import {utils} from "../c4g-maps-utils"
import {FeatureFilterItem} from "./c4g-feature-filter-item.jsx";

export class FeatureFilterList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const scope = this;
        let form = null;
        let className = "";
        let classNameText = "";
        if (this.props.feature.filters.length > 2) {
            if (this.props.open) {
                className = "c4g-open";
                form =
                    <form>
                        {this.props.feature.filters.map((feature, index) => {
                            return <FeatureFilterItem feature={feature} parentId={this.props.id} checked={this.props.checkedItem} filterLayers={this.props.filterLayers} key={index}/>
                        })}
                    </form>
            }
            else {
                className = "c4g-close";
            }
            className += " c4g-filter-item fi_" + utils.removeUmlauts(this.props.feature.name);
            classNameText = "c4g-filter-item-text fi_" + utils.removeUmlauts(this.props.feature.name) + "_text";

            let liClass = this.props.checkedItem.identifier === "all c4g-item-"+utils.removeUmlauts(this.props.feature.name) ? "" : "c4g-item-checked c4g-item-"+utils.removeUmlauts(this.props.feature.name);
            return (
                <li className={liClass}>
                    <strong className={className} onMouseUp={(evt) => {this.props.setOpen(this.props.id); evt.stopPropagation(); evt.preventDefault();}} className={classNameText} ><span/>{utils.decodeHTML(this.props.feature.name)}</strong>
                    {form}
                </li>
            );
        }
        else {
            className = "c4g-filter-item fi_" + utils.removeUmlauts(this.props.feature.name);
            classNameText = "c4g-filter-item-text fi_" + utils.removeUmlauts(this.props.feature.name) + "_text";
            let liClass = "c4g-item-checked c4g-item-"+utils.removeUmlauts(this.props.feature.name);
            liClass += this.props.checkedItem.identifier === "all" ? "" : " clicked";
            let img = null;
            let clickEvent = null;
            if (!this.props.feature.link) {
                clickEvent = (evt) => {
                    this.props.filterLayers(this.props.feature.filters[1].identifier !== this.props.checkedItem.identifier ? this.props.feature.filters[1].identifier : "all", this.props.id, this.props.feature.filters[1].identifier !== this.props.checkedItem.identifier ? this.props.feature.filters[1].value :undefined, this.props.feature.filters[1].identifier !== this.props.checkedItem.identifier ? this.props.feature.filters[1].field : undefined);
                    evt.stopPropagation();
                    evt.preventDefault()
                };
            }
            else {
                clickEvent = (evt) => {
                    window.open(this.props.feature.link, "_self");
                }
            }
            if (this.props.feature.image) {
                img = <img src={this.props.feature.image} title={this.props.feature.name} width={this.props.feature.width} height={this.props.feature.height}/>;
            }
            return (<li className={liClass}>
                <strong className={className} onMouseUp={clickEvent}><span className={classNameText}>{img}{utils.decodeHTML(this.props.feature.name)}</span></strong>
            </li>);
        }
    }

}