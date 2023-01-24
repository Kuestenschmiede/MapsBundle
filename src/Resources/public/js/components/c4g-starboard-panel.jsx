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
import {cssConstants} from "./../c4g-maps-constant";
import {StarboardLayerswitcher} from "./c4g-starboard-layerswitcher";
import {getLanguage} from "./../c4g-maps-i18n";
const Titlebar = React.lazy(() => import("./c4g-titlebar.jsx"));
import {utils} from "../c4g-maps-utils";

export default class StarboardPanel extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    // create control to toggle the panel
    let element = document.createElement('div');
    let button = document.createElement('button');
    this.langConstants = getLanguage(props.mapController.data);
    button.title = this.langConstants.CTRL_STARBOARD;
    element.className = "c4g-starboard-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    if (props.external) {
      element.className += " c4g-external";
    }
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
    let index = mapController.arrComponents.findIndex(element => element.name === "layerswitcher");
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.horizontalPanel = control;
    this.open = this.open.bind(this);
    this.slideOutCollidingElements = this.slideOutCollidingElements.bind(this);
    this.resizeFunction = this.resizeFunction.bind(this);
    this.close = this.close.bind(this);
    this.createStylingForIcon = this.createStylingForIcon.bind(this);
    // state variables (every property that has influence on this component)
    this.state = {
      // either "top" or "bottom"
      direction: props.direction || "right",
      open: props.open || false,
      className: props.className || "c4g-starboard-panel",
      childs: props.childs || [],
      control: control,
      activeTab: 0
    };
  }

  componentDidMount() {

  }

  setActiveTab(idx) {
    this.setState({activeTab: idx});
  }

  render() {
    const scope = this;
    const mapData = this.props.mapController.data;
    let className = this.state.className + "-" + this.state.direction;
    className += " " + (this.state.open ? "c4g-open" : "c4g-close");
    if (this.state.open) {
      jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
    } else {
      jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
    }
    let buttonSwitcher = "";
    let buttons = [];
    if (this.props.tabLayers.length > 0) {
      let regularButton = <button key={this.props.tabLayers.length} title={this.langConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER} className={"c4g-starboard-view-trigger-layerswitcher"} onMouseUp={() => {scope.setActiveTab(0)}}/>;
      buttons.push(regularButton);
      buttons.push(this.props.tabLayers.map(function(element, index) {
          let iconCode = element.awesomeIcon;
          scope.createStylingForIcon(iconCode, index);
          return <button key={index} title={element[0].name}
                         className={"c4g-starboard-view-trigger-tab-" + index}
                         onMouseUp={() => {scope.setActiveTab(index + 1)}}/>;
        })
      );
      buttonSwitcher = <div className={"c4g-starboard-switcher"}>
        {buttons}
      </div>
    }
    let tabs = "";
    if (this.props.tabLayers.length > 0) {
      tabs = <React.Fragment>
        {this.props.tabLayers.map(function(element, index) {
          return <StarboardLayerswitcher key={index} mapController={scope.props.mapController}
                                         objLayers={scope.props.tabLayers[index]} parentCallback={scope.props.tabCallback}
                                         layerStates={scope.props.tabStates} openfunc={scope.open} headline={element[0].name}
                                         open={scope.state.open} active={(index + 1) === scope.state.activeTab}/>;
        })}
      </React.Fragment>;
    }
    return (
      <div className={cssConstants.STARBOARD_WRAPPER}>
        <Suspense fallback={<div>Loading...</div>}>
          <Titlebar wrapperClass={"c4g-starboard-header"} headerClass={cssConstants.STARBOARD_HEADLINE}
                    header={mapData.starboard.label || this.langConstants.STARBOARD} closeBtnClass={cssConstants.STARBOARD_CLOSE} closeBtnCb={this.close}
                    closeBtnTitle={this.langConstants.CLOSE}>
          </Titlebar>
        </Suspense>
        {buttonSwitcher}
        <div className={cssConstants.STARBOARD_CONTENT_CONTAINER}>
          <StarboardLayerswitcher key={this.props.tabLayers.length} mapController ={this.props.mapController} lang={this.langConstants}
                                objLayers={this.props.objLayers} styleData={this.props.styleData} parentCallback={this.props.parentCallback}
                                layerStates={this.props.layerStates} changeCollapseState={this.props.changeCollapseState} openfunc={this.open} headline={mapData.layerswitcher.label}
                                open={this.state.open} active={scope.state.activeTab === 0}/>
          {tabs}
        </div>
      </div>
    )
  }

  createStylingForIcon(iconCode, index) {
    let style = document.createElement("style");
    // webkit hack:
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);

    let styleSheet = style.sheet;
    styleSheet.insertRule("button.c4g-starboard-view-trigger-tab-" + index + ":before {\n" +
      "  content: \"\\" + iconCode + "\";\n" +
      "  font-family: 'Font Awesome 5 Free';\n" +
      "  font-weight: 900;\n" +
      "  font-size: inherit;\n" +
      "}")
  }

  open() {
    this.setState({open: true}, () => this.slideOutCollidingElements());
    this.props.mapController.setOpenComponent(this);
  }

  close() {
    this.setState({open: false}, () => this.slideInCollidingElements());
  }

  resizeFunction() {
    const scope = this;
    window.requestAnimationFrame(function() {
      scope.slideOutCollidingElements();
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.open) {
      this.slideOutCollidingElements();
    } else {
      this.slideInCollidingElements();
    }
    if (this.props.mapController.data.caching && !this.state.open) {
      let panelVal = utils.getValue('panel');
      if (panelVal === this.constructor.name) {
        utils.storeValue('panel', "");
      }
    }
  }

  /**
   * Moves the buttons that would collide with the panel.
   */
  slideOutCollidingElements() {
    jQuery(".c4g-starboard-container").addClass("c4g-open").removeClass("c4g-close");
  }

  /**
   * Undoes the previous button movement.
   */
  slideInCollidingElements() {
    jQuery(".c4g-starboard-container").addClass("c4g-close").removeClass("c4g-open");
  }
}
