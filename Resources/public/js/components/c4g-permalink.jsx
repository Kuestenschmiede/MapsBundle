/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";
import {cssConstants} from "./../c4g-maps-constant.js";
const Titlebar = React.lazy(() => import("./c4g-titlebar.jsx"));
import {transform} from "ol/proj";
import {utils} from "../c4g-maps-utils";
import {getLanguage} from "./../c4g-maps-i18n";
import {Control} from "ol/control";

export default class Permalink extends Component {

  constructor(props) {
    super(props);

    const scope = this;
    // create control to toggle the panel
    let element = document.createElement('div');
    let button = document.createElement('button');
    let langConstants = getLanguage(props.mapController.data);
    button.title = langConstants.CTRL_PERMALINK;
    element.className = "c4g-permalink-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    if (props.external) {
      element.className += " c4g-external";
    }
    element.appendChild(button);
    jQuery(element).on('click', function(event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    let mapController = props.mapController;
    let control = new Control({element: element, target: props.target});
    mapController.mapsControls.controls.horizontalPanel = control;
    mapController.map.addControl(control);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.langConstants = getLanguage(this.props.mapController.data);

    this.state = {
      open: false,
      link: ""
    };
  }

  render() {
    return (
      <div className={"c4g-permalink-wrapper"}>
        <Suspense fallback={<div>Loading...</div>}>
          <Titlebar wrapperClass={"c4g-permalink-header"} headerClass={"c4g-permalink-header-headline"}
                    header={"Permalink"} closeBtnClass={"c4g-permalink-close"} closeBtnCb={this.close} closeBtnTitle={this.langConstants.CLOSE}>
          </Titlebar>
        </Suspense>
        <div className={"c4g-permalink-content"}>
          <textarea cols="50" rows="2" id={"permalink-text"} value={this.state.link} readOnly={true}/>
          <button className={cssConstants.COPY + ' ' + cssConstants.ICON} title={this.langConstants.COPY_TO_CLIPBOARD}
                  data-clipboard-target={"#permalink-text"} />
          <button className={cssConstants.REFRESH + ' ' + cssConstants.ICON} title={this.langConstants.REFRESH}
            onMouseUp={() => this.generateLinkFromCurrentState({target: this.textfield})}/>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if ((prevState.open !== this.state.open) || prevState.link !== this.state.link) {
      this.generateLinkFromCurrentState({target: this.textfield});
    }
    if (prevState.open && !this.state.open) {
      jQuery(".c4g-permalink-container").removeClass(cssConstants.OPEN).addClass(cssConstants.CLOSE);
    }
    if (this.props.mapController.data.caching && !this.state.open) {
      let panelVal = utils.getValue('panel');
      if (panelVal === this.constructor.name) {
        utils.storeValue('panel', "");
      }
    }
    if (this.state.open) {
      jQuery(".c4g-permalink-container").addClass(cssConstants.OPEN).removeClass(cssConstants.CLOSE);
    }
  }

  componentDidMount() {
    this.textField = document.querySelector("#permalink-text");
    let copyButton = document.querySelector("." + cssConstants.COPY + "." + cssConstants.ICON);
    try {
      new ClipboardJS(copyButton);
    } catch(error) {
      // clipboard script is not loaded
      console.warn('Permalink is currently not supported in backend mode..');
    }
  }

  open() {
    jQuery(this.element).addClass(cssConstants.OPEN);
    jQuery(".c4g-permalink-container").removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN);
    this.setState({open: true});
    this.props.mapController.setOpenComponent(this);
  }

  close() {
    jQuery(this.element).removeClass(cssConstants.OPEN);
    jQuery(".c4g-permalink-container").removeClass(cssConstants.OPEN).addClass(cssConstants.CLOSE);
    this.setState({open: false});
  }

  toggle() {
    if (jQuery(this.popup).hasClass(cssConstants.CLOSE)) {
      this.open();
    } else {
      this.close();
    }
  }

  generateLinkFromCurrentState(opt_options) {
    var options,
      proxy,
      mapView,
      parameters,
      link,
      center,
      baseLayerIdx,
      layerIdx;

    options = opt_options || {};
    if (!options.paramCount || !(options.paramCount === 6 || options.paramCount === 2 || options.paramCount === 1)) {
      options.paramCount = 6;
    }

    parameters = [];
    mapView = this.props.mapController.map.getView();
    proxy = this.props.mapController.proxy;

    center = mapView.getCenter();
    center = transform([center[0], center[1]], 'EPSG:3857', 'EPSG:4326');

    parameters.push(+center[0].toFixed(6));
    parameters.push(+center[1].toFixed(5));
    parameters.push(mapView.getZoom());

    if (this.props.saveIds) {
      parameters.push(+mapView.getRotation().toFixed(2));

      // find active baselayer
      if (proxy.activeBaselayerId) {
        parameters.push(proxy.activeBaselayerId);
      } else {
        parameters.push(0);
      }

      // find active layers
      let layers = [];
      const arrLayerStates = this.props.mapController.state.arrLayerStates;
      for (let layerId in arrLayerStates) {
        if (arrLayerStates.hasOwnProperty(layerId)) {
          layers = layers.concat(this.getActiveLayerIds(arrLayerStates[layerId]));
        }
      }

      // delta-decode if there are more than one layer
      if (layers.length > 1) {
        // do not delta encode uuids
        if (layers[0].indexOf("{") === -1) {
          layers = utils.deltaEncode(layers);
        }
        layers = layers.join(':');
      } else {
        layers = layers[0] || '0';
      }
      parameters.push(layers);
      parameters = parameters.join('/');
    }

    // build link
    link = utils.setUrlParam(parameters, this.props.mapController.data.permalink.getParameter);

    // if (options.target) {
    //   options.target.value = link;
    // } else {
    //   return link;
    // }
    this.setState({link: link});
  } // end of generateLinkFromCurrentState

  generateLink(parameters) {
    if (!parameters || !(parameters.length === 6 || parameters.length === 2 || parameters.length === 1)) {
      return false;
    }

    // build and return link
    return utils.setUrlParam(parameters.join('/'), this.props.mapController.data.permalink.getParameter);
  } // end of generateLink
  getActiveLayerIds (arrLayerState) {
    let ids = [];
    if (arrLayerState.active) {
      ids.push(arrLayerState.id);
    }
    for (let childId in arrLayerState.childStates) {
      if (arrLayerState.childStates.hasOwnProperty(childId)) {
        ids = ids.concat(this.getActiveLayerIds(arrLayerState.childStates[childId]));
      }
    }
    return ids;
  }
}