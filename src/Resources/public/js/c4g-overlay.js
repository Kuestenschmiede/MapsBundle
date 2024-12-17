/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
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
    this.infopage      = overlayArr['infopage'];
    this.gutter        = overlayArr['gutter'];
    this.params        = overlayArr['params'];
    this.imageSrc      = overlayArr['image_src'];
    this.geoImageJson  = overlayArr['geoimage_json'];
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