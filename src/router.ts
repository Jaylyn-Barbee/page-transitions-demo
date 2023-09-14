// docs for router https://github.com/thepassle/app-tools/blob/master/router/README.md

import { html } from 'lit';

if (!(globalThis as any).URLPattern) {
  await import("urlpattern-polyfill");
}

import { Router } from '@thepassle/app-tools/router.js';
import { lazy } from '@thepassle/app-tools/router/plugins/lazy.js';

// @ts-ignore
import { title } from '@thepassle/app-tools/router/plugins/title.js';

import './pages/app-home.js';

const baseURL: string = (import.meta as any).env.BASE_URL;

export const router = new Router({
    routes: [
      {
        path: "/",
        title: 'Home',
        render: () => html`<app-home></app-home>`
      },
      {
        path: '/forward-page',
        title: 'Forward',
        plugins: [
          lazy(() => import('./pages/forward-page.js')),
        ],
        render: () => html`<forward-page></forward-page>`
      },
      {
        path: '/backward-page',
        title: 'Backward',
        plugins: [
          lazy(() => import('./pages/backward-page.js')),
        ],
        render: () => html`<backward-page></backward-page>`
      },
      {
        path: '/container-transform',
        title: 'Container Transform',
        plugins: [
          lazy(() => import('./pages/container-transform.js')),
        ],
        render: () => html`<container-transform></container-transform>`
      },
      {
        path: '/album-details/:name/:index',
        //@ts-ignore
        title: ({params}) => `${params.name} Details`,
        plugins: [
          lazy(() => import('./pages/album-details.js')),

        ],
        //@ts-ignore
        render: ({params}) => html`<album-details id="${params.name}"></album-details>`
      },
      {
        path: '/beyond-bounds',
        title: 'Beyond Screen Bounds',
        plugins: [
          lazy(() => import('./pages/beyond-bounds.js')),
        ],
        render: () => html`<beyond-bounds></beyond-bounds>`
      }
    ]
  });

  // This function will resolve a path with whatever Base URL was passed to the vite build process.
  // Use of this function throughout the starter is not required, but highly recommended, especially if you plan to use GitHub Pages to deploy.
  // If no arg is passed to this function, it will return the base URL.

  export function resolveRouterPath(unresolvedPath?: string) {
    var resolvedPath = baseURL;
    if(unresolvedPath) {
      resolvedPath = resolvedPath + unresolvedPath;
    }

    return resolvedPath;
  }
