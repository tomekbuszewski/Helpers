export default class HelpMe {
	className(className) {
		return className.replace('.', '');
	}

	addClass(element, className) {
		const els = document.querySelectorAll(element);

		Array.prototype.forEach.call(els, (i) => {
			const classes = i.classList.value.split(' ');
			const classPosition = classes.indexOf(this.className(className));
			if (classPosition === -1) {
				i.classList.add(this.className(className));
			}
		});
	}

	removeClass(element, className) {
		const els = document.querySelectorAll(element);
		const elsArr = Array.from(els);

		for (let i of elsArr) {
			i.classList.remove(this.className(className));
		}
	}

	hasClass(element, className) {
		const els = document.querySelectorAll(element);
		const elsArr = Array.from(els);

		for (let i of elsArr) {
			if (i.classList.contains(this.className(className))) return true;
		}
	}

	onEvents(what, events, callback) {
		const ev = events.split(' ');

    Array.prototype.forEach.call(what, (w) => {
      Array.prototype.forEach.call(ev, (e) => {
        w.addEventListener(e, callback);
      });
    });
	}

	offEvents(what, events, callback) {
		const ev = events.split(' ');

    Array.prototype.forEach.call(what, (w) => {
      Array.prototype.forEach.call(ev, (e) => {
        w.removeEventListener(e, callback);
      });
    });
	}

  slug(str) {
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();

    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to   = "aaaaeeeeiiiioooouuuunc------";
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.split(from.charAt(i)).join(to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    return str;
  }
}
