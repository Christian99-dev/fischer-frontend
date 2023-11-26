import React from "react";
import styled from "styled-components";
import HoverLink from "../components/HoverLink";
import AutoLink from "../components/AutoLink";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { responsiveCSS } from "../theme/responsive";
import { device } from "../theme/breakpoints";

const Footer = () => {
  const { strapiUnternehmen, strapiFooter } = useStaticQuery(graphql`
    query {
      strapiFooter {
        spalten: Spalten {
          ueberschrift: Ueberschrift
          reihen: Reihen {
            text: Text
          }
        }
      }
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
  `);

  const { spalten } = strapiFooter;
  const { logo } = strapiUnternehmen;

  return (
    <FooterStyle>
      <GatsbyImage
        image={getImage(logo.localFile)}
        alt={logo.alternativeText}
        className="logo"
      />

      <div className="horizontal-wrapper">
        <div className="sektions">
          {spalten.map((spalte, index) => (
            <div className="sektion" key={index}>
              <h3>{spalte.ueberschrift}</h3>
              <div className="zeilen">
                {spalte.reihen.map((reihe, index) => (
                  <AutoLink key={index} to={reihe.text} />
                ))}
              </div>
            </div>
          ))}

          <div className="sektion">
            <h3>Rechtliches</h3>
            <div className="zeilen">
              <HoverLink text="Impressum" to="/impressum" gatsbyLink="true" />
              <HoverLink
                text="Datenschutz"
                to="/datenschutz"
                gatsbyLink="true"
              />
              <HoverLink
                text="AGB"
                to="/agb"
                gatsbyLink="true"
              />
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  background-color: var(--dark-blue);
  padding: var(--space-xxl) var(--space-xxxl);
  display: flex;

  .logo {
    img {
      ${responsiveCSS("height", 250, 200, 160, 130, 110, 100)}
    }
  }

  .horizontal-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: var(--space-xxxl);

    .sektions {
      height: min-content;
      display: flex;
      justify-content: space-between;
      flex: 1;

      .sektion {
        padding-left: var(--space-md);
        height: min-content;
        border-left: white 1px solid;
        color: white;

        h3 {
          font-size: var(--fs-5);
          font-weight: 600;
          padding-bottom: var(--space-md);
        }

        p,
        .link {
          font-size: var(--fs-6);
          white-space: nowrap;
        }

        .zeilen {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }
      }
    }
  }

  @media ${device.laptop} {
    flex-direction: column-reverse;

    .horizontal-wrapper {
      padding-left: 0;
      padding-bottom: var(--space-xxxl);
    }

    .logo {
      text-align: center;

      img {
        margin: 0 auto;
        width: auto;
      }
    }
  }

  @media ${device.tablet} {
    .horizontal-wrapper {
      .sektions {
        flex-direction: column;
        gap: var(--space-xxxl);
        align-items: center;
        .sektion {
          text-align: center;
          width: min-content;
          padding: 0;
          border: none;
        }
      }
    }
  }
`;
