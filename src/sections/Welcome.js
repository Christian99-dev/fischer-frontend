import React, { useState } from "react";
import { /* FetchUnternehmen, */ FetchWelcome } from "../data/fetch";
import { styled } from "styled-components";
import Icon from "../components/Icon";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
// import Circle from "../components/circle";

const Welcome = () => {
  const { data } = FetchWelcome();
  // const { data: unternehmenData } = FetchUnternehmen();
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <WelcomeStyle>
      {!videoLoaded && (
        <React.Fragment>
          <div className="text-wrapper">
            <Fade>
              <h1 className="loading-text">Lade...</h1>
            </Fade>
          </div>
          <div className="loading-banner" />
        </React.Fragment>
      )}

      {/* {unternehmenData && (
        <Fade delay={300} className="logo">
          <Circle>
            <img src={unternehmenData.logo} alt="Unternehenslogo" />
          </Circle>
        </Fade>
      )} */}

      {videoLoaded && (
        <div className="text-wrapper">
          <Fade>
            <h1>{data.title}</h1>
          </Fade>

          <Fade delay={200}>
            <h2>{data.subtitle}</h2>{" "}
          </Fade>
        </div>
      )}

      {data && (
        <div className="video">
          <div className="filter" />
          <video
            src={data.background}
            title={"Trailer des Unternehmens"}
            autoPlay
            loop
            muted
            onLoadedData={() => {
              setVideoLoaded(true);
            }}
          />
        </div>
      )}

      <Link className="downbutton" to="selection" smooth={true} duration={500}>
        <Fade direction="down">
          <Icon name="down" />
        </Fade>
      </Link>
    </WelcomeStyle>
  );
};

export default Welcome;

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

  .loading-banner {
    background-color: black;
    z-index: 30;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
  }

  .text-wrapper {
    position: relative;
    top: 35%;
    text-align: center;
    z-index: 40;
    height: min-content;

    h1 {
      position: relative;
      font-size: var(--fs-bigtitle);
      font-family: "Lobster Two", normal;
      font-weight: 400;
      padding-bottom: var(--space-sm);
    }

    h2 {
      position: relative;
      font-size: var(--fs-3);
      font-weight: 500;
      letter-spacing: 1.5px;
    }

    .loading-text {
      font-size: var(--fs-3);
      font-weight: 500;
      letter-spacing: 1.5px;
      color: white;
      font-family: inherit;
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
      opacity: 0.6;
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
