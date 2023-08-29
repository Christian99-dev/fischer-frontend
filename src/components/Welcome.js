import React from "react";
import { FetchWelcome } from "../api/fetch";
import { styled } from "styled-components";

const Welcome = () => {
  const { data, loading } = FetchWelcome();
  return (
    <WelcomeStyle>
      {!loading && (
        <React.Fragment>
          <h1 className="title">{data.title}</h1>
          <h2 className="subtitle">{data.subtitle}</h2>
          <img
            className="background"
            alt="Hintergrundbild, welches einen Handwerker bei der Arbeit zeigt."
            src={data.background}
          />
        </React.Fragment>
      )}
    </WelcomeStyle>
  );
};

export default Welcome;

const WelcomeStyle = styled.section`
  height: 100vh;
  position: relative;

  .title {
  }
  .subtitle {
  }

  .background {
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
