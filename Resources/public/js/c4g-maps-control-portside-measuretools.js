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
  c4g.maps.control.Measuretools = function (opt_options) {

    // extend options
    this.options = $.extend({
      name: 'measure',
      headline: c4g.maps.constant.i18n.MEASURETOOLS,
      create: true,
      mapController: undefined,
      direction: 'left',
      firstElement: true
    }, opt_options);

    this.mainSection = document.createElement('div');

    // call parent constructor
    c4g.maps.control.Sideboard.call(this, this.options);
  };
  ol.inherits(c4g.maps.control.Measuretools, c4g.maps.control.Sideboard);

  /**
   * Methods
   */
  c4g.maps.control.Measuretools.prototype = $.extend(c4g.maps.control.Measuretools.prototype, {

    /**
     * Executed when the panel will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
    init: function () {

      this.spinner.show();

      // Add measure layers
      this.measureLineLayer = new ol.layer.Vector({source: new ol.source.Vector()});
      this.measurePolygonLayer = new ol.layer.Vector({source: new ol.source.Vector()});
      this.measureCircleLayer = new ol.layer.Vector({source: new ol.source.Vector()});
      this.measureFreehandLayer = new ol.layer.Vector({source: new ol.source.Vector()});

      this.measureLayerGroup = new ol.layer.Group({
        layers: new ol.Collection([
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
      this.mainSectionInfo.innerHTML = c4g.maps.constant.i18n.MEASURETOOLS_INFO;
      this.mainSectionInfo.innerHTML += '<br><br><sub>' + c4g.maps.constant.i18n.MEASURETOOLS_INFO_ADDITIONAL + '<sub>';
      this.mainSection.appendChild(this.mainSectionInfo);
      this.contentContainer.setElement(this.mainSection);

      this.spinner.hide();
      return true;
    }, // end of "init()"

    /**
     * Executed before panel will be closed
     *
     * @return  {[type]}  [description]
     */
    preCloseFunction: function () {
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
    }, // end of "preCloseFunction()"

    /**
     * Executed before panel will be opened
     *
     * @return  {[type]}  [description]
     */
    preOpenFunction: function () {
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
    }, // end of "preOpenFunction()"

    /**
     * @TODO: [addSelectView description]
     */
    addSelectView: function () {
      var selectView;

      selectView = this.addView({
        name: 'select',
        triggerConfig: {
          tipLabel: c4g.maps.constant.i18n.MEASURETOOLS_VIEW_TRIGGER_SELECT,
          className: c4g.maps.constant.css.MEASURETOOLS_VIEW_TRIGGER_SELECT
        },
        sectionElements: [
          {section: this.contentContainer, element: this.mainSection},
          {section: this.bottomToolbar, element: this.viewTriggerBar}
        ]
      });

      return selectView;
    }, // end of "addSelectView()"

    /**
     * @TODO: [addMeasureView description]
     *
     * @param  {[type]}  options  [description]
     */
    addMeasureView: function (options) {
      var self,
          TRIGGER_DRAW,
          measureView,
          source,
          interaction,
          features,
          olType;

      self = this;

      options = $.extend({
        type: 'LineString'
      }, options);

      TRIGGER_DRAW = 'MEASURETOOLS_VIEW_TRIGGER_DRAW_' + options.type.toUpperCase();

      measureView = self.addView({
        name: 'draw:' + options.type.toLowerCase(),
        triggerConfig: {
          tipLabel: c4g.maps.constant.i18n[TRIGGER_DRAW],
          className: c4g.maps.constant.css[TRIGGER_DRAW]
        },
        sectionElements: [
          {section: self.bottomToolbar, element: self.viewTriggerBar}
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
          features = new ol.Collection();

          olType = options.type;
          if (olType == 'Freehand') {
              olType = 'LineString';
          }
          interaction = new ol.interaction.Draw({
            features: features,
            source: source,
            type: olType,
            freehand: options.type == 'Freehand',
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

            if (!feature instanceof ol.Feature) {
              return false;
            }

            // check if the infomessage needs to be removed
            if (self.mainSection.childElementCount === 1 && self.mainSection.children[0] === self.mainSectionInfo) {
              self.mainSection.removeChild(self.mainSectionInfo);
            }

            // check feature-type
            if (feature.getGeometry() instanceof ol.geom.LineString) {
              strLabel = c4g.maps.constant.i18n.LENGTH;
              strType = c4g.maps.constant.i18n.LINE;
              measureArea = false;
              measureRadius = false;
            } else if (feature.getGeometry() instanceof ol.geom.Polygon) {
              strLabel = c4g.maps.constant.i18n.PERIMETER;
              strType = c4g.maps.constant.i18n.POLYGON;
              measureArea = true;
              measureRadius = false;
            } else if (feature.getGeometry() instanceof ol.geom.Circle) {
              strLabel = c4g.maps.constant.i18n.RADIUS;
              strType = c4g.maps.constant.i18n.CIRCLE;
              measureArea = false;
              measureRadius = true;
            } else {
              //freehand ist LineString too
              strLabel = c4g.maps.constant.i18n.LENGTH;
              strType = c4g.maps.constant.i18n.FREEHAND;
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
            labelElement.innerHTML = c4g.maps.constant.i18n.NAME + ': ';
            headlineElement.appendChild(labelElement);

            // create and append name-inputfield
            inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.name = 'measureElement_' + featureIdCount;
            inputElement.value = strType + ' ' + featureIdCount;
            // attach-change-handler
            $(inputElement).change(function (event) {
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
              strongElement.innerHTML = c4g.maps.constant.i18n.SURFACEAREA + ': ';
              paragraphElement.appendChild(strongElement);
              spanElement = document.createElement('span');
              spanElement.innerHTML = '...';
              paragraphElement.appendChild(spanElement);
              listElement.appendChild(paragraphElement);
              feature.set('listElementValueArea', spanElement);
            }

            if (measureRadius) {
                //ToDo implement perimeter and surface area
                //paragraphElement = document.createElement('p');
                //strongElement = document.createElement('strong');
                // strongElement.innerHTML = c4g.maps.constant.i18n.SURFACEAREA + ': ';
                //paragraphElement.appendChild(strongElement);
                //spanElement = document.createElement('span');
                //spanElement.innerHTML = '...';
                //paragraphElement.appendChild(spanElement);
                //listElement.appendChild(paragraphElement);
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
            length = c4g.maps.utils.measureGeometry(feature.getGeometry(), true);
            newContent = '<strong>' + name + '</strong><br>';

            feature.set('measuredLength', length);
            feature.get('listElementValueLine').innerHTML = length.htmlValue;
            if (feature.get('geometryType') === 'circle') {
              radius = c4g.maps.utils.measureGeometry(feature.getGeometry());
              feature.set('measuredRadius', radius);
              feature.get('listElementValueRadius').innerHTML = radius.htmlValue;
              newContent += radius.htmlValue;
            } else if (feature.get('geometryType') === 'polygon') {
                area = c4g.maps.utils.measureGeometry(feature.getGeometry());
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
            getValueOfGeometry = function (feature){
                var leng = c4g.maps.utils.measureGeometry(feature.getGeometry(), true);
                // feature.set('measuredLength', length);
                var val = leng.htmlValue;
                var valuenumb = val.match(/\d/g);
                valuenumb = valuenumb.join("");
                return valuenumb;
            }

            getLengthOfMeasure = function (){
                var length = '0.00 m';
                var lengthnumb = length.match(/\d/g);
                lengthnumb = lengthnumb.join("");
                lengthnumb =+8;
                return lengthnumb;
            }// End Workaround

          interaction.on('drawstart',
              function (event) {
                activeSketch = event.feature;
                // create tooltip
                activeTooltip = new c4g.maps.misc.TooltipPopUp({
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

  });

}(jQuery, this.c4g));