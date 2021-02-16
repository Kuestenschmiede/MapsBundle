(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./Resources/public/js/components/c4g-zoom-position.jsx":
/*!**************************************************************!*\
  !*** ./Resources/public/js/components/c4g-zoom-position.jsx ***!
  \**************************************************************/
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

var ZoomPosition = function (_Component) {
  _inherits(ZoomPosition, _Component);

  function ZoomPosition(props) {
    _classCallCheck(this, ZoomPosition);

    var _this = _possibleConstructorReturn(this, (ZoomPosition.__proto__ || Object.getPrototypeOf(ZoomPosition)).call(this, props));

    var element = void 0,
        button = void 0;

    var mapController = props.mapController;
    var view = mapController.map.getView();
    var mapData = mapController.data;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(mapData);

    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();

      var geoLocation = new _ol.Geolocation({
        tracking: true,
        projection: view.getProjection()
      });

      geoLocation.on('change', function (evt) {
        view.setCenter(geoLocation.getPosition());
        // if (mapData.geolocation_zoom) {
        //    view.setZoom(mapData.geolocation_zoom);
        // } else {
        view.setZoom(18);
        //}
        geoLocation.setTracking(false);
        mapController.map.setView(view);
      });
    };

    // wrapper div
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OL_ZOOM_POS + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;

    // button
    button = document.createElement('button');
    button.title = langConstants.CTRL_ZOOM_POS;
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, { useCapture: false, passive: true });
    button.addEventListener('touchstart', toggle, { useCapture: false, passive: true });
    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    var control = new _control.Control({
      element: element,
      target: _this.props.target
    });

    mapController.mapsControls.controls.zoomPosition = control;
    mapController.map.addControl(control);
    return _this;
  }

  _createClass(ZoomPosition, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXpvb20tcG9zaXRpb24uanN4Il0sIm5hbWVzIjpbIlpvb21Qb3NpdGlvbiIsInByb3BzIiwiZWxlbWVudCIsImJ1dHRvbiIsIm1hcENvbnRyb2xsZXIiLCJ2aWV3IiwibWFwIiwiZ2V0VmlldyIsIm1hcERhdGEiLCJkYXRhIiwibGFuZ0NvbnN0YW50cyIsInRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYmx1ciIsImdlb0xvY2F0aW9uIiwiR2VvbG9jYXRpb24iLCJ0cmFja2luZyIsInByb2plY3Rpb24iLCJnZXRQcm9qZWN0aW9uIiwib24iLCJldnQiLCJzZXRDZW50ZXIiLCJnZXRQb3NpdGlvbiIsInNldFpvb20iLCJzZXRUcmFja2luZyIsInNldFZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJPTF9aT09NX1BPUyIsIk9MX0NPTlRST0wiLCJPTF9VTlNFTEVDVEFCTEUiLCJ0aXRsZSIsIkNUUkxfWk9PTV9QT1MiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicGFzc2l2ZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJ6b29tUG9zaXRpb24iLCJhZGRDb250cm9sIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OzsrZUFqQkE7Ozs7Ozs7Ozs7Ozs7SUFtQnFCQSxZOzs7QUFFbkIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFHakIsUUFBSUMsZ0JBQUo7QUFBQSxRQUNFQyxlQURGOztBQUdBLFFBQUlDLGdCQUFnQkgsTUFBTUcsYUFBMUI7QUFDQSxRQUFJQyxPQUFPRCxjQUFjRSxHQUFkLENBQWtCQyxPQUFsQixFQUFYO0FBQ0EsUUFBSUMsVUFBVUosY0FBY0ssSUFBNUI7QUFDQSxRQUFJQyxnQkFBZ0IsOEJBQVlGLE9BQVosQ0FBcEI7O0FBRUEsUUFBSUcsU0FBUyxTQUFUQSxNQUFTLENBQVVDLEtBQVYsRUFBaUI7QUFDNUJBLFlBQU1DLGVBQU47QUFDQTtBQUNBLFdBQUtDLElBQUw7O0FBRUEsVUFBSUMsY0FBYyxJQUFJQyxlQUFKLENBQWdCO0FBQ2hDQyxrQkFBVSxJQURzQjtBQUVoQ0Msb0JBQVliLEtBQUtjLGFBQUw7QUFGb0IsT0FBaEIsQ0FBbEI7O0FBS0FKLGtCQUFZSyxFQUFaLENBQWUsUUFBZixFQUF5QixVQUFVQyxHQUFWLEVBQWU7QUFDdENoQixhQUFLaUIsU0FBTCxDQUFlUCxZQUFZUSxXQUFaLEVBQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQWxCLGFBQUttQixPQUFMLENBQWEsRUFBYjtBQUNBO0FBQ0FULG9CQUFZVSxXQUFaLENBQXdCLEtBQXhCO0FBQ0FyQixzQkFBY0UsR0FBZCxDQUFrQm9CLE9BQWxCLENBQTBCckIsSUFBMUI7QUFDRCxPQVREO0FBVUQsS0FwQkQ7O0FBc0JBO0FBQ0FILGNBQVV5QixTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQTFCLFlBQVEyQixTQUFSLEdBQW9CQyw4QkFBYUMsV0FBYixHQUEyQixHQUEzQixHQUFpQ0QsOEJBQWFFLFVBQTlDLEdBQTJELEdBQTNELEdBQWlFRiw4QkFBYUcsZUFBbEc7O0FBRUE7QUFDQTlCLGFBQVN3QixTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDQXpCLFdBQU8rQixLQUFQLEdBQWV4QixjQUFjeUIsYUFBN0I7QUFDQWpDLFlBQVFrQyxXQUFSLENBQW9CakMsTUFBcEI7O0FBRUE7QUFDQUEsV0FBT2tDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDMUIsTUFBakMsRUFBeUMsRUFBQzJCLFlBQVksS0FBYixFQUFvQkMsU0FBUyxJQUE3QixFQUF6QztBQUNBcEMsV0FBT2tDLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDMUIsTUFBdEMsRUFBOEMsRUFBQzJCLFlBQVksS0FBYixFQUFvQkMsU0FBUyxJQUE3QixFQUE5QztBQUNBOztBQUVBLFFBQUlDLFVBQVUsSUFBSUMsZ0JBQUosQ0FBWTtBQUN4QnZDLGVBQVNBLE9BRGU7QUFFeEJ3QyxjQUFRLE1BQUt6QyxLQUFMLENBQVd5QztBQUZLLEtBQVosQ0FBZDs7QUFLQXRDLGtCQUFjdUMsWUFBZCxDQUEyQkMsUUFBM0IsQ0FBb0NDLFlBQXBDLEdBQW1ETCxPQUFuRDtBQUNBcEMsa0JBQWNFLEdBQWQsQ0FBa0J3QyxVQUFsQixDQUE2Qk4sT0FBN0I7QUFyRGlCO0FBc0RsQjs7Ozs2QkFFUTtBQUNQLGFBQU8sSUFBUDtBQUNEOzs7O0VBNUR1Q08sZ0I7O2tCQUFyQi9DLFkiLCJmaWxlIjoiMTUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tIFwib2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbVBvc2l0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBlbGVtZW50LFxuICAgICAgYnV0dG9uO1xuXG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCB2aWV3ID0gbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgIGxldCBtYXBEYXRhID0gbWFwQ29udHJvbGxlci5kYXRhO1xuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UobWFwRGF0YSk7XG5cbiAgICBsZXQgdG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vIGxvb3NlIGZvY3VzLCBvdGhlcndpc2UgaXQgbG9va3MgbWVzc3lcbiAgICAgIHRoaXMuYmx1cigpO1xuXG4gICAgICBsZXQgZ2VvTG9jYXRpb24gPSBuZXcgR2VvbG9jYXRpb24oe1xuICAgICAgICB0cmFja2luZzogdHJ1ZSxcbiAgICAgICAgcHJvamVjdGlvbjogdmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgIH0pO1xuXG4gICAgICBnZW9Mb2NhdGlvbi5vbignY2hhbmdlJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2aWV3LnNldENlbnRlcihnZW9Mb2NhdGlvbi5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgLy8gaWYgKG1hcERhdGEuZ2VvbG9jYXRpb25fem9vbSkge1xuICAgICAgICAvLyAgICB2aWV3LnNldFpvb20obWFwRGF0YS5nZW9sb2NhdGlvbl96b29tKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgdmlldy5zZXRab29tKDE4KTtcbiAgICAgICAgLy99XG4gICAgICAgIGdlb0xvY2F0aW9uLnNldFRyYWNraW5nKGZhbHNlKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuc2V0Vmlldyh2aWV3KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PTF9aT09NX1BPUyArICcgJyArIGNzc0NvbnN0YW50cy5PTF9DT05UUk9MICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcblxuICAgIC8vIGJ1dHRvblxuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX1BPUztcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG4gICAgLy8gbGV0IGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcblxuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXRcbiAgICB9KTtcblxuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnpvb21Qb3NpdGlvbiA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==