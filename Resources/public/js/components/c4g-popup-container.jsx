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
      content: ""
    };
  }

  render() {
    return (
      <div className={"c4g-beach"}>
        <Titlebar wrapperClass={"c4g-beach-header"} headerClass={"c4g-beach-header-headline"} header={""}
                  closeBtnClass={""} closeBtnCb={""} detailBtnClass={""} detailBtnCb={""}>

        </Titlebar>
        <div className={"c4g-beach-content"}>
          {this.state.content}
        </div>
      </div>
    );
  }

  setContent(content) {
    this.setState({content: content});
  }

}