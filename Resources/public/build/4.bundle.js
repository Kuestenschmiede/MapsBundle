(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _c4gOverlayControls = __webpack_require__(/*! ./c4g-overlay-controls.jsx */ "./Resources/public/js/components/c4g-overlay-controls.jsx");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
  _inherits(BaselayerSwitcher, _Component);

  function BaselayerSwitcher(props) {
    _classCallCheck(this, BaselayerSwitcher);

    var _this = _possibleConstructorReturn(this, (BaselayerSwitcher.__proto__ || Object.getPrototypeOf(BaselayerSwitcher)).call(this, props));

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

  _createClass(BaselayerSwitcher, [{
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

var OverlayControls = exports.OverlayControls = function (_Component) {
  _inherits(OverlayControls, _Component);

  function OverlayControls(props) {
    _classCallCheck(this, OverlayControls);

    return _possibleConstructorReturn(this, (OverlayControls.__proto__ || Object.getPrototypeOf(OverlayControls)).call(this, props));
  }

  _createClass(OverlayControls, [{
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
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWJhc2VsYXllcnN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJsYXktY29udHJvbHMuanN4Il0sIm5hbWVzIjpbIkJhc2VsYXllclN3aXRjaGVyIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJ0aXRsZSIsIkNUUkxfQkFTRUxBWUVSIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJiYXNlbGF5ZXJTd2l0Y2hlciIsIm1hcCIsImFkZENvbnRyb2wiLCJiaW5kIiwiYmFzZWxheWVyTG9hZGVkIiwicHJveHkiLCJob29rX2Jhc2VsYXllcl9sb2FkZWQiLCJwdXNoIiwic2V0U3RhdGUiLCJjdXJyZW50QmFzZWxheWVyIiwiYWN0aXZlQmFzZWxheWVySWQiLCJiYXNlbGF5ZXJGaWx0ZXIiLCJhcnJCYXNlbGF5ZXJzIiwiYmFzZWxheWVyQ29udHJvbGxlciIsImlkcyIsImJhc2VsYXllcklkcyIsInJldHVybklkcyIsImkiLCJsZW5ndGgiLCJiYXNlbGF5ZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwib3ZlcmxheXMiLCJvdmVybGF5Q29udHJvbGxlciIsImFyck92ZXJsYXlzIiwib3ZlcmxheUtleXMiLCJPYmplY3QiLCJrZXlzIiwiaiIsImJhc2VMYXllcklkcyIsImdldEZpbHRlcmVkQmFzZWxheWVySWRzIiwiZmlsdGVyIiwiYmFzZWxheWVyc3dpdGNoZXIiLCJmaWx0ZXJCYXNlbGF5ZXJzIiwidmFsdWUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGVhZGxpbmUiLCJsYWJlbCIsIkNMT1NFIiwiaW5kZXgiLCJjdXJyZW50Q2xzIiwicHJldmlldyIsInByZXZpZXdfaW1hZ2UiLCJuYW1lTm9kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZW50cnlDbGljayIsImZpZWxkVmFsdWUiLCJmaWx0ZXJWYWx1ZSIsInZhbCIsImlkIiwic2hvd0Jhc2VMYXllciIsImNoYW5nZUFjdGl2ZUxheWVycyIsInNldE9wZW5Db21wb25lbnQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsInN0b3JlVmFsdWUiLCJDb21wb25lbnQiLCJPdmVybGF5Q29udHJvbHMiLCJjYWxsYmFjayIsImlkeCIsImNoYW5nZU9wYWNpdHkiLCJlbnRyeSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7OytlQWxCQTs7Ozs7Ozs7Ozs7OztJQW9CcUJBLGlCOzs7QUFFbkIsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSUFDWEEsS0FEVzs7QUFFakIsUUFBTUMsYUFBTjtBQUNBO0FBQ0EsUUFBSUMsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsU0FBU0YsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQiw4QkFBWU4sTUFBTU8sYUFBTixDQUFvQkMsSUFBaEMsQ0FBckI7QUFDQUgsV0FBT0ksS0FBUCxHQUFlLE1BQUtILGFBQUwsQ0FBbUJJLGNBQWxDO0FBQ0FSLFlBQVFTLFNBQVIsR0FBb0IsbURBQXBCO0FBQ0EsUUFBSVgsTUFBTVksSUFBVixFQUFnQjtBQUNkVixjQUFRUyxTQUFSLElBQXFCLFVBQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xULGNBQVFTLFNBQVIsSUFBcUIsV0FBckI7QUFDRDtBQUNELFFBQUlYLE1BQU1hLFFBQVYsRUFBb0I7QUFDbEJYLGNBQVFTLFNBQVIsSUFBcUIsZUFBckI7QUFDRDtBQUNEVCxZQUFRWSxXQUFSLENBQW9CVCxNQUFwQjtBQUNBVSxXQUFPYixPQUFQLEVBQWdCYyxFQUFoQixDQUFtQixPQUFuQixFQUE0QixVQUFVQyxLQUFWLEVBQWlCO0FBQzNDLFVBQUloQixNQUFNaUIsS0FBTixDQUFZTixJQUFoQixFQUFzQjtBQUNwQlgsY0FBTWtCLEtBQU47QUFDRCxPQUZELE1BRU87QUFDTGxCLGNBQU1XLElBQU47QUFDRDtBQUNGLEtBTkQ7QUFPQSxRQUFJTCxnQkFBZ0JQLE1BQU1PLGFBQTFCO0FBQ0EsUUFBSWEsVUFBVSxJQUFJQyxnQkFBSixDQUFZLEVBQUNuQixTQUFTQSxPQUFWLEVBQW1Cb0IsUUFBUXRCLE1BQU1zQixNQUFqQyxFQUFaLENBQWQ7QUFDQWYsa0JBQWNnQixZQUFkLENBQTJCQyxRQUEzQixDQUFvQ0MsaUJBQXBDLEdBQXdETCxPQUF4RDtBQUNBYixrQkFBY21CLEdBQWQsQ0FBa0JDLFVBQWxCLENBQTZCUCxPQUE3QjtBQUNBLFVBQUtSLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVnQixJQUFWLE9BQVo7QUFDQSxVQUFLVCxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXUyxJQUFYLE9BQWI7QUFDQSxRQUFJQyxrQkFBa0IsS0FBdEI7QUFDQSxRQUFJN0IsTUFBTU8sYUFBTixDQUFvQnVCLEtBQXBCLENBQTBCRCxlQUE5QixFQUErQztBQUM3Q0Esd0JBQWtCLElBQWxCO0FBQ0QsS0FGRCxNQUVPO0FBQ0w3QixZQUFNTyxhQUFOLENBQW9CdUIsS0FBcEIsQ0FBMEJDLHFCQUExQixHQUFrRC9CLE1BQU1PLGFBQU4sQ0FBb0J1QixLQUFwQixDQUEwQkMscUJBQTFCLElBQW1ELEVBQXJHO0FBQ0EvQixZQUFNTyxhQUFOLENBQW9CdUIsS0FBcEIsQ0FBMEJDLHFCQUExQixDQUFnREMsSUFBaEQsQ0FBcUQsWUFBVztBQUM5RC9CLGNBQU1nQyxRQUFOLENBQWUsRUFBQ0osaUJBQWlCLElBQWxCLEVBQXdCSyxrQkFBa0JsQyxNQUFNTyxhQUFOLENBQW9CdUIsS0FBcEIsQ0FBMEJLLGlCQUFwRSxFQUFmO0FBQ0QsT0FGRDtBQUdEO0FBQ0Q7QUFDQSxVQUFLakIsS0FBTCxHQUFhO0FBQ1hOLFlBQU1aLE1BQU1ZLElBQU4sSUFBYyxLQURUO0FBRVhELGlCQUFXWCxNQUFNVyxTQUFOLElBQW1CLDZCQUZuQjtBQUdYUyxlQUFTQSxPQUhFO0FBSVhTLHVCQUFpQkEsZUFKTjtBQUtYSyx3QkFBa0IsQ0FMUDtBQU1YRSx1QkFBaUI7QUFOTixLQUFiO0FBekNpQjtBQWlEbEI7Ozs7d0NBRW1CLENBRW5COzs7OENBRXlCO0FBQ3hCLFVBQUlDLGdCQUFnQixLQUFLckMsS0FBTCxDQUFXc0MsbUJBQVgsQ0FBK0JELGFBQW5EO0FBQ0EsVUFBSUUsTUFBTSxLQUFLdkMsS0FBTCxDQUFXc0MsbUJBQVgsQ0FBK0JFLFlBQXpDO0FBQ0EsVUFBSUMsWUFBWSxFQUFoQjtBQUNBLFVBQUksS0FBS3ZCLEtBQUwsQ0FBV2tCLGVBQVgsS0FBK0IsRUFBbkMsRUFBdUM7QUFDckNLLG9CQUFZRixHQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILElBQUlJLE1BQXhCLEVBQWdDRCxHQUFoQyxFQUFxQztBQUNuQyxjQUFJRSxZQUFZUCxjQUFjRSxJQUFJRyxDQUFKLENBQWQsQ0FBaEI7QUFDQSxjQUFJRSxVQUFVQyxJQUFWLENBQWVDLFdBQWYsR0FBNkJDLE9BQTdCLENBQXFDLEtBQUs3QixLQUFMLENBQVdrQixlQUFYLENBQTJCVSxXQUEzQixFQUFyQyxNQUFtRixDQUFDLENBQXhGLEVBQTJGO0FBQ3pGTCxzQkFBVVQsSUFBVixDQUFlTyxJQUFJRyxDQUFKLENBQWY7QUFDRCxXQUZELE1BRU87QUFDTDtBQUNBLGdCQUFJTSxXQUFXSixVQUFVSyxpQkFBVixDQUE0QkMsV0FBM0M7QUFDQSxnQkFBSUMsY0FBY0MsT0FBT0MsSUFBUCxDQUFZTCxRQUFaLENBQWxCO0FBQ0EsZ0JBQUlHLFlBQVlSLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsbUJBQUssSUFBSVcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxZQUFZUixNQUFoQyxFQUF3Q1csR0FBeEMsRUFBNkM7QUFDM0Msb0JBQUlOLFNBQVNHLFlBQVlHLENBQVosQ0FBVCxFQUF5QlQsSUFBekIsQ0FBOEJDLFdBQTlCLEdBQTRDQyxPQUE1QyxDQUFvRCxLQUFLN0IsS0FBTCxDQUFXa0IsZUFBWCxDQUEyQlUsV0FBM0IsRUFBcEQsTUFBa0csQ0FBQyxDQUF2RyxFQUEwRztBQUN4R0wsNEJBQVVULElBQVYsQ0FBZU8sSUFBSUcsQ0FBSixDQUFmO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7QUFDRCxhQUFPRCxTQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUlKLGdCQUFnQixLQUFLckMsS0FBTCxDQUFXc0MsbUJBQVgsQ0FBK0JELGFBQW5EO0FBQ0EsVUFBSWtCLGVBQWUsS0FBS0MsdUJBQUwsRUFBbkI7QUFDQSxVQUFJQyxTQUFTLEVBQWI7QUFDQSxVQUFJLEtBQUt6RCxLQUFMLENBQVdPLGFBQVgsQ0FBeUJDLElBQXpCLENBQThCa0QsaUJBQTlCLENBQWdERCxNQUFwRCxFQUE0RDtBQUMxREEsaUJBQVM7QUFBQTtBQUFBLFlBQUssV0FBVyxxQ0FBaEI7QUFDUCxtREFBTyxXQUFXLDRCQUFsQixFQUFnRCxNQUFLLE1BQXJELEVBQTRELGFBQWEsUUFBekU7QUFDTyxxQkFBUyxtQkFBTTtBQUFDLHFCQUFLRSxnQkFBTCxDQUFzQixPQUFLQyxLQUEzQjtBQUFrQyxhQUR6RDtBQURPLFNBQVQ7QUFJRDtBQUNELFVBQUksS0FBSzFDLEtBQUwsQ0FBV04sSUFBZixFQUFxQjtBQUNuQkcsZUFBTyxLQUFLRyxLQUFMLENBQVdFLE9BQVgsQ0FBbUJsQixPQUExQixFQUFtQzJELFFBQW5DLENBQTRDLFVBQTVDLEVBQXdEQyxXQUF4RCxDQUFvRSxXQUFwRTtBQUNBL0MsZUFBTywwQkFBUCxFQUFtQzhDLFFBQW5DLENBQTRDLFVBQTVDLEVBQXdEQyxXQUF4RCxDQUFvRSxXQUFwRTtBQUNELE9BSEQsTUFHTztBQUNML0MsZUFBTyxLQUFLRyxLQUFMLENBQVdFLE9BQVgsQ0FBbUJsQixPQUExQixFQUFtQzRELFdBQW5DLENBQStDLFVBQS9DLEVBQTJERCxRQUEzRCxDQUFvRSxXQUFwRTtBQUNBOUMsZUFBTywwQkFBUCxFQUFtQytDLFdBQW5DLENBQStDLFVBQS9DLEVBQTJERCxRQUEzRCxDQUFvRSxXQUFwRTtBQUNEO0FBQ0QsVUFBTTVELFFBQVEsSUFBZDtBQUNBLFVBQUk4RCxXQUFXLEtBQUsvRCxLQUFMLENBQVdPLGFBQVgsQ0FBeUJDLElBQXpCLENBQThCa0QsaUJBQTlCLENBQWdETSxLQUFoRCxHQUF3RCxLQUFLaEUsS0FBTCxDQUFXTyxhQUFYLENBQXlCQyxJQUF6QixDQUE4QmtELGlCQUE5QixDQUFnRE0sS0FBeEcsR0FBZ0gsYUFBL0g7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsdUJBQWhCO0FBQ0Usc0NBQUMscUJBQUQsSUFBVSxjQUFjLHNCQUF4QixFQUFnRCxhQUFhLHdCQUE3RDtBQUNFLGtCQUFRRCxRQURWLEVBQ29CLGVBQWUscUJBRG5DLEVBQzBELFlBQVksS0FBSzVDLEtBRDNFLEVBQ2tGLGVBQWUsS0FBS2IsYUFBTCxDQUFtQjJELEtBRHBILEdBREY7QUFHR1IsY0FISDtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVcsMkJBQWhCO0FBQ0U7QUFBQTtBQUFBO0FBQ0dGLHlCQUFhN0IsR0FBYixDQUFpQixVQUFTeEIsT0FBVCxFQUFrQmdFLEtBQWxCLEVBQXlCO0FBQ3pDLGtCQUFJdEIsWUFBWVAsY0FBY25DLE9BQWQsQ0FBaEI7QUFDQSxrQkFBSWlFLGFBQWFsRSxNQUFNaUIsS0FBTixDQUFZZ0IsZ0JBQVosS0FBaUNoQyxPQUFqQyxHQUEyQyxZQUEzQyxHQUEwRCxjQUEzRTtBQUNBLGtCQUFJa0UsVUFBVSxFQUFkO0FBQ0Esa0JBQUl4QixVQUFVeUIsYUFBZCxFQUE2QjtBQUMzQkQsMEJBQVUsdUNBQUssV0FBVyx1QkFBaEIsRUFBeUMsS0FBS3hCLFVBQVV5QixhQUF4RCxFQUF1RSxLQUFJLEVBQTNFLEdBQVY7QUFDRDtBQUNELGtCQUFJckIsV0FBVyxFQUFmO0FBQ0Esa0JBQUlKLFVBQVVLLGlCQUFWLENBQTRCQyxXQUE1QixDQUF3Q1AsTUFBeEMsR0FBaUQsQ0FBakQsSUFBc0QxQyxNQUFNaUIsS0FBTixDQUFZZ0IsZ0JBQVosS0FBaUNoQyxPQUEzRixFQUFvRztBQUNsRzhDLDJCQUFXLDhCQUFDLG1DQUFELElBQWlCLG1CQUFtQkosVUFBVUssaUJBQTlDLEdBQVg7QUFDRDtBQUNELGtCQUFJcUIsV0FBVzFCLFVBQVVDLElBQXpCO0FBQ0Esa0JBQUl1QixPQUFKLEVBQWE7QUFDWEUsMkJBQVc7QUFBQTtBQUFBO0FBQU8xQiw0QkFBVUM7QUFBakIsaUJBQVg7QUFDRDtBQUNELHFCQUFRO0FBQUE7QUFBQSxrQkFBSSxLQUFLcUIsS0FBVCxFQUFnQixXQUFXRSxVQUFVLFlBQVYsR0FBeUIsZUFBcEQ7QUFDTjtBQUFBO0FBQUEsb0JBQUcsV0FBVyxtQkFBQ25ELEtBQUQsRUFBVztBQUNyQkEsNEJBQU1zRCxjQUFOO0FBQ0F0RCw0QkFBTXVELGVBQU47QUFDQXZFLDRCQUFNd0UsVUFBTixDQUFpQnZFLE9BQWpCO0FBQ0QscUJBSkgsRUFLRSxXQUFXaUUsVUFMYjtBQUswQkcsMEJBTDFCO0FBTUNGO0FBTkQsaUJBRE07QUFTTHBCO0FBVEssZUFBUjtBQVdELGFBMUJBO0FBREg7QUFERjtBQUpGLE9BREY7QUFzQ0Q7OztxQ0FFZ0IwQixVLEVBQVk7QUFDM0IsVUFBSUMsY0FBYzVELE9BQU8sNkJBQVAsRUFBc0M2RCxHQUF0QyxFQUFsQjtBQUNBLFdBQUszQyxRQUFMLENBQWMsRUFBQ0csaUJBQWlCdUMsV0FBbEIsRUFBZDtBQUNEOzs7K0JBRVVFLEUsRUFBSTtBQUNiLFdBQUs3RSxLQUFMLENBQVdzQyxtQkFBWCxDQUErQndDLGFBQS9CLENBQTZDRCxFQUE3QztBQUNBLFdBQUs3RSxLQUFMLENBQVcrRSxrQkFBWCxDQUE4QkYsRUFBOUI7QUFDQSxXQUFLNUMsUUFBTCxDQUFjLEVBQUNDLGtCQUFrQjJDLEVBQW5CLEVBQWQ7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBSzVDLFFBQUwsQ0FBYyxFQUFDckIsTUFBTSxJQUFQLEVBQWQ7QUFDQSxXQUFLWixLQUFMLENBQVdPLGFBQVgsQ0FBeUJ5RSxnQkFBekIsQ0FBMEMsSUFBMUM7QUFDRDs7OzRCQUVPO0FBQ04sV0FBSy9DLFFBQUwsQ0FBYyxFQUFDckIsTUFBTSxLQUFQLEVBQWQ7QUFDRDs7O3VDQUVrQnFFLFMsRUFBV0MsUyxFQUFXQyxRLEVBQVU7QUFDakQsVUFBSSxLQUFLbkYsS0FBTCxDQUFXTyxhQUFYLENBQXlCQyxJQUF6QixDQUE4QjRFLE9BQTlCLElBQXlDLENBQUMsS0FBS2xFLEtBQUwsQ0FBV04sSUFBekQsRUFBK0Q7QUFDN0QsWUFBSXlFLFdBQVdDLG9CQUFNQyxRQUFOLENBQWUsT0FBZixDQUFmO0FBQ0EsWUFBSUYsYUFBYSxLQUFLRyxXQUFMLENBQWlCM0MsSUFBbEMsRUFBd0M7QUFDdEN5Qyw4QkFBTUcsVUFBTixDQUFpQixPQUFqQixFQUEwQixFQUExQjtBQUNEO0FBQ0Y7QUFDRjs7OztFQTVLNENDLGdCOztrQkFBMUIzRixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHJCOzs7Ozs7Ozs7OytlQWJBOzs7Ozs7Ozs7Ozs7O0lBZWE0RixlLFdBQUFBLGU7OztBQUVYLDJCQUFZM0YsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZIQUNYQSxLQURXO0FBR2xCOzs7OzZCQUVRO0FBQ1AsVUFBTUMsUUFBUSxJQUFkO0FBQ0EsVUFBTStDLFdBQVcsS0FBS2hELEtBQUwsQ0FBV2lELGlCQUFYLENBQTZCQyxXQUE5QztBQUNBLFVBQU0wQyxXQUFXLFNBQVhBLFFBQVcsQ0FBU0MsR0FBVCxFQUFjO0FBQzdCLFlBQUlqQyxRQUFRN0MsT0FBTyx5QkFBeUI4RSxHQUFoQyxFQUFxQ2pCLEdBQXJDLEVBQVo7QUFDQTNFLGNBQU1ELEtBQU4sQ0FBWWlELGlCQUFaLENBQThCQyxXQUE5QixDQUEwQzJDLEdBQTFDLEVBQStDQyxhQUEvQyxDQUE2RGxDLEtBQTdEO0FBQ0QsT0FIRDtBQUlBLGFBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVyxjQUFmO0FBQ0daLGlCQUFTdEIsR0FBVCxDQUFhLFVBQVN4QixPQUFULEVBQWtCZ0UsS0FBbEIsRUFBeUI7QUFDckMsY0FBSTZCLFFBQVE7QUFBQTtBQUFBLGNBQUksS0FBSzdCLEtBQVQ7QUFDVjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBT2hFLHdCQUFRMkM7QUFBZixlQURGO0FBRUUsdURBQU8sSUFBSyx3QkFBdUJxQixLQUFuQyxFQUEwQyxXQUFXLG9CQUFyRCxFQUEyRSxNQUFLLE9BQWhGLEVBQXdGLFNBQVM7QUFBQSx5QkFBTTBCLFNBQVMxQixLQUFULENBQU47QUFBQSxpQkFBakc7QUFDTyxxQkFBSyxDQURaLEVBQ2UsS0FBSyxHQURwQixFQUN5QixNQUFNLEVBRC9CLEVBQ21DLGNBQWNoRSxRQUFROEYsT0FEekQ7QUFGRjtBQURVLFdBQVo7QUFPQSxpQkFBT0QsS0FBUDtBQUNELFNBVEE7QUFESCxPQURGO0FBY0Q7Ozs7RUE1QmtDTCxnQiIsImZpbGUiOiI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyLmpzeFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtPdmVybGF5Q29udHJvbHN9IGZyb20gXCIuL2M0Zy1vdmVybGF5LWNvbnRyb2xzLmpzeFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VsYXllclN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfQkFTRUxBWUVSO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctYmFzZWxheWVyLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuYmFzZWxheWVyU3dpdGNoZXIgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICBsZXQgYmFzZWxheWVyTG9hZGVkID0gZmFsc2U7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuYmFzZWxheWVyTG9hZGVkKSB7XG4gICAgICBiYXNlbGF5ZXJMb2FkZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lmhvb2tfYmFzZWxheWVyX2xvYWRlZCA9IHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaG9va19iYXNlbGF5ZXJfbG9hZGVkIHx8IFtdO1xuICAgICAgcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQucHVzaChmdW5jdGlvbigpIHtcbiAgICAgICAgc2NvcGUuc2V0U3RhdGUoe2Jhc2VsYXllckxvYWRlZDogdHJ1ZSwgY3VycmVudEJhc2VsYXllcjogcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5hY3RpdmVCYXNlbGF5ZXJJZH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHN0YXRlIHZhcmlhYmxlcyAoZXZlcnkgcHJvcGVydHkgdGhhdCBoYXMgaW5mbHVlbmNlIG9uIHRoaXMgY29tcG9uZW50KVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctYmFzZWxheWVyc3dpdGNoZXItcGFuZWxcIixcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICBiYXNlbGF5ZXJMb2FkZWQ6IGJhc2VsYXllckxvYWRlZCxcbiAgICAgIGN1cnJlbnRCYXNlbGF5ZXI6IDAsXG4gICAgICBiYXNlbGF5ZXJGaWx0ZXI6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGdldEZpbHRlcmVkQmFzZWxheWVySWRzKCkge1xuICAgIGxldCBhcnJCYXNlbGF5ZXJzID0gdGhpcy5wcm9wcy5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnM7XG4gICAgbGV0IGlkcyA9IHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5iYXNlbGF5ZXJJZHM7XG4gICAgbGV0IHJldHVybklkcyA9IFtdO1xuICAgIGlmICh0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlciA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuSWRzID0gaWRzO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYmFzZWxheWVyID0gYXJyQmFzZWxheWVyc1tpZHNbaV1dO1xuICAgICAgICBpZiAoYmFzZWxheWVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc3RhdGUuYmFzZWxheWVyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybklkcy5wdXNoKGlkc1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgYW4gb3ZlcmxheSBtYXRjaGVzXG4gICAgICAgICAgbGV0IG92ZXJsYXlzID0gYmFzZWxheWVyLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzO1xuICAgICAgICAgIGxldCBvdmVybGF5S2V5cyA9IE9iamVjdC5rZXlzKG92ZXJsYXlzKTtcbiAgICAgICAgICBpZiAob3ZlcmxheUtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvdmVybGF5S2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBpZiAob3ZlcmxheXNbb3ZlcmxheUtleXNbal1dLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc3RhdGUuYmFzZWxheWVyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybklkcy5wdXNoKGlkc1tpXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldHVybklkcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYXJyQmFzZWxheWVycyA9IHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzO1xuICAgIGxldCBiYXNlTGF5ZXJJZHMgPSB0aGlzLmdldEZpbHRlcmVkQmFzZWxheWVySWRzKCk7XG4gICAgbGV0IGZpbHRlciA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5iYXNlbGF5ZXJzd2l0Y2hlci5maWx0ZXIpIHtcbiAgICAgIGZpbHRlciA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXItZmlsdGVyIHdpdGhvdXQtYnV0dG9uXCJ9PlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXItZmlsdGVyLWZpZWxkXCJ9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e1wiXFx1ZjAwMlwifVxuICAgICAgICAgICAgICAgb25JbnB1dD17KCkgPT4ge3RoaXMuZmlsdGVyQmFzZWxheWVycyh0aGlzLnZhbHVlKX19Lz5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLWJhc2VsYXllci1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1iYXNlbGF5ZXItY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgaGVhZGxpbmUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5iYXNlbGF5ZXJzd2l0Y2hlci5sYWJlbCA/IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmJhc2VsYXllcnN3aXRjaGVyLmxhYmVsIDogXCJCYXNpc2thcnRlblwiO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLXdyYXBwZXJcIn0+XG4gICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWJhc2VsYXllci1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLWJhc2VsYXllci1oZWFkbGluZVwifVxuICAgICAgICAgIGhlYWRlcj17aGVhZGxpbmV9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLWJhc2VsYXllci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9Lz5cbiAgICAgICAge2ZpbHRlcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllcnRyZWUtY29udGVudFwifT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7YmFzZUxheWVySWRzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICBsZXQgYmFzZWxheWVyID0gYXJyQmFzZWxheWVyc1tlbGVtZW50XTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDbHMgPSBzY29wZS5zdGF0ZS5jdXJyZW50QmFzZWxheWVyID09PSBlbGVtZW50ID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiO1xuICAgICAgICAgICAgICBsZXQgcHJldmlldyA9IFwiXCI7XG4gICAgICAgICAgICAgIGlmIChiYXNlbGF5ZXIucHJldmlld19pbWFnZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXcgPSA8aW1nIGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLXByZXZpZXdcIn0gc3JjPXtiYXNlbGF5ZXIucHJldmlld19pbWFnZX0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBvdmVybGF5cyA9IFwiXCI7XG4gICAgICAgICAgICAgIGlmIChiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXMubGVuZ3RoID4gMCAmJiBzY29wZS5zdGF0ZS5jdXJyZW50QmFzZWxheWVyID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheXMgPSA8T3ZlcmxheUNvbnRyb2xzIG92ZXJsYXlDb250cm9sbGVyPXtiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXJ9Lz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IG5hbWVOb2RlID0gYmFzZWxheWVyLm5hbWU7XG4gICAgICAgICAgICAgIGlmIChwcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgbmFtZU5vZGUgPSA8c3Bhbj57YmFzZWxheWVyLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17cHJldmlldyA/IFwid2l0aC1pbWFnZVwiIDogXCJ3aXRob3V0LWltYWdlXCJ9PlxuICAgICAgICAgICAgICAgIDxhIG9uTW91c2VVcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5lbnRyeUNsaWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2xhc3NOYW1lPXtjdXJyZW50Q2xzfT57bmFtZU5vZGV9XG4gICAgICAgICAgICAgICAge3ByZXZpZXd9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIHtvdmVybGF5c31cbiAgICAgICAgICAgICAgPC9saT4pO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBmaWx0ZXJCYXNlbGF5ZXJzKGZpZWxkVmFsdWUpIHtcbiAgICBsZXQgZmlsdGVyVmFsdWUgPSBqUXVlcnkoXCIuYzRnLWJhc2VsYXllci1maWx0ZXItZmllbGRcIikudmFsKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YmFzZWxheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZW50cnlDbGljayhpZCkge1xuICAgIHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5zaG93QmFzZUxheWVyKGlkKTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUFjdGl2ZUxheWVycyhpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudEJhc2VsYXllcjogaWR9KTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG92ZXJsYXlzID0gdGhpcy5wcm9wcy5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cztcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgbGV0IHZhbHVlID0galF1ZXJ5KFwiI2M0Zy1vdmVybGF5LXRvZ2dsZV9cIiArIGlkeCkudmFsKCk7XG4gICAgICBzY29wZS5wcm9wcy5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1tpZHhdLmNoYW5nZU9wYWNpdHkodmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLW92ZXJsYXlzXCJ9PlxuICAgICAgICB7b3ZlcmxheXMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IGVudHJ5ID0gPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxzcGFuPntlbGVtZW50Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQgPXtcImM0Zy1vdmVybGF5LXRvZ2dsZV9cIisgaW5kZXh9IGNsYXNzTmFtZT17XCJjNGctb3ZlcmxheS10b2dnbGVcIn0gdHlwZT1cInJhbmdlXCIgb25JbnB1dD17KCkgPT4gY2FsbGJhY2soaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgbWluPXswfSBtYXg9ezEwMH0gc3RlcD17MTB9IGRlZmF1bHRWYWx1ZT17ZWxlbWVudC5vcGFjaXR5fS8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT47XG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==