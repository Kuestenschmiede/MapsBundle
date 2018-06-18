(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ol/Observable.js"), require("ol/Overlay.js"), require("ol/array.js"), require("ol/dom.js"), require("ol/easing.js"), require("ol/events.js"), require("ol/extent.js"), require("ol/geom/Geometry.js"), require("ol/geom/Point.js"), require("ol/geom/SimpleGeometry.js"), require("ol/index.js"), require("ol/layer/Group.js"), require("ol/layer/Image.js"), require("ol/layer/Layer.js"), require("ol/layer/Tile.js"), require("ol/layer/Vector.js"), require("ol/math.js"), require("ol/proj.js"), require("ol/source/Cluster.js"), require("ol/source/Image.js"), require("ol/source/ImageWMS.js"), require("ol/source/TileImage.js"), require("ol/source/TileWMS.js"), require("ol/source/Vector.js"), require("ol/style/Icon.js"));
	else if(typeof define === 'function' && define.amd)
		define(["ol/Observable.js", "ol/Overlay.js", "ol/array.js", "ol/dom.js", "ol/easing.js", "ol/events.js", "ol/extent.js", "ol/geom/Geometry.js", "ol/geom/Point.js", "ol/geom/SimpleGeometry.js", "ol/index.js", "ol/layer/Group.js", "ol/layer/Image.js", "ol/layer/Layer.js", "ol/layer/Tile.js", "ol/layer/Vector.js", "ol/math.js", "ol/proj.js", "ol/source/Cluster.js", "ol/source/Image.js", "ol/source/ImageWMS.js", "ol/source/TileImage.js", "ol/source/TileWMS.js", "ol/source/Vector.js", "ol/style/Icon.js"], factory);
	else if(typeof exports === 'object')
		exports["olcs"] = factory(require("ol/Observable.js"), require("ol/Overlay.js"), require("ol/array.js"), require("ol/dom.js"), require("ol/easing.js"), require("ol/events.js"), require("ol/extent.js"), require("ol/geom/Geometry.js"), require("ol/geom/Point.js"), require("ol/geom/SimpleGeometry.js"), require("ol/index.js"), require("ol/layer/Group.js"), require("ol/layer/Image.js"), require("ol/layer/Layer.js"), require("ol/layer/Tile.js"), require("ol/layer/Vector.js"), require("ol/math.js"), require("ol/proj.js"), require("ol/source/Cluster.js"), require("ol/source/Image.js"), require("ol/source/ImageWMS.js"), require("ol/source/TileImage.js"), require("ol/source/TileWMS.js"), require("ol/source/Vector.js"), require("ol/style/Icon.js"));
	else
		root["olcs"] = factory(root["ol/Observable.js"], root["ol/Overlay.js"], root["ol/array.js"], root["ol/dom.js"], root["ol/easing.js"], root["ol/events.js"], root["ol/extent.js"], root["ol/geom/Geometry.js"], root["ol/geom/Point.js"], root["ol/geom/SimpleGeometry.js"], root["ol/index.js"], root["ol/layer/Group.js"], root["ol/layer/Image.js"], root["ol/layer/Layer.js"], root["ol/layer/Tile.js"], root["ol/layer/Vector.js"], root["ol/math.js"], root["ol/proj.js"], root["ol/source/Cluster.js"], root["ol/source/Image.js"], root["ol/source/ImageWMS.js"], root["ol/source/TileImage.js"], root["ol/source/TileWMS.js"], root["ol/source/Vector.js"], root["ol/style/Icon.js"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_ol_Observable_js__, __WEBPACK_EXTERNAL_MODULE_ol_Overlay_js__, __WEBPACK_EXTERNAL_MODULE_ol_array_js__, __WEBPACK_EXTERNAL_MODULE_ol_dom_js__, __WEBPACK_EXTERNAL_MODULE_ol_easing_js__, __WEBPACK_EXTERNAL_MODULE_ol_events_js__, __WEBPACK_EXTERNAL_MODULE_ol_extent_js__, __WEBPACK_EXTERNAL_MODULE_ol_geom_Geometry_js__, __WEBPACK_EXTERNAL_MODULE_ol_geom_Point_js__, __WEBPACK_EXTERNAL_MODULE_ol_geom_SimpleGeometry_js__, __WEBPACK_EXTERNAL_MODULE_ol_index_js__, __WEBPACK_EXTERNAL_MODULE_ol_layer_Group_js__, __WEBPACK_EXTERNAL_MODULE_ol_layer_Image_js__, __WEBPACK_EXTERNAL_MODULE_ol_layer_Layer_js__, __WEBPACK_EXTERNAL_MODULE_ol_layer_Tile_js__, __WEBPACK_EXTERNAL_MODULE_ol_layer_Vector_js__, __WEBPACK_EXTERNAL_MODULE_ol_math_js__, __WEBPACK_EXTERNAL_MODULE_ol_proj_js__, __WEBPACK_EXTERNAL_MODULE_ol_source_Cluster_js__, __WEBPACK_EXTERNAL_MODULE_ol_source_Image_js__, __WEBPACK_EXTERNAL_MODULE_ol_source_ImageWMS_js__, __WEBPACK_EXTERNAL_MODULE_ol_source_TileImage_js__, __WEBPACK_EXTERNAL_MODULE_ol_source_TileWMS_js__, __WEBPACK_EXTERNAL_MODULE_ol_source_Vector_js__, __WEBPACK_EXTERNAL_MODULE_ol_style_Icon_js__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.library.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/goog/asserts.js":
/*!*****************************!*\
  !*** ./src/goog/asserts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  assert(condition) {
    console.assert(condition);
  },
  assertInstanceof(object, type) {
    console.assert(object instanceof type);
  },
  fail() {
    console.fail();
  },
  assertNumber(number) {
    console.assert(typeof number === 'number');
  }
});


/***/ }),

/***/ "./src/index.library.js":
/*!******************************!*\
  !*** ./src/index.library.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olcs/OLCesium.js */ "./src/olcs/OLCesium.js");

/* harmony default export */ __webpack_exports__["default"] = (_olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/olcs/AbstractSynchronizer.js":
/*!******************************************!*\
  !*** ./src/olcs/AbstractSynchronizer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog/asserts.js");
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/index.js */ "ol/index.js");
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Observable.js */ "ol/Observable.js");
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_Observable_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/events.js */ "ol/events.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_events_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Group.js */ "ol/layer/Group.js");
/* harmony import */ var ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @module olcs.AbstractSynchronizer
 */






/**
 * @param {!ol.Map} map
 * @param {!Cesium.Scene} scene
 * @constructor
 * @template T
 * @struct
 * @abstract
 * @api
 */
var exports = function exports(map, scene) {
  /**
   * @type {!ol.Map}
   * @protected
   */
  this.map = map;

  /**
   * @type {ol.View}
   * @protected
   */
  this.view = map.getView();

  /**
   * @type {!Cesium.Scene}
   * @protected
   */
  this.scene = scene;

  /**
   * @type {ol.Collection.<ol.layer.Base>}
   * @protected
   */
  this.olLayers = map.getLayerGroup().getLayers();

  /**
   * @type {ol.layer.Group}
   */
  this.mapLayerGroup = map.getLayerGroup();

  /**
   * Map of OpenLayers layer ids (from ol.getUid) to the Cesium ImageryLayers.
   * Null value means, that we are unable to create equivalent layers.
   * @type {Object.<string, ?Array.<T>>}
   * @protected
   */
  this.layerMap = {};

  /**
   * Map of listen keys for OpenLayers layer layers ids (from ol.getUid).
   * @type {!Object.<string, Array<ol.EventsKey>>}
   * @protected
   */
  this.olLayerListenKeys = {};

  /**
   * Map of listen keys for OpenLayers layer groups ids (from ol.getUid).
   * @type {!Object.<string, !Array.<ol.EventsKey>>}
   * @private
   */
  this.olGroupListenKeys_ = {};
};

/**
 * Destroy all and perform complete synchronization of the layers.
 * @api
 */
exports.prototype.synchronize = function () {
  this.destroyAll();
  this.addLayers_(this.mapLayerGroup);
};

/**
 * Order counterparts using the same algorithm as the Openlayers renderer:
 * z-index then original sequence order.
 * @protected
 */
exports.prototype.orderLayers = function () {
  // Ordering logics is handled in subclasses.
};

/**
 * Add a layer hierarchy.
 * @param {ol.layer.Base} root
 * @private
 */
exports.prototype.addLayers_ = function (root) {
  var _this = this;

  /** @type {Array<olcsx.LayerWithParents>} */
  var fifo = [{
    layer: root,
    parents: []
  }];

  var _loop = function _loop() {
    var olLayerWithParents = fifo.splice(0, 1)[0];
    var olLayer = olLayerWithParents.layer;
    var olLayerId = ol_index_js__WEBPACK_IMPORTED_MODULE_1__["getUid"](olLayer).toString();
    _this.olLayerListenKeys[olLayerId] = [];
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assert(!_this.layerMap[olLayerId]);

    var cesiumObjects = null;
    if (olLayer instanceof ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_4___default.a) {
      _this.listenForGroupChanges_(olLayer);
      if (olLayer !== _this.mapLayerGroup) {
        cesiumObjects = _this.createSingleLayerCounterparts(olLayerWithParents);
      }
      if (!cesiumObjects) {
        olLayer.getLayers().forEach(function (l) {
          if (l) {
            var newOlLayerWithParents = {
              layer: l,
              parents: olLayer === _this.mapLayerGroup ? [] : [olLayerWithParents.layer].concat(olLayerWithParents.parents)
            };
            fifo.push(newOlLayerWithParents);
          }
        });
      }
    } else {
      cesiumObjects = _this.createSingleLayerCounterparts(olLayerWithParents);
      if (!cesiumObjects) {
        // keep an eye on the layers that once failed to be added (might work when the layer is updated)
        // for example when a source is set after the layer is added to the map
        var layerId = olLayerId;
        var layerWithParents = olLayerWithParents;
        var onLayerChange = function onLayerChange(e) {
          var cesiumObjs = _this.createSingleLayerCounterparts(layerWithParents);
          if (cesiumObjs) {
            // unsubscribe event listener
            layerWithParents.layer.un('change', onLayerChange, _this);
            _this.addCesiumObjects_(cesiumObjs, layerId, layerWithParents.layer);
            _this.orderLayers();
          }
        };
        _this.olLayerListenKeys[olLayerId].push(ol_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"](layerWithParents.layer, 'change', onLayerChange, _this));
      }
    }
    // add Cesium layers
    if (cesiumObjects) {
      _this.addCesiumObjects_(cesiumObjects, olLayerId, olLayer);
    }
  };

  while (fifo.length > 0) {
    _loop();
  }

  this.orderLayers();
};

/**
 * Add Cesium objects.
 * @param {Array.<T>} cesiumObjects
 * @param {string} layerId
 * @param {ol.layer.Base} layer
 * @private
 */
exports.prototype.addCesiumObjects_ = function (cesiumObjects, layerId, layer) {
  var _this2 = this;

  this.layerMap[layerId] = cesiumObjects;
  this.olLayerListenKeys[layerId].push(ol_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"](layer, 'change:zIndex', this.orderLayers, this));
  cesiumObjects.forEach(function (cesiumObject) {
    _this2.addCesiumObject(cesiumObject);
  });
};

/**
 * Remove and destroy a single layer.
 * @param {ol.layer.Layer} layer
 * @return {boolean} counterpart destroyed
 * @private
 */
exports.prototype.removeAndDestroySingleLayer_ = function (layer) {
  var _this3 = this;

  var uid = ol_index_js__WEBPACK_IMPORTED_MODULE_1__["getUid"](layer).toString();
  var counterparts = this.layerMap[uid];
  if (!!counterparts) {
    counterparts.forEach(function (counterpart) {
      _this3.removeSingleCesiumObject(counterpart, false);
      _this3.destroyCesiumObject(counterpart);
    });
    this.olLayerListenKeys[uid].forEach(ol_Observable_js__WEBPACK_IMPORTED_MODULE_2__["unByKey"]);
    delete this.olLayerListenKeys[uid];
  }
  delete this.layerMap[uid];
  return !!counterparts;
};

/**
 * Unlisten a single layer group.
 * @param {ol.layer.Group} group
 * @private
 */
exports.prototype.unlistenSingleGroup_ = function (group) {
  if (group === this.mapLayerGroup) {
    return;
  }
  var uid = ol_index_js__WEBPACK_IMPORTED_MODULE_1__["getUid"](group).toString();
  var keys = this.olGroupListenKeys_[uid];
  keys.forEach(function (key) {
    Object(ol_Observable_js__WEBPACK_IMPORTED_MODULE_2__["unByKey"])(key);
  });
  delete this.olGroupListenKeys_[uid];
  delete this.layerMap[uid];
};

/**
 * Remove layer hierarchy.
 * @param {ol.layer.Base} root
 * @private
 */
exports.prototype.removeLayer_ = function (root) {
  var _this4 = this;

  if (!!root) {
    (function () {
      var fifo = [root];
      while (fifo.length > 0) {
        var _olLayer = fifo.splice(0, 1)[0];
        var done = _this4.removeAndDestroySingleLayer_(_olLayer);
        if (_olLayer instanceof ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_4___default.a) {
          _this4.unlistenSingleGroup_(_olLayer);
          if (!done) {
            // No counterpart for the group itself so removing
            // each of the child layers.
            _olLayer.getLayers().forEach(function (l) {
              fifo.push(l);
            });
          }
        }
      }
    })();
  }
};

/**
 * Register listeners for single layer group change.
 * @param {ol.layer.Group} group
 * @private
 */
exports.prototype.listenForGroupChanges_ = function (group) {
  var uuid = ol_index_js__WEBPACK_IMPORTED_MODULE_1__["getUid"](group).toString();

  goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assert(this.olGroupListenKeys_[uuid] === undefined);

  var listenKeyArray = [];
  this.olGroupListenKeys_[uuid] = listenKeyArray;

  // only the keys that need to be relistened when collection changes
  var contentKeys = [];
  var listenAddRemove = function () {
    var _this5 = this;

    var collection = group.getLayers();
    if (collection) {
      contentKeys = [collection.on('add', function (event) {
        _this5.addLayers_(event.element);
      }), collection.on('remove', function (event) {
        _this5.removeLayer_(event.element);
      })];
      listenKeyArray.push.apply(listenKeyArray, contentKeys);
    }
  }.bind(this);

  listenAddRemove();

  listenKeyArray.push(group.on('change:layers', function (e) {
    contentKeys.forEach(function (el) {
      var i = listenKeyArray.indexOf(el);
      if (i >= 0) {
        listenKeyArray.splice(i, 1);
      }
      Object(ol_Observable_js__WEBPACK_IMPORTED_MODULE_2__["unByKey"])(el);
    });
    listenAddRemove();
  }));
};

/**
 * Destroys all the created Cesium objects.
 * @protected
 */
exports.prototype.destroyAll = function () {
  this.removeAllCesiumObjects(true); // destroy
  var objKey = void 0;
  for (objKey in this.olGroupListenKeys_) {
    var keys = this.olGroupListenKeys_[objKey];
    keys.forEach(ol_Observable_js__WEBPACK_IMPORTED_MODULE_2__["unByKey"]);
  }
  for (objKey in this.olLayerListenKeys) {
    this.olLayerListenKeys[objKey].forEach(ol_Observable_js__WEBPACK_IMPORTED_MODULE_2__["unByKey"]);
  }
  this.olGroupListenKeys_ = {};
  this.olLayerListenKeys = {};
  this.layerMap = {};
};

/**
 * Adds a single Cesium object to the collection.
 * @param {!T} object
 * @abstract
 * @protected
 */
exports.prototype.addCesiumObject = function (object) {};

/**
 * @param {!T} object
 * @abstract
 * @protected
 */
exports.prototype.destroyCesiumObject = function (object) {};

/**
 * Remove single Cesium object from the collection.
 * @param {!T} object
 * @param {boolean} destroy
 * @abstract
 * @protected
 */
exports.prototype.removeSingleCesiumObject = function (object, destroy) {};

/**
 * Remove all Cesium objects from the collection.
 * @param {boolean} destroy
 * @abstract
 * @protected
 */
exports.prototype.removeAllCesiumObjects = function (destroy) {};

/**
 * @param {olcsx.LayerWithParents} olLayerWithParents
 * @return {?Array.<T>}
 * @abstract
 * @protected
 */
exports.prototype.createSingleLayerCounterparts = function (olLayerWithParents) {};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/AutoRenderLoop.js":
/*!************************************!*\
  !*** ./src/olcs/AutoRenderLoop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @module olcs.AutoRenderLoop
 */
/**
 * @constructor
 * @param {olcs.OLCesium} ol3d
 * @struct
 */
var exports = function exports(ol3d) {
  this.ol3d = ol3d;
  this.scene_ = ol3d.getCesiumScene();
  this.canvas_ = this.scene_.canvas;
  this._boundNotifyRepaintRequired = this.notifyRepaintRequired.bind(this);

  this.repaintEventNames_ = ['mousemove', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'touchmove', 'pointerdown', 'pointerup', 'pointermove', 'wheel'];

  this.enable();
};

/**
 * Enable.
 */
exports.prototype.enable = function () {
  this.scene_.requestRenderMode = true;
  for (var _iterator = this.repaintEventNames_, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var repaintKey = _ref;

    this.canvas_.addEventListener(repaintKey, this._boundNotifyRepaintRequired, false);
  }

  window.addEventListener('resize', this._boundNotifyRepaintRequired, false);

  // Listen for changes on the layer group
  this.ol3d.getOlMap().getLayerGroup().on('change', this._boundNotifyRepaintRequired);
};

/**
 * Disable.
 */
exports.prototype.disable = function () {
  for (var _iterator2 = this.repaintEventNames_, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var repaintKey = _ref2;

    this.canvas_.removeEventListener(repaintKey, this._boundNotifyRepaintRequired, false);
  }

  window.removeEventListener('resize', this._boundNotifyRepaintRequired, false);

  this.ol3d.getOlMap().getLayerGroup().un('change', this._boundNotifyRepaintRequired);
  this.scene_.requestRenderMode = false;
};

/**
 * Restart render loop.
 * Force a restart of the render loop.
 * @api
 */
exports.prototype.restartRenderLoop = function () {
  this.notifyRepaintRequired();
};

exports.prototype.notifyRepaintRequired = function () {
  this.scene_.requestRender();
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/Camera.js":
/*!****************************!*\
  !*** ./src/olcs/Camera.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog/asserts.js");
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/Observable.js */ "ol/Observable.js");
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_Observable_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/events.js */ "ol/events.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_events_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/math.js */ "ol/math.js");
/* harmony import */ var ol_math_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_math_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/proj.js */ "ol/proj.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ol_proj_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.js */ "./src/olcs/core.js");
/**
 * @module olcs.Camera
 */







/**
 * This object takes care of additional 3d-specific properties of the view and
 * ensures proper synchronization with the underlying raw Cesium.Camera object.
 * @param {!Cesium.Scene} scene
 * @param {!ol.Map} map
 * @constructor
 * @api
 * @struct
 */
var exports = function exports(scene, map) {
  var _this = this;

  /**
   * @type {!Cesium.Scene}
   * @private
   */
  this.scene_ = scene;

  /**
   * @type {!Cesium.Camera}
   * @private
   */
  this.cam_ = scene.camera;

  /**
   * @type {!ol.Map}
   * @private
   */
  this.map_ = map;

  /**
   * @type {?ol.View}
   * @private
   */
  this.view_ = null;

  /**
   * @type {?ol.EventsKey}
   * @private
   */
  this.viewListenKey_ = null;

  /**
   * @type {!ol.TransformFunction}
   * @private
   */
  this.toLonLat_ = exports.identityProjection;

  /**
   * @type {!ol.TransformFunction}
   * @private
   */
  this.fromLonLat_ = exports.identityProjection;

  /**
   * 0 -- topdown, PI/2 -- the horizon
   * @type {number}
   * @private
   */
  this.tilt_ = 0;

  /**
   * @type {number}
   * @private
   */
  this.distance_ = 0;

  /**
   * @type {?Cesium.Matrix4}
   * @private
   */
  this.lastCameraViewMatrix_ = null;

  /**
   * This is used to discard change events on view caused by updateView method.
   * @type {boolean}
   * @private
   */
  this.viewUpdateInProgress_ = false;

  this.map_.on('change:view', function (e) {
    _this.setView_(_this.map_.getView());
  });
  this.setView_(this.map_.getView());
};

/**
 * @param {Array.<number>} input Input coordinate array.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension.
 * @return {Array.<number>} Input coordinate array (same array as input).
 */
exports.identityProjection = function (input, opt_output, opt_dimension) {
  var dim = opt_dimension || input.length;
  if (opt_output) {
    for (var i = 0; i < dim; ++i) {
      opt_output[i] = input[i];
    }
  }
  return input;
};

/**
 * @param {?ol.View} view New view to use.
 * @private
 */
exports.prototype.setView_ = function (view) {
  if (this.view_) {
    Object(ol_Observable_js__WEBPACK_IMPORTED_MODULE_1__["unByKey"])(this.viewListenKey_);
    this.viewListenKey_ = null;
  }

  this.view_ = view;
  if (view) {
    var toLonLat = ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["getTransform"](view.getProjection(), 'EPSG:4326');
    var fromLonLat = ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["getTransform"]('EPSG:4326', view.getProjection());
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assert(toLonLat && fromLonLat);

    this.toLonLat_ = toLonLat;
    this.fromLonLat_ = fromLonLat;

    this.viewListenKey_ = ol_events_js__WEBPACK_IMPORTED_MODULE_2__["listen"](view, 'propertychange', this.handleViewEvent_, this);

    this.readFromView();
  } else {
    this.toLonLat_ = exports.identityProjection;
    this.fromLonLat_ = exports.identityProjection;
  }
};

/**
 * @param {?} e
 * @private
 */
exports.prototype.handleViewEvent_ = function (e) {
  if (!this.viewUpdateInProgress_) {
    this.readFromView();
  }
};

/**
 * @param {number} heading In radians.
 * @api
 */
exports.prototype.setHeading = function (heading) {
  if (!this.view_) {
    return;
  }

  this.view_.setRotation(heading);
};

/**
 * @return {number|undefined} Heading in radians.
 * @api
 */
exports.prototype.getHeading = function () {
  if (!this.view_) {
    return undefined;
  }
  var rotation = this.view_.getRotation();
  return rotation || 0;
};

/**
 * @param {number} tilt In radians.
 * @api
 */
exports.prototype.setTilt = function (tilt) {
  this.tilt_ = tilt;
  this.updateCamera_();
};

/**
 * @return {number} Tilt in radians.
 * @api
 */
exports.prototype.getTilt = function () {
  return this.tilt_;
};

/**
 * @param {number} distance In meters.
 * @api
 */
exports.prototype.setDistance = function (distance) {
  this.distance_ = distance;
  this.updateCamera_();
  this.updateView();
};

/**
 * @return {number} Distance in meters.
 * @api
 */
exports.prototype.getDistance = function () {
  return this.distance_;
};

/**
 * Shortcut for ol.View.setCenter().
 * @param {!ol.Coordinate} center Same projection as the ol.View.
 * @api
 */
exports.prototype.setCenter = function (center) {
  if (!this.view_) {
    return;
  }
  this.view_.setCenter(center);
};

/**
 * Shortcut for ol.View.getCenter().
 * @return {ol.Coordinate|undefined} Same projection as the ol.View.
 * @api
 */
exports.prototype.getCenter = function () {
  if (!this.view_) {
    return undefined;
  }
  return this.view_.getCenter();
};

/**
 * Sets the position of the camera.
 * @param {!ol.Coordinate} position Same projection as the ol.View.
 * @api
 */
exports.prototype.setPosition = function (position) {
  if (!this.toLonLat_) {
    return;
  }
  var ll = this.toLonLat_(position);
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assert(ll);

  var carto = new Cesium.Cartographic(ol_math_js__WEBPACK_IMPORTED_MODULE_3__["toRadians"](ll[0]), ol_math_js__WEBPACK_IMPORTED_MODULE_3__["toRadians"](ll[1]), this.getAltitude());

  this.cam_.setView({
    destination: Cesium.Ellipsoid.WGS84.cartographicToCartesian(carto)
  });
  this.updateView();
};

/**
 * Calculates position under the camera.
 * @return {!ol.Coordinate|undefined} Same projection as the ol.View.
 * @api
 */
exports.prototype.getPosition = function () {
  if (!this.fromLonLat_) {
    return undefined;
  }
  var carto = Cesium.Ellipsoid.WGS84.cartesianToCartographic(this.cam_.position);

  var pos = this.fromLonLat_([ol_math_js__WEBPACK_IMPORTED_MODULE_3__["toDegrees"](carto.longitude), ol_math_js__WEBPACK_IMPORTED_MODULE_3__["toDegrees"](carto.latitude)]);
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assert(pos);
  return pos;
};

/**
 * @param {number} altitude In meters.
 * @api
 */
exports.prototype.setAltitude = function (altitude) {
  var carto = Cesium.Ellipsoid.WGS84.cartesianToCartographic(this.cam_.position);
  carto.height = altitude;
  this.cam_.position = Cesium.Ellipsoid.WGS84.cartographicToCartesian(carto);

  this.updateView();
};

/**
 * @return {number} Altitude in meters.
 * @api
 */
exports.prototype.getAltitude = function () {
  var carto = Cesium.Ellipsoid.WGS84.cartesianToCartographic(this.cam_.position);

  return carto.height;
};

/**
 * Updates the state of the underlying Cesium.Camera
 * according to the current values of the properties.
 * @private
 */
exports.prototype.updateCamera_ = function () {
  if (!this.view_ || !this.toLonLat_) {
    return;
  }
  var center = this.view_.getCenter();
  if (!center) {
    return;
  }
  var ll = this.toLonLat_(center);
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assert(ll);

  var carto = new Cesium.Cartographic(ol_math_js__WEBPACK_IMPORTED_MODULE_3__["toRadians"](ll[0]), ol_math_js__WEBPACK_IMPORTED_MODULE_3__["toRadians"](ll[1]));
  if (this.scene_.globe) {
    var height = this.scene_.globe.getHeight(carto);
    carto.height = height || 0;
  }

  var destination = Cesium.Ellipsoid.WGS84.cartographicToCartesian(carto);

  /** @type {Cesium.optionsOrientation} */
  var orientation = {
    pitch: this.tilt_ - Cesium.Math.PI_OVER_TWO,
    heading: -this.view_.getRotation(),
    roll: undefined
  };
  this.cam_.setView({
    destination: destination,
    orientation: orientation
  });

  this.cam_.moveBackward(this.distance_);

  this.checkCameraChange(true);
};

/**
 * Calculates the values of the properties from the current ol.View state.
 * @api
 */
exports.prototype.readFromView = function () {
  if (!this.view_ || !this.toLonLat_) {
    return;
  }
  var center = this.view_.getCenter();
  if (center === undefined || center === null) {
    return;
  }
  var ll = this.toLonLat_(center);
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assert(ll);

  var resolution = this.view_.getResolution();
  this.distance_ = this.calcDistanceForResolution(resolution || 0, ol_math_js__WEBPACK_IMPORTED_MODULE_3__["toRadians"](ll[1]));

  this.updateCamera_();
};

/**
 * Calculates the values of the properties from the current Cesium.Camera state.
 * Modifies the center, resolution and rotation properties of the view.
 * @api
 */
exports.prototype.updateView = function () {
  if (!this.view_ || !this.fromLonLat_) {
    return;
  }
  this.viewUpdateInProgress_ = true;

  // target & distance
  var ellipsoid = Cesium.Ellipsoid.WGS84;
  var scene = this.scene_;
  var target = _core_js__WEBPACK_IMPORTED_MODULE_5__["default"].pickCenterPoint(scene);

  var bestTarget = target;
  if (!bestTarget) {
    //TODO: how to handle this properly ?
    var globe = scene.globe;
    var carto = this.cam_.positionCartographic.clone();
    var height = globe.getHeight(carto);
    carto.height = height || 0;
    bestTarget = Cesium.Ellipsoid.WGS84.cartographicToCartesian(carto);
  }
  this.distance_ = Cesium.Cartesian3.distance(bestTarget, this.cam_.position);
  var bestTargetCartographic = ellipsoid.cartesianToCartographic(bestTarget);
  this.view_.setCenter(this.fromLonLat_([ol_math_js__WEBPACK_IMPORTED_MODULE_3__["toDegrees"](bestTargetCartographic.longitude), ol_math_js__WEBPACK_IMPORTED_MODULE_3__["toDegrees"](bestTargetCartographic.latitude)]));

  // resolution
  this.view_.setResolution(this.calcResolutionForDistance(this.distance_, bestTargetCartographic ? bestTargetCartographic.latitude : 0));

  /*
   * Since we are positioning the target, the values of heading and tilt
   * need to be calculated _at the target_.
   */
  if (target) {
    var pos = this.cam_.position;

    // normal to the ellipsoid at the target
    var targetNormal = new Cesium.Cartesian3();
    ellipsoid.geocentricSurfaceNormal(target, targetNormal);

    // vector from the target to the camera
    var targetToCamera = new Cesium.Cartesian3();
    Cesium.Cartesian3.subtract(pos, target, targetToCamera);
    Cesium.Cartesian3.normalize(targetToCamera, targetToCamera);

    // HEADING
    var up = this.cam_.up;
    var right = this.cam_.right;
    var normal = new Cesium.Cartesian3(-target.y, target.x, 0); // what is it?
    var heading = Cesium.Cartesian3.angleBetween(right, normal);
    var cross = Cesium.Cartesian3.cross(target, up, new Cesium.Cartesian3());
    var orientation = cross.z;

    this.view_.setRotation(orientation < 0 ? heading : -heading);

    // TILT
    var tiltAngle = Math.acos(Cesium.Cartesian3.dot(targetNormal, targetToCamera));
    this.tilt_ = isNaN(tiltAngle) ? 0 : tiltAngle;
  } else {
    // fallback when there is no target
    this.view_.setRotation(this.cam_.heading);
    this.tilt_ = -this.cam_.pitch + Math.PI / 2;
  }

  this.viewUpdateInProgress_ = false;
};

/**
 * Check if the underlying camera state has changed and ensure synchronization.
 * @param {boolean=} opt_dontSync Do not synchronize the view.
 */
exports.prototype.checkCameraChange = function (opt_dontSync) {
  var old = this.lastCameraViewMatrix_;
  var current = this.cam_.viewMatrix;

  if (!old || !Cesium.Matrix4.equalsEpsilon(old, current, 1e-5)) {
    this.lastCameraViewMatrix_ = current.clone();
    if (opt_dontSync !== true) {
      this.updateView();
    }
  }
};

/**
 * calculate the distance between camera and centerpoint based on the resolution and latitude value
 * @param {number} resolution Number of map units per pixel.
 * @param {number} latitude Latitude in radians.
 * @return {number} The calculated distance.
 * @api
 */
exports.prototype.calcDistanceForResolution = function (resolution, latitude) {
  var canvas = this.scene_.canvas;
  var fovy = this.cam_.frustum.fovy; // vertical field of view
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assert(!isNaN(fovy));
  var metersPerUnit = this.view_.getProjection().getMetersPerUnit();

  // number of "map units" visible in 2D (vertically)
  var visibleMapUnits = resolution * canvas.clientHeight;

  // The metersPerUnit does not take latitude into account, but it should
  // be lower with increasing latitude -- we have to compensate.
  // In 3D it is not possible to maintain the resolution at more than one point,
  // so it only makes sense to use the latitude of the "target" point.
  var relativeCircumference = Math.cos(Math.abs(latitude));

  // how many meters should be visible in 3D
  var visibleMeters = visibleMapUnits * metersPerUnit * relativeCircumference;

  // distance required to view the calculated length in meters
  //
  //  fovy/2
  //    |\
  //  x | \
  //    |--\
  // visibleMeters/2
  var requiredDistance = visibleMeters / 2 / Math.tan(fovy / 2);

  // NOTE: This calculation is not absolutely precise, because metersPerUnit
  // is a great simplification. It does not take ellipsoid/terrain into account.

  return requiredDistance;
};

/**
 * calculate the resolution based on a distance(camera to position) and latitude value
 * @param {number} distance
 * @param {number} latitude
 * @return {number} The calculated resolution.
 * @api
 */
exports.prototype.calcResolutionForDistance = function (distance, latitude) {
  // See the reverse calculation (calcDistanceForResolution) for details
  var canvas = this.scene_.canvas;
  var fovy = this.cam_.frustum.fovy;
  var metersPerUnit = this.view_.getProjection().getMetersPerUnit();

  var visibleMeters = 2 * distance * Math.tan(fovy / 2);
  var relativeCircumference = Math.cos(Math.abs(latitude));
  var visibleMapUnits = visibleMeters / metersPerUnit / relativeCircumference;
  var resolution = visibleMapUnits / canvas.clientHeight;

  return resolution;
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/FeatureConverter.js":
/*!**************************************!*\
  !*** ./src/olcs/FeatureConverter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_geom_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/geom/Geometry.js */ "ol/geom/Geometry.js");
/* harmony import */ var ol_geom_Geometry_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ol_geom_Geometry_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_style_Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/style/Icon.js */ "ol/style/Icon.js");
/* harmony import */ var ol_style_Icon_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_style_Icon_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source/Vector.js */ "ol/source/Vector.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_source_Cluster_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/Cluster.js */ "ol/source/Cluster.js");
/* harmony import */ var ol_source_Cluster_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_source_Cluster_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog/asserts.js");
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/index.js */ "ol/index.js");
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ol_index_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/events.js */ "ol/events.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ol_events_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ol_extent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/extent.js */ "ol/extent.js");
/* harmony import */ var ol_extent_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ol_extent_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/SimpleGeometry.js */ "ol/geom/SimpleGeometry.js");
/* harmony import */ var ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core.js */ "./src/olcs/core.js");
/* harmony import */ var _core_VectorLayerCounterpart_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/VectorLayerCounterpart.js */ "./src/olcs/core/VectorLayerCounterpart.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util.js */ "./src/olcs/util.js");
/**
 * @module olcs.FeatureConverter
 */













/**
 * Concrete base class for converting from OpenLayers3 vectors to Cesium
 * primitives.
 * Extending this class is possible provided that the extending class and
 * the library are compiled together by the closure compiler.
 * @param {!Cesium.Scene} scene Cesium scene.
 * @constructor
 * @api
 * @struct
 */
var exports = function exports(scene) {

  /**
   * @protected
   */
  this.scene = scene;

  /**
   * Bind once to have a unique function for using as a listener
   * @type {function(ol.source.Vector.Event)}
   * @private
   */
  this.boundOnRemoveOrClearFeatureListener_ = this.onRemoveOrClearFeature_.bind(this);
};

/**
 * @param {ol.source.Vector.Event} evt
 * @private
 */
exports.prototype.onRemoveOrClearFeature_ = function (evt) {
  var source = evt.target;
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assertInstanceof(source, ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_2___default.a);

  var cancellers = _util_js__WEBPACK_IMPORTED_MODULE_11__["default"].obj(source)['olcs_cancellers'];
  if (cancellers) {
    var feature = evt.feature;
    if (feature) {
      // remove
      var id = ol_index_js__WEBPACK_IMPORTED_MODULE_5__["getUid"](feature);
      var canceller = cancellers[id];
      if (canceller) {
        canceller();
        delete cancellers[id];
      }
    } else {
      // clear
      for (var key in cancellers) {
        if (cancellers.hasOwnProperty(key)) {
          cancellers[key]();
        }
      }
      _util_js__WEBPACK_IMPORTED_MODULE_11__["default"].obj(source)['olcs_cancellers'] = {};
    }
  }
};

/**
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature.
 * @param {!Cesium.Primitive|Cesium.Label|Cesium.Billboard} primitive
 * @protected
 */
exports.prototype.setReferenceForPicking = function (layer, feature, primitive) {
  primitive.olLayer = layer;
  primitive.olFeature = feature;
};

/**
 * Basics primitive creation using a color attribute.
 * Note that Cesium has 'interior' and outline geometries.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature.
 * @param {!ol.geom.Geometry} olGeometry OpenLayers geometry.
 * @param {!Cesium.Geometry} geometry
 * @param {!Cesium.Color} color
 * @param {number=} opt_lineWidth
 * @return {Cesium.Primitive}
 * @protected
 */
exports.prototype.createColoredPrimitive = function (layer, feature, olGeometry, geometry, color, opt_lineWidth) {
  var createInstance = function createInstance(geometry, color) {
    return new Cesium.GeometryInstance({
      // always update Cesium externs before adding a property
      geometry: geometry,
      attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(color)
      }
    });
  };

  var options = {
    // always update Cesium externs before adding a property
    flat: true, // work with all geometries
    renderState: {
      depthTest: {
        enabled: true
      }
    }
  };

  if (opt_lineWidth !== undefined) {
    if (!options.renderState) {
      options.renderState = {};
    }
    options.renderState.lineWidth = opt_lineWidth;
  }

  var instances = createInstance(geometry, color);

  var heightReference = this.getHeightReference(layer, feature, olGeometry);

  var primitive = void 0;

  if (heightReference == Cesium.HeightReference.CLAMP_TO_GROUND) {
    var ctor = instances.geometry.constructor;
    if (ctor && !ctor['createShadowVolume']) {
      return null;
    }
    primitive = new Cesium.GroundPrimitive({
      // always update Cesium externs before adding a property
      geometryInstances: instances
    });
  } else {
    var appearance = new Cesium.PerInstanceColorAppearance(options);
    primitive = new Cesium.Primitive({
      // always update Cesium externs before adding a property
      geometryInstances: instances,
      appearance: appearance
    });
  }

  this.setReferenceForPicking(layer, feature, primitive);
  return primitive;
};

/**
 * Return the fill or stroke color from a plain ol style.
 * @param {!ol.style.Style|ol.style.Text} style
 * @param {boolean} outline
 * @return {!Cesium.Color}
 * @protected
 */
exports.prototype.extractColorFromOlStyle = function (style, outline) {
  var fillColor = style.getFill() ? style.getFill().getColor() : null;
  var strokeColor = style.getStroke() ? style.getStroke().getColor() : null;

  var olColor = 'black';
  if (strokeColor && outline) {
    olColor = strokeColor;
  } else if (fillColor) {
    olColor = fillColor;
  }

  return _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].convertColorToCesium(olColor);
};

/**
 * Return the width of stroke from a plain ol style.
 * @param {!ol.style.Style|ol.style.Text} style
 * @return {number}
 * @protected
 */
exports.prototype.extractLineWidthFromOlStyle = function (style) {
  // Handling of line width WebGL limitations is handled by Cesium.
  var width = style.getStroke() ? style.getStroke().getWidth() : undefined;
  return width !== undefined ? width : 1;
};

/**
 * Create a primitive collection out of two Cesium geometries.
 * Only the OpenLayers style colors will be used.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature.
 * @param {!ol.geom.Geometry} olGeometry OpenLayers geometry.
 * @param {!Cesium.Geometry} fillGeometry
 * @param {!Cesium.Geometry} outlineGeometry
 * @param {!ol.style.Style} olStyle
 * @return {!Cesium.PrimitiveCollection}
 * @protected
 */
exports.prototype.wrapFillAndOutlineGeometries = function (layer, feature, olGeometry, fillGeometry, outlineGeometry, olStyle) {
  var fillColor = this.extractColorFromOlStyle(olStyle, false);
  var outlineColor = this.extractColorFromOlStyle(olStyle, true);

  var primitives = new Cesium.PrimitiveCollection();
  if (olStyle.getFill()) {
    var p1 = this.createColoredPrimitive(layer, feature, olGeometry, fillGeometry, fillColor);
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(!!p1);
    primitives.add(p1);
  }

  if (olStyle.getStroke()) {
    var width = this.extractLineWidthFromOlStyle(olStyle);
    var p2 = this.createColoredPrimitive(layer, feature, olGeometry, outlineGeometry, outlineColor, width);
    if (p2) {
      // Some outline geometries are not supported by Cesium in clamp to ground
      // mode. These primitives are skipped.
      primitives.add(p2);
    }
  }

  return primitives;
};

// Geometry converters
/**
 * Create a Cesium primitive if style has a text component.
 * Eventually return a PrimitiveCollection including current primitive.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature..
 * @param {!ol.geom.Geometry} geometry
 * @param {!ol.style.Style} style
 * @param {!Cesium.Primitive} primitive current primitive
 * @return {!Cesium.PrimitiveCollection}
 * @protected
 */
exports.prototype.addTextStyle = function (layer, feature, geometry, style, primitive) {
  var primitives = void 0;
  if (!(primitive instanceof Cesium.PrimitiveCollection)) {
    primitives = new Cesium.PrimitiveCollection();
    primitives.add(primitive);
  } else {
    primitives = primitive;
  }

  if (!style.getText()) {
    return primitives;
  }

  var text = /** @type {!ol.style.Text} */style.getText();
  var label = this.olGeometry4326TextPartToCesium(layer, feature, geometry, text);
  if (label) {
    primitives.add(label);
  }
  return primitives;
};

/**
 * Add a billboard to a Cesium.BillboardCollection.
 * Overriding this wrapper allows manipulating the billboard options.
 * @param {!Cesium.BillboardCollection} billboards
 * @param {!Cesium.optionsBillboardCollectionAdd} bbOptions
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature.
 * @param {!ol.geom.Geometry} geometry
 * @param {!ol.style.Style} style
 * @return {!Cesium.Billboard} newly created billboard
 * @api
 */
exports.prototype.csAddBillboard = function (billboards, bbOptions, layer, feature, geometry, style) {
  var bb = billboards.add(bbOptions);
  this.setReferenceForPicking(layer, feature, bb);
  return bb;
};

/**
 * Convert an OpenLayers circle geometry to Cesium.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature..
 * @param {!ol.geom.Circle} olGeometry OpenLayers circle geometry.
 * @param {!ol.ProjectionLike} projection
 * @param {!ol.style.Style} olStyle
 * @return {!Cesium.PrimitiveCollection} primitives
 * @api
 */
exports.prototype.olCircleGeometryToCesium = function (layer, feature, olGeometry, projection, olStyle) {

  olGeometry = _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].olGeometryCloneTo4326(olGeometry, projection);
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(olGeometry.getType() == 'Circle');

  // ol.Coordinate
  var center = olGeometry.getCenter();
  var height = center.length == 3 ? center[2] : 0.0;
  var point = center.slice();
  point[0] += olGeometry.getRadius();

  // Cesium
  center = _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].ol4326CoordinateToCesiumCartesian(center);
  point = _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].ol4326CoordinateToCesiumCartesian(point);

  // Accurate computation of straight distance
  var radius = Cesium.Cartesian3.distance(center, point);

  var fillGeometry = new Cesium.CircleGeometry({
    // always update Cesium externs before adding a property
    center: center,
    radius: radius,
    height: height
  });

  var outlineGeometry = new Cesium.CircleOutlineGeometry({
    // always update Cesium externs before adding a property
    center: center,
    radius: radius,
    extrudedHeight: height,
    height: height
  });

  var primitives = this.wrapFillAndOutlineGeometries(layer, feature, olGeometry, fillGeometry, outlineGeometry, olStyle);

  return this.addTextStyle(layer, feature, olGeometry, olStyle, primitives);
};

/**
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature..
 * @param {!number} width The width of the line.
 * @param {!Cesium.Color} color The color of the line.
 * @param {!Array<Cesium.Cartesian3>} positions The vertices of the line.
 * @return {!Cesium.GroundPrimitive} primitive
 */
exports.prototype.createStackedGroundCorridors = function (layer, feature, width, color, positions) {
  var previousDistance = 0;
  width = Math.max(3, width); // A <3px width is too small for ground primitives
  var geometryInstances = [];
  // A stack of ground lines with increasing width (in meters) are created.
  // Only one of these lines is displayed at any time giving a feeling of continuity.
  // The values for the distance and width factor are more or less arbitrary.
  // Applications can override this logics by subclassing the FeatureConverter class.
  var _arr = [1000, 4000, 16000, 64000, 254000, 1000000, 10000000];
  for (var _i = 0; _i < _arr.length; _i++) {
    var distance = _arr[_i];
    width *= 2.14;
    var geometryOptions = {
      // always update Cesium externs before adding a property
      positions: positions,
      width: width,
      vertexFormat: Cesium.VertexFormat.POSITION_ONLY
    };
    geometryInstances.push(new Cesium.GeometryInstance({
      geometry: new Cesium.CorridorGeometry(geometryOptions),
      attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(color),
        distanceDisplayCondition: new Cesium.DistanceDisplayConditionGeometryInstanceAttribute(previousDistance, distance - 1)
      }
    }));
    previousDistance = distance;
  }
  return new Cesium.GroundPrimitive({
    // always update Cesium externs before adding a property
    geometryInstances: geometryInstances
  });
};

/**
 * Convert an OpenLayers line string geometry to Cesium.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature..
 * @param {!ol.geom.LineString} olGeometry OpenLayers line string geometry.
 * @param {!ol.ProjectionLike} projection
 * @param {!ol.style.Style} olStyle
 * @return {!Cesium.PrimitiveCollection} primitives
 * @api
 */
exports.prototype.olLineStringGeometryToCesium = function (layer, feature, olGeometry, projection, olStyle) {

  olGeometry = _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].olGeometryCloneTo4326(olGeometry, projection);
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(olGeometry.getType() == 'LineString');

  var positions = _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].ol4326CoordinateArrayToCsCartesians(olGeometry.getCoordinates());
  var width = this.extractLineWidthFromOlStyle(olStyle);

  var outlinePrimitive = void 0;
  var heightReference = this.getHeightReference(layer, feature, olGeometry);

  if (heightReference == Cesium.HeightReference.CLAMP_TO_GROUND) {
    var color = this.extractColorFromOlStyle(olStyle, true);
    outlinePrimitive = this.createStackedGroundCorridors(layer, feature, width, color, positions);
  } else {
    var appearance = new Cesium.PolylineMaterialAppearance({
      // always update Cesium externs before adding a property
      material: this.olStyleToCesium(feature, olStyle, true)
    });
    var geometryOptions = {
      // always update Cesium externs before adding a property
      positions: positions,
      width: width,
      vertexFormat: appearance.vertexFormat
    };
    outlinePrimitive = new Cesium.Primitive({
      // always update Cesium externs before adding a property
      geometryInstances: new Cesium.GeometryInstance({
        geometry: new Cesium.PolylineGeometry(geometryOptions)
      }),
      appearance: appearance
    });
  }

  this.setReferenceForPicking(layer, feature, outlinePrimitive);

  return this.addTextStyle(layer, feature, olGeometry, olStyle, outlinePrimitive);
};

/**
 * Convert an OpenLayers polygon geometry to Cesium.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature..
 * @param {!ol.geom.Polygon} olGeometry OpenLayers polygon geometry.
 * @param {!ol.ProjectionLike} projection
 * @param {!ol.style.Style} olStyle
 * @return {!Cesium.PrimitiveCollection} primitives
 * @api
 */
exports.prototype.olPolygonGeometryToCesium = function (layer, feature, olGeometry, projection, olStyle) {

  olGeometry = _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].olGeometryCloneTo4326(olGeometry, projection);
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(olGeometry.getType() == 'Polygon');

  var fillGeometry = void 0,
      outlineGeometry = void 0;
  if (olGeometry.getCoordinates()[0].length == 5 && feature.getGeometry().get('olcs.polygon_kind') === 'rectangle') {
    // Create a rectangle according to the longitude and latitude curves
    var coordinates = olGeometry.getCoordinates()[0];
    // Extract the West, South, East, North coordinates
    var extent = ol_extent_js__WEBPACK_IMPORTED_MODULE_7__["boundingExtent"](coordinates);
    var rectangle = Cesium.Rectangle.fromDegrees(extent[0], extent[1], extent[2], extent[3]);

    // Extract the average height of the vertices
    var maxHeight = 0.0;
    if (coordinates[0].length == 3) {
      for (var c = 0; c < coordinates.length; c++) {
        maxHeight = Math.max(maxHeight, coordinates[c][2]);
      }
    }

    // Render the cartographic rectangle
    fillGeometry = new Cesium.RectangleGeometry({
      ellipsoid: Cesium.Ellipsoid.WGS84,
      rectangle: rectangle,
      height: maxHeight
    });

    outlineGeometry = new Cesium.RectangleOutlineGeometry({
      ellipsoid: Cesium.Ellipsoid.WGS84,
      rectangle: rectangle,
      height: maxHeight
    });
  } else {
    var rings = olGeometry.getLinearRings();
    // always update Cesium externs before adding a property
    var hierarchy = {};
    var polygonHierarchy = hierarchy;
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(rings.length > 0);

    for (var i = 0; i < rings.length; ++i) {
      var olPos = rings[i].getCoordinates();
      var positions = _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].ol4326CoordinateArrayToCsCartesians(olPos);
      goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(positions && positions.length > 0);
      if (i == 0) {
        hierarchy.positions = positions;
      } else {
        if (!hierarchy.holes) {
          hierarchy.holes = [];
        }
        hierarchy.holes.push({
          positions: positions
        });
      }
    }

    fillGeometry = new Cesium.PolygonGeometry({
      // always update Cesium externs before adding a property
      polygonHierarchy: polygonHierarchy,
      perPositionHeight: true
    });

    outlineGeometry = new Cesium.PolygonOutlineGeometry({
      // always update Cesium externs before adding a property
      polygonHierarchy: hierarchy,
      perPositionHeight: true
    });
  }

  var primitives = this.wrapFillAndOutlineGeometries(layer, feature, olGeometry, fillGeometry, outlineGeometry, olStyle);

  return this.addTextStyle(layer, feature, olGeometry, olStyle, primitives);
};

/**
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {ol.Feature} feature OpenLayers feature..
 * @param {!ol.geom.Geometry} geometry
 * @return {!Cesium.HeightReference}
 * @api
 */
exports.prototype.getHeightReference = function (layer, feature, geometry) {

  // Read from the geometry
  var altitudeMode = geometry.get('altitudeMode');

  // Or from the feature
  if (altitudeMode === undefined) {
    altitudeMode = feature.get('altitudeMode');
  }

  // Or from the layer
  if (altitudeMode === undefined) {
    altitudeMode = layer.get('altitudeMode');
  }

  var heightReference = Cesium.HeightReference.NONE;
  if (altitudeMode === 'clampToGround') {
    heightReference = Cesium.HeightReference.CLAMP_TO_GROUND;
  } else if (altitudeMode === 'relativeToGround') {
    heightReference = Cesium.HeightReference.RELATIVE_TO_GROUND;
  }

  return heightReference;
};

/**
 * Convert a point geometry to a Cesium BillboardCollection.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature..
 * @param {!ol.geom.Point} olGeometry OpenLayers point geometry.
 * @param {!ol.ProjectionLike} projection
 * @param {!ol.style.Style} style
 * @param {!ol.style.Image} imageStyle
 * @param {!Cesium.BillboardCollection} billboards
 * @param {function(!Cesium.Billboard)=} opt_newBillboardCallback Called when the new billboard is added.
 * @api
 */
exports.prototype.createBillboardFromImage = function (layer, feature, olGeometry, projection, style, imageStyle, billboards, opt_newBillboardCallback) {

  if (imageStyle instanceof ol_style_Icon_js__WEBPACK_IMPORTED_MODULE_1___default.a) {
    // make sure the image is scheduled for load
    imageStyle.load();
  }

  var image = imageStyle.getImage(1); // get normal density
  var isImageLoaded = function isImageLoaded(image) {
    return image.src != '' && image.naturalHeight != 0 && image.naturalWidth != 0 && image.complete;
  };
  var reallyCreateBillboard = function () {
    if (!image) {
      return;
    }
    if (!(image instanceof HTMLCanvasElement || image instanceof Image || image instanceof HTMLImageElement)) {
      return;
    }
    var center = olGeometry.getCoordinates();
    var position = _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].ol4326CoordinateToCesiumCartesian(center);
    var color = void 0;
    var opacity = imageStyle.getOpacity();
    if (opacity !== undefined) {
      color = new Cesium.Color(1.0, 1.0, 1.0, opacity);
    }

    var heightReference = this.getHeightReference(layer, feature, olGeometry);

    var bbOptions = /** @type {Cesium.optionsBillboardCollectionAdd} */{
      // always update Cesium externs before adding a property
      image: image,
      color: color,
      scale: imageStyle.getScale(),
      heightReference: heightReference,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      position: position
    };
    var bb = this.csAddBillboard(billboards, bbOptions, layer, feature, olGeometry, style);
    if (opt_newBillboardCallback) {
      opt_newBillboardCallback(bb);
    }
  }.bind(this);

  if (image instanceof Image && !isImageLoaded(image)) {
    // Cesium requires the image to be loaded
    var cancelled = false;
    var source = layer.getSource();
    var canceller = function canceller() {
      cancelled = true;
    };
    source.on(['removefeature', 'clear'], this.boundOnRemoveOrClearFeatureListener_);
    var cancellers = _util_js__WEBPACK_IMPORTED_MODULE_11__["default"].obj(source)['olcs_cancellers'];
    if (!cancellers) {
      cancellers = _util_js__WEBPACK_IMPORTED_MODULE_11__["default"].obj(source)['olcs_cancellers'] = {};
    }

    var fuid = ol_index_js__WEBPACK_IMPORTED_MODULE_5__["getUid"](feature);
    if (cancellers[fuid]) {
      // When the feature change quickly, a canceller may still be present so
      // we cancel it here to prevent creation of a billboard.
      cancellers[fuid]();
    }
    cancellers[fuid] = canceller;

    var listener = function listener() {
      if (!billboards.isDestroyed() && !cancelled) {
        // Create billboard if the feature is still displayed on the map.
        reallyCreateBillboard();
      }
    };

    ol_events_js__WEBPACK_IMPORTED_MODULE_6__["listenOnce"](image, 'load', listener);
  } else {
    reallyCreateBillboard();
  }
};

/**
 * Convert a point geometry to a Cesium BillboardCollection.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature..
 * @param {!ol.geom.Point} olGeometry OpenLayers point geometry.
 * @param {!ol.ProjectionLike} projection
 * @param {!ol.style.Style} style
 * @param {!Cesium.BillboardCollection} billboards
 * @param {function(!Cesium.Billboard)=} opt_newBillboardCallback Called when
 * the new billboard is added.
 * @return {Cesium.Primitive} primitives
 * @api
 */
exports.prototype.olPointGeometryToCesium = function (layer, feature, olGeometry, projection, style, billboards, opt_newBillboardCallback) {
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(olGeometry.getType() == 'Point');
  olGeometry = _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].olGeometryCloneTo4326(olGeometry, projection);

  var modelPrimitive = null;
  var imageStyle = style.getImage();
  if (imageStyle) {
    var olcsModelFunction = /** @type {function():olcsx.ModelStyle} */olGeometry.get('olcs_model') || feature.get('olcs_model');
    if (olcsModelFunction) {
      var olcsModel = olcsModelFunction();
      var options = /** @type {Cesium.ModelFromGltfOptions} */Object.assign({}, { scene: this.scene }, olcsModel.cesiumOptions);
      var model = Cesium.Model.fromGltf(options);
      modelPrimitive = new Cesium.PrimitiveCollection();
      modelPrimitive.add(model);
      if (olcsModel.debugModelMatrix) {
        modelPrimitive.add(new Cesium.DebugModelMatrixPrimitive({
          modelMatrix: olcsModel.debugModelMatrix
        }));
      }
    } else {
      this.createBillboardFromImage(layer, feature, olGeometry, projection, style, imageStyle, billboards, opt_newBillboardCallback);
    }
  }

  if (style.getText()) {
    return this.addTextStyle(layer, feature, olGeometry, style, modelPrimitive || new Cesium.Primitive());
  } else {
    return modelPrimitive;
  }
};

/**
 * Convert an OpenLayers multi-something geometry to Cesium.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature..
 * @param {!ol.geom.Geometry} geometry OpenLayers geometry.
 * @param {!ol.ProjectionLike} projection
 * @param {!ol.style.Style} olStyle
 * @param {!Cesium.BillboardCollection} billboards
 * @param {function(!Cesium.Billboard)=} opt_newBillboardCallback Called when
 * the new billboard is added.
 * @return {Cesium.Primitive} primitives
 * @api
 */
exports.prototype.olMultiGeometryToCesium = function (layer, feature, geometry, projection, olStyle, billboards, opt_newBillboardCallback) {
  var _this = this;

  // Do not reproject to 4326 now because it will be done later.

  // FIXME: would be better to combine all child geometries in one primitive
  // instead we create n primitives for simplicity.
  var accumulate = function accumulate(geometries, functor) {
    var primitives = new Cesium.PrimitiveCollection();
    geometries.forEach(function (geometry) {
      primitives.add(functor(layer, feature, geometry, projection, olStyle));
    });
    return primitives;
  };

  var subgeos = void 0;
  switch (geometry.getType()) {
    case 'MultiPoint':
      geometry = /** @type {!ol.geom.MultiPoint} */geometry;
      subgeos = geometry.getPoints();
      if (olStyle.getText()) {
        var primitives = new Cesium.PrimitiveCollection();
        subgeos.forEach(function (geometry) {
          goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(geometry);
          var result = _this.olPointGeometryToCesium(layer, feature, geometry, projection, olStyle, billboards, opt_newBillboardCallback);
          if (result) {
            primitives.add(result);
          }
        });
        return primitives;
      } else {
        subgeos.forEach(function (geometry) {
          goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(geometry);
          _this.olPointGeometryToCesium(layer, feature, geometry, projection, olStyle, billboards, opt_newBillboardCallback);
        });
        return null;
      }
    case 'MultiLineString':
      geometry = /** @type {!ol.geom.MultiLineString} */geometry;
      subgeos = geometry.getLineStrings();
      return accumulate(subgeos, this.olLineStringGeometryToCesium.bind(this));
    case 'MultiPolygon':
      geometry = /** @type {!ol.geom.MultiPolygon} */geometry;
      subgeos = geometry.getPolygons();
      return accumulate(subgeos, this.olPolygonGeometryToCesium.bind(this));
    default:
      goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].fail('Unhandled multi geometry type' + geometry.getType());
  }
};

/**
 * Convert an OpenLayers text style to Cesium.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature..
 * @param {!ol.geom.Geometry} geometry
 * @param {!ol.style.Text} style
 * @return {Cesium.LabelCollection} Cesium primitive
 * @api
 */
exports.prototype.olGeometry4326TextPartToCesium = function (layer, feature, geometry, style) {
  var text = style.getText();
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(text !== undefined);

  var labels = new Cesium.LabelCollection({ scene: this.scene });
  // TODO: export and use the text draw position from OpenLayers .
  // See src/ol/render/vector.js
  var extentCenter = ol_extent_js__WEBPACK_IMPORTED_MODULE_7__["getCenter"](geometry.getExtent());
  if (geometry instanceof ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_8___default.a) {
    var first = geometry.getFirstCoordinate();
    extentCenter[2] = first.length == 3 ? first[2] : 0.0;
  }
  var options = /** @type {Cesium.optionsLabelCollection} */{};

  options.position = _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].ol4326CoordinateToCesiumCartesian(extentCenter);

  options.text = text;

  options.heightReference = this.getHeightReference(layer, feature, geometry);

  var offsetX = style.getOffsetX();
  var offsetY = style.getOffsetY();
  if (offsetX != 0 && offsetY != 0) {
    var offset = new Cesium.Cartesian2(offsetX, offsetY);
    options.pixelOffset = offset;
  }

  options.font = style.getFont() || '10px sans-serif'; // OpenLayers default

  var labelStyle = undefined;
  if (style.getFill()) {
    options.fillColor = this.extractColorFromOlStyle(style, false);
    labelStyle = Cesium.LabelStyle.FILL;
  }
  if (style.getStroke()) {
    options.outlineWidth = this.extractLineWidthFromOlStyle(style);
    options.outlineColor = this.extractColorFromOlStyle(style, true);
    labelStyle = Cesium.LabelStyle.OUTLINE;
  }
  if (style.getFill() && style.getStroke()) {
    labelStyle = Cesium.LabelStyle.FILL_AND_OUTLINE;
  }
  options.style = labelStyle;

  var horizontalOrigin = void 0;
  switch (style.getTextAlign()) {
    case 'left':
      horizontalOrigin = Cesium.HorizontalOrigin.LEFT;
      break;
    case 'right':
      horizontalOrigin = Cesium.HorizontalOrigin.RIGHT;
      break;
    case 'center':
    default:
      horizontalOrigin = Cesium.HorizontalOrigin.CENTER;
  }
  options.horizontalOrigin = horizontalOrigin;

  if (style.getTextBaseline()) {
    var verticalOrigin = void 0;
    switch (style.getTextBaseline()) {
      case 'top':
        verticalOrigin = Cesium.VerticalOrigin.TOP;
        break;
      case 'middle':
        verticalOrigin = Cesium.VerticalOrigin.CENTER;
        break;
      case 'bottom':
        verticalOrigin = Cesium.VerticalOrigin.BOTTOM;
        break;
      case 'alphabetic':
        verticalOrigin = Cesium.VerticalOrigin.TOP;
        break;
      case 'hanging':
        verticalOrigin = Cesium.VerticalOrigin.BOTTOM;
        break;
      default:
        goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].fail('unhandled baseline ' + style.getTextBaseline());
    }
    options.verticalOrigin = verticalOrigin;
  }

  var l = labels.add(options);
  this.setReferenceForPicking(layer, feature, l);
  return labels;
};

/**
 * Convert an OpenLayers style to a Cesium Material.
 * @param {ol.Feature} feature OpenLayers feature..
 * @param {!ol.style.Style} style
 * @param {boolean} outline
 * @return {Cesium.Material}
 * @api
 */
exports.prototype.olStyleToCesium = function (feature, style, outline) {
  var fill = style.getFill();
  var stroke = style.getStroke();
  if (outline && !stroke || !outline && !fill) {
    return null; // FIXME use a default style? Developer error?
  }

  var color = outline ? stroke.getColor() : fill.getColor();
  color = _core_js__WEBPACK_IMPORTED_MODULE_9__["default"].convertColorToCesium(color);

  if (outline && stroke.getLineDash()) {
    return Cesium.Material.fromType('Stripe', {
      // always update Cesium externs before adding a property
      horizontal: false,
      repeat: 500, // TODO how to calculate this?
      evenColor: color,
      oddColor: new Cesium.Color(0, 0, 0, 0) // transparent
    });
  } else {
    return Cesium.Material.fromType('Color', {
      // always update Cesium externs before adding a property
      color: color
    });
  }
};

/**
 * Compute OpenLayers plain style.
 * Evaluates style function, blend arrays, get default style.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature
 * @param {ol.StyleFunction|undefined} fallbackStyleFunction
 * @param {number} resolution
 * @return {Array.<!ol.style.Style>} null if no style is available
 * @api
 */
exports.prototype.computePlainStyle = function (layer, feature, fallbackStyleFunction, resolution) {
  /**
   * @type {ol.FeatureStyleFunction|undefined}
   */
  var featureStyleFunction = feature.getStyleFunction();

  /**
   * @type {ol.style.Style|Array.<ol.style.Style>}
   */
  var style = null;

  if (featureStyleFunction) {
    style = featureStyleFunction.call(feature, resolution);
  }

  if (!style && fallbackStyleFunction) {
    style = fallbackStyleFunction(feature, resolution);
  }

  if (!style) {
    // The feature must not be displayed
    return null;
  }

  // FIXME combine materials as in cesium-materials-pack?
  // then this function must return a custom material
  // More simply, could blend the colors like described in
  // http://en.wikipedia.org/wiki/Alpha_compositing
  return Array.isArray(style) ? style : [style];
};

/**
 * @protected
 * @param {!ol.Feature} feature
 * @param {!ol.style.Style} style
 * @param {!ol.geom.Geometry=} opt_geom Geometry to be converted.
 * @return {ol.geom.Geometry|undefined}
 */
exports.prototype.getGeometryFromFeature = function (feature, style, opt_geom) {
  if (opt_geom) {
    return opt_geom;
  }

  var geom3d = /** @type {!ol.geom.Geometry} */feature.get('olcs.3d_geometry');
  if (geom3d && geom3d instanceof ol_geom_Geometry_js__WEBPACK_IMPORTED_MODULE_0___default.a) {
    return geom3d;
  }

  if (style) {
    var geomFuncRes = style.getGeometryFunction()(feature);
    if (geomFuncRes instanceof ol_geom_Geometry_js__WEBPACK_IMPORTED_MODULE_0___default.a) {
      return geomFuncRes;
    }
  }

  return feature.getGeometry();
};

/**
 * Convert one OpenLayers feature up to a collection of Cesium primitives.
 * @param {ol.layer.Vector|ol.layer.Image} layer
 * @param {!ol.Feature} feature OpenLayers feature.
 * @param {!ol.style.Style} style
 * @param {!olcsx.core.OlFeatureToCesiumContext} context
 * @param {!ol.geom.Geometry=} opt_geom Geometry to be converted.
 * @return {Cesium.Primitive} primitives
 * @api
 */
exports.prototype.olFeatureToCesium = function (layer, feature, style, context, opt_geom) {
  var _this2 = this;

  var geom = this.getGeometryFromFeature(feature, style, opt_geom);

  if (!geom) {
    // OpenLayers features may not have a geometry
    // See http://geojson.org/geojson-spec.html#feature-objects
    return null;
  }

  var proj = context.projection;
  var newBillboardAddedCallback = function newBillboardAddedCallback(bb) {
    var featureBb = context.featureToCesiumMap[ol_index_js__WEBPACK_IMPORTED_MODULE_5__["getUid"](feature)];
    if (featureBb instanceof Array) {
      featureBb.push(bb);
    } else {
      context.featureToCesiumMap[ol_index_js__WEBPACK_IMPORTED_MODULE_5__["getUid"](feature)] = [bb];
    }
  };

  switch (geom.getType()) {
    case 'GeometryCollection':
      var primitives = new Cesium.PrimitiveCollection();
      var collection = /** @type {!ol.geom.GeometryCollection} */geom;
      // TODO: use getGeometriesArray() instead
      collection.getGeometries().forEach(function (geom) {
        if (geom) {
          var prims = _this2.olFeatureToCesium(layer, feature, style, context, geom);
          if (prims) {
            primitives.add(prims);
          }
        }
      });
      return primitives;
    case 'Point':
      geom = /** @type {!ol.geom.Point} */geom;
      var bbs = context.billboards;
      var result = this.olPointGeometryToCesium(layer, feature, geom, proj, style, bbs, newBillboardAddedCallback);
      if (!result) {
        // no wrapping primitive
        return null;
      } else {
        return result;
      }
    case 'Circle':
      geom = /** @type {!ol.geom.Circle} */geom;
      return this.olCircleGeometryToCesium(layer, feature, geom, proj, style);
    case 'LineString':
      geom = /** @type {!ol.geom.LineString} */geom;
      return this.olLineStringGeometryToCesium(layer, feature, geom, proj, style);
    case 'Polygon':
      geom = /** @type {!ol.geom.Polygon} */geom;
      return this.olPolygonGeometryToCesium(layer, feature, geom, proj, style);
    case 'MultiPoint':
    case 'MultiLineString':
    case 'MultiPolygon':
      var result2 = this.olMultiGeometryToCesium(layer, feature, geom, proj, style, context.billboards, newBillboardAddedCallback);
      if (!result2) {
        // no wrapping primitive
        return null;
      } else {
        return result2;
      }
    case 'LinearRing':
      throw new Error('LinearRing should only be part of polygon.');
    default:
      throw new Error('Ol geom type not handled : ' + geom.getType());
  }
};

/**
 * Convert an OpenLayers vector layer to Cesium primitive collection.
 * For each feature, the associated primitive will be stored in
 * `featurePrimitiveMap`.
 * @param {!(ol.layer.Vector|ol.layer.Image)} olLayer
 * @param {!ol.View} olView
 * @param {!Object.<number, !Cesium.Primitive>} featurePrimitiveMap
 * @return {!olcs.core.VectorLayerCounterpart}
 * @api
 */
exports.prototype.olVectorLayerToCesium = function (olLayer, olView, featurePrimitiveMap) {
  var proj = olView.getProjection();
  var resolution = olView.getResolution();

  if (resolution === undefined || !proj) {
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].fail('View not ready');
    // an assertion is not enough for closure to assume resolution and proj
    // are defined
    throw new Error('View not ready');
  }

  var source = olLayer.getSource();
  if (source instanceof ol_source_Cluster_js__WEBPACK_IMPORTED_MODULE_3___default.a) {
    source = source.getSource();
  }

  goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assertInstanceof(source, ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_2___default.a);
  var features = source.getFeatures();
  var counterpart = new _core_VectorLayerCounterpart_js__WEBPACK_IMPORTED_MODULE_10__["default"](proj, this.scene);
  var context = counterpart.context;
  for (var i = 0; i < features.length; ++i) {
    var feature = features[i];
    if (!feature) {
      continue;
    }
    /**
     * @type {ol.StyleFunction|undefined}
     */
    var layerStyle = olLayer.getStyleFunction();
    var styles = this.computePlainStyle(olLayer, feature, layerStyle, resolution);
    if (!styles || !styles.length) {
      // only 'render' features with a style
      continue;
    }

    /**
     * @type {Cesium.Primitive|null}
     */
    var primitives = null;
    for (var _i2 = 0; _i2 < styles.length; _i2++) {
      var prims = this.olFeatureToCesium(olLayer, feature, styles[_i2], context);
      if (prims) {
        if (!primitives) {
          primitives = prims;
        } else if (prims) {
          var _i3 = 0,
              prim = void 0;
          while (prim = prims.get(_i3)) {
            primitives.add(prim);
            _i3++;
          }
        }
      }
    }
    if (!primitives) {
      continue;
    }
    featurePrimitiveMap[ol_index_js__WEBPACK_IMPORTED_MODULE_5__["getUid"](feature)] = primitives;
    counterpart.getRootPrimitive().add(primitives);
  }

  return counterpart;
};

/**
 * Convert an OpenLayers feature to Cesium primitive collection.
 * @param {!(ol.layer.Vector|ol.layer.Image)} layer
 * @param {!ol.View} view
 * @param {!ol.Feature} feature
 * @param {!olcsx.core.OlFeatureToCesiumContext} context
 * @return {Cesium.Primitive}
 * @api
 */
exports.prototype.convert = function (layer, view, feature, context) {
  var proj = view.getProjection();
  var resolution = view.getResolution();

  if (resolution == undefined || !proj) {
    return null;
  }

  /**
   * @type {ol.StyleFunction|undefined}
   */
  var layerStyle = layer.getStyleFunction();

  var styles = this.computePlainStyle(layer, feature, layerStyle, resolution);

  if (!styles.length) {
    // only 'render' features with a style
    return null;
  }

  context.projection = proj;

  /**
   * @type {Cesium.Primitive|null}
   */
  var primitives = null;
  for (var i = 0; i < styles.length; i++) {
    var prims = this.olFeatureToCesium(layer, feature, styles[i], context);
    if (!primitives) {
      primitives = prims;
    } else if (prims) {
      var _i4 = 0,
          prim = void 0;
      while (prim = prims.get(_i4)) {
        primitives.add(prim);
        _i4++;
      }
    }
  }
  return primitives;
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/OLCesium.js":
/*!******************************!*\
  !*** ./src/olcs/OLCesium.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/geom/Point.js */ "ol/geom/Point.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog/asserts.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/proj.js */ "ol/proj.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_proj_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/events.js */ "ol/events.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_events_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.js */ "./src/olcs/util.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.js */ "./src/olcs/core.js");
/* harmony import */ var _AutoRenderLoop_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AutoRenderLoop.js */ "./src/olcs/AutoRenderLoop.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Camera.js */ "./src/olcs/Camera.js");
/* harmony import */ var _RasterSynchronizer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RasterSynchronizer.js */ "./src/olcs/RasterSynchronizer.js");
/* harmony import */ var _VectorSynchronizer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VectorSynchronizer.js */ "./src/olcs/VectorSynchronizer.js");
/* harmony import */ var _OverlaySynchronizer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OverlaySynchronizer.js */ "./src/olcs/OverlaySynchronizer.js");
/**
 * @module olcs.OLCesium
 */












/**
 * @param {!olcsx.OLCesiumOptions} options Options.
 * @constructor
 * @api
 * @struct
 */
var exports = function exports(options) {

  /**
   * @type {olcs.AutoRenderLoop}
   * @private
   */
  this.autoRenderLoop_ = null;

  /**
   * @type {!ol.Map}
   * @private
   */
  this.map_ = options.map;

  /**
   * @type {!function(): Cesium.JulianDate}
   * @private
   */
  this.time_ = options.time || function () {
    return Cesium.JulianDate.now();
  };

  /**
   * No change of the view projection.
   * @private
   */
  this.to4326Transform_ = ol_proj_js__WEBPACK_IMPORTED_MODULE_2__["getTransform"](this.map_.getView().getProjection(), 'EPSG:4326');

  /**
   * @type {number}
   * @private
   */
  this.resolutionScale_ = 1.0;

  /**
   * @type {number}
   * @private
   */
  this.canvasClientWidth_ = 0.0;

  /**
   * @type {number}
   * @private
   */
  this.canvasClientHeight_ = 0.0;

  /**
   * @type {boolean}
   * @private
   */
  this.resolutionScaleChanged_ = true; // force resize

  var fillArea = 'position:absolute;top:0;left:0;width:100%;height:100%;';

  /**
   * @type {!Element}
   * @private
   */
  this.container_ = document.createElement('DIV');
  var containerAttribute = document.createAttribute('style');
  containerAttribute.value = fillArea + 'visibility:hidden;';
  this.container_.setAttributeNode(containerAttribute);

  var targetElement = options.target || null;
  if (targetElement) {
    if (typeof targetElement === 'string') {
      targetElement = document.getElementById(targetElement);
    }
    targetElement.appendChild(this.container_);
  } else {
    var oc = this.map_.getViewport().querySelector('.ol-overlaycontainer');
    if (oc && oc.parentNode) {
      oc.parentNode.insertBefore(this.container_, oc);
    }
  }

  /**
   * Whether the Cesium container is placed over the ol map.
   * @type {boolean}
   * @private
   */
  this.isOverMap_ = !targetElement;

  if (this.isOverMap_ && options.stopOpenLayersEventsPropagation) {
    var overlayEvents = ['click', 'dblclick', 'mousedown', 'touchstart', 'MSPointerDown', 'pointerdown', 'mousewheel', 'wheel'];
    for (var i = 0, ii = overlayEvents.length; i < ii; ++i) {
      ol_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"](this.container_, overlayEvents[i], function (evt) {
        return evt.stopPropagation();
      });
    }
  }

  /**
   * @type {!HTMLCanvasElement}
   * @private
   */
  this.canvas_ = /** @type {!HTMLCanvasElement} */document.createElement('CANVAS');
  var canvasAttribute = document.createAttribute('style');
  canvasAttribute.value = fillArea;
  this.canvas_.setAttributeNode(canvasAttribute);

  if (_util_js__WEBPACK_IMPORTED_MODULE_4__["default"].supportsImageRenderingPixelated()) {
    // non standard CSS4
    this.canvas_.style['imageRendering'] = _util_js__WEBPACK_IMPORTED_MODULE_4__["default"].imageRenderingValue();
  }

  this.canvas_.oncontextmenu = function () {
    return false;
  };
  this.canvas_.onselectstart = function () {
    return false;
  };

  this.container_.appendChild(this.canvas_);

  /**
   * @type {boolean}
   * @private
   */
  this.enabled_ = false;

  /**
   * @type {!Array.<ol.interaction.Interaction>}
   * @private
   */
  this.pausedInteractions_ = [];

  /**
   * @type {?ol.layer.Group}
   * @private
   */
  this.hiddenRootGroup_ = null;

  var sceneOptions = options.sceneOptions !== undefined ? options.sceneOptions :
  /** @type {Cesium.SceneOptions} */{};
  sceneOptions.canvas = this.canvas_;
  sceneOptions.scene3DOnly = true;

  /**
   * @type {!Cesium.Scene}
   * @private
   */
  this.scene_ = new Cesium.Scene(sceneOptions);

  var sscc = this.scene_.screenSpaceCameraController;

  sscc.tiltEventTypes.push({
    'eventType': Cesium.CameraEventType.LEFT_DRAG,
    'modifier': Cesium.KeyboardEventModifier.SHIFT
  });

  sscc.tiltEventTypes.push({
    'eventType': Cesium.CameraEventType.LEFT_DRAG,
    'modifier': Cesium.KeyboardEventModifier.ALT
  });

  sscc.enableLook = false;

  this.scene_.camera.constrainedAxis = Cesium.Cartesian3.UNIT_Z;

  /**
   * @type {!olcs.Camera}
   * @private
   */
  this.camera_ = new _Camera_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.scene_, this.map_);

  /**
   * @type {!Cesium.Globe}
   * @private
   */
  this.globe_ = new Cesium.Globe(Cesium.Ellipsoid.WGS84);
  this.globe_.baseColor = Cesium.Color.WHITE;
  this.scene_.globe = this.globe_;
  this.scene_.skyAtmosphere = new Cesium.SkyAtmosphere();

  // The first layer of Cesium is special; using a 1x1 transparent image to workaround it.
  // See https://github.com/AnalyticalGraphicsInc/cesium/issues/1323 for details.
  var firstImageryProvider = new Cesium.SingleTileImageryProvider({
    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
    rectangle: Cesium.Rectangle.fromDegrees(0, 0, 1, 1) // the Rectangle dimensions are arbitrary
  });
  this.globe_.imageryLayers.addImageryProvider(firstImageryProvider, 0);

  this.dataSourceCollection_ = new Cesium.DataSourceCollection();
  this.dataSourceDisplay_ = new Cesium.DataSourceDisplay({
    scene: this.scene_,
    dataSourceCollection: this.dataSourceCollection_
  });

  var synchronizers = options.createSynchronizers ? options.createSynchronizers(this.map_, this.scene_, this.dataSourceCollection_) : [new _RasterSynchronizer_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.map_, this.scene_), new _VectorSynchronizer_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.map_, this.scene_), new _OverlaySynchronizer_js__WEBPACK_IMPORTED_MODULE_10__["default"](this.map_, this.scene_)];

  // Assures correct canvas size after initialisation
  this.handleResize_();

  for (var _i = synchronizers.length - 1; _i >= 0; --_i) {
    synchronizers[_i].synchronize();
  }

  if (this.isOverMap_) {
    // if in "stacked mode", hide everything except canvas (including credits)
    var credits = this.canvas_.nextElementSibling;
    if (credits) {
      credits.style.display = 'none';
    }
  }

  /**
   * Time of the last rendered frame, as returned by `performance.now()`.
   * @type {number}
   * @private
   */
  this.lastFrameTime_ = 0;

  /**
   * The identifier returned by `requestAnimationFrame`.
   * @type {number|undefined}
   * @private
   */
  this.renderId_ = undefined;

  /**
   * Target frame rate for the render loop.
   * @type {number}
   * @private
   */
  this.targetFrameRate_ = Number.POSITIVE_INFINITY;

  /**
   * If the Cesium render loop is being blocked.
   * @type {boolean}
   * @private
   */
  this.blockCesiumRendering_ = false;

  /**
   * If the warmup routine is active.
   * @type {boolean}
   * @private
   */
  this.warmingUp_ = false;

  /**
   * @type {ol.Feature}
   * @private
   */
  this.trackedFeature_ = null;

  /**
   * @type {Cesium.Entity}
   * @private
   */
  this.trackedEntity_ = null;

  /**
   * @type {Cesium.EntityView}
   * @private
   */
  this.entityView_ = null;

  /**
   * @type {boolean}
   * @private
   */
  this.needTrackedEntityUpdate_ = false;

  /**
   * @type {!Cesium.BoundingSphere}
   */
  this.boundingSphereScratch_ = new Cesium.BoundingSphere();

  var eventHelper = new Cesium.EventHelper();
  eventHelper.add(this.scene_.postRender, exports.prototype.updateTrackedEntity_, this);

  // Cesium has a mechanism to prevent the camera to go under the terrain.
  // Unfortunately, it is only active when all the terrain has been loaded, which:
  // - does not prevent the camera to sink under terrain anymore;
  // - introduce a jumping effect once all terrain has been loaded and the position of the camera is finally fixed.
  // The property below enables a workaround found in the Camptocamp Cesium fork.
  // See also https://github.com/AnalyticalGraphicsInc/cesium/issues/5999.
  Cesium.Camera.enableSuspendTerrainAdjustment = false;
};

Object.defineProperties(exports.prototype, {
  'trackedFeature': {
    'get': /** @this {olcs.OLCesium} */function get() {
      return this.trackedFeature_;
    },
    'set': /** @this {olcs.OLCesium} */function set(feature) {
      if (this.trackedFeature_ !== feature) {

        var scene = this.scene_;

        //Stop tracking
        if (!feature || !feature.getGeometry()) {
          this.needTrackedEntityUpdate_ = false;
          scene.screenSpaceCameraController.enableTilt = true;

          if (this.trackedEntity_) {
            this.dataSourceDisplay_.defaultDataSource.entities.remove(this.trackedEntity_);
          }
          this.trackedEntity_ = null;
          this.trackedFeature_ = null;
          this.entityView_ = null;
          scene.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
          return;
        }

        this.trackedFeature_ = feature;

        //We can't start tracking immediately, so we set a flag and start tracking
        //when the bounding sphere is ready (most likely next frame).
        this.needTrackedEntityUpdate_ = true;

        var to4326Transform = this.to4326Transform_;
        var toCesiumPosition = function toCesiumPosition() {
          var geometry = feature.getGeometry();
          goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].assertInstanceof(geometry, ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_0___default.a);
          var coo = geometry.getCoordinates();
          var coo4326 = to4326Transform(coo, undefined, coo.length);
          return _core_js__WEBPACK_IMPORTED_MODULE_5__["default"].ol4326CoordinateToCesiumCartesian(coo4326);
        };

        // Create an invisible point entity for tracking.
        // It is independant from the primitive/geometry created by the vector synchronizer.
        var options = {
          'position': new Cesium.CallbackProperty(function (time, result) {
            return toCesiumPosition();
          }, false),
          'point': {
            'pixelSize': 1,
            'color': Cesium.Color.TRANSPARENT
          }
        };

        this.trackedEntity_ = this.dataSourceDisplay_.defaultDataSource.entities.add(options);
      }
    }
  }
});

/**
 * Render the Cesium scene.
 * @private
 */
exports.prototype.render_ = function () {
  // if a call to `requestAnimationFrame` is pending, cancel it
  if (this.renderId_ !== undefined) {
    cancelAnimationFrame(this.renderId_);
    this.renderId_ = undefined;
  }

  // only render if Cesium is enabled/warming and rendering hasn't been blocked
  if ((this.enabled_ || this.warmingUp_) && !this.blockCesiumRendering_) {
    this.renderId_ = requestAnimationFrame(this.onAnimationFrame_.bind(this));
  }
};

/**
 * Callback for `requestAnimationFrame`.
 * @param {number} frameTime The frame time, from `performance.now()`.
 * @private
 */
exports.prototype.onAnimationFrame_ = function (frameTime) {
  this.renderId_ = undefined;

  // check if a frame was rendered within the target frame rate
  var interval = 1000.0 / this.targetFrameRate_;
  var delta = frameTime - this.lastFrameTime_;
  if (delta < interval) {
    // too soon, don't render yet
    this.render_();
    return;
  }

  // time to render a frame, save the time
  this.lastFrameTime_ = frameTime;

  var julianDate = this.time_();
  this.scene_.initializeFrame();
  this.handleResize_();
  this.dataSourceDisplay_.update(julianDate);

  // Update tracked entity
  if (this.entityView_) {
    var trackedEntity = this.trackedEntity_;
    var trackedState = this.dataSourceDisplay_.getBoundingSphere(trackedEntity, false, this.boundingSphereScratch_);
    if (trackedState === Cesium.BoundingSphereState.DONE) {
      this.boundingSphereScratch_.radius = 1; // a radius of 1 is enough for tracking points
      this.entityView_.update(julianDate, this.boundingSphereScratch_);
    }
  }

  this.scene_.render(julianDate);
  this.camera_.checkCameraChange();

  // request the next render call after this one completes to ensure the browser doesn't get backed up
  this.render_();
};

/**
 * @private
 */
exports.prototype.updateTrackedEntity_ = function () {
  if (!this.needTrackedEntityUpdate_) {
    return;
  }

  var trackedEntity = this.trackedEntity_;
  var scene = this.scene_;

  var state = this.dataSourceDisplay_.getBoundingSphere(trackedEntity, false, this.boundingSphereScratch_);
  if (state === Cesium.BoundingSphereState.PENDING) {
    return;
  }

  scene.screenSpaceCameraController.enableTilt = false;

  var bs = state !== Cesium.BoundingSphereState.FAILED ? this.boundingSphereScratch_ : undefined;
  if (bs) {
    bs.radius = 1;
  }
  this.entityView_ = new Cesium.EntityView(trackedEntity, scene, scene.mapProjection.ellipsoid);
  this.entityView_.update(this.time_(), bs);
  this.needTrackedEntityUpdate_ = false;
};

/**
 * @private
 */
exports.prototype.handleResize_ = function () {
  var width = this.canvas_.clientWidth;
  var height = this.canvas_.clientHeight;

  if (width === 0 | height === 0) {
    // The canvas DOM element is not ready yet.
    return;
  }

  if (width === this.canvasClientWidth_ && height === this.canvasClientHeight_ && !this.resolutionScaleChanged_) {
    return;
  }

  var resolutionScale = this.resolutionScale_;
  if (!_util_js__WEBPACK_IMPORTED_MODULE_4__["default"].supportsImageRenderingPixelated()) {
    resolutionScale *= window.devicePixelRatio || 1.0;
  }
  this.resolutionScaleChanged_ = false;

  this.canvasClientWidth_ = width;
  this.canvasClientHeight_ = height;

  width *= resolutionScale;
  height *= resolutionScale;

  this.canvas_.width = width;
  this.canvas_.height = height;
  this.scene_.camera.frustum.aspectRatio = width / height;
};

/**
 * @return {!olcs.Camera}
 * @api
 */
exports.prototype.getCamera = function () {
  return this.camera_;
};

/**
 * @return {!ol.Map}
 * @api
 */
exports.prototype.getOlMap = function () {
  return this.map_;
};

/**
 * @return {!ol.View}
 * @api
 */
exports.prototype.getOlView = function () {
  var view = this.map_.getView();
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].assert(view);
  return view;
};

/**
 * @return {!Cesium.Scene}
 * @api
 */
exports.prototype.getCesiumScene = function () {
  return this.scene_;
};

/**
 * @return {!Cesium.DataSourceCollection}
 * @api
 */
exports.prototype.getDataSources = function () {
  return this.dataSourceCollection_;
};

/**
 * @return {!Cesium.DataSourceDisplay}
 * @api
 */
exports.prototype.getDataSourceDisplay = function () {
  return this.dataSourceDisplay_;
};

/**
 * @return {boolean}
 * @api
 */
exports.prototype.getEnabled = function () {
  return this.enabled_;
};

/**
 * Enables/disables the Cesium.
 * This modifies the visibility style of the container element.
 * @param {boolean} enable
 * @api
 */
exports.prototype.setEnabled = function (enable) {
  var _this = this;

  if (this.enabled_ === enable) {
    return;
  }
  this.enabled_ = enable;

  // some Cesium operations are operating with canvas.clientWidth,
  // so we can't remove it from DOM or even make display:none;
  this.container_.style.visibility = this.enabled_ ? 'visible' : 'hidden';
  var interactions = void 0;
  if (this.enabled_) {
    this.throwOnUnitializedMap_();
    if (this.isOverMap_) {
      interactions = this.map_.getInteractions();
      interactions.forEach(function (el, i, arr) {
        _this.pausedInteractions_.push(el);
      });
      interactions.clear();

      var rootGroup = this.map_.getLayerGroup();
      if (rootGroup.getVisible()) {
        this.hiddenRootGroup_ = rootGroup;
        this.hiddenRootGroup_.setVisible(false);
      }

      this.map_.getOverlayContainer().classList.add('olcs-hideoverlay');
      this.map_.getOverlayContainerStopEvent().classList.add('olcs-hideoverlay');
    }

    this.camera_.readFromView();
    this.render_();
  } else {
    if (this.isOverMap_) {
      interactions = this.map_.getInteractions();
      this.pausedInteractions_.forEach(function (interaction) {
        interactions.push(interaction);
      });
      this.pausedInteractions_.length = 0;
      this.map_.getOverlayContainer().classList.remove('olcs-hideoverlay');
      this.map_.getOverlayContainerStopEvent().classList.remove('olcs-hideoverlay');
      if (this.hiddenRootGroup_) {
        this.hiddenRootGroup_.setVisible(true);
        this.hiddenRootGroup_ = null;
      }
    }

    this.camera_.updateView();
  }
};

/**
 * Preload Cesium so that it is ready when transitioning from 2D to 3D.
 * @param {number} height Target height of the camera
 * @param {number} timeout Milliseconds after which the warming will stop
 * @api
*/
exports.prototype.warmUp = function (height, timeout) {
  var _this2 = this;

  if (this.enabled_) {
    // already enabled
    return;
  }
  this.throwOnUnitializedMap_();
  this.camera_.readFromView();
  var ellipsoid = this.globe_.ellipsoid;
  var csCamera = this.scene_.camera;
  var position = ellipsoid.cartesianToCartographic(csCamera.position);
  if (position.height < height) {
    position.height = height;
    csCamera.position = ellipsoid.cartographicToCartesian(position);
  }

  this.warmingUp_ = true;
  this.render_();

  setTimeout(function () {
    _this2.warmingUp_ = false;
  }, timeout);
};

/**
 * Block Cesium rendering to save resources.
 * @param {boolean} block True to block.
 * @api
*/
exports.prototype.setBlockCesiumRendering = function (block) {
  if (this.blockCesiumRendering_ !== block) {
    this.blockCesiumRendering_ = block;

    // reset the render loop
    this.render_();
  }
};

/**
 * Render the globe only when necessary in order to save resources.
 * Experimental.
 * @api
 */
exports.prototype.enableAutoRenderLoop = function () {
  if (!this.autoRenderLoop_) {
    this.autoRenderLoop_ = new _AutoRenderLoop_js__WEBPACK_IMPORTED_MODULE_6__["default"](this);
  }
};

/**
 * Get the autorender loop.
 * @return {?olcs.AutoRenderLoop}
 * @api
*/
exports.prototype.getAutoRenderLoop = function () {
  return this.autoRenderLoop_;
};

/**
 * The 3D Cesium globe is rendered in a canvas with two different dimensions:
 * clientWidth and clientHeight which are the dimension on the screen and
 * width and height which are the dimensions of the drawing buffer.
 *
 * By using a resolution scale lower than 1.0, it is possible to render the
 * globe in a buffer smaller than the canvas client dimensions and improve
 * performance, at the cost of quality.
 *
 * Pixel ratio should also be taken into account; by default, a device with
 * pixel ratio of 2.0 will have a buffer surface 4 times bigger than the client
 * surface.
 *
 * @param {number} value
 * @this {olcs.OLCesium}
 * @api
 */
exports.prototype.setResolutionScale = function (value) {
  value = Math.max(0, value);
  if (value !== this.resolutionScale_) {
    this.resolutionScale_ = Math.max(0, value);
    this.resolutionScaleChanged_ = true;
    if (this.autoRenderLoop_) {
      this.autoRenderLoop_.restartRenderLoop();
    }
  }
};

/**
 * Set the target frame rate for the renderer. Set to `Number.POSITIVE_INFINITY`
 * to render as quickly as possible.
 * @param {number} value The frame rate, in frames per second.
 * @api
 */
exports.prototype.setTargetFrameRate = function (value) {
  if (this.targetFrameRate_ !== value) {
    this.targetFrameRate_ = value;

    // reset the render loop
    this.render_();
  }
};

/**
 * Check if OpenLayers map is not properly initialized.
 * @private
 */
exports.prototype.throwOnUnitializedMap_ = function () {
  var map = this.map_;
  var view = map.getView();
  var center = view.getCenter();
  if (!view.isDef() || isNaN(center[0]) || isNaN(center[1])) {
    throw new Error('The OpenLayers map is not properly initialized: ' + center + ' / ' + view.getResolution());
  }
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/OverlaySynchronizer.js":
/*!*****************************************!*\
  !*** ./src/olcs/OverlaySynchronizer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SynchronizedOverlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SynchronizedOverlay.js */ "./src/olcs/SynchronizedOverlay.js");
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/index.js */ "ol/index.js");
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/events.js */ "ol/events.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_events_js__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @module olcs.OverlaySynchronizer
 */




/**
 * @param {!ol.Map} map
 * @param {!Cesium.Scene} scene
 * @constructor
 * @template T
 * @struct
 * @api
 */
var exports = function exports(map, scene) {
  var _this = this;

  /**
   * @type {!ol.Map}
   * @protected
   */
  this.map = map;

  /**
   * @type {ol.Collection.<ol.Overlay>}
   * @private
   */
  this.overlays_ = this.map.getOverlays();

  /**
   * @type {!Cesium.Scene}
   * @protected
   */
  this.scene = scene;

  /**
   * @private
   * @type {!Element}
   */
  this.overlayContainerStopEvent_ = document.createElement('DIV');
  this.overlayContainerStopEvent_.className = 'ol-overlaycontainer-stopevent';
  var overlayEvents = ['click', 'dblclick', 'mousedown', 'touchstart', 'MSPointerDown', 'pointerdown', 'mousewheel', 'wheel'];
  overlayEvents.forEach(function (event) {
    ol_events_js__WEBPACK_IMPORTED_MODULE_2__["listen"](_this.overlayContainerStopEvent_, event, function (evt) {
      return evt.stopPropagation();
    });
  });
  this.scene.canvas.parentElement.appendChild(this.overlayContainerStopEvent_);

  /**
   * @private
   * @type {!Element}
   */
  this.overlayContainer_ = document.createElement('DIV');
  this.overlayContainer_.className = 'ol-overlaycontainer';
  this.scene.canvas.parentElement.appendChild(this.overlayContainer_);

  /**
   * @type {!Object<?,olcs.SynchronizedOverlay>}
   * @private
   */
  this.overlayMap_ = {};
};

/**
 * Get the element that serves as a container for overlays that don't allow
 * event propagation. Elements added to this container won't let mousedown and
 * touchstart events through to the map, so clicks and gestures on an overlay
 * don't trigger any {@link ol.MapBrowserEvent}.
 * @return {!Element} The map's overlay container that stops events.
 */
exports.prototype.getOverlayContainerStopEvent = function () {
  return this.overlayContainerStopEvent_;
};

/**
 * Get the element that serves as a container for overlays.
 * @return {!Element} The map's overlay container.
 */
exports.prototype.getOverlayContainer = function () {
  return this.overlayContainer_;
};

/**
 * Destroy all and perform complete synchronization of the overlays.
 * @api
 */
exports.prototype.synchronize = function () {
  this.destroyAll();
  this.addOverlays();
  this.overlays_.on('add', this.addOverlayFromEvent_.bind(this));
  this.overlays_.on('remove', this.removeOverlayFromEvent_.bind(this));
};

/**
 * @param {ol.Collection.Event} event
 * @private
 */
exports.prototype.addOverlayFromEvent_ = function (event) {
  var overlay = /** @type {ol.Overlay} */event.element;
  this.addOverlay(overlay);
};

/**
 * @api
 */
exports.prototype.addOverlays = function () {
  var _this2 = this;

  this.overlays_.forEach(function (overlay) {
    _this2.addOverlay();
  });
};

/**
 * @param {ol.Overlay} overlay
 * @api
 */
exports.prototype.addOverlay = function (overlay) {
  if (!overlay) {
    return;
  }
  var cesiumOverlay = new _SynchronizedOverlay_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    scene: this.scene,
    synchronizer: this,
    parent: overlay
  });

  var overlayId = ol_index_js__WEBPACK_IMPORTED_MODULE_1__["getUid"](overlay).toString();
  this.overlayMap_[overlayId] = cesiumOverlay;
};

/**
 * @param {ol.Collection.Event} event
 * @private
 */
exports.prototype.removeOverlayFromEvent_ = function (event) {
  var removedOverlay = /** @type {ol.Overlay} */event.element;
  this.removeOverlay(removedOverlay);
};

/**
 * Removes an overlay from the scene
 * @param {ol.Overlay} overlay
 * @api
 */
exports.prototype.removeOverlay = function (overlay) {
  var overlayId = ol_index_js__WEBPACK_IMPORTED_MODULE_1__["getUid"](overlay).toString();
  var csOverlay = this.overlayMap_[overlayId];
  if (csOverlay) {
    csOverlay.destroy();
    delete this.overlayMap_[overlayId];
  }
};

/**
 * Destroys all the created Cesium objects.
 * @protected
 */
exports.prototype.destroyAll = function () {
  var _this3 = this;

  Object.keys(this.overlayMap_).forEach(function (key) {
    var overlay = _this3.overlayMap_[key];
    overlay.destroy();
    delete _this3.overlayMap_[key];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/RasterSynchronizer.js":
/*!****************************************!*\
  !*** ./src/olcs/RasterSynchronizer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/layer/Group.js */ "ol/layer/Group.js");
/* harmony import */ var ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog/asserts.js");
/* harmony import */ var ol_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/array.js */ "ol/array.js");
/* harmony import */ var ol_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/index.js */ "ol/index.js");
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AbstractSynchronizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AbstractSynchronizer.js */ "./src/olcs/AbstractSynchronizer.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.js */ "./src/olcs/core.js");
/**
 * @module olcs.RasterSynchronizer
 */







/**
 * This object takes care of one-directional synchronization of
 * Openlayers raster layers to the given Cesium globe.
 * @param {!ol.Map} map
 * @param {!Cesium.Scene} scene
 * @constructor
 * @extends {olcs.AbstractSynchronizer.<Cesium.ImageryLayer>}
 * @api
 * @struct
 */
var exports = function exports(map, scene) {
  /**
   * @type {!Cesium.ImageryLayerCollection}
   * @private
   */
  this.cesiumLayers_ = scene.imageryLayers;

  /**
   * @type {!Cesium.ImageryLayerCollection}
   * @private
   */
  this.ourLayers_ = new Cesium.ImageryLayerCollection();

  _AbstractSynchronizer_js__WEBPACK_IMPORTED_MODULE_4__["default"].call(this, map, scene);
};

ol_index_js__WEBPACK_IMPORTED_MODULE_3__["inherits"](exports, _AbstractSynchronizer_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

/**
 * @inheritDoc
 */
exports.prototype.addCesiumObject = function (object) {
  this.cesiumLayers_.add(object);
  this.ourLayers_.add(object);
};

/**
 * @inheritDoc
 */
exports.prototype.destroyCesiumObject = function (object) {
  object.destroy();
};

/**
 * @inheritDoc
 */
exports.prototype.removeSingleCesiumObject = function (object, destroy) {
  this.cesiumLayers_.remove(object, destroy);
  this.ourLayers_.remove(object, false);
};

/**
 * @inheritDoc
 */
exports.prototype.removeAllCesiumObjects = function (destroy) {
  for (var i = 0; i < this.ourLayers_.length; ++i) {
    this.cesiumLayers_.remove(this.ourLayers_.get(i), destroy);
  }
  this.ourLayers_.removeAll(false);
};

/**
 * Creates an array of Cesium.ImageryLayer.
 * May be overriden by child classes to implement custom behavior.
 * The default implementation handles tiled imageries in EPSG:4326 or
 * EPSG:3859.
 * @param {!ol.layer.Base} olLayer
 * @param {!ol.proj.Projection} viewProj Projection of the view.
 * @return {?Array.<!Cesium.ImageryLayer>} array or null if not possible
 * (or supported)
 * @protected
 */
exports.prototype.convertLayerToCesiumImageries = function (olLayer, viewProj) {
  var result = _core_js__WEBPACK_IMPORTED_MODULE_5__["default"].tileLayerToImageryLayer(olLayer, viewProj);
  return result ? [result] : null;
};

/**
 * @inheritDoc
 */
exports.prototype.createSingleLayerCounterparts = function (olLayerWithParents) {
  var _this = this;

  var olLayer = olLayerWithParents.layer;
  var uid = ol_index_js__WEBPACK_IMPORTED_MODULE_3__["getUid"](olLayer).toString();
  var viewProj = this.view.getProjection();
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].assert(viewProj);
  var cesiumObjects = this.convertLayerToCesiumImageries(olLayer, viewProj);
  if (cesiumObjects) {
    var _olLayerListenKeys$ui;

    var listenKeyArray = [];
    [olLayerWithParents.layer].concat(olLayerWithParents.parents).forEach(function (olLayerItem) {
      listenKeyArray.push(olLayerItem.on(['change:opacity', 'change:visible'], function () {
        // the compiler does not seem to be able to infer this
        goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].assert(cesiumObjects);
        for (var i = 0; i < cesiumObjects.length; ++i) {
          _core_js__WEBPACK_IMPORTED_MODULE_5__["default"].updateCesiumLayerProperties(olLayerWithParents, cesiumObjects[i]);
        }
      }));
    });

    for (var i = 0; i < cesiumObjects.length; ++i) {
      _core_js__WEBPACK_IMPORTED_MODULE_5__["default"].updateCesiumLayerProperties(olLayerWithParents, cesiumObjects[i]);
    }

    // there is no way to modify Cesium layer extent,
    // we have to recreate when OpenLayers layer extent changes:
    listenKeyArray.push(olLayer.on('change:extent', function (e) {
      for (var _i = 0; _i < cesiumObjects.length; ++_i) {
        _this.cesiumLayers_.remove(cesiumObjects[_i], true); // destroy
        _this.ourLayers_.remove(cesiumObjects[_i], false);
      }
      delete _this.layerMap[ol_index_js__WEBPACK_IMPORTED_MODULE_3__["getUid"](olLayer)]; // invalidate the map entry
      _this.synchronize();
    }));

    listenKeyArray.push(olLayer.on('change', function (e) {
      // when the source changes, re-add the layer to force update
      for (var _i2 = 0; _i2 < cesiumObjects.length; ++_i2) {
        var position = _this.cesiumLayers_.indexOf(cesiumObjects[_i2]);
        if (position >= 0) {
          _this.cesiumLayers_.remove(cesiumObjects[_i2], false);
          _this.cesiumLayers_.add(cesiumObjects[_i2], position);
        }
      }
    }));

    (_olLayerListenKeys$ui = this.olLayerListenKeys[uid]).push.apply(_olLayerListenKeys$ui, listenKeyArray);
  }

  return Array.isArray(cesiumObjects) ? cesiumObjects : null;
};

/**
 * Order counterparts using the same algorithm as the Openlayers renderer:
 * z-index then original sequence order.
 * @override
 * @protected
 */
exports.prototype.orderLayers = function () {
  var _this2 = this;

  var layers = [];
  var zIndices = {};
  var queue = [this.mapLayerGroup];

  while (queue.length > 0) {
    var olLayer = queue.splice(0, 1)[0];
    layers.push(olLayer);
    zIndices[ol_index_js__WEBPACK_IMPORTED_MODULE_3__["getUid"](olLayer)] = olLayer.getZIndex();

    if (olLayer instanceof ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_0___default.a) {
      var sublayers = olLayer.getLayers();
      if (sublayers) {
        // Prepend queue with sublayers in order
        queue.unshift.apply(queue, sublayers.getArray());
      }
    }
  }

  ol_array_js__WEBPACK_IMPORTED_MODULE_2__["stableSort"](layers, function (layer1, layer2) {
    return zIndices[ol_index_js__WEBPACK_IMPORTED_MODULE_3__["getUid"](layer1)] - zIndices[ol_index_js__WEBPACK_IMPORTED_MODULE_3__["getUid"](layer2)];
  });

  layers.forEach(function (olLayer) {
    var olLayerId = ol_index_js__WEBPACK_IMPORTED_MODULE_3__["getUid"](olLayer).toString();
    var cesiumObjects = _this2.layerMap[olLayerId];
    if (cesiumObjects) {
      cesiumObjects.forEach(function (cesiumObject) {
        _this2.raiseToTop(cesiumObject);
      });
    }
  });
};

/**
 * @param {Cesium.ImageryLayer} counterpart
 */
exports.prototype.raiseToTop = function (counterpart) {
  this.cesiumLayers_.raiseToTop(counterpart);
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/SynchronizedOverlay.js":
/*!*****************************************!*\
  !*** ./src/olcs/SynchronizedOverlay.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/index.js */ "ol/index.js");
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ol_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_Overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/Overlay.js */ "ol/Overlay.js");
/* harmony import */ var ol_Overlay_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_Overlay_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/proj.js */ "ol/proj.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_proj_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/dom.js */ "ol/dom.js");
/* harmony import */ var ol_dom_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_dom_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Observable.js */ "ol/Observable.js");
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ol_Observable_js__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @module olcs.SynchronizedOverlay
 */






/**
 * @constructor
 * @param {olcsx.SynchronizedOverlayOptions} options SynchronizedOverlay Options.
 * @extends {ol.Overlay}
 * @struct
 * @api
 */
var exports = function exports(options) {
  /**
   * @private
   * @type {?Function}
   */
  this.scenePostRenderListenerRemover_ = null;

  /**
   * @private
   * @type {!Cesium.Scene}
   */
  this.scene_ = options.scene;

  /**
   * @private
   * @type {!olcs.OverlaySynchronizer}
   */
  this.synchronizer_ = options.synchronizer;

  /**
   * @private
   * @type {!ol.Overlay}
   */
  this.parent_ = options.parent;

  /**
   * @private
   * @type {ol.Coordinate|undefined}
   */
  this.positionWGS84_ = undefined;

  /**
   * @private
   * @type {MutationObserver}
   */
  this.observer_ = new MutationObserver(this.handleElementChanged.bind(this));
  /**
   * @private
   * @type {Array.<MutationObserver>}
   */
  this.attributeObserver_ = [];

  /**
   * @private
   * @type {Array<ol.EventsKey>}
   */
  this.listenerKeys_ = [];
  // synchronize our Overlay with the parent Overlay
  this.listenerKeys_.push(this.parent_.on('change:position', this.setPropertyFromEvent_.bind(this)));
  this.listenerKeys_.push(this.parent_.on('change:element', this.setPropertyFromEvent_.bind(this)));
  this.listenerKeys_.push(this.parent_.on('change:offset', this.setPropertyFromEvent_.bind(this)));
  this.listenerKeys_.push(this.parent_.on('change:position', this.setPropertyFromEvent_.bind(this)));
  this.listenerKeys_.push(this.parent_.on('change:positioning', this.setPropertyFromEvent_.bind(this)));

  ol_Overlay_js__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, this.parent_.getOptions());
  this.setProperties(this.parent_.getProperties());

  this.handleMapChanged();
};

ol_index_js__WEBPACK_IMPORTED_MODULE_0__["inherits"](exports, ol_Overlay_js__WEBPACK_IMPORTED_MODULE_1___default.a);

/**
 * @param {Node} target
 * @private
 */
exports.prototype.observeTarget_ = function (target) {
  this.observer_.disconnect();
  this.observer_.observe(target, {
    attributes: false,
    childList: true,
    characterData: true,
    subtree: true
  });
  this.attributeObserver_.forEach(function (observer) {
    observer.disconnect();
  });
  this.attributeObserver_.length = 0;
  for (var i = 0; i < target.childNodes.length; i++) {
    var node = target.childNodes[i];
    if (node.nodeType === 1) {
      var observer = new MutationObserver(this.handleElementChanged.bind(this));
      observer.observe(node, {
        attributes: true,
        subtree: true
      });
      this.attributeObserver_.push(observer);
    }
  }
};

/**
 *
 * @param {ol.Object.Event} event
 * @private
 */
exports.prototype.setPropertyFromEvent_ = function (event) {
  if (event.target && event.key) {
    this.set(event.key, event.target.get(event.key));
  }
};
/**
 * Get the scene associated with this overlay.
 * @see ol.Overlay.prototype.getMap
 * @return {!Cesium.Scene} The scene that the overlay is part of.
 * @api
 */
exports.prototype.getScene = function () {
  return this.scene_;
};

/**
 * @override
 */
exports.prototype.handleMapChanged = function () {
  if (this.scenePostRenderListenerRemover_) {
    this.scenePostRenderListenerRemover_();
    ol_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNode"](this.element);
  }
  this.scenePostRenderListenerRemover_ = null;
  var scene = this.getScene();
  if (scene) {
    this.scenePostRenderListenerRemover_ = scene.postRender.addEventListener(this.updatePixelPosition.bind(this));
    this.updatePixelPosition();
    var container = this.stopEvent ? this.synchronizer_.getOverlayContainerStopEvent() : this.synchronizer_.getOverlayContainer();
    if (this.insertFirst) {
      container.insertBefore(this.element, container.childNodes[0] || null);
    } else {
      container.appendChild(this.element);
    }
  }
};

/**
 * @override
 */
exports.prototype.handlePositionChanged = function () {
  // transform position to WGS84
  var position = this.getPosition();
  if (position) {
    var sourceProjection = this.parent_.getMap().getView().getProjection();
    this.positionWGS84_ = ol_proj_js__WEBPACK_IMPORTED_MODULE_2__["transform"](position, sourceProjection, 'EPSG:4326');
  } else {
    this.positionWGS84_ = undefined;
  }
  this.updatePixelPosition();
};

/**
 * @override
 */
exports.prototype.handleElementChanged = function () {
  function cloneNode(node, parent) {
    var clone = node.cloneNode();
    if (parent) {
      parent.appendChild(clone);
    }
    if (node.nodeType != Node.TEXT_NODE) {
      clone.addEventListener('click', function (event) {
        node.dispatchEvent(new MouseEvent('click', event));
        event.stopPropagation();
      });
    }
    var nodes = node.childNodes;
    for (var i = 0; i < nodes.length; i++) {
      if (!nodes[i]) {
        continue;
      }
      cloneNode(nodes[i], clone);
    }
    return clone;
  }
  ol_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeChildren"](this.element);
  var element = this.getElement();
  if (element) {
    if (element.parentNode && element.parentNode.childNodes) {
      for (var _iterator = element.parentNode.childNodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var node = _ref;

        var clonedNode = cloneNode(node, null);
        this.element.appendChild(clonedNode);
      }
    }
  }
  if (element.parentNode) {
    // set new Observer
    this.observeTarget_(element.parentNode);
  }
};

/**
 * @override
 */
exports.prototype.updatePixelPosition = function () {
  var position = this.positionWGS84_;
  if (!this.scene_ || !position) {
    this.setVisible(false);
    return;
  }
  var cartesian = void 0;
  if (position.length === 2) {
    cartesian = Cesium.Cartesian3.fromDegreesArray(position)[0];
  } else {
    cartesian = Cesium.Cartesian3.fromDegreesArrayHeights(position)[0];
  }
  var camera = this.scene_.camera;
  var ellipsoidBoundingSphere = new Cesium.BoundingSphere(new Cesium.Cartesian3(), 6356752);
  var occluder = new Cesium.Occluder(ellipsoidBoundingSphere, camera.position);
  // check if overlay position is behind the horizon
  if (!occluder.isPointVisible(cartesian)) {
    this.setVisible(false);
    return;
  }
  var cullingVolume = camera.frustum.computeCullingVolume(camera.position, camera.direction, camera.up);
  // check if overlay position is visible from the camera
  if (cullingVolume.computeVisibility(new Cesium.BoundingSphere(cartesian)) !== 1) {
    this.setVisible(false);
    return;
  }
  this.setVisible(true);

  var pixelCartesian = this.scene_.cartesianToCanvasCoordinates(cartesian);
  var pixel = [pixelCartesian.x, pixelCartesian.y];
  var mapSize = [this.scene_.canvas.width, this.scene_.canvas.height];
  this.updateRenderedPosition(pixel, mapSize);
};

/**
 * Destroys the overlay, removing all its listeners and elements
 * @api
 */
exports.prototype.destroy = function () {
  if (this.scenePostRenderListenerRemover_) {
    this.scenePostRenderListenerRemover_();
  }
  if (this.observer_) {
    this.observer_.disconnect();
  }
  Object(ol_Observable_js__WEBPACK_IMPORTED_MODULE_4__["unByKey"])(this.listenerKeys_);
  this.listenerKeys_.splice(0);
  if (this.element.removeNode) {
    this.element.removeNode(true);
  } else {
    this.element.remove();
  }
  this.element = null;
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/VectorSynchronizer.js":
/*!****************************************!*\
  !*** ./src/olcs/VectorSynchronizer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/source/Vector.js */ "ol/source/Vector.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/layer/Layer.js */ "ol/layer/Layer.js");
/* harmony import */ var ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_source_Cluster_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source/Cluster.js */ "ol/source/Cluster.js");
/* harmony import */ var ol_source_Cluster_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_source_Cluster_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Image.js */ "ol/layer/Image.js");
/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog/asserts.js");
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/index.js */ "ol/index.js");
/* harmony import */ var ol_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ol_index_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/events.js */ "ol/events.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ol_events_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/layer/Vector.js */ "ol/layer/Vector.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AbstractSynchronizer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AbstractSynchronizer.js */ "./src/olcs/AbstractSynchronizer.js");
/* harmony import */ var _FeatureConverter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FeatureConverter.js */ "./src/olcs/FeatureConverter.js");
/**
 * @module olcs.VectorSynchronizer
 */











/**
 * Unidirectionally synchronize OpenLayers vector layers to Cesium.
 * @param {!ol.Map} map
 * @param {!Cesium.Scene} scene
 * @param {olcs.FeatureConverter=} opt_converter
 * @constructor
 * @extends {olcs.AbstractSynchronizer.<olcs.core.VectorLayerCounterpart>}
 * @api
 * @struct
 */
var exports = function exports(map, scene, opt_converter) {

  /**
   * @protected
   */
  this.converter = opt_converter || new _FeatureConverter_js__WEBPACK_IMPORTED_MODULE_9__["default"](scene);

  /**
   * @private
   */
  this.csAllPrimitives_ = new Cesium.PrimitiveCollection();
  scene.primitives.add(this.csAllPrimitives_);
  this.csAllPrimitives_.destroyPrimitives = false;

  _AbstractSynchronizer_js__WEBPACK_IMPORTED_MODULE_8__["default"].call(this, map, scene);
};

ol_index_js__WEBPACK_IMPORTED_MODULE_5__["inherits"](exports, _AbstractSynchronizer_js__WEBPACK_IMPORTED_MODULE_8__["default"]);

/**
 * @inheritDoc
 */
exports.prototype.addCesiumObject = function (counterpart) {
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(counterpart);
  counterpart.getRootPrimitive()['counterpart'] = counterpart;
  this.csAllPrimitives_.add(counterpart.getRootPrimitive());
};

/**
 * @inheritDoc
 */
exports.prototype.destroyCesiumObject = function (object) {
  object.getRootPrimitive().destroy();
};

/**
 * @inheritDoc
 */
exports.prototype.removeSingleCesiumObject = function (object, destroy) {
  object.destroy();
  this.csAllPrimitives_.destroyPrimitives = destroy;
  this.csAllPrimitives_.remove(object.getRootPrimitive());
  this.csAllPrimitives_.destroyPrimitives = false;
};

/**
 * @inheritDoc
 */
exports.prototype.removeAllCesiumObjects = function (destroy) {
  this.csAllPrimitives_.destroyPrimitives = destroy;
  if (destroy) {
    for (var i = 0; i < this.csAllPrimitives_.length; ++i) {
      this.csAllPrimitives_.get(i)['counterpart'].destroy();
    }
  }
  this.csAllPrimitives_.removeAll();
  this.csAllPrimitives_.destroyPrimitives = false;
};

/**
 * Synchronizes the layer visibility properties
 * to the given Cesium Primitive.
 * @param {olcsx.LayerWithParents} olLayerWithParents
 * @param {!Cesium.Primitive} csPrimitive
 */
exports.prototype.updateLayerVisibility = function (olLayerWithParents, csPrimitive) {
  var visible = true;
  [olLayerWithParents.layer].concat(olLayerWithParents.parents).forEach(function (olLayer) {
    var layerVisible = olLayer.getVisible();
    if (layerVisible !== undefined) {
      visible &= layerVisible;
    } else {
      visible = false;
    }
  });
  csPrimitive.show = visible;
};
/**
 * @inheritDoc
 */
exports.prototype.createSingleLayerCounterparts = function (olLayerWithParents) {
  var _this = this;

  var olLayer = olLayerWithParents.layer;
  if (!(olLayer instanceof ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_7___default.a)) {
    return null;
  }
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assertInstanceof(olLayer, ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1___default.a);

  var source = olLayer.getSource();
  if (source instanceof ol_source_Cluster_js__WEBPACK_IMPORTED_MODULE_2___default.a) {
    source = source.getSource();
  }

  goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assertInstanceof(source, ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_0___default.a);
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(this.view);

  var view = this.view;
  var featurePrimitiveMap = {};
  var counterpart = this.converter.olVectorLayerToCesium(olLayer, view, featurePrimitiveMap);
  var csPrimitives = counterpart.getRootPrimitive();
  var olListenKeys = counterpart.olListenKeys;

  [olLayerWithParents.layer].concat(olLayerWithParents.parents).forEach(function (olLayerItem) {
    olListenKeys.push(ol_events_js__WEBPACK_IMPORTED_MODULE_6__["listen"](olLayerItem, 'change:visible', function () {
      _this.updateLayerVisibility(olLayerWithParents, csPrimitives);
    }));
  });
  this.updateLayerVisibility(olLayerWithParents, csPrimitives);

  var onAddFeature = function (feature) {
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(olLayer instanceof ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_7___default.a || olLayer instanceof ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_3___default.a);
    var context = counterpart.context;
    var prim = this.converter.convert(olLayer, view, feature, context);
    if (prim) {
      featurePrimitiveMap[ol_index_js__WEBPACK_IMPORTED_MODULE_5__["getUid"](feature)] = prim;
      csPrimitives.add(prim);
    }
  }.bind(this);

  var onRemoveFeature = function (feature) {
    var id = ol_index_js__WEBPACK_IMPORTED_MODULE_5__["getUid"](feature);
    var context = counterpart.context;
    var bbs = context.featureToCesiumMap[id];
    if (bbs) {
      delete context.featureToCesiumMap[id];
      bbs.forEach(function (bb) {
        if (bb instanceof Cesium.Billboard) {
          context.billboards.remove(bb);
        }
      });
    }
    var csPrimitive = featurePrimitiveMap[id];
    delete featurePrimitiveMap[id];
    if (csPrimitive) {
      csPrimitives.remove(csPrimitive);
    }
  }.bind(this);

  olListenKeys.push(ol_events_js__WEBPACK_IMPORTED_MODULE_6__["listen"](source, 'addfeature', function (e) {
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(e.feature);
    onAddFeature(e.feature);
  }, this));

  olListenKeys.push(ol_events_js__WEBPACK_IMPORTED_MODULE_6__["listen"](source, 'removefeature', function (e) {
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(e.feature);
    onRemoveFeature(e.feature);
  }, this));

  olListenKeys.push(ol_events_js__WEBPACK_IMPORTED_MODULE_6__["listen"](source, 'changefeature', function (e) {
    var feature = e.feature;
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_4__["default"].assert(feature);
    onRemoveFeature(feature);
    onAddFeature(feature);
  }, this));

  return counterpart ? [counterpart] : null;
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/core.js":
/*!**************************!*\
  !*** ./src/olcs/core.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_easing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/easing.js */ "ol/easing.js");
/* harmony import */ var ol_easing_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ol_easing_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog/asserts.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/Tile.js */ "ol/layer/Tile.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Image.js */ "ol/layer/Image.js");
/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/proj.js */ "ol/proj.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ol_proj_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/ImageWMS.js */ "ol/source/ImageWMS.js");
/* harmony import */ var ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ol_source_TileImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/TileImage.js */ "ol/source/TileImage.js");
/* harmony import */ var ol_source_TileImage_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ol_source_TileImage_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/TileWMS.js */ "ol/source/TileWMS.js");
/* harmony import */ var ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ol_source_Image_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/Image.js */ "ol/source/Image.js");
/* harmony import */ var ol_source_Image_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ol_source_Image_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_OLImageryProvider_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/OLImageryProvider.js */ "./src/olcs/core/OLImageryProvider.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util.js */ "./src/olcs/util.js");
/**
 * @module olcs.core
 */
var exports = {};












/**
 * Compute the pixel width and height of a point in meters using the
 * camera frustum.
 * @param {!Cesium.Scene} scene
 * @param {!Cesium.Cartesian3} target
 * @return {!Cesium.Cartesian2} the pixel size
 * @api
 */
exports.computePixelSizeAtCoordinate = function (scene, target) {
  var camera = scene.camera;
  var canvas = scene.canvas;
  var frustum = camera.frustum;
  var distance = Cesium.Cartesian3.magnitude(Cesium.Cartesian3.subtract(camera.position, target, new Cesium.Cartesian3()));
  var pixelSize = new Cesium.Cartesian2();
  return frustum.getPixelDimensions(canvas.clientWidth, canvas.clientHeight, distance, pixelSize);
};

/**
 * Compute bounding box around a target point.
 * @param {!Cesium.Scene} scene
 * @param {!Cesium.Cartesian3} target
 * @param {number} amount Half the side of the box, in pixels.
 * @return {Array<Cesium.Cartographic>} bottom left and top right
 * coordinates of the box
 */
exports.computeBoundingBoxAtTarget = function (scene, target, amount) {
  var pixelSize = exports.computePixelSizeAtCoordinate(scene, target);
  var transform = Cesium.Transforms.eastNorthUpToFixedFrame(target);

  var bottomLeft = Cesium.Matrix4.multiplyByPoint(transform, new Cesium.Cartesian3(-pixelSize.x * amount, -pixelSize.y * amount, 0), new Cesium.Cartesian3());

  var topRight = Cesium.Matrix4.multiplyByPoint(transform, new Cesium.Cartesian3(pixelSize.x * amount, pixelSize.y * amount, 0), new Cesium.Cartesian3());

  return Cesium.Ellipsoid.WGS84.cartesianArrayToCartographicArray([bottomLeft, topRight]);
};

/**
 *
 * @param {!ol.geom.Geometry} geometry
 * @param {number} height
 * @api
 */
exports.applyHeightOffsetToGeometry = function (geometry, height) {
  geometry.applyTransform(function (input, output, stride) {
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].assert(input === output);
    if (stride !== undefined && stride >= 3) {
      for (var i = 0; i < output.length; i += stride) {
        output[i + 2] = output[i + 2] + height;
      }
    }
    return output;
  });
};

/**
 * @param {ol.Coordinate} coordinates
 * @param {number=} rotation
 * @param {!Cesium.Cartesian3=} translation
 * @param {!Cesium.Cartesian3=} scale
 * @return {!Cesium.Matrix4}
 * @api
 */
exports.createMatrixAtCoordinates = function (coordinates) {
  var rotation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var translation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Cesium.Cartesian3.ZERO;
  var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Cesium.Cartesian3(1, 1, 1);

  var position = exports.ol4326CoordinateToCesiumCartesian(coordinates);
  var rawMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(position);
  var quaternion = Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_Z, -rotation);
  var rotationMatrix = Cesium.Matrix4.fromTranslationQuaternionRotationScale(translation, quaternion, scale);
  return Cesium.Matrix4.multiply(rawMatrix, rotationMatrix, new Cesium.Matrix4());
};

/**
 * @param {!Cesium.Camera} camera
 * @param {number} angle
 * @param {!Cesium.Cartesian3} axis
 * @param {!Cesium.Matrix4} transform
 * @param {olcsx.core.RotateAroundAxisOption=} opt_options
 * @api
 */
exports.rotateAroundAxis = function (camera, angle, axis, transform, opt_options) {
  var clamp = Cesium.Math.clamp;
  var defaultValue = Cesium.defaultValue;

  var options = opt_options || {};
  var duration = defaultValue(options.duration, 500); // ms
  var easing = defaultValue(options.easing, ol_easing_js__WEBPACK_IMPORTED_MODULE_0__["linear"]);
  var callback = options.callback;

  var lastProgress = 0;
  var oldTransform = new Cesium.Matrix4();

  var start = Date.now();
  var step = function step() {
    var timestamp = Date.now();
    var timeDifference = timestamp - start;
    var progress = easing(clamp(timeDifference / duration, 0, 1));
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].assert(progress >= lastProgress);

    camera.transform.clone(oldTransform);
    var stepAngle = (progress - lastProgress) * angle;
    lastProgress = progress;
    camera.lookAtTransform(transform);
    camera.rotate(axis, stepAngle);
    camera.lookAtTransform(oldTransform);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      if (callback) {
        callback();
      }
    }
  };
  window.requestAnimationFrame(step);
};

/**
 * @param {!Cesium.Scene} scene
 * @param {number} heading
 * @param {!Cesium.Cartesian3} bottomCenter
 * @param {olcsx.core.RotateAroundAxisOption=} opt_options
 * @api
 */
exports.setHeadingUsingBottomCenter = function (scene, heading, bottomCenter, opt_options) {
  var camera = scene.camera;
  // Compute the camera position to zenith quaternion
  var angleToZenith = exports.computeAngleToZenith(scene, bottomCenter);
  var axis = camera.right;
  var quaternion = Cesium.Quaternion.fromAxisAngle(axis, angleToZenith);
  var rotation = Cesium.Matrix3.fromQuaternion(quaternion);

  // Get the zenith point from the rotation of the position vector
  var vector = new Cesium.Cartesian3();
  Cesium.Cartesian3.subtract(camera.position, bottomCenter, vector);
  var zenith = new Cesium.Cartesian3();
  Cesium.Matrix3.multiplyByVector(rotation, vector, zenith);
  Cesium.Cartesian3.add(zenith, bottomCenter, zenith);

  // Actually rotate around the zenith normal
  var transform = Cesium.Matrix4.fromTranslation(zenith);
  var rotateAroundAxis = exports.rotateAroundAxis;
  rotateAroundAxis(camera, heading, zenith, transform, opt_options);
};

/**
 * Get the 3D position of the given pixel of the canvas.
 * @param {!Cesium.Scene} scene
 * @param {!Cesium.Cartesian2} pixel
 * @return {!Cesium.Cartesian3|undefined}
 * @api
 */
exports.pickOnTerrainOrEllipsoid = function (scene, pixel) {
  var ray = scene.camera.getPickRay(pixel);
  var target = scene.globe.pick(ray, scene);
  return target || scene.camera.pickEllipsoid(pixel);
};

/**
 * Get the 3D position of the point at the bottom-center of the screen.
 * @param {!Cesium.Scene} scene
 * @return {!Cesium.Cartesian3|undefined}
 * @api
 */
exports.pickBottomPoint = function (scene) {
  var canvas = scene.canvas;
  var bottom = new Cesium.Cartesian2(canvas.clientWidth / 2, canvas.clientHeight);
  return exports.pickOnTerrainOrEllipsoid(scene, bottom);
};

/**
 * Get the 3D position of the point at the center of the screen.
 * @param {!Cesium.Scene} scene
 * @return {!Cesium.Cartesian3|undefined}
 * @api
 */
exports.pickCenterPoint = function (scene) {
  var canvas = scene.canvas;
  var center = new Cesium.Cartesian2(canvas.clientWidth / 2, canvas.clientHeight / 2);
  return exports.pickOnTerrainOrEllipsoid(scene, center);
};

/**
 * Compute the signed tilt angle on globe, between the opposite of the
 * camera direction and the target normal. Return undefined if there is no
 * intersection of the camera direction with the globe.
 * @param {!Cesium.Scene} scene
 * @return {number|undefined}
 * @api
 */
exports.computeSignedTiltAngleOnGlobe = function (scene) {
  var camera = scene.camera;
  var ray = new Cesium.Ray(camera.position, camera.direction);
  var target = scene.globe.pick(ray, scene);

  if (!target) {
    // no tiles in the area were loaded?
    var ellipsoid = Cesium.Ellipsoid.WGS84;
    var obj = Cesium.IntersectionTests.rayEllipsoid(ray, ellipsoid);
    if (obj) {
      target = Cesium.Ray.getPoint(ray, obj.start);
    }
  }

  if (!target) {
    return undefined;
  }

  var normal = new Cesium.Cartesian3();
  Cesium.Ellipsoid.WGS84.geocentricSurfaceNormal(target, normal);

  var angleBetween = exports.signedAngleBetween;
  var angle = angleBetween(camera.direction, normal, camera.right) - Math.PI;
  return Cesium.Math.convertLongitudeRange(angle);
};

/**
 * Compute the ray from the camera to the bottom-center of the screen.
 * @param {!Cesium.Scene} scene
 * @return {!Cesium.Ray}
 */
exports.bottomFovRay = function (scene) {
  var camera = scene.camera;
  var fovy2 = camera.frustum.fovy / 2;
  var direction = camera.direction;
  var rotation = Cesium.Quaternion.fromAxisAngle(camera.right, fovy2);
  var matrix = Cesium.Matrix3.fromQuaternion(rotation);
  var vector = new Cesium.Cartesian3();
  Cesium.Matrix3.multiplyByVector(matrix, direction, vector);
  return new Cesium.Ray(camera.position, vector);
};

/**
 * Compute the angle between two Cartesian3.
 * @param {!Cesium.Cartesian3} first
 * @param {!Cesium.Cartesian3} second
 * @param {!Cesium.Cartesian3} normal Normal to test orientation against.
 * @return {number}
 */
exports.signedAngleBetween = function (first, second, normal) {
  // We are using the dot for the angle.
  // Then the cross and the dot for the sign.
  var a = new Cesium.Cartesian3();
  var b = new Cesium.Cartesian3();
  var c = new Cesium.Cartesian3();
  Cesium.Cartesian3.normalize(first, a);
  Cesium.Cartesian3.normalize(second, b);
  Cesium.Cartesian3.cross(a, b, c);

  var cosine = Cesium.Cartesian3.dot(a, b);
  var sine = Cesium.Cartesian3.magnitude(c);

  // Sign of the vector product and the orientation normal
  var sign = Cesium.Cartesian3.dot(normal, c);
  var angle = Math.atan2(sine, cosine);
  return sign >= 0 ? angle : -angle;
};

/**
 * Compute the rotation angle around a given point, needed to reach the
 * zenith position.
 * At a zenith position, the camera direction is going througth the earth
 * center and the frustrum bottom ray is going through the chosen pivot
 * point.
 * The bottom-center of the screen is a good candidate for the pivot point.
 * @param {!Cesium.Scene} scene
 * @param {!Cesium.Cartesian3} pivot Point around which the camera rotates.
 * @return {number}
 * @api
 */
exports.computeAngleToZenith = function (scene, pivot) {
  // This angle is the sum of the angles 'fy' and 'a', which are defined
  // using the pivot point and its surface normal.
  //        Zenith |    camera
  //           \   |   /
  //            \fy|  /
  //             \ |a/
  //              \|/pivot
  var camera = scene.camera;
  var fy = camera.frustum.fovy / 2;
  var ray = exports.bottomFovRay(scene);
  var direction = Cesium.Cartesian3.clone(ray.direction);
  Cesium.Cartesian3.negate(direction, direction);

  var normal = new Cesium.Cartesian3();
  Cesium.Ellipsoid.WGS84.geocentricSurfaceNormal(pivot, normal);

  var left = new Cesium.Cartesian3();
  Cesium.Cartesian3.negate(camera.right, left);

  var a = exports.signedAngleBetween(normal, direction, left);
  return a + fy;
};

/**
 * Convert an OpenLayers extent to a Cesium rectangle.
 * @param {ol.Extent} extent Extent.
 * @param {ol.ProjectionLike} projection Extent projection.
 * @return {Cesium.Rectangle} The corresponding Cesium rectangle.
 * @api
 */
exports.extentToRectangle = function (extent, projection) {
  if (extent && projection) {
    var ext = ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["transformExtent"](extent, projection, 'EPSG:4326');
    return Cesium.Rectangle.fromDegrees(ext[0], ext[1], ext[2], ext[3]);
  } else {
    return null;
  }
};

/**
 * Creates Cesium.ImageryLayer best corresponding to the given ol.layer.Layer.
 * Only supports raster layers
 * @param {!ol.layer.Base} olLayer
 * @param {!ol.proj.Projection} viewProj Projection of the view.
 * @return {?Cesium.ImageryLayer} null if not possible (or supported)
 * @api
 */
exports.tileLayerToImageryLayer = function (olLayer, viewProj) {

  if (!(olLayer instanceof ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_2___default.a) && !(olLayer instanceof ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_3___default.a)) {
    return null;
  }

  var provider = null;
  var source = olLayer.getSource();

  // Convert ImageWMS to TileWMS
  if (source instanceof ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_5___default.a && source.getUrl() && source.getImageLoadFunction() === ol_source_Image_js__WEBPACK_IMPORTED_MODULE_8__["defaultImageLoadFunction"]) {
    var sourceProps = {
      'olcs.proxy': source.get('olcs.proxy'),
      'olcs.extent': source.get('olcs.extent'),
      'olcs.projection': source.get('olcs.projection'),
      'olcs.imagesource': source
    };
    source = new ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_7___default.a({
      url: source.getUrl(),
      attributions: source.getAttributions(),
      projection: source.getProjection(),
      params: source.getParams()
    });
    source.setProperties(sourceProps);
  }

  if (source instanceof ol_source_TileImage_js__WEBPACK_IMPORTED_MODULE_6___default.a) {
    var projection = _util_js__WEBPACK_IMPORTED_MODULE_10__["default"].getSourceProjection(source);

    if (!projection) {
      // if not explicit, assume the same projection as view
      projection = viewProj;
    }

    if (exports.isCesiumProjection(projection)) {
      provider = new _core_OLImageryProvider_js__WEBPACK_IMPORTED_MODULE_9__["default"](source, viewProj);
    }
    // Projection not supported by Cesium
    else {
        return null;
      }
  } else {
    // sources other than TileImage are currently not supported
    return null;
  }

  // the provider is always non-null if we got this far

  var layerOptions = {};

  var forcedExtent = /** @type {ol.Extent} */olLayer.get('olcs.extent');
  var ext = forcedExtent || olLayer.getExtent();
  if (ext) {
    layerOptions.rectangle = exports.extentToRectangle(ext, viewProj);
  }

  var cesiumLayer = new Cesium.ImageryLayer(provider, layerOptions);
  return cesiumLayer;
};

/**
 * Synchronizes the layer rendering properties (opacity, visible)
 * to the given Cesium ImageryLayer.
 * @param {olcsx.LayerWithParents} olLayerWithParents
 * @param {!Cesium.ImageryLayer} csLayer
 * @api
 */
exports.updateCesiumLayerProperties = function (olLayerWithParents, csLayer) {
  var opacity = 1;
  var visible = true;
  [olLayerWithParents.layer].concat(olLayerWithParents.parents).forEach(function (olLayer) {
    var layerOpacity = olLayer.getOpacity();
    if (layerOpacity !== undefined) {
      opacity *= layerOpacity;
    }
    var layerVisible = olLayer.getVisible();
    if (layerVisible !== undefined) {
      visible &= layerVisible;
    }
  });
  csLayer.alpha = opacity;
  csLayer.show = visible;
};

/**
 * Convert a 2D or 3D OpenLayers coordinate to Cesium.
 * @param {ol.Coordinate} coordinate Ol3 coordinate.
 * @return {!Cesium.Cartesian3} Cesium cartesian coordinate
 * @api
 */
exports.ol4326CoordinateToCesiumCartesian = function (coordinate) {
  var coo = coordinate;
  return coo.length > 2 ? Cesium.Cartesian3.fromDegrees(coo[0], coo[1], coo[2]) : Cesium.Cartesian3.fromDegrees(coo[0], coo[1]);
};

/**
 * Convert an array of 2D or 3D OpenLayers coordinates to Cesium.
 * @param {Array.<!ol.Coordinate>} coordinates Ol3 coordinates.
 * @return {!Array.<Cesium.Cartesian3>} Cesium cartesian coordinates
 * @api
 */
exports.ol4326CoordinateArrayToCsCartesians = function (coordinates) {
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].assert(coordinates !== null);
  var toCartesian = exports.ol4326CoordinateToCesiumCartesian;
  var cartesians = [];
  for (var i = 0; i < coordinates.length; ++i) {
    cartesians.push(toCartesian(coordinates[i]));
  }
  return cartesians;
};

/**
 * Reproject an OpenLayers geometry to EPSG:4326 if needed.
 * The geometry will be cloned only when original projection is not EPSG:4326
 * and the properties will be shallow copied.
 * @param {!T} geometry
 * @param {!ol.ProjectionLike} projection
 * @return {!T}
 * @template T
 * @api
 */
exports.olGeometryCloneTo4326 = function (geometry, projection) {
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].assert(projection);

  var proj4326 = ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["get"]('EPSG:4326');
  var proj = ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["get"](projection);
  if (proj !== proj4326) {
    var properties = geometry.getProperties();
    geometry = geometry.clone();
    geometry.transform(proj, proj4326);
    geometry.setProperties(properties);
  }
  return geometry;
};

/**
 * Convert an OpenLayers color to Cesium.
 * @param {ol.Color|CanvasGradient|CanvasPattern|string} olColor
 * @return {!Cesium.Color}
 * @api
 */
exports.convertColorToCesium = function (olColor) {
  olColor = olColor || 'black';
  if (Array.isArray(olColor)) {
    return new Cesium.Color(Cesium.Color.byteToFloat(olColor[0]), Cesium.Color.byteToFloat(olColor[1]), Cesium.Color.byteToFloat(olColor[2]), olColor[3]);
  } else if (typeof olColor == 'string') {
    return Cesium.Color.fromCssColorString(olColor);
  }
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].fail('impossible');
};

/**
 * Convert an OpenLayers url to Cesium.
 * @param {string} url
 * @return {!olcsx.core.CesiumUrlDefinition}
 * @api
 */
exports.convertUrlToCesium = function (url) {
  var subdomains = '';
  var re = /\{(\d|[a-z])-(\d|[a-z])\}/;
  var match = re.exec(url);
  if (match) {
    url = url.replace(re, '{s}');
    var startCharCode = match[1].charCodeAt(0);
    var stopCharCode = match[2].charCodeAt(0);
    var charCode = void 0;
    for (charCode = startCharCode; charCode <= stopCharCode; ++charCode) {
      subdomains += String.fromCharCode(charCode);
    }
  }
  return {
    url: url,
    subdomains: subdomains
  };
};

/**
 * Animate the return to a top-down view from the zenith.
 * The camera is rotated to orient to the North.
 * @param {!ol.Map} map
 * @param {!Cesium.Scene} scene
 * @return {Promise<undefined>}
 * @api
 */
exports.resetToNorthZenith = function (map, scene) {
  return new Promise(function (resolve, reject) {
    var camera = scene.camera;
    var pivot = exports.pickBottomPoint(scene);
    if (!pivot) {
      reject('Could not get bottom pivot');
      return;
    }

    var currentHeading = map.getView().getRotation();
    if (currentHeading === undefined) {
      reject('The view is not initialized');
      return;
    }
    var angle = exports.computeAngleToZenith(scene, pivot);

    // Point to North
    exports.setHeadingUsingBottomCenter(scene, currentHeading, pivot);

    // Go to zenith
    var transform = Cesium.Matrix4.fromTranslation(pivot);
    var axis = camera.right;
    var options = {
      callback: function callback() {
        var view = map.getView();
        exports.normalizeView(view);
        resolve();
      }
    };
    exports.rotateAroundAxis(camera, -angle, axis, transform, options);
  });
};

/**
 * @param {!Cesium.Scene} scene
 * @param {number} angle in radian
 * @return {Promise<undefined>}
 * @api
 */
exports.rotateAroundBottomCenter = function (scene, angle) {
  return new Promise(function (resolve, reject) {
    var camera = scene.camera;
    var pivot = exports.pickBottomPoint(scene);
    if (!pivot) {
      reject('could not get bottom pivot');
      return;
    }

    var options = { callback: resolve };
    var transform = Cesium.Matrix4.fromTranslation(pivot);
    var axis = camera.right;
    var rotateAroundAxis = exports.rotateAroundAxis;
    rotateAroundAxis(camera, -angle, axis, transform, options);
  });
};

/**
 * Set the OpenLayers view to a specific rotation and
 * the nearest resolution.
 * @param {ol.View} view
 * @param {number=} angle
 * @api
 */
exports.normalizeView = function (view) {
  var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var resolution = view.getResolution();
  view.setRotation(angle);
  view.setResolution(view.constrainResolution(resolution));
};

/**
 * Check if the given projection is managed by Cesium (WGS84 or Mercator Spheric)
 *
 * @param {ol.proj.Projection} projection Projection to check.
 * @returns {boolean} Whether it's managed by Cesium.
 */
exports.isCesiumProjection = function (projection) {
  var is3857 = projection === ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["get"]('EPSG:3857');
  var is4326 = projection === ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["get"]('EPSG:4326');
  return is3857 || is4326;
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/core/OLImageryProvider.js":
/*!********************************************!*\
  !*** ./src/olcs/core/OLImageryProvider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj.js */ "ol/proj.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ol_proj_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ "./src/olcs/util.js");
/**
 * @module olcs.core.OLImageryProvider
 */



/**
 * Special class derived from Cesium.ImageryProvider
 * that is connected to the given ol.source.TileImage.
 * @param {!ol.source.TileImage} source
 * @param {ol.proj.Projection=} opt_fallbackProj Projection to assume if the
 *                                               projection of the source
 *                                               is not defined.
 * @constructor
 * @struct
 * @extends {Cesium.ImageryProvider}
 */
var exports = function exports(source, opt_fallbackProj) {
  var _this = this;

  // Do not ol.inherit() or call super constructor from
  // Cesium.ImageryProvider since this particular function is a
  // 'non instanciable interface' which throws on instanciation.

  /**
   * @type {!ol.source.TileImage}
   * @private
   */
  this.source_ = source;

  /**
   * @type {?ol.proj.Projection}
   * @private
   */
  this.projection_ = null;

  /**
   * @type {?ol.proj.Projection}
   * @private
   */
  this.fallbackProj_ = opt_fallbackProj || null;

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  /**
   * @type {?Cesium.Credit}
   * @private
   */
  this.credit_ = null;

  /**
   * @type {?Cesium.TilingScheme}
   * @private
   */
  this.tilingScheme_ = null;

  /**
   * @type {?Cesium.Rectangle}
   * @private
   */
  this.rectangle_ = null;

  var proxy = this.source_.get('olcs.proxy');
  if (proxy) {
    if (typeof proxy === 'function') {
      this.proxy_ = {
        'getURL': proxy
      };
    } else if (typeof proxy === 'string') {
      this.proxy_ = new Cesium.DefaultProxy(proxy);
    }
  }

  this.errorEvent_ = new Cesium.Event();

  this.emptyCanvas_ = document.createElement('canvas');
  this.emptyCanvas_.width = 1;
  this.emptyCanvas_.height = 1;

  this.source_.on('change', function (e) {
    _this.handleSourceChanged_();
  });
  this.handleSourceChanged_();
};

// definitions of getters that are required to be present
// in the Cesium.ImageryProvider instance:
Object.defineProperties(exports.prototype, {
  'ready': {
    'get': /** @this {olcs.core.OLImageryProvider} */
    function get() {
      return this.ready_;
    }
  },

  'rectangle': {
    'get': /** @this {olcs.core.OLImageryProvider} */
    function get() {
      return this.rectangle_;
    }
  },

  'tileWidth': {
    'get': /** @this {olcs.core.OLImageryProvider} */
    function get() {
      var tg = this.source_.getTileGrid();
      return tg ? Array.isArray(tg.getTileSize(0)) ? tg.getTileSize(0)[0] : tg.getTileSize(0) : 256;
    }
  },

  'tileHeight': {
    'get': /** @this {olcs.core.OLImageryProvider} */
    function get() {
      var tg = this.source_.getTileGrid();
      return tg ? Array.isArray(tg.getTileSize(0)) ? tg.getTileSize(0)[1] : tg.getTileSize(0) : 256;
    }
  },

  'maximumLevel': {
    'get': /** @this {olcs.core.OLImageryProvider} */
    function get() {
      var tg = this.source_.getTileGrid();
      return tg ? tg.getMaxZoom() : 18;
    }
  },

  'minimumLevel': {
    'get': /** @this {olcs.core.OLImageryProvider} */
    function get() {
      // WARNING: Do not use the minimum level (at least until the extent is
      // properly set). Cesium assumes the minimumLevel to contain only
      // a few tiles and tries to load them all at once -- this can
      // freeze and/or crash the browser !
      return 0;
      //var tg = this.source_.getTileGrid();
      //return tg ? tg.getMinZoom() : 0;
    }
  },

  'tilingScheme': {
    'get': /** @this {olcs.core.OLImageryProvider} */
    function get() {
      return this.tilingScheme_;
    }
  },

  'tileDiscardPolicy': {
    'get': function get() {
      return undefined;
    }
  },

  'errorEvent': {
    'get': /** @this {olcs.core.OLImageryProvider} */
    function get() {
      return this.errorEvent_;
    }
  },

  'credit': {
    'get': /** @this {olcs.core.OLImageryProvider} */
    function get() {
      return this.credit_;
    }
  },

  'proxy': {
    'get': /** @this {olcs.core.OLImageryProvider} */
    function get() {
      return this.proxy_;
    }
  },

  'hasAlphaChannel': {
    'get': function get() {
      return true;
    }
  },

  'pickFeatures': {
    'get': function get() {
      return undefined;
    }
  }
});

/**
 * Checks if the underlying source is ready and cached required data.
 * @private
 */
exports.prototype.handleSourceChanged_ = function () {
  if (!this.ready_ && this.source_.getState() == 'ready') {
    this.projection_ = _util_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSourceProjection(this.source_) || this.fallbackProj_;
    if (this.projection_ == ol_proj_js__WEBPACK_IMPORTED_MODULE_0__["get"]('EPSG:4326')) {
      this.tilingScheme_ = new Cesium.GeographicTilingScheme();
    } else if (this.projection_ == ol_proj_js__WEBPACK_IMPORTED_MODULE_0__["get"]('EPSG:3857')) {
      this.tilingScheme_ = new Cesium.WebMercatorTilingScheme();
    } else {
      return;
    }
    this.rectangle_ = this.tilingScheme_.rectangle;

    this.credit_ = exports.createCreditForSource(this.source_);
    this.ready_ = true;
  }
};

/**
 * Try to create proper Cesium.Credit for the given ol.source.Source as closely as possible.
 * @param {!ol.source.Source} source
 * @return {?Cesium.Credit}
 */
exports.createCreditForSource = function (source) {
  var text = '';
  var attributions = source.getAttributions();
  if (typeof attributions === 'function') {
    attributions = attributions();
  }
  if (attributions) {
    attributions.forEach(function (htmlOrAttr) {
      var html = typeof htmlOrAttr === 'string' ? htmlOrAttr : htmlOrAttr.getHTML();
      text += html;
    });
  }

  return text.length > 0 ? new Cesium.Credit(text, true) : null;
};

/**
 * TODO: attributions for individual tile ranges
 * @export
 * @override
 */
exports.prototype.getTileCredits = function (x, y, level) {
  return undefined;
};

/**
 * @export
 * @override
 */
exports.prototype.requestImage = function (x, y, level) {
  var tileUrlFunction = this.source_.getTileUrlFunction();
  if (tileUrlFunction && this.projection_) {

    // Perform mapping of Cesium tile coordinates to OpenLayers tile coordinates:
    // 1) Cesium zoom level 0 is OpenLayers zoom level 1 for EPSG:4326
    var z_ = this.tilingScheme_ instanceof Cesium.GeographicTilingScheme ? level + 1 : level;
    // 2) OpenLayers tile coordinates increase from bottom to top
    var y_ = -y - 1;

    var url = tileUrlFunction.call(this.source_, [z_, x, y_], 1, this.projection_);
    if (this.proxy_) {
      url = this.proxy_.getURL(url);
    }
    return url ? Cesium.ImageryProvider.loadImage(this, url) : this.emptyCanvas_;
  } else {
    // return empty canvas to stop Cesium from retrying later
    return this.emptyCanvas_;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/core/VectorLayerCounterpart.js":
/*!*************************************************!*\
  !*** ./src/olcs/core/VectorLayerCounterpart.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/Observable.js */ "ol/Observable.js");
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ol_Observable_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @module olcs.core.VectorLayerCounterpart
 */


/**
 * Result of the conversion of an OpenLayers layer to Cesium.
 * @constructor
 * @struct
 * @param {!(ol.proj.Projection|string)} layerProjection
 * @param {!Cesium.Scene} scene
 */
var exports = function exports(layerProjection, scene) {
  var billboards = new Cesium.BillboardCollection({ scene: scene });
  var primitives = new Cesium.PrimitiveCollection();

  /**
   * @type {!Array.<ol.EventsKey>}
   */
  this.olListenKeys = [];

  this.rootCollection_ = new Cesium.PrimitiveCollection();
  /**
   * @type {!olcsx.core.OlFeatureToCesiumContext}
   */
  this.context = {
    projection: layerProjection,
    billboards: billboards,
    featureToCesiumMap: {},
    primitives: primitives
  };

  this.rootCollection_.add(billboards);
  this.rootCollection_.add(primitives);
};

/**
 * Unlisten.
 */
exports.prototype.destroy = function () {
  this.olListenKeys.forEach(ol_Observable_js__WEBPACK_IMPORTED_MODULE_0__["unByKey"]);
  this.olListenKeys.length = 0;
};

/**
 * @return {!Cesium.Primitive}
 */
exports.prototype.getRootPrimitive = function () {
  return this.rootCollection_;
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/util.js":
/*!**************************!*\
  !*** ./src/olcs/util.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @module olcs.util
 */
var exports = {};

/**
 * Cast to object.
 * @param {Object} param
 * @return {Object}
 */
exports.obj = function (param) {
  return param;
};

/**
 * @type {boolean|undefined}
 * @private
 */
exports.supportsImageRenderingPixelatedResult_ = undefined;

/**
 * @type {string|undefined}
 * @private
 */
exports.imageRenderingValueResult_ = undefined;

/**
 * @return {boolean}
 */
exports.supportsImageRenderingPixelated = function () {
  if (exports.supportsImageRenderingPixelatedResult_ === undefined) {
    var canvas = document.createElement('canvas');
    canvas.setAttribute('style', 'image-rendering: -moz-crisp-edges; image-rendering: pixelated;');
    // canvas.style.imageRendering will be undefined, null or an
    // empty string on unsupported browsers.
    var tmp = canvas.style['imageRendering']; // non standard
    exports.supportsImageRenderingPixelatedResult_ = !!tmp;
    if (exports.supportsImageRenderingPixelatedResult_) {
      exports.imageRenderingValueResult_ = tmp;
    }
  }
  return exports.supportsImageRenderingPixelatedResult_;
};

/**
 * @return {string}
 */
exports.imageRenderingValue = function () {
  exports.supportsImageRenderingPixelated();
  return exports.imageRenderingValueResult_ || '';
};

/**
 * Return the projection of the source that Cesium should use.
 *
 * @param {ol.source.Source} source Source.
 * @returns {ol.proj.Projection} The projection of the source.
 */
exports.getSourceProjection = function (source) {
  return (/** @type {ol.proj.Projection} */source.get('olcs.projection') || source.getProjection()
  );
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "ol/Observable.js":
/*!***********************************!*\
  !*** external "ol/Observable.js" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_Observable_js__;

/***/ }),

/***/ "ol/Overlay.js":
/*!********************************!*\
  !*** external "ol/Overlay.js" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_Overlay_js__;

/***/ }),

/***/ "ol/array.js":
/*!******************************!*\
  !*** external "ol/array.js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_array_js__;

/***/ }),

/***/ "ol/dom.js":
/*!****************************!*\
  !*** external "ol/dom.js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_dom_js__;

/***/ }),

/***/ "ol/easing.js":
/*!*******************************!*\
  !*** external "ol/easing.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_easing_js__;

/***/ }),

/***/ "ol/events.js":
/*!*******************************!*\
  !*** external "ol/events.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_events_js__;

/***/ }),

/***/ "ol/extent.js":
/*!*******************************!*\
  !*** external "ol/extent.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_extent_js__;

/***/ }),

/***/ "ol/geom/Geometry.js":
/*!**************************************!*\
  !*** external "ol/geom/Geometry.js" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_geom_Geometry_js__;

/***/ }),

/***/ "ol/geom/Point.js":
/*!***********************************!*\
  !*** external "ol/geom/Point.js" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_geom_Point_js__;

/***/ }),

/***/ "ol/geom/SimpleGeometry.js":
/*!********************************************!*\
  !*** external "ol/geom/SimpleGeometry.js" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_geom_SimpleGeometry_js__;

/***/ }),

/***/ "ol/index.js":
/*!******************************!*\
  !*** external "ol/index.js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_index_js__;

/***/ }),

/***/ "ol/layer/Group.js":
/*!************************************!*\
  !*** external "ol/layer/Group.js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_layer_Group_js__;

/***/ }),

/***/ "ol/layer/Image.js":
/*!************************************!*\
  !*** external "ol/layer/Image.js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_layer_Image_js__;

/***/ }),

/***/ "ol/layer/Layer.js":
/*!************************************!*\
  !*** external "ol/layer/Layer.js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_layer_Layer_js__;

/***/ }),

/***/ "ol/layer/Tile.js":
/*!***********************************!*\
  !*** external "ol/layer/Tile.js" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_layer_Tile_js__;

/***/ }),

/***/ "ol/layer/Vector.js":
/*!*************************************!*\
  !*** external "ol/layer/Vector.js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_layer_Vector_js__;

/***/ }),

/***/ "ol/math.js":
/*!*****************************!*\
  !*** external "ol/math.js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_math_js__;

/***/ }),

/***/ "ol/proj.js":
/*!*****************************!*\
  !*** external "ol/proj.js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_proj_js__;

/***/ }),

/***/ "ol/source/Cluster.js":
/*!***************************************!*\
  !*** external "ol/source/Cluster.js" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_source_Cluster_js__;

/***/ }),

/***/ "ol/source/Image.js":
/*!*************************************!*\
  !*** external "ol/source/Image.js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_source_Image_js__;

/***/ }),

/***/ "ol/source/ImageWMS.js":
/*!****************************************!*\
  !*** external "ol/source/ImageWMS.js" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_source_ImageWMS_js__;

/***/ }),

/***/ "ol/source/TileImage.js":
/*!*****************************************!*\
  !*** external "ol/source/TileImage.js" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_source_TileImage_js__;

/***/ }),

/***/ "ol/source/TileWMS.js":
/*!***************************************!*\
  !*** external "ol/source/TileWMS.js" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_source_TileWMS_js__;

/***/ }),

/***/ "ol/source/Vector.js":
/*!**************************************!*\
  !*** external "ol/source/Vector.js" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_source_Vector_js__;

/***/ }),

/***/ "ol/style/Icon.js":
/*!***********************************!*\
  !*** external "ol/style/Icon.js" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_style_Icon_js__;

/***/ })

/******/ });
});
//# sourceMappingURL=olcesium.js.map