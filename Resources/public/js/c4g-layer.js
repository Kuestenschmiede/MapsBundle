class C4gLayer{
  get display() {
    return this._display;
  }


  set display(value) {
    this._display = value;
  }
  constructor(layerArr) {
    this._id = layerArr['id'];
    this._pid = layerArr['pid'];
    this._async_content = layerArr['async_content'];
    this._content = layerArr['content'];
    this._cssClass = layerArr['cssClass'];
    this._hide = layerArr['hide'];
    this._hide_child = layerArr['hide_child'];
    this._type = layerArr['type'];
    this._zoom_locations = layerArr['zoom_locations'];
    this._display = layerArr['display'];
    this._hasChilds = layerArr['hasChilds'];
    this._childs = layerArr['childs'];
    this._childsCount = layerArr['childsCount'];
    this._renderSpecial = layerArr['renderSpecial'];
    this._editable = true;
    this._type = layerArr['type'];
    this._name = layerArr['name'];
    // TODO gute default werte?
    this._tabId = layerArr['tabId'];
    this._layername = layerArr['layername'];
    this._visibleChilds = false;
    this._vectorLayer = null;
    if (layerArr.projectId) {
      this.projectId = layerArr.projectId;
    }
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


  get hasChilds() {
    return this._hasChilds;
  }

  set hasChilds(value) {
    this._hasChilds = value;
  }

  get childs() {
    return this._childs;
  }

  set childs(value) {
    this._childs = value;
  }

  get childsCount() {
    return this._childsCount;
  }

  set childsCount(value) {
    this._childsCount = value;
  }

  get renderSpecial() {
    return this._renderSpecial;
  }

  set renderSpecial(value) {
    this._renderSpecial = value;
  }

  get editable() {
    return this._editable;
  }

  set editable(value) {
    this._editable = value;
  }

  get tabId() {
    return this._tabId;
  }

  set tabId(value) {
    this._tabId = value;
  }

  get layername() {
    return this._layername;
  }

  set layername(value) {
    this._layername = value;
  }

  get visibleChilds() {
    return this._visibleChilds;
  }

  set visibleChilds(value) {
    this._visibleChilds = value;
  }

  get vectorLayer() {
    return this._vectorLayer;
  }

  set vectorLayer(value) {
    this._vectorLayer = value;
  }
}