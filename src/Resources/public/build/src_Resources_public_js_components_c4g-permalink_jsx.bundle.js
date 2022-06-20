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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
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

        if (this.props.mapController.state.activeBaselayerId) {
          parameters.push(this.props.mapController.state.activeBaselayerId);
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

exports["default"] = Permalink;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcGVybWFsaW5rX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUpBLElBQU1BLFFBQVEsZ0JBQUdDLGlCQUFBLENBQU1DLElBQU4sQ0FBVztFQUFBLE9BQU0sdUtBQU47QUFBQSxDQUFYLENBQWpCOztJQU1xQkM7Ozs7O0VBRW5CLG1CQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7SUFDakIsMEJBQU1BLEtBQU47SUFFQSxJQUFNQyxLQUFLLGlEQUFYLENBSGlCLENBSWpCOztJQUNBLElBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7SUFDQSxJQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0lBQ0EsSUFBSUUsYUFBYSxHQUFHLElBQUFDLHdCQUFBLEVBQVlQLEtBQUssQ0FBQ1EsYUFBTixDQUFvQkMsSUFBaEMsQ0FBcEI7SUFDQUosTUFBTSxDQUFDSyxLQUFQLEdBQWVKLGFBQWEsQ0FBQ0ssY0FBN0I7SUFDQVQsT0FBTyxDQUFDVSxTQUFSLEdBQW9CLG1EQUFwQjs7SUFDQSxJQUFJWixLQUFLLENBQUNhLElBQVYsRUFBZ0I7TUFDZFgsT0FBTyxDQUFDVSxTQUFSLElBQXFCLFVBQXJCO0lBQ0QsQ0FGRCxNQUVPO01BQ0xWLE9BQU8sQ0FBQ1UsU0FBUixJQUFxQixXQUFyQjtJQUNEOztJQUNELElBQUlaLEtBQUssQ0FBQ2MsUUFBVixFQUFvQjtNQUNsQlosT0FBTyxDQUFDVSxTQUFSLElBQXFCLGVBQXJCO0lBQ0Q7O0lBQ0RWLE9BQU8sQ0FBQ2EsV0FBUixDQUFvQlYsTUFBcEI7SUFDQVcsTUFBTSxDQUFDZCxPQUFELENBQU4sQ0FBZ0JlLEVBQWhCLENBQW1CLE9BQW5CLEVB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YWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXBlcm1hbGluay5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcm1hbGluayBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfUEVSTUFMSU5LO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctcGVybWFsaW5rLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ob3Jpem9udGFsUGFuZWwgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBsaW5rOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBlcm1hbGluay13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctcGVybWFsaW5rLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctcGVybWFsaW5rLWhlYWRlci1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1wiUGVybWFsaW5rXCJ9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wZXJtYWxpbmstY29udGVudFwifT5cbiAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjUwXCIgcm93cz1cIjJcIiBpZD17XCJwZXJtYWxpbmstdGV4dFwifSB2YWx1ZT17dGhpcy5zdGF0ZS5saW5rfSByZWFkT25seT17dHJ1ZX0vPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuQ09QWSArICcgJyArIGNzc0NvbnN0YW50cy5JQ09OfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNPUFlfVE9fQ0xJUEJPQVJEfVxuICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGFyZ2V0PXtcIiNwZXJtYWxpbmstdGV4dFwifSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuUkVGUkVTSCArICcgJyArIGNzc0NvbnN0YW50cy5JQ09OfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLlJFRlJFU0h9XG4gICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHRoaXMuZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSh7dGFyZ2V0OiB0aGlzLnRleHRmaWVsZH0pfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoKHByZXZTdGF0ZS5vcGVuICE9PSB0aGlzLnN0YXRlLm9wZW4pIHx8IHByZXZTdGF0ZS5saW5rICE9PSB0aGlzLnN0YXRlLmxpbmspIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSh7dGFyZ2V0OiB0aGlzLnRleHRmaWVsZH0pO1xuICAgIH1cbiAgICBpZiAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRleHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVybWFsaW5rLXRleHRcIik7XG4gICAgbGV0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY3NzQ29uc3RhbnRzLkNPUFkgKyBcIi5cIiArIGNzc0NvbnN0YW50cy5JQ09OKTtcbiAgICB0cnkge1xuICAgICAgbmV3IENsaXBib2FyZEpTKGNvcHlCdXR0b24pO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIC8vIGNsaXBib2FyZCBzY3JpcHQgaXMgbm90IGxvYWRlZFxuICAgICAgY29uc29sZS53YXJuKCdQZXJtYWxpbmsgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgaW4gYmFja2VuZCBtb2RlLi4nKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmIChqUXVlcnkodGhpcy5wb3B1cCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICBwcm94eSxcbiAgICAgIG1hcFZpZXcsXG4gICAgICBwYXJhbWV0ZXJzLFxuICAgICAgbGluayxcbiAgICAgIGNlbnRlcixcbiAgICAgIGJhc2VMYXllcklkeCxcbiAgICAgIGxheWVySWR4O1xuXG4gICAgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5wYXJhbUNvdW50IHx8ICEob3B0aW9ucy5wYXJhbUNvdW50ID09PSA2IHx8IG9wdGlvbnMucGFyYW1Db3VudCA9PT0gMiB8fCBvcHRpb25zLnBhcmFtQ291bnQgPT09IDEpKSB7XG4gICAgICBvcHRpb25zLnBhcmFtQ291bnQgPSA2O1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnMgPSBbXTtcbiAgICBtYXBWaWV3ID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgcHJveHkgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHk7XG5cbiAgICBjZW50ZXIgPSBtYXBWaWV3LmdldENlbnRlcigpO1xuICAgIGNlbnRlciA9IHRyYW5zZm9ybShbY2VudGVyWzBdLCBjZW50ZXJbMV1dLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuXG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMF0udG9GaXhlZCg2KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMV0udG9GaXhlZCg1KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKHBhcnNlSW50KG1hcFZpZXcuZ2V0Wm9vbSgpKSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zYXZlSWRzKSB7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2goK21hcFZpZXcuZ2V0Um90YXRpb24oKS50b0ZpeGVkKDIpKTtcblxuICAgICAgLy8gZmluZCBhY3RpdmUgYmFzZWxheWVyXG4gICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnN0YXRlLmFjdGl2ZUJhc2VsYXllcklkKSB7XG4gICAgICAgIHBhcmFtZXRlcnMucHVzaCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc3RhdGUuYWN0aXZlQmFzZWxheWVySWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1ldGVycy5wdXNoKDApO1xuICAgICAgfVxuXG4gICAgICAvLyBmaW5kIGFjdGl2ZSBsYXllcnNcbiAgICAgIGxldCBsYXllcnMgPSBbXTtcbiAgICAgIGNvbnN0IGFyckxheWVyU3RhdGVzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnN0YXRlLmFyckxheWVyU3RhdGVzO1xuICAgICAgZm9yIChsZXQgbGF5ZXJJZCBpbiBhcnJMYXllclN0YXRlcykge1xuICAgICAgICBpZiAoYXJyTGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkobGF5ZXJJZCkpIHtcbiAgICAgICAgICBsYXllcnMgPSBsYXllcnMuY29uY2F0KHRoaXMuZ2V0QWN0aXZlTGF5ZXJJZHMoYXJyTGF5ZXJTdGF0ZXNbbGF5ZXJJZF0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkZWx0YS1kZWNvZGUgaWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgbGF5ZXJcbiAgICAgIGlmIChsYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBkbyBub3QgZGVsdGEgZW5jb2RlIHV1aWRzXG4gICAgICAgIGlmIChsYXllcnNbMF0uaW5kZXhPZihcIntcIikgPT09IC0xKSB7XG4gICAgICAgICAgbGF5ZXJzID0gdXRpbHMuZGVsdGFFbmNvZGUobGF5ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBsYXllcnMgPSBsYXllcnMuam9pbignOicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5ZXJzID0gbGF5ZXJzWzBdIHx8ICcwJztcbiAgICAgIH1cbiAgICAgIHBhcmFtZXRlcnMucHVzaChsYXllcnMpO1xuICAgIH1cbiAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycy5qb2luKCcvJyk7XG4gICAgLy8gYnVpbGQgbGlua1xuICAgIGxpbmsgPSB1dGlscy5zZXRVcmxQYXJhbShwYXJhbWV0ZXJzLCB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wZXJtYWxpbmsuZ2V0UGFyYW1ldGVyKTtcblxuICAgIC8vIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgIC8vICAgb3B0aW9ucy50YXJnZXQudmFsdWUgPSBsaW5rO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICByZXR1cm4gbGluaztcbiAgICAvLyB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGluazogbGlua30pO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlXG5cbiAgZ2VuZXJhdGVMaW5rKHBhcmFtZXRlcnMpIHtcbiAgICBpZiAoIXBhcmFtZXRlcnMgfHwgIShwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gNiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBidWlsZCBhbmQgcmV0dXJuIGxpbmtcbiAgICByZXR1cm4gdXRpbHMuc2V0VXJsUGFyYW0ocGFyYW1ldGVycy5qb2luKCcvJyksIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnBlcm1hbGluay5nZXRQYXJhbWV0ZXIpO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtcbiAgZ2V0QWN0aXZlTGF5ZXJJZHMgKGFyckxheWVyU3RhdGUpIHtcbiAgICBsZXQgaWRzID0gW107XG4gICAgaWYgKGFyckxheWVyU3RhdGUuYWN0aXZlKSB7XG4gICAgICBpZHMucHVzaChhcnJMYXllclN0YXRlLmlkKTtcbiAgICB9XG4gICAgZm9yIChsZXQgY2hpbGRJZCBpbiBhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzKSB7XG4gICAgICBpZiAoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICBpZHMgPSBpZHMuY29uY2F0KHRoaXMuZ2V0QWN0aXZlTGF5ZXJJZHMoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWRzO1xuICB9XG59Il0sIm5hbWVzIjpbIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiUGVybWFsaW5rIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRpdGxlIiwiQ1RSTF9QRVJNQUxJTksiLCJjbGFzc05hbWUiLCJvcGVuIiwiZXh0ZXJuYWwiLCJhcHBlbmRDaGlsZCIsImpRdWVyeSIsIm9uIiwiZXZlbnQiLCJzdGF0ZSIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImhvcml6b250YWxQYW5lbCIsIm1hcCIsImFkZENvbnRyb2wiLCJiaW5kIiwibGluayIsIkNMT1NFIiwiY3NzQ29uc3RhbnRzIiwiQ09QWSIsIklDT04iLCJDT1BZX1RPX0NMSVBCT0FSRCIsIlJFRlJFU0giLCJnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlIiwidGV4dGZpZWxkIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJyZW1vdmVDbGFzcyIsIk9QRU4iLCJhZGRDbGFzcyIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJzdG9yZVZhbHVlIiwidGV4dEZpZWxkIiwicXVlcnlTZWxlY3RvciIsImNvcHlCdXR0b24iLCJDbGlwYm9hcmRKUyIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJwb3B1cCIsImhhc0NsYXNzIiwib3B0X29wdGlvbnMiLCJvcHRpb25zIiwicHJveHkiLCJtYXBWaWV3IiwicGFyYW1ldGVycyIsImNlbnRlciIsImJhc2VMYXllcklkeCIsImxheWVySWR4IiwicGFyYW1Db3VudCIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJ0cmFuc2Zvcm0iLCJwdXNoIiwidG9GaXhlZCIsInBhcnNlSW50IiwiZ2V0Wm9vbSIsInNhdmVJZHMiLCJnZXRSb3RhdGlvbiIsImFjdGl2ZUJhc2VsYXllcklkIiwibGF5ZXJzIiwiYXJyTGF5ZXJTdGF0ZXMiLCJsYXllcklkIiwiaGFzT3duUHJvcGVydHkiLCJjb25jYXQiLCJnZXRBY3RpdmVMYXllcklkcyIsImxlbmd0aCIsImluZGV4T2YiLCJkZWx0YUVuY29kZSIsImpvaW4iLCJzZXRVcmxQYXJhbSIsInBlcm1hbGluayIsImdldFBhcmFtZXRlciIsImFyckxheWVyU3RhdGUiLCJpZHMiLCJhY3RpdmUiLCJpZCIsImNoaWxkSWQiLCJjaGlsZFN0YXRlcyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=