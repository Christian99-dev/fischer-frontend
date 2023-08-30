import React from "react";
import Root from "../components/Root";
import Welcome from "../sections/Welcome";
import Selection from "../sections/Selection";

const index = () => {
  return (
    <Root>
      <main>
        <Welcome />
        <Selection />
      </main>
    </Root>
  );
};

export default index;
