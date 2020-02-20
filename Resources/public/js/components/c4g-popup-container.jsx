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
import {getLanguage} from "./../c4g-maps-i18n";
import {cssConstants} from "./../c4g-maps-constant";
import {Titlebar} from "./c4g-titlebar.jsx";
import {utils} from "../c4g-maps-utils";

export class PopupContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: "",
      open: props.open,
      detailsOpen: false,
      showRouteButtons: 0
    };
    props.hideOther(this);
    this.routeButtons = "";
    this.language = getLanguage(this.props.mapData);
    this.close = this.close.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);

  }

  render() {
    let detailBtnClass = "";
    let detailBtnCb = "";
    let className = "c4g-sideboard c4g-popup-container ";
    if (this.state.open) {
      className += "c4g-open ";
    } else {
      className += "c4g-close";
    }
    if (this.props.alwaysExtended) {
      className += " c4g-details-open";
    } else {
      if (this.state.detailsOpen) {
        className += " c4g-details-open";
      } else {
        className += " c4g-details-closed";
      }
    }
    return (
      <div className={className}>
        <div className={"c4g-popup-wrapper"}>
          <Titlebar wrapperClass={"c4g-popup-header"} headerClass={"c4g-popup-header-headline"} header={""}
                    closeBtnClass={"c4g-titlebar-close"} closeBtnCb={this.close} detailBtnClass={""} detailBtnCb={""}>
            <div dangerouslySetInnerHTML={{__html: this.routeButtons.outerHTML}} />
          </Titlebar>
          <div className={"c4g-popup-content"} dangerouslySetInnerHTML={{__html: this.state.content}}>
          </div>
        </div>
      </div>
    );
  }

  setRouteButtons(buttons) {
    this.routeButtons = buttons;
  }

  setContent(content) {
    this.setState({content: content});
  }

  open() {
    this.setState({open: true});
  }

  close() {
    this.setState({open: false});
  }

  toggleDetails() {
    this.setState({detailsOpen: !this.state.detailsOpen});
  }
}
