(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-baselayerswitcher_jsx"],{

/***/ "./Resources/public/js/components/c4g-baselayerswitcher.jsx":
/*!******************************************************************!*\
  !*** ./Resources/public/js/components/c4g-baselayerswitcher.jsx ***!
  \******************************************************************/
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

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _c4gOverlayControls = __webpack_require__(/*! ./c4g-overlay-controls.jsx */ "./Resources/public/js/components/c4g-overlay-controls.jsx");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx"));
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

exports.default = BaselayerSwitcher;

/***/ }),

/***/ "./Resources/public/js/components/c4g-overlay-controls.jsx":
/*!*****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-overlay-controls.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1iYXNlbGF5ZXJzd2l0Y2hlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctb3ZlcmxheS1jb250cm9scy5qc3giXSwibmFtZXMiOlsiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJCYXNlbGF5ZXJTd2l0Y2hlciIsInByb3BzIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwidGl0bGUiLCJDVFJMX0JBU0VMQVlFUiIsImNsYXNzTmFtZSIsIm9wZW4iLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwialF1ZXJ5Iiwib24iLCJldmVudCIsInN0YXRlIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiYmFzZWxheWVyU3dpdGNoZXIiLCJtYXAiLCJhZGRDb250cm9sIiwiYmluZCIsImJhc2VsYXllckxvYWRlZCIsInByb3h5IiwiaG9va19iYXNlbGF5ZXJfbG9hZGVkIiwicHVzaCIsInNldFN0YXRlIiwiY3VycmVudEJhc2VsYXllciIsImFjdGl2ZUJhc2VsYXllcklkIiwiYmFzZWxheWVyRmlsdGVyIiwiYXJyQmFzZWxheWVycyIsImJhc2VsYXllckNvbnRyb2xsZXIiLCJpZHMiLCJiYXNlbGF5ZXJJZHMiLCJyZXR1cm5JZHMiLCJpIiwibGVuZ3RoIiwiYmFzZWxheWVyIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm92ZXJsYXlzIiwib3ZlcmxheUNvbnRyb2xsZXIiLCJhcnJPdmVybGF5cyIsIm92ZXJsYXlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImoiLCJiYXNlTGF5ZXJJZHMiLCJnZXRGaWx0ZXJlZEJhc2VsYXllcklkcyIsImZpbHRlciIsImJhc2VsYXllcnN3aXRjaGVyIiwiZmlsdGVyQmFzZWxheWVycyIsInZhbHVlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhlYWRsaW5lIiwibGFiZWwiLCJDTE9TRSIsImluZGV4IiwiY3VycmVudENscyIsInByZXZpZXciLCJwcmV2aWV3X2ltYWdlIiwibmFtZU5vZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImVudHJ5Q2xpY2siLCJmaWVsZFZhbHVlIiwiZmlsdGVyVmFsdWUiLCJ2YWwiLCJpZCIsInNob3dCYXNlTGF5ZXIiLCJjaGFuZ2VBY3RpdmVMYXllcnMiLCJzZXRPcGVuQ29tcG9uZW50IiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJzdG9yZVZhbHVlIiwiQ29tcG9uZW50IiwiT3ZlcmxheUNvbnRyb2xzIiwiY2FsbGJhY2siLCJpZHgiLCJjaGFuZ2VPcGFjaXR5IiwiZW50cnkiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBSEEsSUFBTUEsUUFBUSxnQkFBR0Msa0JBQU1DLElBQU4sQ0FBVztBQUFBLFNBQU0sbUtBQU47QUFBQSxDQUFYLENBQWpCOztJQUtxQkMsaUI7Ozs7O0FBRW5CLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxRQUFNQyxLQUFLLGlEQUFYLENBRmlCLENBR2pCOztBQUNBLFFBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxRQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsVUFBS0UsYUFBTCxH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akMsS0FBSyxHQUFHN0MsTUFBTSxDQUFDLHlCQUF5QjhFLEdBQTFCLENBQU4sQ0FBcUNqQixHQUFyQyxFQUFaO0FBQ0EzRSxhQUFLLENBQUNELEtBQU4sQ0FBWWlELGlCQUFaLENBQThCQyxXQUE5QixDQUEwQzJDLEdBQTFDLEVBQStDQyxhQUEvQyxDQUE2RGxDLEtBQTdEO0FBQ0QsT0FIRDs7QUFJQSwwQkFDRTtBQUFJLGlCQUFTLEVBQUU7QUFBZixTQUNHWixRQUFRLENBQUN0QixHQUFULENBQWEsVUFBU3hCLE9BQVQsRUFBa0JnRSxLQUFsQixFQUF5QjtBQUNyQyxZQUFJNkIsS0FBSyxnQkFBRztBQUFJLGFBQUcsRUFBRTdCO0FBQVQsd0JBQ1Ysd0RBQ0UsOENBQU9oRSxPQUFPLENBQUMyQyxJQUFmLENBREYsZUFFRTtBQUFPLFlBQUUsRUFBRyx3QkFBdUJxQixLQUFuQztBQUEwQyxtQkFBUyxFQUFFLG9CQUFyRDtBQUEyRSxjQUFJLEVBQUMsT0FBaEY7QUFBd0YsaUJBQU8sRUFBRTtBQUFBLG1CQUFNMEIsUUFBUSxDQUFDMUIsS0FBRCxDQUFkO0FBQUEsV0FBakc7QUFDTyxhQUFHLEVBQUUsQ0FEWjtBQUNlLGFBQUcsRUFBRSxHQURwQjtBQUN5QixjQUFJLEVBQUUsRUFEL0I7QUFDbUMsc0JBQVksRUFBRWhFLE9BQU8sQ0FBQzhGO0FBRHpELFVBRkYsQ0FEVSxDQUFaOztBQU9BLGVBQU9ELEtBQVA7QUFDRCxPQVRBLENBREgsQ0FERjtBQWNEOzs7RUE1QmtDTCxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLWJhc2VsYXllcnN3aXRjaGVyX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7T3ZlcmxheUNvbnRyb2xzfSBmcm9tIFwiLi9jNGctb3ZlcmxheS1jb250cm9scy5qc3hcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlbGF5ZXJTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0JBU0VMQVlFUjtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLWJhc2VsYXllci1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmJhc2VsYXllclN3aXRjaGVyID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgbGV0IGJhc2VsYXllckxvYWRlZCA9IGZhbHNlO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmJhc2VsYXllckxvYWRlZCkge1xuICAgICAgYmFzZWxheWVyTG9hZGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lmhvb2tfYmFzZWxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICAgIHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaG9va19iYXNlbGF5ZXJfbG9hZGVkLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjb3BlLnNldFN0YXRlKHtiYXNlbGF5ZXJMb2FkZWQ6IHRydWUsIGN1cnJlbnRCYXNlbGF5ZXI6IHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuYWN0aXZlQmFzZWxheWVySWR9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBzdGF0ZSB2YXJpYWJsZXMgKGV2ZXJ5IHByb3BlcnR5IHRoYXQgaGFzIGluZmx1ZW5jZSBvbiB0aGlzIGNvbXBvbmVudClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWJhc2VsYXllcnN3aXRjaGVyLXBhbmVsXCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgYmFzZWxheWVyTG9hZGVkOiBiYXNlbGF5ZXJMb2FkZWQsXG4gICAgICBjdXJyZW50QmFzZWxheWVyOiAwLFxuICAgICAgYmFzZWxheWVyRmlsdGVyOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBnZXRGaWx0ZXJlZEJhc2VsYXllcklkcygpIHtcbiAgICBsZXQgYXJyQmFzZWxheWVycyA9IHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzO1xuICAgIGxldCBpZHMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYmFzZWxheWVySWRzO1xuICAgIGxldCByZXR1cm5JZHMgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5iYXNlbGF5ZXJGaWx0ZXIgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybklkcyA9IGlkcztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJhc2VsYXllciA9IGFyckJhc2VsYXllcnNbaWRzW2ldXTtcbiAgICAgICAgaWYgKGJhc2VsYXllci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm5JZHMucHVzaChpZHNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIGFuIG92ZXJsYXkgbWF0Y2hlc1xuICAgICAgICAgIGxldCBvdmVybGF5cyA9IGJhc2VsYXllci5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cztcbiAgICAgICAgICBsZXQgb3ZlcmxheUtleXMgPSBPYmplY3Qua2V5cyhvdmVybGF5cyk7XG4gICAgICAgICAgaWYgKG92ZXJsYXlLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3ZlcmxheUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKG92ZXJsYXlzW292ZXJsYXlLZXlzW2pdXS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5JZHMucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5JZHM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFyckJhc2VsYXllcnMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVycztcbiAgICBsZXQgYmFzZUxheWVySWRzID0gdGhpcy5nZXRGaWx0ZXJlZEJhc2VsYXllcklkcygpO1xuICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIuZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLWZpbHRlciB3aXRob3V0LWJ1dHRvblwifT5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLWZpbHRlci1maWVsZFwifSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtcIlxcdWYwMDJcIn1cbiAgICAgICAgICAgICAgIG9uSW5wdXQ9eygpID0+IHt0aGlzLmZpbHRlckJhc2VsYXllcnModGhpcy52YWx1ZSl9fS8+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1iYXNlbGF5ZXItY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctYmFzZWxheWVyLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGhlYWRsaW5lID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIubGFiZWwgPyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5iYXNlbGF5ZXJzd2l0Y2hlci5sYWJlbCA6IFwiQmFzaXNrYXJ0ZW5cIjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctYmFzZWxheWVyLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctYmFzZWxheWVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGxpbmV9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLWJhc2VsYXllci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9Lz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAge2ZpbHRlcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllcnRyZWUtY29udGVudFwifT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7YmFzZUxheWVySWRzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICBsZXQgYmFzZWxheWVyID0gYXJyQmFzZWxheWVyc1tlbGVtZW50XTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDbHMgPSBzY29wZS5zdGF0ZS5jdXJyZW50QmFzZWxheWVyID09PSBlbGVtZW50ID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiO1xuICAgICAgICAgICAgICBsZXQgcHJldmlldyA9IFwiXCI7XG4gICAgICAgICAgICAgIGlmIChiYXNlbGF5ZXIucHJldmlld19pbWFnZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXcgPSA8aW1nIGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLXByZXZpZXdcIn0gc3JjPXtiYXNlbGF5ZXIucHJldmlld19pbWFnZX0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBvdmVybGF5cyA9IFwiXCI7XG4gICAgICAgICAgICAgIGlmIChiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXMubGVuZ3RoID4gMCAmJiBzY29wZS5zdGF0ZS5jdXJyZW50QmFzZWxheWVyID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheXMgPSA8T3ZlcmxheUNvbnRyb2xzIG92ZXJsYXlDb250cm9sbGVyPXtiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXJ9Lz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IG5hbWVOb2RlID0gYmFzZWxheWVyLm5hbWU7XG4gICAgICAgICAgICAgIGlmIChwcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgbmFtZU5vZGUgPSA8c3Bhbj57YmFzZWxheWVyLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17cHJldmlldyA/IFwid2l0aC1pbWFnZVwiIDogXCJ3aXRob3V0LWltYWdlXCJ9PlxuICAgICAgICAgICAgICAgIDxhIG9uTW91c2VVcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5lbnRyeUNsaWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2xhc3NOYW1lPXtjdXJyZW50Q2xzfT57bmFtZU5vZGV9XG4gICAgICAgICAgICAgICAge3ByZXZpZXd9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIHtvdmVybGF5c31cbiAgICAgICAgICAgICAgPC9saT4pO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBmaWx0ZXJCYXNlbGF5ZXJzKGZpZWxkVmFsdWUpIHtcbiAgICBsZXQgZmlsdGVyVmFsdWUgPSBqUXVlcnkoXCIuYzRnLWJhc2VsYXllci1maWx0ZXItZmllbGRcIikudmFsKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YmFzZWxheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZW50cnlDbGljayhpZCkge1xuICAgIHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5zaG93QmFzZUxheWVyKGlkKTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUFjdGl2ZUxheWVycyhpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudEJhc2VsYXllcjogaWR9KTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG92ZXJsYXlzID0gdGhpcy5wcm9wcy5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cztcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgbGV0IHZhbHVlID0galF1ZXJ5KFwiI2M0Zy1vdmVybGF5LXRvZ2dsZV9cIiArIGlkeCkudmFsKCk7XG4gICAgICBzY29wZS5wcm9wcy5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1tpZHhdLmNoYW5nZU9wYWNpdHkodmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLW92ZXJsYXlzXCJ9PlxuICAgICAgICB7b3ZlcmxheXMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IGVudHJ5ID0gPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxzcGFuPntlbGVtZW50Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQgPXtcImM0Zy1vdmVybGF5LXRvZ2dsZV9cIisgaW5kZXh9IGNsYXNzTmFtZT17XCJjNGctb3ZlcmxheS10b2dnbGVcIn0gdHlwZT1cInJhbmdlXCIgb25JbnB1dD17KCkgPT4gY2FsbGJhY2soaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgbWluPXswfSBtYXg9ezEwMH0gc3RlcD17MTB9IGRlZmF1bHRWYWx1ZT17ZWxlbWVudC5vcGFjaXR5fS8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT47XG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==