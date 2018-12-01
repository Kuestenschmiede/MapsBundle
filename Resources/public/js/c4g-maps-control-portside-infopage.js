import {langConstantsEnglish} from "./c4g-maps-constant-i18n-en";
import {cssConstants} from "./c4g-maps-constant";
import {langConstantsGerman} from "./c4g-maps-constant-i18n-de";
import {Sideboard} from "./c4g-maps-control-sideboard";

let langConstants = {};

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    langConstants = langConstantsGerman;
  } else if (mapData.lang === "en") {
    langConstants = langConstantsEnglish;
  } else {
    // fallback
    langConstants = langConstantsGerman;
  }
}
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
    this.options = $.extend({
      className: cssConstants.INFOPAGE,
      name: 'infopage',
      headline: langConstants.INFOPAGE,
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
        tipLabel: langConstants.INFOPAGE_VIEW_TRIGGER,
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

    return viewInfopage;
  } // end of "addInfopage()"

}