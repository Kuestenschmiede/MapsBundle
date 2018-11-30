import {cssConstants} from "./c4g-maps-constant";
import {langConstantsGerman} from "./c4g-maps-constant-i18n-de";
import {langConstantsEnglish} from "./c4g-maps-constant-i18n-en";
import {utils} from "./c4g-maps-utils";

let langConstants = {};

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    langConstants = langConstantsGerman;
  } else if (mapData.lang === "en") {
    langConstants = langConstantsEnglish;
  } else {
    // fallback
    langConstants = langConstantsGerman;
  }
}
'use strict';

export class Permalink extends ol.control.Control {

  /**
   * Control to generate a permalink to the current Map state.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              options  control options.
   */
  constructor(options) {
    super(options);
    var self,
      button,
      copyButton,
      refreshButton;

    this.config = options || {};
    self = this;

    // default options
    this.config = $.extend({
      className: cssConstants.PERMALINK,
      // mapController: undefined,
      tipLabel: langConstants.CTRL_PERMALINK,
      getParameter: false,
      label: 'P',
      target: undefined
    }, this.config);

    if (!this.config.mapController) {
      return false;
    }

    // wrapper div
    this.element = document.createElement('div');
    this.element.className = this.config.className + ' ' + cssConstants.OL_UNSELECTABLE + ' ' + cssConstants.OL_CONTROL;

    // button
    button = document.createElement('button');
    button.title = this.config.tipLabel;
    this.element.appendChild(button);

    // set onClick to the toggle-function
    // button.addEventListener('click', this.toggle, false);
    // button.addEventListener('touchstart', this.toggle, false);
    $(button).click(function () {
      try {
        this.blur();
      } catch (ignore) {

      }
      self.toggle();
    });

    // popup
    // will be attached when opened the first time
    // to make sure its really the last element in the container
    this.popupAttached = false;
    this.popup = document.createElement('div');
    this.popup.className = cssConstants.CONTROL + ' ' + cssConstants.PERMALINK_POPUP + ' ' + cssConstants.CLOSE;

    // textfield
    this.textfield = document.createElement('input');
    this.textfield.type = 'text';
    this.popup.appendChild(this.textfield);

    // copy button
    copyButton = document.createElement('button');
    copyButton.className = cssConstants.COPY + ' ' + cssConstants.ICON;
    copyButton.title = langConstants.COPY_TO_CLIPBOARD;
    copyButton.setAttribute('data-clipboard-target', '.' + cssConstants.PERMALINK_POPUP + ' > input[type="text"]');
    this.popup.appendChild(copyButton);
    new Clipboard(copyButton);

    // refresh button
    refreshButton = document.createElement('button');
    refreshButton.className = cssConstants.REFRESH + ' ' + cssConstants.ICON;
    refreshButton.title = langConstants.REFRESH;
    $(refreshButton).click(function () {
      self.generateLinkFromCurrentState({target: self.textfield});
    });
    this.popup.appendChild(refreshButton);

    // inheritance-stuff
    ol.control.Control.call(this, {
      element: this.element,
      target: this.config.target
    });
  }

  open() {
    if (!this.popupAttached) {
      $(this.popup).slideDown(1);
      this.config.target.appendChild(this.popup);
      this.popupAttached = true;
    }
    $(this.popup).removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN);
    $(this.element).addClass(cssConstants.OPEN);
    this.generateLinkFromCurrentState({target: this.textfield});
  }

  close() {
    $(this.popup).removeClass(cssConstants.OPEN).addClass(cssConstants.CLOSE);
    $(this.element).removeClass(cssConstants.OPEN);
  }

  toggle() {
    if ($(this.popup).hasClass(cssConstants.CLOSE)) {
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
      layerIdx,
      layers;

    options = opt_options || {};
    if (!options.paramCount || !(options.paramCount === 6 || options.paramCount === 2 || options.paramCount === 1)) {
      options.paramCount = 6;
    }

    parameters = [];
    mapView = this.config.mapController.map.getView();
    proxy = this.config.mapController.proxy;

    center = mapView.getCenter();
    center = ol.proj.transform([center[0], center[1]], 'EPSG:3857', 'EPSG:4326');

    parameters.push(+center[0].toFixed(5));
    parameters.push(+center[1].toFixed(5));
    parameters.push(mapView.getZoom());
    parameters.push(+mapView.getRotation().toFixed(2));

    // find active baselayer
    if (proxy.activeBaselayerId) {
      parameters.push(proxy.activeBaselayerId);
    } else {
      parameters.push(0);
    }

    // find active layers
    layers = [];
    for (layerIdx in proxy.activeLayerIds) {
      if (proxy.activeLayerIds.hasOwnProperty(layerIdx)) {
        layers.push(parseInt(layerIdx, 10));
      }
    }
    // delta-decode if there are more than one layer
    if (layers.length > 1) {
      layers = utils.deltaEncode(layers);
      layers = layers.join(':');
    } else {
      layers = layers[0] || '0';
    }
    parameters.push(layers);
    parameters = parameters.join('/');

    // build link
    link = utils.setUrlParam(parameters, this.config.getParameter);

    if (options.target) {
      options.target.value = link;
    } else {
      return link;
    }
  } // end of generateLinkFromCurrentState

  generateLink(parameters) {
    if (!parameters || !(parameters.length === 6 || parameters.length === 2 || parameters.length === 1)) {
      return false;
    }

    // build and return link
    return utils.setUrlParam(parameters.join('/'), this.config.getParameter);
  } // end of generateLink


}