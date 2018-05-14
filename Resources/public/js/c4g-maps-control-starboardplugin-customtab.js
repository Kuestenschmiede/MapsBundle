// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};
this.c4g.maps.control.starboardplugin = this.c4g.maps.control.starboardplugin || {};

(function ($, c4g) {
  'use strict';

  /**
   *
   * @param starboard
   * @param plugin
   * @param projectConf
   * @returns {boolean}
   * @constructor
   */
  c4g.maps.control.starboardplugin.Customtab = function (starboard, projectConf) {
    if (!starboard) {
      console.warn('Cannot initialize Project-tab without a starboard.');
      return false;
    }
    projectConf = $.extend({
      tabId: null,
      name: "Customtab",
      awesomeicon: ''
    }, projectConf);

    if (!projectConf.tabId) {
      console.warn('Cannot initialize Project-tab without an id.');
      return false;
    }


    this.initialized = false;
    //this.plugin = plugin || false;
    this.contentLoaded = false;
    this.starboard = starboard;
    this.proxy = starboard.options.mapController.proxy;
    this.map = this.proxy.options.mapController.map;
    this.layers = {};
    this.tabId = projectConf.tabId;
    this.name = projectConf.name;
    this.awesomeicon = projectConf.awesomeicon.replace('&#92;', "\\");
    starboard.plugins["customTab"+ this.tabId] = this;
    this.create();
  };

  // Add methods
  c4g.maps.control.starboardplugin.Customtab.prototype = $.extend(c4g.maps.control.starboardplugin.Customtab.prototype, {

    /**
     * @TODO: [create description]
     *
     * @return  {[type]}  [description]
     */
    create: function () {
      var self,
          contentWrapper,
          contentHeadline,
          selector;

      self = this;
      contentWrapper = document.createElement('div');

      contentHeadline = document.createElement('h4');
      contentHeadline.innerHTML = this.name || 'Starboardplugin';
      contentWrapper.appendChild(contentHeadline);

      this.contentDiv = document.createElement('div');
      this.contentDiv.className = 'c4g_starboardplugin_content';
      contentWrapper.appendChild(this.contentDiv);

      self.view = self.starboard.addView({
        name: self.name,
        triggerConfig: {
          tipLabel: self.name,
          className: 'c4g-starboard-view-trigger-starboardplugin-' + self.tabId
        },
        sectionElements: [
          {section: self.starboard.contentContainer, element: contentWrapper},
          {section: self.starboard.bottomToolbar, element: self.starboard.viewTriggerBar}
        ]
      });
      if (this.awesomeicon.substring(0, 1) === "\\") {
        this.awesomeicon = this.awesomeicon.substring(1, this.awesomeicon.length);
      }
      selector = 'button.c4g-starboard-view-trigger-starboardplugin-' + self.tabId;
      //ToDo möglicherweise standard icon ?
      if (this.awesomeicon.length > 0) {
        // catch firefox, because FF does not know "addRule"
        if (document.styleSheets[0].addRule && typeof document.styleSheets[0].addRule === 'function') {
          document.styleSheets[0].addRule(selector + ':before', 'content: "\\'+ this.awesomeicon +'";');
        } else {
          document.styleSheets[0].insertRule(selector + ':before { content: "\\'+ this.awesomeicon +'";}', 0);
        }

      }
      this.activate();
    },

    /**
     * @TODO: [activate description]
     *
     * @return  {[type]}  [description]
     */
    activate: function () {
      this.view.activate();
      if (!this.contentLoaded) {
        this.loadContent();
      }
    },

    /**
     * @TODO: [setContent description]
     *
     * @param  {Node}  newContent  [description]
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

    /**
     * @TODO: [loadContent description]
     *
     * @return  {[type]}  [description]
     */
    loadContent: function () {
      var self,
          fnDrawContent;

      self = this;
      this.starboard.spinner.show();

      fnDrawContent = function (layerIds) {
        self.treeControl = document.createElement('div');
        $(self.treeControl).addClass(c4g.maps.constant.css.STARBOARD_LAYERTREE);
        self.setContent(self.treeControl);
        self.addItems(layerIds, self.treeControl, {parseAsList: true});
        self.initialized = true;
        self.contentLoaded = true;
        self.starboard.spinner.hide();
        self.starboard.update();
      }; // end of "fnDrawContent()"

      fnDrawContent(this.proxy.layerIds);
    }, // end of "loadContent()"

    /**
     * @TODO: [addItems description]
     *
     * @param  {[type]}  itemData        [description]
     * @param  {[type]}  wrapperElement  [description]
     * @param  {[type]}  options         [description]
     */
    addItems: function (itemData, wrapperElement, options) {
      var i,
          wrapper,
          item,
          layer,
          uid,
          listItem,
          entry,
          $entry,
          handleEntryClick,
          self,
          pWrapper,
          toggle,
          childWrapper;

      options = options || {};
      options = $.extend({
        parseAsList: true
      }, options);

      self = this;

      handleEntryClick = function(event) {
        var itemUid;

        event.preventDefault();
        // "this" is the event sending entry
        itemUid = $(this).data('uid');
        if (self.proxy.activeLayerIds[itemUid]) {
          // hide layer
          $(this).removeClass(c4g.maps.constant.css.ACTIVE);
          $(this).addClass(c4g.maps.constant.css.INACTIVE);
          self.hideLayer(itemUid);
        } else {
          // show layer
          $(this).removeClass(c4g.maps.constant.css.INACTIVE);
          $(this).addClass(c4g.maps.constant.css.ACTIVE);
          self.showLayer(itemUid);
        }
      };

      // register hook to switch childs of layers as well
      this.proxy.hook_layer_visibility.push(function (layerId) {
        var j,
            changedLayer;

        changedLayer = self.layers[layerId];
        if (changedLayer && changedLayer.$entries) {
          for (j = 0; j < changedLayer.$entries.length; j += 1) {
            if (self.proxy.activeLayerIds[layerId]) {
              changedLayer.$entries[j].addClass(c4g.maps.constant.css.ACTIVE).removeClass(c4g.maps.constant.css.INACTIVE);
            } else {
              changedLayer.$entries[j].addClass(c4g.maps.constant.css.INACTIVE).removeClass(c4g.maps.constant.css.ACTIVE);
            }
          }
        }
      }); // end of hook

      // add hook function for changed zoom
      //   needed to change the entry-classes
      this.proxy.hook_map_zoom.push(function () {
        var j,
            id,
            layer;

        for (id in self.layers) {
          if (self.layers.hasOwnProperty(id)) {
            layer = self.layers[id];
            if (layer && layer.$entries) {
              for (j = 0; j < layer.$entries.length; j += 1) {
                if (self.proxy.checkLayerIsActiveForZoom(id)) {
                  layer.$entries[j].removeClass(c4g.maps.constant.css.DISABLED);
                } else {
                  layer.$entries[j].addClass(c4g.maps.constant.css.DISABLED);
                }
              }
            }
          }
        }
      }); // end of hook

      // build the layer tree
      wrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');
      if (itemData && itemData.length > 0) {
        for (i = 0; i < itemData.length; i += 1) {
          uid = itemData[i];
          //layer = this.plugin.customTabs[this.tabId].drawnFeatures[uid];
          layer = this.proxy.layerController.arrLayers[uid];
          // skip layer if it doesn't belong to this tab
          if (!(layer.renderSpecial == true && (layer.tabId == this.tabId))) {
            continue;
          }
          // do not render the startab layer itself as parent level
          if (layer.type === "startab") {
            continue;
          }
          // check if layer wants to be displayed in starboard tab
          if (layer.hide_when_in_tab) {
            continue;
          }
          if (layer.hide === "1") {
            if (this.proxy.activeLayerIds[layer.id]) {
              this.hideLayer(layer.id);
            }
          }
          item = {};
          this.layers[uid] = item;
          listItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
          item.entryWrappers = item.entryWrappers || [];
          item.entryWrappers.push(listItem);
          entry = document.createElement('a');
          entry.setAttribute('href', '#');
          entry.appendChild(document.createTextNode(layer.layername || layer.name));
          listItem.appendChild(entry);
          $entry = $(entry);
          item.$entries = item.$entries || [];
          item.$entries.push($entry);
          $entry.data('uid', uid);
          $entry.click(handleEntryClick);

          // prepare insertion of childs
          if (layer.visibleChilds) {
            toggle = document.createElement('span');
            $(listItem).addClass(c4g.maps.constant.css.CLOSE);
            $(toggle).addClass(c4g.maps.constant.css.ICON);
            $(toggle).click(function () {
              if ($(this).parent().hasClass(c4g.maps.constant.css.CLOSE)) {
                $(this).parent().removeClass(c4g.maps.constant.css.CLOSE).addClass(c4g.maps.constant.css.OPEN);
              } else {
                $(this).parent().removeClass(c4g.maps.constant.css.OPEN).addClass(c4g.maps.constant.css.CLOSE);
              }
                if (self.proxy.options.mapController.rightSlideElements) {
                    self.proxy.options.mapController.rightSlideElements.forEach(function (element) {
                        $(element).css('right', self.starboard.container.offsetWidth);
                    });
                }
                $(self.starboard.element).css('right', self.starboard.container.offsetWidth);

            });
            $(toggle).insertBefore($entry);
            childWrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');
            item.childWrappers = item.childWrappers || [];
            item.childWrappers.push(childWrapper);
            listItem.appendChild(childWrapper);
          }

          if (this.proxy.activeLayerIds[uid]) {
            $entry.addClass(c4g.maps.constant.css.ACTIVE);
          } else {
            $entry.addClass(c4g.maps.constant.css.INACTIVE);
          }
          if (this.layers[layer.pid]) {
            // is child-element
            pWrapper = this.layers[layer.pid].childWrappers;
            if (pWrapper) {
              pWrapper[pWrapper.length - 1].appendChild(listItem);
            }
          } else {
            wrapper.appendChild(listItem);
          }
            } // end of for-loop
          // Starboard Filter
          if (this.starboard.options.filter) {
              var dv = document.createElement('div');
              dv.className = "c4g-starboard-filter c4g-content-select";
              var filter = document.createElement('input');
              filter.type = 'text';
              // filter.className = 'c4g-starboard-filter';
              filter.placeholder = "\uf002";  // Font Awesome
              dv.appendChild(filter);
              filter.onkeyup = function () {
                  function filter_ulli(element, showSubtree) {

                      // do not apply filter for short search terms

                      showSubtree = showSubtree || false;  // used while traversing down the tree

                      /**
                       * Returns an array (modified: first element) of the given elements. Only finds children of the given parent element, but
                       * no further descendants like getElementsByTagName does.
                       */
                      function getChildrenByTagName(element, tagName) {
                          var found = [];
                          for (var i = 0; i < element.children.length; i++) {
                              if (element.children[i].tagName.toUpperCase() == tagName.toUpperCase()) {
                                  found.push(element.children[i]);
                              }
                          }
                          if (found.length > 0) {
                              return found[0]; // !!!
                          } else {
                              return false
                          }
                      }

                      var matchFlagUl = false;
                      var subtreeMatches = false;
                      // for each LI do
                      for (var i = 0; i < element.children.length; i++) {
                          element.children[i].style.display = "block";

                          var isMatch = false;

                          // search current LI for filter term
                          if (element.children[i].getElementsByTagName('a')[0].innerHTML.toUpperCase().indexOf(filter.value.toUpperCase()) >= 0) {
                              // it's a match
                              isMatch = true;
                          }

                          // recurse if a subtree (UL) exists in current LI (max 1 expected)
                          var ul = getChildrenByTagName(element.children[i], "ul");

                          if (ul) {
                              // recursion
                              var hasSubtree = true;
                              subtreeMatches = filter_ulli(ul, showSubtree || isMatch);
                          } else {
                              var hasSubtree = false;
                          }

                          if (isMatch || subtreeMatches || showSubtree) {
                              matchFlagUl = true; // used while traversing up the tree again
                              // set current LI visible and open
                              element.children[i].style.display = "";

                              if (filter.value.length > 2) {
                                  element.children[i].classList.remove("c4g-close");
                                  element.children[i].classList.add("c4g-open");
                              }

                              element.children[i].classList.remove("c4g-starboard-filter-match"); // always remove
                              if (isMatch && filter.value.length > 0) {
                                  element.children[i].classList.add("c4g-starboard-filter-match")
                              }
                          } else {
                              // set current LI invisible
                              element.children[i].style.display = "none";
                              element.children[i].classList.remove("c4g-open");
                              element.children[i].classList.add("c4g-close");
                              element.children[i].classList.remove("c4g-starboard-filter-match");
                          }

                      }

                      if (matchFlagUl) {
                          return true;
                      } else {
                          return false;
                      }
                  }

                  // do not react immediately but allow for some keystrokes
                  setTimeout(function () {
                      // two or zero letters are required
                      if (filter.value.length != 1) filter_ulli(document.querySelector('.c4g-layertree > ul:nth-child(2)'))
                  }, 350);

              }

              wrapperElement.appendChild(dv);
          }
        wrapperElement.appendChild(wrapper);
      }
    }, // end of "addItems()"

    showLayer: function(itemUid) {
      if (this.proxy.activeLayerIds[itemUid]) {
        return true;
      } else {
        this.proxy.showLayer(itemUid);
      }
    }, // end of "showLayer()"

    hideLayer: function(itemUid) {
      if (!this.proxy.activeLayerIds[itemUid]) {
        return true;
      } else {
        this.proxy.hideLayer(itemUid);
      }
    }, // end of "hideLayer()"


  }); // end of "add methods"

}(jQuery, this.c4g));
