(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-zoom-position_jsx"],{

/***/ "./Resources/public/js/components/c4g-zoom-position.jsx":
/*!**************************************************************!*\
  !*** ./Resources/public/js/components/c4g-zoom-position.jsx ***!
  \**************************************************************/
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

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ZoomPosition = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ZoomPosition, _Component);

  var _super = _createSuper(ZoomPosition);

  function ZoomPosition(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ZoomPosition);
    _this = _super.call(this, props);
    var element, button;
    var mapController = props.mapController;
    var view = mapController.map.getView();
    var mapData = mapController.data;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(mapData);

    var toggle = function toggle(event) {
      event.stopPropagation(); // loose focus, otherwise it looks messy

      this.blur();
      var geoLocation = new _ol.Geolocation({
        tracking: true,
        projection: view.getProjection()
      });
      geoLocation.on('change', function (evt) {
        view.setCenter(geoLocation.getPosition()); // if (mapData.geolocation_zoom) {
        //    view.setZoom(mapData.geolocation_zoom);
        // } else {

        view.setZoom(18); //}

        geoLocation.setTracking(false);
        mapController.map.setView(view);
      });
    }; // wrapper div


    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OL_ZOOM_POS + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE; // button

    button = document.createElement('button');
    button.title = langConstants.CTRL_ZOOM_POS;
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
    mapController.mapsControls.controls.zoomPosition = control;
    mapController.map.addControl(control);
    return _this;
  }

  (0, _createClass2["default"])(ZoomPosition, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return ZoomPosition;
}(_react.Component);

exports.default = ZoomPosition;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy16b29tLXBvc2l0aW9uLmpzeCJdLCJuYW1lcyI6WyJab29tUG9zaXRpb24iLCJwcm9wcyIsImVsZW1lbnQiLCJidXR0b24iLCJtYXBDb250cm9sbGVyIiwidmlldyIsIm1hcCIsImdldFZpZXciLCJtYXBEYXRhIiwiZGF0YSIsImxhbmdDb25zdGFudHMiLCJ0b2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJnZW9Mb2NhdGlvbiIsIkdlb2xvY2F0aW9uIiwidHJhY2tpbmciLCJwcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvbiIsIm9uIiwiZXZ0Iiwic2V0Q2VudGVyIiwiZ2V0UG9zaXRpb24iLCJzZXRab29tIiwic2V0VHJhY2tpbmciLCJzZXRWaWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiT0xfWk9PTV9QT1MiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwidGl0bGUiLCJDVFJMX1pPT01fUE9TIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInBhc3NpdmUiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiem9vbVBvc2l0aW9uIiwiYWRkQ29udHJvbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7O0FBRW5CLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxRQUFJQyxPQUFKLEVBQ0VDLE1BREY7QUFHQSxRQUFJQyxhQUFhLEdBQUdILEtBQUssQ0FBQ0csYUFBMUI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELGFBQWEsQ0FBQ0UsR0FBZCxDQUFrQkMsT0FBbEIsRUFBWDtBQUNBLFFBQUlDLE9BQU8sR0FBR0osYUFBYSxDQUFDSyxJQUE1QjtBQUNBLFFBQUlDLGFBQWEsR0FBRyw4QkFBWUYsT0FBWixDQUFwQjs7QUFFQSxRQUFJRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFVQyxLQUFWLEVBQWlCO0FBQzVCQSxXQUFLLENBQUNDLGVBQU4sR0FENEIsQ0FFNUI7O0FBQ0EsV0FBS0MsSUFBTDtBQUVBLFVBQUlDLFdBQVcsR0FBRyxJQUFJQyxlQUFKLENBQWdCO0FBQ2hDQyxnQkFBUSxFQUFFLElBRHNCO0FBRWhDQyxrQkFBVSxFQUFFYixJQUFJLENBQUNjLGFBQUw7QUFGb0IsT0FBaEIsQ0FBbEI7QUFLQUosaUJBQVcsQ0FBQ0ssRUFBWixDQUFlLFFBQWYsRUFBeUIsVUFBVUMsR0FBVixFQUFlO0FBQ3RDaEIsWUFBSSxDQUFDaUIsU0FBTCxDQUFlUCxXQUFXLENBQUNRLFdBQVosRUFBZixFQURzQyxDQUV0QztBQUNBO0FBQ0E7O0FBQ0FsQixZQUFJLENBQUNtQixPQUFMLENBQWEsRUFBYixFQUxzQyxDQU10Qzs7QUFDQVQsbUJBQVcsQ0FBQ1UsV0FBWixDQUF3QixLQUF4QjtBQUNBckIscUJBQWEsQ0FBQ0UsR0FBZCxDQUFrQm9CLE9BQWxCLENBQTBCckIsSUFBMUI7QUFDRCxPQVREO0FBVUQsS0FwQkQsQ0FYaUIsQ0FpQ2pCOzs7QUFDQUgsV0FBTyxHQUFHeUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQTFCLFdBQU8sQ0FBQzJCLFNBQVIsR0FBb0JDLDhCQUFhQyxXQUFiLEdBQTJCLEdBQTNCLEdBQWlDRCw4QkFBYUUsVUFBOUMsR0FBMkQsR0FBM0QsR0FBaUVGLDhCQUFhRyxlQUFsRyxDQW5DaUIsQ0FxQ2pCOztBQUNBOUIsVUFBTSxHQUFHd0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDQXpCLFVBQU0sQ0FBQytCLEtBQVAsR0FBZXhCLGFBQWEsQ0FBQ3lCLGFBQTdCO0FBQ0FqQyxXQUFPLENBQUNrQyxXQUFSLENBQW9CakMsTUFBcEIsRUF4Q2lCLENBMENqQjs7QUFDQUEsVUFBTSxDQUFDa0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMxQixNQUFqQyxFQUF5QztBQUFDMkIsZ0JBQVUsRUFBRSxLQUFiO0FBQW9CQyxhQUFPLEVBQUU7QUFBN0IsS0FBekM7QUFDQXBDLFVBQU0sQ0FBQ2tDLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDMUIsTUFBdEMsRUFBOEM7QUFBQzJCLGdCQUFVLEVBQUUsS0FBYjtBQUFvQkMsYUFBTyxFQUFFO0FBQTdCLEtBQTlDLEVBNUNpQixDQTZDakI7O0FBRUEsUUFBSUMsT0FBTyxHQUFHLElBQUlDLGdCQUFKLENBQVk7QUFDeEJ2QyxhQUFPLEVBQUVBLE9BRGU7QUFFeEJ3QyxZQUFNLEVBQUUsTUFBS3pDLEtBQUwsQ0FBV3lDO0FBRkssS0FBWixDQUFkO0FBS0F0QyxpQkFBYSxDQUFDdUMsWUFBZCxDQUEyQkMsUUFBM0IsQ0FBb0NDLFlBQXBDLEdBQW1ETCxPQUFuRDtBQUNBcEMsaUJBQWEsQ0FBQ0UsR0FBZCxDQUFrQndDLFVBQWxCLENBQTZCTixPQUE3QjtBQXJEaUI7QUFzRGxCOzs7O1dBRUQsa0JBQVM7QUFDUCxhQUFPLElBQVA7QUFDRDs7O0VBNUR1Q08sZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy16b29tLXBvc2l0aW9uX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7R2VvbG9jYXRpb259IGZyb20gXCJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tUG9zaXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICBidXR0b247XG5cbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IHZpZXcgPSBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgbGV0IG1hcERhdGEgPSBtYXBDb250cm9sbGVyLmRhdGE7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShtYXBEYXRhKTtcblxuICAgIGxldCB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gbG9vc2UgZm9jdXMsIG90aGVyd2lzZSBpdCBsb29rcyBtZXNzeVxuICAgICAgdGhpcy5ibHVyKCk7XG5cbiAgICAgIGxldCBnZW9Mb2NhdGlvbiA9IG5ldyBHZW9sb2NhdGlvbih7XG4gICAgICAgIHRyYWNraW5nOiB0cnVlLFxuICAgICAgICBwcm9qZWN0aW9uOiB2aWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgfSk7XG5cbiAgICAgIGdlb0xvY2F0aW9uLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZpZXcuc2V0Q2VudGVyKGdlb0xvY2F0aW9uLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAvLyBpZiAobWFwRGF0YS5nZW9sb2NhdGlvbl96b29tKSB7XG4gICAgICAgIC8vICAgIHZpZXcuc2V0Wm9vbShtYXBEYXRhLmdlb2xvY2F0aW9uX3pvb20pO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICB2aWV3LnNldFpvb20oMTgpO1xuICAgICAgICAvL31cbiAgICAgICAgZ2VvTG9jYXRpb24uc2V0VHJhY2tpbmcoZmFsc2UpO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5zZXRWaWV3KHZpZXcpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLk9MX1pPT01fUE9TICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX0NPTlRST0wgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuXG4gICAgLy8gYnV0dG9uXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX1pPT01fUE9TO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIC8vIHNldCBvbkNsaWNrIHRvIHRoZSB0b2dnbGUtZnVuY3Rpb25cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuXG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuem9vbVBvc2l0aW9uID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9