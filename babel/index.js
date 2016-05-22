require('../sass/style.scss');

function translate(item) {
  const doc = document.documentElement;
  let scroll = (window.window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

  item.style.transform = `translate3d(0, ${scroll/2}px, 0)`;
}

import _modals from './components/modals/modals';

import _tabs from './components/tabs/tabs';

import _scrolling from './components/scrolling/scrolling';
_scrolling.add(document.querySelectorAll('.scroll__element'), function() { translate(this.item); });
