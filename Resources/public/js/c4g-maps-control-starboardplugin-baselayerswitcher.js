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

      contentHeadline = document.createElement('div');
      contentHeadline.innerHTML = (this.starboard.options.baselayerSwitcherTitle || c4g.maps.constant.i18n.STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER);
      contentHeadline.className = 'contentHeadline';
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
          className: c4g.maps.constant.css.STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER,
          withHeadline: false
        },
        sectionElements: [
          {section: self.starboard.contentContainer, element: contentWrapper},
          {section: self.starboard.topToolbar, element: self.starboard.viewTriggerBar}
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
        fnDrawContent(this.proxy.baselayerController.baselayerIds);
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
          j,
          self,
          wrapper,
          item,
          uid,
          listItem,
          childList,
          childItem,
          childEntry,
          toggle,
          entry,
          $entry,
          filter,
          handleEntryClick,
          handleChangeBaselayerVisibility;

      self = this;

      if (typeof options !== "object") {
        options = {
          parseAsList: true
        };
      }

      handleEntryClick = function (event) {
          event.preventDefault();

          var itemUid,
            siblings,
            baselayerItem;
          siblings = $(this).parent().siblings();
          for(var i = 0; i< siblings.length; i++){
              if (siblings[i] && $(siblings[i]).hasClass(c4g.maps.constant.css.OPEN)) {
                  if(self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId] && self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].hasOverlays){
                    for(let j in self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].overlayController.arrOverlays){
                      if(self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].overlayController.arrOverlays.hasOwnProperty(j))
                      self.proxy.options.mapController.map.removeLayer(self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].overlayController.arrOverlays[j].layer);
                    }
                  }
                  $(siblings[i]).removeClass(c4g.maps.constant.css.OPEN).addClass(c4g.maps.constant.css.CLOSE);
              }
          }
          itemUid = $(this).data('uid');

          if (self.starboard.options.caching) {
              c4g.maps.utils.storeValue('baselayer', itemUid);
          }

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

          if (self.proxy.activeBaselayerId !== itemUid) {
            self.proxy.baselayerController.showBaseLayer(itemUid);
            if(self.proxy.baselayerController.arrBaselayers[itemUid].hasOverlays){
                for(let j in self.proxy.baselayerController.arrBaselayers[itemUid].overlayController.arrOverlays){
                  if(self.proxy.baselayerController.arrBaselayers[itemUid].overlayController.arrOverlays.hasOwnProperty(j)){
                      self.proxy.options.mapController.map.addLayer(self.proxy.baselayerController.arrBaselayers[itemUid].overlayController.arrOverlays[j].layer);                  }
                }
            }
            $(this).addClass(c4g.maps.constant.css.ACTIVE).removeClass(c4g.maps.constant.css.INACTIVE);

            // if(this.nextSibling){
            //     var children = this.nextSibling.childNodes;
            //     for(i = 0; i < children.length; i++){
            //         $(children[i].firstChild).addClass(c4g.maps.constant.css.ACTIVE).removeClass(c4g.maps.constant.css.INACTIVE);
            //     }
            // }
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
          entry.appendChild(document.createTextNode(self.proxy.baselayerController.arrBaselayers[uid].name));
          $(entry).data('id', uid);
          if(self.proxy.baselayerController.arrBaselayers[uid].hasOverlays){


            childList = document.createElement('ul');options.parseAsList ? document.createElement('ul') : document.createElement('div');
            for(j = 0; j < self.proxy.baselayerController.arrBaselayers[uid].overlays.length; j++){
              childItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
              childEntry = document.createElement('a');
              if(self.proxy.activeBaselayerId == uid){
                  $(childEntry).addClass(c4g.maps.constant.css.ACTIVE);
                  let overlayId = self.proxy.baselayerController.arrBaselayers[uid].overlays[j].id;
                  self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays[overlayId].changeOpacity(self.proxy.baselayerController.arrBaselayers[uid].overlays[j].opacity);
              }
              else{
                  $(childEntry).addClass(c4g.maps.constant.css.INACTIVE);
              }

              childEntry.appendChild(document.createTextNode(self.proxy.baselayerController.arrBaselayers[uid].overlays[j].name));
              $(childEntry).data('id',self.proxy.baselayerController.arrBaselayers[uid].overlays[j].id);
              $(childEntry).data('pid',uid);
              toggle = document.createElement('input');
              toggle.className = 'c4g-overlay-toggle';
              toggle.setAttribute('type','range');
              toggle.setAttribute('min',0);
              toggle.setAttribute('max',100);
              toggle.setAttribute('value',self.proxy.baselayerController.arrBaselayers[uid].overlays[j].opacity);
              toggle.setAttribute('steps',10);
              $(toggle).on('input', function (event) {
                  self.proxy.baselayerController.arrBaselayers[$(this).parent().data('pid')].overlayController.arrOverlays[$(this).parent().data('id')].changeOpacity(this.value)
              });



              childEntry.appendChild(toggle);
              childItem.appendChild(childEntry);
              childList.appendChild(childItem);
            }

          }
          listItem.appendChild(entry);
          if(childList){
              listItem.appendChild(childList);
              childList = undefined;
          }

          $entry = $(entry);
          this.baselayers[uid].$entry = $entry;

          if (this.starboard.options.mapController.data.default_baselayer && parseInt(uid, 10) === parseInt(self.starboard.options.mapController.data.default_baselayer, 10)) {
            $entry.addClass(c4g.maps.constant.css.ACTIVE);
            $(listItem).addClass(c4g.maps.constant.css.OPEN);
              if(self.proxy.baselayerController.arrBaselayers[uid].hasOverlays){
                  for(let j in self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays){
                        if(self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays.hasOwnProperty(j)){
                            self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays[j].changeOpacity(self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays[j].opacity);
                        }

                  }
              }
          } else {
            $entry.addClass(c4g.maps.constant.css.INACTIVE);
            $(listItem).addClass(c4g.maps.constant.css.CLOSE);
          }

          $entry.data('uid', uid);
          $entry.click(handleEntryClick);

            wrapper.appendChild(listItem);
        }
          // Starboard Filter
          if (this.starboard.options.filter) {
              var dv = document.createElement('div');
              dv.className = "c4g-starboard-filter c4g-content-select";
              var filter = document.createElement('input');
              filter.type = 'text';
              filter.placeholder = ""; //Font Awesome
              var i = document.createElement('i');
              i.className = 'fas fa-filter';
              i.setAttribute("aria-hidden", "true");
              dv.appendChild(filter);
              dv.appendChild(i);
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
                              return false;
                          }
                      }

                      var matchFlagUl = false;
                      var subtreeMatches = false;
                      // for each LI do
                      if (element.children) {
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
                                  ;
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
                  }


                  // do not react immediately but allow for some keystrokes
                  setTimeout(function () {
                      // two or zero letters are required
                      if (filter.value.length != 1) filter_ulli(document.querySelector('.c4g-baselayertree > ul:nth-child(2)'))
                  }, 350);

              }

            wrapperElement.appendChild(dv);
          }

        this.proxy.hook_baselayer_visibility.push(handleChangeBaselayerVisibility);
      }
      wrapperElement.appendChild(wrapper);
    } // end of "addItems()"

  }); // end of "add methods"

}(jQuery, this.c4g));