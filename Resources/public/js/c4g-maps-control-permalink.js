// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

(function ($, c4g) {
  'use strict';

  /**
   * Control to generate a permalink to the current Map state.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              options  control options.
   */
  c4g.maps.control.Permalink = function (options) {

    var self,
        button,
        copyButton,
        refreshButton;

    this.config = options || {};
    self = this;

    // default options
    this.config = $.extend({
      className: c4g.maps.constant.css.PERMALINK,
      // mapController: undefined,
      tipLabel: c4g.maps.constant.i18n.CTRL_PERMALINK,
      getParameter: false,
      label: 'P',
      target: undefined
    }, this.config);

    if (!this.config.mapController) {
      return false;
    }

    // wrapper div
    this.element = document.createElement('div');
    this.element.className = this.config.className + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE + ' ' + c4g.maps.constant.css.OL_CONTROL;

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
    this.popup.className = c4g.maps.constant.css.CONTROL + ' ' + c4g.maps.constant.css.PERMALINK_POPUP + ' ' + c4g.maps.constant.css.CLOSE;

    // textfield
    this.textfield = document.createElement('input');
    this.textfield.type = 'text';
    this.popup.appendChild(this.textfield);

    // copy button
    copyButton = document.createElement('button');
    copyButton.className = c4g.maps.constant.css.COPY + ' ' + c4g.maps.constant.css.ICON;
    copyButton.title = c4g.maps.constant.i18n.COPY_TO_CLIPBOARD;
    copyButton.setAttribute('data-clipboard-target', '.' + c4g.maps.constant.css.PERMALINK_POPUP + ' > input[type="text"]');
    this.popup.appendChild(copyButton);
    new Clipboard(copyButton);

    // refresh button
    refreshButton = document.createElement('button');
    refreshButton.className = c4g.maps.constant.css.REFRESH + ' ' + c4g.maps.constant.css.ICON;
    refreshButton.title = c4g.maps.constant.i18n.REFRESH;
    $(refreshButton).click(function () {
      self.generateLinkFromCurrentState({target: self.textfield});
    });
    this.popup.appendChild(refreshButton);

    // inheritance-stuff
    ol.control.Control.call(this, {
      element: this.element,
      target: this.config.target
    });
  };
  ol.inherits(c4g.maps.control.Permalink, ol.control.Control);


  /*
   * Add methods
   */
  c4g.maps.control.Permalink.prototype = $.extend(c4g.maps.control.Permalink.prototype, {

    open: function () {
      if (!this.popupAttached) {
        $(this.popup).slideDown(1);
        this.config.target.appendChild(this.popup);
        this.popupAttached = true;
      }
      $(this.popup).removeClass(c4g.maps.constant.css.CLOSE).addClass(c4g.maps.constant.css.OPEN);
      $(this.element).addClass(c4g.maps.constant.css.OPEN);
      this.generateLinkFromCurrentState({target: this.textfield});
    },

    close: function () {
      $(this.popup).removeClass(c4g.maps.constant.css.OPEN).addClass(c4g.maps.constant.css.CLOSE);
      $(this.element).removeClass(c4g.maps.constant.css.OPEN);
    },

    toggle: function () {
      if ($(this.popup).hasClass(c4g.maps.constant.css.CLOSE)) {
        this.open();
      } else {
        this.close();
      }
    },

    generateLinkFromCurrentState: function (opt_options) {
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
        layers = c4g.maps.utils.deltaEncode(layers);
        layers = layers.join(':');
      } else {
        layers = layers[0] || '0';
      }
      parameters.push(layers);
      parameters = parameters.join('/');

      // build link
      link = c4g.maps.utils.setUrlParam(parameters, this.config.getParameter);

      if (options.target) {
        options.target.value = link;
      } else {
        return link;
      }
    }, // end of generateLinkFromCurrentState

    generateLink: function (parameters) {
      if (!parameters || !(parameters.length === 6 || parameters.length === 2 || parameters.length === 1)) {
        return false;
      }

      // build and return link
      return c4g.maps.utils.setUrlParam(parameters.join('/'), this.config.getParameter);
    } // end of generateLink

  }); // end of "add methods" ---

}(jQuery, this.c4g));