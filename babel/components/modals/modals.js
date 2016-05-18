/* A very simple modal component
You can close the modal either with `esc` key, hitting the "Close" button
or simply clicking anywhere on the page except the said modal.
Apart from this, you can open your modal with url using it's id as a hash,
eg: http://localhost#modal/loginModal
*/

import HelpMe from '../helpers/helpers';
const __ = new HelpMe();

export default class Modals {
  constructor() {
    require('./modals.scss');

    this.modals = document.querySelectorAll('modal-window');
    this.classNames = 'modal';
    this.activeClassName = 'modal--active';

    this.modalTriggers = document.querySelectorAll('[modal-trigger]');

    this.format();

    console.log(this.modals);

    __.onEvents([window], 'load hashchange', () => { this.listenForHash(); });
  }

  format() {
    __.forEach(this.modals, (modal) => {
      const title = modal.getAttribute('title');

      modal.classList.add(this.classNames);

      modal.setAttribute('id', __.slug(title)); /* Created ID */

      this.createHTML(modal, title) /* Creating inner html */
    });
  }

  wrap(item, title, content) {
    item.innerHTML = `
<div class="modal__wrapper">
  <button class="modal__close" modal-close></button>
  <h4 class="modal__title">${title}</h4>
  <div class="modal__content">${content}</strong></div>
</div>
    `;
  }

  createHTML(modal, title) {
    const inner = modal.innerHTML; /* Get current content */
    this.wrap(modal, title, inner);

    this.listenForClick();
    this.listenForClose();
  }

  setHistory(id = null) {
    if (id) {
      window.history.pushState(null, null, `${document.location.origin}#modal/${id}`);
    } else {
      window.history.pushState(null, null, document.location.origin);
    }
  }

  open(modal) {
    this.close();
    __.forEach(this.modals, (m) => {
      if (m.getAttribute('id') === modal) m.classList.add(this.activeClassName);
    });
    this.setHistory(modal);
  }

  close(modal = null) {
    if (modal) {
      __.forEach(this.modals, (m) => {
        if (m.getAttribute('id') === modal) m.classList.remove(this.activeClassName);
      });
    } else {
      __.forEach(this.modals, (modal) => {
        modal.classList.remove(this.activeClassName);
      });
    }

    this.setHistory();
  }

  listenForClose() {
    // Closing with button
    const buttons = document.querySelectorAll('[modal-close]');

    __.forEach(buttons, (button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();

        this.close(button.parentNode.parentNode.getAttribute('id'));
      });
    });

    // Closing with esc button
    window.addEventListener('keydown', (k) => {
      if (k.keyCode === 27) this.close();
    });

    // Closing with clicking on body
    document.addEventListener('click', (e) => {
      if (e.target.parentNode.classList.value.indexOf('modal') === -1
          && e.target.hasAttribute('modal-trigger') === false) {
        this.close();
      }
    });
  }

  listenForClick() {
    __.forEach(this.modalTriggers, (trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();

        const modal = trigger.getAttribute('modal-trigger');
        this.open(modal);
      });
    });
  }

  listenForHash() {
    const hash = window.location.hash;

    if (hash && hash.indexOf('modal/') > -1) {
      this.open(hash.replace('#modal/', ''));
    } else {
      this.close();
    }
  }
}
