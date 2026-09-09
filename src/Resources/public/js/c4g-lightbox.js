/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */


export class C4gLightbox {
  constructor() {
    this.overlay = null;
    this.currentIndex = 0;
    this.items = [];
    this.boundKeyDown = this.onKeyDown.bind(this);
    this.init();
  }

  init() {
    const self = this;
    jQuery(document).on('click', '.c4g-image-popup-img img, a.c4g-lightbox-trigger', function (e) {
      e.preventDefault();
      e.stopPropagation();
      let target = jQuery(this);
      let src = target.is('a') ? target.attr('href') : target.attr('src');
      let title = target.attr('title') || target.attr('alt') || '';
      if (src) {
        self.open([{ src: src, title: title }], 0);
      }
    });
  }

  open(items, index = 0) {
    if (!items || !items.length) {
      return;
    }
    this.items = items;
    this.currentIndex = Math.max(0, Math.min(index, items.length - 1));

    if (!this.overlay) {
      this.createDOM();
    }

    this.update();
    this.overlay.style.display = 'flex';
    document.body.classList.add('c4g-lightbox-active');
    window.addEventListener('keydown', this.boundKeyDown);
  }

  close() {
    if (this.overlay) {
      this.overlay.style.display = 'none';
    }
    document.body.classList.remove('c4g-lightbox-active');
    window.removeEventListener('keydown', this.boundKeyDown);
  }

  prev() {
    if (this.items.length <= 1) {
      return;
    }
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.update();
  }

  next() {
    if (this.items.length <= 1) {
      return;
    }
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.update();
  }

  onKeyDown(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.close();
    } else if (e.key === 'ArrowLeft' || e.keyCode === 37) {
      this.prev();
    } else if (e.key === 'ArrowRight' || e.keyCode === 39) {
      this.next();
    }
  }

  createDOM() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'c4g-lightbox-overlay';
    this.overlay.style.display = 'none';
    this.overlay.innerHTML = `
      <div class="c4g-lightbox-backdrop"></div>
      <div class="c4g-lightbox-container">
        <button type="button" class="c4g-lightbox-close" aria-label="Schließen">&times;</button>
        <button type="button" class="c4g-lightbox-nav c4g-lightbox-prev" aria-label="Vorheriges Bild">&#10094;</button>
        <button type="button" class="c4g-lightbox-nav c4g-lightbox-next" aria-label="Nächstes Bild">&#10095;</button>
        <div class="c4g-lightbox-content">
          <div class="c4g-lightbox-image-wrap">
            <img class="c4g-lightbox-image" src="" alt="" />
          </div>
          <div class="c4g-lightbox-caption">
            <h3 class="c4g-lightbox-title"></h3>
            <p class="c4g-lightbox-desc"></p>
            <div class="c4g-lightbox-meta"></div>
            <div class="c4g-lightbox-counter"></div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);

    const backdrop = this.overlay.querySelector('.c4g-lightbox-backdrop');
    const closeBtn = this.overlay.querySelector('.c4g-lightbox-close');
    const prevBtn = this.overlay.querySelector('.c4g-lightbox-prev');
    const nextBtn = this.overlay.querySelector('.c4g-lightbox-next');

    backdrop.addEventListener('click', () => this.close());
    closeBtn.addEventListener('click', () => this.close());
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prev();
    });
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.next();
    });

    // Touch swipe support
    let touchStartX = 0;
    this.overlay.addEventListener('touchstart', (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        touchStartX = e.changedTouches[0].screenX;
      }
    }, { passive: true });
    this.overlay.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        let touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
          this.next();
        } else if (touchEndX - touchStartX > 50) {
          this.prev();
        }
      }
    }, { passive: true });
  }

  update() {
    const item = this.items[this.currentIndex];
    if (!item) {
      return;
    }

    const img = this.overlay.querySelector('.c4g-lightbox-image');
    const titleEl = this.overlay.querySelector('.c4g-lightbox-title');
    const descEl = this.overlay.querySelector('.c4g-lightbox-desc');
    const metaEl = this.overlay.querySelector('.c4g-lightbox-meta');
    const counterEl = this.overlay.querySelector('.c4g-lightbox-counter');
    const prevBtn = this.overlay.querySelector('.c4g-lightbox-prev');
    const nextBtn = this.overlay.querySelector('.c4g-lightbox-next');

    img.src = item.src;
    img.alt = item.title || '';

    titleEl.textContent = item.title || '';
    titleEl.style.display = item.title ? 'block' : 'none';

    descEl.textContent = item.description || '';
    descEl.style.display = item.description ? 'block' : 'none';

    let metaParts = [];
    if (item.datetime) {
      metaParts.push(item.datetime);
    }
    if (item.camera) {
      metaParts.push(item.camera);
    }
    metaEl.textContent = metaParts.join(' · ');
    metaEl.style.display = metaParts.length ? 'block' : 'none';

    if (this.items.length > 1) {
      counterEl.textContent = `${this.currentIndex + 1} / ${this.items.length}`;
      counterEl.style.display = 'block';
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
    } else {
      counterEl.style.display = 'none';
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }
  }
}

export const c4gLightbox = new C4gLightbox();
