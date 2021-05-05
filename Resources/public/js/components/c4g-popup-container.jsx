/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import {getLanguage} from "./../c4g-maps-i18n";
import {Titlebar} from "./c4g-titlebar.jsx";

export class PopupContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: "",
      open: props.open,
      detailsOpen: false,
      conststr: false
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
    let className = this.props.external ? "c4g-popup-container " : "c4g-sideboard c4g-popup-container ";

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
    let headerClass = "c4g-popup-header";
    let addButtons = <div/>;
    if (this.state.conststr) {
      headerClass += " c4g-routing";
      addButtons = <this.state.conststr config={this.state.config}/>;
    }
    return (
      <div className={className}>
        <div className={"c4g-popup-wrapper"}>
          <Titlebar wrapperClass={headerClass} headerClass={"c4g-popup-header-headline"} header={this.props.mapData.popupHeadline || ""}
                    closeBtnClass={"c4g-titlebar-close"} closeBtnCb={this.close} closeBtnTitle={this.language.CLOSE}
                    detailBtnClass={""} detailBtnCb={""}>
            {addButtons}
          </Titlebar>
          <div className={"c4g-popup-content"} dangerouslySetInnerHTML={{__html: this.state.content}}/>

        </div>
      </div>
    );
  }

  setAddButtons(conststr, config) {
    this.setState({
      config: config,
      conststr: conststr
    });
  }

  setContent(content) {
    this.setState({content: content});
  }

  open() {
    this.setState({open: true});
  }

  close() {
    let newState = {
      open: false,
      content: this.props.external ? "": this.state.content
    };
    this.setState(newState);
  }

  toggleDetails() {
    this.setState({detailsOpen: !this.state.detailsOpen});
  }
}
