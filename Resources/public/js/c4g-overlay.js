class C4gOverlay{

    constructor(overlayArr, mapController){
        this._id            = overlayArr['id'];
        this._pid           = overlayArr['pid'];
        this._name          = overlayArr['name'];
        this._provider      = overlayArr['provider'];
        this._style         = overlayArr['style'];
        this._url           = overlayArr['url'];
        this._urls          = overlayArr['urls'];
        this._opacity       = overlayArr['opacity'];
        this._attribution   = overlayArr['attribution'];
        this._gutter        = overlayArr['gutter'];
        this._params        = overlayArr['params'];
        this._layer         = false;
        this._overlayArr    = overlayArr;
        this._mapController    = mapController
    }

    get overlayArr() {
        return this._overlayArr;
    }

    set overlayArr(value) {
        this._overlayArr = value;
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

    get provider() {
        return this._provider;
    }

    set provider(value) {
        this._provider = value;
    }

    get style() {
        return this._style;
    }

    set style(value) {
        this._style = value;
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

    get opacity() {
        return this._opacity;
    }

    set opacity(value) {
        this._opacity = value;
    }

    get attribution() {
        return this._attribution;
    }

    set attribution(value) {
        this._attribution = value;
    }

    get gutter() {
        return this._gutter;
    }

    set gutter(value) {
        this._gutter = value;
    }

    get params() {
        return this._params;
    }

    set params(value) {
        this._params = value;
    }

    get layer() {
        return this._layer;
    }

    set layer(value) {
        this._layer = value;
    }
    get mapController() {
        return this._mapController;
    }

    set mapController(value) {
        this._mapController = value;
    }

    changeOpacity(value){
        var layer;

        layer = this.layer;
        if (layer) {
            this.mapController.map.removeLayer(layer);
            layer.setOpacity(value/100);
            this.mapController.map.addLayer(layer);
        }
    }
}