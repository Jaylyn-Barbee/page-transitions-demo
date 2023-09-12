import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

@customElement('container-transform')
export class ContainerTransform extends LitElement {

  static get styles() {
    return [
      styles,
      css`
        .red {
          background-color: red;
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
        <div class="red">

        </div>
        <top-level-nav></top-level-nav>
    `;
  }
}
