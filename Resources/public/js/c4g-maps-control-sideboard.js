/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

import {utils} from "./c4g-maps-utils";
import {cssConstants} from "./c4g-maps-constant";
import {Spinner} from "./c4g-maps-misc-spinner";
import {getLanguage} from "./c4g-maps-i18n";
"use strict";
/**
 * Base class for sideboard structures. Provides standard configurations which are equal for each sideboard element.
 */
export class Sideboard extends ol.control.Control {

  /**
   * Constructor
   *
   * @extends {ol.control.Control}
   * @param   {object}              options  misc configuration options
   *
   */
  constructor(options) {
    super(options);
    this.options = jQuery.extend({
      create: true,
      extDiv: false,
      defaultOpen: false,
      mapController: undefined,
      name: 'sideboard',
      direction: 'right',
    }, options);
    this.langConstants = getLanguage(this.options.mapController.data);

    //active Identifier (which side is this element on?)
    //cssname needed to set the css class correctly
    switch (this.options.direction) {
      case 'left':
        this.identifier = 'Portside';
        this.cssname = 'portside';
        break;
      case 'right':
        this.identifier = 'Starboard';
        this.cssname = 'starboard';
        break;
    }
    //this.cssname = this.identifier.charAt(0).toLowerCase() + this.identifier.slice(1);
    this.initialized = false;
    this.options.tipLabel = this.options.tipLabel || this.options.headline || this.langConstants.CTRL_SIDEBOARD;
    this.container = document.createElement('div');
    this.element = document.createElement('div');
    this.button = undefined;
    this.spinner = undefined;
    // mainstructure elements
    this.wrapper = undefined;
    this.titleBar = undefined;
    this.headline = undefined;
    this.topToolbar = undefined;
    this.contentContainer = undefined;
    this.bottomToolbar = undefined;
    this.statusBar = undefined;

    this.sections = [];
    this.viewTriggerBar = undefined;
    this.views = [];
    this.activeView = undefined;
    this.pausedView = undefined;

    if (this.options.create && this.options.mapController) {
      this.create();
    }

    // inheritance-stuff
    // ol.control.Control.call(this, {
    //   element: element,
    //   target: options.target
    // });
  };

  /**
   * Creates the basic html-elements for the sideboard
   *
   * @return  {boolean}  'true' on success
   */
  create () {
    var self,
      initClass,
      titleButtonBar,
      closeButton,
      capitalizedName,
      hideButton,
      caching;

    caching = this.options.caching;
    capitalizedName = utils.capitalizeFirstLetter(this.options.name);
    self = this;


    // Do not hide when it is initialized open, or in an external div
    if (this.options.extDiv) {
      initClass = ' ' + cssConstants.OPEN;
      // if (caching) {
      //     utils.storeValue(this.options.name, '1');
      // }
    } else {
      initClass = ' ' + cssConstants.CLOSE;
      // if (caching) {
      //     utils.storeValue(this.options.name, '0');
      // }
      this.options.mapController["active" + this.identifier] = this.options.mapController["active" + this.identifier] || false;

      this.button = document.createElement('button');
      jQuery(this.button).on('click', function (event) {
        event.stopPropagation();
        // loose focus, otherwise it looks messy
        try {
          this.blur();
        } catch (e) {
          // [note] "this.blur()" does not work in IE-fullscreen-mode
          console.warn(e.name + ': ' + e.message);
        }
        if(capitalizedName === "Router" || capitalizedName === "Measure" || capitalizedName === "Editor"){
          self.toggle(true);
        }
        else{
          self.toggle();
        }
      });
      this.button.title = this.options.tipLabel;
      this.element.appendChild(this.button);
    }

    // Set attributes
    jQuery(this.container).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-container' + ' ' + cssConstants.OL_UNSELECTABLE + initClass);
    jQuery(this.element).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-control' + ' ' + cssConstants.OL_UNSELECTABLE + ' ' + cssConstants.OL_CONTROL + initClass);

    // Set initial dimensions
    if (this.options.direction === 'right') {
      //this.container.style.minWidth = '250px';
      //this.container.style[this.options.direction] = '-1920px';
      this.container.style[this.options.direction] = '-100%';
    } else {
      //this.container.style.minWidth = '250px';
      //this.container.style[this.options.direction] = '-1920px';
      this.container.style[this.options.direction] = '-100%';
    }

    // Place container
    if (this.options.extDiv) {
      document.getElementById(this.options.extDiv).appendChild(this.container);
      //     this.options.mapController["active" + this.identifier] = this;
    } else {
      if (this.options.direction === 'left') {
        jQuery('#' + this.options.mapController.map.getTarget() + ' > div > div.' + cssConstants.OL_OVERLAYCONTAINER_SE).append(this.container);
      } else {
        this.options.mapController.$overlaycontainer_stopevent.append(this.container);
      }
    }

    // Build content-area
    //
    // Wrapper
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'c4g-' + this.cssname + '-wrapper';
    this.container.appendChild(this.wrapper);
    // Titlebar
    this.titleBar = document.createElement('div');
    this.titleBar.className = 'c4g-' + this.cssname + '-titlebar';
    this.wrapper.appendChild(this.titleBar);

    // Triggerbar
    this.viewTriggerBar = document.createElement('div');
    this.viewTriggerBar.className = 'c4g-' + this.cssname + '-viewtriggerbar';

    // Top-Toolbar
    this.topToolbar = this.addSection({
      className: 'c4g-' + this.cssname + '-top-toolbar',
      target: this.wrapper
    });

    // Content-Container
    this.contentContainer = this.addSection({
      className: 'c4g-' + this.cssname + '-content-container',
      target: this.wrapper
    });

    // add content headline
    this.contentHeadline = document.createElement('div');
    this.contentHeadline.className = 'contentHeadline';
    this.contentHeadline.innerHTML = '';
    this.contentContainer.appendChild(this.contentHeadline);

    // Bottom-Toolbar
    this.bottomToolbar = this.addSection({
      className: 'c4g-' + this.cssname + '-bottom-toolbar c4g-close',
      target: this.wrapper
    });

    // Statusbar
    this.statusBar = document.createElement('div');
    this.statusBar.className = 'c4g-' + this.cssname + '-statusbar c4g-close';
    this.wrapper.appendChild(this.statusBar);

    // Add spinner
    this.spinner = new Spinner({
      target: this.contentContainer,
      className: cssConstants.LARGE
    });

    // Fill titlebar
    //
    // Headline
    this.headline = document.createElement('span');
    this.headline.className = 'c4g-' + this.cssname + '-headline';
    this.headline.innerHTML = this.options.headline;
    this.titleBar.appendChild(this.headline);
    // Buttonbar
    titleButtonBar = document.createElement('div');
    titleButtonBar.className = cssConstants.CONTROL + ' ' + 'c4g-' + this.cssname + '-buttonbar';
    this.titleBar.appendChild(titleButtonBar);

    if (this.options.direction === 'left') {
      // Hidebutton
      hideButton = document.createElement('button');
      hideButton.className = cssConstants.PORTSIDE_HIDE;
      hideButton.title = this.langConstants.HIDE;
      jQuery(hideButton).click(function (event) {
        event.preventDefault();
        self.close(true);
        return false;
      });
      titleButtonBar.appendChild(hideButton);
    }

    // Closebutton
    closeButton = document.createElement('button');
    closeButton.className = 'c4g-' + this.cssname + '-close';
    closeButton.title = this.langConstants.CLOSE;
    jQuery(closeButton).click(function (event) {
      event.preventDefault();
      self.close();
      return false;
    });
    titleButtonBar.appendChild(closeButton);

    //Add spinner for left sided sideboard elements
    this.spinner = new Spinner({
      target: this.contentContainer,
      className: cssConstants.LARGE
    });

    // Handle external DIV and default state
    // catch touch events and stop their propagation
    // otherwise touch-scrolling will be stopped by ol3
    jQuery(this.container).on('touchstart touchmove touchend', function (event) {
      event.stopPropagation();
    });

    // Bind the update method to the map-resize event
    this.options.mapController.map.on('change:size', this.update, this);

    // Show open if desired
    // if ((this.options.defaultOpen) || (this.options.caching && (utils.getValue(this.options.name) == '1'))) {
    //   this.open();
    // }

    return true;
  } // end of "create"

  /**
   *   Update the sideboards html-elements
   *   resizes the content-container
   *   and the top-toolbar
   *
   * @param  {event-object}  opt_event  *optional*  Just needed by the ol-bind-method,
   *                                                but not used in the function
   */
  update(opt_event) {

    var self,
      contentContainerOuterHeight,
      containerOffsetWidth;

    self = this;

    /*
    if (this.options && this.options.name) {
        capitalizedName = utils.capitalizeFirstLetter(this.options.name);
    }*/

    contentContainerOuterHeight = jQuery(this.wrapper).height() - (jQuery(this.titleBar).outerHeight(true) + jQuery(this.statusBar).outerHeight(true));
    if (this.options && this.options.direction && this.options.direction !== "undefined" && this.options.direction === 'left') {
      if (this !== this.options.mapController["active" + this.identifier]) {
        containerOffsetWidth = 0;
      }
    }

    // Top-Toolbar
    if (this.topToolbar) {
      if (this.topToolbar.innerHTML) {
        // this.topToolbar.style.display = 'block';
        this.topToolbar.style.display = '';
        contentContainerOuterHeight -= jQuery(this.topToolbar).outerHeight(true);
      } else {
        this.topToolbar.style.display = 'none';
      }
    }

    // Bottom-toolbar
    if (this.bottomToolbar) {
      if (this.bottomToolbar.innerHTML) {
        // this.bottomToolbar.style.display = 'block';
        this.bottomToolbar.style.display = '';
        contentContainerOuterHeight -= jQuery(this.bottomToolbar).outerHeight(true);
      } else {
        this.bottomToolbar.style.display = 'none';
      }
    }

    // Content-container
    jQuery(this.contentContainer).outerHeight(contentContainerOuterHeight);

    // Correct width
    if (this.options) {
      if (this.options.mapController["active" + this.identifier] === this) {
        //this.container.style.width = 'auto';
        containerOffsetWidth = this.container.offsetWidth;
        this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
          jQuery(element).css(self.options.direction, containerOffsetWidth);
        });

        //only move the toggle button on starboard elements
        if (this.options.direction === 'right') {
          jQuery(this.element).css(this.options.direction, containerOffsetWidth);
        }

      }
    }

  } // end of "update"

  /**
   * Opens this sideboard element
   *
   * @param   {object}    *optional* options to be passed to the initialize-function if it exists
   * @return  {boolean}  'true' an success
   */
  open(opt_options) {
    var containerOffsetWidth,
      self;

    self = this;

    // Call initialize-functions, if existent
    if (!this.initialized) {
      if (typeof this.init === 'function') {
        this.initialized = this.init(opt_options);
      } else {
        this.initialized = true;
      }
    }

    // call preOpenFunctions
    if (typeof this.preOpenFunction === 'function') {
      this.preOpenFunction();
    }

    containerOffsetWidth = this.container.offsetWidth;

    if (this.options.extDiv) {
      // Not available on external divs
      console.warn('You cannot use this function on external embedded sideboard.');
    } else {
      if (this.options.mapController["active" + this.identifier]) {
        if (this.options.mapController["active" + this.identifier] === this) {
          return false;
        }
        //close other active sideboard on this side
        this.options.mapController["active" + this.identifier].close(true, true);
      } else {
        // slide other elements when no other sideboard was active on this side
        this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
          jQuery(element).css(self.options.direction, containerOffsetWidth);
        });
      }

      jQuery(this.container).removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN).css(this.options.direction, 0);
      if (this.options.direction === 'left') {
        jQuery(this.element).removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN);
      } else {
        jQuery(this.element).removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN).css(this.options.direction, containerOffsetWidth);
      }

      // set this as active Sideboard
      this.options.mapController["active" + this.identifier] = this;

      // check if a view needs to be reactivated
      if (this.activeView) {
        this.activeView.activate();
      }

      if (jQuery(this.statusBar).hasClass(cssConstants.CLOSE)) {
        jQuery(this.statusBar).removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN);
      }

      if (jQuery(this.bottomToolbar).hasClass(cssConstants.CLOSE)) {
        jQuery(this.bottomToolbar).removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN);
      }

      // show container to fix resizing issue
      jQuery(this.container).css('visibility', 'visible');

      this.update();
      if (this.options.caching) {
        utils.storeValue(this.options.name, '1');
      }

      // call postOpenFunctions
      if (typeof this.postOpenFunction === 'function') {
        this.postOpenFunction();
      }

      return true;
    }
    return false;
  } // end of "open"

  isOpen() {
    return (this.options.mapController["active" + this.identifier] && this.options.mapController["active" + this.identifier] === this);
  }

  /**
   * Closes this sideboard element
   *
   * @param   {boolean}  opt_hide               *optional* Choose if this function should trigger |preHideFunction|
   *                                            instead of |preCloseFunction|. Default is |false|.
   * @param   {boolean}  opt_openOtherSideboard  *optional* Indicates if another sideboard element will be opened instead.
   *                                            Default is |false|.
   *
   * @return  {boolean}                         |true| on success.
   */
  close (opt_hide, opt_openOtherSideboard) {
    var containerOffsetWidth,
      direction;

    direction = this.options.direction;

    if (opt_hide && !opt_openOtherSideboard) {
      if (typeof this.preHideFunction === 'function') {
        this.preHideFunction();
      }
    } else {
      if (typeof this.preCloseFunction === 'function') {
        this.preCloseFunction();
      }
    }

    containerOffsetWidth = this.container.offsetWidth;

    if (this.options.extDiv) {
      // Not available on external divs
      console.warn('You cannot use this function on external embedded sideboard.');
    } else {
      if (this.options.mapController["active" + this.identifier] !== this) {
        console.warn('This ' + this.options.name + '-element (' + this.options.name + ') is already closed.');
        return false;
      }
      jQuery(this.container).removeClass(cssConstants.OPEN).addClass(cssConstants.CLOSE).css(direction, -containerOffsetWidth);
      jQuery(this.element).removeClass(cssConstants.OPEN).addClass(cssConstants.CLOSE).css(direction, 0);

      if (!opt_openOtherSideboard) {
        // slide other elements
        this.options.mapController[direction + "SlideElements"].forEach(function (element) {
          jQuery(element).css(direction, 0);
        });
      }

      // hide container to fix resizing issue
      jQuery(this.container).css('visibility', 'hidden');

      // check if a view needs to be deactivated
      if (this.activeView) {
        this.activeView.deactivate(opt_hide && !opt_openOtherSideboard);
      }

      // Remove active Sideboardentry
      this.options.mapController["active" + this.identifier] = false;

      if (this.options.caching) {
        utils.storeValue(this.options.name, '0');
      }
      return true;
    }
    return false;
  } // end of "close"

  /**
   * Toggle this sideboard element
   *
   * @return  {boolean}  Returns |true| on success.
   */
  toggle(opt_hide) {
    if (this.options.mapController["active" + this.identifier] === this) {
      return this.close(opt_hide);
    }
    return this.open();
  } // end of "toggle"

  /**
   * Creates a button which characteristics are defined by the options parameter
   * These options include e.g. the target container where the button will be appended and the click action of the button
   *
   * @param   {object}  opt_options  The button configuration
   *
   * @return  {[type]}           [description]
   */
  makeButton(opt_options) {

    var options,
      button;

    options = jQuery.extend({
      label: undefined,
      tipLabel: undefined,
      className: '',
      target: undefined,
      clickAction: undefined
    }, opt_options);

    if (options.className) {
      options.className = ' ' + options.className;
    }

    button = document.createElement('button');
    button.className = 'c4g-' + this.options.name + '-button' + options.className;
    if(options.id) {
      button.id = options.id;
    }

    if (typeof options.tipLabel === 'string') {
      button.title = options.tipLabel;
    }

    if (typeof options.label === 'string') {
      button.innerHTML = options.label;
    } else if (typeof options.label === 'object') {
      button.appendChild(options.label);
    }

    if (typeof options.clickAction === 'function') {
      jQuery(button).click(function () {
        try {
          this.blur();
        } catch (e) {
          console.warn(e.message);
        }
        options.clickAction();
      });
    }

    if (options.target) {
      jQuery(options.target).append(button);
    }

    return button;
  } // end of "makeButton"

  /**
   * @TODO
   * [addSection description]
   *
   * @param  {[type]}  opt_options  [description]
   */
  addSection(opt_options) {

    var options,
      section,
      element;

    options = jQuery.extend({
      type: 'div',
      className: '',
      target: undefined
    }, opt_options);

    // try to create the new section
    try {
      section = document.createElement(options.type);
    } catch (e) {
      console.warn('Cannot create section. "' + options.type + ' is not a valid HTML-node.');
      return false;
    }

    section.className = options.className;

    // try to append the section to the given target
    if (options.target) {
      try {
        options.target.appendChild(section);
      } catch (e) {
        console.warn(e.message);
      }
    }

    section.getElement = function () {
      return element || false;
    };

    section.setElement = function (newElement) {
      if (newElement && typeof newElement === 'object') {
        if (!(element && element === newElement)) {
          if (element) {
            this.removeChild(element);
          }
          this.appendChild(newElement);
          element = newElement;
        }
      }
    };


    // add to sections-array
    this.sections.push(section);
    return section;
  } // end of "addSection"

  /**
   * @TODO
   * [addView description]
   *
   * @param  {[type]}  options  [description]
   */
  addView(options, opt_viewScope) {

    var self,
      viewScope,
      additionalTriggerClass,
      trigger,
      view;

    self = this;
    viewScope = opt_viewScope || this;

    options = jQuery.extend({
      // name: undefined,
      triggerConfig: undefined, // @TODO doku format: {opt_target: [string|htmlObject], opt_className: [string], opt_tipLabel: [string]}
      sectionElements: [], // @TODO doku format: [{section: [sectionObject], element: [elementObject]}]
      initFunction: undefined,
      activateFunction: undefined,
      deactivateFunction: undefined
    }, options);

    if (typeof options.name !== 'string') {
      console.warn('Cannot add a view without a name (of type "string").');
      return false;
    }

    view = {};

    view.initialized = false;
    view.paused = false;

    view.activate = function (opt_openSideboard) {
      var i;

      if (options.triggerConfig.withHeadline) {
        self.contentHeadline.innerHTML = options.triggerConfig.tipLabel;
      }

      // open Sideboard if closed
      if (opt_openSideboard && !self.isOpen()) {
        self.open();
      }

      // Deactivate current activeView, if existent
      if (typeof viewScope.activeView === 'object' && viewScope.activeView !== view) {
        viewScope.activeView.deactivate();
      }
      viewScope.activeView = view;

      // Handle sub-views
      if (view.activeView) {
        view.activeView.activate();
      }

      // Call initialize-functions, if existent
      if (!view.initialized) {
        if (typeof options.initFunction === 'function') {
          view.initialized = options.initFunction();
        } else {
          view.initialized = true;
        }
      }

      // Display elements in given sections
      if (options.sectionElements && options.sectionElements.length > 0) {
        for (i = 0; i < options.sectionElements.length; i += 1) {
          options.sectionElements[i].section.setElement(options.sectionElements[i].element);
        }
      }

      // Change trigger-state, if existent
      if (trigger) {
        jQuery(trigger).addClass('c4g-active');
      }

      // Call activate function, if existent
      if (typeof options.activateFunction === 'function') {
        if (!options.activateFunction(view.paused)) {
          return false;
        }
      }

      view.paused = false;
      self.update();
      return true;
    };

    view.deactivate = function (opt_pause) {

      view.paused = opt_pause || false;

      if (typeof viewScope.activeView === 'object' && viewScope.activeView === view) {
        if (trigger && !view.paused) {
          jQuery(trigger).removeClass('c4g-active');
        }

        // Handle sub-views
        if (view.activeView) {
          view.activeView.deactivate(view.paused);
        }

        // Call deactivate function, if existent
        if (typeof options.deactivateFunction === 'function') {
          return options.deactivateFunction(view.paused);
        }
      }

      return true;
    };


    if (typeof options.triggerConfig === 'object') {
      options.triggerConfig = jQuery.extend({
        target: this.viewTriggerBar,
        tipLabel: options.name,
      }, options.triggerConfig);

      options.triggerConfig.clickAction = view.activate;
      if (options.triggerConfig.className) {
        additionalTriggerClass = ' ' + options.triggerConfig.className;
      } else {
        additionalTriggerClass = '';
      }
      options.triggerConfig.className = cssConstants.ICON + additionalTriggerClass;
      trigger = this.makeButton(options.triggerConfig);
    }

    this.views.push(view);
    return view;
  } // end of "addView"

} // end of "add methods"