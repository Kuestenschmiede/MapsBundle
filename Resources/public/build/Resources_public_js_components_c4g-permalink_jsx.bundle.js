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
      parameters.push(mapView.getZoom());
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
        layers = _c4gMapsUtils.utils.deltaEncode(layers);
        layers = layers.join(':');
      } else {
        layers = layers[0] || '0';
      }

      parameters.push(layers);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wZXJtYWxpbmsuanN4Il0sIm5hbWVzIjpbIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiUGVybWFsaW5rIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJ0aXRsZSIsIkNUUkxfUEVSTUFMSU5LIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJtYXAiLCJhZGRDb250cm9sIiwiYmluZCIsImxpbmsiLCJDTE9TRSIsImNzc0NvbnN0YW50cyIsIkNPUFkiLCJJQ09OIiwiQ09QWV9UT19DTElQQk9BUkQiLCJSRUZSRVNIIiwiZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSIsInRleHRmaWVsZCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVtb3ZlQ2xhc3MiLCJPUEVOIiwiYWRkQ2xhc3MiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwic3RvcmVWYWx1ZSIsInRleHRGaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb3B5QnV0dG9uIiwiQ2xpcGJvYXJkSlMiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwicG9wdXAiLCJoYXNDbGFzcyIsIm9wdF9vcHRpb25zIiwib3B0aW9ucyIsInByb3h5IiwibWFwVmlldyIsInBhcmFtZXRlcnMiLCJjZW50ZXIiLCJiYXNlTGF5ZXJJZHgiLCJsYXllcklkeCIsInBhcmFtQ291bnQiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwicHVzaCIsInRvRml4ZWQiLCJnZXRab29tIiwiZ2V0Um90YXRpb24iLCJhY3RpdmVCYXNlbGF5ZXJJZCIsImxheWVycyIsImFyckxheWVyU3RhdGVzIiwibGF5ZXJJZCIsImhhc093blByb3BlcnR5IiwiY29uY2F0IiwiZ2V0QWN0aXZlTGF5ZXJJZHMiLCJsZW5ndGgiLCJkZWx0YUVuY29kZSIsImpvaW4iLCJzZXRVcmxQYXJhbSIsInBlcm1hbGluayIsImdldFBhcmFtZXRlciIsImFyckxheWVyU3RhdGUiLCJpZHMiLCJhY3RpdmUiLCJpZCIsImNoaWxkSWQiLCJjaGlsZFN0YXRlcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUpBLElBQU1BLFFBQVEsZ0JBQUdDLGtCQUFNQyxJQUFOLENBQVc7QUFBQSxTQUFNLG1LQUFOO0FBQUEsQ0FBWCxDQUFqQjs7SUFNcUJDLFM7Ozs7O0FBRW5CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxRQUFNQyxLQUFLLGlEQUFYLENBSGlCLENBSWpCOztBQUNBLFFBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxRQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsUUFBSUUsYUFBYSxHQUFHLDhCQUFZTixLQUFLLENBQUNPLGFBQU4sQ0FBb0JDLElBQWhDLENBQXBCO0FBQ0FILFVBQU0sQ0FBQ0ksS0FBUCxHQUFlSCxhQUFhLENBQUNJLGNBQTdCO0FBQ0FSLFdBQU8sQ0FBQ1MsU0FBUixHQUFvQixtREFBcEI7O0FBQ0EsUUFBSVgsS0FBSyxDQUFDWSxJQUFWLEVBQWdC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L0IsUUFBTCxDQUFjO0FBQUM3QixZQUFJLEVBQUVBO0FBQVAsT0FBZDtBQUNELEssQ0FBQzs7OztXQUVGLHNCQUFhcUMsVUFBYixFQUF5QjtBQUN2QixVQUFJLENBQUNBLFVBQUQsSUFBZSxFQUFFQSxVQUFVLENBQUNrQixNQUFYLEtBQXNCLENBQXRCLElBQTJCbEIsVUFBVSxDQUFDa0IsTUFBWCxLQUFzQixDQUFqRCxJQUFzRGxCLFVBQVUsQ0FBQ2tCLE1BQVgsS0FBc0IsQ0FBOUUsQ0FBbkIsRUFBcUc7QUFDbkcsZUFBTyxLQUFQO0FBQ0QsT0FIc0IsQ0FLdkI7OztBQUNBLGFBQU90QyxvQkFBTXlDLFdBQU4sQ0FBa0JyQixVQUFVLENBQUNvQixJQUFYLENBQWdCLEdBQWhCLENBQWxCLEVBQXdDLEtBQUt0RixLQUFMLENBQVdPLGFBQVgsQ0FBeUJDLElBQXpCLENBQThCZ0YsU0FBOUIsQ0FBd0NDLFlBQWhGLENBQVA7QUFDRCxLLENBQUM7Ozs7V0FDRiwyQkFBbUJDLGFBQW5CLEVBQWtDO0FBQ2hDLFVBQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLFVBQUlELGFBQWEsQ0FBQ0UsTUFBbEIsRUFBMEI7QUFDeEJELFdBQUcsQ0FBQ2xCLElBQUosQ0FBU2lCLGFBQWEsQ0FBQ0csRUFBdkI7QUFDRDs7QUFDRCxXQUFLLElBQUlDLE9BQVQsSUFBb0JKLGFBQWEsQ0FBQ0ssV0FBbEMsRUFBK0M7QUFDN0MsWUFBSUwsYUFBYSxDQUFDSyxXQUFkLENBQTBCZCxjQUExQixDQUF5Q2EsT0FBekMsQ0FBSixFQUF1RDtBQUNyREgsYUFBRyxHQUFHQSxHQUFHLENBQUNULE1BQUosQ0FBVyxLQUFLQyxpQkFBTCxDQUF1Qk8sYUFBYSxDQUFDSyxXQUFkLENBQTBCRCxPQUExQixDQUF2QixDQUFYLENBQU47QUFDRDtBQUNGOztBQUNELGFBQU9ILEdBQVA7QUFDRDs7O0VBbE1vQ0ssZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1wZXJtYWxpbmtfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge3RyYW5zZm9ybX0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJtYWxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX1BFUk1BTElOSztcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXBlcm1hbGluay1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuaG9yaXpvbnRhbFBhbmVsID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgbGluazogXCJcIlxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wZXJtYWxpbmstd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcIlBlcm1hbGlua1wifSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1wZXJtYWxpbmstY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcGVybWFsaW5rLWNvbnRlbnRcIn0+XG4gICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCI1MFwiIHJvd3M9XCIyXCIgaWQ9e1wicGVybWFsaW5rLXRleHRcIn0gdmFsdWU9e3RoaXMuc3RhdGUubGlua30gcmVhZE9ubHk9e3RydWV9Lz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLkNPUFkgKyAnICcgKyBjc3NDb25zdGFudHMuSUNPTn0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DT1BZX1RPX0NMSVBCT0FSRH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRhcmdldD17XCIjcGVybWFsaW5rLXRleHRcIn0gLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlJFRlJFU0ggKyAnICcgKyBjc3NDb25zdGFudHMuSUNPTn0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5SRUZSRVNIfVxuICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB0aGlzLmdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUoe3RhcmdldDogdGhpcy50ZXh0ZmllbGR9KX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKChwcmV2U3RhdGUub3BlbiAhPT0gdGhpcy5zdGF0ZS5vcGVuKSB8fCBwcmV2U3RhdGUubGluayAhPT0gdGhpcy5zdGF0ZS5saW5rKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUoe3RhcmdldDogdGhpcy50ZXh0ZmllbGR9KTtcbiAgICB9XG4gICAgaWYgKHByZXZTdGF0ZS5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy50ZXh0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Blcm1hbGluay10ZXh0XCIpO1xuICAgIGxldCBjb3B5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIGNzc0NvbnN0YW50cy5DT1BZICsgXCIuXCIgKyBjc3NDb25zdGFudHMuSUNPTik7XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBDbGlwYm9hcmRKUyhjb3B5QnV0dG9uKTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAvLyBjbGlwYm9hcmQgc2NyaXB0IGlzIG5vdCBsb2FkZWRcbiAgICAgIGNvbnNvbGUud2FybignUGVybWFsaW5rIGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGluIGJhY2tlbmQgbW9kZS4uJyk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoalF1ZXJ5KHRoaXMucG9wdXApLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZShvcHRfb3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zLFxuICAgICAgcHJveHksXG4gICAgICBtYXBWaWV3LFxuICAgICAgcGFyYW1ldGVycyxcbiAgICAgIGxpbmssXG4gICAgICBjZW50ZXIsXG4gICAgICBiYXNlTGF5ZXJJZHgsXG4gICAgICBsYXllcklkeDtcblxuICAgIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMucGFyYW1Db3VudCB8fCAhKG9wdGlvbnMucGFyYW1Db3VudCA9PT0gNiB8fCBvcHRpb25zLnBhcmFtQ291bnQgPT09IDIgfHwgb3B0aW9ucy5wYXJhbUNvdW50ID09PSAxKSkge1xuICAgICAgb3B0aW9ucy5wYXJhbUNvdW50ID0gNjtcbiAgICB9XG5cbiAgICBwYXJhbWV0ZXJzID0gW107XG4gICAgbWFwVmlldyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgIHByb3h5ID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5O1xuXG4gICAgY2VudGVyID0gbWFwVmlldy5nZXRDZW50ZXIoKTtcbiAgICBjZW50ZXIgPSB0cmFuc2Zvcm0oW2NlbnRlclswXSwgY2VudGVyWzFdXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcblxuICAgIHBhcmFtZXRlcnMucHVzaCgrY2VudGVyWzBdLnRvRml4ZWQoNikpO1xuICAgIHBhcmFtZXRlcnMucHVzaCgrY2VudGVyWzFdLnRvRml4ZWQoNSkpO1xuICAgIHBhcmFtZXRlcnMucHVzaChtYXBWaWV3LmdldFpvb20oKSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKCttYXBWaWV3LmdldFJvdGF0aW9uKCkudG9GaXhlZCgyKSk7XG5cbiAgICAvLyBmaW5kIGFjdGl2ZSBiYXNlbGF5ZXJcbiAgICBpZiAocHJveHkuYWN0aXZlQmFzZWxheWVySWQpIHtcbiAgICAgIHBhcmFtZXRlcnMucHVzaChwcm94eS5hY3RpdmVCYXNlbGF5ZXJJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtZXRlcnMucHVzaCgwKTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGFjdGl2ZSBsYXllcnNcbiAgICBsZXQgbGF5ZXJzID0gW107XG4gICAgY29uc3QgYXJyTGF5ZXJTdGF0ZXMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc3RhdGUuYXJyTGF5ZXJTdGF0ZXM7XG4gICAgZm9yIChsZXQgbGF5ZXJJZCBpbiBhcnJMYXllclN0YXRlcykge1xuICAgICAgaWYgKGFyckxheWVyU3RhdGVzLmhhc093blByb3BlcnR5KGxheWVySWQpKSB7XG4gICAgICAgIGxheWVycyA9IGxheWVycy5jb25jYXQodGhpcy5nZXRBY3RpdmVMYXllcklkcyhhcnJMYXllclN0YXRlc1tsYXllcklkXSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRlbHRhLWRlY29kZSBpZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSBsYXllclxuICAgIGlmIChsYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgbGF5ZXJzID0gdXRpbHMuZGVsdGFFbmNvZGUobGF5ZXJzKTtcbiAgICAgIGxheWVycyA9IGxheWVycy5qb2luKCc6Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVycyA9IGxheWVyc1swXSB8fCAnMCc7XG4gICAgfVxuICAgIHBhcmFtZXRlcnMucHVzaChsYXllcnMpO1xuICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLmpvaW4oJy8nKTtcblxuICAgIC8vIGJ1aWxkIGxpbmtcbiAgICBsaW5rID0gdXRpbHMuc2V0VXJsUGFyYW0ocGFyYW1ldGVycywgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucGVybWFsaW5rLmdldFBhcmFtZXRlcik7XG5cbiAgICAvLyBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAvLyAgIG9wdGlvbnMudGFyZ2V0LnZhbHVlID0gbGluaztcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgcmV0dXJuIGxpbms7XG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpbms6IGxpbmt9KTtcbiAgfSAvLyBlbmQgb2YgZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZVxuXG4gIGdlbmVyYXRlTGluayhwYXJhbWV0ZXJzKSB7XG4gICAgaWYgKCFwYXJhbWV0ZXJzIHx8ICEocGFyYW1ldGVycy5sZW5ndGggPT09IDYgfHwgcGFyYW1ldGVycy5sZW5ndGggPT09IDIgfHwgcGFyYW1ldGVycy5sZW5ndGggPT09IDEpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gYnVpbGQgYW5kIHJldHVybiBsaW5rXG4gICAgcmV0dXJuIHV0aWxzLnNldFVybFBhcmFtKHBhcmFtZXRlcnMuam9pbignLycpLCB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wZXJtYWxpbmsuZ2V0UGFyYW1ldGVyKTtcbiAgfSAvLyBlbmQgb2YgZ2VuZXJhdGVMaW5rXG4gIGdldEFjdGl2ZUxheWVySWRzIChhcnJMYXllclN0YXRlKSB7XG4gICAgbGV0IGlkcyA9IFtdO1xuICAgIGlmIChhcnJMYXllclN0YXRlLmFjdGl2ZSkge1xuICAgICAgaWRzLnB1c2goYXJyTGF5ZXJTdGF0ZS5pZCk7XG4gICAgfVxuICAgIGZvciAobGV0IGNoaWxkSWQgaW4gYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlcykge1xuICAgICAgaWYgKGFyckxheWVyU3RhdGUuY2hpbGRTdGF0ZXMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcbiAgICAgICAgaWRzID0gaWRzLmNvbmNhdCh0aGlzLmdldEFjdGl2ZUxheWVySWRzKGFyckxheWVyU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlkcztcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=