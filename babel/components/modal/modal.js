/* A very simple modal component
You can close the modal either with `esc` key, hitting the "Close" button
or simply clicking anywhere on the page except the said modal.
Apart from this, you can open your modal with url using it's id as a hash,
eg: http://localhost#modal/loginModal
*/


export default class Modal {
  constructor() {
    require('./modal.scss');
    this.activeClass = 'modal--active';
    this.siteActiveClass = 'site--with-modal';
    // this.showTimeout = 400;
    //
    // this.modals = document.getElementsByClassName('modal');
    // this.site = document.getElementsByClassName('site')[0];
    // this.modalTrigger = document.getElementsByClassName('modal-trigger');
    // this.modalCloseButton = document.getElementsByClassName('modal__close');
  }
  //
  // initialize() {
  //   this.listenForClick();
  //   this.listenForHash();
  //   window.addEventListener('popstate', () => { this.listenForHash(); });
  // }
  //
  // setHistory(id = '', callback = null) {
  //   history.replaceState('', document.title, window.location.pathname + id);
  //   if (callback !== null) callback();
  // }
  //
  // listenForClick() {
  //   Array.prototype.forEach.call(this.modalTrigger, (trigger) => {
  //     trigger.addEventListener('click', (e) => {
  //       e.preventDefault();
  //
  //       const target = trigger.getAttribute('modal');
  //
  //       this.openModal(target);
  //     });
  //   });
  // }
  //
  // listenForHash() {
  //   const temphash = window.location.hash;
  //
  //   if (temphash && temphash.indexOf('#modal') > -1) {
  //     this.openModal(temphash);
  //   }
  // }
  //
  // openModal(target) {
  //   const id = target.replace('#modal/', '');
  //   const modal = document.getElementById(id);
  //   poly.addClass(modal, this.activeClass);
  //   this.setHistory(target, () => {
  //     setTimeout(() => { poly.addClass(this.site, this.siteActiveClass); }, this.showTimeout);
  //     this.listenForClose();
  //   });
  // }
  //
  // listenForClose() {
  //   // With button
  //   Array.prototype.forEach.call(this.modalCloseButton, (btn) => {
  //     btn.addEventListener('click', (e) => {
  //       e.preventDefault();
  //
  //       this.closeAll();
  //     });
  //   });
  //
  //   // With esc
  //   this.site.addEventListener('keydown', (key) => {
  //     if (key.keyCode === 27) {
  //       this.closeAll();
  //     }
  //   });
  //
  //   // With clicking on site
  //   this.site.addEventListener('click', () => {
  //     if (poly.hasClass(this.site, this.siteActiveClass)) {
  //       this.closeAll();
  //     }
  //   });
  // }
  //
  // closeAll() {
  //   const activeModals = document.getElementsByClassName(this.activeClass);
  //
  //   Array.prototype.forEach.call(activeModals, (modal) => {
  //     poly.removeClass(modal, this.activeClass);
  //   });
  //
  //   poly.removeClass(this.site, this.siteActiveClass);
  //   this.setHistory();
  // }
}
