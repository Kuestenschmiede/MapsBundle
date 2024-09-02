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
var Grid = exports["default"] = /*#__PURE__*/function (_Component) {
  function Grid(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Grid);
    _this = _callSuper(this, Grid, [props]);
    var element, button;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    var mapController = props.mapController;

    // default options
    var options = {
      className: _c4gMapsConstant.cssConstants.GRATICULE,
      switchable: true,
      tipLabel: langConstants.CTRL_GRID,
      label: '#',
      disableLabel: '[]',
      showLabels: true,
      visible: false
    };
    var scope = _this;
    var objGrid = new _ol.Graticule(options);
    // function to enable the grid
    var enable = function enable() {
      objGrid.setVisible(true);
      jQuery(element).addClass(_c4gMapsConstant.cssConstants.ENABLED);
    };

    // function to disable the grid
    var disable = function disable() {
      objGrid.setVisible(false);
      jQuery(element).removeClass(_c4gMapsConstant.cssConstants.ENABLED);
    };

    // function to toggle the grid
    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();
      if (objGrid.getVisible()) {
        disable();
      } else {
        enable();
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.GRATICULE + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL;
    // button
    button = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = langConstants.CTRL_GRID;
      button.appendChild(span);
    } else {
      button.title = langConstants.CTRL_GRID;
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
      target: props.target
    });
    props.mapController.map.addLayer(objGrid);
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "graticule";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.graticule = control;
    return _this;
  }
  (0, _inherits2["default"])(Grid, _Component);
  return (0, _createClass2["default"])(Grid, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ3JpZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLGdCQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBSCxtQkFBQTtBQUNBLElBQUFJLEdBQUEsR0FBQUosbUJBQUE7QUFBNkIsU0FBQUsseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFQLHdCQUFBTyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxD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SUMsZ0JBQU8sQ0FBQztNQUN4QjlDLE9BQU8sRUFBRUEsT0FBTztNQUNoQitDLE1BQU0sRUFBRWxELEtBQUssQ0FBQ2tEO0lBQ2hCLENBQUMsQ0FBQztJQUNGbEQsS0FBSyxDQUFDTyxhQUFhLENBQUM0QyxHQUFHLENBQUNDLFFBQVEsQ0FBQy9CLE9BQU8sQ0FBQztJQUN6QyxJQUFJZ0MsS0FBSyxHQUFHOUMsYUFBYSxDQUFDK0MsYUFBYSxDQUFDQyxTQUFTLENBQUMsVUFBQXBELE9BQU87TUFBQSxPQUFJQSxPQUFPLENBQUNxRCxJQUFJLEtBQUssV0FBVztJQUFBLEVBQUM7SUFDMUZqRCxhQUFhLENBQUMrQyxhQUFhLENBQUNELEtBQUssQ0FBQyxDQUFDTCxPQUFPLEdBQUdBLE9BQU87SUFDcER6QyxhQUFhLENBQUNrRCxZQUFZLENBQUNDLFFBQVEsQ0FBQ0MsU0FBUyxHQUFHWCxPQUFPO0lBQUMsT0FBQS9DLEtBQUE7RUFFMUQ7RUFBQyxJQUFBMkQsVUFBQSxhQUFBL0QsSUFBQSxFQUFBRSxVQUFBO0VBQUEsV0FBQThELGFBQUEsYUFBQWhFLElBQUE7SUFBQWlFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLE9BQU8sSUFBSTtJQUNiO0VBQUM7QUFBQSxFQWhGK0JDLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWdyaWQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtHcmF0aWN1bGV9IGZyb20gXCJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBlbGVtZW50LFxuICAgICAgYnV0dG9uO1xuXG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcblxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuR1JBVElDVUxFLFxuICAgICAgc3dpdGNoYWJsZTogdHJ1ZSxcbiAgICAgIHRpcExhYmVsOiBsYW5nQ29uc3RhbnRzLkNUUkxfR1JJRCxcbiAgICAgIGxhYmVsOiAnIycsXG4gICAgICBkaXNhYmxlTGFiZWw6ICdbXScsXG4gICAgICBzaG93TGFiZWxzOiB0cnVlLFxuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9O1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBvYmpHcmlkID0gbmV3IEdyYXRpY3VsZShvcHRpb25zKTtcbiAgICAvLyBmdW5jdGlvbiB0byBlbmFibGUgdGhlIGdyaWRcbiAgICB2YXIgZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgb2JqR3JpZC5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5FTkFCTEVEKTtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gZGlzYWJsZSB0aGUgZ3JpZFxuICAgIHZhciBkaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgb2JqR3JpZC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuRU5BQkxFRCk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSB0aGUgZ3JpZFxuICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gbG9vc2UgZm9jdXMsIG90aGVyd2lzZSBpdCBsb29rcyBtZXNzeVxuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICBpZiAob2JqR3JpZC5nZXRWaXNpYmxlKCkpIHtcbiAgICAgICAgZGlzYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkdSQVRJQ1VMRSArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTDtcbiAgICAvLyBidXR0b25cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSBsYW5nQ29uc3RhbnRzLkNUUkxfR1JJRDtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfR1JJRDtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgLy8gc2V0IG9uQ2xpY2sgdG8gdGhlIHRvZ2dsZS1mdW5jdGlvblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuICAgIC8vIGxldCBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJy4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG5cbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldFxuICAgIH0pO1xuICAgIHByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKG9iakdyaWQpO1xuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwiZ3JhdGljdWxlXCIpO1xuICAgIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZ3JhdGljdWxlID0gY29udHJvbDtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jb250cm9sIiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdNYXBzSTE4biIsIl9vbCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiR3JpZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJlbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJvcHRpb25zIiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiR1JBVElDVUxFIiwic3dpdGNoYWJsZSIsInRpcExhYmVsIiwiQ1RSTF9HUklEIiwibGFiZWwiLCJkaXNhYmxlTGFiZWwiLCJzaG93TGFiZWxzIiwidmlzaWJsZSIsInNjb3BlIiwib2JqR3JpZCIsIkdyYXRpY3VsZSIsImVuYWJsZSIsInNldFZpc2libGUiLCJqUXVlcnkiLCJhZGRDbGFzcyIsIkVOQUJMRUQiLCJkaXNhYmxlIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJnZXRWaXNpYmxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfQ09OVFJPTCIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicGFzc2l2ZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwIiwiYWRkTGF5ZXIiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJuYW1lIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJncmF0aWN1bGUiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==