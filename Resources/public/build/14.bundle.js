(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _domToImageMore = __webpack_require__(/*! dom-to-image-more */ "./node_modules/dom-to-image-more/src/dom-to-image-more.js");

var _fileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
  (0, _inherits3.default)(Print, _Component);

  function Print(props) {
    (0, _classCallCheck3.default)(this, Print);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Print.__proto__ || (0, _getPrototypeOf2.default)(Print)).call(this, props));

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

  (0, _createClass3.default)(Print, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXByaW50LmpzeCJdLCJuYW1lcyI6WyJQcmludCIsInByb3BzIiwiZWxlbWVudCIsImJ1dHRvbiIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsIm1hcCIsIm1hcERhdGEiLCJleHBvcnRPcHRpb25zIiwiZmlsdGVyIiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsImJnY29sb3IiLCJ0b2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImdldFRhcmdldCIsInRhcmdldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0aGVuIiwiYmxvYiIsImNyZWF0ZUVsZW1lbnQiLCJjc3NDb25zdGFudHMiLCJQUklOVCIsIk9MX1VOU0VMRUNUQUJMRSIsInRpdGxlIiwiQ1RSTF9QUklOVCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsInByaW50IiwiYWRkQ29udHJvbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQWxCQTs7Ozs7Ozs7Ozs7OztJQW9CcUJBLEs7OztBQUVuQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNYQSxLQURXOztBQUdqQixRQUFJQyxnQkFBSjtBQUFBLFFBQ0VDLGVBREY7O0FBR0EsUUFBSUMsZ0JBQWdCLDhCQUFZSCxNQUFNSSxhQUFOLENBQW9CQyxJQUFoQyxDQUFwQjtBQUNBLFFBQUlDLE1BQU1OLE1BQU1JLGFBQU4sQ0FBb0JFLEdBQTlCO0FBQ0EsUUFBSUMsVUFBVVAsTUFBTUksYUFBTixDQUFvQkMsSUFBbEM7O0FBRUE7QUFDQTtBQUNBLFFBQUlHLGdCQUFnQjtBQUNsQkMsY0FBUSxnQkFBU1IsT0FBVCxFQUFrQjtBQUN4QixlQUFPQSxRQUFRUyxTQUFSLEdBQ0wsQ0FBRVQsUUFBUVMsU0FBUixDQUFrQkMsT0FBbEIsQ0FBMEIsWUFBMUIsTUFBNEMsQ0FBQyxDQUE5QyxJQUFvRDtBQUNuRFYsZ0JBQVFTLFNBQVIsQ0FBa0JDLE9BQWxCLENBQTBCLGtCQUExQixNQUFrRCxDQUFDLENBRHJELEtBQzJEO0FBQzFEVixnQkFBUVMsU0FBUixDQUFrQkMsT0FBbEIsQ0FBMEIsVUFBMUIsTUFBMEMsQ0FBQyxDQUh2QyxDQUcwQztBQUgxQyxVQUlILElBSko7QUFLRCxPQVBpQjtBQVFsQkMsZUFBUztBQVJTLEtBQXBCOztBQVdBLFFBQUlDLFNBQVMsU0FBVEEsTUFBUyxDQUFVQyxLQUFWLEVBQWlCO0FBQzVCQSxZQUFNQyxlQUFOO0FBQ0EsVUFBSVQsSUFBSVUsU0FBSixFQUFKLEVBQXFCO0FBQ25CLFlBQUlDLFNBQVNDLFNBQVNDLGNBQVQsQ0FBd0JiLElBQUlVLFNBQUosRUFBeEIsQ0FBYjtBQUNBLG9DQUFPQyxNQUFQLEVBQWVULGFBQWYsRUFDR1ksSUFESCxDQUNRLFVBQVNDLElBQVQsRUFBZTtBQUNuQixpQ0FBT0EsSUFBUCxFQUFhLFNBQWI7QUFDRCxTQUhIO0FBSUQ7QUFDRixLQVREOztBQVdBO0FBQ0FwQixjQUFVaUIsU0FBU0ksYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FyQixZQUFRUyxTQUFSLEdBQW9CYSw4QkFBYUMsS0FBYixHQUFxQixHQUFyQixHQUEyQkQsOEJBQWFFLGVBQXhDLEdBQTBELGtDQUE5RTs7QUFFQTtBQUNBdkIsYUFBU2dCLFNBQVNJLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVDtBQUNBcEIsV0FBT3dCLEtBQVAsR0FBZXZCLGNBQWN3QixVQUE3QjtBQUNBekIsV0FBT1EsU0FBUCxHQUFtQmEsOEJBQWFDLEtBQWhDO0FBQ0F2QixZQUFRMkIsV0FBUixDQUFvQjFCLE1BQXBCOztBQUVBO0FBQ0FBLFdBQU8yQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQ2hCLE1BQWpDLEVBQXlDLEVBQUNpQixZQUFZLEtBQWIsRUFBb0JDLFNBQVMsSUFBN0IsRUFBekM7QUFDQTdCLFdBQU8yQixnQkFBUCxDQUF3QixZQUF4QixFQUFzQ2hCLE1BQXRDLEVBQThDLEVBQUNpQixZQUFZLEtBQWIsRUFBb0JDLFNBQVMsSUFBN0IsRUFBOUM7O0FBRUE7O0FBRUEsUUFBSUMsVUFBVSxJQUFJQyxnQkFBSixDQUFZO0FBQ3hCaEMsZUFBU0EsT0FEZTtBQUV4QmdCLGNBQVEsTUFBS2pCLEtBQUwsQ0FBV2lCO0FBRkssS0FBWixDQUFkOztBQUtBLFFBQUliLGdCQUFnQkosTUFBTUksYUFBMUI7QUFDQUEsa0JBQWM4QixZQUFkLENBQTJCQyxRQUEzQixDQUFvQ0MsS0FBcEMsR0FBNENKLE9BQTVDO0FBQ0E1QixrQkFBY0UsR0FBZCxDQUFrQitCLFVBQWxCLENBQTZCTCxPQUE3QjtBQXpEaUI7QUEwRGxCOzs7OzZCQUVRO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7OztFQWhFZ0NNLGdCOztrQkFBZHZDLEsiLCJmaWxlIjoiMTQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge3RvQmxvYn0gZnJvbSBcImRvbS10by1pbWFnZS1tb3JlXCI7XG5pbXBvcnQge3NhdmVBc30gZnJvbSBcImZpbGUtc2F2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICBidXR0b247XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgbGV0IG1hcCA9IHByb3BzLm1hcENvbnRyb2xsZXIubWFwO1xuICAgIGxldCBtYXBEYXRhID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuXG4gICAgLy8gZXhwb3J0IG9wdGlvbnMgZm9yIGh0bWwtdG8taW1hZ2UuXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYnVia29vL2h0bWwtdG8taW1hZ2Ujb3B0aW9uc1xuICAgIGxldCBleHBvcnRPcHRpb25zID0ge1xuICAgICAgZmlsdGVyOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZSA/IChcbiAgICAgICAgICAoKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ29sLWNvbnRyb2wnKSA9PT0gLTEpIHx8IC8vcHJpbnQgbm8gY29udHJvbHMgKGJ1dHRvbnMpXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdvbC11bmNvbGxhcHNpYmxlJykgIT09IC0xKSAmJiAvL2V4Y2VwdGlvbiBhdHRyaWJ1dGlvbnMgaWYgYWx3YXlzIHRvIGJlIGRpc3BsYXllZFxuICAgICAgICAgIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdjNGctb3BlbicpID09PSAtMSkgLy9wcmludCBubyBzaWRlYm9hcmRzIChyaWdodCBwYW5lbHMpXG4gICAgICAgICkgOiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGJnY29sb3I6ICcjMDAwMDAwJ1xuICAgIH07XG5cbiAgICBsZXQgdG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChtYXAuZ2V0VGFyZ2V0KCkpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hcC5nZXRUYXJnZXQoKSk7XG4gICAgICAgIHRvQmxvYih0YXJnZXQsIGV4cG9ydE9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oYmxvYikge1xuICAgICAgICAgICAgc2F2ZUFzKGJsb2IsICdtYXAucG5nJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlBSSU5UICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArICcgYzRnLXBvcnRzaWRlLWNvbnRyb2wgb2wtY29udHJvbCc7XG5cbiAgICAvLyBidXR0b25cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfUFJJTlQ7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5QUklOVDtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG5cbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuXG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnByaW50ID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=