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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctem9vbS1ob21lX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBOzs7OztBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsUUFBSUMsT0FBSixFQUNFQyxNQURGO0FBR0EsUUFBSUMsYUFBYSxHQUFHSCxLQUFLLENBQUNHLGFBQTFCO0FBQ0EsUUFBSUMsSUFBSSxHQUFHRCxhQUFhLENBQUNFLEdBQWQsQ0FBa0JDLE9BQWxCLEVBQVg7QUFDQSxRQUFJQyxPQUFPLEdBQUdKLGFBQWEsQ0FBQ0ssSUFBNUI7QUFDQSxRQUFJQyxhQUFhLEdBQUcsOEJBQVlOLGFBQWEsQ0FBQ0ssSUFBMUIsQ0FBcEI7O0FBRUEsUUFBSUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBVUMsS0FBVixFQUFpQjtBQUM1QkEsTUFBQUEsS0FBSyxDQUFDQyxlQUFOLEdBRDRCLENBRTVCOztBQUNBLFdBQUtDLElBQUw7O0FBQ0EsVUFBSU4sT0FBTyxDQUFDTyxXQUFSLEtBQXdCLFdBQXhCLElBQXVDUCxPQUFPLENBQUNPLFdBQVIsS0FBd0IsWUFBbkUsRUFBaUY7QUFDL0UsWUFBSUMsTUFBTSxHQUFHWixhQUFhLENBQUNhLEtBQWQsQ0FBb0JDLGVBQXBCLENBQW9DRixNQUFqRDs7QUFDQSxZQUFJQSxNQUFNLElBQUksRUFBRUEsTUFBTSxDQUFDRyxJQUFQLEtBQWdCQyxRQUFoQixJQUE0QkosTUFBTSxDQUFDRyxJQUFQLEtBQWdCLENBQUNDLFFBQS9DLENBQWQsRUFBd0U7QUFDdEUsY0FBSWYsS0FBSSxHQUFHRCxhQUFhLENBQUNFLEdBQWQsQ0FBa0JDLE9BQWxCLEVBQVg7O0FBQ0EsY0FBSWMsT0FBTyxHQUFHLENBQ1pDLFFBQVEs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aWMvanMvY29tcG9uZW50cy9jNGctem9vbS1ob21lLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHtHZW9sb2NhdGlvbn0gZnJvbSBcIm9sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb21Ib21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgZWxlbWVudCxcbiAgICAgIGJ1dHRvbjtcblxuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgdmlldyA9IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICBsZXQgbWFwRGF0YSA9IG1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKG1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICBsZXQgdG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vIGxvb3NlIGZvY3VzLCBvdGhlcndpc2UgaXQgbG9va3MgbWVzc3lcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgaWYgKG1hcERhdGEuY2FsY19leHRlbnQgPT09IFwiTE9DQVRJT05TXCIgfHwgbWFwRGF0YS5jYWxjX2V4dGVudCA9PT0gXCJDRU5URVJMT0NTXCIpIHtcbiAgICAgICAgbGV0IGV4dGVudCA9IG1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLmV4dGVudDtcbiAgICAgICAgaWYgKGV4dGVudCAmJiAhKGV4dGVudC5tYXhYID09PSBJbmZpbml0eSB8fCBleHRlbnQubWF4WCA9PT0gLUluZmluaXR5KSkge1xuICAgICAgICAgIGxldCB2aWV3ID0gbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgICAgICAgIGxldCBwYWRkaW5nID0gW1xuICAgICAgICAgICAgcGFyc2VJbnQobWFwRGF0YS5taW5fZ2FwLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtYXBEYXRhLm1pbl9nYXAsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1hcERhdGEubWluX2dhcCwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWFwRGF0YS5taW5fZ2FwLCAxMClcbiAgICAgICAgICBdO1xuICAgICAgICAgIGxldCByZWFsRXh0ZW50ID0gW1xuICAgICAgICAgICAgZXh0ZW50Lm1pblgsXG4gICAgICAgICAgICBleHRlbnQubWluWSxcbiAgICAgICAgICAgIGV4dGVudC5tYXhYLFxuICAgICAgICAgICAgZXh0ZW50Lm1heFlcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgaWYgKG1hcERhdGEuY2FsY19leHRlbnQgPT09IFwiQ0VOVEVSTE9DU1wiKSB7XG4gICAgICAgICAgICAvLyBzc3NzXG4gICAgICAgICAgICB2aWV3LmZpdChyZWFsRXh0ZW50LCB7XG4gICAgICAgICAgICAgIG1heFpvb206bWFwRGF0YS5jZW50ZXIuem9vbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmlldy5maXQocmVhbEV4dGVudCwge1xuICAgICAgICAgICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2aWV3LnNldENlbnRlcih0cmFuc2Zvcm0oW3BhcnNlRmxvYXQobWFwRGF0YS5jZW50ZXIubG9uKSwgcGFyc2VGbG9hdChtYXBEYXRhLmNlbnRlci5sYXQpXSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKSk7XG4gICAgICAgIHZpZXcuc2V0Wm9vbShwYXJzZUludChtYXBEYXRhLmNlbnRlci56b29tLCAxMCkpO1xuICAgICAgICB2aWV3LnNldFJvdGF0aW9uKHBhcnNlRmxvYXQobWFwRGF0YS5jZW50ZXIucm90YXRpb24pKTtcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgdXNlcnBvc2l0aW9uXG4gICAgICBsZXQgZ2VvTG9jYXRpb247XG4gICAgICBpZiAobWFwRGF0YS5nZW9sb2NhdGlvbikge1xuICAgICAgICBsZXQgZnVuY0xvY2F0aW9uID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIHZpZXcuc2V0Q2VudGVyKHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgaWYgKG1hcERhdGEuZ2VvbG9jYXRpb25fem9vbSkge1xuICAgICAgICAgICAgdmlldy5zZXRab29tKHBhcnNlSW50KG1hcERhdGEuZ2VvbG9jYXRpb25fem9vbSwgMTApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5vbmNlKCdjaGFuZ2UnLCBmdW5jTG9jYXRpb24pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFRyYWNraW5nKCkpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZGlzcGF0Y2hFdmVudCgnY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLnNldFRyYWNraW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1hcENvbnRyb2xsZXIubWFwLnNldFZpZXcodmlldyk7XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLk9MX1pPT01fSE9NRSsnICcrY3NzQ29uc3RhbnRzLk9MX0NPTlRST0wgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgIC8vIGJ1dHRvblxuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX0hPTUU7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgLy8gc2V0IG9uQ2xpY2sgdG8gdGhlIHRvZ2dsZS1mdW5jdGlvblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuXG4gICAgLy8gbGV0IGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcblxuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXRcbiAgICB9KTtcblxuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnpvb21Ib21lID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiWm9vbUhvbWUiLCJwcm9wcyIsImVsZW1lbnQiLCJidXR0b24iLCJtYXBDb250cm9sbGVyIiwidmlldyIsIm1hcCIsImdldFZpZXciLCJtYXBEYXRhIiwiZGF0YSIsImxhbmdDb25zdGFudHMiLCJ0b2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJjYWxjX2V4dGVudCIsImV4dGVudCIsInByb3h5IiwibGF5ZXJDb250cm9sbGVyIiwibWF4WCIsIkluZmluaXR5IiwicGFkZGluZyIsInBhcnNlSW50IiwibWluX2dhcCIsInJlYWxFeHRlbnQiLCJtaW5YIiwibWluWSIsIm1heFkiLCJmaXQiLCJtYXhab29tIiwiY2VudGVyIiwiem9vbSIsInNldENlbnRlciIsInBhcnNlRmxvYXQiLCJsb24iLCJsYXQiLCJzZXRab29tIiwic2V0Um90YXRpb24iLCJyb3RhdGlvbiIsImdlb0xvY2F0aW9uIiwiZ2VvbG9jYXRpb24iLCJmdW5jTG9jYXRpb24iLCJldnQiLCJzY29wZSIsImdldFBvc2l0aW9uIiwiZ2VvbG9jYXRpb25fem9vbSIsIm9uY2UiLCJnZXRUcmFja2luZyIsImRpc3BhdGNoRXZlbnQiLCJzZXRUcmFja2luZyIsInNldFZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJPTF9aT09NX0hPTUUiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwidGl0bGUiLCJDVFJMX1pPT01fSE9NRSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsInpvb21Ib21lIiwiYWRkQ29udHJvbCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=