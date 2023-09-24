import React from "react";
import styled from "styled-components";
import { FetchFooter } from "../data/fetch";

const Footer = () => {
  const { data } = FetchFooter();
  return (
    <FooterStyle>
      {data &&
        data.sektionen.map((sektion, index) => (
          <div className="sektion" key={index}>
            <h3>{sektion.ueberschrift}</h3>
            <div className="zeilen">
              {sektion.zeilen.map((zeile, index) => (
                <p key={index}>{zeile}</p>
              ))}
            </div>
          </div>
        ))}
        <div className="sektion" >
            <h3>Rechtliches</h3>
            <div className="zeilen">
              <p>Impressum</p>
              <p>Datenschutz</p>
            </div>
          </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  background-color: grey;
  width: 100%;
  display: flex;

  .sektion {
    margin: var(--space-md);
    flex: 1;

    h3 {
      font-size: var(--fs-5);
      font-weight: 600;
      padding-bottom: var(--space-sm);
    }

    .zeilen {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    &:not(:last-child){
        border-right: black 1px solid;
    }
  }
`;
