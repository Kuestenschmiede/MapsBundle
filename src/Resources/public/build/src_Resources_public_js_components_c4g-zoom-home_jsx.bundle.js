"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-zoom-home_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-zoom-home.jsx":
/*!**************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-zoom-home.jsx ***!
  \**************************************************************/
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
        var funcLocation = function funcLocation(evt) {
          view.setCenter(scope.props.mapController.geolocation.getPosition());

          if (mapData.geolocation_zoom) {
            view.setZoom(parseInt(mapData.geolocation_zoom, 10));
          }
        };

        scope.props.mapController.geolocation.once('change', funcLocation);

        if (this.props.mapController.geolocation.getTracking()) {
          this.props.mapController.geolocation.dispatchEvent('change');
        } else {
          this.props.mapController.geolocation.setTracking(true);
        }
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

exports["default"] = ZoomHome;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctem9vbS1ob21lX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBOzs7OztFQUNuQixrQkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBO0lBQ2pCLDBCQUFNQSxLQUFOO0lBRUEsSUFBSUMsT0FBSixFQUNFQyxNQURGO0lBR0EsSUFBSUMsYUFBYSxHQUFHSCxLQUFLLENBQUNHLGFBQTFCO0lBQ0EsSUFBSUMsSUFBSSxHQUFHRCxhQUFhLENBQUNFLEdBQWQsQ0FBa0JDLE9BQWxCLEVBQVg7SUFDQSxJQUFJQyxPQUFPLEdBQUdKLGFBQWEsQ0FBQ0ssSUFBNUI7SUFDQSxJQUFJQyxhQUFhLEdBQUcsSUFBQUMsd0JBQUEsRUFBWVAsYUFBYSxDQUFDSyxJQUExQixDQUFwQjs7SUFFQSxJQUFJRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFVQyxLQUFWLEVBQWlCO01BQzVCQSxLQUFLLENBQUNDLGVBQU4sR0FENEIsQ0FFNUI7O01BQ0EsS0FBS0MsSUFBTDs7TUFDQSxJQUFJUCxPQUFPLENBQUNRLFdBQVIsS0FBd0IsV0FBeEIsSUFBdUNSLE9BQU8sQ0FBQ1EsV0FBUixLQUF3QixZQUFuRSxFQUFpRjtRQUMvRSxJQUFJQyxNQUFNLEdBQUdiLGFBQWEsQ0FBQ2MsS0FBZCxDQUFvQkMsZUFBcEIsQ0FBb0NGLE1BQWpEOztRQUNBLElBQUlBLE1BQU0sSUFBSSxFQUFFQSxNQUFNLENBQUNHLElBQVAsS0FBZ0JDLFFBQWhCLElBQTRCSixNQUFNLENBQUNHLElBQVAsS0FBZ0IsQ0FBQ0MsUUFBL0MsQ0FBZCxFQUF3RTtVQUN0RSxJQUFJaEIsS0FBSSxHQUFHRCxhQUFhLENBQUNFLEdBQWQsQ0FBa0JDLE9BQWxCLEVBQVg7O1VBQ0EsSUFBSWUsT0FBTyxHQUFHLENBQ1pD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QTNDLEdBQXdELEdBQXhELEdBQThERiw2QkFBQSxDQUFhRyxlQUEvRixDQTFFaUIsQ0EyRWpCOztJQUNBeEQsTUFBTSxHQUFHa0QsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVQ7SUFDQW5ELE1BQU0sQ0FBQ3lELEtBQVAsR0FBZWxELGFBQWEsQ0FBQ21ELGNBQTdCO0lBQ0EzRCxPQUFPLENBQUM0RCxXQUFSLENBQW9CM0QsTUFBcEIsRUE5RWlCLENBZ0ZqQjs7SUFDQUEsTUFBTSxDQUFDNEQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNuRCxNQUFqQyxFQUF5QztNQUFDb0QsVUFBVSxFQUFFLEtBQWI7TUFBb0JDLE9BQU8sRUFBRTtJQUE3QixDQUF6QztJQUNBOUQsTUFBTSxDQUFDNEQsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0NuRCxNQUF0QyxFQUE4QztNQUFDb0QsVUFBVSxFQUFFLEtBQWI7TUFBb0JDLE9BQU8sRUFBRTtJQUE3QixDQUE5QyxFQWxGaUIsQ0FvRmpCOztJQUVBLElBQUlDLE9BQU8sR0FBRyxJQUFJQyxnQkFBSixDQUFZO01BQ3hCakUsT0FBTyxFQUFFQSxPQURlO01BRXhCa0UsTUFBTSxFQUFFLE1BQUtuRSxLQUFMLENBQVdtRTtJQUZLLENBQVosQ0FBZDtJQUtBaEUsYUFBYSxDQUFDaUUsWUFBZCxDQUEyQkMsUUFBM0IsQ0FBb0NDLFFBQXBDLEdBQStDTCxPQUEvQztJQUNBOUQsYUFBYSxDQUFDRSxHQUFkLENBQWtCa0UsVUFBbEIsQ0FBNkJOLE9BQTdCO0lBNUZpQjtFQTZGbEI7Ozs7V0FFRCxrQkFBUztNQUNQLE9BQU8sSUFBUDtJQUNEOzs7RUFsR21DTyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy16b29tLWhvbWUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tIFwib2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbUhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBlbGVtZW50LFxuICAgICAgYnV0dG9uO1xuXG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCB2aWV3ID0gbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgIGxldCBtYXBEYXRhID0gbWFwQ29udHJvbGxlci5kYXRhO1xuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UobWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIGxldCB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gbG9vc2UgZm9jdXMsIG90aGVyd2lzZSBpdCBsb29rcyBtZXNzeVxuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICBpZiAobWFwRGF0YS5jYWxjX2V4dGVudCA9PT0gXCJMT0NBVElPTlNcIiB8fCBtYXBEYXRhLmNhbGNfZXh0ZW50ID09PSBcIkNFTlRFUkxPQ1NcIikge1xuICAgICAgICBsZXQgZXh0ZW50ID0gbWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuZXh0ZW50O1xuICAgICAgICBpZiAoZXh0ZW50ICYmICEoZXh0ZW50Lm1heFggPT09IEluZmluaXR5IHx8IGV4dGVudC5tYXhYID09PSAtSW5maW5pdHkpKSB7XG4gICAgICAgICAgbGV0IHZpZXcgPSBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgICAgICAgbGV0IHBhZGRpbmcgPSBbXG4gICAgICAgICAgICBwYXJzZUludChtYXBEYXRhLm1pbl9nYXAsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1hcERhdGEubWluX2dhcCwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWFwRGF0YS5taW5fZ2FwLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtYXBEYXRhLm1pbl9nYXAsIDEwKVxuICAgICAgICAgIF07XG4gICAgICAgICAgbGV0IHJlYWxFeHRlbnQgPSBbXG4gICAgICAgICAgICBleHRlbnQubWluWCxcbiAgICAgICAgICAgIGV4dGVudC5taW5ZLFxuICAgICAgICAgICAgZXh0ZW50Lm1heFgsXG4gICAgICAgICAgICBleHRlbnQubWF4WVxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBpZiAobWFwRGF0YS5jYWxjX2V4dGVudCA9PT0gXCJDRU5URVJMT0NTXCIpIHtcbiAgICAgICAgICAgIC8vIHNzc3NcbiAgICAgICAgICAgIHZpZXcuZml0KHJlYWxFeHRlbnQsIHtcbiAgICAgICAgICAgICAgbWF4Wm9vbTptYXBEYXRhLmNlbnRlci56b29tXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2aWV3LmZpdChyZWFsRXh0ZW50LCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZpZXcuc2V0Q2VudGVyKHRyYW5zZm9ybShbcGFyc2VGbG9hdChtYXBEYXRhLmNlbnRlci5sb24pLCBwYXJzZUZsb2F0KG1hcERhdGEuY2VudGVyLmxhdCldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpKTtcbiAgICAgICAgdmlldy5zZXRab29tKHBhcnNlSW50KG1hcERhdGEuY2VudGVyLnpvb20sIDEwKSk7XG4gICAgICAgIHZpZXcuc2V0Um90YXRpb24ocGFyc2VGbG9hdChtYXBEYXRhLmNlbnRlci5yb3RhdGlvbikpO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayB1c2VycG9zaXRpb25cbiAgICAgIGxldCBnZW9Mb2NhdGlvbjtcbiAgICAgIGlmIChtYXBEYXRhLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIGxldCBmdW5jTG9jYXRpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgdmlldy5zZXRDZW50ZXIoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICBpZiAobWFwRGF0YS5nZW9sb2NhdGlvbl96b29tKSB7XG4gICAgICAgICAgICB2aWV3LnNldFpvb20ocGFyc2VJbnQobWFwRGF0YS5nZW9sb2NhdGlvbl96b29tLCAxMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLm9uY2UoJ2NoYW5nZScsIGZ1bmNMb2NhdGlvbik7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZ2V0VHJhY2tpbmcoKSkge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5kaXNwYXRjaEV2ZW50KCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uc2V0VHJhY2tpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWFwQ29udHJvbGxlci5tYXAuc2V0Vmlldyh2aWV3KTtcbiAgICB9O1xuXG4gICAgLy8gd3JhcHBlciBkaXZcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuT0xfWk9PTV9IT01FKycgJytjc3NDb25zdGFudHMuT0xfQ09OVFJPTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgLy8gYnV0dG9uXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX1pPT01fSE9NRTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG5cbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuXG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuem9vbUhvbWUgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufSJdLCJuYW1lcyI6WyJab29tSG9tZSIsInByb3BzIiwiZWxlbWVudCIsImJ1dHRvbiIsIm1hcENvbnRyb2xsZXIiLCJ2aWV3IiwibWFwIiwiZ2V0VmlldyIsIm1hcERhdGEiLCJkYXRhIiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwidG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiY2FsY19leHRlbnQiLCJleHRlbnQiLCJwcm94eSIsImxheWVyQ29udHJvbGxlciIsIm1heFgiLCJJbmZpbml0eSIsInBhZGRpbmciLCJwYXJzZUludCIsIm1pbl9nYXAiLCJyZWFsRXh0ZW50IiwibWluWCIsIm1pblkiLCJtYXhZIiwiZml0IiwibWF4Wm9vbSIsImNlbnRlciIsInpvb20iLCJzZXRDZW50ZXIiLCJ0cmFuc2Zvcm0iLCJwYXJzZUZsb2F0IiwibG9uIiwibGF0Iiwic2V0Wm9vbSIsInNldFJvdGF0aW9uIiwicm90YXRpb24iLCJnZW9Mb2NhdGlvbiIsImdlb2xvY2F0aW9uIiwiZnVuY0xvY2F0aW9uIiwiZXZ0Iiwic2NvcGUiLCJnZXRQb3NpdGlvbiIsImdlb2xvY2F0aW9uX3pvb20iLCJvbmNlIiwiZ2V0VHJhY2tpbmciLCJkaXNwYXRjaEV2ZW50Iiwic2V0VHJhY2tpbmciLCJzZXRWaWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiT0xfWk9PTV9IT01FIiwiT0xfQ09OVFJPTCIsIk9MX1VOU0VMRUNUQUJMRSIsInRpdGxlIiwiQ1RSTF9aT09NX0hPTUUiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicGFzc2l2ZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJ6b29tSG9tZSIsImFkZENvbnRyb2wiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9