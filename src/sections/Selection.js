import React, { useState } from "react";
import { styled } from "styled-components";
import Icon from "../components/Icon";
import AboutUsModal from "./AboutUsModal";
import LeistungenModal from "./LeistungenModal";
import ProjectsModal from "./ProjectsModal";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImgFilter from "../components/GatsbyImgFilter";
import { device } from "../theme/breakpoints";

const Selection = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showLeistungen, setShowLeistungen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const { leistungen, ueberuns, projekte } = useStaticQuery(graphql`
    {
      strapiAuswahl {
        leistungen: Leistungen {
          text: Text
          hintergrund: Hintergrund {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
        ueberuns: UeberUns {
          text: Text
          hintergrund: Hintergrund {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
        projekte: Projekte {
          text: Text
          hintergrund: Hintergrund {
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
  `).strapiAuswahl;

  return (
    <SelectionStyle id="selection">
      {/** Buttons */}
      <Card data={projekte} onClick={() => setShowProjects(true)} />
      <Card data={leistungen} onClick={() => setShowLeistungen(true)} />
      <Card data={ueberuns} onClick={() => setShowAboutUs(true)} />

      {/** Modals */}
      <AboutUsModal
        open={showAboutUs}
        closeButton={() => setShowAboutUs(false)}
      />
      <LeistungenModal
        open={showLeistungen}
        closeButton={() => setShowLeistungen(false)}
      />
      <ProjectsModal
        open={showProjects}
        closeButton={() => setShowProjects(false)}
      />
    </SelectionStyle>
  );
};

export default Selection;

const SelectionStyle = styled.section`
  height: 100vh;
  display: flex;
  padding: var(--space-xxl) var(--space-xxxl);
  justify-content: space-between;
  gap: var(--space-lg);

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const Card = ({ data, onClick }) => {
  const { text, hintergrund } = data;
  return (
    <CardStyle onClick={onClick}>
      <div className="textbox">
        <h2>{text}</h2>
        <Icon name="add" />
      </div>
      <GatsbyImgFilter
        image={hintergrund}
        color="var(--blue)"
        hover="true"
        opacity={0}
        background
      />
    </CardStyle>
  );
};

const CardStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: black;
  flex: 1;
  
  .textbox {
    padding: var(--space-xl);
    background-color: rgba(0,0,0,0.9);
    pointer-events: none;
    position: absolute;
    text-align: center;
    z-index: 30;
    top: 40%;
    transition: top 0.2s ease;


    h2 {
      color: white;
      position: relative;
      font-size: var(--fs-4);
      font-weight: 500;
      padding-bottom: var(--space-xl);
    }

    .icon {
      position: relative;
    }
  }
  &:hover {
    .textbox {
      display: flex;
      justify-content: center;
      flex-direction: column;
      transition: top 0.2s ease;
      top: 35%;
    }
  }

  @media ${device.tablet} {
    align-items: center;
    .textbox {
      position: relative;
      top: unset;
      h2 {
        padding: 0;
      }
      .icon {
        display: none;
      }
    }
  }
`;
