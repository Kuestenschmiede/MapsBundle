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

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _c4gOverlayControls = __webpack_require__(/*! ./c4g-overlay-controls.jsx */ "./Resources/public/js/components/c4g-overlay-controls.jsx");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
      }, /*#__PURE__*/_react["default"].createElement(_c4gTitlebar.Titlebar, {
        wrapperClass: "c4g-baselayer-header",
        headerClass: "c4g-baselayer-headline",
        header: headline,
        closeBtnClass: "c4g-baselayer-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      }), filter, /*#__PURE__*/_react["default"].createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1iYXNlbGF5ZXJzd2l0Y2hlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctb3ZlcmxheS1jb250cm9scy5qc3giXSwibmFtZXMiOlsiQmFzZWxheWVyU3dpdGNoZXIiLCJwcm9wcyIsInNjb3BlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRpdGxlIiwiQ1RSTF9CQVNFTEFZRVIiLCJjbGFzc05hbWUiLCJvcGVuIiwiZXh0ZXJuYWwiLCJhcHBlbmRDaGlsZCIsImpRdWVyeSIsIm9uIiwiZXZlbnQiLCJzdGF0ZSIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImJhc2VsYXllclN3aXRjaGVyIiwibWFwIiwiYWRkQ29udHJvbCIsImJpbmQiLCJiYXNlbGF5ZXJMb2FkZWQiLCJwcm94eSIsImhvb2tfYmFzZWxheWVyX2xvYWRlZCIsInB1c2giLCJzZXRTdGF0ZSIsImN1cnJlbnRCYXNlbGF5ZXIiLCJhY3RpdmVCYXNlbGF5ZXJJZCIsImJhc2VsYXllckZpbHRlciIsImFyckJhc2VsYXllcnMiLCJiYXNlbGF5ZXJDb250cm9sbGVyIiwiaWRzIiwiYmFzZWxheWVySWRzIiwicmV0dXJuSWRzIiwiaSIsImxlbmd0aCIsImJhc2VsYXllciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJvdmVybGF5cyIsIm92ZXJsYXlDb250cm9sbGVyIiwiYXJyT3ZlcmxheXMiLCJvdmVybGF5S2V5cyIsIk9iamVjdCIsImtleXMiLCJqIiwiYmFzZUxheWVySWRzIiwiZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMiLCJmaWx0ZXIiLCJiYXNlbGF5ZXJzd2l0Y2hlciIsImZpbHRlckJhc2VsYXllcnMiLCJ2YWx1ZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoZWFkbGluZSIsImxhYmVsIiwiQ0xPU0UiLCJpbmRleCIsImN1cnJlbnRDbHMiLCJwcmV2aWV3IiwicHJldmlld19pbWFnZSIsIm5hbWVOb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlbnRyeUNsaWNrIiwiZmllbGRWYWx1ZSIsImZpbHRlclZhbHVlIiwidmFsIiwiaWQiLCJzaG93QmFzZUxheWVyIiwiY2hhbmdlQWN0aXZlTGF5ZXJzIiwic2V0T3BlbkNvbXBvbmVudCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSIsIkNvbXBvbmVudCIsIk92ZXJsYXlDb250cm9scyIsImNhbGxiYWNrIiwiaWR4IiwiY2hhbmdlT3BhY2l0eSIsImVudHJ5Iiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7O0FBRW5CLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxRQUFNQyxLQUFLLGlEQUFYLENBRmlCLENBR2pCOztBQUNBLFFBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxRQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQiw4QkFBWU4sS0FBSyxDQUFDTyxhQUFOLENBQW9CQyxJQUFoQyxDQUFyQjtBQUNBSCxVQUFNLENBQUNJLEtBQVAsR0FBZSxNQUFLSCxhQUFMLENBQW1CSSxjQUFsQztBQUNBUixXQUFPLENBQUNTLFNBQVIsR0FBb0IsbURBQXBCOztBQUNBLFFBQUlYLEtBQUssQ0FBQ1ksSUFBVixFQUFnQjtBQUNkVixhQUFPLENBQUNTLFNBQVIsSUFBcUIsVUFBckI7QUFDRCxLQUZELE1BRU87QUFDTFQsYUFBTyxDQUFDUyxTQUFSLElBQXFCLFdBQXJCO0FBQ0Q7O0FBQ0QsUUFBSVgsS0FBSyxDQUFDYSxRQUFWLEVBQW9CO0FBQ2xCWCxhQUFPLENBQUNTLFNBQVIsSUFBcUIsZUFBckI7QUFDRDs7QUFDRFQsV0FBTyxDQUFDWSxXQUFSLENBQW9CVCxNQUFwQjtBQUNBVSxVQUFNLENBQUNiLE9BQUQsQ0FBTixDQUFnQmMsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsVUFBVUMsS0FBVixFQUFpQjtBQUMzQyxVQUFJaEIsS0FBSyxDQUFDaUIsS0FBTixDQUFZTixJQUFoQixFQUFzQjtBQUNwQlgsYUFBSyxDQUFDa0IsS0FBTjtBQUNELE9BRkQsTUFFTztBQUNMbEIsYUFBSyxDQUFDVyxJQUFOO0FBQ0Q7QUFDRixLQU5EO0FBT0EsUUFBSUwsYUFBYSxHQUFHUCxLQUFLLENBQUNPLGFBQTFCO0FBQ0EsUUFBSWEsT0FBTyxHQUFHLElBQUlDLGdCQUFKLENBQVk7QUFBQ25CLGFBQU8sRUFBRUEsT0FBVjtBQUFtQm9CLFlBQU0sRUFBRXRCLEtBQUssQ0FBQ3NCO0FBQWpDLEtBQVosQ0FBZDtBQUNBZixpQkFBYSxDQUFDZ0IsWUFBZCxDQUEyQkMsUUFBM0IsQ0FBb0NDLGlCQUFwQyxHQUF3REwsT0FBeEQ7QUFDQWIsaUJBQWEsQ0FBQ21CLEdBQWQsQ0FBa0JDLFVBQWxCLENBQTZCUCxPQUE3QjtBQUNBLFVBQUtSLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVnQixJQUFWLGdEQUFaO0FBQ0EsVUFBS1QsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV1MsSUFBWCxnREFBYjtBQUNBLFFBQUlDLGVBQWUsR0FBRyxLQUF0Qjs7QUFDQSxRQUFJN0IsS0FBSyxDQUFDTyxhQUFOLENBQW9CdUIsS0FBcEIsQ0FBMEJELGVBQTlCLEVBQStDO0FBQzdDQSxxQkFBZSxHQUFHLElBQWxCO0FBQ0QsS0FGRCxNQUVPO0FBQ0w3QixXQUFLLENBQUNPLGFBQU4sQ0FBb0J1QixLQUFwQixDQUEwQkMscUJBQTFCLEdBQWtEL0IsS0FBSyxDQUFDTyxhQUFOLENBQW9CdUIsS0FBcEIsQ0FBMEJDLHFCQUExQixJQUFtRCxFQUFyRztBQUNBL0IsV0FBSyxDQUFDTyxhQUFOLENBQW9CdUIsS0FBcEIsQ0FBMEJDLHFCQUExQixDQUFnREMsSUFBaEQsQ0FBcUQsWUFBVztBQUM5RC9CLGFBQUssQ0FBQ2dDLFFBQU4sQ0FBZTtBQUFDSix5QkFBZSxFQUFFLElBQWxCO0FBQXdCSywwQkFBZ0IsRUFBRWxDLEtBQUssQ0FBQ08sYUFBTixDQUFvQnVCLEtBQXBCLENBQTBCSztBQUFwRSxTQUFmO0FBQ0QsT0FGRDtBQUdELEtBdkNnQixDQXdDakI7OztBQUNBLFVBQUtqQixLQUFMLEdBQWE7QUFDWE4sVUFBSSxFQUFFWixLQUFLLENBQUNZLElBQU4sSUFBYyxLQURUO0FBRVhELGVBQVMsRUFBRVgsS0FBSyxDQUFDVyxTQUFOLElBQW1CLDZCQUZuQjtBQUdYUyxhQUFPLEVBQUVBLE9BSEU7QUFJWFMscUJBQWUsRUFBRUEsZUFKTjtBQUtYSyxzQkFBZ0IsRUFBRSxDQUxQO0FBTVhFLHFCQUFlLEVBQUU7QUFOTixLQUFiO0FBekNpQjtBQWlEbEI7Ozs7V0FFRCw2QkFBb0IsQ0FFbkI7OztXQUVELG1DQUEwQjtBQUN4QixVQUFJQyxhQUFhLEdBQUcsS0FBS3JDLEtBQUwsQ0FBV3NDLG1CQUFYLENBQStCRCxhQUFuRDtBQUNBLFVBQUlFLEdBQUcsR0FBRyxLQUFLdkMsS0FBTCxDQUFXc0MsbUJBQVgsQ0FBK0JFLFlBQXpDO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLFVBQUksS0FBS3ZCLEtBQUwsQ0FBV2tCLGVBQVgsS0FBK0IsRUFBbkMsRUFBdUM7QUFDckNLLGlCQUFTLEdBQUdGLEdBQVo7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEdBQUcsQ0FBQ0ksTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFBcUM7QUFDbkMsY0FBSUUsU0FBUyxHQUFHUCxhQUFhLENBQUNFLEdBQUcsQ0FBQ0csQ0FBRCxDQUFKLENBQTdCOztBQUNBLGNBQUlFLFNBQVMsQ0FBQ0MsSUFBVixDQUFlQyxXQUFmLEdBQTZCQyxPQUE3QixDQUFxQyxLQUFLN0IsS0FBTCxDQUFXa0IsZUFBWCxDQUEyQlUsV0FBM0IsRUFBckMsTUFBbUYsQ0FBQyxDQUF4RixFQUEyRjtBQUN6RkwscUJBQVMsQ0FBQ1QsSUFBVixDQUFlTyxHQUFHLENBQUNHLENBQUQsQ0FBbEI7QUFDRCxXQUZELE1BRU87QUFDTDtBQUNBLGdCQUFJTSxRQUFRLEdBQUdKLFNBQVMsQ0FBQ0ssaUJBQVYsQ0FBNEJDLFdBQTNDO0FBQ0EsZ0JBQUlDLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlMLFFBQVosQ0FBbEI7O0FBQ0EsZ0JBQUlHLFdBQVcsQ0FBQ1IsTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUMxQixtQkFBSyxJQUFJVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxXQUFXLENBQUNSLE1BQWhDLEVBQXdDVyxDQUFDLEVBQXpDLEVBQTZDO0FBQzNDLG9CQUFJTixRQUFRLENBQUNHLFdBQVcsQ0FBQ0csQ0FBRCxDQUFaLENBQVIsQ0FBeUJULElBQXpCLENBQThCQyxXQUE5QixHQUE0Q0MsT0FBNUMsQ0FBb0QsS0FBSzdCLEtBQUwsQ0FBV2tCLGVBQVgsQ0FBMkJVLFdBQTNCLEVBQXBELE1BQWtHLENBQUMsQ0FBdkcsRUFBMEc7QUFDeEdMLDJCQUFTLENBQUNULElBQVYsQ0FBZU8sR0FBRyxDQUFDRyxDQUFELENBQWxCO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0QsYUFBT0QsU0FBUDtBQUNEOzs7V0FFRCxrQkFBUztBQUFBOztBQUNQLFVBQUlKLGFBQWEsR0FBRyxLQUFLckMsS0FBTCxDQUFXc0MsbUJBQVgsQ0FBK0JELGFBQW5EO0FBQ0EsVUFBSWtCLFlBQVksR0FBRyxLQUFLQyx1QkFBTCxFQUFuQjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxFQUFiOztBQUNBLFVBQUksS0FBS3pELEtBQUwsQ0FBV08sYUFBWCxDQUF5QkMsSUFBekIsQ0FBOEJrRCxpQkFBOUIsQ0FBZ0RELE1BQXBELEVBQTREO0FBQzFEQSxjQUFNLGdCQUFHO0FBQUssbUJBQVMsRUFBRTtBQUFoQix3QkFDUDtBQUFPLG1CQUFTLEVBQUUsNEJBQWxCO0FBQWdELGNBQUksRUFBQyxNQUFyRDtBQUE0RCxxQkFBVyxFQUFFLFFBQXpFO0FBQ08saUJBQU8sRUFBRSxtQkFBTTtBQUFDLGtCQUFJLENBQUNFLGdCQUFMLENBQXNCLE1BQUksQ0FBQ0MsS0FBM0I7QUFBa0M7QUFEekQsVUFETyxDQUFUO0FBSUQ7O0FBQ0QsVUFBSSxLQUFLMUMsS0FBTCxDQUFXTixJQUFmLEVBQXFCO0FBQ25CRyxjQUFNLENBQUMsS0FBS0csS0FBTCxDQUFXRSxPQUFYLENBQW1CbEIsT0FBcEIsQ0FBTixDQUFtQzJELFFBQW5DLENBQTRDLFVBQTVDLEVBQXdEQyxXQUF4RCxDQUFvRSxXQUFwRTtBQUNBL0MsY0FBTSxDQUFDLDBCQUFELENBQU4sQ0FBbUM4QyxRQUFuQyxDQUE0QyxVQUE1QyxFQUF3REMsV0FBeEQsQ0FBb0UsV0FBcEU7QUFDRCxPQUhELE1BR087QUFDTC9DLGNBQU0sQ0FBQyxLQUFLRyxLQUFMLENBQVdFLE9BQVgsQ0FBbUJsQixPQUFwQixDQUFOLENBQW1DNEQsV0FBbkMsQ0FBK0MsVUFBL0MsRUFBMkRELFFBQTNELENBQW9FLFdBQXBFO0FBQ0E5QyxjQUFNLENBQUMsMEJBQUQsQ0FBTixDQUFtQytDLFdBQW5DLENBQStDLFVBQS9DLEVBQTJERCxRQUEzRCxDQUFvRSxXQUFwRTtBQUNEOztBQUNELFVBQU01RCxLQUFLLEdBQUcsSUFBZDtBQUNBLFVBQUk4RCxRQUFRLEdBQUcsS0FBSy9ELEtBQUwsQ0FBV08sYUFBWCxDQUF5QkMsSUFBekIsQ0FBOEJrRCxpQkFBOUIsQ0FBZ0RNLEtBQWhELEdBQXdELEtBQUtoRSxLQUFMLENBQVdPLGFBQVgsQ0FBeUJDLElBQXpCLENBQThCa0QsaUJBQTlCLENBQWdETSxLQUF4RyxHQUFnSCxhQUEvSDtBQUNBLDBCQUNFO0FBQUssaUJBQVMsRUFBRTtBQUFoQixzQkFDRSxnQ0FBQyxxQkFBRDtBQUFVLG9CQUFZLEVBQUUsc0JBQXhCO0FBQWdELG1CQUFXLEVBQUUsd0JBQTdEO0FBQ0UsY0FBTSxFQUFFRCxRQURWO0FBQ29CLHFCQUFhLEVBQUUscUJBRG5DO0FBQzBELGtCQUFVLEVBQUUsS0FBSzVDLEtBRDNFO0FBQ2tGLHFCQUFhLEVBQUUsS0FBS2IsYUFBTCxDQUFtQjJEO0FBRHBILFFBREYsRUFHR1IsTUFISCxlQUlFO0FBQUssaUJBQVMsRUFBRTtBQUFoQixzQkFDRSw0Q0FDR0YsWUFBWSxDQUFDN0IsR0FBYixDQUFpQixVQUFTeEIsT0FBVCxFQUFrQmdFLEtBQWxCLEVBQXlCO0FBQ3pDLFlBQUl0QixTQUFTLEdBQUdQLGFBQWEsQ0FBQ25DLE9BQUQsQ0FBN0I7QUFDQSxZQUFJaUUsVUFBVSxHQUFHbEUsS0FBSyxDQUFDaUIsS0FBTixDQUFZZ0IsZ0JBQVosS0FBaUNoQyxPQUFqQyxHQUEyQyxZQUEzQyxHQUEwRCxjQUEzRTtBQUNBLFlBQUlrRSxPQUFPLEdBQUcsRUFBZDs7QUFDQSxZQUFJeEIsU0FBUyxDQUFDeUIsYUFBZCxFQUE2QjtBQUMzQkQsaUJBQU8sZ0JBQUc7QUFBSyxxQkFBUyxFQUFFLHVCQUFoQjtBQUF5QyxlQUFHLEVBQUV4QixTQUFTLENBQUN5QixhQUF4RDtBQUF1RSxlQUFHLEVBQUM7QUFBM0UsWUFBVjtBQUNEOztBQUNELFlBQUlyQixRQUFRLEdBQUcsRUFBZjs7QUFDQSxZQUFJSixTQUFTLENBQUNLLGlCQUFWLENBQTRCQyxXQUE1QixDQUF3Q1AsTUFBeEMsR0FBaUQsQ0FBakQsSUFBc0QxQyxLQUFLLENBQUNpQixLQUFOLENBQVlnQixnQkFBWixLQUFpQ2hDLE9BQTNGLEVBQW9HO0FBQ2xHOEMsa0JBQVEsZ0JBQUcsZ0NBQUMsbUNBQUQ7QUFBaUIsNkJBQWlCLEVBQUVKLFNBQVMsQ0FBQ0s7QUFBOUMsWUFBWDtBQUNEOztBQUNELFlBQUlxQixRQUFRLEdBQUcxQixTQUFTLENBQUNDLElBQXpCOztBQUNBLFlBQUl1QixPQUFKLEVBQWE7QUFDWEUsa0JBQVEsZ0JBQUcsOENBQU8xQixTQUFTLENBQUNDLElBQWpCLENBQVg7QUFDRDs7QUFDRCw0QkFBUTtBQUFJLGFBQUcsRUFBRXFCLEtBQVQ7QUFBZ0IsbUJBQVMsRUFBRUUsT0FBTyxHQUFHLFlBQUgsR0FBa0I7QUFBcEQsd0JBQ047QUFBRyxtQkFBUyxFQUFFLG1CQUFDbkQsS0FBRCxFQUFXO0FBQ3JCQSxpQkFBSyxDQUFDc0QsY0FBTjtBQUNBdEQsaUJBQUssQ0FBQ3VELGVBQU47QUFDQXZFLGlCQUFLLENBQUN3RSxVQUFOLENBQWlCdkUsT0FBakI7QUFDRCxXQUpIO0FBS0UsbUJBQVMsRUFBRWlFO0FBTGIsV0FLMEJHLFFBTDFCLEVBTUNGLE9BTkQsQ0FETSxFQVNMcEIsUUFUSyxDQUFSO0FBV0QsT0ExQkEsQ0FESCxDQURGLENBSkYsQ0FERjtBQXNDRDs7O1dBRUQsMEJBQWlCMEIsVUFBakIsRUFBNkI7QUFDM0IsVUFBSUMsV0FBVyxHQUFHNUQsTUFBTSxDQUFDLDZCQUFELENBQU4sQ0FBc0M2RCxHQUF0QyxFQUFsQjtBQUNBLFdBQUszQyxRQUFMLENBQWM7QUFBQ0csdUJBQWUsRUFBRXVDO0FBQWxCLE9BQWQ7QUFDRDs7O1dBRUQsb0JBQVdFLEVBQVgsRUFBZTtBQUNiLFdBQUs3RSxLQUFMLENBQVdzQyxtQkFBWCxDQUErQndDLGFBQS9CLENBQTZDRCxFQUE3QztBQUNBLFdBQUs3RSxLQUFMLENBQVcrRSxrQkFBWCxDQUE4QkYsRUFBOUI7QUFDQSxXQUFLNUMsUUFBTCxDQUFjO0FBQUNDLHdCQUFnQixFQUFFMkM7QUFBbkIsT0FBZDtBQUNEOzs7V0FFRCxnQkFBTztBQUNMLFdBQUs1QyxRQUFMLENBQWM7QUFBQ3JCLFlBQUksRUFBRTtBQUFQLE9BQWQ7QUFDQSxXQUFLWixLQUFMLENBQVdPLGFBQVgsQ0FBeUJ5RSxnQkFBekIsQ0FBMEMsSUFBMUM7QUFDRDs7O1dBRUQsaUJBQVE7QUFDTixXQUFLL0MsUUFBTCxDQUFjO0FBQUNyQixZQUFJLEVBQUU7QUFBUCxPQUFkO0FBQ0Q7OztXQUVELDRCQUFtQnFFLFNBQW5CLEVBQThCQyxTQUE5QixFQUF5Q0MsUUFBekMsRUFBbUQ7QUFDakQsVUFBSSxLQUFLbkYsS0FBTCxDQUFXTyxhQUFYLENBQXlCQyxJQUF6QixDQUE4QjRFLE9BQTlCLElBQXlDLENBQUMsS0FBS2xFLEtBQUwsQ0FBV04sSUFBekQsRUFBK0Q7QUFDN0QsWUFBSXlFLFFBQVEsR0FBR0Msb0JBQU1DLFFBQU4sQ0FBZSxPQUFmLENBQWY7O0FBQ0EsWUFBSUYsUUFBUSxLQUFLLEtBQUtHLFdBQUwsQ0FBaUIzQyxJQUFsQyxFQUF3QztBQUN0Q3lDLDhCQUFNRyxVQUFOLENBQWlCLE9BQWpCLEVBQTBCLEVBQTFCO0FBQ0Q7QUFDRjtBQUNGOzs7RUE1SzRDQyxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AvQzs7Ozs7Ozs7OztJQUVhQyxlOzs7OztBQUVYLDJCQUFZM0YsS0FBWixFQUFtQjtBQUFBO0FBQUEsNkJBQ1hBLEtBRFc7QUFHbEI7Ozs7V0FFRCxrQkFBUztBQUNQLFVBQU1DLEtBQUssR0FBRyxJQUFkO0FBQ0EsVUFBTStDLFFBQVEsR0FBRyxLQUFLaEQsS0FBTCxDQUFXaUQsaUJBQVgsQ0FBNkJDLFdBQTlDOztBQUNBLFVBQU0wQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTQyxHQUFULEVBQWM7QUFDN0IsWUFBSWpDLEtBQUssR0FBRzdDLE1BQU0sQ0FBQyx5QkFBeUI4RSxHQUExQixDQUFOLENBQXFDakIsR0FBckMsRUFBWjtBQUNBM0UsYUFBSyxDQUFDRCxLQUFOLENBQVlpRCxpQkFBWixDQUE4QkMsV0FBOUIsQ0FBMEMyQyxHQUExQyxFQUErQ0MsYUFBL0MsQ0FBNkRsQyxLQUE3RDtBQUNELE9BSEQ7O0FBSUEsMEJBQ0U7QUFBSSxpQkFBUyxFQUFFO0FBQWYsU0FDR1osUUFBUSxDQUFDdEIsR0FBVCxDQUFhLFVBQVN4QixPQUFULEVBQWtCZ0UsS0FBbEIsRUFBeUI7QUFDckMsWUFBSTZCLEtBQUssZ0JBQUc7QUFBSSxhQUFHLEVBQUU3QjtBQUFULHdCQUNWLHdEQUNFLDhDQUFPaEUsT0FBTyxDQUFDMkMsSUFBZixDQURGLGVBRUU7QUFBTyxZQUFFLEVBQUcsd0JBQXVCcUIsS0FBbkM7QUFBMEMsbUJBQVMsRUFBRSxvQkFBckQ7QUFBMkUsY0FBSSxFQUFDLE9BQWhGO0FBQXdGLGlCQUFPLEVBQUU7QUFBQSxtQkFBTTBCLFFBQVEsQ0FBQzFCLEtBQUQsQ0FBZDtBQUFBLFdBQWpHO0FBQ08sYUFBRyxFQUFFLENBRFo7QUFDZSxhQUFHLEVBQUUsR0FEcEI7QUFDeUIsY0FBSSxFQUFFLEVBRC9CO0FBQ21DLHNCQUFZLEVBQUVoRSxPQUFPLENBQUM4RjtBQUR6RCxVQUZGLENBRFUsQ0FBWjs7QUFPQSxlQUFPRCxLQUFQO0FBQ0QsT0FUQSxDQURILENBREY7QUFjRDs7O0VBNUJrQ0wsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1iYXNlbGF5ZXJzd2l0Y2hlcl9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi9jNGctdGl0bGViYXIuanN4XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge092ZXJsYXlDb250cm9sc30gZnJvbSBcIi4vYzRnLW92ZXJsYXktY29udHJvbHMuanN4XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZWxheWVyU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9CQVNFTEFZRVI7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1iYXNlbGF5ZXItY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5iYXNlbGF5ZXJTd2l0Y2hlciA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIGxldCBiYXNlbGF5ZXJMb2FkZWQgPSBmYWxzZTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5iYXNlbGF5ZXJMb2FkZWQpIHtcbiAgICAgIGJhc2VsYXllckxvYWRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaG9va19iYXNlbGF5ZXJfbG9hZGVkID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQgfHwgW107XG4gICAgICBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lmhvb2tfYmFzZWxheWVyX2xvYWRlZC5wdXNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBzY29wZS5zZXRTdGF0ZSh7YmFzZWxheWVyTG9hZGVkOiB0cnVlLCBjdXJyZW50QmFzZWxheWVyOiBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmFjdGl2ZUJhc2VsYXllcklkfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gc3RhdGUgdmFyaWFibGVzIChldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyBpbmZsdWVuY2Ugb24gdGhpcyBjb21wb25lbnQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1iYXNlbGF5ZXJzd2l0Y2hlci1wYW5lbFwiLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGJhc2VsYXllckxvYWRlZDogYmFzZWxheWVyTG9hZGVkLFxuICAgICAgY3VycmVudEJhc2VsYXllcjogMCxcbiAgICAgIGJhc2VsYXllckZpbHRlcjogXCJcIlxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMoKSB7XG4gICAgbGV0IGFyckJhc2VsYXllcnMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVycztcbiAgICBsZXQgaWRzID0gdGhpcy5wcm9wcy5iYXNlbGF5ZXJDb250cm9sbGVyLmJhc2VsYXllcklkcztcbiAgICBsZXQgcmV0dXJuSWRzID0gW107XG4gICAgaWYgKHRoaXMuc3RhdGUuYmFzZWxheWVyRmlsdGVyID09PSBcIlwiKSB7XG4gICAgICByZXR1cm5JZHMgPSBpZHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBiYXNlbGF5ZXIgPSBhcnJCYXNlbGF5ZXJzW2lkc1tpXV07XG4gICAgICAgIGlmIChiYXNlbGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS5iYXNlbGF5ZXJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuSWRzLnB1c2goaWRzW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiBhbiBvdmVybGF5IG1hdGNoZXNcbiAgICAgICAgICBsZXQgb3ZlcmxheXMgPSBiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXM7XG4gICAgICAgICAgbGV0IG92ZXJsYXlLZXlzID0gT2JqZWN0LmtleXMob3ZlcmxheXMpO1xuICAgICAgICAgIGlmIChvdmVybGF5S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG92ZXJsYXlLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChvdmVybGF5c1tvdmVybGF5S2V5c1tqXV0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS5iYXNlbGF5ZXJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuSWRzLnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuSWRzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhcnJCYXNlbGF5ZXJzID0gdGhpcy5wcm9wcy5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnM7XG4gICAgbGV0IGJhc2VMYXllcklkcyA9IHRoaXMuZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMoKTtcbiAgICBsZXQgZmlsdGVyID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmJhc2VsYXllcnN3aXRjaGVyLmZpbHRlcikge1xuICAgICAgZmlsdGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci1maWx0ZXIgd2l0aG91dC1idXR0b25cIn0+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci1maWx0ZXItZmllbGRcIn0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17XCJcXHVmMDAyXCJ9XG4gICAgICAgICAgICAgICBvbklucHV0PXsoKSA9PiB7dGhpcy5maWx0ZXJCYXNlbGF5ZXJzKHRoaXMudmFsdWUpfX0vPlxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctYmFzZWxheWVyLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLWJhc2VsYXllci1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBoZWFkbGluZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmJhc2VsYXllcnN3aXRjaGVyLmxhYmVsID8gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIubGFiZWwgOiBcIkJhc2lza2FydGVuXCI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXItd3JhcHBlclwifT5cbiAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctYmFzZWxheWVyLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctYmFzZWxheWVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgaGVhZGVyPXtoZWFkbGluZX0gY2xvc2VCdG5DbGFzcz17XCJjNGctYmFzZWxheWVyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0vPlxuICAgICAgICB7ZmlsdGVyfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVydHJlZS1jb250ZW50XCJ9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtiYXNlTGF5ZXJJZHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgIGxldCBiYXNlbGF5ZXIgPSBhcnJCYXNlbGF5ZXJzW2VsZW1lbnRdO1xuICAgICAgICAgICAgICBsZXQgY3VycmVudENscyA9IHNjb3BlLnN0YXRlLmN1cnJlbnRCYXNlbGF5ZXIgPT09IGVsZW1lbnQgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCI7XG4gICAgICAgICAgICAgIGxldCBwcmV2aWV3ID0gXCJcIjtcbiAgICAgICAgICAgICAgaWYgKGJhc2VsYXllci5wcmV2aWV3X2ltYWdlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlldyA9IDxpbWcgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXItcHJldmlld1wifSBzcmM9e2Jhc2VsYXllci5wcmV2aWV3X2ltYWdlfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IG92ZXJsYXlzID0gXCJcIjtcbiAgICAgICAgICAgICAgaWYgKGJhc2VsYXllci5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cy5sZW5ndGggPiAwICYmIHNjb3BlLnN0YXRlLmN1cnJlbnRCYXNlbGF5ZXIgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5cyA9IDxPdmVybGF5Q29udHJvbHMgb3ZlcmxheUNvbnRyb2xsZXI9e2Jhc2VsYXllci5vdmVybGF5Q29udHJvbGxlcn0vPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgbmFtZU5vZGUgPSBiYXNlbGF5ZXIubmFtZTtcbiAgICAgICAgICAgICAgaWYgKHByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICBuYW1lTm9kZSA9IDxzcGFuPntiYXNlbGF5ZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuICg8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtwcmV2aWV3ID8gXCJ3aXRoLWltYWdlXCIgOiBcIndpdGhvdXQtaW1hZ2VcIn0+XG4gICAgICAgICAgICAgICAgPGEgb25Nb3VzZVVwPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmVudHJ5Q2xpY2soZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjbGFzc05hbWU9e2N1cnJlbnRDbHN9PntuYW1lTm9kZX1cbiAgICAgICAgICAgICAgICB7cHJldmlld31cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAge292ZXJsYXlzfVxuICAgICAgICAgICAgICA8L2xpPik7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGZpbHRlckJhc2VsYXllcnMoZmllbGRWYWx1ZSkge1xuICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGpRdWVyeShcIi5jNGctYmFzZWxheWVyLWZpbHRlci1maWVsZFwiKS52YWwoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtiYXNlbGF5ZXJGaWx0ZXI6IGZpbHRlclZhbHVlfSk7XG4gIH1cblxuICBlbnRyeUNsaWNrKGlkKSB7XG4gICAgdGhpcy5wcm9wcy5iYXNlbGF5ZXJDb250cm9sbGVyLnNob3dCYXNlTGF5ZXIoaWQpO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQWN0aXZlTGF5ZXJzKGlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50QmFzZWxheWVyOiBpZH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3Qgb3ZlcmxheXMgPSB0aGlzLnByb3BzLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24oaWR4KSB7XG4gICAgICBsZXQgdmFsdWUgPSBqUXVlcnkoXCIjYzRnLW92ZXJsYXktdG9nZ2xlX1wiICsgaWR4KS52YWwoKTtcbiAgICAgIHNjb3BlLnByb3BzLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzW2lkeF0uY2hhbmdlT3BhY2l0eSh2YWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctb3ZlcmxheXNcIn0+XG4gICAgICAgIHtvdmVybGF5cy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICBsZXQgZW50cnkgPSA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPHNwYW4+e2VsZW1lbnQubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZCA9e1wiYzRnLW92ZXJsYXktdG9nZ2xlX1wiKyBpbmRleH0gY2xhc3NOYW1lPXtcImM0Zy1vdmVybGF5LXRvZ2dsZVwifSB0eXBlPVwicmFuZ2VcIiBvbklucHV0PXsoKSA9PiBjYWxsYmFjayhpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICBtaW49ezB9IG1heD17MTAwfSBzdGVwPXsxMH0gZGVmYXVsdFZhbHVlPXtlbGVtZW50Lm9wYWNpdHl9Lz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPjtcbiAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9