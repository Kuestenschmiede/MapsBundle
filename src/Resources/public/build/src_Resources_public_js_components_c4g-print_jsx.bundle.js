"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-print_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-print.jsx":
/*!**********************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-print.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

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

exports["default"] = Print;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcHJpbnRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkE7Ozs7O0FBRW5CLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxRQUFJQyxPQUFKLEVBQ0VDLE1BREY7QUFHQSxRQUFJQyxhQUFhLEdBQUcsOEJBQVlILEtBQUssQ0FBQ0ksYUFBTixDQUFvQkMsSUFBaEMsQ0FBcEI7QUFDQSxRQUFJQyxHQUFHLEdBQUdOLEtBQUssQ0FBQ0ksYUFBTixDQUFvQkUsR0FBOUI7QUFDQSxRQUFJQyxPQUFPLEdBQUdQLEtBQUssQ0FBQ0ksYUFBTixDQUFvQkMsSUFBbEMsQ0FSaUIsQ0FVakI7QUFDQTs7QUFDQSxRQUFJRyxhQUFhLEdBQUc7QUFDbEJDLE1BQUFBLE1BQU0sRUFBRSxnQkFBU1IsT0FBVCxFQUFrQjtBQUN4QixlQUFPQSxPQUFPLENBQUNTLFNBQVIsR0FDTCxDQUFFVCxPQUFPLENBQUNTLFNBQVIsQ0FBa0JDLE9BQWxCLENBQTBCLFlBQTFCLE1BQTRDLENBQUMsQ0FBOUMsSUFBb0Q7QUFDbkRWLFFBQUFBLE9BQU8sQ0FBQ1MsU0FBUixDQUFrQkMsT0FBbEIsQ0FBMEIsa0JBQTFCLE1BQWtELENBQUMsQ0FEckQsS0FDMkQ7QUFDMURWLFFBQUFBLE9BQU8sQ0FBQ1MsU0FBUixDQUFrQkMsT0FBbEIsQ0FBMEIsVUFBMUIsTUFBMEMsQ0FBQyxDQUh2QyxDQUcwQztBQUgxQyxVQUlILElBSko7QUFLRCxPQVBpQjtBQVFsQkMsTUFBQUEsT0FBTyxFQUFFO0FBUlMsS0FBcEI7O0FBV0EsUUFBSUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBVUMsS0FBVixFQUFpQjtBQUM1QkEsTUFBQUEsS0FBSyxDQUFDQyxlQUFOOztBQUNBLFVBQUlULEdBQUcsQ0FBQ1UsU0FBSixFQUFKLEVBQXFCO0FBQ25CLFlBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCYixHQUFHLENBQUNVLFNBQUosRUFBeEIsQ0FBYjtBQUNBLG9DQUFPQyxNQUFQLEVBQWVULGFBQWYsRUFDR1ksSUFESCxDQUNRLFVBQVNDLElBQVQsRUFBZTtBQUNuQixpQ0FBT0EsSUFBUCxFQUFhLFNBQWI7QUFDRCxTQUhIO0FBSUQ7QUFDRixLQVRELENBdkJpQixDQWtDakI7OztBQUNBcEIsSUFBQUEsT0FBTyxHQUFHaUIsUUFBUSxDQUFDSSxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQXJCLElBQUFBLE9BQU8sQ0FBQ1MsU0FBUixHQUFvQmEsOEJBQWFDLEtBQWIsR0FBcUIsR0FBckIsR0FBMkJELDhCQUFhRSxlQUF4QyxHQUEwRCxrQ0FBOUUsQ0FwQ2lCLENBc0NqQjs7QUFDQXZCLElBQUFBLE1BQU0sR0FBR2dCLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixRQUF2QixDQUFUO0FBQ0FwQixJQUFBQSxNQUFNLENBQUN3QixLQUFQLEdBQWV2QixhQUFhLENBQUN3QixVQUE3QjtBQUNBekIsSUFBQUEsTUFBTSxDQUFDUSxTQUFQLEdBQW1CYSw4QkFBYUMsS0FBaEM7QUFDQXZCLElBQUFBLE9BQU8sQ0FBQzJCLFdBQVIsQ0FBb0IxQixNQUFwQixFQTFDaUIsQ0E0Q2pCOztBQUNBQSxJQUFBQSxNQUFNLENBQUMyQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQ2hCLE1BQWpDLEVBQXlDO0FBQUNpQixNQUFBQSxVQUFVLEVBQUUsS0FBYjtBQUFvQkMsTUFBQUEsT0FBTyxFQUFFO0FBQTdCLEtBQXpDO0FBQ0E3QixJQUFBQSxNQUFNLENBQUMyQixnQkFBUCxDQUF3QixZQUF4QixFQUFzQ2hCLE1BQXRDLEVBQThDO0FBQUNpQixNQUFBQSxVQUFVLEVBQUUsS0FBYjtBQUFvQkMsTUFBQUEsT0FBTyxFQUFFO0FBQTdCLEtBQTlDLEVBOUNpQixDQWdEakI7O0FBRUEsUUFBSUMsT0FBTyxHQUFHLElBQUlDLGdCQUFKLENBQVk7QUFDeEJoQyxNQUFBQSxPQUFPLEVBQUVBLE9BRGU7QUFFeEJnQixNQUFBQSxNQUFNLEVBQUUsTUFBS2pCLEtBQUwsQ0FBV2lCO0FBRkssS0FBWixDQUFkO0FBS0EsUUFBSWIsYUFBYSxHQUFHSixLQUFLLENBQUNJLGFBQTFCO0FBQ0FBLElBQUFBLGFBQWEsQ0FBQzhCLFlBQWQsQ0FBMkJDLFFBQTNCLENBQW9DQyxLQUFwQyxHQUE0Q0osT0FBNUM7QUFDQTVCLElBQUFBLGFBQWEsQ0FBQ0UsR0FBZCxDQUFrQitCLFVBQWxCLENBQTZCTCxPQUE3QjtBQXpEaUI7QUEwRGxCOzs7O1dBRUQsa0JBQVM7QUFDUCxhQUFPLElBQVA7QUFDRDs7O0VBaEVnQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcHJpbnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHt0b0Jsb2J9IGZyb20gXCJkb20tdG8taW1hZ2UtbW9yZVwiO1xuaW1wb3J0IHtzYXZlQXN9IGZyb20gXCJmaWxlLXNhdmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBlbGVtZW50LFxuICAgICAgYnV0dG9uO1xuXG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGxldCBtYXAgPSBwcm9wcy5tYXBDb250cm9sbGVyLm1hcDtcbiAgICBsZXQgbWFwRGF0YSA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YTtcblxuICAgIC8vIGV4cG9ydCBvcHRpb25zIGZvciBodG1sLXRvLWltYWdlLlxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2J1Ymtvby9odG1sLXRvLWltYWdlI29wdGlvbnNcbiAgICBsZXQgZXhwb3J0T3B0aW9ucyA9IHtcbiAgICAgIGZpbHRlcjogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUgPyAoXG4gICAgICAgICAgKChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdvbC1jb250cm9sJykgPT09IC0xKSB8fCAvL3ByaW50IG5vIGNvbnRyb2xzIChidXR0b25zKVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZignb2wtdW5jb2xsYXBzaWJsZScpICE9PSAtMSkgJiYgLy9leGNlcHRpb24gYXR0cmlidXRpb25zIGlmIGFsd2F5cyB0byBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICAoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZignYzRnLW9wZW4nKSA9PT0gLTEpIC8vcHJpbnQgbm8gc2lkZWJvYXJkcyAocmlnaHQgcGFuZWxzKVxuICAgICAgICApIDogdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBiZ2NvbG9yOiAnIzAwMDAwMCdcbiAgICB9O1xuXG4gICAgbGV0IHRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAobWFwLmdldFRhcmdldCgpKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXAuZ2V0VGFyZ2V0KCkpO1xuICAgICAgICB0b0Jsb2IodGFyZ2V0LCBleHBvcnRPcHRpb25zKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgICAgIHNhdmVBcyhibG9iLCAnbWFwLnBuZycpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5QUklOVCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnIGM0Zy1wb3J0c2lkZS1jb250cm9sIG9sLWNvbnRyb2wnO1xuXG4gICAgLy8gYnV0dG9uXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX1BSSU5UO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUFJJTlQ7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgLy8gc2V0IG9uQ2xpY2sgdG8gdGhlIHRvZ2dsZS1mdW5jdGlvblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuXG4gICAgLy8gbGV0IGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcblxuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXRcbiAgICB9KTtcblxuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5wcmludCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiUHJpbnQiLCJwcm9wcyIsImVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJtYXAiLCJtYXBEYXRhIiwiZXhwb3J0T3B0aW9ucyIsImZpbHRlciIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJiZ2NvbG9yIiwidG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGhlbiIsImJsb2IiLCJjcmVhdGVFbGVtZW50IiwiY3NzQ29uc3RhbnRzIiwiUFJJTlQiLCJPTF9VTlNFTEVDVEFCTEUiLCJ0aXRsZSIsIkNUUkxfUFJJTlQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicGFzc2l2ZSIsImNvbnRyb2wiLCJDb250cm9sIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJwcmludCIsImFkZENvbnRyb2wiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9