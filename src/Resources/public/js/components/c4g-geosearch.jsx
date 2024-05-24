/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";
import {Control} from "ol/control";
import {getLanguage} from "./../c4g-maps-i18n";
import {cssConstants} from "./../c4g-maps-constant";
//import {GeoSearchResults} from "./c4g-geosearch-results.jsx";
const GeoSearchResults = React.lazy(() => import("./c4g-geosearch-results.jsx"));
import {transform, transformExtent} from "ol/proj";
import {easeOut, linear} from "ol/easing";
import {Vector as VectorSource} from "ol/source";
import {Vector} from "ol/layer";
import {Circle, Stroke, Style} from "ol/style";
import {Feature} from "ol";
import {Point} from "ol/geom";
import {getVectorContext} from "ol/render";
import {unByKey} from "ol/Observable";
import {utils} from "../c4g-maps-utils";
import {boundingExtent} from "ol/extent";
import {containsCoordinate, getHeight, getWidth} from "ol/extent";
const Titlebar = React.lazy(() => import("./c4g-titlebar.jsx"));

export default class GeoSearch extends Component {

  constructor(props) {
    super(props);

    this.langConstants = getLanguage(props.mapController.data);
    // control
    // if (this.props.collapsed) {
    this.clickControl = this.clickControl.bind(this);
    this.doneFunction = this.doneFunction.bind(this);
    let element = document.createElement('div');
    let button = document.createElement('button');

    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      let span = document.createElement('span');
      span.innerText = this.langConstants.CTRL_GEOSEARCH;
      button.appendChild(span);
    }
    else {
      button.setAttribute('aria-label', this.langConstants.CTRL_GEOSEARCH);
      button.setAttribute('title', this.langConstants.CTRL_GEOSEARCH);
    }

    element.className = "c4g-geosearch" + " ol-control " + "ol-unselectable";
    element.appendChild(button);
    jQuery(button).on('click', ()=> {this.clickControl()});

    if (props.external) {
      element.className += " c4g-external";
    }
    if (props.mapController.data.geosearch.inputCssSelector) {
      let input = document.querySelector(props.mapController.data.geosearch.inputCssSelector);
      input.setAttribute('id', "c4g-geosearch-input");
      input.addEventListener('keydown',(event) => {this.inputCallback(event)});
      input.addEventListener('input',(event) => {this.deleteCallback(event)});
      this.input = input;
    }
    else {
      let input = document.createElement('input');
      input.setAttribute('id', "c4g-geosearch-input");
      if (!props.collapsed) {
        jQuery(input).addClass('c4g-open');
      }
      else {
        jQuery(input).addClass('c4g-close');
      }

      input.addEventListener('keydown',(event) => {this.inputCallback(event)});
      input.addEventListener('input',(event) => {this.deleteCallback(event)});
      element.appendChild(input);
      this.input = input;

      let span = document.createElement('span');
      span.addEventListener('click', () => {this.clickControl(true)});
      jQuery(span).addClass('searchSpan');
      let i = document.createElement('i');
      i.innerHTML = "<i class=\"far fa-times-circle\"></i>";
      span.appendChild(i);
      element.appendChild(span);
    }




    this.controlElement = element;

    let control = new Control({element: element, target: props.target});
    let index = props.mapController.arrComponents.findIndex(element => element.name === "geosearch");
    props.mapController.arrComponents[index].control = control;
    props.mapController.mapsControls.controls.geosearch = control;
    // end control

    // prepare search-configuration
    //
    this.config = {};
    if (props.mapController.data.geosearch.searchKey && props.mapController.data.geosearch.url) {
      this.config.url = props.mapController.data.geosearch.url + "search.php";
      this.config.key = props.mapController.data.geosearch.searchKey;
      this.config.params = props.mapController.data.geosearch.params;
    } else {
      this.config.url = props.mapController.data.api.geosearch + "/" + props.mapController.data.profile;
    }
    // zoomlevel when centering the found location
    this.config.zoomlevel = props.searchZoom;
    // zoom to bounds instead of zoomlevel when centering the found location
    this.config.zoombounds = props.zoomBounds;
    // quicksearch-option (instantly jump to the first found location)
    this.config.quicksearch = props.quicksearch || true;
    // animation (animate flight to targeted location)
    this.config.animate = props.animate;
    // highlight the result location
    this.config.markResult = props.markResult;
    this.config.animateDuration = props.animateDuration;
    this.config.resultDuration = props.resultDuration;
    this.config.popup = props.popup;

    this.config.autopick = props.autopick;
    this.config.mapController = props.mapController;
    this.config.results = props.results;
    this.config.resultStyle = props.resultStyle;
    if (this.config.resultStyle && parseInt(this.config.resultStyle, 10) > 0) {
      const scope = this;
      // check if style is loaded, otherwise load it
      if (props.mapController.proxy.locationStyleController.arrLocStyles[this.config.resultStyle]) {
        this.config.resultStyle = props.mapController.proxy.locationStyleController.arrLocStyles[this.config.resultStyle].style;
      } else {
        props.mapController.proxy.locationStyleController.loadLocationStyles([this.config.resultStyle], {done: function() {
            scope.config.resultStyle = props.mapController.proxy.locationStyleController.arrLocStyles[scope.config.resultStyle].style;
          }});
      }
    }

    this.config.collapsed = props.collapsed;
    this.config.resultCount = props.resultCount;
    this.config.caching = props.caching;
    this.config.placeholder = props.placeholder;

    this.state = {
      open: !props.collapsed,
      query: "", // the search query
      results: [],
      currentCoordinate: [],
      openResults: false,
      // detailOpenResults: false,
      currentResult: null
    };

    this.inputCallback = this.inputCallback.bind(this);
    this.deleteCallback = this.deleteCallback.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.zoomTo = this.zoomTo.bind(this);
    this.closeResults = this.closeResults.bind(this);
    this.openResults = this.openResults.bind(this);
    this.close = this.close.bind(this);
    this.closeResultsCompletely = this.closeResultsCompletely.bind(this);
  }

  render() {
    let modeClass = this.state.open && this.state.openResults ? "c4g-open" : "c4g-close";
    if (this.props.extDiv) {
      modeClass += " external ";
    }
    let results = "";
    if (this.state.openResults && this.config.results) {
      results = <GeoSearchResults className={modeClass} results={this.state.results} extDiv={this.props.extResultsDiv} zoomFunc={(idx) => {this.setState({currentResult: this.state.results[idx]}); this.zoomTo(idx);}}
                                  closeResults={this.closeResults} headline={this.props.resultsHeadline} currentResult={this.state.currentResult} resultsDiv={this.props.resultsDiv}
                                  open={this.state.results.length >0} openResults={this.openResults} closeCb={this.closeResultsCompletely}
      />;
    }
    let closeBtnClass = "";
    let closeBtnCb = "";
    if (!this.props.external) {
      closeBtnClass = "c4g-titlebar-close";
      closeBtnCb = this.clickControl;
    }

    let headline = this.props.headline;
    if (!headline) {
      headline = this.langConstants.GEOSEARCH;
    }
    let input = null
    if (this.props.external) {
      input = <div className={"c4g-geosearch-filter"}>
        <input type="text" onInput={this.deleteCallback} onKeyDown={this.inputCallback} id={"c4g-geosearch-input"} placeholder={this.config.placeholder} aria-label={this.config.placeholder}/>
        <button className={cssConstants.GEOSEARCH_START} type={"button"} title={this.langConstants.CTRL_START_SEARCH} onMouseUp={this.startSearch}/>
      </div>;
    }
    if (this.props.external || (this.state.open && this.state.openResults)) {
      return (
          <React.Fragment>
            <div className={cssConstants.GEOSEARCH_WRAPPER + " " + modeClass + " c4g-horizon"}>
              <Suspense fallback={<div>Loading...</div>}>
                <Titlebar wrapperClass={"c4g-geosearch-header"} header={headline} headerClass={"c4g-geosearch-headline"}
                          detailBtnClass={""} detailBtnCb={""} closeBtnClass={closeBtnClass} closeBtnCb={closeBtnCb} closeBtnTitle={this.langConstants.CLOSE}>
                </Titlebar>
              </Suspense>
              {input}
              {results}
            </div>
          </React.Fragment>
      );
    }
    else {
      return null;
    }
  }

  closeResultsCompletely() {
    this.setState({openResults: false});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.mapController && this.props.mapController.data && this.props.mapController.data.geosearch && this.props.mapController.data.geosearch.results) {
      if (this.state.open) {
        if (prevState.open !== this.state.open && this.state.results && this.state.results.length) {
          this.props.mapController.setOpenComponent(this);
        }
        if (this.state.openResults && !this.props.extResultsDiv) {
          jQuery(".c4g-geosearch-container-right").addClass("c4g-open").removeClass("c4g-close");

        }
      } else {
        jQuery(".c4g-geosearch-container-right").addClass("c4g-close").removeClass("c4g-open");
      }
      if (this.props.mapController.data.caching) {
        let panelVal = utils.getValue('panel');
        if (panelVal === "GeoSearch" && !this.state.open) {
          utils.storeValue('panel', "");
        }
        else if (panelVal !== "GeoSearch" && this.state.open) {
          utils.storeValue('panel', "GeoSearch")
        }
      }
    }
  }

  close() {
    this.setState({open: false});
  }

  startSearch(event) {
    event.stopPropagation();
    let button = document.querySelector(cssConstants.GEOSEARCH_START);
    try {
      button.blur();
    } catch (ignore) {
    }
    let searchInput = jQuery("#c4g-geosearch-input");
    if (searchInput.val()) {
      this.findLocation(searchInput.val());
    }
  }

  inputCallback(event) {
    event.stopPropagation();
    if (event.which === 13) {
      let searchInput = jQuery("#c4g-geosearch-input");
      if (searchInput.val()) {
        this.findLocation(searchInput.val());
      }
      return false;
    }
  }
  deleteCallback(event) {
    event.stopPropagation();
    let searchInput = jQuery("#c4g-geosearch-input");
    let value = searchInput.val();
    if (this.lastVal !== value) {
      this.lastVal = value;
      if (value.length < 1) {
        let index = this.props.mapController.arrComponents.findIndex(element => element.name === "layerswitcher");
        if (index > -1 && this.props.mapController.arrComponents[index]) {
          let component = this.props.mapController.arrComponents[index].component;
          component.applyOldState("searchResults");
        }
      }
    }
  }

  clickControl(disregardState) {
    let open = disregardState !== undefined ? disregardState : this.state.open
    if (open) {
      this.setState({open: false});
      if (!this.props.external) {
        jQuery(this.input).addClass('c4g-close').removeClass('c4g-open');
      }
      // jQuery(this.props.mapController.searchContainer).removeClass("c4g-open").addClass("c4g-close");
    } else {
      // this.props.mapController.hideOtherComponents(this);
      this.setState({open: true});
      if (!this.props.external) {
        jQuery(this.input).removeClass('c4g-close').addClass('c4g-open');
        this.input.focus();
      }
      // jQuery(this.props.mapController.searchContainer).removeClass("c4g-close").addClass("c4g-open");
      // this.props.mapController.setOpenComponent(this);
    }
  }

  closeResults() {
    this.setState({detailOpenResults: false});
  }

  openResults() {
    this.setState({detailOpenResults: true});
  }

  findLocation(location, opt_options) {
    let map,
      animate,
      animationDuration,
      markResult,
      mapController;

    const scope = this;
    mapController = this.props.mapController;
    map = mapController.map;

    // show spinner
    mapController.spinner.show();

    animate = this.config.animate;
    animationDuration = this.config.animateDuration;
    markResult = this.config.markResult;

    if (typeof opt_options === 'object') {
      if (opt_options.animate !== undefined) {
        animate = opt_options.animate;
      }
      if (opt_options.markResult !== undefined) {
        markResult = opt_options.markResult;
      }
    }

    if (this.config.quicksearch) {
      let data = {
        format: "json",
        q: location
      };
      if (this.config.resultCount) {
        data.limit = this.config.resultCount;
      }
      if (this.config.key) {
        data.key = this.config.key;
      }
      if (this.config.params) {
        for (let param in this.config.params) {
          if (this.config.params.hasOwnProperty(param)) {
            data[param] = this.config.params[param];
          }
        }
      }
      let arrResults = utils.callHookFunctions(window.c4gMapsHooks.hook_search, [data, this]);
      if (arrResults && arrResults.length > 0) {
        this.config.mapController.spinner.hide();
        for (let i in arrResults) {
          if (arrResults.hasOwnProperty(i)) {
            this.doneFunction(arrResults[i]);
          }
        }
      }
      else {
        // AJAX -> @nominatim
        jQuery.ajax({
          dataType: "json",
          url: this.config.url,
          data: data
        })
            .done(this.doneFunction)

            .fail(function () {
              // @TODO
              // self.resultWrapper.innerHTML = 'ohoh!';
            })
            .always(function () {
              scope.config.mapController.spinner.hide();
            });
        if (mapController.data.geosearch.showOnlyResults) {
          let index = mapController.arrComponents.findIndex(element => element.name === "layerswitcher");
          if (index > -1 && mapController.arrComponents[index]) {
            let component = mapController.arrComponents[index].component;
            if (component.buttonEnabled) {
              component.toggleAllLayers("searchResults");
            }
          }
        }
      }

    } else {
      // @TODO
    }

  }
  doneFunction (results) {

    var mapView,
        currentCoordinate,
        resultCoordinate,
        coordDif,
        difContext,
        viewExtent,
        result,
        osmExtent,
        resolution,
        zoomType,
        flyTo,
        completeSearch,
        mapController = this.props.mapController,
        map = mapController.map,
        animate = this.config.animate,
        animationDuration = this.config.animateDuration,
        markResult = this.config.markResult;

    if (results && results.length && results.length > 0){
      mapView = map.getView();
     
      if (results[0]) {
        result = results[0];
        this.results = results;
        if (result.hasOwnProperty('uuid')) {
          let index = mapController.arrComponents.findIndex(element => element.name === "layerswitcher");
          let component = false;
          if (index > -1 && mapController.arrComponents[index]) {
            component = mapController.arrComponents[index].component;
          }
          let ids = [];
          let coordinates = [];
          for (let i in this.results) {
            if (this.results.hasOwnProperty(i)) {
              if (this.results[i].hasOwnProperty('uuid')) {
                ids.push(this.results[i].uuid);
              }
              if (this.results[i].hasOwnProperty('lon') && this.results[i].hasOwnProperty('lat')) {
                coordinates.push(transform([parseFloat(this.results[i].lon),parseFloat(this.results[i].lat)],'EPSG:4326', 'EPSG:3857'))
              }
            }
          }
          if (mapController.data.geosearch.showOnlyResults && component) {
            component.toggleSpecificLayers(ids);
          }
          let size = map.getSize();
          let extent = boundingExtent(coordinates);
          let fitOptions = {
            duration: 250,
            padding: [
                size[1]/10,
                size[0]/10,
                size[1]/10,
                size[0]/10,
            ]
          }
          map.getView().fit(extent, fitOptions);
        } 
        else {
          currentCoordinate = mapView.getCenter();
          resultCoordinate = transform([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

          if (animate) {
            this.flyTo(
                map, resultCoordinate, this.config.zoomlevel, this.config.zoombounds, result.bounding_box,
                markResult, this.config.resultDuration, animate, this.config.animateDuration, map.getView());
          } else {
            this.completeSearch(this.config.markResult, this.config.animate, zoomType, this.config.animateDuration, resultCoordinate, this.config.resultDuration);
            mapView.setCenter(resultCoordinate);
            if (this.config.zoomlevel >= 0) {
              map.getView().setZoom(this.config.zoomlevel);
            }
          }
          if (this.config.autopick && this.config.mapController.geopicker && typeof this.config.mapController.geopicker.pick === 'function') {
            this.config.mapController.geopicker.pick(resultCoordinate);
          }
        }
      } else {
        let langConstants = getLanguage(this.options.mapController.data);
        alert(langConstants.SEARCH_NOT_FOUND);
      }
      if (this.results) {
        this.props.mapController.hideOtherComponents(this);
        this.setState({results: this.results, open: true, currentCoordinate: currentCoordinate, openResults: true, currentResult: results[0]});
        this.props.mapController.setOpenComponent(this);
      }
    }
  }

  flyTo(map, location, zoomlevel, zoombounds, boundingbox, markResult, resultDuration, animate, animateDuration, mapView) {
    let duration = animateDuration;
    let zoom = zoomlevel;
    let parts = 2;
    let called = false;
    let extent;
    const scope = this;

    function callback(complete) {
      --parts;
      if (called) {
        return;
      }
      if (parts === 0 || !complete) {
        called = true;

        if (zoombounds && boundingbox && boundingbox[0] !== null &&
          boundingbox[1] !== null && boundingbox[2] !== null &&
          boundingbox[3] !== null
        ) {
          // translate osm-extent to ol3-extent

          let osmExtent = [];
          osmExtent.push(parseFloat(boundingbox[2]));
          osmExtent.push(parseFloat(boundingbox[0]));
          osmExtent.push(parseFloat(boundingbox[3]));
          osmExtent.push(parseFloat(boundingbox[1]));

          extent = transformExtent(osmExtent, 'EPSG:4326', 'EPSG:3857');

          window.setTimeout(function () {
            var viewFit = mapView.fit(
              extent,
              map.getSize(),
              {
                minZoom: mapView.get('minZoom') || 2,
                maxZoom: zoom || mapView.get('maxZoom') || 18,
                duration: duration / 2,
                easing: easeOut
              }
            );
          }, duration)
        }

        scope.completeSearch(markResult, animate, "bounce", animateDuration, location, resultDuration);
      }
    }

    map.getView().animate({
      center: location,
      duration: duration
    }, callback);

    map.getView().animate({
      zoom: zoom - 1,
      duration: duration / 2
    }, {
      zoom: zoom,
      duration: duration / 2
    }, callback);
  }

  completeSearch(markResult, animate, zoomType, animationDuration, resultCoordinate, resultDuration) {
    // result marker & animation
    if (markResult) {
      let addMarker,
        markerSource,
        markerLayer,
        animateMarker;

      markerSource = new VectorSource();
      let style = this.config.resultStyle;
      if (!style || style === "0") {
        style = [new Style({
          image: new Circle({
            radius: 7,
            snapToPixel: false,
            stroke: new Stroke({
              color: 'rgba(200, 0, 0, ' + 0.9 + ')',
              width: 2,
              opacity: 0.9
            })
          })
        }),
          new Style({
            image: new Circle({
              radius: 20,
              snapToPixel: false,
              stroke: new Stroke({
                color: 'rgba(200, 0, 0, ' + 0.9 + ')',
                width: 2,
                opacity: 0.9
              })
            })
          }),
          new Style({
            image: new Circle({
              radius: 33,
              snapToPixel: false,
              stroke: new Stroke({
                color: 'rgba(200, 0, 0, ' + 0.9 + ')',
                width: 2,
                opacity: 0.9
              })
            })
          })
        ];
      }
      markerLayer = new Vector({
        style: style,
        source: markerSource,
        zIndex: 99999
      });
      this.props.mapController.map.addLayer(markerLayer);

      addMarker = function () {
        markerSource.addFeature(
          new Feature(
            new Point(resultCoordinate)
          )
        );
      };

      animateMarker = function (feature) {
        var animationStep,
          start,
          duration,
          listenerKey;

        start = new Date().getTime();
        duration = resultDuration;

        animationStep = function (event) {
          let vectorContext,
            frameState,
            elapsed,
            elapsedRatio,
            radius,
            opacity,
            flashGeom;

          vectorContext = getVectorContext(event);
          frameState = event.frameState;
          flashGeom = feature.getGeometry().clone();
          elapsed = frameState.time - start;
          elapsedRatio = elapsed / duration;
          radius = linear(1 - elapsedRatio) * 100;
          if (radius < 0) {
            radius = 0;
          }
          opacity = linear(elapsedRatio);

          let marker = new Style();

          vectorContext.setStyle(marker);
          vectorContext.drawGeometry(flashGeom, null);

          if (elapsed > duration) {
            markerSource.clear();
            unByKey(listenerKey);
            return;
          }
          // continue postrender animation
          frameState.animate = true;
        }; // end of "animationStep"

        listenerKey = markerLayer.on('postrender', animationStep);

      }; // end of "animateMarker"

      markerSource.on('addfeature', function (event) {
        animateMarker(event.feature);
      });

      if (animate) {
        if (zoomType === 'zoom') {
          window.setTimeout(addMarker, animationDuration / 2);
        } else {
          window.setTimeout(addMarker, animationDuration / 2);
        }
      } else {
        addMarker();
      }

    }// end of result marker & animation handling
    if (this.config.popup) {
      let pixel = this.props.mapController.map.getPixelFromCoordinate(resultCoordinate);
      window.setTimeout(()=> {
        this.props.mapController.map.dispatchEvent({
          type: 'click',
          pixel: pixel,
        },100);
      })

    }
  }

  /**
   * @TODO
   *
   * @param   {[type]}  location  [description]
   *
   * @return  {[type]}            [description]
   */
  zoomTo(index) {
    let map,
      result,
      resultCoordinate,
      mapController,
      zoomType;

    const scope = this;
    mapController = this.props.mapController;
    map = mapController.map;
    let mapView = map.getView();
    let currentCoordinate = this.state.currentCoordinate;

    result = scope.results[index];
    resultCoordinate = transform([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');
    if (this.config.animate) {
      var resolution = mapView.getResolution();
      var viewExtent = mapView.calculateExtent(map.getSize());
      if (containsCoordinate(viewExtent, resultCoordinate)) {
        zoomType = 'zoom';
      } else {
        if (Math.abs(currentCoordinate[0] - resultCoordinate[0]) > Math.abs(currentCoordinate[1] - resultCoordinate[1])) {
          var coordDif = Math.abs(currentCoordinate[0] - resultCoordinate[0]);
          var difContext = getWidth(viewExtent);
        } else {
          coordDif = Math.abs(currentCoordinate[1] - resultCoordinate[1]);
          difContext = getHeight(viewExtent);
        }
        if (coordDif > 0) {
          resolution *= coordDif / difContext;
        }
        zoomType = 'bounce';
      }

      this.flyTo(
          map, resultCoordinate, this.config.zoomlevel, this.config.zoombounds, result.bounding_box,
          this.config.markResult, this.config.resultDuration, this.config.animate, this.config.animateDuration, mapView);
    }
    else {
      this.completeSearch(this.config.markResult, this.config.animate, zoomType, this.config.animateDuration, resultCoordinate, this.config.resultDuration);
      map.getView().setCenter(resultCoordinate);
      if (this.config.zoomlevel >= 0) {
        map.getView().setZoom(this.config.zoomlevel);
      }
    }

  }

}