require('../sass/style.scss');

import _modals from './components/modals/modals';

import _tabs from './components/tabs/tabs';

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
const body = document.querySelector('body');

_scrolling.add(scrollEls, function() {
  let id = _scrolling.items.indexOf(this);
  const next = id + 1;
  const prev = id - 1;

  window.scrollTo(0, _scrolling.items[next].item.offsetTop);
  // const next = this.item.nextElementSibling;
  // const prev = this.item.previousElementSibling;
  // let dest = 0;
  //
  // if (_scrolling.scrollDirection === 'down') {
  //   if (next) dest = next.offsetTop;
  // } else {
  //   if (prev) dest = prev.offsetTop;
  // }
  //
  // window.scrollTo(0, dest);
  //
  // // body.style.overflow = 'hidden';
  //
  // setTimeout(() => {
  //   body.style.overflow = 'auto';
  // }, 1000);
});
