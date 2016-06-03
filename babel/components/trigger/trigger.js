import HelpMe from '../helpers/helpers';
const helpers = new HelpMe();

class Trigger {
  constructor() {
    this.trigger = 'trigger';

    this.watch();
  }

  watch() {
    document.addEventListener('click', this.run);
  }

  destroy() {
    document.removeEventListener('click', this.run);
  }

  run(e) {
    if (e.target.hasAttribute('trigger')) {
      e.preventDefault();
      const btn = e.target;
      const targetIdentifier = btn.getAttribute('trigger');

      let target;
      let scope;

      if (btn.hasAttribute('scope')) {
        switch (btn.getAttribute('scope')) {
          case 'parent':
            scope = btn.parentNode;
            break;
          case 'grandparent':
            scope = btn.parentNode.parentNode;
            break;
          case 'grandgrandparent':
            scope = btn.parentNode.parentNode.parentNode;
            break;
          default:
            scope = btn.getAttribute('scope') || document.querySelector('body');
            break;
        }
      }

      switch (targetIdentifier) {
        case '':
          target = [btn];
          break;
        case 'parent':
          target = [btn.parentNode];
          break;
        default:
          target = scope.querySelectorAll(targetIdentifier);
          break;
      }

      helpers.forEach(target, (t) => {
        const classes = t.classList.value.split(' ');

        if (t.classList.value === '') {
          console.warn('Your target element has no classes');
          return false;
        }

        for (let i = 0; i < classes.length; i++) {
          if (classes[i].indexOf('--active') === -1) {
            t.classList.toggle(`${classes[i]}--active`);
          }
        }
      });
    }
  }
}

const _trigger = new Trigger();
export default _trigger;
