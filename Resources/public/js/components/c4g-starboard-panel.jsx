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

export class StarboardPanel extends Component {

    constructor(props) {
        super(props);
        const scope = this;
        // create control to toggle the panel
        let element = document.createElement('div');
        let button = document.createElement('button');
        element.className = "c4g-starboard-panel-button-" + (props.direction || "right") + " ol-control";
        element.appendChild(button);
        jQuery(button).on('click', function(event) {
            if (scope.state.open) {
                scope.close();
            } else {
                scope.open();
            }
        });
        let mapController = props.mapController;
        let control = new Control({element: element, target: props.target});
        mapController.controls.horizontalPanel = control;
        mapController.map.addControl(control);

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

    render() {
        let className = this.state.className + "-" + this.state.direction;
        className += " " + (this.state.open ? "c4g-open" : "c4g-close");
        const scope = this;

        function createChilds () {
            let div = document.createElement('div');
            scope.state.childs.forEach(function (element) {
                div.appendChild(element);
            });
            return div;
        }

        return (
            <div
                className={className}
            ></div>
        );
    }

    open() {
        this.setState({open: true});
        this.slideOutCollidingElements();
    }

    close() {
        this.setState({open: false});
        this.slideInCollidingElements();
    }

    /**
     * Moves the buttons that would collide with the panel.
     */
    slideOutCollidingElements() {
        const scope = this;
        if (this.state.direction === "right") {
            let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TL + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.right = "100px";
            });
            elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TR + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.right = "100px";
            });
            this.state.control.element.style.right = "100px";
        } else {
            let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BL + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.left = "100px";
            });
            elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BR + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.left = "100px";
            });
            // let topValue = this.props.mapController.map.getSize()[1] - 100;
            // jQuery(this.state.control.element).style.top = topValue + "px";
            jQuery(this.state.control.element).addClass("panel-slided-out").removeClass("panel-slided-in");
        }

    }

    /**
     * Undoes the previous button movement.
     */
    slideInCollidingElements() {
        const scope = this;
        if (this.state.direction === "right") {
            let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TL + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.right = "0px";
            });
            elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TR + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.right = "0px";
            });
            this.state.control.element.style.right = "0px";
        } else {
            let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BL + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.left = "0px";
            });
            elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BR + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.left = "0px";
            });
            // this.state.control.element.style.top = this.props.mapController.map.getSize()[1] + "px";
            jQuery(this.state.control.element).addClass("panel-slided-in").removeClass("panel-slided-out")
        }
    }

    /**
     * Adds the given HTML content to the panel.
     * @param content   Must be a HTML element.
     */
    addContent(content) {
        this.state.childs.push(content);
    }
}
