// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.backend = this.c4g.maps.backend || {};

(function (c4g) {
  'use strict';
  window.onload = function(){
    var sortData =document.getElementsByClassName("btn primary");
    for(var i = 0; i < sortData.length; i++){
      alert(sortData[i].innerHTML);
    }

  };


  /**
   * c4gmaps helper functions
   */
  c4g.maps.backend = {
    // @NOTE:  use c4g.maps.utils.getUniqueId()  ?

    /**
     * @TODO: [showGeoEditor description]
     *
     * @param   {[type]}  href         [description]
     * @param   {[type]}  dataField    [description]
     * @param   {[type]}  opt_options  [description]
     *
     * @return  {[type]}               [description]
     */
    showGeoEditor: function (href, dataField, opt_options) {
      var options,
          minWidth,
          maxWidth,
          maxHeight,
          modalWindow;

      if (!href || !dataField) {
        return false;
      }

      href += "&geoData=" + encodeURIComponent(btoa(dataField.value));

      c4g.maps.backend.currentId = dataField;
      c4g.maps.backend.ppGeoData = dataField.value;

      options = opt_options || {};

      options.url = href;

      minWidth = 768;
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
      });
      modalWindow.show({
        'title': options.title || '',
        'contents': '<iframe src="' + options.url + '" width="100%" height="' + options.height + '" frameborder="0" id="geo_editor_iframe"></iframe>',
        'model': 'modal'
      });
    },

    /**
     * @TODO: [showGeoPicker description]
     *
     * @param   {[type]}  href         [description]
     * @param   {[type]}  geoFieldX    [description]
     * @param   {[type]}  geoFieldY    [description]
     * @param   {[type]}  opt_options  [description]
     *
     * @return  {[type]}               [description]
     */
    showGeoPicker: function (href, geoFieldX, geoFieldY, opt_options) {
      var options,
          max,
          modalWindow;

      href += "&geoX=" + geoFieldX.value;
      href += "&geoY=" + geoFieldY.value;

      c4g.maps.backend.currentIdX = geoFieldX;
      c4g.maps.backend.ppGeoX = geoFieldX.value;

      c4g.maps.backend.currentIdY = geoFieldY;
      c4g.maps.backend.ppGeoY = geoFieldY.value;

      options = opt_options || {};

      options.url = href;
      options.width = '768';

      max = (window.getSize().y - 180).toInt();
      if (!options.height || options.height > max) {
        options.height = max;
      }
      modalWindow = new SimpleModal({
        'width': options.width,
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

        geoFieldX.value = document.getElementById('geo_picker_iframe').contentWindow.document.getElementById('c4gGeoPickerGeoX').value;
        geoFieldY.value = document.getElementById('geo_picker_iframe').contentWindow.document.getElementById('c4gGeoPickerGeoY').value;

        this.hide();
      });
      modalWindow.show({
        'title': options.title || '',
        'contents': '<iframe src="' + options.url + '" width="100%" height="' + options.height + '" frameborder="0" id="geo_picker_iframe"></iframe>',
        'model': 'modal'
      });
    }

  };

}(this.c4g));