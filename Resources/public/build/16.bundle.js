(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./Resources/public/js/components/c4g-router-profile-selection.jsx":
/*!*************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-profile-selection.jsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./Resources/public/js/routing-constant-i18n.js");

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

var RouterProfileSelection = function (_Component) {
  (0, _inherits3.default)(RouterProfileSelection, _Component);

  function RouterProfileSelection(props) {
    (0, _classCallCheck3.default)(this, RouterProfileSelection);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RouterProfileSelection.__proto__ || (0, _getPrototypeOf2.default)(RouterProfileSelection)).call(this, props));

    _this.setProfile = _this.setProfile.bind(_this);

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

  (0, _createClass3.default)(RouterProfileSelection, [{
    key: "setProfile",
    value: function setProfile(profile) {
      this.props.router.setProfile(parseInt(profile.id, 10));
      if (!this.props.router.mapData.router_profiles_initial) {
        this.setState({ showPopup: false });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.profiles.length === 1) {
        return _react2.default.createElement(
          "div",
          { className: "c4g-router-profile-wrapper" },
          _react2.default.createElement("button", { className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
            key: this.props.currentProfile, title: this.profileLang[this.profileTranslation[this.props.currentProfile]] })
        );
      } else {
        if (this.state.showPopup) {
          return _react2.default.createElement(
            "div",
            { className: "c4g-router-profile-wrapper c4g-popup" },
            _react2.default.createElement("button", { className: "c4g-titlebar-close", onMouseUp: function onMouseUp() {
                return _this2.setState({ showPopup: false });
              } }),
            this.props.profiles.map(function (item) {
              return _react2.default.createElement("button", { onMouseUp: function onMouseUp() {
                  return _this2.setProfile(item);
                },
                className: "c4g-router-profile-" + _this2.profileTranslation[item.id] + (parseInt(item.id, 10) === _this2.props.currentProfile ? " c4g-active" : " c4g-inactive"),
                key: item.id, title: _this2.profileLang[_this2.profileTranslation[item.id]] });
            })
          );
        } else {
          return _react2.default.createElement(
            "div",
            { className: "c4g-router-profile-wrapper" },
            _react2.default.createElement("button", { onMouseUp: function onMouseUp() {
                return _this2.setState({ showPopup: true });
              }, className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
              key: this.props.currentProfile, title: this.profileLang[this.profileTranslation[this.props.currentProfile]] })
          );
        }
      }
    }
  }, {
    key: "showProfileSelection",
    value: function showProfileSelection() {
      this.setState({ showPopup: true });
    }
  }]);
  return RouterProfileSelection;
}(_react.Component);

exports.default = RouterProfileSelection;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3giXSwibmFtZXMiOlsiUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsInByb3BzIiwic2V0UHJvZmlsZSIsImJpbmQiLCJwcm9maWxlVHJhbnNsYXRpb24iLCJsYW5ndWFnZUNvbnN0YW50cyIsInJvdXRlciIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwicHJvZmlsZUxhbmciLCJDQVIiLCJUUlVDSyIsIkJJS0UiLCJST0FEQklLRSIsIk1PVU5UQUlOQklLRSIsIkVMRUNUUklDQklLRSIsIldBTEsiLCJXQU5ERVIiLCJXSEVFTCIsIlNDT09UIiwiTU9UT1JCSUtFIiwic3RhdGUiLCJzaG93UG9wdXAiLCJtYXBEYXRhIiwicm91dGVyX3Byb2ZpbGVzX2luaXRpYWwiLCJwcm9maWxlIiwicGFyc2VJbnQiLCJpZCIsInNldFN0YXRlIiwicHJvZmlsZXMiLCJsZW5ndGgiLCJjdXJyZW50UHJvZmlsZSIsIm1hcCIsIml0ZW0iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOzs7O0FBQ0E7Ozs7QUFkQTs7Ozs7Ozs7Ozs7OztJQWdCcUJBLHNCOzs7QUFFbkIsa0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzS0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjs7QUFFQSxVQUFLQyxrQkFBTCxHQUEwQjtBQUN4QixTQUFHLEtBRHFCO0FBRXhCLFNBQUcsS0FGcUI7QUFHeEIsU0FBRyxNQUhxQjtBQUl4QixTQUFHLFVBSnFCO0FBS3hCLFNBQUcsTUFMcUI7QUFNeEIsU0FBRyxjQU5xQjtBQU94QixTQUFHLE1BUHFCO0FBUXhCLFNBQUcsY0FScUI7QUFTeEIsU0FBRyxNQVRxQjtBQVV4QixTQUFHLFFB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LGtCQUFMLENBQXdCNkIsS0FBS04sRUFBN0IsQ0FBakIsQ0FGN0IsR0FBUDtBQUdELGFBSkE7QUFGSCxXQURGO0FBVUQsU0FYRCxNQVdPO0FBQ0wsaUJBQVE7QUFBQTtBQUFBLGNBQUssV0FBVSw0QkFBZjtBQUNOLHNEQUFRLFdBQVc7QUFBQSx1QkFBTSxPQUFLQyxRQUFMLENBQWMsRUFBQ04sV0FBVyxJQUFaLEVBQWQsQ0FBTjtBQUFBLGVBQW5CLEVBQTJELFdBQVcsd0JBQXdCLEtBQUtsQixrQkFBTCxDQUF3QixLQUFLSCxLQUFMLENBQVc4QixjQUFuQyxDQUF4QixHQUE2RSxhQUFuSjtBQUNRLG1CQUFLLEtBQUs5QixLQUFMLENBQVc4QixjQUR4QixFQUN3QyxPQUFPLEtBQUt0QixXQUFMLENBQWlCLEtBQUtMLGtCQUFMLENBQXdCLEtBQUtILEtBQUwsQ0FBVzhCLGNBQW5DLENBQWpCLENBRC9DO0FBRE0sV0FBUjtBQUlEO0FBRUY7QUFDRjs7OzJDQUVzQjtBQUNyQixXQUFLSCxRQUFMLENBQWMsRUFBQ04sV0FBVyxJQUFaLEVBQWQ7QUFDRDs7O0VBbEZpRFksZ0I7O2tCQUEvQmxDLHNCIiwiZmlsZSI6IjE2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb2ZpbGUgPSB0aGlzLnNldFByb2ZpbGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uID0ge1xuICAgICAgMDogXCJjYXJcIixcbiAgICAgIDE6IFwiaGd2XCIsXG4gICAgICAyOiBcImJpa2VcIixcbiAgICAgIDM6IFwicm9hZGJpa2VcIixcbiAgICAgIDQ6IFwiYmlrZVwiLFxuICAgICAgNTogXCJtb3VudGFpbmJpa2VcIixcbiAgICAgIDY6IFwiYmlrZVwiLFxuICAgICAgNzogXCJlbGVjdHJpY2Jpa2VcIixcbiAgICAgIDg6IFwiZm9vdFwiLFxuICAgICAgOTogXCJ3YW5kZXJcIixcbiAgICAgIDEwOiBcIndoZWVsY2hhaXJcIixcbiAgICAgIDExOiBcImhndlwiLFxuICAgICAgMTI6IFwic2Nvb3RlclwiLFxuICAgICAgMTM6IFwibW90b3JiaWtlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5wcm9maWxlTGFuZyA9IHtcbiAgICAgIFwiY2FyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQ0FSLFxuICAgICAgXCJoZ3ZcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5UUlVDSyxcbiAgICAgIFwiYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkJJS0UsXG4gICAgICBcInJvYWRiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9BREJJS0UsXG4gICAgICBcIm1vdW50YWluYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVU5UQUlOQklLRSxcbiAgICAgIFwiZWxlY3RyaWNiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuRUxFQ1RSSUNCSUtFLFxuICAgICAgXCJmb290XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FMSyxcbiAgICAgIFwid2FuZGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FOREVSLFxuICAgICAgXCJ3aGVlbGNoYWlyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0hFRUwsXG4gICAgICBcInNjb290ZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5TQ09PVCxcbiAgICAgIFwibW90b3JiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9UT1JCSUtFXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UG9wdXA6ICEhcHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWxcbiAgICB9XG4gIH1cblxuICBzZXRQcm9maWxlKHByb2ZpbGUpIHtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRQcm9maWxlKHBhcnNlSW50KHByb2ZpbGUuaWQsIDEwKSk7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdICsgXCIgYzRnLWFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICA8L2Rpdj4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93UG9wdXApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyIGM0Zy1wb3B1cFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiBmYWxzZX0pfS8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5wcm9maWxlcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFByb2ZpbGUoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvbltpdGVtLmlkXSArIChwYXJzZUludChpdGVtLmlkLCAxMCkgPT09IHRoaXMucHJvcHMuY3VycmVudFByb2ZpbGUgPyBcIiBjNGctYWN0aXZlXCIgOiBcIiBjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25baXRlbS5pZF1dfS8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlclwiPlxuICAgICAgICAgIDxidXR0b24gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KX0gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdICsgXCIgYzRnLWFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXV19Lz5cbiAgICAgICAgPC9kaXY+KTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHNob3dQcm9maWxlU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogdHJ1ZX0pO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==