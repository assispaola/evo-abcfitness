
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
    'index.csr.html': {size: 14948, hash: 'd2e8b50279f21bb6b55e9e1382c18eee09747239444dbc4a25eda457b4fe01c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 976, hash: '07921badc5689fca4d08f76a9a29a5427d0e5c23d95687e5a74d7e1f095e2880', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QMKLIQG5.css': {size: 240976, hash: 'rNKyye+NlAU', text: () => import('./assets-chunks/styles-QMKLIQG5_css.mjs').then(m => m.default)}
  },
};
