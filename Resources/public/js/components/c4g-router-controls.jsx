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
import {HorizontalPanel} from "./../../../../../MapsBundle/Resources/public/js/components/c4g-horizontal-panel.jsx";
import {RouterAddressInput} from "./c4g-router-address-input.jsx"
import {RouterProfileSelection} from "./c4g-router-profile-selection.jsx"
import {Titlebar} from "./../../../../../MapsBundle/Resources/public/js/components/c4g-titlebar.jsx"
import {getLanguage} from "./../routing-constant-i18n";

export default class RouterControls extends HorizontalPanel {

  constructor(props) {
    super(props);

    this.state.router = this.props.router;
    this.state.showForm = true;

    this.setRouteMode = this.setRouteMode.bind(this);
    this.setAreaMode = this.setAreaMode.bind(this);
    this.close = this.close.bind(this);

    this.langConstants = getLanguage(props.mapController.data);

    if (props.mapController.data.router_div) {
      document.querySelector(".c4g-router-panel-button-top").className += " c4g-external";
    }
  }

  setRouteMode(event) {
    event.stopPropagation();
    this.props.router.setMode("route");
  }

  setAreaMode(event) {
    event.stopPropagation();
    this.props.router.setMode("area");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.slideOutCollidingElements();
  }

  render() {
    const scope = this;
    let className = "c4g-router-content" + (this.props.open ? " c4g-open " : " c4g-close ") + this.props.mode;
    // propagate open state down to child components
    let open = this.props.open;
    let modeSwitcher = "";
    if (this.props.router.props.mapController.data.areaSearch && !this.props.router.props.mapController.data.areaSearchOnly) {
      modeSwitcher = <div className="c4g-router-mode-switch">
        <button id="c4g-router-button-route" className={(this.props.mode === "route" ? "c4g-active" : "c4g-inactive")} onMouseUp={this.setRouteMode} title={this.langConstants.ROUTER_FIND_ROUTE}>Route</button>
        <button id="c4g-router-button-area" className={(this.props.mode === "area" ? "c4g-active" : "c4g-inactive")} onMouseUp={this.setAreaMode} title={this.langConstants.AREA_NAME}>Area</button>
      </div>;
    }

    if (this.state.showForm) {
      return (
        <div className={className}>
          {modeSwitcher}
          <RouterAddressInput className="c4g-router-input-content" router={this.props.router} withPosition={true} switchTargets={this.props.switchTargets}
                              objFunctions={this.props.objFunctions} objSettings={this.props.objSettings} currentProfile={this.props.currentProfile} enableOverPoints={this.props.enableOverPoints}
                              containerAddresses={this.props.containerAddresses} mode={this.props.mode} open={open} layers={this.props.layers} resetFunctions={this.props.resetFunctions}
                              fromAddress={this.props.fromAddress} toAddress={this.props.toAddress} areaAddress={this.props.areaAddress} sliderOptions={this.props.sliderOptions}
                              profiles={this.props.profiles} overSettings={this.props.overSettings}/>
        </div>
      );
    } else {
      return (
        <div className={className}>
          <Titlebar wrapperClass={"c4g-router-header"} header={headline} headerClass={"c4g-router-headline"}
                    detailBtnClass={"c4g-router-extended-options"} detailBtnCb={this.toggleDetails} closeBtnClass={"c4g-router-close"} closeBtnCb={this.close}/>
          <button className={"c4g-router-hide-form-button"} onMouseUp={() => {this.setState({showForm: !this.state.showForm})}}/>
        </div>
      );
    }

  }

  slideInCollidingElements() {
    // jQuery(this.state.control.element).css("top", 0 + "px");
  }

  slideOutCollidingElements() {
    // override parent method
    let className = this.props.className + (this.props.open ? " c4g-open" : " c4g-close");
    let topValue = 0;
    let container = document.getElementsByClassName(className)[0];
    if (container) {
      topValue = container.offsetHeight;
    }
    // jQuery(this.state.control.element).css("top", topValue + "px");
  }

  open() {
    this.props.setOpen(true);
    this.slideOutCollidingElements();
    jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open");
  }

  close() {
    this.props.setOpen(false);
    this.slideOutCollidingElements();
    jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close");
  }

  clickControl(evt) {
    let hidden = this.props.router.props.mapController.routerContainer.className.includes('c4g-close');
    if (this.props.open) {
      if (!hidden) {
        this.close();
      }
      else {
        jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open");
      }

    }
    else if (!this.props.open){
      this.open();
    }
  }
}