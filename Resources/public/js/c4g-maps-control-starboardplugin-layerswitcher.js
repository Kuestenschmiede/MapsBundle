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
  c4g.maps.control.starboardplugin.Layerswitcher = function (starboard) {
    if (!starboard) {
      console.warn('Cannot initialize Layerswitcher without a starboard.');
      return false;
    }

    this.initialized = false;
    this.layers = {};

    this.starboard = starboard;
    this.proxy = starboard.options.mapController.proxy;
    this.create();
    this.loadContent();
  };

  // Add methods
  c4g.maps.control.starboardplugin.Layerswitcher.prototype = $.extend(c4g.maps.control.starboardplugin.Layerswitcher.prototype, {

    create: function () {
      var self,
          contentWrapper,
          contentHeadline,
          contentHeadlineLink,
          contentInfo;

      self = this;

      contentWrapper = document.createElement('div');
      contentHeadline = document.createElement('div');
      contentHeadline.className = 'contentHeadline';

      if(!this.starboard.options.button) {
          contentHeadline.innerHTML = (this.starboard.options.layerSwitcherTitle || c4g.maps.constant.i18n.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER);
      }
      else {
          $(contentHeadline).addClass("c4g-starboard-headline");
          contentHeadlineLink = document.createElement('a');
          contentHeadlineLink.onclick = function () {
              if ($(this).hasClass("c4g-active") !== false) {
                  for (var i = 0; i < self.proxy.layerIds.length; i++) {
                      self.proxy.layerController.hideLayer(self.proxy.layerIds[i]);
                  }
                  $(this).removeClass("c4g-active");
                  $(this).addClass("c4g-inactive");
              }
              else {
                  for (var i = 0; i < self.proxy.layerIds.length; i++) {
                      self.proxy.layerController.showLayer(self.proxy.layerIds[i]);
                  }
                  $(this).removeClass("c4g-inactive");
                  $(this).addClass("c4g-active");
              }
          };
          $(contentHeadlineLink).addClass("c4g-inactive c4g-starboard-headline-link");
          contentHeadlineLink.innerHTML = (this.starboard.options.layerSwitcherTitle || c4g.maps.constant.i18n.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER);
          contentHeadlineLink.innerHTML = contentHeadlineLink.innerHTML+' ';
          contentHeadline.appendChild(contentHeadlineLink);
      }

      contentWrapper.appendChild(contentHeadline);

      this.contentDiv = document.createElement('div');
      this.contentDiv.className = c4g.maps.constant.css.STARBOARD_CONTENT_LAYERSWITCHER;
      contentInfo = document.createElement('p');
      this.contentDiv.appendChild(contentInfo);
      contentWrapper.appendChild(this.contentDiv);

      self.view = self.starboard.addView({
        name: 'layerswitcher',
        triggerConfig: {
          tipLabel: (this.starboard.options.layerSwitcherTitle || c4g.maps.constant.i18n.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER),
          className: c4g.maps.constant.css.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER,
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
    }, // end of "activate()"

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
    }, // end of "setContent()"

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

        self.addItems(layerIds, self.treeControl);

        self.initialized = true;
        self.starboard.spinner.hide();
        self.starboard.update();
      }; // end of "fnDrawContent()"

      if (this.proxy.layers_loaded) {
        fnDrawContent(this.proxy.layerIds);
      } else {
        this.proxy.hook_layer_loaded.push(fnDrawContent);
      }
    }, // end of "loadContent()"

    /**
     * @TODO: [drawContent description]
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
          filter,
          wrapper,
          childWrapper,
          pWrapper,
          item,
          layer,
          uid,
          listItem,
          entry,
          $entry,
          toggle,
          fnHandleEntryClick,
          zoomToExtent,
          layerClass;

      self = this;

      options = options || {};
      options = $.extend({
        parseAsList: true
      }, options);

      wrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');

      // create handler for entry-clicks
      fnHandleEntryClick = function (event) {
        var itemUid,
            layerItem;

        event.preventDefault();

        itemUid = $(this).data('uid');
        layerItem = self.proxy.layerController.arrLayers[itemUid];

        if (self.proxy.activeLayerIds[itemUid]) {
          // hide layer
          self.proxy.layerController.hideLayer(itemUid);
          if (parseInt(layer.pid, 10) == 0) {
            // hide all childs, because clicked layer is the map itself
            for (var id in self.proxy.activeLayerIds) {
              if (self.proxy.activeLayerIds.hasOwnProperty(id)) {
                self.proxy.layerController.hideLayer(id);
              }
            }
          }
        } else {
          // show layer
          self.proxy.layerController.showLayer(itemUid);
          //zooom to extent
          zoomToExtent(itemUid);

        }
        if (self.handleSelectedChilds(this)) {
          self.updateParentLayers(this, itemUid, layerItem);
        }

        // c4g.maps.layers[itemUid] = layerItem;
      }; // end of "fnHandleEntryClick()"

        zoomToExtent = function(itemUid){ //function to zoom to the extent of a map structure and its children
            var layerItem,
                vectorArray,
                layerGroup,
                coords,
                geometry,
                featureList,
                featureArray,
                coordinates = [],
                extent,
                center,
                key;
            layerItem = self.proxy.layerController.arrLayers[itemUid];
            if (layerItem && layerItem.zoom_locations === "1") {
                if (layerItem.hasChilds) {
                    for (key in layerItem._childs) {
                        if (layerItem._childs.hasOwnProperty(key)) {
                            layer = layerItem._childs[key];
                            if(layer.type == "overpass"){
                                continue
                            }
                            vectorArray = layer.content;
                            if (vectorArray === undefined) {
                                // catch case of linked layers
                                continue;
                            }
                            if (typeof vectorArray === "object") {
                                vectorArray = c4g.maps.utils.objectToArray(vectorArray);
                            }
                            layerGroup = layer.vectorLayer;
                            if (vectorArray && vectorArray.forEach && typeof vectorArray.forEach === 'function') {
                                vectorArray.forEach(function (vectorLayer) {
                                    if (vectorLayer &&
                                        vectorLayer.data &&
                                        vectorLayer.data.geometry &&
                                        vectorLayer.data.geometry.coordinates) {
                                        if (vectorLayer.data.geometry.type === "Point") {
                                            coords = ol.proj.transform([parseFloat(vectorLayer.data.geometry.coordinates[0]),
                                                parseFloat(vectorLayer.data.geometry.coordinates[1])], 'EPSG:4326', 'EPSG:3857');
                                            geometry = new ol.geom.Point(coords);
                                            coordinates.push(geometry.getCoordinates());
                                        }
                                    }
                                });
                            }
                            if (layerGroup) {
                                // handle more complex geometries
                                featureList = layerGroup.getLayers();
                                featureArray = featureList.getArray();
                                featureArray.forEach(function (feature) {
                                    if (layer.type === "kml") {
                                        var source = feature.getSource();
                                        //var sourceFeatures = source.getFeatures();
                                        source.getExtent().forEach(function (coordinate) {
                                            coordinates.push(coordinate);
                                        });
                                    } else {
                                        if(ol.extent.getTopRight(feature.getSource().getExtent())['0'] !="Infinity" && ol.extent.getTopRight(feature.getSource().getExtent())['0'] !="-Infinity"){

                                            coordinates.push(ol.extent.getTopRight(feature.getSource().getExtent()));
                                            coordinates.push(ol.extent.getTopLeft(feature.getSource().getExtent()));
                                            coordinates.push(ol.extent.getBottomRight(feature.getSource().getExtent()));
                                            coordinates.push(ol.extent.getBottomLeft(feature.getSource().getExtent()));
                                        }
                                    }
                                });
                            }
                        }
                    }
                }

                if(layerItem.type !== "overpass" && layerItem.vectorLayer){
                    vectorArray = layer.content;
                    if (vectorArray !== undefined) {
                        // catch case of linked layers
                        if (typeof vectorArray === "object") {
                            vectorArray = c4g.maps.utils.objectToArray(vectorArray);
                        }
                        layerGroup = layer.vectorLayer;
                        if (vectorArray && vectorArray.forEach && typeof vectorArray.forEach === 'function') {
                            vectorArray.forEach(function (vectorLayer) {
                                if (vectorLayer &&
                                    vectorLayer.data &&
                                    vectorLayer.data.geometry &&
                                    vectorLayer.data.geometry.coordinates) {
                                    if (vectorLayer.data.geometry.type === "Point") {
                                        coords = ol.proj.transform([parseFloat(vectorLayer.data.geometry.coordinates[0]),
                                            parseFloat(vectorLayer.data.geometry.coordinates[1])], 'EPSG:4326', 'EPSG:3857');
                                        geometry = new ol.geom.Point(coords);
                                        coordinates.push(geometry.getCoordinates());
                                    }
                                }
                            });
                        }
                        if (layerGroup) {
                            // handle more complex geometries
                            featureList = layerGroup.getLayers();
                            featureArray = featureList.getArray();
                            featureArray.forEach(function (feature) {
                                if(layer.type !== "overpass"){
                                    if (layer.type === "kml") {
                                        var source = feature.getSource();
                                        //var sourceFeatures = source.getFeatures();
                                        source.getExtent().forEach(function (coordinate) {
                                            coordinates.push(coordinate);
                                        });
                                    } else {
                                        coordinates.push(ol.extent.getTopRight(feature.getSource().getExtent()));
                                        coordinates.push(ol.extent.getTopLeft(feature.getSource().getExtent()));
                                        coordinates.push(ol.extent.getBottomRight(feature.getSource().getExtent()));
                                        coordinates.push(ol.extent.getBottomLeft(feature.getSource().getExtent()));
                                    }
                                }
                            });
                        }
                    }
                }


                extent = ol.extent.boundingExtent(coordinates);
                if (extent[0] === "Infinity" || extent[0] === "-Infinity") {
                    return
                }
                self.proxy.options.mapController.map.getView().fit(extent, self.proxy.options.mapController.map.getSize());
                center = self.proxy.options.mapController.map.getView().getCenter();
                if (isNaN(center[0])) {
                    self.proxy.options.mapController.map.getView().setCenter([50, 10]);
                    self.proxy.options.mapController.map.getView().setZoom(mapData.minZoom || 10);
                }
            }
        }; //end of zoom to extent
      // add hook function for changed layer-visibility
      //   needed to change the entry-classes
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
            self.handleSelectedChilds( changedLayer.$entries[j]);
          }
        }
      });

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

      if (itemData && itemData.length > 0) {
        for (i = 0; i < itemData.length; i += 1) {
          uid = itemData[i];
          layer = self.proxy.layerController.arrLayers[uid];
          item = {};
          this.layers[uid] = item;
          // renderSpecial is set when a layer is rendered in its own tab
          if (layer.renderSpecial) {
            continue;
          }

          if (layer && layer.display) {
            listItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
            item.entryWrappers = item.entryWrappers || [];
            item.entryWrappers.push(listItem);

            entry = document.createElement('a');
            entry.setAttribute('href', '#');
            entry.appendChild(document.createTextNode(layer.name));
            listItem.appendChild(entry);

            $entry = $(entry);
            item.$entries = item.$entries || [];
            item.$entries.push($entry);

            if (!this.proxy.checkLayerIsActiveForZoom(uid)) {
              $entry.addClass(c4g.maps.constant.css.DISABLED);
            }

            $entry.data('uid', uid);
            $entry.click(fnHandleEntryClick);

            if (layer._visibleChilds) {
              toggle = document.createElement('span');

              if (layer.hide_child !== '1') {
                  $(listItem).addClass(c4g.maps.constant.css.CLOSE);
                  $(toggle).addClass(c4g.maps.constant.css.ICON);
              }
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
                if (layer.hide_child !== '1') {
                    listItem.appendChild(childWrapper);
                }
            }

            if (this.proxy.activeLayerIds[uid]) {
              $entry.addClass(c4g.maps.constant.css.ACTIVE);
            } else {
              $entry.addClass(c4g.maps.constant.css.INACTIVE);
            }

            // [info]:  In order for this to work,
            //          the parent layers need to be
            //          listet before their childs
            if (this.layers[layer.pid]) {
              // is child-element
              pWrapper = this.layers[layer.pid].childWrappers;
              pWrapper[pWrapper.length - 1].appendChild(listItem);

            } else if (parseInt(layer.pid, 10) == 0) {
              // layer is map itself with a layer
              toggle = document.createElement('span');
              if(layer.hide_child !== '1') {
                  $(listItem).addClass(c4g.maps.constant.css.CLOSE);
              }
              $(toggle).addClass(c4g.maps.constant.css.ICON);
              $(toggle).click(function () {
                if ($(this).parent().hasClass(c4g.maps.constant.css.CLOSE)) {
                  $(this).parent().removeClass(c4g.maps.constant.css.CLOSE).addClass(c4g.maps.constant.css.OPEN);
                } else {
                  $(this).parent().removeClass(c4g.maps.constant.css.OPEN).addClass(c4g.maps.constant.css.CLOSE);
                }
              });
              $(toggle).insertBefore($entry);
              childWrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');
              item.childWrappers = item.childWrappers || [];
              item.childWrappers.push(childWrapper);
              listItem.appendChild(childWrapper);
              wrapper.appendChild(listItem);
            } else {
              // is not a child-element (pid == mapId)
              wrapper.appendChild(listItem);
            }

            if (layer.id) {
                var idstr = layer.id.toString();
                layerClass = encodeURIComponent(
                    idstr.toLowerCase()
                ).replace(/%[0-9A-F]{2}/gi,'');
                $(listItem).addClass('c4g_starboard_item_'+layerClass);
            }

            if (layer.cssClass) {
                $(listItem).addClass(layer.cssClass);
            }

            // call hook "layerswitcher_forEachItem"
            if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.layerswitcher_forEachItem === "object") {
              c4g.maps.utils.callHookFunctions(
                  c4g.maps.hook.layerswitcher_forEachItem,
                  {that: this, item: item, entry: $entry}
              );
            }
          }
        } // end of for-loop

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
            filter.onkeyup = function() {
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
                        if(found.length > 0) {
                            return found[0]; // !!!
                        } else {
                            return false;
                        }
                    }

                    var matchFlagUl = false;
                    var subtreeMatches = false;
                    // for each LI do
                    for(var i = 0; i < element.children.length; i++){
                        element.children[i].style.display = "block";

                        var isMatch = false;

                        // search current LI for filter term
                        if (element.children[i].getElementsByTagName('a')[0].innerHTML.toUpperCase().indexOf(filter.value.toUpperCase()) >= 0) {
                            // it's a match
                            isMatch = true;
                        }

                        // recurse if a subtree (UL) exists in current LI (max 1 expected)
                        var ul = getChildrenByTagName(element.children[i],"ul");
                        
                        if(ul) {
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
                            if (isMatch && filter.value.length > 0) {element.children[i].classList.add("c4g-starboard-filter-match")};
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
                setTimeout( function(){
                  // two or zero letters are required
                  if (filter.value.length != 1) filter_ulli(document.querySelector('.c4g-layertree > ul:nth-child(2)'))
                }, 350);
                
            }

            wrapperElement.appendChild(dv);

        }
        wrapperElement.appendChild(wrapper);
      }
    }, // end of "addItems()"
    /**
     * Function which checks for a given layer id, if any of the childs are currently selected.
     * @param layerUid
     * @returns {boolean}
     */
    checkChildSelections: function (layerUid) {
      var layer,
          childActive,
          self;
      self = this;
      childActive = 0;
      layer = self.proxy.layerController.arrLayers[layerUid];
      if (layer && layer._childs && layer._childs.length > 0) {
        // layer has childs
        layer._childs.forEach(function (child) {
          if (self.proxy.activeLayerIds[child.id]) {
            childActive = childActive + 1;
          } else {
            // check if any childs of childs are active
            childActive = childActive + self.checkChildSelections(child.uid);
          }
        });
      }
      return childActive;
    }, // end of "checkChildSelections()"

    /**
     * Function for coloring the layerswitcher entries, if there are any sublayers selected
     * @param entry
     */
    handleSelectedChilds: function (entry) {
      if (this.checkChildSelections($(entry).data('uid')) >= 1) {
        $(entry).css('font-weight', 'bold');
      } else {
        $(entry).css('font-weight', 'normal');
      }
      this.starboard.update();
      return true;
    },

    updateParentLayers: function (entry, layerUid, clickedLayer) {
      var layer,
          parentEntry,
          parentLayer;

      layer = this.proxy.layerController.arrLayers[layerUid];
      if (layer.pid != this.starboard.options.mapController.data.mapId) {
        // the layer has parents
        // by this we can access only the single span where the parent entry is in
        parentLayer = this.proxy.layerController.arrLayers[layer.pid];
        if (parentLayer) {
          parentEntry = entry.parentNode.parentNode.parentNode.getElementsByTagName('a')[0];
          if (parentEntry) {
            if (this.proxy.activeLayerIds[clickedLayer.id]) {
              $(parentEntry).css('font-weight', 'bold');
            } else {
              if (this.checkChildSelections($(parentEntry).data('uid')) >= 1) {
                $(parentEntry).css('font-weight', 'bold');
              } else {
                $(parentEntry).css('font-weight', 'normal');
                //$(parentEntry).addClass(c4g.maps.constant.css.INACTIVE);
              }
            }
            this.updateParentLayers(parentEntry, parentLayer.id, parentLayer);
          }
        }
      } else {
        return false;
      }
    }

  }); // end of "add methods"

}(jQuery, this.c4g));