/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const plugins = [
  "gatsby-plugin-styled-components",
  {
    resolve: `gatsby-plugin-preload-fonts`,
    options: {
      formats: ["woff2"],
      usePreload: true,
    },
  },
];

if (process.env.GATSBY_USE_LOCAL_BACKEND === "false") {
  plugins.push({
    resolve: "gatsby-source-strapi",
    options: {
      apiURL: process.env.GATSBY_BACKEND_URL,
      singleTypes: ["willkommen"],
      accessToken: process.env.GATSBY_BACKEND_API_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata: {
    title: `Zimmerei Fischer`,
    siteUrl: `http://demo234213.atwebpages.com/`,
    description:
      "Willkommen bei [Ihr Firmenname] - Ihre Experten für individuelle Zimmerarbeiten und Holzbau in [Ihrem Standort]. Unser erfahrenes Team aus Zimmerleuten und Holzhandwerkern steht Ihnen zur Verfügung, um Ihre Wohnträume wahr werden zu lassen. Von maßgeschneiderten Holzmöbeln über Dachstühle bis hin zu Innenausbauten bieten wir hochwertige Handwerkskunst und kreative Lösungen. Entdecken Sie unser Portfolio und kontaktieren Sie uns noch heute für eine unverbindliche Beratung. Vertrauen Sie auf unsere jahrzehntelange Erfahrung und Leidenschaft für Holz - Ihre Zimmerei in [Ihrem Standort].",
  },
  plugins: plugins,
};
