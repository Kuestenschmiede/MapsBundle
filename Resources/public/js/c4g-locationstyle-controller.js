/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
import {C4gLocationStyle} from "./c4g-locationstyle";
import {cssConstants} from "./c4g-maps-constant";
import {utils} from "./c4g-maps-utils";

export class C4gLocationStyleController {

  constructor(proxy) {
    this.proxy = proxy;
    this.mapController = proxy.options.mapController;
    this.arrLocStyles = {};
    this.resizeOnZoom = proxy.options.mapController.data.resizeLocstyles;
  }

  loadLocationStyles(arrIds, opt_options) {
    let options,
      complete = {},
      success = {},
      self = this,
      count = 1,
      makeAjax;

    if (opt_options && typeof opt_options === "object") {
      options = opt_options;
    } else {
      options = {};
    }

    // this.proxy.options.mapController.spinner.show();

    makeAjax = function(styleIds, index) {
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
            let style = new C4gLocationStyle(styleData, self);
            style.style = style.getStyleFunction(styleData);
            self.arrLocStyles[styleData.id] = style;
            if(styleData.svgSrc && styleData.icon_scale && styleData.icon_size) {
              setTimeout(()=> {
                if (!window.triggerClick) {
                  //ToDo für den Standard überarbeiten
                  $("div.ol-unselectable.ol-control.ol-zoom-with-home > button.ol-zoom-home").trigger('click');
                }
                window.triggerClick = 1;
              }, 600);
            }
          }
          self.proxy.layerController.vectorLayer.setStyle(self.proxy.layerController.clusterStyleFunction);
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
        if (options.done && typeof options.done === "function" && (index ? successful : true)) {
          options.done();
          // call hooks
          utils.callHookFunctions(self.proxy.hook_locstyles_loaded, {locstyleController: self})
        }
      }).always(function (jXhr, strStatus) {
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
        if (options.always && typeof options.always === "function" && (index ? completed : true)) {
          options.always();
        }
        // if (!jQuery(self.proxy.options.mapController.mapsControls.spinner.element).hasClass(cssConstants.HIDE)) {
        //   self.proxy.options.mapController.spinner.hide();
        // }
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