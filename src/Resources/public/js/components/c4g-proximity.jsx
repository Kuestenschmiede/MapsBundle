/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {getLanguage} from "../c4g-maps-i18n";

export default class ProximityButton extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    let element, button;

    let mapController = props.mapController;
    let mapData = mapController.data;
    let langConstants = getLanguage(mapData);

    const toggle = function (event) {
      if (event) {
        event.stopPropagation();
      }
      this.blur();

      const proxy = mapController.proxy;
      if (!proxy) {
        return;
      }

      if (proxy.proximityTracker) {
        if (proxy.proximityTracker.isTracking) {
          proxy.proximityTracker.stopTracking();
          button.classList.remove('c4g-active');
        } else {
          proxy.proximityTracker.startTracking();
          button.classList.add('c4g-active');
          if (proxy.audiotourPlayer) {
            proxy.audiotourPlayer.unlock();
          }
        }
      } else if (proxy.audiotourPlayer) {
        proxy.audiotourPlayer.unlock();
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = 'ol-proximity c4g-proximity-control ' + cssConstants.OL_CONTROL + ' ' + cssConstants.OL_UNSELECTABLE;

    // button
    button = document.createElement('button');
    button.className = 'c4g-btn-proximity';
    button.setAttribute('type', 'button');
    const labelText = langConstants.CTRL_PROXIMITY || 'PWA & Geofencing (Entdecken / Tour starten)';

    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      let span = document.createElement('span');
      span.innerText = labelText;
      button.appendChild(span);
    } else {
      button.title = labelText;
      button.setAttribute('aria-label', labelText);
    }
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, {useCapture: false, passive: true});
    button.addEventListener('touchstart', toggle, {useCapture: false, passive: true});

    let control = new Control({
      element: element,
      target: this.props.target
    });

    let index = mapController.arrComponents.findIndex(element => element.name === "proximity");
    if (index !== -1) {
      mapController.arrComponents[index].control = control;
    }
    if (mapController.mapsControls && mapController.mapsControls.controls) {
      mapController.mapsControls.controls.proximity = control;
    }

    // Check initial state
    if (mapController.proxy && mapController.proxy.proximityTracker && mapController.proxy.proximityTracker.isTracking) {
      button.classList.add('c4g-active');
    }
  }

  render() {
    return null;
  }
}
