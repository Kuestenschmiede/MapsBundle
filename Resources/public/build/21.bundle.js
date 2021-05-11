(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./Resources/public/js/components/c4g-zoom-home.jsx":
/*!**********************************************************!*\
  !*** ./Resources/public/js/components/c4g-zoom-home.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ZoomHome = function (_Component) {
  _inherits(ZoomHome, _Component);

  function ZoomHome(props) {
    _classCallCheck(this, ZoomHome);

    var _this = _possibleConstructorReturn(this, (ZoomHome.__proto__ || Object.getPrototypeOf(ZoomHome)).call(this, props));

    var element = void 0,
        button = void 0;

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
      var geoLocation = void 0;
      if (mapData.geolocation) {
        geoLocation = new _ol.Geolocation({
          tracking: true,
          projection: view.getProjection()
        });

        geoLocation.on('change', function (evt) {
          view.setCenter(geoLocation.getPosition());
          if (mapData.geolocation_zoom) {
            view.setZoom(parseInt(mapData.geolocation_zoom, 10));
          }
          geoLocation.setTracking(false);
        });
      }

      mapController.map.setView(view);
    };

    // wrapper div
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OL_ZOOM_HOME + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
    // button
    button = document.createElement('button');
    button.title = langConstants.CTRL_ZOOM_HOME;
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, { useCapture: false, passive: true });
    button.addEventListener('touchstart', toggle, { useCapture: false, passive: true });

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    var control = new _control.Control({
      element: element,
      target: _this.props.target
    });

    mapController.mapsControls.controls.zoomHome = control;
    mapController.map.addControl(control);
    return _this;
  }

  _createClass(ZoomHome, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ZoomHome;
}(_react.Component);

exports.default = ZoomHome;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXpvb20taG9tZS5qc3giXSwibmFtZXMiOlsiWm9vbUhvbWUiLCJwcm9wcyIsImVsZW1lbnQiLCJidXR0b24iLCJtYXBDb250cm9sbGVyIiwidmlldyIsIm1hcCIsImdldFZpZXciLCJtYXBEYXRhIiwiZGF0YSIsImxhbmdDb25zdGFudHMiLCJ0b2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJjYWxjX2V4dGVudCIsImV4dGVudCIsInByb3h5IiwibGF5ZXJDb250cm9sbGVyIiwibWF4WCIsIkluZmluaXR5IiwicGFkZGluZyIsInBhcnNlSW50IiwibWluX2dhcCIsInJlYWxFeHRlbnQiLCJtaW5YIiwibWluWSIsIm1heFkiLCJmaXQiLCJtYXhab29tIiwiY2VudGVyIiwiem9vbSIsInNldENlbnRlciIsInBhcnNlRmxvYXQiLCJsb24iLCJsYXQiLCJzZXRab29tIiwic2V0Um90YXRpb24iLCJyb3RhdGlvbiIsImdlb0xvY2F0aW9uIiwiZ2VvbG9jYXRpb24iLCJHZW9sb2NhdGlvbiIsInRyYWNraW5nIiwicHJvamVjdGlvbiIsImdldFByb2plY3Rpb24iLCJvbiIsImV2dCIsImdldFBvc2l0aW9uIiwiZ2VvbG9jYXRpb25fem9vbSIsInNldFRyYWNraW5nIiwic2V0VmlldyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNzc0NvbnN0YW50cyIsIk9MX1pPT01fSE9NRSIsIk9MX0NPTlRST0wiLCJPTF9VTlNFTEVDVEFCTEUiLCJ0aXRsZSIsIkNUUkxfWk9PTV9IT01FIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInBhc3NpdmUiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiem9vbUhvbWUiLCJhZGRDb250cm9sIiwiQ29t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c291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge3RyYW5zZm9ybX0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7R2VvbG9jYXRpb259IGZyb20gXCJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICBidXR0b247XG5cbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IHZpZXcgPSBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgbGV0IG1hcERhdGEgPSBtYXBDb250cm9sbGVyLmRhdGE7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShtYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgbGV0IHRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBsb29zZSBmb2N1cywgb3RoZXJ3aXNlIGl0IGxvb2tzIG1lc3N5XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICAgIGlmIChtYXBEYXRhLmNhbGNfZXh0ZW50ID09PSBcIkxPQ0FUSU9OU1wiIHx8IG1hcERhdGEuY2FsY19leHRlbnQgPT09IFwiQ0VOVEVSTE9DU1wiKSB7XG4gICAgICAgIGxldCBleHRlbnQgPSBtYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5leHRlbnQ7XG4gICAgICAgIGlmIChleHRlbnQgJiYgIShleHRlbnQubWF4WCA9PT0gSW5maW5pdHkgfHwgZXh0ZW50Lm1heFggPT09IC1JbmZpbml0eSkpIHtcbiAgICAgICAgICBsZXQgdmlldyA9IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICAgICAgICBsZXQgcGFkZGluZyA9IFtcbiAgICAgICAgICAgIHBhcnNlSW50KG1hcERhdGEubWluX2dhcCwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWFwRGF0YS5taW5fZ2FwLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtYXBEYXRhLm1pbl9nYXAsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1hcERhdGEubWluX2dhcCwgMTApXG4gICAgICAgICAgXTtcbiAgICAgICAgICBsZXQgcmVhbEV4dGVudCA9IFtcbiAgICAgICAgICAgIGV4dGVudC5taW5YLFxuICAgICAgICAgICAgZXh0ZW50Lm1pblksXG4gICAgICAgICAgICBleHRlbnQubWF4WCxcbiAgICAgICAgICAgIGV4dGVudC5tYXhZXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGlmIChtYXBEYXRhLmNhbGNfZXh0ZW50ID09PSBcIkNFTlRFUkxPQ1NcIikge1xuICAgICAgICAgICAgLy8gc3Nzc1xuICAgICAgICAgICAgdmlldy5maXQocmVhbEV4dGVudCwge1xuICAgICAgICAgICAgICBtYXhab29tOm1hcERhdGEuY2VudGVyLnpvb21cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZpZXcuZml0KHJlYWxFeHRlbnQsIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmlldy5zZXRDZW50ZXIodHJhbnNmb3JtKFtwYXJzZUZsb2F0KG1hcERhdGEuY2VudGVyLmxvbiksIHBhcnNlRmxvYXQobWFwRGF0YS5jZW50ZXIubGF0KV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3JykpO1xuICAgICAgICB2aWV3LnNldFpvb20ocGFyc2VJbnQobWFwRGF0YS5jZW50ZXIuem9vbSwgMTApKTtcbiAgICAgICAgdmlldy5zZXRSb3RhdGlvbihwYXJzZUZsb2F0KG1hcERhdGEuY2VudGVyLnJvdGF0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIHVzZXJwb3NpdGlvblxuICAgICAgbGV0IGdlb0xvY2F0aW9uO1xuICAgICAgaWYgKG1hcERhdGEuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgZ2VvTG9jYXRpb24gPSBuZXcgR2VvbG9jYXRpb24oe1xuICAgICAgICAgIHRyYWNraW5nOiB0cnVlLFxuICAgICAgICAgIHByb2plY3Rpb246IHZpZXcuZ2V0UHJvamVjdGlvbigpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdlb0xvY2F0aW9uLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgdmlldy5zZXRDZW50ZXIoZ2VvTG9jYXRpb24uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgaWYgKG1hcERhdGEuZ2VvbG9jYXRpb25fem9vbSkge1xuICAgICAgICAgICAgdmlldy5zZXRab29tKHBhcnNlSW50KG1hcERhdGEuZ2VvbG9jYXRpb25fem9vbSwgMTApKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZ2VvTG9jYXRpb24uc2V0VHJhY2tpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbWFwQ29udHJvbGxlci5tYXAuc2V0Vmlldyh2aWV3KTtcbiAgICB9O1xuXG4gICAgLy8gd3JhcHBlciBkaXZcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuT0xfWk9PTV9IT01FKycgJytjc3NDb25zdGFudHMuT0xfQ09OVFJPTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgLy8gYnV0dG9uXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX1pPT01fSE9NRTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG5cbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuXG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuem9vbUhvbWUgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=