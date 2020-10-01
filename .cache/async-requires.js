// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-cart-js": () => import("./../../../src/pages/cart.js" /* webpackChunkName: "component---src-pages-cart-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-menu-js": () => import("./../../../src/templates/Menu.js" /* webpackChunkName: "component---src-templates-menu-js" */)
}

