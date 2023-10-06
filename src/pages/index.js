import React from "react";
import Root from "../components/Root";
import Welcome from "../sections/Welcome";
import Selection from "../sections/Selection";
import Fourmular from "../sections/Fourmular";
import Footer from "../sections/Footer";
import { SeoHeader } from "../components/SeoHeader";
import SpaceVariableView from "../services/Utils/spaceVariableView";

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

export const Head = () => <SeoHeader endung="index" />

export default index;
