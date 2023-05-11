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
import {saveAs} from "file-saver";
import {utils} from "./../c4g-maps-utils";

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
      bgcolor: '#ffffff'
    };

    let toggle = function (event) {
      event.stopPropagation();
      if (map.getTarget()) {
        map.once('rendercomplete', function () {
          const mapCanvas = document.createElement('canvas');
          const size = map.getSize();
          mapCanvas.width = size[0];
          mapCanvas.height = size[1];
          const mapContext = mapCanvas.getContext('2d');
          Array.prototype.forEach.call(
              map.getViewport().querySelectorAll('.ol-layer canvas, canvas.ol-layer'),
              function (canvas) {
                if (canvas.width > 0) {
                  const opacity =
                      canvas.parentNode.style.opacity || canvas.style.opacity;
                  mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
                  let matrix;
                  const transform = canvas.style.transform;
                  if (transform) {
                    // Get the transform parameters from the style's transform matrix
                    matrix = transform
                        .match(/^matrix\(([^\(]*)\)$/)[1]
                        .split(',')
                        .map(Number);
                  } else {
                    matrix = [
                      parseFloat(canvas.style.width) / canvas.width,
                      0,
                      0,
                      parseFloat(canvas.style.height) / canvas.height,
                      0,
                      0,
                    ];
                  }
                  // Apply the transform to the export map context
                  CanvasRenderingContext2D.prototype.setTransform.apply(
                      mapContext,
                      matrix
                  );
                  const backgroundColor = canvas.parentNode.style.backgroundColor;
                  if (backgroundColor) {
                    mapContext.fillStyle = backgroundColor;
                    mapContext.fillRect(0, 0, canvas.width, canvas.height);
                  }
                  mapContext.drawImage(canvas, 0, 0);
                }
              }
          );
          mapContext.globalAlpha = 1;
          mapContext.setTransform(1, 0, 0, 1, 0, 0);
          let dataURL = mapCanvas.toDataURL();
          if (window.c4gMapsHooks.printMap && window.c4gMapsHooks.printMap.length > 0) {
            let arrReturn = utils.callHookFunctions(window.c4gMapsHooks.printMap, dataURL);
          }
          else {
            saveAs(dataURL, 'map.png');
          }
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
    let index = mapController.arrComponents.findIndex(element => element.name === "print");
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.print = control;
  }

  render() {
    return null;
  }

}