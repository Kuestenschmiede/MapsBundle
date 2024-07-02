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
import Feature from 'ol/Feature';
import {Point} from "ol/geom";
import {cssConstants} from "./../c4g-maps-constant.js";
import {utils} from "../c4g-maps-utils";


export class C4gStarboardStyle extends Component {
    constructor(props) {
        super(props);
    }
    enterEvent (e) {
        if (e.which === 13) {
            this.props.clickEvent(e);
        }
    }
    render() {

        // Create label for interaction-trigger
        let styleTriggerLabel = null;
        let locstyle = this.props.styleData.arrLocStyles[this.props.styleId];
        let styleData = locstyle.locStyleArr;
        let stylor = locstyle.style && locstyle.style(new Feature({geometry: new Point(0,0)}), "EPSG:4326") ? locstyle.style(new Feature({geometry: new Point(0,0)}), "EPSG:4326"): null;
        let styl0r = Array.isArray(stylor) ? stylor[0]: stylor;
        let styleType = styleData ? styleData.styletype : "default";
        let tooltip = this.props.tooltip || "";
        if (styleData && (styleType === "cust_icon" || styleType === "cust_icon_svg" || styleType === "photo")) {
            let styleIcon = null;
            let iconSrc;
            if ((styleData.icon_src && styleData.icon_src.indexOf('.') !== -1) || (styleData.svgSrc && styleData.svgSrc.indexOf('.') !== -1)) {
                if (styleType === "cust_icon" || styleType === "photo") {
                    iconSrc = styleData.icon_src;
                }
                else {
                    iconSrc = styleData.svgSrc;
                }
                styleIcon = <img src={iconSrc} style={{height: 25, width: 25}} />;
            } else if (styl0r) {
                let styleImage = styl0r.getImage && typeof styl0r.getImage === "function" && styl0r.getImage() ? styl0r.getImage(): null;
                if (styleImage && styleImage.getSrc()) {
                    styleIcon = <img src={styleImage.getSrc()} style={{height: 25, width: 25}}/>
                }
                else {
                    return null;
                }
            }
            if (this.props.clickEvent) {
                styleTriggerLabel = <span tabIndex={1} className={cssConstants.STARBOARD_LOCSTYLE} title={tooltip} onKeyPress={(event) => this.enterEvent(event)} onMouseUp={(event)=> this.props.clickEvent(event)}>{styleIcon}</span>;
            }
            else {
                styleTriggerLabel = <span className={cssConstants.STARBOARD_LOCSTYLE} title={tooltip}>{styleIcon}</span>;
            }
        } else {
            let cssClass;
            switch (styleType) { // 'point', 'square', 'star', 'x', 'cross', 'triangle'
                case "point":
                    cssClass = cssConstants.STARBOARD_LOCSTYLE_POINT;
                    break;
                case "square":
                    cssClass = cssConstants.STARBOARD_LOCSTYLE_SQUARE;
                    break;
                case "star":
                    cssClass = cssConstants.STARBOARD_LOCSTYLE_STAR;
                    break;
                case "x":
                    cssClass = cssConstants.STARBOARD_LOCSTYLE_X;
                    break;
                case "cross":
                    cssClass = cssConstants.STARBOARD_LOCSTYLE_CROSS;
                    break;
                case "triangle":
                    cssClass = cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;
                    break;
                default:
                    cssClass= cssConstants.STARBOARD_LOCSTYLE;
                    break;
            }
            let color, bordercolor;
            if (styl0r && styl0r.getFill() && styl0r.getStroke()) {
                color = styl0r.getFill().getColor();
                bordercolor = styl0r.getStroke().getColor();
            }
            else if (styleData && styleData.fillcolor && styleData.strokecolor) {
                color = utils.getRgbaFromHexAndOpacity(styleData.fillcolor[0], styleData.fillcolor[1]);
                bordercolor = utils.getRgbaFromHexAndOpacity(styleData.strokecolor[0], styleData.strokecolor[1])
            }
            let styleElements = {
                "--var-color" : color,
                "--var-bordercolor" : bordercolor
            };
            if (this.props.clickEvent) {
                styleTriggerLabel = <span className={cssClass} style={styleElements} title={tooltip} onMouseUp={(event)=> this.props.clickEvent(event)}/>;
            }
            else {
                styleTriggerLabel = <span className={cssClass} style={styleElements} title={tooltip}/>;
            }
        }
        return styleTriggerLabel;
    }

}