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
          currentBaselayer: props.mapController.proxy.activeBaselayerId
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctYmFzZWxheWVyc3dpdGNoZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBSEEsSUFBTUEsUUFBUSxnQkFBR0Msa0JBQU1DLElBQU4sQ0FBVztBQUFBLFNBQU0sdUtBQU47QUFBQSxDQUFYLENBQWpCOztJQUtxQkM7Ozs7O0FBRW5CLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxRQUFNQyxLQUFLLGlEQUFYLENBRmlCLENBR2pCOztBQUNBLFFBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxRQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQiw4QkFBWU4sS0FBSyxDQUFDTyxhQUFOLENBQW9CQyxJQUFoQyxDQUFyQjtBQUNBSCxJQUFBQSxNQUFNLENBQUNJLEtBQVAsR0FBZSxNQUFLSCxhQUFMLENBQW1CSSxjQUFsQztBQUNBUixJQUFBQSxPQUFPLENBQUNTLFNBQVIsR0FBb0IsbURBQXBCOztBQUNBLFFBQUlYLEtBQUssQ0FBQ1ksSUFBVixFQUFnQjtBQUNkVixNQUFBQSxPQUFPLENBQUNTLFNBQVIsSUFBcUIsVUFBckI7QUFDRCxLQUZELE1BRU87QUFDTFQsTUFBQUEsT0FBTyxDQUFDUyxTQUFSLElBQXFCLFdBQXJCO0FBQ0Q7O0FBQ0QsUUFBSVgsS0FBSyxDQUFDYSxRQUFWLEVBQW9CO0FBQ2xCWCxNQUFBQSxPQUFPLENBQUNTLFNBQVIsSUFBcUIsZUFBckI7QUFDRDs7QUFDRFQsSUFBQUEsT0FBTyxDQUFDWSxXQUFSLENBQW9CVCxNQUFwQjtBQUNBVSxJQUFBQSxNQUFNLENBQUNiLE9B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QUFTLEVBQUU7QUFBZixTQUNHWixRQUFRLENBQUN0QixHQUFULENBQWEsVUFBU3hCLE9BQVQsRUFBa0JnRSxLQUFsQixFQUF5QjtBQUNyQyxZQUFJNkIsS0FBSyxnQkFBRztBQUFJLGFBQUcsRUFBRTdCO0FBQVQsd0JBQ1Ysd0RBQ0UsOENBQU9oRSxPQUFPLENBQUMyQyxJQUFmLENBREYsZUFFRTtBQUFPLFlBQUUsRUFBRyx3QkFBdUJxQixLQUFuQztBQUEwQyxtQkFBUyxFQUFFLG9CQUFyRDtBQUEyRSxjQUFJLEVBQUMsT0FBaEY7QUFBd0YsaUJBQU8sRUFBRTtBQUFBLG1CQUFNMEIsUUFBUSxDQUFDMUIsS0FBRCxDQUFkO0FBQUEsV0FBakc7QUFDTyxhQUFHLEVBQUUsQ0FEWjtBQUNlLGFBQUcsRUFBRSxHQURwQjtBQUN5QixjQUFJLEVBQUUsRUFEL0I7QUFDbUMsc0JBQVksRUFBRWhFLE9BQU8sQ0FBQzhGO0FBRHpELFVBRkYsQ0FEVSxDQUFaOztBQU9BLGVBQU9ELEtBQVA7QUFDRCxPQVRBLENBREgsQ0FERjtBQWNEOzs7RUE1QmtDTCIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1iYXNlbGF5ZXJzd2l0Y2hlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJsYXktY29udHJvbHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtPdmVybGF5Q29udHJvbHN9IGZyb20gXCIuL2M0Zy1vdmVybGF5LWNvbnRyb2xzLmpzeFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VsYXllclN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfQkFTRUxBWUVSO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctYmFzZWxheWVyLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuYmFzZWxheWVyU3dpdGNoZXIgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICBsZXQgYmFzZWxheWVyTG9hZGVkID0gZmFsc2U7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuYmFzZWxheWVyTG9hZGVkKSB7XG4gICAgICBiYXNlbGF5ZXJMb2FkZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lmhvb2tfYmFzZWxheWVyX2xvYWRlZCA9IHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaG9va19iYXNlbGF5ZXJfbG9hZGVkIHx8IFtdO1xuICAgICAgcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQucHVzaChmdW5jdGlvbigpIHtcbiAgICAgICAgc2NvcGUuc2V0U3RhdGUoe2Jhc2VsYXllckxvYWRlZDogdHJ1ZSwgY3VycmVudEJhc2VsYXllcjogcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5hY3RpdmVCYXNlbGF5ZXJJZH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHN0YXRlIHZhcmlhYmxlcyAoZXZlcnkgcHJvcGVydHkgdGhhdCBoYXMgaW5mbHVlbmNlIG9uIHRoaXMgY29tcG9uZW50KVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctYmFzZWxheWVyc3dpdGNoZXItcGFuZWxcIixcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICBiYXNlbGF5ZXJMb2FkZWQ6IGJhc2VsYXllckxvYWRlZCxcbiAgICAgIGN1cnJlbnRCYXNlbGF5ZXI6IDAsXG4gICAgICBiYXNlbGF5ZXJGaWx0ZXI6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGdldEZpbHRlcmVkQmFzZWxheWVySWRzKCkge1xuICAgIGxldCBhcnJCYXNlbGF5ZXJzID0gdGhpcy5wcm9wcy5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnM7XG4gICAgbGV0IGlkcyA9IHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5iYXNlbGF5ZXJJZHM7XG4gICAgbGV0IHJldHVybklkcyA9IFtdO1xuICAgIGlmICh0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlciA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuSWRzID0gaWRzO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYmFzZWxheWVyID0gYXJyQmFzZWxheWVyc1tpZHNbaV1dO1xuICAgICAgICBpZiAoYmFzZWxheWVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc3RhdGUuYmFzZWxheWVyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybklkcy5wdXNoKGlkc1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgYW4gb3ZlcmxheSBtYXRjaGVzXG4gICAgICAgICAgbGV0IG92ZXJsYXlzID0gYmFzZWxheWVyLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzO1xuICAgICAgICAgIGxldCBvdmVybGF5S2V5cyA9IE9iamVjdC5rZXlzKG92ZXJsYXlzKTtcbiAgICAgICAgICBpZiAob3ZlcmxheUtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvdmVybGF5S2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBpZiAob3ZlcmxheXNbb3ZlcmxheUtleXNbal1dLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc3RhdGUuYmFzZWxheWVyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybklkcy5wdXNoKGlkc1tpXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldHVybklkcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYXJyQmFzZWxheWVycyA9IHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzO1xuICAgIGxldCBiYXNlTGF5ZXJJZHMgPSB0aGlzLmdldEZpbHRlcmVkQmFzZWxheWVySWRzKCk7XG4gICAgbGV0IGZpbHRlciA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5iYXNlbGF5ZXJzd2l0Y2hlci5maWx0ZXIpIHtcbiAgICAgIGZpbHRlciA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXItZmlsdGVyIHdpdGhvdXQtYnV0dG9uXCJ9PlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXItZmlsdGVyLWZpZWxkXCJ9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e1wiXFx1ZjAwMlwifVxuICAgICAgICAgICAgICAgb25JbnB1dD17KCkgPT4ge3RoaXMuZmlsdGVyQmFzZWxheWVycyh0aGlzLnZhbHVlKX19Lz5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLWJhc2VsYXllci1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1iYXNlbGF5ZXItY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgaGVhZGxpbmUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5iYXNlbGF5ZXJzd2l0Y2hlci5sYWJlbCA/IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmJhc2VsYXllcnN3aXRjaGVyLmxhYmVsIDogXCJCYXNpc2thcnRlblwiO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLXdyYXBwZXJcIn0+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1iYXNlbGF5ZXItaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1iYXNlbGF5ZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtoZWFkbGluZX0gY2xvc2VCdG5DbGFzcz17XCJjNGctYmFzZWxheWVyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0vPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICB7ZmlsdGVyfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVydHJlZS1jb250ZW50XCJ9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtiYXNlTGF5ZXJJZHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgIGxldCBiYXNlbGF5ZXIgPSBhcnJCYXNlbGF5ZXJzW2VsZW1lbnRdO1xuICAgICAgICAgICAgICBsZXQgY3VycmVudENscyA9IHNjb3BlLnN0YXRlLmN1cnJlbnRCYXNlbGF5ZXIgPT09IGVsZW1lbnQgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCI7XG4gICAgICAgICAgICAgIGxldCBwcmV2aWV3ID0gXCJcIjtcbiAgICAgICAgICAgICAgaWYgKGJhc2VsYXllci5wcmV2aWV3X2ltYWdlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlldyA9IDxpbWcgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXItcHJldmlld1wifSBzcmM9e2Jhc2VsYXllci5wcmV2aWV3X2ltYWdlfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IG92ZXJsYXlzID0gXCJcIjtcbiAgICAgICAgICAgICAgaWYgKGJhc2VsYXllci5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cy5sZW5ndGggPiAwICYmIHNjb3BlLnN0YXRlLmN1cnJlbnRCYXNlbGF5ZXIgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5cyA9IDxPdmVybGF5Q29udHJvbHMgb3ZlcmxheUNvbnRyb2xsZXI9e2Jhc2VsYXllci5vdmVybGF5Q29udHJvbGxlcn0vPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgbmFtZU5vZGUgPSBiYXNlbGF5ZXIubmFtZTtcbiAgICAgICAgICAgICAgaWYgKHByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICBuYW1lTm9kZSA9IDxzcGFuPntiYXNlbGF5ZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuICg8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtwcmV2aWV3ID8gXCJ3aXRoLWltYWdlXCIgOiBcIndpdGhvdXQtaW1hZ2VcIn0+XG4gICAgICAgICAgICAgICAgPGEgb25Nb3VzZVVwPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmVudHJ5Q2xpY2soZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjbGFzc05hbWU9e2N1cnJlbnRDbHN9PntuYW1lTm9kZX1cbiAgICAgICAgICAgICAgICB7cHJldmlld31cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAge292ZXJsYXlzfVxuICAgICAgICAgICAgICA8L2xpPik7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGZpbHRlckJhc2VsYXllcnMoZmllbGRWYWx1ZSkge1xuICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGpRdWVyeShcIi5jNGctYmFzZWxheWVyLWZpbHRlci1maWVsZFwiKS52YWwoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtiYXNlbGF5ZXJGaWx0ZXI6IGZpbHRlclZhbHVlfSk7XG4gIH1cblxuICBlbnRyeUNsaWNrKGlkKSB7XG4gICAgdGhpcy5wcm9wcy5iYXNlbGF5ZXJDb250cm9sbGVyLnNob3dCYXNlTGF5ZXIoaWQpO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQWN0aXZlTGF5ZXJzKGlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50QmFzZWxheWVyOiBpZH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3Qgb3ZlcmxheXMgPSB0aGlzLnByb3BzLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24oaWR4KSB7XG4gICAgICBsZXQgdmFsdWUgPSBqUXVlcnkoXCIjYzRnLW92ZXJsYXktdG9nZ2xlX1wiICsgaWR4KS52YWwoKTtcbiAgICAgIHNjb3BlLnByb3BzLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzW2lkeF0uY2hhbmdlT3BhY2l0eSh2YWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctb3ZlcmxheXNcIn0+XG4gICAgICAgIHtvdmVybGF5cy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICBsZXQgZW50cnkgPSA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPHNwYW4+e2VsZW1lbnQubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZCA9e1wiYzRnLW92ZXJsYXktdG9nZ2xlX1wiKyBpbmRleH0gY2xhc3NOYW1lPXtcImM0Zy1vdmVybGF5LXRvZ2dsZVwifSB0eXBlPVwicmFuZ2VcIiBvbklucHV0PXsoKSA9PiBjYWxsYmFjayhpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICBtaW49ezB9IG1heD17MTAwfSBzdGVwPXsxMH0gZGVmYXVsdFZhbHVlPXtlbGVtZW50Lm9wYWNpdHl9Lz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPjtcbiAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJCYXNlbGF5ZXJTd2l0Y2hlciIsInByb3BzIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwidGl0bGUiLCJDVFJMX0JBU0VMQVlFUiIsImNsYXNzTmFtZSIsIm9wZW4iLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwialF1ZXJ5Iiwib24iLCJldmVudCIsInN0YXRlIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiYmFzZWxheWVyU3dpdGNoZXIiLCJtYXAiLCJhZGRDb250cm9sIiwiYmluZCIsImJhc2VsYXllckxvYWRlZCIsInByb3h5IiwiaG9va19iYXNlbGF5ZXJfbG9hZGVkIiwicHVzaCIsInNldFN0YXRlIiwiY3VycmVudEJhc2VsYXllciIsImFjdGl2ZUJhc2VsYXllcklkIiwiYmFzZWxheWVyRmlsdGVyIiwiYXJyQmFzZWxheWVycyIsImJhc2VsYXllckNvbnRyb2xsZXIiLCJpZHMiLCJiYXNlbGF5ZXJJZHMiLCJyZXR1cm5JZHMiLCJpIiwibGVuZ3RoIiwiYmFzZWxheWVyIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm92ZXJsYXlzIiwib3ZlcmxheUNvbnRyb2xsZXIiLCJhcnJPdmVybGF5cyIsIm92ZXJsYXlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImoiLCJiYXNlTGF5ZXJJZHMiLCJnZXRGaWx0ZXJlZEJhc2VsYXllcklkcyIsImZpbHRlciIsImJhc2VsYXllcnN3aXRjaGVyIiwiZmlsdGVyQmFzZWxheWVycyIsInZhbHVlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhlYWRsaW5lIiwibGFiZWwiLCJDTE9TRSIsImluZGV4IiwiY3VycmVudENscyIsInByZXZpZXciLCJwcmV2aWV3X2ltYWdlIiwibmFtZU5vZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImVudHJ5Q2xpY2siLCJmaWVsZFZhbHVlIiwiZmlsdGVyVmFsdWUiLCJ2YWwiLCJpZCIsInNob3dCYXNlTGF5ZXIiLCJjaGFuZ2VBY3RpdmVMYXllcnMiLCJzZXRPcGVuQ29tcG9uZW50IiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJzdG9yZVZhbHVlIiwiQ29tcG9uZW50IiwiT3ZlcmxheUNvbnRyb2xzIiwiY2FsbGJhY2siLCJpZHgiLCJjaGFuZ2VPcGFjaXR5IiwiZW50cnkiLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==