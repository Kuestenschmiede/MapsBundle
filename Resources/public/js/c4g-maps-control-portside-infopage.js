/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

import {Sideboard} from "./c4g-maps-control-sideboard";
import {cssConstants} from "./c4g-maps-constant";
import {getLanguage} from "./c4g-maps-i18n";

'use strict';
export class Infopage extends Sideboard {


  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   * @param  {[type]}  config         [description]
   */
  constructor(opt_options) {
    super(opt_options);
    // extend options
    this.options = jQuery.extend({
      className: cssConstants.INFOPAGE,
      name: 'infopage',
      headline: this.langConstants.INFOPAGE,
      create: true,
      mapController: undefined,
      direction: 'left'
    }, opt_options);

    if (!this.options.mapController) {
      return false;
    }

    this.mainSection = document.createElement('div');

    // call parent constructor
    Sideboard.call(this, this.options);
  }

  /**
   * Executed when the panel will be opened for the first time.
   * [init description]
   *
   * @return  {boolean}  Returns |true| on success
   */
  init() {
    //var infoButton;
    var self = this;

    this.spinner.show();

    this.viewInfopage = this.addInfoView();
    this.viewInfopage.activate();
    this.langConstants = getLanguage(self.options.mapController.data);

    var proxy = self.options.mapController.proxy;
    var map = self.options.mapController.map;

    this.mainSectionInfo = document.createElement('p');
    this.mainSectionInfo.innerHTML = self.options.mapController.data.infopage;
    this.mainSection.appendChild(this.mainSectionInfo);
    this.contentContainer.setElement(this.mainSection);

    this.spinner.hide();
    return true;
  } // end of "init()"


  addInfoView() {
    var infoView;

    infoView = this.addView({
      name: 'info',
      triggerConfig: {
        tipLabel: this.langConstants.INFOPAGE_VIEW_TRIGGER,
        className: cssConstants.INFOPAGE_VIEW_TRIGGER,
        withHeadline: false
      },
      sectionElements: [
        {section: this.contentContainer, element: this.mainSection},
        {section: this.topToolbar, element: this.viewTriggerBar}
      ]
    });

    return infoView;
  } // end of "addInfoView()"

  addInfopage(options) {
    var self,
      TRIGGER_INFOPAGE,
      viewInfopage,
      source,
      interaction,
      features;

    self = this;

    //TRIGGER_INFOPAGE = 'INFOPAGE_VIEW_TRIGGER_' + options.type.toUpperCase();

    viewInfopage = self.addInfopage({
      name: 'Infopage',
      triggerConfig: {
        tipLabel: 'Infopage',//langConstants[TRIGGER_DRAW],
        className: 'c4g_infopage_trigger',//cssConstants[TRIGGER_DRAW]
        withHeadline: false
      },
      sectionElements: [
        {section: self.topToolbar, element: self.viewTriggerBar}
      ],
      initFunction: function () {
        return true;
      },
      activateFunction: function () {
      },
      deactivateFunction: function () {
      }
    });

    return viewInfopage;
  } // end of "addInfopage()"

}