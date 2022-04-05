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

        if (proxy.activeBaselayerId) {
          parameters.push(proxy.activeBaselayerId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcGVybWFsaW5rX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUpBLElBQU1BLFFBQVEsZ0JBQUdDLGtCQUFNQyxJQUFOLENBQVc7QUFBQSxTQUFNLHVLQUFOO0FBQUEsQ0FBWCxDQUFqQjs7SUFNcUJDOzs7OztBQUVuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsUUFBTUMsS0FBSyxpREFBWCxDQUhpQixDQUlqQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFFBQUlFLGFBQWEsR0FBRyw4QkFBWU4sS0FBSyxDQUFDTyxhQUFOLENBQW9CQyxJQUFoQyxDQUFwQjtBQUNBSCxJQUFBQSxNQUFNLENBQUNJLEtBQVAsR0FBZUgsYUFBYSxDQUFDSSxjQUE3QjtBQUNBUixJQUFBQSxPQUFPLENBQUNTLFNBQVIsR0FBb0IsbURBQXBCOztBQUNBLFFBQUlYLEtBQUssQ0FBQ1ksSUFBVixFQUFnQjtBQUNkVixNQUFBQSxPQUFPLENBQUNTLFNBQVIsSUFBcUIsVUFBckI7QUFDRCxLQUZELE1BRU87QUFDTFQsTUFBQUEsT0FBTyxDQUFDUyxTQUFSLElBQXFCLFdBQXJCO0FBQ0Q7O0FBQ0QsUUFBSVgsS0FBSyxDQUFDYSxRQUFWLEVBQW9CO0FBQ2xCWCxNQUFBQSxPQUFPLENBQUNTLFNBQVIsSUFBcUIsZUFBckI7QUFDRDs7QUFDRFQsSUFBQUEsT0FBTyxDQUFDWSxXQUFSLENBQW9CVCxNQUFwQjtBQUNBVSxJQUFBQSxNQUFNLENBQUNiLE9BQUQsQ0FBTixDQUFnQmMsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsVUFBU0MsS0FBVCxFQUFnQjtBQUMxQyxVQUFJaEIsS0FBSyxDQUFDaUIsS0FBTixDQUFZTixJQUFoQixFQUFzQjtBQUNwQlgsUUFBQUEsS0FBSyxDQUFDa0IsS0FBTjtBQUNELE9BRkQsTUFFTztBQUNMbEIsUUFBQUEsS0FBSyxDQUFDVyxJQUFOO0FBQ0Q7QUFDRixLQU5EO0FBT0EsUUFBSUwsYUFBYSxHQUFHUCxLQUFLLENBQUNPLGFBQTFCO0FBQ0EsUUFBSWEsT0FBTyxHQUFHLElBQUlDLGdCQUFKLENBQVk7QUFBQ25CLE1BQUFBLE9BQU8sRUFBRUEsT0FBVjtBQUFtQm9CLE1BQUFBLE1BQU0sRUFBRXRCLEtBQUssQ0FBQ3NCO0FBQWpDLEtBQVosQ0FBZDtBQUNBZixJQUFBQSxhQUFhLENBQUNnQixZQUFkLENBQTJCQyxRQUEzQixDQUFvQ0MsZUFBcEMsR0FBc0RMLE9BQXREO0FBQ0FiLElBQUFBLGFBQWEsQ0FBQ21CLEdBQWQsQ0FBa0JDLFVBQWxCLENBQTZCUCxPQUE3QjtBQUNBLFVBQUtSLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVnQixJQUFWLGdEQUFaO0FBQ0EsVUFBS1QsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV1MsSUFBWCxnREFBYjtBQUNBLFVBQUt0QixhQUFMLEdBQXFCLDhCQUFZLE1BQUtOLEtBQUwsQ0FBV08sYUFBWCxDQUF5QkMsSUFBckMsQ0FBckI7QUFFQSxVQUFLVSxLQUFMLEdBQWE7QUFDWE4sTUFBQUEsSUFBSSxFQUFFLEtBREs7QUFFWGlCLE1BQUFBLElBQUksRUFBRTtBQUZLLEtBQWI7QUFsQ2lCO0FBc0NsQjs7OztXQUVELGtCQUFTO0FBQUE7O0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFO0FBQWhCLHNCQUNFLGdDQUFDLGVBQUQ7QUFBVSxnQkFBUSxlQUFFO0FBQXBCLHNCQUNFLGdDQUFDLFFBQUQ7QUFBVSxvQkFBWSxFQUFFLHNCQUF4QjtBQUFnRCxtQkFBVyxFQUFFLCtCQUE3RDtBQUNVLGNBQU0sRUFBRSxXQURsQjtBQUMrQixxQkFBYSxFQUFFLHFCQUQ5QztBQUNxRSxrQkFBVSxFQUFFLEtBQUtWLEtBRHRGO0FBQzZGLHFCQUFhLEVBQUUsS0FBS2IsYUFBTCxDQUFtQndCO0FBRC9ILFFBREYsQ0FERixlQU1FO0FBQUssaUJBQVMsRUFBRTtBQUFoQixzQkFDRTtBQUFVLFlBQUksRUFBQyxJQUFmO0FBQW9CLFlBQUksRUFBQyxHQUF6QjtBQUE2QixVQUFFLEVBQUUsZ0JBQWpDO0FBQW1ELGFBQUssRUFBRSxLQUFLWixLQUFMLENBQVdXLElBQXJFO0FBQTJFLGdCQUFRLEVBQUU7QUFBckYsUUFERixlQUVFO0FBQVEsaUJBQVMsRUFBRUUsOEJBQWFDLElBQWIsR0FBb0IsR0FBcEIsR0FBMEJELDhCQUFhRSxJQUExRDtBQUFnRSxhQUFLLEVBQUUsS0FBSzNCLGFBQUwsQ0FBbUI0QixpQkFBMUY7QUFDUSxpQ0FBdUI7QUFEL0IsUUFGRixlQUlFO0FBQVEsaUJBQVMsRUFBRUgsOEJBQWFJLE9BQWIsR0FBdUIsR0FBdkIsR0FBNkJKLDhCQUFhRSxJQUE3RDtBQUFtRSxhQUFLLEVBQUUsS0FBSzNCLGFBQUwsQ0FBbUI2QixPQUE3RjtBQUNFLGlCQUFTLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNDLDRCQUFMLENBQWtDO0FBQUNkLFlBQUFBLE1BQU0sRUFBRSxNQUFJLENBQUNlO0FBQWQsV0FBbEMsQ0FBTjtBQUFBO0FBRGIsUUFKRixDQU5GLENBREY7QUFnQkQ7OztXQUVELDRCQUFtQkMsU0FBbkIsRUFBOEJDLFNBQTlCLEVBQXlDQyxRQUF6QyxFQUFtRDtBQUNqRCxVQUFLRCxTQUFTLENBQUMzQixJQUFWLEtBQW1CLEtBQUtNLEtBQUwsQ0FBV04sSUFBL0IsSUFBd0MyQixTQUFTLENBQUNWLElBQVYsS0FBbUIsS0FBS1gsS0FBTCxDQUFXVyxJQUExRSxFQUFnRjtBQUM5RSxhQUFLTyw0QkFBTCxDQUFrQztBQUFDZCxVQUFBQSxNQUFNLEVBQUUsS0FBS2U7QUFBZCxTQUFsQztBQUNEOztBQUNELFVBQUlFLFNBQVMsQ0FBQzNCLElBQVYsSUFBa0IsQ0FBQyxLQUFLTSxLQUFMLENBQVdOLElBQWxDLEVBQXdDO0FBQ3RDRyxRQUFBQSxNQUFNLENBQUMsMEJBQUQsQ0FBTixDQUFtQzBCLFdBQW5DLENBQStDViw4QkFBYVcsSUFBNUQsRUFBa0VDLFFBQWxFLENBQTJFWiw4QkFBYUQsS0FBeEY7QUFDRDs7QUFDRCxVQUFJLEtBQUs5QixLQUFMLENBQVdPLGFBQVgsQ0FBeUJDLElBQXpCLENBQThCb0MsT0FBOUIsSUFBeUMsQ0FBQyxLQUFLMUIsS0FBTCxDQUFXTixJQUF6RCxFQUErRDtBQUM3RCxZQUFJaUMsUUFBUSxHQUFHQyxvQkFBTUMsUUFBTixDQUFlLE9BQWYsQ0FBZjs7QUFDQSxZQUFJRixRQUFRLEtBQUssS0FBS0csV0FBTCxDQUFpQkMsSUFBbEMsRUFBd0M7QUFDdENILDhCQUFNSSxVQUFOLENBQWlCLE9BQWpCLEVBQTBCLEVBQTFCO0FBQ0Q7QUFDRjs7QUFDRCxVQUFJLEtBQUtoQyxLQUFMLENBQVdOLElBQWYsRUFBcUI7QUFDbkJHLFFBQUFBLE1BQU0sQ0FBQywwQkFBRCxDQUFOLENBQW1DNEIsUUFBbkMsQ0FBNENaLDhCQUFhVyxJQUF6RCxFQUErREQsV0FBL0QsQ0FBMkVWLDhCQUFhRCxLQUF4RjtBQUNEO0FBQ0Y7OztXQUVELDZCQUFvQjtBQUNsQixXQUFLcUIsU0FBTCxHQUFpQmhELFFBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsaUJBQXZCLENBQWpCO0FBQ0EsVUFBSUMsVUFBVSxHQUFHbEQsUUFBUSxDQUFDaUQsYUFBVCxDQUF1QixNQUFNckIsOEJBQWFDLElBQW5CLEdBQTBCLEdBQTFCLEdBQWdDRCw4QkFBYUUsSUFBcEUsQ0FBakI7O0FBQ0EsVUFBSTtBQUNGLFlBQUlxQixXQUFKLENBQWdCRCxVQUFoQjtBQUNELE9BRkQsQ0FFRSxPQUFNRSxLQUFOLEVBQWE7QUFDYjtBQUNBQyxRQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSx3REFBYjtBQUNEO0FBQ0Y7OztXQUVELGdCQUFPO0FBQ0wxQyxNQUFBQSxNQUFNLENBQUMsS0FBS2IsT0FBTixDQUFOLENBQXFCeUMsUUFBckIsQ0FBOEJaLDhCQUFhVyxJQUEzQztBQUNBM0IsTUFBQUEsTUFBTSxDQUFDLDBCQUFELENBQU4sQ0FBbUMwQixXQUFuQyxDQUErQ1YsOEJBQWFELEtBQTVELEVBQW1FYSxRQUFuRSxDQUE0RVosOEJBQWFXLElBQXpGO0FBQ0EsV0FBS2dCLFFBQUwsQ0FBYztBQUFDOUMsUUFBQUEsSUFBSSxFQUFFO0FBQVAsT0FBZDtBQUNBLFdBQUtaLEtBQUwsQ0FBV08sYUFBWCxDQUF5Qm9ELGdCQUF6QixDQUEwQyxJQUExQztBQUNEOzs7V0FFRCxpQkFBUTtBQUNONUMsTUFBQUEsTUFBTSxDQUFDLEtBQUtiLE9BQU4sQ0FBTixDQUFxQnVDLFdBQXJCLENBQWlDViw4QkFBYVcsSUFBOUM7QUFDQTNCLE1BQUFBLE1BQU0sQ0FBQywwQkFBRCxDQUFOLENBQW1DMEIsV0FBbkMsQ0FBK0NWLDhCQUFhVyxJQUE1RCxFQUFrRUMsUUFBbEUsQ0FBMkVaLDhCQUFhRCxLQUF4RjtBQUNBLFdBQUs0QixRQUFMLENBQWM7QUFBQzlDLFFBQUFBLElBQUksRUFBRTtBQUFQLE9BQWQ7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCxVQUFJRyxNQUFNLENBQUMsS0FBSzZDLEtBQU4sQ0FBTixDQUFtQkMsUUFBbkIsQ0FBNEI5Qiw4QkFBYUQsS0FBekMsQ0FBSixFQUFxRDtBQUNuRCxhQUFLbEIsSUFBTDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtPLEtBQUw7QUFDRDtBQUNGOzs7V0FFRCxzQ0FBNkIyQyxXQUE3QixFQUEwQztBQUN4QyxVQUFJQyxPQUFKLEVBQ0VDLEtBREYsRUFFRUMsT0FGRixFQUdFQyxVQUhGLEVBSUVyQyxJQUpGLEVBS0VzQyxNQUxGLEVBTUVDLFlBTkYsRUFPRUMsUUFQRjtBQVNBTixNQUFBQSxPQUFPLEdBQUdELFdBQVcsSUFBSSxFQUF6Qjs7QUFDQSxVQUFJLENBQUNDLE9BQU8sQ0FBQ08sVUFBVCxJQUF1QixFQUFFUCxPQUFPLENBQUNPLFVBQVIsS0FBdUIsQ0FBdkIsSUFBNEJQLE9BQU8sQ0FBQ08sVUFBUixLQUF1QixDQUFuRCxJQUF3RFAsT0FBTyxDQUFDTyxVQUFSLEtBQXVCLENBQWpGLENBQTNCLEVBQWdIO0FBQzlHUCxRQUFBQSxPQUFPLENBQUNPLFVBQVIsR0FBcUIsQ0FBckI7QUFDRDs7QUFFREosTUFBQUEsVUFBVSxHQUFHLEVBQWI7QUFDQUQsTUFBQUEsT0FBTyxHQUFHLEtBQUtqRSxLQUFMLENBQVdPLGFBQVgsQ0FBeUJtQixHQUF6QixDQUE2QjZDLE9BQTdCLEVBQVY7QUFDQVAsTUFBQUEsS0FBSyxHQUFHLEtBQUtoRSxLQUFMLENBQVdPLGFBQVgsQ0FBeUJ5RCxLQUFqQztBQUVBRyxNQUFBQSxNQUFNLEdBQUdGLE9BQU8sQ0FBQ08sU0FBUixFQUFUO0FBQ0FMLE1BQUFBLE1BQU0sR0FBRyxxQkFBVSxDQUFDQSxNQUFNLENBQUMsQ0FBRCxDQUFQLEVBQVlBLE1BQU0sQ0FBQyxDQUFELENBQWxCLENBQVYsRUFBa0MsV0FBbEMsRUFBK0MsV0FBL0MsQ0FBVDtBQUVBRCxNQUFBQSxVQUFVLENBQUNPLElBQVgsQ0FBZ0IsQ0FBQ04sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxPQUFWLENBQWtCLENBQWxCLENBQWpCO0FBQ0FSLE1BQUFBLFVBQVUsQ0FBQ08sSUFBWCxDQUFnQixDQUFDTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLE9BQVYsQ0FBa0IsQ0FBbEIsQ0FBakI7QUFDQVIsTUFBQUEsVUFBVSxDQUFDTyxJQUFYLENBQWdCRSxRQUFRLENBQUNWLE9BQU8sQ0FBQ1csT0FBUixFQUFELENBQXhCOztBQUVBLFVBQUksS0FBSzVFLEtBQUwsQ0FBVzZFLE9BQWYsRUFBd0I7QUFDdEJYLFFBQUFBLFVBQVUsQ0FBQ08sSUFBWCxDQUFnQixDQUFDUixPQUFPLENBQUNhLFdBQVIsR0FBc0JKLE9BQXRCLENBQThCLENBQTlCLENBQWpCLEVBRHNCLENBR3RCOztBQUNBLFlBQUlWLEtBQUssQ0FBQ2UsaUJBQVYsRUFBNkI7QUFDM0JiLFVBQUFBLFVBQVUsQ0FBQ08sSUFBWCxDQUFnQlQsS0FBSyxDQUFDZSxpQkFBdEI7QUFDRCxTQUZELE1BRU87QUFDTGIsVUFBQUEsVUFBVSxDQUFDTyxJQUFYLENBQWdCLENBQWhCO0FBQ0QsU0FScUIsQ0FVdEI7OztBQUNBLFlBQUlPLE1BQU0sR0FBRyxFQUFiO0FBQ0EsWUFBTUMsY0FBYyxHQUFHLEtBQUtqRixLQUFMLENBQVdPLGFBQVgsQ0FBeUJXLEtBQXpCLENBQStCK0QsY0FBdEQ7O0FBQ0EsYUFBSyxJQUFJQyxPQUFULElBQW9CRCxjQUFwQixFQUFvQztBQUNsQyxjQUFJQSxjQUFjLENBQUNFLGNBQWYsQ0FBOEJELE9BQTlCLENBQUosRUFBNEM7QUFDMUNGLFlBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDSSxNQUFQLENBQWMsS0FBS0MsaUJBQUwsQ0FBdUJKLGNBQWMsQ0FBQ0MsT0FBRCxDQUFyQyxDQUFkLENBQVQ7QUFDRDtBQUNGLFNBakJxQixDQW1CdEI7OztBQUNBLFlBQUlGLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQjtBQUNBLGNBQUlOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sT0FBVixDQUFrQixHQUFsQixNQUEyQixDQUFDLENBQWhDLEVBQW1DO0FBQ2pDUCxZQUFBQSxNQUFNLEdBQUdsQyxvQkFBTTBDLFdBQU4sQ0FBa0JSLE1BQWxCLENBQVQ7QUFDRDs7QUFDREEsVUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNTLElBQVAsQ0FBWSxHQUFaLENBQVQ7QUFDRCxTQU5ELE1BTU87QUFDTFQsVUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUMsQ0FBRCxDQUFOLElBQWEsR0FBdEI7QUFDRDs7QUFDRGQsUUFBQUEsVUFBVSxDQUFDTyxJQUFYLENBQWdCTyxNQUFoQjtBQUNEOztBQUNEZCxNQUFBQSxVQUFVLEdBQUdBLFVBQVUsQ0FBQ3VCLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBYixDQXpEd0MsQ0EwRHhDOztBQUNBNUQsTUFBQUEsSUFBSSxHQUFHaUIsb0JBQU00QyxXQUFOLENBQWtCeEIsVUFBbEIsRUFBOEIsS0FBS2xFLEtBQUwsQ0FBV08sYUFBWCxDQUF5QkMsSUFBekIsQ0FBOEJtRixTQUE5QixDQUF3Q0MsWUFBdEUsQ0FBUCxDQTNEd0MsQ0E2RHhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBS2xDLFFBQUwsQ0FBYztBQUFDN0IsUUFBQUEsSUFBSSxFQUFFQTtBQUFQLE9BQWQ7QUFDRCxNQUFDOzs7O1dBRUYsc0JBQWFxQyxVQUFiLEVBQXlCO0FBQ3ZCLFVBQUksQ0FBQ0EsVUFBRCxJQUFlLEVBQUVBLFVBQVUsQ0FBQ29CLE1BQVgsS0FBc0IsQ0FBdEIsSUFBMkJwQixVQUFVLENBQUNvQixNQUFYLEtBQXNCLENBQWpELElBQXNEcEIsVUFBVSxDQUFDb0IsTUFBWCxLQUFzQixDQUE5RSxDQUFuQixFQUFxRztBQUNuRyxlQUFPLEtBQVA7QUFDRCxPQUhzQixDQUt2Qjs7O0FBQ0EsYUFBT3hDLG9CQUFNNEMsV0FBTixDQUFrQnhCLFVBQVUsQ0FBQ3VCLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBbEIsRUFBd0MsS0FBS3pGLEtBQUwsQ0FBV08sYUFBWCxDQUF5QkMsSUFBekIsQ0FBOEJtRixTQUE5QixDQUF3Q0MsWUFBaEYsQ0FBUDtBQUNELE1BQUM7Ozs7V0FDRiwyQkFBbUJDLGFBQW5CLEVBQWtDO0FBQ2hDLFVBQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLFVBQUlELGFBQWEsQ0FBQ0UsTUFBbEIsRUFBMEI7QUFDeEJELFFBQUFBLEdBQUcsQ0FBQ3JCLElBQUosQ0FBU29CLGFBQWEsQ0FBQ0csRUFBdkI7QUFDRDs7QUFDRCxXQUFLLElBQUlDLE9BQVQsSUFBb0JKLGFBQWEsQ0FBQ0ssV0FBbEMsRUFBK0M7QUFDN0MsWUFBSUwsYUFBYSxDQUFDSyxXQUFkLENBQTBCZixjQUExQixDQUF5Q2MsT0FBekMsQ0FBSixFQUF1RDtBQUNyREgsVUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNWLE1BQUosQ0FBVyxLQUFLQyxpQkFBTCxDQUF1QlEsYUFBYSxDQUFDSyxXQUFkLENBQTBCRCxPQUExQixDQUF2QixDQUFYLENBQU47QUFDRDtBQUNGOztBQUNELGFBQU9ILEdBQVA7QUFDRDs7O0VBdk1vQ0siLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcGVybWFsaW5rLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVybWFsaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9QRVJNQUxJTks7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1wZXJtYWxpbmstY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmhvcml6b250YWxQYW5lbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGxpbms6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcGVybWFsaW5rLXdyYXBwZXJcIn0+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1wZXJtYWxpbmstaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1wZXJtYWxpbmstaGVhZGVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17XCJQZXJtYWxpbmtcIn0gY2xvc2VCdG5DbGFzcz17XCJjNGctcGVybWFsaW5rLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBlcm1hbGluay1jb250ZW50XCJ9PlxuICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiNTBcIiByb3dzPVwiMlwiIGlkPXtcInBlcm1hbGluay10ZXh0XCJ9IHZhbHVlPXt0aGlzLnN0YXRlLmxpbmt9IHJlYWRPbmx5PXt0cnVlfS8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5DT1BZICsgJyAnICsgY3NzQ29uc3RhbnRzLklDT059IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ09QWV9UT19DTElQQk9BUkR9XG4gICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10YXJnZXQ9e1wiI3Blcm1hbGluay10ZXh0XCJ9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5SRUZSRVNIICsgJyAnICsgY3NzQ29uc3RhbnRzLklDT059IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuUkVGUkVTSH1cbiAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gdGhpcy5nZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKHt0YXJnZXQ6IHRoaXMudGV4dGZpZWxkfSl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICgocHJldlN0YXRlLm9wZW4gIT09IHRoaXMuc3RhdGUub3BlbikgfHwgcHJldlN0YXRlLmxpbmsgIT09IHRoaXMuc3RhdGUubGluaykge1xuICAgICAgdGhpcy5nZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKHt0YXJnZXQ6IHRoaXMudGV4dGZpZWxkfSk7XG4gICAgfVxuICAgIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGV4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJtYWxpbmstdGV4dFwiKTtcbiAgICBsZXQgY29weUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjc3NDb25zdGFudHMuQ09QWSArIFwiLlwiICsgY3NzQ29uc3RhbnRzLklDT04pO1xuICAgIHRyeSB7XG4gICAgICBuZXcgQ2xpcGJvYXJkSlMoY29weUJ1dHRvbik7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgLy8gY2xpcGJvYXJkIHNjcmlwdCBpcyBub3QgbG9hZGVkXG4gICAgICBjb25zb2xlLndhcm4oJ1Blcm1hbGluayBpcyBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCBpbiBiYWNrZW5kIG1vZGUuLicpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKGpRdWVyeSh0aGlzLnBvcHVwKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUob3B0X29wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyxcbiAgICAgIHByb3h5LFxuICAgICAgbWFwVmlldyxcbiAgICAgIHBhcmFtZXRlcnMsXG4gICAgICBsaW5rLFxuICAgICAgY2VudGVyLFxuICAgICAgYmFzZUxheWVySWR4LFxuICAgICAgbGF5ZXJJZHg7XG5cbiAgICBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLnBhcmFtQ291bnQgfHwgIShvcHRpb25zLnBhcmFtQ291bnQgPT09IDYgfHwgb3B0aW9ucy5wYXJhbUNvdW50ID09PSAyIHx8IG9wdGlvbnMucGFyYW1Db3VudCA9PT0gMSkpIHtcbiAgICAgIG9wdGlvbnMucGFyYW1Db3VudCA9IDY7XG4gICAgfVxuXG4gICAgcGFyYW1ldGVycyA9IFtdO1xuICAgIG1hcFZpZXcgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICBwcm94eSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eTtcblxuICAgIGNlbnRlciA9IG1hcFZpZXcuZ2V0Q2VudGVyKCk7XG4gICAgY2VudGVyID0gdHJhbnNmb3JtKFtjZW50ZXJbMF0sIGNlbnRlclsxXV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG5cbiAgICBwYXJhbWV0ZXJzLnB1c2goK2NlbnRlclswXS50b0ZpeGVkKDYpKTtcbiAgICBwYXJhbWV0ZXJzLnB1c2goK2NlbnRlclsxXS50b0ZpeGVkKDUpKTtcbiAgICBwYXJhbWV0ZXJzLnB1c2gocGFyc2VJbnQobWFwVmlldy5nZXRab29tKCkpKTtcblxuICAgIGlmICh0aGlzLnByb3BzLnNhdmVJZHMpIHtcbiAgICAgIHBhcmFtZXRlcnMucHVzaCgrbWFwVmlldy5nZXRSb3RhdGlvbigpLnRvRml4ZWQoMikpO1xuXG4gICAgICAvLyBmaW5kIGFjdGl2ZSBiYXNlbGF5ZXJcbiAgICAgIGlmIChwcm94eS5hY3RpdmVCYXNlbGF5ZXJJZCkge1xuICAgICAgICBwYXJhbWV0ZXJzLnB1c2gocHJveHkuYWN0aXZlQmFzZWxheWVySWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1ldGVycy5wdXNoKDApO1xuICAgICAgfVxuXG4gICAgICAvLyBmaW5kIGFjdGl2ZSBsYXllcnNcbiAgICAgIGxldCBsYXllcnMgPSBbXTtcbiAgICAgIGNvbnN0IGFyckxheWVyU3RhdGVzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnN0YXRlLmFyckxheWVyU3RhdGVzO1xuICAgICAgZm9yIChsZXQgbGF5ZXJJZCBpbiBhcnJMYXllclN0YXRlcykge1xuICAgICAgICBpZiAoYXJyTGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkobGF5ZXJJZCkpIHtcbiAgICAgICAgICBsYXllcnMgPSBsYXllcnMuY29uY2F0KHRoaXMuZ2V0QWN0aXZlTGF5ZXJJZHMoYXJyTGF5ZXJTdGF0ZXNbbGF5ZXJJZF0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkZWx0YS1kZWNvZGUgaWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgbGF5ZXJcbiAgICAgIGlmIChsYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBkbyBub3QgZGVsdGEgZW5jb2RlIHV1aWRzXG4gICAgICAgIGlmIChsYXllcnNbMF0uaW5kZXhPZihcIntcIikgPT09IC0xKSB7XG4gICAgICAgICAgbGF5ZXJzID0gdXRpbHMuZGVsdGFFbmNvZGUobGF5ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBsYXllcnMgPSBsYXllcnMuam9pbignOicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5ZXJzID0gbGF5ZXJzWzBdIHx8ICcwJztcbiAgICAgIH1cbiAgICAgIHBhcmFtZXRlcnMucHVzaChsYXllcnMpO1xuICAgIH1cbiAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycy5qb2luKCcvJyk7XG4gICAgLy8gYnVpbGQgbGlua1xuICAgIGxpbmsgPSB1dGlscy5zZXRVcmxQYXJhbShwYXJhbWV0ZXJzLCB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wZXJtYWxpbmsuZ2V0UGFyYW1ldGVyKTtcblxuICAgIC8vIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgIC8vICAgb3B0aW9ucy50YXJnZXQudmFsdWUgPSBsaW5rO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICByZXR1cm4gbGluaztcbiAgICAvLyB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGluazogbGlua30pO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlXG5cbiAgZ2VuZXJhdGVMaW5rKHBhcmFtZXRlcnMpIHtcbiAgICBpZiAoIXBhcmFtZXRlcnMgfHwgIShwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gNiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBidWlsZCBhbmQgcmV0dXJuIGxpbmtcbiAgICByZXR1cm4gdXRpbHMuc2V0VXJsUGFyYW0ocGFyYW1ldGVycy5qb2luKCcvJyksIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnBlcm1hbGluay5nZXRQYXJhbWV0ZXIpO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtcbiAgZ2V0QWN0aXZlTGF5ZXJJZHMgKGFyckxheWVyU3RhdGUpIHtcbiAgICBsZXQgaWRzID0gW107XG4gICAgaWYgKGFyckxheWVyU3RhdGUuYWN0aXZlKSB7XG4gICAgICBpZHMucHVzaChhcnJMYXllclN0YXRlLmlkKTtcbiAgICB9XG4gICAgZm9yIChsZXQgY2hpbGRJZCBpbiBhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzKSB7XG4gICAgICBpZiAoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICBpZHMgPSBpZHMuY29uY2F0KHRoaXMuZ2V0QWN0aXZlTGF5ZXJJZHMoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWRzO1xuICB9XG59Il0sIm5hbWVzIjpbIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiUGVybWFsaW5rIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJ0aXRsZSIsIkNUUkxfUEVSTUFMSU5LIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJtYXAiLCJhZGRDb250cm9sIiwiYmluZCIsImxpbmsiLCJDTE9TRSIsImNzc0NvbnN0YW50cyIsIkNPUFkiLCJJQ09OIiwiQ09QWV9UT19DTElQQk9BUkQiLCJSRUZSRVNIIiwiZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSIsInRleHRmaWVsZCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVtb3ZlQ2xhc3MiLCJPUEVOIiwiYWRkQ2xhc3MiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwic3RvcmVWYWx1ZSIsInRleHRGaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb3B5QnV0dG9uIiwiQ2xpcGJvYXJkSlMiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwicG9wdXAiLCJoYXNDbGFzcyIsIm9wdF9vcHRpb25zIiwib3B0aW9ucyIsInByb3h5IiwibWFwVmlldyIsInBhcmFtZXRlcnMiLCJjZW50ZXIiLCJiYXNlTGF5ZXJJZHgiLCJsYXllcklkeCIsInBhcmFtQ291bnQiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwicHVzaCIsInRvRml4ZWQiLCJwYXJzZUludCIsImdldFpvb20iLCJzYXZlSWRzIiwiZ2V0Um90YXRpb24iLCJhY3RpdmVCYXNlbGF5ZXJJZCIsImxheWVycyIsImFyckxheWVyU3RhdGVzIiwibGF5ZXJJZCIsImhhc093blByb3BlcnR5IiwiY29uY2F0IiwiZ2V0QWN0aXZlTGF5ZXJJZHMiLCJsZW5ndGgiLCJpbmRleE9mIiwiZGVsdGFFbmNvZGUiLCJqb2luIiwic2V0VXJsUGFyYW0iLCJwZXJtYWxpbmsiLCJnZXRQYXJhbWV0ZXIiLCJhcnJMYXllclN0YXRlIiwiaWRzIiwiYWN0aXZlIiwiaWQiLCJjaGlsZElkIiwiY2hpbGRTdGF0ZXMiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9