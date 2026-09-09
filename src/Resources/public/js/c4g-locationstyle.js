/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
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
    this.photoStyles = {};
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

  getStyleFunction(styleData = null) {
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
    if (!styleData) {
      styleData = this.locStyleArr;
    }
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
      // if (self.fnStyleFunction) {
      //   return Function("feature","data","map",self.fnStyleFunction)(feature);
      // }
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
      let newScale = self.getScaleFactor(styleData);

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
          scale: newScale,
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


      // check if image has to be resized or if it is a dynamic photo
      let currentImageStyle = imageStyle;
      if (styleData.styletype === 'photo') {
        let featImg = (feature && typeof feature.get === 'function') ? (feature.get('img') || feature.get('imageSrc')) : null;
        let photoSrc = featImg || styleData.icon_src;
        if (photoSrc) {
          let kind = styleData.photoKind === 'round' ? 'circle' : (styleData.photoKind || 'default');
          let crop = styleData.photo_crop === '0' || styleData.photo_crop === false ? false : true;
          let shadow = (styleData.photo_shadow == '1' || styleData.photo_shadow === true || styleData.photo_shadow === 'true' || styleData.photo_shadow === 5) ? 5 : (styleData.photo_shadow === '0' || styleData.photo_shadow === false || styleData.photo_shadow === 0 ? 0 : 5);
          let radius = parseFloat(styleData.radius && (styleData.radius.value || styleData.radius) ? (styleData.radius.value || styleData.radius) : 20, 10);
          let opacity = styleData.icon_opacity ? (parseFloat(styleData.icon_opacity.value || styleData.icon_opacity, 10) / 100) : 1;
          currentImageStyle = self.createPhotoIconStyle(photoSrc, kind, crop, shadow, radius, strokeStyle, opacity, newScale);
        }
      } else if (currentImageStyle && newScale !== 0.0 && currentImageStyle.setScale) {
        currentImageStyle.setScale(newScale);
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
            image: currentImageStyle,
            text: textStyle,
            stroke: strokeStyle,
            fill: fillStyle,
            zIndex: zIndex
          })
        );
      } else {
        stylesArray.push(
          new Style({
            image: currentImageStyle,
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
    if (this.fnStyleFunction) {
      styleFunction = Function("feature","data","map",this.fnStyleFunction);
    }
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
    let initialScale = "cust_icon_svgphoto".includes(styleData.styletype) ? parseFloat(styleData.icon_scale) : 1;
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
          radius: styleData.radius.value || 10,
          radius2: styleData.radius.value ? Math.floor(styleData.radius.value * 0.5) : 4,
          points: 5,
          angle: 0
        });
        break;
      case 'x':
        imageStyle = new RegularShape({
          stroke: strokeStyle,
          points: 4,
          radius: styleData.radius.value || 10,
          radius2: 0,
          angle: Math.PI / 4
        });
        break;
      case 'cross':
        imageStyle = new RegularShape({
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
          let width, height, offsetX, offsetY;
          width = styleData.icon_size[0];
          height = styleData.icon_size[1];
          offsetX = parseFloat(styleData.icon_offset[0]);
          offsetY = parseFloat(styleData.icon_offset[1]);
          let anchorX = 1 / (parseInt(width) / (parseInt(offsetX) * -1));
          let anchorY = 1 / (parseInt(height) / (parseInt(offsetY) * -1));

          // size was deprecated with new ol version and is no longer needed
          imageStyle = new Icon({
            anchor: [anchorX, anchorY],
            src: styleData.svgSrc,
            crossOrigin: 'anonymous'
          });
        }

        break;
      case 'photo' :
        let kind = styleData.photoKind === 'round' ? 'circle' : (styleData.photoKind || 'default');
        let crop = styleData.photo_crop === '0' || styleData.photo_crop === false ? false : true;
        let shadow = (styleData.photo_shadow == '1' || styleData.photo_shadow === true || styleData.photo_shadow === 'true' || styleData.photo_shadow === 5) ? 5 : (styleData.photo_shadow === '0' || styleData.photo_shadow === false || styleData.photo_shadow === 0 ? 0 : 5);
        let radius = parseFloat(styleData.radius && (styleData.radius.value || styleData.radius) ? (styleData.radius.value || styleData.radius) : 20, 10);
        let opacity = styleData.icon_opacity ? (parseFloat(styleData.icon_opacity.value || styleData.icon_opacity, 10) / 100) : 1;
        imageStyle = this.createPhotoIconStyle(styleData.icon_src || '', kind, crop, shadow, radius, strokeStyle, opacity, 1);
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

  createPhotoIconStyle(photoSrc, kind, crop, shadow, radius, strokeStyle, opacity, scale) {
    const self = this;
    if (!self.photoStyles) {
      self.photoStyles = {};
    }
    if (!self.photoImageCache) {
      self.photoImageCache = {};
    }

    let strokeWidth = 0;
    let strokeColor = '#ffffff';
    if (strokeStyle) {
      if (typeof strokeStyle.getWidth === 'function') {
        strokeWidth = strokeStyle.getWidth() || 0;
      }
      if (typeof strokeStyle.getColor === 'function') {
        let col = strokeStyle.getColor();
        if (col) {
          strokeColor = typeof col === 'string' ? col : (Array.isArray(col) ? 'rgba(' + col.join(',') + ')' : col);
        }
      }
    }
    if (strokeWidth === 0 && self.locStyleArr && self.locStyleArr.strokewidth) {
      strokeWidth = parseInt(self.locStyleArr.strokewidth.value || self.locStyleArr.strokewidth, 10) || 0;
    }
    if (!strokeWidth) {
      strokeWidth = 3;
    }
    if (kind === 'folio') {
      strokeWidth += 6;
    }

    let cacheKey = (photoSrc || '') + '_' + kind + '_' + (crop ? '1' : '0') + '_' + shadow + '_' + radius + '_' + strokeWidth + '_' + strokeColor + '_' + opacity;

    let imgObj = photoSrc ? self.photoImageCache[photoSrc] : null;
    let isLoaded = imgObj && imgObj.complete && imgObj.naturalWidth > 0;

    if (!isLoaded && photoSrc) {
      if (!imgObj) {
        imgObj = new Image();
        imgObj.crossOrigin = 'anonymous';
        imgObj.src = photoSrc;
        self.photoImageCache[photoSrc] = imgObj;
        imgObj.onload = function() {
          for (let key in self.photoStyles) {
            if (key.startsWith(photoSrc + '_')) {
              delete self.photoStyles[key];
            }
          }
          if (self.controller && self.controller.mapController && self.controller.mapController.map) {
            self.controller.mapController.map.render();
          }
        };
        imgObj.onerror = function() {
          console.warn('Could not load photo from ' + photoSrc);
        };
      }
    }

    if (self.photoStyles[cacheKey]) {
      let cachedIcon = self.photoStyles[cacheKey];
      if (scale && scale !== 0.0 && cachedIcon.setScale) {
        cachedIcon.setScale(scale);
      }
      return cachedIcon;
    }

    let sanchor = (kind === 'anchored' ? 8 : 0);
    let shadowVal = Number(shadow) || 0;
    let innerSize = 2 * radius;
    let width = innerSize + 2 * strokeWidth + sanchor + shadowVal;
    let height = innerSize + 2 * strokeWidth + sanchor + shadowVal;

    let canvas = document.createElement('canvas');
    canvas.width = Math.ceil(width);
    canvas.height = Math.ceil(height);
    let ctx = canvas.getContext('2d');

    if (shadowVal > 0) {
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = shadowVal;
      ctx.shadowOffsetX = shadowVal / 2;
      ctx.shadowOffsetY = shadowVal / 2;
    }

    ctx.fillStyle = strokeColor || '#ffffff';
    ctx.beginPath();

    let drawRoundRect = function(context, x, y, w, h, r) {
      if (!r) {
        context.rect(x, y, w, h);
      } else {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        context.moveTo(x + r, y);
        context.arcTo(x + w, y, x + w, y + h, r);
        context.arcTo(x + w, y + h, x, y + h, r);
        context.arcTo(x, y + h, x, y, r);
        context.arcTo(x, y, x + w, y, r);
      }
    };

    switch (kind) {
      case 'square':
        ctx.rect(0, 0, width - shadowVal, height - shadowVal);
        break;
      case 'circle':
      case 'round':
        ctx.arc(radius + strokeWidth, radius + strokeWidth, radius + strokeWidth, 0, 2 * Math.PI, false);
        break;
      case 'folio': {
        let offset = 6;
        let w = width - shadowVal - 2 * offset;
        let a = Math.atan(6 / w);
        ctx.save();
        ctx.rotate(-a);
        ctx.translate(-6, 2);
        ctx.beginPath();
        ctx.rect(offset, offset, w, w);
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.translate(6, -1);
        ctx.rotate(a);
        ctx.beginPath();
        ctx.rect(offset, offset, w, w);
        ctx.fill();
        ctx.restore();
        ctx.beginPath();
        ctx.rect(offset, offset, w, w);
        break;
      }
      case 'anchored':
        drawRoundRect(ctx, sanchor / 2, 0, width - sanchor - shadowVal, height - sanchor - shadowVal, strokeWidth || 3);
        ctx.moveTo(width / 2 - sanchor / 2 - shadowVal / 2 - 6, height - sanchor - shadowVal);
        ctx.lineTo(width / 2 - shadowVal / 2, height - shadowVal);
        ctx.lineTo(width / 2 + sanchor / 2 - shadowVal / 2 + 6, height - sanchor - shadowVal);
        break;
      default:
        drawRoundRect(ctx, 0, 0, width - shadowVal, height - shadowVal, strokeWidth || 3);
        break;
    }
    ctx.closePath();
    ctx.fill();

    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Draw the inner photo / content
    ctx.save();
    if (kind === 'circle' || kind === 'round') {
      ctx.beginPath();
      ctx.arc(radius + strokeWidth, radius + strokeWidth, radius, 0, 2 * Math.PI, false);
      ctx.clip();
    } else if (kind === 'anchored') {
      ctx.beginPath();
      drawRoundRect(ctx, sanchor / 2 + strokeWidth, strokeWidth, innerSize, innerSize, 0);
      ctx.clip();
    } else if (kind === 'folio') {
      let offset = 6;
      let sWidth = strokeWidth - offset;
      ctx.beginPath();
      ctx.rect(sWidth + offset, sWidth + offset, innerSize, innerSize);
      ctx.clip();
    } else {
      ctx.beginPath();
      ctx.rect(strokeWidth, strokeWidth, innerSize, innerSize);
      ctx.clip();
    }

    if (isLoaded) {
      let s, sx, sy, sw, sh, dx, dy, dw, dh;
      if (crop) {
        s = Math.min(imgObj.naturalWidth / innerSize, imgObj.naturalHeight / innerSize);
        sw = sh = s * innerSize;
        sx = (imgObj.naturalWidth - sw) / 2;
        sy = (imgObj.naturalHeight - sh) / 2;
        dx = strokeWidth + (kind === 'anchored' ? sanchor / 2 : 0);
        dy = strokeWidth;
        dw = dh = innerSize;
      } else {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        s = Math.min(innerSize / imgObj.naturalWidth, innerSize / imgObj.naturalHeight);
        sw = imgObj.naturalWidth;
        sh = imgObj.naturalHeight;
        dw = s * sw;
        dh = s * sh;
        dx = strokeWidth + (kind === 'anchored' ? sanchor / 2 : 0) + (innerSize - dw) / 2;
        dy = strokeWidth + (innerSize - dh) / 2;
        sx = sy = 0;
      }

      ctx.drawImage(imgObj, sx, sy, sw, sh, dx, dy, dw, dh);
    } else {
      // Placeholder while loading
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
    }
    ctx.restore();

    let anchorX = 0.5;
    let anchorY = 0.5;
    if (kind === 'anchored') {
      anchorY = (height - shadowVal) > 0 ? (height - shadowVal) / height : 1.0;
    }

    let iconStyle = new Icon({
      src: canvas.toDataURL(),
      anchor: [anchorX, anchorY],
      opacity: typeof opacity === 'number' ? opacity : 1,
      scale: (scale && scale !== 0.0) ? scale : 1
    });

    if (isLoaded) {
      self.photoStyles[cacheKey] = iconStyle;
    }
    return iconStyle;
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