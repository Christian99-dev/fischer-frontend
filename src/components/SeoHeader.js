import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { addMediaLink } from "../services/Utils/addMediaLink";

export const SeoHeader = ({ pageName, children }) => {
  const { strapiSeo } = useStaticQuery(graphql`
    query {
      strapiSeo {
        webseitenTitel: WebseitenTitel
        webseitenUrl: WebseitenUrl
        Datenschutzerklaerung {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
        Homepage {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
        Impressum {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
        favicon {
          formats {
            small {
              url
            }
          }
        }
      }
    }
  `);

  const { /* webseitenUrl,*/ webseitenTitel, favicon } = strapiSeo;

  return (
    <>
      <title>{strapiSeo[pageName].title} | {webseitenTitel} </title>
      <meta name="description" content={strapiSeo[pageName].desc} />
      <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />
      <link rel="icon" href={addMediaLink(favicon.formats.small.url)} />
      {children}
    </>
  );
};
