
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/evo-abcfitness/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/evo-abcfitness"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/evo-abcfitness/details"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14948, hash: '779fe8c9c78c949a8c9dc1dd146ec5ae532c6b68b1573649b5ae61b036635250', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 976, hash: '5cc6b5694ebee7e04bed9b16b3decd30f730b18c5c48a2f5dfe17eeb39aae4b0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QMKLIQG5.css': {size: 240976, hash: 'rNKyye+NlAU', text: () => import('./assets-chunks/styles-QMKLIQG5_css.mjs').then(m => m.default)}
  },
};
