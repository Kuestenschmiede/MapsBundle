"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["CoreBundle_src_Resources_public_vendor_js_AlertHandler_js"],{

/***/ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js":
/*!********************************************************************!*\
  !*** ../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertHandler: () => (/* binding */ AlertHandler)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZUJ1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY192ZW5kb3JfanNfQWxlcnRIYW5kbGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7O0FBR0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxnQ0FBZ0MsNERBQWM7QUFDOUM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFpQjtBQUN6QixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQixRQUFRLHVEQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uLi9Db3JlQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL3ZlbmRvci9qcy9BbGVydEhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI1LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbi8qKlxuICogVGhlIFwiY3NzQ2xhc3NcIiBwYXJhbWV0ZXIgaW4gdGhlIGZ1bmN0aW9ucyBjYW4gZWl0aGVyIGJlIGEgc3RyaW5nIG9yIGFuIG9iamVjdC4gSWYgaXQncyBhIHN0cmluZywgaXQgd2lsbCBiZSBhcHBsaWVkXG4gKiBhcyBjbGFzcyBmb3IgdGhlIHBvcHVwLiBJZiBhbiBvYmplY3QgaXMgcGFzc2VkLCB0aGUgY2xhc3NlcyBjYW4gYmUgc2V0IG1vcmUgcHJlY2lzZS4gVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZVxuICogcG9zc2libGUgaW4gdGhlIG9iamVjdDpcbiAqIGNzc0NsYXNzOiB7XG4gKiAgIGNvbnRhaW5lcjogJ2NvbnRhaW5lci1jbGFzcycsXG4gKiAgIHBvcHVwOiAncG9wdXAtY2xhc3MnLFxuICogICBoZWFkZXI6ICdoZWFkZXItY2xhc3MnLFxuICogICB0aXRsZTogJ3RpdGxlLWNsYXNzJyxcbiAqICAgY2xvc2VCdXR0b246ICdjbG9zZS1idXR0b24tY2xhc3MnLFxuICogICBpY29uOiAnaWNvbi1jbGFzcycsXG4gKiAgIGltYWdlOiAnaW1hZ2UtY2xhc3MnLFxuICogICBjb250ZW50OiAnY29udGVudC1jbGFzcycsXG4gKiAgIGlucHV0OiAnaW5wdXQtY2xhc3MnLFxuICogICBhY3Rpb25zOiAnYWN0aW9ucy1jbGFzcycsXG4gKiAgIGNvbmZpcm1CdXR0b246ICdjb25maXJtLWJ1dHRvbi1jbGFzcycsXG4gKiAgIGNhbmNlbEJ1dHRvbjogJ2NhbmNlbC1idXR0b24tY2xhc3MnLFxuICogICBmb290ZXI6ICdmb290ZXItY2xhc3MnXG4gKiB9XG4gKi9cbmV4cG9ydCBjbGFzcyBBbGVydEhhbmRsZXIge1xuXG4gIHNob3dFcnJvckRpYWxvZyh0aXRsZSwgY29udGVudCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dJbmZvRGlhbG9nKHRpdGxlLCBjb250ZW50LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgaWNvbjogXCJpbmZvXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7O1xuICB9XG5cbiAgc2hvd0luZm9BY3Rpb25EaWFsb2codGl0bGUsIGNvbnRlbnQsIGNvbmZpcm1DYWxsYmFjaywgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIGljb246IFwiaW5mb1wiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pLnRoZW4gKFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc2hvd0luZm9BY3Rpb25EaWFsb2cyKHRpdGxlLCBjb250ZW50LCBjb25maXJtQ2FsbGJhY2ssIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICBpY29uOiBcImluZm9cIixcbiAgICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IHRydWUsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnLFxuICAgICAgcHJlQ29uZmlybTogKGRhdGEpID0+IHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICB9fSk7XG4gIH1cblxuXG4gIHNob3dDb25maXJtRGlhbG9nKHRpdGxlLCB0ZXh0LCBjb25maXJtQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSkudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuICAgICAgaWYgKHdpbGxEZWxldGUudmFsdWUpIHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWxDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHNob3dDb25maXJtRGlhbG9nSFRNTCh0aXRsZSwgaHRtbCwgY29uZmlybUNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGh0bWw6IGh0bWwsXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQgPyBjb25maXJtVGV4dCA6IFwiQ29uZmlybVwiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCA/IGNhbmNlbFRleHQgOiBcIkNhbmNlbFwiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcbiAgICAgIGlmICh3aWxsRGVsZXRlLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3dQcmVDb25maXJtRGlhbG9nKHRpdGxlLCB0ZXh0LCBwcmVDb25maXJtQ2FsbGJhY2ssIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcywgc2hvd0xvYWRpbmcpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiBzaG93TG9hZGluZyA/IHNob3dMb2FkaW5nIDogdHJ1ZSxcbiAgICAgIHByZUNvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHByZUNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiAoKSA9PiAhU3dhbC5pc0xvYWRpbmcoKSxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dMb2FkaW5nRGlhbG9nKHRpdGxlLCB0ZXh0LCBwcmVDb25maXJtQ2FsbGJhY2ssIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgICAgIGFsbG93RXNjYXBlS2V5OiBmYWxzZSxcbiAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IHRydWUsXG4gICAgICBvbkJlZm9yZU9wZW46ICgpID0+IHtcbiAgICAgICAgU3dhbC5jbGlja0NvbmZpcm0oKTtcbiAgICAgIH0sXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnLFxuICAgICAgcHJlQ29uZmlybTogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgcHJlQ29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzaG93U2VsZWN0RGlhbG9nKHRpdGxlLCBvYmpPcHRpb25zLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MpIHtcbiAgICBjb25zdCB7dmFsdWU6IHNlbGVjdGVkVmFsdWV9ID0gYXdhaXQgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGlucHV0OiAnc2VsZWN0JyxcbiAgICAgIGlucHV0T3B0aW9uczogb2JqT3B0aW9ucyxcbiAgICAgIGlucHV0UGxhY2Vob2xkZXI6ICctJyxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0LFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pXG4gICAgcmV0dXJuIHNlbGVjdGVkVmFsdWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==