/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import {Draw} from "ol/interaction";
import {Feature} from "ol";
import {Point} from "ol/geom";
import {Circle, Fill, Stroke, Style} from "ol/style";
import {Vector} from "ol/layer";
import {GeoJSON} from "ol/format";
import {Vector as VectorSource} from "ol/source";
import {fromLonLat, toLonLat} from "ol/proj";

'use strict';

export class GeoPickerGeoJSON extends Draw {


    /**
     *
     * @param options
     * @returns {boolean}
     * @constructor
     */
    constructor(options) {
        let mapData = options.mapContainer.data;
        let vectorSource = new VectorSource({});
        let vectorLayer = new Vector({
            source: vectorSource
        });
        options.mapContainer.map.addLayer(vectorLayer);
        super({
            type: mapData.geopicker.type,
            freehand: true,
            // style: this.geoPickerStyleFunction,
            source: vectorSource
        });
        this.vectorSource = vectorSource;
        this.$fieldGeoJSON = jQuery(mapData.geopicker.input_geojson);
        if (this.$fieldGeoJSON.val()) {
            try {
                let geojson = new GeoJSON({
                    dataProjection: "EPSG:4326",
                    featureProjection: "EPSG:3857"
                });
                let feature = geojson.readFeature(this.$fieldGeoJSON.val());
                this.vectorSource.addFeature(feature);
            }
            catch (e) {
                console.log(e)
            }
        }
        this.on('drawstart', (event) => {
            this.vectorSource.clear();
        })
        this.on('drawend', (event)=> {
            let geojson = new GeoJSON({
                dataProjection: "EPSG:4326",
                featureProjection: "EPSG:3857"
            });
            let strFeature = geojson.writeFeature(event.feature);
            this.$fieldGeoJSON.val(strFeature);

        })
    };
}