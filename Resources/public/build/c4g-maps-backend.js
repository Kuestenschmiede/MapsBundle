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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-backend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-maps-backend.js":
/*!*************************************************!*\
  !*** ./Resources/public/js/c4g-maps-backend.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.backend = this.c4g.maps.backend || {};

(function (c4g) {
  'use strict';

  window.onload = function () {
    var sortData = document.getElementsByClassName("btn primary");
    for (var i = 0; i < sortData.length; i++) {
      alert(sortData[i].innerHTML);
    }
  };

  /**
   * c4gmaps helper functions
   */
  c4g.maps.backend = {
    // @NOTE:  use c4g.maps.utils.getUniqueId()  ?

    /**
     * @TODO: [showGeoEditor description]
     *
     * @param   {[type]}  href         [description]
     * @param   {[type]}  dataField    [description]
     * @param   {[type]}  opt_options  [description]
     *
     * @return  {[type]}               [description]
     */
    showGeoEditor: function showGeoEditor(href, dataField, opt_options) {
      var options, minWidth, maxWidth, maxHeight, modalWindow;

      if (!href || !dataField) {
        return false;
      }

      href += "&geoData=" + encodeURIComponent(btoa(dataField.value));

      c4g.maps.backend.currentId = dataField;
      c4g.maps.backend.ppGeoData = dataField.value;

      options = opt_options || {};

      options.url = href;

      minWidth = 360;
      maxWidth = (window.getSize().x - 50).toInt();
      if (!options.width || options.width > maxWidth || options.width < minWidth) {
        options.width = maxWidth >= minWidth ? maxWidth : minWidth;
      }
      maxHeight = (window.getSize().y - 160).toInt();
      if (!options.height || options.height > maxHeight) {
        options.height = maxHeight;
      }
      modalWindow = new SimpleModal({
        'width': options.width.toString(),
        'btn_ok': Contao.lang.close,
        'draggable': false,
        'overlayOpacity': 0.5,
        'onShow': function onShow() {
          document.body.setStyle('overflow', 'hidden');
        },
        'onHide': function onHide() {
          document.body.setStyle('overflow', 'auto');
        }
      });

      modalWindow.addButton(Contao.lang.close, 'btn', function () {
        this.hide();
      });
      modalWindow.addButton(Contao.lang.apply, 'btn primary', function () {

        dataField.value = document.getElementById('geo_editor_iframe').contentWindow.document.getElementById('c4gGeoEditorGeoData').value;
        this.hide();
      });
      modalWindow.show({
        'title': options.title || '',
        'contents': '<iframe src="' + options.url + '" width="100%" height="' + options.height + '" frameborder="0" id="geo_editor_iframe"></iframe>',
        'model': 'modal'
      });
    },

    /**
     * @TODO: [showGeoPicker description]
     *
     * @param   {[type]}  href         [description]
     * @param   {[type]}  geoFieldX    [description]
     * @param   {[type]}  geoFieldY    [description]
     * @param   {[type]}  opt_options  [description]
     *
     * @return  {[type]}               [description]
     */
    showGeoPicker: function showGeoPicker(href, geoFieldX, geoFieldY, opt_options) {
      var options, max, modalWindow;

      href += "&geoX=" + geoFieldX.value;
      href += "&geoY=" + geoFieldY.value;

      c4g.maps.backend.currentIdX = geoFieldX;
      c4g.maps.backend.ppGeoX = geoFieldX.value;

      c4g.maps.backend.currentIdY = geoFieldY;
      c4g.maps.backend.ppGeoY = geoFieldY.value;

      options = opt_options || {};

      options.url = href;
      options.width = '360';

      max = (window.getSize().y - 180).toInt();
      if (!options.height || options.height > max) {
        options.height = max;
      }
      modalWindow = new SimpleModal({
        'width': options.width,
        'btn_ok': Contao.lang.close,
        'draggable': false,
        'overlayOpacity': 0.5,
        'onShow': function onShow() {
          document.body.setStyle('overflow', 'hidden');
        },
        'onHide': function onHide() {
          document.body.setStyle('overflow', 'auto');
        }
      });

      modalWindow.addButton(Contao.lang.close, 'btn', function () {
        this.hide();
      });
      modalWindow.addButton(Contao.lang.apply, 'btn primary', function () {

        geoFieldX.value = document.getElementById('geo_picker_iframe').contentWindow.document.getElementById('c4gGeoPickerGeoX').value;
        geoFieldY.value = document.getElementById('geo_picker_iframe').contentWindow.document.getElementById('c4gGeoPickerGeoY').value;

        this.hide();
      });
      modalWindow.show({
        'title': options.title || '',
        'contents': '<iframe src="' + options.url + '" width="100%" height="' + options.height + '" frameborder="0" id="geo_picker_iframe"></iframe>',
        'model': 'modal'
      });
    }

  };
})(this.c4g);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1iYWNrZW5kLmpzIl0sIm5hbWVzIjpbImM0ZyIsIm1hcHMiLCJiYWNrZW5kIiwid2luZG93Iiwib25sb2FkIiwic29ydERhdGEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwiYWxlcnQiLCJpbm5lckhUTUwiLCJzaG93R2VvRWRpdG9yIiwiaHJlZiIsImRhdGFGaWVsZCIsIm9wdF9vcHRpb25zIiwib3B0aW9ucyIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJtb2RhbFdpbmRvdyIsImVuY29kZVVSSUNvbXBvbmVudCIsImJ0b2EiLCJ2YWx1ZSIsImN1cnJlbnRJZCIsInBwR2VvRGF0YSIsInVybCIsImdldFNpemUiLCJ4IiwidG9JbnQiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJTaW1wbGVNb2RhbCIsInRvU3RyaW5nIiwiQ29udGFvIiwibGFuZyIsImNsb3NlIiwiYm9keSIsInNldFN0eWxlIiwiYWRkQnV0dG9uIiwiaGlkZSIsImFwcGx5IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50V2luZG93Iiwic2hvdyIsInRpdGxlIiwic2hvd0dlb1BpY2tlciIsImdlb0ZpZWxkWCIsImdlb0ZpZWxkWSIsIm1heCIsImN1cnJlbnRJZFgiLCJwcEdlb1giLCJjdXJyZW50SWRZIiwicHBHZW9ZIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFB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QUNBMEIsa0JBQVUxQixLQUFWLEdBQWtCakIsU0FBU3FDLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDQyxhQUE3QyxDQUEyRHRDLFFBQTNELENBQW9FcUMsY0FBcEUsQ0FBbUYsa0JBQW5GLEVBQXVHcEIsS0FBekg7O0FBRUEsYUFBS2tCLElBQUw7QUFDRCxPQU5EO0FBT0FyQixrQkFBWXlCLElBQVosQ0FBaUI7QUFDZixpQkFBUzdCLFFBQVE4QixLQUFSLElBQWlCLEVBRFg7QUFFZixvQkFBWSxrQkFBa0I5QixRQUFRVSxHQUExQixHQUFnQyx5QkFBaEMsR0FBNERWLFFBQVFnQixNQUFwRSxHQUE2RSxvREFGMUU7QUFHZixpQkFBUztBQUhNLE9BQWpCO0FBS0Q7O0FBbElnQixHQUFuQjtBQXNJRCxDQXBKQSxFQW9KQyxLQUFLaEMsR0FwSk4sQ0FBRCxDIiwiZmlsZSI6ImM0Zy1tYXBzLWJhY2tlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtYmFja2VuZC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMzYzNGVhNDU5N2NkNWI3MzVkMCIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuYmFja2VuZCA9IHRoaXMuYzRnLm1hcHMuYmFja2VuZCB8fCB7fTtcblxuKGZ1bmN0aW9uIChjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgc29ydERhdGEgPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gcHJpbWFyeVwiKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgc29ydERhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgYWxlcnQoc29ydERhdGFbaV0uaW5uZXJIVE1MKTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIC8qKlxuICAgKiBjNGdtYXBzIGhlbHBlciBmdW5jdGlvbnNcbiAgICovXG4gIGM0Zy5tYXBzLmJhY2tlbmQgPSB7XG4gICAgLy8gQE5PVEU6ICB1c2UgYzRnLm1hcHMudXRpbHMuZ2V0VW5pcXVlSWQoKSAgP1xuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFtzaG93R2VvRWRpdG9yIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge1t0eXBlXX0gIGhyZWYgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge1t0eXBlXX0gIGRhdGFGaWVsZCAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge1t0eXBlXX0gIG9wdF9vcHRpb25zICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzaG93R2VvRWRpdG9yOiBmdW5jdGlvbiAoaHJlZiwgZGF0YUZpZWxkLCBvcHRfb3B0aW9ucykge1xuICAgICAgdmFyIG9wdGlvbnMsXG4gICAgICAgICAgbWluV2lkdGgsXG4gICAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgICAgbWF4SGVpZ2h0LFxuICAgICAgICAgIG1vZGFsV2luZG93O1xuXG4gICAgICBpZiAoIWhyZWYgfHwgIWRhdGFGaWVsZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGhyZWYgKz0gXCImZ2VvRGF0YT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChidG9hKGRhdGFGaWVsZC52YWx1ZSkpO1xuXG4gICAgICBjNGcubWFwcy5iYWNrZW5kLmN1cnJlbnRJZCA9IGRhdGFGaWVsZDtcbiAgICAgIGM0Zy5tYXBzLmJhY2tlbmQucHBHZW9EYXRhID0gZGF0YUZpZWxkLnZhbHVlO1xuXG4gICAgICBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG5cbiAgICAgIG9wdGlvbnMudXJsID0gaHJlZjtcblxuICAgICAgbWluV2lkdGggPSAzNjA7XG4gICAgICBtYXhXaWR0aCA9ICh3aW5kb3cuZ2V0U2l6ZSgpLnggLSA1MCkudG9JbnQoKTtcbiAgICAgIGlmICghb3B0aW9ucy53aWR0aCB8fCBvcHRpb25zLndpZHRoID4gbWF4V2lkdGggfHwgb3B0aW9ucy53aWR0aCA8IG1pbldpZHRoKSB7XG4gICAgICAgIG9wdGlvbnMud2lkdGggPSAobWF4V2lkdGggPj0gbWluV2lkdGgpID8gbWF4V2lkdGggOiBtaW5XaWR0aDtcbiAgICAgIH1cbiAgICAgIG1heEhlaWdodCA9ICh3aW5kb3cuZ2V0U2l6ZSgpLnkgLSAxNjApLnRvSW50KCk7XG4gICAgICBpZiAoIW9wdGlvbnMuaGVpZ2h0IHx8IG9wdGlvbnMuaGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgIG9wdGlvbnMuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgfVxuICAgICAgbW9kYWxXaW5kb3cgPSBuZXcgU2ltcGxlTW9kYWwoe1xuICAgICAgICAnd2lkdGgnOiBvcHRpb25zLndpZHRoLnRvU3RyaW5nKCksXG4gICAgICAgICdidG5fb2snOiBDb250YW8ubGFuZy5jbG9zZSxcbiAgICAgICAgJ2RyYWdnYWJsZSc6IGZhbHNlLFxuICAgICAgICAnb3ZlcmxheU9wYWNpdHknOiAwLjUsXG4gICAgICAgICdvblNob3cnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRTdHlsZSgnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgIH0sXG4gICAgICAgICdvbkhpZGUnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRTdHlsZSgnb3ZlcmZsb3cnLCAnYXV0bycpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbW9kYWxXaW5kb3cuYWRkQnV0dG9uKENvbnRhby5sYW5nLmNsb3NlLCAnYnRuJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgICAgbW9kYWxXaW5kb3cuYWRkQnV0dG9uKENvbnRhby5sYW5nLmFwcGx5LCAnYnRuIHByaW1hcnknLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgZGF0YUZpZWxkLnZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlb19lZGl0b3JfaWZyYW1lJykuY29udGVudFdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYzRnR2VvRWRpdG9yR2VvRGF0YScpLnZhbHVlO1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgICAgbW9kYWxXaW5kb3cuc2hvdyh7XG4gICAgICAgICd0aXRsZSc6IG9wdGlvbnMudGl0bGUgfHwgJycsXG4gICAgICAgICdjb250ZW50cyc6ICc8aWZyYW1lIHNyYz1cIicgKyBvcHRpb25zLnVybCArICdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCInICsgb3B0aW9ucy5oZWlnaHQgKyAnXCIgZnJhbWVib3JkZXI9XCIwXCIgaWQ9XCJnZW9fZWRpdG9yX2lmcmFtZVwiPjwvaWZyYW1lPicsXG4gICAgICAgICdtb2RlbCc6ICdtb2RhbCdcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW3Nob3dHZW9QaWNrZXIgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7W3R5cGVdfSAgaHJlZiAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7W3R5cGVdfSAgZ2VvRmllbGRYICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7W3R5cGVdfSAgZ2VvRmllbGRZICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7W3R5cGVdfSAgb3B0X29wdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHNob3dHZW9QaWNrZXI6IGZ1bmN0aW9uIChocmVmLCBnZW9GaWVsZFgsIGdlb0ZpZWxkWSwgb3B0X29wdGlvbnMpIHtcbiAgICAgIHZhciBvcHRpb25zLFxuICAgICAgICAgIG1heCxcbiAgICAgICAgICBtb2RhbFdpbmRvdztcblxuICAgICAgaHJlZiArPSBcIiZnZW9YPVwiICsgZ2VvRmllbGRYLnZhbHVlO1xuICAgICAgaHJlZiArPSBcIiZnZW9ZPVwiICsgZ2VvRmllbGRZLnZhbHVlO1xuXG4gICAgICBjNGcubWFwcy5iYWNrZW5kLmN1cnJlbnRJZFggPSBnZW9GaWVsZFg7XG4gICAgICBjNGcubWFwcy5iYWNrZW5kLnBwR2VvWCA9IGdlb0ZpZWxkWC52YWx1ZTtcblxuICAgICAgYzRnLm1hcHMuYmFja2VuZC5jdXJyZW50SWRZID0gZ2VvRmllbGRZO1xuICAgICAgYzRnLm1hcHMuYmFja2VuZC5wcEdlb1kgPSBnZW9GaWVsZFkudmFsdWU7XG5cbiAgICAgIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcblxuICAgICAgb3B0aW9ucy51cmwgPSBocmVmO1xuICAgICAgb3B0aW9ucy53aWR0aCA9ICczNjAnO1xuXG4gICAgICBtYXggPSAod2luZG93LmdldFNpemUoKS55IC0gMTgwKS50b0ludCgpO1xuICAgICAgaWYgKCFvcHRpb25zLmhlaWdodCB8fCBvcHRpb25zLmhlaWdodCA+IG1heCkge1xuICAgICAgICBvcHRpb25zLmhlaWdodCA9IG1heDtcbiAgICAgIH1cbiAgICAgIG1vZGFsV2luZG93ID0gbmV3IFNpbXBsZU1vZGFsKHtcbiAgICAgICAgJ3dpZHRoJzogb3B0aW9ucy53aWR0aCxcbiAgICAgICAgJ2J0bl9vayc6IENvbnRhby5sYW5nLmNsb3NlLFxuICAgICAgICAnZHJhZ2dhYmxlJzogZmFsc2UsXG4gICAgICAgICdvdmVybGF5T3BhY2l0eSc6IDAuNSxcbiAgICAgICAgJ29uU2hvdyc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNldFN0eWxlKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgfSxcbiAgICAgICAgJ29uSGlkZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNldFN0eWxlKCdvdmVyZmxvdycsICdhdXRvJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbFdpbmRvdy5hZGRCdXR0b24oQ29udGFvLmxhbmcuY2xvc2UsICdidG4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgICBtb2RhbFdpbmRvdy5hZGRCdXR0b24oQ29udGFvLmxhbmcuYXBwbHksICdidG4gcHJpbWFyeScsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBnZW9GaWVsZFgudmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VvX3BpY2tlcl9pZnJhbWUnKS5jb250ZW50V2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjNGdHZW9QaWNrZXJHZW9YJykudmFsdWU7XG4gICAgICAgIGdlb0ZpZWxkWS52YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW9fcGlja2VyX2lmcmFtZScpLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2M0Z0dlb1BpY2tlckdlb1knKS52YWx1ZTtcblxuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgICAgbW9kYWxXaW5kb3cuc2hvdyh7XG4gICAgICAgICd0aXRsZSc6IG9wdGlvbnMudGl0bGUgfHwgJycsXG4gICAgICAgICdjb250ZW50cyc6ICc8aWZyYW1lIHNyYz1cIicgKyBvcHRpb25zLnVybCArICdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCInICsgb3B0aW9ucy5oZWlnaHQgKyAnXCIgZnJhbWVib3JkZXI9XCIwXCIgaWQ9XCJnZW9fcGlja2VyX2lmcmFtZVwiPjwvaWZyYW1lPicsXG4gICAgICAgICdtb2RlbCc6ICdtb2RhbCdcbiAgICAgIH0pO1xuICAgIH1cblxuICB9O1xuXG59KHRoaXMuYzRnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1iYWNrZW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==