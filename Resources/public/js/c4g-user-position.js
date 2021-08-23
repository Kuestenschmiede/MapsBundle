/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import Geolocation from 'ol/Geolocation';
import {Vector as VectorSource} from "ol/source";
import {Vector} from "ol/layer";
import {utils} from './c4g-maps-utils';
import {Fill, Style, Text, Circle} from 'ol/style';
import {Point} from "ol/geom";
import Feature from 'ol/Feature';
import * as olExtent from 'ol/extent';

export class UserPosition {

    constructor(mapController) {
        const scope = this;
        this.mapController = mapController;
        this.geolocation = new Geolocation({
            tracking: true,
            projection: "EPSG:3857"
        });
        this.feature = new Feature();
        let layer = new Vector({
            source: new VectorSource({
                features: [this.feature]
            })
        });
        this.mapController.map.addLayer(layer);
        if (this.mapController.data && this.mapController.data.userLocationStyle) {
            this.mapController.proxy.locationStyleController.loadLocationStyles([this.mapController.data.userLocationStyle], {"done": () =>
                {
                    let style = this.mapController.proxy.locationStyleController.arrLocStyles[this.mapController.data.userLocationStyle].style;
                    this.feature.setStyle(style);
                }
            });
        }
        this.geolocation.on('change', function(evt) {
            let point = new Point(this.getPosition());
            scope.feature.setGeometry(point);
        });
    }

    locateUser () {

    }
}