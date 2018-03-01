// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.misc = this.c4g.maps.misc || {};

(function ($, c4g) {
  'use strict';

  /**
   * @TODO
   * [Spinner description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  c4g.maps.misc.Spinner = function (opt_options) {

    var options,
        target,
        spinnerSpan;

    options = opt_options || {};

    // default options
    options = $.extend({
      className: '',
      target: '.' + c4g.maps.constant.css.OL_VIEWPORT
    }, options);

    if (options.className) {
      options.className = ' ' + options.className;
    }

    this.element = document.createElement('div');
    this.element.className = c4g.maps.constant.css.SPINNER + options.className + ' ' + c4g.maps.constant.css.HIDE;
    $(options.target).append(this.element);

    spinnerSpan = document.createElement('span');
    spinnerSpan.className = c4g.maps.constant.css.ICON + ' ' + c4g.maps.constant.css.ANIMATION_SPIN;
    this.element.appendChild(spinnerSpan);

    this.additionalActivationCounter = 0;

  };

  // Add methods to spinner
  c4g.maps.misc.Spinner.prototype = $.extend(c4g.maps.misc.Spinner.prototype, {

    /**
     * @TODO
     * [show description]
     *
     * @return  {[type]}  [description]
     */
    show: function () {
      if ($(this.element).hasClass(c4g.maps.constant.css.HIDE)) {
        $(this.element).removeClass(c4g.maps.constant.css.HIDE);
      } else {
        this.additionalActivationCounter += 1;
      }
    },

    /**
     * @TODO
     * [hide description]
     *
     * @return  {[type]}  [description]
     */
    hide: function () {
      if ($(this.element).hasClass(c4g.maps.constant.css.HIDE)) {
        //console.warn('Spinner is already hidden.');
      } else {
        if (this.additionalActivationCounter === 0) {
          $(this.element).addClass(c4g.maps.constant.css.HIDE);
        } else {
          this.additionalActivationCounter -= 1;
        }
      }

    },

  }); // End of "add methods to spinner"

}(jQuery, this.c4g));