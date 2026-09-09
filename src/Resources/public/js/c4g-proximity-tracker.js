/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import {toLonLat, transform} from "ol/proj";
import {getDistance} from "ol/sphere";

/**
 * Calculates spherical distance in meters between two [lon, lat] coordinates (EPSG:4326).
 *
 * @param {Array<number>} coord1 [lon, lat]
 * @param {Array<number>} coord2 [lon, lat]
 * @returns {number} distance in meters
 */
export function getHaversineDistance(coord1, coord2) {
  if (!coord1 || !coord2 || coord1.length < 2 || coord2.length < 2) {
    return Infinity;
  }
  try {
    if (typeof getDistance === 'function') {
      return getDistance(coord1, coord2);
    }
  } catch (e) {
    // fallback to mathematical Haversine
  }

  const toRad = (x) => (x * Math.PI) / 180;
  const lon1 = Number(coord1[0]);
  const lat1 = Number(coord1[1]);
  const lon2 = Number(coord2[0]);
  const lat2 = Number(coord2[1]);

  const R = 6371000; // Earth radius in meters
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export class C4gProximityTracker {
  /**
   * @param {Object} proxy Reference to C4gMapsProxy or options
   */
  constructor(proxy) {
    this.proxy = proxy;
    this.mapController = proxy ? proxy.options?.mapController : null;
    this.stations = new Map();
    this.isTracking = false;
    this.currentPosition = null; // [lon, lat]
    this.hysteresis = 5; // 5 meters hysteresis buffer
    this.cooldown = 10000; // 10 seconds cooldown between re-triggers
    this.watchId = null;
    this.listeners = {
      enter: [],
      leave: [],
      update: [],
      position: []
    };

    this.boundOlLocationChange = this.onOlLocationChange.bind(this);
    this.boundHtml5Position = this.onHtml5Position.bind(this);
    this.boundHtml5Error = this.onHtml5Error.bind(this);

    // Ensure global hook repository exists
    window.c4gMapsHooks = window.c4gMapsHooks || {};
    window.c4gMapsHooks.hook_proximity_enter = window.c4gMapsHooks.hook_proximity_enter || [];
    window.c4gMapsHooks.hook_proximity_leave = window.c4gMapsHooks.hook_proximity_leave || [];
    window.c4gMapsHooks.hook_proximity_update = window.c4gMapsHooks.hook_proximity_update || [];
  }

  /**
   * Registers an event callback.
   *
   * @param {'enter'|'leave'|'update'|'position'} event
   * @param {Function} callback
   */
  on(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event].push(callback);
    }
    return this;
  }

  /**
   * Removes an event callback.
   *
   * @param {'enter'|'leave'|'update'|'position'} event
   * @param {Function} callback
   */
  off(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    }
    return this;
  }

  /**
   * Dispatches internal events and triggers con4gis hooks and DOM CustomEvents.
   *
   * @param {string} event
   * @param {Object} data
   */
  trigger(event, data) {
    if (this.listeners[event]) {
      for (let i = 0; i < this.listeners[event].length; i++) {
        try {
          this.listeners[event][i](data);
        } catch (e) {
          console.error('[C4gProximityTracker] Error in listener for ' + event, e);
        }
      }
    }

    // Call window.c4gMapsHooks
    const hookName = 'hook_proximity_' + event;
    if (window.c4gMapsHooks && Array.isArray(window.c4gMapsHooks[hookName])) {
      for (let i = 0; i < window.c4gMapsHooks[hookName].length; i++) {
        try {
          window.c4gMapsHooks[hookName][i](data, this);
        } catch (e) {
          console.error('[C4gProximityTracker] Error in hook ' + hookName, e);
        }
      }
    }

    // Dispatch DOM CustomEvent for loose coupling (e.g. React/PWA listeners)
    try {
      const customEvent = new CustomEvent('c4g:proximity:' + event, {
        detail: data,
        bubbles: true
      });
      window.dispatchEvent(customEvent);
    } catch (e) {
      // ignore
    }
  }

  /**
   * Starts tracking user location via OpenLayers Geolocation and HTML5 Geolocation API.
   */
  start() {
    if (this.isTracking) {
      return;
    }
    this.isTracking = true;
    this.collectStations();

    // 1. OpenLayers Geolocation
    if (this.mapController && this.mapController.geolocation) {
      const olGeo = this.mapController.geolocation;
      olGeo.setTracking(true);
      olGeo.on('change:position', this.boundOlLocationChange);
      const pos = olGeo.getPosition();
      if (pos) {
        this.onOlLocationChange();
      }
    }

    // 2. HTML5 watchPosition for continuous mobile background GPS
    if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
      try {
        this.watchId = navigator.geolocation.watchPosition(
          this.boundHtml5Position,
          this.boundHtml5Error,
          {
            enableHighAccuracy: true,
            maximumAge: 2000,
            timeout: 10000
          }
        );
      } catch (e) {
        console.warn('[C4gProximityTracker] navigator.geolocation.watchPosition failed:', e);
      }
    }
  }

  /**
   * Stops tracking user location.
   */
  stop() {
    this.isTracking = false;
    if (this.mapController && this.mapController.geolocation) {
      this.mapController.geolocation.un('change:position', this.boundOlLocationChange);
    }
    if (this.watchId !== null && typeof navigator !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }

  /**
   * Handles OpenLayers geolocation position change.
   */
  onOlLocationChange() {
    if (!this.mapController || !this.mapController.geolocation) {
      return;
    }
    const coords = this.mapController.geolocation.getPosition();
    if (!coords) {
      return;
    }
    const projection = this.mapController.map ? this.mapController.map.getView().getProjection() : 'EPSG:3857';
    let lonLat = coords;
    if (projection && projection.getCode && projection.getCode() !== 'EPSG:4326') {
      lonLat = toLonLat(coords, projection);
    }
    this.processPosition(lonLat);
  }

  /**
   * Handles HTML5 geolocation position update.
   *
   * @param {GeolocationPosition} position
   */
  onHtml5Position(position) {
    if (!position || !position.coords) {
      return;
    }
    const lonLat = [position.coords.longitude, position.coords.latitude];
    this.processPosition(lonLat);
  }

  /**
   * Handles HTML5 geolocation error.
   */
  onHtml5Error(err) {
    // silently handle position errors (e.g. temporary GPS signal loss)
  }

  /**
   * Simulates a user position (for testing or manual navigation).
   *
   * @param {number} lon
   * @param {number} lat
   */
  simulatePosition(lon, lat) {
    this.processPosition([Number(lon), Number(lat)]);
  }

  /**
   * Core proximity engine: updates distances, runs state machine, triggers events.
   *
   * @param {Array<number>} lonLat [lon, lat] in EPSG:4326
   */
  processPosition(lonLat) {
    if (!lonLat || isNaN(lonLat[0]) || isNaN(lonLat[1])) {
      return;
    }
    this.currentPosition = lonLat;
    const now = Date.now();

    // If no stations registered yet, collect them from active map layers
    if (this.stations.size === 0) {
      this.collectStations();
    }

    let nearestStation = null;
    let minDistance = Infinity;

    this.stations.forEach((station, id) => {
      if (!station.coords) {
        return;
      }
      const dist = getHaversineDistance(lonLat, station.coords);
      station.distance = dist;

      if (dist < minDistance) {
        minDistance = dist;
        nearestStation = station;
      }

      const radius = station.radius || 20;
      const leaveThreshold = radius + this.hysteresis;

      // State machine
      if (dist <= radius) {
        if (station.state !== 'INSIDE' && station.state !== 'ENTER') {
          // Check cooldown
          if (!station.lastTriggered || (now - station.lastTriggered) > this.cooldown) {
            station.state = 'ENTER';
            station.lastTriggered = now;
            this.trigger('enter', {
              station: station,
              distance: dist,
              position: lonLat
            });
            station.state = 'INSIDE';
          } else {
            station.state = 'INSIDE';
          }
        } else {
          station.state = 'INSIDE';
        }
      } else if (dist > leaveThreshold) {
        if (station.state === 'INSIDE' || station.state === 'ENTER') {
          station.state = 'LEAVE';
          this.trigger('leave', {
            station: station,
            distance: dist,
            position: lonLat
          });
          station.state = 'OUTSIDE';
        } else {
          station.state = 'OUTSIDE';
        }
      }
    });

    this.trigger('position', {
      position: lonLat,
      nearestStation: nearestStation,
      minDistance: minDistance
    });

    this.trigger('update', {
      position: lonLat,
      nearestStation: nearestStation,
      stations: Array.from(this.stations.values())
    });
  }

  /**
   * Collects all tour stations / features from vector layers on the map.
   */
  collectStations() {
    if (!this.proxy || !this.proxy.layerController) {
      return;
    }

    const layerController = this.proxy.layerController;
    const map = this.mapController ? this.mapController.map : null;
    const mapProjection = map ? map.getView().getProjection() : 'EPSG:3857';

    // Helper to extract stations from a feature
    const registerFeature = (feature, layerData = {}) => {
      if (!feature || typeof feature.getGeometry !== 'function') {
        return;
      }
      const geom = feature.getGeometry();
      if (!geom) {
        return;
      }

      let coords = null;
      if (typeof geom.getCoordinates === 'function') {
        const rawCoords = geom.getCoordinates();
        // If point geometry
        if (geom.getType && geom.getType() === 'Point') {
          const featureProj = feature.get('projection') || 'EPSG:4326';
          if (featureProj === 'EPSG:4326' || (rawCoords[0] >= -180 && rawCoords[0] <= 180 && rawCoords[1] >= -90 && rawCoords[1] <= 90)) {
            coords = [rawCoords[0], rawCoords[1]];
          } else {
            coords = toLonLat(rawCoords, mapProjection);
          }
        }
      }

      if (!coords) {
        return;
      }

      const id = feature.getId() || feature.get('id') || (feature.get('layerId') + '_' + coords.join(','));
      const existing = this.stations.get(id);

      const title = feature.get('title') || feature.get('tooltip') || layerData.name || 'Station';
      const description = feature.get('description') || '';
      const audioSrc = feature.get('audio_src') || feature.get('map_audio_src') || '';
      const videoSrc = feature.get('video_src') || feature.get('map_video_src') || '';
      const img = feature.get('img') || feature.get('imageSrc') || '';

      const radius = parseInt(feature.get('proximity_radius') || layerData.proximity_radius || 20, 10);
      const autoplay = Boolean(feature.get('proximity_autoplay') || layerData.proximity_autoplay);
      const notification = feature.get('proximity_notification') !== false && layerData.proximity_notification !== false;
      const vibrate = feature.get('proximity_vibrate') !== false && layerData.proximity_vibrate !== false;

      const stationData = {
        id: id,
        feature: feature,
        coords: coords,
        title: title,
        description: description,
        audio_src: audioSrc,
        video_src: videoSrc,
        img: img,
        radius: radius,
        autoplay: autoplay,
        notification: notification,
        vibrate: vibrate,
        state: existing ? existing.state : 'OUTSIDE',
        lastTriggered: existing ? existing.lastTriggered : 0,
        distance: existing ? existing.distance : Infinity
      };

      this.stations.set(id, stationData);
    };

    // Scan vector layers in layerController
    if (layerController.vectorSource && typeof layerController.vectorSource.getFeatures === 'function') {
      const features = layerController.vectorSource.getFeatures();
      for (let i = 0; i < features.length; i++) {
        registerFeature(features[i]);
      }
    }

    if (Array.isArray(layerController.vectorLayers)) {
      for (let i = 0; i < layerController.vectorLayers.length; i++) {
        const vl = layerController.vectorLayers[i];
        if (vl && typeof vl.getSource === 'function') {
          const src = vl.getSource();
          if (src && typeof src.getFeatures === 'function') {
            const features = src.getFeatures();
            for (let j = 0; j < features.length; j++) {
              registerFeature(features[j]);
            }
          }
        }
      }
    }

    // Scan layerController.arrLayers
    if (layerController.arrLayers) {
      for (let layerId in layerController.arrLayers) {
        if (layerController.arrLayers.hasOwnProperty(layerId)) {
          const lData = layerController.arrLayers[layerId];
          if (lData && Array.isArray(lData.content)) {
            for (let c = 0; c < lData.content.length; c++) {
              const item = lData.content[c];
              if (item && item.data && item.data.type === 'FeatureCollection' && Array.isArray(item.data.features)) {
                for (let f = 0; f < item.data.features.length; f++) {
                  const feat = item.data.features[f];
                  if (feat && feat.geometry && feat.geometry.coordinates) {
                    const featId = layerId + '_f_' + f;
                    const props = feat.properties || {};
                    const stData = {
                      id: featId,
                      coords: feat.geometry.coordinates,
                      title: props.title || props.tooltip || lData.name || 'Station',
                      description: props.description || '',
                      audio_src: props.audio_src || props.map_audio_src || '',
                      video_src: props.video_src || props.map_video_src || '',
                      img: props.img || props.imageSrc || '',
                      radius: parseInt(props.proximity_radius || lData.proximity_radius || 20, 10),
                      autoplay: Boolean(props.proximity_autoplay || lData.proximity_autoplay),
                      notification: props.proximity_notification !== false && lData.proximity_notification !== false,
                      vibrate: props.proximity_vibrate !== false && lData.proximity_vibrate !== false,
                      state: this.stations.has(featId) ? this.stations.get(featId).state : 'OUTSIDE',
                      lastTriggered: this.stations.has(featId) ? this.stations.get(featId).lastTriggered : 0,
                      distance: Infinity
                    };
                    this.stations.set(featId, stData);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  /**
   * Returns all active stations as array.
   *
   * @returns {Array<Object>}
   */
  getStations() {
    return Array.from(this.stations.values());
  }

  /**
   * Returns a station by ID.
   *
   * @param {string|number} id
   * @returns {Object|null}
   */
  getStation(id) {
    return this.stations.get(id) || null;
  }
}
