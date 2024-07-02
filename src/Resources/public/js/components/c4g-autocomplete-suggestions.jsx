/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export class Suggestions extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const options = this.props.containerAddresses.arrNames.map((item, index) => (
      <li key={index} onMouseUp={(evt) => this.props.handleSuggestionClick(index)}>
        {item}
      </li>
    ));
    return <ul className={"c4g-autocomplete-list"}>{options}</ul>
  }
}