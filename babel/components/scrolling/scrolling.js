import HelpMe from '../helpers/helpers';
const helpers = new HelpMe();

class Scrolling {
  constructor() {
    this.items = [];
    this.itemsCache = [];
  }

  build() {
    window.addEventListener('scroll', window.requestAnimationFrame(_scrolling.scroll));
  }

  scroll() {
    setInterval(() => { helpers.forEach(_scrolling.items, (i) => {
      i.cb();
    }) }, 10);
    window.requestAnimationFrame(_scrolling.scroll);
  }

  viewport(item) {
    console.log(item.getBoundingClientRect());
  }

  watchItems() {
    if (this.items.length) this.build();
  }

  add(item, cb) {
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
