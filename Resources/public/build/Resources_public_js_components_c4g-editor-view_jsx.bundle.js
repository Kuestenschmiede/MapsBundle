(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-editor-view_jsx"],{

/***/ "./Resources/public/js/components/c4g-editor-view.jsx":
/*!************************************************************!*\
  !*** ./Resources/public/js/components/c4g-editor-view.jsx ***!
  \************************************************************/
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

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _format = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _c4gStarboardStyle = __webpack_require__(/*! ./c4g-starboard-style.jsx */ "./Resources/public/js/components/c4g-starboard-style.jsx");

var _c4gPopupController = __webpack_require__(/*! ./../c4g-popup-controller */ "./Resources/public/js/c4g-popup-controller.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var EditorView = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(EditorView, _Component);

  var _super = _createSuper(EditorView);

  function EditorView(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, EditorView);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this);
    _this.state = {
      freehand: false,
      selectedFeature: false,
      features: "[]",
      activeElement: props.elements[0] ? props.elements[0].id : 0,
      activeStyle: props.elements[0] ? props.elements[0].styleId : 0,
      selectMode: "modify"
    };
    _this.interaction = null;
    _this.changeJSON = _this.changeJSON.bind((0, _assertThisInitialized2["default"])(_this));
    _this.resetInteraction = _this.resetInteraction.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(EditorView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.mode !== "select" && this.props.active) {
        this.resetInteraction();
        var geometry;

        switch (this.props.mode) {
          case "Point":
            geometry = new _geom.Point(0, 0);
            break;

          case "LineString":
            geometry = new _geom.LineString([[0, 0], [1, 1]]);
            break;

          case "Polygon":
            geometry = new _geom.Polygon([[0, 0], [1, 1]]);
        }

        var feature = new _ol.Feature(geometry);
        feature.set('locstyle', this.state.activeStyle);
        this.interaction = new _interaction.Draw({
          // features: this.props.features,
          source: this.props.editorLayer.getSource(),
          type: this.props.mode,
          stopclick: false,
          snapTolerance: 0,
          style: this.props.styleFunction(feature),
          freehand: this.state.freehand
        });
        this.interaction.on('drawend', function (event) {
          event.feature.set('editorId', _this2.props.editorId);
          event.feature.set('locstyle', _this2.state.activeStyle);
          event.feature.set('elementId', _this2.state.activeElement);
          var geojson;

          if (_this2.props.mode === "Circle") {
            //turn Circle into valid GeoJSON
            var _geometry = event.feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326");

            var center = _geometry.getCenter();

            var radius = event.feature.getGeometry().getRadius();
            geojson = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: center
              },
              properties: {
                editorId: _this2.props.editorId,
                elementId: _this2.state.activeElement,
                locstyle: _this2.state.activeStyle,
                radius: radius
              }
            };
          } else {
            geojson = new _format.GeoJSON().writeFeatureObject(event.feature, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            });
          }

          _this2.props.addFeature(geojson);

          _this2.props.countEditorId();
        });
        this.props.mapController.map.addInteraction(this.interaction);
      } else {
        this.resetInteraction();

        if (this.state.selectMode === "remove") {
          this.interaction = new _interaction.Select({
            layers: [this.props.editorLayer],
            hitTolerance: 20
          });
          this.interaction.on('select', function (e) {
            var feature = e.target.getFeatures().getArray()[0];
            var geojson = new _format.GeoJSON().writeFeatureObject(feature, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            });

            _this2.props.removeFeature(geojson);

            var source = _this2.props.editorLayer.getSource();

            source.removeFeature(feature);
          });
          this.props.mapController.map.addInteraction(this.interaction);
        } else {
          this.interaction = [];
          this.interaction.push(new _interaction.Select({
            layers: [this.props.editorLayer],
            hitTolerance: 20
          }));
          this.interaction.push(new _interaction.Modify({
            features: this.interaction[0].getFeatures(),
            pixelTolerance: 20
          }));
          this.interaction[0].on('select', function (e) {
            var feature = e.selected[0];

            _this2.setState({
              selectedFeature: feature
            });
          });
          this.interaction[1].on('modifyend', function (e) {
            var feature = e.features.getArray()[0];
            var geojson = new _format.GeoJSON().writeFeatureObject(feature, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            });

            _this2.props.modifyFeature(geojson);
          });
          this.props.mapController.map.addInteraction(this.interaction[0]);
          this.props.mapController.map.addInteraction(this.interaction[1]);
        }
      }

      var elements = null;

      if (this.props.elements && this.props.elements.length > 1) {
        elements = this.props.elements.map(function (element) {
          var color, styleTriggerLabel;
          var locstyle = _this2.props.styleData.arrLocStyles[element.styleId];
          var styleData = locstyle.locStyleArr;
          var styleType = styleData ? styleData.styletype : "default";

          if (styleData && (styleType === "cust_icon" || styleType === "cust_icon_svg" || styleType === "photo")) {
            styleTriggerLabel = /*#__PURE__*/_react["default"].createElement(_c4gStarboardStyle.C4gStarboardStyle, {
              tooltip: element.name,
              styleData: _this2.props.styleData,
              styleId: element.styleId
            });
          } else {
            var stylor = locstyle.style && locstyle.style(new _ol.Feature({
              geometry: new _geom.Point(0, 0)
            }), "EPSG:4326") ? locstyle.style(new _ol.Feature({
              geometry: new _geom.Point(0, 0)
            }), "EPSG:4326") : null;
            var featureStyle = Array.isArray(stylor) ? stylor[0] : stylor;

            if (featureStyle && featureStyle.getFill() && featureStyle.getStroke()) {
              color = featureStyle.getFill().getColor();
            } else if (styleData && styleData.fillcolor && styleData.strokecolor) {
              color = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.fillcolor[0], styleData.fillcolor[1]);
            }

            styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
              className: "c4g-editor-locstyle",
              style: {
                "backgroundColor": color
              }
            });
          }

          return /*#__PURE__*/_react["default"].createElement("button", {
            key: element.id,
            style: {
              height: "32px",
              width: "32px"
            },
            onMouseUp: function onMouseUp() {
              _this2.setState({
                activeElement: element.id,
                activeStyle: element.styleId
              });
            }
          }, styleTriggerLabel);
        });
      }

      var customButton = null;

      if ("LineStringPolygon".includes(this.props.mode)) {
        var freehandClass = "c4g-editor-view ";
        freehandClass += this.state.freehand ? "c4g-active" : "c4g-inactive";
        customButton = /*#__PURE__*/_react["default"].createElement("a", {
          className: freehandClass,
          title: this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND,
          onMouseUp: function onMouseUp() {
            _this2.changeFreehand();
          }
        }, this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND);
      } else if (this.props.mode === "select") {
        customButton = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-editor-mode-switcher"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          title: this.props.lang.EDITOR_FEATURE_MODIFY,
          className: "c4g-editor-feature-modify " + (this.state.selectMode === "modify" ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            _this2.changeSelectMode("modify");
          }
        }), /*#__PURE__*/_react["default"].createElement("button", {
          title: this.props.lang.EDITOR_FEATURE_DELETE,
          className: "c4g-editor-feature-delete " + (this.state.selectMode === "remove" ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            _this2.changeSelectMode("remove");
          }
        }));
      }

      var arrFormEditorVars = [];

      if (this.state.selectedFeature) {
        for (var i in this.props.editorVars) {
          if (this.props.editorVars.hasOwnProperty(i)) {
            var editorVar = this.props.editorVars[i];
            var value = this.state.selectedFeature.get(editorVar.key) ? this.state.selectedFeature.get(editorVar.key) : "";
            arrFormEditorVars.push( /*#__PURE__*/_react["default"].createElement("form", {
              className: "c4g-editor-vars-input"
            }, /*#__PURE__*/_react["default"].createElement("label", null, editorVar.caption, ":", /*#__PURE__*/_react["default"].createElement("input", {
              type: "text",
              value: value,
              name: editorVar.key,
              onChange: function onChange(event) {
                _this2.handleVarChange(event);
              }
            }))));
          }
        }
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, customButton, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-element-selection"
      }, elements)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-vars"
      }, arrFormEditorVars));
    }
  }, {
    key: "resetInteraction",
    value: function resetInteraction() {
      if (this.interaction) {
        //only one drawinteraction at a time
        if (Array.isArray(this.interaction)) {
          this.props.mapController.map.removeInteraction(this.interaction[0]);
          this.props.mapController.map.removeInteraction(this.interaction[1]);
        } else {
          this.props.mapController.map.removeInteraction(this.interaction);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;

      if (this.props.elements[0] && prevProps.mode !== this.props.mode) {
        if (this.state.activeElement === 0) {
          this.setState({
            activeElement: this.props.elements[0].id,
            activeStyle: this.props.elements[0].styleId
          }); //  this.state.activeElement = this.props.elements[0].id
          //  this.state.activeStyle = this.props.elements[0].styleId
        } else if (!this.props.elements.find(function (element) {
          return element.id === _this3.state.activeElement;
        })) {
          this.setState({
            activeElement: this.props.elements[0].id,
            activeStyle: this.props.elements[0].styleId
          }); // this.state.activeElement = this.props.elements[0].id
          // this.state.activeStyle = this.props.elements[0].styleId
        }
      }
    }
  }, {
    key: "changeSelectMode",
    value: function changeSelectMode(string) {
      this.setState({
        selectMode: string
      });
    }
  }, {
    key: "handleVarChange",
    value: function handleVarChange(event) {
      var value = event.target.value;
      var name = event.target.name;
      this.state.selectedFeature.set(name, value);
      var geojson = new _format.GeoJSON().writeFeatureObject(this.state.selectedFeature, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
      });
      this.props.modifyFeature(geojson);
      this.setState({
        "selectedFeature": this.state.selectedFeature
      });
    }
  }, {
    key: "changeFreehand",
    value: function changeFreehand() {
      this.setState({
        freehand: !this.state.freehand
      });
    }
  }, {
    key: "changeJSON",
    value: function changeJSON(event) {
      this.setState({
        features: event.target.value
      });
    }
  }]);
  return EditorView;
}(_react.Component);

exports.default = EditorView;

/***/ }),

/***/ "./Resources/public/js/components/c4g-starboard-style.jsx":
/*!****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-starboard-style.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gStarboardStyle = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Feature = _interopRequireDefault(__webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js"));

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var C4gStarboardStyle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(C4gStarboardStyle, _Component);

  var _super = _createSuper(C4gStarboardStyle);

  function C4gStarboardStyle(props) {
    (0, _classCallCheck2["default"])(this, C4gStarboardStyle);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(C4gStarboardStyle, [{
    key: "render",
    value: function render() {
      var _this = this;

      // Create label for interaction-trigger
      var styleTriggerLabel = null;
      var locstyle = this.props.styleData.arrLocStyles[this.props.styleId];
      var styleData = locstyle.locStyleArr;
      var stylor = locstyle.style && locstyle.style(new _Feature["default"]({
        geometry: new _geom.Point(0, 0)
      }), "EPSG:4326") ? locstyle.style(new _Feature["default"]({
        geometry: new _geom.Point(0, 0)
      }), "EPSG:4326") : null;
      var styl0r = Array.isArray(stylor) ? stylor[0] : stylor;
      var styleType = styleData ? styleData.styletype : "default";
      var tooltip = this.props.tooltip || "";

      if (styleData && (styleType === "cust_icon" || styleType === "cust_icon_svg" || styleType === "photo")) {
        var styleIcon = null;
        var iconSrc;

        if (styleData.icon_src && styleData.icon_src.indexOf('.') !== -1 || styleData.svgSrc && styleData.svgSrc.indexOf('.') !== -1) {
          if (styleType === "cust_icon" || styleType === "photo") {
            iconSrc = styleData.icon_src;
          } else {
            iconSrc = styleData.svgSrc;
          }

          styleIcon = /*#__PURE__*/_react["default"].createElement("img", {
            src: iconSrc,
            style: {
              height: 25,
              width: 25
            }
          });
        } else if (styl0r) {
          var styleImage = styl0r.getImage && typeof styl0r.getImage === "function" && styl0r.getImage() ? styl0r.getImage() : null;

          if (styleImage && styleImage.getSrc()) {
            styleIcon = /*#__PURE__*/_react["default"].createElement("img", {
              src: styleImage.getSrc(),
              style: {
                height: 25,
                width: 25
              }
            });
          } else {
            return null;
          }
        }

        if (this.props.clickEvent) {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE,
            title: tooltip,
            onMouseUp: function onMouseUp(event) {
              return _this.props.clickEvent(event);
            }
          }, styleIcon);
        } else {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE,
            title: tooltip
          }, styleIcon);
        }
      } else {
        var cssClass;

        switch (styleType) {
          // 'point', 'square', 'star', 'x', 'cross', 'triangle'
          case "point":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_POINT;
            break;

          case "square":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_SQUARE;
            break;

          case "star":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_STAR;
            break;

          case "x":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_X;
            break;

          case "cross":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_CROSS;
            break;

          case "triangle":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;
            break;

          default:
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE;
            break;
        }

        var color, bordercolor;

        if (styl0r && styl0r.getFill() && styl0r.getStroke()) {
          color = styl0r.getFill().getColor();
          bordercolor = styl0r.getStroke().getColor();
        } else if (styleData && styleData.fillcolor && styleData.strokecolor) {
          color = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.fillcolor[0], styleData.fillcolor[1]);
          bordercolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.strokecolor[0], styleData.strokecolor[1]);
        }

        var styleElements = {
          "--var-color": color,
          "--var-bordercolor": bordercolor
        };

        if (this.props.clickEvent) {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: cssClass,
            style: styleElements,
            title: tooltip,
            onMouseUp: function onMouseUp(event) {
              return _this.props.clickEvent(event);
            }
          });
        } else {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: cssClass,
            style: styleElements,
            title: tooltip
          });
        }
      }

      return styleTriggerLabel;
    }
  }]);
  return C4gStarboardStyle;
}(_react.Component);

exports.C4gStarboardStyle = C4gStarboardStyle;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1lZGl0b3Itdmlldy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXN0eWxlLmpzeCJdLCJuYW1lcyI6WyJFZGl0b3JWaWV3IiwicHJvcHMiLCJzY29wZSIsInN0YXRlIiwiZnJlZWhhbmQiLCJzZWxlY3RlZEZlYXR1cmUiLCJmZWF0dXJlcyIsImFjdGl2ZUVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwiYWN0aXZlU3R5bGUiLCJzdHlsZUlkIiwic2VsZWN0TW9kZSIsImludGVyYWN0aW9uIiwiY2hhbmdlSlNPTiIsImJpbmQiLCJyZXNldEludGVyYWN0aW9uIiwibW9kZSIsImFjdGl2ZSIsImdlb21ldHJ5IiwiUG9pbnQiLCJMaW5lU3RyaW5nIiwiUG9seWdvbiIsImZlYXR1cmUiLCJGZWF0dXJlIiwic2V0IiwiRHJhdyIsInNvdXJjZSIsImVkaXRvckxheWVyIiwiZ2V0U291cmNlIiwidHlwZSIsInN0b3BjbGljayIsInNuYXBUb2xlcmFuY2UiLCJzdHlsZSIsInN0eWxlRnVuY3Rpb24iLCJvbiIsImV2ZW50IiwiZWRpdG9ySWQiLCJnZW9qc29uIiwiZ2V0R2VvbWV0cnkiLCJjbG9uZSIsInRyYW5zZm9ybSIsImNlbnRlciIsImdldENlbnRlciIsInJhZGl1cyIsImdldFJhZGl1cyIsImNvb3JkaW5hdGVzIiwicHJvcGVydGllcyIsImVsZW1lbnRJZCIsImxvY3N0eWxlIiwiR2VvSlNPTiIsIndyaXRlRmVhdHVyZU9iamVjdCIsImRhdGFQcm9qZWN0aW9uIiwiZmVhdHVyZVByb2plY3Rpb24iLCJhZGRGZWF0dXJlIiwiY291bnRFZGl0b3JJZCIsIm1hcENvbnRyb2xsZXIiLCJtYXAiLCJhZGRJbnRlcmFjdGlvbiIsIlNlbGVjdCIsImxheWVycyIsImhpdFRvbGVyYW5jZSIsImUiLCJ0YXJnZXQiLCJnZXRGZWF0dXJlcyIsImdldEFycmF5IiwicmVtb3ZlRmVhdHVyZSIsInB1c2giLCJNb2RpZnkiLCJwaXhlbFRvbGVyYW5jZSIsInNlbGVjdGVkIiwic2V0U3RhdGUiLCJtb2RpZnlGZWF0dXJlIiwibGVuZ3RoIiwiZWxlbWVudCIsImNvbG9yIiwic3R5bGVUcmlnZ2VyTGFiZWwiLCJzdHlsZURhdGEiLCJhcnJMb2NTdHlsZXMiLCJsb2NTdHlsZUFyciIsInN0eWxlVHlwZSIsInN0eWxldHlwZSIsIm5hbWUiLCJzdHlsb3IiLCJmZWF0dXJlU3R5bGUiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwiZ2V0Q29sb3IiLCJmaWxsY29sb3IiLCJzdHJva2Vjb2xvciIsInV0aWxzIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5IiwiaGVpZ2h0Iiwid2lkdGgiLCJjdXN0b21CdXR0b24iLCJpbmNsdWRlcyIsImZyZWVoYW5kQ2xhc3MiLCJsYW5nIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiY2hhbmdlRnJlZWhhbmQiLCJFRElUT1JfRkVBVFVSRV9NT0RJRlkiLCJjaGFuZ2VTZWxlY3RNb2RlIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwiYXJyRm9ybUVkaXRvclZhcnMiLCJpIiwiZWRpdG9yVmFycyIsImhhc093blByb3BlcnR5IiwiZWRpdG9yVmFyIiwidmFsdWUiLCJnZXQiLCJrZXkiLCJjYXB0aW9uIiwiaGFuZGxlVmFyQ2hhbmdlIiwicmVtb3ZlSW50ZXJhY3Rpb24iLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImZpbmQiLCJzdHJpbmciLCJDb21wb25lbnQiLCJDNGdTdGFyYm9hcmRTdHlsZSIsInN0eWwwciIsInRvb2x0aXAiLCJzdHlsZUljb24iLCJpY29uU3JjIiwiaWNvbl9zcmMiLCJpbmRleE9mIiwic3ZnU3JjIiwic3R5bGVJbWFnZSIsImdldEltYWdlIiwiZ2V0U3JjIiwiY2xpY2tFdmVudCIsImNzc0NvbnN0YW50cyIsIlNUQVJCT0FSRF9MT0NTVFlMRSIsImNzc0NsYXNzIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1giLCJTVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEUiLCJib3JkZXJjb2xvciIsInN0eWxlRWxlbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUJBLFU7Ozs7O0FBRW5CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxRQUFNQyxLQUFLLGlEQUFYO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxLQURDO0FBRVhDLHFCQUFlLEVBQUUsS0FGTjtBQUdYQyxjQUFRLEVBQUUsSUFIQztBQUlYQyxtQkFBYSxFQUFFTixLQUFLLENBQUNPLFFBQU4sQ0FBZSxDQUFmLElBQW9CUCxLQUFLLENBQUNPLFFBQU4sQ0FBZSxDQUFmLEVBQWtCQyxFQUF0QyxHQUEyQyxDQUovQztBQUtYQyxpQkFBVyxFQUFFVCxLQUFLLENBQUNPLFFBQU4sQ0FBZSxDQUFmLElBQW9CUCxLQUFLLENBQUNPLFFBQU4sQ0FBZSxDQUFmLEVBQWtCRyxPQUF0QyxHQUFnRCxDQUxsRDtBQU1YQyxnQkFBVSxFQUFFO0FBTkQsS0FBYjtBQVFBLFVBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLGdEQUFsQjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCRCxJQUF0QixnREFBeEI7QUFiaUI7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QVMsQ0FBQ2MsV0FBVixDQUFzQixDQUF0QixDQUEvQixFQUF5RGQsU0FBUyxDQUFDYyxXQUFWLENBQXNCLENBQXRCLENBQXpELENBQWQ7QUFDSDs7QUFDRCxZQUFJcUQsYUFBYSxHQUFHO0FBQ2hCLHlCQUFnQnJFLEtBREE7QUFFaEIsK0JBQXNCb0U7QUFGTixTQUFwQjs7QUFJQSxZQUFJLEtBQUs5SSxLQUFMLENBQVdvSSxVQUFmLEVBQTJCO0FBQ3ZCekQsMkJBQWlCLGdCQUFHO0FBQU0scUJBQVMsRUFBRTRELFFBQWpCO0FBQTJCLGlCQUFLLEVBQUVRLGFBQWxDO0FBQWlELGlCQUFLLEVBQUVwQixPQUF4RDtBQUFpRSxxQkFBUyxFQUFFLG1CQUFDeEYsS0FBRDtBQUFBLHFCQUFVLEtBQUksQ0FBQ25DLEtBQUwsQ0FBV29JLFVBQVgsQ0FBc0JqRyxLQUF0QixDQUFWO0FBQUE7QUFBNUUsWUFBcEI7QUFDSCxTQUZELE1BR0s7QUFDRHdDLDJCQUFpQixnQkFBRztBQUFNLHFCQUFTLEVBQUU0RCxRQUFqQjtBQUEyQixpQkFBSyxFQUFFUSxhQUFsQztBQUFpRCxpQkFBSyxFQUFFcEI7QUFBeEQsWUFBcEI7QUFDSDtBQUNKOztBQUNELGFBQU9oRCxpQkFBUDtBQUNIOzs7RUF2RmtDNkMsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1lZGl0b3Itdmlld19qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7R2VvSlNPTn0gZnJvbSBcIm9sL2Zvcm1hdFwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7UG9pbnQsIExpbmVTdHJpbmcsIFBvbHlnb24sIENpcmNsZX0gZnJvbSAnb2wvZ2VvbSdcbmltcG9ydCB7RHJhdywgU2VsZWN0LCBNb2RpZnl9IGZyb20gXCJvbC9pbnRlcmFjdGlvblwiO1xuaW1wb3J0IHtGZWF0dXJlfSBmcm9tIFwib2xcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkU3R5bGV9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc3R5bGUuanN4XCI7XG5pbXBvcnQge0M0Z1BvcHVwQ29udHJvbGxlcn0gZnJvbSBcIi4vLi4vYzRnLXBvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvclZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZnJlZWhhbmQ6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBmYWxzZSxcbiAgICAgIGZlYXR1cmVzOiBcIltdXCIsXG4gICAgICBhY3RpdmVFbGVtZW50OiBwcm9wcy5lbGVtZW50c1swXSA/IHByb3BzLmVsZW1lbnRzWzBdLmlkIDogMCxcbiAgICAgIGFjdGl2ZVN0eWxlOiBwcm9wcy5lbGVtZW50c1swXSA/IHByb3BzLmVsZW1lbnRzWzBdLnN0eWxlSWQgOiAwLFxuICAgICAgc2VsZWN0TW9kZTogXCJtb2RpZnlcIlxuICAgIH07XG4gICAgdGhpcy5pbnRlcmFjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5jaGFuZ2VKU09OID0gdGhpcy5jaGFuZ2VKU09OLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEludGVyYWN0aW9uID0gdGhpcy5yZXNldEludGVyYWN0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSAhPT0gXCJzZWxlY3RcIiAmJiB0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XG4gICAgICBsZXQgZ2VvbWV0cnk7XG4gICAgICBzd2l0Y2godGhpcy5wcm9wcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgXCJQb2ludFwiOlxuICAgICAgICAgIGdlb21ldHJ5ID0gbmV3IFBvaW50KDAsMCk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjpcbiAgICAgICAgICBnZW9tZXRyeSA9IG5ldyBMaW5lU3RyaW5nKFtbMCwwXSwgWzEsMV1dKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICAgICAgICBnZW9tZXRyeSA9IG5ldyBQb2x5Z29uKFtbMCwwXSwgWzEsMV1dKVxuICAgICAgfVxuICAgICAgbGV0IGZlYXR1cmUgPSBuZXcgRmVhdHVyZShnZW9tZXRyeSk7XG4gICAgICBmZWF0dXJlLnNldCgnbG9jc3R5bGUnLCB0aGlzLnN0YXRlLmFjdGl2ZVN0eWxlKVxuICAgICAgdGhpcy5pbnRlcmFjdGlvbiA9IG5ldyBEcmF3KHtcbiAgICAgICAgLy8gZmVhdHVyZXM6IHRoaXMucHJvcHMuZmVhdHVyZXMsXG4gICAgICAgIHNvdXJjZTogdGhpcy5wcm9wcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKSxcbiAgICAgICAgdHlwZTogdGhpcy5wcm9wcy5tb2RlLFxuICAgICAgICBzdG9wY2xpY2s6IGZhbHNlLFxuICAgICAgICBzbmFwVG9sZXJhbmNlOiAwLFxuICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZUZ1bmN0aW9uKGZlYXR1cmUpLFxuICAgICAgICBmcmVlaGFuZDogdGhpcy5zdGF0ZS5mcmVlaGFuZFxuICAgICAgfSk7XG4gICAgICB0aGlzLmludGVyYWN0aW9uLm9uKCdkcmF3ZW5kJyxcbiAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQuZmVhdHVyZS5zZXQoJ2VkaXRvcklkJywgdGhpcy5wcm9wcy5lZGl0b3JJZCk7XG4gICAgICAgICAgZXZlbnQuZmVhdHVyZS5zZXQoJ2xvY3N0eWxlJywgdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSk7XG4gICAgICAgICAgZXZlbnQuZmVhdHVyZS5zZXQoJ2VsZW1lbnRJZCcsIHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgbGV0IGdlb2pzb247XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJDaXJjbGVcIikgeyAvL3R1cm4gQ2lyY2xlIGludG8gdmFsaWQgR2VvSlNPTlxuICAgICAgICAgICAgbGV0IGdlb21ldHJ5ID0gZXZlbnQuZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmNsb25lKCkudHJhbnNmb3JtKFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpO1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IGV2ZW50LmZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICAgIGdlb2pzb24gPSB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY2VudGVyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBlZGl0b3JJZDogdGhpcy5wcm9wcy5lZGl0b3JJZCxcbiAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgICBsb2NzdHlsZTogdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSxcbiAgICAgICAgICAgICAgICByYWRpdXM6IHJhZGl1c1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2VvanNvbiA9IG5ldyBHZW9KU09OKCkud3JpdGVGZWF0dXJlT2JqZWN0KGV2ZW50LmZlYXR1cmUsIHtcbiAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb246IFwiRVBTRzo0MzI2XCIsXG4gICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wcm9wcy5hZGRGZWF0dXJlKGdlb2pzb24pXG4gICAgICAgICAgdGhpcy5wcm9wcy5jb3VudEVkaXRvcklkKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2V0SW50ZXJhY3Rpb24oKTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdE1vZGUgPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbiA9IG5ldyBTZWxlY3Qoe1xuICAgICAgICAgIGxheWVyczogW3RoaXMucHJvcHMuZWRpdG9yTGF5ZXJdLFxuICAgICAgICAgIGhpdFRvbGVyYW5jZTogMjBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb24ub24oJ3NlbGVjdCcsIChlKSA9PiB7XG4gICAgICAgICAgbGV0IGZlYXR1cmUgPSBlLnRhcmdldC5nZXRGZWF0dXJlcygpLmdldEFycmF5KClbMF07XG4gICAgICAgICAgbGV0IGdlb2pzb24gPSBuZXcgR2VvSlNPTigpLndyaXRlRmVhdHVyZU9iamVjdChmZWF0dXJlLCB7XG4gICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogXCJFUFNHOjQzMjZcIixcbiAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUZlYXR1cmUoZ2VvanNvbik7XG4gICAgICAgICAgbGV0IHNvdXJjZSA9IHRoaXMucHJvcHMuZWRpdG9yTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb24pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb24gPSBbXTtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbi5wdXNoKG5ldyBTZWxlY3Qoe1xuICAgICAgICAgIGxheWVyczogW3RoaXMucHJvcHMuZWRpdG9yTGF5ZXJdLFxuICAgICAgICAgIGhpdFRvbGVyYW5jZTogMjBcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmludGVyYWN0aW9uLnB1c2gobmV3IE1vZGlmeSh7XG4gICAgICAgICAgZmVhdHVyZXM6IHRoaXMuaW50ZXJhY3Rpb25bMF0uZ2V0RmVhdHVyZXMoKSxcbiAgICAgICAgICBwaXhlbFRvbGVyYW5jZTogMjBcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmludGVyYWN0aW9uWzBdLm9uKCdzZWxlY3QnLCAoZSkgPT4ge1xuICAgICAgICAgIGxldCBmZWF0dXJlID0gZS5zZWxlY3RlZFswXTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEZlYXR1cmU6IGZlYXR1cmV9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25bMV0ub24oJ21vZGlmeWVuZCcsIChlKSA9PiB7XG4gICAgICAgICAgbGV0IGZlYXR1cmUgPSBlLmZlYXR1cmVzLmdldEFycmF5KClbMF07XG4gICAgICAgICAgbGV0IGdlb2pzb24gPSBuZXcgR2VvSlNPTigpLndyaXRlRmVhdHVyZU9iamVjdChmZWF0dXJlLCB7XG4gICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogXCJFUFNHOjQzMjZcIixcbiAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnByb3BzLm1vZGlmeUZlYXR1cmUoZ2VvanNvbik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMF0pO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZWxlbWVudHMgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmVsZW1lbnRzICYmIHRoaXMucHJvcHMuZWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgZWxlbWVudHMgPSB0aGlzLnByb3BzLmVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBsZXQgY29sb3IsIHN0eWxlVHJpZ2dlckxhYmVsO1xuICAgICAgICBsZXQgbG9jc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXNbZWxlbWVudC5zdHlsZUlkXTtcbiAgICAgICAgbGV0IHN0eWxlRGF0YSA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyO1xuICAgICAgICBsZXQgc3R5bGVUeXBlID0gc3R5bGVEYXRhID8gc3R5bGVEYXRhLnN0eWxldHlwZSA6IFwiZGVmYXVsdFwiO1xuICAgICAgICBpZiAoc3R5bGVEYXRhICYmIChzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uXCIgfHwgc3R5bGVUeXBlID09PSBcImN1c3RfaWNvbl9zdmdcIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikpIHtcbiAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxDNGdTdGFyYm9hcmRTdHlsZSB0b29sdGlwPXtlbGVtZW50Lm5hbWV9IHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHN0eWxlSWQ9e2VsZW1lbnQuc3R5bGVJZH0vPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBzdHlsb3IgPSBsb2NzdHlsZS5zdHlsZSAmJiBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpID8gbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKTogbnVsbDtcbiAgICAgICAgICBsZXQgZmVhdHVyZVN0eWxlID0gQXJyYXkuaXNBcnJheShzdHlsb3IpID8gc3R5bG9yWzBdOiBzdHlsb3I7XG4gICAgICAgICAgaWYgKGZlYXR1cmVTdHlsZSAmJiBmZWF0dXJlU3R5bGUuZ2V0RmlsbCgpICYmIGZlYXR1cmVTdHlsZS5nZXRTdHJva2UoKSkge1xuICAgICAgICAgICAgY29sb3IgPSBmZWF0dXJlU3R5bGUuZ2V0RmlsbCgpLmdldENvbG9yKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzdHlsZURhdGEgJiYgc3R5bGVEYXRhLmZpbGxjb2xvciAmJiBzdHlsZURhdGEuc3Ryb2tlY29sb3IpIHtcbiAgICAgICAgICAgIGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5maWxsY29sb3JbMF0sIHN0eWxlRGF0YS5maWxsY29sb3JbMV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItbG9jc3R5bGVcIn0gc3R5bGU9e3tcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCIgOiBjb2xvclxuICAgICAgICAgIH19Lz47XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiAoPGJ1dHRvbiBrZXk9e2VsZW1lbnQuaWR9IHN0eWxlPXt7aGVpZ2h0OiBcIjMycHhcIiwgd2lkdGg6IFwiMzJweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT57dGhpcy5zZXRTdGF0ZSh7YWN0aXZlRWxlbWVudDogZWxlbWVudC5pZCwgYWN0aXZlU3R5bGU6IGVsZW1lbnQuc3R5bGVJZH0pfX0+XG4gICAgICAgICAge3N0eWxlVHJpZ2dlckxhYmVsfVxuICAgICAgICA8L2J1dHRvbj4pXG4gICAgICB9KTtcblxuXG4gICAgfVxuICAgIGxldCBjdXN0b21CdXR0b24gPSBudWxsO1xuICAgIGlmIChcIkxpbmVTdHJpbmdQb2x5Z29uXCIuaW5jbHVkZXModGhpcy5wcm9wcy5tb2RlKSkge1xuICAgICAgbGV0IGZyZWVoYW5kQ2xhc3MgPSBcImM0Zy1lZGl0b3ItdmlldyBcIjtcbiAgICAgIGZyZWVoYW5kQ2xhc3MgKz0gdGhpcy5zdGF0ZS5mcmVlaGFuZCA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIjtcbiAgICAgIGN1c3RvbUJ1dHRvbiA9ICg8YSBjbGFzc05hbWU9e2ZyZWVoYW5kQ2xhc3N9IHRpdGxlPXt0aGlzLnByb3BzLmxhbmcuRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EfSBvbk1vdXNlVXA9eygpID0+IHt0aGlzLmNoYW5nZUZyZWVoYW5kKCl9fT57dGhpcy5wcm9wcy5sYW5nLkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORH08L2E+KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcInNlbGVjdFwiKSB7XG4gICAgICBjdXN0b21CdXR0b24gPSAoPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICA8YnV0dG9uIHRpdGxlPXt0aGlzLnByb3BzLmxhbmcuRURJVE9SX0ZFQVRVUkVfTU9ESUZZfSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1mZWF0dXJlLW1vZGlmeSBcIiArICh0aGlzLnN0YXRlLnNlbGVjdE1vZGUgPT09IFwibW9kaWZ5XCIgPyBcImM0Zy1hY3RpdmVcIjogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMuY2hhbmdlU2VsZWN0TW9kZShcIm1vZGlmeVwiKX19Lz5cbiAgICAgICAgPGJ1dHRvbiB0aXRsZT17dGhpcy5wcm9wcy5sYW5nLkVESVRPUl9GRUFUVVJFX0RFTEVURX0gY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItZmVhdHVyZS1kZWxldGUgXCIgKyAodGhpcy5zdGF0ZS5zZWxlY3RNb2RlID09PSBcInJlbW92ZVwiID8gXCJjNGctYWN0aXZlXCI6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9eygpID0+IHt0aGlzLmNoYW5nZVNlbGVjdE1vZGUoXCJyZW1vdmVcIil9fS8+XG4gICAgICA8L2Rpdj4pXG4gICAgfVxuICAgIGxldCBhcnJGb3JtRWRpdG9yVmFycyA9IFtdO1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb3BzLmVkaXRvclZhcnMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZWRpdG9yVmFycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBlZGl0b3JWYXIgPSB0aGlzLnByb3BzLmVkaXRvclZhcnNbaV07XG4gICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUuZ2V0KGVkaXRvclZhci5rZXkpID8gdGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUuZ2V0KGVkaXRvclZhci5rZXkpIDogXCJcIjtcbiAgICAgICAgICBhcnJGb3JtRWRpdG9yVmFycy5wdXNoKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItdmFycy1pbnB1dFwifT5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIHtlZGl0b3JWYXIuY2FwdGlvbn06XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ZhbHVlfSBuYW1lPXtlZGl0b3JWYXIua2V5fSBvbkNoYW5nZT17KGV2ZW50KT0+e3RoaXMuaGFuZGxlVmFyQ2hhbmdlKGV2ZW50KX19Lz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2N1c3RvbUJ1dHRvbn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLWVsZW1lbnQtc2VsZWN0aW9uXCJ9PlxuICAgICAgICAgICAge2VsZW1lbnRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci12YXJzXCJ9PlxuICAgICAgICAgIHthcnJGb3JtRWRpdG9yVmFyc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIHJlc2V0SW50ZXJhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaW50ZXJhY3Rpb24pIHsgLy9vbmx5IG9uZSBkcmF3aW50ZXJhY3Rpb24gYXQgYSB0aW1lXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmludGVyYWN0aW9uKSkge1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMF0pO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMV0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLmVsZW1lbnRzWzBdICYmIHByZXZQcm9wcy5tb2RlICE9PSB0aGlzLnByb3BzLm1vZGUpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUVsZW1lbnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudDogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZCxcbiAgICAgICAgICBhY3RpdmVTdHlsZTogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkXG4gICAgICAgIH0pO1xuICAgICAgICAvLyAgdGhpcy5zdGF0ZS5hY3RpdmVFbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZFxuICAgICAgICAvLyAgdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSA9IHRoaXMucHJvcHMuZWxlbWVudHNbMF0uc3R5bGVJZFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMucHJvcHMuZWxlbWVudHMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudDogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZCxcbiAgICAgICAgICBhY3RpdmVTdHlsZTogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLnN0YXRlLmFjdGl2ZUVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLmlkXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWN0aXZlU3R5bGUgPSB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLnN0eWxlSWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTZWxlY3RNb2RlKHN0cmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0TW9kZTogc3RyaW5nXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVWYXJDaGFuZ2UoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZS5zZXQobmFtZSwgdmFsdWUpO1xuICAgIGxldCBnZW9qc29uID0gbmV3IEdlb0pTT04oKS53cml0ZUZlYXR1cmVPYmplY3QodGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUsIHtcbiAgICAgIGRhdGFQcm9qZWN0aW9uOiBcIkVQU0c6NDMyNlwiLFxuICAgICAgZmVhdHVyZVByb2plY3Rpb246IFwiRVBTRzozODU3XCJcbiAgICB9KVxuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShnZW9qc29uKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcInNlbGVjdGVkRmVhdHVyZVwiIDogdGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmV9KTtcbiAgfVxuXG4gIGNoYW5nZUZyZWVoYW5kKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZnJlZWhhbmQ6ICF0aGlzLnN0YXRlLmZyZWVoYW5kXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZUpTT04oZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmZWF0dXJlczogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZFN0eWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBsYWJlbCBmb3IgaW50ZXJhY3Rpb24tdHJpZ2dlclxuICAgICAgICBsZXQgc3R5bGVUcmlnZ2VyTGFiZWwgPSBudWxsO1xuICAgICAgICBsZXQgbG9jc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5zdHlsZUlkXTtcbiAgICAgICAgbGV0IHN0eWxlRGF0YSA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyO1xuICAgICAgICBsZXQgc3R5bG9yID0gbG9jc3R5bGUuc3R5bGUgJiYgbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKSA/IGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIik6IG51bGw7XG4gICAgICAgIGxldCBzdHlsMHIgPSBBcnJheS5pc0FycmF5KHN0eWxvcikgPyBzdHlsb3JbMF06IHN0eWxvcjtcbiAgICAgICAgbGV0IHN0eWxlVHlwZSA9IHN0eWxlRGF0YSA/IHN0eWxlRGF0YS5zdHlsZXR5cGUgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgbGV0IHRvb2x0aXAgPSB0aGlzLnByb3BzLnRvb2x0aXAgfHwgXCJcIjtcbiAgICAgICAgaWYgKHN0eWxlRGF0YSAmJiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25fc3ZnXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVJY29uID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBpY29uU3JjO1xuICAgICAgICAgICAgaWYgKChzdHlsZURhdGEuaWNvbl9zcmMgJiYgc3R5bGVEYXRhLmljb25fc3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpIHx8IChzdHlsZURhdGEuc3ZnU3JjICYmIHN0eWxlRGF0YS5zdmdTcmMuaW5kZXhPZignLicpICE9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuaWNvbl9zcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLnN2Z1NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e2ljb25TcmN9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0gLz47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0eWwwcikge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZUltYWdlID0gc3R5bDByLmdldEltYWdlICYmIHR5cGVvZiBzdHlsMHIuZ2V0SW1hZ2UgPT09IFwiZnVuY3Rpb25cIiAmJiBzdHlsMHIuZ2V0SW1hZ2UoKSA/IHN0eWwwci5nZXRJbWFnZSgpOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZUltYWdlICYmIHN0eWxlSW1hZ2UuZ2V0U3JjKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e3N0eWxlSW1hZ2UuZ2V0U3JjKCl9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCkge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFfSB0aXRsZT17dG9vbHRpcH0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9IHRpdGxlPXt0b29sdGlwfT57c3R5bGVJY29ufTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3NzQ2xhc3M7XG4gICAgICAgICAgICBzd2l0Y2ggKHN0eWxlVHlwZSkgeyAvLyAncG9pbnQnLCAnc3F1YXJlJywgJ3N0YXInLCAneCcsICdjcm9zcycsICd0cmlhbmdsZSdcbiAgICAgICAgICAgICAgICBjYXNlIFwicG9pbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3F1YXJlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9TUVVBUkU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFyXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfWDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNyb3NzXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9DUk9TUztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRyaWFuZ2xlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9UUklBTkdMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNvbG9yLCBib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGlmIChzdHlsMHIgJiYgc3R5bDByLmdldEZpbGwoKSAmJiBzdHlsMHIuZ2V0U3Ryb2tlKCkpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHN0eWwwci5nZXRGaWxsKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHN0eWwwci5nZXRTdHJva2UoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGVEYXRhICYmIHN0eWxlRGF0YS5maWxsY29sb3IgJiYgc3R5bGVEYXRhLnN0cm9rZWNvbG9yKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZpbGxjb2xvclswXSwgc3R5bGVEYXRhLmZpbGxjb2xvclsxXSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLnN0cm9rZWNvbG9yWzBdLCBzdHlsZURhdGEuc3Ryb2tlY29sb3JbMV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3R5bGVFbGVtZW50cyA9IHtcbiAgICAgICAgICAgICAgICBcIi0tdmFyLWNvbG9yXCIgOiBjb2xvcixcbiAgICAgICAgICAgICAgICBcIi0tdmFyLWJvcmRlcmNvbG9yXCIgOiBib3JkZXJjb2xvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dG9vbHRpcH0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDbGFzc30gc3R5bGU9e3N0eWxlRWxlbWVudHN9IHRpdGxlPXt0b29sdGlwfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZVRyaWdnZXJMYWJlbDtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9