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
export class Account extends Sideboard {

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
    this.langConstants = getLanguage(opt_options.mapController.data);
    this.options = jQuery.extend({
      className: cssConstants.ACCOUNT,
      name: 'account',
      headline: this.langConstants.ACCOUNT,
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
  };


  /**
   * Executed when the panel will be opened for the first time.
   * [init description]
   *
   * @return  {boolean}  Returns |true| on success
   */
  init() {
    var self = this;

    this.spinner.show();

    this.viewAccount = this.addAccountView();
    this.viewAccount.activate();

    var proxy = self.options.mapController.proxy;
    var map = self.options.mapController.map;

    this.mainSectionAccount = document.createElement('p');
    this.mainSectionAccount.innerHTML = self.options.mapController.data.account;
    this.mainSection.appendChild(this.mainSectionAccount);
    this.contentContainer.setElement(this.mainSection);

    this.spinner.hide();
    return true;
  } // end of "init()"


  addAccountView() {
    var accountView;

    accountView = this.addView({
      name: 'account',
      triggerConfig: {
        tipLabel: this.langConstants.ACCOUNT_VIEW_TRIGGER,
        className: cssConstants.ACCOUNT_VIEW_TRIGGER,
        withHeadline: false
      },
      sectionElements: [
        {section: this.contentContainer, element: this.mainSection},
        {section: this.topToolbar, element: this.viewTriggerBar}
      ]
    });

    return accountView;
  } // end of "addAccountView()"

  addAccount(options) {
    var self,
      TRIGGER_ACCOUNT,
      viewAccount,
      source,
      interaction,
      features;

    self = this;

    //TRIGGER_ACCOUNT = 'ACCOUNT_VIEW_TRIGGER_' + options.type.toUpperCase();

    viewAccount = self.addAccount({
      name: 'Account',
      triggerConfig: {
        tipLabel: 'Account',//langConstants[TRIGGER_DRAW],
        className: 'c4g_account_trigger',//cssConstants[TRIGGER_DRAW]
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

    return viewAccount;
  } // end of "addAccount()"

}