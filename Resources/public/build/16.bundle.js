(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _Group = __webpack_require__(/*! ol/layer/Group */ "./node_modules/ol/layer/Group.js");

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

var Titlebar = _react2.default.lazy(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx", 7));
});

var OverviewMap = function (_Component) {
  _inherits(OverviewMap, _Component);

  function OverviewMap(props) {
    _classCallCheck(this, OverviewMap);

    var _this = _possibleConstructorReturn(this, (OverviewMap.__proto__ || Object.getPrototypeOf(OverviewMap)).call(this, props));

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

  _createClass(OverviewMap, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "overview-map-wrapper" },
        _react2.default.createElement(
          _react.Suspense,
          { fallback: _react2.default.createElement(
              "div",
              null,
              "Loading..."
            ) },
          _react2.default.createElement(Titlebar, { wrapperClass: "c4g-overwiev-header", headerClass: "c4g-overview-headline",
            header: this.langConstants.OVERVIEWMAP, closeBtnClass: "c4g-titlebar-close", closeBtnCb: this.close, closeBtnTitle: this.langConstants.CLOSE })
        ),
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
        var arrLayers = [].concat(_toConsumableArray(this.state.layers));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJ2aWV3bWFwLmpzeCJdLCJuYW1lcyI6WyJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIk92ZXJ2aWV3TWFwIiwicHJvcHMiLCJlbGVtZW50IiwidHJpZ2dlciIsInRyaWdnZXJJY29uIiwic2NvcGUiLCJzdGF0ZSIsIm9wZW4iLCJjb2xsYXBzZWQiLCJsYXllcnMiLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJiaW5kIiwiY2xvc2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJPVkVSVklFV01BUCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX0NPTlRST0wiLCJDTE9TRSIsIk9QRU4iLCJ0aXRsZSIsIkNUUkxfT1ZFUlZJRVdNQVAiLCJhcHBlbmRDaGlsZCIsIklDT04iLCJqUXVlcnkiLCJjbGljayIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwiYmFzZUxheWVySWRzIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJvdmVydmlld01hcCIsIm1hcCIsImFkZENvbnRyb2wiLCJvdm1UYXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwib3ZtIiwiT3ZNYXAiLCJjb2xsYXBzaWJsZSIsInJvdGF0ZVdpdGhWaWV3Iiwic2V0TWFwIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaGFzQ2xhc3MiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJsZW5ndGgiLCJjcmVhdGVPdmVydmlld01hcCIsImxheWVyR3JvdXAiLCJMYXllckdyb3VwIiwiZ2V0T3ZlcnZpZXdNYXAiLCJzZXRMYXllckdyb3VwIiwibGF5ZXIiLCJpZCIsImluY2x1ZGVzIiwicHVzaCIsImFyckxheWVy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QUFLOUIsWUFBTCxDQUFrQmdDLElBQWxCLENBQXVCRixFQUF2QjtBQUNBLFlBQUlHLHlDQUFnQixLQUFLNUQsS0FBTCxDQUFXRyxNQUEzQixFQUFKO0FBQ0F5RCxrQkFBVUQsSUFBVixDQUFlSCxLQUFmO0FBQ0EsYUFBS2IsUUFBTCxDQUFjLEVBQUN4QyxRQUFReUQsU0FBVCxFQUFkO0FBQ0Q7QUFDRjs7OztFQXRJc0NDLGdCOztrQkFBcEJuRSxXIiwiZmlsZSI6IjE2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbCwgT3ZlcnZpZXdNYXAgYXMgT3ZNYXB9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IExheWVyR3JvdXAgZnJvbSBcIm9sL2xheWVyL0dyb3VwXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICB0cmlnZ2VyLFxuICAgICAgdHJpZ2dlckljb247XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46ICFwcm9wcy5jb2xsYXBzZWQsXG4gICAgICBsYXllcnM6IHRoaXMucHJvcHMubGF5ZXJzXG4gICAgfTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PVkVSVklFV01BUCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTDtcbiAgICBpZiAocHJvcHMuY29sbGFwc2VkKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjc3NDb25zdGFudHMuQ0xPU0U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIH1cbiAgICAvLyBwcm9wcy50YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0cmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdHJpZ2dlci50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX09WRVJWSUVXTUFQO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodHJpZ2dlcik7XG5cbiAgICB0cmlnZ2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0cmlnZ2VySWNvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuSUNPTjtcbiAgICB0cmlnZ2VyLmFwcGVuZENoaWxkKHRyaWdnZXJJY29uKTtcblxuICAgIGpRdWVyeSh0cmlnZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXRcbiAgICB9KTtcbiAgICB0aGlzLmJhc2VMYXllcklkcyA9IFtdO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMub3ZlcnZpZXdNYXAgPSBjb250cm9sO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wib3ZlcnZpZXctbWFwLXdyYXBwZXJcIn0+XG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLW92ZXJ3aWV2LWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctb3ZlcnZpZXctaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLk9WRVJWSUVXTUFQfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDxkaXYgaWQ9e1wib3ZlcnZpZXctbWFwLXRhcmdldFwifSBjbGFzc05hbWU9e1wiYzRnLW92ZXJ2aWV3LWNvbnRlbnRcIn0+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgY3JlYXRlT3ZlcnZpZXdNYXAoKSB7XG4gICAgbGV0IG92bVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcnZpZXctbWFwLXRhcmdldFwiKTtcbiAgICB0aGlzLm92bSA9IG5ldyBPdk1hcCh7XG4gICAgICBjb2xsYXBzZWQ6IHRoaXMucHJvcHMuY29sbGFwc2VkIHx8IHRydWUsXG4gICAgICBjb2xsYXBzaWJsZTogZmFsc2UsXG4gICAgICByb3RhdGVXaXRoVmlldzogdHJ1ZSxcbiAgICAgIGNsYXNzTmFtZTogJ29sLW92ZXJ2aWV3bWFwIG9sLWN1c3RvbS1vdmVydmlld21hcCcsXG4gICAgICB0YXJnZXQ6IG92bVRhcmdldCxcbiAgICAgIGxheWVyczogdGhpcy5zdGF0ZS5sYXllcnNcbiAgICB9KTtcbiAgICB0aGlzLm92bS5zZXRNYXAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcCk7XG4gIH1cblxuICByZW1vdmVGcm9tTWFwKCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBnZXRPdmVydmlld01hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vdm07XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgaWYgKGpRdWVyeSh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5PUEVOKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm9wZW4gJiYgcHJldlN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgalF1ZXJ5KHRoaXMucHJvcHMub3ZtVGFyZ2V0KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICBqUXVlcnkodGhpcy5wcm9wcy5vdm1UYXJnZXQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIH1cbiAgICBpZiAocHJldlN0YXRlLmxheWVycy5sZW5ndGggIT09IHRoaXMuc3RhdGUubGF5ZXJzLmxlbmd0aCkge1xuICAgICAgaWYgKCF0aGlzLm92bSkge1xuICAgICAgICB0aGlzLmNyZWF0ZU92ZXJ2aWV3TWFwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGF5ZXJHcm91cCA9IG5ldyBMYXllckdyb3VwKHtsYXllcnM6IHRoaXMuc3RhdGUubGF5ZXJzfSk7XG4gICAgICAgIHRoaXMub3ZtLmdldE92ZXJ2aWV3TWFwKCkuc2V0TGF5ZXJHcm91cChsYXllckdyb3VwKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGFkZExheWVyKGxheWVyLCBpZCkge1xuICAgIGlmICghdGhpcy5iYXNlTGF5ZXJJZHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICB0aGlzLmJhc2VMYXllcklkcy5wdXNoKGlkKTtcbiAgICAgIGxldCBhcnJMYXllcnMgPSBbLi4udGhpcy5zdGF0ZS5sYXllcnNdO1xuICAgICAgYXJyTGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bGF5ZXJzOiBhcnJMYXllcnN9KVxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=