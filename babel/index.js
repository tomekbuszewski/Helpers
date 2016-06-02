require('../sass/style.scss');

import _modals from './components/modals/modals'; // eslint-disable-line

import _tabs from './components/tabs/tabs'; // eslint-disable-line

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

let lim = 0;
_scrolling.add(scrollEls, function() {
  let offset = _scrolling.scrollTop * -.5;
  // TweenLite.to(this.item, .1, { y: -offset, ease: Quad.easeOut, overwrite: 5 });
  // let prev = this.item.previousElementSibling;
  // let next = this.item.nextElementSibling;
  //
  // let prevOffset = prev ? prev.offsetTop : null;
  // let nextOffset = next ? next.offsetTop : null;
  //
  // if (lim === 0) {
  //   console.log(prevOffset, nextOffset);
  //   if (_scrolling.scrollDirection === 'down') {
  //     if (nextOffset !== null) { window.scrollTo(0, nextOffset); }
  //   } else {
  //     if (prevOffset !== null) { window.scrollTo(0, prevOffset); }
  //   }
  //
  //   lim = 1;
  //   body.style.overflow = 'hidden';
  // }
  //
  // setTimeout(() => {
  //   lim = 0;
  //   body.style.overflow = 'auto';
  //   console.log(this.item);
  // }, 1000);
});
