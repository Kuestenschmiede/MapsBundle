/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

import {cssConstants} from "./c4g-maps-constant";
import {utils} from "./c4g-maps-utils";
import {Measuretools} from "./c4g-maps-control-portside-measuretools";
import {Print} from "./c4g-maps-control-print";
import {Grid} from "./c4g-maps-control-grid";
import {Zoomlevel} from "./c4g-maps-control-zoomlevel";
import {OverviewMap} from "./c4g-maps-control-overviewmap";
import {Permalink} from "./c4g-maps-control-permalink";
import {Account} from "./c4g-maps-control-portside-account";
import {GeoPicker} from "./c4g-maps-interaction-geopicker";
import {Home} from "./c4g-maps-control-home";
import {Position} from "./c4g-maps-control-position";
import {Infopage} from "./c4g-maps-control-portside-infopage";
import {View} from "ol";
import {transform} from "ol/proj";
import {Map} from "ol";
import {Zoom} from "ol/control";
import {ZoomSlider} from "ol/control";
import {ZoomToExtent} from "ol/control";
import {FullScreen} from "ol/control";
import {Rotate} from "ol/control";
import {ScaleLine} from "ol/control";
import {MousePosition} from "ol/control";
import {Attribution} from "ol/control";
import {toStringHDMS} from "ol/coordinate";
import {get} from "ol/proj";
import ol_control_GeoBookmark from "ol-ext/control/GeoBookmark"
import {FeatureFilter} from "./components/c4g-feature-filter.jsx";
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



        // zoom-controls
        if (mapData.zoom_panel || mapData.zoom_slider) {
            this.controls.zoom = new Zoom({
                zoomInLabel: ' ',
                zoomOutLabel: ' ',
                zoomInTipLabel: langConstants.CTRL_ZOOM_IN,
                zoomOutTipLabel: langConstants.CTRL_ZOOM_OUT,
                target: controlContainerTopLeft
            });
            map.addControl(this.controls.zoom);

            if (mapData.zoom_slider) {
                this.controls.zoomslider = new ZoomSlider(
                    {
                        label: ' ',
                        tipLabel: langConstants.CTRL_ZOOM_SLIDER,
                        target: controlContainerTopLeft
                    }
                );
                map.addControl(this.controls.zoomslider);
            }
        }
        if (mapData.zoom_extent && !mapData.zoom_slider) {
            this.controls.zoom_extent = new ZoomToExtent({
                label: ' ',
                tipLabel: langConstants.CTRL_ZOOM_EXT,
                target: controlContainerTopLeft
            });
            map.addControl(this.controls.zoom_extent);
        }
        if (mapData.zoom_home && !mapData.zoom_slider) {
            this.controls.zoom_home = new Home({
                label: ' ',
                disableLabel: ' ',
                tipLabel: langConstants.CTRL_ZOOM_HOME,
                target: controlContainerTopLeft,
                mapController: this.mapController
            });
            map.addControl(this.controls.zoom_home);
        }

        if (mapData.zoom_position && !mapData.zoom_slider) {
            this.controls.zoom_position = new Position({
                label: ' ',
                disableLabel: ' ',
                tipLabel: langConstants.CTRL_ZOOM_POS,
                target: controlContainerTopLeft,
                mapController: this.mapController
            });
            map.addControl(this.controls.zoom_position);
        }

        // combined zoom-controls
        if (mapData.zoom_slider) {
            jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM).addClass(cssConstants.OL_ZOOM_WITH_SLIDER).removeClass(cssConstants.OL_ZOOM);
            jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_IN).after(jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_SLIDER + ' button').addClass(cssConstants.OL_ZOOM_SLIDER));
            jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_SLIDER + '.' + cssConstants.OL_CONTROL).remove();
        }

        if (mapData.zoom_panel && mapData.zoom_extent) {
            jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM).addClass(cssConstants.OL_ZOOM_WITH_EXT).removeClass(cssConstants.OL_ZOOM);
            jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_IN).after(jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_EXT + ' button').addClass(cssConstants.OL_ZOOM_EXT));
            jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_EXT + '.' + cssConstants.OL_CONTROL).remove();
        }

        if (mapData.zoom_panel && mapData.zoom_home) {
            jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM).addClass(cssConstants.OL_ZOOM_WITH_HOME).removeClass(cssConstants.OL_ZOOM);
            jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_IN).after(jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_HOME + ' button').addClass(cssConstants.OL_ZOOM_HOME));
            let removeElement = controlContainerTopLeft.querySelector('.' + cssConstants.OL_ZOOM_HOME + '.' + cssConstants.OL_UNSELECTABLE + '.button');
            if (removeElement) {
                try {
                    removeElement.remove();
                } catch (err) {
                    //ie 11 error
                }
            }
        }

        if (mapData.zoom_panel && mapData.zoom_position) {
            jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM).addClass(cssConstants.OL_ZOOM_WITH_POS).removeClass(cssConstants.OL_ZOOM);
            jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_IN).after(jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_POS + ' button').addClass(cssConstants.OL_ZOOM_POS));
            jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_POS + '.' + cssConstants.OL_CONTROL).remove();
            let removeElement = controlContainerTopLeft.querySelector('.' + cssConstants.OL_ZOOM_POS + '.' + cssConstants.OL_UNSELECTABLE + '.button');
            if (removeElement) {
                try {
                    removeElement.remove();
                } catch (err) {
                    //ie 11 error
                }
            }
        }

        // overview-map
        if (mapData.overviewmap) {
            let ovmTarget = document.createElement("div");
            ovmTarget.className = "c4g-sideboard c4g-overviewmap-container";
            this.mapController.$overlaycontainer_stopevent.append(ovmTarget);
            let overviewMapOptions = {
                target: controlContainerTopLeft,
                mapController: this.mapController,
                collapsed: true,
                ovmTarget: ovmTarget
            };
            const scope = this;
            const addOverviewMap = function() {
                // let activeBaselayer = 71;
                overviewMapOptions.source = proxy.baselayerController.arrBaselayers[proxy.activeBaselayerId].layer.getSource();
                // proxy.baselayerController.showBaseLayer(activeBaselayer);
                // overviewMapOptions.layers = [proxy.baselayerController.arrBaselayers[activeBaselayer].layer];
                if (scope.overviewMap) {
                    // we are reloading the overview map, so keep the collapsed-property
                    overviewMapOptions.collapsed = !scope.overviewMap.isOpen();
                }
                scope.overviewMap = new OverviewMap(overviewMapOptions);
                scope.controls.overviewmap = scope.overviewMap.getOverviewMap();
                map.addControl(scope.controls.overviewmap);
            };
            if (proxy.baselayers_loaded) {
                addOverviewMap();
            } else {
                proxy.hook_baselayer_loaded.push(addOverviewMap);
            }
            // add hook to synchronize overviewmap with baselayer
            window.c4gMapsHooks.baselayer_changed = window.c4gMapsHooks.baselayer_changed || [];
            window.c4gMapsHooks.baselayer_changed.push(function(baselayerId) {
                map.removeControl(scope.controls.overviewmap);
                scope.overviewMap.removeFromMap();
                addOverviewMap();
            });
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
                            geoLocation = null;
                            this.mapController.map.getView().setCenter(transformed);
                        }
                    }
                }
            }
        }


        // show permalink
        if (mapData.permalink.enable) {
            this.controls.permalink = new Permalink({
                label: ' ',
                tipLabel: langConstants.CTRL_PERMALINK,
                mapController: this.mapController,
                getParameter: mapData.permalink.get_parameter,
                target: controlContainerBottomRight
            });
            map.addControl(this.controls.permalink);
        }
        // geobookmarks - not ready
        if (mapData.geobookmarks) {
            this.controls.geobookmarks = new ol_control_GeoBookmark({
                //target: controlContainerTopRight
                label: ' ',
                tipLabel: langConstants.CTRL_GEOBOOKMARKS,
                placeholder: langConstants.GEOBOOKMARKS_PLACEHOLDER,
                namespace: 'c4g_geobookmarks'/*,
                className: cssConstants.GEOBOOKMARKS*/ //ToDo implement for own styling
            });
            map.addControl(this.controls.geobookmarks);
            this.rightSlideElements.push('.ol-bookmark');

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
                logoLink.appendChild(logoGraphic);
                controlContainerBottomRight.appendChild(logoLink);
            }
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


        // fullscreen
        if (mapData.fullscreen) {
            this.controls.fullscreen = new FullScreen({
                label: ' ',
                labelActive: ' ',
                tipLabel: langConstants.CTRL_FULLSCREEN,
                target: controlContainerTopLeft
            });
            map.addControl(this.controls.fullscreen);
        }

        //
        if (mapData.print) {
            this.controls.print = new Print({
                label: "",
                tipLabel: langConstants.CTRL_PRINT,
                target: controlContainerTopLeft,
                mapController: this.mapController
            });
            map.addControl(this.controls.print);
        }

        // show graticule (grid)
        if (mapData.graticule) {
            this.controls.graticule = new Grid({
                label: ' ',
                disableLabel: ' ',
                tipLabel: langConstants.CTRL_GRID,
                caching: mapData.caching,
                target: controlContainerTopLeft,
                mapController: this.mapController
            });
            map.addControl(this.controls.graticule);
        }
        // rotate-control
        //TODO: use something like "mapData.rotate"
        //   Check: mapData.mouse_nav (defined?)
        if (mapData.mouse_nav && (mapData.mouse_nav.drag_rotate || (mapData.mouse_nav.drag_rotate && mapData.mouse_nav.drag_rotate_zoom))) {
            this.controls.rotate = new Rotate({
                label: ' ',
                tipLabel: langConstants.CTRL_RESET_ROTATION,
                target: controlContainerTopLeft
            });
            map.addControl(this.controls.rotate);
        }
        // infopage
        // if (mapData.infopage && typeof mapData.infopage === "string" && typeof Infopage === 'function') {
        //     this.controls.infopage = new Infopage({
        //         tipLabel: langConstants.CTRL_INFOPAGE,
        //         target: controlContainerTopLeft,
        //         caching: mapData.caching,
        //         mapController: this.mapController,
        //         direction: "left"
        //     });
        //     map.addControl(this.controls.infopage);
        //     // open if opened before
        //     if ((mapData.caching && (utils.getValue(this.controls.infopage.options.name) === '1'))) {
        //         this.controls.infopage.open();
        //     }
        // }
        // account
        if (mapData.account && typeof Account === 'function') {
            this.controls.account = new Account({
                tipLabel: langConstants.CTRL_ACCOUNT,
                target: controlContainerTopLeft,
                caching: mapData.caching,
                mapController: this.mapController
            });
            map.addControl(this.controls.account);
            // open if opened before
            if ((mapData.caching && (utils.getValue(this.controls.account.options.name) === '1'))) {
                this.controls.account.open();
            }
        }
    }

}