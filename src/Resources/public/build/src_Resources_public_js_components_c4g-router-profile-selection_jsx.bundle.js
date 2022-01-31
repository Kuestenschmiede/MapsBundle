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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkE7Ozs7O0FBRW5CLGtDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLGdEQUFsQjtBQUVBLFVBQUtDLGtCQUFMLEdBQTBCO0FBQ3hCLFNBQUcsS0FEcUI7QUFFeEIsU0FBRyxLQUZxQjtBQUd4QixTQUFHLE1BSHFCO0FBSXhCLFNBQUcsVUFKcUI7QUFLeEIsU0FBRyxNQUxxQjtBQU14QixTQUFHLGNBTnFCO0FBT3hCLFNBQUcsTUFQcUI7QUFReEIsU0FBRyxjQVJxQjtBQVN4QixTQUFHLE1BVHFCO0FBVXhCLFNBQUcsUUFWcUI7QUFXeEIsVUFBSSxZQVhvQjtBQVl4QixVQUFJLEtBWm9CO0FBYXhCLFVBQUksU0Fib0I7QUFjeEIsVUFBSTtBQWRvQixLQUExQjtBQWlCQSxVQUFLQyxpQkFBTCxHQUF5QixzQ0FBWUosS0FBSyxDQUFDSyxNQUFOLENBQWFMLEtBQWIsQ0FBbUJNLGFBQW5CLENBQWlDQyxJQUE3QyxDQUF6QjtBQUVBLFVBQUtDLFdBQUwsR0FBbUI7QUFDakIsYUFBTyxNQUFLSixpQkFBTCxDQUF1QkssR0FEYjtBQUVqQixhQUFPLE1BQUtMLGlCQUFMLENBQXVCTSxLQUZiO0FBR2pCLGNBQVEsTUFBS04saUJBQUwsQ0FBdUJPLElBSGQ7QUFJakIsa0JBQVksTUFBS1AsaUJBQUwsQ0FBdUJRLFFBSmxCO0FBS2pCLHNCQUFnQixNQUFLUixpQkFBTCxDQUF1QlMsWUFMdEI7QUFNakIsc0JBQWdCLE1BQUtULGlCQUFMLENBQXVCVSxZQU50QjtBQU9qQixjQUFRLE1BQUtWLGlCQUFM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a0JBQUwsQ0FBd0IsS0FBS0gsS0FBTCxDQUFXOEIsY0FBbkMsQ0FBeEIsR0FBNkUsYUFBbko7QUFDUSxlQUFHLEVBQUUsS0FBSzlCLEtBQUwsQ0FBVzhCLGNBRHhCO0FBQ3dDLGlCQUFLLEVBQUUsS0FBS3RCLFdBQUwsQ0FBaUIsS0FBS0wsa0JBQUwsQ0FBd0IsS0FBS0gsS0FBTCxDQUFXOEIsY0FBbkMsQ0FBakI7QUFEL0MsWUFETSxDQUFSO0FBSUQ7QUFFRjtBQUNGOzs7V0FFRCxnQ0FBdUI7QUFDckIsV0FBS0gsUUFBTCxDQUFjO0FBQUNOLFFBQUFBLFNBQVMsRUFBRTtBQUFaLE9BQWQ7QUFDRDs7O0VBbEZpRFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vcm91dGluZy1jb25zdGFudC1pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlclByb2ZpbGVTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXRQcm9maWxlID0gdGhpcy5zZXRQcm9maWxlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvbiA9IHtcbiAgICAgIDA6IFwiY2FyXCIsXG4gICAgICAxOiBcImhndlwiLFxuICAgICAgMjogXCJiaWtlXCIsXG4gICAgICAzOiBcInJvYWRiaWtlXCIsXG4gICAgICA0OiBcImJpa2VcIixcbiAgICAgIDU6IFwibW91bnRhaW5iaWtlXCIsXG4gICAgICA2OiBcImJpa2VcIixcbiAgICAgIDc6IFwiZWxlY3RyaWNiaWtlXCIsXG4gICAgICA4OiBcImZvb3RcIixcbiAgICAgIDk6IFwid2FuZGVyXCIsXG4gICAgICAxMDogXCJ3aGVlbGNoYWlyXCIsXG4gICAgICAxMTogXCJoZ3ZcIixcbiAgICAgIDEyOiBcInNjb290ZXJcIixcbiAgICAgIDEzOiBcIm1vdG9yYmlrZVwiXG4gICAgfTtcblxuICAgIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMucHJvZmlsZUxhbmcgPSB7XG4gICAgICBcImNhclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkNBUixcbiAgICAgIFwiaGd2XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuVFJVQ0ssXG4gICAgICBcImJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5CSUtFLFxuICAgICAgXCJyb2FkYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPQURCSUtFLFxuICAgICAgXCJtb3VudGFpbmJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5NT1VOVEFJTkJJS0UsXG4gICAgICBcImVsZWN0cmljYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkVMRUNUUklDQklLRSxcbiAgICAgIFwiZm9vdFwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldBTEssXG4gICAgICBcIndhbmRlclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldBTkRFUixcbiAgICAgIFwid2hlZWxjaGFpclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldIRUVMLFxuICAgICAgXCJzY29vdGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuU0NPT1QsXG4gICAgICBcIm1vdG9yYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVE9SQklLRVxuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1BvcHVwOiAhIXByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsXG4gICAgfVxuICB9XG5cbiAgc2V0UHJvZmlsZShwcm9maWxlKSB7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0UHJvZmlsZShwYXJzZUludChwcm9maWxlLmlkLCAxMCkpO1xuICAgIGlmICghdGhpcy5wcm9wcy5yb3V0ZXIubWFwRGF0YS5yb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGV9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdXX0vPlxuICAgICAgPC9kaXY+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd1BvcHVwKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlciBjNGctcG9wdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogZmFsc2V9KX0vPlxuICAgICAgICAgICAge3RoaXMucHJvcHMucHJvZmlsZXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRQcm9maWxlKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wcm9maWxlLVwiICsgdGhpcy5wcm9maWxlVHJhbnNsYXRpb25baXRlbS5pZF0gKyAocGFyc2VJbnQoaXRlbS5pZCwgMTApID09PSBwYXJzZUludCh0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlLCAxMCkgPyBcIiBjNGctYWN0aXZlXCIgOiBcIiBjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25baXRlbS5pZF1dfS8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlclwiPlxuICAgICAgICAgIDxidXR0b24gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KX0gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdICsgXCIgYzRnLWFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXV19Lz5cbiAgICAgICAgPC9kaXY+KTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHNob3dQcm9maWxlU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogdHJ1ZX0pO1xuICB9XG59Il0sIm5hbWVzIjpbIlJvdXRlclByb2ZpbGVTZWxlY3Rpb24iLCJwcm9wcyIsInNldFByb2ZpbGUiLCJiaW5kIiwicHJvZmlsZVRyYW5zbGF0aW9uIiwibGFuZ3VhZ2VDb25zdGFudHMiLCJyb3V0ZXIiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInByb2ZpbGVMYW5nIiwiQ0FSIiwiVFJVQ0siLCJCSUtFIiwiUk9BREJJS0UiLCJNT1VOVEFJTkJJS0UiLCJFTEVDVFJJQ0JJS0UiLCJXQUxLIiwiV0FOREVSIiwiV0hFRUwiLCJTQ09PVCIsIk1PVE9SQklLRSIsInN0YXRlIiwic2hvd1BvcHVwIiwibWFwRGF0YSIsInJvdXRlcl9wcm9maWxlc19pbml0aWFsIiwicHJvZmlsZSIsInBhcnNlSW50IiwiaWQiLCJzZXRTdGF0ZSIsInByb2ZpbGVzIiwibGVuZ3RoIiwiY3VycmVudFByb2ZpbGUiLCJtYXAiLCJpdGVtIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==