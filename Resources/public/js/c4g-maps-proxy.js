// 'namespace'
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.hook = this.c4g.maps.hook || {};

'use strict';

class MapProxy {
  constructor(options){
    var mapData;

    this.options = jQuery.extend({
      mapController: false
    }, options);
    if (!this.options.mapController) {
      return false;
    }

    c4g.maps.editorStyles = c4g.maps.editorStyles || {};

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
    //this.api_layercontentdata_url = this.options.mapController.data.api.layercontentdata;
    this.api_layercontentdata_url = "con4gis/layerContentDataService";
    this.api_locstyle_url = this.options.mapController.data.api.locstyle;
    this.api_infowindow_url = this.options.mapController.data.api.infowindow;
    this.options = options;



    // this.initialize();
  }

  initialize() {
    var self,
      map;

    self = this;
    map = this.options.mapController.map;

    this.baselayerController = new C4gBaselayerController(this);
    this.baselayerController.loadBaseLayers();
    this.layerController = new C4gLayerController(this);
    this.layerController.loadLayers();
    this.locationStyleController = new C4gLocationStyleController(this);
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
            layer = self.layerController.arrLayers[layerId];
            if (self.checkLayerIsActiveForZoom(layerId)) {
              if (layer.isInactive) {
                self.layerController.showLayer(layerId);
              }
            } else {
              self.layerController.hideLayer(layerId, true);
            }
          }
        }

        // hooks
        c4g.maps.utils.callHookFunctions(self.hook_map_zoom);

        if (self.options.mapController.data.caching && map.getView().getZoom()) {
            c4g.maps.utils.storeValue('zoom', map.getView().getZoom());
        }


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
          layer = self.layerController.arrLayers[layerId];
          if (self.checkLayerIsActiveForZoom(layerId)) {
            if (layer.isInactive) {
              self.layerController.showLayer(layerId);
            }
          } else {
            self.layerController.hideLayer(layerId, true);
          }
        }
      }

      // hooks
      c4g.maps.utils.callHookFunctions(c4g.maps.hook.hook_map_zoom,self);

      if (self.options.mapController.data.caching && map.getView().getZoom()) {
          c4g.maps.utils.storeValue('zoom', map.getView().getZoom());
      }

    }); // end of "zoom-observer"

    map.getView().on('change:center', function(evt){
        if (self.options.mapController.data.caching) {
            var coordinate = ol.proj.toLonLat(map.getView().getCenter());
            if (coordinate) {
                c4g.maps.utils.storeValue('lon', coordinate[0]);
                c4g.maps.utils.storeValue('lat', coordinate[1]);
            }
        }
        c4g.maps.hook.map_center_changed = c4g.maps.hook.map_center_changed || [];
        c4g.maps.utils.callHookFunctions(c4g.maps.hook.map_center_changed, map.getView().getCenter());
    }); // end of "center-observer"

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
          if (styleCluster && styleCluster.getImage()) {
              styleCluster.getImage().setScale(styleCluster.getImage().getScale()*0.7);
          }
        }
      }

      fFeatures = feature ? feature.get('features') : false;
      if (!(fFeatures && fFeatures.length === 1)) {
        // cluster multiple POI
        if (fFeatures) {
          if(fFeatures[0].get('cluster_popup') == 1)
          {
            map.getView().setCenter(clickEvent.coordinate);
            currentZoom = map.getView().getZoom();
            minZoom = self.options.mapController.data.cluster_all ? self.options.mapController.data.cluster_zoom : fFeatures['0'].get('cluster_zoom');
            if(currentZoom >= minZoom)
            {
              setPopup =[];
              setPopup.content = '';
              setPopup.async = false;
              for(var i = 0; i < fFeatures.length; i++){
                setPopup.content = setPopup.content.concat(fFeatures[i].get('popup').content);
              }
              feature = fFeatures[0].clone();
              feature.set('popup',setPopup);
            }
            else
            {
              map.getView().setZoom(currentZoom+1);
            }

          }
          else {


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
            if (currentZoom >= minZoom) {

              //if (currentZoom >= map.getView().getMaxZoom()) {
              //open the cluster after zooming
              var pix = map.getView().getResolution();
              var max = fFeatures.length;
              var r = pix * 12 * (0.5 + max / 4);
              for (var i = 0; i < max; i++) {
                var a = 2 * Math.PI * i / max;
                if (max == 2 || max == 4) a += Math.PI / 4;
                var p = [newCenter[0] + r * Math.sin(a), newCenter[1] + r * Math.cos(a)];
                var coordinate = ol.proj.toLonLat(p);
                var f = [];
                f.push(fFeatures[i]);
                var cf = new ol.Feature({
                  geometry: new ol.geom.Point(p),
                  features: f
                });
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
        }
      } else if ((fFeatures && fFeatures.length === 1)) {
        feature = fFeatures[0];
      }

      if (self.options.mapController.controls.editor && self.options.mapController.controls.editor.isOpen()) {
        // do not show popup when editor is open
        if (feature && feature.get('projectId')) {
            // but call click hooks
            let result = c4g.maps.utils.callHookFunctions(self.hook_map_click, clickEvent);
            return false;
        }
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

            if (popupInfos.async === false || popupInfos.async == '0') {
              objPopup = {};
              objPopup.popup = popupInfos;
              objPopup.feature = feature;
              objPopup.layer = layer;
              // Call the popup hook for plugin specific popup content
              if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.proxy_fillPopup === 'object') {
                c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
              }
              self.setPopup(objPopup);
            } else {
              jQuery.ajax({
                dataType: "json",
                url: self.api_infowindow_url + '/' + popupInfos.content,
                done: function (data) {
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

                  self.setPopup(objPopup);
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
        c4g.maps.utils.callHookFunctions(c4g.maps.hook.hook_map_click, clickEvent);
      }
    }); // end of "click-observer"


    // this.options.mapController.map.getLayers().on('change:length', function(event) {
    //     ;
    // });


  } // end of "initial"*
  combine(proxy){
    var func = function(event) {
      proxy.combineLayers(proxy);
      proxy.options.mapController.map.un('postrender',func);
    };
    proxy.options.mapController.map.on('postrender', func)
  }

  setPopup(popupConfig) {
    var feature,
      layer,
      popupContent,
      router,
      routeButtonWrapper,
      routeFromButton,
      routeFromButtonSpan,
      routeToButton,
      routeToButtonSpan,
      routingHandler,
      self = this;

    feature = popupConfig.feature;
    layer = popupConfig.layer;

    popupContent = c4g.maps.utils.replaceAllPlaceholders(popupConfig.popup.content, feature, layer);

    // @TODO: check for route-option & display "route-to"
    // NOTE: does not work async this way
    if (this.options.mapController.controls.router && popupConfig.popup.routing_link) {
      router = this.options.mapController.controls.router;

      routingHandler = function (event) {
        if (self.options.mapController.activePortside !== router) {
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
      jQuery(routeFromButton).click(routingHandler);
      routeButtonWrapper.appendChild(routeFromButton);

      routeFromButtonSpan = document.createElement('span');
      routeFromButtonSpan.innerHTML = c4g.maps.constant.i18n.POPUP_ROUTE_FROM;
      routeFromButton.appendChild(routeFromButtonSpan);

      routeToButton = document.createElement('button');
      routeToButton.className = c4g.maps.constant.css.ICON + ' ' + c4g.maps.constant.css.POPUP_ROUTE_TO;
      jQuery(routeToButton).click(routingHandler);
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
      if(feature.getGeometry() && feature.getGeometry() instanceof ol.geom.Point){
        c4g.maps.popup.popup.setPosition(feature.getGeometry().getCoordinates());
      }
    } else {
      // hide popup if there is no valid content left
      c4g.maps.popup.$popup.removeClass(c4g.maps.constant.css.ACTIVE);
    }

    c4g.maps.popup.$popup.removeClass(c4g.maps.constant.css.LOADING);
    c4g.maps.popup.spinner.hide();
  } // end of "setPopup()"


  addPopUp() {

    let popUpElement,
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

    jQuery(popUpCloseElement).click(function (event) {
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

    c4g.maps.popup.$popup = jQuery(c4g.maps.popup.popup.getElement());
    c4g.maps.popup.$content = jQuery('.c4g-popup-content', c4g.maps.popup.$popup);

  } // end of "addPopUp()"


  /**
   * @TODO: [checkLocationStyles description]
   *
   * @param   {[type]}  opt_options  [description]
   *
   * @return  {[type]}               [description]
   */
  checkLocationStyles(opt_options) {

    var options,
      neededLayerStyles,
      getLayerStyles,
      self = this;

    if (opt_options && typeof opt_options === "object") {
      options = opt_options;
    } else {
      options = {};
    }

    this.locationStyleController.arrLocStyles= this.locationStyleController.arrLocStyles || {};

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
                    !self.locationStyleController.arrLocStyles[element.content[i].locationStyle]
                    || self.locationStyleController.arrLocStyles[element.content[i].locationStyle].style === undefined
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

    getLayerStyles(this.layerController.arrLayers);

    if (neededLayerStyles.length > 0) {
      this.locationStyleController.loadLocationStyles(neededLayerStyles, options);
    } else {
      if (options.done && typeof options.done === "function") {
        options.done();
      }
    }
  } // end of "checkLocationStyles()"

  combineLayers(proxy){

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
                  style = this.locationStyleController.arrLocStyles[layerGroups[k].content[j].locationStyle];
                }
                else if(layerGroups[k].content[0]){
                  style = this.locationStyleController.arrLocStyles[layerGroups[k].content[0].locationStyle];
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

      //vectorLayer = self.getVectorLayer(clusterSource, styleForCluster);

      vectorLayer = new ol.layer.Vector({
        name: 'Cluster',
        source: clusterSource,
        style: styleForCluster

      });

      var allLayers = proxy.options.mapController.map.getLayers().getArray();
      var missingLayer = true;
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



  }//end of combineLayers


  checkLayerIsActiveForZoom(layerId, opt_zoom) {
    var layer,
      zoom,
      layerContent,
      locstyle;

    if (!this.layerController.arrLayers[layerId]) {
      return false;
    }

    layer = this.layerController.arrLayers[layerId];

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
            locstyle = this.locationStyleController.arrLocStyles[layerContent.locationStyle];
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
  } // end of "checkLayerIsActive()"

}
