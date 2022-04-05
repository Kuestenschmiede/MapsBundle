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
import {Suggestions} from "./c4g-autocomplete-suggestions.jsx";

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
    this.time = 0;
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
              type="search"
              name="mapsearch"
              aria-label="Search destinations on the map"
              placeholder={this.props.objSettings.searchPlaceholder}
              ref={input => this.search = input}
              onChange={this.handleInputChange}
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
        let time = new Date().getTime();
        if (this.time + 110 < time) {
          this.time = time;
          let number = !isNaN(this.state.query)
          this.autocompleteAddress(number);
        }
      }
    })
  };

  handleSuggestionClick = (id) => {
    let position = this.state.containerAddresses.arrPositions[id];
    let url = this.props.objSettings.mapUrl + "#" + position[1] + "/" + position[0] + "/" + this.props.objSettings.zoomLevel;
    window.open(url, "_self");
  };

  autocompleteAddress(number) {
    const scope = this;
    const settings = scope.props.objSettings;

    let url = settings.proxyUrl;
    if (number) {
      url += "search.php?format=json&key=" + settings.keyForward;
    }
    else {
      url += "autocomplete.php?format=json&key=" + settings.keyAutocomplete;
    }
    url += "&q=" + this.state.query;
    if (settings.geosearchParams) {
      for (let param in settings.geosearchParams) {
        if (settings.geosearchParams.hasOwnProperty(param)) {
          url += "&" + param + "=" + settings.geosearchParams[param];
        }
      }
    }
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
    if (settings.geosearchParams) {
      for (let param in settings.geosearchParams) {
        if (settings.geosearchParams.hasOwnProperty(param)) {
          url += "&" + param + "=" + settings.geosearchParams[param];
        }
      }
    }
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