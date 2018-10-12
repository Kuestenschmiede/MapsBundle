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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-position.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-maps-control-position.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-position.js ***!
  \**********************************************************/
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
   * Control to toggle the browser/desvice position on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */

  c4g.maps.control.Position = function (opt_options) {

    var self = this;
    var options = opt_options || {};

    var element, button;

    // default options
    options = $.extend({
      className: c4g.maps.constant.css.OL_ZOOM_POS,
      switchable: true,
      enabled: true,
      mapController: undefined
    }, options);

    if (!options.mapController) {
      return false;
    }

    var view = options.mapController.map.getView();
    var mapData = options.mapController.data;

    var enable = function enable() {
      $(element).addClass(c4g.maps.constant.css.ENABLED);
    };

    var disable = function disable() {
      $(element).removeClass(c4g.maps.constant.css.ENABLED);
    };

    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();

      var geoLocation = new ol.Geolocation({
        tracking: true,
        projection: view.getProjection()
      });

      geoLocation.on('change', function (evt) {
        view.setCenter(geoLocation.getPosition());
        // if (mapData.geolocation_zoom) {
        //    view.setZoom(mapData.geolocation_zoom);
        // } else {
        view.setZoom(18);
        //}
        geoLocation.setTracking(false);
        options.mapController.map.setView(view);
        c4g.maps.utils.redrawMapView(options.mapController);
      });
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE + ' button';

    if (options.switchable) {
      // button
      button = document.createElement('button');
      button.title = options.tipLabel;
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
  ol.inherits(c4g.maps.control.Position, ol.control.Control);

  /*
   * Add methods
   */
  c4g.maps.control.Position.prototype = $.extend(c4g.maps.control.Position.prototype, {

    // nothing to add here

  }); // end of "add methods" ---
})(jQuery, this.c4g);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvc2l0aW9uLmpzIl0sIm5hbWVzIjpbImM0ZyIsIm1hcHMiLCJjb250cm9sIiwiJCIsIlBvc2l0aW9uIiwib3B0X29wdGlvbnMiLCJzZWxmIiwib3B0aW9ucyIsImVsZW1lbnQiLCJidXR0b24iLCJleHRlbmQiLCJjbGFzc05hbWUiLCJjb25zdGFudCIsImNzcyIsIk9MX1pPT01fUE9TIiwic3dpdGNoYWJsZSIsImVuYWJsZWQiLCJtYXBDb250cm9sbGVyIiwidW5kZWZpbmVkIiwidmlldyIsIm1hcCIsImdldFZpZXciLCJtYXBEYXRhIiwiZGF0YSIsImVuYWJsZSIsImFkZENsYXNzIiwiRU5BQkxFRCIsImRpc2FibGUiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYmx1ciIsImdlb0xvY2F0aW9uIiwib2wiLCJHZW9sb2NhdGlvbiIsInRyYWNraW5nIiwicHJvamVjdGlvbiIsImdldFByb2plY3Rpb24iLCJvbiIsImV2dCIsInNldENlbnRlciIsImdldFBvc2l0aW9uIiwic2V0Wm9vbSIsInNldFRyYWNraW5nIiwic2V0VmlldyIsInV0aWxzIiwicmVkcmF3TWFwVmlldyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9MX1VOU0VMRUNUQUJMRSIsInRpdGxlIiwidGlwTGFiZWwiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJDb250cm9sIiwiY2FsbCIsInRhcmdldCIsImluaGVyaXRzIiwicHJvdG90eXBlIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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IGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1wb3NpdGlvbi5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMzYzNGVhNDU5N2NkNWI3MzVkMCIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDb250cm9sIHRvIHRvZ2dsZSB0aGUgYnJvd3Nlci9kZXN2aWNlIHBvc2l0aW9uIG9uIHRoZSBtYXAuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyAge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICpcbiAgICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICBvcHRfb3B0aW9ucyAgKm9wdGlvbmFsKiBjb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlBvc2l0aW9uID0gZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBlbGVtZW50LFxuICAgICAgICBidXR0b247XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiBjNGcubWFwcy5jb25zdGFudC5jc3MuT0xfWk9PTV9QT1MsXG4gICAgICBzd2l0Y2hhYmxlOiB0cnVlLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIG1hcENvbnRyb2xsZXI6IHVuZGVmaW5lZFxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgaWYgKCFvcHRpb25zLm1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdmlldyA9IG9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgIHZhciBtYXBEYXRhID0gb3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGE7XG5cbiAgICB2YXIgZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhjNGcubWFwcy5jb25zdGFudC5jc3MuRU5BQkxFRCk7XG4gICAgfTtcblxuICAgIHZhciBkaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhjNGcubWFwcy5jb25zdGFudC5jc3MuRU5BQkxFRCk7XG4gICAgfTtcblxuICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gbG9vc2UgZm9jdXMsIG90aGVyd2lzZSBpdCBsb29rcyBtZXNzeVxuICAgICAgdGhpcy5ibHVyKCk7XG5cbiAgICAgIHZhciBnZW9Mb2NhdGlvbiA9IG5ldyBvbC5HZW9sb2NhdGlvbih7XG4gICAgICAgIHRyYWNraW5nOiB0cnVlLFxuICAgICAgICBwcm9qZWN0aW9uOiB2aWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgfSk7XG5cbiAgICAgIGdlb0xvY2F0aW9uLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZpZXcuc2V0Q2VudGVyKGdlb0xvY2F0aW9uLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAvLyBpZiAobWFwRGF0YS5nZW9sb2NhdGlvbl96b29tKSB7XG4gICAgICAgIC8vICAgIHZpZXcuc2V0Wm9vbShtYXBEYXRhLmdlb2xvY2F0aW9uX3pvb20pO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICB2aWV3LnNldFpvb20oMTgpO1xuICAgICAgICAvL31cbiAgICAgICAgZ2VvTG9jYXRpb24uc2V0VHJhY2tpbmcoZmFsc2UpO1xuICAgICAgICBvcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLnNldFZpZXcodmlldyk7XG4gICAgICAgIGM0Zy5tYXBzLnV0aWxzLnJlZHJhd01hcFZpZXcob3B0aW9ucy5tYXBDb250cm9sbGVyKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lICsgJyAnICsgYzRnLm1hcHMuY29uc3RhbnQuY3NzLk9MX1VOU0VMRUNUQUJMRSArICcgYnV0dG9uJztcblxuICAgIGlmIChvcHRpb25zLnN3aXRjaGFibGUpIHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b24udGl0bGUgPSBvcHRpb25zLnRpcExhYmVsO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUsIGZhbHNlKTtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG9nZ2xlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gaW5oZXJpdGFuY2Utc3R1ZmZcbiAgICBvbC5jb250cm9sLkNvbnRyb2wuY2FsbCh0aGlzLCB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBvcHRpb25zLnRhcmdldFxuICAgIH0pO1xuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLlBvc2l0aW9uLCBvbC5jb250cm9sLkNvbnRyb2wpO1xuXG5cbiAgLypcbiAgICogQWRkIG1ldGhvZHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuUG9zaXRpb24ucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5Qb3NpdGlvbi5wcm90b3R5cGUsIHtcblxuICAgIC8vIG5vdGhpbmcgdG8gYWRkIGhlcmVcblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvc2l0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==