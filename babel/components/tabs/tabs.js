import HelpMe from '../helpers/helpers';
const __ = new HelpMe();

export default class Tabs {
  constructor() {
    require('./tabs.scss');

    this.tabContainer = document.querySelectorAll('tabs-container');
    this.classNames = 'tabs';
    this.singleTab = 'tabs__item';
    this.singleActiveTab = 'tabs__item--active';
    this.buttonClass = 'tabs__button';
    this.buttonActiveClass = 'tabs__button--active';

    this.createNav();
  }

  createNav() {
    Array.prototype.forEach.call(this.tabContainer, (tabs) => {
      let items = [];
      let buttons = '';
      let counter = 0;

      tabs.classList.add(this.classNames);

      Array.prototype.forEach.call(tabs.children, (tab) => {
        const title = tab.getAttribute('title');

        tab.setAttribute('id', __.slug(title));
        tab.classList.add(this.singleTab);
        items.push({ 'id': __.slug(title), 'title': title });

        if (counter === 0) {
          tab.classList.add(this.singleActiveTab);
          counter++;
        }
      }); // end items array

      const nav = document.createElement('nav');
      nav.classList.add('tabs__nav');
      tabs.insertBefore(nav, tabs.firstChild);

      for (let i = 0; i < items.length; i++) {
        buttons += `<button class="${this.buttonClass}" tab-id="${items[i].id}">${items[i].title}</button>`;
      }

      nav.innerHTML = buttons;

      this.listenForClick(tabs);
    }); // end tabs array
  }

  listenForClick(container) {
    const buttons = container.querySelectorAll(`.${this.buttonClass}`);

    Array.prototype.forEach.call(buttons, (button) => {
      const id = button.getAttribute('tab-id');

      button.addEventListener('click', (e) => {
        e.preventDefault();

        this.showTab(container, id);
      })
    });
  }

  showTab(container, tab) {
    this.closeTabs(container);

    container.querySelectorAll(`#${tab}`)[0].classList.add(this.singleActiveTab);
  }

  closeTabs(container) {
    Array.prototype.forEach.call(container.querySelectorAll(`.${this.singleTab}`), (tab) => {
      tab.classList.remove(this.singleActiveTab);
    })
  }
}
