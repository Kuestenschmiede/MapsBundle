// 'namespace'
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.hook = this.c4g.maps.hook || {};

(function ($, c4g) {
  'use strict';

  c4g.maps.Proxy = function (options) {
    var mapData;

    this.options = $.extend({
      mapController: false
    }, options);
    if (!this.options.mapController) {
      return false;
    }

    c4g.maps.locationStyles = c4g.maps.locationStyles || {};
    c4g.maps.editorStyles = c4g.maps.editorStyles || {};
    c4g.maps.layers = c4g.maps.layers || {};
    c4g.maps.baselayers = c4g.maps.baselayers || {};

    //c4g.maps.hook.proxy_fillPopup = [];

    this.hook_baselayer_loaded = [];
    this.hook_baselayer_visibility = [];
    this.hook_layer_loaded = [];
    this.hook_layer_visibility = [];
    this.hook_map_click = [];
    this.hook_map_zoom = [];

    // add global hook for accessibility when there is no proxy reference
    c4g.maps.hook.proxy_layer_loaded = c4g.maps.hook.proxy_layer_loaded || [];

    this.baselayerIds = [];
    this.activeBaselayerId = undefined;
    this.layerIds = [];
    this.activeLayerIds = {};

    this.requestFunctions = {};
    this.request = {};

    this.baselayers_loaded = false;
    this.layers_loaded = false;

    mapData = this.options.mapController.data;

    this.mapId = mapData.id;

    this.api_baselayer_url = this.options.mapController.data.api.baselayer + '/' + mapData.profile;
    this.api_layer_url = this.options.mapController.data.api.layer + '/' + this.mapId;
    this.api_layercontent_url = this.options.mapController.data.api.layercontent;
    this.api_locstyle_url = this.options.mapController.data.api.locstyle;
    this.api_infowindow_url = this.options.mapController.data.api.infowindow;



    // this.initialize();
  };

  c4g.maps.Proxy.prototype = $.extend(c4g.maps.Proxy.prototype, {

    initialize: function () {
      var self,
          map;

      self = this;
      map = this.options.mapController.map;

      this.loadBaseLayers();
      this.loadLayers();
      this.addPopUp();

      //TODO check this, nearly the same as below
      map.on('change:view', function () {
        // zoom-observer
        //
        map.getView().on('change:resolution', function () {
          var layerId,
              layer;

          // check layer zoom-bounds
          // @TODO: Use "self.activeLayerIds = false" ?
          for (layerId in self.activeLayerIds) {
            if (self.activeLayerIds.hasOwnProperty(layerId)) {
              layer = c4g.maps.layers[layerId];
              if (self.checkLayerIsActiveForZoom(layerId)) {
                if (layer.isInactive) {
                  self.showLayer(layerId);
                }
              } else {
                self.hideLayer(layerId, true);
              }
            }
          }

          // hooks
          c4g.maps.utils.callHookFunctions(self.hook_map_zoom);
        }); // end of "zoom-observer"
      }); // end of "zoom-observer"

      // zoom-observer
      //
      map.getView().on('change:resolution', function () {
        var layerId,
            layer;


        // check layer zoom-bounds
        // @TODO: Use "self.activeLayerIds = false" ?
        for (layerId in self.activeLayerIds) {
          if (self.activeLayerIds.hasOwnProperty(layerId)) {
            layer = c4g.maps.layers[layerId];
            if (self.checkLayerIsActiveForZoom(layerId)) {
              if (layer.isInactive) {
                self.showLayer(layerId);
              }
            } else {
              self.hideLayer(layerId, true);
            }
          }
        }

        // hooks
        c4g.maps.utils.callHookFunctions(self.hook_map_zoom);
      }); // end of "zoom-observer"

      // click-observer
      //
      map.on('click', function (clickEvent) {

        var feature,
            fFeatures,
            layer,
            popupInfos,
            currentZoom,
            minZoom,
            newCenter,
            geometry,
            coord,
            setPopup,
            styleFunc,
            styleCluster,
            objPopup;

        //ToDo check new function call with ol 4.3
        feature = map.forEachFeatureAtPixel(clickEvent.pixel,
            function (feature, layer) {
                return feature;
            });

        layer = map.forEachFeatureAtPixel(clickEvent.pixel,
            function (feature, layer) {
              return layer;
            });

        if(layer && layer.getStyle()) {
                styleFunc = layer.getStyle();
                if(typeof styleFunc === "function" && styleFunc(feature, currentZoom) && styleFunc(feature, currentZoom)['0']){
                    styleCluster = styleFunc(feature, currentZoom)['0'].clone();
                    styleCluster.getImage().setScale(styleCluster.getImage().getScale()*0.7);
                }
        }

        fFeatures = feature ? feature.get('features') : false;
        if (!(fFeatures && fFeatures.length === 1)) {
          // cluster multiple POI
          if (fFeatures) {


              feature.setStyle(new ol.style.Style({
                  image: new ol.style.Circle({
                      fill: new ol.style.Fill({
                          opacity: 0
                      }),
                      radius: 0
                  })
              }));
                  feature = false;

            // animation
            map.getView().animate({
              start: +new Date(),
              duration: 1000,
              resolution: map.getView().getResolution(),
              center: [0, 0]
              //rotation: Math.PI
            });

              currentZoom = map.getView().getZoom();
              newCenter = map.getCoordinateFromPixel(clickEvent.pixel);
              minZoom = self.options.mapController.data.cluster_all ? self.options.mapController.data.cluster_zoom : fFeatures['0'].get('cluster_zoom');

              //ToDo remove with structure element param
              if(currentZoom>=minZoom){

              //if (currentZoom >= map.getView().getMaxZoom()) {
                //open the cluster after zooming
                  var pix = map.getView().getResolution();
                  var max = fFeatures.length;
                  var r = pix * 12 * (0.5 + max / 4);
                  for (var i=0; i<max; i++)
                  { var a = 2*Math.PI*i/max;
                      if (max==2 || max == 4) a += Math.PI/4;
                      var p = [ newCenter[0]+r*Math.sin(a), newCenter[1]+r*Math.cos(a) ];
                      var coordinate = ol.proj.toLonLat(p);
                      var f = [];
                      f.push(fFeatures[i]);
                      var cf = new ol.Feature({ geometry: new ol.geom.Point(p),
                                                features: f});
                      cf.setStyle(styleCluster);
                      layer.getSource().addFeature(cf);
                      map.getView().setCenter(newCenter);
                  }
              } else {
                  currentZoom += 1;
              }


            map.getView().setCenter(newCenter);
            map.getView().setZoom(currentZoom);
          }
        } else if ((fFeatures && fFeatures.length === 1)) {
          feature = fFeatures[0];
        }

        popupInfos = {};
        if (feature && feature.get('popup')) {
          // single POI
          popupInfos = feature.get('popup');
        } else if (layer && layer.popup) {
          popupInfos = layer.popup;
        } else {
          feature = false;
        }
          if (feature && feature.get('loc_linkurl')) {
              if(self.options.mapController.data.link_newwindow==='1') {
                  window.open(feature.get('loc_linkurl'));
              }
              else{
                  window.open(feature.get('loc_linkurl'),"_self");
              }

          }
          else {
              if(feature && feature.get('zoom_onclick') && feature.get('zoom_onclick') != 0){
                  map.getView().setZoom(feature.get('zoom_onclick'));
                  map.getView().setCenter(feature.getGeometry().getCoordinates());
              }
              else if(layer && layer.zoom_onclick && layer.zoom_onclick != 0){
                  map.getView().setZoom(layer.zoom_onclick);
                  map.getView().setCenter(clickEvent.coordinate);
              }

              if (feature) {
                  geometry = feature.getGeometry();
                  if (geometry instanceof ol.geom.Point) {
                      coord = geometry.getCoordinates();
                  } else {
                      coord = clickEvent.coordinate;
                  }

                  c4g.maps.popup.popup.setPosition(coord);
                  if (popupInfos.content) {
                      c4g.maps.popup.$content.html('');
                      c4g.maps.popup.$popup.addClass(c4g.maps.constant.css.ACTIVE).addClass(c4g.maps.constant.css.LOADING);
                      c4g.maps.popup.spinner.show();

                      if (popupInfos.async === false) {
                          objPopup = {};
                          objPopup.popup = popupInfos;
                          objPopup.feature = feature;
                          objPopup.layer = layer;
                          // Call the popup hook for plugin specific popup content
                          if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.proxy_fillPopup === 'object') {
                              c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
                          }
                          self.setPopup(objPopup,self);
                      } else {
                          $.ajax({
                              dataType: "json",
                              url: self.api_infowindow_url + '/' + popupInfos.content,
                              success: function (data) {
                                  var popupInfo = {
                                      async: popupInfos.async,
                                      content: data.content,
                                      popup: popupInfos.popup,
                                      routing_link: popupInfos.routing_link
                                  };

                                  objPopup = {};
                                  objPopup.popup = popupInfo;
                                  objPopup.feature = feature;
                                  objPopup.layer = layer;

                                  // Call the popup hook for plugin specific popup content
                                  if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.proxy_fillPopup === 'object') {
                                      c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
                                  }

                                  self.setPopup(objPopup,self);
                              }
                          });
                      }
                  } else {
                      c4g.maps.popup.$popup.removeClass(c4g.maps.constant.css.ACTIVE);
                  }

              } else {
                  c4g.maps.popup.$popup.removeClass(c4g.maps.constant.css.ACTIVE);
              }

              // hooks
              c4g.maps.utils.callHookFunctions(self.hook_map_click, clickEvent);
          }
      }); // end of "click-observer"


        // this.options.mapController.map.getLayers().on('change:length', function(event) {
        //     ;
        // });


    }, // end of "initial"*
      combine : function (proxy){
          var func = function(event) {
              proxy.combineLayers(proxy);
              proxy.options.mapController.map.un('postrender',func);
          };
          proxy.options.mapController.map.on('postrender', func)
      },

      setPopup : function (popupConfig,proxy) {
          var feature,
              layer,
              popupContent,
              router,
              routeButtonWrapper,
              routeFromButton,
              routeFromButtonSpan,
              routeToButton,
              routeToButtonSpan,
              routingHandler;

          feature = popupConfig.feature;
          layer = popupConfig.layer;

          popupContent = c4g.maps.utils.replaceAllPlaceholders(popupConfig.popup.content, feature, layer);

          // @TODO: check for route-option & display "route-to"
          // NOTE: does not work async this way
          if (proxy.options.mapController.controls.router && popupConfig.popup.routing_link) {
              router = proxy.options.mapController.controls.router;

              routingHandler = function (event) {
                  if (proxy.options.mapController.activePortside !== router) {
                      router.open();
                  }

                  router.setInput(
                      $(event.currentTarget).hasClass(c4g.maps.constant.css.POPUP_ROUTE_FROM),
                      feature.getGeometry().getCoordinates()
                  );
              }; // end of "routingHandler()"

              routeButtonWrapper = document.createElement('div');
              routeButtonWrapper.className = c4g.maps.constant.css.POPUP_ROUTE_WRAPPER;

              routeFromButton = document.createElement('button');
              routeFromButton.className = c4g.maps.constant.css.ICON + ' ' + c4g.maps.constant.css.POPUP_ROUTE_FROM;
              $(routeFromButton).click(routingHandler);
              routeButtonWrapper.appendChild(routeFromButton);

              routeFromButtonSpan = document.createElement('span');
              routeFromButtonSpan.innerHTML = c4g.maps.constant.i18n.POPUP_ROUTE_FROM;
              routeFromButton.appendChild(routeFromButtonSpan);

              routeToButton = document.createElement('button');
              routeToButton.className = c4g.maps.constant.css.ICON + ' ' + c4g.maps.constant.css.POPUP_ROUTE_TO;
              $(routeToButton).click(routingHandler);
              routeButtonWrapper.appendChild(routeToButton);

              routeToButtonSpan = document.createElement('span');
              routeToButtonSpan.innerHTML = c4g.maps.constant.i18n.POPUP_ROUTE_TO;
              routeToButton.appendChild(routeToButtonSpan);
          }

          if (popupContent.trim() || router) {
              c4g.maps.popup.$content.html(popupContent);
              if (router) {
                  c4g.maps.popup.$content.append(routeButtonWrapper);
              }
              c4g.maps.popup.popup.setPosition(feature.getGeometry().getCoordinates());
          } else {
              // hide popup if there is no valid content left
              c4g.maps.popup.$popup.removeClass(c4g.maps.constant.css.ACTIVE);
          }

          c4g.maps.popup.$popup.removeClass(c4g.maps.constant.css.LOADING);
          c4g.maps.popup.spinner.hide();
      }, // end of "setPopup()"


    addPopUp: function () {

      var popUpElement,
          popUpCloseElement,
          popUpContent,
          popup;


      popUpElement = document.createElement('div');
      popUpElement.setAttribute('id', 'c4g_popup_' + this.options.mapController.data.mapId);
      popUpElement.className = 'c4g-popup-wrapper';

      popUpCloseElement = document.createElement('button');
      popUpCloseElement.className = "c4g-popup-close c4g-icon";

      popUpContent = document.createElement('div');
      popUpContent.className = "c4g-popup-content";

      popUpElement.appendChild(popUpCloseElement);
      popUpElement.appendChild(popUpContent);

      $(popUpCloseElement).click(function (event) {
        event.preventDefault();
        c4g.maps.popup.$popup.removeClass(c4g.maps.constant.css.ACTIVE);
      });

      popup = new ol.Overlay({
        element: popUpElement,
        positioning: 'bottom-left',
        offset: [-50, 0]/*,
        autoPan: true,
        autoPanAnimation: {
             duration: 250
        },
        autoPanMargin: 20*/
      });

      c4g.maps.popup = {};
      c4g.maps.popup.popup = popup;
      // attach a spinner to the popup
      c4g.maps.popup.spinner = new c4g.maps.misc.Spinner({target: popUpElement});

      this.options.mapController.map.addOverlay(popup);

      c4g.maps.popup.$popup = $(c4g.maps.popup.popup.getElement());
      c4g.maps.popup.$content = $('.c4g-popup-content', c4g.maps.popup.$popup);

    }, // end of "addPopUp()"


    /**
     * @TODO: [checkLocationStyles description]
     *
     * @param   {[type]}  opt_options  [description]
     *
     * @return  {[type]}               [description]
     */
    checkLocationStyles: function (opt_options) {

      var options,
          neededLayerStyles,
          getLayerStyles;

      if (opt_options && typeof opt_options === "object") {
        options = opt_options;
      } else {
        options = {};
      }

      c4g.maps.locationStyles = c4g.maps.locationStyles || {};

      neededLayerStyles = [];
      getLayerStyles = function (layers) {
        var i,
            element,
            index;

        // ToDo: Rekursion integrieren (test mit forum)
        for (index in layers) {
          if (layers.hasOwnProperty(index)) {
            element = layers[index];

            if (element.content) {
              for (i = 0; i < element.content.length; i += 1) {

                if (element.content[i]) {
                  if (
                      element.content[i].locationStyle
                      && element.content[i].locationStyle !== "0"
                      && neededLayerStyles.indexOf(element.content[i].locationStyle) === -1
                      && (
                          !c4g.maps.locationStyles[element.content[i].locationStyle]
                          || c4g.maps.locationStyles[element.content[i].locationStyle].style === undefined
                      )
                  ) {
                    neededLayerStyles.push(element.content[i].locationStyle);
                  }
                }
              }
            }
          }
        }
      };

      getLayerStyles(c4g.maps.layers);

      if (neededLayerStyles.length > 0) {
        this.loadLocationStyles(neededLayerStyles, options);
      } else {
        if (options.success && typeof options.success === "function") {
          options.success();
        }
      }
    }, // end of "checkLocationStyles()"

    loadLocationStyles: function (arrIds, opt_options) {
      var options,
          self = this,
          complete = {},
          success = {},
          count = 1;

      if (opt_options && typeof opt_options === "object") {
        options = opt_options;
      } else {
        options = {};
      }

      this.options.mapController.spinner.show();

      var makeAjax = function(styleIds, index) {
        if (index) {
          complete[index] = false;
          success[index] = false;
        }
        // get locationstyles over API
        $.ajax({
          dataType: self.options.mapController.data.jsonp ? "jsonp" : "json",
          url: self.api_locstyle_url,
          data: {
            ids: styleIds
          }
        }).done(function (data) {
          var i,
              styleData,
              successful = true;

          if (data.length > 0) {
            for (i = 0; i < data.length; i += 1) {
              styleData = data[i];
              c4g.maps.locationStyles[styleData.id] = {};
              c4g.maps.locationStyles[styleData.id].style = self.getStyleFunction(styleData);
              c4g.maps.locationStyles[styleData.id].editor = self.getStyleEditorConfig(styleData);
              c4g.maps.locationStyles[styleData.id].name = styleData.name || undefined;
              c4g.maps.locationStyles[styleData.id].tooltip = styleData.tooltip || undefined;
              c4g.maps.locationStyles[styleData.id].label = styleData.label || undefined;
              c4g.maps.locationStyles[styleData.id].minzoom = styleData.minzoom || undefined;
              c4g.maps.locationStyles[styleData.id].maxzoom = styleData.maxzoom || undefined;
            }
          }
          if (index) {
            success[index] = true;
            for (var key in success) {
              if (success.hasOwnProperty(key)) {
                if (!success[key]) {
                  successful = false;
                  break;
                }
              }
            }
          }
          if (options.success && typeof options.success === "function" && (index ? successful : true)) {
            options.success();
          }
        }).complete(function (jXhr, strStatus) {
          var completed = true;

          if (index) {
            complete[index] = true;
            for (var key in complete) {
              if (complete.hasOwnProperty(key)) {
                if (!complete[key]) {
                  completed = false;
                  break;
                }
              }
            }
          }
          if (options.complete && typeof options.complete === "function" && (index ? completed : true)) {
            options.complete();
          }
          if (!$(self.options.mapController.spinner.element).hasClass(c4g.maps.constant.css.HIDE)) {
            self.options.mapController.spinner.hide();
          }
        }).fail(function (jqXHR, textStatus, errorThrown ) {
          console.warn(errorThrown);
        });
      };

      // split arrIds if it's too long
      if (arrIds.length > 100) {
        var n = 100;
        while(arrIds.length > 0) {
          makeAjax(arrIds.splice(0, n), count);
          count++;
        }
      } else {
        makeAjax(arrIds);
      }
      //});
    }, // end of "loadLocationStyles()"

    getStyleFunction: function (styleData) {
      var self,
          styleFunction,
          imageStyle,
          strokeStyle,
          fillStyle,
          textStyle,
          textStyleOutline;

      self = this;

      // general
      strokeStyle = new ol.style.Stroke({
        color: c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.strokecolor, styleData.strokeopacity),
        width: parseInt(styleData.strokewidth.value, 10)
      });
      fillStyle = new ol.style.Fill({
        color: c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.fillcolor, styleData.fillopacity)
      });

      // image
      switch (styleData.styletype) {
        case 'square':
          imageStyle = new ol.style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            points: 4,
            radius: styleData.radius.value || 10,
            angle: Math.PI / 4
          });
          break;
        case 'star':
          imageStyle = new ol.style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            radius1: styleData.radius.value || 10,
            radius2: styleData.radius.value ? Math.floor(styleData.radius.value * 0.5) : 4,
            points: 5,
            angle: 0
          });
        break;
        case 'x':
          imageStyle = new ol.style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            points: 4,
            radius: styleData.radius.value || 10,
            radius2: 0,
            angle: Math.PI / 4
          });
          break;
        case 'cross':
          imageStyle = new ol.style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            points: 4,
            radius: styleData.radius.value || 10,
            radius2: 0,
            angle: 0
          });
          break;
        case 'triangle':
          imageStyle = new ol.style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            points: 3,
            radius: styleData.radius.value || 10,
            rotation: Math.PI / 4,
            angle: 0
          });
          break;
        case 'ol_icon': // fallthrough
        case 'cust_icon':
          if (styleData.icon_src) {
            imageStyle = new ol.style.Icon({
              //anchor: [(-1 * (styleData.icon_offset[0] || 0)), (-1 * (styleData.icon_offset[1] || 0))],
              //anchorXUnits: 'pixels',
              //anchorYUnits: 'pixels',
              opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
              src: (self.options.mapController.data.icon_source ? self.options.mapController.data.icon_source : '') + styleData.icon_src,
              size: [parseInt(styleData.icon_size[0], 10), parseInt(styleData.icon_size[1], 10)],
              scale: parseFloat(styleData.icon_scale, 10),
            });
            break;
          } // fallthrough
        case 'point':
          imageStyle = new ol.style.Circle({
            fill: fillStyle,
            stroke: strokeStyle,
            radius: styleData.radius.value || 7
          });
          break;
        default:
          imageStyle = new ol.style.Circle({
            fill: fillStyle,
            stroke: strokeStyle,
            radius: styleData.radius.value || 7
          });
      }

      // build function
      styleFunction = function (feature, projection, getId) {
        var stylesArray,
            label,
            arrowSize,
            arrowSizeUnit,
            segmentLength,
            arrows_minzoom,
            start_pixel,
            end_pixel;

        if (getId) {
          return styleData.id;
        }

        // check if this is a feature.styleFunction
        if (!(feature instanceof ol.Feature)) {
          projection = feature;
          feature = this;
        }

        stylesArray = [];

        if (feature && typeof feature.get === 'function' && feature.get('label')) {
          label = feature.get('label');
        } else if (styleData.label) {
          label = styleData.label;
        } else {
          label = false;
        }
        // label
        if (label) {
          if (styleData.label_outl_color && styleData.label_outl_width.value) {
            textStyleOutline = new ol.style.Stroke({
              color: c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.label_outl_color, {
                unit: '%',
                value: 100
              }),
              width: parseInt(styleData.label_outl_width.value, 10)
            });
          }
          if (!styleData.label_offset) {
            styleData.label_offset = [0, 0, "px"];
          }

          textStyle = new ol.style.Text({
            text: label,
            font: (styleData.font_weight || 'normal') + ' ' + (styleData.font_style || 'normal') + ' ' + (styleData.font_size || '13') + 'px ' + (styleData.font_family || 'sans-serif'),
            // scale: parseInt(styleData.font_size || 0, 10) || undefined,
            offsetX: parseInt(styleData.label_offset[0] || 0, 10),
            offsetY: parseInt(styleData.label_offset[1] || 0, 10),
            textAlign: styleData.label_align_hor,
            textBaseline: styleData.label_align_ver,
            fill: new ol.style.Fill({
              color: c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.font_color, styleData.font_opacity)
            }),
            stroke: textStyleOutline
          });
        }

        // create style-object
        // we need this check because textStyle is a var accessible from closure and will be set even if no label is set
        if (label) {
          stylesArray.push(
              new ol.style.Style({
                image: imageStyle,
                text: textStyle,
                stroke: strokeStyle,
                fill: fillStyle
              })
          );
        } else {
          stylesArray.push(
              new ol.style.Style({
                image: imageStyle,
                stroke: strokeStyle,
                fill: fillStyle
              })
          );
        }


        // add line-arrows
        if (
            styleData.line_arrows
            && feature
            && (typeof feature.getGeometry === 'function')
            && !(feature.getGeometry() instanceof ol.geom.Point)
            && typeof feature.getGeometry().forEachSegment === 'function'
        ) {
          arrowSize = (styleData.line_arrows_radius) ? (parseInt(styleData.line_arrows_radius.value, 10) * 2) : 0;
          arrowSizeUnit = arrowSize + styleData.line_arrows_radius.unit;
          feature.getGeometry().forEachSegment(function (start, end) {
            //if minzoom is 0 (unlimited), hide arrows if they are bigger than the segment
            arrows_minzoom = parseInt(styleData.line_arrows_minzoom, 10);
            start_pixel = self.options.mapController.map.getPixelFromCoordinate(start);
            end_pixel = self.options.mapController.map.getPixelFromCoordinate(end);
            //distance between start and end
            segmentLength = Math.sqrt(Math.pow(end_pixel[1] - start_pixel[1], 2) + Math.pow(end_pixel[0] - start_pixel[0], 2));

            if (
                (arrows_minzoom < 0 && arrowSize + parseInt(styleData.strokewidth.value, 10) < segmentLength)
                || (arrows_minzoom >= 0 && self.options.mapController.map.getView().getZoom() >= arrows_minzoom)
            ) {
              // forward arrows
              stylesArray.push(
                  new ol.style.Style({
                    geometry: new ol.geom.Point(end),
                    text: new ol.style.Text({
                      text: "ᐳ",
                      font: arrowSizeUnit + " sans-serif",
                      offsetX: 0,
                      offsetY: 1,
                      fill: fillStyle,
                      stroke: strokeStyle,
                      textAlign: 'right',
                      rotateWithView: true,
                      rotation: -Math.atan2((end[1] - start[1]), (end[0] - start[0]))
                    })
                  })
              );
              // backward arrows (if wanted)
              if (styleData.line_arrows_back) {
                stylesArray.push(
                    new ol.style.Style({
                      geometry: new ol.geom.Point(start),
                      text: new ol.style.Text({
                        text: "ᐳ",
                        font: arrowSizeUnit + " sans-serif",
                        offsetX: 0,
                        offsetY: -1,
                        fill: fillStyle,
                        stroke: strokeStyle,
                        textAlign: 'right',
                        rotateWithView: true,
                        rotation: -Math.atan2((start[1] - end[1]), (start[0] - end[0]))
                      })
                    })
                );
              }

            }
          });
        }

        return stylesArray;
      };

      return styleFunction;
    }, // end of "getStyleFunction()"

    getStyleEditorConfig: function (styleData) {
      var editorConfig;

      // create editor-config
      editorConfig = {};
      editorConfig.collect = styleData.editor_collect || undefined;
      editorConfig.iconSrc = styleData.editor_icon || undefined;
      editorConfig.vars = styleData.editor_vars || undefined;

      editorConfig.sort = styleData.editor_sort || false;
      if (editorConfig.sort) {
        editorConfig.sort = parseInt(editorConfig.sort, 10) || false;
      }

      return editorConfig;
    }, // end of "getStyleEditorConfig()"

    loadBaseLayers: function () {
      var self;

      self = this;

      $.ajax({
	      dataType: self.options.mapController.data.jsonp ? "jsonp" : "json",
	      url: self.api_baselayer_url
	    })
        .done(function (data) {
          if (data.baselayer) {
            self.addBaseLayers(data.baselayer);
          }
          return true;
        })
        .fail(function () {
          // @TODO error-messages
          //   1) Visible message 4 users (i18n)
          //   2) Technical console.warn
          console.warn('An error occured while trying to load the baselayers...');
          self.options.mapController.spinner.hide();
          return false;
        })
        .always(function () {
          //self.options.mapController.spinner.hide();
        });

    }, // end of "loadBaseLayers()"

    addBaseLayers: function (baselayers) {
      var baselayer,
          uid,
          i;

      // sort baselayer (for internal list)
      baselayers.sort(function (a, b) {
        if ((!a.sort && !b.sort) || (parseInt(a.sort, 10) === parseInt(b.sort, 10))) {
          if (!a.name || !b.name) {
            return (!b.name) ? -1 : 1;
          }
          return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1;
        }
        if (!a.sort || !b.sort) {
          return (!b.sort) ? -1 : 1;
        }
        return (parseInt(a.sort, 10) > parseInt(b.sort, 10)) ? 1 : -1;
      });

      // build baselayer-list
      if (baselayers.length > 0) {
        for (i = 0; i < baselayers.length; i += 1) {

          baselayer = baselayers[i];

          uid = baselayer.id || c4g.maps.utils.getUniqueId();
          this.baselayerIds.push(uid);
          if (!c4g.maps.baselayers[uid]) {
            c4g.maps.baselayers[uid] = baselayer;
          }

          // @TODO: check initial baselayer-handling
          if (this.options.mapController.data.baselayer && parseInt(uid, 10) === parseInt(this.options.mapController.data.baselayer, 10)) {
            this.showBaseLayer(uid);
          }
        }
      }

      if (!this.activeBaselayerId) {
        // no baselayer was activated
        if (baselayers.length > 0 && baselayers[0].id) {
          // take first baselayer if possible
          uid = baselayers[0].id;
        } else {
          // otherwise build default baselayer
          uid = 0;
          this.baselayerIds.push(uid);
          if (!c4g.maps.baselayers[uid]) {
            c4g.maps.baselayers[uid] = {
              id: 0,
              name: 'c4g_default',
              provider: 'osm',
              style: 'Mapnik'
            };
          }
        }
        this.showBaseLayer(uid);

      }
      this.baselayers_loaded = true;

      c4g.maps.utils.callHookFunctions(this.hook_baselayer_loaded, this.baselayerIds);
    }, // end of "addBaseLayers()"

    showBaseLayer: function (baseLayerUid) {

      var baseLayerConfig,
          layers,
          baselayer,
          addBaselayer,
          baseLayers,
          baselayerId,
          osmSourceConfigs,
          stamenSourceConfigs,
          //mapQuestSourceConfigs,
          mapboxSourceConfigs,
          hereSourceConfigs,
          thunderforestSourceConfigs,
          newBaselayer,
          layerOptions,
          noUrl,
          i,
          baseLayerMap,
          layersWithOverlay,
          overlayLayerConfig,
          overlayLayer,
          view;

      baseLayerConfig = c4g.maps.baselayers[baseLayerUid];

      if ((typeof baseLayerConfig !== "undefined") && !baseLayerConfig.layer) {
        // create layer
        osmSourceConfigs = c4g.maps.config.osm;
        stamenSourceConfigs = c4g.maps.config.stamen;
        //mapQuestSourceConfigs = c4g.maps.config.mapquest;
        mapboxSourceConfigs = c4g.maps.config.mapbox;
        hereSourceConfigs = c4g.maps.config.here;
        thunderforestSourceConfigs = c4g.maps.config.thunderforest;

        //newBaselayer = new ol.layer.Tile({
        //  source: new ol.source.OSM()
        //});

        layerOptions = {};

        if (baseLayerConfig.attribution) {
          if (layerOptions.attributions) {
            layerOptions.attributions.push(
                new ol.Attribution({
                  html: baseLayerConfig.attribution
                })
            );
          } else {
            layerOptions.attributions = [
              ol.source.OSM.ATTRIBUTION
            ];

            layerOptions.attributions.push(
                new ol.Attribution({
                  html: baseLayerConfig.attribution
                })
            );
          }
        } else if (!layerOptions.attributions) {
          switch (baseLayerConfig.provider) {
            case 'osm':
              if (stamenSourceConfigs[baseLayerConfig.style]) {
                layerOptions.attributions = stamenSourceConfigs[baseLayerConfig.style].attributions;
/*
              } else if (mapQuestSourceConfigs[baseLayerConfig.style]) {
                layerOptions.attributions = mapQuestSourceConfigs[baseLayerConfig.style].attributions;
*/
              } else if (osmSourceConfigs[baseLayerConfig.style]) {
                layerOptions.attributions = osmSourceConfigs[baseLayerConfig.style].attributions;
              } else {
                layerOptions.attributions = [
                  ol.source.OSM.ATTRIBUTION
                ];
              }
              break;
            case 'mapbox':
              layerOptions.attributions = mapboxSourceConfigs[baseLayerConfig.mapbox_type].attributions;
              break;
              Default:
                  layerOptions.attributions = [
                    ol.source.OSM.ATTRIBUTION
                  ];
              break;
            case 'here':
                layerOptions.attributions = hereSourceConfigs[baseLayerConfig.here_type].attributions;
                break;
                Default:
                    layerOptions.attributions = [
                        ol.source.OSM.ATTRIBUTION
                    ];
                break;
            case 'thunder':
                layerOptions.attributions = thunderforestSourceConfigs[baseLayerConfig.thunderforest_type].attributions;
                break;
                Default:
                    layerOptions.attributions = [
                        ol.source.OSM.ATTRIBUTION
                    ];
                break;

          }
        }

        //ToDo helper class for attributions

        //additional attribution
        if (this.options.mapController.data && this.options.mapController.data.attribution && this.options.mapController.data.attribution.additional) {
          if (layerOptions.attributions) {
            var additionalAttribution = new ol.Attribution({
              html: this.options.mapController.data.attribution.additional
            });

            var exists = false;
            for (i = 0; i < layerOptions.attributions.length; i += 1) {
              if (layerOptions.attributions[i].getHTML().indexOf(additionalAttribution.getHTML()) != -1) {
                exists = true;
                break;
              }
            }

            if (!exists) {
              layerOptions.attributions.push(additionalAttribution);
            }
          } else {
            layerOptions.attributions = [
              new ol.Attribution({
                html: this.options.mapController.data.attribution.additional
              })]
          }
        }

        //ToDo type class for geosearch_engine
        //geosearch attribution
        var geosearch_attribution = '';
        if (this.options.mapController.data.geosearch) {
          var geosearch_engine = this.options.mapController.data.geosearch.geosearch_engine;

          if (this.options.mapController.data &&
              this.options.mapController.data.attribution) {

            switch (geosearch_engine) {
              case '4':
                geosearch_attribution = ''; //con4gis mapservices
                break;
              case '3':
                if (this.options.mapController.data.geosearch.custom_attribution) {
                  geosearch_attribution = this.options.mapController.data.geosearch.custom_attribution;
                }
                break;
              case '2':
                geosearch_attribution =
                    'Nominatim Search Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" alt="" />';
                break;
              case '1':
              default:
                geosearch_attribution =
                    'Nominatim Search Courtesy of <a href="http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy" target="_blank">OpenStreetMap</a>';
                break;
            }


            var geosearchAttribution = new ol.Attribution({
              html: geosearch_attribution
            });

            var exists = false;
            if(!layerOptions.attributions){
                layerOptions.attributions = [];
            }
            for (i = 0; i < layerOptions.attributions.length; i += 1) {
              if (layerOptions.attributions[i].getHTML().indexOf(geosearchAttribution.getHTML()) != -1) {
                exists = true;
                break;
              }
            }

            if (!exists) {
              layerOptions.attributions.push(geosearchAttribution);
            }
          } else {
            layerOptions.attributions = [
              new ol.Attribution({
                html: geosearchAttribution
              })]
          }
        }

        if (baseLayerConfig.sorting) {
          layerOptions.sort = baseLayerConfig.sorting;
        }
        if (baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0) {
          layerOptions.minZoom = baseLayerConfig.minZoom;
        }
        if (baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0) {
          layerOptions.maxZoom = baseLayerConfig.maxZoom;
        }

        // TODO: diese Mechanik auslagern (wird auch in c4g-maps.js verwendet und für die overlay benötigt

        switch (baseLayerConfig.provider) {
          case 'osm':
            if (osmSourceConfigs[baseLayerConfig.style]) {
              newBaselayer = new ol.layer.Tile({
                source: new ol.source.OSM(
                    $.extend(
                        osmSourceConfigs[baseLayerConfig.style],
                        layerOptions
                    )
                )
              });
            } else if (stamenSourceConfigs[baseLayerConfig.style]) {
              // Stamen
              newBaselayer = new ol.layer.Tile({
                source: new ol.source.Stamen(
                    $.extend(
                        stamenSourceConfigs[baseLayerConfig.style],
                        layerOptions
                    )
                )
              });
            // } else if (mapQuestSourceConfigs[baseLayerConfig.style]) {
            //   // mapQuest
            //   newBaselayer = new ol.layer.Tile({
            //     source: new ol.source.MapQuest(mapQuestSourceConfigs[baseLayerConfig.style])
            //   });
            } else if (baseLayerConfig.style === 'osm_custom') {
              // custom
              noUrl = true;
              if (baseLayerConfig.url) {
                layerOptions.url = baseLayerConfig.url;
                noUrl = false;
              } else if (baseLayerConfig.urls) {
                layerOptions.urls = baseLayerConfig.urls;
                noUrl = false;
              }
              if (!noUrl) {
                newBaselayer = new ol.layer.Tile({
                  source: new ol.source.XYZ(layerOptions)
                });
              } else {
                console.warn('custom url(s) missing -> switch to default');
              }
            } else {
              console.warn('unsupported osm-style -> switch to default');
            }
            break;
            case 'mapbox':
              if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.mapbox_type) {

                if (baseLayerConfig.mapbox_type === 'Mapbox') {
                  layerOptions.url = baseLayerConfig.url + baseLayerConfig.app_id + '/tiles/{z}/{x}/{y}?access_token=' + baseLayerConfig.api_key;

                  newBaselayer = new ol.layer.Tile({
                    source: new ol.source.XYZ($.extend(
                        mapboxSourceConfigs[baseLayerConfig.mapbox_type],
                        layerOptions))
                  });
                } else {
                  layerOptions.url = baseLayerConfig.url_classic + baseLayerConfig.app_id + '/{z}/{x}/{y}.png?access_token=' + baseLayerConfig.api_key;

                  newBaselayer = new ol.layer.Tile({
                    source: new ol.source.XYZ($.extend(
                        mapboxSourceConfigs[baseLayerConfig.mapbox_type],
                        layerOptions
                    ))
                  });
                }
              } else {
                console.warn('wrong mapbox configuration!');
              }
              break;
            case 'here':
              if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.here_type) {

                  if (baseLayerConfig.style == 'normal') {
                      layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png' +
                                            '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                  } else
                  if (baseLayerConfig.style == 'transit') {
                      layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day.transit/{z}/{x}/{y}/256/png' +
                          '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                  } else
                  if (baseLayerConfig.style == 'pedestrian') {
                      layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/pedestrian.day/{z}/{x}/{y}/256/png' +
                          '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                  } else
                  if (baseLayerConfig.style == 'terrain') {
                      layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/terrain.day/{z}/{x}/{y}/256/png' +
                          '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                  } else
                  if (baseLayerConfig.style == 'satellite') {
                      layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png' +
                          '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                  } else
                  if (baseLayerConfig.style == 'hybrid') {
                      layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png' +
                          '?app_id='+baseLayerConfig.app_id+'&app_code='+baseLayerConfig.api_key;
                  }

                  newBaselayer = new ol.layer.Tile({
                  source: new ol.source.XYZ($.extend(
                      mapboxSourceConfigs[baseLayerConfig.here_type],
                      layerOptions))
                  });
              } else {
                  console.warn('wrong HERE configuration!');
              }
              break;
            case 'thunder':
                if (baseLayerConfig.api_key && baseLayerConfig.thunderforest_type) {

                    if (baseLayerConfig.style) {
                        layerOptions.url = "https://tile.thunderforest.com/"+baseLayerConfig.style+"/{z}/{x}/{y}.png?apikey="+baseLayerConfig.api_key;
                    }

                    newBaselayer = new ol.layer.Tile({
                        source: new ol.source.XYZ($.extend(
                            mapboxSourceConfigs[baseLayerConfig.thunderforest_type],
                            layerOptions))
                    });
                } else {
                    console.warn('wrong Thunderforest configuration!');
                }
                break;
          case 'google':
            //@todo
            console.warn('google-maps are currently unsupported');
            break;
          case 'bing':
            if (baseLayerConfig.apiKey && baseLayerConfig.style) {
              newBaselayer = new ol.layer.Tile({
                source: new ol.source.BingMaps({
                  culture: navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage),
                  key: baseLayerConfig.apiKey,
                  imagerySet: baseLayerConfig.style
                })
              });
            } else {
              console.warn('wrong bing-key or invalid imagery-set!');
            }
            break;
          case 'wms':
            newBaselayer = new ol.layer.Tile({
              source: new ol.source.TileWMS({
                url: baseLayerConfig.url,
                params: {
                  LAYERS: baseLayerConfig.params.layers,
                  VERSION: baseLayerConfig.params.version,
                  //FORMAT: baseLayerConfig.params.format,
                  TRANSPARENT: baseLayerConfig.params.transparent
                },
                gutter: baseLayerConfig.gutter,
                attributions: [
                  new ol.Attribution({
                    html: baseLayerConfig.attribution
                  }),
                  ol.source.OSM.ATTRIBUTION
                ]
              }),
              //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
            });
            break;
          case 'owm':
            newBaselayer = new ol.layer.Tile({
              source: new ol.source.XYZ({
                url: baseLayerConfig.url + baseLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + baseLayerConfig.api_key,
                attributions: [
                  new ol.Attribution({
                    html: baseLayerConfig.attribution
                  }),
                  ol.source.OSM.ATTRIBUTION
                ]

              }),
              //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
            });
            break;

          default:
            console.warn('unsupported provider');
            break;
        }

        if (baseLayerConfig.hasOverlays) {
          baseLayerMap = newBaselayer;
          layersWithOverlay = [];
          layersWithOverlay.push(baseLayerMap);

          for (i = 0; i < baseLayerConfig.overlays.length; i += 1) {
            overlayLayerConfig = baseLayerConfig.overlays[i];
            layerOptions = {};
            overlayLayer = new ol.layer.Tile({
              source: new ol.source.OSM()
            });

            switch (overlayLayerConfig.provider) {
              case 'osm':
                if (osmSourceConfigs[overlayLayerConfig.style]) {
                  overlayLayer = new ol.layer.Tile({
                    source: new ol.source.OSM(
                        $.extend(
                            osmSourceConfigs[overlayLayerConfig.style],
                            layerOptions
                        )
                    )
                  });
                } else if (stamenSourceConfigs[overlayLayerConfig.style]) {
                  // Stamen
                  overlayLayer = new ol.layer.Tile({
                    source: new ol.source.Stamen(
                        $.extend(
                            stamenSourceConfigs[overlayLayerConfig.style],
                            layerOptions
                        )
                    )
                  });
                // } else if (mapQuestSourceConfigs[overlayLayerConfig.style]) {
                //   // mapQuest
                //   overlayLayer = new ol.layer.Tile({
                //     source: new ol.source.MapQuest(mapQuestSourceConfigs[overlayLayerConfig.style])
                //   });
                } else if (overlayLayerConfig.style === 'osm_custom') {
                  // custom
                  noUrl = true;
                  if (overlayLayerConfig.attribution) {
                    layerOptions.attributions = [
                      new ol.Attribution({
                        html: overlayLayerConfig.attribution
                      }),
                      ol.source.OSM.ATTRIBUTION
                    ]
                  }

                  if (overlayLayerConfig.url) {
                    layerOptions.url = overlayLayerConfig.url;
                    noUrl = false;
                  } else if (overlayLayerConfig.urls) {
                    layerOptions.urls = overlayLayerConfig.urls;
                    noUrl = false;
                  }
                  if (!noUrl) {
                    overlayLayer = new ol.layer.Tile({
                      source: new ol.source.XYZ(layerOptions)
                    });
                  } else {
                    console.warn('custom url(s) missing -> switch to default');
                  }
                } else {
                  console.warn('unsupported osm-style -> switch to default');
                }
                break;
              case 'google':
                //@todo
                console.warn('google-maps are currently unsupported');
                break;
              case 'bing':
                if (baseLayerConfig.apiKey && overlayLayerConfig.style) {
                  overlayLayer = new ol.layer.Tile({
                    source: new ol.source.BingMaps({
                      culture: navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage),
                      key: overlayLayerConfig.apiKey,
                      imagerySet: overlayLayerConfig.style
                    })
                  });
                } else {
                  console.warn('wrong bing-key or invalid imagery-set!');
                }
                break;
              case 'wms':
                overlayLayer = new ol.layer.Tile({
                  source: new ol.source.TileWMS({
                    url: overlayLayerConfig.url,
                    params: {
                      LAYERS: overlayLayerConfig.params.layers,
                      VERSION: overlayLayerConfig.params.version,
                      //FORMAT: overlayLayerConfig.params.format,
                      TRANSPARENT: overlayLayerConfig.params.transparent
                    },
                    gutter: overlayLayerConfig.gutter,
                    attributions: [
                      new ol.Attribution({
                        html: overlayLayerConfig.attribution
                      }),
                      ol.source.OSM.ATTRIBUTION
                    ]
                  }),
                  //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
                });
                break;
              case 'owm':
                overlayLayer = new ol.layer.Tile({
                  source: new ol.source.XYZ({
                    url: overlayLayerConfig.url + overlayLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + overlayLayerConfig.api_key,
                    attributions: [
                      new ol.Attribution({
                        html: overlayLayerConfig.attribution
                      }),
                      ol.source.OSM.ATTRIBUTION
                    ]

                  }),
                  //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
                });
                break;
              default:
                console.warn('unsupported provider');
                break;
            }

            layersWithOverlay.push(overlayLayer);
          }

          newBaselayer = new ol.layer.Group({
            layers: layersWithOverlay
          });
        }

        c4g.maps.baselayers[baseLayerUid].layer = newBaselayer;
      }

      layers = this.options.mapController.map.getLayers();

      // secure
      if (layers.item(0).get('checkSum') === "baseMapsLayer") {
        baseLayers = layers.item(0).getLayers();

        if (typeof c4g.maps.baselayers[baseLayerUid] !== "undefined") {
          baselayer = c4g.maps.baselayers[baseLayerUid].layer;

          addBaselayer = true;
          baseLayers.forEach(function (element, index, array) {
            if (element === baselayer) {
              element.setVisible(true);
              addBaselayer = false;
            } else {
              element.setVisible(false);
            }
          }, this);

          if (addBaselayer) {
            baseLayers.push(baselayer);
          }
          view = this.options.mapController.map.getView();
          var zoom = view.getZoom();
          var center = view.getCenter();
          if ((baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0) ||
              (baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0)) {
            if (baseLayerConfig.minZoom && (view.getZoom() < baseLayerConfig.minZoom)) {
              view.setZoom(baseLayerConfig.minZoom);
            } else if (baseLayerConfig.maxZoom && (view.getZoom() > baseLayerConfig.maxZoom)) {
              view.setZoom(baseLayerConfig.maxZoom);
            }

            var mapData = this.options.mapController.data;
            if (mapData.zoomlevel || mapData.mouseposition) {
              var controlContainerTopLeft = document.createElement('div');
              controlContainerTopLeft.className = c4g.maps.constant.css.CONTROL_CONTAINER_TL + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;
              this.options.mapController.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);

              var controlContainerBottomLeft = document.createElement('div');
              controlContainerBottomLeft.className = c4g.maps.constant.css.CONTROL_CONTAINER_BL + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;
              $(controlContainerTopLeft).after(controlContainerBottomLeft);
              this.options.mapController.leftSlideElements.push(controlContainerBottomLeft);

              var controlContainerBottomLeftSub = document.createElement('div');
              controlContainerBottomLeftSub.className = c4g.maps.constant.css.CONTROL_CONTAINER_BL_SUB + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE;

              var newView = new ol.View({
                center: center,
                projection: view.getProjection(),
                zoom: zoom,
                minZoom: parseInt(baseLayerConfig.minZoom, 10) || 0,
                maxZoom: parseInt(baseLayerConfig.maxZoom, 10) || 19,
                rotation: view.getRotation(),
                resolution: view.getResolution(),
              });

              this.options.mapController.map.setView(newView);
              c4g.maps.utils.redrawMapView(this.options.mapController);

              // if (mapData.scaleline) {
              //   this.options.mapController.map.removeControl(this.options.mapController.controls.scaleline);
              //   this.options.mapController.controls.scaleline = new ol.control.ScaleLine({
              //     mapView: this.options.mapController.map.getView(),
              //     target: controlContainerBottomLeft,
              //     undefinedHTML: 'N/A'
              //   });
              //   this.options.mapController.map.addControl(this.options.mapController.controls.scaleline);
              // }
              //
              // $(controlContainerBottomLeft).append(controlContainerBottomLeftSub);
              //
              // if (mapData.zoomlevel) {
              //   this.options.mapController.map.removeControl(this.options.mapController.controls.zoomlevel);
              //   this.options.mapController.controls.zoomlevel = new c4g.maps.control.Zoomlevel({
              //     mapView: this.options.mapController.map.getView(),
              //     target: controlContainerBottomLeftSub,
              //     undefinedHTML: 'N/A'
              //   });
              //   this.options.mapController.map.addControl(this.options.mapController.controls.zoomlevel);
              // }
              //
              // if (mapData.mouseposition) {
              //   this.options.mapController.map.removeControl(this.options.mapController.controls.mouseposition);
              //   this.options.mapController.controls.mouseposition = new ol.control.MousePosition({
              //     projection: 'EPSG:4326',
              //     coordinateFormat: ol.coordinate.toStringHDMS,
              //     target: controlContainerBottomLeftSub,
              //     undefinedHTML: 'N/A'
              //   });
              //   this.options.mapController.map.addControl(this.options.mapController.controls.mouseposition);
              // }
            }

          }
        }
      }

      if (typeof baseLayerConfig !== "undefined") {
        this.activeBaselayerId = baseLayerConfig.id;

        c4g.maps.utils.callHookFunctions(this.hook_baselayer_visibility, baseLayerConfig);
      }
    }, // end of "showBaseLayer()"

    loadLayers: function () {
      var self;

      self = this;
      if (this.mapId === 0) {
        return false;
      }

      $.ajax({
	      dataType: self.options.mapController.data.jsonp ? "jsonp" : "json",
	      url: self.api_layer_url
	    })

      .done(function (data) {
        self.addLayers(data.layer, data.foreignLayers);
        self.layers_loaded = true;
        c4g.maps.utils.callHookFunctions(self.hook_layer_loaded, self.layerIds);
        c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_layer_loaded, {layerIds: self.layerIds, proxy: self});
        self.checkLocationStyles({
          success: function () {
            self.drawLayerInitial();
          }
        });
        return true;
      })
      .fail(function () {
        // @TODO: error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the layers...');
        return false;
      })
      .always(function () {
        // self.starboard.spinner.hide();
      });

    }, // end of "loadLayer()"

    // @TODO: may needs a rewrite
    loadLayerContent: function (itemUid) {

      var self = this,
          i,
          layers,
          features,
          featureProjection,
          dataProjection,
          layerGroup,
          contentData,
          requestData,
          requestContentData,
          requestVectorSource,
          vectorLayer,
          vectorSource,
          vectorStyle,
          clusterSource,
          styleForCluster,
          refreshInterval,
          refreshAjaxVars,
          fnAttachDataToLayer;

      refreshAjaxVars = {};

      fnAttachDataToLayer = function (layer, data) {
        data.properties = data.properties || {};

        layer.popup = data.popup || data.properties.popup || false;
        layer.tooltip = data.tooltip || data.properties.tooltip || false;
        layer.label = data.label || data.properties.label || false;
        layer.zoom_onclick = data.zoom_onclick || data.properties.zoom_onclick || false;
      };

      if (c4g.maps.layers[itemUid].content) {
        layers = [];

      for (i = 0; i < c4g.maps.layers[itemUid].content.length; i += 1) {
          contentData = c4g.maps.layers[itemUid].content[i];
          styleForCluster = function (feature, resolution) {

            var size,
                style,
                fFeatures,
                iconOffset,
                radius,
                k,
                fillcolor,
                fontcolor;

            if (contentData && contentData.locationStyle && c4g.maps.locationStyles[contentData.locationStyle]) {
              style = c4g.maps.locationStyles[contentData.locationStyle].style(feature, resolution);

              if (!style) {
                style = [];
                self.fittingExtends[itemUid] = vectorSource.getExtent();
              }

              if (feature !== undefined && feature !== null && feature.self !== window) {
                if(feature.get('features')){
                    fFeatures = feature.get('features');
                }
                else{
                    fFeatures = [];
                    fFeatures[0] = feature;
                }
                size = fFeatures.length;
                if (size > 1) {
                  if (fFeatures[0].getStyle() && size < 1000) { // limit for performance
                    style[0] = fFeatures[0].getStyle()[0];
                    for (k = 0; k < fFeatures.length; k += 1) {
                      if (!fFeatures[k].getStyle()) {
                        style = c4g.maps.locationStyles[contentData.locationStyle].style(fFeatures[0], resolution);
                        break;
                      }
                    }
                  } else {
                    style = c4g.maps.locationStyles[contentData.locationStyle].style(fFeatures[0], resolution);
                  }
                  if (!style) {
                    style = [];
                  }

                  // calculate bubble-offset
                  iconOffset = [0, 0];
                  if (style[0]) {
                    if (typeof style[0].getImage().getRadius === "function") {
                      radius = parseInt(style[0].getImage().getRadius(), 10);
                      if (radius) {
                        iconOffset = [0, radius];
                      }
                    } else if (typeof style[0].getImage().getAnchor === "function") {
                      iconOffset = style[0].getImage().getAnchor() || [0, 0];
                    }
                  }

                  fillcolor = c4g.maps.utils.getRgbaFromHexAndOpacity('4975A8',{
                      unit: '%',
                      value: 70
                  });

                  if (contentData.cluster_fillcolor) {
                    fillcolor = c4g.maps.utils.getRgbaFromHexAndOpacity(contentData.cluster_fillcolor,{
                        unit: '%',
                        value: 70
                    });
                  }
                  fontcolor = '#FFFFFF';

                  style.push(
                      new ol.style.Style({
                        text: new ol.style.Text({
                          text: "●",
                          font: "60px sans-serif",
                          offsetX: -1 * iconOffset[0],
                          offsetY: -1 * iconOffset[1],
                          fill: new ol.style.Fill({
                            color: fillcolor
                          })
                        })
                      })
                  );
                  style.push(
                      new ol.style.Style({
                        text: new ol.style.Text({
                          text: size.toString(),
                          offsetX: -1 * iconOffset[0],
                          offsetY: -1 * iconOffset[1] + 3,
                          fill: new ol.style.Fill({
                            color: fontcolor
                          })
                        })
                      })
                  );
                } else if (size === 1 && fFeatures[0].getStyle()) {
                  return fFeatures[0].getStyle();
                }
              }

            }
            return style;
          }; // end of styleForCluster()

          if (contentData && (contentData.type === "urlData")) {

            requestData = {};
            requestData.url = contentData.data.url;
            if (contentData.data.params) {
              requestData.params = decodeURIComponent(contentData.data.params);
            }

            if (contentData.settings.boundingBox) {
              requestContentData = contentData;
              requestVectorSource = new ol.source.Vector({
                loader: function (extent, resolution, projection) {
                  var boundingArray,
                      strBoundingBox,
                      url;

                  boundingArray = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
                  strBoundingBox = '<bbox-query s="' + boundingArray[1] + '" n="' + boundingArray[3] + '" w="' + boundingArray[0] + '" e="' + boundingArray[2] + '"/>';
                  url = requestData.url;

                  if (requestData.params) {
                    url += '?data=' + encodeURIComponent(requestData.params.replace(/\(bbox\)/g, strBoundingBox));
                  }

                  if (c4g.maps.requests === undefined) {
                    c4g.maps.requests = {};
                  }
                  if (c4g.maps.requests['layerRequest' + itemUid] !== undefined) {
                    c4g.maps.requests['layerRequest' + itemUid].abort();
                  }

                  c4g.maps.requests['layerRequest' + itemUid] = jQuery.ajax({
                    url: url
                  }).done(function (response) {
                    var j,
                        format,
                        centerPoint,
                        rFeatures,
                        osmNodes,
                        osmNds,
                        nodeIdx,
                        ndIdx,
                        infoNodes,
                        newTag,
                        ref,
                        lineExtent;

                    delete c4g.maps.requests['layerRequest' + itemUid];

                    // preprocessing the osm_xml to find relation-nodes with information
                    if (response && response.children && response.children[0]) {
                      // 1) find nodes with data
                      osmNodes = response.children[0].getElementsByTagName('node');
                      if (osmNodes) {
                        infoNodes = {};
                        for (nodeIdx in osmNodes) {
                          if (osmNodes.hasOwnProperty(nodeIdx) && osmNodes[nodeIdx] && osmNodes[nodeIdx].children && osmNodes[nodeIdx].children.length > 0) {
                            infoNodes[osmNodes[nodeIdx].getAttribute('id')] = osmNodes[nodeIdx];
                            // infoNodes[osmNodes[nodeIdx].getAttribute('id')] = nodeIdx;
                          }
                        }
                      }

                      // 2) check and handle relations
                      osmNds = response.children[0].getElementsByTagName('nd');
                      if (osmNds) {
                        for (ndIdx in osmNds) {
                          if (ndIdx) {
                            if (osmNds.hasOwnProperty(ndIdx) && osmNds[ndIdx]) {
                              try {

                                ref = osmNds[ndIdx].getAttribute('ref');
                                if (infoNodes && ref && infoNodes[ref]) {
                                  if (requestContentData && requestContentData.settings) {
                                    if (requestContentData.settings.showAdditionalGeometries) {
                                      // mark as additional information
                                      if (response) {
                                        newTag = response.createElement('tag');
                                        if (newTag && osmNds[ndIdx].parentElement && osmNds[ndIdx].parentElement.getAttribute('id')) {
                                          newTag.setAttribute('k', 'c4g_osm_ref');
                                          newTag.setAttribute('v', osmNds[ndIdx].parentElement.getAttribute('id'));
                                          infoNodes[ref].appendChild(newTag);
                                        }
                                      }
                                    } else {
                                      // remove additional information
                                      infoNodes[ref].innerHTML = '';
                                    }
                                  }
                                }
                              } catch (e) {
                                console.warn('Could not check and handle relations.');
                              }
                            }
                          }
                        }
                      }
                    }
                    // import osm_xml
                    format = new ol.format.OSMXML();
                    if (format && response) {
                      try {
                        rFeatures = format.readFeatures(response, {featureProjection: projection});
                      } catch (e) {
                        console.warn('Can not read feature.');
                        //console.log(e.stack);
                      }
                    }

                    // postprocessing features
                    if (rFeatures && rFeatures.length > 0) {
                      for (j = 0; j < rFeatures.length; j += 1) {

                        if (rFeatures[j].getGeometry().getType() === "Point") {
                          rFeatures[j].set('osm_type', 'node');
                        } else {
                          rFeatures[j].set('osm_type', 'way');
                        }
                        rFeatures[j].set('c4g_type', 'osm');
                        rFeatures[j].set('cluster_zoom', contentData.cluster_zoom);
                        rFeatures[j].set('loc_linkurl', contentData.loc_linkurl);
                        rFeatures[j].set('hover_location', contentData.hover_location);
                        rFeatures[j].set('hover_style', contentData.hover_style);
                        rFeatures[j].set('zoom_onclick', contentData.data.zoom_onclick);
                        rFeatures[j].set('label', contentData.data.label);

                        if (requestContentData.settings.forceNodes) {
                          // convert tracks and areas to points
                          if (rFeatures[j].getGeometry().getType() === "Polygon") {
                            centerPoint = rFeatures[j].getGeometry().getInteriorPoint().getCoordinates();
                            rFeatures[j].setGeometry(
                                new ol.geom.Point(centerPoint)
                            );
                          } else if (rFeatures[j].getGeometry().getType() === "LineString") {
                            // @TODO: prüfen ob dies korrekter mittelpunkt ist
                            lineExtent = rFeatures[j].getGeometry().getExtent();
                            centerPoint = ol.extent.getCenter(lineExtent);
                            rFeatures[j].setGeometry(
                                new ol.geom.Point(centerPoint)
                            );
                          }
                        }
                        if (rFeatures[j].get('c4g_osm_ref')) {
                          // if (requestContentData.settings.showAdditionalGeometries) {
                          if (requestContentData.settings.additionalStyle) {
                            // @TODO: load and attach style
                          } else {
                            rFeatures[j].setStyle(c4g.maps.utils.reduceStyle(requestContentData.locationStyle));
                          }
                          // } else {
                          //   continue;
                          // }
                        }
                      }
                      try {
                        requestVectorSource.addFeatures(rFeatures);
                      } catch (e) {
                        console.warn('Could not add features to source. The "forceNodes"-option should be used.');
                      }
                    }
                    self.combineLayers(self);
                  }); // end of AJAX

                },
                strategy: ol.loadingstrategy.bbox
              });

              vectorSource = requestVectorSource;
            } else {

              if (typeof ol.format[contentData.format] === "function") {

                //StaticVector
                vectorSource = new ol.source.Vector({
                  format: new ol.format[contentData.format](),
                  url: requestData.url,
                  projection: 'EPSG:3857',
                  strategy: ol.loadingstrategy.all
                });

                if (contentData.settings && contentData.settings.refresh === true) {
                  if (c4g.maps.requests === undefined) {
                    c4g.maps.requests = {};
                  }

                  refreshInterval = (typeof contentData.settings.interval === 'number') ? contentData.settings.interval : 10000;
                  /* do it with better ajax-handling
                   c4g.maps.requests['layerRequest' + itemUid] = window.setInterval(function () {
                   vectorSource.clear();
                   }, refreshInterval);
                   */

                  // Anfang Einschub neue AJAX-Layer
                  refreshAjaxVars.blnHasPositionIds = false;
                  refreshAjaxVars.arrPositionIds = [];
                  refreshAjaxVars.objFeatures = {};

                  vectorSource.set('refreshInterval', refreshInterval);

                  vectorSource.set('refreshFunction', function () {

                    if (!vectorSource.get('hasIds')) {
                      vectorSource.forEachFeature(function (feature) {
                        if (feature.get('positionId')) {
                          refreshAjaxVars.blnHasPositionIds = true;
                          refreshAjaxVars.arrPositionIds.push(feature.get('positionId'));
                          refreshAjaxVars.objFeatures[feature.get('positionId')] = feature;
                        }
                      });
                      if (refreshAjaxVars.blnHasPositionIds) {
                        vectorSource.set('hasIds', true);
                      }
                    }

                    $.ajax({
                      url: requestData.url,
                      success: function (data) {

                        if (data.features) {

                          refreshAjaxVars.arrNewPositionIds = [];
                          refreshAjaxVars.objNewFeatures = {};

                          $.each(data.features, function (index, featureData) {
                            if (featureData.type && featureData.type == "Feature") {
                              refreshAjaxVars.feature = (new ol.format[contentData.format]()).readFeature(featureData, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                              });
                              refreshAjaxVars.feature.set('cluster_zoom', contentData.cluster_zoom);
                              refreshAjaxVars.feature.set('loc_linkurl', contentData.loc_linkurl);
                              refreshAjaxVars.feature.set('hover_location', contentData.hover_location);
                              refreshAjaxVars.feature.set('hover_style', contentData.hover_style);
                              if (refreshAjaxVars.feature.get('positionId')) {
                                refreshAjaxVars.arrNewPositionIds.push(refreshAjaxVars.feature.get('positionId'));
                                refreshAjaxVars.objNewFeatures[refreshAjaxVars.feature.get('positionId')] = refreshAjaxVars.feature;
                              }
                            }
                          });

                          $.each(refreshAjaxVars.arrPositionIds, function (index, positionId) {
                            if (refreshAjaxVars.arrNewPositionIds.indexOf(positionId) == -1) {
                              // positions id in neuer antwort nicht mehr enthalten -> lösche feature
                              if (typeof refreshAjaxVars.objFeatures[positionId] !== "undefined") {
                                vectorSource.removeFeature(refreshAjaxVars.objFeatures[positionId]);
                                delete(refreshAjaxVars.arrPositionIds[index]);
                              }
                            }
                          });

                          $.each(refreshAjaxVars.arrNewPositionIds, function (index, positionId) {
                            if (refreshAjaxVars.arrPositionIds.indexOf(positionId) == -1) {
                              // positions id ist noch nicht vorhanden -> neues feature
                              refreshAjaxVars.arrPositionIds.push(positionId);
                              refreshAjaxVars.objFeatures[positionId] = refreshAjaxVars.objNewFeatures[positionId];
                              vectorSource.addFeature(refreshAjaxVars.objNewFeatures[positionId]);
                            }
                          });
                        }

                      }
                    });


                  });

                  self.requestFunctions['request_' + itemUid] = {
                    'function': vectorSource.get('refreshFunction'),
                    'interval': refreshInterval
                  };


                  // Ende Einschub neue AJAX-Layer

                }

              } else {
                console.warn('Format type ' + contentData.format + ' in ol.format not found.');
              }
            }

            if (contentData.settings.cluster) {

              clusterSource = new ol.source.Cluster({
                distance: 40,
                //threshold: 2, //minimum element count
                source: vectorSource,
                zoom: contentData.cluster_zoom
              });
              //console.log(clusterSource);
                this.styleForCluster = styleForCluster;

               //vectorLayer = self.getVectorLayer(clusterSource, styleForCluster);
              vectorLayer = new ol.layer.AnimatedCluster(
                  {	name: 'Cluster',
                      source: clusterSource,
                      // Use a style function for cluster symbolisation
                      style: styleForCluster
                  });


            } else {
              vectorLayer = self.getVectorLayer(vectorSource, c4g.maps.locationStyles[contentData.locationStyle] ? c4g.maps.locationStyles[contentData.locationStyle].style : null);
            }

            /* Fit to extend */
            if (contentData.settings && contentData.settings.fitToExtend) {

              self.fittingExtends = self.fittingExtends || {};

              vectorSource.on('change', function () {

                // check currently stored id's
                for (i in self.fittingExtends) {
                  if (self.fittingExtends.hasOwnProperty(i)) {
                    if (typeof self.activeLayerIds[i] === "undefined" || self.activeLayerIds[0] == "invisible") {
                      delete self.fittingExtends[i];
                    }
                  }
                }

                self.fittingExtends[itemUid] = vectorSource.getExtent();//vectorSource.getFeatures();
                c4g.maps.utils.fitToExtents(self.fittingExtends, self.options.mapController.map);
              });

            }
            // end of fit to extend

            fnAttachDataToLayer(vectorLayer, contentData.data);
            layers.push(vectorLayer);
          } else if ((c4g.maps.layers[itemUid].type === "table") || (c4g.maps.layers[itemUid].type === "link")) {
            var layerContent = c4g.maps.layers[itemUid].content;
            contentData = layerContent[0];
            var contentFeatures = [];
            if (contentData && contentData.data.properties && contentData.data.properties.projection) {
              dataProjection = contentData.data.properties.projection;
              featureProjection = this.options.mapController.map.getView().getProjection();
            } else {
              dataProjection = undefined;
            }

            // force all nodes into one layer
            for (var key = 0; key < layerContent.length; key++) {
              var contentFeature = new ol.format[layerContent[key].format]({}).readFeatures(layerContent[key].data, {
                featureProjection: featureProjection,
                dataProjection: dataProjection
              })[0];
              contentFeature.set('cluster_zoom', contentData.cluster_zoom);
              contentFeature.set('loc_linkurl', contentData.loc_linkurl);
              contentFeature.set('hover_location', contentData.hover_location);
              contentFeature.set('hover_style', contentData.hover_style);
              contentFeature.set('popup', layerContent[key].data.properties.popup);
              contentFeature.set('zoom_onclick', contentData.zoom_onclick);
              contentFeatures.push(contentFeature);
            }

            if(i+1 === c4g.maps.layers[itemUid].content.length){
                vectorSource = new ol.source.Vector({
                  features: contentFeatures,
                  projection: 'EPSG:3857',
                  format: new ol.format.GeoJSON(),

                });
                if (contentData && contentData.settings && contentData.settings.cluster) {
                  clusterSource = new ol.source.Cluster({
                    distance: 40,
                    zoom: contentData.cluster_zoom,

                      //threshold: 2, //minimum element count
                    source: vectorSource
                  });
                  //vectorLayer = self.getVectorLayer(clusterSource, styleForCluster);
                    vectorLayer = new ol.layer.AnimatedCluster(
                        {	name: 'Cluster',
                            source: clusterSource,
                            // Use a style function for cluster symbolisation
                            style: styleForCluster
                        });

                } else {
                  vectorLayer = self.getVectorLayer(vectorSource, contentData && c4g.maps.locationStyles[contentData.locationStyle] ? c4g.maps.locationStyles[contentData.locationStyle].style : null);
                }
                layers.push(vectorLayer);
            }
            //return;
          } else {
            if (c4g.maps.layers[itemUid].content.length > 1) {
              //TODO: refactoren und kürzen!
              // we have overpass request with reassigned forum layers
              // forum layers can not be drawn via the normal drawLayer, because they do not have a Uid
              if (contentData && (typeof ol.format[contentData.format] === "function")) {
                if (contentData.data.properties && contentData.data.properties.projection) {
                  dataProjection = contentData.data.properties.projection;
                  featureProjection = this.options.mapController.map.getView().getProjection();
                } else {
                  dataProjection = undefined;
                }

                features = (new ol.format[contentData.format]({})).readFeatures(contentData.data, {
                  featureProjection: featureProjection,
                  dataProjection: dataProjection
                });

                var missingStyles = [];
                var unstyledFeatures = [];
                for (var j = 0; j < features.length; j += 1) {
                  if (features[j].get('styleId')) {
                    if (c4g.maps.locationStyles[features[j].get('styleId')] && c4g.maps.locationStyles[features[j].get('styleId')].style) {
                      features[j].setStyle(c4g.maps.locationStyles[features[j].get('styleId')].style);
                    } else {
                      missingStyles.push(features[j].get('styleId'));
                      unstyledFeatures.push(features[j]);
                    }
                  }
                }

                vectorStyle = c4g.maps.locationStyles[contentData.locationStyle] && c4g.maps.locationStyles[contentData.locationStyle].style;

                if (missingStyles.length > 0) {
                  //TODO there are unstyled features because some styles were not loaded
                } else {
                  vectorSource = new ol.source.Vector({
                    features: features,
                    projection: 'EPSG:3857',
                    format: new ol.format.GeoJSON()
                  });
                    clusterSource = new ol.source.Cluster({
                        distance: 40,
                        zoom: contentData.cluster_zoom,

                        //threshold: 2, //minimum element count
                        source: vectorSource
                    });//zu bearbeiten
                  vectorLayer = this.getVectorLayer(clusterSource, vectorStyle);
                  if (contentData.data && contentData.data.properties) {
                    if (contentData.data.properties.popup) {
                      vectorLayer.popup = contentData.data.properties.popup;
                    }
                    if (contentData.data.properties.tooltip) {
                      vectorLayer.tooltip = contentData.data.properties.tooltip;
                    }
                    if (contentData.data.properties.label) {
                      vectorLayer.label = contentData.data.properties.label;
                    }
                    if (contentData.data.properties.onclick_zoom) {
                      vectorLayer.onclick_zoom = contentData.data.properties.onclick_zoom;
                    }
                  }
                  layers.push(vectorLayer);
                }

              } else {
                if (contentData) {
                  console.warn('Format type ' + contentData.format + ' in ol.format not found.');
                } else {
                  //no contentData, maybe a link
                }
              }
            } else {
              // normal, not overpass layer
              self.drawLayer(itemUid);
              return;
            }
          }
        }

        // add vector layer group
        layerGroup = new ol.layer.Group({
          layers: layers
        });

        c4g.maps.layers[itemUid].vectorLayer = layerGroup;
        self.options.mapController.map.addLayer(layerGroup);
        self.combine(self);

      } else {
        self.options.mapController.spinner.show();
        jQuery.ajax({
          dataType: self.options.mapController.data.jsonp ? "jsonp" : "json",
          url: self.api_layercontent_url + '/' + c4g.maps.layers[itemUid].id,
          success: function (data) {
            var j,
                newLocationStyles;

            if (data.length > 0) {
              newLocationStyles = [];

              for (j = 0; j < data.length; j += 1) {

                c4g.maps.layers[itemUid].content = c4g.maps.layers[itemUid].content || [];

                c4g.maps.layers[itemUid].content.push(data[j]);
                newLocationStyles.push(data[j].locationStyle);

              }

              self.checkLocationStyles({
                success: function () {
                  // @TODO: check this!
                  self.loadLayerContent(itemUid);
                }
              });

            }
          },
          complete: function () {
            self.options.mapController.spinner.hide();
          }
        });
      }
    }, // end of "loadLayerContent()"
    combineLayers: function(proxy){

        var i,
            j,
            k,
            layerId,
            layers,
            contentDataLayer,
            contentData,
            layer,
            layerGroups =[],
            source,
            style,
            features=[],
            styles=[],
            oneFeature,
            feature,
            vectorSource,
            clusterSource,
            vectorLayer;


        if(proxy.options.mapController.data.cluster_all === '1'){
            contentData = proxy.options.mapController.data;
            for( i in proxy.activeLayerIds) {//loop to get all layers
                layers = c4g.maps.layers[i];

                if(layers.type === "gpx"){
                    continue
                }

                if(layers && layers.vectorLayer ){
                    if(layers.vectorLayer.getLayers() && layers.vectorLayer.getLayers().getArray()[0] && layers.vectorLayer.getLayers().getArray()[0].getSource() && layers.vectorLayer.getLayers().getArray()[0].getSource().getFeatures().length > 0){
                        proxy.options.mapController.map.removeLayer(layers.vectorLayer);
                    }

                    contentDataLayer = layers.content;
                    layers.vectorLayer.getLayers().content = contentDataLayer;
                    layerGroups.push(layers.vectorLayer.getLayers());


                }
            }
            for(k =0; k<layerGroups.length;k++){//loop to extract features from layers
                if(layerGroups[k].getArray().length>0){
                    layer = layerGroups[k].getArray();
                    source = layer["0"].getSource();
                    style = layer["0"].getStyle();

                    oneFeature = true;
                    feature = source.getFeatures();
                    for(j = 0; j < feature.length; j ++){//loop over all features from a source
                        if(feature[j].get("features")){
                            for(i = 0; i < feature[j].get("features").length; i++){//loop for clustered features
                                if(layerGroups[k].content[j]){
                                    style = c4g.maps.locationStyles[layerGroups[k].content[j].locationStyle];
                                }
                                else if(layerGroups[k].content[0]){
                                    style = c4g.maps.locationStyles[layerGroups[k].content[0].locationStyle];
                                }

                                feature[j].get("features")[i].setStyle(style.style);
                                if(!feature[j].get("features")[i].get('popup')){
                                    feature[j].get("features")[i].set('popup',layer['0'].popup);
                                }

                            }
                            features.push(feature[j].get("features"));

                            oneFeature = false;
                        }

                    }
                    if(oneFeature){//single not clustered feature
                        if(feature.length >= 1){
                            if(!feature['0'].get('popup')){
                                feature['0'].set('popup',layer.popup)
                            }
                            features.push(feature);
                        }
                    }
                }
            }

            vectorSource = new ol.source.Vector({
                projection: 'EPSG:3857'

            });

            for(i = 0; i < features.length; i ++){
                vectorSource.addFeatures(features[i]);
            }

            clusterSource = new ol.source.Cluster({
                distance: 40,
                //threshold: 2, //minimum element count
                source: vectorSource
            });
            var styleForCluster = function(feature, resolution){
                if(feature && feature.get('features') && feature.get('features')['0'].getStyle()){
                    style = feature.get('features')['0'].getStyle()(feature);
                        if (feature !== undefined && feature !== null && feature.self !== window) {
                            var fFeatures = feature.get('features');
                            var size = fFeatures.length;
                            if (size > 1) {
                                if (!style) {
                                    style = [];
                                }

                                // calculate bubble-offset
                                var iconOffset = [0, 0];
                                if (style[0]) {
                                    if (typeof style[0].getImage().getRadius === "function") {
                                        var radius = parseInt(style[0].getImage().getRadius(), 10);
                                        if (radius) {
                                            iconOffset = [0, radius];
                                        }
                                    } else if (typeof style[0].getImage().getAnchor === "function") {
                                        iconOffset = style[0].getImage().getAnchor() || [0, 0];
                                    }
                                }

                                var fillcolor = c4g.maps.utils.getRgbaFromHexAndOpacity('4975A8',{
                                    unit: '%',
                                    value: 70
                                });

                                if (contentData.cluster_fillcolor) {
                                    fillcolor = c4g.maps.utils.getRgbaFromHexAndOpacity(contentData.cluster_fillcolor,{
                                        unit: '%',
                                        value: 70
                                    });
                                }
                                var fontcolor = contentData.cluster_fontcolor ? '#' + contentData.cluster_fontcolor : '#FFFFFF';

                                style.push(
                                    new ol.style.Style({
                                        text: new ol.style.Text({
                                            text: "●",
                                            font: "60px sans-serif",
                                            offsetX: -1 * iconOffset[0],
                                            offsetY: -1 * iconOffset[1],
                                            fill: new ol.style.Fill({
                                                color: fillcolor
                                            })
                                        })
                                    })
                                );
                                style.push(
                                    new ol.style.Style({
                                        text: new ol.style.Text({
                                            text: size.toString(),
                                            offsetX: -1 * iconOffset[0],
                                            offsetY: -1 * iconOffset[1] + 3,
                                            fill: new ol.style.Fill({
                                                color: fontcolor
                                            })
                                        })
                                    })
                                );
                            }
                        }

                }

                else{
                    if(feature && feature.get('features') && feature.get('features')['0'].getStyle()){
                        return feature.get('features')['0'].getStyle()(feature);
                    }
                    else{
                        return null;
                    }
                }
                return style;
            };

            vectorLayer = new ol.layer.AnimatedCluster({
                name: 'Cluster',
                source: clusterSource,
                style: styleForCluster

            });
            var allLayers = proxy.options.mapController.map.getLayers().getArray();
            var missingLayer = true
            for(i = 0; i < allLayers.length; i++){

                if(allLayers[i].clusters) {
                    allLayers[i] = vectorLayer;
                    missingLayer = false
                }
            }
            if(missingLayer){
                proxy.options.mapController.map.addLayer(vectorLayer);
            }
        }



      },//end of combineLayers

    addLayers: function (layers, foreignLayers) {
      var i,
          j,
          k,
          p,
          self,
          isVisible,
          layer,
          storedItem,
          linkItems,
          uid,
          currentZoom,
          fnHandleAndAppendLayerChilds,
          endlessLoopId,
          parentId,
          parentIds,
          permalinkedLayers,
          child,
          fnHandleChilds,
          key,
          starboard,
          fnAddToHook;

      self = this;
      isVisible = false;

      c4g.maps.layers = c4g.maps.layers || {};

      permalinkedLayers = this.options.mapController.data.layers || [];

      fnHandleAndAppendLayerChilds = function (objItem) {
        var toggle,
            entryWrapper;

        if (objItem.hasChilds) {
          objItem.visibleChilds = self.addLayers(objItem.childs, foreignLayers);
        }
      }; // end of "fnHandleAndAppendLayerChilds()"

      // wrapper function to avoid closure accessibility
      fnAddToHook = function(layer) {
        var layername, layerid, layericon;

        if (layer.childs && layer.childs.length > 0) {
          layername = layer.name;
          layerid = layer.tabId;
          layericon = layer.awesomeicon;
          c4g.maps.starboardTabs = c4g.maps.starboardTabs || {};
          starboard = self.options.mapController.controls.starboard;
          starboard.hook_layerswitcher_loaded.push(function(){
            c4g.maps.starboardTabs[layerid] = new c4g.maps.control.starboardplugin.Customtab(starboard, {
              name: layername,
              tabId: layerid,
              awesomeicon: layericon
            });
          });
        }
      };

      if (layers && layers.length > 0) {
        for (i = 0; i < layers.length; i += 1) {
          layer = layers[i];
          linkItems = false;
          //console.log(layer);
          if (typeof layer.content === "object") {
            layer.content = c4g.maps.utils.objectToArray(layer.content);
          }

          // endless-loop prevention
          //
          parentId = layer.pid;
          parentIds = {};
          // build parent-ids chain
          while (c4g.maps.layers[parentId]) {
            if (parentIds[parentId]) {
              console.warn('Caught endless-loop (ID: ' + layer.id + ')');
              break;
            }
            parentIds[parentId] = true;
            parentId = c4g.maps.layers[parentId].pid;
          }

          if (layer.content && layer.content[0] && layer.content[0].cssClass) {
            layer.cssClass = layer.content[0].cssClass;
          }


          if (!parentIds[parentId]) {

            // prepare layer data if they are a new starboard tab
            if (layer.type === "startab") {
              layer.editable = true;
              layer.renderSpecial = true;
              layer.tabId = layer.id;
              if (!layer.layername) {
                layer.display = true;
              }
              // iterate childs and tell them to not load in layerswitcher
              fnHandleChilds = function(fLayer) {
                var count;
                for (count = 0; count < fLayer.childs.length; count++) {
                  child = fLayer.childs[count];
                  child.editable = true;
                  child.tabId = fLayer.tabId;
                  child.renderSpecial = true;
                  // set renderSpecial to remove it from normal layerswitcher
                  c4g.maps.layers[child.id] = child;
                  if (child.hasChilds) {
                    // recursive call
                    fnHandleChilds(child);
                  }
                }
              }; // end of fnHandleChilds

              if (layer.hasChilds) {
                fnHandleChilds(layer);
              }
              fnAddToHook(layer);
            }

            uid = layer.id || c4g.maps.utils.getUniqueId();
            c4g.maps.layers[uid] = layer;
            layer.isInactive = false;
            this.layerIds.push(layer.id);

            if (layer.display) {
              isVisible = true;
              fnHandleAndAppendLayerChilds(layer);
            } else if (layer.pid && c4g.maps.layers[layer.pid]) {
              // set hide when layers are not displayed in the starboard
              layer.hide = c4g.maps.layers[layer.pid].hide;
            }

            var visible = false;
            if (permalinkedLayers.length > 0) {
              for (p = 0; p < permalinkedLayers.length; p += 1) {
                if (permalinkedLayers[p] == layer.id) {
                  visible = true;
                  break;
                }
              }
            }

            if ((layer.hide !== "1") || (visible)) {
              this.activeLayerIds[layer.id] = 'invisible';
            }

          }
        } // end of for-loop
        // wrapperElement.appendChild(wrapper);
      }


      return isVisible;
    }, // end of "addLayers()"

    showLayer: function (layerUid) {
      var layer,
          mapLayers,
          addLayer,
          i,
          j,
          activeForZoom;

      activeForZoom = this.checkLayerIsActiveForZoom(layerUid);
      layer = c4g.maps.layers[layerUid];

      if (activeForZoom) {
          if (this.activeLayerIds[layerUid] !== 'visible') {
              //if (layer.link_id) {
              //  this.activeLayerIds[layer.link_id] = 'visible';
              //} else
              if (layer && layer.vectorLayer) {
                  // [info]: do not use: "layer.vectorLayer.setVisible(true);"
                  //         Always add and remove Layers, so that the last
                  //         clicked layer is always ontop of the others.

                  // check if layer is really not already on the map
                  // to prevent adding the same layer multiple times
                  addLayer = true;
                  mapLayers = this.options.mapController.map.getLayers();
                  mapLayers.forEach(function (element, index, array) {
                      if (element === layer.vectorLayer) {
                          addLayer = false;
                      }
                  });
                  if (addLayer) {
                      if(layer.vectorLayer.getLayers().getArray()[0] && layer.vectorLayer.getLayers().getArray()[0].popup && layer.vectorLayer.getLayers().getArray()[0].popup.showPopupOnActive){
                          c4g.maps.popup.$content.html('');
                          c4g.maps.popup.$popup.addClass(c4g.maps.constant.css.ACTIVE).addClass(c4g.maps.constant.css.LOADING);
                          c4g.maps.popup.spinner.show();
                          var popupInfos = layer.vectorLayer.getLayers().getArray()[0].popup;
                          var features = layer.vectorLayer.getLayers().getArray()[0].getSource().getFeatures();
                          var coord = features['0'].getGeometry().getCoordinates();
                          if (popupInfos.async === false) {
                              var objPopup = {};
                              objPopup.popup = popupInfos;
                              objPopup.feature = features['0'];
                              objPopup.layer = layer.vectorLayer.getLayers().getArray()[0];
                              // Call the popup hook for plugin specific popup content
                              if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.proxy_fillPopup === 'object') {
                                  c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
                              }
                              this.setPopup(objPopup, this);
                          } else {
                              var self = this;
                              $.ajax({
                                  dataType: "json",
                                  url: self.api_infowindow_url + '/' + popupInfos.content,
                                  success: function (data) {
                                      var popupInfo = {
                                          async: popupInfos.async,
                                          content: data.content,
                                          popup: popupInfos.popup,
                                          routing_link: popupInfos.routing_link
                                      };

                                      var objPopup = {};
                                      objPopup.popup = popupInfo;
                                      objPopup.feature = features['0'];
                                      objPopup.layer = layer;

                                      // Call the popup hook for plugin specific popup content
                                      if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.proxy_fillPopup === 'object') {
                                          c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
                                      }

                                      self.setPopup(objPopup,self);
                                  }
                              });
                          }
                      }
                      this.options.mapController.map.addLayer(layer.vectorLayer);
                  }
              } else {
                  this.loadLayerContent(layerUid);
              }
              this.activeLayerIds[layerUid] = 'visible';
          }
          else {
              //if (layer.link_id) {
              //  this.activeLayerIds[layer.link_id] = 'invisible';
              //} else {
              //this.activeLayerIds[layerUid] = 'invisible';
              //}
          }
      }
      this.activeLayerIds[layerUid] = 'visible';

      if (layer && layer.hasChilds && activeForZoom) {
        for (i = 0; i < layer.childs.length; i += 1) {
          this.showLayer(layer.childs[i].id);
        }
      }

      if (layer) {
        layer.isInactive = false;
      }

      if (typeof this.requestFunctions['request_' + layerUid] !== "undefined") {

        if (c4g.maps.requests && typeof c4g.maps.requests['layer_request_' + layerUid] === "undefined") {
          c4g.maps.requests['layer_request_' + layerUid] = window.setInterval(this.requestFunctions['request_' + layerUid].function, this.requestFunctions['request_' + layerUid].interval);
        }

      }
      this.combineLayers(this);
      // hooks
      c4g.maps.utils.callHookFunctions(this.hook_layer_visibility, layerUid);
    }, // end of "showLayer()"

    hideLayer: function (layerUid, keepLayer) {

      var layer,
          i,
          j;

      layer = c4g.maps.layers[layerUid];
      if (!layer) {
        //console.warn('Cannot hide unknown layer (' + layerUid + ')');
        return false;
      }

      // check if layer is listed as "active"
      // otherwise there is nothing to remove or change
      if (this.activeLayerIds[layerUid]) {
        // remove layer from map (if it was visible before)
        if (this.activeLayerIds[layerUid] === 'visible' && layer.vectorLayer) {
          // [info]: do not use "layer.vectorLayer.setVisible(false);"
          //         see "showLayer()" for more information
          this.options.mapController.map.removeLayer(layer.vectorLayer);
        }
        // only mark as "invisible" if "keepLayer" is "true"
        // this is needed for the zoom-bounds
        if (keepLayer) {
          this.activeLayerIds[layerUid] = 'invisible';
        } else {
          delete this.activeLayerIds[layerUid];
        }
      }

      // childs needed to be checked independent from its parents state


      //ToDo loading problem
      if (layer && layer.hasChilds) {
        for (i = 0; i < layer.childs.length; i += 1) {
          this.hideLayer(layer.childs[i].id);
        }
      }
      if(layer.isInactive){
          c4g.maps.utils.callHookFunctions(this.hook_layer_visibility, layerUid);
          return
      }
      layer.isInactive = true;

      if (c4g.maps.requests && typeof c4g.maps.requests['layer_request_' + layerUid] !== "undefined") {
        if (typeof c4g.maps.requests['layer_request_' + layerUid] == "number") {
          try {
            window.clearInterval(c4g.maps.requests['layer_request_' + layerUid]);
            delete c4g.maps.requests['layer_request_' + layerUid];
          } catch (e) {

          }
        }
      }
      this.combineLayers(this);
      this.options.mapController.map.getView().setCenter([this.options.mapController.map.getView().getCenter()[0]+0.001,this.options.mapController.map.getView().getCenter()[1]]);
      // hooks
      c4g.maps.utils.callHookFunctions(this.hook_layer_visibility, layerUid);
    }, // end of "hideLayer()"

    checkLayerIsActiveForZoom: function (layerId, opt_zoom) {
      var layer,
          zoom,
          layerContent,
          locstyle;

      if (!c4g.maps.layers[layerId]) {
        return false;
      }

      layer = c4g.maps.layers[layerId];

      if (opt_zoom) {
        zoom = opt_zoom;
      } else if (this.options.mapController.map.getView().getZoom() > -1) {
        zoom = this.options.mapController.map.getView().getZoom();
      } else {
        zoom = false;
      }
      if (layer.zoom === undefined) {
        if (layer.content && layer.content.length > 0) {
          for (var i = 0; i < layer.content.length; i++) {
            layerContent = layer.content[i];
            if (layerContent.locationStyle) {
              locstyle = c4g.maps.locationStyles[layerContent.locationStyle];
              // TODO check all locstyles and take the most constraining zoom value
              if (locstyle) {
                layer.zoom = {};
                if (locstyle.maxzoom) {
                  layer.zoom.max = locstyle.maxzoom;
                }
                if (locstyle.minzoom) {
                  layer.zoom.min = locstyle.minzoom;
                }
                if (layer.zoom.max || layer.zoom.min) {
                  break;
                }
              }
            }
          }
        }
      }
      if ((typeof zoom === "number") && layer.zoom
          && (layer.zoom.min > zoom || (layer.zoom.max > 0 && layer.zoom.max < zoom))
      ) {
        return false;
      }

      return true;
    }, // end of "checkLayerIsActive()"

    // @TODO: move to utils?
    getVectorLayer: function (source, style) {
      var fnStyle;

      // make sure that the style is a function
      if (typeof style === 'function') {
        fnStyle = style;
      } else if (style !== undefined) {
        fnStyle = function () {
          return style;
        };
      }

      return new ol.layer.Vector({
        source: source,
        style: fnStyle
      });
    }, // end of "getVectorLayer()"

    drawLayer: function (itemUid) {

      var self,
          element,
          elementContent,
          layers,
          i,
          j,
          missingStyles,
          unstyledFeatures,
          features,
          dataProjection,
          featureProjection,
          vectorSource,
          vectorLayer,
          vectorStyle,
          layerGroup;

      self = this;
      element = c4g.maps.layers[itemUid];

      // if (!element.hide) {

      layers = [];
      if (element.content && element.content.length > 0) {
        for (i = 0; i < element.content.length; i += 1) {

          elementContent = element.content[i];
          if (!elementContent) {
            continue;
          }
          if (typeof ol.format[elementContent.format] === "function") {

            // if (element.content[i].origType === 'single') {
            //   featureProjection = this.options.mapController.map.getView().getProjection();
            // } else {
            //   featureProjection = undefined;
            // }
            if (elementContent.data.properties && elementContent.data.properties.projection) {
              dataProjection = elementContent.data.properties.projection;
              featureProjection = this.options.mapController.map.getView().getProjection();
            } else {
              dataProjection = undefined;
            }

            if (elementContent.format === "OSMXML") {
              continue;
            }
            features = (new ol.format[elementContent.format]({})).readFeatures(elementContent.data, {
              featureProjection: featureProjection,
              dataProjection: dataProjection
            });

            missingStyles = [];
            unstyledFeatures = [];
            for (j = 0; j < features.length; j += 1) {
              // features[j].setId(c4g.maps.utils.getUniqueId());
              // features[j].set('projection', this.options.mapController.map.getView().getProjection());
              // features[j].set('projection', "EPSG:4326");
              if (features[j].get('styleId')) {
                if (c4g.maps.locationStyles[features[j].get('styleId')] && c4g.maps.locationStyles[features[j].get('styleId')].style) {
                  features[j].setStyle(c4g.maps.locationStyles[features[j].get('styleId')].style);
                } else {
                  missingStyles.push(features[j].get('styleId'));
                  unstyledFeatures.push(features[j]);
                }
              } else if (elementContent.locationStyle) {
                // feature has no property styleId, but elementContent has locationstyle
                if (c4g.maps.locationStyles[elementContent.locationStyle] && c4g.maps.locationStyles[elementContent.locationStyle].style) {
                  features[j].setStyle(c4g.maps.locationStyles[elementContent.locationStyle].style);
                } else {
                  missingStyles.push(elementContent.locationStyle);
                  unstyledFeatures.push(features[j]);
                  features[j].set('styleId', elementContent.locationStyle);
                }
              }
            }

            vectorStyle = c4g.maps.locationStyles[elementContent.locationStyle] && c4g.maps.locationStyles[elementContent.locationStyle].style;
            if (missingStyles.length > 0) {
              this.loadLocationStyles(missingStyles, {
                success: function () {
                  var f,
                      fLayerGroup,
                      fLayers,
                      fVectorLayer,
                      fVectorSource;
                  for (f = 0; f < unstyledFeatures.length; f += 1) {
                    if (c4g.maps.locationStyles[unstyledFeatures[f].get('styleId')]) {
                      unstyledFeatures[f].setStyle(c4g.maps.locationStyles[unstyledFeatures[f].get('styleId')].style);
                    }
                  }

                  fVectorSource = new ol.source.Vector({
                    features: features,
                    projection: 'EPSG:3857',
                    format: new ol.format.GeoJSON()
                  });

                  fVectorLayer = self.getVectorLayer(fVectorSource, vectorStyle);

                  // layers.push(vectorLayer);
                  if (c4g.maps.layers[itemUid].fVectorLayer) {
                    fLayerGroup = c4g.maps.layers[itemUid].vectorLayer;
                    fLayers = fLayerGroup.getLayers();

                    if (elementContent.data && elementContent.data.properties) {
                      if (elementContent.data.properties.popup) {
                        fVectorLayer.popup = elementContent.data.properties.popup;
                      }
                      if (elementContent.data.properties.tooltip) {
                        fVectorLayer.tooltip = elementContent.data.properties.tooltip;
                      }
                      if (elementContent.data.properties.label) {
                        fVectorLayer.label = elementContent.data.properties.label;
                      }
                      if (elementContent.data.properties.zoom_onclick) {
                        fVectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                      }
                    }

                    fLayers.push(fVectorLayer);
                    fLayerGroup.setLayers(fLayers);
                  } else {
                    if (elementContent.data && elementContent.data.properties) {
                      if (elementContent.data.properties.popup) {
                        fVectorLayer.popup = elementContent.data.properties.popup;
                      }
                      if (elementContent.data.properties.tooltip) {
                        fVectorLayer.tooltip = elementContent.data.properties.tooltip;
                      }
                      if (elementContent.data.properties.label) {
                        fVectorLayer.label = elementContent.data.properties.label;
                      }
                      if (elementContent.data.properties.zoom_onclick) {
                        fVectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                      }
                    }
                    fLayerGroup = new ol.layer.Group({
                      layers: [fVectorLayer]
                    });
                    c4g.maps.layers[itemUid].vectorLayer = fLayerGroup;
                    self.options.mapController.map.addLayer(fLayerGroup);
                  }
                }
              });
            } else {
              vectorSource = new ol.source.Vector({
                features: features,
                projection: 'EPSG:3857',
                format: new ol.format.GeoJSON()
              });

              vectorLayer = this.getVectorLayer(vectorSource, vectorStyle);

              if (elementContent.data && elementContent.data.properties) {
                if (elementContent.data.properties.popup) {
                  vectorLayer.popup = elementContent.data.properties.popup;
                }
                if (elementContent.data.properties.tooltip) {
                  vectorLayer.tooltip = elementContent.data.properties.tooltip;
                }
                if (elementContent.data.properties.label) {
                  vectorLayer.label = elementContent.data.properties.label;
                }
                if (elementContent.data.properties.zoom_onclick) {
                  vectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                }
              }

              layers.push(vectorLayer);
            }

          } else {
            console.warn('Format type ' + elementContent.format + ' in ol.format not found.');
          }

        }
      }

      layerGroup = new ol.layer.Group({
        layers: layers
      });

      c4g.maps.layers[itemUid].vectorLayer = layerGroup;
      this.options.mapController.map.addLayer(layerGroup);
      if(layerGroup.getLayers().getArray()[0] && layerGroup.getLayers().getArray()[0].popup && layerGroup.getLayers().getArray()[0].popup.showPopupOnActive){
          c4g.maps.popup.$content.html('');
          c4g.maps.popup.$popup.addClass(c4g.maps.constant.css.ACTIVE).addClass(c4g.maps.constant.css.LOADING);
          c4g.maps.popup.spinner.show();
          var popupInfos = layerGroup.getLayers().getArray()[0].popup;
          var layer = layerGroup.getLayers().getArray()[0];
          var coord = features['0'].getGeometry().getCoordinates();
          if (popupInfos.async === false) {
              var objPopup = {};
              objPopup.popup = popupInfos;
              objPopup.feature = features['0'];
              objPopup.layer = layer;
              // Call the popup hook for plugin specific popup content
              if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.proxy_fillPopup === 'object') {
                  c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
              }
              self.setPopup(objPopup,self);
          } else {
              $.ajax({
                  dataType: "json",
                  url: self.api_infowindow_url + '/' + popupInfos.content,
                  success: function (data) {
                      var popupInfo = {
                          async: popupInfos.async,
                          content: data.content,
                          popup: popupInfos.popup,
                          routing_link: popupInfos.routing_link
                      };

                      var objPopup = {};
                      objPopup.popup = popupInfo;
                      objPopup.feature = features['0'];
                      objPopup.layer = layer;

                      // Call the popup hook for plugin specific popup content
                      if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.proxy_fillPopup === 'object') {
                          c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
                      }

                      self.setPopup(objPopup, self);
                  }
              });
          }
      }

      //hooks
      // }
    }, // end of "drawLayer()"

    drawLayerInitial: function () {
      var layerId,
          layer;

      for (layerId in this.activeLayerIds) {
        if (this.activeLayerIds.hasOwnProperty(layerId)) {
          this.showLayer(layerId);
        }
      }
      for (var l in c4g.maps.layers) {
        if (c4g.maps.layers.hasOwnProperty(l)) {
          layer = c4g.maps.layers[l];
          if (layer.hide === "1") {
            this.hideLayer(layer.id);
          }
        }
      }
    } // end of "drawLayerInitial()"

  });

}(jQuery, this.c4g));