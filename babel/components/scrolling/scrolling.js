import HelpMe from '../helpers/helpers';
const helpers = new HelpMe();

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

class Scrolling {
  constructor() {
    this.items = [];
    this.itemsCache = [];
  }

  build() {
    window.addEventListener('scroll', window.requestAnimationFrame(_scrolling.scroll));
  }

  scroll() {
    helpers.forEach(_scrolling.items, (i) => {
      i.cb();
    });
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
