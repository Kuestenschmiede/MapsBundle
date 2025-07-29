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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ3JpZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLGdCQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBSCxtQkFBQTtBQUNBLElBQUFJLEdBQUEsR0FBQUosbUJBQUE7QUFBNkIsU0FBQUQsd0JBQUFNLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFSLHVCQUFBLFlBQUFBLHdCQUFBTSxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFBLENBQUFuQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FB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RCxLQUFLLENBQUNPLGFBQWEsQ0FBQzRDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDL0IsT0FBTyxDQUFDO0lBQ3pDLElBQUlnQyxLQUFLLEdBQUc5QyxhQUFhLENBQUMrQyxhQUFhLENBQUNDLFNBQVMsQ0FBQyxVQUFBcEQsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FBQ3FELElBQUksS0FBSyxXQUFXO0lBQUEsRUFBQztJQUMxRmpELGFBQWEsQ0FBQytDLGFBQWEsQ0FBQ0QsS0FBSyxDQUFDLENBQUNMLE9BQU8sR0FBR0EsT0FBTztJQUNwRHpDLGFBQWEsQ0FBQ2tELFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxTQUFTLEdBQUdYLE9BQU87SUFBQyxPQUFBL0MsS0FBQTtFQUUxRDtFQUFDLElBQUEyRCxVQUFBLGFBQUEvRCxJQUFBLEVBQUFFLFVBQUE7RUFBQSxXQUFBOEQsYUFBQSxhQUFBaEUsSUFBQTtJQUFBaUUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQ1AsT0FBTyxJQUFJO0lBQ2I7RUFBQztBQUFBLEVBaEYrQkMsZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1ncmlkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7R3JhdGljdWxlfSBmcm9tIFwib2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgZWxlbWVudCxcbiAgICAgIGJ1dHRvbjtcblxuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLkdSQVRJQ1VMRSxcbiAgICAgIHN3aXRjaGFibGU6IHRydWUsXG4gICAgICB0aXBMYWJlbDogbGFuZ0NvbnN0YW50cy5DVFJMX0dSSUQsXG4gICAgICBsYWJlbDogJyMnLFxuICAgICAgZGlzYWJsZUxhYmVsOiAnW10nLFxuICAgICAgc2hvd0xhYmVsczogdHJ1ZSxcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3Qgb2JqR3JpZCA9IG5ldyBHcmF0aWN1bGUob3B0aW9ucyk7XG4gICAgLy8gZnVuY3Rpb24gdG8gZW5hYmxlIHRoZSBncmlkXG4gICAgdmFyIGVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9iakdyaWQuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuRU5BQkxFRCk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGRpc2FibGUgdGhlIGdyaWRcbiAgICB2YXIgZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9iakdyaWQuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICBqUXVlcnkoZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkVOQUJMRUQpO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0byB0b2dnbGUgdGhlIGdyaWRcbiAgICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vIGxvb3NlIGZvY3VzLCBvdGhlcndpc2UgaXQgbG9va3MgbWVzc3lcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgaWYgKG9iakdyaWQuZ2V0VmlzaWJsZSgpKSB7XG4gICAgICAgIGRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuYWJsZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5HUkFUSUNVTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX0NPTlRST0w7XG4gICAgLy8gYnV0dG9uXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gbGFuZ0NvbnN0YW50cy5DVFJMX0dSSUQ7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX0dSSUQ7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIC8vIHNldCBvbkNsaWNrIHRvIHRoZSB0b2dnbGUtZnVuY3Rpb25cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXRcbiAgICB9KTtcbiAgICBwcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihvYmpHcmlkKTtcbiAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcImdyYXRpY3VsZVwiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmdyYXRpY3VsZSA9IGNvbnRyb2w7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29udHJvbCIsIl9jNGdNYXBzQ29uc3RhbnQiLCJfYzRnTWFwc0kxOG4iLCJfb2wiLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiaSIsImYiLCJfX3Byb3RvX18iLCJfdHlwZW9mIiwiaGFzIiwiZ2V0Iiwic2V0IiwiX3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJHcmlkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsIm9wdGlvbnMiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJHUkFUSUNVTEUiLCJzd2l0Y2hhYmxlIiwidGlwTGFiZWwiLCJDVFJMX0dSSUQiLCJsYWJlbCIsImRpc2FibGVMYWJlbCIsInNob3dMYWJlbHMiLCJ2aXNpYmxlIiwic2NvcGUiLCJvYmpHcmlkIiwiR3JhdGljdWxlIiwiZW5hYmxlIiwic2V0VmlzaWJsZSIsImpRdWVyeSIsImFkZENsYXNzIiwiRU5BQkxFRCIsImRpc2FibGUiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYmx1ciIsImdldFZpc2libGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPTF9VTlNFTEVDVEFCTEUiLCJPTF9DT05UUk9MIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXAiLCJhZGRMYXllciIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImdyYXRpY3VsZSIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9