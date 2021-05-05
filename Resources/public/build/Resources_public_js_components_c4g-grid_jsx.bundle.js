(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-grid_jsx"],{

/***/ "./Resources/public/js/components/c4g-grid.jsx":
/*!*****************************************************!*\
  !*** ./Resources/public/js/components/c4g-grid.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Grid = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Grid, _Component);

  var _super = _createSuper(Grid);

  function Grid(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Grid);
    _this = _super.call(this, props);
    var element, button;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    var mapController = props.mapController; // default options

    var options = {
      className: _c4gMapsConstant.cssConstants.GRATICULE,
      switchable: true,
      tipLabel: langConstants.CTRL_GRID,
      label: '#',
      disableLabel: '[]',
      showLabels: true,
      visible: false
    };
    var scope = (0, _assertThisInitialized2["default"])(_this);
    var objGrid = new _ol.Graticule(options); // function to enable the grid

    var enable = function enable() {
      objGrid.setVisible(true);
      jQuery(element).addClass(_c4gMapsConstant.cssConstants.ENABLED);
    }; // function to disable the grid


    var disable = function disable() {
      objGrid.setVisible(false);
      jQuery(element).removeClass(_c4gMapsConstant.cssConstants.ENABLED);
    }; // function to toggle the grid


    var toggle = function toggle(event) {
      event.stopPropagation(); // loose focus, otherwise it looks messy

      this.blur();

      if (objGrid.getVisible()) {
        disable();
      } else {
        enable();
      }
    }; // wrapper div


    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.GRATICULE + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL; // button

    button = document.createElement('button');
    button.title = langConstants.CTRL_GRID;
    element.appendChild(button); // set onClick to the toggle-function

    button.addEventListener('click', toggle, {
      useCapture: false,
      passive: true
    });
    button.addEventListener('touchstart', toggle, {
      useCapture: false,
      passive: true
    }); // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    var control = new _control.Control({
      element: element,
      target: _this.props.target
    });
    props.mapController.map.addLayer(objGrid);
    mapController.mapsControls.controls.graticule = control;
    mapController.map.addControl(control);
    return _this;
  }

  (0, _createClass2["default"])(Grid, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1ncmlkLmpzeCJdLCJuYW1lcyI6WyJHcmlkIiwicHJvcHMiLCJlbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwib3B0aW9ucyIsImNsYXNzTmFtZSIsImNzc0NvbnN0YW50cyIsIkdSQVRJQ1VMRSIsInN3aXRjaGFibGUiLCJ0aXBMYWJlbCIsIkNUUkxfR1JJRCIsImxhYmVsIiwiZGlzYWJsZUxhYmVsIiwic2hvd0xhYmVscyIsInZpc2libGUiLCJzY29wZSIsIm9iakdyaWQiLCJHcmF0aWN1bGUiLCJlbmFibGUiLCJzZXRWaXNpYmxlIiwialF1ZXJ5IiwiYWRkQ2xhc3MiLCJFTkFCTEVEIiwiZGlzYWJsZSIsInJlbW92ZUNsYXNzIiwidG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiZ2V0VmlzaWJsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX0NPTlRST0wiLCJ0aXRsZSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXAiLCJhZGRMYXllciIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiZ3JhdGljdWxlIiwiYWRkQ29udHJvbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFFBQUlDLE9BQUosRUFDRUMsTUFERjtBQUdBLFFBQUlDLGFBQWEsR0FBRyw4QkFB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OztFQXpFK0JTLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ3JpZF9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0dyYXRpY3VsZX0gZnJvbSBcIm9sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICBidXR0b247XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBjbGFzc05hbWU6IGNzc0NvbnN0YW50cy5HUkFUSUNVTEUsXG4gICAgICBzd2l0Y2hhYmxlOiB0cnVlLFxuICAgICAgdGlwTGFiZWw6IGxhbmdDb25zdGFudHMuQ1RSTF9HUklELFxuICAgICAgbGFiZWw6ICcjJyxcbiAgICAgIGRpc2FibGVMYWJlbDogJ1tdJyxcbiAgICAgIHNob3dMYWJlbHM6IHRydWUsXG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH07XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG9iakdyaWQgPSBuZXcgR3JhdGljdWxlKG9wdGlvbnMpO1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gZW5hYmxlIHRoZSBncmlkXG4gICAgdmFyIGVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9iakdyaWQuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuRU5BQkxFRCk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGRpc2FibGUgdGhlIGdyaWRcbiAgICB2YXIgZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9iakdyaWQuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICBqUXVlcnkoZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkVOQUJMRUQpO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0byB0b2dnbGUgdGhlIGdyaWRcbiAgICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vIGxvb3NlIGZvY3VzLCBvdGhlcndpc2UgaXQgbG9va3MgbWVzc3lcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgaWYgKG9iakdyaWQuZ2V0VmlzaWJsZSgpKSB7XG4gICAgICAgIGRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuYWJsZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB3cmFwcGVyIGRpdlxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5HUkFUSUNVTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX0NPTlRST0w7XG4gICAgLy8gYnV0dG9uXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX0dSSUQ7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgLy8gc2V0IG9uQ2xpY2sgdG8gdGhlIHRvZ2dsZS1mdW5jdGlvblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b2dnbGUsIHt1c2VDYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZX0pO1xuICAgIC8vIGxldCBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJy4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG5cbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0XG4gICAgfSk7XG4gICAgcHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIob2JqR3JpZCk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZ3JhdGljdWxlID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9