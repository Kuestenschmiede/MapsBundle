/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import {getLanguage} from "./c4g-maps-i18n";

export class C4gAudiotourPlayer {
  /**
   * @param {Object} proxy Reference to C4gMapsProxy
   */
  constructor(proxy) {
    this.proxy = proxy;
    this.mapController = proxy ? proxy.options?.mapController : null;
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audioContext = null;
    this.isUnlocked = false;
    this.isPlaying = false;
    this.currentStation = null;
    this.currentStationIndex = -1;
    this.stations = [];
    this.dom = {
      player: null,
      toast: null,
      unlockBtn: null,
      playBtn: null,
      title: null,
      desc: null,
      img: null,
      progressBar: null,
      progressFill: null,
      currentTime: null,
      totalDuration: null
    };

    this.initAudioEvents();
    this.initProximityHooks();
  }

  /**
   * Initializes audio element event listeners.
   */
  initAudioEvents() {
    const self = this;

    this.audio.addEventListener('play', () => {
      self.isPlaying = true;
      self.updatePlayStateUI(true);
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'playing';
      }
    });

    this.audio.addEventListener('pause', () => {
      self.isPlaying = false;
      self.updatePlayStateUI(false);
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'paused';
      }
    });

    this.audio.addEventListener('timeupdate', () => {
      self.updateProgress();
    });

    this.audio.addEventListener('loadedmetadata', () => {
      if (self.dom.totalDuration) {
        self.dom.totalDuration.textContent = self.formatTime(self.audio.duration || 0);
      }
    });

    this.audio.addEventListener('ended', () => {
      self.isPlaying = false;
      self.updatePlayStateUI(false);
      // Auto-advance or leave
    });
  }

  /**
   * Connects to proximity tracker events.
   */
  initProximityHooks() {
    const self = this;

    // Listen to window CustomEvents
    window.addEventListener('c4g:proximity:enter', (e) => {
      const data = e.detail;
      if (data && data.station) {
        self.onStationEnter(data.station, data.distance);
      }
    });

    window.addEventListener('c4g:proximity:leave', (e) => {
      const data = e.detail;
      if (data && data.station) {
        self.onStationLeave(data.station);
      }
    });

    // Check if proxy has proximity tracker
    if (this.proxy && this.proxy.proximityTracker) {
      this.proxy.proximityTracker.on('enter', (data) => {
        if (data && data.station) {
          self.onStationEnter(data.station, data.distance);
        }
      });
    }
  }

  /**
   * Handles user entering a station's proximity radius.
   *
   * @param {Object} station
   * @param {number} distance
   */
  onStationEnter(station, distance) {
    const self = this;

    // 1. Vibration
    if (station.vibrate !== false && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([200, 100, 200]);
      } catch (err) {
        // ignore
      }
    }

    // 2. Notification / Toast
    if (station.notification !== false) {
      this.showProximityToast(station, distance);
    }

    // 3. Autoplay
    if (station.autoplay && (station.audio_src || station.video_src)) {
      if (this.isUnlocked) {
        this.loadStation(station, true);
      } else {
        this.showUnlockPrompt(station);
      }
    }
  }

  /**
   * Handles user leaving a station's proximity radius.
   *
   * @param {Object} station
   */
  onStationLeave(station) {
    if (this.dom.toast && this.dom.toastStationId === station.id) {
      this.hideProximityToast();
    }
  }

  /**
   * Unlocks mobile browser audio playback.
   */
  unlock() {
    if (this.isUnlocked) {
      return Promise.resolve();
    }

    const self = this;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        if (!this.audioContext) {
          this.audioContext = new AudioCtx();
        }
        if (this.audioContext.state === 'suspended') {
          this.audioContext.resume();
        }
      }
    } catch (e) {
      // ignore
    }

    // Play a brief silent buffer on the audio element to activate it
    this.audio.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==';
    return this.audio.play().then(() => {
      self.isUnlocked = true;
      self.audio.pause();
      if (self.dom.unlockBtn) {
        self.dom.unlockBtn.style.display = 'none';
      }
      return true;
    }).catch((e) => {
      self.isUnlocked = true;
      if (self.dom.unlockBtn) {
        self.dom.unlockBtn.style.display = 'none';
      }
      return true;
    });
  }

  /**
   * Loads and optionally plays a station.
   *
   * @param {Object} station
   * @param {boolean} autoPlay
   */
  loadStation(station, autoPlay = true) {
    if (!station) {
      return;
    }
    this.currentStation = station;
    this.createPlayerDOM();

    // Update station list index
    this.refreshStationList();
    this.currentStationIndex = this.stations.findIndex(s => s.id === station.id);

    // Update UI
    if (this.dom.title) {
      this.dom.title.textContent = station.title || 'Station';
    }
    if (this.dom.desc) {
      this.dom.desc.textContent = station.description || (station.distance ? `Entfernung: ${Math.round(station.distance)}m` : '');
    }
    if (this.dom.img) {
      if (station.img) {
        this.dom.img.src = station.img;
        this.dom.img.style.display = 'block';
      } else {
        this.dom.img.style.display = 'none';
      }
    }

    this.dom.player.style.display = 'flex';

    const audioSrc = station.audio_src;
    if (audioSrc) {
      this.audio.src = audioSrc;
      this.audio.load();

      this.updateMediaSession(station);

      if (autoPlay) {
        this.play();
      }
    }
  }

  /**
   * Plays the current audio.
   */
  play() {
    const self = this;
    if (!this.isUnlocked) {
      this.unlock().then(() => {
        if (self.currentStation && self.currentStation.audio_src) {
          self.audio.src = self.currentStation.audio_src;
        }
        self.audio.play().catch(err => console.warn('[C4gAudiotourPlayer] play error:', err));
      });
      return;
    }

    this.audio.play().catch(err => console.warn('[C4gAudiotourPlayer] play error:', err));
  }

  /**
   * Pauses the audio.
   */
  pause() {
    this.audio.pause();
  }

  /**
   * Toggles play/pause.
   */
  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  /**
   * Navigates to next station.
   */
  nextStation() {
    this.refreshStationList();
    if (this.stations.length <= 1) {
      return;
    }
    const nextIdx = (this.currentStationIndex + 1) % this.stations.length;
    this.loadStation(this.stations[nextIdx], true);
  }

  /**
   * Navigates to previous station.
   */
  prevStation() {
    this.refreshStationList();
    if (this.stations.length <= 1) {
      return;
    }
    const prevIdx = (this.currentStationIndex - 1 + this.stations.length) % this.stations.length;
    this.loadStation(this.stations[prevIdx], true);
  }

  /**
   * Seeks to given percentage (0..1).
   */
  seek(percentage) {
    if (this.audio.duration) {
      this.audio.currentTime = this.audio.duration * Math.max(0, Math.min(1, percentage));
    }
  }

  /**
   * Refreshes station list from proximity tracker.
   */
  refreshStationList() {
    if (this.proxy && this.proxy.proximityTracker) {
      this.stations = this.proxy.proximityTracker.getStations().filter(s => s.audio_src || s.img);
    }
  }

  /**
   * Updates MediaSession metadata and action handlers for smartphone lock screen.
   *
   * @param {Object} station
   */
  updateMediaSession(station) {
    if (!('mediaSession' in navigator)) {
      return;
    }

    const mapName = this.mapController?.data?.name || 'con4gis Hörwanderung';
    const artwork = [];
    if (station.img) {
      artwork.push({
        src: station.img,
        sizes: '512x512',
        type: 'image/jpeg'
      });
    }

    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: station.title || 'Station',
        artist: mapName,
        album: 'con4gis Hörwanderung',
        artwork: artwork
      });

      const self = this;
      navigator.mediaSession.setActionHandler('play', () => self.play());
      navigator.mediaSession.setActionHandler('pause', () => self.pause());
      navigator.mediaSession.setActionHandler('nexttrack', () => self.nextStation());
      navigator.mediaSession.setActionHandler('previoustrack', () => self.prevStation());
      navigator.mediaSession.setActionHandler('seekto', (details) => {
        if (details.seekTime !== undefined) {
          self.audio.currentTime = details.seekTime;
        }
      });
    } catch (e) {
      console.warn('[C4gAudiotourPlayer] MediaSession registration failed:', e);
    }
  }

  /**
   * Shows an in-app proximity toast / banner on the screen.
   *
   * @param {Object} station
   * @param {number} distance
   */
  showProximityToast(station, distance) {
    const self = this;
    if (!this.dom.toast) {
      this.createToastDOM();
    }

    this.dom.toastStationId = station.id;
    const toastTitle = this.dom.toast.querySelector('.c4g-proximity-toast-title');
    const toastDesc = this.dom.toast.querySelector('.c4g-proximity-toast-desc');
    const toastImg = this.dom.toast.querySelector('.c4g-proximity-toast-img');
    const toastBtn = this.dom.toast.querySelector('.c4g-proximity-toast-play');

    if (toastTitle) {
      toastTitle.textContent = station.title || 'In deiner Nähe';
    }
    if (toastDesc) {
      const distStr = distance ? `ca. ${Math.round(distance)} m entfernt` : 'In deiner Nähe';
      toastDesc.textContent = station.description ? `${distStr} · ${station.description}` : distStr;
    }
    if (toastImg) {
      if (station.img) {
        toastImg.src = station.img;
        toastImg.style.display = 'block';
      } else {
        toastImg.style.display = 'none';
      }
    }

    const handleAction = () => {
      self.hideProximityToast();
      if (station.audio_src) {
        self.loadStation(station, true);
      } else if (station.linkUrl) {
        window.location.href = station.linkUrl;
      } else if (station.feature && self.mapController && self.mapController.proxy) {
        self.mapController.proxy.handlePopup(station.feature);
      }
    };

    if (toastBtn) {
      if (station.audio_src) {
        toastBtn.textContent = 'Abspielen';
        toastBtn.style.display = 'block';
      } else if (station.linkUrl) {
        toastBtn.textContent = 'Öffnen';
        toastBtn.style.display = 'block';
      } else if (station.popup) {
        toastBtn.textContent = 'Details';
        toastBtn.style.display = 'block';
      } else {
        toastBtn.style.display = 'none';
      }
      toastBtn.onclick = (e) => {
        e.stopPropagation();
        handleAction();
      };
    }

    this.dom.toast.onclick = () => {
      handleAction();
    };

    this.dom.toast.classList.add('c4g-toast-visible');

    // Auto hide after 8s
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    this.toastTimeout = setTimeout(() => {
      self.hideProximityToast();
    }, 8000);
  }

  /**
   * Hides the proximity toast.
   */
  hideProximityToast() {
    if (this.dom.toast) {
      this.dom.toast.classList.remove('c4g-toast-visible');
    }
  }

  /**
   * Displays the "Tour starten / Audio aktivieren" unlock prompt.
   *
   * @param {Object} station Optional station to play upon unlock
   */
  showUnlockPrompt(station = null) {
    const self = this;
    if (!this.dom.unlockBtn) {
      this.createUnlockBtnDOM();
    }
    this.dom.unlockBtn.style.display = 'flex';
    this.dom.unlockBtn.onclick = () => {
      self.unlock().then(() => {
        if (station) {
          self.loadStation(station, true);
        }
      });
    };
  }

  /**
   * Updates play/pause button state in UI.
   *
   * @param {boolean} isPlaying
   */
  updatePlayStateUI(isPlaying) {
    if (!this.dom.playBtn) {
      return;
    }
    if (isPlaying) {
      this.dom.playBtn.innerHTML = '&#10074;&#10074;'; // Pause icon
      this.dom.playBtn.setAttribute('aria-label', 'Pause');
      this.dom.player.classList.add('c4g-playing');
    } else {
      this.dom.playBtn.innerHTML = '&#9658;'; // Play icon
      this.dom.playBtn.setAttribute('aria-label', 'Abspielen');
      this.dom.player.classList.remove('c4g-playing');
    }
  }

  /**
   * Updates progress bar and elapsed time.
   */
  updateProgress() {
    const current = this.audio.currentTime || 0;
    const duration = this.audio.duration || 1;
    const pct = (current / duration) * 100;

    if (this.dom.progressFill) {
      this.dom.progressFill.style.width = pct + '%';
    }
    if (this.dom.currentTime) {
      this.dom.currentTime.textContent = this.formatTime(current);
    }
  }

  /**
   * Formats seconds into MM:SS.
   */
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  /**
   * Creates the audio player DOM widget at bottom of viewport.
   */
  createPlayerDOM() {
    if (this.dom.player) {
      return;
    }

    const player = document.createElement('div');
    player.className = 'c4g-audiotour-player';
    player.style.display = 'none';
    player.innerHTML = `
      <div class="c4g-player-inner">
        <div class="c4g-player-thumb-wrap">
          <img class="c4g-player-thumb" src="" alt="" style="display:none;" />
        </div>
        <div class="c4g-player-info">
          <div class="c4g-player-title">Station</div>
          <div class="c4g-player-desc"></div>
        </div>
        <div class="c4g-player-controls">
          <button type="button" class="c4g-player-btn c4g-player-prev" title="Vorherige Station">&#9198;</button>
          <button type="button" class="c4g-player-btn c4g-player-play" title="Abspielen">&#9658;</button>
          <button type="button" class="c4g-player-btn c4g-player-next" title="Nächste Station">&#9197;</button>
          <button type="button" class="c4g-player-btn c4g-player-offline" title="Tour offline speichern">&#128190;</button>
        </div>
        <div class="c4g-player-progress-wrap">
          <span class="c4g-player-time c4g-time-current">00:00</span>
          <div class="c4g-player-timeline">
            <div class="c4g-player-timeline-fill"></div>
          </div>
          <span class="c4g-player-time c4g-time-duration">00:00</span>
        </div>
        <button type="button" class="c4g-player-close" title="Schließen">&times;</button>
      </div>
    `;

    document.body.appendChild(player);

    this.dom.player = player;
    this.dom.img = player.querySelector('.c4g-player-thumb');
    this.dom.title = player.querySelector('.c4g-player-title');
    this.dom.desc = player.querySelector('.c4g-player-desc');
    this.dom.playBtn = player.querySelector('.c4g-player-play');
    this.dom.progressFill = player.querySelector('.c4g-player-timeline-fill');
    this.dom.currentTime = player.querySelector('.c4g-time-current');
    this.dom.totalDuration = player.querySelector('.c4g-time-duration');

    const self = this;
    this.dom.playBtn.onclick = () => self.togglePlay();
    player.querySelector('.c4g-player-prev').onclick = () => self.prevStation();
    player.querySelector('.c4g-player-next').onclick = () => self.nextStation();
    player.querySelector('.c4g-player-close').onclick = () => {
      self.pause();
      player.style.display = 'none';
    };

    const timeline = player.querySelector('.c4g-player-timeline');
    timeline.onclick = (e) => {
      const rect = timeline.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      self.seek(pct);
    };
  }

  /**
   * Creates proximity toast DOM element.
   */
  createToastDOM() {
    const toast = document.createElement('div');
    toast.className = 'c4g-proximity-toast';
    toast.innerHTML = `
      <div class="c4g-proximity-toast-inner">
        <div class="c4g-proximity-toast-icon">&#127911;</div>
        <img class="c4g-proximity-toast-img" src="" alt="" style="display:none;" />
        <div class="c4g-proximity-toast-text">
          <div class="c4g-proximity-toast-title">Station erreicht</div>
          <div class="c4g-proximity-toast-desc">In deiner Nähe</div>
        </div>
        <button type="button" class="c4g-proximity-toast-play" title="Anhören">&#9658; Anhören</button>
      </div>
    `;
    document.body.appendChild(toast);
    this.dom.toast = toast;
  }

  /**
   * Creates floating "Tour starten / Audio aktivieren" button.
   */
  createUnlockBtnDOM() {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'c4g-audiotour-unlock-btn';
    btn.innerHTML = `<span>&#127911;</span> Tour starten / Audio aktivieren`;
    document.body.appendChild(btn);
    this.dom.unlockBtn = btn;
  }
}

export const c4gAudiotour = {
  player: null,
  init(proxy) {
    if (!this.player) {
      this.player = new C4gAudiotourPlayer(proxy);
    }
    return this.player;
  }
};
