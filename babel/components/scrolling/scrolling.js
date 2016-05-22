import HelpMe from '../helpers/helpers';
const __ = new HelpMe();

class Scrolling {
  constructor() {
    this.items = [];
    this.itemsCache = [];
  }

  build() {
    window.addEventListener('scroll', this.scroll);
  }

  scroll() {
    __.forEach(__scrolling.items, i => {
      i.cb();
    });
  }

  viewport(item) {
    console.log(item.getBoundingClientRect());
  }

  watchItems() {
    if (this.items.length) this.build();
  }

  add(item, cb) {
    __.forEach(item, (i) => {
      let itemCollection = {};
      itemCollection.item = i;
      itemCollection.cb = cb;

      this.items.push(itemCollection);
    });

    this.build();
  }
}

const __scrolling = new Scrolling();
export default __scrolling;
