import React from "react";
import Root from "../components/Root";
import Welcome from "../sections/Welcome";
import Selection from "../sections/Selection";
import Fourmular from "../sections/Fourmular";

const index = () => {
  return (
    <Root>
      <main>
        <Welcome />
        <Selection />
        <Fourmular />
      </main>
    </Root>
  );
};

export default index;
