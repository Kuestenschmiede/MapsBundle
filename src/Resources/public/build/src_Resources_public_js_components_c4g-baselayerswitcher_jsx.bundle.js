"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-baselayerswitcher_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-baselayerswitcher.jsx":
/*!**********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-baselayerswitcher.jsx ***!
  \**********************************************************************/
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

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

var _c4gOverlayControls = __webpack_require__(/*! ./c4g-overlay-controls.jsx */ "./src/Resources/public/js/components/c4g-overlay-controls.jsx");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});

var BaselayerSwitcher = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(BaselayerSwitcher, _Component);

  var _super = _createSuper(BaselayerSwitcher);

  function BaselayerSwitcher(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, BaselayerSwitcher);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this); // create control to toggle the panel

    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    button.title = _this.langConstants.CTRL_BASELAYER;
    element.className = "c4g-baselayer-control ol-unselectable ol-control ";

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
    mapController.mapsControls.controls.baselayerSwitcher = control;
    mapController.map.addControl(control);
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    var baselayerLoaded = false;

    if (props.mapController.proxy.baselayerLoaded) {
      baselayerLoaded = true;
    } else {
      props.mapController.proxy.hook_baselayer_loaded = props.mapController.proxy.hook_baselayer_loaded || [];
      props.mapController.proxy.hook_baselayer_loaded.push(function () {
        scope.setState({
          baselayerLoaded: true,
          currentBaselayer: props.mapController.state.activeBaselayerId
        });
      });
    } // state variables (every property that has influence on this component)


    _this.state = {
      open: props.open || false,
      className: props.className || "c4g-baselayerswitcher-panel",
      control: control,
      baselayerLoaded: baselayerLoaded,
      currentBaselayer: 0,
      baselayerFilter: ""
    };
    return _this;
  }

  (0, _createClass2["default"])(BaselayerSwitcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getFilteredBaselayerIds",
    value: function getFilteredBaselayerIds() {
      var arrBaselayers = this.props.baselayerController.arrBaselayers;
      var ids = this.props.baselayerController.baselayerIds;
      var returnIds = [];

      if (this.state.baselayerFilter === "") {
        returnIds = ids;
      } else {
        for (var i = 0; i < ids.length; i++) {
          var baselayer = arrBaselayers[ids[i]];

          if (baselayer.name.toLowerCase().indexOf(this.state.baselayerFilter.toLowerCase()) !== -1) {
            returnIds.push(ids[i]);
          } else {
            // check if an overlay matches
            var overlays = baselayer.overlayController.arrOverlays;
            var overlayKeys = Object.keys(overlays);

            if (overlayKeys.length > 0) {
              for (var j = 0; j < overlayKeys.length; j++) {
                if (overlays[overlayKeys[j]].name.toLowerCase().indexOf(this.state.baselayerFilter.toLowerCase()) !== -1) {
                  returnIds.push(ids[i]);
                  break;
                }
              }
            }
          }
        }
      }

      return returnIds;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var arrBaselayers = this.props.baselayerController.arrBaselayers;
      var baseLayerIds = this.getFilteredBaselayerIds();
      var filter = '';

      if (this.props.mapController.data.baselayerswitcher.filter) {
        filter = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-baselayer-filter without-button"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          className: "c4g-baselayer-filter-field",
          type: "text",
          placeholder: "\uF002",
          onInput: function onInput() {
            _this2.filterBaselayers(_this2.value);
          }
        }));
      }

      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-baselayer-container").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-baselayer-container").removeClass("c4g-open").addClass("c4g-close");
      }

      var scope = this;
      var headline = this.props.mapController.data.baselayerswitcher.label ? this.props.mapController.data.baselayerswitcher.label : "Basiskarten";
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-baselayer-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-baselayer-header",
        headerClass: "c4g-baselayer-headline",
        header: headline,
        closeBtnClass: "c4g-baselayer-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), filter, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-baselayertree-content"
      }, /*#__PURE__*/_react["default"].createElement("ul", null, baseLayerIds.map(function (element, index) {
        var baselayer = arrBaselayers[element];
        var currentCls = scope.state.currentBaselayer === element ? "c4g-active" : "c4g-inactive";
        var preview = "";

        if (baselayer.preview_image) {
          preview = /*#__PURE__*/_react["default"].createElement("img", {
            className: "c4g-baselayer-preview",
            src: baselayer.preview_image,
            alt: ""
          });
        }

        var overlays = "";

        if (baselayer.overlayController.arrOverlays.length > 0 && scope.state.currentBaselayer === element) {
          overlays = /*#__PURE__*/_react["default"].createElement(_c4gOverlayControls.OverlayControls, {
            overlayController: baselayer.overlayController
          });
        }

        var nameNode = baselayer.name;

        if (preview) {
          nameNode = /*#__PURE__*/_react["default"].createElement("span", null, baselayer.name);
        }

        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index,
          className: preview ? "with-image" : "without-image"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          onMouseUp: function onMouseUp(event) {
            event.preventDefault();
            event.stopPropagation();
            scope.entryClick(element);
          },
          className: currentCls
        }, nameNode, preview), overlays);
      }))));
    }
  }, {
    key: "filterBaselayers",
    value: function filterBaselayers(fieldValue) {
      var filterValue = jQuery(".c4g-baselayer-filter-field").val();
      this.setState({
        baselayerFilter: filterValue
      });
    }
  }, {
    key: "entryClick",
    value: function entryClick(id) {
      this.props.baselayerController.showBaseLayer(id);
      this.props.changeActiveLayers(id);
      this.setState({
        currentBaselayer: id
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');

        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
    }
  }]);
  return BaselayerSwitcher;
}(_react.Component);

exports["default"] = BaselayerSwitcher;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-overlay-controls.jsx":
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-overlay-controls.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OverlayControls = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var OverlayControls = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(OverlayControls, _Component);

  var _super = _createSuper(OverlayControls);

  function OverlayControls(props) {
    (0, _classCallCheck2["default"])(this, OverlayControls);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(OverlayControls, [{
    key: "render",
    value: function render() {
      var scope = this;
      var overlays = this.props.overlayController.arrOverlays;

      var callback = function callback(idx) {
        var value = jQuery("#c4g-overlay-toggle_" + idx).val();
        scope.props.overlayController.arrOverlays[idx].changeOpacity(value);
      };

      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "c4g-overlays"
      }, overlays.map(function (element, index) {
        var entry = /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("a", null, /*#__PURE__*/_react["default"].createElement("span", null, element.name), /*#__PURE__*/_react["default"].createElement("input", {
          id: "c4g-overlay-toggle_" + index,
          className: "c4g-overlay-toggle",
          type: "range",
          onInput: function onInput() {
            return callback(index);
          },
          min: 0,
          max: 100,
          step: 10,
          defaultValue: element.opacity
        })));

        return entry;
      }));
    }
  }]);
  return OverlayControls;
}(_react.Component);

exports.OverlayControls = OverlayControls;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctYmFzZWxheWVyc3dpdGNoZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBSEEsSUFBTUEsUUFBUSxnQkFBR0MsaUJBQUEsQ0FBTUMsSUFBTixDQUFXO0VBQUEsT0FBTSx1S0FBTjtBQUFBLENBQVgsQ0FBakI7O0lBS3FCQzs7Ozs7RUFFbkIsMkJBQVlDLEtBQVosRUFBbUI7SUFBQTs7SUFBQTtJQUNqQiwwQkFBTUEsS0FBTjtJQUNBLElBQU1DLEtBQUssaURBQVgsQ0FGaUIsQ0FHakI7O0lBQ0EsSUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtJQUNBLElBQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWI7SUFDQSxNQUFLRSxhQUFMLEdBQXFCLElBQUFDLHdCQUFBLEVBQVlQLEtBQUssQ0FBQ1EsYUFBTixDQUFvQkMsSUFBaEMsQ0FBckI7SUFDQUosTUFBTSxDQUFDSyxLQUFQLEdBQWUsTUFBS0osYUFBTCxDQUFtQkssY0FBbEM7SUFDQVQsT0FBTyxDQUFDVSxTQUFSLEdBQW9CLG1EQUFwQjs7SUFDQSxJQUFJWixLQUFLLENBQUNhLElBQVYsRUFBZ0I7TUFDZFgsT0FBTyxDQUFDVSxTQUFSLElBQXFCLFVBQXJCO0lBQ0QsQ0FGRCxNQUVPO01BQ0xWLE9BQU8sQ0FBQ1UsU0FBUixJQUFxQixXQUFyQjtJQUNEOztJQUNELElBQUlaLEtBQUssQ0FBQ2MsUUFBVixFQUFvQjtNQUNsQlosT0FBTyxDQUFDVSxTQUFSLElBQXFCLGVBQXJCO0lBQ0Q7O0lBQ0RWLE9BQU8sQ0FBQ2EsV0FBUixDQUFvQlYsTUFBcEI7SUFDQVcsTUFBTSxDQUFDZCxPQUFELENBQU4sQ0FBZ0JlLEVBQWhCLENBQW1C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WUFBQSxPQUFNMEIsUUFBUSxDQUFDMUIsS0FBRCxDQUFkO1VBQUEsQ0FBakc7VUFDTyxHQUFHLEVBQUUsQ0FEWjtVQUNlLEdBQUcsRUFBRSxHQURwQjtVQUN5QixJQUFJLEVBQUUsRUFEL0I7VUFDbUMsWUFBWSxFQUFFakUsT0FBTyxDQUFDK0Y7UUFEekQsRUFGRixDQURVLENBQVo7O1FBT0EsT0FBT0QsS0FBUDtNQUNELENBVEEsQ0FESCxDQURGO0lBY0Q7OztFQTVCa0NMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWJhc2VsYXllcnN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctb3ZlcmxheS1jb250cm9scy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge092ZXJsYXlDb250cm9sc30gZnJvbSBcIi4vYzRnLW92ZXJsYXktY29udHJvbHMuanN4XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZWxheWVyU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9CQVNFTEFZRVI7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1iYXNlbGF5ZXItY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5iYXNlbGF5ZXJTd2l0Y2hlciA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIGxldCBiYXNlbGF5ZXJMb2FkZWQgPSBmYWxzZTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5iYXNlbGF5ZXJMb2FkZWQpIHtcbiAgICAgIGJhc2VsYXllckxvYWRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaG9va19iYXNlbGF5ZXJfbG9hZGVkID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQgfHwgW107XG4gICAgICBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lmhvb2tfYmFzZWxheWVyX2xvYWRlZC5wdXNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBzY29wZS5zZXRTdGF0ZSh7YmFzZWxheWVyTG9hZGVkOiB0cnVlLCBjdXJyZW50QmFzZWxheWVyOiBwcm9wcy5tYXBDb250cm9sbGVyLnN0YXRlLmFjdGl2ZUJhc2VsYXllcklkfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gc3RhdGUgdmFyaWFibGVzIChldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyBpbmZsdWVuY2Ugb24gdGhpcyBjb21wb25lbnQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1iYXNlbGF5ZXJzd2l0Y2hlci1wYW5lbFwiLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGJhc2VsYXllckxvYWRlZDogYmFzZWxheWVyTG9hZGVkLFxuICAgICAgY3VycmVudEJhc2VsYXllcjogMCxcbiAgICAgIGJhc2VsYXllckZpbHRlcjogXCJcIlxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMoKSB7XG4gICAgbGV0IGFyckJhc2VsYXllcnMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVycztcbiAgICBsZXQgaWRzID0gdGhpcy5wcm9wcy5iYXNlbGF5ZXJDb250cm9sbGVyLmJhc2VsYXllcklkcztcbiAgICBsZXQgcmV0dXJuSWRzID0gW107XG4gICAgaWYgKHRoaXMuc3RhdGUuYmFzZWxheWVyRmlsdGVyID09PSBcIlwiKSB7XG4gICAgICByZXR1cm5JZHMgPSBpZHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBiYXNlbGF5ZXIgPSBhcnJCYXNlbGF5ZXJzW2lkc1tpXV07XG4gICAgICAgIGlmIChiYXNlbGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS5iYXNlbGF5ZXJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuSWRzLnB1c2goaWRzW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiBhbiBvdmVybGF5IG1hdGNoZXNcbiAgICAgICAgICBsZXQgb3ZlcmxheXMgPSBiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXM7XG4gICAgICAgICAgbGV0IG92ZXJsYXlLZXlzID0gT2JqZWN0LmtleXMob3ZlcmxheXMpO1xuICAgICAgICAgIGlmIChvdmVybGF5S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG92ZXJsYXlLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChvdmVybGF5c1tvdmVybGF5S2V5c1tqXV0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS5iYXNlbGF5ZXJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuSWRzLnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuSWRzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhcnJCYXNlbGF5ZXJzID0gdGhpcy5wcm9wcy5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnM7XG4gICAgbGV0IGJhc2VMYXllcklkcyA9IHRoaXMuZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMoKTtcbiAgICBsZXQgZmlsdGVyID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmJhc2VsYXllcnN3aXRjaGVyLmZpbHRlcikge1xuICAgICAgZmlsdGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci1maWx0ZXIgd2l0aG91dC1idXR0b25cIn0+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci1maWx0ZXItZmllbGRcIn0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17XCJcXHVmMDAyXCJ9XG4gICAgICAgICAgICAgICBvbklucHV0PXsoKSA9PiB7dGhpcy5maWx0ZXJCYXNlbGF5ZXJzKHRoaXMudmFsdWUpfX0vPlxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctYmFzZWxheWVyLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLWJhc2VsYXllci1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBoZWFkbGluZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmJhc2VsYXllcnN3aXRjaGVyLmxhYmVsID8gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIubGFiZWwgOiBcIkJhc2lza2FydGVuXCI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXItd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWJhc2VsYXllci1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLWJhc2VsYXllci1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRsaW5lfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1iYXNlbGF5ZXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfS8+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIHtmaWx0ZXJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXJ0cmVlLWNvbnRlbnRcIn0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2Jhc2VMYXllcklkcy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgbGV0IGJhc2VsYXllciA9IGFyckJhc2VsYXllcnNbZWxlbWVudF07XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50Q2xzID0gc2NvcGUuc3RhdGUuY3VycmVudEJhc2VsYXllciA9PT0gZWxlbWVudCA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIjtcbiAgICAgICAgICAgICAgbGV0IHByZXZpZXcgPSBcIlwiO1xuICAgICAgICAgICAgICBpZiAoYmFzZWxheWVyLnByZXZpZXdfaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3ID0gPGltZyBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci1wcmV2aWV3XCJ9IHNyYz17YmFzZWxheWVyLnByZXZpZXdfaW1hZ2V9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgb3ZlcmxheXMgPSBcIlwiO1xuICAgICAgICAgICAgICBpZiAoYmFzZWxheWVyLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzLmxlbmd0aCA+IDAgJiYgc2NvcGUuc3RhdGUuY3VycmVudEJhc2VsYXllciA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG92ZXJsYXlzID0gPE92ZXJsYXlDb250cm9scyBvdmVybGF5Q29udHJvbGxlcj17YmFzZWxheWVyLm92ZXJsYXlDb250cm9sbGVyfS8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBuYW1lTm9kZSA9IGJhc2VsYXllci5uYW1lO1xuICAgICAgICAgICAgICBpZiAocHJldmlldykge1xuICAgICAgICAgICAgICAgIG5hbWVOb2RlID0gPHNwYW4+e2Jhc2VsYXllci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3ByZXZpZXcgPyBcIndpdGgtaW1hZ2VcIiA6IFwid2l0aG91dC1pbWFnZVwifT5cbiAgICAgICAgICAgICAgICA8YSBvbk1vdXNlVXA9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZW50cnlDbGljayhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNsYXNzTmFtZT17Y3VycmVudENsc30+e25hbWVOb2RlfVxuICAgICAgICAgICAgICAgIHtwcmV2aWV3fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB7b3ZlcmxheXN9XG4gICAgICAgICAgICAgIDwvbGk+KTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZmlsdGVyQmFzZWxheWVycyhmaWVsZFZhbHVlKSB7XG4gICAgbGV0IGZpbHRlclZhbHVlID0galF1ZXJ5KFwiLmM0Zy1iYXNlbGF5ZXItZmlsdGVyLWZpZWxkXCIpLnZhbCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2VsYXllckZpbHRlcjogZmlsdGVyVmFsdWV9KTtcbiAgfVxuXG4gIGVudHJ5Q2xpY2soaWQpIHtcbiAgICB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuc2hvd0Jhc2VMYXllcihpZCk7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VBY3RpdmVMYXllcnMoaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRCYXNlbGF5ZXI6IGlkfSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgT3ZlcmxheUNvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBvdmVybGF5cyA9IHRoaXMucHJvcHMub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXM7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbihpZHgpIHtcbiAgICAgIGxldCB2YWx1ZSA9IGpRdWVyeShcIiNjNGctb3ZlcmxheS10b2dnbGVfXCIgKyBpZHgpLnZhbCgpO1xuICAgICAgc2NvcGUucHJvcHMub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXNbaWR4XS5jaGFuZ2VPcGFjaXR5KHZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1vdmVybGF5c1wifT5cbiAgICAgICAge292ZXJsYXlzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBlbnRyeSA9IDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8c3Bhbj57ZWxlbWVudC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IGlkID17XCJjNGctb3ZlcmxheS10b2dnbGVfXCIrIGluZGV4fSBjbGFzc05hbWU9e1wiYzRnLW92ZXJsYXktdG9nZ2xlXCJ9IHR5cGU9XCJyYW5nZVwiIG9uSW5wdXQ9eygpID0+IGNhbGxiYWNrKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgIG1pbj17MH0gbWF4PXsxMDB9IHN0ZXA9ezEwfSBkZWZhdWx0VmFsdWU9e2VsZW1lbnQub3BhY2l0eX0vPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+O1xuICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cblxufSJdLCJuYW1lcyI6WyJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIkJhc2VsYXllclN3aXRjaGVyIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRpdGxlIiwiQ1RSTF9CQVNFTEFZRVIiLCJjbGFzc05hbWUiLCJvcGVuIiwiZXh0ZXJuYWwiLCJhcHBlbmRDaGlsZCIsImpRdWVyeSIsIm9uIiwiZXZlbnQiLCJzdGF0ZSIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImJhc2VsYXllclN3aXRjaGVyIiwibWFwIiwiYWRkQ29udHJvbCIsImJpbmQiLCJiYXNlbGF5ZXJMb2FkZWQiLCJwcm94eSIsImhvb2tfYmFzZWxheWVyX2xvYWRlZCIsInB1c2giLCJzZXRTdGF0ZSIsImN1cnJlbnRCYXNlbGF5ZXIiLCJhY3RpdmVCYXNlbGF5ZXJJZCIsImJhc2VsYXllckZpbHRlciIsImFyckJhc2VsYXllcnMiLCJiYXNlbGF5ZXJDb250cm9sbGVyIiwiaWRzIiwiYmFzZWxheWVySWRzIiwicmV0dXJuSWRzIiwiaSIsImxlbmd0aCIsImJhc2VsYXllciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJvdmVybGF5cyIsIm92ZXJsYXlDb250cm9sbGVyIiwiYXJyT3ZlcmxheXMiLCJvdmVybGF5S2V5cyIsIk9iamVjdCIsImtleXMiLCJqIiwiYmFzZUxheWVySWRzIiwiZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMiLCJmaWx0ZXIiLCJiYXNlbGF5ZXJzd2l0Y2hlciIsImZpbHRlckJhc2VsYXllcnMiLCJ2YWx1ZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoZWFkbGluZSIsImxhYmVsIiwiQ0xPU0UiLCJpbmRleCIsImN1cnJlbnRDbHMiLCJwcmV2aWV3IiwicHJldmlld19pbWFnZSIsIm5hbWVOb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlbnRyeUNsaWNrIiwiZmllbGRWYWx1ZSIsImZpbHRlclZhbHVlIiwidmFsIiwiaWQiLCJzaG93QmFzZUxheWVyIiwiY2hhbmdlQWN0aXZlTGF5ZXJzIiwic2V0T3BlbkNvbXBvbmVudCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSIsIkNvbXBvbmVudCIsIk92ZXJsYXlDb250cm9scyIsImNhbGxiYWNrIiwiaWR4IiwiY2hhbmdlT3BhY2l0eSIsImVudHJ5Iiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=