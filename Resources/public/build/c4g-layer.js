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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-layer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-layer.js":
/*!******************************************!*\
  !*** ./Resources/public/js/c4g-layer.js ***!
  \******************************************/
/*! exports provided: C4gLayer */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gLayer", function() { return C4gLayer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gLayer = function C4gLayer(layerArr) {
  _classCallCheck(this, C4gLayer);

  this.id = layerArr['id'];
  this.pid = layerArr['pid'];
  this.async_content = layerArr['async_content'];
  this.content = layerArr['content'];
  this.cssClass = layerArr['cssClass'];
  this.hide = layerArr['hide'];
  this.hide_child = layerArr['hide_child'];
  this.type = layerArr['type'];
  this.cluster = layerArr['cluster'];
  this.zoom = layerArr['zoom'];
  this.zoom_locations = layerArr['zoom_locations'];
  this.display = layerArr['display'];
  this.hasChilds = layerArr['hasChilds'];
  this.childs = layerArr['childs'];
  this.childsCount = layerArr['childsCount'];
  this.renderSpecial = layerArr['renderSpecial'];
  this.editable = true;
  this.type = layerArr['type'];
  this.locstyle = layerArr['locstyle'];
  this.name = layerArr['name'];
  this.tabId = layerArr['tabId'];
  this.split_geojson = layerArr['split_geojson'];
  this.geojson_attributes = layerArr['geojson_attributes'];
  this.geojson_zoom = layerArr['geojson_zoom'];
  this.layername = layerArr['layername'];
  this.visibleChilds = false;
  this.vectorLayer = null;
  this.hideWhenInTab = layerArr['hide_when_in_tab'];

  if (layerArr.projectId) {
    this.projectId = layerArr.projectId;
  }
  if (layerArr.popup) {
    this.popup = layerArr.popup;
  }
  this.awesomeicon = layerArr['awesomeicon'];
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzYzYTE0MjM3ZGVhZTcxM2FlNjciLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbGF5ZXIuanMiXSwibmFtZXMiOlsiQzRnTGF5ZXIiLCJsYXllckFyciIsImlkIiwicGlkIiwiYXN5bmNfY29udGVudCIsImNvbnRlbnQiLCJjc3NDbGFzcyIsImhpZGUiLCJoaWRlX2NoaWxkIiwidHlwZSIsImNsdXN0ZXIiLCJ6b29tIiwiem9vbV9sb2NhdGlvbnMiLCJkaXNwbGF5IiwiaGFzQ2hpbGRzIiwiY2hpbGRzIiwiY2hpbGRzQ291bnQiLCJyZW5kZXJTcGVjaWFsIiwiZWRpdGFibGUiLCJsb2NzdHlsZSIsIm5hbWUiLCJ0YWJJZCIsInNwbGl0X2dlb2pzb24iLCJnZW9qc29uX2F0dHJpYnV0ZXMiLCJnZW9qc29uX3pvb20iLCJsYXllcm5hbWUiLCJ2aXNpYmxlQ2hpbGRzIiwidmVjdG9yTGF5ZXIiLCJoaWRlV2hlbkluVGFiIiwicHJvamVjdElkIiwicG9wdXAiLCJhd2Vzb21laWNvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RE8sSUFBTUEsUUFBYixHQUVFLGtCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLE9BQUtDLEVBQUwsR0FBVUQsU0FBUyxJQUFULENBQVY7QUFDQSxPQUFLRSxHQUFMLEdBQVdGLFNBQVMsS0FBVCxDQUFYO0FBQ0EsT0FBS0csYUFBTCxHQUFxQkgsU0FBUyxlQUFULENBQXJCO0FBQ0EsT0FBS0ksT0FBTCxHQUFlSixTQUFTLFNBQVQsQ0FBZjtBQUNBLE9BQUtLLFFBQUwsR0FBZ0JMLFNBQVMsVUFBVCxDQUFoQjtBQUNBLE9BQUtNLElBQUwsR0FBWU4sU0FBUyxNQUFULENBQVo7QUFDQSxPQUFLTyxVQUFMLEdBQWtCUCxTQUFTLFlBQVQsQ0FBbEI7QUFDQSxPQUFLUSxJQUFMLEdBQVlSLFNBQVMsTUFBVCxDQUFaO0FBQ0EsT0FBS1MsT0FBTCxHQUFlVCxTQUFTLFNBQVQsQ0FBZjtBQUNBLE9BQUtVLElBQUwsR0FBWVYsU0FBUyxNQUFULENBQVo7QUFDQSxPQUFLVyxjQUFMLEdBQXNCWCxTQUFTLGdCQUFULENBQXRCO0FBQ0EsT0FBS1ksT0FBTCxHQUFlWixTQUFTLFNBQVQsQ0FBZjtBQUNBLE9BQUthLFNBQUwsR0FBaUJiLFNBQVMsV0FBVCxDQUFqQjtBQUNBLE9BQUtjLE1BQUwsR0FBY2QsU0FBUyxRQUFULENBQWQ7QUFDQSxPQUFLZSxXQUFMLEdBQW1CZixTQUFTLGFBQVQsQ0FBbkI7QUFDQSxPQUFLZ0IsYUFBTCxHQUFxQmhCLFNBQVMsZUFBVCxDQUFyQjtBQUNBLE9BQUtpQixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsT0FBS1QsSUFBTCxHQUFZUixTQUFTLE1BQVQsQ0FBWjtBQUNBLE9BQUtrQixRQUFMLEdBQWdCbEIsU0FBUyxVQUFULENBQWhCO0FBQ0EsT0FBS21CLElBQUwsR0FBWW5CLFNBQVMsTUFBVCxDQUFaO0FBQ0EsT0FBS29CLEtBQUwsR0FBYXBCLFNBQVMsT0FBVCxDQUFiO0FBQ0EsT0FBS3FCLGFBQUwsR0FBcUJyQixTQUFTLGVBQVQsQ0FBckI7QUFDQSxPQUFLc0Isa0JBQUwsR0FBMEJ0QixTQUFTLG9CQUFULENBQTFCO0FBQ0EsT0FBS3VCLFlBQUwsR0FBb0J2QixTQUFTLGNBQVQsQ0FBcEI7QUFDQSxPQUFLd0IsU0FBTCxHQUFpQnhCLFNBQVMsV0FBVCxDQUFqQjtBQUNBLE9BQUt5QixhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsT0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLE9BQUtDLGFBQUwsR0FBcUIzQixTQUFTLGtCQUFULENBQXJCOztBQUVBLE1BQUlBLFNBQVM0QixTQUFiLEVBQXdCO0FBQ3RCLFNBQUtBLFNBQUwsR0FBaUI1QixTQUFTNEIsU0FBMUI7QUFDRDtBQUNELE1BQUc1QixTQUFTNkIsS0FBWixFQUFrQjtBQUNoQixTQUFLQSxLQUFMLEdBQWE3QixTQUFTNkIsS0FBdEI7QUFDRDtBQUNELE9BQUtDLFdBQUwsR0FBbUI5QixTQUFTLGFBQVQsQ0FBbkI7QUFDRCxDQXZDSCxDIiwiZmlsZSI6ImM0Zy1sYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbGF5ZXIuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzYzYTE0MjM3ZGVhZTcxM2FlNjciLCJleHBvcnQgY2xhc3MgQzRnTGF5ZXJ7XG4gIFxuICBjb25zdHJ1Y3RvcihsYXllckFycikge1xuICAgIHRoaXMuaWQgPSBsYXllckFyclsnaWQnXTtcbiAgICB0aGlzLnBpZCA9IGxheWVyQXJyWydwaWQnXTtcbiAgICB0aGlzLmFzeW5jX2NvbnRlbnQgPSBsYXllckFyclsnYXN5bmNfY29udGVudCddO1xuICAgIHRoaXMuY29udGVudCA9IGxheWVyQXJyWydjb250ZW50J107XG4gICAgdGhpcy5jc3NDbGFzcyA9IGxheWVyQXJyWydjc3NDbGFzcyddO1xuICAgIHRoaXMuaGlkZSA9IGxheWVyQXJyWydoaWRlJ107XG4gICAgdGhpcy5oaWRlX2NoaWxkID0gbGF5ZXJBcnJbJ2hpZGVfY2hpbGQnXTtcbiAgICB0aGlzLnR5cGUgPSBsYXllckFyclsndHlwZSddO1xuICAgIHRoaXMuY2x1c3RlciA9IGxheWVyQXJyWydjbHVzdGVyJ107XG4gICAgdGhpcy56b29tID0gbGF5ZXJBcnJbJ3pvb20nXTtcbiAgICB0aGlzLnpvb21fbG9jYXRpb25zID0gbGF5ZXJBcnJbJ3pvb21fbG9jYXRpb25zJ107XG4gICAgdGhpcy5kaXNwbGF5ID0gbGF5ZXJBcnJbJ2Rpc3BsYXknXTtcbiAgICB0aGlzLmhhc0NoaWxkcyA9IGxheWVyQXJyWydoYXNDaGlsZHMnXTtcbiAgICB0aGlzLmNoaWxkcyA9IGxheWVyQXJyWydjaGlsZHMnXTtcbiAgICB0aGlzLmNoaWxkc0NvdW50ID0gbGF5ZXJBcnJbJ2NoaWxkc0NvdW50J107XG4gICAgdGhpcy5yZW5kZXJTcGVjaWFsID0gbGF5ZXJBcnJbJ3JlbmRlclNwZWNpYWwnXTtcbiAgICB0aGlzLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnR5cGUgPSBsYXllckFyclsndHlwZSddO1xuICAgIHRoaXMubG9jc3R5bGUgPSBsYXllckFyclsnbG9jc3R5bGUnXTtcbiAgICB0aGlzLm5hbWUgPSBsYXllckFyclsnbmFtZSddO1xuICAgIHRoaXMudGFiSWQgPSBsYXllckFyclsndGFiSWQnXTtcbiAgICB0aGlzLnNwbGl0X2dlb2pzb24gPSBsYXllckFyclsnc3BsaXRfZ2VvanNvbiddO1xuICAgIHRoaXMuZ2VvanNvbl9hdHRyaWJ1dGVzID0gbGF5ZXJBcnJbJ2dlb2pzb25fYXR0cmlidXRlcyddO1xuICAgIHRoaXMuZ2VvanNvbl96b29tID0gbGF5ZXJBcnJbJ2dlb2pzb25fem9vbSddO1xuICAgIHRoaXMubGF5ZXJuYW1lID0gbGF5ZXJBcnJbJ2xheWVybmFtZSddO1xuICAgIHRoaXMudmlzaWJsZUNoaWxkcyA9IGZhbHNlO1xuICAgIHRoaXMudmVjdG9yTGF5ZXIgPSBudWxsO1xuICAgIHRoaXMuaGlkZVdoZW5JblRhYiA9IGxheWVyQXJyWydoaWRlX3doZW5faW5fdGFiJ107XG5cbiAgICBpZiAobGF5ZXJBcnIucHJvamVjdElkKSB7XG4gICAgICB0aGlzLnByb2plY3RJZCA9IGxheWVyQXJyLnByb2plY3RJZDtcbiAgICB9XG4gICAgaWYobGF5ZXJBcnIucG9wdXApe1xuICAgICAgdGhpcy5wb3B1cCA9IGxheWVyQXJyLnBvcHVwO1xuICAgIH1cbiAgICB0aGlzLmF3ZXNvbWVpY29uID0gbGF5ZXJBcnJbJ2F3ZXNvbWVpY29uJ11cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWxheWVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==