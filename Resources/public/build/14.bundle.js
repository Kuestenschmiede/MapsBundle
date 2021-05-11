(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

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

  _createClass(Grid, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Grid;
}(_react.Component);

exports.default = Grid;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWdyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsImVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJvcHRpb25zIiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiR1JBVElDVUxFIiwic3dpdGNoYWJsZSIsInRpcExhYmVsIiwiQ1RSTF9HUklEIiwibGFiZWwiLCJkaXNhYmxlTGFiZWwiLCJzaG93TGFiZWxzIiwidmlzaWJsZSIsInNjb3BlIiwib2JqR3JpZCIsIkdyYXRpY3VsZSIsImVuYWJsZSIsInNldFZpc2libGUiLCJqUXVlcnkiLCJhZGRDbGFzcyIsIkVOQUJMRUQiLCJkaXNhYmxlIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJnZXRWaXNpYmxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfQ09OVFJPTCIsInRpdGxlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInBhc3NpdmUiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcCIsImFkZExheWVyIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJncmF0aWN1bGUiLCJhZGRDb250cm9sIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OzsrZUFqQkE7Ozs7Ozs7Ozs7Ozs7SUFtQnFCQSxJOzs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFHakIsUUFBSUMsZ0JBQUo7QUFBQSxRQUNFQyxlQURGOztBQUdBLFFBQUlDLGdCQUFnQiw4QkFBWUgsTUFBTUksYUFBTixDQUFvQkMsSUFBaEMsQ0FBcEI7QUFDQSxRQUFJRCxnQkFBZ0JKLE1BQU1JLGFBQTFCOztBQUVBO0FBQ0EsUUFBSUUsVUFBVTtBQUNaQyxpQkFBV0MsOEJBQWFDLFNBRFo7QUFFWkMsa0JBQVksSUFGQTtBQUdaQyxnQkFBVVIsY0FBY1MsU0FIWjtBQUlaQyxhQUFPLEdBSks7QUFLWkMsb0JBQWMsSUFMRjtBQU1aQyxrQkFBWSxJQU5BO0FBT1pDLGVBQVM7QUFQRyxLQUFkO0FBU0EsUUFBTUMsYUFBTjtBQUNBLFFBQU1DLFVBQVUsSUFBSUMsYUFBSixDQUFjYixPQUFkLENBQWhCOztBQUVBO0FBQ0EsUUFBSWMsU0FBUyxTQUFUQSxNQUFTLEdBQVk7QUFDdkJGLGNBQVFHLFVBQVIsQ0FBbUIsSUFBbkI7QUFDQUMsYUFBT3JCLE9BQVAsRUFBZ0JzQixRQUFoQixDQUF5QmYsOEJBQWFnQixPQUF0QztBQUNELEtBSEQ7O0FBS0E7QUFDQSxRQUFJQyxVQUFVLFNBQVZBLE9BQVUsR0FBWTtBQUN4QlAsY0FBUUcsVUFBUixDQUFtQixLQUFuQjtBQUNBQyxhQUFPckIsT0FBUCxFQUFnQnlCLFdBQWhCLENBQTRCbEIsOEJBQWFnQixPQUF6QztBQUNELEtBSEQ7O0FBS0E7QUFDQSxRQUFJRyxTQUFTLFNBQVRBLE1BQVMsQ0FBVUMsS0FBVixFQUFpQjtBQUM1QkEsWUFBTUMsZUFBTjtBQUNBO0FBQ0EsV0FBS0MsSUFBTDtBQUNBLFVBQUlaLFFBQVFhLFVBQVIsRUFBSixFQUEwQjtBQUN4Qk47QUFDRCxPQUZELE1BRU87QUFDTEw7QUFDRDtBQUNGLEtBVEQ7O0FBV0E7QUFDQW5CLGNBQVUrQixTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQWhDLFlBQVFNLFNBQVIsR0FBb0JDLDhCQUFhQyxTQUFiLEdBQXlCLEdBQXpCLEdBQStCRCw4QkFBYTBCLGVBQTVDLEdBQThELEdBQTlELEdBQW9FMUIsOEJBQWEyQixVQUFyRztBQUNBO0FBQ0FqQyxhQUFTOEIsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFUO0FBQ0EvQixXQUFPa0MsS0FBUCxHQUFlakMsY0FBY1MsU0FBN0I7QUFDQVgsWUFBUW9DLFdBQVIsQ0FBb0JuQyxNQUFwQjs7QUFFQTtBQUNBQSxXQUFPb0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNYLE1BQWpDLEVBQXlDLEVBQUNZLFlBQVksS0FBYixFQUFvQkMsU0FBUyxJQUE3QixFQUF6QztBQUNBdEMsV0FBT29DLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDWCxNQUF0QyxFQUE4QyxFQUFDWSxZQUFZLEtBQWIsRUFBb0JDLFNBQVMsSUFBN0IsRUFBOUM7QUFDQTs7QUFFQSxRQUFJQyxVQUFVLElBQUlDLGdCQUFKLENBQVk7QUFDeEJ6QyxlQUFTQSxPQURlO0FBRXhCMEMsY0FBUSxNQUFLM0MsS0FBTCxDQUFXMkM7QUFGSyxLQUFaLENBQWQ7QUFJQTNDLFVBQU1JLGFBQU4sQ0FBb0J3QyxHQUFwQixDQUF3QkMsUUFBeEIsQ0FBaUMzQixPQUFqQztBQUNBZCxrQkFBYzBDLFlBQWQsQ0FBMkJDLFFBQTNCLENBQW9DQyxTQUFwQyxHQUFnRFAsT0FBaEQ7QUFDQXJDLGtCQUFjd0MsR0FBZCxDQUFrQkssVUFBbEIsQ0FBNkJSLE9BQTdCOztBQWpFaUI7QUFtRWxCOzs7OzZCQUVRO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUF6RStCUyxnQjs7a0JBQWJuRCxJIiwiZmlsZSI6IjE0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtHcmF0aWN1bGV9IGZyb20gXCJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBlbGVtZW50LFxuICAgICAgYnV0dG9uO1xuXG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcblxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuR1JBVElDVUxFLFxuICAgICAgc3dpdGNoYWJsZTogdHJ1ZSxcbiAgICAgIHRpcExhYmVsOiBsYW5nQ29uc3RhbnRzLkNUUkxfR1JJRCxcbiAgICAgIGxhYmVsOiAnIycsXG4gICAgICBkaXNhYmxlTGFiZWw6ICdbXScsXG4gICAgICBzaG93TGFiZWxzOiB0cnVlLFxuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9O1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBvYmpHcmlkID0gbmV3IEdyYXRpY3VsZShvcHRpb25zKTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGVuYWJsZSB0aGUgZ3JpZFxuICAgIHZhciBlbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvYmpHcmlkLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICBqUXVlcnkoZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkVOQUJMRUQpO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0byBkaXNhYmxlIHRoZSBncmlkXG4gICAgdmFyIGRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvYmpHcmlkLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5FTkFCTEVEKTtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gdG9nZ2xlIHRoZSBncmlkXG4gICAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBsb29zZSBmb2N1cywgb3RoZXJ3aXNlIGl0IGxvb2tzIG1lc3N5XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICAgIGlmIChvYmpHcmlkLmdldFZpc2libGUoKSkge1xuICAgICAgICBkaXNhYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmFibGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gd3JhcHBlciBkaXZcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuR1JBVElDVUxFICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArICcgJyArIGNzc0NvbnN0YW50cy5PTF9DT05UUk9MO1xuICAgIC8vIGJ1dHRvblxuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9HUklEO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIC8vIHNldCBvbkNsaWNrIHRvIHRoZSB0b2dnbGUtZnVuY3Rpb25cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuICAgIHByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKG9iakdyaWQpO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmdyYXRpY3VsZSA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==