/* configuramos todo lo que tiene que ver con la construcción 
de nuestro sitio web con Gatsby. Podemos generar vistas en función 
de nuestra información proveniente de GraphQL, incluso utilizando APIs externas a nuestra aplicación.*/

/* 
A traves de este proceso, gatsby genera
una pagina para ese producto al momento de hacer click en 
ese producto
*/

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/templates/Menu.js`);
  const result = await graphql(`
    {
      allMenu {
        edges {
          node {
            ingredientes
            nombre
            imagen
            stripe
            side
            nuevo
            precio
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.allMenu.edges.forEach(({ node }) => {
    createPage({
      path: `${node.nombre}`,
      component: productTemplate,
      context: node,
    });
  });
};
