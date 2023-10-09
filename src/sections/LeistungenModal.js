import React from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImgFilter from "../components/GatsbyImgFilter";

const LeistungenModal = ({ open, closeButton }) => {
  const { leistungen, hintergrund } = useStaticQuery(graphql`
    query {
      strapiLeistungen {
        hintergrund: Hintergrund {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        leistungen: Leistungen {
          beschreibung: Beschreibung
          ueberschrift: Ueberschrift
        }
      }
    }
  `).strapiLeistungen;

  return (
    <Modal open={open} closeButton={closeButton}>
      <LeistungenModalStyle>
        <GatsbyImgFilter
          image={hintergrund}
          background="true"
          opacity={0.8}
          color="var(--blue)"
        />
        <div className={"grid _" + leistungen.length}>
          {leistungen.map((leistung, index) => (
            <BoxStyle key={index} className="leistung">
              <h3>{leistung.ueberschrift}</h3>
              <div className="text">
                <div>
                  <p className="dot">•</p>
                  <p>{leistung.beschreibung}</p>
                </div>
              </div>
            </BoxStyle>
          ))}
        </div>
      </LeistungenModalStyle>
    </Modal>
  );
};

export default LeistungenModal;

const BoxStyle = styled.div`
  padding: 0 var(--space-xxl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.1s ease-out;

  h3 {
    font-weight: 500;
    font-size: var(--fs-4);
    text-align: center;
  }

  .text {
    padding-top: var(--space-sm);
    text-align: center;
    font-weight: 300;
    font-size: var(--fs-5);
    line-height: 1.2;

    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.1s ease-out;

    > div {
      overflow: hidden;
    }

    .dot {
      padding-bottom: var(--space-sm);
      font-size: var(--fs-5);
    }
  }

  &:hover {
    background-color: var(--blue);
    transition: background-color 0.2s ease-in;

    .text {
      grid-template-rows: 1fr;
      transition: grid-template-rows 0.2s ease-in;
    }
  }
`;

const LeistungenModalStyle = styled.div`
  width: 100%;
  height: 100%;
  .grid {
    display: grid;
    z-index: 120;
    position: relative;
    padding: var(--space-xxl);
    color: white;
    width: 100%;
    height: 100%;

    &._2 {
      display: flex;
      flex-direction: row;

      .leistung:nth-child(1) {
        border-right: white solid 1px;
      }
    }

    &._3 {
      display: flex;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "a a a a"
        "b b c c";

      .leistung:nth-child(1) {
        border-bottom: white solid 1px;
        grid-area: a;
      }
      .leistung:nth-child(2) {
        border-right: white solid 1px;
        grid-area: b;
      }
      .leistung:nth-child(3) {
        grid-area: c;
      }
    }

    &._4 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      .leistung:nth-child(1) {
        border-right: white solid 1px;
        border-bottom: white solid 1px;
      }

      .leistung:nth-child(2) {
        border-bottom: white solid 1px;
      }

      .leistung:nth-child(3) {
        border-right: white solid 1px;
      }
    }

    &._5 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "a a a b b b"
        "c c d d e e";

      .leistung:nth-child(1) {
        border-bottom: white solid 1px;
        border-right: white solid 1px;
        grid-area: a;
      }
      .leistung:nth-child(2) {
        border-bottom: white solid 1px;
        grid-area: b;
      }
      .leistung:nth-child(3) {
        border-right: white solid 1px;
        grid-area: c;
      }
      .leistung:nth-child(4) {
        border-right: white solid 1px;
        grid-area: d;
      }
      .leistung:nth-child(5) {
        grid-area: e;
      }
    }

    &._6 {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      .leistung:not(:nth-child(3n)) {
        border-right: white solid 1px;
      }

      .leistung:not(:nth-last-child(-n + 3)) {
        border-bottom: white solid 1px;
      }
    }
  }
`;
