(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-profile-selection.jsx":
/*!****************************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-profile-selection.jsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "../RoutingBundle/Resources/public/js/routing-constant-i18n.js");

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

var RouterProfileSelection = function (_Component) {
  _inherits(RouterProfileSelection, _Component);

  function RouterProfileSelection(props) {
    _classCallCheck(this, RouterProfileSelection);

    var _this = _possibleConstructorReturn(this, (RouterProfileSelection.__proto__ || Object.getPrototypeOf(RouterProfileSelection)).call(this, props));

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

  _createClass(RouterProfileSelection, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vUm91dGluZ0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3giXSwibmFtZXMiOlsiUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsInByb3BzIiwic2V0UHJvZmlsZSIsImJpbmQiLCJwcm9maWxlVHJhbnNsYXRpb24iLCJsYW5ndWFnZUNvbnN0YW50cyIsInJvdXRlciIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwicHJvZmlsZUxhbmciLCJDQVIiLCJUUlVDSyIsIkJJS0UiLCJST0FEQklLRSIsIk1PVU5UQUlOQklLRSIsIkVMRUNUUklDQklLRSIsIldBTEsiLCJXQU5ERVIiLCJXSEVFTCIsIlNDT09UIiwiTU9UT1JCSUtFIiwic3RhdGUiLCJzaG93UG9wdXAiLCJtYXBEYXRhIiwicm91dGVyX3Byb2ZpbGVzX2luaXRpYWwiLCJwcm9maWxlIiwicGFyc2VJbnQiLCJpZCIsInNldFN0YXRlIiwicHJvZmlsZXMiLCJsZW5ndGgiLCJjdXJyZW50UHJvZmlsZSIsIm1hcCIsIml0ZW0iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOzs7O0FBQ0E7Ozs7Ozs7OytlQWRBOzs7Ozs7Ozs7Ozs7O0lBZ0JxQkEsc0I7OztBQUVuQixrQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdKQUNYQSxLQURXOztBQUdqQixVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCOztBQUVBLFVBQUtDLGtCQUFMLEdBQTBCO0FBQ3hCLFNBQUcsS0FEcUI7QUFFeEIsU0FBRyxLQUZxQjtBQUd4QixTQUFHLE1BSHFCO0FBSXhCLFNBQUcsVUFKcUI7QUFLeEIsU0FBRyxNQUxxQjtBQU14QixTQUFHLGNBTnFCO0FBT3hCLFNBQUcsTUFQcUI7QUFReEIsU0FBRyxjQVJxQjtBQVN4QixTQUFHLE1BVHFCO0FBVXhCLFNBQUcs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S0wsa0JBQUwsQ0FBd0I2QixLQUFLTixFQUE3QixDQUFqQixDQUY3QixHQUFQO0FBR0QsYUFKQTtBQUZILFdBREY7QUFVRCxTQVhELE1BV087QUFDTCxpQkFBUTtBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmO0FBQ04sc0RBQVEsV0FBVztBQUFBLHVCQUFNLE9BQUtDLFFBQUwsQ0FBYyxFQUFDTixXQUFXLElBQVosRUFBZCxDQUFOO0FBQUEsZUFBbkIsRUFBMkQsV0FBVyx3QkFBd0IsS0FBS2xCLGtCQUFMLENBQXdCLEtBQUtILEtBQUwsQ0FBVzhCLGNBQW5DLENBQXhCLEdBQTZFLGFBQW5KO0FBQ1EsbUJBQUssS0FBSzlCLEtBQUwsQ0FBVzhCLGNBRHhCLEVBQ3dDLE9BQU8sS0FBS3RCLFdBQUwsQ0FBaUIsS0FBS0wsa0JBQUwsQ0FBd0IsS0FBS0gsS0FBTCxDQUFXOEIsY0FBbkMsQ0FBakIsQ0FEL0M7QUFETSxXQUFSO0FBSUQ7QUFFRjtBQUNGOzs7MkNBRXNCO0FBQ3JCLFdBQUtILFFBQUwsQ0FBYyxFQUFDTixXQUFXLElBQVosRUFBZDtBQUNEOzs7O0VBbEZpRFksZ0I7O2tCQUEvQmxDLHNCIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2V0UHJvZmlsZSA9IHRoaXMuc2V0UHJvZmlsZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9maWxlVHJhbnNsYXRpb24gPSB7XG4gICAgICAwOiBcImNhclwiLFxuICAgICAgMTogXCJoZ3ZcIixcbiAgICAgIDI6IFwiYmlrZVwiLFxuICAgICAgMzogXCJyb2FkYmlrZVwiLFxuICAgICAgNDogXCJiaWtlXCIsXG4gICAgICA1OiBcIm1vdW50YWluYmlrZVwiLFxuICAgICAgNjogXCJiaWtlXCIsXG4gICAgICA3OiBcImVsZWN0cmljYmlrZVwiLFxuICAgICAgODogXCJmb290XCIsXG4gICAgICA5OiBcIndhbmRlclwiLFxuICAgICAgMTA6IFwid2hlZWxjaGFpclwiLFxuICAgICAgMTE6IFwiaGd2XCIsXG4gICAgICAxMjogXCJzY29vdGVyXCIsXG4gICAgICAxMzogXCJtb3RvcmJpa2VcIlxuICAgIH07XG5cbiAgICB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLnByb2ZpbGVMYW5nID0ge1xuICAgICAgXCJjYXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5DQVIsXG4gICAgICBcImhndlwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlRSVUNLLFxuICAgICAgXCJiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQklLRSxcbiAgICAgIFwicm9hZGJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST0FEQklLRSxcbiAgICAgIFwibW91bnRhaW5iaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9VTlRBSU5CSUtFLFxuICAgICAgXCJlbGVjdHJpY2Jpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5FTEVDVFJJQ0JJS0UsXG4gICAgICBcImZvb3RcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XQUxLLFxuICAgICAgXCJ3YW5kZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XQU5ERVIsXG4gICAgICBcIndoZWVsY2hhaXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XSEVFTCxcbiAgICAgIFwic2Nvb3RlclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlNDT09ULFxuICAgICAgXCJtb3RvcmJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5NT1RPUkJJS0VcbiAgICB9O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQb3B1cDogISFwcm9wcy5yb3V0ZXIubWFwRGF0YS5yb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbFxuICAgIH1cbiAgfVxuXG4gIHNldFByb2ZpbGUocHJvZmlsZSkge1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldFByb2ZpbGUocGFyc2VJbnQocHJvZmlsZS5pZCwgMTApKTtcbiAgICBpZiAoIXRoaXMucHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wcm9maWxlLVwiICsgdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV0gKyBcIiBjNGctYWN0aXZlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXV19Lz5cbiAgICAgIDwvZGl2Pik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXIgYzRnLXBvcHVwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSl9Lz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2ZpbGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0UHJvZmlsZShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdICsgKHBhcnNlSW50KGl0ZW0uaWQsIDEwKSA9PT0gdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZSA/IFwiIGM0Zy1hY3RpdmVcIiA6IFwiIGM0Zy1pbmFjdGl2ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvbltpdGVtLmlkXV19Lz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogdHJ1ZX0pfSBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wcm9maWxlLVwiICsgdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV0gKyBcIiBjNGctYWN0aXZlXCJ9XG4gICAgICAgICAgICAgICAgICBrZXk9e3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGV9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdXX0vPlxuICAgICAgICA8L2Rpdj4pO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgc2hvd1Byb2ZpbGVTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiB0cnVlfSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9