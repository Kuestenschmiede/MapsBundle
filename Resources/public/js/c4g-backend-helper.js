/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
/**
 * @TODO: [showGeoEditor description]
 *
 * @param   {[type]}  href         [description]
 * @param   {[type]}  dataField    [description]
 * @param   {[type]}  opt_options  [description]
 *
 * @return  {[type]}               [description]
 */
var showGeoEditor = function(href, dataField, opt_options, layerId) {
  var options,
    minWidth,
    maxWidth,
    maxHeight,
    modalWindow;

  if (!href || !dataField) {
    return false;
  }

  // href += "&geoData=" + encodeURIComponent(btoa(dataField.value));
  href += "&layerId=" + layerId;

  // c4g.maps.backend.currentId = dataField;
  // c4g.maps.backend.ppGeoData = dataField.value;

  options = opt_options || {};

  options.url = href;

  minWidth = 360;
  maxWidth = (window.getSize().x - 50).toInt();
  if (!options.width || options.width > maxWidth || options.width < minWidth) {
    options.width = (maxWidth >= minWidth) ? maxWidth : minWidth;
  }
  maxHeight = (window.getSize().y - 160).toInt();
  if (!options.height || options.height > maxHeight) {
    options.height = maxHeight;
  }
  modalWindow = new SimpleModal({
    'width': options.width.toString(),
    'btn_ok': Contao.lang.close,
    'draggable': false,
    'overlayOpacity': 0.5,
    'onShow': function () {
      document.body.setStyle('overflow', 'hidden');
    },
    'onHide': function () {
      document.body.setStyle('overflow', 'auto');
    }
  });

  modalWindow.addButton(Contao.lang.close, 'btn', function () {
    this.hide();
  });
  modalWindow.addButton(Contao.lang.apply, 'btn primary', function () {

    dataField.value = document.getElementById('geo_editor_iframe').contentWindow.document.getElementById('c4gGeoEditorGeoData').value;
    this.hide();
    document.getElementById('tl_c4g_maps').submit();
  });
  modalWindow.show({
    'title': options.title || '',
    'contents': '<iframe src="' + options.url + '" width="100%" height="' + options.height + '" frameborder="0" id="geo_editor_iframe"></iframe>',
    'model': 'modal'
  });
};

window.showGeoEditor = showGeoEditor;