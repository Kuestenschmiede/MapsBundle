"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-zoom-home_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-zoom-home.jsx"
/*!**************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-zoom-home.jsx ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var ZoomHome = exports["default"] = /*#__PURE__*/function (_Component) {
  function ZoomHome(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ZoomHome);
    _this = _callSuper(this, ZoomHome, [props]);
    var element, button;
    var mapController = props.mapController;
    var view = mapController.map.getView();
    var mapData = mapController.data;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(mapController.data);
    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
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
      }

      // check userposition
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
    };

    // wrapper div
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OL_ZOOM_HOME + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
    // button
    button = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = langConstants.CTRL_ZOOM_HOME;
      button.appendChild(span);
    } else {
      button.title = langConstants.CTRL_ZOOM_HOME;
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
      return element.name === "zoomHome";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.zoomHome = control;
    return _this;
  }
  (0, _inherits2["default"])(ZoomHome, _Component);
  return (0, _createClass2["default"])(ZoomHome, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(_react.Component);

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctem9vbS1ob21lX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxRQUFBLEdBQUFELG1CQUFBO0FBQ0EsSUFBQUUsZ0JBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxZQUFBLEdBQUFILG1CQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixtQkFBQTtBQUNBLElBQUFLLEdBQUEsR0FBQUwsbUJBQUE7QUFBK0IsU0FBQUQsd0JBQUFPLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFULHVCQUFBLFlBQUFBLHdCQUFBTyxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFB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InNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy16b29tLWhvbWUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge3RyYW5zZm9ybX0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7R2VvbG9jYXRpb259IGZyb20gXCJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICBidXR0b247XG5cbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IHZpZXcgPSBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgbGV0IG1hcERhdGEgPSBtYXBDb250cm9sbGVyLmRhdGE7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShtYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgbGV0IHRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBsb29zZSBmb2N1cywgb3RoZXJ3aXNlIGl0IGxvb2tzIG1lc3N5XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICAgIGlmIChtYXBEYXRhLmNhbGNfZXh0ZW50ID09PSBcIkxPQ0FUSU9OU1wiIHx8IG1hcERhdGEuY2FsY19leHRlbnQgPT09IFwiQ0VOVEVSTE9DU1wiKSB7XG4gICAgICAgIGxldCBleHRlbnQgPSBtYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5leHRlbnQ7XG4gICAgICAgIGlmIChleHRlbnQgJiYgIShleHRlbnQubWF4WCA9PT0gSW5maW5pdHkgfHwgZXh0ZW50Lm1heFggPT09IC1JbmZpbml0eSkpIHtcbiAgICAgICAgICBsZXQgdmlldyA9IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICAgICAgICBsZXQgcGFkZGluZyA9IFtcbiAgICAgICAgICAgIHBhcnNlSW50KG1hcERhdGEubWluX2dhcCwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWFwRGF0YS5taW5fZ2FwLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtYXBEYXRhLm1pbl9nYXAsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1hcERhdGEubWluX2dhcCwgMTApXG4gICAgICAgICAgXTtcbiAgICAgICAgICBsZXQgcmVhbEV4dGVudCA9IFtcbiAgICAgICAgICAgIGV4dGVudC5taW5YLFxuICAgICAgICAgICAgZXh0ZW50Lm1pblksXG4gICAgICAgICAgICBleHRlbnQubWF4WCxcbiAgICAgICAgICAgIGV4dGVudC5tYXhZXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGlmIChtYXBEYXRhLmNhbGNfZXh0ZW50ID09PSBcIkNFTlRFUkxPQ1NcIikge1xuICAgICAgICAgICAgLy8gc3Nzc1xuICAgICAgICAgICAgdmlldy5maXQocmVhbEV4dGVudCwge1xuICAgICAgICAgICAgICBtYXhab29tOm1hcERhdGEuY2VudGVyLnpvb21cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZpZXcuZml0KHJlYWxFeHRlbnQsIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmlldy5zZXRDZW50ZXIodHJhbnNmb3JtKFtwYXJzZUZsb2F0KG1hcERhdGEuY2VudGVyLmxvbiksIHBhcnNlRmxvYXQobWFwRGF0YS5jZW50ZXIubGF0KV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3JykpO1xuICAgICAgICB2aWV3LnNldFpvb20ocGFyc2VJbnQobWFwRGF0YS5jZW50ZXIuem9vbSwgMTApKTtcbiAgICAgICAgdmlldy5zZXRSb3RhdGlvbihwYXJzZUZsb2F0KG1hcERhdGEuY2VudGVyLnJvdGF0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIHVzZXJwb3NpdGlvblxuICAgICAgbGV0IGdlb0xvY2F0aW9uO1xuICAgICAgaWYgKG1hcERhdGEuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgbGV0IGZ1bmNMb2NhdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICB2aWV3LnNldENlbnRlcihzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgIGlmIChtYXBEYXRhLmdlb2xvY2F0aW9uX3pvb20pIHtcbiAgICAgICAgICAgIHZpZXcuc2V0Wm9vbShwYXJzZUludChtYXBEYXRhLmdlb2xvY2F0aW9uX3pvb20sIDEwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24ub25jZSgnY2hhbmdlJywgZnVuY0xvY2F0aW9uKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5nZXRUcmFja2luZygpKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmRpc3BhdGNoRXZlbnQoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5zZXRUcmFja2luZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXBDb250cm9sbGVyLm1hcC5zZXRWaWV3KHZpZXcpO1xuICAgIH07XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PTF9aT09NX0hPTUUrJyAnK2Nzc0NvbnN0YW50cy5PTF9DT05UUk9MICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAvLyBidXR0b25cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSBsYW5nQ29uc3RhbnRzLkNUUkxfWk9PTV9IT01FO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX0hPTUU7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIC8vIHNldCBvbkNsaWNrIHRvIHRoZSB0b2dnbGUtZnVuY3Rpb25cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcblxuICAgIC8vIGxldCBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJy4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG5cbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0XG4gICAgfSk7XG4gICAgbGV0IGluZGV4ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJ6b29tSG9tZVwiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnpvb21Ib21lID0gY29udHJvbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jb250cm9sIiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdNYXBzSTE4biIsIl9wcm9qIiwiX29sIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiWm9vbUhvbWUiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiZWxlbWVudCIsImJ1dHRvbiIsIm1hcENvbnRyb2xsZXIiLCJ2aWV3IiwibWFwIiwiZ2V0VmlldyIsIm1hcERhdGEiLCJkYXRhIiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwidG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiY2FsY19leHRlbnQiLCJleHRlbnQiLCJwcm94eSIsImxheWVyQ29udHJvbGxlciIsIm1heFgiLCJJbmZpbml0eSIsInBhZGRpbmciLCJwYXJzZUludCIsIm1pbl9nYXAiLCJyZWFsRXh0ZW50IiwibWluWCIsIm1pblkiLCJtYXhZIiwiZml0IiwibWF4Wm9vbSIsImNlbnRlciIsInpvb20iLCJzZXRDZW50ZXIiLCJ0cmFuc2Zvcm0iLCJwYXJzZUZsb2F0IiwibG9uIiwibGF0Iiwic2V0Wm9vbSIsInNldFJvdGF0aW9uIiwicm90YXRpb24iLCJnZW9Mb2NhdGlvbiIsImdlb2xvY2F0aW9uIiwiZnVuY0xvY2F0aW9uIiwiZXZ0Iiwic2NvcGUiLCJnZXRQb3NpdGlvbiIsImdlb2xvY2F0aW9uX3pvb20iLCJvbmNlIiwiZ2V0VHJhY2tpbmciLCJkaXNwYXRjaEV2ZW50Iiwic2V0VHJhY2tpbmciLCJzZXRWaWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiT0xfWk9PTV9IT01FIiwiT0xfQ09OVFJPTCIsIk9MX1VOU0VMRUNUQUJMRSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiQ1RSTF9aT09NX0hPTUUiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJuYW1lIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJ6b29tSG9tZSIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJDb21wb25lbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==