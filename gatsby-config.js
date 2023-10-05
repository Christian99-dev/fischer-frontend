/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Zimmerei Fischer`,
    siteUrl: `http://demo234213.atwebpages.com/`,
    description:
      "Willkommen bei [Ihr Firmenname] - Ihre Experten für individuelle Zimmerarbeiten und Holzbau in [Ihrem Standort]. Unser erfahrenes Team aus Zimmerleuten und Holzhandwerkern steht Ihnen zur Verfügung, um Ihre Wohnträume wahr werden zu lassen. Von maßgeschneiderten Holzmöbeln über Dachstühle bis hin zu Innenausbauten bieten wir hochwertige Handwerkskunst und kreative Lösungen. Entdecken Sie unser Portfolio und kontaktieren Sie uns noch heute für eine unverbindliche Beratung. Vertrauen Sie auf unsere jahrzehntelange Erfahrung und Leidenschaft für Holz - Ihre Zimmerei in [Ihrem Standort].",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
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
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_BACKEND_URL,
        accessToken: process.env.GATSBY_BACKEND_API_TOKEN,
        singleTypes: [
          "ueber-uns",
          "willkommen",
          "leistungen",
          "formular",
          "rechtliches",
          "unternehmen",
          "seo",
          {
            singularName: "footer",
            queryParams: {
              populate: [
                "Spalten.Reihen",
              ],
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
