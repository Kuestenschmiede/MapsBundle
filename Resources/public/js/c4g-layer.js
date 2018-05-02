class C4gLayer{
    constructor(layerArr) {
        this._id = layerArr['id'];
        this._pid = layerArr['pid'];
        this._async_content = layerArr['async_content'];
        this._content = layerArr['content'];
        this._cssClass = layerArr['cssClass'];
        this._hide = layerArr['hide'];
        this._hide_child = layerArr['hide_child'];
        this._name = layerArr['name'];
        this._type = layerArr['type'];
        this._zoom_locations = layerArr['zoom_locations'];
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

    get async_content() {
        return this._async_content;
    }

    set async_content(value) {
        this._async_content = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }

    get cssClass() {
        return this._cssClass;
    }

    set cssClass(value) {
        this._cssClass = value;
    }

    get hide() {
        return this._hide;
    }

    set hide(value) {
        this._hide = value;
    }

    get hide_child() {
        return this._hide_child;
    }

    set hide_child(value) {
        this._hide_child = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get zoom_locations() {
        return this._zoom_locations;
    }

    set zoom_locations(value) {
        this._zoom_locations = value;
    }
}