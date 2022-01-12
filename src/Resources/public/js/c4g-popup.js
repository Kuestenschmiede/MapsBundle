import {Overlay} from 'ol';
import {utils} from './c4g-maps-utils';

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
                positioning: 'bottom-left',
                offset: [-50, 0],
                autoPan: autoPan,
                autoPanAnimation: {
                    duration: 250
                },
                autoPanMargin: 20
            });
        } else if (popupController.popupHandling === 2) {
            $(popUpElement).addClass('c4g-popup-wrapper-nonose');
            this.popup = new Overlay({
                element: popUpElement,
                positioning: 'center-center',
                offset: [-50, 0],
                autoPan: false,
            });
        }
        popupController.mapController.map.addOverlay(this.popup);
    }
    setContent (popupConfig) {
        let feature = popupConfig.feature;
        let layer = popupConfig.layer;
        let popupContent;
        if (feature.get('features')) {
            let features = feature.get('features');
            for (let i = 0; i < features.length; i++) {
                popupContent += utils.replaceAllPlaceholders(popupConfig.popup.content, features[i], layer, this.popupController.mapController.data.lang);
            }
        } else {
            popupContent = utils.replaceAllPlaceholders(popupConfig.popup.content, feature, layer, this.popupController.mapController.data.lang);
        }
        let divPopup = document.createElement('div');
        divPopup.innerHTML = popupContent;
        this.popupContent.appendChild(divPopup);
        if (this.popupController.popupHandling < 2) {
            this.setPosition(feature.getGeometry());
        }

    }
    setPosition (geometry) {
        if (geometry.getType() === 'Point') {
            this.popup.setPosition(geometry.getCoordinates());
        }
        else {
            let extent = geometry.getExtent();
            let center = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2,];
            this.popup.setPosition(center);
        }
    }
}