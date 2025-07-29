"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-permalink_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-permalink.jsx":
/*!**************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-permalink.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");
var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});
var Permalink = exports["default"] = /*#__PURE__*/function (_Component) {
  function Permalink(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Permalink);
    _this = _callSuper(this, Permalink, [props]);
    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = langConstants.CTRL_PERMALINK;
      button.appendChild(span);
    } else {
      button.title = langConstants.CTRL_PERMALINK;
    }
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
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "permalink";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.horizontalPanel = control;
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(_this.props.mapController.data);
    _this.state = {
      open: false,
      link: ""
    };
    return _this;
  }
  (0, _inherits2["default"])(Permalink, _Component);
  return (0, _createClass2["default"])(Permalink, [{
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
      if (this.props.mapController.data.caching) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === "Permalink" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "Permalink" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "Permalink");
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
        parameters.push(+mapView.getRotation().toFixed(2));

        // find active baselayer
        if (this.props.mapController.state.activeBaselayerId) {
          parameters.push(this.props.mapController.state.activeBaselayerId);
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
          // do not delta encode uuids
          var containsUuids = (typeof layers[0] === 'string' || layers[0] instanceof String) && layers[0].indexOf("{") === -1;
          if (containsUuids) {
            layers = _c4gMapsUtils.utils.deltaEncode(layers);
          }
          layers = layers.join(':');
        } else {
          layers = layers[0] || '0';
        }
        parameters.push(layers);
      }
      parameters = parameters.join('/');
      // build link
      link = _c4gMapsUtils.utils.setUrlParam(parameters, this.props.mapController.data.permalink.getParameter);

      // if (options.target) {
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
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcGVybWFsaW5rX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxnQkFBQSxHQUFBRCxtQkFBQTtBQUVBLElBQUFFLEtBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxhQUFBLEdBQUFILG1CQUFBO0FBQ0EsSUFBQUksWUFBQSxHQUFBSixtQkFBQTtBQUNBLElBQUFLLFFBQUEsR0FBQUwsbUJBQUE7QUFBbUMsU0FBQUQsd0JBQUFPLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFULHVCQUFBLFlBQUFBLHdCQUFBTyxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFB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QUssSUFBSXlFLE9BQU8sSUFBSUgsYUFBYSxDQUFDSSxXQUFXLEVBQUU7UUFDN0MsSUFBSUosYUFBYSxDQUFDSSxXQUFXLENBQUN4SixjQUFjLENBQUN1SixPQUFPLENBQUMsRUFBRTtVQUNyREYsR0FBRyxHQUFHQSxHQUFHLENBQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUNDLGlCQUFpQixDQUFDVyxhQUFhLENBQUNJLFdBQVcsQ0FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5RTtNQUNGO01BQ0EsT0FBT0YsR0FBRztJQUNaO0VBQUM7QUFBQSxFQW5Ob0NJLGdCQUFTLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcGVybWFsaW5rLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVybWFsaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IGxhbmdDb25zdGFudHMuQ1RSTF9QRVJNQUxJTks7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX1BFUk1BTElOSztcbiAgICB9XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1wZXJtYWxpbmstY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwicGVybWFsaW5rXCIpO1xuICAgIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuaG9yaXpvbnRhbFBhbmVsID0gY29udHJvbDtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGxpbms6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcGVybWFsaW5rLXdyYXBwZXJcIn0+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1wZXJtYWxpbmstaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1wZXJtYWxpbmstaGVhZGVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17XCJQZXJtYWxpbmtcIn0gY2xvc2VCdG5DbGFzcz17XCJjNGctcGVybWFsaW5rLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBlcm1hbGluay1jb250ZW50XCJ9PlxuICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiNTBcIiByb3dzPVwiMlwiIGlkPXtcInBlcm1hbGluay10ZXh0XCJ9IHZhbHVlPXt0aGlzLnN0YXRlLmxpbmt9IHJlYWRPbmx5PXt0cnVlfS8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5DT1BZICsgJyAnICsgY3NzQ29uc3RhbnRzLklDT059IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ09QWV9UT19DTElQQk9BUkR9XG4gICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10YXJnZXQ9e1wiI3Blcm1hbGluay10ZXh0XCJ9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5SRUZSRVNIICsgJyAnICsgY3NzQ29uc3RhbnRzLklDT059IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuUkVGUkVTSH1cbiAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gdGhpcy5nZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKHt0YXJnZXQ6IHRoaXMudGV4dGZpZWxkfSl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICgocHJldlN0YXRlLm9wZW4gIT09IHRoaXMuc3RhdGUub3BlbikgfHwgcHJldlN0YXRlLmxpbmsgIT09IHRoaXMuc3RhdGUubGluaykge1xuICAgICAgdGhpcy5nZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKHt0YXJnZXQ6IHRoaXMudGV4dGZpZWxkfSk7XG4gICAgfVxuICAgIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gXCJQZXJtYWxpbmtcIiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5lbFZhbCAhPT0gXCJQZXJtYWxpbmtcIiAmJiB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlBlcm1hbGlua1wiKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy50ZXh0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Blcm1hbGluay10ZXh0XCIpO1xuICAgIGxldCBjb3B5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIGNzc0NvbnN0YW50cy5DT1BZICsgXCIuXCIgKyBjc3NDb25zdGFudHMuSUNPTik7XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBDbGlwYm9hcmRKUyhjb3B5QnV0dG9uKTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAvLyBjbGlwYm9hcmQgc2NyaXB0IGlzIG5vdCBsb2FkZWRcbiAgICAgIGNvbnNvbGUud2FybignUGVybWFsaW5rIGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGluIGJhY2tlbmQgbW9kZS4uJyk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoalF1ZXJ5KHRoaXMucG9wdXApLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZShvcHRfb3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zLFxuICAgICAgcHJveHksXG4gICAgICBtYXBWaWV3LFxuICAgICAgcGFyYW1ldGVycyxcbiAgICAgIGxpbmssXG4gICAgICBjZW50ZXIsXG4gICAgICBiYXNlTGF5ZXJJZHgsXG4gICAgICBsYXllcklkeDtcblxuICAgIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMucGFyYW1Db3VudCB8fCAhKG9wdGlvbnMucGFyYW1Db3VudCA9PT0gNiB8fCBvcHRpb25zLnBhcmFtQ291bnQgPT09IDIgfHwgb3B0aW9ucy5wYXJhbUNvdW50ID09PSAxKSkge1xuICAgICAgb3B0aW9ucy5wYXJhbUNvdW50ID0gNjtcbiAgICB9XG5cbiAgICBwYXJhbWV0ZXJzID0gW107XG4gICAgbWFwVmlldyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgIHByb3h5ID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5O1xuXG4gICAgY2VudGVyID0gbWFwVmlldy5nZXRDZW50ZXIoKTtcbiAgICBjZW50ZXIgPSB0cmFuc2Zvcm0oW2NlbnRlclswXSwgY2VudGVyWzFdXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcblxuICAgIHBhcmFtZXRlcnMucHVzaCgrY2VudGVyWzBdLnRvRml4ZWQoNikpO1xuICAgIHBhcmFtZXRlcnMucHVzaCgrY2VudGVyWzFdLnRvRml4ZWQoNSkpO1xuICAgIHBhcmFtZXRlcnMucHVzaChwYXJzZUludChtYXBWaWV3LmdldFpvb20oKSkpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuc2F2ZUlkcykge1xuICAgICAgcGFyYW1ldGVycy5wdXNoKCttYXBWaWV3LmdldFJvdGF0aW9uKCkudG9GaXhlZCgyKSk7XG5cbiAgICAgIC8vIGZpbmQgYWN0aXZlIGJhc2VsYXllclxuICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zdGF0ZS5hY3RpdmVCYXNlbGF5ZXJJZCkge1xuICAgICAgICBwYXJhbWV0ZXJzLnB1c2godGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnN0YXRlLmFjdGl2ZUJhc2VsYXllcklkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtZXRlcnMucHVzaCgwKTtcbiAgICAgIH1cblxuICAgICAgLy8gZmluZCBhY3RpdmUgbGF5ZXJzXG4gICAgICBsZXQgbGF5ZXJzID0gW107XG4gICAgICBjb25zdCBhcnJMYXllclN0YXRlcyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zdGF0ZS5hcnJMYXllclN0YXRlcztcbiAgICAgIGZvciAobGV0IGxheWVySWQgaW4gYXJyTGF5ZXJTdGF0ZXMpIHtcbiAgICAgICAgaWYgKGFyckxheWVyU3RhdGVzLmhhc093blByb3BlcnR5KGxheWVySWQpKSB7XG4gICAgICAgICAgbGF5ZXJzID0gbGF5ZXJzLmNvbmNhdCh0aGlzLmdldEFjdGl2ZUxheWVySWRzKGFyckxheWVyU3RhdGVzW2xheWVySWRdKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZGVsdGEtZGVjb2RlIGlmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIGxheWVyXG4gICAgICBpZiAobGF5ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gZG8gbm90IGRlbHRhIGVuY29kZSB1dWlkc1xuICAgICAgICBsZXQgY29udGFpbnNVdWlkcyA9ICh0eXBlb2YgbGF5ZXJzWzBdID09PSAnc3RyaW5nJyB8fCBsYXllcnNbMF0gaW5zdGFuY2VvZiBTdHJpbmcpICYmIChsYXllcnNbMF0uaW5kZXhPZihcIntcIikgPT09IC0xKTtcbiAgICAgICAgaWYgKGNvbnRhaW5zVXVpZHMpIHtcbiAgICAgICAgICBsYXllcnMgPSB1dGlscy5kZWx0YUVuY29kZShsYXllcnMpO1xuICAgICAgICB9XG4gICAgICAgIGxheWVycyA9IGxheWVycy5qb2luKCc6Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXllcnMgPSBsYXllcnNbMF0gfHwgJzAnO1xuICAgICAgfVxuICAgICAgcGFyYW1ldGVycy5wdXNoKGxheWVycyk7XG4gICAgfVxuICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLmpvaW4oJy8nKTtcbiAgICAvLyBidWlsZCBsaW5rXG4gICAgbGluayA9IHV0aWxzLnNldFVybFBhcmFtKHBhcmFtZXRlcnMsIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnBlcm1hbGluay5nZXRQYXJhbWV0ZXIpO1xuXG4gICAgLy8gaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgLy8gICBvcHRpb25zLnRhcmdldC52YWx1ZSA9IGxpbms7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHJldHVybiBsaW5rO1xuICAgIC8vIH1cbiAgICB0aGlzLnNldFN0YXRlKHtsaW5rOiBsaW5rfSk7XG4gIH0gLy8gZW5kIG9mIGdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGVcblxuICBnZW5lcmF0ZUxpbmsocGFyYW1ldGVycykge1xuICAgIGlmICghcGFyYW1ldGVycyB8fCAhKHBhcmFtZXRlcnMubGVuZ3RoID09PSA2IHx8IHBhcmFtZXRlcnMubGVuZ3RoID09PSAyIHx8IHBhcmFtZXRlcnMubGVuZ3RoID09PSAxKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGJ1aWxkIGFuZCByZXR1cm4gbGlua1xuICAgIHJldHVybiB1dGlscy5zZXRVcmxQYXJhbShwYXJhbWV0ZXJzLmpvaW4oJy8nKSwgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucGVybWFsaW5rLmdldFBhcmFtZXRlcik7XG4gIH0gLy8gZW5kIG9mIGdlbmVyYXRlTGlua1xuICBnZXRBY3RpdmVMYXllcklkcyAoYXJyTGF5ZXJTdGF0ZSkge1xuICAgIGxldCBpZHMgPSBbXTtcbiAgICBpZiAoYXJyTGF5ZXJTdGF0ZS5hY3RpdmUpIHtcbiAgICAgIGlkcy5wdXNoKGFyckxheWVyU3RhdGUuaWQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBjaGlsZElkIGluIGFyckxheWVyU3RhdGUuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGlmIChhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgIGlkcyA9IGlkcy5jb25jYXQodGhpcy5nZXRBY3RpdmVMYXllcklkcyhhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpZHM7XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2M0Z01hcHNDb25zdGFudCIsIl9wcm9qIiwiX2M0Z01hcHNVdGlscyIsIl9jNGdNYXBzSTE4biIsIl9jb250cm9sIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJQZXJtYWxpbmsiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsIkNUUkxfUEVSTUFMSU5LIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIm9wZW4iLCJleHRlcm5hbCIsImpRdWVyeSIsIm9uIiwiZXZlbnQiLCJzdGF0ZSIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJuYW1lIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJiaW5kIiwibGluayIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXIiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJDTE9TRSIsImNvbHMiLCJyb3dzIiwiaWQiLCJyZWFkT25seSIsImNzc0NvbnN0YW50cyIsIkNPUFkiLCJJQ09OIiwiQ09QWV9UT19DTElQQk9BUkQiLCJSRUZSRVNIIiwib25Nb3VzZVVwIiwiZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSIsInRleHRmaWVsZCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVtb3ZlQ2xhc3MiLCJPUEVOIiwiYWRkQ2xhc3MiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwic3RvcmVWYWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwidGV4dEZpZWxkIiwicXVlcnlTZWxlY3RvciIsImNvcHlCdXR0b24iLCJDbGlwYm9hcmRKUyIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJ0b2dnbGUiLCJwb3B1cCIsImhhc0NsYXNzIiwib3B0X29wdGlvbnMiLCJvcHRpb25zIiwicHJveHkiLCJtYXBWaWV3IiwicGFyYW1ldGVycyIsImNlbnRlciIsImJhc2VMYXllcklkeCIsImxheWVySWR4IiwicGFyYW1Db3VudCIsIm1hcCIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJ0cmFuc2Zvcm0iLCJwdXNoIiwidG9GaXhlZCIsInBhcnNlSW50IiwiZ2V0Wm9vbSIsInNhdmVJZHMiLCJnZXRSb3RhdGlvbiIsImFjdGl2ZUJhc2VsYXllcklkIiwibGF5ZXJzIiwiYXJyTGF5ZXJTdGF0ZXMiLCJsYXllcklkIiwiY29uY2F0IiwiZ2V0QWN0aXZlTGF5ZXJJZHMiLCJsZW5ndGgiLCJjb250YWluc1V1aWRzIiwiU3RyaW5nIiwiaW5kZXhPZiIsImRlbHRhRW5jb2RlIiwiam9pbiIsInNldFVybFBhcmFtIiwicGVybWFsaW5rIiwiZ2V0UGFyYW1ldGVyIiwiZ2VuZXJhdGVMaW5rIiwiYXJyTGF5ZXJTdGF0ZSIsImlkcyIsImFjdGl2ZSIsImNoaWxkSWQiLCJjaGlsZFN0YXRlcyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=