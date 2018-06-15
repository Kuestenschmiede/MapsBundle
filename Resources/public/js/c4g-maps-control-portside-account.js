// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

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
      className: c4g.maps.constant.css.ACCOUNT,
      name: 'account',
      headline: c4g.maps.constant.i18n.ACCOUNT,
      create: true,
      mapController: undefined,
      direction: 'left'
    }, opt_options);

    if (!this.options.mapController) {
      return false;
    }

    this.mainSection = document.createElement('div');

    // call parent constructor
    c4g.maps.control.Sideboard.call(this, this.options);
  };
  ol.inherits(c4g.maps.control.Account, c4g.maps.control.Sideboard);

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
          tipLabel: c4g.maps.constant.i18n.ACCOUNT_VIEW_TRIGGER,
          className: c4g.maps.constant.css.ACCOUNT_VIEW_TRIGGER
        },
        sectionElements: [
          {section: this.contentContainer, element: this.mainSection},
          {section: this.bottomToolbar, element: this.viewTriggerBar}
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
          tipLabel: 'Account',//c4g.maps.constant.i18n[TRIGGER_DRAW],
          className: 'c4g_account_trigger',//c4g.maps.constant.css[TRIGGER_DRAW]
        },
        sectionElements: [
          {section: self.bottomToolbar, element: self.viewTriggerBar}
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
          //   applyButton.className = c4g.maps.constant.css.ICON + ' ' + c4g.maps.constant.css.EDITOR_FEATURE_APPLY;
          //   applyButton.title = c4g.maps.constant.i18n.EDITOR_FEATURE_APPLY;
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