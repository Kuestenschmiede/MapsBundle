"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-zoom_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-zoom.jsx":
/*!*********************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-zoom.jsx ***!
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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
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
var Zoom = exports["default"] = /*#__PURE__*/function (_Component) {
  function Zoom(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Zoom);
    _this = _callSuper(this, Zoom, [props]);

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);
    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    var control = new _control.Zoom({
      zoomInTipLabel: langConstants.CTRL_ZOOM_IN,
      zoomOutTipLabel: langConstants.CTRL_ZOOM_OUT,
      zoomInLabel: " ",
      zoomOutLabel: " ",
      target: _this.props.target
    });
    if (control && control.element && control.element.children) {
      if (control.element.children[0]) {
        var button = control.element.children[0];
        if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
          var span = document.createElement('span');
          button.title = "";
          span.innerText = langConstants.CTRL_ZOOM_IN;
          button.appendChild(span);
        } else {
          button.title = langConstants.CTRL_ZOOM_IN;
        }
      }
      if (control.element.children[1]) {
        var _button = control.element.children[1];
        if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
          var _span = document.createElement('span');
          _button.title = "";
          _span.innerText = langConstants.CTRL_ZOOM_OUT;
          _button.appendChild(_span);
        } else {
          _button.title = langConstants.CTRL_ZOOM_OUT;
        }
      }
    }
    var mapController = props.mapController;
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "zoom";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.zoom = control;
    return _this;
  }
  (0, _inherits2["default"])(Zoom, _Component);
  return (0, _createClass2["default"])(Zoom, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctem9vbV9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLGdCQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBSCxtQkFBQTtBQUE2QyxTQUFBSSx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQU4sd0JBQUFNLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsY0FBQVIsQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWUsR0FBQSxDQUFBbEIsQ0FBQSxFQUFBUSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBVyxXQUFBaEIsQ0FBQSxFQUFBaUIsQ0FBQSxFQUFBcEIsQ0FBQSxXQUFBb0IsQ0FBQSxPQUFBQyxnQkFBQSxhQUFBRCxDQUFBLE9BQUFFLDJCQUFBLGFBQUFuQixDQUFBLEVBQUFvQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQUwsQ0FBQSxFQUFBcEIsQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQWxCLENBQUEsRUFBQXVCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUF4QixDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXBCLENBQUEsSUFBQXlCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUF6QixDQUFBLGFBQUFvQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBcEIsQ0FBQSxVQVo3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQWNxQjRCLElBQUksR0FBQUMsa0JBQUEsMEJBQUFDLFVBQUE7RUFDdkIsU0FBQUYsS0FBWUcsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBTCxJQUFBO0lBQ2pCSSxLQUFBLEdBQUFoQixVQUFBLE9BQUFZLElBQUEsR0FBTUcsS0FBSzs7SUFFWDtJQUNBLElBQUlHLGFBQWEsR0FBRyxJQUFBQyx3QkFBVyxFQUFDSixLQUFLLENBQUNLLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDO0lBQ3pELElBQUlDLE9BQU8sR0FBRyxJQUFJQyxhQUFNLENBQUM7TUFDdkJDLGNBQWMsRUFBRU4sYUFBYSxDQUFDTyxZQUFZO01BQzFDQyxlQUFlLEVBQUVSLGFBQWEsQ0FBQ1MsYUFBYTtNQUM1Q0MsV0FBVyxFQUFFLEdBQUc7TUFDaEJDLFlBQVksRUFBRSxHQUFHO01BQ2pCQyxNQUFNLEVBQUVkLEtBQUEsQ0FBS0QsS0FBSyxDQUFDZTtJQUNyQixDQUFDLENBQUM7SUFDRixJQUFJUixPQUFPLElBQUlBLE9BQU8sQ0FBQ1MsT0FBTyxJQUFJVCxPQUFPLENBQUNTLE9BQU8sQ0FBQ0MsUUFBUSxFQUFFO01BQzFELElBQUlWLE9BQU8sQ0FBQ1MsT0FBTyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDL0IsSUFBSUMsTUFBTSxHQUFHWCxPQUFPLENBQUNTLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJakIsS0FBSyxDQUFDSyxhQUFhLENBQUNDLElBQUksQ0FBQ2EsU0FBUyxJQUFJbkIsS0FBSyxDQUFDSyxhQUFhLENBQUNDLElBQUksQ0FBQ2EsU0FBUyxDQUFDQyxhQUFhLEVBQUU7VUFDMUYsSUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7VUFDekNMLE1BQU0sQ0FBQ00sS0FBSyxHQUFHLEVBQUU7VUFDakJILElBQUksQ0FBQ0ksU0FBUyxHQUFHdEIsYUFBYSxDQUFDTyxZQUFZO1VBQzNDUSxNQUFNLENBQUNRLFdBQVcsQ0FBQ0wsSUFBSSxDQUFDO1FBQzFCLENBQUMsTUFDSTtVQUNISCxNQUFNLENBQUNNLEtBQUssR0FBR3JCLGFBQWEsQ0FBQ08sWUFBWTtRQUMzQztNQUNGO01BQ0EsSUFBSUgsT0FBTyxDQUFDUyxPQUFPLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMvQixJQUFJQyxPQUFNLEdBQUdYLE9BQU8sQ0FBQ1MsT0FBTyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUlqQixLQUFLLENBQUNLLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDYSxTQUFTLElBQUluQixLQUFLLENBQUNLLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDYSxTQUFTLENBQUNDLGFBQWEsRUFBRTtVQUMxRixJQUFJQyxLQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztVQUN6Q0wsT0FBTSxDQUFDTSxLQUFLLEdBQUcsRUFBRTtVQUNqQkgsS0FBSSxDQUFDSSxTQUFTLEdBQUd0QixhQUFhLENBQUNTLGFBQWE7VUFDNUNNLE9BQU0sQ0FBQ1EsV0FBVyxDQUFDTCxLQUFJLENBQUM7UUFDMUIsQ0FBQyxNQUNJO1VBQ0hILE9BQU0sQ0FBQ00sS0FBSyxHQUFHckIsYUFBYSxDQUFDUyxhQUFhO1FBQzVDO01BQ0Y7SUFDRjtJQUNBLElBQUlQLGFBQWEsR0FBR0wsS0FBSyxDQUFDSyxhQUFhO0lBQ3ZDLElBQUlzQixLQUFLLEdBQUd0QixhQUFhLENBQUN1QixhQUFhLENBQUNDLFNBQVMsQ0FBQyxVQUFBYixPQUFPO01BQUEsT0FBSUEsT0FBTyxDQUFDYyxJQUFJLEtBQUssTUFBTTtJQUFBLEVBQUM7SUFDckZ6QixhQUFhLENBQUN1QixhQUFhLENBQUNELEtBQUssQ0FBQyxDQUFDcEIsT0FBTyxHQUFHQSxPQUFPO0lBQ3BERixhQUFhLENBQUMwQixZQUFZLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHMUIsT0FBTztJQUFDLE9BQUFOLEtBQUE7RUFDckQ7RUFBQyxJQUFBaUMsVUFBQSxhQUFBckMsSUFBQSxFQUFBRSxVQUFBO0VBQUEsV0FBQW9DLGFBQUEsYUFBQXRDLElBQUE7SUFBQXVDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLE9BQU8sSUFBSTtJQUNiO0VBQUM7QUFBQSxFQS9DK0JDLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXpvb20uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Wm9vbSBhcyBPbFpvb219IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIGxldCBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJy4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGxldCBjb250cm9sID0gbmV3IE9sWm9vbSh7XG4gICAgICB6b29tSW5UaXBMYWJlbDogbGFuZ0NvbnN0YW50cy5DVFJMX1pPT01fSU4sXG4gICAgICB6b29tT3V0VGlwTGFiZWw6IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX09VVCxcbiAgICAgIHpvb21JbkxhYmVsOiBcIiBcIixcbiAgICAgIHpvb21PdXRMYWJlbDogXCIgXCIsXG4gICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0XG4gICAgfSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5lbGVtZW50ICYmIGNvbnRyb2wuZWxlbWVudC5jaGlsZHJlbikge1xuICAgICAgaWYgKGNvbnRyb2wuZWxlbWVudC5jaGlsZHJlblswXSkge1xuICAgICAgICBsZXQgYnV0dG9uID0gY29udHJvbC5lbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBidXR0b24udGl0bGUgPSBcIlwiO1xuICAgICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gbGFuZ0NvbnN0YW50cy5DVFJMX1pPT01fSU47XG4gICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX0lOO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY29udHJvbC5lbGVtZW50LmNoaWxkcmVuWzFdKSB7XG4gICAgICAgIGxldCBidXR0b24gPSBjb250cm9sLmVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIGJ1dHRvbi50aXRsZSA9IFwiXCI7XG4gICAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBsYW5nQ29uc3RhbnRzLkNUUkxfWk9PTV9PVVQ7XG4gICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX09VVDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGluZGV4ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJ6b29tXCIpO1xuICAgIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuem9vbSA9IGNvbnRyb2w7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29udHJvbCIsIl9jNGdNYXBzQ29uc3RhbnQiLCJfYzRnTWFwc0kxOG4iLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlpvb20iLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJjb250cm9sIiwiT2xab29tIiwiem9vbUluVGlwTGFiZWwiLCJDVFJMX1pPT01fSU4iLCJ6b29tT3V0VGlwTGFiZWwiLCJDVFJMX1pPT01fT1VUIiwiem9vbUluTGFiZWwiLCJ6b29tT3V0TGFiZWwiLCJ0YXJnZXQiLCJlbGVtZW50IiwiY2hpbGRyZW4iLCJidXR0b24iLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJuYW1lIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJ6b29tIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=