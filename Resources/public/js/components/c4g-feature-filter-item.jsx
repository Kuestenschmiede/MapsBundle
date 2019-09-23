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
import {Vector, Group} from "ol/layer";
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';

export class FeatureFilterItem extends Component {
    constructor(props) {
        super(props);
        this.filterLayers = this.filterLayers.bind(this);

    }
    filterLayers (){
        // console.log(this.props.mapController.map);
        let arrLayers = this.props.mapController.map.getLayers().getArray();
        arrLayers.map((feature, index) => {
            this.filterLayer(feature);
        });
    }
    filterLayer (layer) {
        if (layer.getLayers && typeof layer.getLayers === "function") {
            let arrLayers = layer.getLayers().getArray();
            arrLayers.map((feature, index) => {
                this.filterLayer(feature);
            });
        }
        else if (layer.getStyle && typeof layer.getStyle === "function") {
            let source = layer.getSource();
            source.forEachFeature((feature) => {
                feature.setStyle(new Style({
                    stroke: new Stroke({
                        color: 'black',
                        width: 3
                    }),
                    fill: new Fill({
                        color: this.getRandomColor()
                    })
                }),)
            })
        }
        else {
            console.log(layer);
        }
    }
    getRandomColor() {
        var letters = 'FFFF456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 8; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    render() {
        let classe="lol";
        return (
            <div className={classe}>
                <p onMouseUp={this.filterLayers}>{this.props.feature.translation}</p>
            </div>
        );
    }
}