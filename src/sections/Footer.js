import React from "react";
import styled from "styled-components";
import { FetchFooter, FetchUnternehmen } from "../data/fetch";
import HoverLink from "../components/HoverLink";
import AutoLink from "../components/AutoLink";

const Footer = () => {
  const { data } = FetchFooter();
  const { data: unternehmenData } = FetchUnternehmen();
  return (
    <FooterStyle>
      {unternehmenData && (
        <div className="logo">
          <img src={unternehmenData.logo} alt="Unternehmenslogo" />
        </div>
      )}
      <div className="horizontal-wrapper">
        <div className="sektions">
          {data &&
            data.sektionen.map((sektion, index) => (
              <div className="sektion" key={index}>
                <h3>{sektion.ueberschrift}</h3>
                <div className="zeilen">
                  {sektion.zeilen.map((zeile, index) => (
                    <AutoLink key={index} to={zeile} />
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
      height: 200px;
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
`;
