import React from "react";
import Root from "../components/Root";
import Welcome from "../sections/Welcome";
import Selection from "../sections/Selection";
import Fourmular from "../sections/Fourmular";
import Footer from "../sections/Footer";
import { Seo } from "../components/Seo";

const index = () => {
  return (
    <Root>
      <main>
        <Welcome />
        <Selection />
        <Fourmular />
      </main>
      <Footer />
    </Root>
  );
};

export const Head = () => (
  <>
    <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />
    <Seo title="Homepage" />
  </>
);

export default index;
