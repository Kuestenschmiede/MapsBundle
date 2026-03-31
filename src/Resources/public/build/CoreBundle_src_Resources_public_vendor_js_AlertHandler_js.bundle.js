"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["CoreBundle_src_Resources_public_vendor_js_AlertHandler_js"],{

/***/ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js"
/*!********************************************************************!*\
  !*** ../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertHandler: () => (/* binding */ AlertHandler)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */



/**
 * The "cssClass" parameter in the functions can either be a string or an object. If it's a string, it will be applied
 * as class for the popup. If an object is passed, the classes can be set more precise. The following properties are
 * possible in the object:
 * cssClass: {
 *   container: 'container-class',
 *   popup: 'popup-class',
 *   header: 'header-class',
 *   title: 'title-class',
 *   closeButton: 'close-button-class',
 *   icon: 'icon-class',
 *   image: 'image-class',
 *   content: 'content-class',
 *   input: 'input-class',
 *   actions: 'actions-class',
 *   confirmButton: 'confirm-button-class',
 *   cancelButton: 'cancel-button-class',
 *   footer: 'footer-class'
 * }
 */
class AlertHandler {

  showErrorDialog(title, content, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: content,
      icon: "error",
      customClass: cssClass ? cssClass : ''
    });
  }

  showInfoDialog(title, content, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: content,
      icon: "info",
      customClass: cssClass ? cssClass : ''
    });;
  }

  showInfoActionDialog(title, content, confirmCallback, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: content,
      icon: "info",
      customClass: cssClass ? cssClass : ''
    }).then (
        function () {
          confirmCallback();
        }
    );
  }

  showInfoActionDialog2(title, content, confirmCallback, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: content,
      icon: "info",
      showLoaderOnConfirm: true,
      customClass: cssClass ? cssClass : '',
      preConfirm: (data) => {
        confirmCallback();
      }});
  }


  showConfirmDialog(title, text, confirmCallback, cancelCallback, confirmText, cancelText, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: confirmText ? confirmText : "Confirm",
      cancelButtonText: cancelText ? cancelText : "Cancel",
      customClass: cssClass ? cssClass : ''
    }).then((willDelete) => {
      if (willDelete.value) {
        confirmCallback();
      } else {
        cancelCallback();
      }
    });
  }
  showConfirmDialogHTML(title, html, confirmCallback, cancelCallback, confirmText, cancelText, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      html: html,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: confirmText ? confirmText : "Confirm",
      cancelButtonText: cancelText ? cancelText : "Cancel",
      customClass: cssClass ? cssClass : ''
    }).then((willDelete) => {
      if (willDelete.value) {
        confirmCallback();
      } else {
        cancelCallback();
      }
    });
  }

  showPreConfirmDialog(title, text, preConfirmCallback, confirmText, cancelText, cssClass, showLoading) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: confirmText ? confirmText : "Confirm",
      cancelButtonText: cancelText ? cancelText : "Cancel",
      showLoaderOnConfirm: showLoading ? showLoading : true,
      preConfirm: function () {
        return new Promise (function (data) {
          preConfirmCallback();
        })
      },
      allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().isLoading(),
      customClass: cssClass ? cssClass : ''
    });
  }

  showLoadingDialog(title, text, preConfirmCallback, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: text,
      showCancelButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      showLoaderOnConfirm: true,
      onBeforeOpen: () => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().clickConfirm();
      },
      customClass: cssClass ? cssClass : '',
      preConfirm: () => {
        return new Promise (function (data) {
          preConfirmCallback();
        })
      }
    });
  }

  async showSelectDialog(title, objOptions, confirmText, cancelText, cssClass) {
    const {value: selectedValue} = await sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      input: 'select',
      inputOptions: objOptions,
      inputPlaceholder: '-',
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      customClass: cssClass ? cssClass : ''
    })
    return selectedValue;
  }
}


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZUJ1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY192ZW5kb3JfanNfQWxlcnRIYW5kbGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7OztBQUdBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsZ0NBQWdDLDREQUFjO0FBQzlDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBaUI7QUFDekIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0IsUUFBUSx1REFBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi4vQ29yZUJ1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy92ZW5kb3IvanMvQWxlcnRIYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjYsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuLyoqXG4gKiBUaGUgXCJjc3NDbGFzc1wiIHBhcmFtZXRlciBpbiB0aGUgZnVuY3Rpb25zIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LiBJZiBpdCdzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGFwcGxpZWRcbiAqIGFzIGNsYXNzIGZvciB0aGUgcG9wdXAuIElmIGFuIG9iamVjdCBpcyBwYXNzZWQsIHRoZSBjbGFzc2VzIGNhbiBiZSBzZXQgbW9yZSBwcmVjaXNlLiBUaGUgZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlXG4gKiBwb3NzaWJsZSBpbiB0aGUgb2JqZWN0OlxuICogY3NzQ2xhc3M6IHtcbiAqICAgY29udGFpbmVyOiAnY29udGFpbmVyLWNsYXNzJyxcbiAqICAgcG9wdXA6ICdwb3B1cC1jbGFzcycsXG4gKiAgIGhlYWRlcjogJ2hlYWRlci1jbGFzcycsXG4gKiAgIHRpdGxlOiAndGl0bGUtY2xhc3MnLFxuICogICBjbG9zZUJ1dHRvbjogJ2Nsb3NlLWJ1dHRvbi1jbGFzcycsXG4gKiAgIGljb246ICdpY29uLWNsYXNzJyxcbiAqICAgaW1hZ2U6ICdpbWFnZS1jbGFzcycsXG4gKiAgIGNvbnRlbnQ6ICdjb250ZW50LWNsYXNzJyxcbiAqICAgaW5wdXQ6ICdpbnB1dC1jbGFzcycsXG4gKiAgIGFjdGlvbnM6ICdhY3Rpb25zLWNsYXNzJyxcbiAqICAgY29uZmlybUJ1dHRvbjogJ2NvbmZpcm0tYnV0dG9uLWNsYXNzJyxcbiAqICAgY2FuY2VsQnV0dG9uOiAnY2FuY2VsLWJ1dHRvbi1jbGFzcycsXG4gKiAgIGZvb3RlcjogJ2Zvb3Rlci1jbGFzcydcbiAqIH1cbiAqL1xuZXhwb3J0IGNsYXNzIEFsZXJ0SGFuZGxlciB7XG5cbiAgc2hvd0Vycm9yRGlhbG9nKHRpdGxlLCBjb250ZW50LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0luZm9EaWFsb2codGl0bGUsIGNvbnRlbnQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICBpY29uOiBcImluZm9cIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KTs7XG4gIH1cblxuICBzaG93SW5mb0FjdGlvbkRpYWxvZyh0aXRsZSwgY29udGVudCwgY29uZmlybUNhbGxiYWNrLCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgaWNvbjogXCJpbmZvXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSkudGhlbiAoXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzaG93SW5mb0FjdGlvbkRpYWxvZzIodGl0bGUsIGNvbnRlbnQsIGNvbmZpcm1DYWxsYmFjaywgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIGljb246IFwiaW5mb1wiLFxuICAgICAgc2hvd0xvYWRlck9uQ29uZmlybTogdHJ1ZSxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJycsXG4gICAgICBwcmVDb25maXJtOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgIH19KTtcbiAgfVxuXG5cbiAgc2hvd0NvbmZpcm1EaWFsb2codGl0bGUsIHRleHQsIGNvbmZpcm1DYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2ssIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0ID8gY29uZmlybVRleHQgOiBcIkNvbmZpcm1cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQgPyBjYW5jZWxUZXh0IDogXCJDYW5jZWxcIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KS50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICBpZiAod2lsbERlbGV0ZS52YWx1ZSkge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgc2hvd0NvbmZpcm1EaWFsb2dIVE1MKHRpdGxlLCBodG1sLCBjb25maXJtQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaHRtbDogaHRtbCxcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSkudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuICAgICAgaWYgKHdpbGxEZWxldGUudmFsdWUpIHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWxDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd1ByZUNvbmZpcm1EaWFsb2codGl0bGUsIHRleHQsIHByZUNvbmZpcm1DYWxsYmFjaywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzLCBzaG93TG9hZGluZykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0ID8gY29uZmlybVRleHQgOiBcIkNvbmZpcm1cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQgPyBjYW5jZWxUZXh0IDogXCJDYW5jZWxcIixcbiAgICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IHNob3dMb2FkaW5nID8gc2hvd0xvYWRpbmcgOiB0cnVlLFxuICAgICAgcHJlQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgcHJlQ29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6ICgpID0+ICFTd2FsLmlzTG9hZGluZygpLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0xvYWRpbmdEaWFsb2codGl0bGUsIHRleHQsIHByZUNvbmZpcm1DYWxsYmFjaywgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICAgICAgYWxsb3dFc2NhcGVLZXk6IGZhbHNlLFxuICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuICAgICAgc2hvd0xvYWRlck9uQ29uZmlybTogdHJ1ZSxcbiAgICAgIG9uQmVmb3JlT3BlbjogKCkgPT4ge1xuICAgICAgICBTd2FsLmNsaWNrQ29uZmlybSgpO1xuICAgICAgfSxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJycsXG4gICAgICBwcmVDb25maXJtOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBwcmVDb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHNob3dTZWxlY3REaWFsb2codGl0bGUsIG9iak9wdGlvbnMsIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcykge1xuICAgIGNvbnN0IHt2YWx1ZTogc2VsZWN0ZWRWYWx1ZX0gPSBhd2FpdCBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaW5wdXQ6ICdzZWxlY3QnLFxuICAgICAgaW5wdXRPcHRpb25zOiBvYmpPcHRpb25zLFxuICAgICAgaW5wdXRQbGFjZWhvbGRlcjogJy0nLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSlcbiAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==