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
import {Graticule} from "ol";

export default class Grid extends Component {

  constructor(props) {
    super(props);

    let element,
      button;

    let langConstants = getLanguage(props.mapController.data);
    let mapController = props.mapController;

    // default options
    let options = {
      className: cssConstants.GRATICULE,
      switchable: true,
      tipLabel: langConstants.CTRL_GRID,
      label: '#',
      disableLabel: '[]',
      showLabels: true,
      visible: false
    };
    const scope = this;
    const objGrid = new Graticule(options);
    // function to enable the grid
    var enable = function () {
      objGrid.setVisible(true);
      jQuery(element).addClass(cssConstants.ENABLED);
    };

    // function to disable the grid
    var disable = function () {
      objGrid.setVisible(false);
      jQuery(element).removeClass(cssConstants.ENABLED);
    };

    // function to toggle the grid
    var toggle = function (event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();
      if (objGrid.getVisible()) {
        disable();
      } else {
        enable();
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = cssConstants.GRATICULE + ' ' + cssConstants.OL_UNSELECTABLE + ' ' + cssConstants.OL_CONTROL;
    // button
    button = document.createElement('button');
    if (true) {
      let span = document.createElement('span');
      span.innerText = langConstants.CTRL_GRID;
      button.appendChild(span);
    }
    else {
      button.title = langConstants.CTRL_GRID;
    }
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, {useCapture: false, passive: true});
    button.addEventListener('touchstart', toggle, {useCapture: false, passive: true});
    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    let control = new Control({
      element: element,
      target: props.target
    });
    props.mapController.map.addLayer(objGrid);
    let index = mapController.arrComponents.findIndex(element => element.name === "graticule");
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.graticule = control;

  }

  render() {
    return null;
  }
}