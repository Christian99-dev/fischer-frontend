import React from "react";
import { useSiteMetadata } from "../services/Hooks/useSiteMetadata";
import { FetchUnternehmen } from "../data/fetch";

export const Seo = ({ title: pageTitle, description, pathname, children }) => {
  const {
    title: websiteTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata();
  const { data, loading } = FetchUnternehmen();

  const seo = {
    title: pageTitle + " | " + websiteTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {loading ? (
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
        />
      ) : (
        <link
          rel="icon"
          href={data.logo}
        />
      )}
      {children}
    </>
  );
};