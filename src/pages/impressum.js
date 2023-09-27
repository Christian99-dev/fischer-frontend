import React from "react";
import PolicyText from "../components/PolicyText";
import { FetchRechtliches } from "../data/fetch";
import Root from "../components/Root";
import Footer from "../sections/Footer";
import { Seo } from "../components/Seo";

const impressum = () => {
  const { data, loading } = FetchRechtliches();
  return (
    <Root>
      <PolicyText loading={loading} text={data?.impressum} />
      <Footer />
    </Root>
  );
};

export default impressum;

export const Head = () => (
  <>
    <Seo
      title="Impressum"
      description="Herzlich willkommen beim Impressum von [Ihr Firmenname]. Hier finden Sie alle rechtlich relevanten Informationen zu unserem Unternehmen, einschließlich Kontaktdaten, Firmensitz und Vertretungsberechtigten. Vertrauen Sie auf transparente Angaben und kontaktieren Sie uns für weitere Fragen. Ihr Vertrauen ist uns wichtig."
    />
    <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />
  </>
);
