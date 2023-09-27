import React from "react";
import PolicyText from "../components/PolicyText";
import { FetchRechtliches } from "../data/fetch";
import Root from "../components/Root";
import Footer from "../sections/Footer";
import { Seo } from "../components/Seo";

const datenschutz = () => {
  const { data, loading } = FetchRechtliches();
  return (
    <Root>
      <PolicyText loading={loading} text={data?.datenschutz} />
      <Footer />
    </Root>
  );
};

export default datenschutz;

export const Head = () => (
  <>
    <Seo
      title="Datenschutz"
      description="Datenschutz hat für uns höchste Priorität. Erfahren Sie mehr über die Erhebung, Verarbeitung und Nutzung Ihrer persönlichen Daten auf unserer Website. Unsere Datenschutzerklärung gibt Ihnen klare Einblicke und Informationen zu Ihren Rechten. Bei weiteren Fragen stehen wir Ihnen gerne zur Verfügung. Vertrauen Sie auf den sicheren Umgang mit Ihren Daten bei [Ihr Firmenname]."
    />
    <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />
  </>
);
