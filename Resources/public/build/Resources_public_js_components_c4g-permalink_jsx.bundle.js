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

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

      return _react["default"].createElement("div", {
        className: "c4g-permalink-wrapper"
      }, _react["default"].createElement(_c4gTitlebar.Titlebar, {
        wrapperClass: "c4g-permalink-header",
        headerClass: "c4g-permalink-header-headline",
        header: "Permalink",
        closeBtnClass: "c4g-permalink-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      }), _react["default"].createElement("div", {
        className: "c4g-permalink-content"
      }, _react["default"].createElement("textarea", {
        cols: "50",
        rows: "2",
        id: "permalink-text",
        value: this.state.link,
        readOnly: true
      }), _react["default"].createElement("button", {
        className: _c4gMapsConstant.cssConstants.COPY + ' ' + _c4gMapsConstant.cssConstants.ICON,
        title: this.langConstants.COPY_TO_CLIPBOARD,
        "data-clipboard-target": "#permalink-text"
      }), _react["default"].createElement("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wZXJtYWxpbmsuanN4Il0sIm5hbWVzIjpbIlBlcm1hbGluayIsInByb3BzIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwidGl0bGUiLCJDVFJMX1BFUk1BTElOSyIsImNsYXNzTmFtZSIsIm9wZW4iLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwialF1ZXJ5Iiwib24iLCJldmVudCIsInN0YXRlIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiaG9yaXpvbnRhbFBhbmVsIiwibWFwIiwiYWRkQ29udHJvbCIsImJpbmQiLCJsaW5rIiwiQ0xPU0UiLCJjc3NDb25zdGFudHMiLCJDT1BZIiwiSUNPTiIsIkNPUFlfVE9fQ0xJUEJPQVJEIiwiUkVGUkVTSCIsImdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUiLCJ0ZXh0ZmllbGQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInJlbW92ZUNsYXNzIiwiT1BFTiIsImFkZENsYXNzIiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInN0b3JlVmFsdWUiLCJ0ZXh0RmllbGQiLCJxdWVyeVNlbGVjdG9yIiwiY29weUJ1dHRvbiIsIkNsaXBib2FyZEpTIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsInNldFN0YXRlIiwic2V0T3BlbkNvbXBvbmVudCIsInBvcHVwIiwiaGFzQ2xhc3MiLCJvcHRfb3B0aW9ucyIsIm9wdGlvbnMiLCJwcm94eSIsIm1hcFZpZXciLCJwYXJhbWV0ZXJzIiwiY2VudGVyIiwiYmFzZUxheWVySWR4IiwibGF5ZXJJZHgiLCJwYXJhbUNvdW50IiwiZ2V0VmlldyIsImdldENlbnRlciIsInB1c2giLCJ0b0ZpeGVkIiwiZ2V0Wm9vbSIsImdldFJvdGF0aW9uIiwiYWN0aXZlQmFzZWxheWVySWQiLCJsYXllcnMiLCJhcnJMYXllclN0YXRlcyIsImxheWVySWQiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbmNhdCIsImdldEFjdGl2ZUxheWVySWRzIiwibGVuZ3RoIiwiZGVsdGFFbmNvZGUiLCJqb2luIiwic2V0VXJsUGFyYW0iLCJwZXJtYWxpbmsiLCJnZXRQYXJhbWV0ZXIiLCJhcnJMYXllclN0YXRlIiwiaWRzIiwiYWN0aXZlIiwiaWQiLCJjaGlsZElkIiwiY2hpbGRTdGF0ZXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7O0FBRW5CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxRQUFNQyxLQUFLLGlEQUFYLENBSGlCLENBSWpCOztBQUNBLFFBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxRQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsUUFBSUUsYUFBYSxHQUFHLDhCQUFZTixLQUFLLENBQUNPLGFBQU4sQ0FBb0JDLElBQWhDLENBQXBCO0FBQ0FILFVBQU0sQ0FBQ0ksS0FBUCxHQUFlSCxhQUFhLENBQUNJLGNBQTdCO0FBQ0FSLFdBQU8sQ0FBQ1MsU0FBUixHQUFvQixtREFBcEI7O0FBQ0EsUUFBSVgsS0FBSyxDQUFDWSxJQUFWLEVBQWdCO0FBQ2RWLGFBQU8sQ0FBQ1MsU0FBUixJQUFxQixVQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMVCxhQUFPLENBQUNTLFNBQVIsSUFBcUIsV0FBckI7QUFDRDs7QUFD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QixJQUEyQmxCLFVBQVUsQ0FBQ2tCLE1BQVgsS0FBc0IsQ0FBakQsSUFBc0RsQixVQUFVLENBQUNrQixNQUFYLEtBQXNCLENBQTlFLENBQW5CLEVBQXFHO0FBQ25HLGVBQU8sS0FBUDtBQUNELE9BSHNCLENBS3ZCOzs7QUFDQSxhQUFPdEMsb0JBQU15QyxXQUFOLENBQWtCckIsVUFBVSxDQUFDb0IsSUFBWCxDQUFnQixHQUFoQixDQUFsQixFQUF3QyxLQUFLdEYsS0FBTCxDQUFXTyxhQUFYLENBQXlCQyxJQUF6QixDQUE4QmdGLFNBQTlCLENBQXdDQyxZQUFoRixDQUFQO0FBQ0QsSyxDQUFDOzs7O1dBQ0YsMkJBQW1CQyxhQUFuQixFQUFrQztBQUNoQyxVQUFJQyxHQUFHLEdBQUcsRUFBVjs7QUFDQSxVQUFJRCxhQUFhLENBQUNFLE1BQWxCLEVBQTBCO0FBQ3hCRCxXQUFHLENBQUNsQixJQUFKLENBQVNpQixhQUFhLENBQUNHLEVBQXZCO0FBQ0Q7O0FBQ0QsV0FBSyxJQUFJQyxPQUFULElBQW9CSixhQUFhLENBQUNLLFdBQWxDLEVBQStDO0FBQzdDLFlBQUlMLGFBQWEsQ0FBQ0ssV0FBZCxDQUEwQmQsY0FBMUIsQ0FBeUNhLE9BQXpDLENBQUosRUFBdUQ7QUFDckRILGFBQUcsR0FBR0EsR0FBRyxDQUFDVCxNQUFKLENBQVcsS0FBS0MsaUJBQUwsQ0FBdUJPLGFBQWEsQ0FBQ0ssV0FBZCxDQUEwQkQsT0FBMUIsQ0FBdkIsQ0FBWCxDQUFOO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPSCxHQUFQO0FBQ0Q7OztFQWhNb0NLLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcGVybWFsaW5rX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyLmpzeFwiO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVybWFsaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9QRVJNQUxJTks7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1wZXJtYWxpbmstY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmhvcml6b250YWxQYW5lbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGxpbms6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcGVybWFsaW5rLXdyYXBwZXJcIn0+XG4gICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17XCJQZXJtYWxpbmtcIn0gY2xvc2VCdG5DbGFzcz17XCJjNGctcGVybWFsaW5rLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wZXJtYWxpbmstY29udGVudFwifT5cbiAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjUwXCIgcm93cz1cIjJcIiBpZD17XCJwZXJtYWxpbmstdGV4dFwifSB2YWx1ZT17dGhpcy5zdGF0ZS5saW5rfSByZWFkT25seT17dHJ1ZX0vPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuQ09QWSArICcgJyArIGNzc0NvbnN0YW50cy5JQ09OfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNPUFlfVE9fQ0xJUEJPQVJEfVxuICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGFyZ2V0PXtcIiNwZXJtYWxpbmstdGV4dFwifSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuUkVGUkVTSCArICcgJyArIGNzc0NvbnN0YW50cy5JQ09OfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLlJFRlJFU0h9XG4gICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHRoaXMuZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSh7dGFyZ2V0OiB0aGlzLnRleHRmaWVsZH0pfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoKHByZXZTdGF0ZS5vcGVuICE9PSB0aGlzLnN0YXRlLm9wZW4pIHx8IHByZXZTdGF0ZS5saW5rICE9PSB0aGlzLnN0YXRlLmxpbmspIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSh7dGFyZ2V0OiB0aGlzLnRleHRmaWVsZH0pO1xuICAgIH1cbiAgICBpZiAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRleHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVybWFsaW5rLXRleHRcIik7XG4gICAgbGV0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY3NzQ29uc3RhbnRzLkNPUFkgKyBcIi5cIiArIGNzc0NvbnN0YW50cy5JQ09OKTtcbiAgICB0cnkge1xuICAgICAgbmV3IENsaXBib2FyZEpTKGNvcHlCdXR0b24pO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIC8vIGNsaXBib2FyZCBzY3JpcHQgaXMgbm90IGxvYWRlZFxuICAgICAgY29uc29sZS53YXJuKCdQZXJtYWxpbmsgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgaW4gYmFja2VuZCBtb2RlLi4nKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmIChqUXVlcnkodGhpcy5wb3B1cCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICBwcm94eSxcbiAgICAgIG1hcFZpZXcsXG4gICAgICBwYXJhbWV0ZXJzLFxuICAgICAgbGluayxcbiAgICAgIGNlbnRlcixcbiAgICAgIGJhc2VMYXllcklkeCxcbiAgICAgIGxheWVySWR4O1xuXG4gICAgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5wYXJhbUNvdW50IHx8ICEob3B0aW9ucy5wYXJhbUNvdW50ID09PSA2IHx8IG9wdGlvbnMucGFyYW1Db3VudCA9PT0gMiB8fCBvcHRpb25zLnBhcmFtQ291bnQgPT09IDEpKSB7XG4gICAgICBvcHRpb25zLnBhcmFtQ291bnQgPSA2O1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnMgPSBbXTtcbiAgICBtYXBWaWV3ID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgcHJveHkgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHk7XG5cbiAgICBjZW50ZXIgPSBtYXBWaWV3LmdldENlbnRlcigpO1xuICAgIGNlbnRlciA9IHRyYW5zZm9ybShbY2VudGVyWzBdLCBjZW50ZXJbMV1dLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuXG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMF0udG9GaXhlZCg2KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMV0udG9GaXhlZCg1KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKG1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICBwYXJhbWV0ZXJzLnB1c2goK21hcFZpZXcuZ2V0Um90YXRpb24oKS50b0ZpeGVkKDIpKTtcblxuICAgIC8vIGZpbmQgYWN0aXZlIGJhc2VsYXllclxuICAgIGlmIChwcm94eS5hY3RpdmVCYXNlbGF5ZXJJZCkge1xuICAgICAgcGFyYW1ldGVycy5wdXNoKHByb3h5LmFjdGl2ZUJhc2VsYXllcklkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1ldGVycy5wdXNoKDApO1xuICAgIH1cblxuICAgIC8vIGZpbmQgYWN0aXZlIGxheWVyc1xuICAgIGxldCBsYXllcnMgPSBbXTtcbiAgICBjb25zdCBhcnJMYXllclN0YXRlcyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zdGF0ZS5hcnJMYXllclN0YXRlcztcbiAgICBmb3IgKGxldCBsYXllcklkIGluIGFyckxheWVyU3RhdGVzKSB7XG4gICAgICBpZiAoYXJyTGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkobGF5ZXJJZCkpIHtcbiAgICAgICAgbGF5ZXJzID0gbGF5ZXJzLmNvbmNhdCh0aGlzLmdldEFjdGl2ZUxheWVySWRzKGFyckxheWVyU3RhdGVzW2xheWVySWRdKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGVsdGEtZGVjb2RlIGlmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIGxheWVyXG4gICAgaWYgKGxheWVycy5sZW5ndGggPiAxKSB7XG4gICAgICBsYXllcnMgPSB1dGlscy5kZWx0YUVuY29kZShsYXllcnMpO1xuICAgICAgbGF5ZXJzID0gbGF5ZXJzLmpvaW4oJzonKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5ZXJzID0gbGF5ZXJzWzBdIHx8ICcwJztcbiAgICB9XG4gICAgcGFyYW1ldGVycy5wdXNoKGxheWVycyk7XG4gICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMuam9pbignLycpO1xuXG4gICAgLy8gYnVpbGQgbGlua1xuICAgIGxpbmsgPSB1dGlscy5zZXRVcmxQYXJhbShwYXJhbWV0ZXJzLCB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wZXJtYWxpbmsuZ2V0UGFyYW1ldGVyKTtcblxuICAgIC8vIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgIC8vICAgb3B0aW9ucy50YXJnZXQudmFsdWUgPSBsaW5rO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICByZXR1cm4gbGluaztcbiAgICAvLyB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGluazogbGlua30pO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlXG5cbiAgZ2VuZXJhdGVMaW5rKHBhcmFtZXRlcnMpIHtcbiAgICBpZiAoIXBhcmFtZXRlcnMgfHwgIShwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gNiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBidWlsZCBhbmQgcmV0dXJuIGxpbmtcbiAgICByZXR1cm4gdXRpbHMuc2V0VXJsUGFyYW0ocGFyYW1ldGVycy5qb2luKCcvJyksIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnBlcm1hbGluay5nZXRQYXJhbWV0ZXIpO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtcbiAgZ2V0QWN0aXZlTGF5ZXJJZHMgKGFyckxheWVyU3RhdGUpIHtcbiAgICBsZXQgaWRzID0gW107XG4gICAgaWYgKGFyckxheWVyU3RhdGUuYWN0aXZlKSB7XG4gICAgICBpZHMucHVzaChhcnJMYXllclN0YXRlLmlkKTtcbiAgICB9XG4gICAgZm9yIChsZXQgY2hpbGRJZCBpbiBhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzKSB7XG4gICAgICBpZiAoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICBpZHMgPSBpZHMuY29uY2F0KHRoaXMuZ2V0QWN0aXZlTGF5ZXJJZHMoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWRzO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==