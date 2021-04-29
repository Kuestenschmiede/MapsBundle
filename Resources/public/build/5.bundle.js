(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./Resources/public/js/components/c4g-baselayerswitcher.jsx":
/*!******************************************************************!*\
  !*** ./Resources/public/js/components/c4g-baselayerswitcher.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _c4gOverlayControls = __webpack_require__(/*! ./c4g-overlay-controls.jsx */ "./Resources/public/js/components/c4g-overlay-controls.jsx");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

var BaselayerSwitcher = function (_Component) {
  (0, _inherits3.default)(BaselayerSwitcher, _Component);

  function BaselayerSwitcher(props) {
    (0, _classCallCheck3.default)(this, BaselayerSwitcher);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaselayerSwitcher.__proto__ || (0, _getPrototypeOf2.default)(BaselayerSwitcher)).call(this, props));

    var scope = _this;
    // create control to toggle the panel
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
    var control = new _control.Control({ element: element, target: props.target });
    mapController.mapsControls.controls.baselayerSwitcher = control;
    mapController.map.addControl(control);
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    var baselayerLoaded = false;
    if (props.mapController.proxy.baselayerLoaded) {
      baselayerLoaded = true;
    } else {
      props.mapController.proxy.hook_baselayer_loaded = props.mapController.proxy.hook_baselayer_loaded || [];
      props.mapController.proxy.hook_baselayer_loaded.push(function () {
        scope.setState({ baselayerLoaded: true, currentBaselayer: props.mapController.proxy.activeBaselayerId });
      });
    }
    // state variables (every property that has influence on this component)
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

  (0, _createClass3.default)(BaselayerSwitcher, [{
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
            var overlayKeys = (0, _keys2.default)(overlays);
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
        filter = _react2.default.createElement(
          "div",
          { className: "c4g-baselayer-filter without-button" },
          _react2.default.createElement("input", { className: "c4g-baselayer-filter-field", type: "text", placeholder: "\uF002",
            onInput: function onInput() {
              _this2.filterBaselayers(_this2.value);
            } })
        );
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
      return _react2.default.createElement(
        "div",
        { className: "c4g-baselayer-wrapper" },
        _react2.default.createElement(_c4gTitlebar.Titlebar, { wrapperClass: "c4g-baselayer-header", headerClass: "c4g-baselayer-headline",
          header: headline, closeBtnClass: "c4g-baselayer-close", closeBtnCb: this.close, closeBtnTitle: this.langConstants.CLOSE }),
        filter,
        _react2.default.createElement(
          "div",
          { className: "c4g-baselayertree-content" },
          _react2.default.createElement(
            "ul",
            null,
            baseLayerIds.map(function (element, index) {
              var baselayer = arrBaselayers[element];
              var currentCls = scope.state.currentBaselayer === element ? "c4g-active" : "c4g-inactive";
              var preview = "";
              if (baselayer.preview_image) {
                preview = _react2.default.createElement("img", { className: "c4g-baselayer-preview", src: baselayer.preview_image, alt: "" });
              }
              var overlays = "";
              if (baselayer.overlayController.arrOverlays.length > 0 && scope.state.currentBaselayer === element) {
                overlays = _react2.default.createElement(_c4gOverlayControls.OverlayControls, { overlayController: baselayer.overlayController });
              }
              var nameNode = baselayer.name;
              if (preview) {
                nameNode = _react2.default.createElement(
                  "span",
                  null,
                  baselayer.name
                );
              }
              return _react2.default.createElement(
                "li",
                { key: index, className: preview ? "with-image" : "without-image" },
                _react2.default.createElement(
                  "a",
                  { onMouseUp: function onMouseUp(event) {
                      event.preventDefault();
                      event.stopPropagation();
                      scope.entryClick(element);
                    }, className: currentCls },
                  nameNode,
                  preview
                ),
                overlays
              );
            })
          )
        )
      );
    }
  }, {
    key: "filterBaselayers",
    value: function filterBaselayers(fieldValue) {
      var filterValue = jQuery(".c4g-baselayer-filter-field").val();
      this.setState({ baselayerFilter: filterValue });
    }
  }, {
    key: "entryClick",
    value: function entryClick(id) {
      this.props.baselayerController.showBaseLayer(id);
      this.props.changeActiveLayers(id);
      this.setState({ currentBaselayer: id });
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({ open: true });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({ open: false });
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayControls = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverlayControls = exports.OverlayControls = function (_Component) {
  (0, _inherits3.default)(OverlayControls, _Component);

  function OverlayControls(props) {
    (0, _classCallCheck3.default)(this, OverlayControls);
    return (0, _possibleConstructorReturn3.default)(this, (OverlayControls.__proto__ || (0, _getPrototypeOf2.default)(OverlayControls)).call(this, props));
  }

  (0, _createClass3.default)(OverlayControls, [{
    key: "render",
    value: function render() {
      var scope = this;
      var overlays = this.props.overlayController.arrOverlays;
      var callback = function callback(idx) {
        var value = jQuery("#c4g-overlay-toggle_" + idx).val();
        scope.props.overlayController.arrOverlays[idx].changeOpacity(value);
      };
      return _react2.default.createElement(
        "ul",
        { className: "c4g-overlays" },
        overlays.map(function (element, index) {
          var entry = _react2.default.createElement(
            "li",
            { key: index },
            _react2.default.createElement(
              "a",
              null,
              _react2.default.createElement(
                "span",
                null,
                element.name
              ),
              _react2.default.createElement("input", { id: "c4g-overlay-toggle_" + index, className: "c4g-overlay-toggle", type: "range", onInput: function onInput() {
                  return callback(index);
                },
                min: 0, max: 100, step: 10, defaultValue: element.opacity })
            )
          );
          return entry;
        })
      );
    }
  }]);
  return OverlayControls;
}(_react.Component); /*
                      * This file is part of con4gis,
                      * the gis-kit for Contao CMS.
                      *
                      * @package   	con4gis
                      * @version        6
                      * @author  	    con4gis contributors (see "authors.txt")
                      * @license 	    LGPL-3.0-or-later
                      * @copyright 	Küstenschmiede GmbH Software & Design
                      * @link              https://www.con4gis.org
                      *
                      */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWJhc2VsYXllcnN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJsYXktY29udHJvbHMuanN4Il0sIm5hbWVzIjpbIkJhc2VsYXllclN3aXRjaGVyIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJ0aXRsZSIsIkNUUkxfQkFTRUxBWUVSIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJiYXNlbGF5ZXJTd2l0Y2hlciIsIm1hcCIsImFkZENvbnRyb2wiLCJiaW5kIiwiYmFzZWxheWVyTG9hZGVkIiwicHJveHkiLCJob29rX2Jhc2VsYXllcl9sb2FkZWQiLCJwdXNoIiwic2V0U3RhdGUiLCJjdXJyZW50QmFzZWxheWVyIiwiYWN0aXZlQmFzZWxheWVySWQiLCJiYXNlbGF5ZXJGaWx0ZXIiLCJhcnJCYXNlbGF5ZXJzIiwiYmFzZWxheWVyQ29udHJvbGxlciIsImlkcyIsImJhc2VsYXllcklkcyIsInJldHVybklkcyIsImkiLCJsZW5ndGgiLCJiYXNlbGF5ZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwib3ZlcmxheXMiLCJvdmVybGF5Q29udHJvbGxlciIsImFyck92ZXJsYXlzIiwib3ZlcmxheUtleXMiLCJqIiwiYmFzZUxheWVySWRzIiwiZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMiLCJmaWx0ZXIiLCJiYXNlbGF5ZXJzd2l0Y2hlciIsImZpbHRlckJhc2VsYXllcnMiLCJ2YWx1ZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoZWFkbGluZSIsImxhYmVsIiwiQ0xPU0UiLCJpbmRleCIsImN1cnJlbnRDbHMiLCJwcmV2aWV3IiwicHJldmlld19pbWFnZSIsIm5hbWVOb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlbnRyeUNsaWNrIiwiZmllbGRWYWx1ZSIsImZpbHRlclZhbHVlIiwidmFsIiwiaWQiLCJzaG93QmFzZUxheWVyIiwiY2hhbmdlQWN0aXZlTGF5ZXJzIiwic2V0T3BlbkNvbXBvbmVudCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSIsIkNvbXBvbmVudCIsIk92ZXJsYXlDb250cm9scyIsImNhbGxiYWNrIiwiaWR4IiwiY2hhbmdlT3BhY2l0eSIsImVudHJ5Iiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFsQkE7Ozs7Ozs7Ozs7Ozs7SUFvQnFCQSxpQjs7O0FBRW5CLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEpBQ1hBLEtBRFc7O0FBRWpCLFFBQU1DLGFBQU47QUFDQTtBQUNBLFFBQUlDLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLFFBQUlDLFNBQVNGLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsOEJBQVlOLE1BQU1PLGFBQU4sQ0FBb0JDLElBQWhDLENBQXJCO0FBQ0FILFdBQU9JLEtBQVAsR0FBZSxNQUFLSCxhQUFMLENBQW1CSSxjQUFsQztBQUNBUixZQUFRUyxTQUFSLEdBQW9CLG1EQUFwQjtBQUNBLFFBQUlYLE1BQU1ZLElBQVYsRUFBZ0I7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N0IsWUFBSWpDLFFBQVEzQyxPQUFPLHlCQUF5QjRFLEdBQWhDLEVBQXFDakIsR0FBckMsRUFBWjtBQUNBekUsY0FBTUQsS0FBTixDQUFZaUQsaUJBQVosQ0FBOEJDLFdBQTlCLENBQTBDeUMsR0FBMUMsRUFBK0NDLGFBQS9DLENBQTZEbEMsS0FBN0Q7QUFDRCxPQUhEO0FBSUEsYUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFXLGNBQWY7QUFDR1YsaUJBQVN0QixHQUFULENBQWEsVUFBU3hCLE9BQVQsRUFBa0I4RCxLQUFsQixFQUF5QjtBQUNyQyxjQUFJNkIsUUFBUTtBQUFBO0FBQUEsY0FBSSxLQUFLN0IsS0FBVDtBQUNWO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFPOUQsd0JBQVEyQztBQUFmLGVBREY7QUFFRSx1REFBTyxJQUFLLHdCQUF1Qm1CLEtBQW5DLEVBQTBDLFdBQVcsb0JBQXJELEVBQTJFLE1BQUssT0FBaEYsRUFBd0YsU0FBUztBQUFBLHlCQUFNMEIsU0FBUzFCLEtBQVQsQ0FBTjtBQUFBLGlCQUFqRztBQUNPLHFCQUFLLENBRFosRUFDZSxLQUFLLEdBRHBCLEVBQ3lCLE1BQU0sRUFEL0IsRUFDbUMsY0FBYzlELFFBQVE0RixPQUR6RDtBQUZGO0FBRFUsV0FBWjtBQU9BLGlCQUFPRCxLQUFQO0FBQ0QsU0FUQTtBQURILE9BREY7QUFjRDs7O0VBNUJrQ0wsZ0IsR0FmckMiLCJmaWxlIjoiNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7VGl0bGViYXJ9IGZyb20gXCIuL2M0Zy10aXRsZWJhci5qc3hcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7T3ZlcmxheUNvbnRyb2xzfSBmcm9tIFwiLi9jNGctb3ZlcmxheS1jb250cm9scy5qc3hcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlbGF5ZXJTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0JBU0VMQVlFUjtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLWJhc2VsYXllci1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmJhc2VsYXllclN3aXRjaGVyID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgbGV0IGJhc2VsYXllckxvYWRlZCA9IGZhbHNlO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmJhc2VsYXllckxvYWRlZCkge1xuICAgICAgYmFzZWxheWVyTG9hZGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lmhvb2tfYmFzZWxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICAgIHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaG9va19iYXNlbGF5ZXJfbG9hZGVkLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjb3BlLnNldFN0YXRlKHtiYXNlbGF5ZXJMb2FkZWQ6IHRydWUsIGN1cnJlbnRCYXNlbGF5ZXI6IHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuYWN0aXZlQmFzZWxheWVySWR9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBzdGF0ZSB2YXJpYWJsZXMgKGV2ZXJ5IHByb3BlcnR5IHRoYXQgaGFzIGluZmx1ZW5jZSBvbiB0aGlzIGNvbXBvbmVudClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWJhc2VsYXllcnN3aXRjaGVyLXBhbmVsXCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgYmFzZWxheWVyTG9hZGVkOiBiYXNlbGF5ZXJMb2FkZWQsXG4gICAgICBjdXJyZW50QmFzZWxheWVyOiAwLFxuICAgICAgYmFzZWxheWVyRmlsdGVyOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBnZXRGaWx0ZXJlZEJhc2VsYXllcklkcygpIHtcbiAgICBsZXQgYXJyQmFzZWxheWVycyA9IHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzO1xuICAgIGxldCBpZHMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYmFzZWxheWVySWRzO1xuICAgIGxldCByZXR1cm5JZHMgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5iYXNlbGF5ZXJGaWx0ZXIgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybklkcyA9IGlkcztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJhc2VsYXllciA9IGFyckJhc2VsYXllcnNbaWRzW2ldXTtcbiAgICAgICAgaWYgKGJhc2VsYXllci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm5JZHMucHVzaChpZHNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIGFuIG92ZXJsYXkgbWF0Y2hlc1xuICAgICAgICAgIGxldCBvdmVybGF5cyA9IGJhc2VsYXllci5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cztcbiAgICAgICAgICBsZXQgb3ZlcmxheUtleXMgPSBPYmplY3Qua2V5cyhvdmVybGF5cyk7XG4gICAgICAgICAgaWYgKG92ZXJsYXlLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3ZlcmxheUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKG92ZXJsYXlzW292ZXJsYXlLZXlzW2pdXS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5JZHMucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5JZHM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFyckJhc2VsYXllcnMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVycztcbiAgICBsZXQgYmFzZUxheWVySWRzID0gdGhpcy5nZXRGaWx0ZXJlZEJhc2VsYXllcklkcygpO1xuICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIuZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLWZpbHRlciB3aXRob3V0LWJ1dHRvblwifT5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLWZpbHRlci1maWVsZFwifSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtcIlxcdWYwMDJcIn1cbiAgICAgICAgICAgICAgIG9uSW5wdXQ9eygpID0+IHt0aGlzLmZpbHRlckJhc2VsYXllcnModGhpcy52YWx1ZSl9fS8+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1iYXNlbGF5ZXItY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctYmFzZWxheWVyLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGhlYWRsaW5lID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIubGFiZWwgPyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5iYXNlbGF5ZXJzd2l0Y2hlci5sYWJlbCA6IFwiQmFzaXNrYXJ0ZW5cIjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci13cmFwcGVyXCJ9PlxuICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1iYXNlbGF5ZXItaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1iYXNlbGF5ZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICBoZWFkZXI9e2hlYWRsaW5lfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1iYXNlbGF5ZXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfS8+XG4gICAgICAgIHtmaWx0ZXJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXJ0cmVlLWNvbnRlbnRcIn0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2Jhc2VMYXllcklkcy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgbGV0IGJhc2VsYXllciA9IGFyckJhc2VsYXllcnNbZWxlbWVudF07XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50Q2xzID0gc2NvcGUuc3RhdGUuY3VycmVudEJhc2VsYXllciA9PT0gZWxlbWVudCA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIjtcbiAgICAgICAgICAgICAgbGV0IHByZXZpZXcgPSBcIlwiO1xuICAgICAgICAgICAgICBpZiAoYmFzZWxheWVyLnByZXZpZXdfaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3ID0gPGltZyBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci1wcmV2aWV3XCJ9IHNyYz17YmFzZWxheWVyLnByZXZpZXdfaW1hZ2V9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgb3ZlcmxheXMgPSBcIlwiO1xuICAgICAgICAgICAgICBpZiAoYmFzZWxheWVyLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzLmxlbmd0aCA+IDAgJiYgc2NvcGUuc3RhdGUuY3VycmVudEJhc2VsYXllciA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG92ZXJsYXlzID0gPE92ZXJsYXlDb250cm9scyBvdmVybGF5Q29udHJvbGxlcj17YmFzZWxheWVyLm92ZXJsYXlDb250cm9sbGVyfS8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBuYW1lTm9kZSA9IGJhc2VsYXllci5uYW1lO1xuICAgICAgICAgICAgICBpZiAocHJldmlldykge1xuICAgICAgICAgICAgICAgIG5hbWVOb2RlID0gPHNwYW4+e2Jhc2VsYXllci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3ByZXZpZXcgPyBcIndpdGgtaW1hZ2VcIiA6IFwid2l0aG91dC1pbWFnZVwifT5cbiAgICAgICAgICAgICAgICA8YSBvbk1vdXNlVXA9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZW50cnlDbGljayhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNsYXNzTmFtZT17Y3VycmVudENsc30+e25hbWVOb2RlfVxuICAgICAgICAgICAgICAgIHtwcmV2aWV3fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB7b3ZlcmxheXN9XG4gICAgICAgICAgICAgIDwvbGk+KTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZmlsdGVyQmFzZWxheWVycyhmaWVsZFZhbHVlKSB7XG4gICAgbGV0IGZpbHRlclZhbHVlID0galF1ZXJ5KFwiLmM0Zy1iYXNlbGF5ZXItZmlsdGVyLWZpZWxkXCIpLnZhbCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2VsYXllckZpbHRlcjogZmlsdGVyVmFsdWV9KTtcbiAgfVxuXG4gIGVudHJ5Q2xpY2soaWQpIHtcbiAgICB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuc2hvd0Jhc2VMYXllcihpZCk7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VBY3RpdmVMYXllcnMoaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRCYXNlbGF5ZXI6IGlkfSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgT3ZlcmxheUNvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBvdmVybGF5cyA9IHRoaXMucHJvcHMub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXM7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbihpZHgpIHtcbiAgICAgIGxldCB2YWx1ZSA9IGpRdWVyeShcIiNjNGctb3ZlcmxheS10b2dnbGVfXCIgKyBpZHgpLnZhbCgpO1xuICAgICAgc2NvcGUucHJvcHMub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXNbaWR4XS5jaGFuZ2VPcGFjaXR5KHZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1vdmVybGF5c1wifT5cbiAgICAgICAge292ZXJsYXlzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBlbnRyeSA9IDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8c3Bhbj57ZWxlbWVudC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IGlkID17XCJjNGctb3ZlcmxheS10b2dnbGVfXCIrIGluZGV4fSBjbGFzc05hbWU9e1wiYzRnLW92ZXJsYXktdG9nZ2xlXCJ9IHR5cGU9XCJyYW5nZVwiIG9uSW5wdXQ9eygpID0+IGNhbGxiYWNrKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgIG1pbj17MH0gbWF4PXsxMDB9IHN0ZXA9ezEwfSBkZWZhdWx0VmFsdWU9e2VsZW1lbnQub3BhY2l0eX0vPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+O1xuICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=