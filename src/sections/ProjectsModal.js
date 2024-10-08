import React, { useState } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import Icon from "../components/Icon";
import ProjectModal from "./ProjectModal";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImgFilter from "../components/GatsbyImgFilter";
import { device } from "../theme/breakpoints";
import ImageButton from "../components/ImageButton";

const ProjectsModal = ({ open, closeButton }) => {
  const { kategorien } = useStaticQuery(graphql`
    query {
      strapiProjekte {
        kategorien: Kategorien {
          name: KategorieName
          bild: KategorieBild {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            alternativeText
          }
          projekte: Projekte {
            beschreibung: Beschreibung
            titel: Titel
            bild: Bild {
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `).strapiProjekte;

  const [modals, setModals] = useState(
    new Array(kategorien.length).fill(false)
  );

  const openModal = (index) => {
    setModals((prevModals) => {
      const newModals = [...prevModals];
      newModals[index] = true;
      return newModals;
    });
  };

  const closeModal = (index) => {
    setModals((prevModals) => {
      const newModals = [...prevModals];
      newModals[index] = false;
      return newModals;
    });
  };

  return (
    <Modal open={open} closeButton={closeButton}>
      <ProjectsModalStyle>
        {kategorien.map((kategorie, index) => (
          <React.Fragment key={index}>
            <BoxStyle className="auswahl" onClick={() => openModal(index)}>
              <ImageButton
                text={kategorie.name}
                background={kategorie.bild}
              />
            </BoxStyle>

            <ProjectModal
              data={kategorien[index]}
              open={modals[index]}
              closeButton={() => closeModal(index)}
            />
          </React.Fragment>
        ))}
      </ProjectsModalStyle>
    </Modal>
  );
};

export default ProjectsModal;

const ProjectsModalStyle = styled.div`
  display: flex;
  height: 100%;

  @media ${device.tablet_sm} {
    flex-direction: column;
  }
`;

const BoxStyle = styled.div`
  cursor: pointer;
  width: 100%;
  position: relative;

  .textbox {
    pointer-events: none;
    position: absolute;
    top: 40%;
    text-align: center;
    width: 100%;
    z-index: 150;

    h3 {
      text-align: center;
      color: white;
      font-size: var(--fs-4);
      font-weight: 500;
      padding-bottom: var(--space-xl);
    }
  }

  @media ${device.tablet_sm} {
    flex: 1;
  }
`;
