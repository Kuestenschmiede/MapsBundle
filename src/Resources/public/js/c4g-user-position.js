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
import {Point} from "ol/geom";
import Feature from 'ol/Feature';
import {getLanguage} from "./c4g-maps-i18n";

export class UserPosition {

    constructor(mapController) {
        const scope = this;
        this.mapController = mapController;
        const lang = getLanguage(mapController.data);

        this.feature = new Feature();
        this.feature.set('tooltip', lang.TOOLTIP_POSITION);
        this.feature.set('noCursor', true);
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
        let funcLocation = function(evt) {
            let coords = scope.mapController.geolocation.getPosition();
            if (!coords) {
                window.setTimeout(() => {
                    scope.mapController.geolocation.dispatchEvent('change');
                }, 200);
                return;
            }
            let point = new Point(coords);
            scope.feature.setGeometry(point);
        }
        this.mapController.geolocation.on('change', funcLocation);
        if (this.mapController.geolocation.getTracking()) {
            this.mapController.geolocation.dispatchEvent('change');
        }
        else {
            this.mapController.geolocation.setTracking(true)
        }
    }

}