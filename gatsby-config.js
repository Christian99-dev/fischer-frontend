/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    "babel-plugin-styled-components",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`],
          placeholder: `blurred`,
          breakpoints: [411, 768, 1400, 1921],
        },
      },
    },
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        formats: ["woff2"],
        usePreload: true,
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg', "py"]
      }
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_BACKEND_URL,
        accessToken: process.env.GATSBY_BACKEND_API_TOKEN,
        singleTypes: [
          "ueber-uns",
          "willkommen",
          "leistungen",
          "formular",
          "formular-popup",
          "rechtliches",
          "unternehmen",
          "seo",
          {
            singularName: "footer",
            queryParams: {
              populate: ["Spalten.Reihen"],
            },
          },
          {
            singularName: "auswahl",
            queryParams: {
              populate: [
                "Leistungen",
                "UeberUns",
                "Projekte",
                "Leistungen.Hintergrund",
                "UeberUns.Hintergrund",
                "Projekte.Hintergrund",
              ],
            },
          },
          {
            singularName: "projekte",
            queryParams: {
              populate: [
                "Kategorien.KategorieBild",
                "Kategorien.Projekte",
                "Kategorien.Projekte.Bild",
              ],
            },
          },
        ],
      },
    },
  ],
};
