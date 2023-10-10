import React from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImgFilter from "../components/GatsbyImgFilter";
import BoxGrid from "../components/BoxGrid";

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
        <BoxGrid data={leistungen}/>
      </LeistungenModalStyle>
    </Modal>
  );
};

export default LeistungenModal;

const LeistungenModalStyle = styled.div`
  width: 100%;
  height: 100%;
`;
