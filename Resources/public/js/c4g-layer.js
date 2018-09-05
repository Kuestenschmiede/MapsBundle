class C4gLayer{
  
  constructor(layerArr) {
    this.id = layerArr['id'];
    this.pid = layerArr['pid'];
    this.async_content = layerArr['async_content'];
    this.content = layerArr['content'];
    this.cssClass = layerArr['cssClass'];
    this.hide = layerArr['hide'];
    this.hide_child = layerArr['hide_child'];
    this.type = layerArr['type'];
    this.cluster = layerArr['cluster'];
    this.zoom = layerArr['zoom'];
    this.zoom_locations = layerArr['zoom_locations'];
    this.display = layerArr['display'];
    this.hasChilds = layerArr['hasChilds'];
    this.childs = layerArr['childs'];
    this.childsCount = layerArr['childsCount'];
    this.renderSpecial = layerArr['renderSpecial'];
    this.editable = true;
    this.type = layerArr['type'];
    this.locstyle = layerArr['locstyle'];
    this.name = layerArr['name'];
    this.tabId = layerArr['tabId'];
    this.split_geojson = layerArr['split_geojson'];
    this.geojson_attributes = layerArr['geojson_attributes'];
    this.layername = layerArr['layername'];
    this.visibleChilds = false;
    this.vectorLayer = null;
    this.hideWhenInTab = layerArr['hide_when_in_tab'];

    if (layerArr.projectId) {
      this.projectId = layerArr.projectId;
    }
    if(layerArr.popup){
      this.popup = layerArr.popup;
    }
    this.awesomeicon = layerArr['awesomeicon']
  }
}