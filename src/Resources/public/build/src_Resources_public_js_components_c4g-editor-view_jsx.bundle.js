"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-editor-view_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-editor-view.jsx":
/*!****************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-editor-view.jsx ***!
  \****************************************************************/
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

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _format = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

var _c4gStarboardStyle = __webpack_require__(/*! ./c4g-starboard-style.jsx */ "./src/Resources/public/js/components/c4g-starboard-style.jsx");

var _c4gPopupController = __webpack_require__(/*! ./../c4g-popup-controller */ "./src/Resources/public/js/c4g-popup-controller.js");

var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ../c4g-maps-misc-tooltippopup */ "./src/Resources/public/js/c4g-maps-misc-tooltippopup.js");

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

      var scope = this;

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
          snapTolerance: 1,
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

            var realRadius = _c4gMapsUtils.utils.measureGeometry(event.feature.getGeometry()).rawValue;

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
                radius: radius,
                realRadius: realRadius
              }
            };
          } else {
            geojson = new _format.GeoJSON().writeFeatureObject(event.feature, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            });
          }

          var params = {
            source: _this2.props.editorLayer.getSource(),
            geojson: geojson,
            event: event,
            format: new _format.GeoJSON()
          };

          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_draw, params);

          _this2.props.addFeature(geojson);

          _this2.props.countEditorId();
        });
        this.props.mapController.map.addInteraction(this.interaction);
      } else if (this.props.mode === "select" && this.props.active) {
        this.resetInteraction();
        this.interaction = [];
        this.interaction.push(new _interaction.Select({
          layers: [this.props.editorLayer],
          hitTolerance: 20
        }));
        this.interaction.push(new _interaction.Modify({
          features: this.state.selectedFeature ? new _ol.Collection([this.state.selectedFeature]) : new _ol.Collection([new _ol.Feature()]),
          // source: this.props.editorLayer.getSource(),
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
          var geojson;

          if (feature.getGeometry() instanceof _geom.Circle) {
            //turn Circle into valid GeoJSON
            var _geometry2 = feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326");

            var center = _geometry2.getCenter();

            var radius = feature.getGeometry().getRadius();

            var realRadius = _c4gMapsUtils.utils.measureGeometry(event.feature.getGeometry()).rawValue;

            geojson = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: center
              },
              properties: {
                editorId: feature.get('editorId'),
                elementId: feature.get('elementId'),
                locstyle: feature.get('activeStyle'),
                radius: radius,
                realRadius: realRadius
              }
            };
          } else {
            geojson = new _format.GeoJSON().writeFeatureObject(feature, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            });
          }

          var params = {
            source: _this2.props.editorLayer.getSource(),
            geojson: geojson,
            event: e,
            format: new _format.GeoJSON()
          };

          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_modify, params);

          _this2.props.modifyFeature(geojson);
        });
        this.props.mapController.map.addInteraction(this.interaction[0]);
        this.props.mapController.map.addInteraction(this.interaction[1]);
      } else {
        this.resetInteraction();
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
              title: element.name,
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
      }

      var arrFormEditorVars = [];

      if (this.state.selectedFeature && this.props.mode === "select") {
        customButton = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-editor-mode-switcher"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          title: this.props.lang.EDITOR_FEATURE_DELETE,
          className: "c4g-editor-feature-delete " + (this.state.selectMode === "remove" ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            _this2.removeActiveFeature();
          }
        }));

        for (var i in this.props.editorVars) {
          if (this.props.editorVars.hasOwnProperty(i)) {
            var editorVar = this.props.editorVars[i];

            if (editorVar.caption && editorVar.key) {
              var value = this.state.selectedFeature.get(editorVar.key) ? this.state.selectedFeature.get(editorVar.key) : "";
              arrFormEditorVars.push( /*#__PURE__*/_react["default"].createElement("form", {
                className: "c4g-editor-vars-input",
                key: i,
                onSubmit: function onSubmit(event) {
                  event.preventDefault();
                }
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
    key: "removeActiveFeature",
    value: function removeActiveFeature() {
      var geojson = new _format.GeoJSON().writeFeatureObject(this.state.selectedFeature, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
      });
      this.props.removeFeature(geojson);
      var source = this.props.editorLayer.getSource();
      source.removeFeature(this.state.selectedFeature);
      this.setState({
        selectedFeature: false
      });
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

exports["default"] = EditorView;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-starboard-style.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-style.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

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
    key: "enterEvent",
    value: function enterEvent(e) {
      if (e.which === 13) {
        this.props.clickEvent(e);
      }
    }
  }, {
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
            tabIndex: 1,
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE,
            title: tooltip,
            onKeyPress: function onKeyPress(event) {
              return _this.enterEvent(event);
            },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZWRpdG9yLXZpZXdfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQTs7Ozs7RUFFbkIsb0JBQVlDLEtBQVosRUFBbUI7SUFBQTs7SUFBQTtJQUNqQiwwQkFBTUEsS0FBTjtJQUNBLElBQU1DLEtBQUssaURBQVg7SUFDQSxNQUFLQyxLQUFMLEdBQWE7TUFDWEMsUUFBUSxFQUFFLEtBREM7TUFFWEMsZUFBZSxFQUFFLEtBRk47TUFHWEMsUUFBUSxFQUFFLElBSEM7TUFJWEMsYUFBYSxFQUFFTixLQUFLLENBQUNPLFFBQU4sQ0FBZSxDQUFmLElBQW9CUCxLQUFLLENBQUNPLFFBQU4sQ0FBZSxDQUFmLEVBQWtCQyxFQUF0QyxHQUEyQyxDQUovQztNQUtYQyxXQUFXLEVBQUVULEtBQUssQ0FBQ08sUUFBTixDQUFlLENBQWYsSUFBb0JQLEtBQUssQ0FBQ08sUUFBTixDQUFlLENBQWYsRUFBa0JHLE9BQXRDLEdBQWdELENBTGxEO01BTVhDLFVBQVUsRUFBRTtJQU5ELENBQWI7SUFRQSxNQUFLQyxXQUFMLEdBQW1CLElBQW5CO0lBQ0EsTUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixnREFBbEI7SUFDQSxNQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsZ0RBQXhCO0lBYmlCO0VBY2xCOzs7O1dBRUQsa0JBQVM7TUFBQTs7TUFDUCxJQUFNYixLQUFLLEdBQUcsSUFBZDs7TUFDQSxJQUFJLEtBQUtELEtBQUwsQ0FBV2dCLElBQVgsS0FBb0IsUUFBcEIsSUFBZ0MsS0FBS2hCLEtBQUwsQ0FBV2lCLE1BQS9DLEVBQXVEO1FBQ3JELEtBQUtGLGdCQUFMO1FB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LEVBQWQ7UUFDSCxDQUhELE1BSUssSUFBSVosU0FBUyxJQUFJQSxTQUFTLENBQUNhLFNBQXZCLElBQW9DYixTQUFTLENBQUNjLFdBQWxELEVBQStEO1VBQ2hFaEIsS0FBSyxHQUFHdkMsbUJBQUEsQ0FBTXdELHdCQUFOLENBQStCZixTQUFTLENBQUNhLFNBQVYsQ0FBb0IsQ0FBcEIsQ0FBL0IsRUFBdURiLFNBQVMsQ0FBQ2EsU0FBVixDQUFvQixDQUFwQixDQUF2RCxDQUFSO1VBQ0F1RCxXQUFXLEdBQUc3RyxtQkFBQSxDQUFNd0Qsd0JBQU4sQ0FBK0JmLFNBQVMsQ0FBQ2MsV0FBVixDQUFzQixDQUF0QixDQUEvQixFQUF5RGQsU0FBUyxDQUFDYyxXQUFWLENBQXNCLENBQXRCLENBQXpELENBQWQ7UUFDSDs7UUFDRCxJQUFJdUQsYUFBYSxHQUFHO1VBQ2hCLGVBQWdCdkUsS0FEQTtVQUVoQixxQkFBc0JzRTtRQUZOLENBQXBCOztRQUlBLElBQUksS0FBSzFKLEtBQUwsQ0FBV3FJLFVBQWYsRUFBMkI7VUFDdkJoRCxpQkFBaUIsZ0JBQUc7WUFBTSxTQUFTLEVBQUU4RCxRQUFqQjtZQUEyQixLQUFLLEVBQUVRLGFBQWxDO1lBQWlELEtBQUssRUFBRXBCLE9BQXhEO1lBQWlFLFNBQVMsRUFBRSxtQkFBQ3JHLEtBQUQ7Y0FBQSxPQUFVLEtBQUksQ0FBQ2xDLEtBQUwsQ0FBV3FJLFVBQVgsQ0FBc0JuRyxLQUF0QixDQUFWO1lBQUE7VUFBNUUsRUFBcEI7UUFDSCxDQUZELE1BR0s7VUFDRG1ELGlCQUFpQixnQkFBRztZQUFNLFNBQVMsRUFBRThELFFBQWpCO1lBQTJCLEtBQUssRUFBRVEsYUFBbEM7WUFBaUQsS0FBSyxFQUFFcEI7VUFBeEQsRUFBcEI7UUFDSDtNQUNKOztNQUNELE9BQU9sRCxpQkFBUDtJQUNIOzs7RUEzRmtDNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZWRpdG9yLXZpZXcuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtc3R5bGUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtWZWN0b3J9IGZyb20gXCJvbC9sYXllclwiO1xuaW1wb3J0IHtWZWN0b3IgYXMgVmVjdG9yU291cmNlfSBmcm9tIFwib2wvc291cmNlXCI7XG5pbXBvcnQge0dlb0pTT059IGZyb20gXCJvbC9mb3JtYXRcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge1BvaW50LCBMaW5lU3RyaW5nLCBQb2x5Z29uLCBDaXJjbGV9IGZyb20gJ29sL2dlb20nXG5pbXBvcnQge0RyYXcsIFNlbGVjdCwgTW9kaWZ5fSBmcm9tIFwib2wvaW50ZXJhY3Rpb25cIjtcbmltcG9ydCB7RmVhdHVyZX0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtDNGdTdGFyYm9hcmRTdHlsZX0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1zdHlsZS5qc3hcIjtcbmltcG9ydCB7QzRnUG9wdXBDb250cm9sbGVyfSBmcm9tIFwiLi8uLi9jNGctcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHtUb29sdGlwUG9wVXB9IGZyb20gXCIuLi9jNGctbWFwcy1taXNjLXRvb2x0aXBwb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0b3JWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZyZWVoYW5kOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkRmVhdHVyZTogZmFsc2UsXG4gICAgICBmZWF0dXJlczogXCJbXVwiLFxuICAgICAgYWN0aXZlRWxlbWVudDogcHJvcHMuZWxlbWVudHNbMF0gPyBwcm9wcy5lbGVtZW50c1swXS5pZCA6IDAsXG4gICAgICBhY3RpdmVTdHlsZTogcHJvcHMuZWxlbWVudHNbMF0gPyBwcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkIDogMCxcbiAgICAgIHNlbGVjdE1vZGU6IFwibW9kaWZ5XCJcbiAgICB9O1xuICAgIHRoaXMuaW50ZXJhY3Rpb24gPSBudWxsO1xuICAgIHRoaXMuY2hhbmdlSlNPTiA9IHRoaXMuY2hhbmdlSlNPTi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXRJbnRlcmFjdGlvbiA9IHRoaXMucmVzZXRJbnRlcmFjdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlICE9PSBcInNlbGVjdFwiICYmIHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICB0aGlzLnJlc2V0SW50ZXJhY3Rpb24oKTtcbiAgICAgIGxldCBnZW9tZXRyeTtcbiAgICAgIHN3aXRjaCh0aGlzLnByb3BzLm1vZGUpIHtcbiAgICAgICAgY2FzZSBcIlBvaW50XCI6XG4gICAgICAgICAgZ2VvbWV0cnkgPSBuZXcgUG9pbnQoMCwwKTtcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIFwiTGluZVN0cmluZ1wiOlxuICAgICAgICAgIGdlb21ldHJ5ID0gbmV3IExpbmVTdHJpbmcoW1swLDBdLCBbMSwxXV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUG9seWdvblwiOlxuICAgICAgICAgIGdlb21ldHJ5ID0gbmV3IFBvbHlnb24oW1swLDBdLCBbMSwxXV0pXG4gICAgICB9XG4gICAgICBsZXQgZmVhdHVyZSA9IG5ldyBGZWF0dXJlKGdlb21ldHJ5KTtcbiAgICAgIGZlYXR1cmUuc2V0KCdsb2NzdHlsZScsIHRoaXMuc3RhdGUuYWN0aXZlU3R5bGUpXG4gICAgICB0aGlzLmludGVyYWN0aW9uID0gbmV3IERyYXcoe1xuXG4gICAgICAgIC8vIGZlYXR1cmVzOiB0aGlzLnByb3BzLmZlYXR1cmVzLFxuICAgICAgICBzb3VyY2U6IHRoaXMucHJvcHMuZWRpdG9yTGF5ZXIuZ2V0U291cmNlKCksXG4gICAgICAgIHR5cGU6IHRoaXMucHJvcHMubW9kZSxcbiAgICAgICAgc25hcFRvbGVyYW5jZTogMSxcbiAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVGdW5jdGlvbihmZWF0dXJlKSxcbiAgICAgICAgZnJlZWhhbmQ6IHRoaXMuc3RhdGUuZnJlZWhhbmRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmludGVyYWN0aW9uLm9uKCdkcmF3ZW5kJyxcbiAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQuZmVhdHVyZS5zZXQoJ2VkaXRvcklkJywgdGhpcy5wcm9wcy5lZGl0b3JJZCk7XG4gICAgICAgICAgZXZlbnQuZmVhdHVyZS5zZXQoJ2xvY3N0eWxlJywgdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSk7XG4gICAgICAgICAgZXZlbnQuZmVhdHVyZS5zZXQoJ2VsZW1lbnRJZCcsIHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgbGV0IGdlb2pzb247XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJDaXJjbGVcIikgeyAvL3R1cm4gQ2lyY2xlIGludG8gdmFsaWQgR2VvSlNPTlxuICAgICAgICAgICAgbGV0IGdlb21ldHJ5ID0gZXZlbnQuZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmNsb25lKCkudHJhbnNmb3JtKFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpO1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IGV2ZW50LmZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICAgIGxldCByZWFsUmFkaXVzID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGV2ZW50LmZlYXR1cmUuZ2V0R2VvbWV0cnkoKSkucmF3VmFsdWU7XG4gICAgICAgICAgICBnZW9qc29uID0ge1xuICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNlbnRlclxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgZWRpdG9ySWQ6IHRoaXMucHJvcHMuZWRpdG9ySWQsXG4gICAgICAgICAgICAgICAgZWxlbWVudElkOiB0aGlzLnN0YXRlLmFjdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgbG9jc3R5bGU6IHRoaXMuc3RhdGUuYWN0aXZlU3R5bGUsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiByYWRpdXMsXG4gICAgICAgICAgICAgICAgcmVhbFJhZGl1czogcmVhbFJhZGl1c1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2VvanNvbiA9IG5ldyBHZW9KU09OKCkud3JpdGVGZWF0dXJlT2JqZWN0KGV2ZW50LmZlYXR1cmUsIHtcbiAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb246IFwiRVBTRzo0MzI2XCIsXG4gICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5wcm9wcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKSxcbiAgICAgICAgICAgIGdlb2pzb246IGdlb2pzb24sXG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICBmb3JtYXQ6IG5ldyBHZW9KU09OKClcbiAgICAgICAgICB9XG4gICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9kcmF3LCBwYXJhbXMpO1xuICAgICAgICAgIHRoaXMucHJvcHMuYWRkRmVhdHVyZShnZW9qc29uKVxuICAgICAgICAgIHRoaXMucHJvcHMuY291bnRFZGl0b3JJZCgpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbih0aGlzLmludGVyYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIiAmJiB0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XG4gICAgICB0aGlzLmludGVyYWN0aW9uID0gW107XG4gICAgICB0aGlzLmludGVyYWN0aW9uLnB1c2gobmV3IFNlbGVjdCh7XG4gICAgICAgIGxheWVyczogW3RoaXMucHJvcHMuZWRpdG9yTGF5ZXJdLFxuICAgICAgICBoaXRUb2xlcmFuY2U6IDIwXG4gICAgICB9KSk7XG4gICAgICB0aGlzLmludGVyYWN0aW9uLnB1c2gobmV3IE1vZGlmeSh7XG4gICAgICAgIGZlYXR1cmVzOiB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZSA/IG5ldyBDb2xsZWN0aW9uKFt0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZV0pIDogbmV3IENvbGxlY3Rpb24oW25ldyBGZWF0dXJlKCldKSxcbiAgICAgICAgLy8gc291cmNlOiB0aGlzLnByb3BzLmVkaXRvckxheWVyLmdldFNvdXJjZSgpLFxuICAgICAgICBwaXhlbFRvbGVyYW5jZTogMjBcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuaW50ZXJhY3Rpb25bMF0ub24oJ3NlbGVjdCcsIChlKSA9PiB7XG4gICAgICAgIGxldCBmZWF0dXJlID0gZS5zZWxlY3RlZFswXTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRGZWF0dXJlOiBmZWF0dXJlfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW50ZXJhY3Rpb25bMV0ub24oJ21vZGlmeWVuZCcsIChlKSA9PiB7XG4gICAgICAgIGxldCBmZWF0dXJlID0gZS5mZWF0dXJlcy5nZXRBcnJheSgpWzBdO1xuICAgICAgICBsZXQgZ2VvanNvbjtcbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSBpbnN0YW5jZW9mIENpcmNsZSkgeyAvL3R1cm4gQ2lyY2xlIGludG8gdmFsaWQgR2VvSlNPTlxuICAgICAgICAgIGxldCBnZW9tZXRyeSA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5jbG9uZSgpLnRyYW5zZm9ybShcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKTtcbiAgICAgICAgICBsZXQgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgbGV0IHJhZGl1cyA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICBsZXQgcmVhbFJhZGl1cyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShldmVudC5mZWF0dXJlLmdldEdlb21ldHJ5KCkpLnJhd1ZhbHVlO1xuICAgICAgICAgIGdlb2pzb24gPSB7XG4gICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNlbnRlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgZWRpdG9ySWQ6IGZlYXR1cmUuZ2V0KCdlZGl0b3JJZCcpLFxuICAgICAgICAgICAgICBlbGVtZW50SWQ6IGZlYXR1cmUuZ2V0KCdlbGVtZW50SWQnKSxcbiAgICAgICAgICAgICAgbG9jc3R5bGU6IGZlYXR1cmUuZ2V0KCdhY3RpdmVTdHlsZScpLFxuICAgICAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcbiAgICAgICAgICAgICAgcmVhbFJhZGl1czogcmVhbFJhZGl1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBnZW9qc29uID0gbmV3IEdlb0pTT04oKS53cml0ZUZlYXR1cmVPYmplY3QoZmVhdHVyZSwge1xuICAgICAgICAgICAgZGF0YVByb2plY3Rpb246IFwiRVBTRzo0MzI2XCIsXG4gICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogXCJFUFNHOjM4NTdcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgc291cmNlOiB0aGlzLnByb3BzLmVkaXRvckxheWVyLmdldFNvdXJjZSgpLFxuICAgICAgICAgIGdlb2pzb246IGdlb2pzb24sXG4gICAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgICAgZm9ybWF0OiBuZXcgR2VvSlNPTigpXG4gICAgICAgIH07XG4gICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19lZGl0b3JfbW9kaWZ5LCBwYXJhbXMpO1xuICAgICAgICB0aGlzLnByb3BzLm1vZGlmeUZlYXR1cmUoZ2VvanNvbik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvblswXSk7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMV0pO1xuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XG4gICAgfVxuICAgIGxldCBlbGVtZW50cyA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZWxlbWVudHMgJiYgdGhpcy5wcm9wcy5lbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBlbGVtZW50cyA9IHRoaXMucHJvcHMuZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCBjb2xvciwgc3R5bGVUcmlnZ2VyTGFiZWw7XG4gICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1tlbGVtZW50LnN0eWxlSWRdO1xuICAgICAgICBsZXQgc3R5bGVEYXRhID0gbG9jc3R5bGUubG9jU3R5bGVBcnI7XG4gICAgICAgIGxldCBzdHlsZVR5cGUgPSBzdHlsZURhdGEgPyBzdHlsZURhdGEuc3R5bGV0eXBlIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIGlmIChzdHlsZURhdGEgJiYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSkge1xuICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPEM0Z1N0YXJib2FyZFN0eWxlIHRvb2x0aXA9e2VsZW1lbnQubmFtZX0gc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gc3R5bGVJZD17ZWxlbWVudC5zdHlsZUlkfS8+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHN0eWxvciA9IGxvY3N0eWxlLnN0eWxlICYmIGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIikgPyBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpOiBudWxsO1xuICAgICAgICAgIGxldCBmZWF0dXJlU3R5bGUgPSBBcnJheS5pc0FycmF5KHN0eWxvcikgPyBzdHlsb3JbMF06IHN0eWxvcjtcbiAgICAgICAgICBpZiAoZmVhdHVyZVN0eWxlICYmIGZlYXR1cmVTdHlsZS5nZXRGaWxsKCkgJiYgZmVhdHVyZVN0eWxlLmdldFN0cm9rZSgpKSB7XG4gICAgICAgICAgICBjb2xvciA9IGZlYXR1cmVTdHlsZS5nZXRGaWxsKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0eWxlRGF0YSAmJiBzdHlsZURhdGEuZmlsbGNvbG9yICYmIHN0eWxlRGF0YS5zdHJva2Vjb2xvcikge1xuICAgICAgICAgICAgY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZpbGxjb2xvclswXSwgc3R5bGVEYXRhLmZpbGxjb2xvclsxXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiB0aXRsZT17ZWxlbWVudC5uYW1lfSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1sb2NzdHlsZVwifSBzdHlsZT17e1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIiA6IGNvbG9yXG4gICAgICAgICAgfX0vPjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuICg8YnV0dG9uIGtleT17ZWxlbWVudC5pZH0gc3R5bGU9e3toZWlnaHQ6IFwiMzJweFwiLCB3aWR0aDogXCIzMnB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9Pnt0aGlzLnNldFN0YXRlKHthY3RpdmVFbGVtZW50OiBlbGVtZW50LmlkLCBhY3RpdmVTdHlsZTogZWxlbWVudC5zdHlsZUlkfSl9fT5cbiAgICAgICAgICB7c3R5bGVUcmlnZ2VyTGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPilcbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgbGV0IGN1c3RvbUJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKFwiTGluZVN0cmluZ1BvbHlnb25cIi5pbmNsdWRlcyh0aGlzLnByb3BzLm1vZGUpKSB7XG4gICAgICBsZXQgZnJlZWhhbmRDbGFzcyA9IFwiYzRnLWVkaXRvci12aWV3IFwiO1xuICAgICAgZnJlZWhhbmRDbGFzcyArPSB0aGlzLnN0YXRlLmZyZWVoYW5kID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiO1xuICAgICAgY3VzdG9tQnV0dG9uID0gKDxhIGNsYXNzTmFtZT17ZnJlZWhhbmRDbGFzc30gdGl0bGU9e3RoaXMucHJvcHMubGFuZy5FRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkR9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMuY2hhbmdlRnJlZWhhbmQoKX19Pnt0aGlzLnByb3BzLmxhbmcuRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EfTwvYT4pO1xuICAgIH1cbiAgICBsZXQgYXJyRm9ybUVkaXRvclZhcnMgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInNlbGVjdFwiKSB7XG4gICAgICBjdXN0b21CdXR0b24gPSAoPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICA8YnV0dG9uIHRpdGxlPXt0aGlzLnByb3BzLmxhbmcuRURJVE9SX0ZFQVRVUkVfREVMRVRFfSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1mZWF0dXJlLWRlbGV0ZSBcIiArICh0aGlzLnN0YXRlLnNlbGVjdE1vZGUgPT09IFwicmVtb3ZlXCIgPyBcImM0Zy1hY3RpdmVcIjogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMucmVtb3ZlQWN0aXZlRmVhdHVyZSgpfX0vPlxuICAgICAgPC9kaXY+KTtcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wcm9wcy5lZGl0b3JWYXJzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmVkaXRvclZhcnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgZWRpdG9yVmFyID0gdGhpcy5wcm9wcy5lZGl0b3JWYXJzW2ldO1xuICAgICAgICAgIGlmIChlZGl0b3JWYXIuY2FwdGlvbiAmJiBlZGl0b3JWYXIua2V5KSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZS5nZXQoZWRpdG9yVmFyLmtleSkgPyB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZS5nZXQoZWRpdG9yVmFyLmtleSkgOiBcIlwiO1xuICAgICAgICAgICAgYXJyRm9ybUVkaXRvclZhcnMucHVzaChcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci12YXJzLWlucHV0XCJ9IGtleT17aX0gb25TdWJtaXQ9eyhldmVudCkgPT4ge2V2ZW50LnByZXZlbnREZWZhdWx0KCl9fT5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2VkaXRvclZhci5jYXB0aW9ufTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ZhbHVlfSBuYW1lPXtlZGl0b3JWYXIua2V5fSBvbkNoYW5nZT17KGV2ZW50KT0+e3RoaXMuaGFuZGxlVmFyQ2hhbmdlKGV2ZW50KX19Lz5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtjdXN0b21CdXR0b259XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1lbGVtZW50LXNlbGVjdGlvblwifT5cbiAgICAgICAgICAgIHtlbGVtZW50c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItdmFyc1wifT5cbiAgICAgICAgICB7YXJyRm9ybUVkaXRvclZhcnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICByZXNldEludGVyYWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmludGVyYWN0aW9uKSB7IC8vb25seSBvbmUgZHJhd2ludGVyYWN0aW9uIGF0IGEgdGltZVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5pbnRlcmFjdGlvbikpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmludGVyYWN0aW9uWzBdKTtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmludGVyYWN0aW9uWzFdKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW1vdmVBY3RpdmVGZWF0dXJlICgpIHtcbiAgICBsZXQgZ2VvanNvbiA9IG5ldyBHZW9KU09OKCkud3JpdGVGZWF0dXJlT2JqZWN0KHRoaXMuc3RhdGUuc2VsZWN0ZWRGZWF0dXJlLCB7XG4gICAgICBkYXRhUHJvamVjdGlvbjogXCJFUFNHOjQzMjZcIixcbiAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLnJlbW92ZUZlYXR1cmUoZ2VvanNvbik7XG4gICAgbGV0IHNvdXJjZSA9IHRoaXMucHJvcHMuZWRpdG9yTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgc291cmNlLnJlbW92ZUZlYXR1cmUodGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBmYWxzZVxuICAgIH0pXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLmVsZW1lbnRzWzBdICYmIHByZXZQcm9wcy5tb2RlICE9PSB0aGlzLnByb3BzLm1vZGUpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUVsZW1lbnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudDogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZCxcbiAgICAgICAgICBhY3RpdmVTdHlsZTogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkXG4gICAgICAgIH0pO1xuICAgICAgICAvLyAgdGhpcy5zdGF0ZS5hY3RpdmVFbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZFxuICAgICAgICAvLyAgdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSA9IHRoaXMucHJvcHMuZWxlbWVudHNbMF0uc3R5bGVJZFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMucHJvcHMuZWxlbWVudHMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudDogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZCxcbiAgICAgICAgICBhY3RpdmVTdHlsZTogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLnN0YXRlLmFjdGl2ZUVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLmlkXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWN0aXZlU3R5bGUgPSB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLnN0eWxlSWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTZWxlY3RNb2RlKHN0cmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0TW9kZTogc3RyaW5nXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVWYXJDaGFuZ2UoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZS5zZXQobmFtZSwgdmFsdWUpO1xuICAgIGxldCBnZW9qc29uID0gbmV3IEdlb0pTT04oKS53cml0ZUZlYXR1cmVPYmplY3QodGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUsIHtcbiAgICAgIGRhdGFQcm9qZWN0aW9uOiBcIkVQU0c6NDMyNlwiLFxuICAgICAgZmVhdHVyZVByb2plY3Rpb246IFwiRVBTRzozODU3XCJcbiAgICB9KVxuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShnZW9qc29uKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcInNlbGVjdGVkRmVhdHVyZVwiIDogdGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmV9KTtcbiAgfVxuXG4gIGNoYW5nZUZyZWVoYW5kKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZnJlZWhhbmQ6ICF0aGlzLnN0YXRlLmZyZWVoYW5kXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZUpTT04oZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmZWF0dXJlczogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZFN0eWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGVudGVyRXZlbnQgKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBsYWJlbCBmb3IgaW50ZXJhY3Rpb24tdHJpZ2dlclxuICAgICAgICBsZXQgc3R5bGVUcmlnZ2VyTGFiZWwgPSBudWxsO1xuICAgICAgICBsZXQgbG9jc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5zdHlsZUlkXTtcbiAgICAgICAgbGV0IHN0eWxlRGF0YSA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyO1xuICAgICAgICBsZXQgc3R5bG9yID0gbG9jc3R5bGUuc3R5bGUgJiYgbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKSA/IGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIik6IG51bGw7XG4gICAgICAgIGxldCBzdHlsMHIgPSBBcnJheS5pc0FycmF5KHN0eWxvcikgPyBzdHlsb3JbMF06IHN0eWxvcjtcbiAgICAgICAgbGV0IHN0eWxlVHlwZSA9IHN0eWxlRGF0YSA/IHN0eWxlRGF0YS5zdHlsZXR5cGUgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgbGV0IHRvb2x0aXAgPSB0aGlzLnByb3BzLnRvb2x0aXAgfHwgXCJcIjtcbiAgICAgICAgaWYgKHN0eWxlRGF0YSAmJiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25fc3ZnXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVJY29uID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBpY29uU3JjO1xuICAgICAgICAgICAgaWYgKChzdHlsZURhdGEuaWNvbl9zcmMgJiYgc3R5bGVEYXRhLmljb25fc3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpIHx8IChzdHlsZURhdGEuc3ZnU3JjICYmIHN0eWxlRGF0YS5zdmdTcmMuaW5kZXhPZignLicpICE9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuaWNvbl9zcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLnN2Z1NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e2ljb25TcmN9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0gLz47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0eWwwcikge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZUltYWdlID0gc3R5bDByLmdldEltYWdlICYmIHR5cGVvZiBzdHlsMHIuZ2V0SW1hZ2UgPT09IFwiZnVuY3Rpb25cIiAmJiBzdHlsMHIuZ2V0SW1hZ2UoKSA/IHN0eWwwci5nZXRJbWFnZSgpOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZUltYWdlICYmIHN0eWxlSW1hZ2UuZ2V0U3JjKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e3N0eWxlSW1hZ2UuZ2V0U3JjKCl9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCkge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gdGFiSW5kZXg9ezF9IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRX0gdGl0bGU9e3Rvb2x0aXB9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gdGhpcy5lbnRlckV2ZW50KGV2ZW50KX0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9IHRpdGxlPXt0b29sdGlwfT57c3R5bGVJY29ufTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3NzQ2xhc3M7XG4gICAgICAgICAgICBzd2l0Y2ggKHN0eWxlVHlwZSkgeyAvLyAncG9pbnQnLCAnc3F1YXJlJywgJ3N0YXInLCAneCcsICdjcm9zcycsICd0cmlhbmdsZSdcbiAgICAgICAgICAgICAgICBjYXNlIFwicG9pbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3F1YXJlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9TUVVBUkU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFyXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfWDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNyb3NzXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9DUk9TUztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRyaWFuZ2xlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9UUklBTkdMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNvbG9yLCBib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGlmIChzdHlsMHIgJiYgc3R5bDByLmdldEZpbGwoKSAmJiBzdHlsMHIuZ2V0U3Ryb2tlKCkpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHN0eWwwci5nZXRGaWxsKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHN0eWwwci5nZXRTdHJva2UoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGVEYXRhICYmIHN0eWxlRGF0YS5maWxsY29sb3IgJiYgc3R5bGVEYXRhLnN0cm9rZWNvbG9yKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZpbGxjb2xvclswXSwgc3R5bGVEYXRhLmZpbGxjb2xvclsxXSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLnN0cm9rZWNvbG9yWzBdLCBzdHlsZURhdGEuc3Ryb2tlY29sb3JbMV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3R5bGVFbGVtZW50cyA9IHtcbiAgICAgICAgICAgICAgICBcIi0tdmFyLWNvbG9yXCIgOiBjb2xvcixcbiAgICAgICAgICAgICAgICBcIi0tdmFyLWJvcmRlcmNvbG9yXCIgOiBib3JkZXJjb2xvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dG9vbHRpcH0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDbGFzc30gc3R5bGU9e3N0eWxlRWxlbWVudHN9IHRpdGxlPXt0b29sdGlwfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZVRyaWdnZXJMYWJlbDtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiRWRpdG9yVmlldyIsInByb3BzIiwic2NvcGUiLCJzdGF0ZSIsImZyZWVoYW5kIiwic2VsZWN0ZWRGZWF0dXJlIiwiZmVhdHVyZXMiLCJhY3RpdmVFbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsImFjdGl2ZVN0eWxlIiwic3R5bGVJZCIsInNlbGVjdE1vZGUiLCJpbnRlcmFjdGlvbiIsImNoYW5nZUpTT04iLCJiaW5kIiwicmVzZXRJbnRlcmFjdGlvbiIsIm1vZGUiLCJhY3RpdmUiLCJnZW9tZXRyeSIsIlBvaW50IiwiTGluZVN0cmluZyIsIlBvbHlnb24iLCJmZWF0dXJlIiwiRmVhdHVyZSIsInNldCIsIkRyYXciLCJzb3VyY2UiLCJlZGl0b3JMYXllciIsImdldFNvdXJjZSIsInR5cGUiLCJzbmFwVG9sZXJhbmNlIiwic3R5bGUiLCJzdHlsZUZ1bmN0aW9uIiwib24iLCJldmVudCIsImVkaXRvcklkIiwiZ2VvanNvbiIsImdldEdlb21ldHJ5IiwiY2xvbmUiLCJ0cmFuc2Zvcm0iLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJyYWRpdXMiLCJnZXRSYWRpdXMiLCJyZWFsUmFkaXVzIiwidXRpbHMiLCJtZWFzdXJlR2VvbWV0cnkiLCJyYXdWYWx1ZSIsImNvb3JkaW5hdGVzIiwicHJvcGVydGllcyIsImVsZW1lbnRJZCIsImxvY3N0eWxlIiwiR2VvSlNPTiIsIndyaXRlRmVhdHVyZU9iamVjdCIsImRhdGFQcm9qZWN0aW9uIiwiZmVhdHVyZVByb2plY3Rpb24iLCJwYXJhbXMiLCJmb3JtYXQiLCJjYWxsSG9va0Z1bmN0aW9ucyIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsImhvb2tfZWRpdG9yX2RyYXciLCJhZGRGZWF0dXJlIiwiY291bnRFZGl0b3JJZCIsIm1hcENvbnRyb2xsZXIiLCJtYXAiLCJhZGRJbnRlcmFjdGlvbiIsInB1c2giLCJTZWxlY3QiLCJsYXllcnMiLCJoaXRUb2xlcmFuY2UiLCJNb2RpZnkiLCJDb2xsZWN0aW9uIiwicGl4ZWxUb2xlcmFuY2UiLCJlIiwic2VsZWN0ZWQiLCJzZXRTdGF0ZSIsImdldEFycmF5IiwiQ2lyY2xlIiwiZ2V0IiwiaG9va19lZGl0b3JfbW9kaWZ5IiwibW9kaWZ5RmVhdHVyZSIsImxlbmd0aCIsImVsZW1lbnQiLCJjb2xvciIsInN0eWxlVHJpZ2dlckxhYmVsIiwic3R5bGVEYXRhIiwiYXJyTG9jU3R5bGVzIiwibG9jU3R5bGVBcnIiLCJzdHlsZVR5cGUiLCJzdHlsZXR5cGUiLCJuYW1lIiwic3R5bG9yIiwiZmVhdHVyZVN0eWxlIiwiQXJyYXkiLCJpc0FycmF5IiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsImdldENvbG9yIiwiZmlsbGNvbG9yIiwic3Ryb2tlY29sb3IiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJoZWlnaHQiLCJ3aWR0aCIsImN1c3RvbUJ1dHRvbiIsImluY2x1ZGVzIiwiZnJlZWhhbmRDbGFzcyIsImxhbmciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJjaGFuZ2VGcmVlaGFuZCIsImFyckZvcm1FZGl0b3JWYXJzIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwicmVtb3ZlQWN0aXZlRmVhdHVyZSIsImkiLCJlZGl0b3JWYXJzIiwiaGFzT3duUHJvcGVydHkiLCJlZGl0b3JWYXIiLCJjYXB0aW9uIiwia2V5IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVZhckNoYW5nZSIsInJlbW92ZUludGVyYWN0aW9uIiwicmVtb3ZlRmVhdHVyZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiZmluZCIsInN0cmluZyIsInRhcmdldCIsIkNvbXBvbmVudCIsIkM0Z1N0YXJib2FyZFN0eWxlIiwid2hpY2giLCJjbGlja0V2ZW50Iiwic3R5bDByIiwidG9vbHRpcCIsInN0eWxlSWNvbiIsImljb25TcmMiLCJpY29uX3NyYyIsImluZGV4T2YiLCJzdmdTcmMiLCJzdHlsZUltYWdlIiwiZ2V0SW1hZ2UiLCJnZXRTcmMiLCJjc3NDb25zdGFudHMiLCJTVEFSQk9BUkRfTE9DU1RZTEUiLCJlbnRlckV2ZW50IiwiY3NzQ2xhc3MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfUE9JTlQiLCJTVEFSQk9BUkRfTE9DU1RZTEVfU1FVQVJFIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NUQVIiLCJTVEFSQk9BUkRfTE9DU1RZTEVfWCIsIlNUQVJCT0FSRF9MT0NTVFlMRV9DUk9TUyIsIlNUQVJCT0FSRF9MT0NTVFlMRV9UUklBTkdMRSIsImJvcmRlcmNvbG9yIiwic3R5bGVFbGVtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=