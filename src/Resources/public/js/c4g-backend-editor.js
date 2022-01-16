/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import {cssConstants} from "./c4g-editor-constant-css";
import {utils} from "./c4g-maps-utils";
import {Sideboard} from "./c4g-maps-control-sideboard";
import {TooltipPopUp} from "./c4g-maps-misc-tooltippopup";
import {getLanguage} from "./c4g-maps-i18n";
import {getEditorLanguage, langConstants} from "./c4g-editor-i18n";
import {Vector, Group} from "ol/layer";
import {Vector as VectorSource} from "ol/source";
import {Collection} from "ol";
import {platformModifierKeyOnly, shiftKeyOnly} from "ol/events/condition";
import {Select, Modify, Translate, Draw} from "ol/interaction";
import {Style, Circle, Stroke, Fill, Icon} from "ol/style";
import {DragBox} from "ol/interaction";
import {Point, LineString, Polygon, Circle as CircleGeom} from "ol/geom";
import {GeoJSON} from "ol/format";
import ReactDOM from "react-dom";
import React from "react";
import {EditorComponent} from "./components/c4g-editor-component.jsx";

'use strict';
export class BackendEditor extends Sideboard {


  /**
   * Constructor
   *
   * @constructor
   * @extend {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   */
  constructor(options) {
    super(options);
    // extend options
    this.options = jQuery.extend({
      name: 'editor',
      type: 'frontend',
      dataField: false,
      create: true,
      mapController: undefined,
      drawModes: [
        'Point',
        'Line',
        'Polygon',
        'Circle',
        'Freehand'
      ],
      direction: 'left',
      headline: getLanguage(options.mapController.data).EDITOR
      // initMode: 'select'
    }, options);
    this.langConstants = jQuery.extend(getLanguage(options.mapController.data), getEditorLanguage(options.mapController.data));

    if (!this.options.mapController) {
      console.warn('Coul not initiallize Editor, without valid mapController.');
      return false;
    }

    //window.c4gMapsHooks.editor_loadTabs = [];
    //window.c4gMapsHooks.editor_featureChanged = [];
    this.tabs = [];
    // @TODO
    // this.typeLayer = undefined;
    // this.activeMode = this.options.initMode;
    // this.vectorSource = new VectorSource();
    // this.activeDrawInteraction = undefined;
    this.lastDrawInteraction = undefined;
    this.proxy = this.options.mapController.proxy;

    if (this.options.dataField && typeof this.options.dataField === 'string') {
      this.options.dataField = jQuery(this.options.dataField) || false;
    }

    // call parent constructor
    // Sideboard.call(this, this.options);
  };

  /**
   * Executed when the editor will be opened for the first time.
   * [init description]
   *
   * @return  {boolean}  Returns |true| on success
   */
  init(opt_externalinit) {
    var self,
      layerStyleFunction,
      viewSelect;

    self = this;
    this.spinner.show();

    layerStyleFunction = function (feature, projection) {
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
    this.editPointLayer = new Vector({source: new VectorSource(), style: layerStyleFunction});
    this.editLineLayer = new Vector({source: new VectorSource(), style: layerStyleFunction});
    this.editPolygonLayer = new Vector({source: new VectorSource(), style: layerStyleFunction});
    this.editCircleLayer = new Vector({source: new VectorSource(), style: layerStyleFunction});
    this.editFreehandLayer = new Vector({source: new VectorSource(), style: layerStyleFunction});

    this.editLayerGroup = new Group({
      layers: new Collection([
        this.editFreehandLayer,
        this.editCircleLayer,
        this.editPolygonLayer,
        this.editLineLayer,
        this.editPointLayer
      ]),
      visible: true
    });
    this.options.mapController.map.addLayer(this.editLayerGroup);

    // Add and activate select view
    this.tabs.push(this.addSelectView());
    this.tabs[0].activate();

    //   AJAX: get editor config
    jQuery.getJSON('/con4gis/editorServiceBackend/' + self.options.mapController.data.beEditorProfile)
    // Create views for draw-features with at least one locationstyle
      .done(function (data) {
        data = self.prepareEditorStyleData(data);
        // Draw-point view
        if (data.styles_point.length && data.styles_point.length > 0) {
          self.tabs.push(self.addDrawView({type: 'Point', styleIds: data.styles_point}));
        }
        // Draw-line view
        if (data.styles_line.length && data.styles_line.length > 0) {
          self.tabs.push(self.addDrawView({type: 'LineString', styleIds: data.styles_line}));
        }
        // Draw-polygon view
        if (data.styles_polygon.length && data.styles_polygon.length > 0) {
          self.tabs.push(self.addDrawView({type: 'Polygon', styleIds: data.styles_polygon}));
        }
        // Draw-circle view
        if (data.styles_circle.length && data.styles_circle.length > 0) {
          self.tabs.push(self.addDrawView({type: 'Circle', styleIds: data.styles_circle}));
        }
        // Draw-freehand view
        if (data.styles_freehand.length && data.styles_freehand.length > 0) {
          self.tabs.push(self.addDrawView({type: 'Freehand', styleIds: data.styles_freehand}));
        }
        // Call hook function for dynamically added tabs
        if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.editor_loadTabs === 'object') {
          utils.callHookFunctions(window.c4gMapsHooks.editor_loadTabs, self);
        }

        return true;
      })
      .fail(function () {
        // @TODO error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the editor configuration...');
        return false;
      })
      .always(function () {
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
          })
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
  }

  prepareEditorStyleData(data) {
    let returnData = {};
    returnData.styles_point = [];
    returnData.styles_linestring = [];
    returnData.styles_polygon = [];
    returnData.styles_circle = [];
    returnData.styles_freehand = [];
    for (let key in data.drawStyles) {
      if (data.drawStyles.hasOwnProperty(key)) {
        let currentDrawstyle = data.drawStyles[key];
        for (let i = 0; i < currentDrawstyle.categories.length; i++) {
          let currentCategory = currentDrawstyle.categories[i];
          for (let j = 0; j < currentCategory.elements.length; j++) {
            returnData["styles_" + key.toLowerCase()].push(currentCategory.elements[j].styleId);
          }
        }
      }
    }
    if (returnData.styles_linestring) {
      returnData.styles_line = returnData.styles_linestring;
    }
    return returnData;
  }

  /**
   * Executed before editor will be closed
   *
   * @return  {[type]}  [description]
   */
  preCloseFunction() {
    if (this.editLayerGroup.getVisible()) {
      this.editLayerGroup.setVisible(false);
      this.options.mapController.map.removeLayer(this.editLayerGroup);
    }
    this.options.mapController.proxy.currentPopup.popup.getElement().style.display = "";
    this.options.mapController.proxy.activateClickObserver();
  }

  /**
   * Executed before editor will be open
   *
   * @return  {[type]}  [description]
   */
  preOpenFunction() {
    if (!this.editLayerGroup.getVisible()) {
      this.editLayerGroup.setVisible(true);
      this.options.mapController.map.addLayer(this.editLayerGroup);
    }
    this.options.mapController.proxy.deactivateClickObserver();
    this.options.mapController.mapHover.hoverTooltip.close();
    if (this.options.mapController.proxy.currentPopup) {
      this.options.mapController.proxy.currentPopup.popup.getElement().style.display = "none";
    }
  }

  addSelectView() {
    var self,
      selectInteraction,
      selectBoxInteraction,
      selectedFeatures,
      selectContentWrapper,
      selectContentHeadline,
      selectContent,
      selectContentInfo,
      selectView,
      fnHandleSelection;

    self = this;

    selectContentWrapper = document.createElement('div');
    this.contentHeadline.style.display = "none";
    selectContent = document.createElement('div');
    selectContent.className = cssConstants.EDITOR_CONTENT_SELECT;
    selectContentInfo = document.createElement('p');
    selectContentInfo.innerHTML = this.langConstants.EDITOR_SELECT_INFO;
    selectContentInfo.innerHTML += '<br><br><sub>' + this.langConstants.EDITOR_SELECT_INFO_ADDITIONAL + '</sub>';
    selectContent.appendChild(selectContentInfo);
    selectContentWrapper.appendChild(selectContent);

    selectView = this.addView({
      name: 'select',
      triggerConfig: {
        tipLabel: this.langConstants.EDITOR_VIEW_TRIGGER_SELECT,
        className: cssConstants.EDITOR_VIEW_TRIGGER_SELECT,
        withHeadline: true
      },
      sectionElements: [
        {section: this.contentContainer, element: selectContentWrapper},
        {section: this.topToolbar, element: this.viewTriggerBar}
      ],
      initFunction: function () {
        selectInteraction = new Select({
          layers: self.editLayerGroup.getLayers().getArray(),
          toggleCondition: platformModifierKeyOnly,
          style: function (feature, projection) {
            var styleId,
              styleArray,
              styleRadius;

            if (feature && typeof feature.get === 'function') {
              // get the styleId of the current feature
              styleId = feature.get('styleId');
              // and execute the appropriate function
              if (self.proxy.locationStyleController.arrLocStyles[styleId]) {
                styleArray = self.proxy.locationStyleController.arrLocStyles[styleId].style(feature, projection);

                if (typeof styleArray[0].getImage === 'function' && styleArray[0].getImage()) {
                  styleRadius = 5;
                } else {
                  styleRadius = parseInt(styleArray[0].getImage().getRadius(), 10) + 4;
                }

                styleArray.push(
                  new Style({
                    image: new Circle({
                      stroke: new Stroke({
                        color: 'rgba(255,255,255,.7)',
                        width: 5
                      }),
                      radius: styleRadius
                    }),
                    stroke: new Stroke({
                      color: 'rgba(255,255,255,.7)',
                      width: 5
                    }),
                    fill: new Fill({
                      color: 'rgba(255,255,255,.5)'
                    })
                  })
                );

                return styleArray;
              }
            }
            return false;
          }
        }); // selectInteraction

        selectedFeatures = selectInteraction.getFeatures();

        selectBoxInteraction = new DragBox({condition: shiftKeyOnly});

        selectBoxInteraction.on('boxend', function (e) {
          var extent = selectBoxInteraction.getGeometry().getExtent();

          self.editLayerGroup.getLayers().forEach(function (layer) {
            layer.getSource().forEachFeatureIntersectingExtent(extent, function (feature) {
              selectedFeatures.push(feature);
            })
          });

          fnHandleSelection();
        });

        // clear selection when drawing a new box and when clicking on the map
        selectBoxInteraction.on('boxstart', function (e) {
          selectedFeatures.clear();
          fnHandleSelection();
        });

        fnHandleSelection = function () {
          var i,
            j,
            label,
            editorVars,
            headlineElement,
            inputNameElement,
            modifyButtonElement,
            deleteButtonElement,
            paragraphElement,
            strongElement,
            inputElement,
            featureCount,
            selectedFeature,
            blurOnEnter,
            inputChangeHandler,
            nameChangeHandler,
            modifyFeatureFunction,
            deleteFeatureFunction,
            renderSelectedFeaturesList;

          if (typeof self.applyFeatureModification === 'function') {
            self.applyFeatureModification();
          }

          blurOnEnter = function (event) {
            if (event.which === 13) {
              try {
                event.target.blur();
              } catch (ignore) {
              }
            }
          }; // end of "blurOnEnter()"

          nameChangeHandler = function (event) {
            var changedFeature;
            changedFeature = selectedFeatures.item(event.target.getAttribute('feat_id'));
            changedFeature.set(
              'tooltip',
              utils.encodeGeoJsonProperty(event.target.value || '')
            );
            self.save();
            // Call hook to notify the feature change
            if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.editor_featureChanged === 'object') {
              utils.callHookFunctions(window.c4gMapsHooks.editor_featureChanged, {
                feature: changedFeature,
                action: 'renamed'
              });
            }
          }; // end of "nameChangeHandler()"

          inputChangeHandler = function (event) {
            var currentVars,
              changedFeature;
            changedFeature = selectedFeatures.item(event.target.getAttribute('feat_id'));
            currentVars = changedFeature.get('editorVars');
            currentVars[event.target.getAttribute('var_id')].value = utils.encodeGeoJsonProperty(
              event.target.value || ''
            );
            changedFeature.set('editorVars', currentVars);
            self.save();
            // Call hook to notify the feature change
            if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.editor_featureChanged === 'object') {
              utils.callHookFunctions(window.c4gMapsHooks.editor_featureChanged, {
                feature: changedFeature,
                action: 'changed_var'
              });
            }
          }; // end of "inputChangeHandler()"

          modifyFeatureFunction = function (event) {
            var modifyFeature,
              featureGeometry,
              translateInteraction,
              modifyInteraction,
              modifyButton,
              applyButton;

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

            if (!(featureGeometry.getType() === 'LineString')) {
              translateInteraction = new Translate({
                features: new Collection([modifyFeature])
              });
              self.options.mapController.map.addInteraction(translateInteraction);
            }
            if (!(featureGeometry.getType() === 'Point')) {
              modifyInteraction = new Modify({
                features: new Collection([modifyFeature])
              });
              self.options.mapController.map.addInteraction(modifyInteraction);
            }

            selectInteraction.setActive(false);

            // add apply button
            applyButton = document.createElement('button');
            applyButton.className = cssConstants.ICON + ' ' + cssConstants.EDITOR_FEATURE_APPLY;
            applyButton.title = self.langConstants.EDITOR_FEATURE_APPLY;
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
              if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.editor_featureChanged === 'object') {
                utils.callHookFunctions(window.c4gMapsHooks.editor_featureChanged, {
                  feature: modifyFeature,
                  action: 'edited'
                });
              }
            };

            jQuery(applyButton).click(self.applyFeatureModification);
            modifyButton = modifyButton.parentNode.replaceChild(applyButton, modifyButton);
          }; // end of "modifyFeatureFunction()"

          deleteFeatureFunction = function (event) {
            var featureIndex,
              featureGeometry,
              featureSource,
              deleteFeature;

            if (typeof self.applyFeatureModification === 'function') {
              self.applyFeatureModification();
            }

            featureIndex = event.target.getAttribute('feat_id');
            deleteFeature = selectedFeatures.item(featureIndex);
            featureGeometry = deleteFeature.getGeometry();

            // find right source
            if (featureGeometry.getType() === 'Point') {
              featureSource = self.editPointLayer.getSource();
            } else if (featureGeometry.getType() === 'LineString') {
              featureSource = self.editLineLayer.getSource();
            } else if (featureGeometry.getType() === 'Polygon') {
              featureSource = self.editPolygonLayer.getSource();
            } else if (featureGeometry.getType() === 'Circle') {
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
              if (featureGeometry.getType() === 'LineString') {
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
            if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.editor_featureChanged === 'object') {
              utils.callHookFunctions(window.c4gMapsHooks.editor_featureChanged, {
                feature: deleteFeature,
                action: 'deleted'
              });
            }
          }; // end of "deleteFeatureFunction()"

          renderSelectedFeaturesList = function () {
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
                inputNameElement.setAttribute(
                  'value',
                  utils.decodeGeoJsonProperty(selectedFeature.get('tooltip') || '')
                );
                inputNameElement.setAttribute('feat_id', i);
                jQuery(inputNameElement).keydown(blurOnEnter);
                inputNameElement.onchange = nameChangeHandler;
                headlineElement.appendChild(inputNameElement);
                // add modify button
                modifyButtonElement = document.createElement('button');
                modifyButtonElement.className = cssConstants.ICON + ' ' + cssConstants.EDITOR_FEATURE_MODIFY;
                modifyButtonElement.title = self.langConstants.EDITOR_FEATURE_MODIFY;
                modifyButtonElement.setAttribute('feat_id', i);
                jQuery(modifyButtonElement).click(modifyFeatureFunction);
                headlineElement.appendChild(modifyButtonElement);
                // add delete button
                deleteButtonElement = document.createElement('button');
                deleteButtonElement.className = cssConstants.ICON + ' ' + cssConstants.EDITOR_FEATURE_DELETE;
                deleteButtonElement.title = self.langConstants.EDITOR_FEATURE_DELETE;
                deleteButtonElement.setAttribute('feat_id', i);
                jQuery(deleteButtonElement).click(deleteFeatureFunction);
                headlineElement.appendChild(deleteButtonElement);

                selectContent.appendChild(headlineElement);
                if (selectedFeature.get('measuredLength')) {
                  if (selectedFeature.getGeometry().getType() === 'LineString') {
                    label = self.langConstants.LENGTH;
                  } else if (selectedFeature.getGeometry().getType() === 'Polygon') {
                    label = self.langConstants.PERIMETER;
                  } else {
                    label = self.langConstants.RADIUS;
                  }
                  paragraphElement = document.createElement('p');
                  paragraphElement.innerHTML += '<strong>' + label + ':</strong> ' + selectedFeature.get('measuredLength').htmlValue;
                  selectContent.appendChild(paragraphElement);
                }
                if (selectedFeature.get('measuredArea')) {
                  paragraphElement = document.createElement('p');
                  paragraphElement.innerHTML += '<strong>' + self.langConstants.SURFACEAREA + ':</strong> ' + selectedFeature.get('measuredArea').htmlValue;
                  selectContent.appendChild(paragraphElement);
                }
                if (selectedFeature.get('measuredRadius')) {
                  paragraphElement = document.createElement('p');
                  paragraphElement.innerHTML += '<strong>' + self.langConstants.RADIUS + ':</strong> ' + selectedFeature.get('measuredRadius').htmlValue;
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
                  inputElement.setAttribute(
                    'value',
                    utils.decodeGeoJsonProperty(editorVars[j].value || '')
                  );
                  inputElement.setAttribute('feat_id', i);
                  inputElement.setAttribute('var_id', j);
                  jQuery(inputElement).keydown(blurOnEnter);
                  inputElement.onchange = inputChangeHandler;

                  paragraphElement.appendChild(strongElement);
                  paragraphElement.appendChild(document.createElement('br'));
                  paragraphElement.appendChild(inputElement);
                  selectContent.appendChild(paragraphElement);
                }
              }

            } else {
              selectContent.appendChild(selectContentInfo);
            }
            self.update();
          }; // end of "renderSelectedFeaturesList"

          renderSelectedFeaturesList();
        }; // end of "fnHandleSelection"

        selectInteraction.on('select', function (event) {
          fnHandleSelection(event.target.getFeatures());
        });

        // self.options.mapController.map.addInteraction(selectInteraction);
        // self.options.mapController.map.addInteraction(selectBoxInteraction);
        return true;
      },
      activateFunction: function () {

        // Disable mapHover
        self.options.mapController.mapHover.deactivate();

        // Reset display, if no features are selected
        if (selectInteraction.getFeatures().getLength() < 1) {
          selectContent.innerHTML = '';
          selectContent.appendChild(selectContentInfo);
          // self.statusBar.innerHTML = 0;
          // selectContentHeadline.style.display = '';
        }

        self.options.mapController.map.addInteraction(selectInteraction);
        // Enable interaction
        selectInteraction.setActive(true);
        self.options.mapController.map.addInteraction(selectBoxInteraction);
        selectBoxInteraction.setActive(true);

        return true;
      },
      deactivateFunction: function () {
        if (typeof self.applyFeatureModification === 'function') {
          self.applyFeatureModification();
        }
        // Disable interaction
        selectInteraction.setActive(false);
        self.options.mapController.map.removeInteraction(selectInteraction);
        selectBoxInteraction.setActive(false);
        self.options.mapController.map.removeInteraction(selectBoxInteraction);

        return true;
      }
    });

    return selectView;
  }

  addDrawView(options) {
    var self,
      TRIGGER_DRAW,
      drawContent,
      optionsDiv,
      enableInstantMeasureCheckbox,
      enableInstantMeasureCheckboxLabel,
      // enableFreehandDrawCheckbox,
      // enableFreehandDrawCheckboxLabel,
      checkboxChangeHandler,
      drawView,
      addDrawStyle,
      olType;

    self = this;

    options = jQuery.extend({
      type: 'Point',
      styleIds: []
    }, options);

    TRIGGER_DRAW = 'EDITOR_VIEW_TRIGGER_DRAW_' + options.type.toUpperCase();

    drawContent = document.createElement('div');
    drawContent.className = cssConstants['EDITOR_DRAW_CONTENT_' + options.type.toUpperCase()];
    drawContent.innerHTML = '<h4>' + self.langConstants[TRIGGER_DRAW] + '</h4>';

    if (options.type.toLowerCase() !== 'point') {
      optionsDiv = document.createElement('div');
      optionsDiv.className = cssConstants.EDITOR_DRAW_OPTIONS;
      drawContent.appendChild(optionsDiv);

      enableInstantMeasureCheckbox = document.createElement('input');
      enableInstantMeasureCheckbox.type = 'checkbox';
      enableInstantMeasureCheckbox.id = 'enableInstantMeasureFor' + options.type;
      optionsDiv.appendChild(enableInstantMeasureCheckbox);

      enableInstantMeasureCheckboxLabel = document.createElement('label');
      enableInstantMeasureCheckboxLabel.setAttribute('for', 'enableInstantMeasureFor' + options.type);
      enableInstantMeasureCheckboxLabel.innerHTML = self.langConstants.EDITOR_ENABLE_INSTANT_MEASURE;
      optionsDiv.appendChild(enableInstantMeasureCheckboxLabel);

      optionsDiv.appendChild(document.createElement('br'));
    }

    addDrawStyle = function (styleId) {
      var interactionView,
        source,
        interaction,
        features,
        editorStyle,
        style,
        styleData,
        styleIcon,
        svgSrc,
        styleImage,
        styleTriggerLabel,
        featureIdCount,
        name;

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
      if (styleData.styletype === "cust_icon" && (editorStyle.iconSrc || styleImage)) {
        styleIcon = document.createElement('img');

        if (editorStyle.iconSrc && (editorStyle.iconSrc.indexOf('.') !== -1)) {
          styleIcon.src = editorStyle.iconSrc;
          if (styleData.editor_icon_size) {
            styleIcon.height = styleData.editor_icon_size[0];
            styleIcon.width = styleData.editor_icon_size[1];
          } else {
            styleIcon.height = '32';
            styleIcon.width = '32';
          }
        } else {
          if (styleImage.getSrc && typeof styleImage.getSrc === "function") {
            styleIcon.src = styleImage.getSrc();
          }
          styleIcon.scale = styleImage.getScale();
        }
        styleTriggerLabel.appendChild(styleIcon);
      } else if (styleData.styletype === "cust_icon_svg" && svgSrc) {
        if (styleData.svgSrc && styleData.icon_scale && styleData.icon_size) {
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext("2d");
          let height = (styleData.icon_size[0] * styleData.icon_scale);
          let width = (styleData.icon_size[1] * styleData.icon_scale);

          let strokewidth = 0;
          if (styleData.strokewidth && styleData.strokewidth.value) {
            strokewidth = styleData.strokewidth.value;
          }

          canvas.height = height + (2 * strokewidth);
          canvas.width = width + (2 * strokewidth);
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          if (styleData.fillcolor) {
            ctx.fillStyle = utils.getRgbaFromHexAndOpacity(styleData.fillcolor, styleData.fillopacity.value);
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

          if (strokewidth && styleData.strokecolor) {
            ctx.strokeStyle = utils.getRgbaFromHexAndOpacity(styleData.strokecolor, styleData.strokeopacity.value);
            ctx.lineWidth = strokewidth;
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
            ctx.translate(0.5, 0.5);
          }

          // if (styleData.icon_opacity.value && (styleData.icon_opacity.value > 0)) {
          //     ctx.globalAlpha = (styleData.icon_opacity.value / 100);
          // }

          let img = new Image();
          img.src = styleData.svgSrc;
          img.zIndex = 100;

          img.onload = function () {
            ctx.drawImage(img, strokewidth, strokewidth, width, height);
          };

          styleIcon = canvas;
          styleTriggerLabel.appendChild(styleIcon);
          styleTriggerLabel.style.width = (width * styleData.icon_scale) + 'px';
          styleTriggerLabel.style.height = (height * styleData.icon_scale) + 'px';
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
          className: cssConstants.EDITOR_DRAW_TRIGGER,
          target: drawContent,
        },
        sectionElements: [
          {section: self.contentContainer, element: drawContent},
          {section: self.topToolbar, element: self.viewTriggerBar}
        ],
        initFunction: function () {
          var interactionStyleImage,
            activeSketch,
            activeTooltip;

          // Only show original icon, when the drawing POIs
          // this is the style that is shown under the cursor while drawing
          if (options.type.toLowerCase() === 'point' && style.getImage()) {
            interactionStyleImage = style.getImage();
          } else {
            interactionStyleImage = new Circle({
              fill: style.getFill(),
              stroke: style.getStroke(),
              radius: 5,
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
          if (olType === 'Freehand') {
            olType = 'LineString'
          }

          features = new Collection();
          interaction = new Draw({
            features: features,
            source: source,
            type: olType,
            freehand: options.type === 'Freehand',
            style: [
              new Style({
                stroke: new Stroke({
                  color: 'rgba(255,255,255,.5)',
                  width: style.getStroke().getWidth() + 2
                }),
                image: interactionStyleImage
              }),
              new Style({
                geometry: style.getGeometry(),
                fill: style.getFill(),
                stroke: style.getStroke()
              })
            ]
          });

          // @TODO doku
          //
          interaction.on('drawstart',
            function (event) {
              activeSketch = event.feature;
              activeSketch.set('styleId', styleId);

              if (enableInstantMeasureCheckbox && enableInstantMeasureCheckbox.checked) {
                activeTooltip = new TooltipPopUp({
                  map: self.options.mapController.map,
                  position: event.coordinate,
                  horizontal: true
                });
              }
            }, self);

          // @TODO doku
          //
          self.options.mapController.map.on('pointermove',
            function (event) {
              if (enableInstantMeasureCheckbox && enableInstantMeasureCheckbox.checked && activeSketch) {
                if (activeTooltip && utils.measureGeometry(activeSketch.getGeometry(), true).rawValue && utils.measureGeometry(activeSketch.getGeometry(), true).rawValue === "0.00") {
                  activeTooltip.close();
                  activeTooltip = null;
                }
                else if (!activeTooltip && utils.measureGeometry(activeSketch.getGeometry(), true).rawValue && utils.measureGeometry(activeSketch.getGeometry(), true).rawValue !== "0.00") {
                  activeTooltip = new TooltipPopUp({
                    map: self.options.mapController.map,
                    position: event.coordinate,
                    horizontal: true
                  });
                }
                if (activeTooltip) {
                  activeTooltip.setPosition(event.coordinate);
                  activeTooltip.setContent(utils.measureGeometry(activeSketch.getGeometry(), true).htmlValue);
                }
              }
            }, self);

          // @TODO doku
          //
          interaction.on('drawend',
            function (event) {
              var i,
                vars,
                editorVars,
                name;

              // name the feature
              featureIdCount += 1;
              name = self.proxy.locationStyleController.arrLocStyles[styleId].name.replace("&#40;", "(").replace("&#41;", ")");
              activeSketch.set('tooltip', (self.proxy.locationStyleController.arrLocStyles[styleId].tooltip || name) + ' (' + featureIdCount + ')');
              // add styleId
              activeSketch.set('styleId', styleId);
              // add measurements to the feature
              activeSketch.set('measuredLength', utils.measureGeometry(activeSketch.getGeometry(), true));
              if (options.type.toLowerCase() === 'polygon') {
                activeSketch.set('measuredArea', utils.measureGeometry(activeSketch.getGeometry()));
              }
              if (options.type.toLowerCase() === 'circle') {
                activeSketch.set('measuredRadius', utils.measureGeometry(activeSketch.getGeometry()));
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

        activateFunction: function () {

          // deactivate mapHover
          self.options.mapController.mapHover.deactivate();

          // Reset feature-list
          features.clear();

          // Enable interaction
          // self.options.mapController.map.addInteraction(interaction);
          interaction.setActive(true);
          return true;
        },

        deactivateFunction: function (paused) {

          // reactivate mapHover
          // self.options.mapController.mapHover.activate();

          // finish drawings, if not already done
          if (options.type.toLowerCase() !== 'point') {
            try {
              interaction.finishDrawing();
            } catch (ignore) {
              // 0_o
            }
          }
          if (!paused) {
            // Remove from map
            // self.options.mapController.map.removeInteraction(interaction);
            interaction.setActive(false);
          }

          return true;
        }
      }, drawView);

      return interactionView;
    };

    drawView = self.addView({
      name: 'draw:' + options.type.toLowerCase(),
      triggerConfig: {
        tipLabel: self.langConstants[TRIGGER_DRAW],
        className: cssConstants["DRAW_CONTENT_" + options.type.toUpperCase()],
      },
      sectionElements: [
        {section: self.contentContainer, element: drawContent},
        {section: self.topToolbar, element: self.viewTriggerBar}
      ],
      initFunction: function () {
        var i,
          styleId,
          neededStyles,
          sortAndAddStyles;

        // Show loading animation
        self.spinner.show();

        neededStyles = [];

        /**
         * @TODO
         * [sortAndAddStyles description]
         *
         * @return  {[type]}  [description]
         */
        sortAndAddStyles = function (arrStyleIds) {
          var j,
            locationStyles,
            drawInteraction,
            styleIds;

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
              if ((!locationStyles[a].editor.sort && !locationStyles[b].editor.sort) || (locationStyles[a].editor.sort === locationStyles[b].editor.sort)) {
                if (!locationStyles[a].name || !locationStyles[b].name) {
                  return (!locationStyles[b].name) ? -1 : 1;
                }
                return (locationStyles[a].name.toLowerCase() > locationStyles[b].name.toLowerCase()) ? 1 : -1;
              }
              if (!locationStyles[a].editor.sort || !locationStyles[b].editor.sort) {
                return (!locationStyles[b].editor.sort) ? -1 : 1;
              }

              return (locationStyles[a].editor.sort > locationStyles[b].editor.sort) ? 1 : -1;
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
          self.proxy.locationStyleController.loadLocationStyles(
            neededStyles,
            {
              done: function () {
                sortAndAddStyles();
              },
              always: function () {
                // Hide loading-animation
                self.spinner.hide();
                self.update();
              }
            }
          );
        } else {
          sortAndAddStyles();
          self.update();
          self.spinner.hide();
        }

        return true;
      },
      activateFunction: function () {
        return true;
      },
      deactivateFunction: function () {
        return true;
      }
    });

    return drawView;
  }

  /**
   * If opt_slot is empty, the function will just save the data in the sessionStorage.
   * [save description]
   *
   * @param   {[type]}  opt_slot  [description]
   *
   * @return  {[type]}            [description]
   */
  save(opt_slot) {
    var format,
      saveData,
      slotName,
      storage;

    if (this.options.type === 'backend') {
      return this.exportGeoJSON();
    }

    format = new GeoJSON();
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
    if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.editor_onSave === 'object') {
      utils.callHookFunctions(window.c4gMapsHooks.editor_onSave, saveData);
    }
    storage.setItem(slotName, JSON.stringify(saveData));

  }

  /**
   * If opt_slot is empty, the function will just load the data from the sessionStorage.
   * [load description]
   *
   * @param   {[type]}  opt_slot  [description]
   *
   * @return  {boolean}            [description]
   */
  load(opt_slot) {
    var i,
      self,
      format,
      loadData,
      featureCollection,
      slotName,
      storage,
      neededStyles,
      styleId,
      importFeatures;

    self = this;
    format = new GeoJSON();
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

      if ((!self.proxy.locationStyleController.arrLocStyles[styleId] || !self.proxy.locationStyleController.arrLocStyles[styleId].style) && jQuery.inArray(styleId, neededStyles) === -1) {
        neededStyles.push(styleId);
      }
    }

    importFeatures = function () {
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
      self.proxy.locationStyleController.loadLocationStyles(
        neededStyles,
        {
          done: function () {
            importFeatures();
            // Call hook functions on load
            if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.editor_onLoad === 'object') {
              utils.callHookFunctions(window.c4gMapsHooks.editor_onLoad, loadData);
            }
          },
          always: function () {
            // Hide loading-animation
            self.spinner.hide();
          }
        }
      );
    } else {
      importFeatures();
      self.spinner.hide();
      // Call hook functions on load
      if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.editor_onLoad === 'object') {
        utils.callHookFunctions(window.c4gMapsHooks.editor_onLoad, loadData);
      }
    }
  } // End of "load"

  /**
   * @TODO: [export description]
   *
   * @return  {[type]}  [description]
   */
  exportGeoJSON() {
    var format,
      features;

    format = new GeoJSON();

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
  } // end of "export"

  /**
   * @TODO: [import description]
   *
   * @return  {[type]}  [description]
   */
  importGeoJSON(opt_geojson) {
    var self,
      styleId,
      format,
      features,
      points,
      freehand,
      lines,
      polygons,
      circles,
      neededStyles,
      importFeatures,
      i;

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

    format = new GeoJSON();
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
        if (features[i].getGeometry().getType() === 'Point') {
          points.push(features[i]);
        } else if (features[i].getGeometry().getType() === 'LineString') {
          if (features.options && features.options.type && features.options.type.toLowerCase() == 'freehand') {
            freehand.push(features[i]);
          } else {
            lines.push(features[i]);
          }
        } else if (features[i].getGeometry().getType() === 'Polygon') {
          polygons.push(features[i]);
        } else if (features[i].getGeometry().getType() === 'Circle') {
          circles.push(features[i]);
        }
      } else {
        console.warn('Cannot load feature without geometry.');
        return false;
      }

      if (styleId && (!self.proxy.locationStyleController.arrLocStyles[styleId] || !self.proxy.locationStyleController.arrLocStyles[styleId].style) && jQuery.inArray(styleId, neededStyles) === -1) {
        neededStyles.push(styleId);
      }

    }

    importFeatures = function () {
      self.editPointLayer.getSource().addFeatures(points);
      self.editLineLayer.getSource().addFeatures(lines);
      self.editPolygonLayer.getSource().addFeatures(polygons);
      self.editCircleLayer.getSource().addFeatures(circles);
      self.editFreehandLayer.getSource().addFeatures(freehand);
      utils.fitToExtent(
        utils.getExtentForGeometries(points.concat(lines, polygons, circles, freehand)),
        self.options.mapController.map,
        [25, 25, 25, self.container.offsetWidth + 25],
        1000
      );
    };

    self.spinner.show();
    if (neededStyles.length > 0) {
      if (!self.proxy) {
        console.warn('Could not load locStyles, as the map-proxy was not initiallized.');
        return false;
      }
      self.proxy.locationStyleController.loadLocationStyles(
        neededStyles,
        {
          done: function () {
            importFeatures();
          },
          always: function () {
            // Hide loading-animation
            self.spinner.hide();
          }
        }
      );
    } else {
      importFeatures();
      self.spinner.hide();
    }

  } // end of "import"

}
// // add backend editor to maps
// window.c4gMapsHooks = window.c4gMapsHooks || {};
// window.c4gMapsHooks.mapController_addControls = window.c4gMapsHooks.mapController_addControls || [];
// window.c4gMapsHooks.mapController_addControls.push(function(params) {
//   if (params.component === "editor" && params.mapController.data.editor.enable) {
//     let mapController = params.mapController;
//     if (mapController.controls && mapController.controls.editor) {
//       return;
//     }
//     const mapData = mapController.data;
//     let editor = new BackendEditor({
//       tipLabel: getEditorLanguage(mapData).CTRL_EDITOR,
//       type: mapData.editor.type || 'backend',
//       target: mapData.editor.target || params.Container,
//       initOpen: mapData.editor.open || false,
//       dataField: mapData.editor.data_field || false,
//       mapController: mapController,
//       direction: 'right',
//       name: 'editor',
//       headline: getEditorLanguage(mapData).EDITOR
//     });
//     mapController.map.addControl(editor);
//     mapController.controls = mapController.controls || {};
//     mapController.controls.editor = editor;
//     // window.setTimeout(function() {
//     //   editor.init(true)
//     // }, 1000);
//     // editor.init(true);
//   }
// });
// replace normal editor with this
window.c4gMapsHooks = window.c4gMapsHooks || {};
window.c4gMapsHooks.mapController_addControls = window.c4gMapsHooks.mapController_addControls || [];
window.c4gMapsHooks.mapController_addControls.push(function(params) {
  let mapController = params.mapController;
  const mapData = mapController.data;
  // mapData.editor.config = {
  //   "Point" :
  // }
  if (mapData.beEditorProfile) {
    if (!mapController.editorContainer) {
      if (mapController.data.editor_div) {
        mapController.editorContainer = document.querySelector("." + mapController.data.editor_div);
        if (!mapController.editorContainer) {
          mapController.editorContainer = document.createElement('div');
          mapController.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-close";
          jQuery(".ol-overlaycontainer-stopevent").append(mapController.editorContainer);
        } else {
          mapController.editorContainer.className += " c4g-external";
        }
      } else {
        mapController.editorContainer = document.createElement('div');
        mapController.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-close";
        jQuery(".ol-overlaycontainer-stopevent").append(mapController.editorContainer);
      }
    }
    let editorProps = {
      tipLabel: langConstants.CTRL_EDITOR,
      type: mapData.editor.type || 'frontend',
      inputField: mapData.editor.inputField || "#c4gGeoEditorGeoData",
      target: mapData.editor.target || params.Container,
      initOpen: mapData.editor.open || false,
      config: mapData.editor.config || false,
      dataField: mapData.editor.data_field || false,
      caching: mapData.caching,
      mapController: mapController
    };
    let arrComponents = params.arrComps;
    arrComponents.push(ReactDOM.createPortal(React.createElement(EditorComponent, editorProps), mapController.editorContainer));
    params.arrComps = arrComponents;
  }
});