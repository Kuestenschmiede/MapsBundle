class C4gLocationStyleController{
    constructor(proxy){
        this._proxy = proxy;
        this._mapController = proxy.mapController;
        this._arrLocStyles = [];
    }

    get proxy() {
        return this._proxy;
    }

    set proxy(value) {
        this._proxy = value;
    }

    get mapController() {
        return this._mapController;
    }

    set mapController(value) {
        this._mapController = value;
    }

    get arrLocStyles() {
        return this._arrLocStyles;
    }

    set arrLocStyles(value) {
        this._arrLocStyles = value;
    }

    loadLocationStyles(arrIds, opt_options) {
        let options,
            complete = {},
            success = {},
            self = this,
            count = 1;

        if (opt_options && typeof opt_options === "object") {
            options = opt_options;
        } else {
            options = {};
        }

        this.proxy.options.mapController.spinner.show();

        var makeAjax = function(styleIds, index) {
            if (index) {
                complete[index] = false;
                success[index] = false;
            }
            // get locationstyles over API
            jQuery.ajax({
                dataType: self.proxy.options.mapController.data.jsonp ? "jsonp" : "json",
                url: self.proxy.api_locstyle_url,
                data: {
                    ids: styleIds
                }
            }).done(function (data) {
                let i,
                    styleData,
                    successful = true;

                if (data.length > 0) {
                    for (i = 0; i < data.length; i += 1) {
                        styleData = data[i];
                        self._arrLocStyles[styleData.id] = new C4gLocationStyle(styleData);
                    }
                }
                if (index) {
                    success[index] = true;
                    for (var key in success) {
                        if (success.hasOwnProperty(key)) {
                            if (!success[key]) {
                                successful = false;
                                break;
                            }
                        }
                    }
                }
                if (options.success && typeof options.success === "function" && (index ? successful : true)) {
                    options.success();
                }
            }).complete(function (jXhr, strStatus) {
                var completed = true;

                if (index) {
                    complete[index] = true;
                    for (var key in complete) {
                        if (complete.hasOwnProperty(key)) {
                            if (!complete[key]) {
                                completed = false;
                                break;
                            }
                        }
                    }
                }
                if (options.complete && typeof options.complete === "function" && (index ? completed : true)) {
                    options.complete();
                }
                if (!$(self.proxy.options.mapController.spinner.element).hasClass(c4g.maps.constant.css.HIDE)) {
                    self.proxy.options.mapController.spinner.hide();
                }
            }).fail(function (jqXHR, textStatus, errorThrown ) {
                console.warn(errorThrown);
            });
        };

        // split arrIds if it's too long
        if (arrIds.length > 100) {
            var n = 100;
            while(arrIds.length > 0) {
                makeAjax(arrIds.splice(0, n), count);
                count++;
            }
        } else {
            makeAjax(arrIds);
        }
        //});
    } // end of "loadLocationStyles()"
}