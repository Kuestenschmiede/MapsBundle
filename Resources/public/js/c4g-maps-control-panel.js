// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

(function($, c4g) {

  'use strict';
  /**
   *
   * @param options
   * @param opt_buttons Array[c4g.maps.misc.Panelbutton]
   * @constructor
   */
  c4g.maps.control.Panel = function(options, opt_buttons) {
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

    switch(this.options.direction) {
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
    create: function() {
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

    update: function() {

    },// end of update()

    open: function() {
      var containerOffsetHeight,
          scope,
          newStarboardHeight,
          curStarboardHeight,
          newPortsideHeight,
          curPortsideHeight,
          starboard,
          portside;

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

      var resizePortsideOpen = function() {
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
    },// end of open()

    close: function() {
      var containerOffsetHeight,
          scope,
          newStarboardHeight,
          newPortsideHeight,
          curPortsideHeight,
          starboard,
          portside;

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

      var resizePortsideClose = function() {
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

    toggle: function() {
      if ($(this.container).hasClass(c4g.maps.constant.css.CLOSE)) {
        this.open();
      } else {
        this.close();
      }
    }, // end of "toggle()"

    isFormNeeded: function() {
      var key,
          button;

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
}(jQuery, this.c4g));
