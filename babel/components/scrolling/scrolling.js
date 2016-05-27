import smoothScroll from './smooth-scroll';
import HelpMe from '../helpers/helpers';
const helpers = new HelpMe();

class Scrolling {
  constructor() {
    this.items = [];
    this.windowHeight = window.innerHeight;
    this.offset = 200;
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

  add(item, cb = null) {
    helpers.forEach(item, (i) => {
      let itemCollection = {};
      itemCollection.item = i;
      itemCollection.cb = cb;

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
    console.log(this.items);
  }

  scroll() {
    if (_scrolling.lastScroll < _scrolling.scrollTop) {
      _scrolling.scrollDir = 'down';
    } else {
      _scrolling.scrollDir = 'up';
    }

    _scrolling.lastScroll = _scrolling.scrollTop;

    helpers.forEach(_scrolling.items, (i) => {
      if (_scrolling.viewport(i.item)) {
        if (i.cb !== null) {
          i.cb();
        }
      }
    });
  }

  get scrollTop() {
    return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
  }

  get scrollDirection() {
    return _scrolling.scrollDir;
  }

  viewport(item) {
    let ret = null;

    // If is even visible
    if ((this.windowHeight - item.getBoundingClientRect().top) >= `-${this.offset}`) {
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
