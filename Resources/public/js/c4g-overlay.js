export class C4gOverlay {

  constructor(overlayArr, mapController) {
    this.id            = overlayArr['id'];
    this.pid           = overlayArr['pid'];
    this.name          = overlayArr['name'];
    this.provider      = overlayArr['provider'];
    this.style         = overlayArr['style'];
    this.url           = overlayArr['url'];
    this.urls          = overlayArr['urls'];
    this.opacity       = overlayArr['opacity'];
    this.attribution   = overlayArr['attribution'];
    this.gutter        = overlayArr['gutter'];
    this.params        = overlayArr['params'];
    this.layer         = false;
    this.overlayArr    = overlayArr;
    this.mapController    = mapController
  }

  changeOpacity(value) {
    var layer;

    layer = this.layer;
    if (layer) {
      this.mapController.map.removeLayer(layer);
      layer.setOpacity(value/100);
      this.mapController.map.addLayer(layer);
    }
  }
}