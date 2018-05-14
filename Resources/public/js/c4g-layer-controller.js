class C4gLayerController{
    get proxy() {
        return this._proxy;
    }

    set proxy(value) {
        this._proxy = value;
    }

    get mapController() {
        return this._mapController;
    }

    set mapController(value) {
        this._mapController = value;
    }
    constructor(proxy){
        this._proxy = proxy;
        this._mapController = proxy.options.mapController;
        this._arrLayers = [];
    }
    get arrLayers() {
        return this._arrLayers;
    }

    set arrLayers(value) {
        this._arrLayers = value;
    }
    loadLayers () {
      let self = this;
      if (this._mapId === 0) {
        return false;
      }

      jQuery.ajax({
        dataType: this._mapController.data.jsonp ? "jsonp" : "json",
        url: this._proxy._api_layer_url
      }).done(function (data) {
        self.addLayers(data.layer, data.foreignLayers);
        self._proxy._layers_loaded = true;
        c4g.maps.utils.callHookFunctions(self._proxy._hook_layer_loaded, self._proxy._layerIds);
        c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_layer_loaded, {layerIds: self._proxy._layerIds, proxy: self._proxy});
        self._proxy.checkLocationStyles({
          success: function () {
            self._proxy.drawLayerInitial();
          }
        });
        return true;
      }).fail(function () {
        // @TODO: error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the layers...');
        return false;
      }).always(function () {
        // this._proxy.starboard.spinner.hide();
      });
    } // end of "loadLayer()"
    addLayers(layers, foreignLayers) {
        var i,
            j,
            k,
            p,
            isVisible,
            layer,
            storedItem,
            linkItems,
            uid,
            currentZoom,
            fnHandleAndAppendLayerChilds,
            endlessLoopId,
            parentId,
            parentIds,
            permalinkedLayers,
            child,
            fnHandleChilds,
            key,
            starboard,
            fnAddToHook;

        let self = this;
        isVisible = false;

        permalinkedLayers = this._mapController.data.layers || [];

        fnHandleAndAppendLayerChilds = function (objItem) {
            var toggle,
                entryWrapper;

            if (objItem._hasChilds) {
                objItem._visibleChilds = self.addLayers(objItem._childs, foreignLayers);
            }
        }; // end of "fnHandleAndAppendLayerChilds()"

        // wrapper function to avoid closure accessibility
        fnAddToHook = function(layer) {
            var layername, layerid, layericon;

            if (layer.childs && layer.childs.length > 0) {
                layername = layer.name;
                layerid = layer.tabId;
                layericon = layer.awesomeicon;
                c4g.maps.starboardTabs = c4g.maps.starboardTabs || {};
                starboard = self._proxy.options.mapController.controls.starboard;
                starboard.hook_layerswitcher_loaded.push(function(){
                    c4g.maps.starboardTabs[layerid] = new c4g.maps.control.starboardplugin.Customtab(starboard, {
                        name: layername,
                        tabId: layerid,
                        awesomeicon: layericon
                    });
                });
            }
        };

        if (layers && layers.length > 0) {
            for (i = 0; i < layers.length; i += 1) {
                layer = new C4gLayer(layers[i]);//layers[i];
                linkItems = false;
                //console.log(layer);
                if (typeof layer.content === "object") {
                    layer.content = c4g.maps.utils.objectToArray(layer.content);
                }

                // endless-loop prevention
                //
                parentId = layer.pid;
                parentIds = {};
                // build parent-ids chain
                while (self.arrLayers[parentId]) {
                    if (parentIds[parentId]) {
                        console.warn('Caught endless-loop (ID: ' + layer.id + ')');
                        break;
                    }
                    parentIds[parentId] = true;
                    parentId = this.arrLayers[parentId].pid;
                }

                if (layer.content && layer.content[0] && layer.content[0].cssClass) {
                    layer.cssClass = layer.content[0].cssClass;
                }


                if (!parentIds[parentId]) {

                    // prepare layer data if they are a new starboard tab
                    if (layer.type === "startab") {
                        layer.editable = true;
                        layer.renderSpecial = true;
                        layer.tabId = layer.id;
                        if (!layer.layername) {
                            layer.display = true;
                        }
                        // iterate childs and tell them to not load in layerswitcher
                        fnHandleChilds = function(fLayer) {
                            for (let count = 0; count < fLayer.childs.length; count++) {
                                child = new C4gLayer(fLayer.childs[count]);
                                child.editable = true;
                                child.tabId = fLayer.tabId;
                                child.renderSpecial = true;
                                // set renderSpecial to remove it from normal layerswitcher
                                self.arrLayers[child.id] = child;
                                if (child.hasChilds) {
                                    // recursive call
                                    fnHandleChilds(child);
                                }
                            }
                        }; // end of fnHandleChilds

                        if (layer.hasChilds) {
                            fnHandleChilds(layer);
                        }
                        fnAddToHook(layer);
                    }

                    uid = layer.id || c4g.maps.utils.getUniqueId();
                    this.arrLayers[uid] = layer;
                    layer.isInactive = false;
                    this._proxy.layerIds.push(layer.id);

                    if (layer.display) {
                        isVisible = true;
                        fnHandleAndAppendLayerChilds(layer);
                    } else if (layer.pid && this.arrLayers[layer.pid]) {
                        // set hide when layers are not displayed in the starboard
                        layer.hide = this.arrLayers[layer.pid].hide;
                    }

                    var visible = false;
                    if (permalinkedLayers.length > 0) {
                        for (p = 0; p < permalinkedLayers.length; p += 1) {
                            if (permalinkedLayers[p] == layer.id) {
                                visible = true;
                                break;
                            }
                        }
                    }

                    if ((layer.hide !== "1") || (visible)) {
                        this._proxy.activeLayerIds[layer.id] = 'invisible';
                    }

                }
            } // end of for-loop
            // wrapperElement.appendChild(wrapper);
        }


        return isVisible;
    } // end of "addLayers()"
}
