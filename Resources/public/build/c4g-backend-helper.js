/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************************!*\
  !*** ./Resources/public/js/c4g-backend-helper.js ***!
  \***************************************************/


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
var showGeoEditor = function showGeoEditor(href, dataField, opt_options, layerId) {
  var options, minWidth, maxWidth, maxHeight, modalWindow;

  if (!href || !dataField) {
    return false;
  } // href += "&geoData=" + encodeURIComponent(btoa(dataField.value));


  href += "&layerId=" + layerId; // c4g.maps.backend.currentId = dataField;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctYmFja2VuZC1oZWxwZXIuanMiXSwibmFtZXMiOlsic2hvd0dlb0VkaXRvciIsImhyZWYiLCJkYXRhRmllbGQiLCJvcHRfb3B0aW9ucyIsImxheWVySWQiLCJvcHRpb25zIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1vZGFsV2luZG93IiwidXJsIiwid2luZG93IiwiZ2V0U2l6ZSIsIngiLCJ0b0ludCIsIndpZHRoIiwieSIsImhlaWdodCIsIlNpbXBsZU1vZGFsIiwidG9TdHJpbmciLCJDb250YW8iLCJsYW5nIiwiY2xvc2UiLCJkb2N1bWVudCIsImJvZHkiLCJzZXRTdHlsZSIsImFkZEJ1dHRvbiIsImhpZGUiLCJhcHBseSIsInZhbHVlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50V2luZG93Iiwic3VibWl0Iiwic2hvdyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVNDLElBQVQsRUFBZUMsU0FBZixFQUEwQkMsV0FBMUIsRUFBdUNDLE9BQXZDLEVBQWdEO0FBQ2xFLE1BQUlDLE9BQUosRUFDRUMsUUFERixFQUVFQyxRQUZGLEVBR0VDLFNBSEYsRUFJRUMsV0FKRjs7QUFNQSxNQUFJLENBQUNSLElBQUQsSUFBUyxDQUFDQyxTQUFkLEVBQXlCO0FBQ3ZCLFdBQU8sS0FBUDtBQUNELEdBVGlFLENBV2xFOzs7QUFDQUQsTUFBSSxJQUFJLGNBQWNHLE9BQXRCLENBWmtFLENBY2xFO0FBQ0E7O0FBRUFDLFNBQU8sR0FBR0YsV0FBVyxJQUFJLEVBQXpCO0FBRUFFLFNBQU8sQ0FBQ0ssR0FBUixHQUFjVCxJQUFkO0FBRUFLLFVBQVEsR0FBRyxHQUFYO0FBQ0FDLFVBQVEsR0FBRyxDQUFDSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLENBQWpCLEdBQXFCLEVBQXRCLEVBQTBCQyxLQUExQixFQUFYOztBQUNBLE1BQUksQ0FBQ1QsT0FBTyxDQUFDVSxLQUFULElBQWtCVixPQUFPLENBQUNVLEtBQVIsR0FBZ0JSLFFBQWxDLElBQThDRixPQUFPLENBQUNVLEtBQVIsR0FBZ0JULFFBQWxFLEVBQTRFO0FBQzFFRCxXQUFPLENBQUNVLEtBQVIsR0FBaUJSLFFBQVEsSUFBSUQsUUFBYixHQUF5QkMsUUFBekIsR0FBb0NELFFBQXBEO0FBQ0Q7O0FBQ0RFLFdBQVMsR0FBRyxDQUFDRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJJLENBQWpCLEdBQXFCLEdBQXRCLEVBQTJCRixLQUEzQixFQUFaOztBQUNBLE1BQUksQ0FBQ1QsT0FBTyxDQUFDWSxNQUFULElBQW1CWixPQUFPLENBQUNZLE1BQVIsR0FBaUJULFNBQXhDLEVBQW1EO0FBQ2pESCxXQUFPLENBQUNZLE1BQVIsR0FBaUJULFNBQWpCO0FBQ0Q7O0FBQ0RDLGFBQVcsR0FBRyxJQUFJUyxXQUFKLENBQWdCO0FBQzVCLGFBQVNiLE9BQU8sQ0FBQ1UsS0FBUixDQUFjSSxRQUFkLEVBRG1CO0FBRTVCLGNBQVVDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxLQUZNO0FBRzVCLGlCQUFhLEtBSGU7QUFJNUIsc0JBQWtCLEdBSlU7QUFLNUIsY0FBVSxrQkFBWTtBQUNwQkMsY0FBUSxDQUFDQyxJQUFULENBQWNDLFFBQWQsQ0FBdUIsVUFBdkIsRUFBbUMsUUFBbkM7QUFDRCxLQVAyQjtBQVE1QixjQUFVLGtCQUFZO0FBQ3BCRixjQUFRLENBQUNDLElBQVQsQ0FBY0MsUUFBZCxDQUF1QixVQUF2QixFQUFtQyxNQUFuQztBQUNEO0FBVjJCLEdBQWhCLENBQWQ7QUFhQWhCLGFBQVcsQ0FBQ2lCLFNBQVosQ0FBc0JOLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxLQUFsQyxFQUF5QyxLQUF6QyxFQUFnRCxZQUFZO0FBQzFELFNBQUtLLElBQUw7QUFDRCxHQUZEO0FBR0FsQixhQUFXLENBQUNpQixTQUFaLENBQXNCTixNQUFNLENBQUNDLElBQVAsQ0FBWU8sS0FBbEMsRUFBeUMsYUFBekMsRUFBd0QsWUFBWTtBQUVsRTFCLGFBQVMsQ0FBQzJCLEtBQVYsR0FBa0JOLFFBQVEsQ0FBQ08sY0FBVCxDQUF3QixtQkFBeEIsRUFBNkNDLGFBQTdDLENBQTJEUixRQUEzRCxDQUFvRU8sY0FBcEUsQ0FBbUYscUJBQW5GLEVBQTBHRCxLQUE1SDtBQUNBLFNBQUtGLElBQUw7QUFDQUosWUFBUSxDQUFDTyxjQUFULENBQXdCLGFBQXhCLEVBQXVDRSxNQUF2QztBQUNELEdBTEQ7QUFNQXZCLGFBQVcsQ0FBQ3dCLElBQVosQ0FBaUI7QUFDZixhQUFTNUIsT0FBTyxDQUFDNkIsS0FBUixJQUFpQixFQURYO0FBRWYsZ0JBQVksa0JBQWtCN0IsT0FBTyxDQUFDSyxHQUExQixHQUFnQyx5QkFBaEMsR0FBNERMLE9BQU8sQ0FBQ1ksTUFBcEUsR0FBNkUsb0RBRjFFO0FBR2YsYUFBUztBQUhNLEdBQWpCO0FBS0QsQ0F6REQ7O0FBMkRBTixNQUFNLENBQUNYLGFBQVAsR0FBdUJBLGFBQXZCLEMiLCJmaWxlIjoiYzRnLWJhY2tlbmQtaGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4vKipcbiAqIEBUT0RPOiBbc2hvd0dlb0VkaXRvciBkZXNjcmlwdGlvbl1cbiAqXG4gKiBAcGFyYW0gICB7W3R5cGVdfSAgaHJlZiAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAgIHtbdHlwZV19ICBkYXRhRmllbGQgICAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICAge1t0eXBlXX0gIG9wdF9vcHRpb25zICBbZGVzY3JpcHRpb25dXG4gKlxuICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbnZhciBzaG93R2VvRWRpdG9yID0gZnVuY3Rpb24oaHJlZiwgZGF0YUZpZWxkLCBvcHRfb3B0aW9ucywgbGF5ZXJJZCkge1xuICB2YXIgb3B0aW9ucyxcbiAgICBtaW5XaWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICBtYXhIZWlnaHQsXG4gICAgbW9kYWxXaW5kb3c7XG5cbiAgaWYgKCFocmVmIHx8ICFkYXRhRmllbGQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBocmVmICs9IFwiJmdlb0RhdGE9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoYnRvYShkYXRhRmllbGQudmFsdWUpKTtcbiAgaHJlZiArPSBcIiZsYXllcklkPVwiICsgbGF5ZXJJZDtcblxuICAvLyBjNGcubWFwcy5iYWNrZW5kLmN1cnJlbnRJZCA9IGRhdGFGaWVsZDtcbiAgLy8gYzRnLm1hcHMuYmFja2VuZC5wcEdlb0RhdGEgPSBkYXRhRmllbGQudmFsdWU7XG5cbiAgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG4gIG9wdGlvbnMudXJsID0gaHJlZjtcblxuICBtaW5XaWR0aCA9IDM2MDtcbiAgbWF4V2lkdGggPSAod2luZG93LmdldFNpemUoKS54IC0gNTApLnRvSW50KCk7XG4gIGlmICghb3B0aW9ucy53aWR0aCB8fCBvcHRpb25zLndpZHRoID4gbWF4V2lkdGggfHwgb3B0aW9ucy53aWR0aCA8IG1pbldpZHRoKSB7XG4gICAgb3B0aW9ucy53aWR0aCA9IChtYXhXaWR0aCA+PSBtaW5XaWR0aCkgPyBtYXhXaWR0aCA6IG1pbldpZHRoO1xuICB9XG4gIG1heEhlaWdodCA9ICh3aW5kb3cuZ2V0U2l6ZSgpLnkgLSAxNjApLnRvSW50KCk7XG4gIGlmICghb3B0aW9ucy5oZWlnaHQgfHwgb3B0aW9ucy5oZWlnaHQgPiBtYXhIZWlnaHQpIHtcbiAgICBvcHRpb25zLmhlaWdodCA9IG1heEhlaWdodDtcbiAgfVxuICBtb2RhbFdpbmRvdyA9IG5ldyBTaW1wbGVNb2RhbCh7XG4gICAgJ3dpZHRoJzogb3B0aW9ucy53aWR0aC50b1N0cmluZygpLFxuICAgICdidG5fb2snOiBDb250YW8ubGFuZy5jbG9zZSxcbiAgICAnZHJhZ2dhYmxlJzogZmFsc2UsXG4gICAgJ292ZXJsYXlPcGFjaXR5JzogMC41LFxuICAgICdvblNob3cnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnNldFN0eWxlKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICB9LFxuICAgICdvbkhpZGUnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnNldFN0eWxlKCdvdmVyZmxvdycsICdhdXRvJyk7XG4gICAgfVxuICB9KTtcblxuICBtb2RhbFdpbmRvdy5hZGRCdXR0b24oQ29udGFvLmxhbmcuY2xvc2UsICdidG4nLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH0pO1xuICBtb2RhbFdpbmRvdy5hZGRCdXR0b24oQ29udGFvLmxhbmcuYXBwbHksICdidG4gcHJpbWFyeScsIGZ1bmN0aW9uICgpIHtcblxuICAgIGRhdGFGaWVsZC52YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW9fZWRpdG9yX2lmcmFtZScpLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2M0Z0dlb0VkaXRvckdlb0RhdGEnKS52YWx1ZTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGxfYzRnX21hcHMnKS5zdWJtaXQoKTtcbiAgfSk7XG4gIG1vZGFsV2luZG93LnNob3coe1xuICAgICd0aXRsZSc6IG9wdGlvbnMudGl0bGUgfHwgJycsXG4gICAgJ2NvbnRlbnRzJzogJzxpZnJhbWUgc3JjPVwiJyArIG9wdGlvbnMudXJsICsgJ1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIicgKyBvcHRpb25zLmhlaWdodCArICdcIiBmcmFtZWJvcmRlcj1cIjBcIiBpZD1cImdlb19lZGl0b3JfaWZyYW1lXCI+PC9pZnJhbWU+JyxcbiAgICAnbW9kZWwnOiAnbW9kYWwnXG4gIH0pO1xufTtcblxud2luZG93LnNob3dHZW9FZGl0b3IgPSBzaG93R2VvRWRpdG9yOyJdLCJzb3VyY2VSb290IjoiIn0=