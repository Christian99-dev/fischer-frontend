import React from "react";
import { styled } from "styled-components";
import Icon from "../components/Icon";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { graphql, useStaticQuery } from "gatsby";
import { addMediaLink } from "../services/Utils/addMediaLink";
import { device } from "../theme/breakpoints";

const Welcome = () => {

  const { titel, untertitel, hintergrund, alternativeText } =
    useStaticQuery(graphql`
      query {
        strapiWillkommen {
          titel: Titel
          untertitel: Untertitel
          hintergrund: Hintergrund {
            url
            alternativeText
          }
        }
      }
    `).strapiWillkommen;

  return (
    <WelcomeStyle>
      <div className="text-wrapper">
        <p>{titel}</p>
        <Fade delay={200}>
          <h1>{untertitel}</h1>
        </Fade>
      </div>
      <div className="video">
        <div className="filter" />
        <video
          src={addMediaLink(hintergrund.url)}
          title={alternativeText}
          autoPlay
          loop
          muted
        />
      </div>

      <Link
        className="downbutton"
        to="selection"
        href="#"
        smooth={true}
        duration={500}
      >
        <Fade direction="down">
          <Icon name="down" />
        </Fade>
      </Link>
    </WelcomeStyle>
  );
};

const WelcomeStyle = styled.section`
  position: relative;
  height: 100vh;
  color: var(--white);
  display: flex;
  justify-content: center;
  padding: var(--space-xl);

  .logo {
    position: fixed;
    height: 100px;
    z-index: 50;
    right: var(--space-lg);
    top: var(--space-lg);

    img {
      height: 100%;
    }
  }

  .text-wrapper {
    position: relative;
    top: 35%;
    text-align: center;
    z-index: 40;
    height: min-content;

    p {
      position: relative;
      font-size: var(--fs-bigtitle);
      font-family: "Lobster Two", normal;
      font-weight: 400;
      padding-bottom: var(--space-sm);
    }

    h1 {
      position: relative;
      font-size: var(--fs-3);
      font-weight: 500;
      letter-spacing: 1.5px;
    }
  }

  .downbutton {
    bottom: 0;
    z-index: 40;
    position: absolute;
    margin-bottom: var(--space-lg);
    cursor: pointer;
    transition: bottom 0.2s ease-out;

    &:hover {
      bottom: var(--space-sm);
      transition: bottom 0.2s ease-in;
    }
  }

  @media ${device.tablet_sm} {
    .downbutton {
      bottom: var(--space-giant);
      &:hover {
        bottom: var(--space-giant);
        transition: unset;
      }
    }
  }

  .video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    object-fit: cover;

    .thumbnail {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 31;
      opacity: 1;

      &.loaded {
        opacity: 0;
        transition: opacity 0.5s ease-in;
      }
    }

    .filter {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 32;
      background-color: var(--black);
      opacity: 0.4;
    }

    video {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: 30;
    }
  }
`;

export default Welcome;
