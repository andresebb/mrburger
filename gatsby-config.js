module.exports = {
  siteMetadata: {
    title: `Mcdonalds`,
    description: `Este es una tienda de Mcdonalds`,
    author: `@chiguirecode`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /*// Este plugin (gatsby-transformer-sharp) utiliza a gatsby-plugin-sharp para tomar 
    las imagenes que teneemos en el proyecto y convertilas en diferentes tamanos y tipos de imagenes como .svg .png .webp */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
    },
    {
      resolve: "gatsby-source-firestore",
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: "Menu",
            collection: "menu",
            map: (doc) => ({
              nombre: doc.nombre,
              ingredientes: doc.ingredientes,
              imagen: doc.imagen,
              stripe: doc.stripe,
              precio: doc.precio,
              side: doc.side,
              nuevo: doc.nuevo,
            }),
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
