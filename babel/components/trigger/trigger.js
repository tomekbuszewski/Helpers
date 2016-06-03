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
      let target;

      const btn = e.target;

      const targetIdentifier = btn.getAttribute('trigger');

      switch (targetIdentifier) {
        case '':
          target = [btn];
          break;
        case 'parent':
          target = [btn.parentNode];
          break;
        default:
          target = document.querySelectorAll(targetIdentifier);
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
