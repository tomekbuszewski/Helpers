require('../sass/style.scss');

import _modals from './components/modals/modals';

import _tabs from './components/tabs/tabs';

import _scrolling from './components/scrolling/scrolling';

const TweenLite = require('gsap/src/uncompressed/TweenLite.js');

_scrolling.add(document.querySelectorAll('.scroll__element'), function() {
  var doc = document.documentElement;
  var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  let offset = top / 5;
  TweenLite.to(this.item,{y:"-=50",ease:Quad.easeInOut},0.25);
});
