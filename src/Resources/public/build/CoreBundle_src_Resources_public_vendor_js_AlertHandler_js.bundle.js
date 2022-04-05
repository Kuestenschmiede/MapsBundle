"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["CoreBundle_src_Resources_public_vendor_js_AlertHandler_js"],{

/***/ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js":
/*!********************************************************************!*\
  !*** ../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertHandler": () => (/* binding */ AlertHandler)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * con4gis - the gis-kit
 *
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
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
      type: "error",
      customClass: cssClass ? cssClass : ''
    });
  }

  showInfoDialog(title, content, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: content,
      type: "info",
      customClass: cssClass ? cssClass : ''
    });;
  }

  showInfoActionDialog(title, content, confirmCallback, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: content,
      type: "info",
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
      type: "info",
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
      showCancelButton: true,
      confirmButtonText: confirmText ? confirmText : "Confirm",
      cancelButtonText: cancelText ? cancelText : "Cancel",
      showLoaderOnConfirm: showLoading ? showLoading : true,
      preConfirm: function () {
        return new Promise (function (data) {
          preConfirmCallback();
        })
      },
      allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().isLoading(), e,
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZUJ1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY192ZW5kb3JfanNfQWxlcnRIYW5kbGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7OztBQUdBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLGdDQUFnQyw0REFBYztBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBaUI7QUFDekIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0IsUUFBUSx1REFBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi4vQ29yZUJ1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy92ZW5kb3IvanMvQWxlcnRIYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG4vKipcbiAqIGNvbjRnaXMgLSB0aGUgZ2lzLWtpdFxuICpcbiAqIEBwYWNrYWdlICAgY29uNGdpc1xuICogQGF1dGhvciAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgR05VL0xHUEwgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL2xncGwtMy4wLmh0bWxcbiAqIEBjb3B5cmlnaHQgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ24gMjAxMSAtIDIwMThcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly93d3cua3Vlc3RlbnNjaG1pZWRlLmRlXG4gKi9cblxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vKipcbiAqIFRoZSBcImNzc0NsYXNzXCIgcGFyYW1ldGVyIGluIHRoZSBmdW5jdGlvbnMgY2FuIGVpdGhlciBiZSBhIHN0cmluZyBvciBhbiBvYmplY3QuIElmIGl0J3MgYSBzdHJpbmcsIGl0IHdpbGwgYmUgYXBwbGllZFxuICogYXMgY2xhc3MgZm9yIHRoZSBwb3B1cC4gSWYgYW4gb2JqZWN0IGlzIHBhc3NlZCwgdGhlIGNsYXNzZXMgY2FuIGJlIHNldCBtb3JlIHByZWNpc2UuIFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmVcbiAqIHBvc3NpYmxlIGluIHRoZSBvYmplY3Q6XG4gKiBjc3NDbGFzczoge1xuICogICBjb250YWluZXI6ICdjb250YWluZXItY2xhc3MnLFxuICogICBwb3B1cDogJ3BvcHVwLWNsYXNzJyxcbiAqICAgaGVhZGVyOiAnaGVhZGVyLWNsYXNzJyxcbiAqICAgdGl0bGU6ICd0aXRsZS1jbGFzcycsXG4gKiAgIGNsb3NlQnV0dG9uOiAnY2xvc2UtYnV0dG9uLWNsYXNzJyxcbiAqICAgaWNvbjogJ2ljb24tY2xhc3MnLFxuICogICBpbWFnZTogJ2ltYWdlLWNsYXNzJyxcbiAqICAgY29udGVudDogJ2NvbnRlbnQtY2xhc3MnLFxuICogICBpbnB1dDogJ2lucHV0LWNsYXNzJyxcbiAqICAgYWN0aW9uczogJ2FjdGlvbnMtY2xhc3MnLFxuICogICBjb25maXJtQnV0dG9uOiAnY29uZmlybS1idXR0b24tY2xhc3MnLFxuICogICBjYW5jZWxCdXR0b246ICdjYW5jZWwtYnV0dG9uLWNsYXNzJyxcbiAqICAgZm9vdGVyOiAnZm9vdGVyLWNsYXNzJ1xuICogfVxuICovXG5leHBvcnQgY2xhc3MgQWxlcnRIYW5kbGVyIHtcblxuICBzaG93RXJyb3JEaWFsb2codGl0bGUsIGNvbnRlbnQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7XG4gIH1cblxuICBzaG93SW5mb0RpYWxvZyh0aXRsZSwgY29udGVudCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pOztcbiAgfVxuXG4gIHNob3dJbmZvQWN0aW9uRGlhbG9nKHRpdGxlLCBjb250ZW50LCBjb25maXJtQ2FsbGJhY2ssIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KS50aGVuIChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHNob3dJbmZvQWN0aW9uRGlhbG9nMih0aXRsZSwgY29udGVudCwgY29uZmlybUNhbGxiYWNrLCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiB0cnVlLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJyxcbiAgICAgIHByZUNvbmZpcm06IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfX0pO1xuICB9XG5cblxuICBzaG93Q29uZmlybURpYWxvZyh0aXRsZSwgdGV4dCwgY29uZmlybUNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQgPyBjb25maXJtVGV4dCA6IFwiQ29uZmlybVwiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCA/IGNhbmNlbFRleHQgOiBcIkNhbmNlbFwiLFxuICAgICAgZGFuZ2VyTW9kZTogdHJ1ZSxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KS50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICBpZiAod2lsbERlbGV0ZS52YWx1ZSkge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgc2hvd0NvbmZpcm1EaWFsb2dIVE1MKHRpdGxlLCBodG1sLCBjb25maXJtQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaHRtbDogaHRtbCxcbiAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBkYW5nZXJNb2RlOiB0cnVlLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcbiAgICAgIGlmICh3aWxsRGVsZXRlLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3dQcmVDb25maXJtRGlhbG9nKHRpdGxlLCB0ZXh0LCBwcmVDb25maXJtQ2FsbGJhY2ssIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcywgc2hvd0xvYWRpbmcpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiBzaG93TG9hZGluZyA/IHNob3dMb2FkaW5nIDogdHJ1ZSxcbiAgICAgIHByZUNvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHByZUNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiAoKSA9PiAhU3dhbC5pc0xvYWRpbmcoKSxcbiAgICAgIGRhbmdlck1vZGU6IHRydWUsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7XG4gIH1cblxuICBzaG93TG9hZGluZ0RpYWxvZyh0aXRsZSwgdGV4dCwgcHJlQ29uZmlybUNhbGxiYWNrLCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gICAgICBhbGxvd0VzY2FwZUtleTogZmFsc2UsXG4gICAgICBhbGxvd091dHNpZGVDbGljazogZmFsc2UsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiB0cnVlLFxuICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XG4gICAgICAgIFN3YWwuY2xpY2tDb25maXJtKCk7XG4gICAgICB9LFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJyxcbiAgICAgIHByZUNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHByZUNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc2hvd1NlbGVjdERpYWxvZyh0aXRsZSwgb2JqT3B0aW9ucywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzKSB7XG4gICAgY29uc3Qge3ZhbHVlOiBzZWxlY3RlZFZhbHVlfSA9IGF3YWl0IFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpbnB1dDogJ3NlbGVjdCcsXG4gICAgICBpbnB1dE9wdGlvbnM6IG9iak9wdGlvbnMsXG4gICAgICBpbnB1dFBsYWNlaG9sZGVyOiAnLScsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0LFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KVxuICAgIHJldHVybiBzZWxlY3RlZFZhbHVlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=