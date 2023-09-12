import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

import '../components/top-level-nav'


@customElement('app-home')
export class AppHome extends LitElement {

  static get styles() {
    return [
      styles,
      css`
        .wrapper {
          height: 100vh;
          width: 100vw;
        }
        .rainbow {
          background: linear-gradient(
            to right, /* Gradient direction from left to right */
            red,     /* Start with red */
            orange,  /* Progress to orange */
            yellow,  /* Progress to yellow */
            green,   /* Progress to green */
            blue,    /* Progress to blue */
            indigo,  /* Progress to indigo */
            violet   /* End with violet */
          );
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
      <div class="wrapper">
        <div class="rainbow"></div>
        <top-level-nav></top-level-nav>
      </div>
    `;
  }
}