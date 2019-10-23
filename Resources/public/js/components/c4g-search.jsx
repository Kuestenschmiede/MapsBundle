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
import {Suggestions} from "./c4g-autocomplete-suggestions.jsx"

export class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query : '',
      containerAddresses : {
        arrNames: [],
        arrPositions: []
      }
    };
    this.autocompleteAddress = this.autocompleteAddress.bind(this);
    this.handleSuggestionClick = this.handleSuggestionClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  render() {
    let suggestions = null;
    if (this.state.query.length > 0) {
      suggestions = <Suggestions containerAddresses={this.state.containerAddresses} handleSuggestionClick={this.handleSuggestionClick}/>;

    }
    return (
      <div className={"search_block"}>
        <i className={"c4g-search-icon"}/>
        <form onSubmit={this.handleKey} ref={this.setWrapperRef}>
          <input
              placeholder={this.props.objSettings.searchPlaceholder}
              ref={input => this.search = input}
              onChange={this.handleInputChange}
              type="search"
          />
          {suggestions}
        </form>
      </div>

    );
  }

  handleKey = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    evt.nativeEvent.preventDefault();
    evt.nativeEvent.stopPropagation();
    this.performSearch();
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 2) {
        if (this.state.query.length % 2 === 0) {
          this.autocompleteAddress()
        }
      }
    })
  };

  handleSuggestionClick = (id) => {
    let position = this.state.containerAddresses.arrPositions[id];
    let url = this.props.objSettings.mapUrl + "#" + position[1] + "/" + position[0] + "/" + this.props.objSettings.zoomLevel;
    window.open(url, "_self");
  };

  autocompleteAddress() {
    const scope = this;
    const settings = scope.props.objSettings;

    let url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + this.state.query;

    $.ajax({url: url}).done(function(data) {
      if (data.length > 0) {
        const containerAddresses = {
          arrNames: [],
          arrPositions: []
        };
        for (let i in data) {
          if (data.hasOwnProperty(i)) {
            // do not add twice
            if (!containerAddresses.arrNames.includes(data[i].display_name)) {
              containerAddresses.arrNames.push(data[i].display_name);
              containerAddresses.arrPositions.push([data[i].lat, data[i].lon]);
            }
          }
        }
        scope.setState({
          containerAddresses: containerAddresses
        });
      }
    });
  }

  performSearch() {
    const scope = this;
    const settings = scope.props.objSettings;

    let url = settings.proxyUrl + "search.php?format=json&key=" + settings.keyForward + "&q=" + this.state.query + "&limit=1";

    $.ajax({url: url}).done(function(data) {
      if (data.length > 0) {
        let url = scope.props.objSettings.mapUrl + "#" + data[0].lon + "/" + data[0].lat + "/" + scope.props.objSettings.zoomLevel;
        window.open(url, "_self");
      }
    });
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * hide FilterFeatureList if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({query: ""});
    }
  }
}