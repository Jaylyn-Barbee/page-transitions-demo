import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';
import { router } from '../router';

const pageMap: { [id: string] : string; } = {
    "Home": "/",
    "Container Transform": "/container-transform",
    "Forward and Backward": "/forward-page",
    "Beyond Screen Bounds": "/beyond-bounds"
}

@customElement('top-level-nav')
export class TopLevelNav extends LitElement {

  static get styles() {
    return [
      styles,
      css`
        .top-level {
          height: 10vh;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }

        .nav-button {
          width: 100%;
          height: 100%;
        }

        .nav-button:hover {
          cursor: pointer;
        }


      `
    ];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
  }

  async handlePageChange(page: string){

    if ("startViewTransition" in document) {
      return (document as any).startViewTransition(() => {
        router.navigate(page);
        (document.querySelector("app-index") as LitElement).requestUpdate();
      });

    } else {
      router.navigate(page);
      (document.querySelector("app-index") as LitElement).requestUpdate();
    }

  }

  render() {
    return html`
        <div class="top-level">
            ${Object.keys(pageMap).map((item: string) => html`<button type="button" class="nav-button" @click=${() => this.handlePageChange(pageMap[item])}>${item}</button>`)}
        </div>
    `;
  }
}
