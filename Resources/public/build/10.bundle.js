(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./Resources/public/js/components/c4g-permalink.jsx":
/*!**********************************************************!*\
  !*** ./Resources/public/js/components/c4g-permalink.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

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

var Permalink = function (_Component) {
  _inherits(Permalink, _Component);

  function Permalink(props) {
    _classCallCheck(this, Permalink);

    var _this = _possibleConstructorReturn(this, (Permalink.__proto__ || Object.getPrototypeOf(Permalink)).call(this, props));

    var scope = _this;
    // create control to toggle the panel
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
    var control = new _control.Control({ element: element, target: props.target });
    mapController.mapsControls.controls.horizontalPanel = control;
    mapController.map.addControl(control);
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(_this.props.mapController.data);

    _this.state = {
      open: false,
      link: ""
    };
    return _this;
  }

  _createClass(Permalink, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "c4g-permalink-wrapper" },
        _react2.default.createElement(_c4gTitlebar.Titlebar, { wrapperClass: "c4g-permalink-header", headerClass: "c4g-permalink-header-headline",
          header: "Permalink", closeBtnClass: "c4g-permalink-close", closeBtnCb: this.close, closeBtnTitle: this.langConstants.CLOSE }),
        _react2.default.createElement(
          "div",
          { className: "c4g-permalink-content" },
          _react2.default.createElement("textarea", { cols: "50", rows: "2", id: "permalink-text", value: this.state.link, readOnly: true }),
          _react2.default.createElement("button", { className: _c4gMapsConstant.cssConstants.COPY + ' ' + _c4gMapsConstant.cssConstants.ICON, title: this.langConstants.COPY_TO_CLIPBOARD,
            "data-clipboard-target": "#permalink-text" }),
          _react2.default.createElement("button", { className: _c4gMapsConstant.cssConstants.REFRESH + ' ' + _c4gMapsConstant.cssConstants.ICON, title: this.langConstants.REFRESH,
            onMouseUp: function onMouseUp() {
              return _this2.generateLinkFromCurrentState({ target: _this2.textfield });
            } })
        )
      );
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.open !== this.state.open || prevState.link !== this.state.link) {
        this.generateLinkFromCurrentState({ target: this.textfield });
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
      this.setState({ open: true });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      jQuery(this.element).removeClass(_c4gMapsConstant.cssConstants.OPEN);
      jQuery(".c4g-permalink-container").removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
      this.setState({ open: false });
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
      parameters.push(mapView.getZoom());
      parameters.push(+mapView.getRotation().toFixed(2));

      // find active baselayer
      if (proxy.activeBaselayerId) {
        parameters.push(proxy.activeBaselayerId);
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
        layers = _c4gMapsUtils.utils.deltaEncode(layers);
        layers = layers.join(':');
      } else {
        layers = layers[0] || '0';
      }
      parameters.push(layers);
      parameters = parameters.join('/');

      // build link
      link = _c4gMapsUtils.utils.setUrlParam(parameters, this.props.mapController.data.permalink.getParameter);

      // if (options.target) {
      //   options.target.value = link;
      // } else {
      //   return link;
      // }
      this.setState({ link: link });
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

  return Permalink;
}(_react.Component);

exports.default = Permalink;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXBlcm1hbGluay5qc3giXSwibmFtZXMiOlsiUGVybWFsaW5rIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJ0aXRsZSIsIkNUUkxfUEVSTUFMSU5LIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJtYXAiLCJhZGRDb250cm9sIiwiYmluZCIsImxpbmsiLCJDTE9TRSIsImNzc0NvbnN0YW50cyIsIkNPUFkiLCJJQ09OIiwiQ09QWV9UT19DTElQQk9BUkQiLCJSRUZSRVNIIiwiZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSIsInRleHRmaWVsZCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVtb3ZlQ2xhc3MiLCJPUEVOIiwiYWRkQ2xhc3MiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwic3RvcmVWYWx1ZSIsInRleHRGaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb3B5QnV0dG9uIiwiQ2xpcGJvYXJkSlMiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwicG9wdXAiLCJoYXNDbGFzcyIsIm9wdF9vcHRpb25zIiwib3B0aW9ucyIsInByb3h5IiwibWFwVmlldyIsInBhcmFtZXRlcnMiLCJjZW50ZXIiLCJiYXNlTGF5ZXJJZHgiLCJsYXllcklkeCIsInBhcmFtQ291bnQiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwicHVzaCIsInRvRml4ZWQiLCJnZXRab29tIiwiZ2V0Um90YXRpb24iLCJhY3RpdmVCYXNlbGF5ZXJJZCIsImxheWVycyIsImFyckxheWVyU3RhdGVzIiwibGF5ZXJJZCIsImhhc093blByb3BlcnR5IiwiY29uY2F0IiwiZ2V0QWN0aXZlTGF5ZXJJZHMiLCJsZW5ndGgiLCJkZWx0YUVuY29kZSIsImpvaW4iLCJzZXRVcmxQYXJhbSIsInBlcm1hbGluayIsImdldFBhcmFtZXRlciIsImFyckxheWVyU3RhdGUiLCJpZHMiLCJhY3RpdmUiLCJpZCIsImNoaWxkSWQiLCJjaGlsZFN0YXRlcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7K2VBbkJBOzs7Ozs7Ozs7Ozs7O0lBcUJxQkEsUzs7O0FBRW5CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBR2pCLFFBQU1DLGFBQU47QUFDQTtBQUNBLFFBQUlDLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLFFBQUlDLFNBQVNGLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFFBQUlFLGdCQUFnQiw4QkFBWU4sTUFBTU8sYUFBTixDQUFvQkMsSUFBaEMsQ0FBcEI7QUFDQUgsV0FBT0ksS0FBUCxHQUFlSCxjQUFjSSxjQUE3QjtBQUNBUixZQUFRUyxTQUFSLEdBQW9CLG1EQUFwQjtBQUNBLFFBQUlYLE1BQU1ZLElBQVYsRUFBZ0I7QUFDZFYsY0FBUVMsU0FBUixJQUFxQixVQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMVCxjQUFRUyxTQUFSLElBQXFCLFdBQXJCO0FBQ0Q7QUFDRCxRQUFJWCxNQUFNYSxRQUFWLEVBQW9CO0FBQ2xCWCxjQUFRUyxTQUFSLElBQXFCLGVBQXJCO0FBQ0Q7QUFDRFQsWUFBUVksV0FBUixDQUFvQlQs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UDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBSy9CLFFBQUwsQ0FBYyxFQUFDN0IsTUFBTUEsSUFBUCxFQUFkO0FBQ0QsSyxDQUFDOzs7O2lDQUVXcUMsVSxFQUFZO0FBQ3ZCLFVBQUksQ0FBQ0EsVUFBRCxJQUFlLEVBQUVBLFdBQVdrQixNQUFYLEtBQXNCLENBQXRCLElBQTJCbEIsV0FBV2tCLE1BQVgsS0FBc0IsQ0FBakQsSUFBc0RsQixXQUFXa0IsTUFBWCxLQUFzQixDQUE5RSxDQUFuQixFQUFxRztBQUNuRyxlQUFPLEtBQVA7QUFDRDs7QUFFRDtBQUNBLGFBQU90QyxvQkFBTXlDLFdBQU4sQ0FBa0JyQixXQUFXb0IsSUFBWCxDQUFnQixHQUFoQixDQUFsQixFQUF3QyxLQUFLdEYsS0FBTCxDQUFXTyxhQUFYLENBQXlCQyxJQUF6QixDQUE4QmdGLFNBQTlCLENBQXdDQyxZQUFoRixDQUFQO0FBQ0QsSyxDQUFDOzs7O3NDQUNpQkMsYSxFQUFlO0FBQ2hDLFVBQUlDLE1BQU0sRUFBVjtBQUNBLFVBQUlELGNBQWNFLE1BQWxCLEVBQTBCO0FBQ3hCRCxZQUFJbEIsSUFBSixDQUFTaUIsY0FBY0csRUFBdkI7QUFDRDtBQUNELFdBQUssSUFBSUMsT0FBVCxJQUFvQkosY0FBY0ssV0FBbEMsRUFBK0M7QUFDN0MsWUFBSUwsY0FBY0ssV0FBZCxDQUEwQmQsY0FBMUIsQ0FBeUNhLE9BQXpDLENBQUosRUFBdUQ7QUFDckRILGdCQUFNQSxJQUFJVCxNQUFKLENBQVcsS0FBS0MsaUJBQUwsQ0FBdUJPLGNBQWNLLFdBQWQsQ0FBMEJELE9BQTFCLENBQXZCLENBQVgsQ0FBTjtBQUNEO0FBQ0Y7QUFDRCxhQUFPSCxHQUFQO0FBQ0Q7Ozs7RUFoTW9DSyxnQjs7a0JBQWxCakcsUyIsImZpbGUiOiIxMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyLmpzeFwiO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVybWFsaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ1RSTF9QRVJNQUxJTks7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1wZXJtYWxpbmstY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmhvcml6b250YWxQYW5lbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGxpbms6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcGVybWFsaW5rLXdyYXBwZXJcIn0+XG4gICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17XCJQZXJtYWxpbmtcIn0gY2xvc2VCdG5DbGFzcz17XCJjNGctcGVybWFsaW5rLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wZXJtYWxpbmstY29udGVudFwifT5cbiAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjUwXCIgcm93cz1cIjJcIiBpZD17XCJwZXJtYWxpbmstdGV4dFwifSB2YWx1ZT17dGhpcy5zdGF0ZS5saW5rfSByZWFkT25seT17dHJ1ZX0vPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuQ09QWSArICcgJyArIGNzc0NvbnN0YW50cy5JQ09OfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNPUFlfVE9fQ0xJUEJPQVJEfVxuICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGFyZ2V0PXtcIiNwZXJtYWxpbmstdGV4dFwifSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuUkVGUkVTSCArICcgJyArIGNzc0NvbnN0YW50cy5JQ09OfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLlJFRlJFU0h9XG4gICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHRoaXMuZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSh7dGFyZ2V0OiB0aGlzLnRleHRmaWVsZH0pfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoKHByZXZTdGF0ZS5vcGVuICE9PSB0aGlzLnN0YXRlLm9wZW4pIHx8IHByZXZTdGF0ZS5saW5rICE9PSB0aGlzLnN0YXRlLmxpbmspIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSh7dGFyZ2V0OiB0aGlzLnRleHRmaWVsZH0pO1xuICAgIH1cbiAgICBpZiAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1wZXJtYWxpbmstY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRleHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVybWFsaW5rLXRleHRcIik7XG4gICAgbGV0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY3NzQ29uc3RhbnRzLkNPUFkgKyBcIi5cIiArIGNzc0NvbnN0YW50cy5JQ09OKTtcbiAgICB0cnkge1xuICAgICAgbmV3IENsaXBib2FyZEpTKGNvcHlCdXR0b24pO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIC8vIGNsaXBib2FyZCBzY3JpcHQgaXMgbm90IGxvYWRlZFxuICAgICAgY29uc29sZS53YXJuKCdQZXJtYWxpbmsgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgaW4gYmFja2VuZCBtb2RlLi4nKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmIChqUXVlcnkodGhpcy5wb3B1cCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICBwcm94eSxcbiAgICAgIG1hcFZpZXcsXG4gICAgICBwYXJhbWV0ZXJzLFxuICAgICAgbGluayxcbiAgICAgIGNlbnRlcixcbiAgICAgIGJhc2VMYXllcklkeCxcbiAgICAgIGxheWVySWR4O1xuXG4gICAgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5wYXJhbUNvdW50IHx8ICEob3B0aW9ucy5wYXJhbUNvdW50ID09PSA2IHx8IG9wdGlvbnMucGFyYW1Db3VudCA9PT0gMiB8fCBvcHRpb25zLnBhcmFtQ291bnQgPT09IDEpKSB7XG4gICAgICBvcHRpb25zLnBhcmFtQ291bnQgPSA2O1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnMgPSBbXTtcbiAgICBtYXBWaWV3ID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgcHJveHkgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHk7XG5cbiAgICBjZW50ZXIgPSBtYXBWaWV3LmdldENlbnRlcigpO1xuICAgIGNlbnRlciA9IHRyYW5zZm9ybShbY2VudGVyWzBdLCBjZW50ZXJbMV1dLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuXG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMF0udG9GaXhlZCg2KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMV0udG9GaXhlZCg1KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKG1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICBwYXJhbWV0ZXJzLnB1c2goK21hcFZpZXcuZ2V0Um90YXRpb24oKS50b0ZpeGVkKDIpKTtcblxuICAgIC8vIGZpbmQgYWN0aXZlIGJhc2VsYXllclxuICAgIGlmIChwcm94eS5hY3RpdmVCYXNlbGF5ZXJJZCkge1xuICAgICAgcGFyYW1ldGVycy5wdXNoKHByb3h5LmFjdGl2ZUJhc2VsYXllcklkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1ldGVycy5wdXNoKDApO1xuICAgIH1cblxuICAgIC8vIGZpbmQgYWN0aXZlIGxheWVyc1xuICAgIGxldCBsYXllcnMgPSBbXTtcbiAgICBjb25zdCBhcnJMYXllclN0YXRlcyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zdGF0ZS5hcnJMYXllclN0YXRlcztcbiAgICBmb3IgKGxldCBsYXllcklkIGluIGFyckxheWVyU3RhdGVzKSB7XG4gICAgICBpZiAoYXJyTGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkobGF5ZXJJZCkpIHtcbiAgICAgICAgbGF5ZXJzID0gbGF5ZXJzLmNvbmNhdCh0aGlzLmdldEFjdGl2ZUxheWVySWRzKGFyckxheWVyU3RhdGVzW2xheWVySWRdKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGVsdGEtZGVjb2RlIGlmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIGxheWVyXG4gICAgaWYgKGxheWVycy5sZW5ndGggPiAxKSB7XG4gICAgICBsYXllcnMgPSB1dGlscy5kZWx0YUVuY29kZShsYXllcnMpO1xuICAgICAgbGF5ZXJzID0gbGF5ZXJzLmpvaW4oJzonKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5ZXJzID0gbGF5ZXJzWzBdIHx8ICcwJztcbiAgICB9XG4gICAgcGFyYW1ldGVycy5wdXNoKGxheWVycyk7XG4gICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMuam9pbignLycpO1xuXG4gICAgLy8gYnVpbGQgbGlua1xuICAgIGxpbmsgPSB1dGlscy5zZXRVcmxQYXJhbShwYXJhbWV0ZXJzLCB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wZXJtYWxpbmsuZ2V0UGFyYW1ldGVyKTtcblxuICAgIC8vIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgIC8vICAgb3B0aW9ucy50YXJnZXQudmFsdWUgPSBsaW5rO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICByZXR1cm4gbGluaztcbiAgICAvLyB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGluazogbGlua30pO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlXG5cbiAgZ2VuZXJhdGVMaW5rKHBhcmFtZXRlcnMpIHtcbiAgICBpZiAoIXBhcmFtZXRlcnMgfHwgIShwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gNiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBidWlsZCBhbmQgcmV0dXJuIGxpbmtcbiAgICByZXR1cm4gdXRpbHMuc2V0VXJsUGFyYW0ocGFyYW1ldGVycy5qb2luKCcvJyksIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnBlcm1hbGluay5nZXRQYXJhbWV0ZXIpO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtcbiAgZ2V0QWN0aXZlTGF5ZXJJZHMgKGFyckxheWVyU3RhdGUpIHtcbiAgICBsZXQgaWRzID0gW107XG4gICAgaWYgKGFyckxheWVyU3RhdGUuYWN0aXZlKSB7XG4gICAgICBpZHMucHVzaChhcnJMYXllclN0YXRlLmlkKTtcbiAgICB9XG4gICAgZm9yIChsZXQgY2hpbGRJZCBpbiBhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzKSB7XG4gICAgICBpZiAoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICBpZHMgPSBpZHMuY29uY2F0KHRoaXMuZ2V0QWN0aXZlTGF5ZXJJZHMoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWRzO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==