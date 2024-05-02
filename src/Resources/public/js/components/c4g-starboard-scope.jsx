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
import {cssConstants} from "./../c4g-maps-constant.js";
import {Cluster} from "ol/source";
import {StarboardScopeItem} from "./c4g-starboard-scope-item.jsx";
import {getLanguage} from "./../c4g-maps-i18n";
const Titlebar = React.lazy(() => import("./c4g-titlebar.jsx"));
import {utils} from "../c4g-maps-utils";
import {Geolocation} from "ol";
import {LineString} from "ol/geom";
import {toLonLat} from 'ol/proj';
import {getLength} from "ol/sphere";


export default class StarboardScope extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    this.lastTime = -Infinity;
    this.preventAddReqs = false;
    //specific code for the control
    let element = document.createElement('div');
    let button = document.createElement('button');
    this.langConstants = getLanguage(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      let span = document.createElement('span');
      span.innerText = this.langConstants.ELEMENTS_SCOPE;
      button.appendChild(span);
    }
    else {
      button.title = this.langConstants.ELEMENTS_SCOPE;
    }
    element.className = "c4g-starboardscope-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    let mapController = props.mapController;
    let control = null;
    let open = props.open || false
    if (mapController.data.starboardscope.div) {
      this.close = () => {};
      open = true;
    }
    else {
      control = new Control({element: element, target: props.target});
      let index = mapController.arrComponents.findIndex(element => element.name === "starboardscope");
      mapController.arrComponents[index].control = control;
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.loadMore = this.loadMore.bind(this);

    this.getFeaturesInScope = this.getFeaturesInScope.bind(this);
    this.view = props.mapController.map.getView();
    let layerController = props.mapController.proxy.layerController;
    this.vectorSource = layerController.vectorSource instanceof Cluster ? layerController.vectorSource.getSource(): layerController.vectorSource;
    this.view.on('change:center', (evt) => {
      this.getFeaturesInScope()
    });
    this.view.on('change:resolution', (evt) => {
      if (props.mapController.data.minZoomStarboardScope && this.view.getZoom() < props.mapController.data.minZoomStarboardScope) {
        this.setState({
          disable: true
        });
      } else if (props.mapController.data.minZoomStarboardScope && this.state.disable) {
        this.setState({
          disable: false
        });
      }
      this.getFeaturesInScope()
    });
    window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
    window.c4gMapsHooks.layer_loaded.push((element)=> {
      this.getFeaturesInScope();
    });
    this.state = {
      open: open,
      disable: false,
      className: props.className || "c4g-starboardscope-panel",
      control: control,
      features: [],
      maxElements: 20
    };
  }

  getFeaturesInScope () {
    let timestamp = Date.now(); //get timestamp to trigger event only every fourth of a second
    const mapController = this.props.mapController;
    const layerController = mapController.proxy.layerController;

    if (this.state.open && !this.state.disable && this._isMounted && timestamp > this.lastTime + 250) {
      if (mapController.data.minZoomStarboardScope && this.view.getZoom() < mapController.data.minZoomStarboardScope) {
        this.setState({
          features: []
        });
      }
      this.lastTime = timestamp;
      let extent = this.view.calculateExtent();
      let features = this.vectorSource.getFeaturesInExtent(extent);
      for (let i in layerController.vectorSources) {
        if (layerController.vectorSources.hasOwnProperty(i)) {
          let singleSource = layerController.vectorSources[i] instanceof Cluster ? layerController.vectorSources[i].getSource() : layerController.vectorSources[i];
          let singleFeatures = singleSource.getFeaturesInExtent(extent);
          features = features.concat(singleFeatures);
        }
      }
      let featuresSorted = this.sortFeatures(features);
      if (!featuresSorted) {
        this.lastTime = -Infinity;
        window.setTimeout(()=>{this.getFeaturesInScope()}, 200);
      }
      this.setState({
        features: features
      });
    }
  }
  
  sortFeatures (features) {
    if (this.props.mapController.geolocation) {
      let position = this.props.mapController.geolocation.getPosition();
      if (!position) {
        return false;
      }
      let maxDistance = 0;
      features.sort((a, b) => {
        let lineStringA = new LineString([position, a.getGeometry().getCoordinates()])
        let distanceA = getLength(lineStringA);
        a.set('distance', distanceA);

        let lineStringB = new LineString([position, b.getGeometry().getCoordinates()])
        let distanceB = getLength(lineStringB);

        maxDistance = distanceA > maxDistance ? distanceA : maxDistance;
        maxDistance = distanceB > maxDistance ? distanceB : maxDistance;
        return distanceA - distanceB;
      });
      if (maxDistance < 30 && this.props.mapController.data.matrixKey) {
        let objMissDist = [];
        let arrLocations = [];
        arrLocations.push(toLonLat(position));
        for (let i in features) {
          if (features.hasOwnProperty(i) && !features[i].get('distanceMatrix')) {
            objMissDist.push(features[i]);
            arrLocations.push(toLonLat(features[i].getGeometry().getCoordinates()));
          }
        }
        if (arrLocations.length > 2 && !this.preventAddReqs) {
          let url = this.props.mapController.data.proxyUrl + 'matrix.php?language=de&profile=auto&key=' + this.props.mapController.data.matrixKey;
          let body = JSON.stringify({locations: arrLocations});
          const scope = this;
          scope.preventAddReqs = true;
          fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'text/plain'
            },
            body: body
          }).then(function (response) {
            scope.preventAddReqs = false;
            return response.json().then(function(jsonData) {
              let distances = jsonData.sources_to_targets[0];
              for(let i in distances) {
                if (distances.hasOwnProperty(i) && objMissDist.hasOwnProperty(i)) {
                  objMissDist[i].set('distanceMatrix', distances[i].distance * 1000);
                }
              }
              scope.sortFeatures(scope.state.features);
              scope.forceUpdate();
            });
          });
        }
      }
    }
    return features;
  }

  render() {
    if (this.state.control) {
      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-starboardscope-container").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-starboardscope-container").removeClass("c4g-open").addClass("c4g-close");
      }
    }
    let list =  null;
    if (!this.state.disable) {
      list = <div className={"c4g-starboardscope-content-container"}>
        <ul>
          {this.state.features.map((feature, index) => {
            if (index < this.state.maxElements) {
              return <StarboardScopeItem mapController={this.props.mapController} langConstants={this.langConstants}
                                         index={index} key={index} feature={feature}
                                         lastElement={index === this.state.maxElements - 1} loadMore={this.loadMore}/>
            }
          })}
        </ul>
      </div>;
    }

    return (
        <div className={cssConstants.STARBOARD_WRAPPER}>
          <Suspense fallback={<div>Loading...</div>}>
            <Titlebar wrapperClass={"c4g-starboardscope-header"} headerClass={"c4g-starboardscope-headline"}
                      header={this.langConstants.ELEMENTS_SCOPE} closeBtnClass={"c4g-starboardscope-close"}
                      closeBtnCb={this.close} closeBtnTitle={this.langConstants.CLOSE}/>
          </Suspense>
          {list}
        </div>
    );
  }

  open() {
    this.setState({open: true}, () => {
      let evt = {};
      evt.target = this.view;
      this.getFeaturesInScope();
    });
    this.props.mapController.setOpenComponent(this);
  }

  close() {
    this.setState({open: false});
  }
  loadMore() {
    this.setState({maxElements: this.state.maxElements + 20});
  }
  componentDidMount() {
    this._isMounted = true;
    if (!this.props.mapController.geolocation.getTracking()) {
      this.props.mapController.geolocation.setTracking(true);
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.mapController.data.caching && !this.props.mapController.data.starboardscope.div) {
      let panelVal = utils.getValue('panel');
      if (panelVal === "StarboardScope" && !this.state.open) {
        utils.storeValue('panel', "");
      }
      else if (panelVal !== "StarboardScope" && this.state.open) {
        utils.storeValue('panel', "StarboardScope")
      }
    }
  }
}