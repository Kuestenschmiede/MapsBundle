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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
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
var ZoomPosition = exports["default"] = /*#__PURE__*/function (_Component) {
  function ZoomPosition(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ZoomPosition);
    _this = _callSuper(this, ZoomPosition, [props]);
    var scope = _this;
    var element, button;
    var mapController = props.mapController;
    var view = mapController.map.getView();
    var mapData = mapController.data;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(mapData);
    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
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
    };

    // wrapper div
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OL_ZOOM_POS + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;

    // button
    button = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = langConstants.CTRL_ZOOM_POS;
      button.appendChild(span);
    } else {
      button.title = langConstants.CTRL_ZOOM_POS;
    }
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
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "zoomPosition";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.zoomPosition = control;
    return _this;
  }
  (0, _inherits2["default"])(ZoomPosition, _Component);
  return (0, _createClass2["default"])(ZoomPosition, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctem9vbS1wb3NpdGlvbl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLGdCQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBSCxtQkFBQTtBQUNBLElBQUFJLEdBQUEsR0FBQUosbUJBQUE7QUFBK0IsU0FBQUsseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFQLHdCQUFBTyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FB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QUFHLElBQUlDLGdCQUFPLENBQUM7TUFDeEI1QyxPQUFPLEVBQUVBLE9BQU87TUFDaEI2QyxNQUFNLEVBQUVoRCxLQUFBLENBQUtELEtBQUssQ0FBQ2lEO0lBQ3JCLENBQUMsQ0FBQztJQUNGLElBQUlDLEtBQUssR0FBRzVDLGFBQWEsQ0FBQzZDLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDLFVBQUFoRCxPQUFPO01BQUEsT0FBSUEsT0FBTyxDQUFDaUQsSUFBSSxLQUFLLGNBQWM7SUFBQSxFQUFDO0lBQzdGL0MsYUFBYSxDQUFDNkMsYUFBYSxDQUFDRCxLQUFLLENBQUMsQ0FBQ0gsT0FBTyxHQUFHQSxPQUFPO0lBQ3BEekMsYUFBYSxDQUFDZ0QsWUFBWSxDQUFDQyxRQUFRLENBQUNDLFlBQVksR0FBR1QsT0FBTztJQUFDLE9BQUE5QyxLQUFBO0VBQzdEO0VBQUMsSUFBQXdELFVBQUEsYUFBQTVELFlBQUEsRUFBQUUsVUFBQTtFQUFBLFdBQUEyRCxhQUFBLGFBQUE3RCxZQUFBO0lBQUE4RCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFDUCxPQUFPLElBQUk7SUFDYjtFQUFDO0FBQUEsRUFuRXVDQyxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy16b29tLXBvc2l0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7R2VvbG9jYXRpb259IGZyb20gXCJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tUG9zaXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZWxlbWVudCxcbiAgICAgIGJ1dHRvbjtcblxuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgdmlldyA9IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICBsZXQgbWFwRGF0YSA9IG1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKG1hcERhdGEpO1xuXG4gICAgbGV0IHRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBsb29zZSBmb2N1cywgb3RoZXJ3aXNlIGl0IGxvb2tzIG1lc3N5XG4gICAgICB0aGlzLmJsdXIoKTtcblxuICAgICAgbGV0IGZ1bmNMb2NhdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgbGV0IHBvcyA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZ2V0UG9zaXRpb24oKVxuICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgdmlldy5zZXRDZW50ZXIocG9zKTtcbiAgICAgICAgICB2aWV3LnNldFpvb20oMTgpO1xuICAgICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnNldFZpZXcodmlldyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24ub25jZSgnY2hhbmdlJywgZnVuY0xvY2F0aW9uKTtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFRyYWNraW5nKCkpIHtcbiAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5kaXNwYXRjaEV2ZW50KCdjaGFuZ2UnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLnNldFRyYWNraW5nKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PTF9aT09NX1BPUyArICcgJyArIGNzc0NvbnN0YW50cy5PTF9DT05UUk9MICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcblxuICAgIC8vIGJ1dHRvblxuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX1BPUztcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfWk9PTV9QT1M7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIC8vIHNldCBvbkNsaWNrIHRvIHRoZSB0b2dnbGUtZnVuY3Rpb25cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwiem9vbVBvc2l0aW9uXCIpO1xuICAgIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuem9vbVBvc2l0aW9uID0gY29udHJvbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jb250cm9sIiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdNYXBzSTE4biIsIl9vbCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiWm9vbVBvc2l0aW9uIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInNjb3BlIiwiZWxlbWVudCIsImJ1dHRvbiIsIm1hcENvbnRyb2xsZXIiLCJ2aWV3IiwibWFwIiwiZ2V0VmlldyIsIm1hcERhdGEiLCJkYXRhIiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwidG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiZnVuY0xvY2F0aW9uIiwiZXZ0IiwicG9zIiwiZ2VvbG9jYXRpb24iLCJnZXRQb3NpdGlvbiIsInNldENlbnRlciIsInNldFpvb20iLCJzZXRWaWV3Iiwib25jZSIsImdldFRyYWNraW5nIiwiZGlzcGF0Y2hFdmVudCIsInNldFRyYWNraW5nIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiT0xfWk9PTV9QT1MiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJDVFJMX1pPT01fUE9TIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicGFzc2l2ZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwiaW5kZXgiLCJhcnJDb21wb25lbnRzIiwiZmluZEluZGV4IiwibmFtZSIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiem9vbVBvc2l0aW9uIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=