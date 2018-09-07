// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

(function ($, c4g) {
  'use strict';

  /**
   * Control to toggle the browser/desvice position on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  c4g.maps.control.Print = function (opt_options) {

    var self = this;
    var options = opt_options || {};

    var element,
      button;

    // default options
    options = $.extend({
      className: c4g.maps.constant.css.PRINT,
      switchable: true,
      enabled: true,
      mapController: undefined
    }, options);

    if (!options.mapController) {
      return false;
    }

    var view = options.mapController.map.getView();
    var mapData = options.mapController.data;

    var toggle = function (event) {
      event.stopPropagation();
      let canvas = document.getElementsByClassName("ol-unselectable")[0];

      canvas.toBlob(function(blob) {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'map.png';
        a.click();
        window.URL.revokeObjectURL(url);
      });
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE + ' ol-control';

    if (options.switchable) {
      // button
      button = document.createElement('button');
      button.title = options.tipLabel;
      button.className = c4g.maps.constant.css.PRINT
      element.appendChild(button);

      // set onClick to the toggle-function
      button.addEventListener('click', toggle, false);
      button.addEventListener('touchstart', toggle, false);
    }

    // inheritance-stuff
    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });
  };
  ol.inherits(c4g.maps.control.Print, ol.control.Control);


  /*
   * Add methods
   */
  c4g.maps.control.Print.prototype = $.extend(c4g.maps.control.Print.prototype, {

    // nothing to add here

  }); // end of "add methods" ---

}(jQuery, this.c4g));