/*
TODO: Optinal scope
*/

import smoothScroll from './smooth-scroll';
import HelpMe from '../helpers/helpers';
const helpers = new HelpMe();

class Scrolling {
  constructor() {
    this.items = [];
    this.windowHeight = window.innerHeight;
    this.offset = 100;
    this.scrollSpeed = 250;
    this.lastScroll = 0;
    this.scrollDir;

    this.classes = {
      visible: '-visible',
      invisible: '-invisible'
    };
  }

  build() {
    smoothScroll.init({
      speed: this.scrollSpeed,
      easing: 'easeInQuart'
    });

    window.addEventListener('scroll', _scrolling.scroll);
  }

  clear() {
    this.items = [];
  }

  destroy() {
    window.removeEventListener('scroll', _scrolling.scroll);
    this.items = [];
  }

  add(item, cb = null, force = false) {
    helpers.forEach(item, (i) => {
      let itemCollection = {};
      itemCollection.item = i;
      itemCollection.cb = cb;
      itemCollection.force = force;

      this.items.push(itemCollection);
    });

    this.build();
  }

  remove(item) {
    helpers.forEach(this.items, (i) => {
      helpers.forEach(item, (j) => {
        if (i.item === j) {
          const location = this.items.indexOf(i);
          this.items.splice(location, 1);
        }
      });
    });
  }

  list() {
    console.dir(this.items);
  }

  scroll() {
    // setting scroll direction
    if (_scrolling.lastScroll < _scrolling.scrollTop) {
      _scrolling.scrollDir = 'down';
    } else {
      _scrolling.scrollDir = 'up';
    }

    _scrolling.lastScroll = _scrolling.scrollTop;

    // performing callbacks (if any) for items
    helpers.forEach(_scrolling.items, (i) => {
      if (_scrolling.viewport(i.item) && i.force === false) {
        if (i.cb !== null) {
          i.cb();
        }
      } else {
        i.cb();
      }
    });
  }

  get scrollTop() {
    return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
  }

  get scrollDirection() {
    return _scrolling.scrollDir;
  }

  makeFixed() {
    let containerHeight = 0;
    const container = _scrolling.items[0].item.parentNode;

    helpers.forEach(this.items, (i) => {
      containerHeight += i.item.clientHeight;
      i.item.style.top = `${i.item.offsetTop}px`;
      setTimeout(() => { i.item.style.position = 'fixed'; });
      i.item.style.left = '0';
    });

    container.style.minHeight = `${containerHeight}px`;
  }

  viewport(item) {
    let ret = null;

    // If is even visible
    if ((this.windowHeight - item.getBoundingClientRect().top) >= `-${this.offset}` && item.getBoundingClientRect().bottom > 0) {
      item.classList.add(this.classes.visible);
      item.classList.remove(this.classes.invisible);
      item.style.visibility = 'visible';
      ret = true;
    }

    // If is hidden
    if (item.getBoundingClientRect().bottom <= 0 || item.getBoundingClientRect().top - this.offset >= this.windowHeight) {
      item.classList.add(this.classes.invisible);
      item.classList.remove(this.classes.visible);
      item.style.visibility = 'hidden';
      ret = false;
    }

    return ret;
  }

  watchItems() {
    if (this.items.length) this.build();
  }
}

const _scrolling = new Scrolling();
export default _scrolling;
