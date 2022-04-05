"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-grid_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-grid.jsx":
/*!*********************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-grid.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Grid = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Grid, _Component);

  var _super = _createSuper(Grid);

  function Grid(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Grid);
    _this = _super.call(this, props);
    var element, button;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    var mapController = props.mapController; // default options

    var options = {
      className: _c4gMapsConstant.cssConstants.GRATICULE,
      switchable: true,
      tipLabel: langConstants.CTRL_GRID,
      label: '#',
      disableLabel: '[]',
      showLabels: true,
      visible: false
    };
    var scope = (0, _assertThisInitialized2["default"])(_this);
    var objGrid = new _ol.Graticule(options); // function to enable the grid

    var enable = function enable() {
      objGrid.setVisible(true);
      jQuery(element).addClass(_c4gMapsConstant.cssConstants.ENABLED);
    }; // function to disable the grid


    var disable = function disable() {
      objGrid.setVisible(false);
      jQuery(element).removeClass(_c4gMapsConstant.cssConstants.ENABLED);
    }; // function to toggle the grid


    var toggle = function toggle(event) {
      event.stopPropagation(); // loose focus, otherwise it looks messy

      this.blur();

      if (objGrid.getVisible()) {
        disable();
      } else {
        enable();
      }
    }; // wrapper div


    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.GRATICULE + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL; // button

    button = document.createElement('button');
    button.title = langConstants.CTRL_GRID;
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
    props.mapController.map.addLayer(objGrid);
    mapController.mapsControls.controls.graticule = control;
    mapController.map.addControl(control);
    return _this;
  }

  (0, _createClass2["default"])(Grid, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Grid;
}(_react.Component);

exports["default"] = Grid;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ3JpZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBOzs7OztBQUVuQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsUUFBSUMsT0FBSixFQUNFQyxNQURGO0FBR0EsUUFBSUMsYUFBYSxHQUFHLDhCQUFZSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0JDLElBQWhDLENBQXBCO0FBQ0EsUUFBSUQsYUFBYSxHQUFHSixLQUFLLENBQUNJLGFBQTFCLENBUGlCLENBU2pCOztBQUNBLFFBQUlFLE9BQU8sR0FBRztBQUNaQyxNQUFBQSxTQUFTLEVBQUVDLDhCQUFhQyxTQURaO0FBRVpDLE1BQUFBLFVBQVUsRUFBRSxJQUZBO0FBR1pDLE1BQUFBLFFBQVEsRUFBRVIsYUFBYSxDQUFDUyxTQUhaO0FBSVpDLE1BQUFBLEtBQUssRUFBRSxHQUpLO0FBS1pDLE1BQUFBLFlBQVksRUFBRSxJQUxGO0FBTVpDLE1BQUFBLFVBQVUsRUFBRSxJQU5BO0FBT1pDLE1BQUFBLE9BQU8sRUFBRTtBQVBHLEtBQWQ7QUFTQSxRQUFNQyxLQUFLLGlEQUFYO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLElBQUlDLGFBQUosQ0FBY2IsT0FBZCxDQUFoQixDQXBCaUIsQ0FzQmpCOztBQUNBLFFBQUljLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQVk7QUFDdkJGLE1BQUFBLE9BQU8sQ0FBQ0csVUFBUixDQUFtQixJQUFuQjtBQUNBQyxNQUFBQSxNQUFNLENBQUNyQixPQUFELENBQU4sQ0FBZ0JzQixRQUFoQixDQUF5QmYsOEJBQWFnQixPQUF0QztBQUNELEtBSEQsQ0F2QmlCLENBNEJqQjs7O0FBQ0EsUUFBSUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBWTtBQUN4QlAsTUFBQUEsT0FBTyxDQUFDRyxVQUFSLENBQW1CLEtBQW5CO0FBQ0FDLE1BQUFBLE1BQU0sQ0FBQ3JCLE9BQUQsQ0FBTixDQUFnQnlCLFdBQWhCLENBQTRCbEIsOEJBQWFnQixPQUF6QztBQUNELEtBSEQsQ0E3QmlCLENBa0NqQjs7O0FBQ0EsUUFBSUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBVUMsS0FBVixFQUFpQjtBQUM1QkEsTUFBQUEsS0FBSyxDQUFDQyxlQUFOLEdBRDRCLENBRTVCOztBQUNBLFdBQUtDLElBQUw7O0FBQ0EsVUFBSVosT0FBTyxDQUFDYSxVQUFSLEVBQUosRUFBMEI7QUFDeEJOLFFBQUFBLE9BQU87QUFDUixPQUZELE1BRU87QUFDTEwsUUFBQUEsTUFBTTtBQUNQO0FBQ0YsS0FURCxDQW5DaUIsQ0E4Q2pCOzs7QUFDQW5CLElBQUFBLE9BQU8sR0FBRytCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FoQyxJQUFBQSxPQUFPLENBQUNNLFNBQVIsR0FBb0JDLDhCQUFhQyxTQUFiLEdBQXlCLEdBQXpCLEdBQStCRCw4QkFBYTBCLGVBQTVDLEdBQThELEdBQTlELEdBQW9FMUIsOEJBQWEyQixVQUFyRyxDQWhEaUIsQ0FpRGpCOztBQUNBakMsSUFBQUEsTUFBTSxHQUFHOEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDQS9CLElBQUFBLE1BQU0sQ0FBQ2tDLEtBQVAsR0FBZWpDLGFBQWEsQ0FBQ1MsU0FBN0I7QUFDQVgsSUFBQUEsT0FBTyxDQUFDb0MsV0FBUixDQUFvQm5DLE1BQXBCLEVBcERpQixDQXNEakI7O0FBQ0FBLElBQUFBLE1BQU0sQ0FBQ29DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDWCxNQUFqQyxFQUF5QztBQUFDWSxNQUFBQSxVQUFVLEVBQUUsS0FBYjtBQUFvQkMsTUFBQUEsT0FBTyxFQUFFO0FBQTdCLEtBQXpDO0FBQ0F0QyxJQUFBQSxNQUFNLENBQUNvQyxnQkFBUCxDQUF3QixZQUF4QixFQUFzQ1gsTUFBdEMsRUFBOEM7QUFBQ1ksTUFBQUEsVUFBVSxFQUFFLEtBQWI7QUFBb0JDLE1BQUFBLE9BQU8sRUFBRTtBQUE3QixLQUE5QyxFQXhEaUIsQ0F5RGpCOztBQUVBLFFBQUlDLE9BQU8sR0FBRyxJQUFJQyxnQkFBSixDQUFZO0FBQ3hCekMsTUFBQUEsT0FBTyxFQUFFQSxPQURlO0FBRXhCMEMsTUFBQUEsTUFBTSxFQUFFLE1BQUszQyxLQUFMLENBQVcyQztBQUZLLEtBQVosQ0FBZDtBQUlBM0MsSUFBQUEsS0FBSyxDQUFDSSxhQUFOLENBQW9Cd0MsR0FBcEIsQ0FBd0JDLFFBQXhCLENBQWlDM0IsT0FBakM7QUFDQWQsSUFBQUEsYUFBYSxDQUFDMEMsWUFBZCxDQUEyQkMsUUFBM0IsQ0FBb0NDLFNBQXBDLEdBQWdEUCxPQUFoRDtBQUNBckMsSUFBQUEsYUFBYSxDQUFDd0MsR0FBZCxDQUFrQkssVUFBbEIsQ0FBNkJSLE9BQTdCO0FBakVpQjtBQW1FbEI7Ozs7V0FFRCxrQkFBUztBQUNQLGFBQU8sSUFBUDtBQUNEOzs7RUF6RStCUyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1ncmlkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7R3JhdGljdWxlfSBmcm9tIFwib2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgZWxlbWVudCxcbiAgICAgIGJ1dHRvbjtcblxuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLkdSQVRJQ1VMRSxcbiAgICAgIHN3aXRjaGFibGU6IHRydWUsXG4gICAgICB0aXBMYWJlbDogbGFuZ0NvbnN0YW50cy5DVFJMX0dSSUQsXG4gICAgICBsYWJlbDogJyMnLFxuICAgICAgZGlzYWJsZUxhYmVsOiAnW10nLFxuICAgICAgc2hvd0xhYmVsczogdHJ1ZSxcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3Qgb2JqR3JpZCA9IG5ldyBHcmF0aWN1bGUob3B0aW9ucyk7XG5cbiAgICAvLyBmdW5jdGlvbiB0byBlbmFibGUgdGhlIGdyaWRcbiAgICB2YXIgZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgb2JqR3JpZC5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5FTkFCTEVEKTtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gZGlzYWJsZSB0aGUgZ3JpZFxuICAgIHZhciBkaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgb2JqR3JpZC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuRU5BQkxFRCk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSB0aGUgZ3JpZFxuICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gbG9vc2UgZm9jdXMsIG90aGVyd2lzZSBpdCBsb29rcyBtZXNzeVxuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICBpZiAob2JqR3JpZC5nZXRWaXNpYmxlKCkpIHtcbiAgICAgICAgZGlzYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkdSQVRJQ1VMRSArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTDtcbiAgICAvLyBidXR0b25cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfR1JJRDtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG4gICAgLy8gbGV0IGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcblxuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXRcbiAgICB9KTtcbiAgICBwcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihvYmpHcmlkKTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ncmF0aWN1bGUgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSJdLCJuYW1lcyI6WyJHcmlkIiwicHJvcHMiLCJlbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwib3B0aW9ucyIsImNsYXNzTmFtZSIsImNzc0NvbnN0YW50cyIsIkdSQVRJQ1VMRSIsInN3aXRjaGFibGUiLCJ0aXBMYWJlbCIsIkNUUkxfR1JJRCIsImxhYmVsIiwiZGlzYWJsZUxhYmVsIiwic2hvd0xhYmVscyIsInZpc2libGUiLCJzY29wZSIsIm9iakdyaWQiLCJHcmF0aWN1bGUiLCJlbmFibGUiLCJzZXRWaXNpYmxlIiwialF1ZXJ5IiwiYWRkQ2xhc3MiLCJFTkFCTEVEIiwiZGlzYWJsZSIsInJlbW92ZUNsYXNzIiwidG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiZ2V0VmlzaWJsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX0NPTlRST0wiLCJ0aXRsZSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXAiLCJhZGRMYXllciIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiZ3JhdGljdWxlIiwiYWRkQ29udHJvbCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=