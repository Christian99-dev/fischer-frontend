import React from "react";
import PolicyText from "../components/PolicyText";
import Root from "../components/Root";
import Footer from "../sections/Footer";
import { Seo, SeoHeader } from "../components/SeoHeader";
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

export const Head = () => <SeoHeader pageName="Impressum" />
