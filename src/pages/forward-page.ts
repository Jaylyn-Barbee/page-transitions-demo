import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';
import { router } from '../router';

@customElement('forward-page')
export class ForwardPage extends LitElement {

  static get styles() {
    return [
      styles,
      css`
        :host {
          view-transiton-name: backward;
        }
        .blue {
          background-color: blue;
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

  async handleForward(){
    let host = this.shadowRoot!.host;

    if ("startViewTransition" in document) {
      //@ts-ignore
      host!.style.viewTransitionName = 'forward';

      // @ts-ignore
      await document.startViewTransition();
    }

    await router.navigate("/backward-page");

    setTimeout(() => {
      // @ts-ignore
      host!.style.viewTransitionName = '';
    }, 500);

    (document.querySelector("app-index") as LitElement).requestUpdate();
  }

  render() {
    return html`
        <div class="blue">
          <button type="button" class="forward-button" @click="${() => this.handleForward()}">Forward</button>
        </div>
        <top-level-nav></top-level-nav>
    `;
  }
}
