import React from "react";
import Modal from "../components/Modal";
import { styled } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImgFilter from "../components/GatsbyImgFilter";

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
          <p>{text}</p>
        </div>
      </AboutUsModalStyle>
    </Modal>
  );
};

export default AboutUsModal;

const AboutUsModalStyle = styled.div`
  .textsection {
    position: relative;
    z-index: 120;
    padding: var(--space-xxl);
    width: 60%;
    color: white;

    .ueberschrift {
      font-size: calc(var(--fs-bigtitle) / 1.5);
      font-family: "Lobster Two", normal;
      font-weight: 100;
    }

    p {
      line-height: 1.5;
      font-size: var(--fs-5);
    }
  }
`;
