"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-router-profile-selection_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-router-profile-selection.jsx":
/*!*****************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-profile-selection.jsx ***!
  \*****************************************************************************/
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

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./src/Resources/public/js/routing-constant-i18n.js");

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
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-profile-wrapper"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
          key: this.props.currentProfile,
          title: this.profileLang[this.profileTranslation[this.props.currentProfile]]
        }));
      } else {
        if (this.state.showPopup) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper c4g-popup"
          }, /*#__PURE__*/_react["default"].createElement("button", {
            className: "c4g-titlebar-close",
            onMouseUp: function onMouseUp() {
              return _this2.setState({
                showPopup: false
              });
            }
          }), this.props.profiles.map(function (item) {
            return /*#__PURE__*/_react["default"].createElement("button", {
              onMouseUp: function onMouseUp() {
                return _this2.setProfile(item);
              },
              className: "c4g-router-profile-" + _this2.profileTranslation[item.id] + (parseInt(item.id, 10) === parseInt(_this2.props.currentProfile, 10) ? " c4g-active" : " c4g-inactive"),
              key: item.id,
              title: _this2.profileLang[_this2.profileTranslation[item.id]]
            });
          }));
        } else {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper"
          }, /*#__PURE__*/_react["default"].createElement("button", {
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

exports["default"] = RouterProfileSelection;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkE7Ozs7O0VBRW5CLGdDQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7SUFDakIsMEJBQU1BLEtBQU47SUFFQSxNQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLGdEQUFsQjtJQUVBLE1BQUtDLGtCQUFMLEdBQTBCO01BQ3hCLEdBQUcsS0FEcUI7TUFFeEIsR0FBRyxLQUZxQjtNQUd4QixHQUFHLE1BSHFCO01BSXhCLEdBQUcsVUFKcUI7TUFLeEIsR0FBRyxNQUxxQjtNQU14QixHQUFHLGNBTnFCO01BT3hCLEdBQUcsTUFQcUI7TUFReEIsR0FBRyxjQVJxQjtNQVN4QixHQUFHLE1BVHFCO01BVXhCLEdBQUcsUUFWcUI7TUFXeEIsSUFBSSxZQVhvQjtNQVl4QixJQUFJLEtBWm9CO01BYXhCLElBQUksU0Fib0I7TUFjeEIsSUFBSTtJQWRvQixDQUExQjtJQWlCQSxNQUFLQyxpQkFBTCxHQUF5QixJQUFBQyxnQ0FBQSxFQUFZTCxLQUFLLENBQUNNLE1BQU4sQ0FBYU4sS0FBYixDQUFtQk8sYUFBbkIsQ0FBaUNDLElBQTdDLENBQXpCO0lBRUEsTUFBS0MsV0FBTCxHQUFtQjtNQUNqQixPQUFPLE1BQUtMLGlCQUFMLENBQXVCTSxHQURiO01BRWpCLE9BQU8sTUFBS04saUJBQUwsQ0FBdUJPLEtBRmI7TUFHakIsUUFBUSxNQUFLUCxpQkFBTCxDQUF1QlEsSUFIZDtNQUlqQixZQUFZLE1BQUtSLGlCQUFMLENBQXVCUyxRQUpsQjtNQUtqQixnQkFBZ0IsTUFBS1QsaUJBQUwsQ0FBdUJVLFlBTHRCO01BTWpCLGdCQUFnQixNQUFLVixpQkFBTCxDQUF1QlcsWUFOdEI7TUFPakIsUUFBUSxN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QUFuQyxDQUF4QixHQUE2RSxhQUFuSjtZQUNRLEdBQUcsRUFBRSxLQUFLL0IsS0FBTCxDQUFXK0IsY0FEeEI7WUFDd0MsS0FBSyxFQUFFLEtBQUt0QixXQUFMLENBQWlCLEtBQUtOLGtCQUFMLENBQXdCLEtBQUtILEtBQUwsQ0FBVytCLGNBQW5DLENBQWpCO1VBRC9DLEVBRE0sQ0FBUjtRQUlEO01BRUY7SUFDRjs7O1dBRUQsZ0NBQXVCO01BQ3JCLEtBQUtILFFBQUwsQ0FBYztRQUFDTixTQUFTLEVBQUU7TUFBWixDQUFkO0lBQ0Q7OztFQWxGaURZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2V0UHJvZmlsZSA9IHRoaXMuc2V0UHJvZmlsZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9maWxlVHJhbnNsYXRpb24gPSB7XG4gICAgICAwOiBcImNhclwiLFxuICAgICAgMTogXCJoZ3ZcIixcbiAgICAgIDI6IFwiYmlrZVwiLFxuICAgICAgMzogXCJyb2FkYmlrZVwiLFxuICAgICAgNDogXCJiaWtlXCIsXG4gICAgICA1OiBcIm1vdW50YWluYmlrZVwiLFxuICAgICAgNjogXCJiaWtlXCIsXG4gICAgICA3OiBcImVsZWN0cmljYmlrZVwiLFxuICAgICAgODogXCJmb290XCIsXG4gICAgICA5OiBcIndhbmRlclwiLFxuICAgICAgMTA6IFwid2hlZWxjaGFpclwiLFxuICAgICAgMTE6IFwiaGd2XCIsXG4gICAgICAxMjogXCJzY29vdGVyXCIsXG4gICAgICAxMzogXCJtb3RvcmJpa2VcIlxuICAgIH07XG5cbiAgICB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLnByb2ZpbGVMYW5nID0ge1xuICAgICAgXCJjYXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5DQVIsXG4gICAgICBcImhndlwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlRSVUNLLFxuICAgICAgXCJiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQklLRSxcbiAgICAgIFwicm9hZGJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST0FEQklLRSxcbiAgICAgIFwibW91bnRhaW5iaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9VTlRBSU5CSUtFLFxuICAgICAgXCJlbGVjdHJpY2Jpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5FTEVDVFJJQ0JJS0UsXG4gICAgICBcImZvb3RcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XQUxLLFxuICAgICAgXCJ3YW5kZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XQU5ERVIsXG4gICAgICBcIndoZWVsY2hhaXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XSEVFTCxcbiAgICAgIFwic2Nvb3RlclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlNDT09ULFxuICAgICAgXCJtb3RvcmJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5NT1RPUkJJS0VcbiAgICB9O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQb3B1cDogISFwcm9wcy5yb3V0ZXIubWFwRGF0YS5yb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbFxuICAgIH1cbiAgfVxuXG4gIHNldFByb2ZpbGUocHJvZmlsZSkge1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldFByb2ZpbGUocGFyc2VJbnQocHJvZmlsZS5pZCwgMTApKTtcbiAgICBpZiAoIXRoaXMucHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wcm9maWxlLVwiICsgdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV0gKyBcIiBjNGctYWN0aXZlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXV19Lz5cbiAgICAgIDwvZGl2Pik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXIgYzRnLXBvcHVwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSl9Lz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2ZpbGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0UHJvZmlsZShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdICsgKHBhcnNlSW50KGl0ZW0uaWQsIDEwKSA9PT0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZSwgMTApID8gXCIgYzRnLWFjdGl2ZVwiIDogXCIgYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdXX0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiB0cnVlfSl9IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBzaG93UHJvZmlsZVNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIiwicHJvcHMiLCJzZXRQcm9maWxlIiwiYmluZCIsInByb2ZpbGVUcmFuc2xhdGlvbiIsImxhbmd1YWdlQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJyb3V0ZXIiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInByb2ZpbGVMYW5nIiwiQ0FSIiwiVFJVQ0siLCJCSUtFIiwiUk9BREJJS0UiLCJNT1VOVEFJTkJJS0UiLCJFTEVDVFJJQ0JJS0UiLCJXQUxLIiwiV0FOREVSIiwiV0hFRUwiLCJTQ09PVCIsIk1PVE9SQklLRSIsInN0YXRlIiwic2hvd1BvcHVwIiwibWFwRGF0YSIsInJvdXRlcl9wcm9maWxlc19pbml0aWFsIiwicHJvZmlsZSIsInBhcnNlSW50IiwiaWQiLCJzZXRTdGF0ZSIsInByb2ZpbGVzIiwibGVuZ3RoIiwiY3VycmVudFByb2ZpbGUiLCJtYXAiLCJpdGVtIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==