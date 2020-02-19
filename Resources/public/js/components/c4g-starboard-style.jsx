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
import Feature from 'ol/Feature';
import {Point} from "ol/geom";
import {cssConstants} from "./../c4g-maps-constant.js";


export class C4gStarboardStyle extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        // Create label for interaction-trigger
        let styleTriggerLabel = null;
        // @TODO use css-class for dimensions

        let locstyle = this.props.styleData.arrLocStyles[this.props.styleId];
        let styleData = locstyle.locStyleArr;
        let stylor = locstyle.style && locstyle.style(new Feature({geometry: new Point(0,0)}), "EPSG:4326") ? locstyle.style(new Feature({geometry: new Point(0,0)}), "EPSG:4326"): null;
        let styl0r = Array.isArray(stylor) ? stylor[0]: stylor;
        let styleImage = styl0r.getImage && typeof styl0r.getImage === "function" && styl0r.getImage() ? styl0r.getImage(): null;
        // let styleImage = locstyle.style && locstyle.style(new Feature({geometry: new Point(0,0)}), "EPSG:4326") ? locstyle.style(new Feature({geometry: new Point(0,0)}), "EPSG:4326").getImage(): null;
        let styleType = styleData ? styleData.styletype : "default";
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
                styleIcon = <img src={iconSrc} style={{height: 16, width: 16}} />;
            } else if (styleImage && styleImage.getSrc()) {
                styleIcon = <img src={styleImage.getSrc()} style={{height: 16, width: 16}} />
            }
            styleTriggerLabel =  <span className={cssConstants.STARBOARD_LOCSTYLE}>{styleIcon}</span>;
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
            let styleElements = {
                width : '16px',
                height : '16px',
                "--var-color" : styl0r.getFill().getColor(),
                "--var-bordercolor" : '1px solid ' + styl0r.getStroke().getColor()
            };
            styleTriggerLabel = <span className={cssClass} style={styleElements}/>;

        }
        return styleTriggerLabel;
    }

}