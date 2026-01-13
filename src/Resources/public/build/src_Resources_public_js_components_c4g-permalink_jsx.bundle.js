"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-permalink_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-permalink.jsx"
/*!**************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-permalink.jsx ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcGVybWFsaW5rX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxnQkFBQSxHQUFBRCxtQkFBQTtBQUVBLElBQUFFLEtBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxhQUFBLEdBQUFILG1CQUFBO0FBQ0EsSUFBQUksWUFBQSxHQUFBSixtQkFBQTtBQUNBLElBQUFLLFFBQUEsR0FBQUwsbUJBQUE7QUFBbUMsU0FBQUQsd0JBQUFPLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFULHVCQUFBLFlBQUFBLHdCQUFBTyxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFB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QUssSUFBSXlFLE9BQU8sSUFBSUgsYUFBYSxDQUFDSSxXQUFXLEVBQUU7UUFDN0MsSUFBSUosYUFBYSxDQUFDSSxXQUFXLENBQUN4SixjQUFjLENBQUN1SixPQUFPLENBQUMsRUFBRTtVQUNyREYsR0FBRyxHQUFHQSxHQUFHLENBQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUNDLGlCQUFpQixDQUFDVyxhQUFhLENBQUNJLFdBQVcsQ0FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5RTtNQUNGO01BQ0EsT0FBT0YsR0FBRztJQUNaO0VBQUM7QUFBQSxFQW5Ob0NJLGdCQUFTLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcGVybWFsaW5rLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge3RyYW5zZm9ybX0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJtYWxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gbGFuZ0NvbnN0YW50cy5DVFJMX1BFUk1BTElOSztcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfUEVSTUFMSU5LO1xuICAgIH1cbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXBlcm1hbGluay1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbGV0IGluZGV4ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJwZXJtYWxpbmtcIik7XG4gICAgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ob3Jpem9udGFsUGFuZWwgPSBjb250cm9sO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgbGluazogXCJcIlxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wZXJtYWxpbmstd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcIlBlcm1hbGlua1wifSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1wZXJtYWxpbmstY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcGVybWFsaW5rLWNvbnRlbnRcIn0+XG4gICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCI1MFwiIHJvd3M9XCIyXCIgaWQ9e1wicGVybWFsaW5rLXRleHRcIn0gdmFsdWU9e3RoaXMuc3RhdGUubGlua30gcmVhZE9ubHk9e3RydWV9Lz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLkNPUFkgKyAnICcgKyBjc3NDb25zdGFudHMuSUNPTn0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DT1BZX1RPX0NMSVBCT0FSRH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRhcmdldD17XCIjcGVybWFsaW5rLXRleHRcIn0gLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlJFRlJFU0ggKyAnICcgKyBjc3NDb25zdGFudHMuSUNPTn0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5SRUZSRVNIfVxuICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB0aGlzLmdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUoe3RhcmdldDogdGhpcy50ZXh0ZmllbGR9KX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKChwcmV2U3RhdGUub3BlbiAhPT0gdGhpcy5zdGF0ZS5vcGVuKSB8fCBwcmV2U3RhdGUubGluayAhPT0gdGhpcy5zdGF0ZS5saW5rKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUoe3RhcmdldDogdGhpcy50ZXh0ZmllbGR9KTtcbiAgICB9XG4gICAgaWYgKHByZXZTdGF0ZS5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcpIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSBcIlBlcm1hbGlua1wiICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBhbmVsVmFsICE9PSBcIlBlcm1hbGlua1wiICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiUGVybWFsaW5rXCIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRleHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVybWFsaW5rLXRleHRcIik7XG4gICAgbGV0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY3NzQ29uc3RhbnRzLkNPUFkgKyBcIi5cIiArIGNzc0NvbnN0YW50cy5JQ09OKTtcbiAgICB0cnkge1xuICAgICAgbmV3IENsaXBib2FyZEpTKGNvcHlCdXR0b24pO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIC8vIGNsaXBib2FyZCBzY3JpcHQgaXMgbm90IGxvYWRlZFxuICAgICAgY29uc29sZS53YXJuKCdQZXJtYWxpbmsgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgaW4gYmFja2VuZCBtb2RlLi4nKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmIChqUXVlcnkodGhpcy5wb3B1cCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICBwcm94eSxcbiAgICAgIG1hcFZpZXcsXG4gICAgICBwYXJhbWV0ZXJzLFxuICAgICAgbGluayxcbiAgICAgIGNlbnRlcixcbiAgICAgIGJhc2VMYXllcklkeCxcbiAgICAgIGxheWVySWR4O1xuXG4gICAgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5wYXJhbUNvdW50IHx8ICEob3B0aW9ucy5wYXJhbUNvdW50ID09PSA2IHx8IG9wdGlvbnMucGFyYW1Db3VudCA9PT0gMiB8fCBvcHRpb25zLnBhcmFtQ291bnQgPT09IDEpKSB7XG4gICAgICBvcHRpb25zLnBhcmFtQ291bnQgPSA2O1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnMgPSBbXTtcbiAgICBtYXBWaWV3ID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgcHJveHkgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHk7XG5cbiAgICBjZW50ZXIgPSBtYXBWaWV3LmdldENlbnRlcigpO1xuICAgIGNlbnRlciA9IHRyYW5zZm9ybShbY2VudGVyWzBdLCBjZW50ZXJbMV1dLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuXG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMF0udG9GaXhlZCg2KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMV0udG9GaXhlZCg1KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKHBhcnNlSW50KG1hcFZpZXcuZ2V0Wm9vbSgpKSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zYXZlSWRzKSB7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2goK21hcFZpZXcuZ2V0Um90YXRpb24oKS50b0ZpeGVkKDIpKTtcblxuICAgICAgLy8gZmluZCBhY3RpdmUgYmFzZWxheWVyXG4gICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnN0YXRlLmFjdGl2ZUJhc2VsYXllcklkKSB7XG4gICAgICAgIHBhcmFtZXRlcnMucHVzaCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc3RhdGUuYWN0aXZlQmFzZWxheWVySWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1ldGVycy5wdXNoKDApO1xuICAgICAgfVxuXG4gICAgICAvLyBmaW5kIGFjdGl2ZSBsYXllcnNcbiAgICAgIGxldCBsYXllcnMgPSBbXTtcbiAgICAgIGNvbnN0IGFyckxheWVyU3RhdGVzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnN0YXRlLmFyckxheWVyU3RhdGVzO1xuICAgICAgZm9yIChsZXQgbGF5ZXJJZCBpbiBhcnJMYXllclN0YXRlcykge1xuICAgICAgICBpZiAoYXJyTGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkobGF5ZXJJZCkpIHtcbiAgICAgICAgICBsYXllcnMgPSBsYXllcnMuY29uY2F0KHRoaXMuZ2V0QWN0aXZlTGF5ZXJJZHMoYXJyTGF5ZXJTdGF0ZXNbbGF5ZXJJZF0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkZWx0YS1kZWNvZGUgaWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgbGF5ZXJcbiAgICAgIGlmIChsYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBkbyBub3QgZGVsdGEgZW5jb2RlIHV1aWRzXG4gICAgICAgIGxldCBjb250YWluc1V1aWRzID0gKHR5cGVvZiBsYXllcnNbMF0gPT09ICdzdHJpbmcnIHx8IGxheWVyc1swXSBpbnN0YW5jZW9mIFN0cmluZykgJiYgKGxheWVyc1swXS5pbmRleE9mKFwie1wiKSA9PT0gLTEpO1xuICAgICAgICBpZiAoY29udGFpbnNVdWlkcykge1xuICAgICAgICAgIGxheWVycyA9IHV0aWxzLmRlbHRhRW5jb2RlKGxheWVycyk7XG4gICAgICAgIH1cbiAgICAgICAgbGF5ZXJzID0gbGF5ZXJzLmpvaW4oJzonKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxheWVycyA9IGxheWVyc1swXSB8fCAnMCc7XG4gICAgICB9XG4gICAgICBwYXJhbWV0ZXJzLnB1c2gobGF5ZXJzKTtcbiAgICB9XG4gICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMuam9pbignLycpO1xuICAgIC8vIGJ1aWxkIGxpbmtcbiAgICBsaW5rID0gdXRpbHMuc2V0VXJsUGFyYW0ocGFyYW1ldGVycywgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucGVybWFsaW5rLmdldFBhcmFtZXRlcik7XG5cbiAgICAvLyBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAvLyAgIG9wdGlvbnMudGFyZ2V0LnZhbHVlID0gbGluaztcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgcmV0dXJuIGxpbms7XG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpbms6IGxpbmt9KTtcbiAgfSAvLyBlbmQgb2YgZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZVxuXG4gIGdlbmVyYXRlTGluayhwYXJhbWV0ZXJzKSB7XG4gICAgaWYgKCFwYXJhbWV0ZXJzIHx8ICEocGFyYW1ldGVycy5sZW5ndGggPT09IDYgfHwgcGFyYW1ldGVycy5sZW5ndGggPT09IDIgfHwgcGFyYW1ldGVycy5sZW5ndGggPT09IDEpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gYnVpbGQgYW5kIHJldHVybiBsaW5rXG4gICAgcmV0dXJuIHV0aWxzLnNldFVybFBhcmFtKHBhcmFtZXRlcnMuam9pbignLycpLCB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wZXJtYWxpbmsuZ2V0UGFyYW1ldGVyKTtcbiAgfSAvLyBlbmQgb2YgZ2VuZXJhdGVMaW5rXG4gIGdldEFjdGl2ZUxheWVySWRzIChhcnJMYXllclN0YXRlKSB7XG4gICAgbGV0IGlkcyA9IFtdO1xuICAgIGlmIChhcnJMYXllclN0YXRlLmFjdGl2ZSkge1xuICAgICAgaWRzLnB1c2goYXJyTGF5ZXJTdGF0ZS5pZCk7XG4gICAgfVxuICAgIGZvciAobGV0IGNoaWxkSWQgaW4gYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlcykge1xuICAgICAgaWYgKGFyckxheWVyU3RhdGUuY2hpbGRTdGF0ZXMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcbiAgICAgICAgaWRzID0gaWRzLmNvbmNhdCh0aGlzLmdldEFjdGl2ZUxheWVySWRzKGFyckxheWVyU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlkcztcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYzRnTWFwc0NvbnN0YW50IiwiX3Byb2oiLCJfYzRnTWFwc1V0aWxzIiwiX2M0Z01hcHNJMThuIiwiX2NvbnRyb2wiLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiaSIsImYiLCJfX3Byb3RvX18iLCJfdHlwZW9mIiwiaGFzIiwiZ2V0Iiwic2V0IiwiX3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIlBlcm1hbGluayIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiQ1RSTF9QRVJNQUxJTksiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwialF1ZXJ5Iiwib24iLCJldmVudCIsInN0YXRlIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImhvcml6b250YWxQYW5lbCIsImJpbmQiLCJsaW5rIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzMiIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsImhlYWRlciIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsIkNMT1NFIiwiY29scyIsInJvd3MiLCJpZCIsInJlYWRPbmx5IiwiY3NzQ29uc3RhbnRzIiwiQ09QWSIsIklDT04iLCJDT1BZX1RPX0NMSVBCT0FSRCIsIlJFRlJFU0giLCJvbk1vdXNlVXAiLCJnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlIiwidGV4dGZpZWxkIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJyZW1vdmVDbGFzcyIsIk9QRU4iLCJhZGRDbGFzcyIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJzdG9yZVZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ0ZXh0RmllbGQiLCJxdWVyeVNlbGVjdG9yIiwiY29weUJ1dHRvbiIsIkNsaXBib2FyZEpTIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsInNldFN0YXRlIiwic2V0T3BlbkNvbXBvbmVudCIsInRvZ2dsZSIsInBvcHVwIiwiaGFzQ2xhc3MiLCJvcHRfb3B0aW9ucyIsIm9wdGlvbnMiLCJwcm94eSIsIm1hcFZpZXciLCJwYXJhbWV0ZXJzIiwiY2VudGVyIiwiYmFzZUxheWVySWR4IiwibGF5ZXJJZHgiLCJwYXJhbUNvdW50IiwibWFwIiwiZ2V0VmlldyIsImdldENlbnRlciIsInRyYW5zZm9ybSIsInB1c2giLCJ0b0ZpeGVkIiwicGFyc2VJbnQiLCJnZXRab29tIiwic2F2ZUlkcyIsImdldFJvdGF0aW9uIiwiYWN0aXZlQmFzZWxheWVySWQiLCJsYXllcnMiLCJhcnJMYXllclN0YXRlcyIsImxheWVySWQiLCJjb25jYXQiLCJnZXRBY3RpdmVMYXllcklkcyIsImxlbmd0aCIsImNvbnRhaW5zVXVpZHMiLCJTdHJpbmciLCJpbmRleE9mIiwiZGVsdGFFbmNvZGUiLCJqb2luIiwic2V0VXJsUGFyYW0iLCJwZXJtYWxpbmsiLCJnZXRQYXJhbWV0ZXIiLCJnZW5lcmF0ZUxpbmsiLCJhcnJMYXllclN0YXRlIiwiaWRzIiwiYWN0aXZlIiwiY2hpbGRJZCIsImNoaWxkU3RhdGVzIiwiQ29tcG9uZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=