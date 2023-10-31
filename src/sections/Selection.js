import React, { useState } from "react";
import { styled } from "styled-components";
import Icon from "../components/Icon";
import AboutUsModal from "./AboutUsModal";
import LeistungenModal from "./LeistungenModal";
import ProjectsModal from "./ProjectsModal";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImgFilter from "../components/GatsbyImgFilter";
import { device } from "../theme/breakpoints";
import ImageButton from "../components/ImageButton";

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
      <ImageButton text={projekte.text} background={projekte.hintergrund} onClick={() => setShowProjects(true)} />
      <ImageButton text={leistungen.text} background={leistungen.hintergrund} onClick={() => setShowLeistungen(true)} />
      <ImageButton text={ueberuns.text} background={ueberuns.hintergrund} onClick={() => setShowAboutUs(true)} />

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