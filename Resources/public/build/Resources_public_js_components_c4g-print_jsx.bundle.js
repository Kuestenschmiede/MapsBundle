(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-print_jsx"],{

/***/ "./Resources/public/js/components/c4g-print.jsx":
/*!******************************************************!*\
  !*** ./Resources/public/js/components/c4g-print.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _domToImageMore = __webpack_require__(/*! dom-to-image-more */ "./node_modules/dom-to-image-more/src/dom-to-image-more.js");

var _fileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Print = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Print, _Component);

  var _super = _createSuper(Print);

  function Print(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Print);
    _this = _super.call(this, props);
    var element, button;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    var map = props.mapController.map;
    var mapData = props.mapController.data; // export options for html-to-image.
    // See: https://github.com/bubkoo/html-to-image#options

    var exportOptions = {
      filter: function filter(element) {
        return element.className ? (element.className.indexOf('ol-control') === -1 || //print no controls (buttons)
        element.className.indexOf('ol-uncollapsible') !== -1) && //exception attributions if always to be displayed
        element.className.indexOf('c4g-open') === -1 //print no sideboards (right panels)
        : true;
      },
      bgcolor: '#000000'
    };

    var toggle = function toggle(event) {
      event.stopPropagation();

      if (map.getTarget()) {
        var target = document.getElementById(map.getTarget());
        (0, _domToImageMore.toBlob)(target, exportOptions).then(function (blob) {
          (0, _fileSaver.saveAs)(blob, 'map.png');
        });
      }
    }; // wrapper div


    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.PRINT + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' c4g-portside-control ol-control'; // button

    button = document.createElement('button');
    button.title = langConstants.CTRL_PRINT;
    button.className = _c4gMapsConstant.cssConstants.PRINT;
    element.appendChild(button); // set onClick to the toggle-function

    button.addEventListener('click', toggle, {
      useCapture: false,
      passive: true
    });
    button.addEventListener('touchstart', toggle, {
      useCapture: false,
      passive: true
    }); // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    var control = new _control.Control({
      element: element,
      target: _this.props.target
    });
    var mapController = props.mapController;
    mapController.mapsControls.controls.print = control;
    mapController.map.addControl(control);
    return _this;
  }

  (0, _createClass2["default"])(Print, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Print;
}(_react.Component);

exports.default = Print;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wcmludC5qc3giXSwibmFtZXMiOlsiUHJpbnQiLCJwcm9wcyIsImVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJtYXAiLCJtYXBEYXRhIiwiZXhwb3J0T3B0aW9ucyIsImZpbHRlciIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJiZ2NvbG9yIiwidG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGhlbiIsImJsb2IiLCJjcmVhdGVFbGVtZW50IiwiY3NzQ29uc3RhbnRzIiwiUFJJTlQiLCJPTF9VTlNFTEVDVEFCTEUiLCJ0aXRsZSIsIkNUUkxfUFJJTlQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicGFzc2l2ZSIsImNvbnRyb2wiLCJDb250cm9sIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJwcmludCIsImFkZENvbnRyb2wiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxLOzs7OztBQUVuQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsUUFBSUMsT0FBSixFQUNFQyxNQURGO0FBR0EsUUFBSUMsYUFBYSxHQUFHLDhCQUFZSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0JDLElBQWhDLENBQXBCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHTixLQUFLLENBQUNJLGFBQU4sQ0FBb0JFLEdBQTlCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHUCxLQUFLLENBQUNJLGFBQU4sQ0FBb0JDLElBQWxDLENBUmlCLENBVWpCO0FBQ0E7O0FBQ0EsUUFBSUcsYUFBYSxHQUFHO0FBQ2xCQyxZQUFNLEVBQUUsZ0JBQVNSLE9BQVQsRUFBa0I7QUFDeEIsZUFBT0EsT0FBTyxDQUFDUyxTQUFSLEdBQ0wsQ0FBRVQsT0FBTyxDQUFDUyxTQUFSLENBQWtCQyxPQUFsQixDQUEwQixZQUExQixNQUE0QyxDQUFDLENBQTlDLElBQW9EO0FBQ25EVixlQUFPLENBQUNTLFNBQVIsQ0FBa0JDLE9BQWxCLENBQTBCLGtCQUExQixNQUFrRCxDQUFDLENBRHJELEtBQzJEO0FBQzFEVixlQUFPLENBQUNTLFNBQVIsQ0FBa0JDLE9BQWxCLENBQTBCLFVBQTFCLE1BQTBDLENBQUMsQ0FIdkMsQ0FHMEM7QUFIMUMsVUFJSCxJQUpKO0FBS0QsT0FQaUI7QUFRbEJDLGFBQU8sRUFBRTtBQVJTLEtBQXBCOztBQVdBLFFBQUlDLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVVDLEtBQVYsRUFBaUI7QUFDNUJBLFdBQUssQ0FBQ0MsZUFBTjs7QUFDQSxVQUFJVCxHQUFHLENBQUNVLFNBQUosRUFBSixFQUFxQjtBQUNuQixZQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QmIsR0FBRyxDQUFDVSxTQUFKLEVBQXhCLENBQWI7QUFDQSxvQ0FBT0MsTUFBUCxFQUFlVCxhQUFmLEVBQ0dZLElBREgsQ0FDUSxVQUFTQyxJQUFULEVBQWU7QUFDbkIsaUNBQU9BLElBQVAsRUFBYSxTQUFiO0FBQ0QsU0FISDtBQUlEO0FBQ0YsS0FURCxDQXZCaUIsQ0FrQ2pCOzs7QUFDQXBCLFdBQU8sR0FBR2lCLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FyQixXQUFPLENBQUNTLFNBQVIsR0FBb0JhLDhCQUFhQyxLQUFiLEdBQXFCLEdBQXJCLEdBQTJCRCw4QkFBYUUsZUFBeEMsR0FBMEQsa0NBQTlFLENBcENpQixDQXNDakI7O0FBQ0F2QixVQUFNLEdBQUdnQixRQUFRLENBQUNJLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVDtBQUNBcEIsVUFBTSxDQUFDd0IsS0FBUCxHQUFldkIsYUFBYSxDQUFDd0IsVUFBN0I7QUFDQXpCLFVBQU0sQ0FBQ1EsU0FBUCxHQUFtQmEsOEJBQWFDLEtBQWhDO0FBQ0F2QixXQUFPLENBQUMyQixXQUFSLENBQW9CMUIsTUFBcEIsRUExQ2lCLENBNENqQjs7QUFDQUEsVUFBTSxDQUFDMkIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNoQixNQUFqQyxFQUF5QztBQUFDaUIsZ0JBQVUsRUFBRSxLQUFiO0FBQW9CQyxhQUFPLEVBQUU7QUFBN0IsS0FBekM7QUFDQTdCLFVBQU0sQ0FBQzJCLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDaEIsTUFBdEMsRUFBOEM7QUFBQ2lCLGdCQUFVLEVBQUUsS0FBYjtBQUFvQkMsYUFBTyxFQUFFO0FBQTdCLEtBQTlDLEVBOUNpQixDQWdEakI7O0FBRUEsUUFBSUMsT0FBTyxHQUFHLElBQUlDLGdCQUFKLENBQVk7QUFDeEJoQyxhQUFPLEVBQUVBLE9BRGU7QUFFeEJnQixZQUFNLEVBQUUsTUFBS2pCLEtBQUwsQ0FBV2lCO0FBRkssS0FBWixDQUFkO0FBS0EsUUFBSWIsYUFBYSxHQUFHSixLQUFLLENBQUNJLGFBQTFCO0FBQ0FBLGlCQUFhLENBQUM4QixZQUFkLENBQTJCQyxRQUEzQixDQUFvQ0MsS0FBcEMsR0FBNENKLE9BQTVDO0FBQ0E1QixpQkFBYSxDQUFDRSxHQUFkLENBQWtCK0IsVUFBbEIsQ0FBNkJMLE9BQTdCO0FBekRpQjtBQTBEbEI7Ozs7V0FFRCxrQkFBUztBQUNQLGFBQU8sSUFBUDtBQUNEOzs7RUFoRWdDTSxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLXByaW50X2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7dG9CbG9ifSBmcm9tIFwiZG9tLXRvLWltYWdlLW1vcmVcIjtcbmltcG9ydCB7c2F2ZUFzfSBmcm9tIFwiZmlsZS1zYXZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmludCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgZWxlbWVudCxcbiAgICAgIGJ1dHRvbjtcblxuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBsZXQgbWFwID0gcHJvcHMubWFwQ29udHJvbGxlci5tYXA7XG4gICAgbGV0IG1hcERhdGEgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGE7XG5cbiAgICAvLyBleHBvcnQgb3B0aW9ucyBmb3IgaHRtbC10by1pbWFnZS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9idWJrb28vaHRtbC10by1pbWFnZSNvcHRpb25zXG4gICAgbGV0IGV4cG9ydE9wdGlvbnMgPSB7XG4gICAgICBmaWx0ZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lID8gKFxuICAgICAgICAgICgoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZignb2wtY29udHJvbCcpID09PSAtMSkgfHwgLy9wcmludCBubyBjb250cm9scyAoYnV0dG9ucylcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ29sLXVuY29sbGFwc2libGUnKSAhPT0gLTEpICYmIC8vZXhjZXB0aW9uIGF0dHJpYnV0aW9ucyBpZiBhbHdheXMgdG8gYmUgZGlzcGxheWVkXG4gICAgICAgICAgKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ2M0Zy1vcGVuJykgPT09IC0xKSAvL3ByaW50IG5vIHNpZGVib2FyZHMgKHJpZ2h0IHBhbmVscylcbiAgICAgICAgKSA6IHRydWU7XG4gICAgICB9LFxuICAgICAgYmdjb2xvcjogJyMwMDAwMDAnXG4gICAgfTtcblxuICAgIGxldCB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKG1hcC5nZXRUYXJnZXQoKSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWFwLmdldFRhcmdldCgpKTtcbiAgICAgICAgdG9CbG9iKHRhcmdldCwgZXhwb3J0T3B0aW9ucylcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgICAgICBzYXZlQXMoYmxvYiwgJ21hcC5wbmcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gd3JhcHBlciBkaXZcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUFJJTlQgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFICsgJyBjNGctcG9ydHNpZGUtY29udHJvbCBvbC1jb250cm9sJztcblxuICAgIC8vIGJ1dHRvblxuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9QUklOVDtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlBSSU5UO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIC8vIHNldCBvbkNsaWNrIHRvIHRoZSB0b2dnbGUtZnVuY3Rpb25cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcblxuICAgIC8vIGxldCBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJy4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG5cbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0XG4gICAgfSk7XG5cbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMucHJpbnQgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==