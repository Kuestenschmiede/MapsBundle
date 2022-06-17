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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcHJpbnRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkE7Ozs7O0VBRW5CLGVBQVlDLEtBQVosRUFBbUI7SUFBQTs7SUFBQTtJQUNqQiwwQkFBTUEsS0FBTjtJQUVBLElBQUlDLE9BQUosRUFDRUMsTUFERjtJQUdBLElBQUlDLGFBQWEsR0FBRyxJQUFBQyx3QkFBQSxFQUFZSixLQUFLLENBQUNLLGFBQU4sQ0FBb0JDLElBQWhDLENBQXBCO0lBQ0EsSUFBSUMsR0FBRyxHQUFHUCxLQUFLLENBQUNLLGFBQU4sQ0FBb0JFLEdBQTlCO0lBQ0EsSUFBSUMsT0FBTyxHQUFHUixLQUFLLENBQUNLLGFBQU4sQ0FBb0JDLElBQWxDLENBUmlCLENBVWpCO0lBQ0E7O0lBQ0EsSUFBSUcsYUFBYSxHQUFHO01BQ2xCQyxNQUFNLEVBQUUsZ0JBQVNULE9BQVQsRUFBa0I7UUFDeEIsT0FBT0EsT0FBTyxDQUFDVSxTQUFSLEdBQ0wsQ0FBRVYsT0FBTyxDQUFDVSxTQUFSLENBQWtCQyxPQUFsQixDQUEwQixZQUExQixNQUE0QyxDQUFDLENBQTlDLElBQW9EO1FBQ25EWCxPQUFPLENBQUNVLFNBQVIsQ0FBa0JDLE9BQWxCLENBQTBCLGtCQUExQixNQUFrRCxDQUFDLENBRHJELEtBQzJEO1FBQzFEWCxPQUFPLENBQUNVLFNBQVIsQ0FBa0JDLE9BQWxCLENBQTBCLFVBQTFCLE1BQTBDLENBQUMsQ0FIdkMsQ0FHMEM7UUFIMUMsRUFJSCxJQUpKO01BS0QsQ0FQaUI7TUFRbEJDLE9BQU8sRUFBRTtJQVJTLENBQXBCOztJQVdBLElBQUlDLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVVDLEtBQVYsRUFBaUI7TUFDNUJBLEtBQUssQ0FBQ0MsZUFBTjs7TUFDQSxJQUFJVCxHQUFHLENBQUNVLFNBQUosRUFBSixFQUFxQjtRQUNuQixJQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QmIsR0FBRyxDQUFDVSxTQUFKLEVBQXhCLENBQWI7UUFDQSxJQUFBSSxzQkFBQSxFQUFPSCxNQUFQLEVBQWVULGFBQWYsRUFDR2EsSUFESCxDQUNRLFVBQVNDLElBQVQsRUFBZTtVQUNuQixJQUFBQyxpQkFBQSxFQUFPRCxJQUFQLEVBQWEsU0FBYjtRQUNELENBSEg7TUFJRDtJQUNGLENBVEQsQ0F2QmlCLENBa0NqQjs7O0lBQ0F0QixPQUFPLEdBQUdrQixRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtJQUNBeEIsT0FBTyxDQUFDVSxTQUFSLEdBQW9CZSw2QkFBQSxDQUFhQyxLQUFiLEdBQXFCLEdBQXJCLEdBQTJCRCw2QkFBQSxDQUFhRSxlQUF4QyxHQUEwRCxrQ0FBOUUsQ0FwQ2lCLENBc0NqQjs7SUFDQTFCLE1BQU0sR0FBR2lCLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixRQUF2QixDQUFUO0lBQ0F2QixNQUFNLENBQUMyQixLQUFQLEdBQWUxQixhQUFhLENBQUMyQixVQUE3QjtJQUNBNUIsTUFBTSxDQUFDUyxTQUFQLEdBQW1CZSw2QkFBQSxDQUFhQyxLQUFoQztJQUNBMUIsT0FBTyxDQUFDOEIsV0FBUixDQUFvQjdCLE1BQXBCLEVBMUNpQixDQTRDakI7O0lBQ0FBLE1BQU0sQ0FBQzhCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDbEIsTUFBakMsRUFBeUM7TUFBQ21CLFVBQVUsRUFBRSxLQUFiO01BQW9CQyxPQUFPLEVBQUU7SUFBN0IsQ0FBekM7SUFDQWhDLE1BQU0sQ0FBQzhCLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDbEIsTUFBdEMsRUFBOEM7TUFBQ21CLFVBQVUsRUFBRSxLQUFiO01BQW9CQyxPQUFPLEVBQUU7SUFBN0IsQ0FBOUMsRUE5Q2lCLENBZ0RqQjs7SUFFQSxJQUFJQyxPQUFPLEdBQUcsSUFBSUMsZ0JBQUosQ0FBWTtNQUN4Qm5DLE9BQU8sRUFBRUEsT0FEZTtNQUV4QmlCLE1BQU0sRUFBRSxNQUFLbEIsS0FBTCxDQUFXa0I7SUFGSyxDQUFaLENBQWQ7SUFLQSxJQUFJYixhQUFhLEdBQUdMLEtBQUssQ0FBQ0ssYUFBMUI7SUFDQUEsYUFBYSxDQUFDZ0MsWUFBZCxDQUEyQkMsUUFBM0IsQ0FBb0NDLEtBQXBDLEdBQTRDSixPQUE1QztJQUNBOUIsYUFBYSxDQUFDRSxHQUFkLENBQWtCaUMsVUFBbEIsQ0FBNkJMLE9BQTdCO0lBekRpQjtFQTBEbEI7Ozs7V0FFRCxrQkFBUztNQUNQLE9BQU8sSUFBUDtJQUNEOzs7RUFoRWdDTSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wcmludC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge3RvQmxvYn0gZnJvbSBcImRvbS10by1pbWFnZS1tb3JlXCI7XG5pbXBvcnQge3NhdmVBc30gZnJvbSBcImZpbGUtc2F2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICBidXR0b247XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgbGV0IG1hcCA9IHByb3BzLm1hcENvbnRyb2xsZXIubWFwO1xuICAgIGxldCBtYXBEYXRhID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuXG4gICAgLy8gZXhwb3J0IG9wdGlvbnMgZm9yIGh0bWwtdG8taW1hZ2UuXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYnVia29vL2h0bWwtdG8taW1hZ2Ujb3B0aW9uc1xuICAgIGxldCBleHBvcnRPcHRpb25zID0ge1xuICAgICAgZmlsdGVyOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZSA/IChcbiAgICAgICAgICAoKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ29sLWNvbnRyb2wnKSA9PT0gLTEpIHx8IC8vcHJpbnQgbm8gY29udHJvbHMgKGJ1dHRvbnMpXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdvbC11bmNvbGxhcHNpYmxlJykgIT09IC0xKSAmJiAvL2V4Y2VwdGlvbiBhdHRyaWJ1dGlvbnMgaWYgYWx3YXlzIHRvIGJlIGRpc3BsYXllZFxuICAgICAgICAgIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdjNGctb3BlbicpID09PSAtMSkgLy9wcmludCBubyBzaWRlYm9hcmRzIChyaWdodCBwYW5lbHMpXG4gICAgICAgICkgOiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGJnY29sb3I6ICcjMDAwMDAwJ1xuICAgIH07XG5cbiAgICBsZXQgdG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChtYXAuZ2V0VGFyZ2V0KCkpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hcC5nZXRUYXJnZXQoKSk7XG4gICAgICAgIHRvQmxvYih0YXJnZXQsIGV4cG9ydE9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oYmxvYikge1xuICAgICAgICAgICAgc2F2ZUFzKGJsb2IsICdtYXAucG5nJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlBSSU5UICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArICcgYzRnLXBvcnRzaWRlLWNvbnRyb2wgb2wtY29udHJvbCc7XG5cbiAgICAvLyBidXR0b25cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfUFJJTlQ7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5QUklOVDtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG5cbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuXG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnByaW50ID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufSJdLCJuYW1lcyI6WyJQcmludCIsInByb3BzIiwiZWxlbWVudCIsImJ1dHRvbiIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwibWFwIiwibWFwRGF0YSIsImV4cG9ydE9wdGlvbnMiLCJmaWx0ZXIiLCJjbGFzc05hbWUiLCJpbmRleE9mIiwiYmdjb2xvciIsInRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0VGFyZ2V0IiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvQmxvYiIsInRoZW4iLCJibG9iIiwic2F2ZUFzIiwiY3JlYXRlRWxlbWVudCIsImNzc0NvbnN0YW50cyIsIlBSSU5UIiwiT0xfVU5TRUxFQ1RBQkxFIiwidGl0bGUiLCJDVFJMX1BSSU5UIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInBhc3NpdmUiLCJjb250cm9sIiwiQ29udHJvbCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwicHJpbnQiLCJhZGRDb250cm9sIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==