import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import parse from "html-react-parser";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PolicyText = ({ text }) => {
  const { logo } = useStaticQuery(graphql`
    query {
      strapiUnternehmen {
        logo: Logo {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `).strapiUnternehmen;
  return (
    <PolicyTextStyle>
      <GatsbyImage
        image={getImage(logo.localFile)}
        alt={logo.alternativeText}
        className="logo"
      />

      <Link
        className="backbutton"
        to="/"
      >
        <Icon name="left-black" />
        Zurück zur Homepage
      </Link>
      <div className="policy">{parse(text)}</div>
    </PolicyTextStyle>
  );
};

export default PolicyText;

const PolicyTextStyle = styled.div`
  position: relative;
  padding: var(--space-xxl);
  height: 100vh;

  a {
    text-decoration: none;
    color: black;
    background-color: transparent;
    cursor: pointer;
    font-size: var(--fs-4);
    display: flex;
    height: min-content;
    align-items: center;
    gap: var(--space-lg);
  }

  .policy {
    margin: var(--space-lg) 0;
    height: 100%;
    overflow-y: scroll;
    h1 {
      padding: var(--space-md) 0;
    }

    h2 {
      padding: var(--space-sm) 0;
    }

    h3 {
      padding: var(--space-xs) 0;
    }
    h4 {
      padding: var(--space-xs) 0;
    }
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
  }
`;
