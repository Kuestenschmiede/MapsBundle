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
import ReactDOM from "react-dom";

export class Titlebar extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={this.props.wrapperClass}>
        <span className={this.props.headerClass}>{this.props.header}</span>
        <button className={this.props.detailBtnClass} onMouseUp={this.props.detailBtnCb}></button>
        <button className={this.props.closeBtnClass} onMouseUp={this.props.closeBtnCb}></button>
      </div>
    );
  }

}