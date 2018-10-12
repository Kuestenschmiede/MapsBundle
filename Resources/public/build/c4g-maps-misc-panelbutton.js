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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-misc-panelbutton.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-maps-misc-panelbutton.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-misc-panelbutton.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.misc = this.c4g.maps.misc || {};

(function ($, c4g) {

  c4g.maps.misc.Panelbutton = function (options) {

    this.options = $.extend({
      location: 'left',
      label: '',
      type: 'button',
      eventlistener: {
        eventtype: 'click',
        listener: undefined
      }
    }, options);
    this.create();
  };

  c4g.maps.misc.Panelbutton.prototype = $.extend(c4g.maps.misc.Panelbutton.prototype, {

    create: function create() {

      var scope = this;

      switch (this.options.type) {
        case 'button':
          this.element = document.createElement('button');
          this.element.innerHTML = this.options.label;
          if (this.options.eventlistener && this.options.eventlistener.eventtype && this.options.eventlistener.listener && typeof this.options.eventlistener.listener === 'function') {
            $(this.element).on(this.options.eventlistener.eventtype, scope.options.eventlistener.listener);
          }
          break;
        case 'input':
          this.element = document.createElement('input');
          this.element.placeholder = this.options.label;
          if (this.options.eventlistener && this.options.eventlistener.eventtype && this.options.eventlistener.listener) {
            $(this.element).on(this.options.eventlistener.eventtype, this.options.eventlistener.listener);
          }
          break;
        case 'slider':
          // for this not to fail, the options.states and options.defaultState have to be set
          if (this.options && this.options.states && this.options.defaultState) {
            this.element = this.createSlider();
          } else {
            console.warn('An error occurred while creating the panel..(Error 1: Missing options)');
          }
          break;
        default:
          this.element = document.createElement('label');
          this.element.innerHTML = this.options.label;
          break;
      }
    }, //end of "create()"

    getSection: function getSection() {
      return this.options.location;
    },

    getElement: function getElement() {
      return this.element;
    },

    createSlider: function createSlider() {
      var states, stateStyleMap, stateLength, slidebar, slidebutton, defaultState, currentStateId, i, deltaX, changeState, $slidebutton, currentCursorX;

      // states has to be an array with the values to be displayed and slid over
      // the order of the array will determine which values are displayed from left to right
      // e.g. ['0,5km', '1km', '2km']
      states = this.options.states;
      // maps every state to a numeric value for the 'left' property, so the slidebutton can be placed proportionally correct
      stateStyleMap = {};
      // calc how much we need to move left/right to change state
      stateLength = 100 / states.length;
      // the bar where sliding over is possible
      slidebar = document.createElement('div');
      $(slidebar).addClass('c4g-panel-slidebar');
      // the clickable element to move the slider
      slidebutton = document.createElement('button');
      $(slidebutton).addClass('c4g-panel-slidebutton');
      slidebar.appendChild(slidebutton);
      // start state
      defaultState = states[this.options.defaultState];
      currentStateId = this.options.defaultState;

      // build up map
      for (i = 0; i < states.length; i++) {
        stateStyleMap[states[i]] = i * stateLength;
      }

      slidebar.style.width = states.length * 10 + '%';
      slidebutton.style.left = stateStyleMap[defaultState] + '%';
      slidebutton.innerHTML = defaultState;

      // set min delta to not always trigger state change
      deltaX = 10;
      // changes the state of the slidebutton
      changeState = function changeState(stateId, newX) {
        if (stateId > states.length - 1 || stateId < 0) {
          // invalid stateId
          return;
        }
        slidebutton.style.left = stateStyleMap[states[stateId]] + '%';
        slidebutton.innerHTML = states[stateId];
        currentStateId = stateId;
        currentCursorX = newX;
      };

      // build up click handler
      $slidebutton = $(slidebutton);
      currentCursorX = 0;

      $slidebutton.on('mousedown', function (event) {
        var docBody = document.querySelector('body');
        event.preventDefault();
        // save current cursor position
        currentCursorX = event.pageX;

        // move slider on mousemove
        $slidebutton.on('mousemove', function handler(event) {
          event.preventDefault();
          if (event.pageX > currentCursorX && event.pageX - currentCursorX > deltaX) {
            // moved right
            changeState(currentStateId + 1, event.pageX);
          } else if (event.pageX < currentCursorX && currentCursorX - event.pageX > deltaX) {
            // moved left
            changeState(currentStateId - 1, event.pageX);
          }
        });
        // unset move listener
        $(docBody).on('mouseup', function (event) {
          $slidebutton.off('mousemove');
        });
      }); // end clickhandler

      // create getter for current value
      this.getValue = function () {
        return states[currentStateId];
      };

      return slidebar;
    }, //end of "createSlider()"

    attachListener: function attachListener(type, listener) {
      if (!type || !listener || typeof listener !== 'function') {
        console.warn('cannot attach event listener without enough parameters...');
      }

      $(this.element).on(type, listener);
    }
  });
})(jQuery, this.c4g);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2MzRlYTQ1OTdjZDViNzM1ZDAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1taXNjLXBhbmVsYnV0dG9uLmpzIl0sIm5hbWVzIjpbImM0ZyIsIm1hcHMiLCJtaXNjIiwiJCIsIlBhbmVsYnV0dG9uIiwib3B0aW9ucyIsImV4dGVuZCIsImxvY2F0aW9uIiwibGFiZWwiLCJ0eXBlIiwiZXZlbnRsaXN0ZW5lciIsImV2ZW50dHlwZSIsImxpc3RlbmVyIiwidW5kZWZpbmVkIiwiY3JlYXRlIiwicHJvdG90eXBlIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwib24iLCJwbGFjZWhvbGRlciIsInN0YXRlcyIsImRlZmF1bHRTdGF0ZSIsImNyZWF0ZVNsaWRlciIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0U2VjdGlvbiIsImdldEVsZW1lbnQiLCJzdGF0ZVN0eWxlTWFwIiwic3RhdGVMZW5ndGgiLCJzbGlkZWJhciIsInNsaWRlYnV0dG9uIiwiY3VycmVudFN0YXRlSWQiLCJpIiwiZGVsdGFYIiwiY2hhbmdlU3RhdGUiLCIkc2xpZGVidXR0b24iLCJjdXJyZW50Q3Vyc29yWCIsImxlbmd0aCIsImFkZENsYXNzIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsIndpZHRoIiwibGVmdCIsInN0YXRlSWQiLCJuZXdYIiwiZXZlbnQiLCJkb2NCb2R5IiwicXVlcnlTZWxlY3RvciIsInByZXZlbnREZWZhdWx0IiwicGFnZVgiLCJoYW5kbGVyIiwib2ZmIiwiZ2V0VmFsdWUiLCJhdHRhY2hMaXN0ZW5lciIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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LW1pc2MtcGFuZWxidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtbWlzYy1wYW5lbGJ1dHRvbi5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMzYzNGVhNDU5N2NkNWI3MzVkMCIsInRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMubWlzYyA9IHRoaXMuYzRnLm1hcHMubWlzYyB8fCB7fTtcblxuKGZ1bmN0aW9uKCQsIGM0Zyl7XG5cbiAgYzRnLm1hcHMubWlzYy5QYW5lbGJ1dHRvbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGxvY2F0aW9uOiAnbGVmdCcsXG4gICAgICBsYWJlbDogJycsXG4gICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIGV2ZW50bGlzdGVuZXI6IHtcbiAgICAgICAgZXZlbnR0eXBlOiAnY2xpY2snLFxuICAgICAgICBsaXN0ZW5lcjogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfTtcblxuICBjNGcubWFwcy5taXNjLlBhbmVsYnV0dG9uLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLm1pc2MuUGFuZWxidXR0b24ucHJvdG90eXBlLCB7XG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgc2NvcGUgPSB0aGlzO1xuXG4gICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5sYWJlbDtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmV2ZW50bGlzdGVuZXIgJiYgdGhpcy5vcHRpb25zLmV2ZW50bGlzdGVuZXIuZXZlbnR0eXBlICYmIHRoaXMub3B0aW9ucy5ldmVudGxpc3RlbmVyLmxpc3RlbmVyXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmV2ZW50bGlzdGVuZXIubGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICQodGhpcy5lbGVtZW50KS5vbih0aGlzLm9wdGlvbnMuZXZlbnRsaXN0ZW5lci5ldmVudHR5cGUsIHNjb3BlLm9wdGlvbnMuZXZlbnRsaXN0ZW5lci5saXN0ZW5lcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQucGxhY2Vob2xkZXIgPSB0aGlzLm9wdGlvbnMubGFiZWw7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ldmVudGxpc3RlbmVyICYmIHRoaXMub3B0aW9ucy5ldmVudGxpc3RlbmVyLmV2ZW50dHlwZSAmJiB0aGlzLm9wdGlvbnMuZXZlbnRsaXN0ZW5lci5saXN0ZW5lcikge1xuICAgICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLm9uKHRoaXMub3B0aW9ucy5ldmVudGxpc3RlbmVyLmV2ZW50dHlwZSwgdGhpcy5vcHRpb25zLmV2ZW50bGlzdGVuZXIubGlzdGVuZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2xpZGVyJzpcbiAgICAgICAgICAgIC8vIGZvciB0aGlzIG5vdCB0byBmYWlsLCB0aGUgb3B0aW9ucy5zdGF0ZXMgYW5kIG9wdGlvbnMuZGVmYXVsdFN0YXRlIGhhdmUgdG8gYmUgc2V0XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5zdGF0ZXMgJiYgdGhpcy5vcHRpb25zLmRlZmF1bHRTdGF0ZSkge1xuICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZVNsaWRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjcmVhdGluZyB0aGUgcGFuZWwuLihFcnJvciAxOiBNaXNzaW5nIG9wdGlvbnMpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIC8vZW5kIG9mIFwiY3JlYXRlKClcIlxuXG4gICAgZ2V0U2VjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvY2F0aW9uO1xuICAgIH0sXG5cbiAgICBnZXRFbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfSxcblxuICAgIGNyZWF0ZVNsaWRlcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc3RhdGVzLFxuICAgICAgICAgIHN0YXRlU3R5bGVNYXAsXG4gICAgICAgICAgc3RhdGVMZW5ndGgsXG4gICAgICAgICAgc2xpZGViYXIsXG4gICAgICAgICAgc2xpZGVidXR0b24sXG4gICAgICAgICAgZGVmYXVsdFN0YXRlLFxuICAgICAgICAgIGN1cnJlbnRTdGF0ZUlkLFxuICAgICAgICAgIGksXG4gICAgICAgICAgZGVsdGFYLFxuICAgICAgICAgIGNoYW5nZVN0YXRlLFxuICAgICAgICAgICRzbGlkZWJ1dHRvbixcbiAgICAgICAgICBjdXJyZW50Q3Vyc29yWDtcblxuICAgICAgLy8gc3RhdGVzIGhhcyB0byBiZSBhbiBhcnJheSB3aXRoIHRoZSB2YWx1ZXMgdG8gYmUgZGlzcGxheWVkIGFuZCBzbGlkIG92ZXJcbiAgICAgIC8vIHRoZSBvcmRlciBvZiB0aGUgYXJyYXkgd2lsbCBkZXRlcm1pbmUgd2hpY2ggdmFsdWVzIGFyZSBkaXNwbGF5ZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4gICAgICAvLyBlLmcuIFsnMCw1a20nLCAnMWttJywgJzJrbSddXG4gICAgICBzdGF0ZXMgPSB0aGlzLm9wdGlvbnMuc3RhdGVzO1xuICAgICAgLy8gbWFwcyBldmVyeSBzdGF0ZSB0byBhIG51bWVyaWMgdmFsdWUgZm9yIHRoZSAnbGVmdCcgcHJvcGVydHksIHNvIHRoZSBzbGlkZWJ1dHRvbiBjYW4gYmUgcGxhY2VkIHByb3BvcnRpb25hbGx5IGNvcnJlY3RcbiAgICAgIHN0YXRlU3R5bGVNYXAgPSB7fTtcbiAgICAgIC8vIGNhbGMgaG93IG11Y2ggd2UgbmVlZCB0byBtb3ZlIGxlZnQvcmlnaHQgdG8gY2hhbmdlIHN0YXRlXG4gICAgICBzdGF0ZUxlbmd0aCA9IDEwMCAvIChzdGF0ZXMubGVuZ3RoKTtcbiAgICAgIC8vIHRoZSBiYXIgd2hlcmUgc2xpZGluZyBvdmVyIGlzIHBvc3NpYmxlXG4gICAgICBzbGlkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgJChzbGlkZWJhcikuYWRkQ2xhc3MoJ2M0Zy1wYW5lbC1zbGlkZWJhcicpO1xuICAgICAgLy8gdGhlIGNsaWNrYWJsZSBlbGVtZW50IHRvIG1vdmUgdGhlIHNsaWRlclxuICAgICAgc2xpZGVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICQoc2xpZGVidXR0b24pLmFkZENsYXNzKCdjNGctcGFuZWwtc2xpZGVidXR0b24nKTtcbiAgICAgIHNsaWRlYmFyLmFwcGVuZENoaWxkKHNsaWRlYnV0dG9uKTtcbiAgICAgIC8vIHN0YXJ0IHN0YXRlXG4gICAgICBkZWZhdWx0U3RhdGUgPSBzdGF0ZXNbdGhpcy5vcHRpb25zLmRlZmF1bHRTdGF0ZV07XG4gICAgICBjdXJyZW50U3RhdGVJZCA9IHRoaXMub3B0aW9ucy5kZWZhdWx0U3RhdGU7XG5cbiAgICAgIC8vIGJ1aWxkIHVwIG1hcFxuICAgICAgZm9yIChpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdGF0ZVN0eWxlTWFwW3N0YXRlc1tpXV0gPSBpICogc3RhdGVMZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlYmFyLnN0eWxlLndpZHRoID0gKHN0YXRlcy5sZW5ndGggKiAxMCkgKyAnJSc7XG4gICAgICBzbGlkZWJ1dHRvbi5zdHlsZS5sZWZ0ID0gc3RhdGVTdHlsZU1hcFtkZWZhdWx0U3RhdGVdICsgJyUnO1xuICAgICAgc2xpZGVidXR0b24uaW5uZXJIVE1MID0gZGVmYXVsdFN0YXRlO1xuXG4gICAgICAvLyBzZXQgbWluIGRlbHRhIHRvIG5vdCBhbHdheXMgdHJpZ2dlciBzdGF0ZSBjaGFuZ2VcbiAgICAgIGRlbHRhWCA9IDEwO1xuICAgICAgLy8gY2hhbmdlcyB0aGUgc3RhdGUgb2YgdGhlIHNsaWRlYnV0dG9uXG4gICAgICBjaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlSWQsIG5ld1gpIHtcbiAgICAgICAgaWYgKHN0YXRlSWQgPiBzdGF0ZXMubGVuZ3RoIC0gMSB8fCBzdGF0ZUlkIDwgMCkge1xuICAgICAgICAgIC8vIGludmFsaWQgc3RhdGVJZFxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzbGlkZWJ1dHRvbi5zdHlsZS5sZWZ0ID0gc3RhdGVTdHlsZU1hcFtzdGF0ZXNbc3RhdGVJZF1dICsgJyUnO1xuICAgICAgICBzbGlkZWJ1dHRvbi5pbm5lckhUTUwgPSBzdGF0ZXNbc3RhdGVJZF07XG4gICAgICAgIGN1cnJlbnRTdGF0ZUlkID0gc3RhdGVJZDtcbiAgICAgICAgY3VycmVudEN1cnNvclggPSBuZXdYO1xuICAgICAgfTtcblxuICAgICAgLy8gYnVpbGQgdXAgY2xpY2sgaGFuZGxlclxuICAgICAgJHNsaWRlYnV0dG9uID0gJChzbGlkZWJ1dHRvbik7XG4gICAgICBjdXJyZW50Q3Vyc29yWCA9IDA7XG5cbiAgICAgICRzbGlkZWJ1dHRvbi5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGRvY0JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIHNhdmUgY3VycmVudCBjdXJzb3IgcG9zaXRpb25cbiAgICAgICAgY3VycmVudEN1cnNvclggPSBldmVudC5wYWdlWDtcblxuICAgICAgICAvLyBtb3ZlIHNsaWRlciBvbiBtb3VzZW1vdmVcbiAgICAgICAgJHNsaWRlYnV0dG9uLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAoKGV2ZW50LnBhZ2VYID4gY3VycmVudEN1cnNvclgpICYmIChldmVudC5wYWdlWCAtIGN1cnJlbnRDdXJzb3JYID4gZGVsdGFYKSkge1xuICAgICAgICAgICAgLy8gbW92ZWQgcmlnaHRcbiAgICAgICAgICAgIGNoYW5nZVN0YXRlKGN1cnJlbnRTdGF0ZUlkICsgMSwgZXZlbnQucGFnZVgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoKGV2ZW50LnBhZ2VYIDwgY3VycmVudEN1cnNvclgpICYmIChjdXJyZW50Q3Vyc29yWCAtIGV2ZW50LnBhZ2VYID4gZGVsdGFYKSkge1xuICAgICAgICAgICAgLy8gbW92ZWQgbGVmdFxuICAgICAgICAgICAgY2hhbmdlU3RhdGUoY3VycmVudFN0YXRlSWQgLSAxLCBldmVudC5wYWdlWCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gdW5zZXQgbW92ZSBsaXN0ZW5lclxuICAgICAgICAkKGRvY0JvZHkpLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAkc2xpZGVidXR0b24ub2ZmKCdtb3VzZW1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gZW5kIGNsaWNraGFuZGxlclxuXG4gICAgICAvLyBjcmVhdGUgZ2V0dGVyIGZvciBjdXJyZW50IHZhbHVlXG4gICAgICB0aGlzLmdldFZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZXNbY3VycmVudFN0YXRlSWRdO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHNsaWRlYmFyO1xuICAgIH0sIC8vZW5kIG9mIFwiY3JlYXRlU2xpZGVyKClcIlxuXG4gICAgYXR0YWNoTGlzdGVuZXI6IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAoIXR5cGUgfHwgIWxpc3RlbmVyIHx8IHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2Nhbm5vdCBhdHRhY2ggZXZlbnQgbGlzdGVuZXIgd2l0aG91dCBlbm91Z2ggcGFyYW1ldGVycy4uLicpO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMuZWxlbWVudCkub24odHlwZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSk7XG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtbWlzYy1wYW5lbGJ1dHRvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=