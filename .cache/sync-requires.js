const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\andres\\Documents\\proyectos\\mc\\.cache\\dev-404-page.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("C:\\Users\\andres\\Documents\\proyectos\\mc\\src\\pages\\cart.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\andres\\Documents\\proyectos\\mc\\src\\pages\\index.js"))),
  "component---src-templates-menu-js": hot(preferDefault(require("C:\\Users\\andres\\Documents\\proyectos\\mc\\src\\templates\\Menu.js")))
}

