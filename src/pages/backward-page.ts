import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';
import { router } from '../router';

@customElement('backward-page')
export class BackwardPage extends LitElement {

  static get styles() {
    return [
      styles,
      css`
        :host {
          view-transiton-name: forward;
        }
        .red {
          background-color: red;
          height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `
    ];
  }

  constructor() {
    super();
  }

  async firstUpdated() {

  }

  async handleBackward(){
    let host = this.shadowRoot!.host;

    if ("startViewTransition" in document) {
      //@ts-ignore
      host!.style.viewTransitionName = 'backward';

      // @ts-ignore
      await document.startViewTransition();
    }

    await router.navigate("/forward-page");

    setTimeout(() => {
      // @ts-ignore
      host!.style.viewTransitionName = '';
    }, 500);

    (document.querySelector("app-index") as LitElement).requestUpdate();
  }

  render() {
    return html`
        <div class="red">
          <button type="button" class="backward-button" @click="${() => this.handleBackward()}">Backward</button>
        </div>
        <top-level-nav></top-level-nav>
    `;
  }
}
