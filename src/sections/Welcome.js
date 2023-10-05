import React, { useState } from "react";
import { styled } from "gatsby-plugin-styled-components";
import Icon from "../components/Icon";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { graphql, useStaticQuery } from "gatsby";
import { addMediaLink } from "../services/Utils/addMediaLink";
import localvideo from "../../static/worker3sec.mp4";

const Welcome = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

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

  console.log(process.env.NODE_ENV);

  return (
    <WelcomeStyle>
      <div className="text-wrapper">
        <Fade>
          <p>{titel}</p>
        </Fade>
        <Fade delay={200}>
          <h1>{untertitel}</h1>
        </Fade>
      </div>

      <div className="video">
        <div className={"filter " + (videoLoaded && "loaded")} />
        <video
          src={
            process.env.NODE_ENV === "development"
              ? addMediaLink(hintergrund.url)
              : localvideo
          }
          title={alternativeText}
          autoPlay
          loop
          muted
          onCanPlay={() => setVideoLoaded(true)}
        />
      </div>

      <Link className="downbutton" to="selection" smooth={true} duration={500}>
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

  .image-filter {
    top: 0;
    position: absolute;
  }

  .video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;

    .filter {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 31;
      background-color: var(--black);
      opacity: 1;

      &.loaded {
        opacity: 0.6;
        transition: opacity 0.4s ease-in;
      }
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
