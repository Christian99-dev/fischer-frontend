import React from "react";
import PolicyText from "../components/PolicyText";
import Root from "../components/Root";
import Footer from "../sections/Footer";
import { Seo } from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";

const Datenschutz = () => {
  const { datenschutz } = useStaticQuery(graphql`
    query {
      strapiRechtliches {
        datenschutz: Datenschutzerklaerung
      }
    }
  `).strapiRechtliches;
  return (
    <Root>
      <PolicyText text={datenschutz} />
      <Footer />
    </Root>
  );
};

export default Datenschutz;

export const Head = () => (
  <>
    <Seo
      title="Datenschutz"
      description="Datenschutz hat für uns höchste Priorität. Erfahren Sie mehr über die Erhebung, Verarbeitung und Nutzung Ihrer persönlichen Daten auf unserer Website. Unsere Datenschutzerklärung gibt Ihnen klare Einblicke und Informationen zu Ihren Rechten. Bei weiteren Fragen stehen wir Ihnen gerne zur Verfügung. Vertrauen Sie auf den sicheren Umgang mit Ihren Daten bei [Ihr Firmenname]."
    />
    <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />
  </>
);
