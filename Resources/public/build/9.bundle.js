(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

var Titlebar = _react2.default.lazy(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx", 7));
});

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
        _react2.default.createElement(
          _react.Suspense,
          { fallback: _react2.default.createElement(
              "div",
              null,
              "Loading..."
            ) },
          _react2.default.createElement(Titlebar, { wrapperClass: "c4g-baselayer-header", headerClass: "c4g-baselayer-headline",
            header: headline, closeBtnClass: "c4g-baselayer-close", closeBtnCb: this.close, closeBtnTitle: this.langConstants.CLOSE })
        ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWJhc2VsYXllcnN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJsYXktY29udHJvbHMuanN4Il0sIm5hbWVzIjpbIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiQmFzZWxheWVyU3dpdGNoZXIiLCJwcm9wcyIsInNjb3BlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRpdGxlIiwiQ1RSTF9CQVNFTEFZRVIiLCJjbGFzc05hbWUiLCJvcGVuIiwiZXh0ZXJuYWwiLCJhcHBlbmRDaGlsZCIsImpRdWVyeSIsIm9uIiwiZXZlbnQiLCJzdGF0ZSIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImJhc2VsYXllclN3aXRjaGVyIiwibWFwIiwiYWRkQ29udHJvbCIsImJpbmQiLCJiYXNlbGF5ZXJMb2FkZWQiLCJwcm94eSIsImhvb2tfYmFzZWxheWVyX2xvYWRlZCIsInB1c2giLCJzZXRTdGF0ZSIsImN1cnJlbnRCYXNlbGF5ZXIiLCJhY3RpdmVCYXNlbGF5ZXJJZCIsImJhc2VsYXllckZpbHRlciIsImFyckJhc2VsYXllcnMiLCJiYXNlbGF5ZXJDb250cm9sbGVyIiwiaWRzIiwiYmFzZWxheWVySWRzIiwicmV0dXJuSWRzIiwiaSIsImxlbmd0aCIsImJhc2VsYXllciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJvdmVybGF5cyIsIm92ZXJsYXlDb250cm9sbGVyIiwiYXJyT3ZlcmxheXMiLCJvdmVybGF5S2V5cyIsIk9iamVjdCIsImtleXMiLCJqIiwiYmFzZUxheWVySWRzIiwiZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMiLCJmaWx0ZXIiLCJiYXNlbGF5ZXJzd2l0Y2hlciIsImZpbHRlckJhc2VsYXllcnMiLCJ2YWx1ZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoZWFkbGluZSIsImxhYmVsIiwiQ0xPU0UiLCJpbmRleCIsImN1cnJlbnRDbHMiLCJwcmV2aWV3IiwicHJldmlld19pbWFnZSIsIm5hbWVOb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlbnRyeUNsaWNrIiwiZmllbGRWYWx1ZSIsImZpbHRlclZhbHVlIiwidmFsIiwiaWQiLCJzaG93QmFzZUxheWVyIiwiY2hhbmdlQWN0aXZlTGF5ZXJzIiwic2V0T3BlbkNvbXBvbmVudCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSIsIkNvbXBvbmVudCIsIk92ZXJsYXlDb250cm9scyIsImNhbGxiYWNrIiwiaWR4IiwiY2hhbmdlT3BhY2l0eSIsImVudHJ5Iiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7K2VBbEJBOzs7Ozs7Ozs7Ozs7O0FBZUEsSUFBTUEsV0FBV0MsZ0JBQU1DLElBQU4sQ0FBVztBQUFBLFNBQU0saUtBQU47QUFBQSxDQUFYLENBQWpCOztJQUtxQkMsaUI7OztBQUVuQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNJQUNYQSxLQURXOztBQUVqQixRQUFNQyxhQUFOO0FBQ0E7QUFDQSxRQUFJQyxVQUFVQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxRQUFJQyxTQUFTRixTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLDhCQUFZTixNQUFNTyxhQUFOLENBQW9CQyxJQUFoQyxDQUFyQjtBQUNBSCxXQUFPSSxLQUFQLEdB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bUI7QUFBQTs7QUFBQSw2SEFDWEEsS0FEVztBQUdsQjs7Ozs2QkFFUTtBQUNQLFVBQU1DLFFBQVEsSUFBZDtBQUNBLFVBQU0rQyxXQUFXLEtBQUtoRCxLQUFMLENBQVdpRCxpQkFBWCxDQUE2QkMsV0FBOUM7QUFDQSxVQUFNMEMsV0FBVyxTQUFYQSxRQUFXLENBQVNDLEdBQVQsRUFBYztBQUM3QixZQUFJakMsUUFBUTdDLE9BQU8seUJBQXlCOEUsR0FBaEMsRUFBcUNqQixHQUFyQyxFQUFaO0FBQ0EzRSxjQUFNRCxLQUFOLENBQVlpRCxpQkFBWixDQUE4QkMsV0FBOUIsQ0FBMEMyQyxHQUExQyxFQUErQ0MsYUFBL0MsQ0FBNkRsQyxLQUE3RDtBQUNELE9BSEQ7QUFJQSxhQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVcsY0FBZjtBQUNHWixpQkFBU3RCLEdBQVQsQ0FBYSxVQUFTeEIsT0FBVCxFQUFrQmdFLEtBQWxCLEVBQXlCO0FBQ3JDLGNBQUk2QixRQUFRO0FBQUE7QUFBQSxjQUFJLEtBQUs3QixLQUFUO0FBQ1Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQU9oRSx3QkFBUTJDO0FBQWYsZUFERjtBQUVFLHVEQUFPLElBQUssd0JBQXVCcUIsS0FBbkMsRUFBMEMsV0FBVyxvQkFBckQsRUFBMkUsTUFBSyxPQUFoRixFQUF3RixTQUFTO0FBQUEseUJBQU0wQixTQUFTMUIsS0FBVCxDQUFOO0FBQUEsaUJBQWpHO0FBQ08scUJBQUssQ0FEWixFQUNlLEtBQUssR0FEcEIsRUFDeUIsTUFBTSxFQUQvQixFQUNtQyxjQUFjaEUsUUFBUThGLE9BRHpEO0FBRkY7QUFEVSxXQUFaO0FBT0EsaUJBQU9ELEtBQVA7QUFDRCxTQVRBO0FBREgsT0FERjtBQWNEOzs7O0VBNUJrQ0wsZ0IiLCJmaWxlIjoiOS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7T3ZlcmxheUNvbnRyb2xzfSBmcm9tIFwiLi9jNGctb3ZlcmxheS1jb250cm9scy5qc3hcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlbGF5ZXJTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0JBU0VMQVlFUjtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLWJhc2VsYXllci1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmJhc2VsYXllclN3aXRjaGVyID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgbGV0IGJhc2VsYXllckxvYWRlZCA9IGZhbHNlO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmJhc2VsYXllckxvYWRlZCkge1xuICAgICAgYmFzZWxheWVyTG9hZGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lmhvb2tfYmFzZWxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICAgIHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaG9va19iYXNlbGF5ZXJfbG9hZGVkLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjb3BlLnNldFN0YXRlKHtiYXNlbGF5ZXJMb2FkZWQ6IHRydWUsIGN1cnJlbnRCYXNlbGF5ZXI6IHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuYWN0aXZlQmFzZWxheWVySWR9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBzdGF0ZSB2YXJpYWJsZXMgKGV2ZXJ5IHByb3BlcnR5IHRoYXQgaGFzIGluZmx1ZW5jZSBvbiB0aGlzIGNvbXBvbmVudClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWJhc2VsYXllcnN3aXRjaGVyLXBhbmVsXCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgYmFzZWxheWVyTG9hZGVkOiBiYXNlbGF5ZXJMb2FkZWQsXG4gICAgICBjdXJyZW50QmFzZWxheWVyOiAwLFxuICAgICAgYmFzZWxheWVyRmlsdGVyOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBnZXRGaWx0ZXJlZEJhc2VsYXllcklkcygpIHtcbiAgICBsZXQgYXJyQmFzZWxheWVycyA9IHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzO1xuICAgIGxldCBpZHMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYmFzZWxheWVySWRzO1xuICAgIGxldCByZXR1cm5JZHMgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5iYXNlbGF5ZXJGaWx0ZXIgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybklkcyA9IGlkcztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJhc2VsYXllciA9IGFyckJhc2VsYXllcnNbaWRzW2ldXTtcbiAgICAgICAgaWYgKGJhc2VsYXllci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm5JZHMucHVzaChpZHNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIGFuIG92ZXJsYXkgbWF0Y2hlc1xuICAgICAgICAgIGxldCBvdmVybGF5cyA9IGJhc2VsYXllci5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cztcbiAgICAgICAgICBsZXQgb3ZlcmxheUtleXMgPSBPYmplY3Qua2V5cyhvdmVybGF5cyk7XG4gICAgICAgICAgaWYgKG92ZXJsYXlLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3ZlcmxheUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKG92ZXJsYXlzW292ZXJsYXlLZXlzW2pdXS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5JZHMucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5JZHM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFyckJhc2VsYXllcnMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVycztcbiAgICBsZXQgYmFzZUxheWVySWRzID0gdGhpcy5nZXRGaWx0ZXJlZEJhc2VsYXllcklkcygpO1xuICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIuZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLWZpbHRlciB3aXRob3V0LWJ1dHRvblwifT5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLWZpbHRlci1maWVsZFwifSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtcIlxcdWYwMDJcIn1cbiAgICAgICAgICAgICAgIG9uSW5wdXQ9eygpID0+IHt0aGlzLmZpbHRlckJhc2VsYXllcnModGhpcy52YWx1ZSl9fS8+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1iYXNlbGF5ZXItY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctYmFzZWxheWVyLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGhlYWRsaW5lID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIubGFiZWwgPyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5iYXNlbGF5ZXJzd2l0Y2hlci5sYWJlbCA6IFwiQmFzaXNrYXJ0ZW5cIjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctYmFzZWxheWVyLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctYmFzZWxheWVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGxpbmV9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLWJhc2VsYXllci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9Lz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAge2ZpbHRlcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllcnRyZWUtY29udGVudFwifT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7YmFzZUxheWVySWRzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICBsZXQgYmFzZWxheWVyID0gYXJyQmFzZWxheWVyc1tlbGVtZW50XTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDbHMgPSBzY29wZS5zdGF0ZS5jdXJyZW50QmFzZWxheWVyID09PSBlbGVtZW50ID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiO1xuICAgICAgICAgICAgICBsZXQgcHJldmlldyA9IFwiXCI7XG4gICAgICAgICAgICAgIGlmIChiYXNlbGF5ZXIucHJldmlld19pbWFnZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXcgPSA8aW1nIGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLXByZXZpZXdcIn0gc3JjPXtiYXNlbGF5ZXIucHJldmlld19pbWFnZX0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBvdmVybGF5cyA9IFwiXCI7XG4gICAgICAgICAgICAgIGlmIChiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXMubGVuZ3RoID4gMCAmJiBzY29wZS5zdGF0ZS5jdXJyZW50QmFzZWxheWVyID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheXMgPSA8T3ZlcmxheUNvbnRyb2xzIG92ZXJsYXlDb250cm9sbGVyPXtiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXJ9Lz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IG5hbWVOb2RlID0gYmFzZWxheWVyLm5hbWU7XG4gICAgICAgICAgICAgIGlmIChwcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgbmFtZU5vZGUgPSA8c3Bhbj57YmFzZWxheWVyLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17cHJldmlldyA/IFwid2l0aC1pbWFnZVwiIDogXCJ3aXRob3V0LWltYWdlXCJ9PlxuICAgICAgICAgICAgICAgIDxhIG9uTW91c2VVcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5lbnRyeUNsaWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2xhc3NOYW1lPXtjdXJyZW50Q2xzfT57bmFtZU5vZGV9XG4gICAgICAgICAgICAgICAge3ByZXZpZXd9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIHtvdmVybGF5c31cbiAgICAgICAgICAgICAgPC9saT4pO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBmaWx0ZXJCYXNlbGF5ZXJzKGZpZWxkVmFsdWUpIHtcbiAgICBsZXQgZmlsdGVyVmFsdWUgPSBqUXVlcnkoXCIuYzRnLWJhc2VsYXllci1maWx0ZXItZmllbGRcIikudmFsKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YmFzZWxheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZW50cnlDbGljayhpZCkge1xuICAgIHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5zaG93QmFzZUxheWVyKGlkKTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUFjdGl2ZUxheWVycyhpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudEJhc2VsYXllcjogaWR9KTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG92ZXJsYXlzID0gdGhpcy5wcm9wcy5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cztcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgbGV0IHZhbHVlID0galF1ZXJ5KFwiI2M0Zy1vdmVybGF5LXRvZ2dsZV9cIiArIGlkeCkudmFsKCk7XG4gICAgICBzY29wZS5wcm9wcy5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1tpZHhdLmNoYW5nZU9wYWNpdHkodmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLW92ZXJsYXlzXCJ9PlxuICAgICAgICB7b3ZlcmxheXMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IGVudHJ5ID0gPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxzcGFuPntlbGVtZW50Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQgPXtcImM0Zy1vdmVybGF5LXRvZ2dsZV9cIisgaW5kZXh9IGNsYXNzTmFtZT17XCJjNGctb3ZlcmxheS10b2dnbGVcIn0gdHlwZT1cInJhbmdlXCIgb25JbnB1dD17KCkgPT4gY2FsbGJhY2soaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgbWluPXswfSBtYXg9ezEwMH0gc3RlcD17MTB9IGRlZmF1bHRWYWx1ZT17ZWxlbWVudC5vcGFjaXR5fS8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT47XG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==