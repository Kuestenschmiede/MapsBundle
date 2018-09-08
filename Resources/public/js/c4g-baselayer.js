class C4gBaselayer{
    constructor(baselayerArr, controller) {
        this.id = baselayerArr['id'];
        this.pid = baselayerArr['pid'];
        this.name = baselayerArr['name'];
        this.display_name = baselayerArr['display_name'];
        this.provider = baselayerArr['provider'];
        this.osm_style = baselayerArr['osm_style'];
        this.osm_style_url1 = baselayerArr['osm_style_url1'];
        this.osm_style_url2 = baselayerArr['osm_style_url2'];
        this.osm_style_url3 = baselayerArr['osm_style_url3'];
        this.osm_style_url4 = baselayerArr['osm_style_url4'];
        this.osm_keyname = baselayerArr['osm_keyname'];
        this.mapbox_type = baselayerArr['mapbox_type'];
        this.bing_style = baselayerArr['bing_style'];
        this.style = baselayerArr['style'];
        this.attribution = baselayerArr['attribution'];
        this.params = baselayerArr['params'];
        this.wms_gutter = baselayerArr['wms_gutter'];
        this.minZoom = baselayerArr['minZoom'];
        this.maxZoom = baselayerArr['maxZoom'];
        this.protect_baselayer = baselayerArr['protect_baselayer'];
        this.permitted_groups = baselayerArr['permitted_groups'];
        this.api_key = baselayerArr['apiKey'] ? baselayerArr['apiKey'] : baselayerArr['api_key'];
        this.app_id = baselayerArr['app_id'];
        this.thunderforest_type = baselayerArr['thunderforest_type'];
        this.here_type = baselayerArr['here_type'];
        this.cesium = baselayerArr['cesium'];
        this.hide_in_be = baselayerArr['hide_in_be'];
        this.url = baselayerArr['url'];
        this.urls = baselayerArr['urls'];
        this.klokan_type = baselayerArr['klokan_type'];
        this.style_url = baselayerArr['style_url'];
        this.hasOverlays = baselayerArr['hasOverlays'];
        this.overlays = baselayerArr['overlays'];
        if(baselayerArr['layerGroup']){
            let layerGroup = [];
            for(let index in baselayerArr['layerGroup'] ){
                layerGroup[index] = new C4gBaselayer(baselayerArr['layerGroup'][index]['entry']);
                layerGroup[index]['minZoom'] = baselayerArr['layerGroup'][index]['minZoom'];
                layerGroup[index]['maxZoom'] = baselayerArr['layerGroup'][index]['maxZoom'];
            }
            this.layerGroup = layerGroup;
        }
        this.overlayController = new C4gOverlayController(this);
        this.layer = false;
        this.controller = controller
    }
}