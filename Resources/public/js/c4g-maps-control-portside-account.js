// "namespace"
import {langConstantsGerman} from "./c4g-maps-constant-i18n-de";

this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

import {Sideboard} from "./c4g-maps-control-sideboard";
import {cssConstants} from "./c4g-maps-constant";
import {langConstantsEnglish} from "./c4g-maps-constant-i18n-en";

let langConstants = {};

if (mapData) {
  if (mapData.lang === "de") {
    langConstants = langConstantsGerman;
  } else if (mapData.lang === "en") {
    langConstants = langConstantsEnglish;
  } else {
    // fallback
    langConstants = langConstantsGerman;
  }
}

(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   * @param  {[type]}  config         [description]
   */
  c4g.maps.control.Account = function (opt_options) {

    // extend options
    this.options = $.extend({
      className: cssConstants.ACCOUNT,
      name: 'account',
      headline: langConstants.ACCOUNT,
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
  ol.inherits(c4g.maps.control.Account, Sideboard);

  /**
   * Methods
   */
  c4g.maps.control.Account.prototype = $.extend(c4g.maps.control.Account.prototype, {

    /**
     * Executed when the panel will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
    init: function () {
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
    }, // end of "init()"


    addAccountView: function () {
      var accountView;

        accountView = this.addView({
        name: 'account',
        triggerConfig: {
          tipLabel: langConstants.ACCOUNT_VIEW_TRIGGER,
          className: cssConstants.ACCOUNT_VIEW_TRIGGER,
          withHeadline: false
        },
        sectionElements: [
          {section: this.contentContainer, element: this.mainSection},
          {section: this.topToolbar, element: this.viewTriggerBar}
        ]
      });

      return accountView;
    }, // end of "addAccountView()"

    addAccount: function (options) {
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

          // Show loading animation
          self.spinner.show();

          // printFunction = function (event) {
          //   var infoButton,
          //       featureGeometry,
          //       translateInteraction,
          //       modifyInteraction,
          //       modifyButton,
          //       applyButton;
          //
          //
          //     infoButton = event.target;
          //
          //   // add apply button
          //   applyButton = document.createElement('button');
          //   applyButton.className = cssConstants.ICON + ' ' + cssConstants.EDITOR_FEATURE_APPLY;
          //   applyButton.title = langConstants.EDITOR_FEATURE_APPLY;
          //   applyButton.setAttribute('feat_id', i);
          //
          // }; // end of "modifyFeatureFunction()"

          features = new ol.Collection();

          self.spinner.hide();
          return true;
        },
        activateFunction: function () {
        },
        deactivateFunction: function () {
        }
      });

      return viewAccount;
    } // end of "addAccount()"

  });

}(jQuery, this.c4g));

export let Account = this.c4g.maps.control.Account;