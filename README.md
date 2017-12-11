con4gis-Maps
============
The interactive maps brick of the Contao GIS-kit **con4gis**.

**Git Repository:** MapsBundle  
**Composer Vendor/Package:** [con4gis/maps](https://packagist.org/packages/con4gis/maps)  
**Website:** [maps.con4gis.org](https://maps.con4gis.org)

**Contains:**
- [OpenLayers 4.x] (https://github.com/openlayers/openlayers)

**Requires:**
- [Contao](https://github.com/contao/core) (***4.4.x***)   
For Contao 3 you can use [con4igs_maps3](https://github.com/Kuestenschmiede/con4gis_maps3/releases) Extension.
- [CoreBundle](https://github.com/Kuestenschmiede/CoreBundle/releases) (*latest stable release*)

**Extendable:**
- [ForumBundle](https://github.com/Kuestenschmiede/ForumBundle/releases) (*latest stable release*)
- [TrackingBundle](https://github.com/Kuestenschmiede/TrackingBundle/releases) (*latest stable release*)
  
**And with all other con4gis and Contao bundles**  
con4gis is not a connectable application. It's a collection of content 
elements for your website. So you can build your own individual and limitless web applications.

implemented features
----------------
- place map on a Page via *CE* or *MOD*
- define map-size and -margin
- configurate ***Basemaps***:
    - OSM
        - Mapnik (*default*)
        - CycleMap
        - German
        - GermanTransport
        - LandscapeMap
        - TransportMap
        - Stamen (Toner, Terrain & Watercolor)
        - MapBox (Studio & Classic Styles)
        - HERE (6 Styles)
        - Thunderforest (9 Styles)
        - Klokan (OpenMapTiles & TileHosting Styles)
        - Custom
    - Bing (3 Styles)
    - other
        - WMS
- configurate ***Overlays***:
    - Custom
    - WMS
    - OWM
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
        - BaselayerSwitcher
        - LayerSwitcher
        - define your own tabs to structure your content even better
        - switchable filter field
        - switchable select all button
        - optional structure tabs
    - Portside
        - Router (OSRM API 4+5)
        - Editor (waypoints, ways, areas, circles, freehand)
        - Measuretools (ways, areas, radius, freehand)
    - Attribution
    - Fullscreen
    - GeoSearch
        - jumps to automaticly first result
        - optional result selection
    - GeoPicker
    - Grid (Graticule)
    - MousePosition
    - OverviewMap
    - Permalink
    - Rotation
    - ScaleLine
    - Zoom-Panel
    - Zoom-Button for world, browser or initial position
    - Zoom-Slider
    - Zoom-Level
- configurate ***Location types***:
    - con4gis-Forum
    - con4gis-Tracking
    - GeoJSON
    - GPX
    - KML
    - Single GEO coordinate (display as circle, star, square & more)
    - Other tables (pre-configured: events, members)
    - OSM files
    - OSM requests (Overpass API)
    - build structure from directory 
- configurate ***Themes***:
    - default theme (sample)
    - BE themes manager (own CSS styling)
