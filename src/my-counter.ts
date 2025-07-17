import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('my-counter')
export class MyCounter extends LitElement {
  @property({ type: Number })
  stepNumber: number = 1;

  @state()
  count: number = 0;

  upCount() {
    this.count += this.stepNumber;
  }

  render() {
    return html`
      <div class="container">
        <h1>카운터</h1>
        <p class="result-display">${this.count}</p>
        <button @click=${this.upCount}>카운트</button>
      </div>
    `;
  }
}
