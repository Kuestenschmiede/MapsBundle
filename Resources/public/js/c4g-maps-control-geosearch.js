// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

(function ($, c4g) {
  'use strict';

  /**
   * @TODO description
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  c4g.maps.control.GeoSearch = function (opt_options) {

    var self,
        options,
        element,
        button,
        searchWrapper,
        searchInput,
        searchButton,
        resultTrigger,
        resultWrapper;

    self = this;
    // this.element = element;
    // this.searchWrapper = searchWrapper;
    // this.resultWrapper = resultWrapper;

    options = opt_options || {};


    // default options
    options = $.extend({
      mapController: undefined,
      className: c4g.maps.constant.css.GEOSEARCH,
      extDiv: false,
      collapsible: true,
      collapsed: true,
      tipLabel: c4g.maps.constant.i18n.CTRL_GEOSEARCH,
      label: '>>',
      collapsedLabel: '(?)',
      attribution: true,
      // customAttribution: '',
      // engineUrl: false,
      searchZoom: 12,
      zoomBounds: false,
      results: false,
      quicksearch: true,
      animate: true,
      markResult: true,
      autopick: false
    }, options);

    // prepare search-configuration
    //
    this.config = {};
    // searchEngineUrl
    // if (typeof options.engineUrl === 'string') {
    //   // if it is a string, then it is (hopefully) a URL, that we can use directly
    //   // @TODO add a URL-check
    //   this.config.url = options.engineUrl;
    // } else {
    //   // if it is none of the above, then use the default URL
    //   this.config.url = 'https://nominatim.openstreetmap.org/search';
    // }
    this.config.url = options.mapController.data.api.geosearch + "/" + options.mapController.data.profile;
    // zoomlevel when centering the found location
    this.config.zoomlevel = options.searchZoom;
    // zoom to bounds instead of zoomlevel when centering the found location
    this.config.zoombounds = options.zoomBounds;
    // quicksearch-option (instantly jump to the first found location)
    this.config.quicksearch = options.quicksearch;
    // animation (animate flight to targeted location)
    this.config.animate = options.animate;
    // highlight the result location
    this.config.markResult = options.markResult;

    this.config.autopick = options.autopick;
    this.config.mapController = options.mapController;
    this.config.results = options.results;

    this.config.collapsed = options.collapsed;

    // @TODO
    // Attribution

    // check extDiv
    if (options.extDiv && document.getElementById(options.extDiv)) {
      options.extDiv = document.getElementById(options.extDiv);
    } else {
      options.extDiv = false;
    }

    // controlwrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + c4g.maps.constant.css.OL_UNSELECTABLE + ' ' + c4g.maps.constant.css.OL_CONTROL;

    if (options.collapsed && !options.extDiv) {
      $(element).addClass(c4g.maps.constant.css.CLOSE);
    } else {
      $(element).addClass(c4g.maps.constant.css.OPEN);
    }

    // wrapper div
    searchWrapper = document.createElement('div');
    searchWrapper.className = c4g.maps.constant.css.GEOSEARCH_WRAPPER;
    element.appendChild(searchWrapper);

    // search-field
    searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchWrapper.appendChild(searchInput);

    // @TODO
    // // result-trigger
    // resultTrigger = document.createElement('button');
    // resultTrigger.className = 'RT';
    // searchWrapper.appendChild(resultTrigger);

    // $(resultTrigger).click(function () {
    //   try {
    //     this.blur();
    //   } catch (ignore) {}
    //   self.toggleResults();
    // });

    // // result-wrapper
    // resultWrapper = document.createElement('div');
    // resultWrapper.className = 'RESULTS ' + c4g.maps.constant.css.CLOSE;
    // resultWrapper.innerHTML = 'no results';
    // searchWrapper.appendChild(resultWrapper);
    // this.resultWrapper = resultWrapper;

    // search-button
    searchButton = document.createElement('button');
    searchButton.className = c4g.maps.constant.css.GEOSEARCH_START;
    // @TODO
    searchButton.title = 'start search';
    searchWrapper.appendChild(searchButton);

      $(searchButton).click(function () {
          try {
              this.blur();
          } catch (ignore) {
          }
          if (searchInput.value) {

              self.findLocation(searchInput.value);

              if(document.getElementById("resultcontainer")){
                  document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
              }
              if(self.config.results){

              var searchResultContainer = document.createElement('ul');
              searchResultContainer.setAttribute("id","resultcontainer");
              if (self.results) {
                  for (var i = 0; i < self.results.length; i++) {
                      var searchResult = document.createElement('li');
                      var searchResultButton = document.createElement('button');
                      searchResultButton.setAttribute("id", i);
                      searchResultButton.setAttribute('class', 'searchResultButton');
                      searchResultButton.addEventListener('click',function () {
                          self.zoomTo(this.getAttribute("id"))
                      });

                      searchResultButton.setAttribute("name",self.results[i].display_name);
                      searchResultButton.innerHTML =self.results[i].display_name;
                      searchResult.appendChild(searchResultButton);
                      searchResultContainer.appendChild(searchResult);

                  }
                  searchWrapper.appendChild(searchResultContainer);
              }
              }
          }
      });

    $(searchInput).keypress(function (e) {
      if (e.which === 13) {
          if (searchInput.value) {

              self.findLocation(searchInput.value);

              if(document.getElementById("resultcontainer")){
                  document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
              }
              if(self.config.results){

                  var searchResultContainer = document.createElement('ul');
                  searchResultContainer.setAttribute("id","resultcontainer");
                  if (self.results) {
                      for (var i = 0; i < self.results.length; i++) {
                          var searchResult = document.createElement('li');
                          var searchResultButton = document.createElement('button');
                          searchResultButton.setAttribute("id", i);
                          searchResultButton.setAttribute('class', 'searchResultButton');
                          searchResultButton.addEventListener('click',function () {
                              self.zoomTo(this.getAttribute("id"))
                          });

                          searchResultButton.setAttribute("name",self.results[i].display_name);
                          searchResultButton.innerHTML =self.results[i].display_name;
                          searchResult.appendChild(searchResultButton);
                          searchResultContainer.appendChild(searchResult);

                      }
                      searchWrapper.appendChild(searchResultContainer);
                  }
              }
          }
        return false;
      }
    });


    if (options.collapsible && !options.extDiv) {
      // button
      button = document.createElement('button');
      button.className = c4g.maps.constant.css.GEOSEARCH_TRIGGER;
      button.title = options.tipLabel;
      element.appendChild(button);

      // set onClick to the toggle-function
      $(button).click(function () {
        try {
          this.blur();
        } catch (ignore) {
        }
        self.toggle();
      });
    } else if (options.extDiv) {
      options.target = options.extDiv;
    }

    // inheritance-stuff
    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });
  };
  ol.inherits(c4g.maps.control.GeoSearch, ol.control.Control);


  /*
   * Add methods
   */
  c4g.maps.control.GeoSearch.prototype = $.extend(c4g.maps.control.GeoSearch.prototype, {

    /**
     * @TODO
     *
     * @return  {[type]}  [description]
     */
    open: function () {
      if ($(this.element).hasClass(c4g.maps.constant.css.CLOSE)) {
        $(this.element).addClass(c4g.maps.constant.css.OPEN)
            .removeClass(c4g.maps.constant.css.CLOSE)
            .find('input')[0].focus();
      }
    },

    /**
     * @TODO
     *
     * @return  {[type]}  [description]
     */
    close: function () {
      if ($(this.element).hasClass(c4g.maps.constant.css.OPEN)) {
        $(this.element).addClass(c4g.maps.constant.css.CLOSE)
            .removeClass(c4g.maps.constant.css.OPEN);
        // this.closeResults();
          if(document.getElementById("resultcontainer")){
              document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
          }
      }
    },

    /**
     * @TODO
     *
     * @return  {[type]}  [description]
     */
    toggle: function () {
      if ($(this.element).hasClass(c4g.maps.constant.css.CLOSE)) {
        this.open();
      } else {
        this.close();
      }
    },

    // /**
    //  * @TODO
    //  *
    //  * @return  {[type]}  [description]
    //  */
    // openResults: function () {
    //   if ($(this.resultWrapper).hasClass(c4g.maps.constant.css.CLOSE)) {
    //     $(this.resultWrapper).addClass(c4g.maps.constant.css.OPEN)
    //       .removeClass(c4g.maps.constant.css.CLOSE);
    //   }
    // },

    // /**
    //  * @TODO
    //  *
    //  * @return  {[type]}  [description]
    //  */
    // closeResults: function () {
    //   if ($(this.resultWrapper).hasClass(c4g.maps.constant.css.OPEN)) {
    //     $(this.resultWrapper).addClass(c4g.maps.constant.css.CLOSE)
    //       .removeClass(c4g.maps.constant.css.OPEN);
    //   }
    // },

    // /**
    //  * @TODO
    //  *
    //  * @return  {[type]}  [description]
    //  */
    // toggleResults: function () {
    //   if ($(this.resultWrapper).hasClass(c4g.maps.constant.css.CLOSE)) {
    //     this.openResults();
    //   } else {
    //     this.closeResults();
    //   }
    // },

    /**
     * @TODO
     *
     * @return  {[type]}  [description]
     */
    clearResults: function () {
      this.resultWrapper.innerHTML = '';
    },

    /**
     * @TODO
     *
     * @param   {[type]}  location  [description]
     *
     * @return  {[type]}            [description]
     */
    zoomTo: function (index) {
        var self,
            map,
            animate,
            animationDuration,
            markResult,
            result,
            resultCoordinate,
            zoomType;

        self = this;
        map = this.getMap();

        animate = this.config.animate;
        animationDuration = 2000;
        markResult = this.config.markResult;

        result = self.results[index];
        resultCoordinate = ol.proj.transform([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857')

        if (animate) {
            if (self.config.zoombounds && result.boundingbox) {
                // translate osm-extent to ol3-extent

                var osmExtent = [];
                osmExtent.push(parseFloat(result.boundingbox[2]));
                osmExtent.push(parseFloat(result.boundingbox[0]));
                osmExtent.push(parseFloat(result.boundingbox[3]));
                osmExtent.push(parseFloat(result.boundingbox[1]));

                map.getView().animate({
                    zoom: 8,
                    duration: animationDuration / 2
                });

                map.getView().animate({
                    center: resultCoordinate,
                    duration: animationDuration
                });

                window.setTimeout(function () {
                    map.getView().fit(
                        ol.proj.transformExtent(osmExtent, 'EPSG:4326', 'EPSG:3857'),
                        map.getSize(),
                        {
                            minZoom: map.getView().get('minZoom') || 0,
                            maxZoom: map.getView().get('maxZoom') || 19,
                            duration: animationDuration / 2,
                            easing: ol.easing.easeOut
                        }
                    );
                }, animationDuration)


            } else if (self.config.zoomlevel >= 0) {
                map.getView().animate({
                    zoom: 8,
                    duration: animationDuration / 2
                }, {
                    zoom: self.config.zoomlevel,
                    duration: animationDuration / 2
                });

                map.getView().animate({
                    center: resultCoordinate,
                    duration: animationDuration
                });
            }


        }
        else {
            map.getView().setCenter(resultCoordinate);
        }
        if (markResult) {
            var addMarker,
                markerSource,
                animateMarker;

            markerSource = new ol.source.Vector();
            map.addLayer(new ol.layer.Vector({
                style: new ol.style.Style(),
                source: markerSource
            }));

            addMarker = function () {
                markerSource.addFeature(
                    new ol.Feature(
                        new ol.geom.Point(resultCoordinate)
                    )
                );
            };

            animateMarker = function (feature) {
                var animationStep,
                    start,
                    duration,
                    listenerKey;

                start = new Date().getTime();
                duration = 3000;

                animationStep = function (event) {
                    var vectorContext,
                        frameState,
                        elapsed,
                        elapsedRatio,
                        radius,
                        opacity,
                        marker,
                        flashGeom;

                    vectorContext = event.vectorContext;
                    frameState = event.frameState;
                    flashGeom = feature.getGeometry().clone();
                    elapsed = frameState.time - start;
                    elapsedRatio = elapsed / duration;
                    radius = ol.easing.linear(1 - elapsedRatio) * 100;
                    if (radius < 0) {
                        radius = 0;
                    }
                    opacity = ol.easing.linear(elapsedRatio);

                    marker = new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: radius,
                            snapToPixel: false,
                            stroke: new ol.style.Stroke({
                                color: 'rgba(200, 0, 0, ' + opacity + ')',
                                width: 3,
                                opacity: opacity
                            })
                        })
                    });

                    vectorContext.setStyle(marker);
                    vectorContext.drawGeometry(flashGeom, null);

                    if (elapsed > duration) {
                        markerSource.clear();
                        ol.Observable.unByKey(listenerKey);
                        return;
                    }
                    // continue postcompose animation
                    frameState.animate = true;
                }; // end of "animationStep"

                listenerKey = map.on('postcompose', animationStep);

            }; // end of "animateMarker"

            markerSource.on('addfeature', function (event) {
                animateMarker(event.feature);
            });

            if (animate) {
                if (zoomType === 'zoom') {
                    window.setTimeout(addMarker, animationDuration / 2);
                } else {
                    window.setTimeout(addMarker, animationDuration);
                }
            } else {
                addMarker();
            }

        }// end of result marker & animation handling
    },

    findLocation: function (location, opt_options) {
      var self,
          map,
          animate,
          animationDuration,
          markResult;

      self = this;
      map = this.getMap();

      // show spinner
      this.config.mapController.spinner.show();

      animate = this.config.animate;
      animationDuration = 2000;
      markResult = this.config.markResult;
      if (typeof opt_options === 'object') {
        if (opt_options.animate !== undefined) {
          animate = opt_options.animate;
        }
        if (opt_options.markResult !== undefined) {
          markResult = opt_options.markResult;
        }
      }


      // @TODO
      // check bounds
      //   are there restriction-bounds on the map?
      //   -> else use extent-bounds

      // @TODO
      // highlight found area/location


      if (this.config.quicksearch) {

        // AJAX -> @nominatim
        $.ajax({
              crossDomain: true,
              async: false,
              dataType: "json",
              url: this.config.url,
              data: {
                format: "json",
                q: location
              }
            })
            // $.getJSON(
            //   this.config.url,
            //   {
            //     format: 'json',
            //     q: location
            //   }
            // )
            // AJAX-success
            //
            .done(function (results) {

              var mapView,
                  currentCoordinate,
                  resultCoordinate,
                  coordDif,
                  difContext,
                  viewExtent,
                  result,
                  osmExtent,
                  resolution,
                  zoomType;

              mapView = map.getView();

              if (results[0]) {
                result = results[0];
                self.results=results;
                currentCoordinate = mapView.getCenter();
                resultCoordinate = ol.proj.transform([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

                // pan&zoom-to-result animation
                /*if (animate) {
                  resolution = mapView.getResolution();
                  viewExtent = mapView.calculateExtent(map.getSize());
                  if (ol.extent.containsCoordinate(viewExtent, resultCoordinate)) {
                    zoomType = 'zoom';
                  } else {
                    if (Math.abs(currentCoordinate[0] - resultCoordinate[0]) > Math.abs(currentCoordinate[1] - resultCoordinate[1])) {
                      coordDif = Math.abs(currentCoordinate[0] - resultCoordinate[0]);
                      difContext = ol.extent.getWidth(viewExtent);
                    } else {
                      coordDif = Math.abs(currentCoordinate[1] - resultCoordinate[1]);
                      difContext = ol.extent.getHeight(viewExtent);
                    }
                    if (coordDif > 0) {
                      resolution *= coordDif / difContext;
                    }
                    zoomType = 'bounce';
                  }
                  //console.log(animationDuration);
                  /*mapView.animate({
                    start: +new Date(),
                    duration: animationDuration,
                    resolution: resolution,
                    center: [0, 0],
                   //rotation: Math.PI
                  });*/
                  // map.beforeRender(
                  //     ol.animation.pan({
                  //       start: +new Date(),
                  //       duration: animationDuration,
                  //       source: mapView.getCenter()
                  //     }),
                  //     ol.animation[zoomType]({
                  //       start: +new Date(),
                  //       duration: animationDuration,
                  //       resolution: resolution
                  //     })
                  // );
                //} // end of pan&zoom-to-result animation handling


                // result marker & animation
                if (markResult) {
                  var addMarker,
                      markerSource,
                      animateMarker;

                  markerSource = new ol.source.Vector();
                  map.addLayer(new ol.layer.Vector({
                    style: new ol.style.Style(),
                    source: markerSource
                  }));

                  addMarker = function () {
                    markerSource.addFeature(
                        new ol.Feature(
                            new ol.geom.Point(resultCoordinate)
                        )
                    );
                  };

                  animateMarker = function (feature) {
                    var animationStep,
                        start,
                        duration,
                        listenerKey;

                    start = new Date().getTime();
                    duration = 3000;

                    animationStep = function (event) {
                      var vectorContext,
                          frameState,
                          elapsed,
                          elapsedRatio,
                          radius,
                          opacity,
                          marker,
                          flashGeom;

                      vectorContext = event.vectorContext;
                      frameState = event.frameState;
                      flashGeom = feature.getGeometry().clone();
                      elapsed = frameState.time - start;
                      elapsedRatio = elapsed / duration;
                      radius = ol.easing.linear(1 - elapsedRatio) * 100;
                      if (radius < 0) {
                        radius = 0;
                      }
                      opacity = ol.easing.linear(elapsedRatio);

                      var marker = new ol.style.Style({
                        image: new ol.style.Circle({
                          radius: radius,
                          snapToPixel: false,
                          stroke: new ol.style.Stroke({
                            color: 'rgba(200, 0, 0, ' + opacity + ')',
                            width: 3,
                            opacity: opacity
                          })
                        })
                      });

                      vectorContext.setStyle(marker);
                      vectorContext.drawGeometry(flashGeom, null);

                      if (elapsed > duration) {
                        markerSource.clear();
                        ol.Observable.unByKey(listenerKey);
                        return;
                      }
                      // continue postcompose animation
                      frameState.animate = true;
                    }; // end of "animationStep"

                    listenerKey = map.on('postcompose', animationStep);

                  }; // end of "animateMarker"

                  markerSource.on('addfeature', function (event) {
                    animateMarker(event.feature);
                  });

                  if (animate) {
                    if (zoomType === 'zoom') {
                      window.setTimeout(addMarker, animationDuration / 2);
                    } else {
                      window.setTimeout(addMarker, animationDuration);
                    }
                  } else {
                    addMarker();
                  }

                }// end of result marker & animation handling


                if (animate) {

                  // pan&zoom-to-result animation
                  /*if (animate) {
                   resolution = mapView.getResolution();
                   viewExtent = mapView.calculateExtent(map.getSize());
                   if (ol.extent.containsCoordinate(viewExtent, resultCoordinate)) {
                   zoomType = 'zoom';
                   } else {
                   if (Math.abs(currentCoordinate[0] - resultCoordinate[0]) > Math.abs(currentCoordinate[1] - resultCoordinate[1])) {
                   coordDif = Math.abs(currentCoordinate[0] - resultCoordinate[0]);
                   difContext = ol.extent.getWidth(viewExtent);
                   } else {
                   coordDif = Math.abs(currentCoordinate[1] - resultCoordinate[1]);
                   difContext = ol.extent.getHeight(viewExtent);
                   }
                   if (coordDif > 0) {
                   resolution *= coordDif / difContext;
                   }
                   zoomType = 'bounce';
                   }*/

                   /*map.beforeRender(
                       ol.animation.pan({
                         start: +new Date(),
                         duration: animationDuration,
                         source: mapView.getCenter()
                       }),
                       ol.animation['bounce']({
                         start: +new Date(),
                         duration: animationDuration,
                         resolution: resolution
                       })
                   );*/
                  //} // end of pan&zoom-to-result animation handling

                  if (self.config.zoombounds && result.boundingbox) {
                    // translate osm-extent to ol3-extent

                    osmExtent = [];
                    osmExtent.push(parseFloat(result.boundingbox[2]));
                    osmExtent.push(parseFloat(result.boundingbox[0]));
                    osmExtent.push(parseFloat(result.boundingbox[3]));
                    osmExtent.push(parseFloat(result.boundingbox[1]));

                    mapView.animate({
                      zoom: 8,
                      duration: animationDuration / 2
                    });

                    mapView.animate({
                      center: resultCoordinate,
                      duration: animationDuration
                    });

                    window.setTimeout(function() {
                      mapView.fit(
                          ol.proj.transformExtent(osmExtent, 'EPSG:4326', 'EPSG:3857'),
                          map.getSize(),
                          {
                            minZoom: mapView.get('minZoom') || 0,
                            maxZoom: mapView.get('maxZoom') || 19,
                           duration: animationDuration / 2,
                           easing: ol.easing.easeOut
                          }
                      );
                    }, animationDuration)


                  } else if (self.config.zoomlevel >= 0) {
                    mapView.animate({
                      zoom: 8,
                      duration: animationDuration / 2
                    }, {
                      zoom: self.config.zoomlevel,
                      duration: animationDuration / 2
                    });

                    mapView.animate({
                      center: resultCoordinate,
                      duration: animationDuration
                    });
                  }


                } else {
                  mapView.setCenter(resultCoordinate);
                }

                if (self.config.autopick && self.config.mapController.geopicker && typeof self.config.mapController.geopicker.pick === 'function') {
                  self.config.mapController.geopicker.pick(resultCoordinate);
                }

              } else {
                alert(c4g.maps.constant.i18n.SEARCH_NOT_FOUND);
              }
              // self.resultWrapper.innerHTML = '@ console';

            })

            // AJAX-failure
            //
            .fail(function () {
              // @TODO
              // self.resultWrapper.innerHTML = 'ohoh!';
            })

            // AJAX-always
            //
            .always(function () {
              self.config.mapController.spinner.hide();
            });

      } else {
        // @TODO
      }

    }

  }); // end of "add methods" ---

}(jQuery, this.c4g));
