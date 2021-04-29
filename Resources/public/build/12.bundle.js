(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./Resources/public/js/components/c4g-overviewmap.jsx":
/*!************************************************************!*\
  !*** ./Resources/public/js/components/c4g-overviewmap.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _c4gMapsConstant = __webpack_require__(/*! ../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _Group = __webpack_require__(/*! ol/layer/Group */ "./node_modules/ol/layer/Group.js");

var _Group2 = _interopRequireDefault(_Group);

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar */ "./Resources/public/js/components/c4g-titlebar.jsx");

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

var OverviewMap = function (_Component) {
  (0, _inherits3.default)(OverviewMap, _Component);

  function OverviewMap(props) {
    (0, _classCallCheck3.default)(this, OverviewMap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OverviewMap.__proto__ || (0, _getPrototypeOf2.default)(OverviewMap)).call(this, props));

    var element = void 0,
        trigger = void 0,
        triggerIcon = void 0;
    var scope = _this;

    _this.state = {
      open: !props.collapsed,
      layers: _this.props.layers
    };
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    _this.mapController = props.mapController;
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);

    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OVERVIEWMAP + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL;
    if (props.collapsed) {
      element.className += ' ' + _c4gMapsConstant.cssConstants.CLOSE;
    } else {
      element.className += ' ' + _c4gMapsConstant.cssConstants.OPEN;
    }
    // props.target.appendChild(element);

    trigger = document.createElement('button');
    trigger.title = _this.langConstants.CTRL_OVERVIEWMAP;
    element.appendChild(trigger);

    triggerIcon = document.createElement('span');
    triggerIcon.className = _c4gMapsConstant.cssConstants.ICON;
    trigger.appendChild(triggerIcon);

    jQuery(trigger).click(function () {
      if (!scope.state.open) {
        scope.open();
      } else {
        scope.close();
      }
    });

    _this.element = element;
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    _this.baseLayerIds = [];
    _this.mapController.mapsControls.controls.overviewMap = control;
    _this.mapController.map.addControl(control);
    return _this;
  }

  (0, _createClass3.default)(OverviewMap, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "overview-map-wrapper" },
        _react2.default.createElement(_c4gTitlebar.Titlebar, { wrapperClass: "c4g-overwiev-header", headerClass: "c4g-overview-headline",
          header: this.langConstants.OVERVIEWMAP, closeBtnClass: "c4g-titlebar-close", closeBtnCb: this.close, closeBtnTitle: this.langConstants.CLOSE }),
        _react2.default.createElement("div", { id: "overview-map-target", className: "c4g-overview-content" })
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "createOverviewMap",
    value: function createOverviewMap() {
      var ovmTarget = document.querySelector("#overview-map-target");
      this.ovm = new _control.OverviewMap({
        collapsed: this.props.collapsed || true,
        collapsible: false,
        rotateWithView: true,
        className: 'ol-overviewmap ol-custom-overviewmap',
        target: ovmTarget,
        layers: this.state.layers
      });
      this.ovm.setMap(this.props.mapController.map);
    }
  }, {
    key: "removeFromMap",
    value: function removeFromMap() {
      this.element.parentNode.removeChild(this.element);
    }
  }, {
    key: "getOverviewMap",
    value: function getOverviewMap() {
      return this.ovm;
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      if (jQuery(this.element).hasClass(_c4gMapsConstant.cssConstants.OPEN)) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({ open: true });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({ open: false });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (!this.state.open && prevState.open) {
        jQuery(this.element).addClass(_c4gMapsConstant.cssConstants.CLOSE).removeClass(_c4gMapsConstant.cssConstants.OPEN);
        jQuery(this.props.ovmTarget).addClass(_c4gMapsConstant.cssConstants.CLOSE).removeClass(_c4gMapsConstant.cssConstants.OPEN);
      } else if (this.state.open) {
        jQuery(this.element).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
        jQuery(this.props.ovmTarget).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
      }
      if (prevState.layers.length !== this.state.layers.length) {
        if (!this.ovm) {
          this.createOverviewMap();
        } else {
          var layerGroup = new _Group2.default({ layers: this.state.layers });
          this.ovm.getOverviewMap().setLayerGroup(layerGroup);
        }
      }
    }
  }, {
    key: "addLayer",
    value: function addLayer(layer, id) {
      if (!this.baseLayerIds.includes(id)) {
        this.baseLayerIds.push(id);
        var arrLayers = [].concat((0, _toConsumableArray3.default)(this.state.layers));
        arrLayers.push(layer);
        this.setState({ layers: arrLayers });
      }
    }
  }]);
  return OverviewMap;
}(_react.Component);

exports.default = OverviewMap;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJ2aWV3bWFwLmpzeCJdLCJuYW1lcyI6WyJPdmVydmlld01hcCIsInByb3BzIiwiZWxlbWVudCIsInRyaWdnZXIiLCJ0cmlnZ2VySWNvbiIsInNjb3BlIiwic3RhdGUiLCJvcGVuIiwiY29sbGFwc2VkIiwibGF5ZXJzIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiYmluZCIsImNsb3NlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiT1ZFUlZJRVdNQVAiLCJPTF9VTlNFTEVDVEFCTEUiLCJPTF9DT05UUk9MIiwiQ0xPU0UiLCJPUEVOIiwidGl0bGUiLCJDVFJMX09WRVJWSUVXTUFQIiwiYXBwZW5kQ2hpbGQiLCJJQ09OIiwialF1ZXJ5IiwiY2xpY2siLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImJhc2VMYXllcklkcyIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwib3ZlcnZpZXdNYXAiLCJtYXAiLCJhZGRDb250cm9sIiwib3ZtVGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsIm92bSIsIk92TWFwIiwiY29sbGFwc2libGUiLCJyb3RhdGVXaXRoVmlldyIsInNldE1hcCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImhhc0NsYXNzIiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibGVuZ3RoIiwiY3JlYXRlT3ZlcnZpZXdNYXAiLCJsYXllckdyb3VwIiwiTGF5ZXJHcm91cCIsImdldE92ZXJ2aWV3TWFwIiwic2V0TGF5ZXJHcm91cCIsImxheWVyIiwiaWQiLCJpbmNsdWRlcyIsInB1c2giLCJhcnJMYXllcnMiLCJDb21wb25lbnQiXSwibWFwcGluZ3Mi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QWMsRUFBQ3hDLFFBQVF5RCxTQUFULEVBQWQ7QUFDRDtBQUNGOzs7RUFwSXNDQyxnQjs7a0JBQXBCbkUsVyIsImZpbGUiOiIxMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbCwgT3ZlcnZpZXdNYXAgYXMgT3ZNYXB9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IExheWVyR3JvdXAgZnJvbSBcIm9sL2xheWVyL0dyb3VwXCI7XG5pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi9jNGctdGl0bGViYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICB0cmlnZ2VyLFxuICAgICAgdHJpZ2dlckljb247XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46ICFwcm9wcy5jb2xsYXBzZWQsXG4gICAgICBsYXllcnM6IHRoaXMucHJvcHMubGF5ZXJzXG4gICAgfTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PVkVSVklFV01BUCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTDtcbiAgICBpZiAocHJvcHMuY29sbGFwc2VkKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjc3NDb25zdGFudHMuQ0xPU0U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIH1cbiAgICAvLyBwcm9wcy50YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0cmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdHJpZ2dlci50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX09WRVJWSUVXTUFQO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodHJpZ2dlcik7XG5cbiAgICB0cmlnZ2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0cmlnZ2VySWNvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuSUNPTjtcbiAgICB0cmlnZ2VyLmFwcGVuZENoaWxkKHRyaWdnZXJJY29uKTtcblxuICAgIGpRdWVyeSh0cmlnZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXRcbiAgICB9KTtcbiAgICB0aGlzLmJhc2VMYXllcklkcyA9IFtdO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMub3ZlcnZpZXdNYXAgPSBjb250cm9sO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wib3ZlcnZpZXctbWFwLXdyYXBwZXJcIn0+XG4gICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1vdmVyd2lldi1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLW92ZXJ2aWV3LWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmxhbmdDb25zdGFudHMuT1ZFUlZJRVdNQVB9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICA8L1RpdGxlYmFyPlxuICAgICAgPGRpdiBpZD17XCJvdmVydmlldy1tYXAtdGFyZ2V0XCJ9IGNsYXNzTmFtZT17XCJjNGctb3ZlcnZpZXctY29udGVudFwifT5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICBjcmVhdGVPdmVydmlld01hcCgpIHtcbiAgICBsZXQgb3ZtVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVydmlldy1tYXAtdGFyZ2V0XCIpO1xuICAgIHRoaXMub3ZtID0gbmV3IE92TWFwKHtcbiAgICAgIGNvbGxhcHNlZDogdGhpcy5wcm9wcy5jb2xsYXBzZWQgfHwgdHJ1ZSxcbiAgICAgIGNvbGxhcHNpYmxlOiBmYWxzZSxcbiAgICAgIHJvdGF0ZVdpdGhWaWV3OiB0cnVlLFxuICAgICAgY2xhc3NOYW1lOiAnb2wtb3ZlcnZpZXdtYXAgb2wtY3VzdG9tLW92ZXJ2aWV3bWFwJyxcbiAgICAgIHRhcmdldDogb3ZtVGFyZ2V0LFxuICAgICAgbGF5ZXJzOiB0aGlzLnN0YXRlLmxheWVyc1xuICAgIH0pO1xuICAgIHRoaXMub3ZtLnNldE1hcCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwKTtcbiAgfVxuXG4gIHJlbW92ZUZyb21NYXAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGdldE92ZXJ2aWV3TWFwKCkge1xuICAgIHJldHVybiB0aGlzLm92bTtcbiAgfVxuXG4gIGlzT3BlbigpIHtcbiAgICBpZiAoalF1ZXJ5KHRoaXMuZWxlbWVudCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUub3BlbiAmJiBwcmV2U3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICBqUXVlcnkodGhpcy5wcm9wcy5vdm1UYXJnZXQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm92bVRhcmdldCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgfVxuICAgIGlmIChwcmV2U3RhdGUubGF5ZXJzLmxlbmd0aCAhPT0gdGhpcy5zdGF0ZS5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBpZiAoIXRoaXMub3ZtKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlT3ZlcnZpZXdNYXAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsYXllckdyb3VwID0gbmV3IExheWVyR3JvdXAoe2xheWVyczogdGhpcy5zdGF0ZS5sYXllcnN9KTtcbiAgICAgICAgdGhpcy5vdm0uZ2V0T3ZlcnZpZXdNYXAoKS5zZXRMYXllckdyb3VwKGxheWVyR3JvdXApO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgYWRkTGF5ZXIobGF5ZXIsIGlkKSB7XG4gICAgaWYgKCF0aGlzLmJhc2VMYXllcklkcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIHRoaXMuYmFzZUxheWVySWRzLnB1c2goaWQpO1xuICAgICAgbGV0IGFyckxheWVycyA9IFsuLi50aGlzLnN0YXRlLmxheWVyc107XG4gICAgICBhcnJMYXllcnMucHVzaChsYXllcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsYXllcnM6IGFyckxheWVyc30pXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==