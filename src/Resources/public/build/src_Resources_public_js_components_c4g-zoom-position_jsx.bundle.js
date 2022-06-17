"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-zoom-position_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-zoom-position.jsx":
/*!******************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-zoom-position.jsx ***!
  \******************************************************************/
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

var ZoomPosition = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ZoomPosition, _Component);

  var _super = _createSuper(ZoomPosition);

  function ZoomPosition(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ZoomPosition);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this);
    var element, button;
    var mapController = props.mapController;
    var view = mapController.map.getView();
    var mapData = mapController.data;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(mapData);

    var toggle = function toggle(event) {
      event.stopPropagation(); // loose focus, otherwise it looks messy

      this.blur();

      var funcLocation = function funcLocation(evt) {
        var pos = scope.props.mapController.geolocation.getPosition();

        if (pos) {
          view.setCenter(pos);
          view.setZoom(18);
          mapController.map.setView(view);
        }
      };

      scope.props.mapController.geolocation.once('change', funcLocation);

      if (scope.props.mapController.geolocation.getTracking()) {
        scope.props.mapController.geolocation.dispatchEvent('change');
      } else {
        scope.props.mapController.geolocation.setTracking(true);
      }
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

exports["default"] = ZoomPosition;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctem9vbS1wb3NpdGlvbl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBOzs7OztFQUVuQixzQkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBO0lBQ2pCLDBCQUFNQSxLQUFOO0lBQ0EsSUFBTUMsS0FBSyxpREFBWDtJQUNBLElBQUlDLE9BQUosRUFDRUMsTUFERjtJQUdBLElBQUlDLGFBQWEsR0FBR0osS0FBSyxDQUFDSSxhQUExQjtJQUNBLElBQUlDLElBQUksR0FBR0QsYUFBYSxDQUFDRSxHQUFkLENBQWtCQyxPQUFsQixFQUFYO0lBQ0EsSUFBSUMsT0FBTyxHQUFHSixhQUFhLENBQUNLLElBQTVCO0lBQ0EsSUFBSUMsYUFBYSxHQUFHLElBQUFDLHdCQUFBLEVBQVlILE9BQVosQ0FBcEI7O0lBRUEsSUFBSUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBVUMsS0FBVixFQUFpQjtNQUM1QkEsS0FBSyxDQUFDQyxlQUFOLEdBRDRCLENBRTVCOztNQUNBLEtBQUtDLElBQUw7O01BRUEsSUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBVUMsR0FBVixFQUFlO1FBQ2hDLElBQUlDLEdBQUcsR0FBR2pCLEtBQUssQ0FBQ0QsS0FBTixDQUFZSSxhQUFaLENBQTBCZSxXQUExQixDQUFzQ0MsV0FBdEMsRUFBVjs7UUFDQSxJQUFJRixHQUFKLEVBQVM7VUFDUGIsSUFBSSxDQUFDZ0IsU0FBTCxDQUFlSCxHQUFmO1VBQ0FiLElBQUksQ0FBQ2lCLE9BQUwsQ0FBYSxFQUFiO1VBQ0FsQixhQUFhLENBQUNFLEdBQWQsQ0FBa0JpQixPQUFsQixDQUEwQmxCLElBQTFCO1FBQ0Q7TUFDRixDQVBEOztNQVFBSixLQUFLLENBQUNELEtBQU4sQ0FBWUksYUFBWixDQUEwQmUsV0FBMUIsQ0FBc0NLLElBQXRDLENBQTJDLFFBQTNDLEVBQXFEUixZQUFyRDs7TUFDQSxJQUFJZixLQUFLLENBQUNELEtBQU4sQ0FBWUksYUFBWixDQUEwQmUsV0FBMUIsQ0FBc0NNLFdBQXRDLEVBQUosRUFBeUQ7UUFDdkR4QixLQUFLLENBQUNELEtBQU4sQ0FBWUksYUFBWixDQUEwQmUsV0FBMUIsQ0FBc0NPLGFBQXRDLENBQW9ELFFBQXBEO01BQ0QsQ0FGRCxNQUdLO1FBQ0h6QixLQUFLLENBQUNELEtBQU4sQ0FBWUksYUFBWixDQUEwQmUsV0FBMUIsQ0FBc0NRLFdBQXRDLENBQWtELElBQWxEO01BQ0Q7SUFDRixDQXBCRCxDQVhpQixDQWlDakI7OztJQUNBekIsT0FBTyxHQUFHMEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVY7SUFDQTNCLE9BQU8sQ0FBQzRCLFNBQVIsR0FBb0JDLDZCQUFBLENBQWFDLFdBQWIsR0FBMkIsR0FBM0IsR0FBaUNELDZCQUFBLENBQWFFLFVBQTlDLEdBQTJELEdBQTNELEdBQWlFRiw2QkFBQSxDQUFhRyxlQUFsRyxDQW5DaUIsQ0FxQ2pCOztJQUNBL0IsTUFBTSxHQUFHeUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVQ7SUFDQTFCLE1BQU0sQ0FBQ2dDLEtBQVAsR0FBZXpCLGFBQWEsQ0FBQzBCLGFBQTdCO0lBQ0FsQyxPQUFPLENBQUNtQyxXQUFSLENBQW9CbEMsTUFBcEIsRUF4Q2lCLENBMENqQjs7SUFDQUEsTUFBTSxDQUFDbUMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMxQixNQUFqQyxFQUF5QztNQUFDMkIsVUFBVSxFQUFFLEtBQWI7TUFBb0JDLE9BQU8sRUFBRTtJQUE3QixDQUF6QztJQUNBckMsTUFBTSxDQUFDbUMsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MxQixNQUF0QyxFQUE4QztNQUFDMkIsVUFBVSxFQUFFLEtBQWI7TUFBb0JDLE9BQU8sRUFBRTtJQUE3QixDQUE5QyxFQTVDaUIsQ0E2Q2pCOztJQUVBLElBQUlDLE9BQU8sR0FBRyxJQUFJQyxnQkFBSixDQUFZO01BQ3hCeEMsT0FBTyxFQUFFQSxPQURlO01BRXhCeUMsTUFBTSxFQUFFLE1BQUszQyxLQUFMLENBQVcyQztJQUZLLENBQVosQ0FBZDtJQUtBdkMsYUFBYSxDQUFDd0MsWUFBZCxDQUEyQkMsUUFBM0IsQ0FBb0NDLFlBQXBDLEdBQW1ETCxPQUFuRDtJQUNBckMsYUFBYSxDQUFDRSxHQUFkLENBQWtCeUMsVUFBbEIsQ0FBNkJOLE9BQTdCO0lBckRpQjtFQXNEbEI7Ozs7V0FFRCxrQkFBUztNQUNQLE9BQU8sSUFBUDtJQUNEOzs7RUE1RHVDTyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy16b29tLXBvc2l0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7R2VvbG9jYXRpb259IGZyb20gXCJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tUG9zaXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZWxlbWVudCxcbiAgICAgIGJ1dHRvbjtcblxuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgdmlldyA9IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICBsZXQgbWFwRGF0YSA9IG1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKG1hcERhdGEpO1xuXG4gICAgbGV0IHRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBsb29zZSBmb2N1cywgb3RoZXJ3aXNlIGl0IGxvb2tzIG1lc3N5XG4gICAgICB0aGlzLmJsdXIoKTtcblxuICAgICAgbGV0IGZ1bmNMb2NhdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgbGV0IHBvcyA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZ2V0UG9zaXRpb24oKVxuICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgdmlldy5zZXRDZW50ZXIocG9zKTtcbiAgICAgICAgICB2aWV3LnNldFpvb20oMTgpO1xuICAgICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnNldFZpZXcodmlldyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24ub25jZSgnY2hhbmdlJywgZnVuY0xvY2F0aW9uKTtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFRyYWNraW5nKCkpIHtcbiAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5kaXNwYXRjaEV2ZW50KCdjaGFuZ2UnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLnNldFRyYWNraW5nKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PTF9aT09NX1BPUyArICcgJyArIGNzc0NvbnN0YW50cy5PTF9DT05UUk9MICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcblxuICAgIC8vIGJ1dHRvblxuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX1BPUztcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG4gICAgLy8gbGV0IGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcblxuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXRcbiAgICB9KTtcblxuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnpvb21Qb3NpdGlvbiA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIlpvb21Qb3NpdGlvbiIsInByb3BzIiwic2NvcGUiLCJlbGVtZW50IiwiYnV0dG9uIiwibWFwQ29udHJvbGxlciIsInZpZXciLCJtYXAiLCJnZXRWaWV3IiwibWFwRGF0YSIsImRhdGEiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJ0b2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJmdW5jTG9jYXRpb24iLCJldnQiLCJwb3MiLCJnZW9sb2NhdGlvbiIsImdldFBvc2l0aW9uIiwic2V0Q2VudGVyIiwic2V0Wm9vbSIsInNldFZpZXciLCJvbmNlIiwiZ2V0VHJhY2tpbmciLCJkaXNwYXRjaEV2ZW50Iiwic2V0VHJhY2tpbmciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJPTF9aT09NX1BPUyIsIk9MX0NPTlRST0wiLCJPTF9VTlNFTEVDVEFCTEUiLCJ0aXRsZSIsIkNUUkxfWk9PTV9QT1MiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicGFzc2l2ZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJ6b29tUG9zaXRpb24iLCJhZGRDb250cm9sIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==