/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export default class Titlebar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let detailButton = "";
    if (this.props.detailBtnClass && this.props.detailBtnCb) {
      detailButton = <button className={this.props.detailBtnClass} onMouseUp={this.props.detailBtnCb}></button>;
    }
    let closeButton = "";
    if (this.props.closeBtnClass && this.props.closeBtnCb) {
      closeButton = <button className={this.props.closeBtnClass} onMouseUp={this.props.closeBtnCb} title={this.props.closeBtnTitle}></button>;
    }
    let minimizeButton = "";
    if (this.props.hideContainer) {
      let minimize = () => {
        // this.props.removeComponent();
        jQuery(this.props.hideContainer).removeClass("c4g-open").addClass("c4g-close");
      };
      minimizeButton = <button className={'c4g-sideboard-hide'} onMouseUp={()=> minimize()}/>
    }
    return (
      <div className={this.props.wrapperClass}>
        <span className={this.props.headerClass}>{this.props.header}</span>
        {minimizeButton}
        {closeButton}
        {detailButton}
        {this.props.children}
      </div>
    );
  }

}