# con4gis-MapsBundle

## Overview
The interactive maps brick of the Contao GIS-kit **con4gis**.

The con4gis MapsBundle allows you to integrate maps into your application. There 
are many options for the look & feel of the map, as well as additional controls such as 
zoom controls, scalelines and many more. You can also integrate geospatial data from many different sources.

__Main features include:__
* Add a map as content element or frontend module
* Configure baselayer 
    - OSM Mapnik (*default*)
    - OSM German
    - MapBox (Studio & Classic Styles)
    - HERE (6 Styles)
    - Thunderforest (9 Styles)
    - Klokan Technologies (OpenMapTiles & 8 MapTiler Styles)
    - Bing (3 Styles)
    - Mapz (7 Styles)
    - Stadia Maps with Stamen (8 Styles)
    - Layergroup (depending on zoom level)
    - Georeferenced image
    - GeoTIFF
    - WMS
    - Custom
- configurate ***Overlays***:
    - WMS
    - OpenWeatherMap
    - OpenSeaMap
    - Georeferenced image
    - GeoTIFF
    - Custom
- configurate ***Interactions***:
    - keyboard-navigation
        - pan (with arrow-keys)
        - zoom (with `+` and `-`)
    - mouse-navigation
        - drag pan
        - drag rotate (& zoom)
        - drag zoom
        - kinetic scrolling
        - mousewheel zoom
    - touch-navigation
        - pinch-rotate
        - pinch-zoom
    - cesium view
- configurate ***Controls***:
    - Starboard
        - baselayer switcher
        - layer switcher
        - define your own tabs to structure your content even better
        - switchable filter field
        - switchable select all button
        - optional structure tabs
    - Router
    - Editor
    - Measuretools (ways, areas, radius, freehand)
    - Editable attributions
    - Export map
    - Fullscreen
    - GeoSearch
        - jumps automatically to first result 
        - optional result selection
        - limit search with specific search parameters
    - GeoPicker
    - Grid (Graticule)
    - MousePosition
    - OverviewMap
    - Permalink
    - Rotation
    - ScaleLine
    - Zoom-Panel
    - Zoom-Button for world, browser and initial position
    - Zoom-Level
    - ...
- configurate ***Location types***:
    - GeoJSON
    - GPX
    - KML
    - Single GEO coordinate (display as circle, star, square & more)
    - Other tables (pre-configured: events, members)
    - OSM files
    - OSM requests (Overpass API (XML and QL))
    - build structure from directory
    - ...
- configurate ***Layouts***:
    - default layout (sample)
    - BE layout manager (custom CSS styling) 

**Extendable with all other con4gis and Contao bundles**  
con4gis is not a connectable application. It's a collection of content 
elements for your website. So you can simply build your own individual and limitless web applications.


**Contains:**
- [OpenLayers 9](https://github.com/openlayers/openlayers)

## Installation
Via composer:
```
composer require con4gis/maps
```
Alternatively, you can use the Contao Manager to install the con4gis-MapsBundle.

## Requirements:
- [Contao](https://github.com/contao/core-bundle) (***>= 4.9.x***)

## Documentation
Visit [docs.con4gis.org](https://docs.con4gis.org) for a user documentation. You can also contact us via the support forum there.

## Third Party License

### Font Awesome
We use the font set from [Font Awesome](https://fontawesome.com) to display the icons. The license can be viewed under [License](https://fontawesome.com/license/free) (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License).

Please clarify with your legal advisor whether and how a mention in the privacy policy is necessary.

The data is delivered locally from the server and not loaded via a CDN, therefore no data is passed on to third parties.
