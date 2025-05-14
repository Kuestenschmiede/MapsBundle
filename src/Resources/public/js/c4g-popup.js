import {Overlay} from 'ol';
import {utils} from './c4g-maps-utils';
import ReactDOM from 'react-dom';
import {PopupContainer} from "./components/c4g-popup-container";
import * as React from "react";
import {Point} from "ol/geom";

export class C4gPopup {

    constructor(popupController) {
        const scope = this;
        this.popupController = popupController;
        let popUpElement = document.createElement('div');
        popUpElement.setAttribute('id', 'c4g_popup_' + popupController.mapData.mapId);
        popUpElement.className = 'c4g-popup-wrapper c4g-active';

        let popUpCloseElement = document.createElement('button');
        popUpCloseElement.className = 'c4g-popup-close c4g-icon';

        jQuery(popUpCloseElement).click(function (event) {
            event.preventDefault();
            popupController.mapController.map.removeOverlay(scope.popup);
        });

        let popUpContent = document.createElement('div');
        popUpContent.className = 'c4g-popup-content';

        popUpElement.appendChild(popUpCloseElement);
        popUpElement.appendChild(popUpContent);
        this.popupContent = popUpContent;
        if (popupController.popupHandling === 1 || popupController.popupHandling === 0) {
            let autoPan = popupController.popupHandling === 1;
            this.popup = new Overlay({
                element: popUpElement,
                positioning: 'center-center',//'bottom-left',
                offset: [-50, 50], //-50, 0
                insertFirst: false,
                autoPan: autoPan,
                autoPanAnimation: {
                    duration: 250
                },
                autoPanMargin: 200
            });
            popupController.mapController.map.addOverlay(this.popup);
        } else if (popupController.popupHandling === 2) {
            jQuery(popUpElement).addClass('c4g-popup-wrapper-nonose');
            let center = popupController.mapController.map.getView().getCenter();
            this.popup = new Overlay({
                position: center,
                positioning: 'center-center',
                element: popUpElement,
                offset: [-50, 0],
                autoPan: false,
            });
            popupController.mapController.map.addOverlay(this.popup);
        }
        else if (popupController.popupHandling === 3) {
            let popupOptions = {
                open: true,
                alwaysExtended: false,//this.mapData.openDirectly,
                hideOther: popupController.mapController.hideOtherComponents,
                activeComps: popupController.mapController.getActiveComponents(),
                mapData: popupController.mapData,
                mapController: popupController.mapController
            };

            if (this.popupContainer) {
                ReactDOM.unmountComponentAtNode(this.popupContainer);
                delete popupController.mapController.components.popup;
                if (!popupController.external) {
                    this.popupContainer.parentNode.removeChild(this.popupContainer);
                }
            }
            popupOptions.external = popupController.external;
            this.popupContainer = popupController.external ? document.querySelector("." + popupController.mapData.popupDiv) : document.createElement('div');
            if (!this.popupContainer) {
                this.popupContainer = document.createElement('div');
                popupOptions.external = false;
            }
            this.popupComponent = ReactDOM.render(React.createElement(PopupContainer, popupOptions), this.popupContainer);
            if (!popupOptions.external) {
                popupController.mapController.$overlaycontainer_stopevent.append(this.popupContainer);
                popupController.mapController.hideOtherComponents(this.currentPopup);
            }
            this.currentPopup = this.popupComponent;
            // close open sideboards
            popupController.mapController.components.popup = this.popupComponent;
        }
    }

    setContent (popupConfig) {
        let feature = popupConfig.feature;
        let layer = popupConfig.layer;
        let popupContent;
        let divPopup;

        if (feature.get('features')) {
            let features = feature.get('features');
            for (let i = 0; i < features.length; i++) {
                popupContent += utils.replaceAllPlaceholders(popupConfig.popup.content, features[i], layer, this.popupController.mapController.data.lang);
            }
        } else {
            popupContent = utils.replaceAllPlaceholders(popupConfig.popup.content, feature, layer, this.popupController.mapController.data.lang);
        }


        divPopup = document.createElement('div');
        let objPopup
        if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_appendPopup === 'object') {
            objPopup = {
                popup: popupConfig,
                content: popupContent,
                mapController: this.popupController.mapController,
                comp: this.popupComponent || null,
                div: divPopup,
                callback: null
            };
            utils.callHookFunctions(window.c4gMapsHooks.proxy_appendPopup, objPopup);
            if (popupContent !== objPopup.content) {

            }
            popupContent = objPopup.content;
        }

        if (this.popupController.popupHandling < 3) {
            if (!this.popup.getMap()) { //popup not already in the map
                this.popupController.mapController.map.addOverlay(this.popup);
            }

            divPopup.innerHTML = popupContent;
            this.popupContent.innerHTML = '';
            this.popupContent.appendChild(divPopup);
            if (this.popupController.popupHandling < 2) {
                if (feature.getGeometry()) {
                    let geometry = feature.getGeometry();
                    this.setPosition(geometry);
                } else {
                    //ToDO load feature coordinates for geometry
                }
            } else if (this.popupController.popupHandling == 2) {
                let center = this.popupController.mapController.map.getView().getCenter();
                let geometry = new Point(center);
                this.setPosition(center);
            }
        } else {
            if (this.popupComponent) {
                let activeComps = this.popupController.mapController.getActiveComponents();
                if (!this.popupComponent.state.open) {
                    this.popupComponent.open(activeComps);
                }
                if (divPopup.children.length > 0) {
                    let contentNode = document.createElement('div');
                    contentNode.innerHTML = popupContent;
                    divPopup.appendChild(contentNode);
                    this.popupComponent.setContent(divPopup.innerHTML);
                    if (objPopup && objPopup.callback && typeof objPopup.callback === "function") {
                        objPopup.callback();
                    }
                } else {
                    this.popupComponent.setContent(popupContent, popupConfig);
                }
            }
        }

    }

    setPosition (geometry) {
        let map = this.popupController.mapController.map;
        let element = this.popup.getElement();
        let coordinates = null;
        if (geometry && geometry.getType() === 'Point') {
            coordinates = geometry.getCoordinates();
        }
        else if (geometry) {
            let extent = geometry.getExtent();
            coordinates = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2,];
        } else {
            coordinates = map.getView().getCenter();
        }
        let center = map.getView().getCenter();
        let positioning = "";
        let offset = [0,0];
        if (center[1] >= coordinates[1]) {
            positioning += "bottom";
        }
        else {
            offset[1] = 10;
            positioning += "top";
        }
        if (center[0] >= coordinates[0]) {
            offset[0] = -50;
            positioning += "-left"
        }
        else {
            offset[0] = 100;
            positioning += "-right"
        }
        jQuery(element).removeClass("nose-top-left")
            .removeClass("nose-top-right")
            .removeClass("nose-bottom-left")
            .removeClass("nose-bottom-right");
        jQuery(element).addClass("nose-" + positioning)
        this.popup.setPositioning(positioning);
        this.popup.setOffset(offset);
        this.popup.setPosition(coordinates);

    }
}