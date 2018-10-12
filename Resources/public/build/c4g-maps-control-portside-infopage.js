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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-portside-infopage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-maps-control-portside-infopage.js":
/*!*******************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-portside-infopage.js ***!
  \*******************************************************************/
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

  c4g.maps.control.Infopage = function (opt_options) {

    // extend options
    this.options = $.extend({
      className: c4g.maps.constant.css.INFOPAGE,
      name: 'infopage',
      headline: c4g.maps.constant.i18n.INFOPAGE,
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
  ol.inherits(c4g.maps.control.Infopage, c4g.maps.control.Sideboard);

  /**
   * Methods
   */
  c4g.maps.control.Infopage.prototype = $.extend(c4g.maps.control.Infopage.prototype, {

    /**
     * Executed when the panel will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
    init: function init() {
      //var infoButton;
      var self = this;

      this.spinner.show();

      this.viewInfopage = this.addInfoView();
      this.viewInfopage.activate();

      var proxy = self.options.mapController.proxy;
      var map = self.options.mapController.map;

      this.mainSectionInfo = document.createElement('p');
      this.mainSectionInfo.innerHTML = self.options.mapController.data.infopage;
      this.mainSection.appendChild(this.mainSectionInfo);
      this.contentContainer.setElement(this.mainSection);

      this.spinner.hide();
      return true;
    }, // end of "init()"


    addInfoView: function addInfoView() {
      var infoView;

      infoView = this.addView({
        name: 'info',
        triggerConfig: {
          tipLabel: c4g.maps.constant.i18n.INFOPAGE_VIEW_TRIGGER,
          className: c4g.maps.constant.css.INFOPAGE_VIEW_TRIGGER,
          withHeadline: false
        },
        sectionElements: [{ section: this.contentContainer, element: this.mainSection }, { section: this.topToolbar, element: this.viewTriggerBar }]
      });

      return infoView;
    }, // end of "addInfoView()"

    addInfopage: function addInfopage(options) {
      var self, TRIGGER_INFOPAGE, viewInfopage, source, interaction, features;

      self = this;

      //TRIGGER_INFOPAGE = 'INFOPAGE_VIEW_TRIGGER_' + options.type.toUpperCase();

      viewInfopage = self.addInfopage({
        name: 'Infopage',
        triggerConfig: {
          tipLabel: 'Infopage', //c4g.maps.constant.i18n[TRIGGER_DRAW],
          className: 'c4g_infopage_trigger', //c4g.maps.constant.css[TRIGGER_DRAW]
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

      return viewInfopage;
    } // end of "addInfopage()"

  });
})(jQuery, this.c4g);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLWluZm9wYWdlLmpzIl0sIm5hbWVzIjpbImM0ZyIsIm1hcHMiLCJjb250cm9sIiwiJCIsIkluZm9wYWdlIiwib3B0X29wdGlvbnMiLCJvcHRpb25zIiwiZXh0ZW5kIiwiY2xhc3NOYW1lIiwiY29uc3RhbnQiLCJjc3MiLCJJTkZPUEFHRSIsIm5hbWUiLCJoZWFkbGluZSIsImkxOG4iLCJjcmVhdGUiLCJtYXBDb250cm9sbGVyIiwidW5kZWZpbmVkIiwiZGlyZWN0aW9uIiwibWFpblNlY3Rpb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJTaWRlYm9hcmQiLCJjYWxsIiwib2wiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsImluaXQiLCJzZWxmIiwic3Bpbm5lciIsInNob3ciLCJ2aWV3SW5mb3BhZ2UiLCJhZGRJbmZvVmlldyIsImFjdGl2YXRlIiwicHJveHkiLCJtYXAiLCJtYWluU2VjdGlvbkluZm8iLCJpbm5lckhUTUwiLCJkYXRhIiwiaW5mb3BhZ2UiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnRDb250YWluZXIiLCJzZXRFbGVtZW50IiwiaGlkZSIsImluZm9WaWV3IiwiYWRkVmlldyIsInRyaWdnZXJDb25maWciLCJ0aXBMYWJlbCIsIklORk9QQUdFX1ZJRVdfVFJJR0dFUiIsIndpdGhIZWFkbGluZSIsInNlY3Rpb25FbGVtZW50cyIsInNlY3Rpb24iLCJlbGVtZW50IiwidG9wVG9vbGJhciIsInZpZXdUcmlnZ2VyQmFyIiwiYWRkSW5mb3BhZ2UiLCJUUklHR0VSX0lORk9QQUdFIiwic291cmNlIiwiaW50ZXJhY3Rpb24iLCJmZWF0dXJlcyIsImluaXRGdW5jdGlvbiIsIkNvbGxlY3Rpb24iLCJhY3RpdmF0ZUZ1bmN0aW9uIiwiZGVhY3RpdmF0ZUZ1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LEtBQUt5QixVQUFmLEVBQTJCRCxTQUFTeEIsS0FBSzBCLGNBQXpDLEVBRGUsQ0FQYTtBQVU5Qk0sc0JBQWMsd0JBQVk7O0FBRXhCO0FBQ0FoQyxlQUFLQyxPQUFMLENBQWFDLElBQWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBNkIscUJBQVcsSUFBSW5DLEdBQUdxQyxVQUFQLEVBQVg7O0FBRUFqQyxlQUFLQyxPQUFMLENBQWFjLElBQWI7QUFDQSxpQkFBTyxJQUFQO0FBQ0QsU0F0QzZCO0FBdUM5Qm1CLDBCQUFrQiw0QkFBWSxDQUM3QixDQXhDNkI7QUF5QzlCQyw0QkFBb0IsOEJBQVksQ0FDL0I7QUExQzZCLE9BQWpCLENBQWY7O0FBNkNBLGFBQU9oQyxZQUFQO0FBQ0QsS0EzR2lGLENBMkdoRjs7QUEzR2dGLEdBQTlDLENBQXRDO0FBK0dELENBcEpBLEVBb0pDaUMsTUFwSkQsRUFvSlMsS0FBS2hFLEdBcEpkLENBQUQsQyIsImZpbGUiOiJjNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLWluZm9wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtcG9ydHNpZGUtaW5mb3BhZ2UuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnRyb2wgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGV4dGVuZHMge2M0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkfVxuICAgKlxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBtYXBDb250cm9sbGVyICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIGNvbmZpZyAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuSW5mb3BhZ2UgPSBmdW5jdGlvbiAob3B0X29wdGlvbnMpIHtcblxuICAgIC8vIGV4dGVuZCBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiBjNGcubWFwcy5jb25zdGFudC5jc3MuSU5GT1BBR0UsXG4gICAgICBuYW1lOiAnaW5mb3BhZ2UnLFxuICAgICAgaGVhZGxpbmU6IGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4uSU5GT1BBR0UsXG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgICBtYXBDb250cm9sbGVyOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3Rpb246ICdsZWZ0J1xuICAgIH0sIG9wdF9vcHRpb25zKTtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLm1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBjYWxsIHBhcmVudCBjb25zdHJ1Y3RvclxuICAgIGM0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkLmNhbGwodGhpcywgdGhpcy5vcHRpb25zKTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5JbmZvcGFnZSwgYzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmQpO1xuXG4gIC8qKlxuICAgKiBNZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLkluZm9wYWdlLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnRyb2wuSW5mb3BhZ2UucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlZCB3aGVuIHRoZSBwYW5lbCB3aWxsIGJlIG9wZW5lZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAgICogW2luaXQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gIFJldHVybnMgfHRydWV8IG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAvL3ZhciBpbmZvQnV0dG9uO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICB0aGlzLnZpZXdJbmZvcGFnZSA9IHRoaXMuYWRkSW5mb1ZpZXcoKTtcbiAgICAgIHRoaXMudmlld0luZm9wYWdlLmFjdGl2YXRlKCk7XG5cbiAgICAgIHZhciBwcm94eSA9IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5O1xuICAgICAgdmFyIG1hcCA9IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcDtcblxuICAgICAgdGhpcy5tYWluU2VjdGlvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0aGlzLm1haW5TZWN0aW9uSW5mby5pbm5lckhUTUwgPSBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmluZm9wYWdlO1xuICAgICAgdGhpcy5tYWluU2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLm1haW5TZWN0aW9uSW5mbyk7XG4gICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuc2V0RWxlbWVudCh0aGlzLm1haW5TZWN0aW9uKTtcblxuICAgICAgdGhpcy5zcGlubmVyLmhpZGUoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIC8vIGVuZCBvZiBcImluaXQoKVwiXG5cblxuICAgIGFkZEluZm9WaWV3OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5mb1ZpZXc7XG5cbiAgICAgICAgaW5mb1ZpZXcgPSB0aGlzLmFkZFZpZXcoe1xuICAgICAgICBuYW1lOiAnaW5mbycsXG4gICAgICAgIHRyaWdnZXJDb25maWc6IHtcbiAgICAgICAgICB0aXBMYWJlbDogYzRnLm1hcHMuY29uc3RhbnQuaTE4bi5JTkZPUEFHRV9WSUVXX1RSSUdHRVIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjNGcubWFwcy5jb25zdGFudC5jc3MuSU5GT1BBR0VfVklFV19UUklHR0VSLFxuICAgICAgICAgIHdpdGhIZWFkbGluZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXG4gICAgICAgICAge3NlY3Rpb246IHRoaXMuY29udGVudENvbnRhaW5lciwgZWxlbWVudDogdGhpcy5tYWluU2VjdGlvbn0sXG4gICAgICAgICAge3NlY3Rpb246IHRoaXMudG9wVG9vbGJhciwgZWxlbWVudDogdGhpcy52aWV3VHJpZ2dlckJhcn1cbiAgICAgICAgXVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbmZvVmlldztcbiAgICB9LCAvLyBlbmQgb2YgXCJhZGRJbmZvVmlldygpXCJcblxuICAgIGFkZEluZm9wYWdlOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIHNlbGYsXG4gICAgICAgICAgVFJJR0dFUl9JTkZPUEFHRSxcbiAgICAgICAgICB2aWV3SW5mb3BhZ2UsXG4gICAgICAgICAgc291cmNlLFxuICAgICAgICAgIGludGVyYWN0aW9uLFxuICAgICAgICAgIGZlYXR1cmVzO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgLy9UUklHR0VSX0lORk9QQUdFID0gJ0lORk9QQUdFX1ZJRVdfVFJJR0dFUl8nICsgb3B0aW9ucy50eXBlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIHZpZXdJbmZvcGFnZSA9IHNlbGYuYWRkSW5mb3BhZ2Uoe1xuICAgICAgICBuYW1lOiAnSW5mb3BhZ2UnLFxuICAgICAgICB0cmlnZ2VyQ29uZmlnOiB7XG4gICAgICAgICAgdGlwTGFiZWw6ICdJbmZvcGFnZScsLy9jNGcubWFwcy5jb25zdGFudC5pMThuW1RSSUdHRVJfRFJBV10sXG4gICAgICAgICAgY2xhc3NOYW1lOiAnYzRnX2luZm9wYWdlX3RyaWdnZXInLC8vYzRnLm1hcHMuY29uc3RhbnQuY3NzW1RSSUdHRVJfRFJBV11cbiAgICAgICAgICB3aXRoSGVhZGxpbmU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb25FbGVtZW50czogW1xuICAgICAgICAgIHtzZWN0aW9uOiBzZWxmLnRvcFRvb2xiYXIsIGVsZW1lbnQ6IHNlbGYudmlld1RyaWdnZXJCYXJ9XG4gICAgICAgIF0sXG4gICAgICAgIGluaXRGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgLy8gU2hvdyBsb2FkaW5nIGFuaW1hdGlvblxuICAgICAgICAgIHNlbGYuc3Bpbm5lci5zaG93KCk7XG5cbiAgICAgICAgICAvLyBwcmludEZ1bmN0aW9uID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgLy8gICB2YXIgaW5mb0J1dHRvbixcbiAgICAgICAgICAvLyAgICAgICBmZWF0dXJlR2VvbWV0cnksXG4gICAgICAgICAgLy8gICAgICAgdHJhbnNsYXRlSW50ZXJhY3Rpb24sXG4gICAgICAgICAgLy8gICAgICAgbW9kaWZ5SW50ZXJhY3Rpb24sXG4gICAgICAgICAgLy8gICAgICAgbW9kaWZ5QnV0dG9uLFxuICAgICAgICAgIC8vICAgICAgIGFwcGx5QnV0dG9uO1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgICAgaW5mb0J1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vICAgLy8gYWRkIGFwcGx5IGJ1dHRvblxuICAgICAgICAgIC8vICAgYXBwbHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAvLyAgIGFwcGx5QnV0dG9uLmNsYXNzTmFtZSA9IGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5JQ09OICsgJyAnICsgYzRnLm1hcHMuY29uc3RhbnQuY3NzLkVESVRPUl9GRUFUVVJFX0FQUExZO1xuICAgICAgICAgIC8vICAgYXBwbHlCdXR0b24udGl0bGUgPSBjNGcubWFwcy5jb25zdGFudC5pMThuLkVESVRPUl9GRUFUVVJFX0FQUExZO1xuICAgICAgICAgIC8vICAgYXBwbHlCdXR0b24uc2V0QXR0cmlidXRlKCdmZWF0X2lkJywgaSk7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyB9OyAvLyBlbmQgb2YgXCJtb2RpZnlGZWF0dXJlRnVuY3Rpb24oKVwiXG5cbiAgICAgICAgICBmZWF0dXJlcyA9IG5ldyBvbC5Db2xsZWN0aW9uKCk7XG5cbiAgICAgICAgICBzZWxmLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH0sXG4gICAgICAgIGRlYWN0aXZhdGVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHZpZXdJbmZvcGFnZTtcbiAgICB9IC8vIGVuZCBvZiBcImFkZEluZm9wYWdlKClcIlxuXG4gIH0pO1xuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtcG9ydHNpZGUtaW5mb3BhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9