(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWdyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsImVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJvcHRpb25zIiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiR1JBVElDVUxFIiwic3dpdGNoYWJsZSIsInRpcExhYmVsIiwiQ1RSTF9HUklEIiwibGFiZWwiLCJkaXNhYmxlTGFiZWwiLCJzaG93TGFiZWxzIiwidmlzaWJsZSIsInNjb3BlIiwib2JqR3JpZCIsIkdyYXRpY3VsZSIsImVuYWJsZSIsInNldFZpc2libGUiLCJqUXVlcnkiLCJhZGRDbGFzcyIsIkVOQUJMRUQiLCJkaXNhYmxlIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJnZXRWaXNpYmxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfQ09OVFJPTCIsInRpdGxlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInBhc3NpdmUiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcCIsImFkZExheWVyIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJncmF0aWN1bGUiLCJhZGRDb250cm9sIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OzsrZUFqQkE7Ozs7Ozs7Ozs7Ozs7SUFtQnFCQSxJOzs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFHakIsUUFBSUMsZ0JBQUo7QUFBQSxRQUNFQyxlQURGOztBQUdBLFFBQUlDLGdCQUFnQiw4QkFBWUgsTUFBTUksYUFBTixDQUFvQkMsSUFBaEMsQ0FBcEI7QUFDQSxRQUFJRCxnQkFBZ0JKLE1BQU1JLGFBQTFCOztBQUVBO0FBQ0EsUUFBSUUsVUFBVTtBQUNaQyxpQkFBV0MsOEJBQWFDLFNBRFo7QUFFWkMsa0JBQVksSUFGQTtBQUdaQyxnQkFBVVIsY0FBY1MsU0FIWjtBQUlaQyxhQUFPLEdBSks7QUFLWkMsb0JBQWMsSUFMRjtBQU1aQyxrQkFBWSxJQU5BO0FBT1pDLGVBQVM7QUFQRyxLQUFkO0FBU0EsUUFBTUMsYUFBTjtBQUNBLFFBQU1DLFVBQVUsSUFBSUMsYUFBSixDQUFjYixPQUFkLENBQWhCOztBQUVBO0FBQ0EsUUFBSWMsU0FBUyxTQUFUQSxNQUFTLEdBQVk7QUFDdkJGLGNBQVFHLFVBQVIsQ0FBbUIsSUFBbkI7QUFDQUMsYUFBT3JCLE9BQVAsRUFBZ0JzQixRQUFoQixDQUF5QmYsOEJBQWFnQixPQUF0QztBQUNELEtBSEQ7O0FBS0E7QUFDQSxRQUFJQyxVQUFVLFNBQVZBLE9BQVUsR0FBWTtBQUN4QlAsY0FBUUcsVUFBUixDQUFtQixLQUFuQjtBQUNBQyxhQUFPckIsT0FBUCxFQUFnQnlCLFdBQWhCLENBQTRCbEIsOEJBQWFnQixPQUF6QztBQUNELEtBSEQ7O0FBS0E7QUFDQSxRQUFJRyxTQUFTLFNBQVRBLE1BQVMsQ0FBVUMsS0FBVixFQUFpQjtBQUM1QkEsWUFBTUMsZUFBTjtBQUNBO0FBQ0EsV0FBS0MsSUFBTDtBQUNBLFVBQUlaLFFBQVFhLFVBQVIsRUFBSixFQUEwQjtBQUN4Qk47QUFDRCxPQUZELE1BRU87QUFDTEw7QUFDRDtBQUNGLEtBVEQ7O0FBV0E7QUFDQW5CLGNBQVUrQixTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQWhDLFlBQVFNLFNBQVIsR0FBb0JDLDhCQUFhQyxTQUFiLEdBQXlCLEdBQXpCLEdBQStCRCw4QkFBYTBCLGVBQTVDLEdBQThELEdBQTlELEdBQW9FMUIsOEJBQWEyQixVQUFyRztBQUNBO0FBQ0FqQyxhQUFTOEIsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFUO0FBQ0EvQixXQUFPa0MsS0FBUCxHQUFlakMsY0FBY1MsU0FBN0I7QUFDQVgsWUFBUW9DLFdBQVIsQ0FBb0JuQyxNQUFwQjs7QUFFQTtBQUNBQSxXQUFPb0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNYLE1BQWpDLEVBQXlDLEVBQUNZLFlBQVksS0FBYixFQUFvQkMsU0FBUyxJQUE3QixFQUF6QztBQUNBdEMsV0FBT29DLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDWCxNQUF0QyxFQUE4QyxFQUFDWSxZQUFZLEtBQWIsRUFBb0JDLFNBQVMsSUFBN0IsRUFBOUM7QUFDQTs7QUFFQSxRQUFJQyxVQUFVLElBQUlDLGdCQUFKLENBQVk7QUFDeEJ6QyxlQUFTQSxPQURlO0FBRXhCMEMsY0FBUSxNQUFLM0MsS0FBTCxDQUFXMkM7QUFGSyxLQUFaLENBQWQ7QUFJQTNDLFVBQU1JLGFBQU4sQ0FBb0J3QyxHQUFwQixDQUF3QkMsUUFBeEIsQ0FBaUMzQixPQUFqQztBQUNBZCxrQkFBYzBDLFlBQWQsQ0FBMkJDLFFBQTNCLENBQW9DQyxTQUFwQyxHQUFnRFAsT0FBaEQ7QUFDQXJDLGtCQUFjd0MsR0FBZCxDQUFrQkssVUFBbEIsQ0FBNkJSLE9BQTdCOztBQWpFaUI7QUFtRWxCOzs7OzZCQUVRO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUF6RStCUyxnQjs7a0JBQWJuRCxJIiwiZmlsZSI6IjcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0dyYXRpY3VsZX0gZnJvbSBcIm9sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICBidXR0b247XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBjbGFzc05hbWU6IGNzc0NvbnN0YW50cy5HUkFUSUNVTEUsXG4gICAgICBzd2l0Y2hhYmxlOiB0cnVlLFxuICAgICAgdGlwTGFiZWw6IGxhbmdDb25zdGFudHMuQ1RSTF9HUklELFxuICAgICAgbGFiZWw6ICcjJyxcbiAgICAgIGRpc2FibGVMYWJlbDogJ1tdJyxcbiAgICAgIHNob3dMYWJlbHM6IHRydWUsXG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH07XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG9iakdyaWQgPSBuZXcgR3JhdGljdWxlKG9wdGlvbnMpO1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gZW5hYmxlIHRoZSBncmlkXG4gICAgdmFyIGVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9iakdyaWQuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuRU5BQkxFRCk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGRpc2FibGUgdGhlIGdyaWRcbiAgICB2YXIgZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9iakdyaWQuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICBqUXVlcnkoZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkVOQUJMRUQpO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0byB0b2dnbGUgdGhlIGdyaWRcbiAgICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vIGxvb3NlIGZvY3VzLCBvdGhlcndpc2UgaXQgbG9va3MgbWVzc3lcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgaWYgKG9iakdyaWQuZ2V0VmlzaWJsZSgpKSB7XG4gICAgICAgIGRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuYWJsZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5HUkFUSUNVTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX0NPTlRST0w7XG4gICAgLy8gYnV0dG9uXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX0dSSUQ7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgLy8gc2V0IG9uQ2xpY2sgdG8gdGhlIHRvZ2dsZS1mdW5jdGlvblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuICAgIC8vIGxldCBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJy4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG5cbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0XG4gICAgfSk7XG4gICAgcHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIob2JqR3JpZCk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZ3JhdGljdWxlID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9