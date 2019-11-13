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

export class PopupContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: "",
      open: props.open,
      detailsOpen: false
    };

    this.close = this.close.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  render() {

    // TODO className vorher zusammensetzen
    let detailBtnClass = "";
    let detailBtnCb = "";
    if (!this.props.alwaysExtended) {
      detailBtnClass = "c4g-beach-options";
      detailBtnCb = this.toggleDetails;
    }
    return (
      <div className={"c4g-beach " + (this.state.open ? "c4g-open" : "c4g-close") + (this.props.alwaysExtended ? " c4g-details-open" : (this.state.detailsOpen ? " c4g-details-open" : " c4g-details-closed"))}>
        <Titlebar wrapperClass={"c4g-beach-header"} headerClass={"c4g-beach-header-headline"} header={""}
                  closeBtnClass={"c4g-titlebar-close"} closeBtnCb={this.close} detailBtnClass={detailBtnClass} detailBtnCb={detailBtnCb}>

        </Titlebar>
        <div className={"c4g-beach-content"} dangerouslySetInnerHTML={{__html: this.state.content}}>
        </div>
      </div>
    );
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