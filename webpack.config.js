var Encore = require('@symfony/webpack-encore');

Encore
// directory where compiled assets will be stored
  .setOutputPath('Resources/public/build/')
  // public path used by the web server to access the output path
  .setPublicPath('/build')
  // only needed for CDN's or sub-directory deploy
  //.setManifestKeyPrefix('build/')

  /*
   * ENTRY CONFIG
   *
   * Add 1 entry for each "page" of your app
   * (including one that's included on every page - e.g. "app")
   *
   * Each entry will result in one JavaScript file (e.g. app.js)
   * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
   */
  // .addEntry('c4g-baselayer', './Resources/public/js/c4g-baselayer.js')
  // .addEntry('c4g-baselayer-controller', './Resources/public/js/c4g-baselayer-controller.js')
  // .addEntry('c4g-layer', './Resources/public/js/c4g-layer.js')
  // .addEntry('c4g-layer-controller', './Resources/public/js/c4g-layer-controller.js')
  // .addEntry('c4g-locationstyle', './Resources/public/js/c4g-locationstyle.js')
  // .addEntry('c4g-locationstyle-controller', './Resources/public/js/c4g-locationstyle-controller.js')
  .addEntry('c4g-maps', './Resources/public/js/c4g-maps.js')
  // .addEntry('c4g-maps-backend', './Resources/public/js/c4g-maps-backend.js')
  // .addEntry('c4g-maps-config', './Resources/public/js/c4g-maps-config.js')
  // .addEntry('c4g-maps-constant', './Resources/public/js/c4g-maps-constant.js')
  // .addEntry('c4g-maps-constant-i18n-de', './Resources/public/js/c4g-maps-constant-i18n-de.js')
  // .addEntry('c4g-maps-constant-i18n-en', './Resources/public/js/c4g-maps-constant-i18n-en.js')
  // .addEntry('c4g-maps-control-geosearch', './Resources/public/js/c4g-maps-control-geosearch.js')
  // .addEntry('c4g-maps-control-grid', './Resources/public/js/c4g-maps-control-grid.js')
  // .addEntry('c4g-maps-control-home', './Resources/public/js/c4g-maps-control-home.js')
  // .addEntry('c4g-maps-control-overviewmap', './Resources/public/js/c4g-maps-control-overviewmap.js')
  // .addEntry('c4g-maps-control-panel', './Resources/public/js/c4g-maps-control-panel.js')
  // .addEntry('c4g-maps-control-permalink', './Resources/public/js/c4g-maps-control-permalink.js')
  // .addEntry('c4g-maps-control-portside-account', './Resources/public/js/c4g-maps-control-portside-account.js')
  // .addEntry('c4g-maps-control-portside-editor', './Resources/public/js/c4g-maps-control-portside-editor.js')
  // .addEntry('c4g-maps-control-portside-infopage', './Resources/public/js/c4g-maps-control-portside-infopage.js')
  // .addEntry('c4g-maps-control-portside-measuretools', './Resources/public/js/c4g-maps-control-portside-measuretools.js')
  // .addEntry('c4g-maps-control-portside-router', './Resources/public/js/c4g-maps-control-portside-router.js')
  // .addEntry('c4g-maps-control-position', './Resources/public/js/c4g-maps-control-position.js')
  // .addEntry('c4g-maps-control-print', './Resources/public/js/c4g-maps-control-print.js')
  // .addEntry('c4g-maps-control-sideboard', './Resources/public/js/c4g-maps-control-sideboard.js')
  // .addEntry('c4g-maps-control-starboard', './Resources/public/js/c4g-maps-control-starboard.js')
  // .addEntry('c4g-maps-control-starboardplugin-baselayerswitcher', './Resources/public/js/c4g-maps-control-starboardplugin-baselayerswitcher.js')
  // .addEntry('c4g-maps-control-starboardplugin-customtab', './Resources/public/js/c4g-maps-control-starboardplugin-customtab.js')
  // .addEntry('c4g-maps-control-starboardplugin-layerswitcher', './Resources/public/js/c4g-maps-control-starboardplugin-layerswitcher.js')
  // .addEntry('c4g-maps-control-zoomlevel', './Resources/public/js/c4g-maps-control-zoomlevel.js')
  // .addEntry('c4g-maps-interaction-geopicker', './Resources/public/js/c4g-maps-interaction-geopicker.js')
  // .addEntry('c4g-maps-misc-maphover', './Resources/public/js/c4g-maps-misc-maphover.js')
  // .addEntry('c4g-maps-misc-panelbutton', './Resources/public/js/c4g-maps-misc-panelbutton.js')
  // .addEntry('c4g-maps-misc-spinner', './Resources/public/js/c4g-maps-misc-spinner.js')
  // .addEntry('c4g-maps-misc-tooltippopup', './Resources/public/js/c4g-maps-misc-tooltippopup.js')
  // .addEntry('c4g-maps-popup-info-de', './Resources/public/js/c4g-maps-popup-info-de.js')
  // .addEntry('c4g-maps-popup-info-en', './Resources/public/js/c4g-maps-popup-info-en.js')
  // .addEntry('c4g-maps-proxy', './Resources/public/js/c4g-maps-proxy.js')
  // .addEntry('c4g-maps-utils', './Resources/public/js/c4g-maps-utils.js')
  // .addEntry('c4g-overlay', './Resources/public/js/c4g-overlay.js')
  // .addEntry('c4g-overlay-controller', './Resources/public/js/c4g-overlay-controller.js')
  //.addEntry('page1', './assets/js/page1.js')
  //.addEntry('page2', './assets/js/page2.js')

  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())

// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// uncomment if you use Sass/SCSS files
//.enableSassLoader()

// uncomment if you're having problems with a jQuery plugin
//.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();