import React from "react";
import PolicyText from "../components/PolicyText";
import Root from "../components/Root";
import Footer from "../sections/Footer";
import { SeoHeader } from "../components/SeoHeader";
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

export const Head = () => <SeoHeader pageName="Datenschutzerklaerung" />
