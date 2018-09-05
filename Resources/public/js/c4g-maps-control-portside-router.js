// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   * @param  {[type]}  config         [description]
   */
  c4g.maps.control.Router = function (opt_options) {

    // extend options
    this.options = $.extend({
      name: 'router',
      create: true,
      mapController: undefined,
      headline: c4g.maps.constant.i18n.ROUTER,
      direction: 'left'
    }, opt_options);

    if (!this.options.mapController) {
      return false;
    }
    this.index=0;

    // call parent constructor
    c4g.maps.control.Sideboard.call(this, this.options);
  };

  /**
   * Inherit from "Sideboard"
   */
  ol.inherits(c4g.maps.control.Router, c4g.maps.control.Sideboard);

  /**
   * Methods
   */
  c4g.maps.control.Router.prototype = $.extend(c4g.maps.control.Router.prototype, {

    init: function () {

      var self,
          viewRouter,
          selectInteraction,
          profileId;

      self = this;
      this.spinner.show();


      // check and load location styles via map-proxy
      this.options.mapController.proxy.locationStyleController.loadLocationStyles([
        this.options.mapController.data.router_from_locstyle,
        this.options.mapController.data.router_to_locstyle,
        this.options.mapController.data.router_point_locstyle
      ]);


      // Add router layer(s)
      this.routingAltWaySource = new ol.source.Vector();
      this.routingWaySource = new ol.source.Vector();
      this.routerWayLayer = new ol.layer.Vector({
        source: this.routingWaySource,
        zIndex: 1,
        style: [
          new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: 'rgba(255, 255, 255, 0.6)',
              width: 8
            })
          }),
          new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: 'rgba(0, 51, 119, 0.9)',
              width: 4
            })
          })
        ]
      });
      this.routerAltWayLayer = new ol.layer.Vector({
        source: this.routingAltWaySource,
        zIndex: 0,
        style: [
          new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: 'rgba(255, 255, 255, 0.6)',
              width: 8
            })
          }),
          new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: 'rgba(0, 51, 119, 0.4)',
              width: 4
            })
          })
        ]
      });

      selectInteraction = new ol.interaction.Select({
          style:[
              new ol.style.Style({
                  stroke: new ol.style.Stroke({
                      color: 'rgba(255, 255, 255, 0.0)',
                      width: 8
                  })
              }),
              new ol.style.Style({
                  stroke: new ol.style.Stroke({
                      color: 'rgba(255, 51, 119, 0.0)',
                      width: 4
                  })
              })
          ]

      });
      selectInteraction.on('select', function (event) {

          if(event.selected[0] ) {
              var geometry = event.selected[0].getGeometry();
              if(geometry && geometry instanceof ol.geom.LineString){
                  self.showAltRoute(self.response,event.selected[0].getId());
              }

          }

      });

      self.options.mapController.map.addInteraction(selectInteraction);


        this.routingHintSource = new ol.source.Vector();
      this.routerHintLayer = new ol.layer.Vector({
        source: this.routingHintSource,
        style: function (feature, resolution) {
          // console.log(self.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style);
          return (!self.options.mapController.proxy) || self.options.mapController.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style(feature, resolution);
        }
      });

      this.locationsSource = new ol.source.Vector();
      this.locationsLayer = new ol.layer.Vector({
        source: this.locationsSource,
        zIndex: 2
      });

      this.routerLayerGroup = new ol.layer.Group({
        layers: new ol.Collection([
          this.routerWayLayer,
          this.routerAltWayLayer,
          this.locationsLayer,
          this.routerHintLayer
        ]),
        visible: true
      });
      this.options.mapController.map.addLayer(this.routerLayerGroup);

      viewRouter = this.addUserInterface();
      viewRouter.activate();

      // store some vars for ajax-requests
      profileId = this.options.mapController.data.profile;
      this.geoSearchApi = this.options.mapController.data.api.geosearch + '/' + profileId;
      this.geoReverseSearchApi = this.options.mapController.data.api.geosearch_reverse + '/' + profileId;
      this.routingApi = this.options.mapController.data.api.routing + '/' + profileId;

      this.spinner.hide();

      return true;
    },

    preOpenFunction: function (opt_options) {

      this.addMapInputInteraction();

      if (opt_options && opt_options.toLonLat) {
        this.performReverseSearch(this.$toInput, opt_options.toLonLat);
        this.toValue = new ol.geom.Point([opt_options.toLonLat[1], opt_options.toLonLat[0]]);
      }

    },

    preHideFunction: function () {
      this.removeMapInputInteraction();
    },

    preCloseFunction: function () {

      this.routingWaySource.clear();
      this.routingAltWaySource.clear();
      this.routingHintSource.clear();
      this.locationsSource.clear();

      $(this.routerInstructionsWrapper).empty();
      this.clearInput(this.$fromInput);
      if(this.overValue){
          for(var id in this.overValue){
              this.clearOver(this.$overInput,id);
              var elem = document.getElementById(id);
              if(elem){
                  elem.parentNode.parentNode.removeChild(elem.parentNode);
              }
          }
      }
      this.clearInput(this.$toInput);

      this.removeMapInputInteraction();

    },

    removeMapInputInteraction: function () {

      var self = this;
      this.options.mapController.map.un('click', self.fnMapRouterInteraction);

      if (self.options.mapController.map.getInteractions() && self.options.mapController.map.getInteractions().getArray() &&
          self.options.mapController.map.getInteractions().getArray()['9']) {
        self.options.mapController.map.getInteractions().getArray()['9'].setActive(false);
      }
    },

    addMapInputInteraction: function () {

      var self = this,
          coordinate;

      self.fnMapRouterInteraction = function (evt) {

        coordinate = ol.proj.toLonLat(evt.coordinate);

        if (self.$fromInput.val() === "") {
          //self.$fromInput.val(ol.proj.toLonLat(evt.coordinate));
          self.performReverseSearch(self.$fromInput, coordinate);
          self.fromValue = new ol.geom.Point(coordinate);

          //self.$fromInput.trigger('change');
        } else if (self.$toInput.val() === "") {
          //self.$toInput.val(ol.proj.toLonLat(evt.coordinate));
          self.performReverseSearch(self.$toInput, coordinate);
          self.toValue = new ol.geom.Point(coordinate);
        } else if (self.$overInput) {
            if(self.$overInput.val() ==="") {
                self.performReverseSearch(self.$overInput, coordinate);
                if (!self.overValue) {
                    self.overValue={};
                }
                self.overValue[self.index]=new ol.geom.Point(coordinate);
                self.$buttonOver.prop("disabled",false);
            }
        }
      };

      this.options.mapController.map.on('click', self.fnMapRouterInteraction);
      if(self.options.mapController.map.getInteractions().getArray()['9']){
          self.options.mapController.map.getInteractions().getArray()['9'].setActive(true);
      }
      else{
          self.options.mapController.map.getInteractions().getArray()['8'].setActive(true)
      }


    },


    addUserInterface: function () {

      let self,
          routerView,
          routerViewInputWrapper,
          routerViewContentWrapper,
          routerViewContentHeadline,
          print,
          routeProfile =[],
          routerFromLabel,
          routerOverLabel,
          routerToLabel,
          routerFromClear,
          routerOverClear,
          routerToClear,
          switchFromTo,
          buttonOver;


      self = this;

      routerViewInputWrapper = document.createElement('div');
      routerViewContentWrapper = document.createElement('div');

      self.routerViewContentWrapper = routerViewContentWrapper;

      // @TODO: Add router-info-text
      // routerViewContentHeadline = document.createElement('h4');
      // routerViewContentHeadline.innerHTML = c4g.maps.constant.i18n.ROUTER_VIEW_ADDRESS_INPUT;
      // routerViewContentWrapper.appendChild(routerViewContentHeadline);

      this.fromInputWrapper = document.createElement('div');
      this.fromInputWrapper.className = c4g.maps.constant.css.ROUTER_INPUT_WRAPPER;

      this.fromInput = document.createElement("input");
      this.fromInput.type = "text";
      this.fromInput.className = c4g.maps.constant.css.ROUTER_INPUT_FROM;
      this.fromInput.id = this.fromInput.name = "routingFrom";

      routerFromLabel = document.createElement('label');
      routerFromLabel.setAttribute('for', 'routingFrom');
      routerFromLabel.innerHTML = c4g.maps.constant.i18n.ROUTER_FROM_LABEL;

      routerFromClear = document.createElement('button');
      routerFromClear.className = c4g.maps.constant.css.ROUTER_INPUT_CLEAR;
      routerFromClear.title = c4g.maps.constant.i18n.ROUTER_CLEAR_TITLE;
      routerFromClear.innerHTML = c4g.maps.constant.i18n.ROUTER_CLEAR_HTML;
      this.$routerFromClear = $(routerFromClear);

      switchFromTo = document.createElement('button');
      switchFromTo.className = c4g.maps.constant.css.ROUTER_SWITCH;
      switchFromTo.title = c4g.maps.constant.i18n.ROUTER_SWITCH;
      this.$switchFromTo = $(switchFromTo);

      buttonOver = document.createElement('button');
      buttonOver.className = c4g.maps.constant.css.ROUTER_OVER;
      buttonOver.title = c4g.maps.constant.i18n.ROUTER_OVER;
      this.$buttonOver = $(buttonOver);

      print = document.createElement('button');
      print.className = c4g.maps.constant.css.ROUTER_PRINT;
      print.title = c4g.maps.constant.i18n.ROUTER_PRINT;
      this.$print = $(print);




      this.routerButtonBar = document.createElement('div');
      this.routerButtonBar.className = c4g.maps.constant.css.ROUTER_BUTTONBAR;
      this.routerButtonBar.appendChild(switchFromTo);
      this.routerButtonBar.appendChild(buttonOver);
      this.routerButtonBar.appendChild(print);

        // $(print).insertBefore(document.getElementsByClassName("c4g-portside-hide")[0]);

        if(this.options.mapController.data.router_api_selection == '2'){ //OpenRouteService
            if(Object.keys(this.options.mapController.data.router_profiles).length == 1){//check for single profile and set this as  active routing profile
                this.routeProfile = [];
                this.routeProfile.active = Object.keys(this.options.mapController.data.router_profiles)[0];
            }
            else if(Object.keys(this.options.mapController.data.router_profiles).length > 1){ //check for multiple profiles and add profile-changer
                this.routeProfile = document.createElement('div');
                $(this.routeProfile).addClass(c4g.maps.constant.css.ROUTER_PROFILE_WRAPPER);
                if(this.options.mapController.data.router_profiles['0']){ //add button for profile driving-car
                    routeProfile.car = document.createElement('button');
                    $(routeProfile.car).addClass(c4g.maps.constant.css.ROUTER_PROFILE_CAR);
                    this.$routeProfileCar = $(routeProfile.car);
                    this.routeProfile.appendChild(routeProfile.car);
                    this.$routeProfileCar.click(function(event){
                        self.clearSiblings(this);
                        self.routeProfile.active = '0';
                        self.recalculateRoute();
                    });
                }

                if(this.options.mapController.data.router_profiles['1']) { //add button for profile driving-hgv
                    routeProfile.hgv = document.createElement('button');
                    $(routeProfile.hgv).addClass(c4g.maps.constant.css.ROUTER_PROFILE_HGV);
                    this.routeProfile.appendChild(routeProfile.hgv);
                    this.$routeProfileHgv = $(routeProfile.hgv);

                    this.$routeProfileHgv.click(function(event){
                        self.clearSiblings(this);
                        self.routeProfile.active = '1';
                        self.recalculateRoute();
                    });
                }
                if(this.options.mapController.data.router_profiles['2']
                    || this.options.mapController.data.router_profiles['3']
                    || this.options.mapController.data.router_profiles['4']
                    || this.options.mapController.data.router_profiles['5']
                    || this.options.mapController.data.router_profiles['6']
                    || this.options.mapController.data.router_profiles['7']){ //add button and dropdown for cycling profiles
                    let spanBike = document.createElement('span');
                    routeProfile.bike = document.createElement('button');
                    routeProfile.bike.list = document.createElement('ul');
                    this.$routeProfileBike = $(routeProfile.bike);
                    for(let i = 2; i < 8; i++){ //iterate over all possible cycling profiles
                        if(this.options.mapController.data.router_profiles[i]){
                            let child = document.createElement('li');
                            child.innerHTML = this.options.mapController.data.router_profiles[i];
                            $(child).data('profile', [i]);
                            $(child).click(function(event){
                                self.childClick($(child));
                            });
                            if(!this.$routeProfileBike.data('profile')){ //add existing default profile to button
                                this.$routeProfileBike.data('profile',i);
                                $(child).addClass(c4g.maps.constant.css.ACTIVE);
                            }
                            routeProfile.bike.list.appendChild(child);
                        }
                    }

                    $(routeProfile.bike).addClass(c4g.maps.constant.css.ROUTER_PROFILE_BIKE);

                    if(routeProfile.bike.list.children.length == 1){ //ignore dropdown list, if only one cycling profile is enabled
                        this.routeProfile.appendChild(routeProfile.bike);
                        this.$routeProfileBike.click(function(event){
                            self.clearSiblings(this);
                            self.routeProfile.active = $(this).data('profile');
                            self.recalculateRoute();
                        });
                    }
                    else{ //append with dropdown, if multiple cycling profiles are enabled
                        spanBike.appendChild(routeProfile.bike);
                        spanBike.appendChild(routeProfile.bike.list);
                        this.routeProfile.appendChild(spanBike);
                        this.$routeProfileBike.click(function(event){
                            self.clearSiblings($(this).parent());
                            self.routeProfile.active = $(this).data('profile');
                            self.recalculateRoute();
                        });
                    }
                }
                if(this.options.mapController.data.router_profiles['8']
                    || this.options.mapController.data.router_profiles['9']){ //add button and dropdown for walking profiles
                    let spanFoot = document.createElement('span');
                    routeProfile.foot = document.createElement('button');
                    routeProfile.foot.list = document.createElement('ul');
                    this.$routeProfileFoot = $(routeProfile.foot);
                    for(let i = 8; i < 10; i++){ //iterate over possible profiles
                        if(this.options.mapController.data.router_profiles[i]){
                            let child = document.createElement('li');
                            child.innerHTML = this.options.mapController.data.router_profiles[i];
                            $(child).data('profile', [i]);
                            $(child).click(function(event){
                                self.childClick($(this));
                            });
                            if(!this.$routeProfileFoot.data('profile')){ //add existing default profile to button
                                this.$routeProfileFoot.data('profile',i);
                                $(child).addClass(c4g.maps.constant.css.ACTIVE);
                            }
                            routeProfile.foot.list.appendChild(child);
                        }
                    }

                    $(routeProfile.foot).addClass(c4g.maps.constant.css.ROUTER_PROFILE_FOOT);

                    if(routeProfile.foot.list.children.length == 1){ //ignore dropdown list, if only one walking profile is enabled
                        this.routeProfile.appendChild(routeProfile.foot);
                        this.$routeProfileFoot.click(function(event){
                            self.clearSiblings(this);
                            self.routeProfile.active = $(this).data('profile');
                            self.recalculateRoute();
                        });
                    }
                    else{ //append with dropdown, if multiple walking profiles are enabled
                        spanFoot.appendChild(routeProfile.foot);
                        spanFoot.appendChild(routeProfile.foot.list);
                        this.routeProfile.appendChild(spanFoot);
                        this.$routeProfileFoot.click(function(event){
                            self.clearSiblings($(this).parent());
                            self.routeProfile.active = $(this).data('profile');
                            self.recalculateRoute();
                        });
                    }
                }
                if(this.options.mapController.data.router_profiles['10']){ //add button for profile wheelchair
                    routeProfile.wheelchair = document.createElement('button');
                    $(routeProfile.wheelchair).addClass(c4g.maps.constant.css.ROUTER_PROFILE_WHEELCHAIR);
                    this.$routeProfileWheelchair = $(routeProfile.wheelchair);
                    this.routeProfile.appendChild(routeProfile.wheelchair);
                    this.$routeProfileWheelchair.click(function(event){
                        self.clearSiblings(this);
                        self.routeProfile.active = '10';
                        self.recalculateRoute();
                    });
                }
                this.childClick = function($element){ //handle the click inside the profile dropdown
                    self.routeProfile.active = $element.data('profile'); //activate selected profile
                    self.clearSiblings($element);
                    self.recalculateRoute(); //update the route
                };
                this.clearSiblings = function(element){ //function to adjust css-classes after changing profile
                    let siblings = $(element).parent().children();
                    for(let i = 0; i < siblings.length ; i++){
                        $(siblings[i]).removeClass(c4g.maps.constant.css.ACTIVE);
                    }
                    $(element).addClass(c4g.maps.constant.css.ACTIVE);
                };
                for(let profile in this.options.mapController.data.router_profiles){ //set default value for initial routing
                    if(this.options.mapController.data.router_profiles.hasOwnProperty(profile)){
                        this.routeProfile.active = profile;
                        break;
                    }
                }
            }
            else{
                console.warn('No Router Profiles enabled')
            }

        }



      this.fromInputWrapper.appendChild(routerFromLabel);
      this.fromInputWrapper.appendChild(this.fromInput);
      this.fromInputWrapper.appendChild(routerFromClear);
      if (buttonOver && this.options.mapController.data.router_api_selection == '0'){
          this.$buttonOver.hide();
      }


      this.$routerFromClear.hide();

      this.$routerFromClear.click(function (event) {
        event.preventDefault();
        self.clearInput(self.$fromInput);
      });

      this.$buttonOver.click(function(event) {
          event.preventDefault();
          self.index++;
          self.$buttonOver.prop("disabled",true);

          self.overInputWrapper = document.createElement('div');
          self.overInputWrapper.className = c4g.maps.constant.css.ROUTER_INPUT_WRAPPER;

          self.overInput = document.createElement("input");
          self.overInput.type = "text";
          self.overInput.className = c4g.maps.constant.css.ROUTER_INPUT_FROM;
          self.overInput.id = self.overInput.name = "routingOver";

          routerOverLabel = document.createElement('label');
          routerOverLabel.setAttribute('for', 'routingFrom');
          routerOverLabel.innerHTML = c4g.maps.constant.i18n.ROUTER_Label_Interim;

          routerOverClear = document.createElement('button');
          routerOverClear.className = c4g.maps.constant.css.ROUTER_INPUT_CLEAR;
          routerOverClear.title = c4g.maps.constant.i18n.ROUTER_CLEAR_TITLE;
          routerOverClear.innerHTML = c4g.maps.constant.i18n.ROUTER_CLEAR_HTML;
          routerOverClear.id = self.index;
          self.$routerOverClear = $(routerOverClear);

          self.overInputWrapper.appendChild(routerOverLabel);
          self.overInputWrapper.appendChild(self.overInput);
          self.overInputWrapper.appendChild(routerOverClear);

          routerViewInputWrapper.appendChild(self.overInputWrapper);
          self.$routerOverClear.click(function (event) {
              event.preventDefault();
              self.clearOver(self.$overInput,this.id);
              $(this).parent().remove();
              //buttonOver.show();
          });
          self.$overInput = $(self.overInput);
          self.$overInput.on('change', function () {
              self.performSearch(self.$overInput, "overValue");
          });
      });




      this.$switchFromTo.click(function (event) {
          event.preventDefault();
          var switchVarName = document.getElementById("routingFrom").value;
          document.getElementById("routingFrom").value = document.getElementById("routingTo").value;
          document.getElementById("routingTo").value = switchVarName;
          var switchVarVal = self.fromValue;
          self.fromValue = self.toValue;
          self.toValue = switchVarVal;
          self.recalculateRoute();

      });
      this.$print.click(function (event){
          event.preventDefault();
          let routingContent = document.getElementsByClassName("c4g-router-instructions-wrapper")[0];
          if(!routingContent) return;
          let WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
          WinPrint.document.write(routingContent.innerHTML);
          WinPrint.document.close();
          WinPrint.focus();
          WinPrint.print();
          WinPrint.close();
      });

      this.$fromInput = $(this.fromInput);
      this.$fromInput.on('change', function () {
        self.performSearch(self.$fromInput, "fromValue");
        if (self.$fromInput.val() !== "") {
          self.$routerFromClear.show();
        } else {
          self.$routerFromClear.hide();
        }
      });

      routerViewInputWrapper.appendChild(this.routerButtonBar);
      if(this.routeProfile && this.routeProfile.children){
          routerViewInputWrapper.appendChild(this.routeProfile);
      }
      routerViewInputWrapper.appendChild(this.fromInputWrapper);

      this.toInputWrapper = document.createElement('div');
      this.toInputWrapper.className = c4g.maps.constant.css.ROUTER_INPUT_WRAPPER;

      this.toInput = document.createElement("input");
      this.toInput.type = "text";
      this.toInput.className = c4g.maps.constant.css.ROUTER_INPUT_TO;
      this.toInput.id = this.toInput.name = "routingTo";

      routerToLabel = document.createElement('label');
      routerToLabel.setAttribute('for', 'routingTo');
      routerToLabel.innerHTML = c4g.maps.constant.i18n.ROUTER_TO_LABEL;

      routerToClear = document.createElement('button');
      routerToClear.className = c4g.maps.constant.css.ROUTER_INPUT_CLEAR;
      routerToClear.title = c4g.maps.constant.i18n.ROUTER_CLEAR_TITLE;
      routerToClear.innerHTML = c4g.maps.constant.i18n.ROUTER_CLEAR_HTML;
      this.$routerToClear = $(routerToClear);

      this.toInputWrapper.appendChild(routerToLabel);
      this.toInputWrapper.appendChild(this.toInput);
      this.toInputWrapper.appendChild(routerToClear);


      this.$routerToClear.hide();

      self.$routerToClear.click(function (event) {
        event.preventDefault();
        self.clearInput(self.$toInput);
      });

      this.$toInput = $(this.toInput);
      this.$toInput.on('change', function () {
        self.performSearch(self.$toInput, "toValue");
        if (self.$toInput.val() !== "") {
          self.$routerToClear.show();
        } else {
          self.$routerToClear.hide();
        }
      });

      routerViewInputWrapper.appendChild(this.toInputWrapper);

      self.statusBar.appendChild(this.getAttribution());

      routerView = this.addView({
        name: 'router-view',
        triggerConfig: {
          tipLabel: c4g.maps.constant.i18n.ROUTER_VIEW_ADDRESS_INPUT,
          className: c4g.maps.constant.css.ROUTER_VIEW_ADDRESS_INPUT,
          withHeadline: false
        },
        sectionElements: [
          {section: this.topToolbar, element: routerViewInputWrapper},
          {section: this.contentContainer, element: routerViewContentWrapper}
        ]
      });

      return routerView;

    },

    setInput: function (from, coordinate) {
      // perform geoSearch on given location
      // fill from/to field
      //

      if (!coordinate) {
        return false;
      }

      coordinate = ol.proj.toLonLat(coordinate);

      if (from) {
        this.performReverseSearch(this.$fromInput, coordinate);
        this.fromValue = new ol.geom.Point(coordinate);

        //this.$fromInput.trigger('change');
      }
      else {
        this.performReverseSearch(this.$toInput, coordinate);
        this.toValue = new ol.geom.Point(coordinate);
      }

      this.recalculateRoute();
    },

    getAttribution: function () {
      let self = this,
          attributionSearch,
          attributionRouter,
          attributionRouterHost,
          attributionWrapper,
          attributionHtml;
      switch(self.options.mapController.data.router_api_selection){
          case "0":
              attributionRouter = '<a target="_blank" href="http://project-osrm.org/">Project OSRM</a>';
              break;
          case "1":
              attributionRouter = '<a target="_blank" href="http://project-osrm.org/">Project OSRM</a>';
              break;
          case "2":
              attributionRouter = '<a target="_blank" href="https://openrouteservice.org/">openrouteservice</a>';
              break;
      }
      switch(self.options.mapController.data.geosearch.geosearch_engine){
          case "1": //OSM
              attributionSearch = '- Geocoder by <a target="_blank" href="https://nominatim.openstreetmap.org/">OpenStreetMap</a> ';
              break;
          case "2": //Mapquest
              attributionSearch = '- Geocoder by <a target="_blank" href="http://www.mapquest.com/">MapQuest</a> ';
              break;
          case "3": //custom
              attributionSearch = '- Nominatim-Geocoder ';
              break;
          case "4": //con4gis
              attributionSearch = '- Geocoder by <a target="_blank" href="https://www.con4gis.org/kartendienste.html">con4gis</a> ';
              break;
      }
        switch(self.options.mapController.data.router_api_selection){
            case "0":
                attributionRouterHost = '- OSRM hosting by <a target="_blank" href="http://algo2.iti.kit.edu/">KIT</a>';
                break;
            case "1":
                attributionRouterHost = '- OSRM hosting by <a target="_blank" href="http://algo2.iti.kit.edu/">KIT</a>';
                break;
            case "2":
                attributionRouterHost = '\'- ORS hosting by <a target="_blank" href="https://www.geog.uni-heidelberg.de/gis/heigit_en.html">HeiGIT</a>\'';
                break;
        }

      //ToDo check params
      attributionHtml = attributionRouter + attributionSearch + attributionRouterHost;
      attributionWrapper = document.createElement('div');
      attributionWrapper.className = c4g.maps.constant.css.ROUTER_ATTRIBUTION_WRAPPER;

      attributionWrapper.innerHTML = attributionHtml;

      if (self.options.mapController.data.router_attribution) {
        attributionWrapper.innerHTML = self.options.mapController.data.router_attribution;
      }

      return attributionWrapper;

    },

    recalculateRoute: function () {
      var tmpFeature,
      proxy = this.options.mapController.proxy;

      this.locationsSource.clear();
      if (this.fromValue) {
        tmpFeature = new ol.Feature({
          geometry: this.fromValue.clone().transform('EPSG:4326', 'EPSG:3857')
        });
        if (this.options.mapController.data.router_from_locstyle && proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_from_locstyle]) {
          tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_from_locstyle].style);
        }
        this.locationsSource.addFeature(tmpFeature);
      }
      if (this.toValue) {
        tmpFeature = new ol.Feature({
          geometry: this.toValue.clone().transform('EPSG:4326', 'EPSG:3857')
        });
        if (this.options.mapController.data.router_to_locstyle && proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_to_locstyle]) {
          tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_to_locstyle].style);
        }
        this.locationsSource.addFeature(tmpFeature);
      }
      if(this.overValue){
          for(var propt in this.overValue){
              tmpFeature = new ol.Feature({
                  geometry: this.overValue[propt].clone().transform('EPSG:4326', 'EPSG:3857')
              });
              if (this.options.mapController.data.router_interim_locstyle && proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_interim_locstyle]) {
                  tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_interim_locstyle].style);
              }
              this.locationsSource.addFeature(tmpFeature);
          }
      }
      if (this.fromValue && this.toValue) {
          if(this.overValue){
              this.performViaRoute(this.fromValue, this.toValue, this.overValue);
          }
          else {
              this.performViaRoute(this.fromValue, this.toValue);
          }
      }

    },

    performViaRoute: function (fromPoint, toPoint, overPoint) {

      var url,
          self,
          fromCoord,
          toCoord,
          overCoord;

      self = this;

      fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      toCoord = [toPoint.getCoordinates()[1], toPoint.getCoordinates()[0]];
      if(overPoint){
          overCoord = new Array();
          for(var propt in overPoint){
              overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
          }

      }
        if (this.options.mapController.data.router_api_selection == '1' || this.options.mapController.data.router_api_selection == '2'){//OSRM-API:5.x or ORS- API
            url = self.routingApi + '/' + fromCoord ;

            if(overPoint){
                for(var i = 0;i<overCoord.length;i++)
                url +='/'+overCoord[i];
            }
            url +='/'+toCoord;
            if(this.routeProfile && this.routeProfile.active){
                url += '?profile='+this.routeProfile.active;
            }
            this.spinner.show();

            jQuery.ajax({
                'url': url})
            .done(function (response) {
                    self.response = response;
                    if (response) {
                        self.showRoute(response);
                    }

                })
            .always(function () {
                self.spinner.hide();
                self.update();
            });

            return '';

        } else{//OSRM-API:<5
            url = self.routingApi + '?output=json&instructions=true&alt=false&loc_from=' + fromCoord + '&loc_to=' + toCoord;
            this.spinner.show();

            jQuery.ajax({
                'url': url})
            .done(function (response) {

                if (response) {
                    self.showRoute(response);
                }

            })
            .always(function () {
                self.spinner.hide();
                self.update();
            });

            return '';
        }


    },

    showRoute: function (routeResponse) {

      this.showRouteLayer(routeResponse,0);
      this.showRouteInstructions(routeResponse,0);
    },
    showAltRoute: function (routeResponse, routeNumber){
      this.showRouteLayer(routeResponse,routeNumber);
      this.showRouteInstructions(routeResponse,routeNumber);
    },

    showRouteLayer: function (routeResponse,routeNumber) {

      var mapView,
          wayPolyline,
          routeFeatures,
          altRouteFeatures,
          rightPadding,
          leftPadding,
          routeNumber = routeNumber || 0;

      if(routeResponse) {
          this.routingWaySource.clear();
          this.routingAltWaySource.clear();
          mapView = this.options.mapController.map.getView();

          if (this.options.mapController.data.router_api_selection == '1' ||this.options.mapController.data.router_api_selection == '2' ) {//OSRM-API:5.x
              wayPolyline = new ol.format.Polyline();

              // add route

              if (routeResponse.routes && routeResponse.routes[1]) {//check for alternative route
                  if (routeNumber == 1) {
                      altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[0].geometry, {
                          dataProjection: 'EPSG:4326',
                          featureProjection: mapView.getProjection()
                      });
                      altRouteFeatures[0].setId(0);
                  }
                  else {
                      altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[1].geometry, {
                          dataProjection: 'EPSG:4326',
                          featureProjection: mapView.getProjection()
                      });
                      altRouteFeatures[0].setId(1);
                  }
              }
              routeFeatures = wayPolyline.readFeatures(routeResponse.routes[routeNumber].geometry, {
                  dataProjection: 'EPSG:4326',
                  featureProjection: mapView.getProjection()
              });
              routeFeatures[0].setId(routeNumber);


          } else {//OSRM-API:<5
              wayPolyline = new ol.format.Polyline({
                  'factor': this.options.mapController.data.router_viaroute_precision || 1e6
              });

              // add route
              routeFeatures = wayPolyline.readFeatures(routeResponse.route_geometry, {
                  dataProjection: 'EPSG:4326',
                  featureProjection: mapView.getProjection()
              });
          }
          if (this.options.mapController.data.router_alternative == '1') {
              if (routeResponse.routes && (routeResponse.routes.length > 1) && (routeResponse.routes[1])) {
                  this.routingAltWaySource.addFeatures(altRouteFeatures);
              }
          }
          this.routingWaySource.addFeatures(routeFeatures);
          // render view
          // so the route gets drawn before the animation starts
          this.options.mapController.map.renderSync();

          // animation
          mapView.animate({
              start: +new Date(),
              duration: 2000,
              resolution: mapView.getResolution(),
              center: [0, 0]
              //rotation: Math.PI
          });
          // this.options.mapController.map.beforeRender(
          //     ol.animation.pan({
          //       start: +new Date(),
          //       duration: 2000,
          //       source: mapView.getCenter()
          //     }),
          //     ol.animation.zoom({
          //       start: +new Date(),
          //       duration: 2000,
          //       resolution: mapView.getResolution()
          //     })
          // );

          // calculate padding
          leftPadding = 0;
          if (this.options.mapController.activePortside && this.options.mapController.activePortside.container) {
              leftPadding = $(this.options.mapController.activePortside.container).outerWidth();
          }

          rightPadding = 0;
          if (this.options.mapController.activeStarboard && this.options.mapController.activeStarboard.container) {
              rightPadding = $(this.options.mapController.activeStarboard.container).outerWidth();
          }

          // center on route
          mapView.fit(
              routeFeatures[0].getGeometry(),
              this.options.mapController.map.getSize(),
              {
                  padding: [0, rightPadding, 0, leftPadding]
              }
          );
      }
    },



      getInstructionIcon: function(strMod,strType) {
          var image = "";

          switch(strMod) {
              case "right":
                  image = "turn-right.png";
                  break;
              case "left":
                  image = "turn-left.png";
                  break;
              case "sharp left":
                  image = "sharp-left.png";
                  break;
              case "sharp right":
                  image = "sharp-right.png";
                  break;
              case "slight left":
                  image = "slight-left.png";
                  break;
              case "slight right":
                  image = "slight-right.png";
                  break;
              case "uturn":
                  image = "u-turn.png";
                  break;
              case "straight":
                  image = "continue.png";
                  break;
              default:
                  image ="default.png";
                  break;
          }
          switch(strType){
              case "depart":
                  image ="head.png";
                  break;
              case "arrive":
                  image ="target.png";
                  break;
              case "roundabout":
                  image ="round-about.png";
                  break;
              default:
                  break;
          }

          return "bundles/con4gismaps/vendor/osrm/images/" + image;
      },
      getInstructionIconORS: function(intType){
        let image;
        switch(intType){
            case 0:
                image = "turn-left.png";
                break;
            case 1:
                image = "turn-right.png";
                break;
            case 2:
                image = "sharp-left.png";
                break;
            case 3:
                image = "sharp-right.png";
                break;
            case 4:
                image = "slight-left.png";
                break;
            case 5:
                image = "slight-right.png";
                break;
            case 6:
                image = "continue.png";
                break;
            case 7:
                image = "round-about.png";
                break;
            case 8:
                image = "round-about.png";
                break;
            case 9:
                image = "u-turn.png";
                break;
            case 10:
                image = "target.png";
                break;
            case 11:
                image = "head.png";
                break;
            case 12:
                image = "slight-left.png";
                break;
            case 13:
                image = "slight-right.png";
                break;

        }
          return document.getElementsByTagName('base')[0].href + "bundles/con4gismaps/vendor/osrm/images/" + image;
      },

      getTypeText: function(strType) {
          var textID;

          switch(strType) {
              case "turn":
                  textID = "ROUTER_5.X_TYPE_0";
                  break;
              case "new name":
                  textID = "ROUTER_5.X_TYPE_1";
                  break;
              case "depart":
                  textID = "ROUTER_5.X_TYPE_2";
                  break;
              case "arrive":
                  textID = "ROUTER_5.X_TYPE_3";
                  break;
              case "merge":
                  textID = "ROUTER_5.X_TYPE_4";
                  break;
              case "on ramp":
                  textID = "ROUTER_5.X_TYPE_5";
                  break;
              case "off ramp":
                  textID = "ROUTER_5.X_TYPE_6";
                  break;
              case "fork":
                  textID = "ROUTER_5.X_TYPE_7";
                  break;
              case "end of road":
                  textID = "ROUTER_5.X_TYPE_8";
                  break;
              case "use lane":
                  textID = "ROUTER_5.X_TYPE_9";
                  break;
              case "continue":
                  textID = "ROUTER_5.X_TYPE_10";
                  break;
              case "roundabout":
              case "exit roundabout":
                  textID = "ROUTER_5.X_TYPE_11";
                  break;
              case "rotary":
              case "exit rotary":
                  textID = "ROUTER_5.X_TYPE_12";
                  break;
              case "roundabout turn":
                  textID = "ROUTER_5.X_TYPE_13";
                  break;
              case "notification":
                  textID = "ROUTER_5.X_TYPE_14";
                  break;
              default:
                  break;
          }
          return c4g.maps.constant.i18n[textID];
      },

      getModifierText: function(strModifier) {
          var textID;

          switch(strModifier) {
              case "uturn":
                  textID = "ROUTER_5.X_MOD_0";
                  break;
              case "sharp right":
                  textID = "ROUTER_5.X_MOD_1";
                  break;
              case "right":
                  textID = "ROUTER_5.X_MOD_2";
                  break;
              case "slight right":
                  textID = "ROUTER_5.X_MOD_3";
                  break;
              case "straight":
                  textID = "ROUTER_5.X_MOD_4";
                  break;
              case "slight left":
                  textID = "ROUTER_5.X_MOD_5";
                  break;
              case "left":
                  textID = "ROUTER_5.X_MOD_6";
                  break;
              case "sharp left":
                  textID = "ROUTER_5.X_MOD_7";
                  break;
              default:
                  textID = "ROUTER_5.X_MOD_8";
          }
          return c4g.maps.constant.i18n[textID];
      },
      getDrivingInstructionIcon: function (instructionId) {
          var id,
              image;

          id = instructionId.replace(/^11-\d{1,}$/, "11");    // dumb check, if there is a roundabout (all have the same icon)

          image = 'default.png';

          switch (id) {
              case '1':
                  image = 'continue.png';
                  break;
              case '2':
                  image = 'slight-right.png';
                  break;
              case '3':
                  image = 'turn-right.png';
                  break;
              case '4':
                  image = 'sharp-right.png';
                  break;
              case '5':
                  image = 'u-turn.png';
                  break;
              case '6':
                  image = 'sharp-left.png';
                  break;
              case '7':
                  image = 'turn-left.png';
                  break;
              case '8':
                  image = 'slight-left.png';
                  break;
              case '10':
                  image = 'head.png';
                  break;
              case '11':
                  image = 'round-about.png';
                  break;
              case '15':
                  image = 'target.png';
                  break;
          }
          return document.getElementsByTagName('base')[0].href + "bundles/con4gismaps/vendor/osrm/images/" + image;

      },
      getText: function (id) {

          var text_id = "ROUTER_" + id;

          if (c4g.maps.constant.i18n[text_id] === undefined) {
              console.warn(text_id + " can't find in language files.");
          }
          return c4g.maps.constant.i18n[text_id];
      },

      getDrivingInstruction: function (instructionId) {

          var id,
              description;

          id = "DIRECTION_" + instructionId.replace(/^11-\d{2,}$/, "11-x");   // dumb check, if there are 10+ exits on a roundabout (say the same for exit 10+)

          description = this.getText(id);
          if (!description) {
              description = this.getText('DIRECTION_0');
          }

          return description;
      },
      showRouteInstructions: function (routeResponse,routeNumber) {

          var self,
              routerInstruction,
              routerInstructionsHeader,
              routerInstructionsHtml,
              instr,
              strType,
              strMod,
              rowstyle,
              routeNumber = routeNumber || 0,
              i,
              j,
              route_name_0 = "",
              route_name_1 = "",
              total_distance = "",
              total_time = "";

          self = this;


          if (self.routerInstructionsWrapper === undefined) {
              self.routerInstructionsWrapper = document.createElement('div');
              self.routerInstructionsWrapper.className = c4g.maps.constant.css.ROUTER_INSTRUCTIONS_WRAPPER;
              self.routerViewContentWrapper.appendChild(self.routerInstructionsWrapper);
          } else {
              $(self.routerInstructionsWrapper).empty();
          }

          routerInstructionsHeader = document.createElement('div');
          routerInstructionsHeader.className = c4g.maps.constant.css.ROUTER_INSTRUCTIONS_HEADER;

          if (routeResponse) {
              if (this.options.mapController.data.router_api_selection == '1') {//OSRM-API:5.x
                  if (routeResponse.routes[routeNumber].legs[0].summary) {
                      route_name_0 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[0];
                      route_name_1 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[1];
                      if (routeResponse.routes[routeNumber].legs[1]) {
                          route_name_1 = routeResponse.routes[routeNumber].legs[1].summary.split(",")[1];
                      }

                  }
                  total_distance = this.toHumanDistance(routeResponse.routes[routeNumber].distance);
                  total_time = this.toHumanTime(routeResponse.routes[routeNumber].duration);
              }

          else if(this.options.mapController.data.router_api_selection == '0') {//OSRM-API:<5
              if (routeResponse.route_name) {
                  route_name_0 = routeResponse.route_name[0];
                  route_name_1 = routeResponse.route_name[1];
              }

              if (routeResponse.route_summary) {
                  total_distance = this.toHumanDistance(routeResponse.route_summary.total_distance);
                  total_time = this.toHumanTime(routeResponse.route_summary.total_time);
              }


          }
          else if (this.options.mapController.data.router_api_selection == '2'){//OSR-API
                  total_time = this.toHumanTime(routeResponse.routes[routeNumber].summary.duration);
                  total_distance = this.toHumanDistance(routeResponse.routes[routeNumber].summary.distance);
              }

          if(route_name_0 && route_name_1){
              routerInstructionsHeader.innerHTML = '<label>' + c4g.maps.constant.i18n.ROUTER_VIEW_LABEL_ROUTE + '</label> <em>' + route_name_0 + ' &#8594; ' + route_name_1 + '</em><br>' + '<label>' + c4g.maps.constant.i18n.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + c4g.maps.constant.i18n.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
          }
          else if(this.routeProfile.active){
              routerInstructionsHeader.innerHTML = '<label>' + c4g.maps.constant.i18n.ROUTER_VIEW_LABEL_PROFILE + '</label> <em>'+this.options.mapController.data.router_profiles[this.routeProfile.active]  + '</em><br>' + '<label>' + c4g.maps.constant.i18n.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + c4g.maps.constant.i18n.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
          }



          self.routerInstructionsWrapper.appendChild(routerInstructionsHeader);

          routerInstruction = document.createElement('div');

          routerInstructionsHtml = '<table class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_TABLE + '" cellpadding="0" cellspacing="0">';
          if (this.options.mapController.data.router_api_selection === '1') {//OSRM-API:5.x
              for (j = 0; j < routeResponse.routes[routeNumber].legs.length; j += 1) {
                  for (i = 0; i < routeResponse.routes[routeNumber].legs[j].steps.length; i += 1) {
                      instr = routeResponse.routes[routeNumber].legs[j].steps[i];

                      strType = instr.maneuver.type;
                      if (instr.maneuver.modifier) {
                          strMod = instr.maneuver.modifier;
                      }
                      rowstyle = c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_ODD;

                      if (i % 2 === 0) {
                          rowstyle = c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_EVEN;
                      }

                      rowstyle += " " + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM;

                      routerInstructionsHtml += '<tr class="' + rowstyle + '">';

                      routerInstructionsHtml += '<td class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
                      routerInstructionsHtml += '<img class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getInstructionIcon(strMod, strType) + '" alt=""/>';
                      routerInstructionsHtml += '</td>';


                      routerInstructionsHtml += '<td class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr.maneuver.location + '">';


                      // build route description
                      var instructiontext = this.getTypeText(instr.maneuver.type).replace(/%s/, instr.name).replace(/%m/, this.getModifierText(instr.maneuver.modifier)).replace(/%z/, instr.maneuver.exit);
                      if (instr.name.length < 1) {
                          instructiontext = instructiontext.replace(/\[.*?\]/g, '');
                      } else {
                          instructiontext = instructiontext.replace(/\[(.*)\]/, "$1");
                      }
                      routerInstructionsHtml += instructiontext;


                      routerInstructionsHtml += '</div>';
                      routerInstructionsHtml += "</td>";

                      routerInstructionsHtml += '<td class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
                      if (i !== routeResponse.routes[routeNumber].legs[0].steps.length - 1) {
                          routerInstructionsHtml += this.toHumanDistance(instr.distance);
                      }
                      routerInstructionsHtml += "</td>";

                      routerInstructionsHtml += "</tr>";
                  }
              }

          } else if(this.options.mapController.data.router_api_selection === '0'){//OSRM-API:<5
              for (i = 0; i < routeResponse.route_instructions.length; i += 1) {
                  instr = routeResponse.route_instructions[i];
                  rowstyle = c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_ODD;

                  if (i % 2 === 0) {
                      rowstyle = c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_EVEN;
                  }

                  rowstyle += " " + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM;

                  routerInstructionsHtml += '<tr class="' + rowstyle + '">';

                  routerInstructionsHtml += '<td class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
                  routerInstructionsHtml += '<img class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getDrivingInstructionIcon(instr[0]) + '" alt=""/>';
                  routerInstructionsHtml += '</td>';

                  routerInstructionsHtml += '<td class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr[3] + '">';

                  // build route description
                  if (instr[1] !== "") {
                      routerInstructionsHtml += this.getDrivingInstruction(instr[0]).replace(/\[(.*)\]/, "$1").replace(/%s/, instr[1]).replace(/%d/, this.getText(instr[6]));
                  } else {
                      routerInstructionsHtml += this.getDrivingInstruction(instr[0]).replace(/\[(.*)\]/, "").replace(/%d/, this.getText(instr[6]));
                  }


                  routerInstructionsHtml += '</div>';
                  routerInstructionsHtml += "</td>";

                  routerInstructionsHtml += '<td class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
                  if (i !== routeResponse.route_instructions.length - 1) {
                      routerInstructionsHtml += this.toHumanDistance(instr[5]);
                  }
                  routerInstructionsHtml += "</td>";

                  routerInstructionsHtml += "</tr>";
              }
          }
          else if(this.options.mapController.data.router_api_selection === '2' ){//OpenRouteService
              for (j = 0; j < routeResponse.routes[routeNumber].segments.length; j += 1) {
                  for (i = 0; i < routeResponse.routes[routeNumber].segments[j].steps.length; i += 1) {
                      instr = routeResponse.routes[routeNumber].segments[j].steps[i];

                      strType = instr.type;

                      rowstyle = c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_ODD;

                      if (i % 2 === 0) {
                          rowstyle = c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_EVEN;
                      }

                      rowstyle += " " + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM;

                      routerInstructionsHtml += '<tr class="' + rowstyle + '">';

                      routerInstructionsHtml += '<td class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
                      routerInstructionsHtml += '<img class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getInstructionIconORS(strType) + '" alt=""/>';
                      routerInstructionsHtml += '</td>';

                      if(instr.maneuver){
                          routerInstructionsHtml += '<td class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr.maneuver.location + '">';
                      }
                      else{
                          routerInstructionsHtml += '<td class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + 0 + '">';
                      }


                      // build route description

                      routerInstructionsHtml += instr.instruction;


                      routerInstructionsHtml += '</div>';
                      routerInstructionsHtml += "</td>";

                      routerInstructionsHtml += '<td class="' + c4g.maps.constant.css.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
                      if (i !== routeResponse.routes[routeNumber].segments[0].steps.length - 1) {
                          routerInstructionsHtml += this.toHumanDistance(instr.distance);
                      }
                      routerInstructionsHtml += "</td>";

                      routerInstructionsHtml += "</tr>";
                  }
              }
          }


          routerInstructionsHtml += '</table>';

          routerInstruction.innerHTML = routerInstructionsHtml;

          self.routerInstructionsWrapper.appendChild(routerInstruction);

          this.adjustInstructionMapInteraction();

      }
    },

    adjustInstructionMapInteraction: function (routerInstruction) {
      var self = this,
          fnItemClick,
          fnItemOver,
          fnItemOut;

      fnItemClick = function (element) {
          if (self.routingWaySource && self.routingWaySource.getFeatures() && self.options.mapController.data.router_api_selection == '0' ) {
              var feature = self.routingWaySource.getFeatures()[0];
              if (feature) {
                  var currentCoordinates = feature.getGeometry().getCoordinates()[element.data('pos')];
                  self.routingHintSource.clear();
                  var currentHintFeature = new ol.Feature({
                      geometry: new ol.geom.Point(currentCoordinates)
                  });
                  self.routingHintSource.addFeature(currentHintFeature);
                  self.options.mapController.map.getView().setCenter(currentCoordinates);
              }
          }
          if(self.routingWaySource && self.options.mapController.data.router_api_selection >= '1'){
              self.routingHintSource.clear();
              var coordLonLat = element.data('pos');
              var stringlonlat = coordLonLat.split(",");
              stringlonlat[0] = parseFloat(stringlonlat[0]);
              stringlonlat[1] = parseFloat(stringlonlat[1]);
              var newCoord = ol.proj.fromLonLat(stringlonlat);
              var currentHintFeature = new ol.Feature({
                  geometry: new ol.geom.Point(newCoord)
              })
              self.routingHintSource.addFeature(currentHintFeature);
              self.options.mapController.map.getView().setCenter(newCoord);
          }
      };

      fnItemOver = function (element) {
        if (self.routingWaySource && self.routingWaySource.getFeatures() && self.options.mapController.data.router_api_selection == '0') {
            var feature = self.routingWaySource.getFeatures()[0];
            if (feature) {
                self.routingHintSource.clear();
                var currentHintFeature = new ol.Feature({
                    geometry: new ol.geom.Point(feature.getGeometry().getCoordinates()[element.data('pos')])
                });
                self.routingHintSource.addFeature(currentHintFeature);
            }
        }
        if (self.routingWaySource && self.routingWaySource.getFeatures() && self.options.mapController.data.router_api_selection >= '1') {
            var feature = self.routingWaySource.getFeatures()[0];
            if (feature) {
                self.routingHintSource.clear();
                var coordLonLat = element.data('pos');
                var stringlonlat = coordLonLat.split(",");
                stringlonlat[0] = parseFloat(stringlonlat[0]);
                stringlonlat[1] = parseFloat(stringlonlat[1]);
                var newCoord = ol.proj.fromLonLat(stringlonlat);
                var currentHintFeature = new ol.Feature({
                    geometry: new ol.geom.Point(newCoord)
                });
                self.routingHintSource.addFeature(currentHintFeature);
            }
          }
      };

      fnItemOut = function () {
        self.routingHintSource.clear();
      };


      $('[data-pos]', routerInstruction).each(function (index, element) {

        var $element = $(element);

        $element.click(function () {
          fnItemClick($element);
        });

        $element.on('mouseenter', function () {
          fnItemOver($element);
        });

        $element.on('mouseleave', function () {
          fnItemOut();
        });

      });
    },

    clearInput: function ($input) {

      $input.val('');
      $input.trigger('change');
      this.routingWaySource.clear();
      this.routingAltWaySource.clear();
      this.routingHintSource.clear();


      $(this.routerInstructionsWrapper).empty();
      this.recalculateRoute();
      this.update();
    },
    clearOver: function ($input, index){
        if(this.overValue){
            delete this.overValue[index];
        }
        this.$buttonOver.prop("disabled",false);
        $(this.routerInstructionsWrapper).empty();
        this.recalculateRoute();
        this.update();
    },

    performReverseSearch: function ($input, value) {

      var self = this,
          url;

      url = this.geoReverseSearchApi + '?format=json&lat=' + value[1] + '&lon=' + value[0];
      this.spinner.show();

      jQuery.ajax({
        'url': url})
          .done(function (response) {

              if (response) {
                  var value = "";
                  if (response.address) {
                      if (response.address.city) {
                          value = response.address.city;
                          if (response.address.road) {
                              value = ', ' + value;
                          }
                      }
                      if (response.address.town) {
                          value = response.address.town;
                          if (response.address.road) {
                              value = ', ' + value;
                          }
                      }
                      if (response.address.road) {
                          if (response.address.house_number) {
                              value = ' ' + response.address.house_number + value;
                          }
                          value = response.address.road + value;
                      }
                  }

                  if (value === "") {
                      value = response.display_name;
                  }
                  $input.val(value);

                  if ($input.attr('name') === "routingFrom") {
                      self.$routerFromClear.show();
                  } else if ($input.attr('name') === "routingTo") {
                      self.$routerToClear.show();
                  }

                  self.recalculateRoute();
              }

          })
      .always(function () {
        self.spinner.hide();
      });

    },

    performSearch: function ($input, value) {

      var map,
          bounds,
          viewbox,
          self,
          url;

      self = this;

      if ($input.val() === "") {
        //self.clearInput($input);
        delete self[value];
        return "";
      }

      map = self.options.mapController.map;
      bounds = map.getView().calculateExtent(map.getSize());
      bounds = ol.proj.transformExtent(bounds, map.getView().getProjection(), 'EPSG:4326');
      viewbox = '&viewbox=' + bounds[0] + ',' + bounds[1] + ',' + bounds[2] + ',' + bounds[3];

      url = self.geoSearchApi + '?format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;

      jQuery.ajax({
        'url': url
      }).done(function (response) {

          if (response.length > 0) {
              if(value ==="overValue"){
                  if (!self.overValue) {
                      self.overValue={};
                  }
                  self.overValue[self.index]=new ol.geom.Point([parseFloat(response[0].lon), parseFloat(response[0].lat)]);
                  self.$buttonOver.prop("disabled",false);
              }
              else{
                  self[value] = new ol.geom.Point(
                      [parseFloat(response[0].lon), parseFloat(response[0].lat)]
                  );
              }
          } else {
              alert(c4g.maps.constant.i18n.ROUTER_VIEW_ALERT_ADDRESS);
              self.clearInput($input);
              delete self[value];
          }

          self.recalculateRoute();
      })
      .error(function () {
          alert(c4g.maps.constant.i18n.ROUTER_VIEW_ALERT_GEOCODING);
      });



      return "";

    },

    toHumanDistance: function (distanceInMeters) {

      // copied from old sources

      var distance,
          humanDistance;

      distance = parseInt(distanceInMeters, 10);
      distance = distance / 1000;

      if (distance >= 100) {
        humanDistance = distance.toFixed(0) + '&nbsp;' + 'km';
      } else if (distance >= 10) {
        humanDistance = distance.toFixed(1) + '&nbsp;' + 'km';
      } else if (distance >= 0.1) {
        humanDistance = distance.toFixed(2) + '&nbsp;' + 'km';
      } else {
        humanDistance = (distance * 1000).toFixed(0) + '&nbsp;' + 'm';
      }

      return humanDistance;
    },

    toHumanTime: function (timeInSeconds) {

      // copied from old sources

      var seconds,
          minutes,
          hours,
          humanTime;

      seconds = parseInt(timeInSeconds, 10);
      minutes = parseInt(seconds / 60, 10);
      seconds = seconds % 60;

      hours = parseInt(minutes / 60, 10);
      minutes = minutes % 60;

      if (hours === 0 && minutes === 0) {
        humanTime = seconds + '&nbsp;' + 's';
      } else if (hours === 0) {
        humanTime = minutes + '&nbsp;' + 'min';
      } else {
        humanTime = hours + '&nbsp;' + 'h' + '&nbsp;' + minutes + '&nbsp;' + 'min';
      }

      return humanTime;
    }

  });

}(jQuery, this.c4g));