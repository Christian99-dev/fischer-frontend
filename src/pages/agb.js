import React from "react";
import PolicyText from "../components/PolicyText";
import Root from "../components/Root";
import Footer from "../sections/Footer";
import { SeoHeader } from "../components/SeoHeader";
// import { graphql, useStaticQuery } from "gatsby";

const Agb = () => {
  // const { agb } = useStaticQuery(graphql`
  //   query {
  //     strapiRechtliches {
  //       agb: AGB
  //     }
  //   }
  // `).strapiRechtliches;

  const agb = "Das sind die AGB"

  return (
    <Root>
      <PolicyText text={agb} />
      <Footer />
    </Root>
  );
};

export default Agb;

export const Head = () => <SeoHeader endung="impressum" /> // ZU AGB ÄNDERN
