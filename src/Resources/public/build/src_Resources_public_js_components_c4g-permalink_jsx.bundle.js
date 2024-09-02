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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
          if (layers[0].indexOf("{") === -1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcGVybWFsaW5rX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxnQkFBQSxHQUFBRCxtQkFBQTtBQUVBLElBQUFFLEtBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxhQUFBLEdBQUFILG1CQUFBO0FBQ0EsSUFBQUksWUFBQSxHQUFBSixtQkFBQTtBQUNBLElBQUFLLFFBQUEsR0FBQUwsbUJBQUE7QUFBbUMsU0FBQU0seUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFSLHdCQUFBUSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1B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YUFBYSxDQUFDSSxXQUFXLEVBQUU7UUFDN0MsSUFBSUosYUFBYSxDQUFDSSxXQUFXLENBQUN0SixjQUFjLENBQUNxSixPQUFPLENBQUMsRUFBRTtVQUNyREYsR0FBRyxHQUFHQSxHQUFHLENBQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUNDLGlCQUFpQixDQUFDUyxhQUFhLENBQUNJLFdBQVcsQ0FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5RTtNQUNGO01BQ0EsT0FBT0YsR0FBRztJQUNaO0VBQUM7QUFBQSxFQWxOb0NJLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXBlcm1hbGluay5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcm1hbGluayBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSBsYW5nQ29uc3RhbnRzLkNUUkxfUEVSTUFMSU5LO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9QRVJNQUxJTks7XG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctcGVybWFsaW5rLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcInBlcm1hbGlua1wiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmhvcml6b250YWxQYW5lbCA9IGNvbnRyb2w7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBsaW5rOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBlcm1hbGluay13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctcGVybWFsaW5rLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctcGVybWFsaW5rLWhlYWRlci1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1wiUGVybWFsaW5rXCJ9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wZXJtYWxpbmstY29udGVudFwifT5cbiAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjUwXCIgcm93cz1cIjJcIiBpZD17XCJwZXJtYWxpbmstdGV4dFwifSB2YWx1ZT17dGhpcy5zdGF0ZS5saW5rfSByZWFkT25seT17dHJ1ZX0vPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuQ09QWSArICcgJyArIGNzc0NvbnN0YW50cy5JQ09OfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNPUFlfVE9fQ0xJUEJPQVJEfVxuICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGFyZ2V0PXtcIiNwZXJtYWxpbmstdGV4dFwifSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuUkVGUkVTSCArICcgJyArIGNzc0NvbnN0YW50cy5JQ09OfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLlJFRlJFU0h9XG4gICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHRoaXMuZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSh7dGFyZ2V0OiB0aGlzLnRleHRmaWVsZH0pfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoKHByZXZTdGF0ZS5vcGVuICE9PSB0aGlzLnN0YXRlLm9wZW4pIHx8IHByZXZTdGF0ZS5saW5rICE9PSB0aGlzLnN0YXRlLmxpbmspIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSh7dGFyZ2V0OiB0aGlzLnRleHRmaWVsZH0pO1xuICAgIH1cbiAgICBpZiAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZykge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IFwiUGVybWFsaW5rXCIgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGFuZWxWYWwgIT09IFwiUGVybWFsaW5rXCIgJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJQZXJtYWxpbmtcIilcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGV4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJtYWxpbmstdGV4dFwiKTtcbiAgICBsZXQgY29weUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjc3NDb25zdGFudHMuQ09QWSArIFwiLlwiICsgY3NzQ29uc3RhbnRzLklDT04pO1xuICAgIHRyeSB7XG4gICAgICBuZXcgQ2xpcGJvYXJkSlMoY29weUJ1dHRvbik7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgLy8gY2xpcGJvYXJkIHNjcmlwdCBpcyBub3QgbG9hZGVkXG4gICAgICBjb25zb2xlLndhcm4oJ1Blcm1hbGluayBpcyBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCBpbiBiYWNrZW5kIG1vZGUuLicpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKGpRdWVyeSh0aGlzLnBvcHVwKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUob3B0X29wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyxcbiAgICAgIHByb3h5LFxuICAgICAgbWFwVmlldyxcbiAgICAgIHBhcmFtZXRlcnMsXG4gICAgICBsaW5rLFxuICAgICAgY2VudGVyLFxuICAgICAgYmFzZUxheWVySWR4LFxuICAgICAgbGF5ZXJJZHg7XG5cbiAgICBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLnBhcmFtQ291bnQgfHwgIShvcHRpb25zLnBhcmFtQ291bnQgPT09IDYgfHwgb3B0aW9ucy5wYXJhbUNvdW50ID09PSAyIHx8IG9wdGlvbnMucGFyYW1Db3VudCA9PT0gMSkpIHtcbiAgICAgIG9wdGlvbnMucGFyYW1Db3VudCA9IDY7XG4gICAgfVxuXG4gICAgcGFyYW1ldGVycyA9IFtdO1xuICAgIG1hcFZpZXcgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICBwcm94eSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eTtcblxuICAgIGNlbnRlciA9IG1hcFZpZXcuZ2V0Q2VudGVyKCk7XG4gICAgY2VudGVyID0gdHJhbnNmb3JtKFtjZW50ZXJbMF0sIGNlbnRlclsxXV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG5cbiAgICBwYXJhbWV0ZXJzLnB1c2goK2NlbnRlclswXS50b0ZpeGVkKDYpKTtcbiAgICBwYXJhbWV0ZXJzLnB1c2goK2NlbnRlclsxXS50b0ZpeGVkKDUpKTtcbiAgICBwYXJhbWV0ZXJzLnB1c2gocGFyc2VJbnQobWFwVmlldy5nZXRab29tKCkpKTtcblxuICAgIGlmICh0aGlzLnByb3BzLnNhdmVJZHMpIHtcbiAgICAgIHBhcmFtZXRlcnMucHVzaCgrbWFwVmlldy5nZXRSb3RhdGlvbigpLnRvRml4ZWQoMikpO1xuXG4gICAgICAvLyBmaW5kIGFjdGl2ZSBiYXNlbGF5ZXJcbiAgICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc3RhdGUuYWN0aXZlQmFzZWxheWVySWQpIHtcbiAgICAgICAgcGFyYW1ldGVycy5wdXNoKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zdGF0ZS5hY3RpdmVCYXNlbGF5ZXJJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbWV0ZXJzLnB1c2goMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZpbmQgYWN0aXZlIGxheWVyc1xuICAgICAgbGV0IGxheWVycyA9IFtdO1xuICAgICAgY29uc3QgYXJyTGF5ZXJTdGF0ZXMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc3RhdGUuYXJyTGF5ZXJTdGF0ZXM7XG4gICAgICBmb3IgKGxldCBsYXllcklkIGluIGFyckxheWVyU3RhdGVzKSB7XG4gICAgICAgIGlmIChhcnJMYXllclN0YXRlcy5oYXNPd25Qcm9wZXJ0eShsYXllcklkKSkge1xuICAgICAgICAgIGxheWVycyA9IGxheWVycy5jb25jYXQodGhpcy5nZXRBY3RpdmVMYXllcklkcyhhcnJMYXllclN0YXRlc1tsYXllcklkXSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGRlbHRhLWRlY29kZSBpZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSBsYXllclxuICAgICAgaWYgKGxheWVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIGRvIG5vdCBkZWx0YSBlbmNvZGUgdXVpZHNcbiAgICAgICAgaWYgKGxheWVyc1swXS5pbmRleE9mKFwie1wiKSA9PT0gLTEpIHtcbiAgICAgICAgICBsYXllcnMgPSB1dGlscy5kZWx0YUVuY29kZShsYXllcnMpO1xuICAgICAgICB9XG4gICAgICAgIGxheWVycyA9IGxheWVycy5qb2luKCc6Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXllcnMgPSBsYXllcnNbMF0gfHwgJzAnO1xuICAgICAgfVxuICAgICAgcGFyYW1ldGVycy5wdXNoKGxheWVycyk7XG4gICAgfVxuICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLmpvaW4oJy8nKTtcbiAgICAvLyBidWlsZCBsaW5rXG4gICAgbGluayA9IHV0aWxzLnNldFVybFBhcmFtKHBhcmFtZXRlcnMsIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnBlcm1hbGluay5nZXRQYXJhbWV0ZXIpO1xuXG4gICAgLy8gaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgLy8gICBvcHRpb25zLnRhcmdldC52YWx1ZSA9IGxpbms7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHJldHVybiBsaW5rO1xuICAgIC8vIH1cbiAgICB0aGlzLnNldFN0YXRlKHtsaW5rOiBsaW5rfSk7XG4gIH0gLy8gZW5kIG9mIGdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGVcblxuICBnZW5lcmF0ZUxpbmsocGFyYW1ldGVycykge1xuICAgIGlmICghcGFyYW1ldGVycyB8fCAhKHBhcmFtZXRlcnMubGVuZ3RoID09PSA2IHx8IHBhcmFtZXRlcnMubGVuZ3RoID09PSAyIHx8IHBhcmFtZXRlcnMubGVuZ3RoID09PSAxKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGJ1aWxkIGFuZCByZXR1cm4gbGlua1xuICAgIHJldHVybiB1dGlscy5zZXRVcmxQYXJhbShwYXJhbWV0ZXJzLmpvaW4oJy8nKSwgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucGVybWFsaW5rLmdldFBhcmFtZXRlcik7XG4gIH0gLy8gZW5kIG9mIGdlbmVyYXRlTGlua1xuICBnZXRBY3RpdmVMYXllcklkcyAoYXJyTGF5ZXJTdGF0ZSkge1xuICAgIGxldCBpZHMgPSBbXTtcbiAgICBpZiAoYXJyTGF5ZXJTdGF0ZS5hY3RpdmUpIHtcbiAgICAgIGlkcy5wdXNoKGFyckxheWVyU3RhdGUuaWQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBjaGlsZElkIGluIGFyckxheWVyU3RhdGUuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGlmIChhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgIGlkcyA9IGlkcy5jb25jYXQodGhpcy5nZXRBY3RpdmVMYXllcklkcyhhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpZHM7XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2M0Z01hcHNDb25zdGFudCIsIl9wcm9qIiwiX2M0Z01hcHNVdGlscyIsIl9jNGdNYXBzSTE4biIsIl9jb250cm9sIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIlBlcm1hbGluayIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiQ1RSTF9QRVJNQUxJTksiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwialF1ZXJ5Iiwib24iLCJldmVudCIsInN0YXRlIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImhvcml6b250YWxQYW5lbCIsImJpbmQiLCJsaW5rIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzMiIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsImhlYWRlciIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsIkNMT1NFIiwiY29scyIsInJvd3MiLCJpZCIsInJlYWRPbmx5IiwiY3NzQ29uc3RhbnRzIiwiQ09QWSIsIklDT04iLCJDT1BZX1RPX0NMSVBCT0FSRCIsIlJFRlJFU0giLCJvbk1vdXNlVXAiLCJnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlIiwidGV4dGZpZWxkIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJyZW1vdmVDbGFzcyIsIk9QRU4iLCJhZGRDbGFzcyIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJzdG9yZVZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ0ZXh0RmllbGQiLCJxdWVyeVNlbGVjdG9yIiwiY29weUJ1dHRvbiIsIkNsaXBib2FyZEpTIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsInNldFN0YXRlIiwic2V0T3BlbkNvbXBvbmVudCIsInRvZ2dsZSIsInBvcHVwIiwiaGFzQ2xhc3MiLCJvcHRfb3B0aW9ucyIsIm9wdGlvbnMiLCJwcm94eSIsIm1hcFZpZXciLCJwYXJhbWV0ZXJzIiwiY2VudGVyIiwiYmFzZUxheWVySWR4IiwibGF5ZXJJZHgiLCJwYXJhbUNvdW50IiwibWFwIiwiZ2V0VmlldyIsImdldENlbnRlciIsInRyYW5zZm9ybSIsInB1c2giLCJ0b0ZpeGVkIiwicGFyc2VJbnQiLCJnZXRab29tIiwic2F2ZUlkcyIsImdldFJvdGF0aW9uIiwiYWN0aXZlQmFzZWxheWVySWQiLCJsYXllcnMiLCJhcnJMYXllclN0YXRlcyIsImxheWVySWQiLCJjb25jYXQiLCJnZXRBY3RpdmVMYXllcklkcyIsImxlbmd0aCIsImluZGV4T2YiLCJkZWx0YUVuY29kZSIsImpvaW4iLCJzZXRVcmxQYXJhbSIsInBlcm1hbGluayIsImdldFBhcmFtZXRlciIsImdlbmVyYXRlTGluayIsImFyckxheWVyU3RhdGUiLCJpZHMiLCJhY3RpdmUiLCJjaGlsZElkIiwiY2hpbGRTdGF0ZXMiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9