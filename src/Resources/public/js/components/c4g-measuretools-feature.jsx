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

export class MeasuredFeature extends Component {

  constructor(props) {
    super(props);

    this.changeFeatureLabel = this.changeFeatureLabel.bind(this);
  }

  render() {
    const scope = this;
    return (
      <div>
        <div>
          <label htmlFor={"measureElement_" + this.props.idx}>Name: </label>
          <input type="text" name={"measureElement_" + this.props.idx} defaultValue={this.props.label}
                  onInput={this.changeFeatureLabel}/>
        </div>
        {Object.keys(this.props.measuredValues).map(function(element, index) {
          let obj = scope.props.measuredValues[element];
          let hrValue = 0.0;
          switch (element) {
            case "line":
            case "radius":
              hrValue = scope.convertMetersToKm(obj.value);
              break;
            case "area":
              hrValue = scope.convertSquareMetersToSquareKm(obj.value);
              break;
          }
          return (<p key={index}>
            <strong>{obj.description}</strong>
            <span className={"c4g-measure-value-" + scope.props.idx}>{hrValue}</span>
          </p>)
        })}
      </div>
    );
  }

  changeFeatureLabel() {
    let feature = this.props.feature;
    feature.label = document.querySelector('input[name="measureElement_' + this.props.idx + '"]').value;
    this.props.modifyFeature(feature, feature.id);
  }

  convertMetersToKm(distance) {
    let kmValue = distance / 1000;
    if (kmValue > 0) {
      return kmValue + " km";
    } else {
      return distance + " m";
    }
  }

  convertSquareMetersToSquareKm(area) {
    let kmValue = area / 1000000;
    if (kmValue > 0) {
      return kmValue + " km²";
    } else {
      return area + " m²";
    }
  }

}