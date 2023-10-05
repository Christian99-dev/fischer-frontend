import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { addMediaLink } from "../services/Utils/addMediaLink";

export const SeoHeader = ({ endung, children }) => {
  const { strapiSeo } = useStaticQuery(graphql`
    query {
      strapiSeo {
        webseitenTitel: WebseitenTitel
        webseitenUrl: WebseitenUrl
        datenschutz: Datenschutzerklaerung {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
        index: Homepage {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
        impressum: Impressum {
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

  const { webseitenUrl, webseitenTitel, favicon } = strapiSeo;

  return (
    <>
      <title>
        {strapiSeo[endung].title} | {webseitenTitel}
      </title>
      <meta name="description" content={strapiSeo[endung].desc} />
      <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />
      <link rel="icon" href={addMediaLink(favicon.formats.small.url)} />
      <link rel="canonical" href={webseitenUrl + "/" + endung} />
      {children}
    </>
  );
};
