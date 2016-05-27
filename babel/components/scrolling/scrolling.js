import smoothScroll from './smooth-scroll';
import HelpMe from '../helpers/helpers';
const helpers = new HelpMe();

class Scrolling {
  constructor() {
    this.items = [];
    this.windowHeight = window.innerHeight;
    this.offset = 200;
    this.scrollSpeed = 250;

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

  scroll() {
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

  scrollDirection() {
    return 'bam';
  }

  viewport(item) {
    let ret = null;

    // If is even visible
    if ((this.windowHeight - item.getBoundingClientRect().top) >= `-${this.offset}`) {
      item.classList.add(this.classes.visible);
      item.classList.remove(this.classes.invisible);
      ret = true;
    }

    // If is hidden
    if (item.getBoundingClientRect().bottom <= 0 || item.getBoundingClientRect().top - this.offset >= this.windowHeight) {
      item.classList.add(this.classes.invisible);
      item.classList.remove(this.classes.visible);
      ret = false;
    }

    return ret;
  }

  watchItems() {
    if (this.items.length) this.build();
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
}

const _scrolling = new Scrolling();
export default _scrolling;
