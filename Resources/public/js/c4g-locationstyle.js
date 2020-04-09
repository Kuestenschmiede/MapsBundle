/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
import {utils} from "./c4g-maps-utils";
import {Fill, Icon, RegularShape, Stroke, Style, Text} from "ol/style";
import {Circle, Point} from "ol/geom";
import CircleStyle from 'ol/style/Circle';
import ol_style_Photo from "ol-ext/style/Photo";


export class C4gLocationStyle {

  constructor(locStyleArr, controller) {
    this.id        = locStyleArr['id'];
    // this.style     = this.getStyleFunction(locStyleArr);
    this.editor    = this.getStyleEditorConfig(locStyleArr);
    this.name      = locStyleArr['name'];
    this.tooltip   = locStyleArr['tooltip'];
    this.label     = locStyleArr['label'];
    this.minzoom   = locStyleArr['minzoom'];
    this.maxzoom   = locStyleArr['maxzoom'];
    this.fnStyleFunction = locStyleArr['style_function_js'];
    if (this.fnStyleFunction && typeof this.fnStyleFunction === "string") {
      this.fnStyleFunction = this.fnStyleFunction.replace(/ol.Style./gi, "window.olStyle.");
      this.fnStyleFunction = this.fnStyleFunction.replace(/ol.Geom./gi, "window.olStyle.");
      if (!window.olStyle) {
        window.olStyle = {
          Stroke,
          Style,
          Icon,
          Fill,
          Point,
          CircleStyle,
          Circle,
          Text
        };
      }
    }
    this.controller= controller;
    this.locStyleArr = locStyleArr;
  }

  getStyleFunction(styleData) {
    var self,
      styleFunction,
      imageStyle,
      strokeStyle,
      fillStyle,
      textStyle,
      textStyleOutline,
      backgroundFill,
      backgroundStroke;

    self = this;

    // general
    strokeStyle = new Stroke({
      color: utils.getRgbaFromHexAndOpacity(styleData.strokecolor[0], styleData.strokecolor[1]),
      width: parseInt(styleData.strokewidth.value ? styleData.strokewidth.value : 2, 10)
    });
    fillStyle = new Fill({
      color: utils.getRgbaFromHexAndOpacity(styleData.fillcolor[0], styleData.fillcolor[1])
    });

    imageStyle = this.createImageStyle(styleData, strokeStyle, fillStyle);

    // build function
    styleFunction = function (feature, projection, getId) {
      var stylesArray,
        label;
      let mapZoom = self.controller.mapController.map.getView().getZoom();
      if (parseInt(self.locStyleArr.maxzoom, 10) && parseInt(self.locStyleArr.maxzoom, 10) < mapZoom) {
        return null;
      }
      if (parseInt(self.locStyleArr.minzoom, 10) && parseInt(self.locStyleArr.minzoom, 10) > mapZoom) {
        return null;
      }
      if (getId) {
        return styleData.id;
      }

      // check if this is a feature.styleFunction
      if (!(feature)) {
        projection = feature;
        feature = this;
      }

      stylesArray = [];

      if (feature && typeof feature.get === 'function' && feature.get('label')) {
        label = feature.get('label');
      } else if (styleData.label) {
        label = styleData.label;
      } else {
        label = false;
      }
      let defaultColor = self.controller.mapController.data.default_label_color;
      // label
      if (label) {
        if (styleData.label_outl_color && styleData.label_outl_width.value) {
          textStyleOutline = new Stroke({
            color: utils.getRgbaFromHexAndOpacity(styleData.label_outl_color || defaultColor, {
              unit: '%',
              value: 100
            }),
            width: parseInt(styleData.label_outl_width.value, 10)
          });
          if(styleData.label_outl_box === "1"){
            backgroundFill = new Fill({
              color: utils.getRgbaFromHexAndOpacity(styleData.label_outl_color || defaultColor, {
                unit: '%',
                value: 100
              })
            });
          }
        }
        if (!styleData.label_offset) {
          styleData.label_offset = [0, 0, "px"];
        }
        let fontSize = styleData.font_size && typeof styleData.font_size === "object" && styleData.font_size !== null ? styleData.font_size.value : styleData.font_size ? styleData.font_size : '13';
        let textOptions = {
          text: label,
          font: (styleData.font_weight || 'normal') + ' ' + (styleData.font_style || 'normal') + ' ' + fontSize + 'px ' + (styleData.font_family || 'sans-serif'),
          // scale: parseInt(styleData.font_size || 0, 10) || undefined,
          offsetX: parseInt(styleData.label_offset[0] || 0, 10),
          offsetY: parseInt(styleData.label_offset[1] || 0, 10),
          textAlign: styleData.label_align_hor,
          textBaseline: styleData.label_align_ver,
          fill: new Fill({
            color: utils.getRgbaFromHexAndOpacity(styleData.font_color[0] || defaultColor, styleData.font_color[1])
          }),
          stroke: textStyleOutline
        };
        if (styleData.label_outl_box === "1") {
          textOptions.backgroundFill = backgroundFill;
          textOptions.backgroundStroke = textStyleOutline;
        }
        textStyle = new Text(textOptions);
      }

      let newScale = self.getScaleFactor(styleData);

      // check if image has to be resized
      if (imageStyle && newScale !== 0.0 && imageStyle.setScale) {
        imageStyle.setScale(newScale);
      }
      // check if label should be displayed
      let showLabelForZoom = false;
      let labelMinZoom = parseInt(self.locStyleArr.label_minzoom, 10);
      let labelMaxZoom = parseInt(self.locStyleArr.label_maxzoom, 10);
      if (mapZoom >= labelMinZoom && ((labelMaxZoom >= mapZoom) || labelMaxZoom === 0)) {
        showLabelForZoom = true;
      }

      // create style-object
      if (label && showLabelForZoom) {
        let zIndex;
        if(feature && feature.get && typeof feature.get === "function" && feature.get('zIndex')){
          zIndex = feature.get('zIndex');
        }
        stylesArray.push(
          new Style({
            image: imageStyle,
            text: textStyle,
            stroke: strokeStyle,
            fill: fillStyle,
            zIndex: zIndex
          })
        );
      } else {
        stylesArray.push(
          new Style({
            image: imageStyle,
            stroke: strokeStyle,
            fill: fillStyle
          })
        );
      }

      // add line-arrows
      if (
        styleData.line_arrows
        && feature
        && (typeof feature.getGeometry === 'function')
        && !(feature.getGeometry().getType() === 'Point')
        && typeof feature.getGeometry().forEachSegment === 'function'
      ) {
        let arrowStyles = self.createLineArrowStyles(styleData, feature, strokeStyle, fillStyle);
        stylesArray = stylesArray.concat(arrowStyles);
      }

      return stylesArray;
    };

    return styleFunction;
  } // end of "getStyleFunction()"

  /**
   * Determines the current scaling factor according to the current zoomlevel and the profile/locstyle settings.
   * @param styleData
   */
  getScaleFactor(styleData) {
    let newScale = 0.0;
    let initialZoom, scaleFactor, factor, minScale, maxScale;
    let currentZoom = this.controller.mapController.map.getView().getZoom();
    let initialScale = parseFloat(styleData.icon_scale);
    // locstyle setting overwrites profile setting
    if (styleData.icon_resize_zoom) {
      initialZoom = parseInt(styleData.icon_resize_src_zoom, 10);
      scaleFactor = parseFloat(styleData.icon_resize_scale_factor);
      minScale = parseFloat(styleData.icon_resize_min_scale);
      maxScale = parseFloat(styleData.icon_resize_max_scale);
    } else if (this.controller.resizeOnZoom) {
      initialZoom = parseInt(this.controller.resizeOnZoom.srcZoom, 10);
      scaleFactor = parseFloat(this.controller.resizeOnZoom.scaleFactor);
      minScale = parseFloat(this.controller.resizeOnZoom.minScale);
      maxScale = parseFloat(this.controller.resizeOnZoom.maxScale);
    }
    if (currentZoom > initialZoom) {
      // resize image bigger
      factor = currentZoom - initialZoom;
      let scaleSummand = scaleFactor * factor;
      newScale = initialScale + scaleSummand;
      if (newScale > maxScale) {
        newScale = maxScale;
      }
    } else if (currentZoom < initialZoom) {
      // resize image smaller
      factor = initialZoom - currentZoom;
      let scaleSummand = scaleFactor * factor;
      newScale = initialScale - scaleSummand;
      if (newScale <= minScale) {
        newScale = minScale;
      }
    } else {
      // resize to initial size
      newScale = initialScale;
    }

    return newScale;
  }

  createImageStyle(styleData, strokeStyle, fillStyle) {
    let imageStyle;
    // image
    switch (styleData.styletype) {
      case 'square':
        imageStyle = new RegularShape({
          fill: fillStyle,
          stroke: strokeStyle,
          points: 4,
          radius: styleData.radius.value || 10,
          angle: Math.PI / 4
        });
        break;
      case 'star':
        imageStyle = new RegularShape({
          fill: fillStyle,
          stroke: strokeStyle,
          radius1: styleData.radius.value || 10,
          radius2: styleData.radius.value ? Math.floor(styleData.radius.value * 0.5) : 4,
          points: 5,
          angle: 0
        });
        break;
      case 'x':
        imageStyle = new RegularShape({
          fill: fillStyle,
          stroke: strokeStyle,
          points: 4,
          radius: styleData.radius.value || 10,
          radius2: 0,
          angle: Math.PI / 4
        });
        break;
      case 'cross':
        imageStyle = new RegularShape({
          fill: fillStyle,
          stroke: strokeStyle,
          points: 4,
          radius: styleData.radius.value || 10,
          radius2: 0,
          angle: 0
        });
        break;
      case 'triangle':
        imageStyle = new RegularShape({
          fill: fillStyle,
          stroke: strokeStyle,
          points: 3,
          radius: styleData.radius.value || 10,
          rotation: Math.PI / 4,
          angle: 0
        });
        break;
      case 'ol_icon': // fallthrough
      case 'cust_icon':
        if (styleData.icon_src) {
          let width, height, offsetX, offsetY;
          width = (styleData.icon_size[0]*styleData.icon_scale);
          height = (styleData.icon_size[1]*styleData.icon_scale);
          offsetX = (styleData.icon_offset[0]*styleData.icon_scale);
          offsetY = (styleData.icon_offset[1]*styleData.icon_scale);
          let anchorX = 1 / (parseInt(width) / (parseInt(offsetX) * -1));
          let anchorY = 1 / (parseInt(height) / (parseInt(offsetY) * -1));
          imageStyle = new Icon({
            anchor: [anchorX, anchorY],
            opacity: parseFloat(styleData.icon_opacity.value) / 100,
            src: styleData.icon_src,
            scale: parseFloat(styleData.icon_scale),
            size: [parseInt(styleData.icon_size[0], 10), parseInt(styleData.icon_size[1], 10)]
          });
        }
        break;
      case 'cust_icon_svg':
        if(styleData.svgSrc && styleData.icon_scale && styleData.icon_size) {
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext("2d");
          let width, height, offsetX, offsetY;
          width = (styleData.icon_size[0]*styleData.icon_scale);
          height = (styleData.icon_size[1]*styleData.icon_scale);
          offsetX = (styleData.icon_offset[0]*styleData.icon_scale);
          offsetY = (styleData.icon_offset[1]*styleData.icon_scale);
          let anchorX = 1 / (parseInt(width) / (parseInt(offsetX) * -1));
          let anchorY = 1 / (parseInt(height) / (parseInt(offsetY) * -1));
          canvas.width  = width;
          canvas.height = height;
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          let img = new Image();
          img.src = styleData.svgSrc;
          img.onload = function() {
            ctx.drawImage(img, 0, 0, width, height);
          };

          imageStyle = new Icon({
            anchor: [anchorX, anchorY],
            img: canvas,
            imgSize: [canvas.width, canvas.height]
          });
        }

        break;
      case 'photo' :
        imageStyle = new ol_style_Photo({
          kind: styleData.photoKind,
          crop: true,
          opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
          radius: parseFloat(styleData.radius.value,10),
          shadow: true,
          stroke: strokeStyle,
          src: styleData.icon_src
        });

        break;
      case 'point':
        imageStyle = new CircleStyle({
          fill: fillStyle,
          stroke: strokeStyle,
          radius: styleData.radius.value || 7
        });
        break;
      default:
        imageStyle = new CircleStyle({
          fill: fillStyle,
          stroke: strokeStyle,
          radius: styleData.radius.value || 7
        });
    }
    return imageStyle;
  }

  createLineArrowStyles(styleData, feature, strokeStyle, fillStyle) {
    const scope = this;
    let stylesArray = [];
    let arrowSize = (styleData.line_arrows_radius) ? (parseInt(styleData.line_arrows_radius.value, 10) * 2) : 0;
    let arrowSizeUnit = arrowSize + styleData.line_arrows_radius.unit;
    feature.getGeometry().forEachSegment(function (start, end) {
      //if minzoom is 0 (unlimited), hide arrows if they are bigger than the segment
      let arrows_minzoom = parseInt(styleData.line_arrows_minzoom, 10);
      let start_pixel = scope.controller.mapController.map.getPixelFromCoordinate(start);
      let end_pixel = scope.controller.mapController.map.getPixelFromCoordinate(end);
      // euclid-distance between start and end
      let segmentLength = Math.sqrt(Math.pow(end_pixel[1] - start_pixel[1], 2) + Math.pow(end_pixel[0] - start_pixel[0], 2));

      if (
        (arrows_minzoom < 0 && arrowSize + parseInt(styleData.strokewidth.value, 10) < segmentLength)
        || (arrows_minzoom >= 0 && scope.controller.mapController.map.getView().getZoom() >= arrows_minzoom)
      ) {
        // forward arrows
        stylesArray.push(
          new Style({
            geometry: new Point(end),
            text: new Text({
              text: "ᐳ",
              font: arrowSizeUnit + " sans-serif",
              offsetX: 0,
              offsetY: 1,
              fill: fillStyle,
              stroke: strokeStyle,
              textAlign: 'right',
              rotateWithView: true,
              rotation: -Math.atan2((end[1] - start[1]), (end[0] - start[0]))
            })
          })
        );
        // backward arrows (if wanted)
        if (styleData.line_arrows_back) {
          stylesArray.push(
            new Style({
              geometry: new Point(start),
              text: new Text({
                text: "ᐳ",
                font: arrowSizeUnit + " sans-serif",
                offsetX: 0,
                offsetY: -1,
                fill: fillStyle,
                stroke: strokeStyle,
                textAlign: 'right',
                rotateWithView: true,
                rotation: -Math.atan2((start[1] - end[1]), (start[0] - end[0]))
              })
            })
          );
        }

      }
    });
    return stylesArray;
  }


  getStyleEditorConfig(styleData) {
    var editorConfig;

    // create editor-config
    editorConfig = {};
    editorConfig.collect = styleData.editor_collect || undefined;
    editorConfig.iconSrc = styleData.editor_icon || undefined;
    editorConfig.vars = styleData.editor_vars || undefined;

    editorConfig.sort = styleData.editor_sort || false;
    if (editorConfig.sort) {
      editorConfig.sort = parseInt(editorConfig.sort, 10) || false;
    }

    return editorConfig;
  }// end of "getStyleEditorConfig()"

}