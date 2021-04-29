/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, { Component } from "react";

export class AutocompleteInput extends Component {

  constructor(props) {
    super(props);

    this.listenerRegistered = false;
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

    return (
      <input id={this.props.cssId} type="search" defaultValue={this.props.value} onKeyDown={enterListener}
             autoComplete="off" />
    );
  }

  componentDidUpdate() {
    const scope = this;
    let arrNames;
    if (this.props.cssId.indexOf("From") !== -1) {
      arrNames = this.props.containerAddresses.arrFromNames
    } else if (this.props.cssId.indexOf("To") !== -1) {
      arrNames = this.props.containerAddresses.arrToNames;
    } else if (this.props.cssId.indexOf("Over") !== -1) {
      arrNames = this.props.containerAddresses.arrOverNames[this.props.index];
    } else if (this.props.cssId.indexOf("area") !== -1) {
      arrNames = this.props.containerAddresses.arrAreaNames;
    }

    let inputField = jQuery('#' + this.props.cssId);
    inputField.autocomplete({
      source: arrNames
    });

    // only register listener once
    if (!this.listenerRegistered) {
      inputField.on('autocompleteselect', function (event, ui) {
        if (scope.props.index) {
          scope.props.objFunctions[scope.props.index].selectListener(event, ui);
        } else {
          scope.props.objFunctions.selectListener(event, ui);
        }
      });
      this.listenerRegistered = true;
    }
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

        if (data[0] && data[0].display_name  && center) {
          // $(cssId).val(data[0].display_name);
          let arrAddresses = [];
          for (let i in data) {
            if (data.hasOwnProperty(i)) {
              if (settings.bBox && settings.bBox[0]) {
                if (scope.isInBoundingBox(data[i].lon, data[i].lat, settings.bBox)) {
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
          }
          arrAddresses.sort((a,b) => a.dist -b.dist);

          for (let i in arrAddresses) {
            if (arrAddresses.hasOwnProperty(i)) {
              if (cssClass.indexOf('from') !== -1) {
                // do not add twice
                if (!scope.props.containerAddresses.arrFromNames.includes(arrAddresses[i].name)) {
                  scope.props.containerAddresses.arrFromNames.push(arrAddresses[i].name);
                  scope.props.containerAddresses.arrFromPositions.push(arrAddresses[i].pos);
                }
              } else if (cssClass.indexOf('to') !== -1){
                if (!scope.props.containerAddresses.arrToNames.includes(arrAddresses[i].name)) {
                  scope.props.containerAddresses.arrToNames.push(arrAddresses[i].name);
                  scope.props.containerAddresses.arrToPositions.push(arrAddresses[i].pos);
                }
              } else if (cssClass.indexOf('over') !== -1) {
                if (!scope.props.containerAddresses.arrOverNames[scope.props.index].includes(arrAddresses[i].name)) {
                  scope.props.containerAddresses.arrOverNames[scope.props.index].push(arrAddresses[i].name);
                  scope.props.containerAddresses.arrOverPositions[scope.props.index].push(arrAddresses[i].pos);
                }
              } else if (cssClass.indexOf('area') !== -1) {
                if (!scope.props.containerAddresses.arrAreaNames.includes(arrAddresses[i].name)) {
                  scope.props.containerAddresses.arrAreaNames.push(arrAddresses[i].name);
                  scope.props.containerAddresses.arrAreaPositions.push(arrAddresses[i].pos);
                }
              } else {
                console.log("This is weird ¯\\_(ツ)_/¯");
              }

            }
          }
          // trigger keydown event to show autocomplete options
          let event = jQuery.Event("keydown", {keyCode: 8});
          $(cssClass).trigger(event);
        }
        for (let i in data) {
          if (data.hasOwnProperty(i)) {
            if (cssClass.indexOf('From') !== -1) {
              // do not add twice
              if (!scope.props.containerAddresses.arrFromNames.includes(data[i].display_name)) {
                scope.props.containerAddresses.arrFromNames.push(data[i].display_name);
                scope.props.containerAddresses.arrFromPositions.push([data[i].lat, data[i].lon]);
              }
            } else if (cssClass.indexOf('To') !== -1){
              if (!scope.props.containerAddresses.arrToNames.includes(data[i].display_name)) {
                scope.props.containerAddresses.arrToNames.push(data[i].display_name);
                scope.props.containerAddresses.arrToPositions.push([data[i].lat, data[i].lon]);
              }
            } else if (cssClass.indexOf('Over') !== -1) {
              if (!scope.props.containerAddresses.arrOverNames[scope.props.index].includes(data[i].display_name)) {
                scope.props.containerAddresses.arrOverNames[scope.props.index].push(data[i].display_name);
                scope.props.containerAddresses.arrOverPositions[scope.props.index].push([data[i].lat, data[i].lon]);
              }
            } else if (cssClass.indexOf('area') !== -1){
              if (!scope.props.containerAddresses.arrAreaNames.includes(data[i].display_name)) {
                scope.props.containerAddresses.arrAreaNames.push(data[i].display_name);
                scope.props.containerAddresses.arrAreaPositions.push([data[i].lat, data[i].lon]);
              }
            } else {
              console.log("This is weird ¯\\_(ツ)_/¯");
            }
          }
        }
        scope.props.router.setState({
          containerAddresses: scope.props.containerAddresses
        });

        // trigger keydown event to show autocomplete options
        let event = jQuery.Event("keydown", {keyCode: 8});
        $(cssClass).trigger(event);
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