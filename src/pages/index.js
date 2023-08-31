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


export const Head = () => <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />

export default index;
