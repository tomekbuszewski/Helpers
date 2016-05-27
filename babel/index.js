require('../sass/style.scss');

import _modals from './components/modals/modals';

import _tabs from './components/tabs/tabs';

import _scrolling from './components/scrolling/scrolling';

const TweenLite = require('gsap/src/uncompressed/TweenLite.js');
require('gsap/src/uncompressed/plugins/CSSPlugin.js');

_scrolling.add(document.querySelectorAll('.scroll__inner'), function() {
  let offset = _scrolling.scrollTop * -.5;
  TweenLite.to(this.item, .01, { y: -offset, ease: Power0.easeNone });
});

_scrolling.add(document.querySelectorAll('.scroll__inner2'), function() {
  let offset = _scrolling.scrollTop * -.25;
  console.log(_scrolling.scrollDirection());
  TweenLite.to(this.item, .01, { y: -offset, ease: Power0.easeNone });
});
