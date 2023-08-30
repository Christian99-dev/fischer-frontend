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
            <h1>{data.title}</h1>
            <h2>{data.subtitle}</h2>
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
  padding: var(--space-xl);
  .text-wrapper {
    position: relative;
    top: 35%;
    text-align: center;
    height: min-content;
    h1 {
      position: relative;
      z-index: 15;
      font-size: var(--fs-bigtitle);
      font-family: 'Lobster Two', normal;
      font-weight: 400;
      padding-bottom: var(--space-sm);
    }

    h2 {
      position: relative;
      z-index: 15;
      font-size: var(--fs-3);
      font-weight: 500;
      letter-spacing: 1.5px;
    }
  }

  .image-filter {
    top: 0;
    position: absolute;
  }
`;
