// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};
this.c4g.maps.control.starboardplugin = this.c4g.maps.control.starboardplugin || {};

(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @extends {ol.control.Control}
   * @param   {object}              starboard
   */
  c4g.maps.control.starboardplugin.Baselayerswitcher = function (starboard) {
    if (!starboard) {
      console.warn('Cannot initialize Baselayerswitcher without a starboard.');
      return false;
    }

    this.initialized = false;
    this.baselayers = {};

    this.starboard = starboard;
    this.proxy = starboard.options.mapController.proxy;

    this.create();
    this.loadContent();
  };

  // Add methods
  c4g.maps.control.starboardplugin.Baselayerswitcher.prototype = $.extend(c4g.maps.control.starboardplugin.Baselayerswitcher.prototype, {

    /**
     * @TODO: [create description]
     *
     * @return  {[type]}  [description]
     */
    create: function () {
      var self,
          contentWrapper,
          contentHeadline,
          contentInfo;

      self = this;

      contentWrapper = document.createElement('div');

      contentHeadline = document.createElement('h4');
      contentHeadline.innerHTML = (this.starboard.options.baselayerSwitcherTitle || c4g.maps.constant.i18n.STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER);
      contentWrapper.appendChild(contentHeadline);

      this.contentDiv = document.createElement('div');
      this.contentDiv.className = c4g.maps.constant.css.STARBOARD_CONTENT_BASELAYERSWITCHER;
      contentInfo = document.createElement('p');
      this.contentDiv.appendChild(contentInfo);
      contentWrapper.appendChild(this.contentDiv);

      self.view = self.starboard.addView({
        name: 'layerswitcher',
        triggerConfig: {
          tipLabel: (this.starboard.options.baselayerSwitcherTitle || c4g.maps.constant.i18n.STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER),
          className: c4g.maps.constant.css.STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER
        },
        sectionElements: [
          {section: self.starboard.contentContainer, element: contentWrapper},
          {section: self.starboard.bottomToolbar, element: self.starboard.viewTriggerBar}
        ]
      });
    },

    /**
     * @TODO: [activate description]
     *
     * @return  {[type]}  [description]
     */
    activate: function () {
      this.view.activate();
    },

    /**
     * @TODO: [setContent description]
     *
     * @param  {[type]}  newContent  [description]
     */
    setContent: function (newContent) {
      if (newContent) {
        if (typeof newContent === "string") {
          this.contentDiv.innerHTML = newContent;
        } else {
          try {
            if (this.contentDiv.firstChild) {
              this.contentDiv.replaceChild(newContent, this.contentDiv.firstChild);
            } else {
              this.contentDiv.appendChild(newContent);
            }
          } catch (e) {
            // @TODO
            console.warn(e.message);
            // return false;
          }
        }
      }
      return this.contentDiv.innerHTML;
    },

    loadContent: function () {
      var self,
          fnDrawContent;

      self = this;
      this.starboard.spinner.show();

      fnDrawContent = function (baselayerIds) {
        self.baseLayerControl = document.createElement('div');
        $(self.baseLayerControl).addClass(c4g.maps.constant.css.STARBOARD_BASELAYERTREE);
        self.setContent(self.baseLayerControl);

        self.addItems(baselayerIds, self.baseLayerControl);

        self.initialized = true;
        self.starboard.spinner.hide();
        self.starboard.update();
      } // end of "fnDrawContent()"

      if (this.proxy.baselayers_loaded) {
        fnDrawContent(this.proxy.baselayerIds);
      } else {
        this.proxy.hook_baselayer_loaded.push(fnDrawContent);
      }
    }, // end of "loadContent()"

    /**
     * @TODO: [drawContent description]
     *
     * @param   {[type]}  contentData  [description]
     */
    drawContent: function (contentData) {
      // PASS
    }, // end of "drawContent()"

    /**
     * @TODO: [addItems description]
     *
     * @param  {[type]}  itemData        [description]
     * @param  {[type]}  wrapperElement  [description]
     * @param  {[type]}  options         [description]
     */
    addItems: function (itemData, wrapperElement, options) {
      var i,
          self,
          wrapper,
          item,
          uid,
          listItem,
          entry,
          $entry,
          handleEntryClick,
          handleChangeBaselayerVisibility;

      self = this;

      if (typeof options !== "object") {
        options = {
          parseAsList: true
        };
      }

      handleEntryClick = function (event) {
        var itemUid,
            baselayerItem;

        event.preventDefault();
        itemUid = $(this).data('uid');

        if (self.proxy.activeBaselayerId !== itemUid) {
          self.proxy.showBaseLayer(itemUid);
        }
      }; // end of "handleEntryClick()"

      handleChangeBaselayerVisibility = function (baselayerConfig) {
        var id;

        for (id in self.baselayers) {
          if (self.baselayers.hasOwnProperty(id)) {
            if (id === baselayerConfig.id) {
              self.baselayers[id].$entry.addClass(c4g.maps.constant.css.ACTIVE).removeClass(c4g.maps.constant.css.INACTIVE);
            } else {
              self.baselayers[id].$entry.addClass(c4g.maps.constant.css.INACTIVE).removeClass(c4g.maps.constant.css.ACTIVE);
            }
          }
        }
      };

      wrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');

      if (itemData.length > 0) {
        for (i = 0; i < itemData.length; i += 1) {

          uid = itemData[i];
          this.baselayers[uid] = {};

          listItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
          this.baselayers[uid].entryWrapper = listItem;

          entry = document.createElement('a');
          entry.setAttribute('href', '#');

          entry.appendChild(document.createTextNode(c4g.maps.baselayers[uid].name));
          listItem.appendChild(entry);

          $entry = $(entry);
          this.baselayers[uid].$entry = $entry;

          if (this.starboard.options.mapController.data.default_baselayer && parseInt(uid, 10) === parseInt(this.starboard.options.mapController.data.default_baselayer, 10)) {
            $entry.addClass(c4g.maps.constant.css.ACTIVE);
          } else {
            $entry.addClass(c4g.maps.constant.css.INACTIVE);
          }

          $entry.data('uid', uid);
          $entry.click(handleEntryClick);

          wrapper.appendChild(listItem);
        }
        this.proxy.hook_baselayer_visibility.push(handleChangeBaselayerVisibility);
      }
      wrapperElement.appendChild(wrapper);
    } // end of "addItems()"

  }); // end of "add methods"

}(jQuery, this.c4g));