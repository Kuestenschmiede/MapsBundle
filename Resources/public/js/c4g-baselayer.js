class C4gBaselayer{
    constructor(baselayerArr, controller) {
        this._id = baselayerArr['id'];
        this._pid = baselayerArr['pid'];
        this._name = baselayerArr['name'];
        this._display_name = baselayerArr['display_name'];
        this._provider = baselayerArr['provider'];
        this._osm_style = baselayerArr['osm_style'];
        this._osm_style_url1 = baselayerArr['osm_style_url1'];
        this._osm_style_url2 = baselayerArr['osm_style_url2'];
        this._osm_style_url3 = baselayerArr['osm_style_url3'];
        this._osm_style_url4 = baselayerArr['osm_style_url4'];
        this._osm_keyname = baselayerArr['osm_keyname'];
        this._mapbox_type = baselayerArr['mapbox_type'];
        this._bing_style = baselayerArr['bing_style'];
        this._style = baselayerArr['style'];
        this._attribution = baselayerArr['attribution'];
        this._params = baselayerArr['params'];
        this._wms_gutter = baselayerArr['wms_gutter'];
        this._minzoomlevel = baselayerArr['minzoomlevel'];
        this._maxzoomlevel = baselayerArr['maxzoomlevel'];
        this._protect_baselayer = baselayerArr['protect_baselayer'];
        this._permitted_groups = baselayerArr['permitted_groups'];
        this._api_key = baselayerArr['apiKey'] ? baselayerArr['apiKey'] : baselayerArr['api_key'];
        this._app_id = baselayerArr['app_id'];
        this._thunderforest_type = baselayerArr['thunderforest_type'];
        this._here_type = baselayerArr['here_type'];
        this._cesium = baselayerArr['cesium'];
        this._hide_in_be = baselayerArr['hide_in_be'];
        this._url = baselayerArr['url'];
        this._urls = baselayerArr['urls'];
        this._klokan_type = baselayerArr['klokan_type'];
        this._style_url = baselayerArr['style_url'];
        this._hasOverlays = baselayerArr['hasOverlays'];
        this._overlays = baselayerArr['overlays'];
        this._overlayController = new C4gOverlayController(this);
        this._layer = false;
        this._controller = controller
    }



    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get pid() {
        return this._pid;
    }

    set pid(value) {
        this._pid = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get display_name() {
        return this._display_name;
    }

    set display_name(value) {
        this._display_name = value;
    }

    get provider() {
        return this._provider;
    }

    set provider(value) {
        this._provider = value;
    }

    get osm_style() {
        return this._osm_style;
    }

    set osm_style(value) {
        this._osm_style = value;
    }

    get osm_style_url1() {
        return this._osm_style_url1;
    }

    set osm_style_url1(value) {
        this._osm_style_url1 = value;
    }

    get osm_style_url2() {
        return this._osm_style_url2;
    }

    set osm_style_url2(value) {
        this._osm_style_url2 = value;
    }

    get osm_style_url3() {
        return this._osm_style_url3;
    }

    set osm_style_url3(value) {
        this._osm_style_url3 = value;
    }

    get osm_style_url4() {
        return this._osm_style_url4;
    }

    set osm_style_url4(value) {
        this._osm_style_url4 = value;
    }

    get osm_keyname() {
        return this._osm_keyname;
    }

    set osm_keyname(value) {
        this._osm_keyname = value;
    }

    get mapbox_type() {
        return this._mapbpx_type;
    }

    set mapbox_type(value) {
        this._mapbpx_type = value;
    }

    get bing_style() {
        return this._bing_style;
    }

    set bing_style(value) {
        this._bing_style = value;
    }

    get style() {
        return this._style;
    }

    set style(value) {
        this._style = value;
    }

    get attribution() {
        return this._attribution;
    }

    set attribution(value) {
        this._attribution = value;
    }

    get wms_url() {
        return this._wms_url;
    }

    set wms_url(value) {
        this._wms_url = value;
    }

    get params() {
        return this._params;
    }

    set params(value) {
        this._params = value;
    }

    get wms_gutter() {
        return this._wms_gutter;
    }

    set wms_gutter(value) {
        this._wms_gutter = value;
    }

    get minzoomlevel() {
        return this._minzoomlevel;
    }

    set minzoomlevel(value) {
        this._minzoomlevel = value;
    }

    get maxzoomlevel() {
        return this._maxzoomlevel;
    }

    set maxzoomlevel(value) {
        this._maxzoomlevel = value;
    }

    get protect_baselayer() {
        return this._protect_baselayer;
    }

    set protect_baselayer(value) {
        this._protect_baselayer = value;
    }

    get permitted_groups() {
        return this._permitted_groups;
    }

    set permitted_groups(value) {
        this._permitted_groups = value;
    }

    get api_key() {
        return this._api_key;
    }

    set api_key(value) {
        this._api_key = value;
    }

    get app_id() {
        return this._app_id;
    }

    set app_id(value) {
        this._app_id = value;
    }

    get thunderforest_type() {
        return this._thunderforest_type;
    }

    set thunderforest_type(value) {
        this._thunderforest_type = value;
    }

    get here_type() {
        return this._here_type;
    }

    set here_type(value) {
        this._here_type = value;
    }

    get cesium() {
        return this._cesium;
    }

    set cesium(value) {
        this._cesium = value;
    }

    get hide_in_be() {
        return this._hide_in_be;
    }

    set hide_in_be(value) {
        this._hide_in_be = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }

    get urls() {
        return this._urls;
    }

    set urls(value) {
        this._urls = value;
    }

    get klokan_type() {
        return this._klokan_type;
    }

    set klokan_type(value) {
        this._klokan_type = value;
    }

    get style_url() {
        return this._style_url;
    }

    set style_url(value) {
        this._style_url = value;
    }

    get hasOverlays() {
        return this._hasOverlays;
    }

    set hasOverlays(value) {
        this._hasOverlays = value;
    }

         get overlays() {
        return this._overlays;
    }

    set overlays(value) {
        this._overlays = value;
    }

    get layer() {
        return this._layer;
    }

    set layer(value) {
        this._layer = value;
    }

    get overlayController() {
        return this._overlayController;
    }

    set overlayController(value) {
        this._overlayController = value;
    }

    get controller() {
        return this._controller;
    }

    set controller(value) {
        this._controller = value;
    }
}