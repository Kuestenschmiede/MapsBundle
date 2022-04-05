/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {getLanguage} from "../c4g-maps-i18n";
import {toBlob} from "dom-to-image-more";
import {saveAs} from "file-saver";

export default class Print extends Component {

  constructor(props) {
    super(props);

    let element,
      button;

    let langConstants = getLanguage(props.mapController.data);
    let map = props.mapController.map;
    let mapData = props.mapController.data;

    // export options for html-to-image.
    // See: https://github.com/bubkoo/html-to-image#options
    let exportOptions = {
      filter: function(element) {
        return element.className ? (
          ((element.className.indexOf('ol-control') === -1) || //print no controls (buttons)
            element.className.indexOf('ol-uncollapsible') !== -1) && //exception attributions if always to be displayed
          (element.className.indexOf('c4g-open') === -1) //print no sideboards (right panels)
        ) : true;
      },
      bgcolor: '#000000'
    };

    let toggle = function (event) {
      event.stopPropagation();
      if (map.getTarget()) {
        let target = document.getElementById(map.getTarget());
        toBlob(target, exportOptions)
          .then(function(blob) {
            saveAs(blob, 'map.png');
          });
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = cssConstants.PRINT + ' ' + cssConstants.OL_UNSELECTABLE + ' c4g-portside-control ol-control';

    // button
    button = document.createElement('button');
    button.title = langConstants.CTRL_PRINT;
    button.className = cssConstants.PRINT;
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, {useCapture: false, passive: true});
    button.addEventListener('touchstart', toggle, {useCapture: false, passive: true});

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    let control = new Control({
      element: element,
      target: this.props.target
    });

    let mapController = props.mapController;
    mapController.mapsControls.controls.print = control;
    mapController.map.addControl(control)
  }

  render() {
    return null;
  }

}