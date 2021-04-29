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
import {getLanguage} from "./../routing-constant-i18n";

export default class RouterProfileSelection extends Component {

  constructor(props) {
    super(props);

    this.setProfile = this.setProfile.bind(this);

    this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "roadbike",
      4: "bike",
      5: "mountainbike",
      6: "bike",
      7: "electricbike",
      8: "foot",
      9: "wander",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "motorbike"
    };

    this.languageConstants = getLanguage(props.router.props.mapController.data);

    this.profileLang = {
      "car": this.languageConstants.CAR,
      "hgv": this.languageConstants.TRUCK,
      "bike": this.languageConstants.BIKE,
      "roadbike": this.languageConstants.ROADBIKE,
      "mountainbike": this.languageConstants.MOUNTAINBIKE,
      "electricbike": this.languageConstants.ELECTRICBIKE,
      "foot": this.languageConstants.WALK,
      "wander": this.languageConstants.WANDER,
      "wheelchair": this.languageConstants.WHEEL,
      "scooter": this.languageConstants.SCOOT,
      "motorbike": this.languageConstants.MOTORBIKE
    };

    this.state = {
      showPopup: !!props.router.mapData.router_profiles_initial
    }
  }

  setProfile(profile) {
    this.props.router.setProfile(parseInt(profile.id, 10));
    if (!this.props.router.mapData.router_profiles_initial) {
      this.setState({showPopup: false});
    }
  }

  render() {
    if (this.props.profiles.length === 1) {
      return (<div className="c4g-router-profile-wrapper">
        <button className={"c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active"}
                      key={this.props.currentProfile} title={this.profileLang[this.profileTranslation[this.props.currentProfile]]}/>
      </div>);
    } else {
      if (this.state.showPopup) {
        return (
          <div className="c4g-router-profile-wrapper c4g-popup">
            <button className={"c4g-titlebar-close"} onMouseUp={() => this.setState({showPopup: false})}/>
            {this.props.profiles.map((item) => {
              return <button onMouseUp={() => this.setProfile(item)}
                             className={"c4g-router-profile-" + this.profileTranslation[item.id] + (parseInt(item.id, 10) === this.props.currentProfile ? " c4g-active" : " c4g-inactive")}
                             key={item.id} title={this.profileLang[this.profileTranslation[item.id]]}/>
            })}
          </div>
        );
      } else {
        return (<div className="c4g-router-profile-wrapper">
          <button onMouseUp={() => this.setState({showPopup: true})} className={"c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active"}
                  key={this.props.currentProfile} title={this.profileLang[this.profileTranslation[this.props.currentProfile]]}/>
        </div>);
      }

    }
  }

  showProfileSelection() {
    this.setState({showPopup: true});
  }
}