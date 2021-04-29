(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./Resources/public/js/components/c4g-grid.jsx":
/*!*****************************************************!*\
  !*** ./Resources/public/js/components/c4g-grid.jsx ***!
  \*****************************************************/
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

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function (_Component) {
  (0, _inherits3.default)(Grid, _Component);

  function Grid(props) {
    (0, _classCallCheck3.default)(this, Grid);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).call(this, props));

    var element = void 0,
        button = void 0;

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
    button.title = langConstants.CTRL_GRID;
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, { useCapture: false, passive: true });
    button.addEventListener('touchstart', toggle, { useCapture: false, passive: true });
    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    var control = new _control.Control({
      element: element,
      target: _this.props.target
    });
    props.mapController.map.addLayer(objGrid);
    mapController.mapsControls.controls.graticule = control;
    mapController.map.addControl(control);

    return _this;
  }

  (0, _createClass3.default)(Grid, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Grid;
}(_react.Component); /*
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

exports.default = Grid;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWdyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsImVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJvcHRpb25zIiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiR1JBVElDVUxFIiwic3dpdGNoYWJsZSIsInRpcExhYmVsIiwiQ1RSTF9HUklEIiwibGFiZWwiLCJkaXNhYmxlTGFiZWwiLCJzaG93TGFiZWxzIiwidmlzaWJsZSIsInNjb3BlIiwib2JqR3JpZCIsIkdyYXRpY3VsZSIsImVuYWJsZSIsInNldFZpc2libGUiLCJqUXVlcnkiLCJhZGRDbGFzcyIsIkVOQUJMRUQiLCJkaXNhYmxlIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJnZXRWaXNpYmxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfQ09OVFJPTCIsInRpdGxlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInBhc3NpdmUiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcCIsImFkZExheWVyIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJncmF0aWN1bGUiLCJhZGRDb250cm9sIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0lBRXFCQSxJOzs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSUFDWEEsS0FEVzs7QUFHakIsUUFBSUMsZ0JBQUo7QUFBQSxRQUNFQyxlQURGOztBQUdBLFFBQUlDLGdCQUFnQiw4QkFBWUgsTUFBTUksYUFBTixDQUFvQkMsSUFBaEMsQ0FBcEI7QUFDQSxRQUFJRCxnQkFBZ0JKLE1BQU1JLGFBQTFCOztBQUVBO0FBQ0EsUUFBSUUsVUFBVTtBQUNaQyxpQkFBV0MsOEJBQWFDLFNBRFo7QUFFWkMsa0JBQVksSUFGQTtBQUdaQyxnQkFBVVIsY0FBY1MsU0FIWjtBQUlaQyxhQUFPLEdBSks7QUFLWkMsb0JBQWMsSUFMRjtBQU1aQyxrQkFBWSxJQU5BO0FBT1pDLGVBQVM7QUFQRyxLQUFkO0FBU0EsUUFBTUMsYUFBTjtBQUNBLFFBQU1DLFVBQVUsSUFBSUMsYUFBSixDQUFjYixPQUFkLENBQWhCOztBQUVBO0FBQ0EsUUFBSWMsU0FBUyxTQUFUQSxNQUFTLEdBQVk7QUFDdkJGLGNBQVFHLFVBQVIsQ0FBbUIsSUFBbkI7QUFDQUMsYUFBT3JCLE9BQVAsRUFBZ0JzQixRQUFoQixDQUF5QmYsOEJBQWFnQixPQUF0QztBQUNELEtBSEQ7O0FBS0E7QUFDQSxRQUFJQyxVQUFVLFNBQVZBLE9BQVUsR0FBWTtBQUN4QlAsY0FBUUcsVUFBUixDQUFtQixLQUFuQjtBQUNBQyxhQUFPckIsT0FBUCxFQUFnQnlCLFdBQWhCLENBQTRCbEIsOEJBQWFnQixPQUF6QztBQUNELEtBSEQ7O0FBS0E7QUFDQSxRQUFJRyxTQUFTLFNBQVRBLE1BQVMsQ0FBVUMsS0FBVixFQUFpQjtBQUM1QkEsWUFBTUMsZUFBTjtBQUNBO0FBQ0EsV0FBS0MsSUFBTDtBQUNBLFVBQUlaLFFBQVFhLFVBQVIsRUFBSixFQUEwQjtBQUN4Qk47QUFDRCxPQUZELE1BRU87QUFDTEw7QUFDRDtBQUNGLEtBVEQ7O0FBV0E7QUFDQW5CLGNBQVUrQixTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQWhDLFlBQVFNLFNBQVIsR0FBb0JDLDhCQUFhQyxTQUFiLEdBQXlCLEdBQXpCLEdBQStCRCw4QkFBYTBCLGVBQTVDLEdBQThELEdBQTlELEdBQW9FMUIsOEJBQWEyQixVQUFyRztBQUNBO0FBQ0FqQyxhQUFTOEIsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFUO0FBQ0EvQixXQUFPa0MsS0FBUCxHQUFlakMsY0FBY1MsU0FBN0I7QUFDQVgsWUFBUW9DLFdBQVIsQ0FBb0JuQyxNQUFwQjs7QUFFQTtBQUNBQSxXQUFPb0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNYLE1BQWpDLEVBQXlDLEVBQUNZLFlBQVksS0FBYixFQUFvQkMsU0FBUyxJQUE3QixFQUF6QztBQUNBdEMsV0FBT29DLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDWCxNQUF0QyxFQUE4QyxFQUFDWSxZQUFZLEtBQWIsRUFBb0JDLFNBQVMsSUFBN0IsRUFBOUM7QUFDQTs7QUFFQSxRQUFJQyxVQUFVLElBQUlDLGdCQUFKLENBQVk7QUFDeEJ6QyxlQUFTQSxPQURlO0FBRXhCMEMsY0FBUSxNQUFLM0MsS0FBTCxDQUFXMkM7QUFGSyxLQUFaLENBQWQ7QUFJQTNDLFVBQU1JLGFBQU4sQ0FBb0J3QyxHQUFwQixDQUF3QkMsUUFBeEIsQ0FBaUMzQixPQUFqQztBQUNBZCxrQkFBYzBDLFlBQWQsQ0FBMkJDLFFBQTNCLENBQW9DQyxTQUFwQyxHQUFnRFAsT0FBaEQ7QUFDQXJDLGtCQUFjd0MsR0FBZCxDQUFrQkssVUFBbEIsQ0FBNkJSLE9BQTdCOztBQWpFaUI7QUFtRWxCOzs7OzZCQUVRO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7OztFQXpFK0JTLGdCLEdBbkJsQzs7Ozs7Ozs7Ozs7OztrQkFtQnFCbkQsSSIsImZpbGUiOiIxMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7R3JhdGljdWxlfSBmcm9tIFwib2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgZWxlbWVudCxcbiAgICAgIGJ1dHRvbjtcblxuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLkdSQVRJQ1VMRSxcbiAgICAgIHN3aXRjaGFibGU6IHRydWUsXG4gICAgICB0aXBMYWJlbDogbGFuZ0NvbnN0YW50cy5DVFJMX0dSSUQsXG4gICAgICBsYWJlbDogJyMnLFxuICAgICAgZGlzYWJsZUxhYmVsOiAnW10nLFxuICAgICAgc2hvd0xhYmVsczogdHJ1ZSxcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3Qgb2JqR3JpZCA9IG5ldyBHcmF0aWN1bGUob3B0aW9ucyk7XG5cbiAgICAvLyBmdW5jdGlvbiB0byBlbmFibGUgdGhlIGdyaWRcbiAgICB2YXIgZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgb2JqR3JpZC5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5FTkFCTEVEKTtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gZGlzYWJsZSB0aGUgZ3JpZFxuICAgIHZhciBkaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgb2JqR3JpZC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuRU5BQkxFRCk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSB0aGUgZ3JpZFxuICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gbG9vc2UgZm9jdXMsIG90aGVyd2lzZSBpdCBsb29rcyBtZXNzeVxuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICBpZiAob2JqR3JpZC5nZXRWaXNpYmxlKCkpIHtcbiAgICAgICAgZGlzYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkdSQVRJQ1VMRSArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTDtcbiAgICAvLyBidXR0b25cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfR1JJRDtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG4gICAgLy8gbGV0IGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcblxuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXRcbiAgICB9KTtcbiAgICBwcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihvYmpHcmlkKTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ncmF0aWN1bGUgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=