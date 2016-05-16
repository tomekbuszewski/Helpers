/* A very simple modal component
You can close the modal either with `esc` key, hitting the "Close" button
or simply clicking anywhere on the page except the said modal.
Apart from this, you can open your modal with url using it's id as a hash,
eg: http://localhost#modal/loginModal
*/

import HelpMe from '../helpers/helpers';
const __ = new HelpMe();

export default class Modal {
  constructor() {
    require('./modal.scss');

    this.modals = document.querySelectorAll('modal-window');
    this.classNames = 'modal';
    this.activeClassName = 'modal--active';

    this.modalTriggers = document.querySelectorAll('[modal-trigger]');

    this.format();

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

  createHTML(modal, name) {
    const inner = modal.innerHTML; /* Get current content */
    modal.innerHTML = '';

    // Elements to append
    const wrapper = document.createElement('div');
    wrapper.className = 'modal__wrapper';

    const button = document.createElement('button');
    button.className = 'modal__close';
    button.setAttribute('modal-close', '');

    const title = document.createElement('h4');
    title.className = 'modal__title';
    title.innerHTML = name;

    const content = document.createElement('div');
    content.className = 'modal__content';
    content.innerHTML = inner;

    // Building modal
    modal.appendChild(wrapper);
    modal.getElementsByClassName('modal__wrapper')[0].appendChild(button);
    modal.getElementsByClassName('modal__wrapper')[0].appendChild(title);
    modal.getElementsByClassName('modal__wrapper')[0].appendChild(content);

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

    document.getElementById(modal).classList.add(this.activeClassName);
    this.setHistory(modal);
  }

  close(modal = null) {
    if (modal) {
      document.getElementById(modal).classList.remove(this.activeClassName);
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
