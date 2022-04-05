/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.misc = this.c4g.maps.misc || {};

(function(jQuery, c4g){

  c4g.maps.misc.Panelbutton = function(options) {

    this.options = jQuery.extend({
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

  c4g.maps.misc.Panelbutton.prototype = jQuery.extend(c4g.maps.misc.Panelbutton.prototype, {

    create: function() {

      var scope = this;

      switch (this.options.type) {
        case 'button':
          this.element = document.createElement('button');
          this.element.innerHTML = this.options.label;
          if (this.options.eventlistener && this.options.eventlistener.eventtype && this.options.eventlistener.listener
            && typeof this.options.eventlistener.listener === 'function') {
            jQuery(this.element).on(this.options.eventlistener.eventtype, scope.options.eventlistener.listener);
          }
          break;
        case 'input':
          this.element = document.createElement('input');
          this.element.placeholder = this.options.label;
          if (this.options.eventlistener && this.options.eventlistener.eventtype && this.options.eventlistener.listener) {
            jQuery(this.element).on(this.options.eventlistener.eventtype, this.options.eventlistener.listener);
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

    getSection: function() {
      return this.options.location;
    },

    getElement: function() {
      return this.element;
    },

    createSlider: function() {
      var states,
          stateStyleMap,
          stateLength,
          slidebar,
          slidebutton,
          defaultState,
          currentStateId,
          i,
          deltaX,
          changeState,
          $slidebutton,
          currentCursorX;

      // states has to be an array with the values to be displayed and slid over
      // the order of the array will determine which values are displayed from left to right
      // e.g. ['0,5km', '1km', '2km']
      states = this.options.states;
      // maps every state to a numeric value for the 'left' property, so the slidebutton can be placed proportionally correct
      stateStyleMap = {};
      // calc how much we need to move left/right to change state
      stateLength = 100 / (states.length);
      // the bar where sliding over is possible
      slidebar = document.createElement('div');
      jQuery(slidebar).addClass('c4g-panel-slidebar');
      // the clickable element to move the slider
      slidebutton = document.createElement('button');
      jQuery(slidebutton).addClass('c4g-panel-slidebutton');
      slidebar.appendChild(slidebutton);
      // start state
      defaultState = states[this.options.defaultState];
      currentStateId = this.options.defaultState;

      // build up map
      for (i = 0; i < states.length; i++) {
        stateStyleMap[states[i]] = i * stateLength;
      }

      slidebar.style.width = (states.length * 10) + '%';
      slidebutton.style.left = stateStyleMap[defaultState] + '%';
      slidebutton.innerHTML = defaultState;

      // set min delta to not always trigger state change
      deltaX = 10;
      // changes the state of the slidebutton
      changeState = function(stateId, newX) {
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
      $slidebutton = jQuery(slidebutton);
      currentCursorX = 0;

      $slidebutton.on('mousedown', function(event) {
        var docBody = document.querySelector('body');
        event.preventDefault();
        // save current cursor position
        currentCursorX = event.pageX;

        // move slider on mousemove
        $slidebutton.on('mousemove', function handler(event) {
          event.preventDefault();
          if ((event.pageX > currentCursorX) && (event.pageX - currentCursorX > deltaX)) {
            // moved right
            changeState(currentStateId + 1, event.pageX);
          } else if ((event.pageX < currentCursorX) && (currentCursorX - event.pageX > deltaX)) {
            // moved left
            changeState(currentStateId - 1, event.pageX);
          }
        });
        // unset move listener
        jQuery(docBody).on('mouseup', function(event) {
          $slidebutton.off('mousemove');
        });
      }); // end clickhandler

      // create getter for current value
      this.getValue = function() {
        return states[currentStateId];
      };

      return slidebar;
    }, //end of "createSlider()"

    attachListener: function(type, listener) {
      if (!type || !listener || typeof listener !== 'function') {
        console.warn('cannot attach event listener without enough parameters...');
      }

      jQuery(this.element).on(type, listener);
    }
  });

}(jQuery, this.c4g));