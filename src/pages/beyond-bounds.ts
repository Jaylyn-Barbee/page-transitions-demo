import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

@customElement('beyond-bounds')
export class BeyondBounds extends LitElement {

  static get styles() {
    return [
      styles,
      css`
        .green {
          background-color: green;
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
        <div class="green">

        </div>
        <top-level-nav></top-level-nav>
    `;
  }
}
