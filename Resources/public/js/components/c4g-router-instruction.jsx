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
import {toHumanDistance} from "./../c4g-router-time-conversions";
import {Feature} from "ol";
import {LineString, Point} from "ol/geom";
import {fromLonLat} from "ol/proj";
import {Stroke, Style} from "ol/style";

export class RouterInstruction extends Component {

  constructor(props) {
    super(props);
    this.fnItemOver = this.fnItemOver.bind(this);
    this.fnItemClick = this.fnItemClick.bind(this);
    this.fnItemOut = this.fnItemOut.bind(this);
  }

  render() {
    return(
      <div className={"c4g-router-instruction"} onMouseUp={this.fnItemClick} onMouseLeave={this.fnItemOut} onMouseEnter={this.fnItemOver} key={this.props.id}>
        <div><img src={this.getInstructionIcon(this.props.imgPath)} alt=""/></div>
        <div>{this.props.instrText}</div>
        <div className="c4g-router-instruction-distance">{toHumanDistance(this.props.instrDist * 1000)}</div>
      </div>
    );
  };

  fnItemClick = function () {
    if (this.props.routerWaySource && this.props.routerWaySource.getFeatures()) {
      this.props.routerHintSource.clear();
      let feature = this.props.routerWaySource.getFeatures()[0];
      let coordinates = feature.getGeometry().getCoordinates();
      var coordLonLat = this.props.dataPos;
      if (coordLonLat) {
        let stringlonlat = coordLonLat.split(",");
        stringlonlat[0] = parseFloat(stringlonlat[0]);
        stringlonlat[1] = parseFloat(stringlonlat[1]);
        let newCoord = fromLonLat(stringlonlat);
        let currentHintFeature = new Feature({
          geometry: new Point(newCoord)
        });
        this.props.routerHintSource.addFeature(currentHintFeature);
        this.props.options.mapController.map.getView().setCenter(newCoord);
      }
      else if (coordinates && this.props.dataStart && this.props.dataEnd) {
        let geom = new LineString(coordinates.slice(this.props.dataStart, this.props.dataEnd));
        let currentHintFeature = new Feature({
          geometry: geom
        });
        currentHintFeature.setStyle(
            new Style({
              stroke: new Stroke({
                color: 'rgba(255, 0, 0, 1)',
                width: 20
              })
            }),
        );
        let currentZoom = this.props.mapController.map.getView().getZoom();
        this.props.routerHintSource.addFeature(currentHintFeature);
        this.props.mapController.map.getView().fit(geom);
        let afterZoom = this.props.mapController.map.getView().getZoom();
        let endZoom = Math.round((currentZoom + afterZoom)/2);
        endZoom = (endZoom > afterZoom) ? afterZoom : endZoom;
        this.props.mapController.map.getView().setZoom(endZoom);

      }
    }
  };

  fnItemOver = function () {
    if (this.props.routerWaySource && this.props.routerWaySource.getFeatures()) {
      let feature = this.props.routerWaySource.getFeatures()[0];
      if (feature) {
        this.props.routerHintSource.clear();
        let coordLonLat = this.props.dataPos;
        if (coordLonLat) {
          let stringlonlat = coordLonLat.split(",");
          stringlonlat[0] = parseFloat(stringlonlat[0]);
          stringlonlat[1] = parseFloat(stringlonlat[1]);
          let newCoord = fromLonLat(stringlonlat);
          let currentHintFeature = new Feature({
            geometry: new Point(newCoord)
          });
          this.props.routerHintSource.addFeature(currentHintFeature);
        } else if (this.props.dataStart && this.props.dataEnd) {
          let coordinates = feature.getGeometry().getCoordinates();
          if (coordinates) {
            let currentHintFeature = new Feature({
              geometry: new LineString(coordinates.slice(this.props.dataStart, this.props.dataEnd))
            });
            currentHintFeature.setStyle(
                new Style({
                  stroke: new Stroke({
                    color: 'rgba(255, 0, 0, 1)',
                    width: 15
                  })
                }),
            );
            this.props.routerHintSource.addFeature(currentHintFeature);
          }
        }
      }
    }
  };

  fnItemOut = function () {
    this.props.routerHintSource.clear();
  };

  getInstructionIcon(intType) {
    let routerEngine = this.props.mapController.data.router_api_selection;
    switch (routerEngine) {
      case '5':
      case '4':
        return this.getInstructionIconValhalla(intType);
      case '3':
        return this.getInstructionIconGraphhopper(intType);
      case '2':
        return this.getInstructionIconORS(intType);
    }
  }

  /**
   * Translates an integer number into the correct instruction icon (Graphhopper icons).
   * @param intType
   * @returns {string}
   */
  getInstructionIconValhalla(intType) {
    let image;
    switch (intType) {
      case 0:
        image = "default.png";
        break;
      case 1:
        image = "head.png";
        break;
      case 2:
        image = "head.png";
        break;
      case 3:
        image = "head.png";
        break;
      case 4:
        image = "target.png";
        break;
      case 5:
        image = "target.png";
        break;
      case 6:
        image = "target.png";
        break;
      case 7:
        image = "continue.png";
        break;
      case 8:
        image = "continue.png";
        break;
      case 9:
        image = "slight-right.png";
        break;
      case 10:
        image = "turn-right.png";
        break;
      case 11:
        image = "sharp-right.png";
        break;
      case 12:
        image = "u-turn.png";
        break;
      case 13:
        image = "u-turn.png";
        break;
      case 14:
        image = "sharp-left.png";
        break;
      case 15:
        image = "turn-left.png";
        break;
      case 16:
        image = "slight-left.png";
        break;
      case 17:
        image = "continue.png";
        break;
      case 18:
        image = "slight-right.png";
        break;
      case 19:
        image = "slight-left.png";
        break;
      case 20:
        image = "slight-right.png";
        break;
      case 21:
        image = "slight-left.png";
        break;
      case 22:
        image = "continue.png";
        break;
      case 23:
        image = "slight-right.png";
        break;
      case 24:
        image = "slight-left.png";
        break;
      case 25:
        image = "continue.png";
        break;
      case 26:
        image = "round-about.png";
        break;
      case 27:
        image = "round-about.png";
        break;
      default:
        image = "default.png";
        break;

    }
    return "bundles/con4gismaps/vendor/osrm/images/" + image;
  }

  getInstructionIconGraphhopper(intType) {
    let image;
    switch (intType) {
      case 0:
        image = "continue.png";
        break;
      case -2:
        image = "turn-left.png";
        break;
      case 2:
        image = "turn-right.png";
        break;
      case -1:
        image = "turn-left.png";
        break;
      case 1:
        image = "turn-right.png";
        break;
      case -3:
        image = "sharp-left.png";
        break;
      case 3:
        image = "sharp-right.png";
        break;
      case -7:
        image = "slight-left.png";
        break;
      case 7:
        image = "slight-right.png";
        break;
      case 6:
        image = "round-about.png";
        break;
      case 4:
        image = "target.png";
        break;
      case 5:
        image = "target.png";
        break;
      case -98:
        image = "u-turn.png";
        break;
      case 99:
        image = "head.png";
        break;
    }
    return "bundles/con4gismaps/vendor/osrm/images/" + image;
  }

  getInstructionIconORS(intType) {
    let image;
    switch (intType) {
      case 0:
        image = "turn-left.png";
        break;
      case 1:
        image = "turn-right.png";
        break;
      case 2:
        image = "sharp-left.png";
        break;
      case 3:
        image = "sharp-right.png";
        break;
      case 4:
        image = "slight-left.png";
        break;
      case 5:
        image = "slight-right.png";
        break;
      case 6:
        image = "continue.png";
        break;
      case 7:
        image = "round-about.png";
        break;
      case 8:
        image = "round-about.png";
        break;
      case 9:
        image = "u-turn.png";
        break;
      case 10:
        image = "target.png";
        break;
      case 11:
        image = "head.png";
        break;
      case 12:
        image = "slight-left.png";
        break;
      case 13:
        image = "slight-right.png";
        break;

    }
    return "bundles/con4gismaps/vendor/osrm/images/" + image;
  }

}