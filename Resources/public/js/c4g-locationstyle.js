class C4gLocationStyle{
    constructor(locStyleArr, controller){
        this._id        = locStyleArr['id'];
        this._style     = this.getStyleFunction(locStyleArr);
        this._editor    = this.getStyleEditorConfig(locStyleArr);
        this._name      = locStyleArr['name'];
        this._tooltip   = locStyleArr['tooltip'];
        this._label     = locStyleArr['label'];
        this._minzoom   = locStyleArr['minzoom'];
        this._maxzoom   = locStyleArr['maxzoom'];
        this._fnStyleFunction = locStyleArr['style_function_js'];
        this._controller= controller;
        this._locStyleArr = locStyleArr;
    }

    get locStyleArr() {
        return this._locStyleArr;
    }

    set locStyleArr(value) {
        this._locStyleArr = value;
    }

    get controller() {
        return this._controller;
    }

    set controller(value) {
        this._controller = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get style() {
        return this._style;
    }

    set style(value) {
        this._style = value;
    }

    get editor() {
        return this._editor;
    }

    set editor(value) {
        this._editor = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get tooltip() {
        return this._tooltip;
    }

    set tooltip(value) {
        this._tooltip = value;
    }

    get label() {
        return this._label;
    }

    set label(value) {
        this._label = value;
    }

    get minzoom() {
        return this._minzoom;
    }

    set minzoom(value) {
        this._minzoom = value;
    }

    get maxzoom() {
        return this._maxzoom;
    }

    set maxzoom(value) {
        this._maxzoom = value;
    }

    get fnStyleFunction() {
        return this._fnStyleFunction;
    }

    set fnStyleFunction(value) {
        this._fnStyleFunction = value;
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
                    if (styleData.icon_src.search(".svg") >-1){
                        let imgSizeX = 1000;
                        let imgSizeY = parseInt(styleData.icon_size[1])/ parseInt(styleData.icon_size[0])*imgSizeX
                        let imgScale = (parseInt(styleData.icon_size[0]) / imgSizeX) * parseFloat(styleData.icon_scale, 10);
                        let color = c4g.maps.utils.getRgbaFromHexAndOpacity("ff0000", 50, true);
                        imageStyle = new ol.style.Icon({
                            src: styleData.icon_src,
                            opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
                            imgSize:[imgSizeX,imgSizeY],
                            scale: imgScale,
                            //color: new ol.color.asArray(color)
                        });
                    }
                    else{
                        // let imgSizeX = 1000;
                        // let imgSizeY = parseInt(styleData.icon_size[1])/ parseInt(styleData.icon_size[0])*imgSizeX
                        // let imgScale = (parseInt(styleData.icon_size[0]) / imgSizeX) * parseFloat(styleData.icon_scale, 10);
                        // let color = c4g.maps.utils.getRgbaFromHexAndOpacity("ff0000", 50, true);
                        // imageStyle = new ol.style.Icon({
                        //     src: styleData.icon_src,
                        //     opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
                        //     // imgSize:[imgSizeX,imgSizeY],
                        //     // scale: imgScale,
                        //     //color: new ol.color.asArray(color)
                        // });
                        imageStyle = new ol.style.Icon({
                            //anchor: [(-1 * (styleData.icon_offset[0] || 0)), (-1 * (styleData.icon_offset[1] || 0))],
                            //anchorXUnits: 'pixels',
                            //anchorYUnits: 'pixels',
                            opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
                            src: /*(self.controller.mapController.data.icon_source ? self.controller.mapController.data.icon_source : '') + */styleData.icon_src,
                            size: [parseInt(styleData.icon_size[0], 10), parseInt(styleData.icon_size[1], 10)],
                            scale: parseFloat(styleData.icon_scale, 10),
                        });
                    }

                    break;
                } // fallthrough
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