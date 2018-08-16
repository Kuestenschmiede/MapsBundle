class C4gLocationStyle{
    constructor(locStyleArr, controller){
        this.id        = locStyleArr['id'];
        this.style     = this.getStyleFunction(locStyleArr);
        this.editor    = this.getStyleEditorConfig(locStyleArr);
        this.name      = locStyleArr['name'];
        this.tooltip   = locStyleArr['tooltip'];
        this.label     = locStyleArr['label'];
        this.minzoom   = locStyleArr['minzoom'];
        this.maxzoom   = locStyleArr['maxzoom'];
        this.fnStyleFunction = locStyleArr['style_function_js'];
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
            textStyleOutline;

        self = this;

        // general
        strokeStyle = new ol.style.Stroke({
            color: c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.strokecolor, styleData.strokeopacity),
            width: parseInt(styleData.strokewidth.value, 10)
        });
        fillStyle = new ol.style.Fill({
            color: c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.fillcolor, styleData.fillopacity)
        });

        // image
        switch (styleData.styletype) {
            case 'square':
                imageStyle = new ol.style.RegularShape({
                    fill: fillStyle,
                    stroke: strokeStyle,
                    points: 4,
                    radius: styleData.radius.value || 10,
                    angle: Math.PI / 4
                });
                break;
            case 'star':
                imageStyle = new ol.style.RegularShape({
                    fill: fillStyle,
                    stroke: strokeStyle,
                    radius1: styleData.radius.value || 10,
                    radius2: styleData.radius.value ? Math.floor(styleData.radius.value * 0.5) : 4,
                    points: 5,
                    angle: 0
                });
                break;
            case 'x':
                imageStyle = new ol.style.RegularShape({
                    fill: fillStyle,
                    stroke: strokeStyle,
                    points: 4,
                    radius: styleData.radius.value || 10,
                    radius2: 0,
                    angle: Math.PI / 4
                });
                break;
            case 'cross':
                imageStyle = new ol.style.RegularShape({
                    fill: fillStyle,
                    stroke: strokeStyle,
                    points: 4,
                    radius: styleData.radius.value || 10,
                    radius2: 0,
                    angle: 0
                });
                break;
            case 'triangle':
                imageStyle = new ol.style.RegularShape({
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
                        imageStyle = new ol.style.Icon({
                            opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
                            src: styleData.icon_src,
                            size: [parseInt(styleData.icon_size[0], 10), parseInt(styleData.icon_size[1], 10)],
                            scale: parseFloat(styleData.icon_scale, 10),
                        });
                    }
                    break;
            case 'cust_icon_svg':
                    if(styleData.svgSrc && styleData.icon_scale && styleData.icon_size) {
                        let canvas = document.createElement('canvas');
                        let ctx = canvas.getContext("2d");
                        let height = (styleData.icon_size[0]*styleData.icon_scale);
                        let width  = (styleData.icon_size[1]*styleData.icon_scale);
                        canvas.height = height+(2*styleData.strokewidth.value);
                        canvas.width  = width+(2*styleData.strokewidth.value);
                        ctx.clearRect(0, 0, canvas.width,  canvas.height);

                        if (styleData.fillcolor) {
                            ctx.fillStyle = c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.fillcolor, styleData.fillopacity.value);
                            ctx.fillRect(0, 0, canvas.width,  canvas.height);
                        }

                        if (styleData.strokewidth && styleData.strokewidth.value && styleData.strokecolor) {
                            ctx.strokeStyle = c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.strokecolor, styleData.strokeopacity.value);
                            ctx.lineWidth = styleData.strokewidth.value;
                            ctx.strokeRect(0, 0, canvas.width, canvas.height);
                            ctx.translate(0.5, 0.5);
                        }

                        // if (styleData.icon_opacity.value && (styleData.icon_opacity.value > 0)) {
                        //     ctx.globalAlpha = (styleData.icon_opacity.value / 100);
                        // }

                        let img = new Image();
                        img.src = styleData.svgSrc;
                        img.zIndex = 100; //Test

                        img.onload = function() {
                            ctx.drawImage(img, styleData.strokewidth.value, styleData.strokewidth.value, width, height);
                        }

                        imageStyle = new ol.style.Icon({
                            img: canvas,
                            imgSize: [canvas.width, canvas.height]/*,
                            opacity: (styleData.icon_opacity.value / 100)*/
                        });
                    }

                break;
            case 'photo' :
                imageStyle = new ol.style.Photo({
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
                imageStyle = new ol.style.Circle({
                    fill: fillStyle,
                    stroke: strokeStyle,
                    radius: styleData.radius.value || 7
                });
                break;
            default:
                imageStyle = new ol.style.Circle({
                    fill: fillStyle,
                    stroke: strokeStyle,
                    radius: styleData.radius.value || 7
                });
        }

        // build function
        styleFunction = function (feature, projection, getId) {
            var stylesArray,
                label,
                arrowSize,
                arrowSizeUnit,
                segmentLength,
                arrows_minzoom,
                start_pixel,
                end_pixel;

            if (getId) {
                return styleData.id;
            }

            // check if this is a feature.styleFunction
            if (!(feature instanceof ol.Feature)) {
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
                    textStyleOutline = new ol.style.Stroke({
                        color: c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.label_outl_color || defaultColor, {
                            unit: '%',
                            value: 100
                        }),
                        width: parseInt(styleData.label_outl_width.value, 10)
                    });
                }
                if (!styleData.label_offset) {
                    styleData.label_offset = [0, 0, "px"];
                }

                textStyle = new ol.style.Text({
                    text: label,
                    font: (styleData.font_weight || 'normal') + ' ' + (styleData.font_style || 'normal') + ' ' + (styleData.font_size || '13') + 'px ' + (styleData.font_family || 'sans-serif'),
                    // scale: parseInt(styleData.font_size || 0, 10) || undefined,
                    offsetX: parseInt(styleData.label_offset[0] || 0, 10),
                    offsetY: parseInt(styleData.label_offset[1] || 0, 10),
                    textAlign: styleData.label_align_hor,
                    textBaseline: styleData.label_align_ver,
                    fill: new ol.style.Fill({
                        color: c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.font_color || defaultColor, styleData.font_opacity)
                    }),
                    stroke: textStyleOutline
                });
            }

            // create style-object
            // we need this check because textStyle is a var accessible from closure and will be set even if no label is set
            if (label) {
                stylesArray.push(
                    new ol.style.Style({
                        image: imageStyle,
                        text: textStyle,
                        stroke: strokeStyle,
                        fill: fillStyle
                    })
                );
            } else {
                stylesArray.push(
                    new ol.style.Style({
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
                && !(feature.getGeometry() instanceof ol.geom.Point)
                && typeof feature.getGeometry().forEachSegment === 'function'
            ) {
                arrowSize = (styleData.line_arrows_radius) ? (parseInt(styleData.line_arrows_radius.value, 10) * 2) : 0;
                arrowSizeUnit = arrowSize + styleData.line_arrows_radius.unit;
                feature.getGeometry().forEachSegment(function (start, end) {
                    //if minzoom is 0 (unlimited), hide arrows if they are bigger than the segment
                    arrows_minzoom = parseInt(styleData.line_arrows_minzoom, 10);
                    start_pixel = self.controller.mapController.map.getPixelFromCoordinate(start);
                    end_pixel = self.controller.mapController.map.getPixelFromCoordinate(end);
                    // euclid-distance between start and end
                    segmentLength = Math.sqrt(Math.pow(end_pixel[1] - start_pixel[1], 2) + Math.pow(end_pixel[0] - start_pixel[0], 2));

                    if (
                        (arrows_minzoom < 0 && arrowSize + parseInt(styleData.strokewidth.value, 10) < segmentLength)
                        || (arrows_minzoom >= 0 && self.controller.mapController.map.getView().getZoom() >= arrows_minzoom)
                    ) {
                        // forward arrows
                        stylesArray.push(
                            new ol.style.Style({
                                geometry: new ol.geom.Point(end),
                                text: new ol.style.Text({
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
                                new ol.style.Style({
                                    geometry: new ol.geom.Point(start),
                                    text: new ol.style.Text({
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
            }

            return stylesArray;
        };

        return styleFunction;
    } // end of "getStyleFunction()"


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