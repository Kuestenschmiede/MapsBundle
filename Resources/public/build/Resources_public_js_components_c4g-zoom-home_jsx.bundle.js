(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-zoom-home_jsx"],{

/***/ "./Resources/public/js/components/c4g-zoom-home.jsx":
/*!**********************************************************!*\
  !*** ./Resources/public/js/components/c4g-zoom-home.jsx ***!
  \**********************************************************/
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

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ZoomHome = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ZoomHome, _Component);

  var _super = _createSuper(ZoomHome);

  function ZoomHome(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ZoomHome);
    _this = _super.call(this, props);
    var element, button;
    var mapController = props.mapController;
    var view = mapController.map.getView();
    var mapData = mapController.data;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(mapController.data);

    var toggle = function toggle(event) {
      event.stopPropagation(); // loose focus, otherwise it looks messy

      this.blur();

      if (mapData.calc_extent === "LOCATIONS" || mapData.calc_extent === "CENTERLOCS") {
        var extent = mapController.proxy.layerController.extent;

        if (extent && !(extent.maxX === Infinity || extent.maxX === -Infinity)) {
          var _view = mapController.map.getView();

          var padding = [parseInt(mapData.min_gap, 10), parseInt(mapData.min_gap, 10), parseInt(mapData.min_gap, 10), parseInt(mapData.min_gap, 10)];
          var realExtent = [extent.minX, extent.minY, extent.maxX, extent.maxY];

          if (mapData.calc_extent === "CENTERLOCS") {
            // ssss
            _view.fit(realExtent, {
              maxZoom: mapData.center.zoom
            });
          } else {
            _view.fit(realExtent, {
              padding: padding
            });
          }
        }
      } else {
        view.setCenter((0, _proj.transform)([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'));
        view.setZoom(parseInt(mapData.center.zoom, 10));
        view.setRotation(parseFloat(mapData.center.rotation));
      } // check userposition


      var geoLocation;

      if (mapData.geolocation) {
        geoLocation = new _ol.Geolocation({
          tracking: true,
          projection: view.getProjection()
        });
        geoLocation.on('change', function (evt) {
          view.setCenter(geoLocation.getPosition());

          if (mapData.geolocation_zoom) {
            view.setZoom(parseInt(mapData.geolocation_zoom, 10));
          }

          geoLocation.setTracking(false);
        });
      }

      mapController.map.setView(view);
    }; // wrapper div


    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OL_ZOOM_HOME + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE; // button

    button = document.createElement('button');
    button.title = langConstants.CTRL_ZOOM_HOME;
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
    mapController.mapsControls.controls.zoomHome = control;
    mapController.map.addControl(control);
    return _this;
  }

  (0, _createClass2["default"])(ZoomHome, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return ZoomHome;
}(_react.Component);

exports.default = ZoomHome;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy16b29tLWhvbWUuanN4Il0sIm5hbWVzIjpbIlpvb21Ib21lIiwicHJvcHMiLCJlbGVtZW50IiwiYnV0dG9uIiwibWFwQ29udHJvbGxlciIsInZpZXciLCJtYXAiLCJnZXRWaWV3IiwibWFwRGF0YSIsImRhdGEiLCJsYW5nQ29uc3RhbnRzIiwidG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiY2FsY19leHRlbnQiLCJleHRlbnQiLCJwcm94eSIsImxheWVyQ29udHJvbGxlciIsIm1heFgiLCJJbmZpbml0eSIsInBhZGRpbmciLCJwYXJzZUludCIsIm1pbl9nYXAiLCJyZWFsRXh0ZW50IiwibWluWCIsIm1pblkiLCJtYXhZIiwiZml0IiwibWF4Wm9vbSIsImNlbnRlciIsInpvb20iLCJzZXRDZW50ZXIiLCJwYXJzZUZsb2F0IiwibG9uIiwibGF0Iiwic2V0Wm9vbSIsInNldFJvdGF0aW9uIiwicm90YXRpb24iLCJnZW9Mb2NhdGlvbiIsImdlb2xvY2F0aW9uIiwiR2VvbG9jYXRpb24iLCJ0cmFja2luZyIsInByb2plY3Rpb24iLCJnZXRQcm9qZWN0aW9uIiwib24iLCJldnQiLCJnZXRQb3NpdGlvbiIsImdlb2xvY2F0aW9uX3pvb20iLCJzZXRUcmFja2luZyIsInNldFZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJPTF9aT09NX0hPTUUiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwidGl0bGUiLCJDVFJMX1pPT01fSE9NRSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsInpvb21Ib21lIiwiYWRkQ29u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QUFPLEVBQUU7QUFBN0IsS0FBekM7QUFDQTVELFVBQU0sQ0FBQzBELGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDbEQsTUFBdEMsRUFBOEM7QUFBQ21ELGdCQUFVLEVBQUUsS0FBYjtBQUFvQkMsYUFBTyxFQUFFO0FBQTdCLEtBQTlDLEVBakZpQixDQW1GakI7O0FBRUEsUUFBSUMsT0FBTyxHQUFHLElBQUlDLGdCQUFKLENBQVk7QUFDeEIvRCxhQUFPLEVBQUVBLE9BRGU7QUFFeEJnRSxZQUFNLEVBQUUsTUFBS2pFLEtBQUwsQ0FBV2lFO0FBRkssS0FBWixDQUFkO0FBS0E5RCxpQkFBYSxDQUFDK0QsWUFBZCxDQUEyQkMsUUFBM0IsQ0FBb0NDLFFBQXBDLEdBQStDTCxPQUEvQztBQUNBNUQsaUJBQWEsQ0FBQ0UsR0FBZCxDQUFrQmdFLFVBQWxCLENBQTZCTixPQUE3QjtBQTNGaUI7QUE0RmxCOzs7O1dBRUQsa0JBQVM7QUFDUCxhQUFPLElBQVA7QUFDRDs7O0VBakdtQ08sZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy16b29tLWhvbWVfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tIFwib2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbUhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBlbGVtZW50LFxuICAgICAgYnV0dG9uO1xuXG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCB2aWV3ID0gbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgIGxldCBtYXBEYXRhID0gbWFwQ29udHJvbGxlci5kYXRhO1xuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UobWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIGxldCB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gbG9vc2UgZm9jdXMsIG90aGVyd2lzZSBpdCBsb29rcyBtZXNzeVxuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICBpZiAobWFwRGF0YS5jYWxjX2V4dGVudCA9PT0gXCJMT0NBVElPTlNcIiB8fCBtYXBEYXRhLmNhbGNfZXh0ZW50ID09PSBcIkNFTlRFUkxPQ1NcIikge1xuICAgICAgICBsZXQgZXh0ZW50ID0gbWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuZXh0ZW50O1xuICAgICAgICBpZiAoZXh0ZW50ICYmICEoZXh0ZW50Lm1heFggPT09IEluZmluaXR5IHx8IGV4dGVudC5tYXhYID09PSAtSW5maW5pdHkpKSB7XG4gICAgICAgICAgbGV0IHZpZXcgPSBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgICAgICAgbGV0IHBhZGRpbmcgPSBbXG4gICAgICAgICAgICBwYXJzZUludChtYXBEYXRhLm1pbl9nYXAsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1hcERhdGEubWluX2dhcCwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWFwRGF0YS5taW5fZ2FwLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtYXBEYXRhLm1pbl9nYXAsIDEwKVxuICAgICAgICAgIF07XG4gICAgICAgICAgbGV0IHJlYWxFeHRlbnQgPSBbXG4gICAgICAgICAgICBleHRlbnQubWluWCxcbiAgICAgICAgICAgIGV4dGVudC5taW5ZLFxuICAgICAgICAgICAgZXh0ZW50Lm1heFgsXG4gICAgICAgICAgICBleHRlbnQubWF4WVxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBpZiAobWFwRGF0YS5jYWxjX2V4dGVudCA9PT0gXCJDRU5URVJMT0NTXCIpIHtcbiAgICAgICAgICAgIC8vIHNzc3NcbiAgICAgICAgICAgIHZpZXcuZml0KHJlYWxFeHRlbnQsIHtcbiAgICAgICAgICAgICAgbWF4Wm9vbTptYXBEYXRhLmNlbnRlci56b29tXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2aWV3LmZpdChyZWFsRXh0ZW50LCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZpZXcuc2V0Q2VudGVyKHRyYW5zZm9ybShbcGFyc2VGbG9hdChtYXBEYXRhLmNlbnRlci5sb24pLCBwYXJzZUZsb2F0KG1hcERhdGEuY2VudGVyLmxhdCldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpKTtcbiAgICAgICAgdmlldy5zZXRab29tKHBhcnNlSW50KG1hcERhdGEuY2VudGVyLnpvb20sIDEwKSk7XG4gICAgICAgIHZpZXcuc2V0Um90YXRpb24ocGFyc2VGbG9hdChtYXBEYXRhLmNlbnRlci5yb3RhdGlvbikpO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayB1c2VycG9zaXRpb25cbiAgICAgIGxldCBnZW9Mb2NhdGlvbjtcbiAgICAgIGlmIChtYXBEYXRhLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIGdlb0xvY2F0aW9uID0gbmV3IEdlb2xvY2F0aW9uKHtcbiAgICAgICAgICB0cmFja2luZzogdHJ1ZSxcbiAgICAgICAgICBwcm9qZWN0aW9uOiB2aWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgICB9KTtcblxuICAgICAgICBnZW9Mb2NhdGlvbi5vbignY2hhbmdlJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIHZpZXcuc2V0Q2VudGVyKGdlb0xvY2F0aW9uLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgIGlmIChtYXBEYXRhLmdlb2xvY2F0aW9uX3pvb20pIHtcbiAgICAgICAgICAgIHZpZXcuc2V0Wm9vbShwYXJzZUludChtYXBEYXRhLmdlb2xvY2F0aW9uX3pvb20sIDEwKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdlb0xvY2F0aW9uLnNldFRyYWNraW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG1hcENvbnRyb2xsZXIubWFwLnNldFZpZXcodmlldyk7XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLk9MX1pPT01fSE9NRSsnICcrY3NzQ29uc3RhbnRzLk9MX0NPTlRST0wgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgIC8vIGJ1dHRvblxuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX0hPTUU7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgLy8gc2V0IG9uQ2xpY2sgdG8gdGhlIHRvZ2dsZS1mdW5jdGlvblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuXG4gICAgLy8gbGV0IGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcblxuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXRcbiAgICB9KTtcblxuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnpvb21Ib21lID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9