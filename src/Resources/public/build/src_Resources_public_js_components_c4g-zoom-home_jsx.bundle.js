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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctem9vbS1ob21lX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxRQUFBLEdBQUFELG1CQUFBO0FBQ0EsSUFBQUUsZ0JBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxZQUFBLEdBQUFILG1CQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixtQkFBQTtBQUNBLElBQUFLLEdBQUEsR0FBQUwsbUJBQUE7QUFBK0IsU0FBQU0seUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFSLHdCQUFBUSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1B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LEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLE9BQU8sSUFBSTtJQUNiO0VBQUM7QUFBQSxFQXpHbUNDLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXpvb20taG9tZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge3RyYW5zZm9ybX0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7R2VvbG9jYXRpb259IGZyb20gXCJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICBidXR0b247XG5cbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IHZpZXcgPSBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgbGV0IG1hcERhdGEgPSBtYXBDb250cm9sbGVyLmRhdGE7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShtYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgbGV0IHRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBsb29zZSBmb2N1cywgb3RoZXJ3aXNlIGl0IGxvb2tzIG1lc3N5XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICAgIGlmIChtYXBEYXRhLmNhbGNfZXh0ZW50ID09PSBcIkxPQ0FUSU9OU1wiIHx8IG1hcERhdGEuY2FsY19leHRlbnQgPT09IFwiQ0VOVEVSTE9DU1wiKSB7XG4gICAgICAgIGxldCBleHRlbnQgPSBtYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5leHRlbnQ7XG4gICAgICAgIGlmIChleHRlbnQgJiYgIShleHRlbnQubWF4WCA9PT0gSW5maW5pdHkgfHwgZXh0ZW50Lm1heFggPT09IC1JbmZpbml0eSkpIHtcbiAgICAgICAgICBsZXQgdmlldyA9IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICAgICAgICBsZXQgcGFkZGluZyA9IFtcbiAgICAgICAgICAgIHBhcnNlSW50KG1hcERhdGEubWluX2dhcCwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWFwRGF0YS5taW5fZ2FwLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtYXBEYXRhLm1pbl9nYXAsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1hcERhdGEubWluX2dhcCwgMTApXG4gICAgICAgICAgXTtcbiAgICAgICAgICBsZXQgcmVhbEV4dGVudCA9IFtcbiAgICAgICAgICAgIGV4dGVudC5taW5YLFxuICAgICAgICAgICAgZXh0ZW50Lm1pblksXG4gICAgICAgICAgICBleHRlbnQubWF4WCxcbiAgICAgICAgICAgIGV4dGVudC5tYXhZXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGlmIChtYXBEYXRhLmNhbGNfZXh0ZW50ID09PSBcIkNFTlRFUkxPQ1NcIikge1xuICAgICAgICAgICAgLy8gc3Nzc1xuICAgICAgICAgICAgdmlldy5maXQocmVhbEV4dGVudCwge1xuICAgICAgICAgICAgICBtYXhab29tOm1hcERhdGEuY2VudGVyLnpvb21cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZpZXcuZml0KHJlYWxFeHRlbnQsIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmlldy5zZXRDZW50ZXIodHJhbnNmb3JtKFtwYXJzZUZsb2F0KG1hcERhdGEuY2VudGVyLmxvbiksIHBhcnNlRmxvYXQobWFwRGF0YS5jZW50ZXIubGF0KV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3JykpO1xuICAgICAgICB2aWV3LnNldFpvb20ocGFyc2VJbnQobWFwRGF0YS5jZW50ZXIuem9vbSwgMTApKTtcbiAgICAgICAgdmlldy5zZXRSb3RhdGlvbihwYXJzZUZsb2F0KG1hcERhdGEuY2VudGVyLnJvdGF0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIHVzZXJwb3NpdGlvblxuICAgICAgbGV0IGdlb0xvY2F0aW9uO1xuICAgICAgaWYgKG1hcERhdGEuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgbGV0IGZ1bmNMb2NhdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICB2aWV3LnNldENlbnRlcihzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgIGlmIChtYXBEYXRhLmdlb2xvY2F0aW9uX3pvb20pIHtcbiAgICAgICAgICAgIHZpZXcuc2V0Wm9vbShwYXJzZUludChtYXBEYXRhLmdlb2xvY2F0aW9uX3pvb20sIDEwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24ub25jZSgnY2hhbmdlJywgZnVuY0xvY2F0aW9uKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5nZXRUcmFja2luZygpKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmRpc3BhdGNoRXZlbnQoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5zZXRUcmFja2luZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXBDb250cm9sbGVyLm1hcC5zZXRWaWV3KHZpZXcpO1xuICAgIH07XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PTF9aT09NX0hPTUUrJyAnK2Nzc0NvbnN0YW50cy5PTF9DT05UUk9MICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAvLyBidXR0b25cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSBsYW5nQ29uc3RhbnRzLkNUUkxfWk9PTV9IT01FO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX0hPTUU7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIC8vIHNldCBvbkNsaWNrIHRvIHRoZSB0b2dnbGUtZnVuY3Rpb25cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcblxuICAgIC8vIGxldCBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJy4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG5cbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0XG4gICAgfSk7XG4gICAgbGV0IGluZGV4ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJ6b29tSG9tZVwiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnpvb21Ib21lID0gY29udHJvbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jb250cm9sIiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdNYXBzSTE4biIsIl9wcm9qIiwiX29sIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJab29tSG9tZSIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJlbGVtZW50IiwiYnV0dG9uIiwibWFwQ29udHJvbGxlciIsInZpZXciLCJtYXAiLCJnZXRWaWV3IiwibWFwRGF0YSIsImRhdGEiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJ0b2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJjYWxjX2V4dGVudCIsImV4dGVudCIsInByb3h5IiwibGF5ZXJDb250cm9sbGVyIiwibWF4WCIsIkluZmluaXR5IiwicGFkZGluZyIsInBhcnNlSW50IiwibWluX2dhcCIsInJlYWxFeHRlbnQiLCJtaW5YIiwibWluWSIsIm1heFkiLCJmaXQiLCJtYXhab29tIiwiY2VudGVyIiwiem9vbSIsInNldENlbnRlciIsInRyYW5zZm9ybSIsInBhcnNlRmxvYXQiLCJsb24iLCJsYXQiLCJzZXRab29tIiwic2V0Um90YXRpb24iLCJyb3RhdGlvbiIsImdlb0xvY2F0aW9uIiwiZ2VvbG9jYXRpb24iLCJmdW5jTG9jYXRpb24iLCJldnQiLCJzY29wZSIsImdldFBvc2l0aW9uIiwiZ2VvbG9jYXRpb25fem9vbSIsIm9uY2UiLCJnZXRUcmFja2luZyIsImRpc3BhdGNoRXZlbnQiLCJzZXRUcmFja2luZyIsInNldFZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJPTF9aT09NX0hPTUUiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJDVFJMX1pPT01fSE9NRSIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJhZGRFdmVudExpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInBhc3NpdmUiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsInpvb21Ib21lIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=