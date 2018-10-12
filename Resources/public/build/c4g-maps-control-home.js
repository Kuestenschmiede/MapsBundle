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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-maps-control-home.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-home.js ***!
  \******************************************************/
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
   * Control to toggle the intial map position on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */

  c4g.maps.control.Home = function (opt_options) {

    var self = this;
    var options = opt_options || {};

    var element, button;

    // default options
    options = $.extend({
      className: c4g.maps.constant.css.OL_ZOOM_HOME,
      switchable: true,
      enabled: true,
      mapController: undefined
    }, options);

    if (!options.mapController) {
      return false;
    }

    var view = options.mapController.map.getView();
    var mapData = options.mapController.data;

    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();

      view.setCenter(ol.proj.transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'));
      view.setZoom(parseInt(mapData.center.zoom, 10));
      view.setRotation(parseFloat(mapData.center.rotation));

      // check userposition
      var geoLocation;
      if (mapData.geolocation) {
        geoLocation = new ol.Geolocation({
          tracking: true,
          projection: view.getProjection()
        });

        geoLocation.on('change', function (evt) {
          view.setCenter(geoLocation.getPosition());
          if (mapData.geolocation_zoom) {
            view.setZoom(parseInt(mapData.geolocation_zoom, 10));
          }
          geoLocation.setTracking(false);
        });
      }

      options.mapController.map.setView(view);
      c4g.maps.utils.redrawMapView(options.mapController);
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
  ol.inherits(c4g.maps.control.Home, ol.control.Control);

  /*
   * Add methods
   */
  c4g.maps.control.Home.prototype = $.extend(c4g.maps.control.Home.prototype, {

    // nothing to add here

  }); // end of "add methods" ---
})(jQuery, this.c4g);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLWhvbWUuanMiXSwibmFtZXMiOlsiYzRnIiwibWFwcyIsImNvbnRyb2wiLCIkIiwiSG9tZSIsIm9wdF9vcHRpb25zIiwic2VsZiIsIm9wdGlvbnMiLCJlbGVtZW50IiwiYnV0dG9uIiwiZXh0ZW5kIiwiY2xhc3NOYW1lIiwiY29uc3RhbnQiLCJjc3MiLCJPTF9aT09NX0hPTUUiLCJzd2l0Y2hhYmxlIiwiZW5hYmxlZCIsIm1hcENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJ2aWV3IiwibWFwIiwiZ2V0VmlldyIsIm1hcERhdGEiLCJkYXRhIiwidG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwic2V0Q2VudGVyIiwib2wiLCJwcm9qIiwidHJhbnNmb3JtIiwicGFyc2VGbG9hdCIsImNlbnRlciIsImxvbiIsImxhdCIsInNldFpvb20iLCJwYXJzZUludCIsInpvb20iLCJzZXRSb3RhdGlvbiIsInJvdGF0aW9uIiwiZ2VvTG9jYXRpb24iLCJnZW9sb2NhdGlvbiIsIkdlb2xvY2F0aW9uIiwidHJhY2tpbmciLCJwcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvbiIsIm9uIiwiZXZ0IiwiZ2V0UG9zaXRpb24iLCJnZW9sb2NhdGlvbl96b29tIiwic2V0VHJhY2tpbmciLCJzZXRWaWV3IiwidXRpbHMiLCJyZWRyYXdNYXBWaWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT0xfVU5TRUxFQ1RBQkxFIiwidGl0bGUiLCJ0aXBMYWJlbCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNvbnRyb2wiLCJjYWxsIiwidGFyZ2V0IiwiaW5oZXJpdHMiLCJwcm90b3R5cGUiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FB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QUosQ0FBU0MsT0FBVCxDQUFpQkUsSUFBakIsQ0FBc0I4RCxTQUEvQixFQUEwQzs7QUFFMUU7O0FBRjBFLEdBQTFDLENBQWxDLENBM0ZpQixDQStGYjtBQUVMLENBakdBLEVBaUdDQyxNQWpHRCxFQWlHUyxLQUFLbkUsR0FqR2QsQ0FBRCxDIiwiZmlsZSI6ImM0Zy1tYXBzLWNvbnRyb2wtaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLWhvbWUuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnRyb2wgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29udHJvbCB0byB0b2dnbGUgdGhlIGludGlhbCBtYXAgcG9zaXRpb24gb24gdGhlIG1hcC5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBleHRlbmRzICB7b2wuY29udHJvbC5Db250cm9sfVxuICAgKlxuICAgKiBAcGFyYW0gICAge09iamVjdH0gICAgICAgICAgICAgIG9wdF9vcHRpb25zICAqb3B0aW9uYWwqIGNvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuSG9tZSA9IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG5cbiAgICB2YXIgZWxlbWVudCxcbiAgICAgICAgYnV0dG9uO1xuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogYzRnLm1hcHMuY29uc3RhbnQuY3NzLk9MX1pPT01fSE9NRSxcbiAgICAgIHN3aXRjaGFibGU6IHRydWUsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAoIW9wdGlvbnMubWFwQ29udHJvbGxlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2aWV3ID0gb3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgdmFyIG1hcERhdGEgPSBvcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YTtcblxuICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gbG9vc2UgZm9jdXMsIG90aGVyd2lzZSBpdCBsb29rcyBtZXNzeVxuICAgICAgdGhpcy5ibHVyKCk7XG5cbiAgICAgIHZpZXcuc2V0Q2VudGVyKG9sLnByb2oudHJhbnNmb3JtKFtwYXJzZUZsb2F0KG1hcERhdGEuY2VudGVyLmxvbiksIHBhcnNlRmxvYXQobWFwRGF0YS5jZW50ZXIubGF0KV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3JykpO1xuICAgICAgdmlldy5zZXRab29tKHBhcnNlSW50KG1hcERhdGEuY2VudGVyLnpvb20sIDEwKSk7XG4gICAgICB2aWV3LnNldFJvdGF0aW9uKHBhcnNlRmxvYXQobWFwRGF0YS5jZW50ZXIucm90YXRpb24pKTtcblxuICAgICAgLy8gY2hlY2sgdXNlcnBvc2l0aW9uXG4gICAgICB2YXIgZ2VvTG9jYXRpb247XG4gICAgICBpZiAobWFwRGF0YS5nZW9sb2NhdGlvbikge1xuICAgICAgICBnZW9Mb2NhdGlvbiA9IG5ldyBvbC5HZW9sb2NhdGlvbih7XG4gICAgICAgICAgdHJhY2tpbmc6IHRydWUsXG4gICAgICAgICAgcHJvamVjdGlvbjogdmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ2VvTG9jYXRpb24ub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICB2aWV3LnNldENlbnRlcihnZW9Mb2NhdGlvbi5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICBpZiAobWFwRGF0YS5nZW9sb2NhdGlvbl96b29tKSB7XG4gICAgICAgICAgICB2aWV3LnNldFpvb20ocGFyc2VJbnQobWFwRGF0YS5nZW9sb2NhdGlvbl96b29tLCAxMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBnZW9Mb2NhdGlvbi5zZXRUcmFja2luZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLnNldFZpZXcodmlldyk7XG4gICAgICBjNGcubWFwcy51dGlscy5yZWRyYXdNYXBWaWV3KG9wdGlvbnMubWFwQ29udHJvbGxlcik7XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWUgKyAnICcgKyBjNGcubWFwcy5jb25zdGFudC5jc3MuT0xfVU5TRUxFQ1RBQkxFICsgJyBidXR0b24nO1xuXG4gICAgaWYgKG9wdGlvbnMuc3dpdGNoYWJsZSkge1xuICAgICAgLy8gYnV0dG9uXG4gICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IG9wdGlvbnMudGlwTGFiZWw7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgIC8vIHNldCBvbkNsaWNrIHRvIHRoZSB0b2dnbGUtZnVuY3Rpb25cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSwgZmFsc2UpO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b2dnbGUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyBpbmhlcml0YW5jZS1zdHVmZlxuICAgIG9sLmNvbnRyb2wuQ29udHJvbC5jYWxsKHRoaXMsIHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IG9wdGlvbnMudGFyZ2V0XG4gICAgfSk7XG4gIH07XG4gIG9sLmluaGVyaXRzKGM0Zy5tYXBzLmNvbnRyb2wuSG9tZSwgb2wuY29udHJvbC5Db250cm9sKTtcblxuXG4gIC8qXG4gICAqIEFkZCBtZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLkhvbWUucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5Ib21lLnByb3RvdHlwZSwge1xuXG4gICAgLy8gbm90aGluZyB0byBhZGQgaGVyZVxuXG4gIH0pOyAvLyBlbmQgb2YgXCJhZGQgbWV0aG9kc1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtaG9tZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=