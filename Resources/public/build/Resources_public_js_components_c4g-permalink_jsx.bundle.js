(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-permalink_jsx"],{

/***/ "./Resources/public/js/components/c4g-permalink.jsx":
/*!**********************************************************!*\
  !*** ./Resources/public/js/components/c4g-permalink.jsx ***!
  \**********************************************************/
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

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx"));
});

var Permalink = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Permalink, _Component);

  var _super = _createSuper(Permalink);

  function Permalink(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Permalink);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this); // create control to toggle the panel

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
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    mapController.mapsControls.controls.horizontalPanel = control;
    mapController.map.addControl(control);
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(_this.props.mapController.data);
    _this.state = {
      open: false,
      link: ""
    };
    return _this;
  }

  (0, _createClass2["default"])(Permalink, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-permalink-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-permalink-header",
        headerClass: "c4g-permalink-header-headline",
        header: "Permalink",
        closeBtnClass: "c4g-permalink-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-permalink-content"
      }, /*#__PURE__*/_react["default"].createElement("textarea", {
        cols: "50",
        rows: "2",
        id: "permalink-text",
        value: this.state.link,
        readOnly: true
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: _c4gMapsConstant.cssConstants.COPY + ' ' + _c4gMapsConstant.cssConstants.ICON,
        title: this.langConstants.COPY_TO_CLIPBOARD,
        "data-clipboard-target": "#permalink-text"
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: _c4gMapsConstant.cssConstants.REFRESH + ' ' + _c4gMapsConstant.cssConstants.ICON,
        title: this.langConstants.REFRESH,
        onMouseUp: function onMouseUp() {
          return _this2.generateLinkFromCurrentState({
            target: _this2.textfield
          });
        }
      })));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.open !== this.state.open || prevState.link !== this.state.link) {
        this.generateLinkFromCurrentState({
          target: this.textfield
        });
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
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      jQuery(this.element).removeClass(_c4gMapsConstant.cssConstants.OPEN);
      jQuery(".c4g-permalink-container").removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
      this.setState({
        open: false
      });
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
      parameters.push(parseInt(mapView.getZoom()));

      if (this.props.saveIds) {
        parameters.push(+mapView.getRotation().toFixed(2)); // find active baselayer

        if (proxy.activeBaselayerId) {
          parameters.push(proxy.activeBaselayerId);
        } else {
          parameters.push(0);
        } // find active layers


        var layers = [];
        var arrLayerStates = this.props.mapController.state.arrLayerStates;

        for (var layerId in arrLayerStates) {
          if (arrLayerStates.hasOwnProperty(layerId)) {
            layers = layers.concat(this.getActiveLayerIds(arrLayerStates[layerId]));
          }
        } // delta-decode if there are more than one layer


        if (layers.length > 1) {
          // do not delta encode uuids
          if (layers[0].indexOf("{") === -1) {
            layers = _c4gMapsUtils.utils.deltaEncode(layers);
          }

          layers = layers.join(':');
        } else {
          layers = layers[0] || '0';
        }

        parameters.push(layers);
      }

      parameters = parameters.join('/'); // build link

      link = _c4gMapsUtils.utils.setUrlParam(parameters, this.props.mapController.data.permalink.getParameter); // if (options.target) {
      //   options.target.value = link;
      // } else {
      //   return link;
      // }

      this.setState({
        link: link
      });
    } // end of generateLinkFromCurrentState

  }, {
    key: "generateLink",
    value: function generateLink(parameters) {
      if (!parameters || !(parameters.length === 6 || parameters.length === 2 || parameters.length === 1)) {
        return false;
      } // build and return link


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wZXJtYWxpbmsuanN4Il0sIm5hbWVzIjpbIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiUGVybWFsaW5rIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJ0aXRsZSIsIkNUUkxfUEVSTUFMSU5LIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJtYXAiLCJhZGRDb250cm9sIiwiYmluZCIsImxpbmsiLCJDTE9TRSIsImNzc0NvbnN0YW50cyIsIkNPUFkiLCJJQ09OIiwiQ09QWV9UT19DTElQQk9BUkQiLCJSRUZSRVNIIiwiZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSIsInRleHRmaWVsZCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVtb3ZlQ2xhc3MiLCJPUEVOIiwiYWRkQ2xhc3MiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwic3RvcmVWYWx1ZSIsInRleHRGaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb3B5QnV0dG9uIiwiQ2xpcGJvYXJkSlMiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwicG9wdXAiLCJoYXNDbGFzcyIsIm9wdF9vcHRpb25zIiwib3B0aW9ucyIsInByb3h5IiwibWFwVmlldyIsInBhcmFtZXRlcnMiLCJjZW50ZXIiLCJiYXNlTGF5ZXJJZHgiLCJsYXllcklkeCIsInBhcmFtQ291bnQiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwicHVzaCIsInRvRml4ZWQiLCJwYXJzZUludCIsImdldFpvb20iLCJzYXZlSWRzIiwiZ2V0Um90YXRpb24iLCJhY3RpdmVCYXNlbGF5ZXJJZCIsImxheWVycyIsImFyckxheWVyU3RhdGVzIiwibGF5ZXJJZCIsImhhc093blByb3BlcnR5IiwiY29uY2F0IiwiZ2V0QWN0aXZlTGF5ZXJJZHMiLCJsZW5ndGgiLCJpbmRleE9mIiwiZGVsdGFFbmNvZGUiLCJqb2luIiwic2V0VXJsUGFyYW0iLCJwZXJtYWxpbmsiLCJnZXRQYXJhbWV0ZXIiLCJhcnJMYXllclN0YXRlIiwiaWRzIiwiYWN0aXZlIiwiaWQiLCJjaGlsZElkIiwiY2hpbGRTdGF0ZXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFKQSxJQUFNQSxRQUFRLGdCQUFHQyxrQkFBTUMsSUFBTixDQUFXO0FBQUEsU0FBTSxtS0FBTjtBQUFBLENBQVgsQ0FBakI7O0lBTXFCQyxTOzs7OztBQUVuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsUUFBTUMsS0FBSyxpREFBWCxDQUhpQixDQUlqQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFFBQUlFLGFBQWEsR0FBRyw4QkFBWU4sS0FBSyxDQUFDTyxhQUFOLENBQW9CQyxJQUFoQyxDQUFwQjtBQUNBSCxVQUFNLENBQUNJLEtBQVAsR0FBZUgsYUFBYSxDQUFDSSxjQUE3QjtBQUNBUixXQUFPLENBQUNTLFNBQVIsR0FBb0IsbURBQXBCOztB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QUFLQyxpQkFBTCxDQUF1QlEsYUFBYSxDQUFDSyxXQUFkLENBQTBCRCxPQUExQixDQUF2QixDQUFYLENBQU47QUFDRDtBQUNGOztBQUNELGFBQU9ILEdBQVA7QUFDRDs7O0VBdk1vQ0ssZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1wZXJtYWxpbmtfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge3RyYW5zZm9ybX0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJtYWxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX1BFUk1BTElOSztcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXBlcm1hbGluay1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuaG9yaXpvbnRhbFBhbmVsID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgbGluazogXCJcIlxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wZXJtYWxpbmstd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcIlBlcm1hbGlua1wifSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1wZXJtYWxpbmstY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcGVybWFsaW5rLWNvbnRlbnRcIn0+XG4gICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCI1MFwiIHJvd3M9XCIyXCIgaWQ9e1wicGVybWFsaW5rLXRleHRcIn0gdmFsdWU9e3RoaXMuc3RhdGUubGlua30gcmVhZE9ubHk9e3RydWV9Lz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLkNPUFkgKyAnICcgKyBjc3NDb25zdGFudHMuSUNPTn0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DT1BZX1RPX0NMSVBCT0FSRH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRhcmdldD17XCIjcGVybWFsaW5rLXRleHRcIn0gLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlJFRlJFU0ggKyAnICcgKyBjc3NDb25zdGFudHMuSUNPTn0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5SRUZSRVNIfVxuICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB0aGlzLmdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUoe3RhcmdldDogdGhpcy50ZXh0ZmllbGR9KX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKChwcmV2U3RhdGUub3BlbiAhPT0gdGhpcy5zdGF0ZS5vcGVuKSB8fCBwcmV2U3RhdGUubGluayAhPT0gdGhpcy5zdGF0ZS5saW5rKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUoe3RhcmdldDogdGhpcy50ZXh0ZmllbGR9KTtcbiAgICB9XG4gICAgaWYgKHByZXZTdGF0ZS5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy50ZXh0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Blcm1hbGluay10ZXh0XCIpO1xuICAgIGxldCBjb3B5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIGNzc0NvbnN0YW50cy5DT1BZICsgXCIuXCIgKyBjc3NDb25zdGFudHMuSUNPTik7XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBDbGlwYm9hcmRKUyhjb3B5QnV0dG9uKTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAvLyBjbGlwYm9hcmQgc2NyaXB0IGlzIG5vdCBsb2FkZWRcbiAgICAgIGNvbnNvbGUud2FybignUGVybWFsaW5rIGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGluIGJhY2tlbmQgbW9kZS4uJyk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoalF1ZXJ5KHRoaXMucG9wdXApLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZShvcHRfb3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zLFxuICAgICAgcHJveHksXG4gICAgICBtYXBWaWV3LFxuICAgICAgcGFyYW1ldGVycyxcbiAgICAgIGxpbmssXG4gICAgICBjZW50ZXIsXG4gICAgICBiYXNlTGF5ZXJJZHgsXG4gICAgICBsYXllcklkeDtcblxuICAgIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMucGFyYW1Db3VudCB8fCAhKG9wdGlvbnMucGFyYW1Db3VudCA9PT0gNiB8fCBvcHRpb25zLnBhcmFtQ291bnQgPT09IDIgfHwgb3B0aW9ucy5wYXJhbUNvdW50ID09PSAxKSkge1xuICAgICAgb3B0aW9ucy5wYXJhbUNvdW50ID0gNjtcbiAgICB9XG5cbiAgICBwYXJhbWV0ZXJzID0gW107XG4gICAgbWFwVmlldyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgIHByb3h5ID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5O1xuXG4gICAgY2VudGVyID0gbWFwVmlldy5nZXRDZW50ZXIoKTtcbiAgICBjZW50ZXIgPSB0cmFuc2Zvcm0oW2NlbnRlclswXSwgY2VudGVyWzFdXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcblxuICAgIHBhcmFtZXRlcnMucHVzaCgrY2VudGVyWzBdLnRvRml4ZWQoNikpO1xuICAgIHBhcmFtZXRlcnMucHVzaCgrY2VudGVyWzFdLnRvRml4ZWQoNSkpO1xuICAgIHBhcmFtZXRlcnMucHVzaChwYXJzZUludChtYXBWaWV3LmdldFpvb20oKSkpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuc2F2ZUlkcykge1xuICAgICAgcGFyYW1ldGVycy5wdXNoKCttYXBWaWV3LmdldFJvdGF0aW9uKCkudG9GaXhlZCgyKSk7XG5cbiAgICAgIC8vIGZpbmQgYWN0aXZlIGJhc2VsYXllclxuICAgICAgaWYgKHByb3h5LmFjdGl2ZUJhc2VsYXllcklkKSB7XG4gICAgICAgIHBhcmFtZXRlcnMucHVzaChwcm94eS5hY3RpdmVCYXNlbGF5ZXJJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbWV0ZXJzLnB1c2goMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZpbmQgYWN0aXZlIGxheWVyc1xuICAgICAgbGV0IGxheWVycyA9IFtdO1xuICAgICAgY29uc3QgYXJyTGF5ZXJTdGF0ZXMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc3RhdGUuYXJyTGF5ZXJTdGF0ZXM7XG4gICAgICBmb3IgKGxldCBsYXllcklkIGluIGFyckxheWVyU3RhdGVzKSB7XG4gICAgICAgIGlmIChhcnJMYXllclN0YXRlcy5oYXNPd25Qcm9wZXJ0eShsYXllcklkKSkge1xuICAgICAgICAgIGxheWVycyA9IGxheWVycy5jb25jYXQodGhpcy5nZXRBY3RpdmVMYXllcklkcyhhcnJMYXllclN0YXRlc1tsYXllcklkXSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGRlbHRhLWRlY29kZSBpZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSBsYXllclxuICAgICAgaWYgKGxheWVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIGRvIG5vdCBkZWx0YSBlbmNvZGUgdXVpZHNcbiAgICAgICAgaWYgKGxheWVyc1swXS5pbmRleE9mKFwie1wiKSA9PT0gLTEpIHtcbiAgICAgICAgICBsYXllcnMgPSB1dGlscy5kZWx0YUVuY29kZShsYXllcnMpO1xuICAgICAgICB9XG4gICAgICAgIGxheWVycyA9IGxheWVycy5qb2luKCc6Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXllcnMgPSBsYXllcnNbMF0gfHwgJzAnO1xuICAgICAgfVxuICAgICAgcGFyYW1ldGVycy5wdXNoKGxheWVycyk7XG4gICAgfVxuICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLmpvaW4oJy8nKTtcbiAgICAvLyBidWlsZCBsaW5rXG4gICAgbGluayA9IHV0aWxzLnNldFVybFBhcmFtKHBhcmFtZXRlcnMsIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnBlcm1hbGluay5nZXRQYXJhbWV0ZXIpO1xuXG4gICAgLy8gaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgLy8gICBvcHRpb25zLnRhcmdldC52YWx1ZSA9IGxpbms7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHJldHVybiBsaW5rO1xuICAgIC8vIH1cbiAgICB0aGlzLnNldFN0YXRlKHtsaW5rOiBsaW5rfSk7XG4gIH0gLy8gZW5kIG9mIGdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGVcblxuICBnZW5lcmF0ZUxpbmsocGFyYW1ldGVycykge1xuICAgIGlmICghcGFyYW1ldGVycyB8fCAhKHBhcmFtZXRlcnMubGVuZ3RoID09PSA2IHx8IHBhcmFtZXRlcnMubGVuZ3RoID09PSAyIHx8IHBhcmFtZXRlcnMubGVuZ3RoID09PSAxKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGJ1aWxkIGFuZCByZXR1cm4gbGlua1xuICAgIHJldHVybiB1dGlscy5zZXRVcmxQYXJhbShwYXJhbWV0ZXJzLmpvaW4oJy8nKSwgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucGVybWFsaW5rLmdldFBhcmFtZXRlcik7XG4gIH0gLy8gZW5kIG9mIGdlbmVyYXRlTGlua1xuICBnZXRBY3RpdmVMYXllcklkcyAoYXJyTGF5ZXJTdGF0ZSkge1xuICAgIGxldCBpZHMgPSBbXTtcbiAgICBpZiAoYXJyTGF5ZXJTdGF0ZS5hY3RpdmUpIHtcbiAgICAgIGlkcy5wdXNoKGFyckxheWVyU3RhdGUuaWQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBjaGlsZElkIGluIGFyckxheWVyU3RhdGUuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGlmIChhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgIGlkcyA9IGlkcy5jb25jYXQodGhpcy5nZXRBY3RpdmVMYXllcklkcyhhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpZHM7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9