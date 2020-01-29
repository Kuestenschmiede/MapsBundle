/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

import {cssConstants} from "./c4g-maps-constant";
import {utils} from "./c4g-maps-utils";
import {Sideboard} from "./c4g-maps-control-sideboard";
import {TooltipPopUp} from "./c4g-maps-misc-tooltippopup";
import {getLanguage} from "./c4g-maps-i18n";
import {Vector, Group} from "ol/layer";
import {Vector as VectorSource} from "ol/source";
import {Collection} from "ol";
import {Draw} from "ol/interaction";
import {Feature} from "ol";
import {Circle, Polygon, LineString} from "ol/geom";

'use strict';
export class Measuretools extends Sideboard {


  /**
   * Constructor
   *
   * @constructor
   * @extend {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   */
  constructor(opt_options) {
    super(opt_options);
    // extend options
    this.langConstants = getLanguage(opt_options.mapController.data);
    this.options = jQuery.extend({
      name: 'measure',
      headline: this.langConstants.MEASURETOOLS,
      create: true,
      mapController: undefined,
      direction: 'left',
      firstElement: true
    }, opt_options);

    this.mainSection = document.createElement('div');
    // call parent constructor
    Sideboard.call(this, this.options);
  }

  /**
   * Executed when the panel will be opened for the first time.
   * [init description]
   *
   * @return  {boolean}  Returns |true| on success
   */
  init() {

    this.spinner.show();

    // Add measure layers
    this.measureLineLayer = new Vector({source: new VectorSource()});
    this.measurePolygonLayer = new Vector({source: new VectorSource()});
    this.measureCircleLayer = new Vector({source: new VectorSource()});
    this.measureFreehandLayer = new Vector({source: new VectorSource()});

    this.measureLayerGroup = new Group({
      layers: new Collection([
        this.measureFreehandLayer,
        this.measureCircleLayer,
        this.measurePolygonLayer,
        this.measureLineLayer,
      ]),
      visible: true
    });
    this.options.mapController.map.addLayer(this.measureLayerGroup);

    // Add and activate measure-Views
    this.viewMeasureSelect = this.addSelectView();
    this.viewMeasureSelect.activate();
    this.viewMeasureLine = this.addMeasureView({type: 'LineString'});
    this.viewMeasureArea = this.addMeasureView({type: 'Polygon'});
    this.viewMeasureRadius = this.addMeasureView({type: 'Circle'});
    this.viewMeasureFreehand = this.addMeasureView({type: 'Freehand'});

    // set content-section
    this.mainSectionInfo = document.createElement('p');
    this.mainSectionInfo.innerHTML = this.langConstants.MEASURETOOLS_INFO;
    this.mainSectionInfo.innerHTML += '<br><br><sub>' + this.langConstants.MEASURETOOLS_INFO_ADDITIONAL + '<sub>';
    this.mainSection.appendChild(this.mainSectionInfo);
    this.contentContainer.appendChild(this.mainSection);

    this.spinner.hide();
    return true;
  } // end of "init()"

  /**
   * Executed before panel will be closed
   *
   * @return  {[type]}  [description]
   */
  preCloseFunction() {
    var lineFeatures,
      polygonFeatures,
      circleFeatures,
      freehandFeatures,
      i;

    if (this.measureLayerGroup.getVisible()) {
      this.measureLayerGroup.setVisible(false);

      // hide line-feature tooltips
      lineFeatures = this.measureLineLayer.getSource().getFeatures();
      for (i = 0; i < lineFeatures.length; i += 1) {
        lineFeatures[i].get('tooltip').hide();
      }
      // hide polygon-feature tooltips
      polygonFeatures = this.measurePolygonLayer.getSource().getFeatures();
      for (i = 0; i < polygonFeatures.length; i += 1) {
        polygonFeatures[i].get('tooltip').hide();
      }
      // hide circle-feature tooltips
      circleFeatures = this.measureCircleLayer.getSource().getFeatures();
      for (i = 0; i < circleFeatures.length; i += 1) {
        circleFeatures[i].get('tooltip').hide();
      }
      // hide freehand-feature tooltips
      freehandFeatures = this.measureFreehandLayer.getSource().getFeatures();
      for (i = 0; i < freehandFeatures.length; i += 1) {
        freehandFeatures[i].get('tooltip').hide();
      }
    }
  } // end of "preCloseFunction()"

  /**
   * Executed before panel will be opened
   *
   * @return  {[type]}  [description]
   */
  preOpenFunction() {
    var lineFeatures,
      polygonFeatures,
      circleFeatures,
      freehandFeatures,
      i;

    if (!this.measureLayerGroup.getVisible()) {
      this.measureLayerGroup.setVisible(true);

      // show line-feature tooltips
      lineFeatures = this.measureLineLayer.getSource().getFeatures();
      for (i = 0; i < lineFeatures.length; i += 1) {
        lineFeatures[i].get('tooltip').show();
      }
      // show polygon-feature tooltips
      polygonFeatures = this.measurePolygonLayer.getSource().getFeatures();
      for (i = 0; i < polygonFeatures.length; i += 1) {
        polygonFeatures[i].get('tooltip').show();
      }
      // show circle-feature tooltips
      circleFeatures = this.measureCircleLayer.getSource().getFeatures();
      for (i = 0; i < circleFeatures.length; i += 1) {
        circleFeatures[i].get('tooltip').show();
      }
      // show freehand-feature tooltips
      freehandFeatures = this.measureFreehandLayer.getSource().getFeatures();
      for (i = 0; i < freehandFeatures.length; i += 1) {
        freehandFeatures[i].get('tooltip').show();
      }
    }
  } // end of "preOpenFunction()"

  /**
   * @TODO: [addSelectView description]
   */
  addSelectView() {
    var selectView;

    selectView = this.addView({
      name: 'select',
      triggerConfig: {
        tipLabel: this.langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,
        className: cssConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,
        withHeadline: true
      },
      sectionElements: [
        {section: this.contentContainer, element: this.mainSection},
        {section: this.topToolbar, element: this.viewTriggerBar}
      ]
    });

    return selectView;
  } // end of "addSelectView()"

  /**
   * @TODO: [addMeasureView description]
   *
   * @param  {[type]}  options  [description]
   */
  addMeasureView(options) {
    var self,
      TRIGGER_DRAW,
      measureView,
      source,
      interaction,
      features,
      olType;

    self = this;

    options = jQuery.extend({
      type: 'LineString'
    }, options);

    TRIGGER_DRAW = 'MEASURETOOLS_VIEW_TRIGGER_DRAW_' + options.type.toUpperCase();

    measureView = self.addView({
      name: 'draw:' + options.type.toLowerCase(),
      triggerConfig: {
        tipLabel: this.langConstants[TRIGGER_DRAW],
        className: cssConstants[TRIGGER_DRAW],
        withHeadline: true
      },
      sectionElements: [
        {section: self.topToolbar, element: self.viewTriggerBar}
      ],
      initFunction: function () {
        var featureIdCount,
          activeSketch,
          activeTooltip,
          addMeasureFeature,
          updateMeasureFeature,
          getValueOfGeometry,
          getLengthOfMeasure,
          removeMeasureFeature;

        // Show loading animation
        self.spinner.show();

        featureIdCount = 1;

        if (options.type.toLowerCase() === 'freehand') {
          source = self.measureFreehandLayer.getSource();
        } else if (options.type.toLowerCase() === 'circle') {
          source = self.measureCircleLayer.getSource();
        } else if (options.type.toLowerCase() === 'polygon') {
          source = self.measurePolygonLayer.getSource();
        } else {
          source = self.measureLineLayer.getSource();
        }

        features = new Collection();

        olType = options.type;
        if (olType === 'Freehand') {
          olType = 'LineString';
        }
        interaction = new Draw({
          features: features,
          source: source,
          type: olType,
          freehand: options.type === 'Freehand',
          // @TODO: use custom style? (BE-option)
          // style: use default style
        });

        addMeasureFeature = function (feature) {
          var listElement,
            headlineElement,
            labelElement,
            inputElement,
            paragraphElement,
            strongElement,
            spanElement,
            strLabel,
            strType,
            measureArea,
            measureRadius;

          if (!feature) {
            return false;
          }

          // check if the infomessage needs to be removed
          if (self.mainSection.childElementCount === 1 && self.mainSection.children[0] === self.mainSectionInfo) {
            self.mainSection.removeChild(self.mainSectionInfo);
          }

          // check feature-type
          if (feature.getGeometry().getType() === 'LineString') {
            strLabel = self.langConstants.LENGTH;
            strType = self.langConstants.LINE;
            measureArea = false;
            measureRadius = false;
          } else if (feature.getGeometry().getType() === 'Polygon') {
            strLabel = self.langConstants.PERIMETER;
            strType = self.langConstants.POLYGON;
            measureArea = true;
            measureRadius = false;
          } else if (feature.getGeometry().getType() === 'Circle') {
            strLabel = self.langConstants.RADIUS;
            strType = self.langConstants.CIRCLE;
            measureArea = true;
            measureRadius = true;
          } else {
            //freehand ist LineString too
            strLabel = self.langConstants.LENGTH;
            strType = self.langConstants.FREEHAND;
            measureArea = false;
            measureRadius = false;
          }

          // create list element
          listElement = document.createElement('div');

          // create and append headline
          headlineElement = document.createElement('div');
          headlineElement.className = 'c4g_maps_portside_measure_element';
          if (self.options.firstElement) {
            headlineElement.className = 'c4g_maps_portside_measure_element c4g_maps_portside_measure_element_first';
            self.options.firstElement = false;
          }
          listElement.appendChild(headlineElement);

          // create and append label for name-inputfield
          labelElement = document.createElement('label');
          labelElement.setAttribute('for', 'measureElement_' + featureIdCount);
          labelElement.innerHTML = self.langConstants.NAME + ': ';
          headlineElement.appendChild(labelElement);

          // create and append name-inputfield
          inputElement = document.createElement('input');
          inputElement.type = 'text';
          inputElement.name = 'measureElement_' + featureIdCount;
          inputElement.value = strType + ' ' + featureIdCount;
          // attach-change-handler
          jQuery(inputElement).change(function (event) {
            updateMeasureFeature(feature);
          });
          headlineElement.appendChild(inputElement);
          feature.set('listElementValueName', inputElement);

          // create and append paragraphs
          paragraphElement = document.createElement('p');
          paragraphElement.className = 'c4g_maps_portside_measure_paragraph';
          strongElement = document.createElement('strong');
          strongElement.innerHTML = strLabel + ': ';
          paragraphElement.appendChild(strongElement);
          spanElement = document.createElement('span');
          spanElement.innerHTML = '...';
          paragraphElement.appendChild(spanElement);
          listElement.appendChild(paragraphElement);
          feature.set('listElementValueLine', spanElement);

          if (measureArea) {
            paragraphElement = document.createElement('p');
            paragraphElement.className = 'c4g_maps_portside_measure_paragraph_surfacearea';
            strongElement = document.createElement('strong');
            strongElement.innerHTML = self.langConstants.SURFACEAREA + ': ';
            paragraphElement.appendChild(strongElement);
            spanElement = document.createElement('span');
            spanElement.innerHTML = '...';
            paragraphElement.appendChild(spanElement);
            listElement.appendChild(paragraphElement);
            feature.set('listElementValueArea', spanElement);
          }

          if (measureRadius) {
            // paragraphElement = document.createElement('p');
            // paragraphElement.className = 'c4g_maps_portside_measure_paragraph_surfacearea';
            // strongElement = document.createElement('strong');
            // strongElement.innerHTML = langConstants.SURFACEAREA + ': ';
            // paragraphElement.appendChild(strongElement);
            // spanElement = document.createElement('span');
            // spanElement.innerHTML = '...';
            // paragraphElement.appendChild(spanElement);
            // listElement.appendChild(paragraphElement);
            feature.set('listElementValueRadius', spanElement);
          }


          // increase the id-counter
          featureIdCount += 1;

          // append element to the list
          self.mainSection.appendChild(listElement);
          // attach element to the feature
          feature.set('listElement', listElement);

          self.update();
        }; // end of "addMeasureFeature()"

        updateMeasureFeature = function (feature) {
          var featureTooltip,
            newContent,
            name,
            length,
            area,
            radius;

          featureTooltip = feature.get('tooltip');
          name = feature.get('listElementValueName').value;
          length = utils.measureGeometry(feature.getGeometry(), true);
          newContent = '<strong>' + name + '</strong><br>';

          feature.set('measuredLength', length);
          feature.get('listElementValueLine').innerHTML = length.htmlValue;
          if (feature.get('geometryType') === 'circle') {
            radius = utils.measureGeometry(feature.getGeometry());
            feature.set('measuredRadius', radius);
            feature.get('listElementValueRadius').innerHTML = radius.htmlValue;
            newContent += radius.htmlValue;

            area = utils.measureGeometry(feature.getGeometry(), false, true);
            feature.set('measuredArea', area);
            feature.get('listElementValueArea').innerHTML = area.htmlValue;
            // newContent += area.htmlValue;
          } else if (feature.get('geometryType') === 'polygon') {
            area = utils.measureGeometry(feature.getGeometry());
            feature.set('measuredArea', area);
            feature.get('listElementValueArea').innerHTML = area.htmlValue;
            newContent += area.htmlValue;
          } else {
            newContent += length.htmlValue;
          }
          featureTooltip.setContent(newContent);
        }; // end of "updateMeasureFeature()"

        removeMeasureFeature = function (feature) {
          self.mainSection.removeChild(feature.get('listElement'));

          // last element? -> add infomessage
          if (self.mainSection.childElementCount < 1) {
            self.mainSection.appendChild(self.mainSectionInfo);
            self.update();
          }
        }; // end of "removeMeasureFeature()"

        //Start Workaround
        getValueOfGeometry = function (feature) {
          var leng = utils.measureGeometry(feature.getGeometry(), true);
          // feature.set('measuredLength', length);
          var val = leng.htmlValue;
          var valuenumb = val.match(/\d/g);
          valuenumb = valuenumb.join("");
          return valuenumb;
        };

        getLengthOfMeasure = function () {
          var length = '0.00 m';
          var lengthnumb = length.match(/\d/g);
          lengthnumb = lengthnumb.join("");
          lengthnumb = +8;
          return lengthnumb;
        };// End Workaround

        interaction.on('drawstart',
          function (event) {
            activeSketch = event.feature;
            // create tooltip
            activeTooltip = new TooltipPopUp({
              map: self.options.mapController.map,
              position: event.coordinate,
              horizontal: true,
              closeable: true,
              closeFunction: function () {
                //Workaround, for small or zero values of Freehand
                var val = getValueOfGeometry(event.feature);
                var leng = getLengthOfMeasure();
                if (val != leng && val > leng) {
                  removeMeasureFeature(event.feature);
                  source.removeFeature(event.feature);
                }
                else {
                  removeMeasureFeature(event.feature);
                }
              }
            });

            activeSketch.set('tooltip', activeTooltip);
            activeSketch.set('geometryType', options.type.toLowerCase());
            addMeasureFeature(activeSketch);
          }, self);

        self.options.mapController.map.on('pointermove',
          function (event) {
            if (activeSketch && activeTooltip) {
              activeTooltip.setPosition(event.coordinate);
              updateMeasureFeature(activeSketch);
            }
          }, self);

        interaction.on('drawend',
          function (event) {
            if (activeSketch && activeTooltip) {
              updateMeasureFeature(activeSketch);
              activeSketch = null;
              activeTooltip = null;
            }
          }, self);

        self.spinner.hide();
        return true;
      },
      activateFunction: function () {

        // disable mapHover
        self.options.mapController.mapHover.deactivate();

        features.clear();

        // Enable interaction
        self.options.mapController.map.addInteraction(interaction);
      },
      deactivateFunction: function () {

        // reactivate mapHover
        self.options.mapController.mapHover.activate();

        if (options.type.toLowerCase() !== 'point') {
          try {
            interaction.finishDrawing();
          } catch (ignore) {
            // 0_o
          }
        }

        // Remove from map
        self.options.mapController.map.removeInteraction(interaction);
      }
    });

    return measureView;
  } // end of "addMeasureView()"

}