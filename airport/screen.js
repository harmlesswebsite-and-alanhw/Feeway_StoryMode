class Screen {
	constructor(screenElement) {
		console.log(screenElement);
		if (!(screenElement instanceof HTMLDivElement)) throw new DOMException('Invalid screen element: ' + screenElement);
		screenElement.classList.add('screen');
		this.screenElement = screenElement;
		this.print("Welcome. Using display driver v1.0 (c) PeePee Corp");
	}
	scroll2Bottom() {
		this.screenElement.scrollTop = this.screenElement.scrollHeight;
	}
	printf(text) {
		const span = document.createElement('span');
		span.textContent = text;
		this.screenElement.appendChild(span);
		this.scroll2Bottom();
	}
	print(text) {
		this.printf(text + "\n");
	}
	printh(text) {
		this.printhf(`${text}\n`);
	}
	printhf(text) {
		const s = document.createElement('span');
		s.innerHTML = text;
		this.screenElement.appendChild(s);
		this.scroll2Bottom();
	}
	clear() {
		this.screenElement.innerHTML = '';
	}
	wait(seconds) {
		return new Promise(function(resolve) {
			setTimeout(resolve, seconds * 1000);
		});
	}
	delLast(num = 1) {
		for (var i = 0; i < num; i++) {
			const ch = this.screenElement.children[this.screenElement.children.length - 1];
			if (!ch) break;
			ch.parentNode.removeChild(ch);
		}
	}
}
function input(prompt, defaultValue = "", cancellable = false, header = "A prompt") {
	return new Promise(function(resolve, reject) {
		const form = document.createElement('form');
		form.action = "javascript:;";
		form.style.position = 'fixed';
		form.style.top = '0';
		form.style.left = '0';
		form.style.width = '100%';
		form.style.height = '100%';
		form.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
		const actualform = document.createElement('div');
		actualform.setAttribute('style', 'position: fixed; top: 50%; left: 50%; padding: 7px;');
		actualform.style.transform = 'translate(-50%, -50%)';
		actualform.style.backgroundColor = 'white';
		actualform.style.border = '2px solid';
		const heading = document.createElement('h2');
		heading.textContent = header;
		actualform.appendChild(heading);
		const info = document.createElement('div');
		info.textContent = `Enter your answer below. The question is: ${prompt}. This is ${cancellable ? '' : 'not '}cancellable. Good luck!`;
		actualform.appendChild(info);
		const label = document.createElement('label');
		label.textContent = prompt + "\u00a0";
		const input = document.createElement('input');
		input.value = defaultValue;
		label.appendChild(input);
		actualform.appendChild(label);
		const buttons = document.createElement('div');
		const submit = document.createElement('button');
		submit.textContent = 'OK';
		buttons.appendChild(submit);
		buttons.appendChild(document.createTextNode('\u00a0'));
		const cancel = document.createElement('button');
		cancel.textContent = 'Cancel';
		cancel.addEventListener('click', function() { reject(input.value); });
		if (cancellable) buttons.appendChild(cancel);
		actualform.appendChild(buttons);
		form.appendChild(actualform);
		form.onsubmit = function() {
			const value = input.value;
			this.parentNode.removeChild(this);
			resolve(value);
		}
		document.body.appendChild(form);
		input.focus();
	});
}