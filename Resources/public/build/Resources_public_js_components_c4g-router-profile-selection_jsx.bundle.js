(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-router-profile-selection_jsx"],{

/***/ "./Resources/public/js/components/c4g-router-profile-selection.jsx":
/*!*************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-profile-selection.jsx ***!
  \*************************************************************************/
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

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./Resources/public/js/routing-constant-i18n.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterProfileSelection = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterProfileSelection, _Component);

  var _super = _createSuper(RouterProfileSelection);

  function RouterProfileSelection(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterProfileSelection);
    _this = _super.call(this, props);
    _this.setProfile = _this.setProfile.bind((0, _assertThisInitialized2["default"])(_this));
    _this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "roadbike",
      4: "bike",
      5: "mountainbike",
      6: "bike",
      7: "electricbike",
      8: "foot",
      9: "wander",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "motorbike"
    };
    _this.languageConstants = (0, _routingConstantI18n.getLanguage)(props.router.props.mapController.data);
    _this.profileLang = {
      "car": _this.languageConstants.CAR,
      "hgv": _this.languageConstants.TRUCK,
      "bike": _this.languageConstants.BIKE,
      "roadbike": _this.languageConstants.ROADBIKE,
      "mountainbike": _this.languageConstants.MOUNTAINBIKE,
      "electricbike": _this.languageConstants.ELECTRICBIKE,
      "foot": _this.languageConstants.WALK,
      "wander": _this.languageConstants.WANDER,
      "wheelchair": _this.languageConstants.WHEEL,
      "scooter": _this.languageConstants.SCOOT,
      "motorbike": _this.languageConstants.MOTORBIKE
    };
    _this.state = {
      showPopup: !!props.router.mapData.router_profiles_initial
    };
    return _this;
  }

  (0, _createClass2["default"])(RouterProfileSelection, [{
    key: "setProfile",
    value: function setProfile(profile) {
      this.props.router.setProfile(parseInt(profile.id, 10));

      if (!this.props.router.mapData.router_profiles_initial) {
        this.setState({
          showPopup: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.profiles.length === 1) {
        return _react["default"].createElement("div", {
          className: "c4g-router-profile-wrapper"
        }, _react["default"].createElement("button", {
          className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
          key: this.props.currentProfile,
          title: this.profileLang[this.profileTranslation[this.props.currentProfile]]
        }));
      } else {
        if (this.state.showPopup) {
          return _react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper c4g-popup"
          }, _react["default"].createElement("button", {
            className: "c4g-titlebar-close",
            onMouseUp: function onMouseUp() {
              return _this2.setState({
                showPopup: false
              });
            }
          }), this.props.profiles.map(function (item) {
            return _react["default"].createElement("button", {
              onMouseUp: function onMouseUp() {
                return _this2.setProfile(item);
              },
              className: "c4g-router-profile-" + _this2.profileTranslation[item.id] + (parseInt(item.id, 10) === _this2.props.currentProfile ? " c4g-active" : " c4g-inactive"),
              key: item.id,
              title: _this2.profileLang[_this2.profileTranslation[item.id]]
            });
          }));
        } else {
          return _react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper"
          }, _react["default"].createElement("button", {
            onMouseUp: function onMouseUp() {
              return _this2.setState({
                showPopup: true
              });
            },
            className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
            key: this.props.currentProfile,
            title: this.profileLang[this.profileTranslation[this.props.currentProfile]]
          }));
        }
      }
    }
  }, {
    key: "showProfileSelection",
    value: function showProfileSelection() {
      this.setState({
        showPopup: true
      });
    }
  }]);
  return RouterProfileSelection;
}(_react.Component);

exports.default = RouterProfileSelection;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4Il0sIm5hbWVzIjpbIlJvdXRlclByb2ZpbGVTZWxlY3Rpb24iLCJwcm9wcyIsInNldFByb2ZpbGUiLCJiaW5kIiwicHJvZmlsZVRyYW5zbGF0aW9uIiwibGFuZ3VhZ2VDb25zdGFudHMiLCJyb3V0ZXIiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInByb2ZpbGVMYW5nIiwiQ0FSIiwiVFJVQ0siLCJCSUtFIiwiUk9BREJJS0UiLCJNT1VOVEFJTkJJS0UiLCJFTEVDVFJJQ0JJS0UiLCJXQUxLIiwiV0FOREVSIiwiV0hFRUwiLCJTQ09PVCIsIk1PVE9SQklLRSIsInN0YXRlIiwic2hvd1BvcHVwIiwibWFwRGF0YSIsInJvdXRlcl9wcm9maWxlc19pbml0aWFsIiwicHJvZmlsZSIsInBhcnNlSW50IiwiaWQiLCJzZXRTdGF0ZSIsInByb2ZpbGVzIiwibGVuZ3RoIiwiY3VycmVudFByb2ZpbGUiLCJtYXAiLCJpdGVtIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxzQjs7Ozs7QUFFbkIsa0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsZ0RBQWxCO0FBRUEsVUFBS0Msa0JBQUwsR0FBMEI7QUFDeEIsU0FBRyxLQURxQjtBQUV4QixTQUFHLEtBRnFCO0FBR3hCLFNBQUcsTUFIcUI7QUFJeEIsU0FBRyxVQUpxQjtBQUt4QixTQUFHLE1BTHFCO0FBTXhCLFNBQUcsY0FOcUI7QUFPeEIsU0FBRyxNQVBxQjtBQVF4QixTQUFHLGNBUnFCO0FBU3hCLFNBQUcsTUFUcUI7QUFVeEIsU0FBRyxRQVZx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QUwsQ0FBVzhCLGNBQXJDLEdBQXNELGFBQXRELEdBQXNFLGVBQWxJLENBRG5CO0FBRVEsaUJBQUcsRUFBRUUsSUFBSSxDQUFDTixFQUZsQjtBQUVzQixtQkFBSyxFQUFFLE1BQUksQ0FBQ2xCLFdBQUwsQ0FBaUIsTUFBSSxDQUFDTCxrQkFBTCxDQUF3QjZCLElBQUksQ0FBQ04sRUFBN0IsQ0FBakI7QUFGN0IsY0FBUDtBQUdELFdBSkEsQ0FGSCxDQURGO0FBVUQsU0FYRCxNQVdPO0FBQ0wsaUJBQVE7QUFBSyxxQkFBUyxFQUFDO0FBQWYsYUFDTjtBQUFRLHFCQUFTLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDTix5QkFBUyxFQUFFO0FBQVosZUFBZCxDQUFOO0FBQUEsYUFBbkI7QUFBMkQscUJBQVMsRUFBRSx3QkFBd0IsS0FBS2xCLGtCQUFMLENBQXdCLEtBQUtILEtBQUwsQ0FBVzhCLGNBQW5DLENBQXhCLEdBQTZFLGFBQW5KO0FBQ1EsZUFBRyxFQUFFLEtBQUs5QixLQUFMLENBQVc4QixjQUR4QjtBQUN3QyxpQkFBSyxFQUFFLEtBQUt0QixXQUFMLENBQWlCLEtBQUtMLGtCQUFMLENBQXdCLEtBQUtILEtBQUwsQ0FBVzhCLGNBQW5DLENBQWpCO0FBRC9DLFlBRE0sQ0FBUjtBQUlEO0FBRUY7QUFDRjs7O1dBRUQsZ0NBQXVCO0FBQ3JCLFdBQUtILFFBQUwsQ0FBYztBQUFDTixpQkFBUyxFQUFFO0FBQVosT0FBZDtBQUNEOzs7RUFsRmlEWSxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbl9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2V0UHJvZmlsZSA9IHRoaXMuc2V0UHJvZmlsZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9maWxlVHJhbnNsYXRpb24gPSB7XG4gICAgICAwOiBcImNhclwiLFxuICAgICAgMTogXCJoZ3ZcIixcbiAgICAgIDI6IFwiYmlrZVwiLFxuICAgICAgMzogXCJyb2FkYmlrZVwiLFxuICAgICAgNDogXCJiaWtlXCIsXG4gICAgICA1OiBcIm1vdW50YWluYmlrZVwiLFxuICAgICAgNjogXCJiaWtlXCIsXG4gICAgICA3OiBcImVsZWN0cmljYmlrZVwiLFxuICAgICAgODogXCJmb290XCIsXG4gICAgICA5OiBcIndhbmRlclwiLFxuICAgICAgMTA6IFwid2hlZWxjaGFpclwiLFxuICAgICAgMTE6IFwiaGd2XCIsXG4gICAgICAxMjogXCJzY29vdGVyXCIsXG4gICAgICAxMzogXCJtb3RvcmJpa2VcIlxuICAgIH07XG5cbiAgICB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLnByb2ZpbGVMYW5nID0ge1xuICAgICAgXCJjYXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5DQVIsXG4gICAgICBcImhndlwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlRSVUNLLFxuICAgICAgXCJiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQklLRSxcbiAgICAgIFwicm9hZGJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST0FEQklLRSxcbiAgICAgIFwibW91bnRhaW5iaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9VTlRBSU5CSUtFLFxuICAgICAgXCJlbGVjdHJpY2Jpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5FTEVDVFJJQ0JJS0UsXG4gICAgICBcImZvb3RcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XQUxLLFxuICAgICAgXCJ3YW5kZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XQU5ERVIsXG4gICAgICBcIndoZWVsY2hhaXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XSEVFTCxcbiAgICAgIFwic2Nvb3RlclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlNDT09ULFxuICAgICAgXCJtb3RvcmJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5NT1RPUkJJS0VcbiAgICB9O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQb3B1cDogISFwcm9wcy5yb3V0ZXIubWFwRGF0YS5yb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbFxuICAgIH1cbiAgfVxuXG4gIHNldFByb2ZpbGUocHJvZmlsZSkge1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldFByb2ZpbGUocGFyc2VJbnQocHJvZmlsZS5pZCwgMTApKTtcbiAgICBpZiAoIXRoaXMucHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wcm9maWxlLVwiICsgdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV0gKyBcIiBjNGctYWN0aXZlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXV19Lz5cbiAgICAgIDwvZGl2Pik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXIgYzRnLXBvcHVwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSl9Lz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2ZpbGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0UHJvZmlsZShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdICsgKHBhcnNlSW50KGl0ZW0uaWQsIDEwKSA9PT0gdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZSA/IFwiIGM0Zy1hY3RpdmVcIiA6IFwiIGM0Zy1pbmFjdGl2ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvbltpdGVtLmlkXV19Lz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogdHJ1ZX0pfSBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wcm9maWxlLVwiICsgdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV0gKyBcIiBjNGctYWN0aXZlXCJ9XG4gICAgICAgICAgICAgICAgICBrZXk9e3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGV9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdXX0vPlxuICAgICAgICA8L2Rpdj4pO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgc2hvd1Byb2ZpbGVTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiB0cnVlfSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9