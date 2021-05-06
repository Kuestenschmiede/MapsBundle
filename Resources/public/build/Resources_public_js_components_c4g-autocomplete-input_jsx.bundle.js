(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-autocomplete-input_jsx"],{

/***/ "./Resources/public/js/components/c4g-autocomplete-input.jsx":
/*!*******************************************************************!*\
  !*** ./Resources/public/js/components/c4g-autocomplete-input.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AutocompleteInput = void 0;

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

var AutocompleteInput = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(AutocompleteInput, _Component);

  var _super = _createSuper(AutocompleteInput);

  function AutocompleteInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AutocompleteInput);
    _this = _super.call(this, props);
    _this.listenerRegistered = false;
    return _this;
  }

  (0, _createClass2["default"])(AutocompleteInput, [{
    key: "render",
    value: function render() {
      var scope = this;

      var submitFunction = function submitFunction() {
        var field = $("#" + scope.props.cssId);
        field.trigger('change');
        var performSearchCallback;

        if (scope.props.cssId.indexOf("area") !== -1) {
          performSearchCallback = function performSearchCallback() {
            scope.props.router.performArea();
          };
        } else {
          performSearchCallback = function performSearchCallback() {
            scope.props.router.performViaRoute();
          };
        }

        var value = scope.props.cssId.indexOf('From') !== -1 ? "fromValue" : "toValue";
        scope.props.router.performSearch(field, value, performSearchCallback);
      };

      var enterListener = function enterListener(event, opt_this) {
        if (event.keyCode === 13) {
          submitFunction();
        } else {
          if ($(event.currentTarget).val().length === 0 && !event.keyCode) {
            //deleted
            if (typeof scope.props.objFunctions.deleteFunction === "function") {
              scope.props.objFunctions.deleteFunction(event.currentTarget, event.currentTarget.id);
            } else {
              // over points
              scope.props.objFunctions[scope.props.index].deleteFunction(event.currentTarget, event.currentTarget.id);
            }
          } else {
            scope.counter = Math.floor(Date.now());
            setTimeout(function () {
              if (scope.counter && scope.counter + 400 < Math.floor(Date.now())) {
                delete scope.counter;

                if (!scope.props.objSettings.proxyUrl || !scope.props.objSettings.keyAutocomplete) {
                  var value = scope.props.cssId.indexOf('From') !== -1 ? "fromValue" : "toValue";
                  var field = $("#" + scope.props.cssId);
                  scope.props.router.performSearch(field, value);
                } else {
                  scope.autocompleteAddress($("#" + scope.props.cssId).val(), "#" + scope.props.cssId);
                }
              }
            }, 500);
          }
        }
      };

      return /*#__PURE__*/_react["default"].createElement("input", {
        id: this.props.cssId,
        type: "search",
        defaultValue: this.props.value,
        onKeyDown: enterListener,
        autoComplete: "off"
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var scope = this;
      var arrNames;

      if (this.props.cssId.indexOf("From") !== -1) {
        arrNames = this.props.containerAddresses.arrFromNames;
      } else if (this.props.cssId.indexOf("To") !== -1) {
        arrNames = this.props.containerAddresses.arrToNames;
      } else if (this.props.cssId.indexOf("Over") !== -1) {
        arrNames = this.props.containerAddresses.arrOverNames[this.props.index];
      } else if (this.props.cssId.indexOf("area") !== -1) {
        arrNames = this.props.containerAddresses.arrAreaNames;
      }

      var inputField = jQuery('#' + this.props.cssId);

      if (inputField && typeof inputField.autocomplete == 'function') {
        inputField.autocomplete({
          source: arrNames
        });
      } // only register listener once


      if (!this.listenerRegistered) {
        inputField.on('autocompleteselect', function (event, ui) {
          if (scope.props.index) {
            scope.props.objFunctions[scope.props.index].selectListener(event, ui);
          } else {
            scope.props.objFunctions.selectListener(event, ui);
          }
        });
        this.listenerRegistered = true;
      }
    }
  }, {
    key: "setCenter",
    value: function setCenter(center) {
      this.objSettings.center = center;
    }
  }, {
    key: "autocompleteAddress",
    value: function autocompleteAddress(input, cssClass) {
      var scope = this;
      var settings = scope.props.objSettings;
      var center;

      if (settings.center) {
        if (typeof settings.center === "function") {
          var objCenter = settings.center();
          center = objCenter[0] + "," + objCenter[1];
        } else {
          center = settings.center[0] + "," + settings.center[1];
        }
      } else if (settings.bBox) {
        center = (parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2 + "," + (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2;
      }

      var url;

      if (center) {
        url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input + "&center=" + center;
      } else {
        url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input;
      }

      if (settings.geosearchParams) {
        for (var param in settings.geosearchParams) {
          if (settings.geosearchParams.hasOwnProperty(param)) {
            url += "&" + param + "=" + settings.geosearchParams[param];
          }
        }
      }

      $.ajax({
        url: url
      }).done(function (data) {
        var center;

        if (settings.center) {
          center = settings.center;
        } else if (settings.bBox) {
          center = [(parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2, (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2];
        }

        if (data.length > 0) {
          if (data[0] && data[0].display_name && center) {
            // $(cssId).val(data[0].display_name);
            var arrAddresses = [];

            for (var i in data) {
              if (data.hasOwnProperty(i)) {
                if (settings.bBox && settings.bBox[0]) {
                  if (scope.isInBoundingBox(data[i].lon, data[i].lat, settings.bBox)) {
                    var distance = Math.sqrt((center[0] - data[i].lon) * (center[0] - data[i].lon) + (center[1] - data[i].lat) * (center[1] - data[i].lat));
                    var element = {
                      'dist': distance,
                      'pos': [data[i].lat, data[i].lon],
                      'name': data[i].display_name
                    };
                    arrAddresses.push(element);
                  }
                }
              }
            }

            arrAddresses.sort(function (a, b) {
              return a.dist - b.dist;
            });

            for (var _i in arrAddresses) {
              if (arrAddresses.hasOwnProperty(_i)) {
                if (cssClass.indexOf('from') !== -1) {
                  // do not add twice
                  if (!scope.props.containerAddresses.arrFromNames.includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrFromNames.push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrFromPositions.push(arrAddresses[_i].pos);
                  }
                } else if (cssClass.indexOf('to') !== -1) {
                  if (!scope.props.containerAddresses.arrToNames.includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrToNames.push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrToPositions.push(arrAddresses[_i].pos);
                  }
                } else if (cssClass.indexOf('over') !== -1) {
                  if (!scope.props.containerAddresses.arrOverNames[scope.props.index].includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrOverNames[scope.props.index].push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrOverPositions[scope.props.index].push(arrAddresses[_i].pos);
                  }
                } else if (cssClass.indexOf('area') !== -1) {
                  if (!scope.props.containerAddresses.arrAreaNames.includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrAreaNames.push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrAreaPositions.push(arrAddresses[_i].pos);
                  }
                } else {
                  console.log("This is weird ¯\\_(ツ)_/¯");
                }
              }
            } // trigger keydown event to show autocomplete options


            var _event = jQuery.Event("keydown", {
              keyCode: 8
            });

            $(cssClass).trigger(_event);
          }

          for (var _i2 in data) {
            if (data.hasOwnProperty(_i2)) {
              if (cssClass.indexOf('From') !== -1) {
                // do not add twice
                if (!scope.props.containerAddresses.arrFromNames.includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrFromNames.push(data[_i2].display_name);
                  scope.props.containerAddresses.arrFromPositions.push([data[_i2].lat, data[_i2].lon]);
                }
              } else if (cssClass.indexOf('To') !== -1) {
                if (!scope.props.containerAddresses.arrToNames.includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrToNames.push(data[_i2].display_name);
                  scope.props.containerAddresses.arrToPositions.push([data[_i2].lat, data[_i2].lon]);
                }
              } else if (cssClass.indexOf('Over') !== -1) {
                if (!scope.props.containerAddresses.arrOverNames[scope.props.index].includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrOverNames[scope.props.index].push(data[_i2].display_name);
                  scope.props.containerAddresses.arrOverPositions[scope.props.index].push([data[_i2].lat, data[_i2].lon]);
                }
              } else if (cssClass.indexOf('area') !== -1) {
                if (!scope.props.containerAddresses.arrAreaNames.includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrAreaNames.push(data[_i2].display_name);
                  scope.props.containerAddresses.arrAreaPositions.push([data[_i2].lat, data[_i2].lon]);
                }
              } else {
                console.log("This is weird ¯\\_(ツ)_/¯");
              }
            }
          }

          scope.props.router.setState({
            containerAddresses: scope.props.containerAddresses
          }); // trigger keydown event to show autocomplete options

          var event = jQuery.Event("keydown", {
            keyCode: 8
          });
          $(cssClass).trigger(event);
        }
      });
    }
  }, {
    key: "isInBoundingBox",
    value: function isInBoundingBox(longitude, latitude, bbox) {
      if (typeof longitude === "string") {
        longitude = parseFloat(longitude);
      }

      if (typeof latitude === "string") {
        latitude = parseFloat(latitude);
      }

      if (bbox[0] < longitude && longitude < bbox[2] && bbox[1] < latitude && latitude < bbox[3]) {
        return true;
      } else {
        return false;
      }
    }
  }]);
  return AutocompleteInput;
}(_react.Component);

exports.AutocompleteInput = AutocompleteInput;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1hdXRvY29tcGxldGUtaW5wdXQuanN4Il0sIm5hbWVzIjpbIkF1dG9jb21wbGV0ZUlucHV0IiwicHJvcHMiLCJsaXN0ZW5lclJlZ2lzdGVyZWQiLCJzY29wZSIsInN1Ym1pdEZ1bmN0aW9uIiwiZmllbGQiLCIkIiwiY3NzSWQiLCJ0cmlnZ2VyIiwicGVyZm9ybVNlYXJjaENhbGxiYWNrIiwiaW5kZXhPZiIsInJvdXRlciIsInBlcmZvcm1BcmVhIiwicGVyZm9ybVZpYVJvdXRlIiwidmFsdWUiLCJwZXJmb3JtU2VhcmNoIiwiZW50ZXJMaXN0ZW5lciIsImV2ZW50Iiwib3B0X3RoaXMiLCJrZXlDb2RlIiwiY3VycmVudFRhcmdldCIsInZhbCIsImxlbmd0aCIsIm9iakZ1bmN0aW9ucyIsImRlbGV0ZUZ1bmN0aW9uIiwiaWQiLCJpbmRleCIsImNvdW50ZXIiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsIm9ialNldHRpbmdzIiwicHJveHlVcmwiLCJrZXlBdXRvY29tcGxldGUiLCJhdXRvY29tcGxldGVBZGRyZXNzIiwiYXJyTmFtZXMiLCJjb250YWluZXJBZGRyZXNzZXMiLCJhcnJGcm9tTmFtZXMiLCJhcnJUb05hbWVzIiwiYXJyT3Zlck5hbWVzIiwiYXJyQXJlYU5hbWVzIiwiaW5wdXRGaWVsZCIsImpRdWVyeSIsImF1dG9jb21wbGV0ZSIsInNvdXJjZSIsIm9uIiwidWkiLCJzZWxlY3RMaXN0ZW5lciIsImNlbnRlciIsImlucHV0IiwiY3NzQ2xhc3MiLCJzZXR0aW5ncyIsIm9iakNlbnRlciIsImJCb3giLCJwYXJzZUZsb2F0IiwidXJsIiwiZ2Vvc2VhcmNoUGFyYW1zIiwicGFyYW0iLCJoYXNPd25Qcm9wZXJ0eSIsImFqYXgiLCJkb25lIiwiZGF0YSIsImRpc3BsYXlfbmFtZSIsImFyckFkZHJlc3NlcyIsImkiLCJpc0luQm91bmRpbmdCb3giLCJsb24iLCJsYXQiLCJkaXN0YW5jZSIsInNxcnQiLCJlbGVtZW50IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImRpc3QiLCJpbmNsdWRlcyIsIm5hbWUiLCJhcnJGcm9tUG9zaXRpb25zIiwicG9zIiwiYXJyVG9Qb3NpdGlvbnMiLCJhcnJPdmVyUG9zaXRpb25zIiwiYXJyQXJlYVBvc2l0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJFdmVudCIsInNldFN0YXRlIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJiYm94IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7OztJQUVhQSxpQjs7Ozs7QUFFWCw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0Msa0JBQUwsR0FBMEIsS0FBMUI7QUFIaUI7QUFJbEI7Ozs7V0FFRCxrQkFBUztBQUNQLFVBQU1DLEtBQUssR0FBRyxJQUFkOztBQUNBLFVBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBWTtBQUNqQyxZQUFJQyxLQUFLLEdBQUdDLENBQUMsQ0FBQyxNQUFNSCxLQUFLLENBQUNGLEtBQU4sQ0FBWU0sS0FBbkIsQ0FBYjtBQUNBRixhQUFLLENBQUNHLE9BQU4sQ0FBYyxRQUFkO0FBQ0EsWUFBSUMscUJBQUo7O0FBQ0EsWUFBSU4sS0FBSyxDQUFDRixLQUFOLENBQVlNLEtBQVosQ0FBa0JHLE9BQWxCLENBQTBCLE1BQTFCLE1BQXNDLENBQUMsQ0FBM0MsRUFBOEM7QUFDNUNELCtCQUFxQixHQUFHLGlDQUFXO0FBQ2pDTixpQkFBSyxDQUFDRixLQUFOLENBQVlVLE1BQVosQ0FBbUJDLFdBQW5CO0FBQ0QsV0FGRDtBQUdELFNBSkQsTUFJTztBQUNMSCwrQkFBcUIsR0FBRyxpQ0FBVztBQUNqQ04saUJBQUssQ0FBQ0YsS0FBTixDQUFZVSxNQUFaLENBQW1CRSxlQUFuQjtBQUNELFdBRkQ7QUFHRDs7QUFFRCxZ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QXJDLEVBQTJDO0FBQ3pDLFVBQUksT0FBT0YsU0FBUCxLQUFxQixRQUF6QixFQUFtQztBQUNqQ0EsaUJBQVMsR0FBR2pDLFVBQVUsQ0FBQ2lDLFNBQUQsQ0FBdEI7QUFDRDs7QUFDRCxVQUFJLE9BQU9DLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaENBLGdCQUFRLEdBQUdsQyxVQUFVLENBQUNrQyxRQUFELENBQXJCO0FBQ0Q7O0FBQ0QsVUFBSUMsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVRixTQUFWLElBQ0ZBLFNBQVMsR0FBR0UsSUFBSSxDQUFDLENBQUQsQ0FEZCxJQUVGQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVELFFBRlIsSUFHRkEsUUFBUSxHQUFHQyxJQUFJLENBQUMsQ0FBRCxDQUhqQixFQUdzQjtBQUNwQixlQUFPLElBQVA7QUFDRCxPQUxELE1BS087QUFDTCxlQUFPLEtBQVA7QUFDRDtBQUNGOzs7RUF4UG9DQyxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLWF1dG9jb21wbGV0ZS1pbnB1dF9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubGlzdGVuZXJSZWdpc3RlcmVkID0gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IHN1Ym1pdEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGZpZWxkID0gJChcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKTtcbiAgICAgIGZpZWxkLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgbGV0IHBlcmZvcm1TZWFyY2hDYWxsYmFjaztcbiAgICAgIGlmIChzY29wZS5wcm9wcy5jc3NJZC5pbmRleE9mKFwiYXJlYVwiKSAhPT0gLTEpIHtcbiAgICAgICAgcGVyZm9ybVNlYXJjaENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZXJmb3JtU2VhcmNoQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybVZpYVJvdXRlKCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGxldCB2YWx1ZSA9IChzY29wZS5wcm9wcy5jc3NJZC5pbmRleE9mKCdGcm9tJykgIT09IC0xKSA/IFwiZnJvbVZhbHVlXCIgOiBcInRvVmFsdWVcIjtcbiAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtU2VhcmNoKGZpZWxkLCB2YWx1ZSwgcGVyZm9ybVNlYXJjaENhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgbGV0IGVudGVyTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgb3B0X3RoaXMpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBzdWJtaXRGdW5jdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkubGVuZ3RoID09PSAwICYmICFldmVudC5rZXlDb2RlKSB7IC8vZGVsZXRlZFxuICAgICAgICAgIGlmICh0eXBlb2Ygc2NvcGUucHJvcHMub2JqRnVuY3Rpb25zLmRlbGV0ZUZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm9iakZ1bmN0aW9ucy5kZWxldGVGdW5jdGlvbihldmVudC5jdXJyZW50VGFyZ2V0LCBldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gb3ZlciBwb2ludHNcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm9iakZ1bmN0aW9uc1tzY29wZS5wcm9wcy5pbmRleF0uZGVsZXRlRnVuY3Rpb24oZXZlbnQuY3VycmVudFRhcmdldCwgZXZlbnQuY3VycmVudFRhcmdldC5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjb3BlLmNvdW50ZXIgPSBNYXRoLmZsb29yKERhdGUubm93KCkpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGUuY291bnRlciAmJiBzY29wZS5jb3VudGVyICsgNDAwIDwgTWF0aC5mbG9vcihEYXRlLm5vdygpKSkge1xuICAgICAgICAgICAgICBkZWxldGUgc2NvcGUuY291bnRlcjtcbiAgICAgICAgICAgICAgaWYgKCFzY29wZS5wcm9wcy5vYmpTZXR0aW5ncy5wcm94eVVybCB8fCAhc2NvcGUucHJvcHMub2JqU2V0dGluZ3Mua2V5QXV0b2NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gKHNjb3BlLnByb3BzLmNzc0lkLmluZGV4T2YoJ0Zyb20nKSAhPT0gLTEpID8gXCJmcm9tVmFsdWVcIiA6IFwidG9WYWx1ZVwiO1xuICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9ICQoXCIjXCIgKyBzY29wZS5wcm9wcy5jc3NJZCk7XG4gICAgICAgICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1TZWFyY2goZmllbGQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY29wZS5hdXRvY29tcGxldGVBZGRyZXNzKCQoXCIjXCIgKyBzY29wZS5wcm9wcy5jc3NJZCkudmFsKCksIFwiI1wiICsgc2NvcGUucHJvcHMuY3NzSWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSw1MDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXQgaWQ9e3RoaXMucHJvcHMuY3NzSWR9IHR5cGU9XCJzZWFyY2hcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uS2V5RG93bj17ZW50ZXJMaXN0ZW5lcn1cbiAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIiAvPlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBhcnJOYW1lcztcbiAgICBpZiAodGhpcy5wcm9wcy5jc3NJZC5pbmRleE9mKFwiRnJvbVwiKSAhPT0gLTEpIHtcbiAgICAgIGFyck5hbWVzID0gdGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbU5hbWVzXG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmNzc0lkLmluZGV4T2YoXCJUb1wiKSAhPT0gLTEpIHtcbiAgICAgIGFyck5hbWVzID0gdGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyVG9OYW1lcztcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuY3NzSWQuaW5kZXhPZihcIk92ZXJcIikgIT09IC0xKSB7XG4gICAgICBhcnJOYW1lcyA9IHRoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyck92ZXJOYW1lc1t0aGlzLnByb3BzLmluZGV4XTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuY3NzSWQuaW5kZXhPZihcImFyZWFcIikgIT09IC0xKSB7XG4gICAgICBhcnJOYW1lcyA9IHRoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyckFyZWFOYW1lcztcbiAgICB9XG5cbiAgICBsZXQgaW5wdXRGaWVsZCA9IGpRdWVyeSgnIycgKyB0aGlzLnByb3BzLmNzc0lkKTtcbiAgICBpZiAoaW5wdXRGaWVsZCAmJiAodHlwZW9mKGlucHV0RmllbGQuYXV0b2NvbXBsZXRlKSA9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgaW5wdXRGaWVsZC5hdXRvY29tcGxldGUoe1xuICAgICAgICBzb3VyY2U6IGFyck5hbWVzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IHJlZ2lzdGVyIGxpc3RlbmVyIG9uY2VcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJSZWdpc3RlcmVkKSB7XG4gICAgICBpbnB1dEZpZWxkLm9uKCdhdXRvY29tcGxldGVzZWxlY3QnLCBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5pbmRleCkge1xuICAgICAgICAgIHNjb3BlLnByb3BzLm9iakZ1bmN0aW9uc1tzY29wZS5wcm9wcy5pbmRleF0uc2VsZWN0TGlzdGVuZXIoZXZlbnQsIHVpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5vYmpGdW5jdGlvbnMuc2VsZWN0TGlzdGVuZXIoZXZlbnQsIHVpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RlbmVyUmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2V0Q2VudGVyIChjZW50ZXIpIHtcbiAgICB0aGlzLm9ialNldHRpbmdzLmNlbnRlciA9IGNlbnRlcjtcbiAgfVxuXG4gIGF1dG9jb21wbGV0ZUFkZHJlc3MoaW5wdXQsIGNzc0NsYXNzKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IHNldHRpbmdzID0gc2NvcGUucHJvcHMub2JqU2V0dGluZ3M7XG4gICAgbGV0IGNlbnRlcjtcbiAgICBpZiAoc2V0dGluZ3MuY2VudGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmNlbnRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGxldCBvYmpDZW50ZXIgPSBzZXR0aW5ncy5jZW50ZXIoKTtcbiAgICAgICAgY2VudGVyID0gb2JqQ2VudGVyWzBdICsgXCIsXCIgKyBvYmpDZW50ZXJbMV07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2VudGVyID0gc2V0dGluZ3MuY2VudGVyWzBdICsgXCIsXCIgKyBzZXR0aW5ncy5jZW50ZXJbMV07XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHNldHRpbmdzLmJCb3gpIHtcbiAgICAgIGNlbnRlciA9IChwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbMF0pICsgcGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzJdKSkgLyAyICsgXCIsXCIgKyAocGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzFdKSArIHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFszXSkpIC8gMjtcbiAgICB9XG4gICAgbGV0IHVybDtcbiAgICBpZiAoY2VudGVyKSB7XG4gICAgICB1cmwgPSBzZXR0aW5ncy5wcm94eVVybCArIFwiYXV0b2NvbXBsZXRlLnBocD9mb3JtYXQ9anNvbiZrZXk9XCIgKyBzZXR0aW5ncy5rZXlBdXRvY29tcGxldGUgKyBcIiZxPVwiICsgaW5wdXQgK1wiJmNlbnRlcj1cIiArIGNlbnRlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1cmwgPSBzZXR0aW5ncy5wcm94eVVybCArIFwiYXV0b2NvbXBsZXRlLnBocD9mb3JtYXQ9anNvbiZrZXk9XCIgKyBzZXR0aW5ncy5rZXlBdXRvY29tcGxldGUgKyBcIiZxPVwiICsgaW5wdXQ7XG4gICAgfVxuICAgIGlmIChzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXMpIHtcbiAgICAgIGZvciAobGV0IHBhcmFtIGluIHNldHRpbmdzLmdlb3NlYXJjaFBhcmFtcykge1xuICAgICAgICBpZiAoc2V0dGluZ3MuZ2Vvc2VhcmNoUGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgIHVybCArPSBcIiZcIiArIHBhcmFtICsgXCI9XCIgKyBzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXNbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICQuYWpheCh7dXJsOiB1cmx9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGxldCBjZW50ZXI7XG4gICAgICBpZiAoc2V0dGluZ3MuY2VudGVyKSB7XG4gICAgICAgIGNlbnRlciA9IHNldHRpbmdzLmNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHNldHRpbmdzLmJCb3gpe1xuICAgICAgICBjZW50ZXIgPSBbKHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFswXSkgKyBwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbMl0pKSAvIDIsIChwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbMV0pICsgcGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzNdKSkgLyAyXTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcblxuICAgICAgICBpZiAoZGF0YVswXSAmJiBkYXRhWzBdLmRpc3BsYXlfbmFtZSAgJiYgY2VudGVyKSB7XG4gICAgICAgICAgLy8gJChjc3NJZCkudmFsKGRhdGFbMF0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICBsZXQgYXJyQWRkcmVzc2VzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuYkJveCAmJiBzZXR0aW5ncy5iQm94WzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmlzSW5Cb3VuZGluZ0JveChkYXRhW2ldLmxvbiwgZGF0YVtpXS5sYXQsIHNldHRpbmdzLmJCb3gpKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGNlbnRlclswXSAtIGRhdGFbaV0ubG9uKSAqIChjZW50ZXJbMF0gLSBkYXRhW2ldLmxvbikgKyAoY2VudGVyWzFdIC0gZGF0YVtpXS5sYXQpICogKGNlbnRlclsxXSAtIGRhdGFbaV0ubGF0KSk7XG4gICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3QnIDogZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICdwb3MnICA6IFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dLFxuICAgICAgICAgICAgICAgICAgICAnbmFtZScgOiBkYXRhW2ldLmRpc3BsYXlfbmFtZVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGFyckFkZHJlc3Nlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhcnJBZGRyZXNzZXMuc29ydCgoYSxiKSA9PiBhLmRpc3QgLWIuZGlzdCk7XG5cbiAgICAgICAgICBmb3IgKGxldCBpIGluIGFyckFkZHJlc3Nlcykge1xuICAgICAgICAgICAgaWYgKGFyckFkZHJlc3Nlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICBpZiAoY3NzQ2xhc3MuaW5kZXhPZignZnJvbScpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgdHdpY2VcbiAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJGcm9tTmFtZXMuaW5jbHVkZXMoYXJyQWRkcmVzc2VzW2ldLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbU5hbWVzLnB1c2goYXJyQWRkcmVzc2VzW2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyckZyb21Qb3NpdGlvbnMucHVzaChhcnJBZGRyZXNzZXNbaV0ucG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3NzQ2xhc3MuaW5kZXhPZigndG8nKSAhPT0gLTEpe1xuICAgICAgICAgICAgICAgIGlmICghc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyclRvTmFtZXMuaW5jbHVkZXMoYXJyQWRkcmVzc2VzW2ldLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyVG9OYW1lcy5wdXNoKGFyckFkZHJlc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJUb1Bvc2l0aW9ucy5wdXNoKGFyckFkZHJlc3Nlc1tpXS5wb3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjc3NDbGFzcy5pbmRleE9mKCdvdmVyJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyT3Zlck5hbWVzW3Njb3BlLnByb3BzLmluZGV4XS5pbmNsdWRlcyhhcnJBZGRyZXNzZXNbaV0ubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJPdmVyTmFtZXNbc2NvcGUucHJvcHMuaW5kZXhdLnB1c2goYXJyQWRkcmVzc2VzW2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyck92ZXJQb3NpdGlvbnNbc2NvcGUucHJvcHMuaW5kZXhdLnB1c2goYXJyQWRkcmVzc2VzW2ldLnBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNzc0NsYXNzLmluZGV4T2YoJ2FyZWEnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhTmFtZXMuaW5jbHVkZXMoYXJyQWRkcmVzc2VzW2ldLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyQXJlYU5hbWVzLnB1c2goYXJyQWRkcmVzc2VzW2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyckFyZWFQb3NpdGlvbnMucHVzaChhcnJBZGRyZXNzZXNbaV0ucG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHdlaXJkIMKvXFxcXF8o44OEKV8vwq9cIik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB0cmlnZ2VyIGtleWRvd24gZXZlbnQgdG8gc2hvdyBhdXRvY29tcGxldGUgb3B0aW9uc1xuICAgICAgICAgIGxldCBldmVudCA9IGpRdWVyeS5FdmVudChcImtleWRvd25cIiwge2tleUNvZGU6IDh9KTtcbiAgICAgICAgICAkKGNzc0NsYXNzKS50cmlnZ2VyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgaWYgKGNzc0NsYXNzLmluZGV4T2YoJ0Zyb20nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgLy8gZG8gbm90IGFkZCB0d2ljZVxuICAgICAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJGcm9tTmFtZXMuaW5jbHVkZXMoZGF0YVtpXS5kaXNwbGF5X25hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyckZyb21OYW1lcy5wdXNoKGRhdGFbaV0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbVBvc2l0aW9ucy5wdXNoKFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjc3NDbGFzcy5pbmRleE9mKCdUbycpICE9PSAtMSl7XG4gICAgICAgICAgICAgIGlmICghc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyclRvTmFtZXMuaW5jbHVkZXMoZGF0YVtpXS5kaXNwbGF5X25hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyclRvTmFtZXMucHVzaChkYXRhW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyclRvUG9zaXRpb25zLnB1c2goW2RhdGFbaV0ubGF0LCBkYXRhW2ldLmxvbl0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNzc0NsYXNzLmluZGV4T2YoJ092ZXInKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgaWYgKCFzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyT3Zlck5hbWVzW3Njb3BlLnByb3BzLmluZGV4XS5pbmNsdWRlcyhkYXRhW2ldLmRpc3BsYXlfbmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyT3Zlck5hbWVzW3Njb3BlLnByb3BzLmluZGV4XS5wdXNoKGRhdGFbaV0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyT3ZlclBvc2l0aW9uc1tzY29wZS5wcm9wcy5pbmRleF0ucHVzaChbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3NzQ2xhc3MuaW5kZXhPZignYXJlYScpICE9PSAtMSl7XG4gICAgICAgICAgICAgIGlmICghc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyckFyZWFOYW1lcy5pbmNsdWRlcyhkYXRhW2ldLmRpc3BsYXlfbmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyQXJlYU5hbWVzLnB1c2goZGF0YVtpXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhUG9zaXRpb25zLnB1c2goW2RhdGFbaV0ubGF0LCBkYXRhW2ldLmxvbl0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgd2VpcmQgwq9cXFxcXyjjg4QpXy/Cr1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtcbiAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM6IHNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0cmlnZ2VyIGtleWRvd24gZXZlbnQgdG8gc2hvdyBhdXRvY29tcGxldGUgb3B0aW9uc1xuICAgICAgICBsZXQgZXZlbnQgPSBqUXVlcnkuRXZlbnQoXCJrZXlkb3duXCIsIHtrZXlDb2RlOiA4fSk7XG4gICAgICAgICQoY3NzQ2xhc3MpLnRyaWdnZXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNJbkJvdW5kaW5nQm94KGxvbmdpdHVkZSwgbGF0aXR1ZGUsIGJib3gpIHtcbiAgICBpZiAodHlwZW9mIGxvbmdpdHVkZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbG9uZ2l0dWRlID0gcGFyc2VGbG9hdChsb25naXR1ZGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGxhdGl0dWRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBsYXRpdHVkZSA9IHBhcnNlRmxvYXQobGF0aXR1ZGUpO1xuICAgIH1cbiAgICBpZiAoYmJveFswXSA8IGxvbmdpdHVkZSAmJlxuICAgICAgbG9uZ2l0dWRlIDwgYmJveFsyXSAmJlxuICAgICAgYmJveFsxXSA8IGxhdGl0dWRlICYmXG4gICAgICBsYXRpdHVkZSA8IGJib3hbM10pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==