/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	    con4gis
 * @version         6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	    Küstenschmiede GmbH Software & Design
 * @link            https://www.con4gis.org
 *
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {StarboardLayerswitcher} from "./c4g-starboard-layerswitcher";
import {getLanguage} from "./../c4g-maps-i18n";

export class StarboardPanel extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    // create control to toggle the panel
    let element = document.createElement('div');
    let button = document.createElement('button');
    let langConstants = getLanguage(props.mapController.data);
    button.title = langConstants.CTRL_STARBOARD;
    element.className = "c4g-sideboard c4g-starboard-control ol-unselectable ol-control c4g-close";
    element.appendChild(button);
    jQuery(element).on('click', function(event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    let mapController = props.mapController;
    let control = new Control({element: element, target: props.target});
    mapController.mapsControls.controls.horizontalPanel = control;
    mapController.map.addControl(control);
    this.open = this.open.bind(this);
    this.slideOutCollidingElements = this.slideOutCollidingElements.bind(this);
    this.resizeFunction = this.resizeFunction.bind(this);
    // state variables (every property that has influence on this component)
    this.state = {
      // either "top" or "bottom"
      direction: props.direction || "right",
      open: props.open || false,
      className: props.className || "c4g-starboard-panel",
      childs: props.childs || [],
      control: control
    };
  }

  componentDidMount() {
    // if (this.state.open) {
    //   // window.setTimeout(() => this.open(), 1000);
    //   this.open();
    // }
  }

  render() {
    let className = this.state.className + "-" + this.state.direction;
    className += " " + (this.state.open ? "c4g-open" : "c4g-close");
    if (this.state.open) {
      jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
    } else {
      jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
    }
    const scope = this;
    return (
      <StarboardLayerswitcher key={this.props.mapController.id} mapController ={this.props.mapController} objLayers={this.props.objLayers} parentCallback={this.props.parentCallback} layerStates={this.props.layerStates} openfunc={this.open} open={this.state.open}></StarboardLayerswitcher>
    )
  }

  open() {
    this.setState({open: true}, () => this.slideOutCollidingElements());
    // this.state.open = true;
  }

  close() {
    this.setState({open: false}, () => this.slideInCollidingElements());
    // this.state.open = false;
  }

  resizeFunction() {
    const scope = this;
    window.requestAnimationFrame(function() {
      scope.slideOutCollidingElements();
    });
  }

  /**
   * Moves the buttons that would collide with the panel.
   */
  slideOutCollidingElements() {
    const scope = this;
    let starboardWidth = jQuery(".c4g-starboard-container").width();
    if (this.state.direction === "right") {
      let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TR + ' .' + cssConstants.OL_UNSELECTABLE);
      elements.forEach(function(element) {
        element.style.right = starboardWidth + "px";
      });
      this.state.control.element.style.right = starboardWidth + "px";
      elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BR + ' .' + cssConstants.OL_UNSELECTABLE);
      elements.forEach(function(element) {
        element.style.right = starboardWidth + "px";
      });
      jQuery(".c4g-starboard-container").css("right","0%");
    } else {
      let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TL + ' .' + cssConstants.OL_UNSELECTABLE);
      elements.forEach(function(element) {
        element.style.left = starboardWidth + "px";
      });
      elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BL + ' .' + cssConstants.OL_UNSELECTABLE);
      elements.forEach(function(element) {
        element.style.left = starboardWidth + "px";
      });
      // let topValue = this.props.mapController.map.getSize()[1] - 100;
      // jQuery(this.state.control.element).style.top = topValue + "px";
      // jQuery(this.state.control.element).addClass("panel-slided-out").removeClass("panel-slided-in");
    }

  }

  /**
   * Undoes the previous button movement.
   */
  slideInCollidingElements() {
    const scope = this;
    if (this.state.direction === "right") {
      let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TR + ' .' + cssConstants.OL_UNSELECTABLE);
      elements.forEach(function(element) {
        element.style.right = "0px";
      });
      elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BR + ' .' + cssConstants.OL_UNSELECTABLE);
      elements.forEach(function(element) {
        element.style.right = "0px";
      });
      jQuery(".c4g-starboard-container").css("right","-100%");
      this.state.control.element.style.right = "0px";
    } else {
      let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TL + ' .' + cssConstants.OL_UNSELECTABLE);
      elements.forEach(function(element) {
        element.style.left = "0px";
      });
      elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BL + ' .' + cssConstants.OL_UNSELECTABLE);
      elements.forEach(function(element) {
        element.style.left = "0px";
      });
      // this.state.control.element.style.top = this.props.mapController.map.getSize()[1] + "px";
      // jQuery(this.state.control.element).addClass("panel-slided-in").removeClass("panel-slided-out")
    }
  }
}
