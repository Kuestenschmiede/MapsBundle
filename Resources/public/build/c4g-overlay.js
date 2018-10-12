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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-overlay.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-overlay.js":
/*!********************************************!*\
  !*** ./Resources/public/js/c4g-overlay.js ***!
  \********************************************/
/*! exports provided: C4gOverlay */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gOverlay", function() { return C4gOverlay; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gOverlay = function () {
    function C4gOverlay(overlayArr, mapController) {
        _classCallCheck(this, C4gOverlay);

        this.id = overlayArr['id'];
        this.pid = overlayArr['pid'];
        this.name = overlayArr['name'];
        this.provider = overlayArr['provider'];
        this.style = overlayArr['style'];
        this.url = overlayArr['url'];
        this.urls = overlayArr['urls'];
        this.opacity = overlayArr['opacity'];
        this.attribution = overlayArr['attribution'];
        this.gutter = overlayArr['gutter'];
        this.params = overlayArr['params'];
        this.layer = false;
        this.overlayArr = overlayArr;
        this.mapController = mapController;
    }

    _createClass(C4gOverlay, [{
        key: 'changeOpacity',
        value: function changeOpacity(value) {
            var layer;

            layer = this.layer;
            if (layer) {
                this.mapController.map.removeLayer(layer);
                layer.setOpacity(value / 100);
                this.mapController.map.addLayer(layer);
            }
        }
    }]);

    return C4gOverlay;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2NkYjI1MjYxODE0MjEwNjc4ZjIiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctb3ZlcmxheS5qcyJdLCJuYW1lcyI6WyJDNGdPdmVybGF5Iiwib3ZlcmxheUFyciIsIm1hcENvbnRyb2xsZXIiLCJpZCIsInBpZCIsIm5hbWUiLCJwcm92aWRlciIsInN0eWxlIiwidXJsIiwidXJscyIsIm9wYWNpdHkiLCJhdHRyaWJ1dGlvbiIsImd1dHRlciIsInBhcmFtcyIsImxheWVyIiwidmFsdWUiLCJtYXAiLCJyZW1vdmVMYXllciIsInNldE9wYWNpdHkiLCJhZGRMYXllciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdETyxJQUFNQSxVQUFiO0FBRUksd0JBQVlDLFVBQVosRUFBd0JDLGFBQXhCLEVBQXNDO0FBQUE7O0FBQ2xDLGFBQUtDLEVBQUwsR0FBcUJGLFdBQVcsSUFBWCxDQUFyQjtBQUNBLGFBQUtHLEdBQUwsR0FBcUJILFdBQVcsS0FBWCxDQUFyQjtBQUNBLGFBQUtJLElBQUwsR0FBcUJKLFdBQVcsTUFBWCxDQUFyQjtBQUNBLGFBQUtLLFFBQUwsR0FBcUJMLFdBQVcsVUFBWCxDQUFyQjtBQUNBLGFBQUtNLEtBQUwsR0FBcUJOLFdBQVcsT0FBWCxDQUFyQjtBQUNBLGFBQUtPLEdBQUwsR0FBcUJQLFdBQVcsS0FBWCxDQUFyQjtBQUNBLGFBQUtRLElBQUwsR0FBcUJSLFdBQVcsTUFBWCxDQUFyQjtBQUNBLGFBQUtTLE9BQUwsR0FBcUJULFdBQVcsU0FBWCxDQUFyQjtBQUNBLGFBQUtVLFdBQUwsR0FBcUJWLFdBQVcsYUFBWCxDQUFyQjtBQUNBLGFBQUtXLE1BQUwsR0FBcUJYLFdBQVcsUUFBWCxDQUFyQjtBQUNBLGFBQUtZLE1BQUwsR0FBcUJaLFdBQVcsUUFBWCxDQUFyQjtBQUNBLGFBQUthLEtBQUwsR0FBcUIsS0FBckI7QUFDQSxhQUFLYixVQUFMLEdBQXFCQSxVQUFyQjtBQUNBLGFBQUtDLGFBQUwsR0FBd0JBLGFBQXhCO0FBQ0g7O0FBakJMO0FBQUE7QUFBQSxzQ0FxQmtCYSxLQXJCbEIsRUFxQndCO0FBQ2hCLGdCQUFJRCxLQUFKOztBQUVBQSxvQkFBUSxLQUFLQSxLQUFiO0FBQ0EsZ0JBQUlBLEtBQUosRUFBVztBQUNQLHFCQUFLWixhQUFMLENBQW1CYyxHQUFuQixDQUF1QkMsV0FBdkIsQ0FBbUNILEtBQW5DO0FBQ0FBLHNCQUFNSSxVQUFOLENBQWlCSCxRQUFNLEdBQXZCO0FBQ0EscUJBQUtiLGFBQUwsQ0FBbUJjLEdBQW5CLENBQXVCRyxRQUF2QixDQUFnQ0wsS0FBaEM7QUFDSDtBQUNKO0FBOUJMOztBQUFBO0FBQUEsSSIsImZpbGUiOiJjNGctb3ZlcmxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctb3ZlcmxheS5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3Y2RiMjUyNjE4MTQyMTA2NzhmMiIsImV4cG9ydCBjbGFzcyBDNGdPdmVybGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKG92ZXJsYXlBcnIsIG1hcENvbnRyb2xsZXIpe1xuICAgICAgICB0aGlzLmlkICAgICAgICAgICAgPSBvdmVybGF5QXJyWydpZCddO1xuICAgICAgICB0aGlzLnBpZCAgICAgICAgICAgPSBvdmVybGF5QXJyWydwaWQnXTtcbiAgICAgICAgdGhpcy5uYW1lICAgICAgICAgID0gb3ZlcmxheUFyclsnbmFtZSddO1xuICAgICAgICB0aGlzLnByb3ZpZGVyICAgICAgPSBvdmVybGF5QXJyWydwcm92aWRlciddO1xuICAgICAgICB0aGlzLnN0eWxlICAgICAgICAgPSBvdmVybGF5QXJyWydzdHlsZSddO1xuICAgICAgICB0aGlzLnVybCAgICAgICAgICAgPSBvdmVybGF5QXJyWyd1cmwnXTtcbiAgICAgICAgdGhpcy51cmxzICAgICAgICAgID0gb3ZlcmxheUFyclsndXJscyddO1xuICAgICAgICB0aGlzLm9wYWNpdHkgICAgICAgPSBvdmVybGF5QXJyWydvcGFjaXR5J107XG4gICAgICAgIHRoaXMuYXR0cmlidXRpb24gICA9IG92ZXJsYXlBcnJbJ2F0dHJpYnV0aW9uJ107XG4gICAgICAgIHRoaXMuZ3V0dGVyICAgICAgICA9IG92ZXJsYXlBcnJbJ2d1dHRlciddO1xuICAgICAgICB0aGlzLnBhcmFtcyAgICAgICAgPSBvdmVybGF5QXJyWydwYXJhbXMnXTtcbiAgICAgICAgdGhpcy5sYXllciAgICAgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3ZlcmxheUFyciAgICA9IG92ZXJsYXlBcnI7XG4gICAgICAgIHRoaXMubWFwQ29udHJvbGxlciAgICA9IG1hcENvbnRyb2xsZXJcbiAgICB9XG5cbiAgICBcblxuICAgIGNoYW5nZU9wYWNpdHkodmFsdWUpe1xuICAgICAgICB2YXIgbGF5ZXI7XG5cbiAgICAgICAgbGF5ZXIgPSB0aGlzLmxheWVyO1xuICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIobGF5ZXIpO1xuICAgICAgICAgICAgbGF5ZXIuc2V0T3BhY2l0eSh2YWx1ZS8xMDApO1xuICAgICAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihsYXllcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctb3ZlcmxheS5qcyJdLCJzb3VyY2VSb290IjoiIn0=