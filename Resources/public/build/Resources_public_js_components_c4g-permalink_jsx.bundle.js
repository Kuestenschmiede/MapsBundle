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
        // do not delta encode uuids
        if (layers[0].indexOf("{") === -1) {
          layers = _c4gMapsUtils.utils.deltaEncode(layers);
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wZXJtYWxpbmsuanN4Il0sIm5hbWVzIjpbIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiUGVybWFsaW5rIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJ0aXRsZSIsIkNUUkxfUEVSTUFMSU5LIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJtYXAiLCJhZGRDb250cm9sIiwiYmluZCIsImxpbmsiLCJDTE9TRSIsImNzc0NvbnN0YW50cyIsIkNPUFkiLCJJQ09OIiwiQ09QWV9UT19DTElQQk9BUkQiLCJSRUZSRVNIIiwiZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSIsInRleHRmaWVsZCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVtb3ZlQ2xhc3MiLCJPUEVOIiwiYWRkQ2xhc3MiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwic3RvcmVWYWx1ZSIsInRleHRGaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb3B5QnV0dG9uIiwiQ2xpcGJvYXJkSlMiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwicG9wdXAiLCJoYXNDbGFzcyIsIm9wdF9vcHRpb25zIiwib3B0aW9ucyIsInByb3h5IiwibWFwVmlldyIsInBhcmFtZXRlcnMiLCJjZW50ZXIiLCJiYXNlTGF5ZXJJZHgiLCJsYXllcklkeCIsInBhcmFtQ291bnQiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwicHVzaCIsInRvRml4ZWQiLCJnZXRab29tIiwiZ2V0Um90YXRpb24iLCJhY3RpdmVCYXNlbGF5ZXJJZCIsImxheWVycyIsImFyckxheWVyU3RhdGVzIiwibGF5ZXJJZCIsImhhc093blByb3BlcnR5IiwiY29uY2F0IiwiZ2V0QWN0aXZlTGF5ZXJJZHMiLCJsZW5ndGgiLCJpbmRleE9mIiwiZGVsdGFFbmNvZGUiLCJqb2luIiwic2V0VXJsUGFyYW0iLCJwZXJtYWxpbmsiLCJnZXRQYXJhbWV0ZXIiLCJhcnJMYXllclN0YXRlIiwiaWRzIiwiYWN0aXZlIiwiaWQiLCJjaGlsZElkIiwiY2hpbGRTdGF0ZXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFKQSxJQUFNQSxRQUFRLGdCQUFHQyxrQkFBTUMsSUFBTixDQUFXO0FBQUEsU0FBTSxtS0FBTjtBQUFBLENBQVgsQ0FBakI7O0lBTXFCQyxTOzs7OztBQUVuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsUUFBTUMsS0FBSyxpREFBWCxDQUhpQixDQUlqQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFFBQUlFLGFBQWEsR0FBRyw4QkFBWU4sS0FBSyxDQUFDTyxhQUFOLENBQW9CQyxJQUFoQyxDQUFwQjtBQUNBSCxVQUFNLENBQUNJLEtBQVAsR0FBZUgsYUFBYSxDQUFDSSxjQUE3QjtBQUNBUixXQUFPLENBQUNTLFNBQVIsR0FBb0IsbURBQXBCOztBQUNBLFFBQUlYLEtBQUssQ0FBQ1ks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SCxHQUFQO0FBQ0Q7OztFQXJNb0NLLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcGVybWFsaW5rX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVybWFsaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9QRVJNQUxJTks7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1wZXJtYWxpbmstY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmhvcml6b250YWxQYW5lbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGxpbms6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcGVybWFsaW5rLXdyYXBwZXJcIn0+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1wZXJtYWxpbmstaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1wZXJtYWxpbmstaGVhZGVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17XCJQZXJtYWxpbmtcIn0gY2xvc2VCdG5DbGFzcz17XCJjNGctcGVybWFsaW5rLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBlcm1hbGluay1jb250ZW50XCJ9PlxuICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiNTBcIiByb3dzPVwiMlwiIGlkPXtcInBlcm1hbGluay10ZXh0XCJ9IHZhbHVlPXt0aGlzLnN0YXRlLmxpbmt9IHJlYWRPbmx5PXt0cnVlfS8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5DT1BZICsgJyAnICsgY3NzQ29uc3RhbnRzLklDT059IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ09QWV9UT19DTElQQk9BUkR9XG4gICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10YXJnZXQ9e1wiI3Blcm1hbGluay10ZXh0XCJ9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5SRUZSRVNIICsgJyAnICsgY3NzQ29uc3RhbnRzLklDT059IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuUkVGUkVTSH1cbiAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gdGhpcy5nZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKHt0YXJnZXQ6IHRoaXMudGV4dGZpZWxkfSl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICgocHJldlN0YXRlLm9wZW4gIT09IHRoaXMuc3RhdGUub3BlbikgfHwgcHJldlN0YXRlLmxpbmsgIT09IHRoaXMuc3RhdGUubGluaykge1xuICAgICAgdGhpcy5nZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKHt0YXJnZXQ6IHRoaXMudGV4dGZpZWxkfSk7XG4gICAgfVxuICAgIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGV4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJtYWxpbmstdGV4dFwiKTtcbiAgICBsZXQgY29weUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjc3NDb25zdGFudHMuQ09QWSArIFwiLlwiICsgY3NzQ29uc3RhbnRzLklDT04pO1xuICAgIHRyeSB7XG4gICAgICBuZXcgQ2xpcGJvYXJkSlMoY29weUJ1dHRvbik7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgLy8gY2xpcGJvYXJkIHNjcmlwdCBpcyBub3QgbG9hZGVkXG4gICAgICBjb25zb2xlLndhcm4oJ1Blcm1hbGluayBpcyBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCBpbiBiYWNrZW5kIG1vZGUuLicpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKGpRdWVyeSh0aGlzLnBvcHVwKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUob3B0X29wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyxcbiAgICAgIHByb3h5LFxuICAgICAgbWFwVmlldyxcbiAgICAgIHBhcmFtZXRlcnMsXG4gICAgICBsaW5rLFxuICAgICAgY2VudGVyLFxuICAgICAgYmFzZUxheWVySWR4LFxuICAgICAgbGF5ZXJJZHg7XG5cbiAgICBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLnBhcmFtQ291bnQgfHwgIShvcHRpb25zLnBhcmFtQ291bnQgPT09IDYgfHwgb3B0aW9ucy5wYXJhbUNvdW50ID09PSAyIHx8IG9wdGlvbnMucGFyYW1Db3VudCA9PT0gMSkpIHtcbiAgICAgIG9wdGlvbnMucGFyYW1Db3VudCA9IDY7XG4gICAgfVxuXG4gICAgcGFyYW1ldGVycyA9IFtdO1xuICAgIG1hcFZpZXcgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICBwcm94eSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eTtcblxuICAgIGNlbnRlciA9IG1hcFZpZXcuZ2V0Q2VudGVyKCk7XG4gICAgY2VudGVyID0gdHJhbnNmb3JtKFtjZW50ZXJbMF0sIGNlbnRlclsxXV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG5cbiAgICBwYXJhbWV0ZXJzLnB1c2goK2NlbnRlclswXS50b0ZpeGVkKDYpKTtcbiAgICBwYXJhbWV0ZXJzLnB1c2goK2NlbnRlclsxXS50b0ZpeGVkKDUpKTtcbiAgICBwYXJhbWV0ZXJzLnB1c2gobWFwVmlldy5nZXRab29tKCkpO1xuICAgIHBhcmFtZXRlcnMucHVzaCgrbWFwVmlldy5nZXRSb3RhdGlvbigpLnRvRml4ZWQoMikpO1xuXG4gICAgLy8gZmluZCBhY3RpdmUgYmFzZWxheWVyXG4gICAgaWYgKHByb3h5LmFjdGl2ZUJhc2VsYXllcklkKSB7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2gocHJveHkuYWN0aXZlQmFzZWxheWVySWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2goMCk7XG4gICAgfVxuXG4gICAgLy8gZmluZCBhY3RpdmUgbGF5ZXJzXG4gICAgbGV0IGxheWVycyA9IFtdO1xuICAgIGNvbnN0IGFyckxheWVyU3RhdGVzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnN0YXRlLmFyckxheWVyU3RhdGVzO1xuICAgIGZvciAobGV0IGxheWVySWQgaW4gYXJyTGF5ZXJTdGF0ZXMpIHtcbiAgICAgIGlmIChhcnJMYXllclN0YXRlcy5oYXNPd25Qcm9wZXJ0eShsYXllcklkKSkge1xuICAgICAgICBsYXllcnMgPSBsYXllcnMuY29uY2F0KHRoaXMuZ2V0QWN0aXZlTGF5ZXJJZHMoYXJyTGF5ZXJTdGF0ZXNbbGF5ZXJJZF0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZWx0YS1kZWNvZGUgaWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgbGF5ZXJcbiAgICBpZiAobGF5ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIGRvIG5vdCBkZWx0YSBlbmNvZGUgdXVpZHNcbiAgICAgIGlmIChsYXllcnNbMF0uaW5kZXhPZihcIntcIikgPT09IC0xKSB7XG4gICAgICAgIGxheWVycyA9IHV0aWxzLmRlbHRhRW5jb2RlKGxheWVycyk7XG4gICAgICB9XG4gICAgICBsYXllcnMgPSBsYXllcnMuam9pbignOicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXllcnMgPSBsYXllcnNbMF0gfHwgJzAnO1xuICAgIH1cbiAgICBwYXJhbWV0ZXJzLnB1c2gobGF5ZXJzKTtcbiAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycy5qb2luKCcvJyk7XG5cbiAgICAvLyBidWlsZCBsaW5rXG4gICAgbGluayA9IHV0aWxzLnNldFVybFBhcmFtKHBhcmFtZXRlcnMsIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnBlcm1hbGluay5nZXRQYXJhbWV0ZXIpO1xuXG4gICAgLy8gaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgLy8gICBvcHRpb25zLnRhcmdldC52YWx1ZSA9IGxpbms7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHJldHVybiBsaW5rO1xuICAgIC8vIH1cbiAgICB0aGlzLnNldFN0YXRlKHtsaW5rOiBsaW5rfSk7XG4gIH0gLy8gZW5kIG9mIGdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGVcblxuICBnZW5lcmF0ZUxpbmsocGFyYW1ldGVycykge1xuICAgIGlmICghcGFyYW1ldGVycyB8fCAhKHBhcmFtZXRlcnMubGVuZ3RoID09PSA2IHx8IHBhcmFtZXRlcnMubGVuZ3RoID09PSAyIHx8IHBhcmFtZXRlcnMubGVuZ3RoID09PSAxKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGJ1aWxkIGFuZCByZXR1cm4gbGlua1xuICAgIHJldHVybiB1dGlscy5zZXRVcmxQYXJhbShwYXJhbWV0ZXJzLmpvaW4oJy8nKSwgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucGVybWFsaW5rLmdldFBhcmFtZXRlcik7XG4gIH0gLy8gZW5kIG9mIGdlbmVyYXRlTGlua1xuICBnZXRBY3RpdmVMYXllcklkcyAoYXJyTGF5ZXJTdGF0ZSkge1xuICAgIGxldCBpZHMgPSBbXTtcbiAgICBpZiAoYXJyTGF5ZXJTdGF0ZS5hY3RpdmUpIHtcbiAgICAgIGlkcy5wdXNoKGFyckxheWVyU3RhdGUuaWQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBjaGlsZElkIGluIGFyckxheWVyU3RhdGUuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGlmIChhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgIGlkcyA9IGlkcy5jb25jYXQodGhpcy5nZXRBY3RpdmVMYXllcklkcyhhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpZHM7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9