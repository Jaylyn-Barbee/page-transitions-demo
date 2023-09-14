import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

import '../components/top-level-nav'
import { albums, tracklists } from '../data/music';
import { router } from '../router';

type Params = {
    name: string;
    index: number;
};

@customElement('album-details')
export class AlbumDetails extends LitElement {



  static get styles() {
    return [
      styles,
      css`
        .wrapper {
          height: 90vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow-y: scroll;
          position: relative;
        }
        .container {
          max-width: 350px;
          view-transition-name: container-transform;
        }

        .album-art {
          max-width: 350px;
          height: auto;
          border-radius: 10px;
        }

        .album-name {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          view-transition-name: name-transform;
        }
        .back-button {
          position: absolute;
          top: 20px;
          left: 20px;
        }

      `
    ];
  }

  private paramsData: null | Params = null;

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.paramsData = router.context.params;
    this.paramsData!.name = decodeURIComponent(this.paramsData!.name)
  }

  async handleBackward(name: string) {
    let album: HTMLElement = this.shadowRoot!.querySelector(`div[data-name="${name}"]`)!
    let name_text: HTMLElement = this.shadowRoot!.querySelector(`.album-name`)!

    if ("startViewTransition" in document) {
      //@ts-ignore
      album!.style.viewTransitionName = 'container-transform-back';

      //@ts-ignore
      name_text!.style.viewTransitionName = 'name-transform-back';

      // @ts-ignore
      await document.startViewTransition();
    }

    await router.navigate(`/container-transform`);

    setTimeout(() => {
      // @ts-ignore
      album!.style.viewTransitionName = '';

      // @ts-ignore
      name_text!.style.viewTransitionName = '';
    }, 500);

    (document.querySelector("app-index") as LitElement).requestUpdate();
  }

  render() {
    return html`
      <div class="wrapper">
        <button type="button" class="back-button" @click="${() => this.handleBackward(albums[this.paramsData!.index].name)}">Back</button>
        <div class="container" data-name="${albums[this.paramsData!.index].name}">
            <img class="album-art" src=${"/assets/" + albums[this.paramsData!.index].cover} alt="Album Cover for ${albums[this.paramsData!.index].name}" />
        </div>
        <p class="album-name">${albums[this.paramsData!.index].name} by ${albums[this.paramsData!.index].artist}</p>
        <ol start="1">
            ${tracklists[this.paramsData!.name].map((song: string) =>
                html`
                    <li>${song}</li>
                `
            )}
        </ol>
      </div>
      <top-level-nav></top-level-nav>
    `;
  }
}