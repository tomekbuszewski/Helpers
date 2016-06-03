require('../sass/style.scss');

import _modals from './components/modals/modals'; // eslint-disable-line
import _tabs from './components/tabs/tabs'; // eslint-disable-line
import _trigger from './components/trigger/trigger'; // eslint-disable-line

import _scrolling from './components/scrolling/scrolling';

const TweenLite = require('gsap/src/uncompressed/TweenLite.js');
require('gsap/src/uncompressed/plugins/CSSPlugin.js');

// _scrolling.add(document.querySelectorAll('.scroll__inner'), function() {
//   let offset = _scrolling.scrollTop * -.5;
//   TweenLite.to(this.item, .01, { y: -offset, ease: Power0.easeNone });
// });
//
// _scrolling.add(document.querySelectorAll('.scroll__inner2'), function() {
//   let offset = _scrolling.scrollTop * -.25;
//   console.log(_scrolling.scrollDirection);
//   TweenLite.to(this.item, .01, { y: -offset, ease: Power0.easeNone });
// });

const scrollEls = document.querySelectorAll('.scroll__element');

_scrolling.add(scrollEls, function() {
  let offset = _scrolling.scrollTop * -1.2;
  TweenLite.to(this.item, .1, { y: offset, ease: Quad.easeOut, overwrite: 5 });
  // this.item.style.transform = `translate3d(0, ${offset}px, 0)`;
}, true);
_scrolling.makeFixed();
