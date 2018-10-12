/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-panel.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-maps-control-panel.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-panel.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

(function ($, c4g) {

  'use strict';
  /**
   *
   * @param options
   * @param opt_buttons Array[c4g.maps.misc.Panelbutton]
   * @constructor
   */

  c4g.maps.control.Panel = function (options, opt_buttons) {
    this.options = $.extend({
      mapController: undefined,
      name: 'panel',
      direction: 'top',
      headline: '',
      create: true,
      target: 'div.c4g-control-container-top-left.ol-unselectable',
      tipLabel: 'Panel'
    }, options);
    this.listenerKeys = [];
    this.element = document.createElement('div');
    $(this.element).addClass('ol-control');

    if (opt_buttons) {
      this.buttons = opt_buttons;
    }

    if (!this.options.mapController) {
      console.warn("cannot init panel without mapController");
      return;
    }

    switch (this.options.direction) {
      case 'top':
        this.cssName = 'c4g-top-panel';
        this.identifier = 'topPanel';
        break;
      case 'bottom':
        this.cssName = 'c4g-bottom-panel';
        this.identifier = 'bottomPanel';
        break;
    }

    // build up array of elements to slide away when toggling
    // TODO generalize to top and bottom
    this.slideElements = [];
    var leftDiv = document.querySelector('.c4g-control-container-top-left');
    var rightDiv = document.querySelector('.c4g-control-container-top-right');
    this.slideElements.push(leftDiv);
    this.slideElements.push(rightDiv);

    if (this.options.create) {
      this.create();
    }
  };

  ol.inherits(c4g.maps.control.Panel, ol.control.Control);

  // add methods
  c4g.maps.control.Panel.prototype = $.extend(c4g.maps.control.Panel.prototype, {

    /**
     * Builds up the html elements and structures.
     */
    create: function create() {
      var key, button, self, formNeeded, wrapperWrapper;

      self = this;

      if (this.buttons) {
        formNeeded = this.isFormNeeded();
      }

      this.container = document.createElement('div');
      this.contentWrapper = document.createElement('div');
      this.leftButtonWrapper = document.createElement('div');
      this.midButtonWrapper = document.createElement('div');
      this.rightButtonWrapper = document.createElement('div');
      wrapperWrapper = this.contentWrapper;

      if (formNeeded) {
        this.mainForm = document.createElement('form');
        this.contentWrapper.appendChild(this.mainForm);
        wrapperWrapper = this.mainForm;
      }

      wrapperWrapper.appendChild(this.leftButtonWrapper);
      wrapperWrapper.appendChild(this.midButtonWrapper);
      wrapperWrapper.appendChild(this.rightButtonWrapper);
      this.container.appendChild(this.contentWrapper);

      // set container attributes
      this.container.style.minHeight = '100px';
      this.container.style[this.options.direction] = '-1920px';
      $(this.container).addClass(this.cssName + ' ' + this.cssName + '-container ' + c4g.maps.constant.css.CLOSE);

      if (formNeeded) {
        //set main form attributes
        $(this.mainForm).addClass(this.cssName + ' c4g-panel-main-form');
      }
      //set left wrapper attributes
      $(this.leftButtonWrapper).addClass(this.cssName + ' c4g-panel-left-wrapper c4g-panel-button-wrapper');
      //set mid wrapper attributes
      $(this.midButtonWrapper).addClass(this.cssName + ' c4g-panel-mid-wrapper c4g-panel-button-wrapper');
      //set right wrapper attributes
      $(this.rightButtonWrapper).addClass(this.cssName + ' c4g-panel-right-wrapper c4g-panel-button-wrapper');
      $(this.contentWrapper).addClass(this.cssName + ' c4g-panel-content-wrapper');

      // set button to toggle the panel
      this.button = document.createElement('button');
      $(this.button).on('click', function (event) {
        event.stopPropagation();
        // loose focus, otherwise it looks messy
        try {
          this.blur();
        } catch (e) {
          // [note] "this.blur()" does not work in IE-fullscreen-mode
          console.warn(e.name + ': ' + e.message);
        }
        self.toggle();
      }); // end of clickhandler

      this.button.title = this.options.tipLabel;
      //$(this.button).addClass('ol-control');
      this.element.appendChild(this.button);

      /**
       * location: left, mid, right
       * label: label
       * type: button|textfield
       * eventlistener: {eventtype, function}
       */
      for (key in this.buttons) {
        if (this.buttons.hasOwnProperty(key)) {
          button = this.buttons[key];
          $(button.getElement()).addClass(this.cssName + ' c4g-panel-button');
          this[button.getSection() + "ButtonWrapper"].appendChild(button.getElement());
        }
      }

      this.options.mapController.$overlaycontainer_stopevent.append(this.container);
      ol.control.Control.call(this, {
        element: this.element,
        target: this.options.target
      });
      return true;
    }, // end of create()

    update: function update() {}, // end of update()

    open: function open() {
      var containerOffsetHeight, scope, newStarboardHeight, curStarboardHeight, newPortsideHeight, curPortsideHeight, starboard, portside;

      scope = this;
      starboard = this.options.mapController.controls.starboard;
      portside = this.options.mapController.activePortside;

      containerOffsetHeight = this.container.offsetHeight;
      $(this.container).removeClass(c4g.maps.constant.css.CLOSE).addClass(c4g.maps.constant.css.OPEN).css(this.options.direction, 0);
      this.slideElements.forEach(function (element) {
        $(element).css(scope.options.direction, containerOffsetHeight);
      });

      // resize starboard, if open
      if (starboard) {
        curStarboardHeight = starboard.container.offsetHeight;
        newStarboardHeight = curStarboardHeight - containerOffsetHeight;
        $(starboard.container).css('top', containerOffsetHeight);
        $(starboard.container).css('height', newStarboardHeight);
      }

      var resizePortsideOpen = function resizePortsideOpen() {
        var newHeight, currentHeight;

        currentHeight = this.container.offsetHeight;
        newHeight = currentHeight - containerOffsetHeight;
        $(this.container).css('height', newHeight);
        $(this.container).css('top', containerOffsetHeight);
      };

      if (this.options.mapController.controls.editor) {
        this.options.mapController.controls.editor.preOpenFunction = resizePortsideOpen;
      }

      if (this.options.mapController.controls.router) {
        this.options.mapController.controls.router.preOpenFunction = resizePortsideOpen;
      }

      if (this.options.mapController.controls.measuretools) {
        this.options.mapController.controls.measuretools.preOpenFunction = resizePortsideOpen;
      }

      // resize portside, if open
      if (portside) {
        curPortsideHeight = portside.container.offsetHeight;
        newPortsideHeight = curPortsideHeight - containerOffsetHeight;
        $(portside.container).css('height', newPortsideHeight);
        $(portside.container).css('top', containerOffsetHeight);
        portside.update();
      }
    }, // end of open()

    close: function close() {
      var containerOffsetHeight, scope, newStarboardHeight, newPortsideHeight, curPortsideHeight, starboard, portside;

      scope = this;
      starboard = this.options.mapController.controls.starboard;
      //TODO this will not work with closed portside
      portside = this.options.mapController.activePortside;

      containerOffsetHeight = this.container.offsetHeight;
      $(this.container).removeClass(c4g.maps.constant.css.OPEN).addClass(c4g.maps.constant.css.CLOSE).css(this.options.direction, -containerOffsetHeight);
      $(this.element).removeClass(c4g.maps.constant.css.OPEN).addClass(c4g.maps.constant.css.CLOSE).css(this.options.direction, 0);

      this.slideElements.forEach(function (element) {
        $(element).css(scope.options.direction, 0);
      });

      // resize starboard, if open
      if (starboard) {
        newStarboardHeight = starboard.container.offsetHeight + containerOffsetHeight;
        $(starboard.container).css('height', newStarboardHeight);
        $(starboard.container).css('top', 0);
      }

      var resizePortsideClose = function resizePortsideClose() {
        var currentHeight, newHeight;

        currentHeight = this.container.offsetHeight;
        newHeight = currentHeight + containerOffsetHeight;
        $(this.container).css('height', newHeight);
        $(this.container).css('top', 0);
      };

      if (this.options.mapController.controls.editor) {
        this.options.mapController.controls.editor.preCloseFunction = resizePortsideClose;
        this.options.mapController.controls.editor.preOpenFunction = null;
      }

      if (this.options.mapController.controls.router) {
        this.options.mapController.controls.router.preCloseFunction = resizePortsideClose;
        this.options.mapController.controls.router.preOpenFunction = null;
      }

      if (this.options.mapController.controls.measuretools) {
        this.options.mapController.controls.measuretools.preCloseFunction = resizePortsideClose;
        this.options.mapController.controls.measuretools.preOpenFunction = null;
      }

      // resize portside, if open
      if (portside) {
        curPortsideHeight = portside.container.offsetHeight;
        newPortsideHeight = curPortsideHeight + containerOffsetHeight;
        $(portside.container).css('height', newPortsideHeight);
        $(portside.container).css('top', 0);
      }
    }, // end of close()

    toggle: function toggle() {
      if ($(this.container).hasClass(c4g.maps.constant.css.CLOSE)) {
        this.open();
      } else {
        this.close();
      }
    }, // end of "toggle()"

    isFormNeeded: function isFormNeeded() {
      var key, button;

      for (key in this.buttons) {
        if (this.buttons.hasOwnProperty(key)) {
          button = this.buttons[key];
          if (button.type === 'input') {
            return true;
          }
        }
      }
      return false;
    }

  });
})(jQuery, this.c4g);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBhbmVsLmpzIl0sIm5hbWVzIjpbImM0ZyIsIm1hcHMiLCJjb250cm9sIiwiJCIsIlBhbmVsIiwib3B0aW9ucyIsIm9wdF9idXR0b25zIiwiZXh0ZW5kIiwibWFwQ29udHJvbGxlciIsInVuZGVmaW5lZCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJoZWFkbGluZSIsImNyZWF0ZSIsInRhcmdldCIsInRpcExhYmVsIiwibGlzdGVuZXJLZXlzIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZENsYXNzIiwiYnV0dG9ucyIsImNvbnNvbGUiLCJ3YXJuIiwiY3NzTmFtZSIsImlkZW50aWZpZXIiLCJzbGlkZUVsZW1lbnRzIiwibGVmdERpdiIsInF1ZXJ5U2VsZWN0b3IiLCJyaWdodERpdiIsInB1c2giLCJvbCIsImluaGVyaXRzIiwiQ29udHJvbCIsInByb3RvdHlwZSIsImtleSIsImJ1dHRvbiIsInNlbGYiLCJmb3JtTmVlZGVkIiwid3JhcHBlcldyYXBwZXIiLCJpc0Zvcm1OZWVkZWQiLCJjb250YWluZXIiLCJjb250ZW50V3JhcHBlciIsImxlZnRCdXR0b25XcmFwcGVyIiwibWlkQnV0dG9uV3JhcHBlciIsInJpZ2h0QnV0dG9uV3JhcHBlciIsIm1haW5Gb3JtIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsIm1pbkhlaWdodCIsImNvbnN0YW50IiwiY3NzIiwiQ0xPU0UiLCJvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYmx1ciIsImUiLCJtZXNzYWdlIiwidG9nZ2xlIiwidGl0bGUiLCJoYXNPd25Qcm9wZXJ0eSIsImdldEVsZW1lbnQiLCJnZXRTZWN0aW9uIiwiJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50IiwiYXBwZW5kIiwiY2FsbCIsInVwZGF0ZSIsIm9wZW4iLCJjb250YWluZXJPZmZzZXRIZWlnaHQiLCJzY29wZSIsIm5ld1N0YXJib2FyZEhlaWdodCIsImN1clN0YXJib2FyZEhlaWdodCIsIm5ld1BvcnRzaWRlSGVpZ2h0IiwiY3VyUG9ydHNpZGVIZWlnaHQiLCJzdGFyYm9hcmQiLCJwb3J0c2lkZSIsImNvbnRyb2xzIiwiYWN0aXZlUG9ydHNpZGUiLCJvZmZzZXRIZWlnaHQiLCJyZW1vdmVDbGFzcyIsIk9QRU4iLCJmb3JFYWNoIiwicmVzaXplUG9ydHNpZGVPcGVuIiwibmV3SGVpZ2h0IiwiY3VycmVudEhlaWdodCIsImVkaXRvciIsInByZU9wZW5GdW5jdGlvbiIsInJvdXRlciIsIm1lYXN1cmV0b29scyIsImNsb3NlIiwicmVzaXplUG9ydHNpZGVDbG9zZSIsInByZUNsb3NlRnVuY3Rpb24iLCJoYXNDbGFzcyIsInR5cGUiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBLEtBQUtBLEdBQUwsR0FBVyxLQUFLQSxHQUFMLElBQVksRUFBdkI7QUFDQSxLQUFLQSxHQUFMLENBQVNDLElBQVQsR0FBZ0IsS0FBS0QsR0FBTCxDQUFTQyxJQUFULElBQWlCLEVBQWpDO0FBQ0EsS0FBS0QsR0FBTCxDQUFTQyxJQUFULENBQWNDLE9BQWQsR0FBd0IsS0FB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Q0FBa0JDLEdBQWxCLENBQXNCQyxLQUFqRCxDQUFKLEVBQTZEO0FBQzNELGFBQUtnQixJQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS3NCLEtBQUw7QUFDRDtBQUNGLEtBN04yRSxFQTZOekU7O0FBRUhsRCxrQkFBYyx3QkFBVztBQUN2QixVQUFJTCxHQUFKLEVBQ0lDLE1BREo7O0FBR0EsV0FBS0QsR0FBTCxJQUFZLEtBQUtkLE9BQWpCLEVBQTBCO0FBQ3hCLFlBQUksS0FBS0EsT0FBTCxDQUFhd0MsY0FBYixDQUE0QjFCLEdBQTVCLENBQUosRUFBc0M7QUFDcENDLG1CQUFTLEtBQUtmLE9BQUwsQ0FBYWMsR0FBYixDQUFUO0FBQ0EsY0FBSUMsT0FBTzBELElBQVAsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDM0IsbUJBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNELGFBQU8sS0FBUDtBQUNEOztBQTVPMkUsR0FBM0MsQ0FBbkM7QUErT0QsQ0ExU0EsRUEwU0NDLE1BMVNELEVBMFNTLEtBQUsvRixHQTFTZCxDQUFELEMiLCJmaWxlIjoiYzRnLW1hcHMtY29udHJvbC1wYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBhbmVsLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUzNjM0ZWE0NTk3Y2Q1YjczNWQwIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG4oZnVuY3Rpb24oJCwgYzRnKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdF9idXR0b25zIEFycmF5W2M0Zy5tYXBzLm1pc2MuUGFuZWxidXR0b25dXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5QYW5lbCA9IGZ1bmN0aW9uKG9wdGlvbnMsIG9wdF9idXR0b25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkLFxuICAgICAgbmFtZTogJ3BhbmVsJyxcbiAgICAgIGRpcmVjdGlvbjogJ3RvcCcsXG4gICAgICBoZWFkbGluZTogJycsXG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgICB0YXJnZXQ6ICdkaXYuYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1sZWZ0Lm9sLXVuc2VsZWN0YWJsZScsXG4gICAgICB0aXBMYWJlbDogJ1BhbmVsJ1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIHRoaXMubGlzdGVuZXJLZXlzID0gW107XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJCh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKCdvbC1jb250cm9sJyk7XG5cbiAgICBpZiAob3B0X2J1dHRvbnMpIHtcbiAgICAgIHRoaXMuYnV0dG9ucyA9IG9wdF9idXR0b25zO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybihcImNhbm5vdCBpbml0IHBhbmVsIHdpdGhvdXQgbWFwQ29udHJvbGxlclwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2l0Y2godGhpcy5vcHRpb25zLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgdGhpcy5jc3NOYW1lID0gJ2M0Zy10b3AtcGFuZWwnO1xuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSAndG9wUGFuZWwnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHRoaXMuY3NzTmFtZSA9ICdjNGctYm90dG9tLXBhbmVsJztcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gJ2JvdHRvbVBhbmVsJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gYnVpbGQgdXAgYXJyYXkgb2YgZWxlbWVudHMgdG8gc2xpZGUgYXdheSB3aGVuIHRvZ2dsaW5nXG4gICAgLy8gVE9ETyBnZW5lcmFsaXplIHRvIHRvcCBhbmQgYm90dG9tXG4gICAgdGhpcy5zbGlkZUVsZW1lbnRzID0gW107XG4gICAgdmFyIGxlZnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1sZWZ0Jyk7XG4gICAgdmFyIHJpZ2h0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmM0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtcmlnaHQnKTtcbiAgICB0aGlzLnNsaWRlRWxlbWVudHMucHVzaChsZWZ0RGl2KTtcbiAgICB0aGlzLnNsaWRlRWxlbWVudHMucHVzaChyaWdodERpdik7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNyZWF0ZSkge1xuICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5QYW5lbCwgb2wuY29udHJvbC5Db250cm9sKTtcblxuICAvLyBhZGQgbWV0aG9kc1xuICBjNGcubWFwcy5jb250cm9sLlBhbmVsLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnRyb2wuUGFuZWwucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgdXAgdGhlIGh0bWwgZWxlbWVudHMgYW5kIHN0cnVjdHVyZXMuXG4gICAgICovXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBrZXksIGJ1dHRvbiwgc2VsZiwgZm9ybU5lZWRlZCwgd3JhcHBlcldyYXBwZXI7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5idXR0b25zKSB7XG4gICAgICAgIGZvcm1OZWVkZWQgPSB0aGlzLmlzRm9ybU5lZWRlZCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5jb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5sZWZ0QnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5taWRCdXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnJpZ2h0QnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgd3JhcHBlcldyYXBwZXIgPSB0aGlzLmNvbnRlbnRXcmFwcGVyO1xuXG4gICAgICBpZiAoZm9ybU5lZWRlZCkge1xuICAgICAgICB0aGlzLm1haW5Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICB0aGlzLmNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMubWFpbkZvcm0pO1xuICAgICAgICB3cmFwcGVyV3JhcHBlciA9IHRoaXMubWFpbkZvcm07XG4gICAgICB9XG5cbiAgICAgIHdyYXBwZXJXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMubGVmdEJ1dHRvbldyYXBwZXIpO1xuICAgICAgd3JhcHBlcldyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5taWRCdXR0b25XcmFwcGVyKTtcbiAgICAgIHdyYXBwZXJXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCdXR0b25XcmFwcGVyKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudFdyYXBwZXIpO1xuXG4gICAgICAvLyBzZXQgY29udGFpbmVyIGF0dHJpYnV0ZXNcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9ICcxMDBweCc7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uXSA9ICctMTkyMHB4JztcbiAgICAgICQodGhpcy5jb250YWluZXIpLmFkZENsYXNzKHRoaXMuY3NzTmFtZSArICcgJyArIHRoaXMuY3NzTmFtZSArICctY29udGFpbmVyICcgKyBjNGcubWFwcy5jb25zdGFudC5jc3MuQ0xPU0UpO1xuXG4gICAgICBpZiAoZm9ybU5lZWRlZCkge1xuICAgICAgICAvL3NldCBtYWluIGZvcm0gYXR0cmlidXRlc1xuICAgICAgICAkKHRoaXMubWFpbkZvcm0pLmFkZENsYXNzKHRoaXMuY3NzTmFtZSArICcgYzRnLXBhbmVsLW1haW4tZm9ybScpO1xuICAgICAgfVxuICAgICAgLy9zZXQgbGVmdCB3cmFwcGVyIGF0dHJpYnV0ZXNcbiAgICAgICQodGhpcy5sZWZ0QnV0dG9uV3JhcHBlcikuYWRkQ2xhc3ModGhpcy5jc3NOYW1lICsgJyBjNGctcGFuZWwtbGVmdC13cmFwcGVyIGM0Zy1wYW5lbC1idXR0b24td3JhcHBlcicpO1xuICAgICAgLy9zZXQgbWlkIHdyYXBwZXIgYXR0cmlidXRlc1xuICAgICAgJCh0aGlzLm1pZEJ1dHRvbldyYXBwZXIpLmFkZENsYXNzKHRoaXMuY3NzTmFtZSArICcgYzRnLXBhbmVsLW1pZC13cmFwcGVyIGM0Zy1wYW5lbC1idXR0b24td3JhcHBlcicpO1xuICAgICAgLy9zZXQgcmlnaHQgd3JhcHBlciBhdHRyaWJ1dGVzXG4gICAgICAkKHRoaXMucmlnaHRCdXR0b25XcmFwcGVyKS5hZGRDbGFzcyh0aGlzLmNzc05hbWUgKyAnIGM0Zy1wYW5lbC1yaWdodC13cmFwcGVyIGM0Zy1wYW5lbC1idXR0b24td3JhcHBlcicpO1xuICAgICAgJCh0aGlzLmNvbnRlbnRXcmFwcGVyKS5hZGRDbGFzcyh0aGlzLmNzc05hbWUgKyAnIGM0Zy1wYW5lbC1jb250ZW50LXdyYXBwZXInKTtcblxuXG4gICAgICAvLyBzZXQgYnV0dG9uIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAkKHRoaXMuYnV0dG9uKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIGxvb3NlIGZvY3VzLCBvdGhlcndpc2UgaXQgbG9va3MgbWVzc3lcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIFtub3RlXSBcInRoaXMuYmx1cigpXCIgZG9lcyBub3Qgd29yayBpbiBJRS1mdWxsc2NyZWVuLW1vZGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oZS5uYW1lICsgJzogJyArIGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi50b2dnbGUoKTtcbiAgICAgIH0pOyAvLyBlbmQgb2YgY2xpY2toYW5kbGVyXG5cbiAgICAgIHRoaXMuYnV0dG9uLnRpdGxlID0gdGhpcy5vcHRpb25zLnRpcExhYmVsO1xuICAgICAgLy8kKHRoaXMuYnV0dG9uKS5hZGRDbGFzcygnb2wtY29udHJvbCcpO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBsb2NhdGlvbjogbGVmdCwgbWlkLCByaWdodFxuICAgICAgICogbGFiZWw6IGxhYmVsXG4gICAgICAgKiB0eXBlOiBidXR0b258dGV4dGZpZWxkXG4gICAgICAgKiBldmVudGxpc3RlbmVyOiB7ZXZlbnR0eXBlLCBmdW5jdGlvbn1cbiAgICAgICAqL1xuICAgICAgZm9yIChrZXkgaW4gdGhpcy5idXR0b25zKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGJ1dHRvbiA9IHRoaXMuYnV0dG9uc1trZXldO1xuICAgICAgICAgICQoYnV0dG9uLmdldEVsZW1lbnQoKSkuYWRkQ2xhc3ModGhpcy5jc3NOYW1lICsgJyBjNGctcGFuZWwtYnV0dG9uJyk7XG4gICAgICAgICAgdGhpc1tidXR0b24uZ2V0U2VjdGlvbigpICsgXCJCdXR0b25XcmFwcGVyXCJdLmFwcGVuZENoaWxkKGJ1dHRvbi5nZXRFbGVtZW50KCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5hcHBlbmQodGhpcy5jb250YWluZXIpO1xuICAgICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHRhcmdldDogdGhpcy5vcHRpb25zLnRhcmdldFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAvLyBlbmQgb2YgY3JlYXRlKClcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICB9LC8vIGVuZCBvZiB1cGRhdGUoKVxuXG4gICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29udGFpbmVyT2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIHNjb3BlLFxuICAgICAgICAgIG5ld1N0YXJib2FyZEhlaWdodCxcbiAgICAgICAgICBjdXJTdGFyYm9hcmRIZWlnaHQsXG4gICAgICAgICAgbmV3UG9ydHNpZGVIZWlnaHQsXG4gICAgICAgICAgY3VyUG9ydHNpZGVIZWlnaHQsXG4gICAgICAgICAgc3RhcmJvYXJkLFxuICAgICAgICAgIHBvcnRzaWRlO1xuXG4gICAgICBzY29wZSA9IHRoaXM7XG4gICAgICBzdGFyYm9hcmQgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5jb250cm9scy5zdGFyYm9hcmQ7XG4gICAgICBwb3J0c2lkZSA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmFjdGl2ZVBvcnRzaWRlO1xuXG4gICAgICBjb250YWluZXJPZmZzZXRIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAkKHRoaXMuY29udGFpbmVyKS5yZW1vdmVDbGFzcyhjNGcubWFwcy5jb25zdGFudC5jc3MuQ0xPU0UpLmFkZENsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5PUEVOKS5jc3ModGhpcy5vcHRpb25zLmRpcmVjdGlvbiwgMCk7XG4gICAgICB0aGlzLnNsaWRlRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAkKGVsZW1lbnQpLmNzcyhzY29wZS5vcHRpb25zLmRpcmVjdGlvbiwgY29udGFpbmVyT2Zmc2V0SGVpZ2h0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXNpemUgc3RhcmJvYXJkLCBpZiBvcGVuXG4gICAgICBpZiAoc3RhcmJvYXJkKSB7XG4gICAgICAgIGN1clN0YXJib2FyZEhlaWdodCA9IHN0YXJib2FyZC5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBuZXdTdGFyYm9hcmRIZWlnaHQgPSBjdXJTdGFyYm9hcmRIZWlnaHQgLSBjb250YWluZXJPZmZzZXRIZWlnaHQ7XG4gICAgICAgICQoc3RhcmJvYXJkLmNvbnRhaW5lcikuY3NzKCd0b3AnLCBjb250YWluZXJPZmZzZXRIZWlnaHQpO1xuICAgICAgICAkKHN0YXJib2FyZC5jb250YWluZXIpLmNzcygnaGVpZ2h0JywgbmV3U3RhcmJvYXJkSGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc2l6ZVBvcnRzaWRlT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV3SGVpZ2h0LCBjdXJyZW50SGVpZ2h0O1xuXG4gICAgICAgIGN1cnJlbnRIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIG5ld0hlaWdodCA9IGN1cnJlbnRIZWlnaHQgLSBjb250YWluZXJPZmZzZXRIZWlnaHQ7XG4gICAgICAgICQodGhpcy5jb250YWluZXIpLmNzcygnaGVpZ2h0JywgbmV3SGVpZ2h0KTtcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikuY3NzKCd0b3AnLCBjb250YWluZXJPZmZzZXRIZWlnaHQpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLmVkaXRvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5jb250cm9scy5lZGl0b3IucHJlT3BlbkZ1bmN0aW9uID0gcmVzaXplUG9ydHNpZGVPcGVuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuY29udHJvbHMucm91dGVyKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLnJvdXRlci5wcmVPcGVuRnVuY3Rpb24gPSByZXNpemVQb3J0c2lkZU9wZW47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5jb250cm9scy5tZWFzdXJldG9vbHMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuY29udHJvbHMubWVhc3VyZXRvb2xzLnByZU9wZW5GdW5jdGlvbiA9IHJlc2l6ZVBvcnRzaWRlT3BlbjtcbiAgICAgIH1cblxuICAgICAgLy8gcmVzaXplIHBvcnRzaWRlLCBpZiBvcGVuXG4gICAgICBpZiAocG9ydHNpZGUpIHtcbiAgICAgICAgY3VyUG9ydHNpZGVIZWlnaHQgPSBwb3J0c2lkZS5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBuZXdQb3J0c2lkZUhlaWdodCA9IGN1clBvcnRzaWRlSGVpZ2h0IC0gY29udGFpbmVyT2Zmc2V0SGVpZ2h0O1xuICAgICAgICAkKHBvcnRzaWRlLmNvbnRhaW5lcikuY3NzKCdoZWlnaHQnLCBuZXdQb3J0c2lkZUhlaWdodCk7XG4gICAgICAgICQocG9ydHNpZGUuY29udGFpbmVyKS5jc3MoJ3RvcCcsIGNvbnRhaW5lck9mZnNldEhlaWdodCk7XG4gICAgICAgIHBvcnRzaWRlLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sLy8gZW5kIG9mIG9wZW4oKVxuXG4gICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbnRhaW5lck9mZnNldEhlaWdodCxcbiAgICAgICAgICBzY29wZSxcbiAgICAgICAgICBuZXdTdGFyYm9hcmRIZWlnaHQsXG4gICAgICAgICAgbmV3UG9ydHNpZGVIZWlnaHQsXG4gICAgICAgICAgY3VyUG9ydHNpZGVIZWlnaHQsXG4gICAgICAgICAgc3RhcmJvYXJkLFxuICAgICAgICAgIHBvcnRzaWRlO1xuXG4gICAgICBzY29wZSA9IHRoaXM7XG4gICAgICBzdGFyYm9hcmQgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5jb250cm9scy5zdGFyYm9hcmQ7XG4gICAgICAvL1RPRE8gdGhpcyB3aWxsIG5vdCB3b3JrIHdpdGggY2xvc2VkIHBvcnRzaWRlXG4gICAgICBwb3J0c2lkZSA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmFjdGl2ZVBvcnRzaWRlO1xuXG4gICAgICBjb250YWluZXJPZmZzZXRIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAkKHRoaXMuY29udGFpbmVyKS5yZW1vdmVDbGFzcyhjNGcubWFwcy5jb25zdGFudC5jc3MuT1BFTikuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkNMT1NFKS5jc3ModGhpcy5vcHRpb25zLmRpcmVjdGlvbiwgLWNvbnRhaW5lck9mZnNldEhlaWdodCk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLk9QRU4pLmFkZENsYXNzKGM0Zy5tYXBzLmNvbnN0YW50LmNzcy5DTE9TRSkuY3NzKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24sIDApO1xuXG4gICAgICB0aGlzLnNsaWRlRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAkKGVsZW1lbnQpLmNzcyhzY29wZS5vcHRpb25zLmRpcmVjdGlvbiwgMCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gcmVzaXplIHN0YXJib2FyZCwgaWYgb3BlblxuICAgICAgaWYgKHN0YXJib2FyZCkge1xuICAgICAgICBuZXdTdGFyYm9hcmRIZWlnaHQgPSBzdGFyYm9hcmQuY29udGFpbmVyLm9mZnNldEhlaWdodCArIGNvbnRhaW5lck9mZnNldEhlaWdodDtcbiAgICAgICAgJChzdGFyYm9hcmQuY29udGFpbmVyKS5jc3MoJ2hlaWdodCcsIG5ld1N0YXJib2FyZEhlaWdodCk7XG4gICAgICAgICQoc3RhcmJvYXJkLmNvbnRhaW5lcikuY3NzKCd0b3AnLCAwKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc2l6ZVBvcnRzaWRlQ2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRIZWlnaHQsIG5ld0hlaWdodDtcblxuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBuZXdIZWlnaHQgPSBjdXJyZW50SGVpZ2h0ICsgY29udGFpbmVyT2Zmc2V0SGVpZ2h0O1xuICAgICAgICAkKHRoaXMuY29udGFpbmVyKS5jc3MoJ2hlaWdodCcsIG5ld0hlaWdodCk7XG4gICAgICAgICQodGhpcy5jb250YWluZXIpLmNzcygndG9wJywgMCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuY29udHJvbHMuZWRpdG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLmVkaXRvci5wcmVDbG9zZUZ1bmN0aW9uID0gcmVzaXplUG9ydHNpZGVDbG9zZTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuY29udHJvbHMuZWRpdG9yLnByZU9wZW5GdW5jdGlvbiA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5jb250cm9scy5yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuY29udHJvbHMucm91dGVyLnByZUNsb3NlRnVuY3Rpb24gPSByZXNpemVQb3J0c2lkZUNsb3NlO1xuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5jb250cm9scy5yb3V0ZXIucHJlT3BlbkZ1bmN0aW9uID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLm1lYXN1cmV0b29scykge1xuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5jb250cm9scy5tZWFzdXJldG9vbHMucHJlQ2xvc2VGdW5jdGlvbiA9IHJlc2l6ZVBvcnRzaWRlQ2xvc2U7XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLm1lYXN1cmV0b29scy5wcmVPcGVuRnVuY3Rpb24gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyByZXNpemUgcG9ydHNpZGUsIGlmIG9wZW5cbiAgICAgIGlmIChwb3J0c2lkZSkge1xuICAgICAgICBjdXJQb3J0c2lkZUhlaWdodCA9IHBvcnRzaWRlLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIG5ld1BvcnRzaWRlSGVpZ2h0ID0gY3VyUG9ydHNpZGVIZWlnaHQgKyBjb250YWluZXJPZmZzZXRIZWlnaHQ7XG4gICAgICAgICQocG9ydHNpZGUuY29udGFpbmVyKS5jc3MoJ2hlaWdodCcsIG5ld1BvcnRzaWRlSGVpZ2h0KTtcbiAgICAgICAgJChwb3J0c2lkZS5jb250YWluZXIpLmNzcygndG9wJywgMCk7XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIGNsb3NlKClcblxuICAgIHRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoJCh0aGlzLmNvbnRhaW5lcikuaGFzQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkNMT1NFKSkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgXCJ0b2dnbGUoKVwiXG5cbiAgICBpc0Zvcm1OZWVkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGtleSxcbiAgICAgICAgICBidXR0b247XG5cbiAgICAgIGZvciAoa2V5IGluIHRoaXMuYnV0dG9ucykge1xuICAgICAgICBpZiAodGhpcy5idXR0b25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBidXR0b24gPSB0aGlzLmJ1dHRvbnNba2V5XTtcbiAgICAgICAgICBpZiAoYnV0dG9uLnR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9KTtcbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBhbmVsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==