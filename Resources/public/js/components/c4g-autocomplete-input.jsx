/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, { Component } from "react";
import {Point} from "ol/geom";

export class AutocompleteInput extends Component {

  constructor(props) {
    super(props);
    this.listenerRegistered = false;
    this.state = {
      arrAddresses : []
    }

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({
        arrAddresses: []
      })
    }
  }

  render() {
    const scope = this;
    const submitFunction = function () {
      let field = $("#" + scope.props.cssId);
      field.trigger('change');
      let performSearchCallback;
      if (scope.props.cssId.indexOf("area") !== -1) {
        performSearchCallback = function() {
          scope.props.router.performArea();
        };
      } else {
        performSearchCallback = function() {
          scope.props.router.performViaRoute();
        };
      }

      let value = (scope.props.cssId.indexOf('From') !== -1) ? "fromValue" : "toValue";
      scope.props.router.performSearch(field, value, performSearchCallback);
    };

    let enterListener = function(event, opt_this) {
      if (event.keyCode === 13) {
        submitFunction();
      } else {
        if ($(event.currentTarget).val().length === 0 && !event.keyCode) { //deleted
          if (typeof scope.props.objFunctions.deleteFunction === "function") {
            scope.props.objFunctions.deleteFunction(event.currentTarget, event.currentTarget.id);
          } else {
            // over points
            scope.props.objFunctions[scope.props.index].deleteFunction(event.currentTarget, event.currentTarget.id);
          }
        } else {
          scope.counter = Math.floor(Date.now());
          setTimeout(function() {
            if (scope.counter && scope.counter + 400 < Math.floor(Date.now())) {
              delete scope.counter;
              if (!scope.props.objSettings.proxyUrl || !scope.props.objSettings.keyAutocomplete) {
                let value = (scope.props.cssId.indexOf('From') !== -1) ? "fromValue" : "toValue";
                let field = $("#" + scope.props.cssId);
                scope.props.router.performSearch(field, value);
              }
              else {
                scope.autocompleteAddress($("#" + scope.props.cssId).val(), "#" + scope.props.cssId);
              }
            }
          },500);
        }
      }
    };
    let listAutocomplete = null;
    if (this.state.arrAddresses && this.state.arrAddresses.length > 0) {
      let listAdresses = [];
      for (let i in this.state.arrAddresses) {
        if (this.state.arrAddresses.hasOwnProperty(i)) {
          let elemAddress = this.state.arrAddresses[i];
          let clickEvent = (self) => {
            jQuery("#" + self.props.cssId).val(elemAddress.name);
            let point = new Point([elemAddress.pos[1],elemAddress.pos[0]]);
            if (self.props.cssId.includes("From")) {
              self.props.router.setRouteFrom(elemAddress.pos[1], elemAddress.pos[0], true);
            }
            else if (self.props.cssId.includes("To")) {
              self.props.router.setRouteTo(elemAddress.pos[1], elemAddress.pos[0], true);
            }
            else if (self.props.cssId.includes("Over")) {
              self.props.router.addOverPoint(elemAddress.pos[1], elemAddress.pos[0], self.props.index, true)
            }
            else if (self.props.cssId.includes("area")) {
              self.props.router.AreaPoint(elemAddress.pos[1], elemAddress.pos[0], true);
            }
            self.setState({
              arrAddresses: []
            })
          }
          let listItem = <li key={i} className={"c4g-autocomplete-item"} onMouseUp={(event => {clickEvent(scope)})}>{elemAddress.name}</li>;
          listAdresses.push(listItem);
        }
      }
      listAutocomplete = <ul className={"c4g-autocomplete"}>{listAdresses}</ul>
    }
    return (
      <div ref={this.wrapperRef}>
        <input id={this.props.cssId} type="search" defaultValue={this.props.value} onKeyDown={enterListener}
                             autoComplete="off" />
        {listAutocomplete}
      </div>
    );
  }

  setCenter (center) {
    this.objSettings.center = center;
  }

  autocompleteAddress(input, cssClass) {
    const scope = this;
    const settings = scope.props.objSettings;
    let center;
    if (settings.center) {
      if (typeof settings.center === "function") {
        let objCenter = settings.center();
        center = objCenter[0] + "," + objCenter[1];
      }
      else {
        center = settings.center[0] + "," + settings.center[1];
      }
    }
    else if (settings.bBox) {
      center = (parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2 + "," + (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2;
    }
    let url;
    if (center) {
      url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input +"&center=" + center;
    }
    else {
      url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input;
    }
    if (settings.geosearchParams) {
      for (let param in settings.geosearchParams) {
        if (settings.geosearchParams.hasOwnProperty(param)) {
          url += "&" + param + "=" + settings.geosearchParams[param];
        }
      }
    }
    $.ajax({url: url}).done(function(data) {
      let center;
      if (settings.center) {
        center = settings.center;
      }
      else if (settings.bBox){
        center = [(parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2, (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2];
      }
      if (data.length > 0) {
        let arrAddresses = [];
        if (settings.bBox && settings.bBox[0] && data[0] && data[0].display_name  && center) {
          // $(cssId).val(data[0].display_name);
          for (let i in data) {
            if (data.hasOwnProperty(i)) {
              if (this.isInBoundingBox(data[i].lon, data[i].lat, settings.bBox)) {
                let distance = Math.sqrt((center[0] - data[i].lon) * (center[0] - data[i].lon) + (center[1] - data[i].lat) * (center[1] - data[i].lat));
                let element = {
                  'dist' : distance,
                  'pos'  : [data[i].lat, data[i].lon],
                  'name' : data[i].display_name
                };
                arrAddresses.push(element);
              }
            }
          }
          arrAddresses.sort((a,b) => a.dist -b.dist);
        }
        else if (data[0] && data[0].display_name) {
          for (let i in data) {
            if (data.hasOwnProperty(i)) {
              let element = {
                'pos'  : [data[i].lat, data[i].lon],
                'name' : data[i].display_name
              };
              arrAddresses.push(element);
            }
          }
        }
        scope.setState({
          arrAddresses: arrAddresses
        });
      }
    });
  }

  isInBoundingBox(longitude, latitude, bbox) {
    if (typeof longitude === "string") {
      longitude = parseFloat(longitude);
    }
    if (typeof latitude === "string") {
      latitude = parseFloat(latitude);
    }
    if (bbox[0] < longitude &&
      longitude < bbox[2] &&
      bbox[1] < latitude &&
      latitude < bbox[3]) {
      return true;
    } else {
      return false;
    }
  }
}