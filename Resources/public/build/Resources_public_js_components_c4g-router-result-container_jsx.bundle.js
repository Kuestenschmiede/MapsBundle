(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-router-result-container_jsx"],{

/***/ "./Resources/public/js/c4g-router-time-conversions.js":
/*!************************************************************!*\
  !*** ./Resources/public/js/c4g-router-time-conversions.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toHumanDistance = toHumanDistance;
exports.toHumanTime = toHumanTime;

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Converts a distance in meters to a more readable format.
 * @param distanceInMeters  The distance to convert.
 * @returns {string}
 */
function toHumanDistance(distanceInMeters) {
  var distance, humanDistance;
  distance = parseInt(distanceInMeters, 10);
  distance = distance / 1000;

  if (distance >= 100) {
    humanDistance = distance.toFixed(0) + " " + 'km';
  } else if (distance >= 10) {
    humanDistance = distance.toFixed(1) + " " + 'km';
  } else if (distance >= 0.1) {
    humanDistance = distance.toFixed(2) + " " + 'km';
  } else {
    humanDistance = (distance * 1000).toFixed(0) + " " + 'm';
  }

  return humanDistance;
}
/**
 * Converts a time in seconds to a more readable format.
 * @param timeInSeconds     The time to convert.
 * @returns {string}
 */


function toHumanTime(timeInSeconds) {
  var seconds, minutes, hours, humanTime;
  seconds = parseInt(timeInSeconds, 10);
  minutes = parseInt(seconds / 60, 10);
  seconds = seconds % 60;
  hours = parseInt(minutes / 60, 10);
  minutes = minutes % 60;

  if (hours === 0 && minutes === 0) {
    humanTime = seconds + " " + 's';
  } else if (hours === 0) {
    humanTime = minutes + " " + 'min';
  } else {
    humanTime = hours + " " + 'h' + " " + minutes + " " + 'min';
  }

  return humanTime;
}

/***/ }),

/***/ "./Resources/public/js/components/c4g-router-result-container.jsx":
/*!************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-result-container.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterResultContainer = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _GPX = _interopRequireDefault(__webpack_require__(/*! ol/format/GPX */ "./node_modules/ol/format/GPX.js"));

var _c4gRouterTimeConversions = __webpack_require__(/*! ../c4g-router-time-conversions */ "./Resources/public/js/c4g-router-time-conversions.js");

var _c4gTitlebar = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/components/c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterInstructionsContainer = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-router-instructions-container_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-instructions-container.jsx */ "./Resources/public/js/components/c4g-router-instructions-container.jsx"));
});

var RouterFeatureList = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-router-feature-list_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-feature-list.jsx */ "./Resources/public/js/components/c4g-router-feature-list.jsx"));
});

var RouterResultContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterResultContainer, _Component);

  var _super = _createSuper(RouterResultContainer);

  function RouterResultContainer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterResultContainer);
    _this = _super.call(this, props);
    _this.clickControl = _this.clickControl.bind((0, _assertThisInitialized2["default"])(_this));
    _this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "bike",
      4: "bike",
      5: "bike",
      6: "bike",
      7: "bike",
      8: "foot",
      9: "foot",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "scooter"
    };
    window.c4gMapsHooks.hook_map_click = window.c4gMapsHooks.hook_map_click || [];

    var scrolltoElement = function scrolltoElement(clickEvent) {
      var feature = _this.props.mapController.map.forEachFeatureAtPixel(clickEvent.pixel, function (feature, layer) {
        return feature;
      });

      if (feature && feature.get('tid')) {
        var zoomToId = feature.get('tid');

        _this.props.setResultFeat(clickEvent);

        _this.props.setActiveId(zoomToId);
      }
    };

    window.c4gMapsHooks.hook_map_click.push(scrolltoElement);
    return _this;
  }

  (0, _createClass2["default"])(RouterResultContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var result = "";
      var time = "";
      var distance = "";
      var detour = "";
      var featureCount = "";

      if (this.props.routerInstructions && this.props.routerInstructions.instructions && this.props.mode === "route") {
        time = (0, _c4gRouterTimeConversions.toHumanTime)(this.props.routerInstructions.time);
        distance = (0, _c4gRouterTimeConversions.toHumanDistance)(this.props.routerInstructions.distance);
      } else if (this.props.featureList && this.props.mode === "area") {
        detour = this.props.detour;
        featureCount = this.props.featureList.features.length;
      }

      var routerHeaderContent = "";

      var printFunction = function printFunction() {
        var querySelector = _this2.props.resultMode === "instr" ? '.c4g-route-instructions-wrapper' : '.c4g-route-feature-wrapper';
        var prtContent = document.querySelector(querySelector).cloneNode(true);

        if (_this2.props.resultMode === "instr") {
          var fromAddress = _this2.props.router.state.fromAddress;
          var divFromAddress = document.createElement('div');
          var labelFromAddress = document.createElement('label');
          labelFromAddress.innerHTML = _this2.props.lang.ROUTER_FROM + ": ";
          var emFromAddress = document.createElement('em');
          emFromAddress.innerHTML = fromAddress;
          divFromAddress.appendChild(labelFromAddress);
          divFromAddress.appendChild(emFromAddress);
          divFromAddress.appendChild(document.createElement('em'));
          var toAddress = _this2.props.router.state.toAddress;
          var divToAddress = document.createElement('div');
          var labelToAddress = document.createElement('label');
          labelToAddress.innerHTML = _this2.props.lang.ROUTER_FROM + ": ";
          var emToAddress = document.createElement('em');
          emToAddress.innerHTML = toAddress;
          divToAddress.appendChild(labelToAddress);
          divToAddress.appendChild(emToAddress);
          divToAddress.appendChild(document.createElement('em'));
          prtContent.querySelector('.c4g-router-instructions-header').appendChild(divFromAddress);
          prtContent.querySelector('.c4g-router-instructions-header').appendChild(divToAddress);
        }

        prtContent.querySelector('.c4g-router-print').remove();
        var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
      };

      if (time && distance && this.props.mode === "route") {
        routerHeaderContent = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-instructions-header"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-route-time"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.ROUTER_VIEW_LABEL_TIME), /*#__PURE__*/_react["default"].createElement("em", null, time)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-route-distance"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.ROUTER_VIEW_LABEL_DISTANCE), /*#__PURE__*/_react["default"].createElement("em", null, distance)), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-download",
          title: this.props.lang.ROUTER_DOWNLOAD,
          onMouseUp: function onMouseUp() {
            _this2.exportGpx();
          }
        }), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-print",
          title: this.props.lang.ROUTER_PRINT,
          onMouseUp: function onMouseUp() {
            printFunction();
          }
        }));
      } else if (detour && featureCount && this.props.mode === "area") {
        routerHeaderContent = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-instructions-header"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-area-detour"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.AREA_DETOUR, ":"), /*#__PURE__*/_react["default"].createElement("em", null, detour, " km")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-area-featurecount"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.AREA_FEATURECOUNT, ":"), /*#__PURE__*/_react["default"].createElement("em", null, featureCount)), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-print",
          onMouseUp: function onMouseUp() {
            printFunction();
          }
        }));
      }

      if (this.props.resultMode === "instr" && this.props.routerInstructions && this.props.mode === "route") {
        result = /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading..\"")
        }, /*#__PURE__*/_react["default"].createElement(RouterInstructionsContainer, {
          className: "c4g-route-instructions-wrapper",
          mapController: this.props.mapController,
          routerInstructions: this.props.routerInstructions,
          routerWaySource: this.props.routerWaySource,
          routerHintSource: this.props.routerHintSource,
          open: this.props.open,
          header: routerHeaderContent
        }));
      } else if (this.props.resultMode === "feat" || this.props.mode === "area" || !this.props.routerInstructions && this.props.featureList) {
        result = /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading..\"")
        }, /*#__PURE__*/_react["default"].createElement(RouterFeatureList, {
          className: "c4g-route-feature-wrapper",
          activeId: this.props.activeId,
          setActiveId: this.props.setActiveId,
          routeMode: this.props.mode,
          layerRoute: this.props.layerRoute,
          layerArea: this.props.layerArea,
          featureList: this.props.featureList,
          mapController: this.props.mapController,
          featureSource: this.props.featureSource,
          layerValueRoute: this.props.layerValueRoute,
          layerValueArea: this.props.layerValueArea,
          header: routerHeaderContent
        }));
      }

      if (this.props.open) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.className + (this.props.open ? " c4g-open" : " c4g-close") + (this.props.open ? " c4g-details-open" : "")
        }, result);
      } else {
        return null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var className = this.props.className + (this.props.open ? " c4g-open" : " c4g-close");
      var container = document.getElementsByClassName(className)[0];
      var controlContainer = document.querySelector(".c4g-router-panel.c4g-open");

      if (controlContainer) {
        controlContainer = controlContainer[0];
      }

      var mapContainer = document.querySelector(".c4g_map") ? document.querySelector(".c4g_map")[0] : false;
      var scope = this;

      if (mapContainer && container) {
        if (controlContainer) {
          if (container.offsetHeight + controlContainer.offsetHeight + 84 > mapContainer.offsetHeight) {
            container.style.height = mapContainer.offsetHeight - controlContainer.offsetHeight;
          }
        }
      }

      if (this.props.mode === "area" && this.props.resultMode !== "feat") {
        this.props.router.setState({
          resultMode: "feat"
        });
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.props.setOpen(true);
    }
  }, {
    key: "close",
    value: function close() {
      this.props.setOpen(false);
    }
  }, {
    key: "clickControl",
    value: function clickControl() {
      if (this.props.open) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "exportGpx",
    value: function exportGpx() {
      var source = this.props.router.routerWaySource;
      var format = new _GPX["default"]();

      if (source && source.getFeatures && source.getFeatures()) {
        var strExport = format.writeFeatures(source.getFeatures(), {
          featureProjection: "EPSG:3857",
          dataProjection: "EPSG:4326",
          decimals: 3
        });
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(strExport));
        element.setAttribute('download', "route.gpx");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        console.log(strExport);
      }
    }
  }, {
    key: "slideInCollidingElements",
    value: function slideInCollidingElements() {// override parent method
    }
  }, {
    key: "slideOutCollidingElements",
    value: function slideOutCollidingElements() {// override parent method
    }
  }]);
  return RouterResultContainer;
}(_react.Component);

exports.RouterResultContainer = RouterResultContainer;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLXJlc3VsdC1jb250YWluZXIuanN4Il0sIm5hbWVzIjpbInRvSHVtYW5EaXN0YW5jZSIsImRpc3RhbmNlSW5NZXRlcnMiLCJkaXN0YW5jZSIsImh1bWFuRGlzdGFuY2UiLCJwYXJzZUludCIsInRvRml4ZWQiLCJ0b0h1bWFuVGltZSIsInRpbWVJblNlY29uZHMiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiaHVtYW5UaW1lIiwiUm91dGVySW5zdHJ1Y3Rpb25zQ29udGFpbmVyIiwiUmVhY3QiLCJsYXp5IiwiUm91dGVyRmVhdHVyZUxpc3QiLCJSb3V0ZXJSZXN1bHRDb250YWluZXIiLCJwcm9wcyIsImNsaWNrQ29udHJvbCIsImJpbmQiLCJwcm9maWxlVHJhbnNsYXRpb24iLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJob29rX21hcF9jbGljayIsInNjcm9sbHRvRWxlbWVudCIsImNsaWNrRXZlbnQiLCJmZWF0dXJlIiwibWFwQ29udHJvbGxlciIsIm1hcCIsImZvckVhY2hGZWF0dXJlQXRQaXhlbCIsInBpeGVsIiwibGF5ZXIiLCJnZXQiLCJ6b29tVG9JZCIsInNldFJlc3VsdEZlYXQiLCJzZXRBY3RpdmVJZCIsInB1c2giLCJyZXN1bHQiLCJ0aW1lIiwiZGV0b3VyIiwiZmVhdHVyZUNvdW50Iiwicm91dGVySW5zdHJ1Y3Rpb25zIiwiaW5zdHJ1Y3Rpb25zIiwibW9kZSIsImZlYXR1cmVMaXN0IiwiZmVhdHVyZXMiLCJsZW5ndGgiLCJyb3V0ZXJIZWFkZXJDb250ZW50IiwicHJpbnRGdW5jdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJyZXN1bHRNb2RlIiwicHJ0Q29udGVudCIsImRvY3VtZW50IiwiY2xvbmVOb2RlIiwiZnJvbUFkZHJlc3MiLCJyb3V0ZXIiLCJzdGF0ZSIsImRpdkZyb21BZGRyZXNzIiwiY3JlYXRlRWxlbWVudCIsImxhYmVsRnJvbUFkZHJlc3MiLCJpbm5lckhUTUwiLCJsYW5nIiwiUk9VVEVSX0ZST00iLCJlbUZyb21BZGRyZXNzIiwiYXBwZW5kQ2hpbGQiLCJ0b0FkZHJlc3MiLCJkaXZUb0FkZHJlc3MiLCJsYWJlbFRvQWRkcmVzcyIsImVtVG9BZGRyZXNzIiwicmVtb3ZlIiwiV2luUHJpbnQiLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImZvY3VzIiwicHJpbnQiLCJST1VURVJfVklFV19MQUJFTF9USU1FIiwiUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0UiLCJST1VURVJfRE9XTkxPQUQiLCJleHBvcnRHcHgiLCJST1VURVJfUFJJTlQiLCJBUkVBX0RFVE9VUiIsIkFSRUFfRkVBVFVSRUNPVU5UIiwicm91dGVyV2F5U291cmNlIiwicm91dGVySGludFNvdXJjZSIsImFjdGl2ZUlkIiwibGF5ZXJSb3V0ZSIsImxheWVyQXJlYSIsImZlYXR1cmVTb3VyY2UiLCJsYXllclZhbHVlUm91dGUiLCJsYXllclZhbHVlQXJlYSIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb250cm9sQ29udGFpbmVyIiwibWFwQ29udGFpbmVyIiwic2NvcGUiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsInNldFN0YXRlIiwic2V0T3BlbiIsInNvdXJjZSIsImZvcm1hdCIsIkdQWCIsImdldEZlYXR1cmVzIiwic3RyRXhwb3J0Iiwid3JpdGVGZWF0dXJlcyIsImZlYXR1cmVQcm9qZWN0aW9uIiwiZGF0YVByb2plY3Rpb24iLCJkZWNpbWFscyIsImVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaXNwbGF5IiwiYm9keSIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50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LENBQUNDLFlBQVIsQ0FBcUIsTUFBckIsRUFBNkIsaUNBQWlDQyxrQkFBa0IsQ0FBQ1AsU0FBRCxDQUFoRjtBQUNBSyxlQUFPLENBQUNDLFlBQVIsQ0FBcUIsVUFBckIsRUFBaUMsV0FBakM7QUFFQUQsZUFBTyxDQUFDYixLQUFSLENBQWNnQixPQUFkLEdBQXdCLE1BQXhCO0FBQ0E5RCxnQkFBUSxDQUFDK0QsSUFBVCxDQUFjbkQsV0FBZCxDQUEwQitDLE9BQTFCO0FBRUFBLGVBQU8sQ0FBQ0ssS0FBUjtBQUVBaEUsZ0JBQVEsQ0FBQytELElBQVQsQ0FBY0UsV0FBZCxDQUEwQk4sT0FBMUI7QUFDQU8sZUFBTyxDQUFDQyxHQUFSLENBQVliLFNBQVo7QUFDRDtBQUNGOzs7V0FFRCxvQ0FBMkIsQ0FDekI7QUFDRDs7O1dBRUQscUNBQTRCLENBQzFCO0FBQ0Q7OztFQXpOd0NjLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLXJlc3VsdC1jb250YWluZXJfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIGEgZGlzdGFuY2UgaW4gbWV0ZXJzIHRvIGEgbW9yZSByZWFkYWJsZSBmb3JtYXQuXG4gKiBAcGFyYW0gZGlzdGFuY2VJbk1ldGVycyAgVGhlIGRpc3RhbmNlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9IdW1hbkRpc3RhbmNlKGRpc3RhbmNlSW5NZXRlcnMpIHtcblxuICB2YXIgZGlzdGFuY2UsXG4gICAgaHVtYW5EaXN0YW5jZTtcblxuICBkaXN0YW5jZSA9IHBhcnNlSW50KGRpc3RhbmNlSW5NZXRlcnMsIDEwKTtcbiAgZGlzdGFuY2UgPSBkaXN0YW5jZSAvIDEwMDA7XG5cbiAgaWYgKGRpc3RhbmNlID49IDEwMCkge1xuICAgIGh1bWFuRGlzdGFuY2UgPSBkaXN0YW5jZS50b0ZpeGVkKDApICsgXCIgXCIgKyAna20nO1xuICB9IGVsc2UgaWYgKGRpc3RhbmNlID49IDEwKSB7XG4gICAgaHVtYW5EaXN0YW5jZSA9IGRpc3RhbmNlLnRvRml4ZWQoMSkgKyBcIiBcIiArICdrbSc7XG4gIH0gZWxzZSBpZiAoZGlzdGFuY2UgPj0gMC4xKSB7XG4gICAgaHVtYW5EaXN0YW5jZSA9IGRpc3RhbmNlLnRvRml4ZWQoMikgKyBcIiBcIiArICdrbSc7XG4gIH0gZWxzZSB7XG4gICAgaHVtYW5EaXN0YW5jZSA9IChkaXN0YW5jZSAqIDEwMDApLnRvRml4ZWQoMCkgKyBcIiBcIiArICdtJztcbiAgfVxuXG4gIHJldHVybiBodW1hbkRpc3RhbmNlO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgdGltZSBpbiBzZWNvbmRzIHRvIGEgbW9yZSByZWFkYWJsZSBmb3JtYXQuXG4gKiBAcGFyYW0gdGltZUluU2Vjb25kcyAgICAgVGhlIHRpbWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0h1bWFuVGltZSh0aW1lSW5TZWNvbmRzKSB7XG5cbiAgdmFyIHNlY29uZHMsXG4gICAgbWludXRlcyxcbiAgICBob3VycyxcbiAgICBodW1hblRpbWU7XG5cbiAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVJblNlY29uZHMsIDEwKTtcbiAgbWludXRlcyA9IHBhcnNlSW50KHNlY29uZHMgLyA2MCwgMTApO1xuICBzZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuXG4gIGhvdXJzID0gcGFyc2VJbnQobWludXRlcyAvIDYwLCAxMCk7XG4gIG1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG5cbiAgaWYgKGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDApIHtcbiAgICBodW1hblRpbWUgPSBzZWNvbmRzICsgXCIgXCIgKyAncyc7XG4gIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICBodW1hblRpbWUgPSBtaW51dGVzICsgXCIgXCIgKyAnbWluJztcbiAgfSBlbHNlIHtcbiAgICBodW1hblRpbWUgPSBob3VycyArIFwiIFwiICsgJ2gnICsgXCIgXCIgKyBtaW51dGVzICsgXCIgXCIgKyAnbWluJztcbiAgfVxuXG4gIHJldHVybiBodW1hblRpbWU7XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQge1JvdXRlckluc3RydWN0aW9uc0NvbnRhaW5lcn0gZnJvbSBcIi4vYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtY29udGFpbmVyLmpzeFwiO1xuLy8gaW1wb3J0IHtSb3V0ZXJGZWF0dXJlTGlzdH0gZnJvbSBcIi4vYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QuanN4XCI7XG5pbXBvcnQgR1BYIGZyb20gXCJvbC9mb3JtYXQvR1BYXCI7XG5pbXBvcnQge3RvSHVtYW5EaXN0YW5jZSwgdG9IdW1hblRpbWV9IGZyb20gXCIuLi9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnNcIjtcbmltcG9ydCB7VGl0bGViYXJ9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy10aXRsZWJhci5qc3hcIjtcblxuY29uc3QgUm91dGVySW5zdHJ1Y3Rpb25zQ29udGFpbmVyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtY29udGFpbmVyLmpzeCcpKTtcbmNvbnN0IFJvdXRlckZlYXR1cmVMaXN0ID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QuanN4JykpO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyUmVzdWx0Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2xpY2tDb250cm9sID0gdGhpcy5jbGlja0NvbnRyb2wuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvbiA9IHtcbiAgICAgIDA6IFwiY2FyXCIsXG4gICAgICAxOiBcImhndlwiLFxuICAgICAgMjogXCJiaWtlXCIsXG4gICAgICAzOiBcImJpa2VcIixcbiAgICAgIDQ6IFwiYmlrZVwiLFxuICAgICAgNTogXCJiaWtlXCIsXG4gICAgICA2OiBcImJpa2VcIixcbiAgICAgIDc6IFwiYmlrZVwiLFxuICAgICAgODogXCJmb290XCIsXG4gICAgICA5OiBcImZvb3RcIixcbiAgICAgIDEwOiBcIndoZWVsY2hhaXJcIixcbiAgICAgIDExOiBcImhndlwiLFxuICAgICAgMTI6IFwic2Nvb3RlclwiLFxuICAgICAgMTM6IFwic2Nvb3RlclwiXG4gICAgfTtcbiAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfbWFwX2NsaWNrID0gd2luZG93LmM0Z01hcHNIb29rcy5ob29rX21hcF9jbGljayB8fCBbXTtcbiAgICBsZXQgc2Nyb2xsdG9FbGVtZW50ID0gKGNsaWNrRXZlbnQpID0+IHtcbiAgICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5mb3JFYWNoRmVhdHVyZUF0UGl4ZWwoY2xpY2tFdmVudC5waXhlbCxcbiAgICAgICAgICBmdW5jdGlvbiAoZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlO1xuICAgICAgICAgIH1cbiAgICAgICk7XG4gICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCgndGlkJykpIHtcbiAgICAgICAgbGV0IHpvb21Ub0lkID0gZmVhdHVyZS5nZXQoJ3RpZCcpO1xuICAgICAgICB0aGlzLnByb3BzLnNldFJlc3VsdEZlYXQoY2xpY2tFdmVudCk7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0QWN0aXZlSWQoem9vbVRvSWQpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmM0Z01hcHNIb29rcy5ob29rX21hcF9jbGljay5wdXNoKHNjcm9sbHRvRWxlbWVudCk7XG4gIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgIGxldCB0aW1lID0gXCJcIjtcbiAgICBsZXQgZGlzdGFuY2UgPSBcIlwiO1xuICAgIGxldCBkZXRvdXIgPSBcIlwiO1xuICAgIGxldCBmZWF0dXJlQ291bnQgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucyAmJiB0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucy5pbnN0cnVjdGlvbnMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIHRpbWUgPSB0b0h1bWFuVGltZSh0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucy50aW1lKTtcbiAgICAgIGRpc3RhbmNlID0gdG9IdW1hbkRpc3RhbmNlKHRoaXMucHJvcHMucm91dGVySW5zdHJ1Y3Rpb25zLmRpc3RhbmNlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZmVhdHVyZUxpc3QgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgZGV0b3VyID0gdGhpcy5wcm9wcy5kZXRvdXI7XG4gICAgICBmZWF0dXJlQ291bnQgPSB0aGlzLnByb3BzLmZlYXR1cmVMaXN0LmZlYXR1cmVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBsZXQgcm91dGVySGVhZGVyQ29udGVudCA9IFwiXCI7XG4gICAgbGV0IHByaW50RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICBsZXQgcXVlcnlTZWxlY3RvciA9IHRoaXMucHJvcHMucmVzdWx0TW9kZSA9PT0gXCJpbnN0clwiID8gJy5jNGctcm91dGUtaW5zdHJ1Y3Rpb25zLXdyYXBwZXInIDogJy5jNGctcm91dGUtZmVhdHVyZS13cmFwcGVyJztcbiAgICAgIGxldCBwcnRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVNlbGVjdG9yKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5yZXN1bHRNb2RlID09PSBcImluc3RyXCIpIHtcbiAgICAgICAgbGV0IGZyb21BZGRyZXNzID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUuZnJvbUFkZHJlc3M7XG4gICAgICAgIGxldCBkaXZGcm9tQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbGFiZWxGcm9tQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsRnJvbUFkZHJlc3MuaW5uZXJIVE1MID0gdGhpcy5wcm9wcy5sYW5nLlJPVVRFUl9GUk9NICsgXCI6IFwiO1xuICAgICAgICBsZXQgZW1Gcm9tQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gICAgICAgIGVtRnJvbUFkZHJlc3MuaW5uZXJIVE1MID0gZnJvbUFkZHJlc3M7XG4gICAgICAgIGRpdkZyb21BZGRyZXNzLmFwcGVuZENoaWxkKGxhYmVsRnJvbUFkZHJlc3MpO1xuICAgICAgICBkaXZGcm9tQWRkcmVzcy5hcHBlbmRDaGlsZChlbUZyb21BZGRyZXNzKTtcbiAgICAgICAgZGl2RnJvbUFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKSk7XG5cbiAgICAgICAgbGV0IHRvQWRkcmVzcyA9IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLnRvQWRkcmVzcztcbiAgICAgICAgbGV0IGRpdlRvQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbGFiZWxUb0FkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbFRvQWRkcmVzcy5pbm5lckhUTUwgPSB0aGlzLnByb3BzLmxhbmcuUk9VVEVSX0ZST00gKyBcIjogXCI7XG4gICAgICAgIGxldCBlbVRvQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gICAgICAgIGVtVG9BZGRyZXNzLmlubmVySFRNTCA9IHRvQWRkcmVzcztcbiAgICAgICAgZGl2VG9BZGRyZXNzLmFwcGVuZENoaWxkKGxhYmVsVG9BZGRyZXNzKTtcbiAgICAgICAgZGl2VG9BZGRyZXNzLmFwcGVuZENoaWxkKGVtVG9BZGRyZXNzKTtcbiAgICAgICAgZGl2VG9BZGRyZXNzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJykpO1xuXG4gICAgICAgIHBydENvbnRlbnQucXVlcnlTZWxlY3RvcignLmM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicpLmFwcGVuZENoaWxkKGRpdkZyb21BZGRyZXNzKTtcbiAgICAgICAgcHJ0Q29udGVudC5xdWVyeVNlbGVjdG9yKCcuYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtaGVhZGVyJykuYXBwZW5kQ2hpbGQoZGl2VG9BZGRyZXNzKTtcbiAgICAgIH1cblxuICAgICAgcHJ0Q29udGVudC5xdWVyeVNlbGVjdG9yKCcuYzRnLXJvdXRlci1wcmludCcpLnJlbW92ZSgpO1xuICAgICAgbGV0IFdpblByaW50ID0gd2luZG93Lm9wZW4oJycsICcnLCAnbGVmdD0wLHRvcD0wLHdpZHRoPTgwMCxoZWlnaHQ9OTAwLHRvb2xiYXI9MCxzY3JvbGxiYXJzPTAsc3RhdHVzPTAnKTtcbiAgICAgIFdpblByaW50LmRvY3VtZW50LndyaXRlKHBydENvbnRlbnQuaW5uZXJIVE1MKTtcbiAgICAgIFdpblByaW50LmRvY3VtZW50LmNsb3NlKCk7XG4gICAgICBXaW5QcmludC5mb2N1cygpO1xuICAgICAgV2luUHJpbnQucHJpbnQoKTtcbiAgICAgIFdpblByaW50LmNsb3NlKCk7XG4gICAgfTtcbiAgICBpZiAoKHRpbWUgJiYgZGlzdGFuY2UpICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG5cbiAgICAgIHJvdXRlckhlYWRlckNvbnRlbnQgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXJvdXRlLXRpbWVcIj5cbiAgICAgICAgICAgIDxsYWJlbD57dGhpcy5wcm9wcy5sYW5nLlJPVVRFUl9WSUVXX0xBQkVMX1RJTUV9PC9sYWJlbD5cbiAgICAgICAgICAgIDxlbT57dGltZX08L2VtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1yb3V0ZS1kaXN0YW5jZVwiPlxuICAgICAgICAgICAgPGxhYmVsPnt0aGlzLnByb3BzLmxhbmcuUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0V9PC9sYWJlbD5cbiAgICAgICAgICAgIDxlbT57ZGlzdGFuY2V9PC9lbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWRvd25sb2FkXCJ9IHRpdGxlPXt0aGlzLnByb3BzLmxhbmcuUk9VVEVSX0RPV05MT0FEfSBvbk1vdXNlVXA9eygpPT57dGhpcy5leHBvcnRHcHgoKX19Lz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByaW50XCJ9IHRpdGxlPXt0aGlzLnByb3BzLmxhbmcuUk9VVEVSX1BSSU5UfSBvbk1vdXNlVXA9eygpPT57cHJpbnRGdW5jdGlvbigpfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICgoZGV0b3VyICYmIGZlYXR1cmVDb3VudCkgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcImFyZWFcIikge1xuXG4gICAgICByb3V0ZXJIZWFkZXJDb250ZW50ID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1hcmVhLWRldG91clwiPlxuICAgICAgICAgICAgPGxhYmVsPnt0aGlzLnByb3BzLmxhbmcuQVJFQV9ERVRPVVJ9OjwvbGFiZWw+XG4gICAgICAgICAgICA8ZW0+e2RldG91cn0ga208L2VtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1hcmVhLWZlYXR1cmVjb3VudFwiPlxuICAgICAgICAgICAgPGxhYmVsPnt0aGlzLnByb3BzLmxhbmcuQVJFQV9GRUFUVVJFQ09VTlR9OjwvbGFiZWw+XG4gICAgICAgICAgICA8ZW0+e2ZlYXR1cmVDb3VudH08L2VtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJpbnRcIn0gb25Nb3VzZVVwPXsoKT0+e3ByaW50RnVuY3Rpb24oKX19Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuXG4gICAgaWYgKCh0aGlzLnByb3BzLnJlc3VsdE1vZGUgPT09IFwiaW5zdHJcIiAmJiB0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucyAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikpIHtcbiAgICAgIHJlc3VsdCA9IDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5cImxvYWRpbmcuLlwiPC9kaXY+fT5cbiAgICAgICAgICA8Um91dGVySW5zdHJ1Y3Rpb25zQ29udGFpbmVyIGNsYXNzTmFtZT17XCJjNGctcm91dGUtaW5zdHJ1Y3Rpb25zLXdyYXBwZXJcIn0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zPXt0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9uc30gcm91dGVyV2F5U291cmNlPXt0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckhpbnRTb3VyY2U9e3RoaXMucHJvcHMucm91dGVySGludFNvdXJjZX0gb3Blbj17dGhpcy5wcm9wcy5vcGVufSBoZWFkZXI9e3JvdXRlckhlYWRlckNvbnRlbnR9Lz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICB9IGVsc2UgaWYgKCgodGhpcy5wcm9wcy5yZXN1bHRNb2RlID09PSBcImZlYXRcIiB8fCB0aGlzLnByb3BzLm1vZGUgPT09IFwiYXJlYVwiKSB8fCAoIXRoaXMucHJvcHMucm91dGVySW5zdHJ1Y3Rpb25zICYmIHRoaXMucHJvcHMuZmVhdHVyZUxpc3QpKSkge1xuICAgICAgcmVzdWx0ID0gPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PlwibG9hZGluZy4uXCI8L2Rpdj59PlxuICAgICAgICAgIDxSb3V0ZXJGZWF0dXJlTGlzdCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlLWZlYXR1cmUtd3JhcHBlclwifSBhY3RpdmVJZD17dGhpcy5wcm9wcy5hY3RpdmVJZH0gc2V0QWN0aXZlSWQ9e3RoaXMucHJvcHMuc2V0QWN0aXZlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVNb2RlPXt0aGlzLnByb3BzLm1vZGV9IGxheWVyUm91dGU9e3RoaXMucHJvcHMubGF5ZXJSb3V0ZX0gbGF5ZXJBcmVhPXt0aGlzLnByb3BzLmxheWVyQXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17dGhpcy5wcm9wcy5mZWF0dXJlTGlzdH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBmZWF0dXJlU291cmNlPXt0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJWYWx1ZVJvdXRlPXt0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZX0gbGF5ZXJWYWx1ZUFyZWE9e3RoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWF9IGhlYWRlcj17cm91dGVySGVhZGVyQ29udGVudH0vPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgKyAodGhpcy5wcm9wcy5vcGVuID8gXCIgYzRnLW9wZW5cIiA6IFwiIGM0Zy1jbG9zZVwiKVxuICAgICAgICArICh0aGlzLnByb3BzLm9wZW4gPyBcIiBjNGctZGV0YWlscy1vcGVuXCIgOiBcIlwiKX0+XG4gICAgICAgICAge3Jlc3VsdH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lICsgKHRoaXMucHJvcHMub3BlbiA/IFwiIGM0Zy1vcGVuXCIgOiBcIiBjNGctY2xvc2VcIik7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICBsZXQgY29udHJvbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLXJvdXRlci1wYW5lbC5jNGctb3BlblwiKTtcbiAgICBpZiAoY29udHJvbENvbnRhaW5lcikge1xuICAgICAgY29udHJvbENvbnRhaW5lciA9IGNvbnRyb2xDb250YWluZXJbMF07XG4gICAgfVxuICAgIGxldCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmM0Z19tYXBcIikgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmM0Z19tYXBcIilbMF0gOiBmYWxzZTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKG1hcENvbnRhaW5lciAmJiBjb250YWluZXIpIHtcbiAgICAgIGlmIChjb250cm9sQ29udGFpbmVyKSB7XG4gICAgICAgIGlmIChjb250YWluZXIub2Zmc2V0SGVpZ2h0ICsgY29udHJvbENvbnRhaW5lci5vZmZzZXRIZWlnaHQgKyA4NCA+IG1hcENvbnRhaW5lci5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gbWFwQ29udGFpbmVyLm9mZnNldEhlaWdodCAtIGNvbnRyb2xDb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJhcmVhXCIgJiYgdGhpcy5wcm9wcy5yZXN1bHRNb2RlICE9PSBcImZlYXRcIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe3Jlc3VsdE1vZGU6IFwiZmVhdFwifSk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnByb3BzLnNldE9wZW4odHJ1ZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnByb3BzLnNldE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgY2xpY2tDb250cm9sKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuICBleHBvcnRHcHgoKSB7XG4gICAgbGV0IHNvdXJjZSA9IHRoaXMucHJvcHMucm91dGVyLnJvdXRlcldheVNvdXJjZTtcbiAgICBsZXQgZm9ybWF0ID0gbmV3IEdQWCgpO1xuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLmdldEZlYXR1cmVzICYmIHNvdXJjZS5nZXRGZWF0dXJlcygpKSB7XG4gICAgICBsZXQgc3RyRXhwb3J0ID0gZm9ybWF0LndyaXRlRmVhdHVyZXMoc291cmNlLmdldEZlYXR1cmVzKCksIHtcbiAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IFwiRVBTRzozODU3XCIsXG4gICAgICAgIGRhdGFQcm9qZWN0aW9uOiBcIkVQU0c6NDMyNlwiLFxuICAgICAgICBkZWNpbWFsczogM1xuICAgICAgfSk7XG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6dGV4dC94bWw7Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0ckV4cG9ydCkpO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgXCJyb3V0ZS5ncHhcIik7XG5cbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgIGVsZW1lbnQuY2xpY2soKTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgIGNvbnNvbGUubG9nKHN0ckV4cG9ydCk7XG4gICAgfVxuICB9XG5cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIC8vIG92ZXJyaWRlIHBhcmVudCBtZXRob2RcbiAgfVxuXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgLy8gb3ZlcnJpZGUgcGFyZW50IG1ldGhvZFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==