import React from "react";
import PolicyText from "../components/PolicyText";
import Root from "../components/Root";
import Footer from "../sections/Footer";
import { Seo } from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";

const Impressum = () => {
  const { impressum } = useStaticQuery(graphql`
    query {
      strapiRechtliches {
        impressum: Impressum
      }
    }
  `).strapiRechtliches;
  return (
    <Root>
      <PolicyText text={impressum} />
      <Footer />
    </Root>
  );
};

export default Impressum;

export const Head = () => (
  <>
    <Seo
      title="Impressum"
      description="Herzlich willkommen beim Impressum von [Ihr Firmenname]. Hier finden Sie alle rechtlich relevanten Informationen zu unserem Unternehmen, einschließlich Kontaktdaten, Firmensitz und Vertretungsberechtigten. Vertrauen Sie auf transparente Angaben und kontaktieren Sie uns für weitere Fragen. Ihr Vertrauen ist uns wichtig."
    />
    <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />
  </>
);
