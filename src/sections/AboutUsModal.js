import React from "react";
import Modal from "../components/Modal";
import { styled } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImgFilter from "../components/GatsbyImgFilter";
import { device } from "../theme/breakpoints";
import { responsiveCSS } from "../services/Theme/responsive";

const AboutUsModal = ({ open, closeButton }) => {
  const { ueberschrift, text, hintergrund } = useStaticQuery(graphql`
    query {
      strapiUeberUns {
        text: Text
        ueberschrift: Ueberschrift
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
  `).strapiUeberUns;

  return (
    <Modal open={open} closeButton={closeButton}>
      <AboutUsModalStyle>
        <GatsbyImgFilter
          image={hintergrund}
          background="true"
          opacity={0.55}
          color="var(--blue)"
        />
        <div className="textsection">
          <p className="ueberschrift">{ueberschrift}</p>
          <p className="text">{text}</p>
        </div>
      </AboutUsModalStyle>
    </Modal>
  );
};

export default AboutUsModal;

const AboutUsModalStyle = styled.div`
  height: 100%;
  .textsection {
    color: white;
    z-index: 120;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .ueberschrift {
      font-size: calc(var(--fs-bigtitle) / 1.5);
      /* font-size: var(--fs-1); */
      font-family: "Lobster Two", normal;
      font-weight: 100;
      padding-bottom: var(--space-lg);
    }

    .text {
      ${responsiveCSS("width", 50, 50, 50, 70, 80,80, "%")}
      max-height: 60%;
      overflow-y: auto;
      line-height: 1.5;
      font-size: var(--fs-5);
    }
  }
`;
