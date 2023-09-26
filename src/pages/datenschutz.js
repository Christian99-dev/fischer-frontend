import React from "react";
import PolicyText from "../components/PolicyText";
import { FetchRechtliches } from "../data/fetch";
import Root from "../components/Root";
import Footer from "../sections/Footer";

const datenschutz = () => {
  const { data, loading } = FetchRechtliches();
  return (
    <Root>
      <PolicyText loading={loading} text={data?.datenschutz} />
      <Footer/>
    </Root>
  );
};

export default datenschutz;

export const Head = () => (
  <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />
);
