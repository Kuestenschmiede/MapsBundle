(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-print_jsx"],{

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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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

/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcHJpbnRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxnQkFBQSxHQUFBRixtQkFBQTtBQUNBLElBQUFHLFlBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxVQUFBLEdBQUFKLG1CQUFBO0FBQ0EsSUFBQUssYUFBQSxHQUFBTCxtQkFBQTtBQUEwQyxTQUFBTSx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQVIsd0JBQUFRLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxD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QXlCLG9CQUFvQixJQUFJLFNBQVMsVUFBVSxvQ0FBb0MsY0FBYyxJQUFJLHlDQUF5QyxTQUFTLDBDQUEwQywwRkFBMEYsMkhBQTJILHFCQUFNLEVBQUUscUJBQU0sVUFBVSxxQkFBTSxDQUFDLHFCQUFNLHdNQUF3TSw4REFBOEQsdURBQXVELGlOQUFpTiwwQkFBMEIsNEJBQTRCLEtBQUssS0FBSyxnREFBZ0QsbUZBQW1GLHNCQUFzQixLQUFLLGtDQUFrQyxpREFBaUQsS0FBSyxHQUFHLG1CQUFtQiw4SEFBOEgsb0lBQW9JLGlEQUFpRCxxQkFBcUIsdUJBQXVCLGVBQWUsMEJBQTBCLEdBQUcsd0JBQXdCLHlDQUF5QyxvQkFBb0IsS0FBSyxnREFBZ0QsNERBQTRELHFCQUFxQixPQUFPLEVBQUUsb0JBQW9CLEtBQTBCLHFCQUFxQjs7QUFFaHBGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXByaW50LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtzYXZlQXN9IGZyb20gXCJmaWxlLXNhdmVyXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmludCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgZWxlbWVudCxcbiAgICAgIGJ1dHRvbjtcblxuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBsZXQgbWFwID0gcHJvcHMubWFwQ29udHJvbGxlci5tYXA7XG4gICAgbGV0IG1hcERhdGEgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGE7XG5cbiAgICAvLyBleHBvcnQgb3B0aW9ucyBmb3IgaHRtbC10by1pbWFnZS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9idWJrb28vaHRtbC10by1pbWFnZSNvcHRpb25zXG4gICAgbGV0IGV4cG9ydE9wdGlvbnMgPSB7XG4gICAgICBmaWx0ZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lID8gKFxuICAgICAgICAgICgoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZignb2wtY29udHJvbCcpID09PSAtMSkgfHwgLy9wcmludCBubyBjb250cm9scyAoYnV0dG9ucylcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ29sLXVuY29sbGFwc2libGUnKSAhPT0gLTEpICYmIC8vZXhjZXB0aW9uIGF0dHJpYnV0aW9ucyBpZiBhbHdheXMgdG8gYmUgZGlzcGxheWVkXG4gICAgICAgICAgKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ2M0Zy1vcGVuJykgPT09IC0xKSAvL3ByaW50IG5vIHNpZGVib2FyZHMgKHJpZ2h0IHBhbmVscylcbiAgICAgICAgKSA6IHRydWU7XG4gICAgICB9LFxuICAgICAgYmdjb2xvcjogJyNmZmZmZmYnXG4gICAgfTtcblxuICAgIGxldCB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKG1hcC5nZXRUYXJnZXQoKSkge1xuICAgICAgICB0aGlzLmZvcmNlUHJpbnQgPSB0cnVlO1xuICAgICAgICBtYXAub25jZSgncmVuZGVyY29tcGxldGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5mb3JjZVByaW50ID0gZmFsc2U7XG4gICAgICAgICAgY29uc3QgbWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgY29uc3Qgc2l6ZSA9IG1hcC5nZXRTaXplKCk7XG4gICAgICAgICAgbWFwQ2FudmFzLndpZHRoID0gc2l6ZVswXTtcbiAgICAgICAgICBtYXBDYW52YXMuaGVpZ2h0ID0gc2l6ZVsxXTtcbiAgICAgICAgICBjb25zdCBtYXBDb250ZXh0ID0gbWFwQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChcbiAgICAgICAgICAgICAgbWFwLmdldFZpZXdwb3J0KCkucXVlcnlTZWxlY3RvckFsbCgnLm9sLWxheWVyIGNhbnZhcywgY2FudmFzLm9sLWxheWVyJyksXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID4gMCkge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9XG4gICAgICAgICAgICAgICAgICAgICAgY2FudmFzLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSB8fCBjYW52YXMuc3R5bGUub3BhY2l0eTtcbiAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZ2xvYmFsQWxwaGEgPSBvcGFjaXR5ID09PSAnJyA/IDEgOiBOdW1iZXIob3BhY2l0eSk7XG4gICAgICAgICAgICAgICAgICBsZXQgbWF0cml4O1xuICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gY2FudmFzLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0cmFuc2Zvcm0gcGFyYW1ldGVycyBmcm9tIHRoZSBzdHlsZSdzIHRyYW5zZm9ybSBtYXRyaXhcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4ID0gdHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAubWF0Y2goL15tYXRyaXhcXCgoW15cXChdKilcXCkkLylbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKE51bWJlcik7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXggPSBbXG4gICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChjYW52YXMuc3R5bGUud2lkdGgpIC8gY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGNhbnZhcy5zdHlsZS5oZWlnaHQpIC8gY2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgdHJhbnNmb3JtIHRvIHRoZSBleHBvcnQgbWFwIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuc2V0VHJhbnNmb3JtLmFwcGx5KFxuICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgbWF0cml4XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gY2FudmFzLnBhcmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIG1hcENvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICAgIG1hcENvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICAgIGxldCBkYXRhVVJMID0gbWFwQ2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgIGlmICh3aW5kb3cuYzRnTWFwc0hvb2tzLnByaW50TWFwICYmIHdpbmRvdy5jNGdNYXBzSG9va3MucHJpbnRNYXAubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGFyclJldHVybiA9IHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MucHJpbnRNYXAsIGRhdGFVUkwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNhdmVBcyhkYXRhVVJMLCAnbWFwLnBuZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmZvcmNlUHJpbnQpIHtcbiAgICAgICAgICAgIG1hcC5kaXNwYXRjaEV2ZW50KCdyZW5kZXJjb21wbGV0ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5QUklOVCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnIGM0Zy1wb3J0c2lkZS1jb250cm9sIG9sLWNvbnRyb2wnO1xuXG4gICAgLy8gYnV0dG9uXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gbGFuZ0NvbnN0YW50cy5DVFJMX1BSSU5UO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9QUklOVDtcbiAgICB9XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5QUklOVDtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG5cbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuXG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwicHJpbnRcIik7XG4gICAgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5wcmludCA9IGNvbnRyb2w7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufSIsIihmdW5jdGlvbihhLGIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sYik7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cyliKCk7ZWxzZXtiKCksYS5GaWxlU2F2ZXI9e2V4cG9ydHM6e319LmV4cG9ydHN9fSkodGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYj9iPXthdXRvQm9tOiExfTpcIm9iamVjdFwiIT10eXBlb2YgYiYmKGNvbnNvbGUud2FybihcIkRlcHJlY2F0ZWQ6IEV4cGVjdGVkIHRoaXJkIGFyZ3VtZW50IHRvIGJlIGEgb2JqZWN0XCIpLGI9e2F1dG9Cb206IWJ9KSxiLmF1dG9Cb20mJi9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGEudHlwZSk/bmV3IEJsb2IoW1wiXFx1RkVGRlwiLGFdLHt0eXBlOmEudHlwZX0pOmF9ZnVuY3Rpb24gYyhhLGIsYyl7dmFyIGQ9bmV3IFhNTEh0dHBSZXF1ZXN0O2Qub3BlbihcIkdFVFwiLGEpLGQucmVzcG9uc2VUeXBlPVwiYmxvYlwiLGQub25sb2FkPWZ1bmN0aW9uKCl7ZyhkLnJlc3BvbnNlLGIsYyl9LGQub25lcnJvcj1mdW5jdGlvbigpe2NvbnNvbGUuZXJyb3IoXCJjb3VsZCBub3QgZG93bmxvYWQgZmlsZVwiKX0sZC5zZW5kKCl9ZnVuY3Rpb24gZChhKXt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiSEVBRFwiLGEsITEpO3RyeXtiLnNlbmQoKX1jYXRjaChhKXt9cmV0dXJuIDIwMDw9Yi5zdGF0dXMmJjI5OT49Yi5zdGF0dXN9ZnVuY3Rpb24gZShhKXt0cnl7YS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpfWNhdGNoKGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yi5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsd2luZG93LDAsMCwwLDgwLDIwLCExLCExLCExLCExLDAsbnVsbCksYS5kaXNwYXRjaEV2ZW50KGIpfX12YXIgZj1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cud2luZG93PT09d2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWw/Z2xvYmFsOnZvaWQgMCxhPWYubmF2aWdhdG9yJiYvTWFjaW50b3NoLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGVXZWJLaXQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJiEvU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGc9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGUmJiFhP2Z1bmN0aW9uKGIsZyxoKXt2YXIgaT1mLlVSTHx8Zi53ZWJraXRVUkwsaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtnPWd8fGIubmFtZXx8XCJkb3dubG9hZFwiLGouZG93bmxvYWQ9ZyxqLnJlbD1cIm5vb3BlbmVyXCIsXCJzdHJpbmdcIj09dHlwZW9mIGI/KGouaHJlZj1iLGoub3JpZ2luPT09bG9jYXRpb24ub3JpZ2luP2Uoaik6ZChqLmhyZWYpP2MoYixnLGgpOmUoaixqLnRhcmdldD1cIl9ibGFua1wiKSk6KGouaHJlZj1pLmNyZWF0ZU9iamVjdFVSTChiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5yZXZva2VPYmplY3RVUkwoai5ocmVmKX0sNEU0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShqKX0sMCkpfTpcIm1zU2F2ZU9yT3BlbkJsb2JcImluIG5hdmlnYXRvcj9mdW5jdGlvbihmLGcsaCl7aWYoZz1nfHxmLm5hbWV8fFwiZG93bmxvYWRcIixcInN0cmluZ1wiIT10eXBlb2YgZiluYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihiKGYsaCksZyk7ZWxzZSBpZihkKGYpKWMoZixnLGgpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7aS5ocmVmPWYsaS50YXJnZXQ9XCJfYmxhbmtcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShpKX0pfX06ZnVuY3Rpb24oYixkLGUsZyl7aWYoZz1nfHxvcGVuKFwiXCIsXCJfYmxhbmtcIiksZyYmKGcuZG9jdW1lbnQudGl0bGU9Zy5kb2N1bWVudC5ib2R5LmlubmVyVGV4dD1cImRvd25sb2FkaW5nLi4uXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBiKXJldHVybiBjKGIsZCxlKTt2YXIgaD1cImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiPT09Yi50eXBlLGk9L2NvbnN0cnVjdG9yL2kudGVzdChmLkhUTUxFbGVtZW50KXx8Zi5zYWZhcmksaj0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7aWYoKGp8fGgmJml8fGEpJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgRmlsZVJlYWRlcil7dmFyIGs9bmV3IEZpbGVSZWFkZXI7ay5vbmxvYWRlbmQ9ZnVuY3Rpb24oKXt2YXIgYT1rLnJlc3VsdDthPWo/YTphLnJlcGxhY2UoL15kYXRhOlteO10qOy8sXCJkYXRhOmF0dGFjaG1lbnQvZmlsZTtcIiksZz9nLmxvY2F0aW9uLmhyZWY9YTpsb2NhdGlvbj1hLGc9bnVsbH0say5yZWFkQXNEYXRhVVJMKGIpfWVsc2V7dmFyIGw9Zi5VUkx8fGYud2Via2l0VVJMLG09bC5jcmVhdGVPYmplY3RVUkwoYik7Zz9nLmxvY2F0aW9uPW06bG9jYXRpb24uaHJlZj1tLGc9bnVsbCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5yZXZva2VPYmplY3RVUkwobSl9LDRFNCl9fSk7Zi5zYXZlQXM9Zy5zYXZlQXM9ZyxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9Zyl9KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVNhdmVyLm1pbi5qcy5tYXAiXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2NvbnRyb2wiLCJfYzRnTWFwc0NvbnN0YW50IiwiX2M0Z01hcHNJMThuIiwiX2ZpbGVTYXZlciIsIl9jNGdNYXBzVXRpbHMiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlByaW50IiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsIm1hcCIsIm1hcERhdGEiLCJleHBvcnRPcHRpb25zIiwiZmlsdGVyIiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsImJnY29sb3IiLCJ0b2dnbGUiLCJldmVudCIsIl90aGlzMiIsInN0b3BQcm9wYWdhdGlvbiIsImdldFRhcmdldCIsImZvcmNlUHJpbnQiLCJvbmNlIiwibWFwQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2l6ZSIsImdldFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIm1hcENvbnRleHQiLCJnZXRDb250ZXh0IiwiQXJyYXkiLCJmb3JFYWNoIiwiZ2V0Vmlld3BvcnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FudmFzIiwib3BhY2l0eSIsInBhcmVudE5vZGUiLCJzdHlsZSIsImdsb2JhbEFscGhhIiwiTnVtYmVyIiwibWF0cml4IiwidHJhbnNmb3JtIiwibWF0Y2giLCJzcGxpdCIsInBhcnNlRmxvYXQiLCJDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQiLCJzZXRUcmFuc2Zvcm0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImRhdGFVUkwiLCJ0b0RhdGFVUkwiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJwcmludE1hcCIsImxlbmd0aCIsImFyclJldHVybiIsInV0aWxzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJzYXZlQXMiLCJzZXRUaW1lb3V0IiwiZGlzcGF0Y2hFdmVudCIsImNzc0NvbnN0YW50cyIsIlBSSU5UIiwiT0xfVU5TRUxFQ1RBQkxFIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJDVFJMX1BSSU5UIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicGFzc2l2ZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwiaW5kZXgiLCJhcnJDb21wb25lbnRzIiwiZmluZEluZGV4IiwibmFtZSIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwicHJpbnQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==