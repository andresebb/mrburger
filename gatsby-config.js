module.exports = {
  siteMetadata: {
    title: `Mcdonalds`,
    description: `Este es una tienda de Mcdonalds`,
    author: `@chiguirecode`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/box1.png`, // This path is relative to the root of the site.
      },
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
              precio: doc.precio,
              imagen: doc.imagen,
              stripe: doc.stripe,
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
