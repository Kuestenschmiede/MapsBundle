==============
The biggest part of the Contao GIS-kit *con4gis*.

**Contains:**
- [OpenLayers 4.x] (https://github.com/openlayers/openlayers)

**Requires:**
- [Contao](https://github.com/contao/core) (***LTS 3.5.x*** or ***4.3.x***)
    - requires [con4gis_api_bundle](https://github.com/Kuestenschmiede/con4gis_api_bundle/tree/develop) with Contao 4!
- [con4gis_core](https://github.com/Kuestenschmiede/con4gis_core/tree/master) (*latest stable release*)

**Extendable:**
- [con4gis_forum](https://github.com/Kuestenschmiede/con4gis_forum/tree/master) (*latest stable release*)
- [con4gis_tracking](https://github.com/Kuestenschmiede/con4gis_tracking/tree/master) (*latest stable release*)
- [con4gis_tracking_android](https://github.com/Kuestenschmiede/con4gis_tracking/tree/master) (*latest stable release*)
- *(more we publish soon)*

**This is still a development version. Although it works fine for most cases, not all features are implemented now.**

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
