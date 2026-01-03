/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import {cssConstants} from "./c4g-maps-constant";
import {Zoomlevel} from "./c4g-maps-control-zoomlevel";
import {GeoPicker} from "./c4g-maps-interaction-geopicker";
import {GeoPickerGeoJSON} from "./c4g-maps-interaction-geopicker-geojson";
import {get, transform} from "ol/proj";
import {Attribution, MousePosition, ScaleLine} from "ol/control";
import {toStringHDMS} from "ol/coordinate";
import {getLanguage} from "./c4g-maps-i18n";

let langConstants = {};

'use strict';
export class MapsControls {

    /**
     * [MapController description]
     * @param {json-object}  mapData  Object to configure con4gis-maps.
     *                                See "docs/mapData-values.md"
     *                                to get a list of valid values for this object.
     */
    constructor(mapController) {
        this.mapController = mapController;
        this.controls = {};
        this.leftSlideElements = [];
        this.rightSlideElements = [];
        langConstants = getLanguage(mapController.data);
    }
    init() {
        const map = this.mapController.map;
        const proxy = this.mapController.proxy;
        const mapData = this.mapController.data;

        // add control-containers ===
        //
        // top-left
        let controlContainerTopLeft = document.createElement('div');
        controlContainerTopLeft.className = cssConstants.CONTROL_CONTAINER_TL + ' ' + cssConstants.OL_UNSELECTABLE;
        this.mapController.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);
        this.controlContainerTopLeft = controlContainerTopLeft;
        // bottom-left
        let controlContainerBottomLeft = document.createElement('div');
        controlContainerBottomLeft.className = cssConstants.CONTROL_CONTAINER_BL + ' ' + cssConstants.OL_UNSELECTABLE;
        jQuery(controlContainerTopLeft).after(controlContainerBottomLeft);
        // element needs to be moved when Portside will be opened
        this.leftSlideElements.push(controlContainerBottomLeft);
        // top-right
        let controlContainerTopRight = document.createElement('div');
        controlContainerTopRight.className = cssConstants.CONTROL_CONTAINER_TR + ' ' + cssConstants.OL_UNSELECTABLE;
        jQuery(controlContainerBottomLeft).after(controlContainerTopRight);
        // element needs to be moved when Starboard will be opened
        this.rightSlideElements.push(controlContainerTopRight);
        // bottom-right
        let controlContainerBottomRight = document.createElement('div');
        controlContainerBottomRight.className = cssConstants.CONTROL_CONTAINER_BR + ' ' + cssConstants.OL_UNSELECTABLE;
        jQuery(controlContainerTopRight).after(controlContainerBottomRight);
        // element needs to be moved when Starboard will be opened
        this.rightSlideElements.push(controlContainerBottomRight);

        let buttons = [
            {name:'layerswitcher', sort: mapData.layerswitcher.enable},
            {name:'baselayerswitcher', sort: mapData.baselayerswitcher.enable},
            {name:'geosearch', sort: mapData.geosearch.enable},
            {name:'legend', sort: mapData.legend.enable},
            {name:'measure', sort: mapData.measuretools.enable},

            {name:'permalink', sort: mapData.permalink.enable},
        ];

        const sortBy = (key) => {
            return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
        };

        buttons.sort(sortBy('sort'));
        for (let i = 0; i < buttons.length; i++) {
            let button = buttons[i];
            if (parseInt(button.sort) <= 0) {
                continue;
            }
            switch (button.name) {
                case 'overview':
                    var ovmTarget = document.createElement("div");
                    ovmTarget.className = "c4g-sideboard c4g-overviewmap-container c4g-close";
                    this.mapController.$overlaycontainer_stopevent.append(ovmTarget);

                    // const scope = this;
                    // const addOverviewMap = function() {
                    //     var overviewMapOptions = {
                    //         target: controlContainerTopLeft,
                    //         mapController: scope.mapController,
                    //         ovmTarget: ovmTarget,
                    //         layers: [proxy.baselayerController.arrBaselayers[proxy.activeBaselayerId].layer]
                    //     };
                    //
                    //     if (scope.overviewMap) {
                    //         // we are reloading the overview map, so keep the collapsed-property
                    //         overviewMapOptions.collapsed = !scope.overviewMap.isOpen();
                    //     }
                    //
                    //     scope.overviewMap = new OverviewMap(overviewMapOptions);
                    //     scope.controls.overviewmap = scope.overviewMap.getOverviewMap();
                    //     map.addControl(scope.controls.overviewmap);
                    // };
                    //
                    // if (proxy.baselayers_loaded) {
                    //     addOverviewMap();
                    // } else {
                    //     proxy.hook_baselayer_loaded.push(addOverviewMap);
                    // }
                    //
                    // // add hook to synchronize overviewmap with baselayer
                    // window.c4gMapsHooks.baselayer_changed = window.c4gMapsHooks.baselayer_changed || [];
                    // window.c4gMapsHooks.baselayer_changed.push(function(baselayerId) {
                    //     map.removeControl(scope.controls.overviewmap);
                    //     scope.overviewMap.removeFromMap();
                    //     addOverviewMap();
                    // });
                    break;
                default:
            }
        }

        // backend-geopicker
        if (mapData.geopicker && (mapData.geopicker.type === "backend" || mapData.geopicker.type === "frontend")) {
            this.controls.geopicker = new GeoPicker({
                mapContainer: this.mapController
            });
            this.mapController.map.addInteraction(this.controls.geopicker);
            if (mapData.geopicker.type === "frontend") {
                // substring is needed here for taking out the #
                if (mapData.geopicker.input_geo_x && mapData.geopicker.input_geo_x) {
                    var geoxField = document.getElementById(mapData.geopicker.input_geo_x.substring(1));
                    var geoyField = document.getElementById(mapData.geopicker.input_geo_y.substring(1));
                    if (geoxField && geoyField) {
                        var locGeox = geoxField.value;
                        var locGeoy = geoyField.value;
                        if (locGeox && locGeoy) {
                            var numerized = [parseFloat(locGeox, 10), parseFloat(locGeoy, 10)];
                            var transformed = transform(numerized, get('EPSG:4326'), get('EPSG:3857'));
                            this.mapController.map.getView().setCenter(transformed);
                        }
                    }
                }
            }
        }
        else if (mapData.geopicker && mapData.geopicker.type) {
            this.controls.geopicker = new GeoPickerGeoJSON({
                mapContainer: this.mapController
            });
            this.mapController.map.addInteraction(this.controls.geopicker);

        }

        //con4gis logo
        if (mapData.attribution.cfg_logo) {
            let logoLink = document.createElement('a');
            logoLink.href = 'https://con4gis.org';
            logoLink.title = 'built with con4gis';
            logoLink.target = '_blank';
            logoLink.rel = 'noopener noreferrer';
            logoLink.className = cssConstants.ATTRIBUTION_LOGO;
            let logoGraphic = document.createElement('img');
            logoGraphic.src = 'bundles/con4gismaps/images/logo_con4gis.svg';
            logoGraphic.alt = 'con4gis logo';
            logoGraphic.height = '24px';
            logoGraphic.width = '67px';
            logoLink.appendChild(logoGraphic);
            controlContainerBottomLeft.appendChild(logoLink);
        }

        // scaleline
        if (mapData.scaleline) {
            this.controls.scaleline = new ScaleLine({
                target: controlContainerBottomLeft
            });
            map.addControl(this.controls.scaleline);
        }

        // zoom-level & mouse-position
        if (mapData.zoomlevel || mapData.mouseposition) {
            // wrapper for zoom-level and mouse-position
            let controlContainerBottomLeftSub = document.createElement('div');
            controlContainerBottomLeftSub.className = cssConstants.CONTROL_CONTAINER_BL_SUB + ' ' + cssConstants.OL_UNSELECTABLE;
            jQuery(controlContainerBottomLeft).append(controlContainerBottomLeftSub);
            // display zoom-level
            if (mapData.zoomlevel) {
                this.controls.zoomlevel = new Zoomlevel({
                    mapController: this.mapController,
                    target: controlContainerBottomLeftSub,
                    undefinedHTML: 'N/A'
                });
                map.addControl(this.controls.zoomlevel);
            }
            // display mouse-position
            if (mapData.mouseposition) {
                this.controls.mouseposition = new MousePosition({
                    projection: 'EPSG:4326',
                    coordinateFormat: toStringHDMS,
                    target: controlContainerBottomLeftSub,
                    undefinedHTML: 'N/A'
                });
                map.addControl(this.controls.mouseposition);
            }
        }
        // show attribution
        if (mapData.attribution.enable) {
            const attrOptions = {
                label: ' ',
                tipLabel: langConstants.CTRL_ATTRIBUTION,
                collapseLabel: ' ',
                target: mapData.attribution.div ? mapData.attribution.div : controlContainerBottomLeft,
                collapsible: ((!mapData.attribution.div) && (!mapData.attribution.always_show))
            };
            if (mapData.attribution.div) {
                attrOptions["className"] = "ol-attribution ol-attribution-ext-div";
            }
            this.controls.attribution = new Attribution(attrOptions);
            if (!mapData.attribution.always_show) {
                this.controls.attribution.setCollapsed(mapData.attribution.div ? false : mapData.attribution.collapsed === '1');
            }
            map.addControl(this.controls.attribution);
        }
    }

}