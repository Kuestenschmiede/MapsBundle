/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-portside-editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-maps-control-portside-editor.js":
/*!*****************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-portside-editor.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @constructor
   * @extend {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   */

  c4g.maps.control.Editor = function (options) {

    // extend options
    this.options = $.extend({
      name: 'editor',
      type: 'frontend',
      dataField: false,
      create: true,
      mapController: undefined,
      drawModes: ['Point', 'Line', 'Polygon', 'Circle', 'Freehand'],
      direction: 'left',
      headline: c4g.maps.constant.i18n.EDITOR
      // initMode: 'select'
    }, options);

    if (!this.options.mapController) {
      console.warn('Coul not initiallize Editor, without valid mapController.');
      return false;
    }

    //c4g.maps.hook.editor_loadTabs = [];
    //c4g.maps.hook.editor_featureChanged = [];
    this.tabs = [];
    // @TODO
    // this.typeLayer = undefined;
    // this.activeMode = this.options.initMode;
    // this.vectorSource = new ol.source.Vector();
    // this.activeDrawInteraction = undefined;
    this.lastDrawInteraction = undefined;
    this.proxy = this.options.mapController.proxy;

    if (this.options.dataField && typeof this.options.dataField === 'string') {
      this.options.dataField = $(this.options.dataField) || false;
    }

    // call parent constructor
    c4g.maps.control.Sideboard.call(this, this.options);
  };
  ol.inherits(c4g.maps.control.Editor, c4g.maps.control.Sideboard);

  /**
   * Methods
   */
  c4g.maps.control.Editor.prototype = $.extend(c4g.maps.control.Editor.prototype, {

    /**
     * Executed when the editor will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
    init: function init(opt_externalinit) {
      var self, layerStyleFunction, viewSelect;

      self = this;
      this.spinner.show();

      layerStyleFunction = function layerStyleFunction(feature, projection) {
        var styleId;

        if (feature && typeof feature.get === 'function') {
          // get the styleId of the current feature
          styleId = feature.get('styleId');
          // and execute the appropriate function
          if (self.proxy.locationStyleController.arrLocStyles[styleId]) {
            return self.proxy.locationStyleController.arrLocStyles[styleId].style(feature, projection);
          }
        }
        return false;
      };

      // Add editor layers
      this.editPointLayer = new ol.layer.Vector({ source: new ol.source.Vector(), style: layerStyleFunction });
      this.editLineLayer = new ol.layer.Vector({ source: new ol.source.Vector(), style: layerStyleFunction });
      this.editPolygonLayer = new ol.layer.Vector({ source: new ol.source.Vector(), style: layerStyleFunction });
      this.editCircleLayer = new ol.layer.Vector({ source: new ol.source.Vector(), style: layerStyleFunction });
      this.editFreehandLayer = new ol.layer.Vector({ source: new ol.source.Vector(), style: layerStyleFunction });

      this.editLayerGroup = new ol.layer.Group({
        layers: new ol.Collection([this.editFreehandLayer, this.editCircleLayer, this.editPolygonLayer, this.editLineLayer, this.editPointLayer]),
        visible: true
      });
      this.options.mapController.map.addLayer(this.editLayerGroup);

      // Add and activate select view
      this.tabs.push(this.addSelectView());
      this.tabs[0].activate();

      //   AJAX: get editor config
      $.getJSON(self.options.mapController.data.api.editor + '/' + self.options.mapController.data.profile)
      // Create views for draw-features with at least one locationstyle
      .done(function (data) {

        // Draw-point view
        if (data.styles_point.length && data.styles_point.length > 0) {
          self.tabs.push(self.addDrawView({ type: 'Point', styleIds: data.styles_point }));
        }
        // Draw-line view
        if (data.styles_line.length && data.styles_line.length > 0) {
          self.tabs.push(self.addDrawView({ type: 'LineString', styleIds: data.styles_line }));
        }
        // Draw-polygon view
        if (data.styles_polygon.length && data.styles_polygon.length > 0) {
          self.tabs.push(self.addDrawView({ type: 'Polygon', styleIds: data.styles_polygon }));
        }
        // Draw-circle view
        if (data.styles_circle.length && data.styles_circle.length > 0) {
          self.tabs.push(self.addDrawView({ type: 'Circle', styleIds: data.styles_circle }));
        }
        // Draw-freehand view
        if (data.styles_freehand.length && data.styles_freehand.length > 0) {
          self.tabs.push(self.addDrawView({ type: 'Freehand', styleIds: data.styles_freehand }));
        }
        // Call hook function for dynamically added tabs
        if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.editor_loadTabs) === 'object') {
          c4g.maps.utils.callHookFunctions(c4g.maps.hook.editor_loadTabs, self);
        }

        return true;
      }).fail(function () {
        // @TODO error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the editor configuration...');
        return false;
      }).always(function () {
        var layers;
        if (self.options.type === 'backend') {
          // import GeoJSON when in backend mode
          self.importGeoJSON();
        } else {
          // load session-features when in frontend mode
          self.load();
        }
        // Add autosave to the layers when a feature is added
        layers = self.editLayerGroup.getLayers();
        layers.forEach(function (element, index, array) {
          element.getSource().on('addfeature', function () {
            self.save();
          });
        });

        //self.editPointLayer.getSource().on('addfeature', function () {self.save(); });
        //self.editLineLayer.getSource().on('addfeature', function () {self.save(); });
        //self.editPolygonLayer.getSource().on('addfeature', function () {self.save(); });
        self.spinner.hide();
      });
      if (opt_externalinit) {
        this.initialized = true;
      }

      return true;
    },

    /**
     * Executed before editor will be closed
     *
     * @return  {[type]}  [description]
     */
    preCloseFunction: function preCloseFunction() {
      if (this.editLayerGroup.getVisible()) {
        this.editLayerGroup.setVisible(false);
        this.options.mapController.map.removeLayer(this.editLayerGroup);
      }
    },

    /**
     * Executed before editor will be open
     *
     * @return  {[type]}  [description]
     */
    preOpenFunction: function preOpenFunction() {
      if (!this.editLayerGroup.getVisible()) {
        this.editLayerGroup.setVisible(true);
        this.options.mapController.map.addLayer(this.editLayerGroup);
      }
    },

    addSelectView: function addSelectView() {
      var self, selectInteraction, selectBoxInteraction, selectedFeatures, selectContentWrapper, selectContentHeadline, selectContent, selectContentInfo, selectView, fnHandleSelection;

      self = this;

      selectContentWrapper = document.createElement('div');

      selectContentHeadline = document.createElement('div');
      selectContentHeadline.innerHTML = c4g.maps.constant.i18n.EDITOR_VIEW_TRIGGER_SELECT;
      selectContentHeadline.className = 'contentHeadline';
      selectContentWrapper.appendChild(selectContentHeadline);

      selectContent = document.createElement('div');
      selectContent.className = c4g.maps.constant.css.EDITOR_CONTENT_SELECT;
      selectContentInfo = document.createElement('p');
      selectContentInfo.innerHTML = c4g.maps.constant.i18n.EDITOR_SELECT_INFO;
      selectContentInfo.innerHTML += '<br><br><sub>' + c4g.maps.constant.i18n.EDITOR_SELECT_INFO_ADDITIONAL + '</sub>';
      selectContent.appendChild(selectContentInfo);
      selectContentWrapper.appendChild(selectContent);

      selectView = this.addView({
        name: 'select',
        triggerConfig: {
          tipLabel: c4g.maps.constant.i18n.EDITOR_VIEW_TRIGGER_SELECT,
          className: c4g.maps.constant.css.EDITOR_VIEW_TRIGGER_SELECT,
          withHeadline: true
        },
        sectionElements: [{ section: this.contentContainer, element: selectContentWrapper }, { section: this.topToolbar, element: this.viewTriggerBar }],
        initFunction: function initFunction() {
          selectInteraction = new ol.interaction.Select({
            layers: self.editLayerGroup.getLayers().getArray(),
            toggleCondition: ol.events.condition.platformModifierKeyOnly,
            style: function style(feature, projection) {
              var styleId, styleArray, styleRadius;

              if (feature && typeof feature.get === 'function') {
                // get the styleId of the current feature
                styleId = feature.get('styleId');
                // and execute the appropriate function
                if (self.proxy.locationStyleController.arrLocStyles[styleId]) {
                  styleArray = self.proxy.locationStyleController.arrLocStyles[styleId].style(feature, projection);

                  if (typeof styleArray[0].getImage === 'function' && styleArray[0].getImage() instanceof ol.style.Icon) {
                    styleRadius = 5;
                  } else {
                    styleRadius = parseInt(styleArray[0].getImage().getRadius(), 10) + 4;
                  }

                  styleArray.push(new ol.style.Style({
                    image: new ol.style.Circle({
                      stroke: new ol.style.Stroke({
                        color: 'rgba(255,255,255,.7)',
                        width: 5
                      }),
                      radius: styleRadius
                    }),
                    stroke: new ol.style.Stroke({
                      color: 'rgba(255,255,255,.7)',
                      width: 5
                    }),
                    fill: new ol.style.Fill({
                      color: 'rgba(255,255,255,.5)'
                    })
                  }));

                  return styleArray;
                }
              }
              return false;
            }
          }); // selectInteraction

          selectedFeatures = selectInteraction.getFeatures();

          selectBoxInteraction = new ol.interaction.DragBox({ condition: ol.events.condition.shiftKeyOnly });

          selectBoxInteraction.on('boxend', function (e) {
            var extent = selectBoxInteraction.getGeometry().getExtent();

            self.editLayerGroup.getLayers().forEach(function (layer) {
              layer.getSource().forEachFeatureIntersectingExtent(extent, function (feature) {
                selectedFeatures.push(feature);
              });
            });

            fnHandleSelection();
          });

          // clear selection when drawing a new box and when clicking on the map
          selectBoxInteraction.on('boxstart', function (e) {
            selectedFeatures.clear();
            fnHandleSelection();
          });

          fnHandleSelection = function fnHandleSelection() {
            var i, j, label, editorVars, headlineElement, inputNameElement, modifyButtonElement, deleteButtonElement, paragraphElement, strongElement, inputElement, featureCount, selectedFeature, blurOnEnter, inputChangeHandler, nameChangeHandler, modifyFeatureFunction, deleteFeatureFunction, renderSelectedFeaturesList;

            if (typeof self.applyFeatureModification === 'function') {
              self.applyFeatureModification();
            }

            blurOnEnter = function blurOnEnter(event) {
              if (event.which === 13) {
                try {
                  event.target.blur();
                } catch (ignore) {}
              }
            }; // end of "blurOnEnter()"

            nameChangeHandler = function nameChangeHandler(event) {
              var changedFeature;
              changedFeature = selectedFeatures.item(event.target.getAttribute('feat_id'));
              changedFeature.set('tooltip', c4g.maps.utils.encodeGeoJsonProperty(event.target.value || ''));
              self.save();
              // Call hook to notify the feature change
              if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.editor_featureChanged) === 'object') {
                c4g.maps.utils.callHookFunctions(c4g.maps.hook.editor_featureChanged, {
                  feature: changedFeature,
                  action: 'renamed'
                });
              }
            }; // end of "nameChangeHandler()"

            inputChangeHandler = function inputChangeHandler(event) {
              var currentVars, changedFeature;
              changedFeature = selectedFeatures.item(event.target.getAttribute('feat_id'));
              currentVars = changedFeature.get('editorVars');
              currentVars[event.target.getAttribute('var_id')].value = c4g.maps.utils.encodeGeoJsonProperty(event.target.value || '');
              changedFeature.set('editorVars', currentVars);
              self.save();
              // Call hook to notify the feature change
              if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.editor_featureChanged) === 'object') {
                c4g.maps.utils.callHookFunctions(c4g.maps.hook.editor_featureChanged, {
                  feature: changedFeature,
                  action: 'changed_var'
                });
              }
            }; // end of "inputChangeHandler()"

            modifyFeatureFunction = function modifyFeatureFunction(event) {
              var modifyFeature, featureGeometry, translateInteraction, modifyInteraction, modifyButton, applyButton;

              if (typeof self.applyFeatureModification === 'function') {
                self.applyFeatureModification();
              }

              modifyButton = event.target;

              // get feature that should be modified
              modifyFeature = selectedFeatures.item(modifyButton.getAttribute('feat_id'));
              if (!modifyFeature || typeof modifyFeature.getGeometry !== 'function') {
                return false;
              }

              featureGeometry = modifyFeature.getGeometry();
              translateInteraction = false;
              modifyInteraction = false;

              if (!(featureGeometry instanceof ol.geom.LineString)) {
                translateInteraction = new ol.interaction.Translate({
                  features: new ol.Collection([modifyFeature])
                });
                self.options.mapController.map.addInteraction(translateInteraction);
              }
              if (!(featureGeometry instanceof ol.geom.Point)) {
                modifyInteraction = new ol.interaction.Modify({
                  features: new ol.Collection([modifyFeature])
                });
                self.options.mapController.map.addInteraction(modifyInteraction);
              }

              selectInteraction.setActive(false);

              // add apply button
              applyButton = document.createElement('button');
              applyButton.className = c4g.maps.constant.css.ICON + ' ' + c4g.maps.constant.css.EDITOR_FEATURE_APPLY;
              applyButton.title = c4g.maps.constant.i18n.EDITOR_FEATURE_APPLY;
              applyButton.setAttribute('feat_id', i);

              self.applyFeatureModification = function (event) {
                if (translateInteraction) {
                  translateInteraction.setActive(false);
                  self.options.mapController.map.removeInteraction(translateInteraction);
                  translateInteraction = false;
                }
                if (modifyInteraction) {
                  self.options.mapController.map.removeInteraction(modifyInteraction);
                  modifyInteraction.setActive(false);
                  modifyInteraction = false;
                }
                selectInteraction.setActive(true);

                applyButton = applyButton.parentNode.replaceChild(modifyButton, applyButton);
                self.save();
                self.applyFeatureModification = false;
                // Call hook to notify the feature change
                if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.editor_featureChanged) === 'object') {
                  c4g.maps.utils.callHookFunctions(c4g.maps.hook.editor_featureChanged, {
                    feature: modifyFeature,
                    action: 'edited'
                  });
                }
              };

              $(applyButton).click(self.applyFeatureModification);
              modifyButton = modifyButton.parentNode.replaceChild(applyButton, modifyButton);
            }; // end of "modifyFeatureFunction()"

            deleteFeatureFunction = function deleteFeatureFunction(event) {
              var featureIndex, featureGeometry, featureSource, deleteFeature;

              if (typeof self.applyFeatureModification === 'function') {
                self.applyFeatureModification();
              }

              featureIndex = event.target.getAttribute('feat_id');
              deleteFeature = selectedFeatures.item(featureIndex);
              featureGeometry = deleteFeature.getGeometry();

              // find right source
              if (featureGeometry instanceof ol.geom.Point) {
                featureSource = self.editPointLayer.getSource();
              } else if (featureGeometry instanceof ol.geom.LineString) {
                featureSource = self.editLineLayer.getSource();
              } else if (featureGeometry instanceof ol.geom.Polygon) {
                featureSource = self.editPolygonLayer.getSource();
              } else if (featureGeometry instanceof ol.geom.Circle) {
                featureSource = self.editCircleLayer.getSource();
              } else {
                // could not find right source
                console.warn('Could not delete the feature. Unable to find appropriate source.');
                return false;
              }

              // remove Feature from the source
              try {
                featureSource.removeFeature(deleteFeature);
              } catch (ignore) {
                if (featureGeometry instanceof ol.geom.LineString) {
                  featureSource = self.editFreehandLayer.getSource();
                  featureSource.removeFeature(deleteFeature);
                }
              }
              // and from the selection
              selectedFeatures.remove(deleteFeature);

              // rerender the selectionList
              renderSelectedFeaturesList();
              self.save();
              // Call hook to notify the feature change
              // Maybe pass the remaining features instead of the deletedFeature ?
              // Or maybe a second hook for deletion, where both is passed ?
              if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.editor_featureChanged) === 'object') {
                c4g.maps.utils.callHookFunctions(c4g.maps.hook.editor_featureChanged, {
                  feature: deleteFeature,
                  action: 'deleted'
                });
              }
            }; // end of "deleteFeatureFunction()"

            renderSelectedFeaturesList = function renderSelectedFeaturesList() {
              featureCount = selectedFeatures.getLength();
              selectContent.innerHTML = '';
              if (featureCount > 0) {
                for (i = 0; i < featureCount; i += 1) {
                  selectedFeature = selectedFeatures.item(i);
                  headlineElement = document.createElement('h4');
                  // add name inputfield
                  inputNameElement = document.createElement('input');
                  inputNameElement.type = 'text';
                  inputNameElement.id = i;
                  inputNameElement.setAttribute('value', c4g.maps.utils.decodeGeoJsonProperty(selectedFeature.get('tooltip') || ''));
                  inputNameElement.setAttribute('feat_id', i);
                  $(inputNameElement).keydown(blurOnEnter);
                  inputNameElement.onchange = nameChangeHandler;
                  headlineElement.appendChild(inputNameElement);
                  // add modify button
                  modifyButtonElement = document.createElement('button');
                  modifyButtonElement.className = c4g.maps.constant.css.ICON + ' ' + c4g.maps.constant.css.EDITOR_FEATURE_MODIFY;
                  modifyButtonElement.title = c4g.maps.constant.i18n.EDITOR_FEATURE_MODIFY;
                  modifyButtonElement.setAttribute('feat_id', i);
                  $(modifyButtonElement).click(modifyFeatureFunction);
                  headlineElement.appendChild(modifyButtonElement);
                  // add delete button
                  deleteButtonElement = document.createElement('button');
                  deleteButtonElement.className = c4g.maps.constant.css.ICON + ' ' + c4g.maps.constant.css.EDITOR_FEATURE_DELETE;
                  deleteButtonElement.title = c4g.maps.constant.i18n.EDITOR_FEATURE_DELETE;
                  deleteButtonElement.setAttribute('feat_id', i);
                  $(deleteButtonElement).click(deleteFeatureFunction);
                  headlineElement.appendChild(deleteButtonElement);

                  selectContent.appendChild(headlineElement);
                  if (selectedFeature.get('measuredLength')) {
                    if (selectedFeature.getGeometry() instanceof ol.geom.LineString) {
                      label = c4g.maps.constant.i18n.LENGTH;
                    } else if (selectedFeature.getGeometry() instanceof ol.geom.Polygon) {
                      label = c4g.maps.constant.i18n.PERIMETER;
                    } else {
                      label = c4g.maps.constant.i18n.RADIUS;
                    }
                    paragraphElement = document.createElement('p');
                    paragraphElement.innerHTML += '<strong>' + label + ':</strong> ' + selectedFeature.get('measuredLength').htmlValue;
                    selectContent.appendChild(paragraphElement);
                  }
                  if (selectedFeature.get('measuredArea')) {
                    paragraphElement = document.createElement('p');
                    paragraphElement.innerHTML += '<strong>' + c4g.maps.constant.i18n.SURFACEAREA + ':</strong> ' + selectedFeature.get('measuredArea').htmlValue;
                    selectContent.appendChild(paragraphElement);
                  }
                  if (selectedFeature.get('measuredRadius')) {
                    paragraphElement = document.createElement('p');
                    paragraphElement.innerHTML += '<strong>' + c4g.maps.constant.i18n.RADIUS + ':</strong> ' + selectedFeature.get('measuredRadius').htmlValue;
                    selectContent.appendChild(paragraphElement);
                  }
                  // check and append editor-vars
                  editorVars = selectedFeature.get('editorVars');
                  for (j = 0; j < editorVars.length; j += 1) {
                    paragraphElement = document.createElement('p');
                    strongElement = document.createElement('strong');
                    strongElement.innerHTML = editorVars[j].label;

                    inputElement = document.createElement('input');
                    inputElement.type = 'text';
                    inputElement.id = i + '-' + j;
                    inputElement.setAttribute('value', c4g.maps.utils.decodeGeoJsonProperty(editorVars[j].value || ''));
                    inputElement.setAttribute('feat_id', i);
                    inputElement.setAttribute('var_id', j);
                    $(inputElement).keydown(blurOnEnter);
                    inputElement.onchange = inputChangeHandler;

                    paragraphElement.appendChild(strongElement);
                    paragraphElement.appendChild(document.createElement('br'));
                    paragraphElement.appendChild(inputElement);
                    selectContent.appendChild(paragraphElement);
                  }
                }
                selectContentHeadline.style.display = 'none';
                // self.statusBar.innerHTML = featureCount;
              } else {
                selectContent.appendChild(selectContentInfo);
                // self.statusBar.innerHTML = 0;
                selectContentHeadline.style.display = '';
              }
              self.update();
            }; // end of "renderSelectedFeaturesList"

            renderSelectedFeaturesList();
          }; // end of "fnHandleSelection"

          selectInteraction.on('select', function (event) {
            fnHandleSelection(event.target.getFeatures());
          });

          self.options.mapController.map.addInteraction(selectInteraction);
          self.options.mapController.map.addInteraction(selectBoxInteraction);
          return true;
        },
        activateFunction: function activateFunction() {

          // Disable mapHover
          self.options.mapController.mapHover.deactivate();

          // Reset display, if no features are selected
          if (selectInteraction.getFeatures().getLength() < 1) {
            selectContent.innerHTML = '';
            selectContent.appendChild(selectContentInfo);
            // self.statusBar.innerHTML = 0;
            selectContentHeadline.style.display = '';
          }

          // Enable interaction
          selectInteraction.setActive(true);
          self.options.mapController.map.addInteraction(selectInteraction);
          selectBoxInteraction.setActive(true);
          self.options.mapController.map.addInteraction(selectBoxInteraction);

          return true;
        },
        deactivateFunction: function deactivateFunction() {
          if (typeof self.applyFeatureModification === 'function') {
            self.applyFeatureModification();
          }
          // Disable interaction
          selectInteraction.setActive(false);
          self.options.mapController.map.removeInteraction(selectInteraction);
          selectBoxInteraction.setActive(false);
          self.options.mapController.map.removeInteraction(selectBoxInteraction);

          // enable mapHover
          self.options.mapController.mapHover.activate();

          return true;
        }
      });

      return selectView;
    },

    addDrawView: function addDrawView(options) {
      var self, TRIGGER_DRAW, drawContent, optionsDiv, enableInstantMeasureCheckbox, enableInstantMeasureCheckboxLabel,
      // enableFreehandDrawCheckbox,
      // enableFreehandDrawCheckboxLabel,
      checkboxChangeHandler, drawView, addDrawStyle, olType;

      self = this;

      options = $.extend({
        type: 'Point',
        styleIds: []
      }, options);

      checkboxChangeHandler = function checkboxChangeHandler(event) {
        // var interaction = self.options.mapController.map.interaction;
        // self.options.mapController.map.removeInteraction(interaction);
        // //self.options.mapController.map.addInteraction(interaction);

      };

      TRIGGER_DRAW = 'EDITOR_VIEW_TRIGGER_DRAW_' + options.type.toUpperCase();

      drawContent = document.createElement('div');
      drawContent.className = c4g.maps.constant.css['EDITOR_DRAW_CONTENT_' + options.type.toUpperCase()];
      drawContent.innerHTML = '<h4>' + c4g.maps.constant.i18n[TRIGGER_DRAW] + '</h4>';

      if (options.type.toLowerCase() !== 'point') {
        optionsDiv = document.createElement('div');
        optionsDiv.className = c4g.maps.constant.css.EDITOR_DRAW_OPTIONS;
        drawContent.appendChild(optionsDiv);

        enableInstantMeasureCheckbox = document.createElement('input');
        enableInstantMeasureCheckbox.type = 'checkbox';
        enableInstantMeasureCheckbox.id = 'enableInstantMeasureFor' + options.type;
        optionsDiv.appendChild(enableInstantMeasureCheckbox);

        enableInstantMeasureCheckboxLabel = document.createElement('label');
        enableInstantMeasureCheckboxLabel.setAttribute('for', 'enableInstantMeasureFor' + options.type);
        enableInstantMeasureCheckboxLabel.innerHTML = c4g.maps.constant.i18n.EDITOR_ENABLE_INSTANT_MEASURE;
        optionsDiv.appendChild(enableInstantMeasureCheckboxLabel);

        optionsDiv.appendChild(document.createElement('br'));

        // enableFreehandDrawCheckbox = document.createElement('input');
        // enableFreehandDrawCheckbox.type = 'checkbox';
        // enableFreehandDrawCheckbox.id = 'enableFreehandDrawFor' + options.type;
        // enableFreehandDrawCheckbox.onchange = checkboxChangeHandler;
        // optionsDiv.appendChild(enableFreehandDrawCheckbox);
        //
        // enableFreehandDrawCheckboxLabel = document.createElement('label');
        // enableFreehandDrawCheckboxLabel.setAttribute('for', 'enableFreehandDrawFor' + options.type);
        // enableFreehandDrawCheckboxLabel.innerHTML = c4g.maps.constant.i18n.EDITOR_ENABLE_FREEHAND_DRAW;
        // optionsDiv.appendChild(enableFreehandDrawCheckboxLabel);
      }

      addDrawStyle = function addDrawStyle(styleId) {
        var interactionView, source, interaction, features, editorStyle, style, styleData, styleIcon, svgSrc, styleImage, styleTriggerLabel, featureIdCount, name;

        // Style "shortcut"
        style = self.proxy.locationStyleController.arrLocStyles[styleId].style()[0];
        editorStyle = self.proxy.locationStyleController.arrLocStyles[styleId].editor;
        styleData = self.proxy.locationStyleController.arrLocStyles[styleId].locStyleArr;
        svgSrc = styleData.svgSrc;

        featureIdCount = 0;

        // Create label for interaction-trigger
        styleTriggerLabel = document.createElement('span');
        // @TODO use css-class for dimensions
        styleTriggerLabel.style.display = 'block';
        styleTriggerLabel.style.minWidth = '30px';
        styleTriggerLabel.style.minHeight = '30px';
        styleTriggerLabel.style.margin = '2px';
        // "style.getImage().getImage()", does not work in every case
        styleImage = style.getImage() || undefined;
        if (editorStyle.iconSrc || styleImage instanceof ol.style.Icon) {
          styleIcon = document.createElement('img');

          if (editorStyle.iconSrc && editorStyle.iconSrc.indexOf('.') != -1) {
            styleIcon.src = editorStyle.iconSrc;
            if (styleData.editor_icon_size) {
              styleIcon.height = styleData.editor_icon_size[0];
              styleIcon.width = styleData.editor_icon_size[1];
            } else {
              styleIcon.height = '32';
              styleIcon.width = '32';
            }
          } else {
            styleIcon.src = styleImage.getSrc();
            styleIcon.scale = styleImage.getScale();
          }
          styleTriggerLabel.appendChild(styleIcon);
        } else if (svgSrc) {
          if (styleData.svgSrc && styleData.icon_scale && styleData.icon_size) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext("2d");
            var height = styleData.icon_size[0] * styleData.icon_scale;
            var width = styleData.icon_size[1] * styleData.icon_scale;

            var strokewidth = 0;
            if (styleData.strokewidth && styleData.strokewidth.value) {
              strokewidth = styleData.strokewidth.value;
            }

            canvas.height = height + 2 * strokewidth;
            canvas.width = width + 2 * strokewidth;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (styleData.fillcolor) {
              ctx.fillStyle = c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.fillcolor, styleData.fillopacity.value);
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            if (strokewidth && styleData.strokecolor) {
              ctx.strokeStyle = c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.strokecolor, styleData.strokeopacity.value);
              ctx.lineWidth = strokewidth;
              ctx.strokeRect(0, 0, canvas.width, canvas.height);
              ctx.translate(0.5, 0.5);
            }

            // if (styleData.icon_opacity.value && (styleData.icon_opacity.value > 0)) {
            //     ctx.globalAlpha = (styleData.icon_opacity.value / 100);
            // }

            var img = new Image();
            img.src = styleData.svgSrc;
            img.zIndex = 100;

            img.onload = function () {
              ctx.drawImage(img, strokewidth, strokewidth, width, height);
            };

            styleIcon = canvas;

            styleTriggerLabel.style.width = width * scale + 'px';
            styleTriggerLabel.style.height = height * scale + 'px';
          }
        } else {
          styleTriggerLabel.style.background = style.getFill().getColor();
          styleTriggerLabel.style.border = '1px solid ' + style.getStroke().getColor();
        }

        // Create interactionView
        //   "addView" will be used for this, because the functionality
        //   ist mostly equal
        name = self.proxy.locationStyleController.arrLocStyles[styleId].name.replace("&#40;", "(").replace("&#41;", ")");
        interactionView = self.addView({
          name: 'draw:' + (self.proxy.locationStyleController.arrLocStyles[styleId].tooltip || name),
          triggerConfig: {
            label: styleTriggerLabel,
            tipLabel: self.proxy.locationStyleController.arrLocStyles[styleId].tooltip || name,
            className: c4g.maps.constant.css.EDITOR_DRAW_TRIGGER,
            target: drawContent,
            withHeadline: true
          },
          sectionElements: [{ section: self.contentContainer, element: drawContent }, { section: self.topToolbar, element: self.viewTriggerBar }],
          initFunction: function initFunction() {
            var interactionStyleImage, activeSketch, activeTooltip;

            // Only show original icon, when the drawing POIs
            if (options.type.toLowerCase() === 'point' && style.getImage()) {
              interactionStyleImage = style.getImage();
            } else {
              interactionStyleImage = new ol.style.Circle({
                fill: style.getFill(),
                stroke: style.getStroke(),
                radius: 5
              });
            }

            // Get appropriate source
            switch (options.type.toLowerCase()) {
              case 'freehand':
                source = self.editFreehandLayer.getSource();
                break;
              case 'circle':
                source = self.editCircleLayer.getSource();
                break;
              case 'polygon':
                source = self.editPolygonLayer.getSource();
                break;
              case 'linestring':
                source = self.editLineLayer.getSource();
                break;
              case 'point':
              default:
                source = self.editPointLayer.getSource();
                break;
            }

            olType = options.type;
            if (olType == 'Freehand') {
              olType = 'LineString';
            }

            features = new ol.Collection();
            interaction = new ol.interaction.Draw({
              features: features,
              source: source,
              type: olType,
              freehand: options.type == 'Freehand',
              style: [new ol.style.Style({
                stroke: new ol.style.Stroke({
                  color: 'rgba(255,255,255,.5)',
                  width: style.getStroke().getWidth() + 2
                }),
                image: interactionStyleImage
              }), new ol.style.Style({
                geometry: style.getGeometry(),
                fill: style.getFill(),
                stroke: style.getStroke()
              })]
            });

            // @TODO doku
            //
            interaction.on('drawstart', function (event) {
              activeSketch = event.feature;
              activeSketch.set('styleId', styleId);

              if (enableInstantMeasureCheckbox && enableInstantMeasureCheckbox.checked) {
                activeTooltip = new c4g.maps.misc.TooltipPopUp({
                  map: self.options.mapController.map,
                  position: event.coordinate,
                  horizontal: true
                });
              }
            }, self);

            // @TODO doku
            //
            self.options.mapController.map.on('pointermove', function (event) {
              if (enableInstantMeasureCheckbox && enableInstantMeasureCheckbox.checked && activeSketch) {
                if (activeTooltip && c4g.maps.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue && c4g.maps.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue == "0.00") {
                  activeTooltip.close();
                  activeTooltip = null;
                } else if (!activeTooltip && c4g.maps.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue && c4g.maps.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue != "0.00") {
                  activeTooltip = new c4g.maps.misc.TooltipPopUp({
                    map: self.options.mapController.map,
                    position: event.coordinate,
                    horizontal: true
                  });
                }
                if (activeTooltip) {
                  activeTooltip.setPosition(event.coordinate);
                  activeTooltip.setContent(c4g.maps.utils.measureGeometry(activeSketch.getGeometry(), true).htmlValue);
                }
              }
            }, self);

            // @TODO doku
            //
            interaction.on('drawend', function (event) {
              var i, vars, editorVars, name;

              // name the feature
              featureIdCount += 1;
              name = self.proxy.locationStyleController.arrLocStyles[styleId].name.replace("&#40;", "(").replace("&#41;", ")");
              activeSketch.set('tooltip', (self.proxy.locationStyleController.arrLocStyles[styleId].tooltip || name) + ' (' + featureIdCount + ')');
              // add styleId
              activeSketch.set('styleId', styleId);
              // add measurements to the feature
              activeSketch.set('measuredLength', c4g.maps.utils.measureGeometry(activeSketch.getGeometry(), true));
              if (options.type.toLowerCase() === 'polygon') {
                activeSketch.set('measuredArea', c4g.maps.utils.measureGeometry(activeSketch.getGeometry()));
              }
              if (options.type.toLowerCase() === 'circle') {
                activeSketch.set('measuredRadius', c4g.maps.utils.measureGeometry(activeSketch.getGeometry()));
              }
              //activeSketch.setStyle(self.proxy.locationStyleController.arrLocStyles[styleId].style);
              // add editor-vars
              vars = editorStyle.vars;
              editorVars = [];
              for (i = 0; i < vars.length; i += 1) {
                editorVars[i] = {};
                editorVars[i].key = vars[i].key;
                editorVars[i].label = vars[i].value;
                editorVars[i].value = '';
              }
              activeSketch.set('editorVars', editorVars);
              // reset active-element variables
              activeSketch = null;
              if (activeTooltip) {
                activeTooltip.close();
                activeTooltip = null;
              }
            }, self);

            self.options.mapController.map.addInteraction(interaction);
            return true;
          }, // end of "initFunction()"

          activateFunction: function activateFunction() {

            // deactivate mapHover
            self.options.mapController.mapHover.deactivate();

            // Reset feature-list
            features.clear();

            // Enable interaction
            // self.options.mapController.map.addInteraction(interaction);
            interaction.setActive(true);
            return true;
          },

          deactivateFunction: function deactivateFunction() {

            // reactivate mapHover
            self.options.mapController.mapHover.activate();

            // finish drawings, if not already done
            if (options.type.toLowerCase() !== 'point') {
              try {
                interaction.finishDrawing();
              } catch (ignore) {
                // 0_o
              }
            }

            // Remove from map
            // self.options.mapController.map.removeInteraction(interaction);
            interaction.setActive(false);
            return true;
          }
        }, drawView);

        return interactionView;
      };

      drawView = self.addView({
        name: 'draw:' + options.type.toLowerCase(),
        triggerConfig: {
          tipLabel: c4g.maps.constant.i18n[TRIGGER_DRAW],
          className: c4g.maps.constant.css[TRIGGER_DRAW],
          withHeadline: true
        },
        sectionElements: [{ section: self.contentContainer, element: drawContent }, { section: self.topToolbar, element: self.viewTriggerBar }],
        initFunction: function initFunction() {
          var i, styleId, neededStyles, sortAndAddStyles;

          // Show loading animation
          self.spinner.show();

          neededStyles = [];

          /**
           * @TODO
           * [sortAndAddStyles description]
           *
           * @return  {[type]}  [description]
           */
          sortAndAddStyles = function sortAndAddStyles(arrStyleIds) {
            var j, locationStyles, drawInteraction, styleIds;

            // prepare
            locationStyles = self.proxy.locationStyleController.arrLocStyles;
            styleIds = arrStyleIds || options.styleIds;
            if (!styleIds || !locationStyles) {
              return false;
            }

            // sort
            styleIds.sort(function (a, b) {

              //ToDo check
              if (locationStyles[a] && locationStyles[b] && locationStyles[a].editor) {
                if (!locationStyles[a].editor.sort && !locationStyles[b].editor.sort || locationStyles[a].editor.sort === locationStyles[b].editor.sort) {
                  if (!locationStyles[a].name || !locationStyles[b].name) {
                    return !locationStyles[b].name ? -1 : 1;
                  }
                  return locationStyles[a].name.toLowerCase() > locationStyles[b].name.toLowerCase() ? 1 : -1;
                }
                if (!locationStyles[a].editor.sort || !locationStyles[b].editor.sort) {
                  return !locationStyles[b].editor.sort ? -1 : 1;
                }

                return locationStyles[a].editor.sort > locationStyles[b].editor.sort ? 1 : -1;
              } else {
                return -1;
              }
            }); // end sort

            // create
            for (j = 0; j < styleIds.length; j += 1) {
              drawInteraction = addDrawStyle(styleIds[j]);
              // activate the first drawStyle
              if (j === 0) {
                drawInteraction.activate();
              }
            }

            // success
            self.update();
            return true;
          }; // end of "sortAndAddStyles"

          // Make sure that all needed styles are loaded
          if (!self.proxy.locationStyleController.arrLocStyles) {
            // no styles are loaded, so load all styles
            self.proxy.locationStyleController.arrLocStyles = {};
            neededStyles = options.styleIds;
          } else {
            // check wich styles are missing
            for (i = 0; i < options.styleIds.length; i += 1) {
              styleId = options.styleIds[i];
              if (!self.proxy.locationStyleController.arrLocStyles[styleId] || !self.proxy.locationStyleController.arrLocStyles[styleId].style) {
                neededStyles.push(styleId);
              }
            }
          }

          if (neededStyles.length > 0) {
            if (!self.proxy) {
              console.warn('Could not load locStyles, as the map-proxy was not initiallized.');
            }
            self.proxy.locationStyleController.loadLocationStyles(neededStyles, {
              done: function done() {
                sortAndAddStyles();
              },
              always: function always() {
                // Hide loading-animation
                self.spinner.hide();
                self.update();
              }
            });
          } else {
            sortAndAddStyles();
            self.update();
            self.spinner.hide();
          }

          return true;
        },
        activateFunction: function activateFunction() {
          return true;
        },
        deactivateFunction: function deactivateFunction() {
          return true;
        }
      });

      return drawView;
    },

    /**
     * If opt_slot is empty, the function will just save the data in the sessionStorage.
     * [save description]
     *
     * @param   {[type]}  opt_slot  [description]
     *
     * @return  {[type]}            [description]
     */
    save: function save(opt_slot) {
      var format, saveData, slotName, storage;

      if (this.options.type === 'backend') {
        return this.exportGeoJSON();
      }

      format = new ol.format.GeoJSON();
      saveData = {};

      saveData.points = format.writeFeatures(this.editPointLayer.getSource().getFeatures());
      saveData.lines = format.writeFeatures(this.editLineLayer.getSource().getFeatures());
      saveData.polygons = format.writeFeatures(this.editPolygonLayer.getSource().getFeatures());
      saveData.circles = format.writeFeatures(this.editCircleLayer.getSource().getFeatures());
      saveData.freehand = format.writeFeatures(this.editFreehandLayer.getSource().getFeatures());

      slotName = 'c4gMaps_';
      slotName += this.options.mapController.data.mapId;
      slotName += '_' + window.location.pathname;
      if (!opt_slot) {
        storage = window.sessionStorage;
      } else {
        slotName += '_' + opt_slot;
        storage = window.localStorage;
      }
      // Call hook functions before save
      if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.editor_onSave) === 'object') {
        c4g.maps.utils.callHookFunctions(c4g.maps.hook.editor_onSave, saveData);
      }
      storage.setItem(slotName, JSON.stringify(saveData));
    },

    /**
     * If opt_slot is empty, the function will just load the data from the sessionStorage.
     * [load description]
     *
     * @param   {[type]}  opt_slot  [description]
     *
     * @return  {boolean}            [description]
     */
    load: function load(opt_slot) {
      var i, self, format, loadData, featureCollection, slotName, storage, neededStyles, styleId, importFeatures;

      self = this;
      format = new ol.format.GeoJSON();
      self.spinner.show();

      slotName = 'c4gMaps_';
      slotName += this.options.mapController.data.mapId;
      slotName += '_' + window.location.pathname;
      if (!opt_slot) {
        storage = window.sessionStorage;
      } else {
        slotName += '_' + opt_slot;
        storage = window.localStorage;
      }
      loadData = storage.getItem(slotName);
      if (!loadData) {
        self.spinner.hide();
        return false;
      }
      loadData = JSON.parse(loadData);

      featureCollection = [];
      neededStyles = [];

      featureCollection = format.readFeatures(loadData.points).concat(format.readFeatures(loadData.lines), format.readFeatures(loadData.polygons), format.readFeatures(loadData.circles), format.readFeatures(loadData.freehand));
      for (i = 0; i < featureCollection.length; i += 1) {
        styleId = featureCollection[i].get('styleId');

        if ((!self.proxy.locationStyleController.arrLocStyles[styleId] || !self.proxy.locationStyleController.arrLocStyles[styleId].style) && $.inArray(styleId, neededStyles) === -1) {
          neededStyles.push(styleId);
        }
      }

      importFeatures = function importFeatures() {
        self.editPointLayer.getSource().addFeatures(format.readFeatures(loadData.points));
        self.editLineLayer.getSource().addFeatures(format.readFeatures(loadData.lines));
        self.editPolygonLayer.getSource().addFeatures(format.readFeatures(loadData.polygons));
        self.editCircleLayer.getSource().addFeatures(format.readFeatures(loadData.circles));
        self.editFreehandLayer.getSource().addFeatures(format.readFeatures(loadData.freehand));
      };

      if (neededStyles.length > 0) {
        if (!self.proxy) {
          console.warn('Could not load locStyles, as the map-proxy was not initiallized.');
          return false;
        }
        self.proxy.locationStyleController.loadLocationStyles(neededStyles, {
          done: function done() {
            importFeatures();
            // Call hook functions on load
            if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.editor_onLoad) === 'object') {
              c4g.maps.utils.callHookFunctions(c4g.maps.hook.editor_onLoad, loadData);
            }
          },
          always: function always() {
            // Hide loading-animation
            self.spinner.hide();
          }
        });
      } else {
        importFeatures();
        self.spinner.hide();
        // Call hook functions on load
        if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.editor_onLoad) === 'object') {
          c4g.maps.utils.callHookFunctions(c4g.maps.hook.editor_onLoad, loadData);
        }
      }
    }, // End of "load"

    /**
     * @TODO: [export description]
     *
     * @return  {[type]}  [description]
     */
    exportGeoJSON: function exportGeoJSON() {
      var format, features;

      format = new ol.format.GeoJSON();

      features = this.editPointLayer.getSource().getFeatures();
      features = features.concat(this.editLineLayer.getSource().getFeatures());
      features = features.concat(this.editPolygonLayer.getSource().getFeatures());
      features = features.concat(this.editCircleLayer.getSource().getFeatures());
      features = features.concat(this.editFreehandLayer.getSource().getFeatures());

      features = format.writeFeatures(features);
      // features = JSON.stringify(features);

      if (this.options.type === 'backend' && this.options.dataField) {
        this.options.dataField.val(features);
        return true;
      } else {
        return features;
      }
    }, // end of "export"

    /**
     * @TODO: [import description]
     *
     * @return  {[type]}  [description]
     */
    importGeoJSON: function importGeoJSON(opt_geojson) {
      var self, styleId, format, features, points, freehand, lines, polygons, circles, neededStyles, importFeatures, i;

      self = this;

      if (this.options.type === 'backend' && this.options.dataField) {
        features = this.options.dataField.val();
      } else if (opt_geojson) {
        features = opt_geojson;
      } else {
        return false;
      }

      if (!features) {
        // no features to load
        return false;
      }

      // try {
      //   features = JSON.parse(features);
      // } catch (ignore) {}

      format = new ol.format.GeoJSON();
      try {
        features = format.readFeatures(features);
      } catch (ignore) {
        console.warn('Could not load features: Invalid JSON string...');
        return false;
      }

      neededStyles = [];
      points = [];
      freehand = [];
      lines = [];
      polygons = [];
      circles = [];
      for (i = 0; i < features.length; i += 1) {
        styleId = features[i].get('styleId') || features[i].get('locstyle') || false;

        if (features[i] && typeof features[i].getGeometry === 'function') {
          if (features[i].getGeometry() instanceof ol.geom.Point) {
            points.push(features[i]);
          } else if (features[i].getGeometry() instanceof ol.geom.LineString) {
            if (features.options && features.options.type && features.options.type.toLowerCase() == 'freehand') {
              freehand.push(features[i]);
            } else {
              lines.push(features[i]);
            }
          } else if (features[i].getGeometry() instanceof ol.geom.Polygon) {
            polygons.push(features[i]);
          } else if (features[i].getGeometry() instanceof ol.geom.Circle) {
            circles.push(features[i]);
          }
        } else {
          console.warn('Cannot load feature without geometry.');
          return false;
        }

        if (styleId && (!self.proxy.locationStyleController.arrLocStyles[styleId] || !self.proxy.locationStyleController.arrLocStyles[styleId].style) && $.inArray(styleId, neededStyles) === -1) {
          neededStyles.push(styleId);
        }
      }

      importFeatures = function importFeatures() {
        self.editPointLayer.getSource().addFeatures(points);
        self.editLineLayer.getSource().addFeatures(lines);
        self.editPolygonLayer.getSource().addFeatures(polygons);
        self.editCircleLayer.getSource().addFeatures(circles);
        self.editFreehandLayer.getSource().addFeatures(freehand);
        c4g.maps.utils.fitToExtent(c4g.maps.utils.getExtentForGeometries(points.concat(lines, polygons, circles, freehand)), self.options.mapController.map, [25, 25, 25, self.container.offsetWidth + 25], 1000);
      };

      self.spinner.show();
      if (neededStyles.length > 0) {
        if (!self.proxy) {
          console.warn('Could not load locStyles, as the map-proxy was not initiallized.');
          return false;
        }
        self.proxy.locationStyleController.loadLocationStyles(neededStyles, {
          done: function done() {
            importFeatures();
          },
          always: function always() {
            // Hide loading-animation
            self.spinner.hide();
          }
        });
      } else {
        importFeatures();
        self.spinner.hide();
      }
    } // end of "import"

  });
})(jQuery, this.c4g);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLWVkaXRvci5qcyJdLCJuYW1lcyI6WyJjNGciLCJtYXBzIiwiY29udHJvbCIsIiQiLCJFZGl0b3IiLCJvcHRpb25zIiwiZXh0ZW5kIiwibmFtZSIsInR5cGUiLCJkYXRhRmllbGQiLCJjcmVhdGUiLCJtYXBDb250cm9sbGVyIiwidW5kZWZpbmVkIiwiZHJhd01vZGVzIiwiZGlyZWN0aW9uIiwiaGVhZGxpbmUiLCJjb25zdGFudCIsImkxOG4iLCJFRElUT1IiLCJjb25zb2xlIiwid2FybiIsInRhYnMiLCJsYXN0RHJhd0ludGVyYWN0aW9uIiwicHJveHkiLCJTaWRlYm9hcmQiLCJjYWxsIiwib2wiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsImluaXQiLCJvcHRfZXh0ZXJuYWxpbml0Iiwic2VsZiIsImxheWVyU3R5bGVGdW5jdGlvbiIsInZpZXdTZWxlY3QiLCJzcGlubmVyIiwic2hvdyIsImZlYXR1cmUiLCJwcm9qZWN0aW9uIiwic3R5bGVJZCIsImdldCIsImxvY2F0aW9uU3R5bGVDb250cm9sbGVyIiwiYXJyTG9jU3R5bGVzIiwic3R5bGUiLCJlZGl0UG9pbnRMYXllciIsImxheWVyIiwiVmVjdG9yIiwic291cmNlIiwiZWRpdExpbmVMYXllciIsImVkaXRQb2x5Z29uTGF5ZXIiLCJlZGl0Q2lyY2xlTGF5ZXIiLCJlZGl0RnJlZWhhbmRMYXllciIsImVkaXRMYXllckdyb3VwIiwiR3JvdXAiLCJsYXllcnMiLCJDb2xsZWN0aW9uIiwidmlzaWJsZSIsIm1hcCIsImFkZExheWVyIiwicHVzaCIsImFkZFNlbGVjdFZpZXciLCJhY3RpdmF0ZSIsImdldEpTT04iLCJkYXRhIiwiYXBpIiwiZWRpdG9yIiwicHJvZmlsZSIsImRvbmUiLCJzdHlsZXNfcG9pbnQiLCJsZW5ndGgiLCJhZGREcmF3VmlldyIsInN0eWxlSWRzIiwic3R5bGVzX2xpbmUiLCJzdHlsZXNfcG9seWdvbiIsInN0eWxlc19jaXJjbGUiLCJzdHlsZXNfZnJlZWhhbmQiLCJob29rIiwiZWRpdG9yX2xvYWRUYWJzIiwidXRpbHMiLCJjYWxsSG9va0Z1bmN0aW9ucyIsImZhaWwiLCJhbHdheXMiLCJpbXBvcnRHZW9KU09OIiwibG9hZCIsImdldExheWVycyIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJhcnJheSIsImdldFNvdXJjZSIsIm9uIiwic2F2ZSIsImhpZGUiLCJpbml0aWFsaXplZCIsInByZUNsb3NlRnVuY3Rpb24iLCJnZXRWaXNpYmxlIiwic2V0VmlzaWJsZSIsInJlbW92ZUxheWVyIiwicHJlT3BlbkZ1bmN0aW9uIiwic2VsZWN0SW50ZXJhY3Rpb24iLCJzZWxlY3RCb3hJbnRlcmFjdGlvbiIsInNlbGVjdGVkRmVhdHVyZXMiLCJzZWxlY3RDb250ZW50V3JhcHBlciIsInNlbGVjdENvbnRlbnRIZWFkbGluZSIsInNlbGVjdENvbnRlbnQiLCJzZWxlY3RDb250ZW50SW5mbyIsInNlbGVjdFZpZXciLCJmbkhhbmRsZVNlbGVjdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJjc3MiLCJFRElUT1JfQ09OVEVOVF9TRUxFQ1QiLCJFRElUT1JfU0VMRUNUX0lORk8iLCJFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTCIsImFkZFZpZXciLCJ0cmlnZ2VyQ29uZmlnIiwidGlwTGFiZWwiLCJ3aXRoSGVhZGxpbmUiLCJzZWN0aW9uRWxlbWVudHMiLCJzZWN0aW9uIiwiY29udGVudENvbnRhaW5lciIsInRvcFRvb2xiYXIiLCJ2aWV3VHJpZ2dlckJhciIsImluaXRGdW5jdGlvbiIsImludGVyYWN0aW9uIiwiU2VsZWN0IiwiZ2V0QXJyYXkiLCJ0b2dnbGVDb25kaXRpb24iLCJldmVudHMiLCJjb25kaXRpb24iLCJwbGF0Zm9ybU1vZGlmaWVyS2V5T25seSIsInN0eWxlQXJyYXkiLCJzdHlsZVJhZGl1cyIsImdldEltYWdlIiwiSWNvbiIsInBhcnNlSW50IiwiZ2V0UmFkaXVzIiwiU3R5bGUiLCJpbWFnZSIsIkNpcmNsZSIsInN0cm9rZSIsIlN0cm9rZSIsImNvbG9yIiwid2lkdGgiLCJyYWRpdXMiLCJmaWxsIiwiRmlsbCIsImdldEZlYXR1cmVzIiwiRHJhZ0JveCIsInNoaWZ0S2V5T25seSIsImUiLCJleHRlbnQiLCJnZXRHZW9tZXRyeSIsImdldEV4dGVudCIsImZvckVhY2hGZWF0dXJlSW50ZXJzZWN0aW5nRXh0ZW50IiwiY2xlYXIiLCJpIiwiaiIsImxhYmVsIiwiZWRpdG9yVmFycyIsImhlYWRsaW5lRWxlbWVudCIsImlucHV0TmFtZUVsZW1lbnQiLCJtb2RpZnlCdXR0b25FbGVtZW50IiwiZGVsZXRlQnV0dG9uRWxlbWVudCIsInBhcmFncmFwaEVsZW1lbnQiLCJzdHJvbmdFbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZmVhdHVyZUNvdW50Iiwic2VsZWN0ZWRGZWF0dXJlIiwiYmx1ck9uRW50ZXIiLCJpbnB1dENoYW5nZUhhbmRsZXIiLCJuYW1lQ2hhbmdlSGFuZGxlciIsIm1vZGlmeUZlYXR1cmVGdW5jdGlvbiIsImRlbGV0ZUZlYXR1cmVGdW5jdGlvbiIsInJlbmRlclNlbGVjdGVkRmVhdHVyZXNMaXN0IiwiYXBwbHlGZWF0dXJlTW9kaWZpY2F0aW9uIiwiZXZlbnQiLCJ3aGljaCIsInRhcmdldCIsImJsdXIiLCJpZ25vcmUiLCJjaGFuZ2VkRmVhdHVyZSIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJzZXQiLCJlbmNvZGVHZW9Kc29uUHJvcGVydHkiLCJ2YWx1ZSIsImVkaXRvcl9mZWF0dXJlQ2hhbmdlZCIsImFjdGlvbiIsImN1cnJlbnRWYXJzIiwibW9kaWZ5RmVhdHVyZSIsImZlYXR1cmVHZW9tZXRyeSIsInRyYW5zbGF0ZUludGVyYWN0aW9uIiwibW9kaWZ5SW50ZXJhY3Rpb24iLCJtb2RpZnlCdXR0b24iLCJhcHBseUJ1dHRvbiIsImdlb20iLCJMaW5lU3RyaW5nIiwiVHJhbnNsYXRlIiwiZmVhdHVyZXMiLCJhZGRJbnRlcmFjdGlvbiIsIlBvaW50IiwiTW9kaWZ5Iiwic2V0QWN0aXZlIiwiSUNPTiIsIkVESVRPUl9GRUFUVVJFX0FQUExZIiwidGl0bGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVJbnRlcmFjdGlvbiIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJjbGljayIsImZlYXR1cmVJbmRleCIsImZlYXR1cmVTb3VyY2UiLCJkZWxldGVGZWF0dXJlIiwiUG9seWdvbiIsInJlbW92ZUZlYXR1cmUiLCJyZW1vdmUiLCJnZXRMZW5ndGgiLCJpZCIsImRlY29kZUdlb0pzb25Qcm9wZXJ0eSIsImtleWRvd24iLCJvbmNoYW5nZSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkxFTkdUSCIsIlBFUklNRVRFUiIsIlJBRElVUyIsImh0bWxWYWx1ZSIsIlNVUkZBQ0VBUkVBIiwiZGlzcGxheSIsInVwZGF0ZSIsImFjdGl2YXRlRnVuY3Rpb24iLCJtYXBIb3ZlciIsImRlYWN0aXZhdGUiLCJkZWFjdGl2YXRlRnVuY3Rpb24iLCJUUklHR0VSX0RSQVciLCJkcmF3Q29udGVudCIsIm9wdGlvbnNEaXYiLCJlbmFibGVJbnN0YW50TWVhc3VyZUNoZWNrYm94IiwiZW5hYmxlSW5zdGFudE1lYXN1cmVDaGVja2JveExhYmVsIiwiY2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiZHJhd1ZpZXciLCJhZGREcmF3U3R5bGUiLCJvbFR5cGUiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwiRURJVE9SX0RSQVdfT1BUSU9OUyIsIkVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFIiwiaW50ZXJhY3Rpb25WaWV3IiwiZWRpdG9yU3R5bGUiLCJzdHlsZURhdGEiLCJzdHlsZUljb24iLCJzdmdTcmMiLCJzdHlsZUltYWdlIiwic3R5bGVUcmlnZ2VyTGFiZWwiLCJmZWF0dXJlSWRDb3VudCIsImxvY1N0eWxlQXJyIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJtYXJnaW4iLCJpY29uU3JjIiwiaW5kZXhPZiIsInNyYyIsImVkaXRvcl9pY29uX3NpemUiLCJoZWlnaHQiLCJnZXRTcmMiLCJzY2FsZSIsImdldFNjYWxlIiwiaWNvbl9zY2FsZSIsImljb25fc2l6ZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJzdHJva2V3aWR0aCIsImNsZWFyUmVjdCIsImZpbGxjb2xvciIsImZpbGxTdHlsZSIsImdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSIsImZpbGxvcGFjaXR5IiwiZmlsbFJlY3QiLCJzdHJva2Vjb2xvciIsInN0cm9rZVN0eWxlIiwic3Ryb2tlb3BhY2l0eSIsImxpbmVXaWR0aCIsInN0cm9rZVJlY3QiLCJ0cmFuc2xhdGUiLCJpbWciLCJJbWFnZSIsInpJbmRleCIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImJhY2tncm91bmQiLCJnZXRGaWxsIiwiZ2V0Q29sb3IiLCJib3JkZXIiLCJnZXRTdHJva2UiLCJyZXBsYWNlIiwidG9vbHRpcCIsIkVESVRPUl9EUkFXX1RSSUdHRVIiLCJpbnRlcmFjdGlvblN0eWxlSW1hZ2UiLCJhY3RpdmVTa2V0Y2giLCJhY3RpdmVUb29sdGlwIiwiRHJhdyIsImZyZWVoYW5kIiwiZ2V0V2lkdGgiLCJnZW9tZXRyeSIsImNoZWNrZWQiLCJtaXNjIiwiVG9vbHRpcFBvcFVwIiwicG9zaXRpb24iLCJjb29yZGluYXRlIiwiaG9yaXpvbnRhbCIsIm1lYXN1cmVHZW9tZXRyeSIsInJhd1ZhbHVlIiwiY2xvc2UiLCJzZXRQb3NpdGlvbiIsInNldENvbnRlbnQiLCJ2YXJzIiwia2V5IiwiZmluaXNoRHJhd2luZyIsIm5lZWRlZFN0eWxlcyIsInNvcnRBbmRBZGRTdHlsZXMiLCJhcnJTdHlsZUlkcyIsImxvY2F0aW9uU3R5bGVzIiwiZHJhd0ludGVyYWN0aW9uIiwic29ydCIsImEiLCJiIiwibG9hZExvY2F0aW9uU3R5bGVzIiwib3B0X3Nsb3QiLCJmb3JtYXQiLCJzYXZlRGF0YSIsInNsb3ROYW1lIiwic3RvcmFnZSIsImV4cG9ydEdlb0pTT04iLCJHZW9KU09OIiwicG9pbnRzIiwid3JpdGVGZWF0dXJlcyIsImxpbmVzIiwicG9seWdvbnMiLCJjaXJjbGVzIiwibWFwSWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2Vzc2lvblN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJlZGl0b3Jfb25TYXZlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkRGF0YSIsImZlYXR1cmVDb2xsZWN0aW9uIiwiaW1wb3J0RmVhdHVyZXMiLCJnZXRJdGVtIiwicGFyc2UiLCJyZWFkRmVhdHVyZXMiLCJjb25jYXQiLCJpbkFycmF5IiwiYWRkRmVhdHVyZXMiLCJlZGl0b3Jfb25Mb2FkIiwidmFsIiwib3B0X2dlb2pzb24iLCJmaXRUb0V4dGVudCIsImdldEV4dGVudEZvckdlb21ldHJpZXMiLCJjb250YWluZXIiLCJvZmZzZXRXaWR0aCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQSxLQUFLQSxHQUFMLEdBQVcsS0FBS0EsR0FBTCxJQUFZLEVBQXZCO0FBQ0EsS0FBS0EsR0FB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QStCQyxPQUEvQixFQUF3Q3JDLFFBQXhDLENBQXRDLENBREosRUFFSXBSLEtBQUsxQixPQUFMLENBQWFNLGFBQWIsQ0FBMkI2QyxHQUYvQixFQUdJLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWF6QixLQUFLa1YsU0FBTCxDQUFlQyxXQUFmLEdBQTZCLEVBQTFDLENBSEosRUFJSSxJQUpKO0FBTUQsT0FaRDs7QUFjQW5WLFdBQUtHLE9BQUwsQ0FBYUMsSUFBYjtBQUNBLFVBQUlpUyxhQUFhaFEsTUFBYixHQUFzQixDQUExQixFQUE2QjtBQUMzQixZQUFJLENBQUNyQyxLQUFLUixLQUFWLEVBQWlCO0FBQ2ZKLGtCQUFRQyxJQUFSLENBQWEsa0VBQWI7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7QUFDRFcsYUFBS1IsS0FBTCxDQUFXaUIsdUJBQVgsQ0FBbUNvUyxrQkFBbkMsQ0FDSVIsWUFESixFQUVJO0FBQ0VsUSxnQkFBTSxnQkFBWTtBQUNoQm1TO0FBQ0QsV0FISDtBQUlFclIsa0JBQVEsa0JBQVk7QUFDbEI7QUFDQWpELGlCQUFLRyxPQUFMLENBQWF5RCxJQUFiO0FBQ0Q7QUFQSCxTQUZKO0FBWUQsT0FqQkQsTUFpQk87QUFDTDBRO0FBQ0F0VSxhQUFLRyxPQUFMLENBQWF5RCxJQUFiO0FBQ0Q7QUFFRixLQTkxQzZFLENBODFDNUU7O0FBOTFDNEUsR0FBNUMsQ0FBcEM7QUFrMkNELENBOTVDQSxFQTg1Q0N3UixNQTk1Q0QsRUE4NUNTLEtBQUtuWCxHQTk1Q2QsQ0FBRCxDIiwiZmlsZSI6ImM0Zy1tYXBzLWNvbnRyb2wtcG9ydHNpZGUtZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtcG9ydHNpZGUtZWRpdG9yLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUzNjM0ZWE0NTk3Y2Q1YjczNWQwIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kIHtjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZH1cbiAgICpcbiAgICogQHBhcmFtICB7W3R5cGVdfSAgbWFwQ29udHJvbGxlciAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5FZGl0b3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgLy8gZXh0ZW5kIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBuYW1lOiAnZWRpdG9yJyxcbiAgICAgIHR5cGU6ICdmcm9udGVuZCcsXG4gICAgICBkYXRhRmllbGQ6IGZhbHNlLFxuICAgICAgY3JlYXRlOiB0cnVlLFxuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkLFxuICAgICAgZHJhd01vZGVzOiBbXG4gICAgICAgICdQb2ludCcsXG4gICAgICAgICdMaW5lJyxcbiAgICAgICAgJ1BvbHlnb24nLFxuICAgICAgICAnQ2lyY2xlJyxcbiAgICAgICAgJ0ZyZWVoYW5kJ1xuICAgICAgXSxcbiAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgaGVhZGxpbmU6IGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4uRURJVE9SXG4gICAgICAvLyBpbml0TW9kZTogJ3NlbGVjdCdcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ291bCBub3QgaW5pdGlhbGxpemUgRWRpdG9yLCB3aXRob3V0IHZhbGlkIG1hcENvbnRyb2xsZXIuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy9jNGcubWFwcy5ob29rLmVkaXRvcl9sb2FkVGFicyA9IFtdO1xuICAgIC8vYzRnLm1hcHMuaG9vay5lZGl0b3JfZmVhdHVyZUNoYW5nZWQgPSBbXTtcbiAgICB0aGlzLnRhYnMgPSBbXTtcbiAgICAvLyBAVE9ET1xuICAgIC8vIHRoaXMudHlwZUxheWVyID0gdW5kZWZpbmVkO1xuICAgIC8vIHRoaXMuYWN0aXZlTW9kZSA9IHRoaXMub3B0aW9ucy5pbml0TW9kZTtcbiAgICAvLyB0aGlzLnZlY3RvclNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgLy8gdGhpcy5hY3RpdmVEcmF3SW50ZXJhY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYXN0RHJhd0ludGVyYWN0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJveHkgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGF0YUZpZWxkICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZGF0YUZpZWxkID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5vcHRpb25zLmRhdGFGaWVsZCA9ICQodGhpcy5vcHRpb25zLmRhdGFGaWVsZCkgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY2FsbCBwYXJlbnQgY29uc3RydWN0b3JcbiAgICBjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZC5jYWxsKHRoaXMsIHRoaXMub3B0aW9ucyk7XG4gIH07XG4gIG9sLmluaGVyaXRzKGM0Zy5tYXBzLmNvbnRyb2wuRWRpdG9yLCBjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZCk7XG5cbiAgLyoqXG4gICAqIE1ldGhvZHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuRWRpdG9yLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnRyb2wuRWRpdG9yLnByb3RvdHlwZSwge1xuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZWQgd2hlbiB0aGUgZWRpdG9yIHdpbGwgYmUgb3BlbmVkIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICAgKiBbaW5pdCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgUmV0dXJucyB8dHJ1ZXwgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIChvcHRfZXh0ZXJuYWxpbml0KSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBsYXllclN0eWxlRnVuY3Rpb24sXG4gICAgICAgICAgdmlld1NlbGVjdDtcblxuICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICBsYXllclN0eWxlRnVuY3Rpb24gPSBmdW5jdGlvbiAoZmVhdHVyZSwgcHJvamVjdGlvbikge1xuICAgICAgICB2YXIgc3R5bGVJZDtcblxuICAgICAgICBpZiAoZmVhdHVyZSAmJiB0eXBlb2YgZmVhdHVyZS5nZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBnZXQgdGhlIHN0eWxlSWQgb2YgdGhlIGN1cnJlbnQgZmVhdHVyZVxuICAgICAgICAgIHN0eWxlSWQgPSBmZWF0dXJlLmdldCgnc3R5bGVJZCcpO1xuICAgICAgICAgIC8vIGFuZCBleGVjdXRlIHRoZSBhcHByb3ByaWF0ZSBmdW5jdGlvblxuICAgICAgICAgIGlmIChzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLnN0eWxlKGZlYXR1cmUsIHByb2plY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICAvLyBBZGQgZWRpdG9yIGxheWVyc1xuICAgICAgdGhpcy5lZGl0UG9pbnRMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe3NvdXJjZTogbmV3IG9sLnNvdXJjZS5WZWN0b3IoKSwgc3R5bGU6IGxheWVyU3R5bGVGdW5jdGlvbn0pO1xuICAgICAgdGhpcy5lZGl0TGluZUxheWVyID0gbmV3IG9sLmxheWVyLlZlY3Rvcih7c291cmNlOiBuZXcgb2wuc291cmNlLlZlY3RvcigpLCBzdHlsZTogbGF5ZXJTdHlsZUZ1bmN0aW9ufSk7XG4gICAgICB0aGlzLmVkaXRQb2x5Z29uTGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtzb3VyY2U6IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCksIHN0eWxlOiBsYXllclN0eWxlRnVuY3Rpb259KTtcbiAgICAgIHRoaXMuZWRpdENpcmNsZUxheWVyID0gbmV3IG9sLmxheWVyLlZlY3Rvcih7c291cmNlOiBuZXcgb2wuc291cmNlLlZlY3RvcigpLCBzdHlsZTogbGF5ZXJTdHlsZUZ1bmN0aW9ufSk7XG4gICAgICB0aGlzLmVkaXRGcmVlaGFuZExheWVyID0gbmV3IG9sLmxheWVyLlZlY3Rvcih7c291cmNlOiBuZXcgb2wuc291cmNlLlZlY3RvcigpLCBzdHlsZTogbGF5ZXJTdHlsZUZ1bmN0aW9ufSk7XG5cbiAgICAgIHRoaXMuZWRpdExheWVyR3JvdXAgPSBuZXcgb2wubGF5ZXIuR3JvdXAoe1xuICAgICAgICBsYXllcnM6IG5ldyBvbC5Db2xsZWN0aW9uKFtcbiAgICAgICAgICB0aGlzLmVkaXRGcmVlaGFuZExheWVyLFxuICAgICAgICAgIHRoaXMuZWRpdENpcmNsZUxheWVyLFxuICAgICAgICAgIHRoaXMuZWRpdFBvbHlnb25MYXllcixcbiAgICAgICAgICB0aGlzLmVkaXRMaW5lTGF5ZXIsXG4gICAgICAgICAgdGhpcy5lZGl0UG9pbnRMYXllclxuICAgICAgICBdKSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5lZGl0TGF5ZXJHcm91cCk7XG5cbiAgICAgIC8vIEFkZCBhbmQgYWN0aXZhdGUgc2VsZWN0IHZpZXdcbiAgICAgIHRoaXMudGFicy5wdXNoKHRoaXMuYWRkU2VsZWN0VmlldygpKTtcbiAgICAgIHRoaXMudGFic1swXS5hY3RpdmF0ZSgpO1xuXG4gICAgICAvLyAgIEFKQVg6IGdldCBlZGl0b3IgY29uZmlnXG4gICAgICAkLmdldEpTT04oc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZWRpdG9yICsgJy8nICsgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlKVxuICAgICAgICAgIC8vIENyZWF0ZSB2aWV3cyBmb3IgZHJhdy1mZWF0dXJlcyB3aXRoIGF0IGxlYXN0IG9uZSBsb2NhdGlvbnN0eWxlXG4gICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAgICAgLy8gRHJhdy1wb2ludCB2aWV3XG4gICAgICAgICAgICBpZiAoZGF0YS5zdHlsZXNfcG9pbnQubGVuZ3RoICYmIGRhdGEuc3R5bGVzX3BvaW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgc2VsZi50YWJzLnB1c2goc2VsZi5hZGREcmF3Vmlldyh7dHlwZTogJ1BvaW50Jywgc3R5bGVJZHM6IGRhdGEuc3R5bGVzX3BvaW50fSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRHJhdy1saW5lIHZpZXdcbiAgICAgICAgICAgIGlmIChkYXRhLnN0eWxlc19saW5lLmxlbmd0aCAmJiBkYXRhLnN0eWxlc19saW5lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgc2VsZi50YWJzLnB1c2goc2VsZi5hZGREcmF3Vmlldyh7dHlwZTogJ0xpbmVTdHJpbmcnLCBzdHlsZUlkczogZGF0YS5zdHlsZXNfbGluZX0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERyYXctcG9seWdvbiB2aWV3XG4gICAgICAgICAgICBpZiAoZGF0YS5zdHlsZXNfcG9seWdvbi5sZW5ndGggJiYgZGF0YS5zdHlsZXNfcG9seWdvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHNlbGYudGFicy5wdXNoKHNlbGYuYWRkRHJhd1ZpZXcoe3R5cGU6ICdQb2x5Z29uJywgc3R5bGVJZHM6IGRhdGEuc3R5bGVzX3BvbHlnb259KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEcmF3LWNpcmNsZSB2aWV3XG4gICAgICAgICAgICBpZiAoZGF0YS5zdHlsZXNfY2lyY2xlLmxlbmd0aCAmJiBkYXRhLnN0eWxlc19jaXJjbGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNlbGYudGFicy5wdXNoKHNlbGYuYWRkRHJhd1ZpZXcoe3R5cGU6ICdDaXJjbGUnLCBzdHlsZUlkczogZGF0YS5zdHlsZXNfY2lyY2xlfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRHJhdy1mcmVlaGFuZCB2aWV3XG4gICAgICAgICAgICBpZiAoZGF0YS5zdHlsZXNfZnJlZWhhbmQubGVuZ3RoICYmIGRhdGEuc3R5bGVzX2ZyZWVoYW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRhYnMucHVzaChzZWxmLmFkZERyYXdWaWV3KHt0eXBlOiAnRnJlZWhhbmQnLCBzdHlsZUlkczogZGF0YS5zdHlsZXNfZnJlZWhhbmR9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYWxsIGhvb2sgZnVuY3Rpb24gZm9yIGR5bmFtaWNhbGx5IGFkZGVkIHRhYnNcbiAgICAgICAgICAgIGlmIChjNGcubWFwcy5ob29rICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGM0Zy5tYXBzLmhvb2suZWRpdG9yX2xvYWRUYWJzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBjNGcubWFwcy51dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhjNGcubWFwcy5ob29rLmVkaXRvcl9sb2FkVGFicywgc2VsZik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQFRPRE8gZXJyb3ItbWVzc2FnZXNcbiAgICAgICAgICAgIC8vICAgMSkgVmlzaWJsZSBtZXNzYWdlIDQgdXNlcnMgKGkxOG4pXG4gICAgICAgICAgICAvLyAgIDIpIFRlY2huaWNhbCBjb25zb2xlLndhcm5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSB0cnlpbmcgdG8gbG9hZCB0aGUgZWRpdG9yIGNvbmZpZ3VyYXRpb24uLi4nKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxheWVycztcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMudHlwZSA9PT0gJ2JhY2tlbmQnKSB7XG4gICAgICAgICAgICAgIC8vIGltcG9ydCBHZW9KU09OIHdoZW4gaW4gYmFja2VuZCBtb2RlXG4gICAgICAgICAgICAgIHNlbGYuaW1wb3J0R2VvSlNPTigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gbG9hZCBzZXNzaW9uLWZlYXR1cmVzIHdoZW4gaW4gZnJvbnRlbmQgbW9kZVxuICAgICAgICAgICAgICBzZWxmLmxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFkZCBhdXRvc2F2ZSB0byB0aGUgbGF5ZXJzIHdoZW4gYSBmZWF0dXJlIGlzIGFkZGVkXG4gICAgICAgICAgICBsYXllcnMgPSBzZWxmLmVkaXRMYXllckdyb3VwLmdldExheWVycygpO1xuICAgICAgICAgICAgbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmdldFNvdXJjZSgpLm9uKCdhZGRmZWF0dXJlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2F2ZSgpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vc2VsZi5lZGl0UG9pbnRMYXllci5nZXRTb3VyY2UoKS5vbignYWRkZmVhdHVyZScsIGZ1bmN0aW9uICgpIHtzZWxmLnNhdmUoKTsgfSk7XG4gICAgICAgICAgICAvL3NlbGYuZWRpdExpbmVMYXllci5nZXRTb3VyY2UoKS5vbignYWRkZmVhdHVyZScsIGZ1bmN0aW9uICgpIHtzZWxmLnNhdmUoKTsgfSk7XG4gICAgICAgICAgICAvL3NlbGYuZWRpdFBvbHlnb25MYXllci5nZXRTb3VyY2UoKS5vbignYWRkZmVhdHVyZScsIGZ1bmN0aW9uICgpIHtzZWxmLnNhdmUoKTsgfSk7XG4gICAgICAgICAgICBzZWxmLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgaWYgKG9wdF9leHRlcm5hbGluaXQpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlZCBiZWZvcmUgZWRpdG9yIHdpbGwgYmUgY2xvc2VkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHByZUNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmVkaXRMYXllckdyb3VwLmdldFZpc2libGUoKSkge1xuICAgICAgICB0aGlzLmVkaXRMYXllckdyb3VwLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIodGhpcy5lZGl0TGF5ZXJHcm91cCk7XG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZWQgYmVmb3JlIGVkaXRvciB3aWxsIGJlIG9wZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcHJlT3BlbkZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuZWRpdExheWVyR3JvdXAuZ2V0VmlzaWJsZSgpKSB7XG4gICAgICAgIHRoaXMuZWRpdExheWVyR3JvdXAuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKHRoaXMuZWRpdExheWVyR3JvdXApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRTZWxlY3RWaWV3OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBzZWxlY3RJbnRlcmFjdGlvbixcbiAgICAgICAgICBzZWxlY3RCb3hJbnRlcmFjdGlvbixcbiAgICAgICAgICBzZWxlY3RlZEZlYXR1cmVzLFxuICAgICAgICAgIHNlbGVjdENvbnRlbnRXcmFwcGVyLFxuICAgICAgICAgIHNlbGVjdENvbnRlbnRIZWFkbGluZSxcbiAgICAgICAgICBzZWxlY3RDb250ZW50LFxuICAgICAgICAgIHNlbGVjdENvbnRlbnRJbmZvLFxuICAgICAgICAgIHNlbGVjdFZpZXcsXG4gICAgICAgICAgZm5IYW5kbGVTZWxlY3Rpb247XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBzZWxlY3RDb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBzZWxlY3RDb250ZW50SGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNlbGVjdENvbnRlbnRIZWFkbGluZS5pbm5lckhUTUwgPSBjNGcubWFwcy5jb25zdGFudC5pMThuLkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUO1xuICAgICAgc2VsZWN0Q29udGVudEhlYWRsaW5lLmNsYXNzTmFtZSA9ICdjb250ZW50SGVhZGxpbmUnO1xuICAgICAgc2VsZWN0Q29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZWN0Q29udGVudEhlYWRsaW5lKTtcblxuICAgICAgc2VsZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2VsZWN0Q29udGVudC5jbGFzc05hbWUgPSBjNGcubWFwcy5jb25zdGFudC5jc3MuRURJVE9SX0NPTlRFTlRfU0VMRUNUO1xuICAgICAgc2VsZWN0Q29udGVudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBzZWxlY3RDb250ZW50SW5mby5pbm5lckhUTUwgPSBjNGcubWFwcy5jb25zdGFudC5pMThuLkVESVRPUl9TRUxFQ1RfSU5GTztcbiAgICAgIHNlbGVjdENvbnRlbnRJbmZvLmlubmVySFRNTCArPSAnPGJyPjxicj48c3ViPicgKyBjNGcubWFwcy5jb25zdGFudC5pMThuLkVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMICsgJzwvc3ViPic7XG4gICAgICBzZWxlY3RDb250ZW50LmFwcGVuZENoaWxkKHNlbGVjdENvbnRlbnRJbmZvKTtcbiAgICAgIHNlbGVjdENvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdENvbnRlbnQpO1xuXG4gICAgICBzZWxlY3RWaWV3ID0gdGhpcy5hZGRWaWV3KHtcbiAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgIHRyaWdnZXJDb25maWc6IHtcbiAgICAgICAgICB0aXBMYWJlbDogYzRnLm1hcHMuY29uc3RhbnQuaTE4bi5FRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCxcbiAgICAgICAgICBjbGFzc05hbWU6IGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5FRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCxcbiAgICAgICAgICB3aXRoSGVhZGxpbmU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXG4gICAgICAgICAge3NlY3Rpb246IHRoaXMuY29udGVudENvbnRhaW5lciwgZWxlbWVudDogc2VsZWN0Q29udGVudFdyYXBwZXJ9LFxuICAgICAgICAgIHtzZWN0aW9uOiB0aGlzLnRvcFRvb2xiYXIsIGVsZW1lbnQ6IHRoaXMudmlld1RyaWdnZXJCYXJ9XG4gICAgICAgIF0sXG4gICAgICAgIGluaXRGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGVjdEludGVyYWN0aW9uID0gbmV3IG9sLmludGVyYWN0aW9uLlNlbGVjdCh7XG4gICAgICAgICAgICBsYXllcnM6IHNlbGYuZWRpdExheWVyR3JvdXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKSxcbiAgICAgICAgICAgIHRvZ2dsZUNvbmRpdGlvbjogb2wuZXZlbnRzLmNvbmRpdGlvbi5wbGF0Zm9ybU1vZGlmaWVyS2V5T25seSxcbiAgICAgICAgICAgIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSwgcHJvamVjdGlvbikge1xuICAgICAgICAgICAgICB2YXIgc3R5bGVJZCxcbiAgICAgICAgICAgICAgICAgIHN0eWxlQXJyYXksXG4gICAgICAgICAgICAgICAgICBzdHlsZVJhZGl1cztcblxuICAgICAgICAgICAgICBpZiAoZmVhdHVyZSAmJiB0eXBlb2YgZmVhdHVyZS5nZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHN0eWxlSWQgb2YgdGhlIGN1cnJlbnQgZmVhdHVyZVxuICAgICAgICAgICAgICAgIHN0eWxlSWQgPSBmZWF0dXJlLmdldCgnc3R5bGVJZCcpO1xuICAgICAgICAgICAgICAgIC8vIGFuZCBleGVjdXRlIHRoZSBhcHByb3ByaWF0ZSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXSkge1xuICAgICAgICAgICAgICAgICAgc3R5bGVBcnJheSA9IHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLnN0eWxlKGZlYXR1cmUsIHByb2plY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlQXJyYXlbMF0uZ2V0SW1hZ2UgPT09ICdmdW5jdGlvbicgJiYgc3R5bGVBcnJheVswXS5nZXRJbWFnZSgpIGluc3RhbmNlb2Ygb2wuc3R5bGUuSWNvbikge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVJhZGl1cyA9IDU7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVJhZGl1cyA9IHBhcnNlSW50KHN0eWxlQXJyYXlbMF0uZ2V0SW1hZ2UoKS5nZXRSYWRpdXMoKSwgMTApICsgNDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgc3R5bGVBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogbmV3IG9sLnN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC43KScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogc3R5bGVSYWRpdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC43KScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBvbC5zdHlsZS5GaWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZUFycmF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7IC8vIHNlbGVjdEludGVyYWN0aW9uXG5cbiAgICAgICAgICBzZWxlY3RlZEZlYXR1cmVzID0gc2VsZWN0SW50ZXJhY3Rpb24uZ2V0RmVhdHVyZXMoKTtcblxuICAgICAgICAgIHNlbGVjdEJveEludGVyYWN0aW9uID0gbmV3IG9sLmludGVyYWN0aW9uLkRyYWdCb3goe2NvbmRpdGlvbjogb2wuZXZlbnRzLmNvbmRpdGlvbi5zaGlmdEtleU9ubHl9KTtcblxuICAgICAgICAgIHNlbGVjdEJveEludGVyYWN0aW9uLm9uKCdib3hlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGV4dGVudCA9IHNlbGVjdEJveEludGVyYWN0aW9uLmdldEdlb21ldHJ5KCkuZ2V0RXh0ZW50KCk7XG5cbiAgICAgICAgICAgIHNlbGYuZWRpdExheWVyR3JvdXAuZ2V0TGF5ZXJzKCkuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICAgICAgICAgICAgbGF5ZXIuZ2V0U291cmNlKCkuZm9yRWFjaEZlYXR1cmVJbnRlcnNlY3RpbmdFeHRlbnQoZXh0ZW50LCBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmbkhhbmRsZVNlbGVjdGlvbigpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gY2xlYXIgc2VsZWN0aW9uIHdoZW4gZHJhd2luZyBhIG5ldyBib3ggYW5kIHdoZW4gY2xpY2tpbmcgb24gdGhlIG1hcFxuICAgICAgICAgIHNlbGVjdEJveEludGVyYWN0aW9uLm9uKCdib3hzdGFydCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEZlYXR1cmVzLmNsZWFyKCk7XG4gICAgICAgICAgICBmbkhhbmRsZVNlbGVjdGlvbigpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZm5IYW5kbGVTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgICAgICBqLFxuICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgIGVkaXRvclZhcnMsXG4gICAgICAgICAgICAgICAgaGVhZGxpbmVFbGVtZW50LFxuICAgICAgICAgICAgICAgIGlucHV0TmFtZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgbW9kaWZ5QnV0dG9uRWxlbWVudCxcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b25FbGVtZW50LFxuICAgICAgICAgICAgICAgIHBhcmFncmFwaEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgc3Ryb25nRWxlbWVudCxcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZmVhdHVyZUNvdW50LFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZSxcbiAgICAgICAgICAgICAgICBibHVyT25FbnRlcixcbiAgICAgICAgICAgICAgICBpbnB1dENoYW5nZUhhbmRsZXIsXG4gICAgICAgICAgICAgICAgbmFtZUNoYW5nZUhhbmRsZXIsXG4gICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZUZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGRlbGV0ZUZlYXR1cmVGdW5jdGlvbixcbiAgICAgICAgICAgICAgICByZW5kZXJTZWxlY3RlZEZlYXR1cmVzTGlzdDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmFwcGx5RmVhdHVyZU1vZGlmaWNhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBzZWxmLmFwcGx5RmVhdHVyZU1vZGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBibHVyT25FbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9OyAvLyBlbmQgb2YgXCJibHVyT25FbnRlcigpXCJcblxuICAgICAgICAgICAgbmFtZUNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyIGNoYW5nZWRGZWF0dXJlO1xuICAgICAgICAgICAgICBjaGFuZ2VkRmVhdHVyZSA9IHNlbGVjdGVkRmVhdHVyZXMuaXRlbShldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdmZWF0X2lkJykpO1xuICAgICAgICAgICAgICBjaGFuZ2VkRmVhdHVyZS5zZXQoXG4gICAgICAgICAgICAgICAgICAndG9vbHRpcCcsXG4gICAgICAgICAgICAgICAgICBjNGcubWFwcy51dGlscy5lbmNvZGVHZW9Kc29uUHJvcGVydHkoZXZlbnQudGFyZ2V0LnZhbHVlIHx8ICcnKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBzZWxmLnNhdmUoKTtcbiAgICAgICAgICAgICAgLy8gQ2FsbCBob29rIHRvIG5vdGlmeSB0aGUgZmVhdHVyZSBjaGFuZ2VcbiAgICAgICAgICAgICAgaWYgKGM0Zy5tYXBzLmhvb2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYzRnLm1hcHMuaG9vay5lZGl0b3JfZmVhdHVyZUNoYW5nZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgYzRnLm1hcHMudXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMoYzRnLm1hcHMuaG9vay5lZGl0b3JfZmVhdHVyZUNoYW5nZWQsIHtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGNoYW5nZWRGZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiAncmVuYW1lZCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTsgLy8gZW5kIG9mIFwibmFtZUNoYW5nZUhhbmRsZXIoKVwiXG5cbiAgICAgICAgICAgIGlucHV0Q2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICB2YXIgY3VycmVudFZhcnMsXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VkRmVhdHVyZTtcbiAgICAgICAgICAgICAgY2hhbmdlZEZlYXR1cmUgPSBzZWxlY3RlZEZlYXR1cmVzLml0ZW0oZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZmVhdF9pZCcpKTtcbiAgICAgICAgICAgICAgY3VycmVudFZhcnMgPSBjaGFuZ2VkRmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKTtcbiAgICAgICAgICAgICAgY3VycmVudFZhcnNbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFyX2lkJyldLnZhbHVlID0gYzRnLm1hcHMudXRpbHMuZW5jb2RlR2VvSnNvblByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlIHx8ICcnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNoYW5nZWRGZWF0dXJlLnNldCgnZWRpdG9yVmFycycsIGN1cnJlbnRWYXJzKTtcbiAgICAgICAgICAgICAgc2VsZi5zYXZlKCk7XG4gICAgICAgICAgICAgIC8vIENhbGwgaG9vayB0byBub3RpZnkgdGhlIGZlYXR1cmUgY2hhbmdlXG4gICAgICAgICAgICAgIGlmIChjNGcubWFwcy5ob29rICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGM0Zy5tYXBzLmhvb2suZWRpdG9yX2ZlYXR1cmVDaGFuZ2VkID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGM0Zy5tYXBzLnV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2suZWRpdG9yX2ZlYXR1cmVDaGFuZ2VkLCB7XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlOiBjaGFuZ2VkRmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2NoYW5nZWRfdmFyJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9OyAvLyBlbmQgb2YgXCJpbnB1dENoYW5nZUhhbmRsZXIoKVwiXG5cbiAgICAgICAgICAgIG1vZGlmeUZlYXR1cmVGdW5jdGlvbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICB2YXIgbW9kaWZ5RmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVHZW9tZXRyeSxcbiAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZUludGVyYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgbW9kaWZ5SW50ZXJhY3Rpb24sXG4gICAgICAgICAgICAgICAgICBtb2RpZnlCdXR0b24sXG4gICAgICAgICAgICAgICAgICBhcHBseUJ1dHRvbjtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYuYXBwbHlGZWF0dXJlTW9kaWZpY2F0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hcHBseUZlYXR1cmVNb2RpZmljYXRpb24oKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG1vZGlmeUJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICAgICAgICAvLyBnZXQgZmVhdHVyZSB0aGF0IHNob3VsZCBiZSBtb2RpZmllZFxuICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlID0gc2VsZWN0ZWRGZWF0dXJlcy5pdGVtKG1vZGlmeUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2ZlYXRfaWQnKSk7XG4gICAgICAgICAgICAgIGlmICghbW9kaWZ5RmVhdHVyZSB8fCB0eXBlb2YgbW9kaWZ5RmVhdHVyZS5nZXRHZW9tZXRyeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZlYXR1cmVHZW9tZXRyeSA9IG1vZGlmeUZlYXR1cmUuZ2V0R2VvbWV0cnkoKTtcbiAgICAgICAgICAgICAgdHJhbnNsYXRlSW50ZXJhY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgbW9kaWZ5SW50ZXJhY3Rpb24gPSBmYWxzZTtcblxuICAgICAgICAgICAgICBpZiAoIShmZWF0dXJlR2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlSW50ZXJhY3Rpb24gPSBuZXcgb2wuaW50ZXJhY3Rpb24uVHJhbnNsYXRlKHtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBuZXcgb2wuQ29sbGVjdGlvbihbbW9kaWZ5RmVhdHVyZV0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRyYW5zbGF0ZUludGVyYWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIShmZWF0dXJlR2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvaW50KSkge1xuICAgICAgICAgICAgICAgIG1vZGlmeUludGVyYWN0aW9uID0gbmV3IG9sLmludGVyYWN0aW9uLk1vZGlmeSh7XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlczogbmV3IG9sLkNvbGxlY3Rpb24oW21vZGlmeUZlYXR1cmVdKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihtb2RpZnlJbnRlcmFjdGlvbik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZWxlY3RJbnRlcmFjdGlvbi5zZXRBY3RpdmUoZmFsc2UpO1xuXG4gICAgICAgICAgICAgIC8vIGFkZCBhcHBseSBidXR0b25cbiAgICAgICAgICAgICAgYXBwbHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgYXBwbHlCdXR0b24uY2xhc3NOYW1lID0gYzRnLm1hcHMuY29uc3RhbnQuY3NzLklDT04gKyAnICcgKyBjNGcubWFwcy5jb25zdGFudC5jc3MuRURJVE9SX0ZFQVRVUkVfQVBQTFk7XG4gICAgICAgICAgICAgIGFwcGx5QnV0dG9uLnRpdGxlID0gYzRnLm1hcHMuY29uc3RhbnQuaTE4bi5FRElUT1JfRkVBVFVSRV9BUFBMWTtcbiAgICAgICAgICAgICAgYXBwbHlCdXR0b24uc2V0QXR0cmlidXRlKCdmZWF0X2lkJywgaSk7XG5cbiAgICAgICAgICAgICAgc2VsZi5hcHBseUZlYXR1cmVNb2RpZmljYXRpb24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRlSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZUludGVyYWN0aW9uLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlSW50ZXJhY3Rpb24odHJhbnNsYXRlSW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlSW50ZXJhY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmeUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlSW50ZXJhY3Rpb24obW9kaWZ5SW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgbW9kaWZ5SW50ZXJhY3Rpb24uc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIG1vZGlmeUludGVyYWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdEludGVyYWN0aW9uLnNldEFjdGl2ZSh0cnVlKTtcblxuICAgICAgICAgICAgICAgIGFwcGx5QnV0dG9uID0gYXBwbHlCdXR0b24ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobW9kaWZ5QnV0dG9uLCBhcHBseUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgc2VsZi5zYXZlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5hcHBseUZlYXR1cmVNb2RpZmljYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBDYWxsIGhvb2sgdG8gbm90aWZ5IHRoZSBmZWF0dXJlIGNoYW5nZVxuICAgICAgICAgICAgICAgIGlmIChjNGcubWFwcy5ob29rICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGM0Zy5tYXBzLmhvb2suZWRpdG9yX2ZlYXR1cmVDaGFuZ2VkID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgYzRnLm1hcHMudXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMoYzRnLm1hcHMuaG9vay5lZGl0b3JfZmVhdHVyZUNoYW5nZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZTogbW9kaWZ5RmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnZWRpdGVkJ1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICQoYXBwbHlCdXR0b24pLmNsaWNrKHNlbGYuYXBwbHlGZWF0dXJlTW9kaWZpY2F0aW9uKTtcbiAgICAgICAgICAgICAgbW9kaWZ5QnV0dG9uID0gbW9kaWZ5QnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGFwcGx5QnV0dG9uLCBtb2RpZnlCdXR0b24pO1xuICAgICAgICAgICAgfTsgLy8gZW5kIG9mIFwibW9kaWZ5RmVhdHVyZUZ1bmN0aW9uKClcIlxuXG4gICAgICAgICAgICBkZWxldGVGZWF0dXJlRnVuY3Rpb24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyIGZlYXR1cmVJbmRleCxcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVHZW9tZXRyeSxcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVTb3VyY2UsXG4gICAgICAgICAgICAgICAgICBkZWxldGVGZWF0dXJlO1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi5hcHBseUZlYXR1cmVNb2RpZmljYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmFwcGx5RmVhdHVyZU1vZGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZmVhdHVyZUluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZmVhdF9pZCcpO1xuICAgICAgICAgICAgICBkZWxldGVGZWF0dXJlID0gc2VsZWN0ZWRGZWF0dXJlcy5pdGVtKGZlYXR1cmVJbmRleCk7XG4gICAgICAgICAgICAgIGZlYXR1cmVHZW9tZXRyeSA9IGRlbGV0ZUZlYXR1cmUuZ2V0R2VvbWV0cnkoKTtcblxuICAgICAgICAgICAgICAvLyBmaW5kIHJpZ2h0IHNvdXJjZVxuICAgICAgICAgICAgICBpZiAoZmVhdHVyZUdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2ludCkge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVTb3VyY2UgPSBzZWxmLmVkaXRQb2ludExheWVyLmdldFNvdXJjZSgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmVHZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uTGluZVN0cmluZykge1xuICAgICAgICAgICAgICAgICBmZWF0dXJlU291cmNlID0gc2VsZi5lZGl0TGluZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmVHZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVTb3VyY2UgPSBzZWxmLmVkaXRQb2x5Z29uTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZUdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUpIHtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVTb3VyY2UgPSBzZWxmLmVkaXRDaXJjbGVMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb3VsZCBub3QgZmluZCByaWdodCBzb3VyY2VcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBkZWxldGUgdGhlIGZlYXR1cmUuIFVuYWJsZSB0byBmaW5kIGFwcHJvcHJpYXRlIHNvdXJjZS4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyByZW1vdmUgRmVhdHVyZSBmcm9tIHRoZSBzb3VyY2VcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVTb3VyY2UucmVtb3ZlRmVhdHVyZShkZWxldGVGZWF0dXJlKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZUdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5MaW5lU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVNvdXJjZSA9IHNlbGYuZWRpdEZyZWVoYW5kTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVNvdXJjZS5yZW1vdmVGZWF0dXJlKGRlbGV0ZUZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGFuZCBmcm9tIHRoZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlcy5yZW1vdmUoZGVsZXRlRmVhdHVyZSk7XG5cbiAgICAgICAgICAgICAgLy8gcmVyZW5kZXIgdGhlIHNlbGVjdGlvbkxpc3RcbiAgICAgICAgICAgICAgcmVuZGVyU2VsZWN0ZWRGZWF0dXJlc0xpc3QoKTtcbiAgICAgICAgICAgICAgc2VsZi5zYXZlKCk7XG4gICAgICAgICAgICAgIC8vIENhbGwgaG9vayB0byBub3RpZnkgdGhlIGZlYXR1cmUgY2hhbmdlXG4gICAgICAgICAgICAgIC8vIE1heWJlIHBhc3MgdGhlIHJlbWFpbmluZyBmZWF0dXJlcyBpbnN0ZWFkIG9mIHRoZSBkZWxldGVkRmVhdHVyZSA/XG4gICAgICAgICAgICAgIC8vIE9yIG1heWJlIGEgc2Vjb25kIGhvb2sgZm9yIGRlbGV0aW9uLCB3aGVyZSBib3RoIGlzIHBhc3NlZCA/XG4gICAgICAgICAgICAgIGlmIChjNGcubWFwcy5ob29rICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGM0Zy5tYXBzLmhvb2suZWRpdG9yX2ZlYXR1cmVDaGFuZ2VkID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGM0Zy5tYXBzLnV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2suZWRpdG9yX2ZlYXR1cmVDaGFuZ2VkLCB7XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlOiBkZWxldGVGZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnZGVsZXRlZCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTsgLy8gZW5kIG9mIFwiZGVsZXRlRmVhdHVyZUZ1bmN0aW9uKClcIlxuXG4gICAgICAgICAgICByZW5kZXJTZWxlY3RlZEZlYXR1cmVzTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZmVhdHVyZUNvdW50ID0gc2VsZWN0ZWRGZWF0dXJlcy5nZXRMZW5ndGgoKTtcbiAgICAgICAgICAgICAgc2VsZWN0Q29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgaWYgKGZlYXR1cmVDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmVhdHVyZUNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZSA9IHNlbGVjdGVkRmVhdHVyZXMuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgIGhlYWRsaW5lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICAgICAgICAvLyBhZGQgbmFtZSBpbnB1dGZpZWxkXG4gICAgICAgICAgICAgICAgICBpbnB1dE5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgIGlucHV0TmFtZUVsZW1lbnQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICAgIGlucHV0TmFtZUVsZW1lbnQuaWQgPSBpO1xuICAgICAgICAgICAgICAgICAgaW5wdXROYW1lRWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICBjNGcubWFwcy51dGlscy5kZWNvZGVHZW9Kc29uUHJvcGVydHkoc2VsZWN0ZWRGZWF0dXJlLmdldCgndG9vbHRpcCcpIHx8ICcnKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlucHV0TmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdmZWF0X2lkJywgaSk7XG4gICAgICAgICAgICAgICAgICAkKGlucHV0TmFtZUVsZW1lbnQpLmtleWRvd24oYmx1ck9uRW50ZXIpO1xuICAgICAgICAgICAgICAgICAgaW5wdXROYW1lRWxlbWVudC5vbmNoYW5nZSA9IG5hbWVDaGFuZ2VIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgaGVhZGxpbmVFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0TmFtZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgLy8gYWRkIG1vZGlmeSBidXR0b25cbiAgICAgICAgICAgICAgICAgIG1vZGlmeUJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgIG1vZGlmeUJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lID0gYzRnLm1hcHMuY29uc3RhbnQuY3NzLklDT04gKyAnICcgKyBjNGcubWFwcy5jb25zdGFudC5jc3MuRURJVE9SX0ZFQVRVUkVfTU9ESUZZO1xuICAgICAgICAgICAgICAgICAgbW9kaWZ5QnV0dG9uRWxlbWVudC50aXRsZSA9IGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4uRURJVE9SX0ZFQVRVUkVfTU9ESUZZO1xuICAgICAgICAgICAgICAgICAgbW9kaWZ5QnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZlYXRfaWQnLCBpKTtcbiAgICAgICAgICAgICAgICAgICQobW9kaWZ5QnV0dG9uRWxlbWVudCkuY2xpY2sobW9kaWZ5RmVhdHVyZUZ1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICAgIGhlYWRsaW5lRWxlbWVudC5hcHBlbmRDaGlsZChtb2RpZnlCdXR0b25FbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIC8vIGFkZCBkZWxldGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b25FbGVtZW50LmNsYXNzTmFtZSA9IGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5JQ09OICsgJyAnICsgYzRnLm1hcHMuY29uc3RhbnQuY3NzLkVESVRPUl9GRUFUVVJFX0RFTEVURTtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbkVsZW1lbnQudGl0bGUgPSBjNGcubWFwcy5jb25zdGFudC5pMThuLkVESVRPUl9GRUFUVVJFX0RFTEVURTtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdmZWF0X2lkJywgaSk7XG4gICAgICAgICAgICAgICAgICAkKGRlbGV0ZUJ1dHRvbkVsZW1lbnQpLmNsaWNrKGRlbGV0ZUZlYXR1cmVGdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICBoZWFkbGluZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgIHNlbGVjdENvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEZlYXR1cmUuZ2V0KCdtZWFzdXJlZExlbmd0aCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEZlYXR1cmUuZ2V0R2VvbWV0cnkoKSBpbnN0YW5jZW9mIG9sLmdlb20uTGluZVN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gYzRnLm1hcHMuY29uc3RhbnQuaTE4bi5MRU5HVEg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRGZWF0dXJlLmdldEdlb21ldHJ5KCkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pe1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gYzRnLm1hcHMuY29uc3RhbnQuaTE4bi5QRVJJTUVURVI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4uUkFESVVTO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaEVsZW1lbnQuaW5uZXJIVE1MICs9ICc8c3Ryb25nPicgKyBsYWJlbCArICc6PC9zdHJvbmc+ICcgKyBzZWxlY3RlZEZlYXR1cmUuZ2V0KCdtZWFzdXJlZExlbmd0aCcpLmh0bWxWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Q29udGVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGhFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEZlYXR1cmUuZ2V0KCdtZWFzdXJlZEFyZWEnKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmlubmVySFRNTCArPSAnPHN0cm9uZz4nICsgYzRnLm1hcHMuY29uc3RhbnQuaTE4bi5TVVJGQUNFQVJFQSArICc6PC9zdHJvbmc+ICcgKyBzZWxlY3RlZEZlYXR1cmUuZ2V0KCdtZWFzdXJlZEFyZWEnKS5odG1sVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdENvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRGZWF0dXJlLmdldCgnbWVhc3VyZWRSYWRpdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudC5pbm5lckhUTUwgKz0gJzxzdHJvbmc+JyArIGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4uUkFESVVTICsgJzo8L3N0cm9uZz4gJyArIHNlbGVjdGVkRmVhdHVyZS5nZXQoJ21lYXN1cmVkUmFkaXVzJykuaHRtbFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdENvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBjaGVjayBhbmQgYXBwZW5kIGVkaXRvci12YXJzXG4gICAgICAgICAgICAgICAgICBlZGl0b3JWYXJzID0gc2VsZWN0ZWRGZWF0dXJlLmdldCgnZWRpdG9yVmFycycpO1xuICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGVkaXRvclZhcnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb25nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xuICAgICAgICAgICAgICAgICAgICBzdHJvbmdFbGVtZW50LmlubmVySFRNTCA9IGVkaXRvclZhcnNbal0ubGFiZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5pZCA9IGkgKyAnLScgKyBqO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGM0Zy5tYXBzLnV0aWxzLmRlY29kZUdlb0pzb25Qcm9wZXJ0eShlZGl0b3JWYXJzW2pdLnZhbHVlIHx8ICcnKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmZWF0X2lkJywgaSk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Zhcl9pZCcsIGopO1xuICAgICAgICAgICAgICAgICAgICAkKGlucHV0RWxlbWVudCkua2V5ZG93bihibHVyT25FbnRlcik7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5vbmNoYW5nZSA9IGlucHV0Q2hhbmdlSGFuZGxlcjtcblxuICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmFwcGVuZENoaWxkKHN0cm9uZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdENvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdENvbnRlbnRIZWFkbGluZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIHNlbGYuc3RhdHVzQmFyLmlubmVySFRNTCA9IGZlYXR1cmVDb3VudDtcblxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGVjdENvbnRlbnQuYXBwZW5kQ2hpbGQoc2VsZWN0Q29udGVudEluZm8pO1xuICAgICAgICAgICAgICAgIC8vIHNlbGYuc3RhdHVzQmFyLmlubmVySFRNTCA9IDA7XG4gICAgICAgICAgICAgICAgc2VsZWN0Q29udGVudEhlYWRsaW5lLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfTsgLy8gZW5kIG9mIFwicmVuZGVyU2VsZWN0ZWRGZWF0dXJlc0xpc3RcIlxuXG4gICAgICAgICAgICByZW5kZXJTZWxlY3RlZEZlYXR1cmVzTGlzdCgpO1xuICAgICAgICAgIH07IC8vIGVuZCBvZiBcImZuSGFuZGxlU2VsZWN0aW9uXCJcblxuICAgICAgICAgIHNlbGVjdEludGVyYWN0aW9uLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGZuSGFuZGxlU2VsZWN0aW9uKGV2ZW50LnRhcmdldC5nZXRGZWF0dXJlcygpKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihzZWxlY3RJbnRlcmFjdGlvbik7XG4gICAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHNlbGVjdEJveEludGVyYWN0aW9uKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZhdGVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgLy8gRGlzYWJsZSBtYXBIb3ZlclxuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICAgIC8vIFJlc2V0IGRpc3BsYXksIGlmIG5vIGZlYXR1cmVzIGFyZSBzZWxlY3RlZFxuICAgICAgICAgIGlmIChzZWxlY3RJbnRlcmFjdGlvbi5nZXRGZWF0dXJlcygpLmdldExlbmd0aCgpIDwgMSkge1xuICAgICAgICAgICAgc2VsZWN0Q29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHNlbGVjdENvbnRlbnQuYXBwZW5kQ2hpbGQoc2VsZWN0Q29udGVudEluZm8pO1xuICAgICAgICAgICAgLy8gc2VsZi5zdGF0dXNCYXIuaW5uZXJIVE1MID0gMDtcbiAgICAgICAgICAgIHNlbGVjdENvbnRlbnRIZWFkbGluZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRW5hYmxlIGludGVyYWN0aW9uXG4gICAgICAgICAgc2VsZWN0SW50ZXJhY3Rpb24uc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihzZWxlY3RJbnRlcmFjdGlvbik7XG4gICAgICAgICAgc2VsZWN0Qm94SW50ZXJhY3Rpb24uc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihzZWxlY3RCb3hJbnRlcmFjdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmFwcGx5RmVhdHVyZU1vZGlmaWNhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc2VsZi5hcHBseUZlYXR1cmVNb2RpZmljYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRGlzYWJsZSBpbnRlcmFjdGlvblxuICAgICAgICAgIHNlbGVjdEludGVyYWN0aW9uLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHNlbGVjdEludGVyYWN0aW9uKTtcbiAgICAgICAgICBzZWxlY3RCb3hJbnRlcmFjdGlvbi5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbihzZWxlY3RCb3hJbnRlcmFjdGlvbik7XG5cbiAgICAgICAgICAvLyBlbmFibGUgbWFwSG92ZXJcbiAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXBIb3Zlci5hY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZWN0VmlldztcbiAgICB9LFxuXG4gICAgYWRkRHJhd1ZpZXc6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBUUklHR0VSX0RSQVcsXG4gICAgICAgICAgZHJhd0NvbnRlbnQsXG4gICAgICAgICAgb3B0aW9uc0RpdixcbiAgICAgICAgICBlbmFibGVJbnN0YW50TWVhc3VyZUNoZWNrYm94LFxuICAgICAgICAgIGVuYWJsZUluc3RhbnRNZWFzdXJlQ2hlY2tib3hMYWJlbCxcbiAgICAgICAgICAvLyBlbmFibGVGcmVlaGFuZERyYXdDaGVja2JveCxcbiAgICAgICAgICAvLyBlbmFibGVGcmVlaGFuZERyYXdDaGVja2JveExhYmVsLFxuICAgICAgICAgIGNoZWNrYm94Q2hhbmdlSGFuZGxlcixcbiAgICAgICAgICBkcmF3VmlldyxcbiAgICAgICAgICBhZGREcmF3U3R5bGUsXG4gICAgICAgICAgb2xUeXBlO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgc3R5bGVJZHM6IFtdXG4gICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgY2hlY2tib3hDaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgLy8gdmFyIGludGVyYWN0aW9uID0gc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmludGVyYWN0aW9uO1xuICAgICAgICAgIC8vIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgLy8gLy9zZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuXG4gICAgICB9XG5cbiAgICAgIFRSSUdHRVJfRFJBVyA9ICdFRElUT1JfVklFV19UUklHR0VSX0RSQVdfJyArIG9wdGlvbnMudHlwZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBkcmF3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZHJhd0NvbnRlbnQuY2xhc3NOYW1lID0gYzRnLm1hcHMuY29uc3RhbnQuY3NzWydFRElUT1JfRFJBV19DT05URU5UXycgKyBvcHRpb25zLnR5cGUudG9VcHBlckNhc2UoKV07XG4gICAgICBkcmF3Q29udGVudC5pbm5lckhUTUwgPSAnPGg0PicgKyBjNGcubWFwcy5jb25zdGFudC5pMThuW1RSSUdHRVJfRFJBV10gKyAnPC9oND4nO1xuXG4gICAgICBpZiAob3B0aW9ucy50eXBlLnRvTG93ZXJDYXNlKCkgIT09ICdwb2ludCcpIHtcbiAgICAgICAgb3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcHRpb25zRGl2LmNsYXNzTmFtZSA9IGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5FRElUT1JfRFJBV19PUFRJT05TO1xuICAgICAgICBkcmF3Q29udGVudC5hcHBlbmRDaGlsZChvcHRpb25zRGl2KTtcblxuICAgICAgICBlbmFibGVJbnN0YW50TWVhc3VyZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZW5hYmxlSW5zdGFudE1lYXN1cmVDaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgZW5hYmxlSW5zdGFudE1lYXN1cmVDaGVja2JveC5pZCA9ICdlbmFibGVJbnN0YW50TWVhc3VyZUZvcicgKyBvcHRpb25zLnR5cGU7XG4gICAgICAgIG9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZW5hYmxlSW5zdGFudE1lYXN1cmVDaGVja2JveCk7XG5cbiAgICAgICAgZW5hYmxlSW5zdGFudE1lYXN1cmVDaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZW5hYmxlSW5zdGFudE1lYXN1cmVDaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VuYWJsZUluc3RhbnRNZWFzdXJlRm9yJyArIG9wdGlvbnMudHlwZSk7XG4gICAgICAgIGVuYWJsZUluc3RhbnRNZWFzdXJlQ2hlY2tib3hMYWJlbC5pbm5lckhUTUwgPSBjNGcubWFwcy5jb25zdGFudC5pMThuLkVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFO1xuICAgICAgICBvcHRpb25zRGl2LmFwcGVuZENoaWxkKGVuYWJsZUluc3RhbnRNZWFzdXJlQ2hlY2tib3hMYWJlbCk7XG5cbiAgICAgICAgb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblxuICAgICAgICAvLyBlbmFibGVGcmVlaGFuZERyYXdDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIC8vIGVuYWJsZUZyZWVoYW5kRHJhd0NoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAvLyBlbmFibGVGcmVlaGFuZERyYXdDaGVja2JveC5pZCA9ICdlbmFibGVGcmVlaGFuZERyYXdGb3InICsgb3B0aW9ucy50eXBlO1xuICAgICAgICAvLyBlbmFibGVGcmVlaGFuZERyYXdDaGVja2JveC5vbmNoYW5nZSA9IGNoZWNrYm94Q2hhbmdlSGFuZGxlcjtcbiAgICAgICAgLy8gb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChlbmFibGVGcmVlaGFuZERyYXdDaGVja2JveCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGVuYWJsZUZyZWVoYW5kRHJhd0NoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAvLyBlbmFibGVGcmVlaGFuZERyYXdDaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VuYWJsZUZyZWVoYW5kRHJhd0ZvcicgKyBvcHRpb25zLnR5cGUpO1xuICAgICAgICAvLyBlbmFibGVGcmVlaGFuZERyYXdDaGVja2JveExhYmVsLmlubmVySFRNTCA9IGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4uRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXO1xuICAgICAgICAvLyBvcHRpb25zRGl2LmFwcGVuZENoaWxkKGVuYWJsZUZyZWVoYW5kRHJhd0NoZWNrYm94TGFiZWwpO1xuICAgICAgfVxuXG4gICAgICBhZGREcmF3U3R5bGUgPSBmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgICB2YXIgaW50ZXJhY3Rpb25WaWV3LFxuICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgaW50ZXJhY3Rpb24sXG4gICAgICAgICAgICBmZWF0dXJlcyxcbiAgICAgICAgICAgIGVkaXRvclN0eWxlLFxuICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICBzdHlsZURhdGEsXG4gICAgICAgICAgICBzdHlsZUljb24sXG4gICAgICAgICAgICBzdmdTcmMsXG4gICAgICAgICAgICBzdHlsZUltYWdlLFxuICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwsXG4gICAgICAgICAgICBmZWF0dXJlSWRDb3VudCxcbiAgICAgICAgICAgIG5hbWU7XG5cbiAgICAgICAgLy8gU3R5bGUgXCJzaG9ydGN1dFwiXG4gICAgICAgIHN0eWxlID0gc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc3R5bGVJZF0uc3R5bGUoKVswXTtcbiAgICAgICAgZWRpdG9yU3R5bGUgPSBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXS5lZGl0b3I7XG4gICAgICAgIHN0eWxlRGF0YSA9IHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLmxvY1N0eWxlQXJyO1xuICAgICAgICBzdmdTcmMgPSBzdHlsZURhdGEuc3ZnU3JjO1xuXG4gICAgICAgIGZlYXR1cmVJZENvdW50ID0gMDtcblxuICAgICAgICAvLyBDcmVhdGUgbGFiZWwgZm9yIGludGVyYWN0aW9uLXRyaWdnZXJcbiAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIC8vIEBUT0RPIHVzZSBjc3MtY2xhc3MgZm9yIGRpbWVuc2lvbnNcbiAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsLnN0eWxlLm1pbldpZHRoID0gJzMwcHgnO1xuICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbC5zdHlsZS5taW5IZWlnaHQgPSAnMzBweCc7XG4gICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsLnN0eWxlLm1hcmdpbiA9ICcycHgnO1xuICAgICAgICAvLyBcInN0eWxlLmdldEltYWdlKCkuZ2V0SW1hZ2UoKVwiLCBkb2VzIG5vdCB3b3JrIGluIGV2ZXJ5IGNhc2VcbiAgICAgICAgc3R5bGVJbWFnZSA9IHN0eWxlLmdldEltYWdlKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZWRpdG9yU3R5bGUuaWNvblNyYyB8fCBzdHlsZUltYWdlIGluc3RhbmNlb2Ygb2wuc3R5bGUuSWNvbikge1xuICAgICAgICAgIHN0eWxlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgaWYgKGVkaXRvclN0eWxlLmljb25TcmMgJiYgKGVkaXRvclN0eWxlLmljb25TcmMuaW5kZXhPZignLicpICE9IC0xKSkge1xuICAgICAgICAgICAgc3R5bGVJY29uLnNyYyA9IGVkaXRvclN0eWxlLmljb25TcmM7XG4gICAgICAgICAgICBpZiAoc3R5bGVEYXRhLmVkaXRvcl9pY29uX3NpemUpIHtcbiAgICAgICAgICAgICAgICBzdHlsZUljb24uaGVpZ2h0ID0gc3R5bGVEYXRhLmVkaXRvcl9pY29uX3NpemVbMF07XG4gICAgICAgICAgICAgICAgc3R5bGVJY29uLndpZHRoID0gc3R5bGVEYXRhLmVkaXRvcl9pY29uX3NpemVbMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlSWNvbi5oZWlnaHQgPSAnMzInO1xuICAgICAgICAgICAgICAgIHN0eWxlSWNvbi53aWR0aCA9ICczMic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlSWNvbi5zcmMgPSBzdHlsZUltYWdlLmdldFNyYygpO1xuICAgICAgICAgICAgc3R5bGVJY29uLnNjYWxlID0gc3R5bGVJbWFnZS5nZXRTY2FsZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbC5hcHBlbmRDaGlsZChzdHlsZUljb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHN2Z1NyYykge1xuICAgICAgICAgICAgaWYgKHN0eWxlRGF0YS5zdmdTcmMgJiYgc3R5bGVEYXRhLmljb25fc2NhbGUgJiYgc3R5bGVEYXRhLmljb25fc2l6ZSkge1xuICAgICAgICAgICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gKHN0eWxlRGF0YS5pY29uX3NpemVbMF0gKiBzdHlsZURhdGEuaWNvbl9zY2FsZSk7XG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gKHN0eWxlRGF0YS5pY29uX3NpemVbMV0gKiBzdHlsZURhdGEuaWNvbl9zY2FsZSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3Ryb2tld2lkdGggPSAwO1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZURhdGEuc3Ryb2tld2lkdGggJiYgc3R5bGVEYXRhLnN0cm9rZXdpZHRoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZXdpZHRoID0gc3R5bGVEYXRhLnN0cm9rZXdpZHRoLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKyAoMiAqIHN0cm9rZXdpZHRoKTtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aCArICgyICogc3Ryb2tld2lkdGgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGlmIChzdHlsZURhdGEuZmlsbGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjNGcubWFwcy51dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZpbGxjb2xvciwgc3R5bGVEYXRhLmZpbGxvcGFjaXR5LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZXdpZHRoICYmIHN0eWxlRGF0YS5zdHJva2Vjb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjNGcubWFwcy51dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLnN0cm9rZWNvbG9yLCBzdHlsZURhdGEuc3Ryb2tlb3BhY2l0eS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBzdHJva2V3aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgKHN0eWxlRGF0YS5pY29uX29wYWNpdHkudmFsdWUgJiYgKHN0eWxlRGF0YS5pY29uX29wYWNpdHkudmFsdWUgPiAwKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICBjdHguZ2xvYmFsQWxwaGEgPSAoc3R5bGVEYXRhLmljb25fb3BhY2l0eS52YWx1ZSAvIDEwMCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBzdHlsZURhdGEuc3ZnU3JjO1xuICAgICAgICAgICAgICAgIGltZy56SW5kZXggPSAxMDA7XG5cbiAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgc3Ryb2tld2lkdGgsIHN0cm9rZXdpZHRoLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdHlsZUljb24gPSBjYW52YXM7XG5cbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbC5zdHlsZS53aWR0aCA9ICh3aWR0aCAqIHNjYWxlKSArICdweCc7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCAqIHNjYWxlKSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwuc3R5bGUuYmFja2dyb3VuZCA9IHN0eWxlLmdldEZpbGwoKS5nZXRDb2xvcigpO1xuICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgJyArIHN0eWxlLmdldFN0cm9rZSgpLmdldENvbG9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgaW50ZXJhY3Rpb25WaWV3XG4gICAgICAgIC8vICAgXCJhZGRWaWV3XCIgd2lsbCBiZSB1c2VkIGZvciB0aGlzLCBiZWNhdXNlIHRoZSBmdW5jdGlvbmFsaXR5XG4gICAgICAgIC8vICAgaXN0IG1vc3RseSBlcXVhbFxuICAgICAgICBuYW1lID0gc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc3R5bGVJZF0ubmFtZS5yZXBsYWNlKFwiJiM0MDtcIiwgXCIoXCIpLnJlcGxhY2UoXCImIzQxO1wiLCBcIilcIik7XG4gICAgICAgIGludGVyYWN0aW9uVmlldyA9IHNlbGYuYWRkVmlldyh7XG4gICAgICAgICAgbmFtZTogJ2RyYXc6JyArIChzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXS50b29sdGlwIHx8IG5hbWUpLFxuICAgICAgICAgIHRyaWdnZXJDb25maWc6IHtcbiAgICAgICAgICAgIGxhYmVsOiBzdHlsZVRyaWdnZXJMYWJlbCxcbiAgICAgICAgICAgIHRpcExhYmVsOiBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXS50b29sdGlwIHx8IG5hbWUsXG4gICAgICAgICAgICBjbGFzc05hbWU6IGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5FRElUT1JfRFJBV19UUklHR0VSLFxuICAgICAgICAgICAgdGFyZ2V0OiBkcmF3Q29udGVudCxcbiAgICAgICAgICAgIHdpdGhIZWFkbGluZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXG4gICAgICAgICAgICB7c2VjdGlvbjogc2VsZi5jb250ZW50Q29udGFpbmVyLCBlbGVtZW50OiBkcmF3Q29udGVudH0sXG4gICAgICAgICAgICB7c2VjdGlvbjogc2VsZi50b3BUb29sYmFyLCBlbGVtZW50OiBzZWxmLnZpZXdUcmlnZ2VyQmFyfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgaW5pdEZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJhY3Rpb25TdHlsZUltYWdlLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVNrZXRjaCxcbiAgICAgICAgICAgICAgICBhY3RpdmVUb29sdGlwO1xuXG4gICAgICAgICAgICAvLyBPbmx5IHNob3cgb3JpZ2luYWwgaWNvbiwgd2hlbiB0aGUgZHJhd2luZyBQT0lzXG4gICAgICAgICAgICBpZiAob3B0aW9ucy50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2ludCcgJiYgc3R5bGUuZ2V0SW1hZ2UoKSkge1xuICAgICAgICAgICAgICBpbnRlcmFjdGlvblN0eWxlSW1hZ2UgPSBzdHlsZS5nZXRJbWFnZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb25TdHlsZUltYWdlID0gbmV3IG9sLnN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgICAgICAgZmlsbDogc3R5bGUuZ2V0RmlsbCgpLFxuICAgICAgICAgICAgICAgIHN0cm9rZTogc3R5bGUuZ2V0U3Ryb2tlKCksXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA1LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR2V0IGFwcHJvcHJpYXRlIHNvdXJjZVxuICAgICAgICAgICAgc3dpdGNoIChvcHRpb25zLnR5cGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICBjYXNlICdmcmVlaGFuZCc6XG4gICAgICAgICAgICAgICAgICBzb3VyY2UgPSBzZWxmLmVkaXRGcmVlaGFuZExheWVyLmdldFNvdXJjZSgpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgICBzb3VyY2UgPSBzZWxmLmVkaXRDaXJjbGVMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdwb2x5Z29uJzpcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBzZWxmLmVkaXRQb2x5Z29uTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2xpbmVzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHNvdXJjZSA9IHNlbGYuZWRpdExpbmVMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAncG9pbnQnOlxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNvdXJjZSA9IHNlbGYuZWRpdFBvaW50TGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9sVHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICAgICAgICAgIGlmIChvbFR5cGUgPT0gJ0ZyZWVoYW5kJykge1xuICAgICAgICAgICAgICBvbFR5cGUgPSAnTGluZVN0cmluZydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmVhdHVyZXMgPSBuZXcgb2wuQ29sbGVjdGlvbigpO1xuICAgICAgICAgICAgaW50ZXJhY3Rpb24gPSBuZXcgb2wuaW50ZXJhY3Rpb24uRHJhdyh7XG4gICAgICAgICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgIHR5cGU6IG9sVHlwZSxcbiAgICAgICAgICAgICAgZnJlZWhhbmQ6IG9wdGlvbnMudHlwZSA9PSAnRnJlZWhhbmQnLFxuICAgICAgICAgICAgICBzdHlsZTogW1xuICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHN0eWxlLmdldFN0cm9rZSgpLmdldFdpZHRoKCkgKyAyXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIGltYWdlOiBpbnRlcmFjdGlvblN0eWxlSW1hZ2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHN0eWxlLmdldEdlb21ldHJ5KCksXG4gICAgICAgICAgICAgICAgICBmaWxsOiBzdHlsZS5nZXRGaWxsKCksXG4gICAgICAgICAgICAgICAgICBzdHJva2U6IHN0eWxlLmdldFN0cm9rZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEBUT0RPIGRva3VcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpbnRlcmFjdGlvbi5vbignZHJhd3N0YXJ0JyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVNrZXRjaCA9IGV2ZW50LmZlYXR1cmU7XG4gICAgICAgICAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCdzdHlsZUlkJywgc3R5bGVJZCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChlbmFibGVJbnN0YW50TWVhc3VyZUNoZWNrYm94ICYmIGVuYWJsZUluc3RhbnRNZWFzdXJlQ2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUb29sdGlwID0gbmV3IGM0Zy5tYXBzLm1pc2MuVG9vbHRpcFBvcFVwKHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXA6IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcCxcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZXZlbnQuY29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHNlbGYpO1xuXG4gICAgICAgICAgICAvLyBAVE9ETyBkb2t1XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLm9uKCdwb2ludGVybW92ZScsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZW5hYmxlSW5zdGFudE1lYXN1cmVDaGVja2JveCAmJiBlbmFibGVJbnN0YW50TWVhc3VyZUNoZWNrYm94LmNoZWNrZWQgJiYgYWN0aXZlU2tldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYoYWN0aXZlVG9vbHRpcCAmJiBjNGcubWFwcy51dGlscy5tZWFzdXJlR2VvbWV0cnkoYWN0aXZlU2tldGNoLmdldEdlb21ldHJ5KCksIHRydWUpLnJhd1ZhbHVlICYmIGM0Zy5tYXBzLnV0aWxzLm1lYXN1cmVHZW9tZXRyeShhY3RpdmVTa2V0Y2guZ2V0R2VvbWV0cnkoKSwgdHJ1ZSkucmF3VmFsdWUgPT0gXCIwLjAwXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUb29sdGlwLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRvb2x0aXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCFhY3RpdmVUb29sdGlwICYmIGM0Zy5tYXBzLnV0aWxzLm1lYXN1cmVHZW9tZXRyeShhY3RpdmVTa2V0Y2guZ2V0R2VvbWV0cnkoKSwgdHJ1ZSkucmF3VmFsdWUgJiYgYzRnLm1hcHMudXRpbHMubWVhc3VyZUdlb21ldHJ5KGFjdGl2ZVNrZXRjaC5nZXRHZW9tZXRyeSgpLCB0cnVlKS5yYXdWYWx1ZSAhPSBcIjAuMDBcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRvb2x0aXAgPSBuZXcgYzRnLm1hcHMubWlzYy5Ub29sdGlwUG9wVXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZXZlbnQuY29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2ZVRvb2x0aXApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUb29sdGlwLnNldFBvc2l0aW9uKGV2ZW50LmNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUb29sdGlwLnNldENvbnRlbnQoYzRnLm1hcHMudXRpbHMubWVhc3VyZUdlb21ldHJ5KGFjdGl2ZVNrZXRjaC5nZXRHZW9tZXRyeSgpLCB0cnVlKS5odG1sVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBzZWxmKTtcblxuICAgICAgICAgICAgLy8gQFRPRE8gZG9rdVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3ZW5kJyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICAgICAgICAgIHZhcnMsXG4gICAgICAgICAgICAgICAgICAgICAgZWRpdG9yVmFycyxcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lO1xuXG4gICAgICAgICAgICAgICAgICAvLyBuYW1lIHRoZSBmZWF0dXJlXG4gICAgICAgICAgICAgICAgICBmZWF0dXJlSWRDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgbmFtZSA9IHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLm5hbWUucmVwbGFjZShcIiYjNDA7XCIsIFwiKFwiKS5yZXBsYWNlKFwiJiM0MTtcIiwgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgYWN0aXZlU2tldGNoLnNldCgndG9vbHRpcCcsIChzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXS50b29sdGlwIHx8IG5hbWUpICsgJyAoJyArIGZlYXR1cmVJZENvdW50ICsgJyknKTtcbiAgICAgICAgICAgICAgICAgIC8vIGFkZCBzdHlsZUlkXG4gICAgICAgICAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCdzdHlsZUlkJywgc3R5bGVJZCk7XG4gICAgICAgICAgICAgICAgICAvLyBhZGQgbWVhc3VyZW1lbnRzIHRvIHRoZSBmZWF0dXJlXG4gICAgICAgICAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCdtZWFzdXJlZExlbmd0aCcsIGM0Zy5tYXBzLnV0aWxzLm1lYXN1cmVHZW9tZXRyeShhY3RpdmVTa2V0Y2guZ2V0R2VvbWV0cnkoKSwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudHlwZS50b0xvd2VyQ2FzZSgpID09PSAncG9seWdvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2tldGNoLnNldCgnbWVhc3VyZWRBcmVhJywgYzRnLm1hcHMudXRpbHMubWVhc3VyZUdlb21ldHJ5KGFjdGl2ZVNrZXRjaC5nZXRHZW9tZXRyeSgpKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2tldGNoLnNldCgnbWVhc3VyZWRSYWRpdXMnLCBjNGcubWFwcy51dGlscy5tZWFzdXJlR2VvbWV0cnkoYWN0aXZlU2tldGNoLmdldEdlb21ldHJ5KCkpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vYWN0aXZlU2tldGNoLnNldFN0eWxlKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgIC8vIGFkZCBlZGl0b3ItdmFyc1xuICAgICAgICAgICAgICAgICAgdmFycyA9IGVkaXRvclN0eWxlLnZhcnM7XG4gICAgICAgICAgICAgICAgICBlZGl0b3JWYXJzID0gW107XG4gICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3JWYXJzW2ldID0ge307XG4gICAgICAgICAgICAgICAgICAgIGVkaXRvclZhcnNbaV0ua2V5ID0gdmFyc1tpXS5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRvclZhcnNbaV0ubGFiZWwgPSB2YXJzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3JWYXJzW2ldLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCdlZGl0b3JWYXJzJywgZWRpdG9yVmFycyk7XG4gICAgICAgICAgICAgICAgICAvLyByZXNldCBhY3RpdmUtZWxlbWVudCB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVNrZXRjaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUb29sdGlwLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRvb2x0aXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHNlbGYpO1xuXG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICB9LCAvLyBlbmQgb2YgXCJpbml0RnVuY3Rpb24oKVwiXG5cbiAgICAgICAgICBhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vIGRlYWN0aXZhdGUgbWFwSG92ZXJcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICAgICAgLy8gUmVzZXQgZmVhdHVyZS1saXN0XG4gICAgICAgICAgICBmZWF0dXJlcy5jbGVhcigpO1xuXG4gICAgICAgICAgICAvLyBFbmFibGUgaW50ZXJhY3Rpb25cbiAgICAgICAgICAgIC8vIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbi5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZGVhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vIHJlYWN0aXZhdGUgbWFwSG92ZXJcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgICAgIC8vIGZpbmlzaCBkcmF3aW5ncywgaWYgbm90IGFscmVhZHkgZG9uZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudHlwZS50b0xvd2VyQ2FzZSgpICE9PSAncG9pbnQnKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb24uZmluaXNoRHJhd2luZygpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAvLyAwX29cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgZnJvbSBtYXBcbiAgICAgICAgICAgIC8vIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbi5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBkcmF3Vmlldyk7XG5cbiAgICAgICAgcmV0dXJuIGludGVyYWN0aW9uVmlldztcbiAgICAgIH07XG5cbiAgICAgIGRyYXdWaWV3ID0gc2VsZi5hZGRWaWV3KHtcbiAgICAgICAgbmFtZTogJ2RyYXc6JyArIG9wdGlvbnMudHlwZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICB0cmlnZ2VyQ29uZmlnOiB7XG4gICAgICAgICAgdGlwTGFiZWw6IGM0Zy5tYXBzLmNvbnN0YW50LmkxOG5bVFJJR0dFUl9EUkFXXSxcbiAgICAgICAgICBjbGFzc05hbWU6IGM0Zy5tYXBzLmNvbnN0YW50LmNzc1tUUklHR0VSX0RSQVddLFxuICAgICAgICAgIHdpdGhIZWFkbGluZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uRWxlbWVudHM6IFtcbiAgICAgICAgICB7c2VjdGlvbjogc2VsZi5jb250ZW50Q29udGFpbmVyLCBlbGVtZW50OiBkcmF3Q29udGVudH0sXG4gICAgICAgICAge3NlY3Rpb246IHNlbGYudG9wVG9vbGJhciwgZWxlbWVudDogc2VsZi52aWV3VHJpZ2dlckJhcn1cbiAgICAgICAgXSxcbiAgICAgICAgaW5pdEZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgIHN0eWxlSWQsXG4gICAgICAgICAgICAgIG5lZWRlZFN0eWxlcyxcbiAgICAgICAgICAgICAgc29ydEFuZEFkZFN0eWxlcztcblxuICAgICAgICAgIC8vIFNob3cgbG9hZGluZyBhbmltYXRpb25cbiAgICAgICAgICBzZWxmLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICAgICAgbmVlZGVkU3R5bGVzID0gW107XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBAVE9ET1xuICAgICAgICAgICAqIFtzb3J0QW5kQWRkU3R5bGVzIGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzb3J0QW5kQWRkU3R5bGVzID0gZnVuY3Rpb24gKGFyclN0eWxlSWRzKSB7XG4gICAgICAgICAgICB2YXIgaixcbiAgICAgICAgICAgICAgICBsb2NhdGlvblN0eWxlcyxcbiAgICAgICAgICAgICAgICBkcmF3SW50ZXJhY3Rpb24sXG4gICAgICAgICAgICAgICAgc3R5bGVJZHM7XG5cbiAgICAgICAgICAgIC8vIHByZXBhcmVcbiAgICAgICAgICAgIGxvY2F0aW9uU3R5bGVzID0gc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXM7XG4gICAgICAgICAgICBzdHlsZUlkcyA9IGFyclN0eWxlSWRzIHx8IG9wdGlvbnMuc3R5bGVJZHM7XG4gICAgICAgICAgICBpZiAoIXN0eWxlSWRzIHx8ICFsb2NhdGlvblN0eWxlcykge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNvcnRcbiAgICAgICAgICAgIHN0eWxlSWRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblxuICAgICAgICAgICAgICAvL1RvRG8gY2hlY2tcbiAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uU3R5bGVzW2FdICYmIGxvY2F0aW9uU3R5bGVzW2JdICYmIGxvY2F0aW9uU3R5bGVzW2FdLmVkaXRvcikge1xuICAgICAgICAgICAgICAgIGlmICgoIWxvY2F0aW9uU3R5bGVzW2FdLmVkaXRvci5zb3J0ICYmICFsb2NhdGlvblN0eWxlc1tiXS5lZGl0b3Iuc29ydCkgfHwgKGxvY2F0aW9uU3R5bGVzW2FdLmVkaXRvci5zb3J0ID09PSBsb2NhdGlvblN0eWxlc1tiXS5lZGl0b3Iuc29ydCkpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghbG9jYXRpb25TdHlsZXNbYV0ubmFtZSB8fCAhbG9jYXRpb25TdHlsZXNbYl0ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCFsb2NhdGlvblN0eWxlc1tiXS5uYW1lKSA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAobG9jYXRpb25TdHlsZXNbYV0ubmFtZS50b0xvd2VyQ2FzZSgpID4gbG9jYXRpb25TdHlsZXNbYl0ubmFtZS50b0xvd2VyQ2FzZSgpKSA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFsb2NhdGlvblN0eWxlc1thXS5lZGl0b3Iuc29ydCB8fCAhbG9jYXRpb25TdHlsZXNbYl0uZWRpdG9yLnNvcnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoIWxvY2F0aW9uU3R5bGVzW2JdLmVkaXRvci5zb3J0KSA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKGxvY2F0aW9uU3R5bGVzW2FdLmVkaXRvci5zb3J0ID4gbG9jYXRpb25TdHlsZXNbYl0uZWRpdG9yLnNvcnQpID8gMSA6IC0xO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTsgLy8gZW5kIHNvcnRcblxuICAgICAgICAgICAgLy8gY3JlYXRlXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc3R5bGVJZHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgZHJhd0ludGVyYWN0aW9uID0gYWRkRHJhd1N0eWxlKHN0eWxlSWRzW2pdKTtcbiAgICAgICAgICAgICAgLy8gYWN0aXZhdGUgdGhlIGZpcnN0IGRyYXdTdHlsZVxuICAgICAgICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRyYXdJbnRlcmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9OyAvLyBlbmQgb2YgXCJzb3J0QW5kQWRkU3R5bGVzXCJcblxuICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGFsbCBuZWVkZWQgc3R5bGVzIGFyZSBsb2FkZWRcbiAgICAgICAgICBpZiAoIXNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzKSB7XG4gICAgICAgICAgICAvLyBubyBzdHlsZXMgYXJlIGxvYWRlZCwgc28gbG9hZCBhbGwgc3R5bGVzXG4gICAgICAgICAgICBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlcyA9IHt9O1xuICAgICAgICAgICAgbmVlZGVkU3R5bGVzID0gb3B0aW9ucy5zdHlsZUlkcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2hlY2sgd2ljaCBzdHlsZXMgYXJlIG1pc3NpbmdcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLnN0eWxlSWRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIHN0eWxlSWQgPSBvcHRpb25zLnN0eWxlSWRzW2ldO1xuICAgICAgICAgICAgICBpZiAoIXNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdIHx8ICFzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXS5zdHlsZSkge1xuICAgICAgICAgICAgICAgIG5lZWRlZFN0eWxlcy5wdXNoKHN0eWxlSWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5lZWRlZFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYucHJveHkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgbG9hZCBsb2NTdHlsZXMsIGFzIHRoZSBtYXAtcHJveHkgd2FzIG5vdCBpbml0aWFsbGl6ZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhcbiAgICAgICAgICAgICAgICBuZWVkZWRTdHlsZXMsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0QW5kQWRkU3R5bGVzKCk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgYWx3YXlzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgbG9hZGluZy1hbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzb3J0QW5kQWRkU3R5bGVzKCk7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgc2VsZi5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZhdGVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBkZWFjdGl2YXRlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkcmF3VmlldztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgb3B0X3Nsb3QgaXMgZW1wdHksIHRoZSBmdW5jdGlvbiB3aWxsIGp1c3Qgc2F2ZSB0aGUgZGF0YSBpbiB0aGUgc2Vzc2lvblN0b3JhZ2UuXG4gICAgICogW3NhdmUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7W3R5cGVdfSAgb3B0X3Nsb3QgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHNhdmU6IGZ1bmN0aW9uIChvcHRfc2xvdCkge1xuICAgICAgdmFyIGZvcm1hdCxcbiAgICAgICAgICBzYXZlRGF0YSxcbiAgICAgICAgICBzbG90TmFtZSxcbiAgICAgICAgICBzdG9yYWdlO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgPT09ICdiYWNrZW5kJykge1xuICAgICAgICByZXR1cm4gdGhpcy5leHBvcnRHZW9KU09OKCk7XG4gICAgICB9XG5cbiAgICAgIGZvcm1hdCA9IG5ldyBvbC5mb3JtYXQuR2VvSlNPTigpO1xuICAgICAgc2F2ZURhdGEgPSB7fTtcblxuICAgICAgc2F2ZURhdGEucG9pbnRzID0gZm9ybWF0LndyaXRlRmVhdHVyZXModGhpcy5lZGl0UG9pbnRMYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpKTtcbiAgICAgIHNhdmVEYXRhLmxpbmVzID0gZm9ybWF0LndyaXRlRmVhdHVyZXModGhpcy5lZGl0TGluZUxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCkpO1xuICAgICAgc2F2ZURhdGEucG9seWdvbnMgPSBmb3JtYXQud3JpdGVGZWF0dXJlcyh0aGlzLmVkaXRQb2x5Z29uTGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKSk7XG4gICAgICBzYXZlRGF0YS5jaXJjbGVzID0gZm9ybWF0LndyaXRlRmVhdHVyZXModGhpcy5lZGl0Q2lyY2xlTGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKSk7XG4gICAgICBzYXZlRGF0YS5mcmVlaGFuZCA9IGZvcm1hdC53cml0ZUZlYXR1cmVzKHRoaXMuZWRpdEZyZWVoYW5kTGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKSk7XG5cbiAgICAgIHNsb3ROYW1lID0gJ2M0Z01hcHNfJztcbiAgICAgIHNsb3ROYW1lICs9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEubWFwSWQ7XG4gICAgICBzbG90TmFtZSArPSAnXycgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICBpZiAoIW9wdF9zbG90KSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbG90TmFtZSArPSAnXycgKyBvcHRfc2xvdDtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgICB9XG4gICAgICAvLyBDYWxsIGhvb2sgZnVuY3Rpb25zIGJlZm9yZSBzYXZlXG4gICAgICBpZiAoYzRnLm1hcHMuaG9vayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjNGcubWFwcy5ob29rLmVkaXRvcl9vblNhdmUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGM0Zy5tYXBzLnV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2suZWRpdG9yX29uU2F2ZSwgc2F2ZURhdGEpO1xuICAgICAgfVxuICAgICAgc3RvcmFnZS5zZXRJdGVtKHNsb3ROYW1lLCBKU09OLnN0cmluZ2lmeShzYXZlRGF0YSkpO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIG9wdF9zbG90IGlzIGVtcHR5LCB0aGUgZnVuY3Rpb24gd2lsbCBqdXN0IGxvYWQgdGhlIGRhdGEgZnJvbSB0aGUgc2Vzc2lvblN0b3JhZ2UuXG4gICAgICogW2xvYWQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7W3R5cGVdfSAgb3B0X3Nsb3QgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbiAob3B0X3Nsb3QpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIHNlbGYsXG4gICAgICAgICAgZm9ybWF0LFxuICAgICAgICAgIGxvYWREYXRhLFxuICAgICAgICAgIGZlYXR1cmVDb2xsZWN0aW9uLFxuICAgICAgICAgIHNsb3ROYW1lLFxuICAgICAgICAgIHN0b3JhZ2UsXG4gICAgICAgICAgbmVlZGVkU3R5bGVzLFxuICAgICAgICAgIHN0eWxlSWQsXG4gICAgICAgICAgaW1wb3J0RmVhdHVyZXM7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgZm9ybWF0ID0gbmV3IG9sLmZvcm1hdC5HZW9KU09OKCk7XG4gICAgICBzZWxmLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICBzbG90TmFtZSA9ICdjNGdNYXBzXyc7XG4gICAgICBzbG90TmFtZSArPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLm1hcElkO1xuICAgICAgc2xvdE5hbWUgKz0gJ18nICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgaWYgKCFvcHRfc2xvdCkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xvdE5hbWUgKz0gJ18nICsgb3B0X3Nsb3Q7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgICAgfVxuICAgICAgbG9hZERhdGEgPSBzdG9yYWdlLmdldEl0ZW0oc2xvdE5hbWUpO1xuICAgICAgaWYgKCFsb2FkRGF0YSkge1xuICAgICAgICBzZWxmLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsb2FkRGF0YSA9IEpTT04ucGFyc2UobG9hZERhdGEpO1xuXG4gICAgICBmZWF0dXJlQ29sbGVjdGlvbiA9IFtdO1xuICAgICAgbmVlZGVkU3R5bGVzID0gW107XG5cbiAgICAgIGZlYXR1cmVDb2xsZWN0aW9uID0gZm9ybWF0LnJlYWRGZWF0dXJlcyhsb2FkRGF0YS5wb2ludHMpLmNvbmNhdChmb3JtYXQucmVhZEZlYXR1cmVzKGxvYWREYXRhLmxpbmVzKSwgZm9ybWF0LnJlYWRGZWF0dXJlcyhsb2FkRGF0YS5wb2x5Z29ucyksIGZvcm1hdC5yZWFkRmVhdHVyZXMobG9hZERhdGEuY2lyY2xlcyksIGZvcm1hdC5yZWFkRmVhdHVyZXMobG9hZERhdGEuZnJlZWhhbmQpKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBmZWF0dXJlQ29sbGVjdGlvbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdHlsZUlkID0gZmVhdHVyZUNvbGxlY3Rpb25baV0uZ2V0KCdzdHlsZUlkJyk7XG5cbiAgICAgICAgaWYgKCghc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc3R5bGVJZF0gfHwgIXNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLnN0eWxlKSAmJiAkLmluQXJyYXkoc3R5bGVJZCwgbmVlZGVkU3R5bGVzKSA9PT0gLTEpIHtcbiAgICAgICAgICBuZWVkZWRTdHlsZXMucHVzaChzdHlsZUlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbXBvcnRGZWF0dXJlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5lZGl0UG9pbnRMYXllci5nZXRTb3VyY2UoKS5hZGRGZWF0dXJlcyhmb3JtYXQucmVhZEZlYXR1cmVzKGxvYWREYXRhLnBvaW50cykpO1xuICAgICAgICBzZWxmLmVkaXRMaW5lTGF5ZXIuZ2V0U291cmNlKCkuYWRkRmVhdHVyZXMoZm9ybWF0LnJlYWRGZWF0dXJlcyhsb2FkRGF0YS5saW5lcykpO1xuICAgICAgICBzZWxmLmVkaXRQb2x5Z29uTGF5ZXIuZ2V0U291cmNlKCkuYWRkRmVhdHVyZXMoZm9ybWF0LnJlYWRGZWF0dXJlcyhsb2FkRGF0YS5wb2x5Z29ucykpO1xuICAgICAgICBzZWxmLmVkaXRDaXJjbGVMYXllci5nZXRTb3VyY2UoKS5hZGRGZWF0dXJlcyhmb3JtYXQucmVhZEZlYXR1cmVzKGxvYWREYXRhLmNpcmNsZXMpKTtcbiAgICAgICAgc2VsZi5lZGl0RnJlZWhhbmRMYXllci5nZXRTb3VyY2UoKS5hZGRGZWF0dXJlcyhmb3JtYXQucmVhZEZlYXR1cmVzKGxvYWREYXRhLmZyZWVoYW5kKSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAobmVlZGVkU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKCFzZWxmLnByb3h5KSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgbG9hZCBsb2NTdHlsZXMsIGFzIHRoZSBtYXAtcHJveHkgd2FzIG5vdCBpbml0aWFsbGl6ZWQuJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFxuICAgICAgICAgICAgbmVlZGVkU3R5bGVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0RmVhdHVyZXMoKTtcbiAgICAgICAgICAgICAgICAvLyBDYWxsIGhvb2sgZnVuY3Rpb25zIG9uIGxvYWRcbiAgICAgICAgICAgICAgICBpZiAoYzRnLm1hcHMuaG9vayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjNGcubWFwcy5ob29rLmVkaXRvcl9vbkxvYWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBjNGcubWFwcy51dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhjNGcubWFwcy5ob29rLmVkaXRvcl9vbkxvYWQsIGxvYWREYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFsd2F5czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIEhpZGUgbG9hZGluZy1hbmltYXRpb25cbiAgICAgICAgICAgICAgICBzZWxmLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbXBvcnRGZWF0dXJlcygpO1xuICAgICAgICBzZWxmLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAvLyBDYWxsIGhvb2sgZnVuY3Rpb25zIG9uIGxvYWRcbiAgICAgICAgaWYgKGM0Zy5tYXBzLmhvb2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYzRnLm1hcHMuaG9vay5lZGl0b3Jfb25Mb2FkID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGM0Zy5tYXBzLnV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2suZWRpdG9yX29uTG9hZCwgbG9hZERhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgLy8gRW5kIG9mIFwibG9hZFwiXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW2V4cG9ydCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZXhwb3J0R2VvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGZvcm1hdCxcbiAgICAgICAgICBmZWF0dXJlcztcblxuICAgICAgZm9ybWF0ID0gbmV3IG9sLmZvcm1hdC5HZW9KU09OKCk7XG5cbiAgICAgIGZlYXR1cmVzID0gdGhpcy5lZGl0UG9pbnRMYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQodGhpcy5lZGl0TGluZUxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCkpO1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQodGhpcy5lZGl0UG9seWdvbkxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCkpO1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQodGhpcy5lZGl0Q2lyY2xlTGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKSk7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzLmNvbmNhdCh0aGlzLmVkaXRGcmVlaGFuZExheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCkpO1xuXG4gICAgICBmZWF0dXJlcyA9IGZvcm1hdC53cml0ZUZlYXR1cmVzKGZlYXR1cmVzKTtcbiAgICAgIC8vIGZlYXR1cmVzID0gSlNPTi5zdHJpbmdpZnkoZmVhdHVyZXMpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgPT09ICdiYWNrZW5kJyAmJiB0aGlzLm9wdGlvbnMuZGF0YUZpZWxkKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kYXRhRmllbGQudmFsKGZlYXR1cmVzKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmVhdHVyZXM7XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIFwiZXhwb3J0XCJcblxuICAgIC8qKlxuICAgICAqIEBUT0RPOiBbaW1wb3J0IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBpbXBvcnRHZW9KU09OOiBmdW5jdGlvbiAob3B0X2dlb2pzb24pIHtcbiAgICAgIHZhciBzZWxmLFxuICAgICAgICAgIHN0eWxlSWQsXG4gICAgICAgICAgZm9ybWF0LFxuICAgICAgICAgIGZlYXR1cmVzLFxuICAgICAgICAgIHBvaW50cyxcbiAgICAgICAgICBmcmVlaGFuZCxcbiAgICAgICAgICBsaW5lcyxcbiAgICAgICAgICBwb2x5Z29ucyxcbiAgICAgICAgICBjaXJjbGVzLFxuICAgICAgICAgIG5lZWRlZFN0eWxlcyxcbiAgICAgICAgICBpbXBvcnRGZWF0dXJlcyxcbiAgICAgICAgICBpO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50eXBlID09PSAnYmFja2VuZCcgJiYgdGhpcy5vcHRpb25zLmRhdGFGaWVsZCkge1xuICAgICAgICBmZWF0dXJlcyA9IHRoaXMub3B0aW9ucy5kYXRhRmllbGQudmFsKCk7XG4gICAgICB9IGVsc2UgaWYgKG9wdF9nZW9qc29uKSB7XG4gICAgICAgIGZlYXR1cmVzID0gb3B0X2dlb2pzb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghZmVhdHVyZXMpIHtcbiAgICAgICAgLy8gbm8gZmVhdHVyZXMgdG8gbG9hZFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIHRyeSB7XG4gICAgICAvLyAgIGZlYXR1cmVzID0gSlNPTi5wYXJzZShmZWF0dXJlcyk7XG4gICAgICAvLyB9IGNhdGNoIChpZ25vcmUpIHt9XG5cbiAgICAgIGZvcm1hdCA9IG5ldyBvbC5mb3JtYXQuR2VvSlNPTigpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmVhdHVyZXMgPSBmb3JtYXQucmVhZEZlYXR1cmVzKGZlYXR1cmVzKTtcbiAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBsb2FkIGZlYXR1cmVzOiBJbnZhbGlkIEpTT04gc3RyaW5nLi4uJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbmVlZGVkU3R5bGVzID0gW107XG4gICAgICBwb2ludHMgPSBbXTtcbiAgICAgIGZyZWVoYW5kID0gW107XG4gICAgICBsaW5lcyA9IFtdO1xuICAgICAgcG9seWdvbnMgPSBbXTtcbiAgICAgIGNpcmNsZXMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdHlsZUlkID0gZmVhdHVyZXNbaV0uZ2V0KCdzdHlsZUlkJykgfHwgZmVhdHVyZXNbaV0uZ2V0KCdsb2NzdHlsZScpIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChmZWF0dXJlc1tpXSAmJiB0eXBlb2YgZmVhdHVyZXNbaV0uZ2V0R2VvbWV0cnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAoZmVhdHVyZXNbaV0uZ2V0R2VvbWV0cnkoKSBpbnN0YW5jZW9mIG9sLmdlb20uUG9pbnQpIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKGZlYXR1cmVzW2ldKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmVzW2ldLmdldEdlb21ldHJ5KCkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcpIHtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlcy5vcHRpb25zICYmIGZlYXR1cmVzLm9wdGlvbnMudHlwZSAmJiBmZWF0dXJlcy5vcHRpb25zLnR5cGUudG9Mb3dlckNhc2UoKSA9PSAnZnJlZWhhbmQnKSB7XG4gICAgICAgICAgICAgICAgZnJlZWhhbmQucHVzaChmZWF0dXJlc1tpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goZmVhdHVyZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZXNbaV0uZ2V0R2VvbWV0cnkoKSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAgICAgcG9seWdvbnMucHVzaChmZWF0dXJlc1tpXSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlc1tpXS5nZXRHZW9tZXRyeSgpIGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUpIHtcbiAgICAgICAgICAgIGNpcmNsZXMucHVzaChmZWF0dXJlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IGxvYWQgZmVhdHVyZSB3aXRob3V0IGdlb21ldHJ5LicpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHlsZUlkICYmICghc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc3R5bGVJZF0gfHwgIXNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLnN0eWxlKSAmJiAkLmluQXJyYXkoc3R5bGVJZCwgbmVlZGVkU3R5bGVzKSA9PT0gLTEpIHtcbiAgICAgICAgICBuZWVkZWRTdHlsZXMucHVzaChzdHlsZUlkKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGltcG9ydEZlYXR1cmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLmVkaXRQb2ludExheWVyLmdldFNvdXJjZSgpLmFkZEZlYXR1cmVzKHBvaW50cyk7XG4gICAgICAgIHNlbGYuZWRpdExpbmVMYXllci5nZXRTb3VyY2UoKS5hZGRGZWF0dXJlcyhsaW5lcyk7XG4gICAgICAgIHNlbGYuZWRpdFBvbHlnb25MYXllci5nZXRTb3VyY2UoKS5hZGRGZWF0dXJlcyhwb2x5Z29ucyk7XG4gICAgICAgIHNlbGYuZWRpdENpcmNsZUxheWVyLmdldFNvdXJjZSgpLmFkZEZlYXR1cmVzKGNpcmNsZXMpO1xuICAgICAgICBzZWxmLmVkaXRGcmVlaGFuZExheWVyLmdldFNvdXJjZSgpLmFkZEZlYXR1cmVzKGZyZWVoYW5kKTtcbiAgICAgICAgYzRnLm1hcHMudXRpbHMuZml0VG9FeHRlbnQoXG4gICAgICAgICAgICBjNGcubWFwcy51dGlscy5nZXRFeHRlbnRGb3JHZW9tZXRyaWVzKHBvaW50cy5jb25jYXQobGluZXMsIHBvbHlnb25zLCBjaXJjbGVzLCBmcmVlaGFuZCkpLFxuICAgICAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLFxuICAgICAgICAgICAgWzI1LCAyNSwgMjUsIHNlbGYuY29udGFpbmVyLm9mZnNldFdpZHRoICsgMjVdLFxuICAgICAgICAgICAgMTAwMFxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgc2VsZi5zcGlubmVyLnNob3coKTtcbiAgICAgIGlmIChuZWVkZWRTdHlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoIXNlbGYucHJveHkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBsb2FkIGxvY1N0eWxlcywgYXMgdGhlIG1hcC1wcm94eSB3YXMgbm90IGluaXRpYWxsaXplZC4nKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoXG4gICAgICAgICAgICBuZWVkZWRTdHlsZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpbXBvcnRGZWF0dXJlcygpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhbHdheXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBIaWRlIGxvYWRpbmctYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgc2VsZi5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW1wb3J0RmVhdHVyZXMoKTtcbiAgICAgICAgc2VsZi5zcGlubmVyLmhpZGUoKTtcbiAgICAgIH1cblxuICAgIH0gLy8gZW5kIG9mIFwiaW1wb3J0XCJcblxuICB9KTtcblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLWVkaXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=