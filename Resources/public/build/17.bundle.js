(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./Resources/public/js/components/c4g-permalink.jsx":
/*!**********************************************************!*\
  !*** ./Resources/public/js/components/c4g-permalink.jsx ***!
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

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

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

var Titlebar = _react2.default.lazy(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx", 7));
});

var Permalink = function (_Component) {
  _inherits(Permalink, _Component);

  function Permalink(props) {
    _classCallCheck(this, Permalink);

    var _this = _possibleConstructorReturn(this, (Permalink.__proto__ || Object.getPrototypeOf(Permalink)).call(this, props));

    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    button.title = langConstants.CTRL_PERMALINK;
    element.className = "c4g-permalink-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    if (props.external) {
      element.className += " c4g-external";
    }
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    var mapController = props.mapController;
    var control = new _control.Control({ element: element, target: props.target });
    mapController.mapsControls.controls.horizontalPanel = control;
    mapController.map.addControl(control);
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(_this.props.mapController.data);

    _this.state = {
      open: false,
      link: ""
    };
    return _this;
  }

  _createClass(Permalink, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "c4g-permalink-wrapper" },
        _react2.default.createElement(
          _react.Suspense,
          { fallback: _react2.default.createElement(
              "div",
              null,
              "Loading..."
            ) },
          _react2.default.createElement(Titlebar, { wrapperClass: "c4g-permalink-header", headerClass: "c4g-permalink-header-headline",
            header: "Permalink", closeBtnClass: "c4g-permalink-close", closeBtnCb: this.close, closeBtnTitle: this.langConstants.CLOSE })
        ),
        _react2.default.createElement(
          "div",
          { className: "c4g-permalink-content" },
          _react2.default.createElement("textarea", { cols: "50", rows: "2", id: "permalink-text", value: this.state.link, readOnly: true }),
          _react2.default.createElement("button", { className: _c4gMapsConstant.cssConstants.COPY + ' ' + _c4gMapsConstant.cssConstants.ICON, title: this.langConstants.COPY_TO_CLIPBOARD,
            "data-clipboard-target": "#permalink-text" }),
          _react2.default.createElement("button", { className: _c4gMapsConstant.cssConstants.REFRESH + ' ' + _c4gMapsConstant.cssConstants.ICON, title: this.langConstants.REFRESH,
            onMouseUp: function onMouseUp() {
              return _this2.generateLinkFromCurrentState({ target: _this2.textfield });
            } })
        )
      );
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.open !== this.state.open || prevState.link !== this.state.link) {
        this.generateLinkFromCurrentState({ target: this.textfield });
      }
      if (prevState.open && !this.state.open) {
        jQuery(".c4g-permalink-container").removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
      }
      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
      if (this.state.open) {
        jQuery(".c4g-permalink-container").addClass(_c4gMapsConstant.cssConstants.OPEN).removeClass(_c4gMapsConstant.cssConstants.CLOSE);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.textField = document.querySelector("#permalink-text");
      var copyButton = document.querySelector("." + _c4gMapsConstant.cssConstants.COPY + "." + _c4gMapsConstant.cssConstants.ICON);
      try {
        new ClipboardJS(copyButton);
      } catch (error) {
        // clipboard script is not loaded
        console.warn('Permalink is currently not supported in backend mode..');
      }
    }
  }, {
    key: "open",
    value: function open() {
      jQuery(this.element).addClass(_c4gMapsConstant.cssConstants.OPEN);
      jQuery(".c4g-permalink-container").removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
      this.setState({ open: true });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      jQuery(this.element).removeClass(_c4gMapsConstant.cssConstants.OPEN);
      jQuery(".c4g-permalink-container").removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
      this.setState({ open: false });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (jQuery(this.popup).hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
        this.open();
      } else {
        this.close();
      }
    }
  }, {
    key: "generateLinkFromCurrentState",
    value: function generateLinkFromCurrentState(opt_options) {
      var options, proxy, mapView, parameters, link, center, baseLayerIdx, layerIdx;

      options = opt_options || {};
      if (!options.paramCount || !(options.paramCount === 6 || options.paramCount === 2 || options.paramCount === 1)) {
        options.paramCount = 6;
      }

      parameters = [];
      mapView = this.props.mapController.map.getView();
      proxy = this.props.mapController.proxy;

      center = mapView.getCenter();
      center = (0, _proj.transform)([center[0], center[1]], 'EPSG:3857', 'EPSG:4326');

      parameters.push(+center[0].toFixed(6));
      parameters.push(+center[1].toFixed(5));
      parameters.push(mapView.getZoom());
      parameters.push(+mapView.getRotation().toFixed(2));

      // find active baselayer
      if (proxy.activeBaselayerId) {
        parameters.push(proxy.activeBaselayerId);
      } else {
        parameters.push(0);
      }

      // find active layers
      var layers = [];
      var arrLayerStates = this.props.mapController.state.arrLayerStates;
      for (var layerId in arrLayerStates) {
        if (arrLayerStates.hasOwnProperty(layerId)) {
          layers = layers.concat(this.getActiveLayerIds(arrLayerStates[layerId]));
        }
      }

      // delta-decode if there are more than one layer
      if (layers.length > 1) {
        layers = _c4gMapsUtils.utils.deltaEncode(layers);
        layers = layers.join(':');
      } else {
        layers = layers[0] || '0';
      }
      parameters.push(layers);
      parameters = parameters.join('/');

      // build link
      link = _c4gMapsUtils.utils.setUrlParam(parameters, this.props.mapController.data.permalink.getParameter);

      // if (options.target) {
      //   options.target.value = link;
      // } else {
      //   return link;
      // }
      this.setState({ link: link });
    } // end of generateLinkFromCurrentState

  }, {
    key: "generateLink",
    value: function generateLink(parameters) {
      if (!parameters || !(parameters.length === 6 || parameters.length === 2 || parameters.length === 1)) {
        return false;
      }

      // build and return link
      return _c4gMapsUtils.utils.setUrlParam(parameters.join('/'), this.props.mapController.data.permalink.getParameter);
    } // end of generateLink

  }, {
    key: "getActiveLayerIds",
    value: function getActiveLayerIds(arrLayerState) {
      var ids = [];
      if (arrLayerState.active) {
        ids.push(arrLayerState.id);
      }
      for (var childId in arrLayerState.childStates) {
        if (arrLayerState.childStates.hasOwnProperty(childId)) {
          ids = ids.concat(this.getActiveLayerIds(arrLayerState.childStates[childId]));
        }
      }
      return ids;
    }
  }]);

  return Permalink;
}(_react.Component);

exports.default = Permalink;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXBlcm1hbGluay5qc3giXSwibmFtZXMiOlsiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJQZXJtYWxpbmsiLCJwcm9wcyIsInNjb3BlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRpdGxlIiwiQ1RSTF9QRVJNQUxJTksiLCJjbGFzc05hbWUiLCJvcGVuIiwiZXh0ZXJuYWwiLCJhcHBlbmRDaGlsZCIsImpRdWVyeSIsIm9uIiwiZXZlbnQiLCJzdGF0ZSIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImhvcml6b250YWxQYW5lbCIsIm1hcCIsImFkZENvbnRyb2wiLCJiaW5kIiwibGluayIsIkNMT1NFIiwiY3NzQ29uc3RhbnRzIiwiQ09QWSIsIklDT04iLCJDT1BZX1RPX0NMSVBCT0FSRCIsIlJFRlJFU0giLCJnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlIiwidGV4dGZpZWxkIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJyZW1vdmVDbGFzcyIsIk9QRU4iLCJhZGRDbGFzcyIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJzdG9yZVZhbHVlIiwidGV4dEZpZWxkIiwicXVlcnlTZWxlY3RvciIsImNvcHlCdXR0b24iLCJDbGlwYm9hcmRKUyIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJwb3B1cCIsImhhc0NsYXNzIiwib3B0X29wdGlvbnMiLCJvcHRpb25zIiwicHJveHkiLCJtYXBWaWV3IiwicGFyYW1ldGVycyIsImNlbnRlciIsImJhc2VMYXllcklkeCIsImxheWVySWR4IiwicGFyYW1Db3VudCIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJwdXNoIiwidG9GaXhlZCIsImdldFpvb20iLCJnZXRSb3RhdGlvbiIsImFjdGl2ZUJhc2VsYXllcklkIiwibGF5ZXJzIiwiYXJyTGF5ZXJTdGF0ZXMiLCJsYXllcklkIiwiaGFzT3duUHJvcGVydHkiLCJjb25jYXQiLCJnZXRBY3RpdmVMYXllcklkcyIsImxlbmd0aCIsImRlbHRhRW5jb2RlIiwiam9pbiIsInNldFVybFBhcmFtIiwicGVybWFsaW5rIiwiZ2V0UGFyYW1ldGVyIiwiYXJyTGF5ZXJTdGF0ZSIsImlkcyIsImFjdGl2ZSIsImlkIiwiY2hpbGRJZCIsImNoaWxkU3RhdGVzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OzsrZUFuQkE7Ozs7Ozs7Ozs7Ozs7QUFlQSxJQUFNQSxXQUFXQyxnQkFBTUMsSUFBTixDQUFXO0FBQUEsU0FBTSxpS0FBTjtBQUFBLENBQVgsQ0FBakI7O0lBTXFCQyxTOzs7QUFFbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFHakIsUUFBTUMsYUFBTjtBQUNBO0FBQ0EsUUFBSUMsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsU0FBU0YsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsUUFBSUUsZ0JBQWdCLDhCQUFZTixNQUFNTyxhQUFOLENBQW9CQyxJQUFoQyxDQUFwQjtBQUNBSCxXQUFPSSxLQUFQLEdBQWVILGNBQWNJLGNBQTdCO0FBQ0FSLFlBQVFTLFNBQVIsR0FBb0IsbURBQXBCO0FBQ0EsUUFBSVgsTUFBTVksSUFBVixFQUFnQjtBQUNkVixjQUFRUyxTQUFSLElBQXFCLFVBQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xULGNBQVFTLFNBQVIsSUFBcUIsV0FBckI7QUFDRDtB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O0VBbE1vQ0ssZ0I7O2tCQUFsQmpHLFMiLCJmaWxlIjoiMTcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcm1hbGluayBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfUEVSTUFMSU5LO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctcGVybWFsaW5rLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ob3Jpem9udGFsUGFuZWwgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBsaW5rOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBlcm1hbGluay13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctcGVybWFsaW5rLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctcGVybWFsaW5rLWhlYWRlci1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1wiUGVybWFsaW5rXCJ9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wZXJtYWxpbmstY29udGVudFwifT5cbiAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjUwXCIgcm93cz1cIjJcIiBpZD17XCJwZXJtYWxpbmstdGV4dFwifSB2YWx1ZT17dGhpcy5zdGF0ZS5saW5rfSByZWFkT25seT17dHJ1ZX0vPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuQ09QWSArICcgJyArIGNzc0NvbnN0YW50cy5JQ09OfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNPUFlfVE9fQ0xJUEJPQVJEfVxuICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGFyZ2V0PXtcIiNwZXJtYWxpbmstdGV4dFwifSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuUkVGUkVTSCArICcgJyArIGNzc0NvbnN0YW50cy5JQ09OfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLlJFRlJFU0h9XG4gICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHRoaXMuZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSh7dGFyZ2V0OiB0aGlzLnRleHRmaWVsZH0pfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoKHByZXZTdGF0ZS5vcGVuICE9PSB0aGlzLnN0YXRlLm9wZW4pIHx8IHByZXZTdGF0ZS5saW5rICE9PSB0aGlzLnN0YXRlLmxpbmspIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSh7dGFyZ2V0OiB0aGlzLnRleHRmaWVsZH0pO1xuICAgIH1cbiAgICBpZiAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRleHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVybWFsaW5rLXRleHRcIik7XG4gICAgbGV0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY3NzQ29uc3RhbnRzLkNPUFkgKyBcIi5cIiArIGNzc0NvbnN0YW50cy5JQ09OKTtcbiAgICB0cnkge1xuICAgICAgbmV3IENsaXBib2FyZEpTKGNvcHlCdXR0b24pO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIC8vIGNsaXBib2FyZCBzY3JpcHQgaXMgbm90IGxvYWRlZFxuICAgICAgY29uc29sZS53YXJuKCdQZXJtYWxpbmsgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgaW4gYmFja2VuZCBtb2RlLi4nKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmIChqUXVlcnkodGhpcy5wb3B1cCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICBwcm94eSxcbiAgICAgIG1hcFZpZXcsXG4gICAgICBwYXJhbWV0ZXJzLFxuICAgICAgbGluayxcbiAgICAgIGNlbnRlcixcbiAgICAgIGJhc2VMYXllcklkeCxcbiAgICAgIGxheWVySWR4O1xuXG4gICAgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5wYXJhbUNvdW50IHx8ICEob3B0aW9ucy5wYXJhbUNvdW50ID09PSA2IHx8IG9wdGlvbnMucGFyYW1Db3VudCA9PT0gMiB8fCBvcHRpb25zLnBhcmFtQ291bnQgPT09IDEpKSB7XG4gICAgICBvcHRpb25zLnBhcmFtQ291bnQgPSA2O1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnMgPSBbXTtcbiAgICBtYXBWaWV3ID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgcHJveHkgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHk7XG5cbiAgICBjZW50ZXIgPSBtYXBWaWV3LmdldENlbnRlcigpO1xuICAgIGNlbnRlciA9IHRyYW5zZm9ybShbY2VudGVyWzBdLCBjZW50ZXJbMV1dLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuXG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMF0udG9GaXhlZCg2KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMV0udG9GaXhlZCg1KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKG1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICBwYXJhbWV0ZXJzLnB1c2goK21hcFZpZXcuZ2V0Um90YXRpb24oKS50b0ZpeGVkKDIpKTtcblxuICAgIC8vIGZpbmQgYWN0aXZlIGJhc2VsYXllclxuICAgIGlmIChwcm94eS5hY3RpdmVCYXNlbGF5ZXJJZCkge1xuICAgICAgcGFyYW1ldGVycy5wdXNoKHByb3h5LmFjdGl2ZUJhc2VsYXllcklkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1ldGVycy5wdXNoKDApO1xuICAgIH1cblxuICAgIC8vIGZpbmQgYWN0aXZlIGxheWVyc1xuICAgIGxldCBsYXllcnMgPSBbXTtcbiAgICBjb25zdCBhcnJMYXllclN0YXRlcyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zdGF0ZS5hcnJMYXllclN0YXRlcztcbiAgICBmb3IgKGxldCBsYXllcklkIGluIGFyckxheWVyU3RhdGVzKSB7XG4gICAgICBpZiAoYXJyTGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkobGF5ZXJJZCkpIHtcbiAgICAgICAgbGF5ZXJzID0gbGF5ZXJzLmNvbmNhdCh0aGlzLmdldEFjdGl2ZUxheWVySWRzKGFyckxheWVyU3RhdGVzW2xheWVySWRdKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGVsdGEtZGVjb2RlIGlmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIGxheWVyXG4gICAgaWYgKGxheWVycy5sZW5ndGggPiAxKSB7XG4gICAgICBsYXllcnMgPSB1dGlscy5kZWx0YUVuY29kZShsYXllcnMpO1xuICAgICAgbGF5ZXJzID0gbGF5ZXJzLmpvaW4oJzonKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5ZXJzID0gbGF5ZXJzWzBdIHx8ICcwJztcbiAgICB9XG4gICAgcGFyYW1ldGVycy5wdXNoKGxheWVycyk7XG4gICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMuam9pbignLycpO1xuXG4gICAgLy8gYnVpbGQgbGlua1xuICAgIGxpbmsgPSB1dGlscy5zZXRVcmxQYXJhbShwYXJhbWV0ZXJzLCB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wZXJtYWxpbmsuZ2V0UGFyYW1ldGVyKTtcblxuICAgIC8vIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgIC8vICAgb3B0aW9ucy50YXJnZXQudmFsdWUgPSBsaW5rO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICByZXR1cm4gbGluaztcbiAgICAvLyB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGluazogbGlua30pO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlXG5cbiAgZ2VuZXJhdGVMaW5rKHBhcmFtZXRlcnMpIHtcbiAgICBpZiAoIXBhcmFtZXRlcnMgfHwgIShwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gNiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBidWlsZCBhbmQgcmV0dXJuIGxpbmtcbiAgICByZXR1cm4gdXRpbHMuc2V0VXJsUGFyYW0ocGFyYW1ldGVycy5qb2luKCcvJyksIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnBlcm1hbGluay5nZXRQYXJhbWV0ZXIpO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtcbiAgZ2V0QWN0aXZlTGF5ZXJJZHMgKGFyckxheWVyU3RhdGUpIHtcbiAgICBsZXQgaWRzID0gW107XG4gICAgaWYgKGFyckxheWVyU3RhdGUuYWN0aXZlKSB7XG4gICAgICBpZHMucHVzaChhcnJMYXllclN0YXRlLmlkKTtcbiAgICB9XG4gICAgZm9yIChsZXQgY2hpbGRJZCBpbiBhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzKSB7XG4gICAgICBpZiAoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICBpZHMgPSBpZHMuY29uY2F0KHRoaXMuZ2V0QWN0aXZlTGF5ZXJJZHMoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWRzO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==