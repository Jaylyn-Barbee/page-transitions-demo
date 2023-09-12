import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

@customElement('forward-and-backward')
export class ForwardAndBackward extends LitElement {

  static get styles() {
    return [
      styles,
      css`
        .blue {
          background-color: blue;
          height: 90vh;
        }
      `
    ];
  }

  constructor() {
    super();
  }

  async firstUpdated() {

  }

  render() {
    return html`
        <div class="blue">

        </div>
        <top-level-nav></top-level-nav>
    `;
  }
}
