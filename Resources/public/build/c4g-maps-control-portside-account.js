/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-portside-account.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-maps-control-portside-account.js":
/*!******************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-portside-account.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   * @param  {[type]}  config         [description]
   */

  c4g.maps.control.Account = function (opt_options) {

    // extend options
    this.options = $.extend({
      className: c4g.maps.constant.css.ACCOUNT,
      name: 'account',
      headline: c4g.maps.constant.i18n.ACCOUNT,
      create: true,
      mapController: undefined,
      direction: 'left'
    }, opt_options);

    if (!this.options.mapController) {
      return false;
    }

    this.mainSection = document.createElement('div');

    // call parent constructor
    c4g.maps.control.Sideboard.call(this, this.options);
  };
  ol.inherits(c4g.maps.control.Account, c4g.maps.control.Sideboard);

  /**
   * Methods
   */
  c4g.maps.control.Account.prototype = $.extend(c4g.maps.control.Account.prototype, {

    /**
     * Executed when the panel will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
    init: function init() {
      var self = this;

      this.spinner.show();

      this.viewAccount = this.addAccountView();
      this.viewAccount.activate();

      var proxy = self.options.mapController.proxy;
      var map = self.options.mapController.map;

      this.mainSectionAccount = document.createElement('p');
      this.mainSectionAccount.innerHTML = self.options.mapController.data.account;
      this.mainSection.appendChild(this.mainSectionAccount);
      this.contentContainer.setElement(this.mainSection);

      this.spinner.hide();
      return true;
    }, // end of "init()"


    addAccountView: function addAccountView() {
      var accountView;

      accountView = this.addView({
        name: 'account',
        triggerConfig: {
          tipLabel: c4g.maps.constant.i18n.ACCOUNT_VIEW_TRIGGER,
          className: c4g.maps.constant.css.ACCOUNT_VIEW_TRIGGER,
          withHeadline: false
        },
        sectionElements: [{ section: this.contentContainer, element: this.mainSection }, { section: this.topToolbar, element: this.viewTriggerBar }]
      });

      return accountView;
    }, // end of "addAccountView()"

    addAccount: function addAccount(options) {
      var self, TRIGGER_ACCOUNT, viewAccount, source, interaction, features;

      self = this;

      //TRIGGER_ACCOUNT = 'ACCOUNT_VIEW_TRIGGER_' + options.type.toUpperCase();

      viewAccount = self.addAccount({
        name: 'Account',
        triggerConfig: {
          tipLabel: 'Account', //c4g.maps.constant.i18n[TRIGGER_DRAW],
          className: 'c4g_account_trigger', //c4g.maps.constant.css[TRIGGER_DRAW]
          withHeadline: false
        },
        sectionElements: [{ section: self.topToolbar, element: self.viewTriggerBar }],
        initFunction: function initFunction() {

          // Show loading animation
          self.spinner.show();

          // printFunction = function (event) {
          //   var infoButton,
          //       featureGeometry,
          //       translateInteraction,
          //       modifyInteraction,
          //       modifyButton,
          //       applyButton;
          //
          //
          //     infoButton = event.target;
          //
          //   // add apply button
          //   applyButton = document.createElement('button');
          //   applyButton.className = c4g.maps.constant.css.ICON + ' ' + c4g.maps.constant.css.EDITOR_FEATURE_APPLY;
          //   applyButton.title = c4g.maps.constant.i18n.EDITOR_FEATURE_APPLY;
          //   applyButton.setAttribute('feat_id', i);
          //
          // }; // end of "modifyFeatureFunction()"

          features = new ol.Collection();

          self.spinner.hide();
          return true;
        },
        activateFunction: function activateFunction() {},
        deactivateFunction: function deactivateFunction() {}
      });

      return viewAccount;
    } // end of "addAccount()"

  });
})(jQuery, this.c4g);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLWFjY291bnQuanMiXSwibmFtZXMiOlsiYzRnIiwibWFwcyIsImNvbnRyb2wiLCIkIiwiQWNjb3VudCIsIm9wdF9vcHRpb25zIiwib3B0aW9ucyIsImV4dGVuZCIsImNsYXNzTmFtZSIsImNvbnN0YW50IiwiY3NzIiwiQUNDT1VOVCIsIm5hbWUiLCJoZWFkbGluZSIsImkxOG4iLCJjcmVhdGUiLCJtYXBDb250cm9sbGVyIiwidW5kZWZpbmVkIiwiZGlyZWN0aW9uIiwibWFpblNlY3Rpb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJTaWRlYm9hcmQiLCJjYWxsIiwib2wiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsImluaXQiLCJzZWxmIiwic3Bpbm5lciIsInNob3ciLCJ2aWV3QWNjb3VudCIsImFkZEFjY291bnRWaWV3IiwiYWN0aXZhdGUiLCJwcm94eSIsIm1hcCIsIm1haW5TZWN0aW9uQWNjb3VudCIsImlubmVySFRNTCIsImRhdGEiLCJhY2NvdW50IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50Q29udGFpbmVyIiwic2V0RWxlbWVudCIsImhpZGUiLCJhY2NvdW50VmlldyIsImFkZFZpZXciLCJ0cmlnZ2VyQ29uZmlnIiwidGlwTGFiZWwiLCJBQ0NPVU5UX1ZJRVdfVFJJR0dFUiIsIndpdGhIZWFkbGluZSIsInNlY3Rpb25FbGVtZW50cyIsInNlY3Rpb24iLCJlbGVtZW50IiwidG9wVG9vbGJhciIsInZpZXdUcmlnZ2VyQmFyIiwiYWRkQWNjb3VudCIsIlRSSUdHRVJfQUNDT1VOVCIsInNvdXJjZSIsImludGVyYWN0aW9uIiwiZmVhdHVyZXMiLCJpbml0RnVuY3Rpb24iLCJDb2xsZWN0aW9uIiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVG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S0FBS3lCLFVBQWYsRUFBMkJELFNBQVN4QixLQUFLMEIsY0FBekMsRUFEZSxDQVBXO0FBVTVCTSxzQkFBYyx3QkFBWTs7QUFFeEI7QUFDQWhDLGVBQUtDLE9BQUwsQ0FBYUMsSUFBYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE2QixxQkFBVyxJQUFJbkMsR0FBR3FDLFVBQVAsRUFBWDs7QUFFQWpDLGVBQUtDLE9BQUwsQ0FBYWMsSUFBYjtBQUNBLGlCQUFPLElBQVA7QUFDRCxTQXRDMkI7QUF1QzVCbUIsMEJBQWtCLDRCQUFZLENBQzdCLENBeEMyQjtBQXlDNUJDLDRCQUFvQiw4QkFBWSxDQUMvQjtBQTFDMkIsT0FBaEIsQ0FBZDs7QUE2Q0EsYUFBT2hDLFdBQVA7QUFDRCxLQTFHK0UsQ0EwRzlFOztBQTFHOEUsR0FBN0MsQ0FBckM7QUE4R0QsQ0FuSkEsRUFtSkNpQyxNQW5KRCxFQW1KUyxLQUFLaEUsR0FuSmQsQ0FBRCxDIiwiZmlsZSI6ImM0Zy1tYXBzLWNvbnRyb2wtcG9ydHNpZGUtYWNjb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLWFjY291bnQuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnRyb2wgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGV4dGVuZHMge2M0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkfVxuICAgKlxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBtYXBDb250cm9sbGVyICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIGNvbmZpZyAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuQWNjb3VudCA9IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgLy8gZXh0ZW5kIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBjbGFzc05hbWU6IGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5BQ0NPVU5ULFxuICAgICAgbmFtZTogJ2FjY291bnQnLFxuICAgICAgaGVhZGxpbmU6IGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4uQUNDT1VOVCxcbiAgICAgIGNyZWF0ZTogdHJ1ZSxcbiAgICAgIG1hcENvbnRyb2xsZXI6IHVuZGVmaW5lZCxcbiAgICAgIGRpcmVjdGlvbjogJ2xlZnQnXG4gICAgfSwgb3B0X29wdGlvbnMpO1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMubWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIGNhbGwgcGFyZW50IGNvbnN0cnVjdG9yXG4gICAgYzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmQuY2FsbCh0aGlzLCB0aGlzLm9wdGlvbnMpO1xuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLkFjY291bnQsIGM0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkKTtcblxuICAvKipcbiAgICogTWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5BY2NvdW50LnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnRyb2wuQWNjb3VudC5wcm90b3R5cGUsIHtcblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVkIHdoZW4gdGhlIHBhbmVsIHdpbGwgYmUgb3BlbmVkIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICAgKiBbaW5pdCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgUmV0dXJucyB8dHJ1ZXwgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5zcGlubmVyLnNob3coKTtcblxuICAgICAgdGhpcy52aWV3QWNjb3VudCA9IHRoaXMuYWRkQWNjb3VudFZpZXcoKTtcbiAgICAgIHRoaXMudmlld0FjY291bnQuYWN0aXZhdGUoKTtcblxuICAgICAgdmFyIHByb3h5ID0gc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHk7XG4gICAgICB2YXIgbWFwID0gc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwO1xuXG4gICAgICB0aGlzLm1haW5TZWN0aW9uQWNjb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRoaXMubWFpblNlY3Rpb25BY2NvdW50LmlubmVySFRNTCA9IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEuYWNjb3VudDtcbiAgICAgIHRoaXMubWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5tYWluU2VjdGlvbkFjY291bnQpO1xuICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLnNldEVsZW1lbnQodGhpcy5tYWluU2VjdGlvbik7XG5cbiAgICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAvLyBlbmQgb2YgXCJpbml0KClcIlxuXG5cbiAgICBhZGRBY2NvdW50VmlldzogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFjY291bnRWaWV3O1xuXG4gICAgICAgIGFjY291bnRWaWV3ID0gdGhpcy5hZGRWaWV3KHtcbiAgICAgICAgbmFtZTogJ2FjY291bnQnLFxuICAgICAgICB0cmlnZ2VyQ29uZmlnOiB7XG4gICAgICAgICAgdGlwTGFiZWw6IGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4uQUNDT1VOVF9WSUVXX1RSSUdHRVIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjNGcubWFwcy5jb25zdGFudC5jc3MuQUNDT1VOVF9WSUVXX1RSSUdHRVIsXG4gICAgICAgICAgd2l0aEhlYWRsaW5lOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uRWxlbWVudHM6IFtcbiAgICAgICAgICB7c2VjdGlvbjogdGhpcy5jb250ZW50Q29udGFpbmVyLCBlbGVtZW50OiB0aGlzLm1haW5TZWN0aW9ufSxcbiAgICAgICAgICB7c2VjdGlvbjogdGhpcy50b3BUb29sYmFyLCBlbGVtZW50OiB0aGlzLnZpZXdUcmlnZ2VyQmFyfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGFjY291bnRWaWV3O1xuICAgIH0sIC8vIGVuZCBvZiBcImFkZEFjY291bnRWaWV3KClcIlxuXG4gICAgYWRkQWNjb3VudDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciBzZWxmLFxuICAgICAgICAgIFRSSUdHRVJfQUNDT1VOVCxcbiAgICAgICAgICB2aWV3QWNjb3VudCxcbiAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgaW50ZXJhY3Rpb24sXG4gICAgICAgICAgZmVhdHVyZXM7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvL1RSSUdHRVJfQUNDT1VOVCA9ICdBQ0NPVU5UX1ZJRVdfVFJJR0dFUl8nICsgb3B0aW9ucy50eXBlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIHZpZXdBY2NvdW50ID0gc2VsZi5hZGRBY2NvdW50KHtcbiAgICAgICAgbmFtZTogJ0FjY291bnQnLFxuICAgICAgICB0cmlnZ2VyQ29uZmlnOiB7XG4gICAgICAgICAgdGlwTGFiZWw6ICdBY2NvdW50JywvL2M0Zy5tYXBzLmNvbnN0YW50LmkxOG5bVFJJR0dFUl9EUkFXXSxcbiAgICAgICAgICBjbGFzc05hbWU6ICdjNGdfYWNjb3VudF90cmlnZ2VyJywvL2M0Zy5tYXBzLmNvbnN0YW50LmNzc1tUUklHR0VSX0RSQVddXG4gICAgICAgICAgd2l0aEhlYWRsaW5lOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uRWxlbWVudHM6IFtcbiAgICAgICAgICB7c2VjdGlvbjogc2VsZi50b3BUb29sYmFyLCBlbGVtZW50OiBzZWxmLnZpZXdUcmlnZ2VyQmFyfVxuICAgICAgICBdLFxuICAgICAgICBpbml0RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgIC8vIFNob3cgbG9hZGluZyBhbmltYXRpb25cbiAgICAgICAgICBzZWxmLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICAgICAgLy8gcHJpbnRGdW5jdGlvbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIC8vICAgdmFyIGluZm9CdXR0b24sXG4gICAgICAgICAgLy8gICAgICAgZmVhdHVyZUdlb21ldHJ5LFxuICAgICAgICAgIC8vICAgICAgIHRyYW5zbGF0ZUludGVyYWN0aW9uLFxuICAgICAgICAgIC8vICAgICAgIG1vZGlmeUludGVyYWN0aW9uLFxuICAgICAgICAgIC8vICAgICAgIG1vZGlmeUJ1dHRvbixcbiAgICAgICAgICAvLyAgICAgICBhcHBseUJ1dHRvbjtcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICAgIGluZm9CdXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIC8vIGFkZCBhcHBseSBidXR0b25cbiAgICAgICAgICAvLyAgIGFwcGx5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgLy8gICBhcHBseUJ1dHRvbi5jbGFzc05hbWUgPSBjNGcubWFwcy5jb25zdGFudC5jc3MuSUNPTiArICcgJyArIGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5FRElUT1JfRkVBVFVSRV9BUFBMWTtcbiAgICAgICAgICAvLyAgIGFwcGx5QnV0dG9uLnRpdGxlID0gYzRnLm1hcHMuY29uc3RhbnQuaTE4bi5FRElUT1JfRkVBVFVSRV9BUFBMWTtcbiAgICAgICAgICAvLyAgIGFwcGx5QnV0dG9uLnNldEF0dHJpYnV0ZSgnZmVhdF9pZCcsIGkpO1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gfTsgLy8gZW5kIG9mIFwibW9kaWZ5RmVhdHVyZUZ1bmN0aW9uKClcIlxuXG4gICAgICAgICAgZmVhdHVyZXMgPSBuZXcgb2wuQ29sbGVjdGlvbigpO1xuXG4gICAgICAgICAgc2VsZi5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZhdGVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB9LFxuICAgICAgICBkZWFjdGl2YXRlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB2aWV3QWNjb3VudDtcbiAgICB9IC8vIGVuZCBvZiBcImFkZEFjY291bnQoKVwiXG5cbiAgfSk7XG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1wb3J0c2lkZS1hY2NvdW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==