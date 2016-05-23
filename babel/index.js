require('../sass/style.scss');

function translate(item) {
  const doc = document.documentElement;
  const scroll = (window.window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  const dist = item.getBoundingClientRect().top;

  item.style.transform = `translate3d(0, ${-scroll}px, 0)`;
}

import _modals from './components/modals/modals';

import _tabs from './components/tabs/tabs';

import _scrolling from './components/scrolling/scrolling';

let parentHeight = 0;
Array.prototype.forEach.call(document.querySelectorAll('.scroll__element'), (i) => {
  parentHeight += i.getBoundingClientRect().height;
  i.style.top = `${i.getBoundingClientRect().top}px`;
  setTimeout(() => {
    i.style.position = 'fixed';
    i.parentNode.style.height = parentHeight+'px';
  });
});

_scrolling.add(document.querySelectorAll('.scroll__element'), function() { translate(this.item); });
