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
                if (styleData.iconType) {
                    if (styleData.iconType == "vector" && styleData.svgSrc){
                        let imgSizeX = 1000;
                        let imgSizeY = parseInt(styleData.svgSize[1])/ parseInt(styleData.svgSize[0])*imgSizeX;
                        let imgScale = (parseInt(styleData.svgSize[0]) / imgSizeX);
                        if(styleData.fillcolor){
                            let color = c4g.maps.utils.getRgbaFromHexAndOpacity(styleData.fillcolor, 50, true);
                            imageStyle = new ol.style.Icon({
                                src: styleData.svgSrc,
                                opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
                                imgSize:[imgSizeX,imgSizeY],
                                scale: imgScale,
                                color: new ol.color.asArray(color)
                            });
                        }
                        else{
                            imageStyle = new ol.style.Icon({
                                src: styleData.svgSrc,
                                opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
                                imgSize:[imgSizeX,imgSizeY],
                                scale: imgScale,
                            });
                        }

                    }
                    else if(styleData.iconType == "pixel" && styleData.icon_src){
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
                } // fallthrough
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
            case 'fontawesome':
                ol.style.FontSymbol.addDefs(
                    {	"font":"FontAwesome",
                        "name":"FontAwesome",
                        "copyright":"SIL OFL 1.1",
                        "prefix": "fa"
                    },
                    {	"fa-glass": "\uf000",
                        "fa-music": "\uf001",
                        "fa-search": "\uf002",
                        "fa-envelope-o": "\uf003",
                        "fa-heart": "\uf004",
                        "fa-star": "\uf005",
                        "fa-star-o": "\uf006",
                        "fa-user": "\uf007",
                        "fa-film": "\uf008",
                        "fa-th-large": "\uf009",
                        "fa-th": "\uf00a",
                        "fa-th-list": "\uf00b",
                        "fa-check": "\uf00c",
                        "fa-remove":"\uf00d",
                        "fa-close":"\uf00d",
                        "fa-times": "\uf00d",
                        "fa-search-plus": "\uf00e",
                        "fa-search-minus": "\uf010",
                        "fa-power-off": "\uf011",
                        "fa-signal": "\uf012",
                        "fa-gear": "\uf013",
                        "fa-cog": "\uf013",
                        "fa-trash-o": "\uf014",
                        "fa-home": "\uf015",
                        "fa-file-o": "\uf016",
                        "fa-clock-o": "\uf017",
                        "fa-road": "\uf018",
                        "fa-download": "\uf019",
                        "fa-arrow-circle-o-down": "\uf01a",
                        "fa-arrow-circle-o-up": "\uf01b",
                        "fa-inbox": "\uf01c",
                        "fa-play-circle-o": "\uf01d",
                        "fa-rotate-right": "\uf01e",
                        "fa-repeat": "\uf01e",
                        "fa-refresh": "\uf021",
                        "fa-list-alt": "\uf022",
                        "fa-lock": "\uf023",
                        "fa-flag": "\uf024",
                        "fa-headphones": "\uf025",
                        "fa-volume-off": "\uf026",
                        "fa-volume-down": "\uf027",
                        "fa-volume-up": "\uf028",
                        "fa-qrcode": "\uf029",
                        "fa-barcode": "\uf02a",
                        "fa-tag": "\uf02b",
                        "fa-tags": "\uf02c",
                        "fa-book": "\uf02d",
                        "fa-bookmark": "\uf02e",
                        "fa-print": "\uf02f",
                        "fa-camera": "\uf030",
                        "fa-font": "\uf031",
                        "fa-bold": "\uf032",
                        "fa-italic": "\uf033",
                        "fa-text-height": "\uf034",
                        "fa-text-width": "\uf035",
                        "fa-align-left": "\uf036",
                        "fa-align-center": "\uf037",
                        "fa-align-right": "\uf038",
                        "fa-align-justify": "\uf039",
                        "fa-list": "\uf03a",
                        "fa-dedent": "\uf03b",
                        "fa-outdent": "\uf03b",
                        "fa-indent": "\uf03c",
                        "fa-video-camera": "\uf03d",
                        "fa-photo": "\uf03e",
                        "fa-image": "\uf03e",
                        "fa-picture-o": "\uf03e",
                        "fa-pencil": "\uf040",
                        "fa-map-marker": "\uf041",
                        "fa-adjust": "\uf042",
                        "fa-tint": "\uf043",
                        "fa-edit": "\uf044",
                        "fa-pencil-square-o": "\uf044",
                        "fa-share-square-o": "\uf045",
                        "fa-check-square-o": "\uf046",
                        "fa-arrows": "\uf047",
                        "fa-step-backward": "\uf048",
                        "fa-fast-backward": "\uf049",
                        "fa-backward": "\uf04a",
                        "fa-play": "\uf04b",
                        "fa-pause": "\uf04c",
                        "fa-stop": "\uf04d",
                        "fa-forward": "\uf04e",
                        "fa-fast-forward": "\uf050",
                        "fa-step-forward": "\uf051",
                        "fa-eject": "\uf052",
                        "fa-chevron-left": "\uf053",
                        "fa-chevron-right": "\uf054",
                        "fa-plus-circle": "\uf055",
                        "fa-minus-circle": "\uf056",
                        "fa-times-circle": "\uf057",
                        "fa-check-circle": "\uf058",
                        "fa-question-circle": "\uf059",
                        "fa-info-circle": "\uf05a",
                        "fa-crosshairs": "\uf05b",
                        "fa-times-circle-o": "\uf05c",
                        "fa-check-circle-o": "\uf05d",
                        "fa-ban": "\uf05e",
                        "fa-arrow-left": "\uf060",
                        "fa-arrow-right": "\uf061",
                        "fa-arrow-up": "\uf062",
                        "fa-arrow-down": "\uf063",
                        "fa-mail-forward": "\uf064",
                        "fa-share": "\uf064",
                        "fa-expand": "\uf065",
                        "fa-compress": "\uf066",
                        "fa-plus": "\uf067",
                        "fa-minus": "\uf068",
                        "fa-asterisk": "\uf069",
                        "fa-exclamation-circle": "\uf06a",
                        "fa-gift": "\uf06b",
                        "fa-leaf": "\uf06c",
                        "fa-fire": "\uf06d",
                        "fa-eye": "\uf06e",
                        "fa-eye-slash": "\uf070",
                        "fa-warning": "\uf071",
                        "fa-exclamation-triangle": "\uf071",
                        "fa-plane": "\uf072",
                        "fa-calendar": "\uf073",
                        "fa-random": "\uf074",
                        "fa-comment": "\uf075",
                        "fa-magnet": "\uf076",
                        "fa-chevron-up": "\uf077",
                        "fa-chevron-down": "\uf078",
                        "fa-retweet": "\uf079",
                        "fa-shopping-cart": "\uf07a",
                        "fa-folder": "\uf07b",
                        "fa-folder-open": "\uf07c",
                        "fa-arrows-v": "\uf07d",
                        "fa-arrows-h": "\uf07e",
                        "fa-bar-t-o": "\uf080",
                        "fa-bar-t": "\uf080",
                        "fa-twitter-square": "\uf081",
                        "fa-facebook-square": "\uf082",
                        "fa-camera-retro": "\uf083",
                        "fa-key": "\uf084",
                        "fa-gears": "\uf085",
                        "fa-cogs": "\uf085",
                        "fa-comments": "\uf086",
                        "fa-thumbs-o-up": "\uf087",
                        "fa-thumbs-o-down": "\uf088",
                        "fa-star-half": "\uf089",
                        "fa-heart-o": "\uf08a",
                        "fa-sign-out": "\uf08b",
                        "fa-linkedin-square": "\uf08c",
                        "fa-thumb-tack": "\uf08d",
                        "fa-external-link": "\uf08e",
                        "fa-sign-in": "\uf090",
                        "fa-trophy": "\uf091",
                        "fa-github-square": "\uf092",
                        "fa-upload": "\uf093",
                        "fa-lemon-o": "\uf094",
                        "fa-phone": "\uf095",
                        "fa-square-o": "\uf096",
                        "fa-bookmark-o": "\uf097",
                        "fa-phone-square": "\uf098",
                        "fa-twitter": "\uf099",
                        "fa-facebook-f": "\uf09a",
                        "fa-facebook": "\uf09a",
                        "fa-github": "\uf09b",
                        "fa-unlock": "\uf09c",
                        "fa-credit-card": "\uf09d",
                        "fa-feed": "\uf09e",
                        "fa-rss": "\uf09e",
                        "fa-hdd-o": "\uf0a0",
                        "fa-bullhorn": "\uf0a1",
                        "fa-bell": "\uf0f3",
                        "fa-certificate": "\uf0a3",
                        "fa-hand-o-right": "\uf0a4",
                        "fa-hand-o-left": "\uf0a5",
                        "fa-hand-o-up": "\uf0a6",
                        "fa-hand-o-down": "\uf0a7",
                        "fa-arrow-circle-left": "\uf0a8",
                        "fa-arrow-circle-right": "\uf0a9",
                        "fa-arrow-circle-up": "\uf0aa",
                        "fa-arrow-circle-down": "\uf0ab",
                        "fa-globe": "\uf0ac",
                        "fa-wrench": "\uf0ad",
                        "fa-tasks": "\uf0ae",
                        "fa-filter": "\uf0b0",
                        "fa-briefcase": "\uf0b1",
                        "fa-arrows-alt": "\uf0b2",
                        "fa-group": "\uf0c0",
                        "fa-users": "\uf0c0",
                        "fa-chain": "\uf0c1",
                        "fa-link": "\uf0c1",
                        "fa-cloud": "\uf0c2",
                        "fa-flask": "\uf0c3",
                        "fa-cut": "\uf0c4",
                        "fa-scissors": "\uf0c4",
                        "fa-copy": "\uf0c5",
                        "fa-files-o": "\uf0c5",
                        "fa-paperclip": "\uf0c6",
                        "fa-save": "\uf0c7",
                        "fa-floppy-o": "\uf0c7",
                        "fa-square": "\uf0c8",
                        "fa-navicon": "\uf0c9",
                        "fa-reorder": "\uf0c9",
                        "fa-bars": "\uf0c9",
                        "fa-list-ul": "\uf0ca",
                        "fa-list-ol": "\uf0cb",
                        "fa-strikethrough": "\uf0cc",
                        "fa-underline": "\uf0cd",
                        "fa-table": "\uf0ce",
                        "fa-magic": "\uf0d0",
                        "fa-truck": "\uf0d1",
                        "fa-pinterest": "\uf0d2",
                        "fa-pinterest-square": "\uf0d3",
                        "fa-google-plus-square": "\uf0d4",
                        "fa-google-plus": "\uf0d5",
                        "fa-money": "\uf0d6",
                        "fa-caret-down": "\uf0d7",
                        "fa-caret-up": "\uf0d8",
                        "fa-caret-left": "\uf0d9",
                        "fa-caret-right": "\uf0da",
                        "fa-columns": "\uf0db",
                        "fa-unsorted": "\uf0dc",
                        "fa-sort": "\uf0dc",
                        "fa-sort-down":  "\uf0dd",
                        "fa-sort-desc": "\uf0dd",
                        "fa-sort-up": "\uf0de",
                        "fa-sort-asc": "\uf0de",
                        "fa-envelope": "\uf0e0",
                        "fa-linkedin": "\uf0e1",
                        "fa-rotate-left": "\uf0e2",
                        "fa-undo": "\uf0e2",
                        "fa-legal": "\uf0e3",
                        "fa-gavel": "\uf0e3",
                        "fa-dashboard": "\uf0e4",
                        "fa-tachometer": "\uf0e4",
                        "fa-comment-o": "\uf0e5",
                        "fa-comments-o": "\uf0e6",
                        "fa-flash": "\uf0e7",
                        "fa-bolt": "\uf0e7",
                        "fa-sitemap": "\uf0e8",
                        "fa-umbrella": "\uf0e9",
                        "fa-paste": "\uf0ea",
                        "fa-clipboard": "\uf0ea",
                        "fa-lightbulb-o": "\uf0eb",
                        "fa-exchange": "\uf0ec",
                        "fa-cloud-download": "\uf0ed",
                        "fa-cloud-upload": "\uf0ee",
                        "fa-user-md": "\uf0f0",
                        "fa-stethoscope": "\uf0f1",
                        "fa-suitcase": "\uf0f2",
                        "fa-bell-o": "\uf0a2",
                        "fa-coffee": "\uf0f4",
                        "fa-cutlery": "\uf0f5",
                        "fa-file-text-o": "\uf0f6",
                        "fa-building-o": "\uf0f7",
                        "fa-hospital-o": "\uf0f8",
                        "fa-ambulance": "\uf0f9",
                        "fa-medkit": "\uf0fa",
                        "fa-fighter-jet": "\uf0fb",
                        "fa-beer": "\uf0fc",
                        "fa-h-square": "\uf0fd",
                        "fa-plus-square": "\uf0fe",
                        "fa-angle-double-left": "\uf100",
                        "fa-angle-double-right": "\uf101",
                        "fa-angle-double-up": "\uf102",
                        "fa-angle-double-down": "\uf103",
                        "fa-angle-left": "\uf104",
                        "fa-angle-right": "\uf105",
                        "fa-angle-up": "\uf106",
                        "fa-angle-down": "\uf107",
                        "fa-desktop": "\uf108",
                        "fa-laptop": "\uf109",
                        "fa-tablet": "\uf10a",
                        "fa-mobile-phone": "\uf10b",
                        "fa-mobile": "\uf10b",
                        "fa-circle-o": "\uf10c",
                        "fa-quote-left": "\uf10d",
                        "fa-quote-right": "\uf10e",
                        "fa-spinner": "\uf110",
                        "fa-circle": "\uf111",
                        "fa-mail-reply": "\uf112",
                        "fa-reply": "\uf112",
                        "fa-github-alt": "\uf113",
                        "fa-folder-o": "\uf114",
                        "fa-folder-open-o": "\uf115",
                        "fa-smile-o": "\uf118",
                        "fa-frown-o": "\uf119",
                        "fa-meh-o": "\uf11a",
                        "fa-gamepad": "\uf11b",
                        "fa-keyboard-o": "\uf11c",
                        "fa-flag-o": "\uf11d",
                        "fa-flag-checkered": "\uf11e",
                        "fa-terminal": "\uf120",
                        "fa-code": "\uf121",
                        "fa-mail-reply-all": "\uf122",
                        "fa-reply-all": "\uf122",
                        "fa-star-half-empty": "\uf123",
                        "fa-star-half-full": "\uf123",
                        "fa-star-half-o": "\uf123",
                        "fa-location-arrow": "\uf124",
                        "fa-crop": "\uf125",
                        "fa-code-fork": "\uf126",
                        "fa-unlink": "\uf127",
                        "fa-chain-broken": "\uf127",
                        "fa-question": "\uf128",
                        "fa-info": "\uf129",
                        "fa-exclamation": "\uf12a",
                        "fa-superscript": "\uf12b",
                        "fa-subscript": "\uf12c",
                        "fa-eraser": "\uf12d",
                        "fa-puzzle-piece": "\uf12e",
                        "fa-microphone": "\uf130",
                        "fa-microphone-slash": "\uf131",
                        "fa-shield": "\uf132",
                        "fa-calendar-o": "\uf133",
                        "fa-fire-extinguisher": "\uf134",
                        "fa-rocket": "\uf135",
                        "fa-maxcdn": "\uf136",
                        "fa-chevron-circle-left": "\uf137",
                        "fa-chevron-circle-right": "\uf138",
                        "fa-chevron-circle-up": "\uf139",
                        "fa-chevron-circle-down": "\uf13a",
                        "fa-html5": "\uf13b",
                        "fa-css3": "\uf13c",
                        "fa-anchor": "\uf13d",
                        "fa-unlock-alt": "\uf13e",
                        "fa-bullseye": "\uf140",
                        "fa-ellipsis-h": "\uf141",
                        "fa-ellipsis-v": "\uf142",
                        "fa-rss-square": "\uf143",
                        "fa-play-circle": "\uf144",
                        "fa-ticket": "\uf145",
                        "fa-minus-square": "\uf146",
                        "fa-minus-square-o": "\uf147",
                        "fa-level-up": "\uf148",
                        "fa-level-down": "\uf149",
                        "fa-check-square": "\uf14a",
                        "fa-pencil-square": "\uf14b",
                        "fa-external-link-square": "\uf14c",
                        "fa-share-square": "\uf14d",
                        "fa-compass": "\uf14e",
                        "fa-toggle-down": "\uf150",
                        "fa-caret-square-o-down": "\uf150",
                        "fa-toggle-up": "\uf151",
                        "fa-caret-square-o-up": "\uf151",
                        "fa-toggle-right": "\uf152",
                        "fa-caret-square-o-right": "\uf152",
                        "fa-euro": "\uf153",
                        "fa-eur": "\uf153",
                        "fa-gbp": "\uf154",
                        "fa-dollar": "\uf155",
                        "fa-usd": "\uf155",
                        "fa-rupee": "\uf156",
                        "fa-inr": "\uf156",
                        "fa-cny": "\uf157",
                        "fa-rmb": "\uf157",
                        "fa-yen": "\uf157",
                        "fa-jpy": "\uf157",
                        "fa-ruble": "\uf158",
                        "fa-rouble": "\uf158",
                        "fa-rub": "\uf158",
                        "fa-won": "\uf159",
                        "fa-krw": "\uf159",
                        "fa-bitcoin": "\uf15a",
                        "fa-btc": "\uf15a",
                        "fa-file": "\uf15b",
                        "fa-file-text": "\uf15c",
                        "fa-sort-alpha-asc": "\uf15d",
                        "fa-sort-alpha-desc": "\uf15e",
                        "fa-sort-amount-asc": "\uf160",
                        "fa-sort-amount-desc": "\uf161",
                        "fa-sort-numeric-asc": "\uf162",
                        "fa-sort-numeric-desc": "\uf163",
                        "fa-thumbs-up": "\uf164",
                        "fa-thumbs-down": "\uf165",
                        "fa-youtube-square": "\uf166",
                        "fa-youtube": "\uf167",
                        "fa-xing": "\uf168",
                        "fa-xing-square": "\uf169",
                        "fa-youtube-play": "\uf16a",
                        "fa-dropbox": "\uf16b",
                        "fa-stack-overflow": "\uf16c",
                        "fa-instagram": "\uf16d",
                        "fa-flickr": "\uf16e",
                        "fa-adn": "\uf170",
                        "fa-bitbucket": "\uf171",
                        "fa-bitbucket-square": "\uf172",
                        "fa-tumblr": "\uf173",
                        "fa-tumblr-square": "\uf174",
                        "fa-long-arrow-down": "\uf175",
                        "fa-long-arrow-up": "\uf176",
                        "fa-long-arrow-left": "\uf177",
                        "fa-long-arrow-right": "\uf178",
                        "fa-apple": "\uf179",
                        "fa-windows": "\uf17a",
                        "fa-android": "\uf17b",
                        "fa-linux": "\uf17c",
                        "fa-dribbble": "\uf17d",
                        "fa-skype": "\uf17e",
                        "fa-foursquare": "\uf180",
                        "fa-trello": "\uf181",
                        "fa-female": "\uf182",
                        "fa-male": "\uf183",
                        "fa-gittip": "\uf184",
                        "fa-gratipay": "\uf184",
                        "fa-sun-o": "\uf185",
                        "fa-moon-o": "\uf186",
                        "fa-archive": "\uf187",
                        "fa-bug": "\uf188",
                        "fa-vk": "\uf189",
                        "fa-weibo": "\uf18a",
                        "fa-renren": "\uf18b",
                        "fa-pagelines": "\uf18c",
                        "fa-stack-exchange": "\uf18d",
                        "fa-arrow-circle-o-right": "\uf18e",
                        "fa-arrow-circle-o-left": "\uf190",
                        "fa-toggle-left": "\uf191",
                        "fa-caret-square-o-left": "\uf191",
                        "fa-dot-circle-o": "\uf192",
                        "fa-wheelchair": "\uf193",
                        "fa-vimeo-square": "\uf194",
                        "fa-turkish-lira": "\uf195",
                        "fa-try": "\uf195",
                        "fa-plus-square-o": "\uf196",
                        "fa-space-shuttle": "\uf197",
                        "fa-slack": "\uf198",
                        "fa-envelope-square": "\uf199",
                        "fa-wordpress": "\uf19a",
                        "fa-openid": "\uf19b",
                        "fa-institution": "\uf19c",
                        "fa-bank": "\uf19c",
                        "fa-university": "\uf19c",
                        "fa-mortar-board": "\uf19d",
                        "fa-graduation-cap": "\uf19d",
                        "fa-yahoo": "\uf19e",
                        "fa-google": "\uf1a0",
                        "fa-reddit": "\uf1a1",
                        "fa-reddit-square": "\uf1a2",
                        "fa-stumbleupon-circle": "\uf1a3",
                        "fa-stumbleupon": "\uf1a4",
                        "fa-delicious": "\uf1a5",
                        "fa-digg": "\uf1a6",
                        "fa-pied-piper": "\uf1a7",
                        "fa-pied-piper-alt": "\uf1a8",
                        "fa-drupal": "\uf1a9",
                        "fa-joomla": "\uf1aa",
                        "fa-language": "\uf1ab",
                        "fa-fax": "\uf1ac",
                        "fa-building": "\uf1ad",
                        "fa-child": "\uf1ae",
                        "fa-paw": "\uf1b0",
                        "fa-spoon": "\uf1b1",
                        "fa-cube": "\uf1b2",
                        "fa-cubes": "\uf1b3",
                        "fa-behance": "\uf1b4",
                        "fa-behance-square": "\uf1b5",
                        "fa-steam": "\uf1b6",
                        "fa-steam-square": "\uf1b7",
                        "fa-recycle": "\uf1b8",
                        "fa-automobile": "\uf1b9",
                        "fa-car": "\uf1b9",
                        "fa-cab": "\uf1ba",
                        "fa-taxi": "\uf1ba",
                        "fa-tree": "\uf1bb",
                        "fa-spotify": "\uf1bc",
                        "fa-deviantart": "\uf1bd",
                        "fa-soundcloud": "\uf1be",
                        "fa-database": "\uf1c0",
                        "fa-file-pdf-o": "\uf1c1",
                        "fa-file-word-o": "\uf1c2",
                        "fa-file-excel-o": "\uf1c3",
                        "fa-file-powerpoint-o": "\uf1c4",
                        "fa-file-photo-o": "\uf1c5",
                        "fa-file-picture-o": "\uf1c5",
                        "fa-file-image-o": "\uf1c5",
                        "fa-file-zip-o": "\uf1c6",
                        "fa-file-archive-o": "\uf1c6",
                        "fa-file-sound-o": "\uf1c7",
                        "fa-file-audio-o": "\uf1c7",
                        "fa-file-movie-o": "\uf1c8",
                        "fa-file-video-o": "\uf1c8",
                        "fa-file-code-o": "\uf1c9",
                        "fa-vine": "\uf1ca",
                        "fa-codepen": "\uf1cb",
                        "fa-jsfiddle": "\uf1cc",
                        "fa-life-bouy": "\uf1cd",
                        "fa-life-buoy": "\uf1cd",
                        "fa-life-saver": "\uf1cd",
                        "fa-support": "\uf1cd",
                        "fa-life-ring": "\uf1cd",
                        "fa-circle-o-notch": "\uf1ce",
                        "fa-ra": "\uf1d0",
                        "fa-rebel": "\uf1d0",
                        "fa-ge": "\uf1d1",
                        "fa-empire": "\uf1d1",
                        "fa-git-square": "\uf1d2",
                        "fa-git": "\uf1d3",
                        "fa-y-combinator-square": "\uf1d4",
                        "fa-yc-square": "\uf1d4",
                        "fa-hacker-news": "\uf1d4",
                        "fa-tencent-weibo": "\uf1d5",
                        "fa-qq": "\uf1d6",
                        "fa-wechat": "\uf1d7",
                        "fa-weixin": "\uf1d7",
                        "fa-send": "\uf1d8",
                        "fa-paper-plane": "\uf1d8",
                        "fa-send-o": "\uf1d9",
                        "fa-paper-plane-o": "\uf1d9",
                        "fa-history": "\uf1da",
                        "fa-circle-thin": "\uf1db",
                        "fa-header": "\uf1dc",
                        "fa-paragraph": "\uf1dd",
                        "fa-sliders": "\uf1de",
                        "fa-share-alt": "\uf1e0",
                        "fa-share-alt-square": "\uf1e1",
                        "fa-bomb": "\uf1e2",
                        "fa-soccer-ball-o": "\uf1e3",
                        "fa-futbol-o": "\uf1e3",
                        "fa-tty": "\uf1e4",
                        "fa-binoculars": "\uf1e5",
                        "fa-plug": "\uf1e6",
                        "fa-slideshare": "\uf1e7",
                        "fa-twitch": "\uf1e8",
                        "fa-yelp": "\uf1e9",
                        "fa-newspaper-o": "\uf1ea",
                        "fa-wifi": "\uf1eb",
                        "fa-calculator": "\uf1ec",
                        "fa-paypal": "\uf1ed",
                        "fa-google-wallet": "\uf1ee",
                        "fa-cc-visa": "\uf1f0",
                        "fa-cc-mastercard": "\uf1f1",
                        "fa-cc-discover": "\uf1f2",
                        "fa-cc-amex": "\uf1f3",
                        "fa-cc-paypal": "\uf1f4",
                        "fa-cc-stripe": "\uf1f5",
                        "fa-bell-slash": "\uf1f6",
                        "fa-bell-slash-o": "\uf1f7",
                        "fa-trash": "\uf1f8",
                        "fa-copyright": "\uf1f9",
                        "fa-at": "\uf1fa",
                        "fa-eyedropper": "\uf1fb",
                        "fa-paint-brush": "\uf1fc",
                        "fa-birthday-cake": "\uf1fd",
                        "fa-area-t": "\uf1fe",
                        "fa-pie-t": "\uf200",
                        "fa-line-t": "\uf201",
                        "fa-lastfm": "\uf202",
                        "fa-lastfm-square": "\uf203",
                        "fa-toggle-off": "\uf204",
                        "fa-toggle-on": "\uf205",
                        "fa-bicycle": "\uf206",
                        "fa-bus": "\uf207",
                        "fa-ioxhost": "\uf208",
                        "fa-angellist": "\uf209",
                        "fa-cc": "\uf20a",
                        "fa-shekel": "\uf20b",
                        "fa-sheqel": "\uf20b",
                        "fa-ils": "\uf20b",
                        "fa-meanpath": "\uf20c",
                        "fa-buysellads": "\uf20d",
                        "fa-connectdevelop": "\uf20e",
                        "fa-dashcube": "\uf210",
                        "fa-forumbee": "\uf211",
                        "fa-leanpub": "\uf212",
                        "fa-sellsy": "\uf213",
                        "fa-shirtsinbulk": "\uf214",
                        "fa-simplybuilt": "\uf215",
                        "fa-skyatlas": "\uf216",
                        "fa-cart-plus": "\uf217",
                        "fa-cart-arrow-down": "\uf218",
                        "fa-diamond": "\uf219",
                        "fa-ship": "\uf21a",
                        "fa-user-secret": "\uf21b",
                        "fa-motorcycle": "\uf21c",
                        "fa-street-view": "\uf21d",
                        "fa-heartbeat": "\uf21e",
                        "fa-venus": "\uf221",
                        "fa-mars": "\uf222",
                        "fa-mercury": "\uf223",
                        "fa-intersex": "\uf224",
                        "fa-transgender": "\uf224",
                        "fa-transgender-alt": "\uf225",
                        "fa-venus-double": "\uf226",
                        "fa-mars-double": "\uf227",
                        "fa-venus-mars": "\uf228",
                        "fa-mars-stroke": "\uf229",
                        "fa-mars-stroke-v": "\uf22a",
                        "fa-mars-stroke-h": "\uf22b",
                        "fa-neuter": "\uf22c",
                        "fa-genderless": "\uf22d",
                        "fa-facebook-official": "\uf230",
                        "fa-pinterest-p": "\uf231",
                        "fa-whatsapp": "\uf232",
                        "fa-server": "\uf233",
                        "fa-user-plus": "\uf234",
                        "fa-user-times": "\uf235",
                        "fa-hotel": "\uf236",
                        "fa-bed": "\uf236",
                        "fa-viacoin": "\uf237",
                        "fa-train": "\uf238",
                        "fa-subway": "\uf239",
                        "fa-medium": "\uf23a",
                        "fa-yc": "\uf23b",
                        "fa-y-combinator": "\uf23b",
                        "fa-optin-monster": "\uf23c",
                        "fa-opencart": "\uf23d",
                        "fa-expeditedssl": "\uf23e",
                        "fa-battery-4": "\uf240",
                        "fa-battery-full": "\uf240",
                        "fa-battery-3": "\uf241",
                        "fa-battery-three-quarters": "\uf241",
                        "fa-battery-2": "\uf242",
                        "fa-battery-half": "\uf242",
                        "fa-battery-1": "\uf243",
                        "fa-battery-quarter": "\uf243",
                        "fa-battery-0": "\uf244",
                        "fa-battery-empty": "\uf244",
                        "fa-mouse-pointer": "\uf245",
                        "fa-i-cursor": "\uf246",
                        "fa-object-group": "\uf247",
                        "fa-object-ungroup": "\uf248",
                        "fa-sticky-note": "\uf249",
                        "fa-sticky-note-o": "\uf24a",
                        "fa-cc-jcb": "\uf24b",
                        "fa-cc-diners-club": "\uf24c",
                        "fa-clone": "\uf24d",
                        "fa-balance-scale": "\uf24e",
                        "fa-hourglass-o": "\uf250",
                        "fa-hourglass-1": "\uf251",
                        "fa-hourglass-start": "\uf251",
                        "fa-hourglass-2": "\uf252",
                        "fa-hourglass-half": "\uf252",
                        "fa-hourglass-3": "\uf253",
                        "fa-hourglass-end": "\uf253",
                        "fa-hourglass": "\uf254",
                        "fa-hand-grab-o": "\uf255",
                        "fa-hand-rock-o": "\uf255",
                        "fa-hand-stop-o": "\uf256",
                        "fa-hand-paper-o": "\uf256",
                        "fa-hand-scissors-o": "\uf257",
                        "fa-hand-lizard-o": "\uf258",
                        "fa-hand-spock-o": "\uf259",
                        "fa-hand-pointer-o": "\uf25a",
                        "fa-hand-peace-o": "\uf25b",
                        "fa-trademark": "\uf25c",
                        "fa-registered": "\uf25d",
                        "fa-creative-commons": "\uf25e",
                        "fa-gg": "\uf260",
                        "fa-gg-circle": "\uf261",
                        "fa-tripadvisor": "\uf262",
                        "fa-odnoklassniki": "\uf263",
                        "fa-odnoklassniki-square": "\uf264",
                        "fa-get-pocket": "\uf265",
                        "fa-wikipedia-w": "\uf266",
                        "fa-safari": "\uf267",
                        "fa-chrome": "\uf268",
                        "fa-firefox": "\uf269",
                        "fa-opera": "\uf26a",
                        "fa-internet-explorer": "\uf26b",
                        "fa-tv": "\uf26c",
                        "fa-television": "\uf26c",
                        "fa-contao": "\uf26d",
                        "fa-500px": "\uf26e",
                        "fa-amazon": "\uf270",
                        "fa-calendar-plus-o": "\uf271",
                        "fa-calendar-minus-o": "\uf272",
                        "fa-calendar-times-o": "\uf273",
                        "fa-calendar-check-o": "\uf274",
                        "fa-industry": "\uf275",
                        "fa-map-pin": "\uf276",
                        "fa-map-signs": "\uf277",
                        "fa-map-o": "\uf278",
                        "fa-map": "\uf279",
                        "fa-commenting": "\uf27a",
                        "fa-commenting-o": "\uf27b",
                        "fa-houzz": "\uf27c",
                        "fa-vimeo": "\uf27d",
                        "fa-black-tie": "\uf27e",
                        "fa-fonticons": "\uf280"
                    });
                ol.style.FontSymbol.addDefs
                ({	"font":"fontmaki",
                        "name":"Maki",
                        "copyright":"CC0 - MapBox - https://www.mapbox.com/maki/",
                        "prefix":"maki"
                    },
                    {	"maki-bicycle": {"font":"fontmaki","code":59392,"name":"bicycle","search":"bicycle"},
                        "maki-building": {"font":"fontmaki","code":59393,"name":"building","search":"building"},
                        "maki-bus": {"font":"fontmaki","code":59394,"name":"bus","search":"bus"},
                        "maki-cafe": {"font":"fontmaki","code":59395,"name":"cafe","search":"cafe"},
                        "maki-camera": {"font":"fontmaki","code":59396,"name":"camera","search":"camera"},
                        "maki-campsite": {"font":"fontmaki","code":59397,"name":"campsite","search":"campsite"},
                        "maki-car": {"font":"fontmaki","code":59398,"name":"car","search":"car"},
                        "maki-cemetery": {"font":"fontmaki","code":59399,"name":"cemetery","search":"cemetery"},
                        "maki-chemist": {"font":"fontmaki","code":59400,"name":"chemist","search":"chemist"},
                        "maki-cinema": {"font":"fontmaki","code":59401,"name":"cinema","search":"cinema"},
                        "maki-circle": {"font":"fontmaki","code":59402,"name":"circle","search":"circle"},
                        "maki-circle_stroked": {"font":"fontmaki","code":59403,"name":"circle_stroked","search":"circle_stroked"},
                        "maki-city": {"font":"fontmaki","code":59404,"name":"city","search":"city"},
                        "maki-clothing_store": {"font":"fontmaki","code":59405,"name":"clothing_store","search":"clothing_store"},
                        "maki-college": {"font":"fontmaki","code":59406,"name":"college","search":"college"},
                        "maki-commercial": {"font":"fontmaki","code":59407,"name":"commercial","search":"commercial"},
                        "maki-cricket": {"font":"fontmaki","code":59408,"name":"cricket","search":"cricket"},
                        "maki-cross": {"font":"fontmaki","code":59409,"name":"cross","search":"cross"},
                        "maki-dam": {"font":"fontmaki","code":59410,"name":"dam","search":"dam"},
                        "maki-danger": {"font":"fontmaki","code":59411,"name":"danger","search":"danger"},
                        "maki-dentist": {"font":"fontmaki","code":59412,"name":"dentist","search":"dentist"},
                        "maki-disability": {"font":"fontmaki","code":59413,"name":"disability","search":"disability"},
                        "maki-dog_park": {"font":"fontmaki","code":59414,"name":"dog_park","search":"dog_park"},
                        "maki-embassy": {"font":"fontmaki","code":59415,"name":"embassy","search":"embassy"},
                        "maki-emergency_telephone": {"font":"fontmaki","code":59416,"name":"emergency_telephone","search":"emergency_telephone"},
                        "maki-entrance": {"font":"fontmaki","code":59417,"name":"entrance","search":"entrance"},
                        "maki-farm": {"font":"fontmaki","code":59418,"name":"farm","search":"farm"},
                        "maki-fast_food": {"font":"fontmaki","code":59419,"name":"fast_food","search":"fast_food"},
                        "maki-ferry": {"font":"fontmaki","code":59420,"name":"ferry","search":"ferry"},
                        "maki-fire_station": {"font":"fontmaki","code":59421,"name":"fire_station","search":"fire_station"},
                        "maki-fuel": {"font":"fontmaki","code":59422,"name":"fuel","search":"fuel"},
                        "maki-garden": {"font":"fontmaki","code":59423,"name":"garden","search":"garden"},
                        "maki-gift": {"font":"fontmaki","code":59424,"name":"gift","search":"gift"},
                        "maki-golf": {"font":"fontmaki","code":59425,"name":"golf","search":"golf"},
                        "maki-grocery": {"font":"fontmaki","code":59426,"name":"grocery","search":"grocery"},
                        "maki-hairdresser": {"font":"fontmaki","code":59427,"name":"hairdresser","search":"hairdresser"},
                        "maki-harbor": {"font":"fontmaki","code":59428,"name":"harbor","search":"harbor"},
                        "maki-heart": {"font":"fontmaki","code":59429,"name":"heart","search":"heart"},
                        "maki-heliport": {"font":"fontmaki","code":59430,"name":"heliport","search":"heliport"},
                        "maki-hospital": {"font":"fontmaki","code":59431,"name":"hospital","search":"hospital"},
                        "maki-ice_cream": {"font":"fontmaki","code":59432,"name":"ice_cream","search":"ice_cream"},
                        "maki-industrial": {"font":"fontmaki","code":59433,"name":"industrial","search":"industrial"},
                        "maki-land_use": {"font":"fontmaki","code":59434,"name":"land_use","search":"land_use"},
                        "maki-laundry": {"font":"fontmaki","code":59435,"name":"laundry","search":"laundry"},
                        "maki-library": {"font":"fontmaki","code":59436,"name":"library","search":"library"},
                        "maki-lighthouse": {"font":"fontmaki","code":59437,"name":"lighthouse","search":"lighthouse"},
                        "maki-lodging": {"font":"fontmaki","code":59438,"name":"lodging","search":"lodging"},
                        "maki-logging": {"font":"fontmaki","code":59439,"name":"logging","search":"logging"},
                        "maki-london_underground": {"font":"fontmaki","code":59440,"name":"london_underground","search":"london_underground"},
                        "maki-marker": {"font":"fontmaki","code":59441,"name":"marker","search":"marker"},
                        "maki-minefield": {"font":"fontmaki","code":59442,"name":"minefield","search":"minefield"},
                        "maki-marker_stroked": {"font":"fontmaki","code":59443,"name":"marker_stroked","search":"marker_stroked"},
                        "maki-mobilephone": {"font":"fontmaki","code":59444,"name":"mobilephone","search":"mobilephone"},
                        "maki-monument": {"font":"fontmaki","code":59445,"name":"monument","search":"monument"},
                        "maki-museum": {"font":"fontmaki","code":59446,"name":"museum","search":"museum"},
                        "maki-music": {"font":"fontmaki","code":59447,"name":"music","search":"music"},
                        "maki-oil_well": {"font":"fontmaki","code":59448,"name":"oil_well","search":"oil_well"},
                        "maki-park": {"font":"fontmaki","code":59449,"name":"park","search":"park"},
                        "maki-park2": {"font":"fontmaki","code":59450,"name":"park2","search":"park2"},
                        "maki-parking": {"font":"fontmaki","code":59451,"name":"parking","search":"parking"},
                        "maki-parking_garage": {"font":"fontmaki","code":59452,"name":"parking_garage","search":"parking_garage"},
                        "maki-pharmacy": {"font":"fontmaki","code":59453,"name":"pharmacy","search":"pharmacy"},
                        "maki-pitch": {"font":"fontmaki","code":59454,"name":"pitch","search":"pitch"},
                        "maki-playground": {"font":"fontmaki","code":59455,"name":"playground","search":"playground"},
                        "maki-police": {"font":"fontmaki","code":59456,"name":"police","search":"police"},
                        "maki-polling_place": {"font":"fontmaki","code":59457,"name":"polling_place","search":"polling_place"},
                        "maki-post": {"font":"fontmaki","code":59458,"name":"post","search":"post"},
                        "maki-prison": {"font":"fontmaki","code":59459,"name":"prison","search":"prison"},
                        "maki-rail": {"font":"fontmaki","code":59460,"name":"rail","search":"rail"},
                        "maki-rail_above": {"font":"fontmaki","code":59461,"name":"rail_above","search":"rail_above"},
                        "maki-rail_light": {"font":"fontmaki","code":59462,"name":"rail_light","search":"rail_light"},
                        "maki-rail_metro": {"font":"fontmaki","code":59463,"name":"rail_metro","search":"rail_metro"},
                        "maki-rail_underground": {"font":"fontmaki","code":59464,"name":"rail_underground","search":"rail_underground"},
                        "maki-religious-christian": {"font":"fontmaki","code":59465,"theme":"religious","name":"christian","search":"religious,christian"},
                        "maki-religious-jewish": {"font":"fontmaki","code":59466,"theme":"religious","name":"jewish","search":"religious,jewish"},
                        "maki-religious-muslim": {"font":"fontmaki","code":59467,"theme":"religious","name":"muslim","search":"religious,muslim"},
                        "maki-religious-place_of_worship": {"font":"fontmaki","code":59468,"theme":"religious","name":"place_of_worship","search":"religious,place_of_worship"},
                        "maki-restaurant": {"font":"fontmaki","code":59469,"name":"restaurant","search":"restaurant"},
                        "maki-roadblock": {"font":"fontmaki","code":59470,"name":"roadblock","search":"roadblock"},
                        "maki-rocket": {"font":"fontmaki","code":59471,"name":"rocket","search":"rocket"},
                        "maki-school": {"font":"fontmaki","code":59472,"name":"school","search":"school"},
                        "maki-scooter": {"font":"fontmaki","code":59473,"name":"scooter","search":"scooter"},
                        "maki-shop": {"font":"fontmaki","code":59474,"name":"shop","search":"shop"},
                        "maki-skiing": {"font":"fontmaki","code":59475,"name":"skiing","search":"skiing"},
                        "maki-slaughterhouse": {"font":"fontmaki","code":59476,"name":"slaughterhouse","search":"slaughterhouse"},
                        "maki-soccer": {"font":"fontmaki","code":59477,"name":"soccer","search":"soccer"},
                        "maki-square": {"font":"fontmaki","code":59478,"name":"square","search":"square"},
                        "maki-square_stroked": {"font":"fontmaki","code":59479,"name":"square_stroked","search":"square_stroked"},
                        "maki-star": {"font":"fontmaki","code":59480,"name":"star","search":"star"},
                        "maki-star_stroked": {"font":"fontmaki","code":59481,"name":"star_stroked","search":"star_stroked"},
                        "maki-suitcase": {"font":"fontmaki","code":59482,"name":"suitcase","search":"suitcase"},
                        "maki-swimming": {"font":"fontmaki","code":59483,"name":"swimming","search":"swimming"},
                        "maki-telephone": {"font":"fontmaki","code":59484,"name":"telephone","search":"telephone"},
                        "maki-tennis": {"font":"fontmaki","code":59485,"name":"tennis","search":"tennis"},
                        "maki-theatre": {"font":"fontmaki","code":59486,"name":"theatre","search":"theatre"},
                        "maki-toilets": {"font":"fontmaki","code":59487,"name":"toilets","search":"toilets"},
                        "maki-town": {"font":"fontmaki","code":59488,"name":"town","search":"town"},
                        "maki-town_hall": {"font":"fontmaki","code":59489,"name":"town_hall","search":"town_hall"},
                        "maki-triangle": {"font":"fontmaki","code":59490,"name":"triangle","search":"triangle"},
                        "maki-triangle_stroked": {"font":"fontmaki","code":59491,"name":"triangle_stroked","search":"triangle_stroked"},
                        "maki-village": {"font":"fontmaki","code":59492,"name":"village","search":"village"},
                        "maki-warehouse": {"font":"fontmaki","code":59493,"name":"warehouse","search":"warehouse"},
                        "maki-waste_basket": {"font":"fontmaki","code":59494,"name":"waste_basket","search":"waste_basket"},
                        "maki-water": {"font":"fontmaki","code":59495,"name":"water","search":"water"},
                        "maki-wetland": {"font":"fontmaki","code":59496,"name":"wetland","search":"wetland"},
                        "maki-zoo": {"font":"fontmaki","code":59497,"name":"zoo","search":"zoo"},
                        "maki-aerialway": {"font":"fontmaki","code":59498,"name":"aerialway","search":"aerialway"},
                        "maki-airfield": {"font":"fontmaki","code":59499,"name":"airfield","search":"airfield"},
                        "maki-airport": {"font":"fontmaki","code":59500,"name":"airport","search":"airport"},
                        "maki-alcohol_shop": {"font":"fontmaki","code":59501,"name":"alcohol_shop","search":"alcohol_shop"},
                        "maki-america_football": {"font":"fontmaki","code":59502,"name":"america_football","search":"america_football"},
                        "maki-art_gallery": {"font":"fontmaki","code":59503,"name":"art_gallery","search":"art_gallery"},
                        "maki-bakery": {"font":"fontmaki","code":59504,"name":"bakery","search":"bakery"},
                        "maki-bank": {"font":"fontmaki","code":59505,"name":"bank","search":"bank"},
                        "maki-bar": {"font":"fontmaki","code":59506,"name":"bar","search":"bar"},
                        "maki-baseball": {"font":"fontmaki","code":59507,"name":"baseball","search":"baseball"},
                        "maki-basketball": {"font":"fontmaki","code":59508,"name":"basketball","search":"basketball"},
                        "maki-beer": {"font":"fontmaki","code":59509,"name":"beer","search":"beer"},
                    });
                imageStyle = new ol.style.FontSymbol(
                            {	form: 'poi',
                                gradient: false,
                                glyph: 'maki-basketball',
                                radius: 20,
                                color: '#f80',
                                fill: fillStyle,
                                stroke: strokeStyle
                            })
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