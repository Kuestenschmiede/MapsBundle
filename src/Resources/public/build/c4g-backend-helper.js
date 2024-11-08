/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*******************************************************!*\
  !*** ./src/Resources/public/js/c4g-backend-helper.js ***!
  \*******************************************************/


/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
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
var showGeoEditor = function showGeoEditor(href, dataField, opt_options, layerId) {
  var options, minWidth, maxWidth, maxHeight, modalWindow;
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
    options.width = maxWidth >= minWidth ? maxWidth : minWidth;
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
    'onShow': function onShow() {
      document.body.setStyle('overflow', 'hidden');
    },
    'onHide': function onHide() {
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7RUFDRnpCLFdBQVcsQ0FBQzBCLElBQUksQ0FBQztJQUNmLE9BQU8sRUFBRTlCLE9BQU8sQ0FBQytCLEtBQUssSUFBSSxFQUFFO0lBQzVCLFVBQVUsRUFBRSxlQUFlLEdBQUcvQixPQUFPLENBQUNLLEdBQUcsR0FBRyx5QkFBeUIsR0FBR0wsT0FBTyxDQUFDWSxNQUFNLEdBQUcsb0RBQW9EO0lBQzdJLE9BQU8sRUFBRTtFQUNYLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRE4sTUFBTSxDQUFDWCxhQUFhLEdBQUdBLGFBQWEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctYmFja2VuZC1oZWxwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4vKipcbiAqIEBUT0RPOiBbc2hvd0dlb0VkaXRvciBkZXNjcmlwdGlvbl1cbiAqXG4gKiBAcGFyYW0gICB7W3R5cGVdfSAgaHJlZiAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAgIHtbdHlwZV19ICBkYXRhRmllbGQgICAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICAge1t0eXBlXX0gIG9wdF9vcHRpb25zICBbZGVzY3JpcHRpb25dXG4gKlxuICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbnZhciBzaG93R2VvRWRpdG9yID0gZnVuY3Rpb24oaHJlZiwgZGF0YUZpZWxkLCBvcHRfb3B0aW9ucywgbGF5ZXJJZCkge1xuICB2YXIgb3B0aW9ucyxcbiAgICBtaW5XaWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICBtYXhIZWlnaHQsXG4gICAgbW9kYWxXaW5kb3c7XG5cbiAgaWYgKCFocmVmIHx8ICFkYXRhRmllbGQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBocmVmICs9IFwiJmdlb0RhdGE9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoYnRvYShkYXRhRmllbGQudmFsdWUpKTtcbiAgaHJlZiArPSBcIiZsYXllcklkPVwiICsgbGF5ZXJJZDtcblxuICAvLyBjNGcubWFwcy5iYWNrZW5kLmN1cnJlbnRJZCA9IGRhdGFGaWVsZDtcbiAgLy8gYzRnLm1hcHMuYmFja2VuZC5wcEdlb0RhdGEgPSBkYXRhRmllbGQudmFsdWU7XG5cbiAgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG4gIG9wdGlvbnMudXJsID0gaHJlZjtcblxuICBtaW5XaWR0aCA9IDM2MDtcbiAgbWF4V2lkdGggPSAod2luZG93LmdldFNpemUoKS54IC0gNTApLnRvSW50KCk7XG4gIGlmICghb3B0aW9ucy53aWR0aCB8fCBvcHRpb25zLndpZHRoID4gbWF4V2lkdGggfHwgb3B0aW9ucy53aWR0aCA8IG1pbldpZHRoKSB7XG4gICAgb3B0aW9ucy53aWR0aCA9IChtYXhXaWR0aCA+PSBtaW5XaWR0aCkgPyBtYXhXaWR0aCA6IG1pbldpZHRoO1xuICB9XG4gIG1heEhlaWdodCA9ICh3aW5kb3cuZ2V0U2l6ZSgpLnkgLSAxNjApLnRvSW50KCk7XG4gIGlmICghb3B0aW9ucy5oZWlnaHQgfHwgb3B0aW9ucy5oZWlnaHQgPiBtYXhIZWlnaHQpIHtcbiAgICBvcHRpb25zLmhlaWdodCA9IG1heEhlaWdodDtcbiAgfVxuICBtb2RhbFdpbmRvdyA9IG5ldyBTaW1wbGVNb2RhbCh7XG4gICAgJ3dpZHRoJzogb3B0aW9ucy53aWR0aC50b1N0cmluZygpLFxuICAgICdidG5fb2snOiBDb250YW8ubGFuZy5jbG9zZSxcbiAgICAnZHJhZ2dhYmxlJzogZmFsc2UsXG4gICAgJ292ZXJsYXlPcGFjaXR5JzogMC41LFxuICAgICdvblNob3cnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnNldFN0eWxlKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICB9LFxuICAgICdvbkhpZGUnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnNldFN0eWxlKCdvdmVyZmxvdycsICdhdXRvJyk7XG4gICAgfVxuICB9KTtcblxuICBtb2RhbFdpbmRvdy5hZGRCdXR0b24oQ29udGFvLmxhbmcuY2xvc2UsICdidG4nLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH0pO1xuICBtb2RhbFdpbmRvdy5hZGRCdXR0b24oQ29udGFvLmxhbmcuYXBwbHksICdidG4gcHJpbWFyeScsIGZ1bmN0aW9uICgpIHtcblxuICAgIGRhdGFGaWVsZC52YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW9fZWRpdG9yX2lmcmFtZScpLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2M0Z0dlb0VkaXRvckdlb0RhdGEnKS52YWx1ZTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGxfYzRnX21hcHMnKS5zdWJtaXQoKTtcbiAgfSk7XG4gIG1vZGFsV2luZG93LnNob3coe1xuICAgICd0aXRsZSc6IG9wdGlvbnMudGl0bGUgfHwgJycsXG4gICAgJ2NvbnRlbnRzJzogJzxpZnJhbWUgc3JjPVwiJyArIG9wdGlvbnMudXJsICsgJ1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIicgKyBvcHRpb25zLmhlaWdodCArICdcIiBmcmFtZWJvcmRlcj1cIjBcIiBpZD1cImdlb19lZGl0b3JfaWZyYW1lXCI+PC9pZnJhbWU+JyxcbiAgICAnbW9kZWwnOiAnbW9kYWwnXG4gIH0pO1xufTtcblxud2luZG93LnNob3dHZW9FZGl0b3IgPSBzaG93R2VvRWRpdG9yOyJdLCJuYW1lcyI6WyJzaG93R2VvRWRpdG9yIiwiaHJlZiIsImRhdGFGaWVsZCIsIm9wdF9vcHRpb25zIiwibGF5ZXJJZCIsIm9wdGlvbnMiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwibW9kYWxXaW5kb3ciLCJ1cmwiLCJ3aW5kb3ciLCJnZXRTaXplIiwieCIsInRvSW50Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiU2ltcGxlTW9kYWwiLCJ0b1N0cmluZyIsIkNvbnRhbyIsImxhbmciLCJjbG9zZSIsIm9uU2hvdyIsImRvY3VtZW50IiwiYm9keSIsInNldFN0eWxlIiwib25IaWRlIiwiYWRkQnV0dG9uIiwiaGlkZSIsImFwcGx5IiwidmFsdWUiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnRXaW5kb3ciLCJzdWJtaXQiLCJzaG93IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9