import { v4 as uuidv4 } from 'uuid';
import anime from 'animejs';
import 'normalize.css';

class SereneShadowUI {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    this.elements.forEach(el => {
      el.style.position = 'relative';
      el.style.zIndex = '1';
      this.applyShadow(el);
    });
  }

  applyShadow(el) {
    const shadowId = `shadow-${uuidv4()}`;
    const shadowEl = document.createElement('div');
    shadowEl.setAttribute('id', shadowId);
    shadowEl.style.position = 'absolute';
    shadowEl.style.top = '0';
    shadowEl.style.left = '0';
    shadowEl.style.width = '100%';
    shadowEl.style.height = '100%';
    shadowEl.style.zIndex = '-1';
    shadowEl.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    shadowEl.style.borderRadius = 'inherit';
    el.appendChild(shadowEl);

    anime({
      targets: `#${shadowId}`,
      translateY: [0, 10],
      scale: [1, 1.05],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  }
}

export default SereneShadowUI;
