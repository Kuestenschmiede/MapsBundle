(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-print_jsx"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // removed by dead control flow
{}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-print.jsx":
/*!**********************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-print.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _fileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var _c4gMapsUtils = __webpack_require__(/*! ./../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var Print = exports["default"] = /*#__PURE__*/function (_Component) {
  function Print(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Print);
    _this = _callSuper(this, Print, [props]);
    var element, button;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    var map = props.mapController.map;
    var mapData = props.mapController.data;

    // export options for html-to-image.
    // See: https://github.com/bubkoo/html-to-image#options
    var exportOptions = {
      filter: function filter(element) {
        return element.className ? (element.className.indexOf('ol-control') === -1 ||
        //print no controls (buttons)
        element.className.indexOf('ol-uncollapsible') !== -1) &&
        //exception attributions if always to be displayed
        element.className.indexOf('c4g-open') === -1 //print no sideboards (right panels)
        : true;
      },
      bgcolor: '#ffffff'
    };
    var toggle = function toggle(event) {
      var _this2 = this;
      event.stopPropagation();
      if (map.getTarget()) {
        this.forcePrint = true;
        map.once('rendercomplete', function () {
          this.forcePrint = false;
          var mapCanvas = document.createElement('canvas');
          var size = map.getSize();
          mapCanvas.width = size[0];
          mapCanvas.height = size[1];
          var mapContext = mapCanvas.getContext('2d');
          Array.prototype.forEach.call(map.getViewport().querySelectorAll('.ol-layer canvas, canvas.ol-layer'), function (canvas) {
            if (canvas.width > 0) {
              var opacity = canvas.parentNode.style.opacity || canvas.style.opacity;
              mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
              var matrix;
              var transform = canvas.style.transform;
              if (transform) {
                // Get the transform parameters from the style's transform matrix
                matrix = transform.match(/^matrix\(([^\(]*)\)$/)[1].split(',').map(Number);
              } else {
                matrix = [parseFloat(canvas.style.width) / canvas.width, 0, 0, parseFloat(canvas.style.height) / canvas.height, 0, 0];
              }
              // Apply the transform to the export map context
              CanvasRenderingContext2D.prototype.setTransform.apply(mapContext, matrix);
              var backgroundColor = canvas.parentNode.style.backgroundColor;
              if (backgroundColor) {
                mapContext.fillStyle = backgroundColor;
                mapContext.fillRect(0, 0, canvas.width, canvas.height);
              }
              mapContext.drawImage(canvas, 0, 0);
            }
          });
          mapContext.globalAlpha = 1;
          mapContext.setTransform(1, 0, 0, 1, 0, 0);
          var dataURL = mapCanvas.toDataURL();
          if (window.c4gMapsHooks.printMap && window.c4gMapsHooks.printMap.length > 0) {
            var arrReturn = _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.printMap, dataURL);
          } else {
            (0, _fileSaver.saveAs)(dataURL, 'map.png');
          }
        });
        window.setTimeout(function () {
          if (_this2.forcePrint) {
            map.dispatchEvent('rendercomplete');
          }
        }, 200);
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.PRINT + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' c4g-portside-control ol-control';

    // button
    button = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = langConstants.CTRL_PRINT;
      button.appendChild(span);
    } else {
      button.title = langConstants.CTRL_PRINT;
    }
    button.className = _c4gMapsConstant.cssConstants.PRINT;
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, {
      useCapture: false,
      passive: true
    });
    button.addEventListener('touchstart', toggle, {
      useCapture: false,
      passive: true
    });

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    var control = new _control.Control({
      element: element,
      target: _this.props.target
    });
    var mapController = props.mapController;
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "print";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.print = control;
    return _this;
  }
  (0, _inherits2["default"])(Print, _Component);
  return (0, _createClass2["default"])(Print, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcHJpbnRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLCtHQUFlLEdBQUcsSUFBcUMsQ0FBQyxpQ0FBTyxFQUFFLG9DQUFDLENBQUM7QUFBQTtBQUFBO0FBQUEsa0dBQUMsQ0FBQyxLQUFLO0FBQUEsRUFBNkUsQ0FBQyxrQkFBa0IsYUFBYSxnQkFBZ0IsK0JBQStCLFdBQVcsNEZBQTRGLFdBQVcsa0VBQWtFLDREQUE0RCxZQUFZLElBQUksa0JBQWtCLHlCQUF5QiwwREFBMEQsa0JBQWtCLHNCQUFzQix5Q0FBeUMsVUFBVSxjQUFjLHlCQUF5QixvQkFBb0IsSUFBSSxTQUFTLFVBQVUsb0NBQW9DLGNBQWMsSUFBSSx5Q0FBeUMsU0FBUywwQ0FBMEMsMEZBQTBGLDJIQUEySCxxQkFBTSxFQUFFLHFCQUFNLFVBQVUscUJBQU0sQ0FBQyxxQkFBTSx3TUFBd00sOERBQThELHVEQUF1RCxpTkFBaU4sMEJBQTBCLDRCQUE0QixLQUFLLEtBQUssZ0RBQWdELG1GQUFtRixzQkFBc0IsS0FBSyxrQ0FBa0MsaURBQWlELEtBQUssR0FBRyxtQkFBbUIsOEhBQThILG9JQUFvSSxpREFBaUQscUJBQXFCLHVCQUF1QixlQUFlLDBCQUEwQixHQUFHLHdCQUF3Qix5Q0FBeUMsb0JBQW9CLEtBQUssZ0RBQWdELDREQUE0RCxxQkFBcUIsT0FBTyxFQUFFLG9CQUFvQixLQUEwQixxQkFBcUI7O0FBRWhwRix5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxnQkFBQSxHQUFBRixtQkFBQTtBQUNBLElBQUFHLFlBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxVQUFBLEdBQUFKLG1CQUFBO0FBQ0EsSUFBQUssYUFBQSxHQUFBTCxtQkFBQTtBQUEwQyxTQUFBRCx3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S0FBSyxDQUFDLENBQUNILE9BQU8sR0FBR0EsT0FBTztJQUNwRHZFLGFBQWEsQ0FBQzhFLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLEdBQUdULE9BQU87SUFBQyxPQUFBN0UsS0FBQTtFQUN0RDtFQUFDLElBQUF1RixVQUFBLGFBQUEzRixLQUFBLEVBQUFFLFVBQUE7RUFBQSxXQUFBMEYsYUFBQSxhQUFBNUYsS0FBQTtJQUFBNkYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQ1AsT0FBTyxJQUFJO0lBQ2I7RUFBQztBQUFBLEVBaklnQ0MsZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9kaXN0L0ZpbGVTYXZlci5taW4uanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXByaW50LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYSxiLGMpe3ZhciBkPW5ldyBYTUxIdHRwUmVxdWVzdDtkLm9wZW4oXCJHRVRcIixhKSxkLnJlc3BvbnNlVHlwZT1cImJsb2JcIixkLm9ubG9hZD1mdW5jdGlvbigpe2coZC5yZXNwb25zZSxiLGMpfSxkLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGQuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLm5hdmlnYXRvciYmL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlV2ViS2l0Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxnPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlJiYhYT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGIsZCxlLGcpe2lmKGc9Z3x8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGcmJihnLmRvY3VtZW50LnRpdGxlPWcuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYilyZXR1cm4gYyhiLGQsZSk7dmFyIGg9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWIudHlwZSxpPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGo9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChqfHxoJiZpfHxhKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBrPW5ldyBGaWxlUmVhZGVyO2sub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ay5yZXN1bHQ7YT1qP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGc/Zy5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxnPW51bGx9LGsucmVhZEFzRGF0YVVSTChiKX1lbHNle3ZhciBsPWYuVVJMfHxmLndlYmtpdFVSTCxtPWwuY3JlYXRlT2JqZWN0VVJMKGIpO2c/Zy5sb2NhdGlvbj1tOmxvY2F0aW9uLmhyZWY9bSxnPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2wucmV2b2tlT2JqZWN0VVJMKG0pfSw0RTQpfX0pO2Yuc2F2ZUFzPWcuc2F2ZUFzPWcsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWcpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge3NhdmVBc30gZnJvbSBcImZpbGUtc2F2ZXJcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBlbGVtZW50LFxuICAgICAgYnV0dG9uO1xuXG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGxldCBtYXAgPSBwcm9wcy5tYXBDb250cm9sbGVyLm1hcDtcbiAgICBsZXQgbWFwRGF0YSA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YTtcblxuICAgIC8vIGV4cG9ydCBvcHRpb25zIGZvciBodG1sLXRvLWltYWdlLlxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2J1Ymtvby9odG1sLXRvLWltYWdlI29wdGlvbnNcbiAgICBsZXQgZXhwb3J0T3B0aW9ucyA9IHtcbiAgICAgIGZpbHRlcjogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUgPyAoXG4gICAgICAgICAgKChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdvbC1jb250cm9sJykgPT09IC0xKSB8fCAvL3ByaW50IG5vIGNvbnRyb2xzIChidXR0b25zKVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZignb2wtdW5jb2xsYXBzaWJsZScpICE9PSAtMSkgJiYgLy9leGNlcHRpb24gYXR0cmlidXRpb25zIGlmIGFsd2F5cyB0byBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICAoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZignYzRnLW9wZW4nKSA9PT0gLTEpIC8vcHJpbnQgbm8gc2lkZWJvYXJkcyAocmlnaHQgcGFuZWxzKVxuICAgICAgICApIDogdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBiZ2NvbG9yOiAnI2ZmZmZmZidcbiAgICB9O1xuXG4gICAgbGV0IHRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAobWFwLmdldFRhcmdldCgpKSB7XG4gICAgICAgIHRoaXMuZm9yY2VQcmludCA9IHRydWU7XG4gICAgICAgIG1hcC5vbmNlKCdyZW5kZXJjb21wbGV0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmZvcmNlUHJpbnQgPSBmYWxzZTtcbiAgICAgICAgICBjb25zdCBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICBjb25zdCBzaXplID0gbWFwLmdldFNpemUoKTtcbiAgICAgICAgICBtYXBDYW52YXMud2lkdGggPSBzaXplWzBdO1xuICAgICAgICAgIG1hcENhbnZhcy5oZWlnaHQgPSBzaXplWzFdO1xuICAgICAgICAgIGNvbnN0IG1hcENvbnRleHQgPSBtYXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKFxuICAgICAgICAgICAgICBtYXAuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yQWxsKCcub2wtbGF5ZXIgY2FudmFzLCBjYW52YXMub2wtbGF5ZXInKSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBvcGFjaXR5ID1cbiAgICAgICAgICAgICAgICAgICAgICBjYW52YXMucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5IHx8IGNhbnZhcy5zdHlsZS5vcGFjaXR5O1xuICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5nbG9iYWxBbHBoYSA9IG9wYWNpdHkgPT09ICcnID8gMSA6IE51bWJlcihvcGFjaXR5KTtcbiAgICAgICAgICAgICAgICAgIGxldCBtYXRyaXg7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBjYW52YXMuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRyYW5zZm9ybSBwYXJhbWV0ZXJzIGZyb20gdGhlIHN0eWxlJ3MgdHJhbnNmb3JtIG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICBtYXRyaXggPSB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXRjaCgvXm1hdHJpeFxcKChbXlxcKF0qKVxcKSQvKVsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGNhbnZhcy5zdHlsZS53aWR0aCkgLyBjYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoY2FudmFzLnN0eWxlLmhlaWdodCkgLyBjYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSB0cmFuc2Zvcm0gdG8gdGhlIGV4cG9ydCBtYXAgY29udGV4dFxuICAgICAgICAgICAgICAgICAgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5zZXRUcmFuc2Zvcm0uYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBjYW52YXMucGFyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICBpZiAoYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmRyYXdJbWFnZShjYW52YXMsIDAsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgbWFwQ29udGV4dC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgICAgbWFwQ29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgICAgbGV0IGRhdGFVUkwgPSBtYXBDYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgaWYgKHdpbmRvdy5jNGdNYXBzSG9va3MucHJpbnRNYXAgJiYgd2luZG93LmM0Z01hcHNIb29rcy5wcmludE1hcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgYXJyUmV0dXJuID0gdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5wcmludE1hcCwgZGF0YVVSTCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2F2ZUFzKGRhdGFVUkwsICdtYXAucG5nJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9yY2VQcmludCkge1xuICAgICAgICAgICAgbWFwLmRpc3BhdGNoRXZlbnQoJ3JlbmRlcmNvbXBsZXRlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAyMDApXG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlBSSU5UICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArICcgYzRnLXBvcnRzaWRlLWNvbnRyb2wgb2wtY29udHJvbCc7XG5cbiAgICAvLyBidXR0b25cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSBsYW5nQ29uc3RhbnRzLkNUUkxfUFJJTlQ7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX1BSSU5UO1xuICAgIH1cbiAgICBidXR0b24uY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlBSSU5UO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIC8vIHNldCBvbkNsaWNrIHRvIHRoZSB0b2dnbGUtZnVuY3Rpb25cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcblxuICAgIC8vIGxldCBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJy4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG5cbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0XG4gICAgfSk7XG5cbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGluZGV4ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJwcmludFwiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnByaW50ID0gY29udHJvbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jb250cm9sIiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdNYXBzSTE4biIsIl9maWxlU2F2ZXIiLCJfYzRnTWFwc1V0aWxzIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiUHJpbnQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiZWxlbWVudCIsImJ1dHRvbiIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwibWFwIiwibWFwRGF0YSIsImV4cG9ydE9wdGlvbnMiLCJmaWx0ZXIiLCJjbGFzc05hbWUiLCJpbmRleE9mIiwiYmdjb2xvciIsInRvZ2dsZSIsImV2ZW50IiwiX3RoaXMyIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0VGFyZ2V0IiwiZm9yY2VQcmludCIsIm9uY2UiLCJtYXBDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzaXplIiwiZ2V0U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFwQ29udGV4dCIsImdldENvbnRleHQiLCJBcnJheSIsImZvckVhY2giLCJnZXRWaWV3cG9ydCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYW52YXMiLCJvcGFjaXR5IiwicGFyZW50Tm9kZSIsInN0eWxlIiwiZ2xvYmFsQWxwaGEiLCJOdW1iZXIiLCJtYXRyaXgiLCJ0cmFuc2Zvcm0iLCJtYXRjaCIsInNwbGl0IiwicGFyc2VGbG9hdCIsIkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCIsInNldFRyYW5zZm9ybSIsImJhY2tncm91bmRDb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwiZGF0YVVSTCIsInRvRGF0YVVSTCIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsInByaW50TWFwIiwibGVuZ3RoIiwiYXJyUmV0dXJuIiwidXRpbHMiLCJjYWxsSG9va0Z1bmN0aW9ucyIsInNhdmVBcyIsInNldFRpbWVvdXQiLCJkaXNwYXRjaEV2ZW50IiwiY3NzQ29uc3RhbnRzIiwiUFJJTlQiLCJPTF9VTlNFTEVDVEFCTEUiLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsIkNUUkxfUFJJTlQiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJuYW1lIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJwcmludCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9