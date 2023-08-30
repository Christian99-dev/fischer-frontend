import React from "react";
import { FetchWelcome } from "../api/fetch";
import { styled } from "styled-components";
import ImageFilter from "./ImageFilter";

const Welcome = () => {
  const { data, loading } = FetchWelcome();
  return (
    <WelcomeStyle>
      {!loading && (
        <React.Fragment>
          <div className="text-wrapper">
            <h1 className="title">{data.title}</h1>
            <h2 className="subtitle">{data.subtitle}</h2>
          </div>
          <ImageFilter
            alt="Hintergrundbild, welches einen Handwerker bei der Arbeit zeigt."
            src={data.background}
            color="var(--black)"
            opacity="0.3"
          />
        </React.Fragment>
      )}
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

  .text-wrapper {
    position: relative;
    top: 35%;
    text-align: center;
    height: min-content;
    .title {
      position: relative;
      z-index: 15;
      font-size: var(--fs-bigtitle);
    }

    .subtitle {
      position: relative;
      z-index: 15;
      font-size: var(--fs-3);
    }
  }

  .image-filter {
    top: 0;
    position: absolute;
  }
`;
