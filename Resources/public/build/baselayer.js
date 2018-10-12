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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-baselayer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-baselayer.js":
/*!**********************************************!*\
  !*** ./Resources/public/js/c4g-baselayer.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gBaselayer = function C4gBaselayer(baselayerArr, controller) {
    _classCallCheck(this, C4gBaselayer);

    this.id = baselayerArr['id'];
    this.pid = baselayerArr['pid'];
    this.name = baselayerArr['name'];
    this.display_name = baselayerArr['display_name'];
    this.provider = baselayerArr['provider'];
    this.osm_style = baselayerArr['osm_style'];
    this.osm_style_url1 = baselayerArr['osm_style_url1'];
    this.osm_style_url2 = baselayerArr['osm_style_url2'];
    this.osm_style_url3 = baselayerArr['osm_style_url3'];
    this.osm_style_url4 = baselayerArr['osm_style_url4'];
    this.osm_keyname = baselayerArr['osm_keyname'];
    this.mapbox_type = baselayerArr['mapbox_type'];
    this.bing_style = baselayerArr['bing_style'];
    this.style = baselayerArr['style'];
    this.attribution = baselayerArr['attribution'];
    this.params = baselayerArr['params'];
    this.wms_gutter = baselayerArr['wms_gutter'];
    this.minZoom = baselayerArr['minZoom'];
    this.maxZoom = baselayerArr['maxZoom'];
    this.protect_baselayer = baselayerArr['protect_baselayer'];
    this.permitted_groups = baselayerArr['permitted_groups'];
    this.api_key = baselayerArr['apiKey'] ? baselayerArr['apiKey'] : baselayerArr['api_key'];
    this.app_id = baselayerArr['app_id'];
    this.thunderforest_type = baselayerArr['thunderforest_type'];
    this.here_type = baselayerArr['here_type'];
    this.cesium = baselayerArr['cesium'];
    this.hide_in_be = baselayerArr['hide_in_be'];
    this.url = baselayerArr['url'];
    this.urls = baselayerArr['urls'];
    this.klokan_type = baselayerArr['klokan_type'];
    this.style_url = baselayerArr['style_url'];
    this.hasOverlays = baselayerArr['hasOverlays'];
    this.overlays = baselayerArr['overlays'];
    if (baselayerArr['layerGroup']) {
        var layerGroup = [];
        for (var index in baselayerArr['layerGroup']) {
            if (baselayerArr['layerGroup'].hasOwnProperty(index)) {
                layerGroup[index] = new C4gBaselayer(baselayerArr['layerGroup'][index]['entry']);
                layerGroup[index]['minZoom'] = baselayerArr['layerGroup'][index]['minZoom'];
                layerGroup[index]['maxZoom'] = baselayerArr['layerGroup'][index]['maxZoom'];
            }
        }
        this.layerGroup = layerGroup;
    }
    this.overlayController = new C4gOverlayController(this);
    this.layer = false;
    this.controller = controller;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDMyMDdhMmI4NzJkMTcwNGJkZjEiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctYmFzZWxheWVyLmpzIl0sIm5hbWVzIjpbIkM0Z0Jhc2VsYXllciIsImJhc2VsYXllckFyciIsImNvbnRyb2xsZXIiLCJpZCIsInBpZCIsIm5hbWUiLCJkaXNwbGF5X25hbWUiLCJwcm92aWRlciIsIm9zbV9zdHlsZSIsIm9zbV9zdHlsZV91cmwxIiwib3NtX3N0eWxlX3VybDIiLCJvc21fc3R5bGVfdXJsMyIsIm9zbV9zdHlsZV91cmw0Iiwib3NtX2tleW5hbWUiLCJtYXBib3hfdHlwZSIsImJpbmdfc3R5bGUiLCJzdHlsZSIsImF0dHJpYnV0aW9uIiwicGFyYW1zIiwid21zX2d1dHRlciIsIm1pblpvb20iLCJtYXhab29tIiwicHJvdGVjdF9iYXNlbGF5ZXIiLCJwZXJtaXR0ZWRfZ3JvdXBzIiwiYXBpX2tleSIsImFwcF9pZCIsInRodW5kZXJmb3Jlc3RfdHlwZSIsImhlcmVfdHlwZSIsImNlc2l1bSIsImhpZGVfaW5fYmUiLCJ1cmwiLCJ1cmxzIiwia2xva2FuX3R5cGUiLCJzdHlsZV91cmwiLCJoYXNPdmVybGF5cyIsIm92ZXJsYXlzIiwibGF5ZXJHcm91cCIsImluZGV4IiwiaGFzT3duUHJvcGVydHkiLCJvdmVybGF5Q29udHJvbGxlciIsIkM0Z092ZXJsYXlDb250cm9sbGVyIiwibGF5ZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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a0IsU0FBbEIsSUFBK0JwQyxhQUFhLFlBQWIsRUFBMkJvQyxLQUEzQixFQUFrQyxTQUFsQyxDQUEvQjtBQUNBRCwyQkFBV0MsS0FBWCxFQUFrQixTQUFsQixJQUErQnBDLGFBQWEsWUFBYixFQUEyQm9DLEtBQTNCLEVBQWtDLFNBQWxDLENBQS9CO0FBQ0Q7QUFDSjtBQUNELGFBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7QUFDRCxTQUFLRyxpQkFBTCxHQUF5QixJQUFJQyxvQkFBSixDQUF5QixJQUF6QixDQUF6QjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS3ZDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0gsQyIsImZpbGUiOiJiYXNlbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWJhc2VsYXllci5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MzIwN2EyYjg3MmQxNzA0YmRmMSIsImNsYXNzIEM0Z0Jhc2VsYXllcntcbiAgICBjb25zdHJ1Y3RvcihiYXNlbGF5ZXJBcnIsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5pZCA9IGJhc2VsYXllckFyclsnaWQnXTtcbiAgICAgICAgdGhpcy5waWQgPSBiYXNlbGF5ZXJBcnJbJ3BpZCddO1xuICAgICAgICB0aGlzLm5hbWUgPSBiYXNlbGF5ZXJBcnJbJ25hbWUnXTtcbiAgICAgICAgdGhpcy5kaXNwbGF5X25hbWUgPSBiYXNlbGF5ZXJBcnJbJ2Rpc3BsYXlfbmFtZSddO1xuICAgICAgICB0aGlzLnByb3ZpZGVyID0gYmFzZWxheWVyQXJyWydwcm92aWRlciddO1xuICAgICAgICB0aGlzLm9zbV9zdHlsZSA9IGJhc2VsYXllckFyclsnb3NtX3N0eWxlJ107XG4gICAgICAgIHRoaXMub3NtX3N0eWxlX3VybDEgPSBiYXNlbGF5ZXJBcnJbJ29zbV9zdHlsZV91cmwxJ107XG4gICAgICAgIHRoaXMub3NtX3N0eWxlX3VybDIgPSBiYXNlbGF5ZXJBcnJbJ29zbV9zdHlsZV91cmwyJ107XG4gICAgICAgIHRoaXMub3NtX3N0eWxlX3VybDMgPSBiYXNlbGF5ZXJBcnJbJ29zbV9zdHlsZV91cmwzJ107XG4gICAgICAgIHRoaXMub3NtX3N0eWxlX3VybDQgPSBiYXNlbGF5ZXJBcnJbJ29zbV9zdHlsZV91cmw0J107XG4gICAgICAgIHRoaXMub3NtX2tleW5hbWUgPSBiYXNlbGF5ZXJBcnJbJ29zbV9rZXluYW1lJ107XG4gICAgICAgIHRoaXMubWFwYm94X3R5cGUgPSBiYXNlbGF5ZXJBcnJbJ21hcGJveF90eXBlJ107XG4gICAgICAgIHRoaXMuYmluZ19zdHlsZSA9IGJhc2VsYXllckFyclsnYmluZ19zdHlsZSddO1xuICAgICAgICB0aGlzLnN0eWxlID0gYmFzZWxheWVyQXJyWydzdHlsZSddO1xuICAgICAgICB0aGlzLmF0dHJpYnV0aW9uID0gYmFzZWxheWVyQXJyWydhdHRyaWJ1dGlvbiddO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IGJhc2VsYXllckFyclsncGFyYW1zJ107XG4gICAgICAgIHRoaXMud21zX2d1dHRlciA9IGJhc2VsYXllckFyclsnd21zX2d1dHRlciddO1xuICAgICAgICB0aGlzLm1pblpvb20gPSBiYXNlbGF5ZXJBcnJbJ21pblpvb20nXTtcbiAgICAgICAgdGhpcy5tYXhab29tID0gYmFzZWxheWVyQXJyWydtYXhab29tJ107XG4gICAgICAgIHRoaXMucHJvdGVjdF9iYXNlbGF5ZXIgPSBiYXNlbGF5ZXJBcnJbJ3Byb3RlY3RfYmFzZWxheWVyJ107XG4gICAgICAgIHRoaXMucGVybWl0dGVkX2dyb3VwcyA9IGJhc2VsYXllckFyclsncGVybWl0dGVkX2dyb3VwcyddO1xuICAgICAgICB0aGlzLmFwaV9rZXkgPSBiYXNlbGF5ZXJBcnJbJ2FwaUtleSddID8gYmFzZWxheWVyQXJyWydhcGlLZXknXSA6IGJhc2VsYXllckFyclsnYXBpX2tleSddO1xuICAgICAgICB0aGlzLmFwcF9pZCA9IGJhc2VsYXllckFyclsnYXBwX2lkJ107XG4gICAgICAgIHRoaXMudGh1bmRlcmZvcmVzdF90eXBlID0gYmFzZWxheWVyQXJyWyd0aHVuZGVyZm9yZXN0X3R5cGUnXTtcbiAgICAgICAgdGhpcy5oZXJlX3R5cGUgPSBiYXNlbGF5ZXJBcnJbJ2hlcmVfdHlwZSddO1xuICAgICAgICB0aGlzLmNlc2l1bSA9IGJhc2VsYXllckFyclsnY2VzaXVtJ107XG4gICAgICAgIHRoaXMuaGlkZV9pbl9iZSA9IGJhc2VsYXllckFyclsnaGlkZV9pbl9iZSddO1xuICAgICAgICB0aGlzLnVybCA9IGJhc2VsYXllckFyclsndXJsJ107XG4gICAgICAgIHRoaXMudXJscyA9IGJhc2VsYXllckFyclsndXJscyddO1xuICAgICAgICB0aGlzLmtsb2thbl90eXBlID0gYmFzZWxheWVyQXJyWydrbG9rYW5fdHlwZSddO1xuICAgICAgICB0aGlzLnN0eWxlX3VybCA9IGJhc2VsYXllckFyclsnc3R5bGVfdXJsJ107XG4gICAgICAgIHRoaXMuaGFzT3ZlcmxheXMgPSBiYXNlbGF5ZXJBcnJbJ2hhc092ZXJsYXlzJ107XG4gICAgICAgIHRoaXMub3ZlcmxheXMgPSBiYXNlbGF5ZXJBcnJbJ292ZXJsYXlzJ107XG4gICAgICAgIGlmKGJhc2VsYXllckFyclsnbGF5ZXJHcm91cCddKXtcbiAgICAgICAgICAgIGxldCBsYXllckdyb3VwID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGluZGV4IGluIGJhc2VsYXllckFyclsnbGF5ZXJHcm91cCddICl7XG4gICAgICAgICAgICAgICAgaWYoYmFzZWxheWVyQXJyWydsYXllckdyb3VwJ10uaGFzT3duUHJvcGVydHkoaW5kZXgpKXtcbiAgICAgICAgICAgICAgICAgIGxheWVyR3JvdXBbaW5kZXhdID0gbmV3IEM0Z0Jhc2VsYXllcihiYXNlbGF5ZXJBcnJbJ2xheWVyR3JvdXAnXVtpbmRleF1bJ2VudHJ5J10pO1xuICAgICAgICAgICAgICAgICAgbGF5ZXJHcm91cFtpbmRleF1bJ21pblpvb20nXSA9IGJhc2VsYXllckFyclsnbGF5ZXJHcm91cCddW2luZGV4XVsnbWluWm9vbSddO1xuICAgICAgICAgICAgICAgICAgbGF5ZXJHcm91cFtpbmRleF1bJ21heFpvb20nXSA9IGJhc2VsYXllckFyclsnbGF5ZXJHcm91cCddW2luZGV4XVsnbWF4Wm9vbSddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGF5ZXJHcm91cCA9IGxheWVyR3JvdXA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vdmVybGF5Q29udHJvbGxlciA9IG5ldyBDNGdPdmVybGF5Q29udHJvbGxlcih0aGlzKTtcbiAgICAgICAgdGhpcy5sYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWJhc2VsYXllci5qcyJdLCJzb3VyY2VSb290IjoiIn0=