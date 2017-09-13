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
  c4g.maps.control.Exporttools = function (opt_options) {

    // extend options
    this.options = $.extend({
      name: 'export',
      headline: c4g.maps.constant.i18n.EXPORTTOOLS,
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
  ol.inherits(c4g.maps.control.Exporttools, c4g.maps.control.Sideboard);

  /**
   * Methods
   */
  c4g.maps.control.Exporttools.prototype = $.extend(c4g.maps.control.Exporttools.prototype, {

    /**
     * Executed when the panel will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
    init: function () {
      var printButton;
      var self = this;

      this.spinner.show();

      //// Add and activate measure-Views
      this.viewExporttoolsPrint = this.addPrintView();
      this.viewExporttoolsPrint.activate();

      var formatSelect = document.createElement('select');
      formatSelect.id = 'format';
      formatSelect.appendChild(new Option('a0', 'A0 (slow)', false, true));
      formatSelect.appendChild(new Option('a1', 'A1', false, true));
      formatSelect.appendChild(new Option('a2', 'A2', false, true));
      formatSelect.appendChild(new Option('a3', 'A3', false, true));
      formatSelect.appendChild(new Option('a4', 'A4', true, true));
      formatSelect.appendChild(new Option('a5', 'A5 (fast)', false, true));

      var resulutionSelect = document.createElement('select');
      resulutionSelect.id = 'resulution';
      resulutionSelect.appendChild(new Option('72', '72 dpi (fast)', false, true));
      resulutionSelect.appendChild(new Option('150', '150 dpi', false, true));
      resulutionSelect.appendChild(new Option('300', '300 dpi (slow)', false, true));

      printButton = document.createElement('button');
      printButton.className = c4g.maps.constant.css.EXPORTTOOLS_PRINT;
      printButton.title = 'Kartenausschnitt drucken'; //ToDo Language

      var proxy = self.options.mapController.proxy;
      var map = self.options.mapController.map;

      printButton.addEventListener('click', function (e) {
        map.once('postcompose', function (event) {
          var doc = new jsPDF('landscape', undefined, format);
          var format = 'a4';
          var resolution = '72';
          var dim = [297, 210];
          var width = Math.round(dim[0] * resolution / 25.4);
          var height = Math.round(dim[1] * resolution / 25.4);
          var size = map.getSize();
          var extent = map.getView().calculateExtent(size);
          var canvas = event.context.canvas;

          //ToDo make executable
          //var data = canvas.toDataURL('image/png');
          //doc.addImage(data, 'JPEG', 0, 0, dim[0], dim[1]);
          //doc.save('map.pdf');
        });
        map.renderSync();
      }, false);

      this.mainSection.appendChild(formatSelect);
      this.mainSection.appendChild(resulutionSelect);
      this.mainSection.appendChild(printButton);
      this.contentContainer.setElement(this.mainSection);

      this.spinner.hide();
      return true;
    }, // end of "init()"

    /**
     * @TODO: [addPrintView description]
     */
    addPrintView: function () {
      var printView,
          printButton;

      printView = this.addView({
        name: 'print',
        triggerConfig: {
          tipLabel: c4g.maps.constant.i18n.EXPORTTOOLS_VIEW_TRIGGER_PRINT,
          className: c4g.maps.constant.css.EXPORTTOOLS_VIEW_TRIGGER_PRINT
        },
        sectionElements: [
          {section: this.contentContainer, element: this.mainSection},
          {section: this.bottomToolbar, element: this.viewTriggerBar}
        ]
      });

      return printView;
    }, // end of "addPrintView()"

    /**
     * @TODO: [addExportView description]
     *
     * @param  {[type]}  options  [description]
     */
    addExportView: function (options) {
      var self,
          TRIGGER_PRINT,
          exportView,
          source,
          interaction,
          features;

      self = this;

      TRIGGER_PRINT = 'EXPORTTOOLS_VIEW_TRIGGER_PRINT_' + options.type.toUpperCase();

      exportView = self.addView({
        name: 'draw:' + options.type.toLowerCase(),
        triggerConfig: {
          tipLabel: 'Exporttools',//c4g.maps.constant.i18n[TRIGGER_DRAW],
          className: 'c4g_exporttools_trigger',//c4g.maps.constant.css[TRIGGER_DRAW]
        },
        sectionElements: [
          {section: self.bottomToolbar, element: self.viewTriggerBar}
        ],
        initFunction: function () {

          // Show loading animation
          self.spinner.show();

          printFunction = function (event) {
            var printButton,
                featureGeometry,
                translateInteraction,
                modifyInteraction,
                modifyButton,
                applyButton;


            printButton = event.target;

            // add apply button
            applyButton = document.createElement('button');
            applyButton.className = c4g.maps.constant.css.ICON + ' ' + c4g.maps.constant.css.EDITOR_FEATURE_APPLY;
            applyButton.title = c4g.maps.constant.i18n.EDITOR_FEATURE_APPLY;
            applyButton.setAttribute('feat_id', i);

          }; // end of "modifyFeatureFunction()"

          features = new ol.Collection();

          self.spinner.hide();
          return true;
        },
        activateFunction: function () {
        },
        deactivateFunction: function () {
        }
      });

      return exportView;
    } // end of "addExportView()"

  });

}(jQuery, this.c4g));