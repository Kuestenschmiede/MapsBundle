(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./Resources/public/js/components/c4g-print.jsx":
/*!******************************************************!*\
  !*** ./Resources/public/js/components/c4g-print.jsx ***!
  \******************************************************/
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

var _domToImageMore = __webpack_require__(/*! dom-to-image-more */ "./node_modules/dom-to-image-more/src/dom-to-image-more.js");

var _fileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");

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

var Print = function (_Component) {
  _inherits(Print, _Component);

  function Print(props) {
    _classCallCheck(this, Print);

    var _this = _possibleConstructorReturn(this, (Print.__proto__ || Object.getPrototypeOf(Print)).call(this, props));

    var element = void 0,
        button = void 0;

    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    var map = props.mapController.map;
    var mapData = props.mapController.data;

    // export options for html-to-image.
    // See: https://github.com/bubkoo/html-to-image#options
    var exportOptions = {
      filter: function filter(element) {
        return element.className ? (element.className.indexOf('ol-control') === -1 || //print no controls (buttons)
        element.className.indexOf('ol-uncollapsible') !== -1) && //exception attributions if always to be displayed
        element.className.indexOf('c4g-open') === -1 //print no sideboards (right panels)
        : true;
      },
      bgcolor: '#000000'
    };

    var toggle = function toggle(event) {
      event.stopPropagation();
      if (map.getTarget()) {
        var target = document.getElementById(map.getTarget());
        (0, _domToImageMore.toBlob)(target, exportOptions).then(function (blob) {
          (0, _fileSaver.saveAs)(blob, 'map.png');
        });
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.PRINT + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' c4g-portside-control ol-control';

    // button
    button = document.createElement('button');
    button.title = langConstants.CTRL_PRINT;
    button.className = _c4gMapsConstant.cssConstants.PRINT;
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, { useCapture: false, passive: true });
    button.addEventListener('touchstart', toggle, { useCapture: false, passive: true });

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    var control = new _control.Control({
      element: element,
      target: _this.props.target
    });

    var mapController = props.mapController;
    mapController.mapsControls.controls.print = control;
    mapController.map.addControl(control);
    return _this;
  }

  _createClass(Print, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Print;
}(_react.Component);

exports.default = Print;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXByaW50LmpzeCJdLCJuYW1lcyI6WyJQcmludCIsInByb3BzIiwiZWxlbWVudCIsImJ1dHRvbiIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsIm1hcCIsIm1hcERhdGEiLCJleHBvcnRPcHRpb25zIiwiZmlsdGVyIiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsImJnY29sb3IiLCJ0b2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImdldFRhcmdldCIsInRhcmdldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0aGVuIiwiYmxvYiIsImNyZWF0ZUVsZW1lbnQiLCJjc3NDb25zdGFudHMiLCJQUklOVCIsIk9MX1VOU0VMRUNUQUJMRSIsInRpdGxlIiwiQ1RSTF9QUklOVCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsInByaW50IiwiYWRkQ29udHJvbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7K2VBbEJBOzs7Ozs7Ozs7Ozs7O0lBb0JxQkEsSzs7O0FBRW5CLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBR2pCLFFBQUlDLGdCQUFKO0FBQUEsUUFDRUMsZUFERjs7QUFHQSxRQUFJQyxnQkFBZ0IsOEJBQVlILE1BQU1JLGFBQU4sQ0FBb0JDLElBQWhDLENBQXBCO0FBQ0EsUUFBSUMsTUFBTU4sTUFBTUksYUFBTixDQUFvQkUsR0FBOUI7QUFDQSxRQUFJQyxVQUFVUCxNQUFNSSxhQUFOLENBQW9CQyxJQUFsQzs7QUFFQTtBQUNBO0FBQ0EsUUFBSUcsZ0JBQWdCO0FBQ2xCQyxjQUFRLGdCQUFTUixPQUFULEVBQWtCO0FBQ3hCLGVBQU9BLFFBQVFTLFNBQVIsR0FDTCxDQUFFVCxRQUFRUyxTQUFSLENBQWtCQyxPQUFsQixDQUEwQixZQUExQixNQUE0QyxDQUFDLENBQTlDLElBQW9EO0FBQ25EVixnQkFBUVMsU0FBUixDQUFrQkMsT0FBbEIsQ0FBMEIsa0JBQTFCLE1BQWtELENBQUMsQ0FEckQsS0FDMkQ7QUFDMURWLGdCQUFRUyxTQUFSLENBQWtCQyxPQUFsQixDQUEwQixVQUExQixNQUEwQyxDQUFDLENBSHZDLENBRzBDO0FBSDFDLFVBSUgsSUFKSjtBQUtELE9BUGlCO0FBUWxCQyxlQUFTO0FBUlMsS0FBcEI7O0FBV0EsUUFBSUMsU0FBUyxTQUFUQSxNQUFTLENBQVVDLEtBQVYsRUFBaUI7QUFDNUJBLFlBQU1DLGVBQU47QUFDQSxVQUFJVCxJQUFJVSxTQUFKLEVBQUosRUFBcUI7QUFDbkIsWUFBSUMsU0FBU0MsU0FBU0MsY0FBVCxDQUF3QmIsSUFBSVUsU0FBSixFQUF4QixDQUFiO0FBQ0Esb0NBQU9DLE1BQVAsRUFBZVQsYUFBZixFQUNHWSxJQURILENBQ1EsVUFBU0MsSUFBVCxFQUFlO0FBQ25CLGlDQUFPQSxJQUFQLEVBQWEsU0FBYjtBQUNELFNBSEg7QUFJRDtBQUNGLEtBVEQ7O0FBV0E7QUFDQXBCLGNBQVVpQixTQUFTSSxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQXJCLFlBQVFTLFNBQVIsR0FBb0JhLDhCQUFhQyxLQUFiLEdBQXFCLEdBQXJCLEdBQTJCRCw4QkFBYUUsZUFBeEMsR0FBMEQsa0NBQTlFOztBQUVBO0FBQ0F2QixhQUFTZ0IsU0FBU0ksYUFBVCxDQUF1QixRQUF2QixDQUFUO0FBQ0FwQixXQUFPd0IsS0FBUCxHQUFldkIsY0FBY3dCLFVBQTdCO0FBQ0F6QixXQUFPUSxTQUFQLEdBQW1CYSw4QkFBYUMsS0FBaEM7QUFDQXZCLFlBQVEyQixXQUFSLENBQW9CMUIsTUFBcEI7O0FBRUE7QUFDQUEsV0FBTzJCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDaEIsTUFBakMsRUFBeUMsRUFBQ2lCLFlBQVksS0FBYixFQUFvQkMsU0FBUyxJQUE3QixFQUF6QztBQUNBN0IsV0FBTzJCLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDaEIsTUFBdEMsRUFBOEMsRUFBQ2lCLFlBQVksS0FBYixFQUFvQkMsU0FBUyxJQUE3QixFQUE5Qzs7QUFFQTs7QUFFQSxRQUFJQyxVQUFVLElBQUlDLGdCQUFKLENBQVk7QUFDeEJoQyxlQUFTQSxPQURlO0FBRXhCZ0IsY0FBUSxNQUFLakIsS0FBTCxDQUFXaUI7QUFGSyxLQUFaLENBQWQ7O0FBS0EsUUFBSWIsZ0JBQWdCSixNQUFNSSxhQUExQjtBQUNBQSxrQkFBYzhCLFlBQWQsQ0FBMkJDLFFBQTNCLENBQW9DQyxLQUFwQyxHQUE0Q0osT0FBNUM7QUFDQTVCLGtCQUFjRSxHQUFkLENBQWtCK0IsVUFBbEIsQ0FBNkJMLE9BQTdCO0FBekRpQjtBQTBEbEI7Ozs7NkJBRVE7QUFDUCxhQUFPLElBQVA7QUFDRDs7OztFQWhFZ0NNLGdCOztrQkFBZHZDLEsiLCJmaWxlIjoiMTEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge3RvQmxvYn0gZnJvbSBcImRvbS10by1pbWFnZS1tb3JlXCI7XG5pbXBvcnQge3NhdmVBc30gZnJvbSBcImZpbGUtc2F2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICBidXR0b247XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgbGV0IG1hcCA9IHByb3BzLm1hcENvbnRyb2xsZXIubWFwO1xuICAgIGxldCBtYXBEYXRhID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuXG4gICAgLy8gZXhwb3J0IG9wdGlvbnMgZm9yIGh0bWwtdG8taW1hZ2UuXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYnVia29vL2h0bWwtdG8taW1hZ2Ujb3B0aW9uc1xuICAgIGxldCBleHBvcnRPcHRpb25zID0ge1xuICAgICAgZmlsdGVyOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZSA/IChcbiAgICAgICAgICAoKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ29sLWNvbnRyb2wnKSA9PT0gLTEpIHx8IC8vcHJpbnQgbm8gY29udHJvbHMgKGJ1dHRvbnMpXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdvbC11bmNvbGxhcHNpYmxlJykgIT09IC0xKSAmJiAvL2V4Y2VwdGlvbiBhdHRyaWJ1dGlvbnMgaWYgYWx3YXlzIHRvIGJlIGRpc3BsYXllZFxuICAgICAgICAgIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdjNGctb3BlbicpID09PSAtMSkgLy9wcmludCBubyBzaWRlYm9hcmRzIChyaWdodCBwYW5lbHMpXG4gICAgICAgICkgOiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGJnY29sb3I6ICcjMDAwMDAwJ1xuICAgIH07XG5cbiAgICBsZXQgdG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChtYXAuZ2V0VGFyZ2V0KCkpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hcC5nZXRUYXJnZXQoKSk7XG4gICAgICAgIHRvQmxvYih0YXJnZXQsIGV4cG9ydE9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oYmxvYikge1xuICAgICAgICAgICAgc2F2ZUFzKGJsb2IsICdtYXAucG5nJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlBSSU5UICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArICcgYzRnLXBvcnRzaWRlLWNvbnRyb2wgb2wtY29udHJvbCc7XG5cbiAgICAvLyBidXR0b25cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfUFJJTlQ7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5QUklOVDtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG5cbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuXG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnByaW50ID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=