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

  @media ${device.laptop} {
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
        opacity={0.55}
        background
      />
    </CardStyle>
  );
};

const CardStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: black;
  flex: 1;

  .textbox {
    pointer-events: none;
    position: absolute;
    top: 40%;
    text-align: center;

    h2 {
      color: white;
      position: relative;
      z-index: 30;
      font-size: var(--fs-4);
      font-weight: 500;
      padding-bottom: var(--space-xl);
    }

    .icon {
      position: relative;
      z-index: 30;
    }
  }
`;
