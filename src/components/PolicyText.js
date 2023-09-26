import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { navigate } from "@reach/router";
import { FetchUnternehmen } from "../data/fetch";
import parse from "html-react-parser";

const PolicyText = ({ text, loading }) => {
  const { data } = FetchUnternehmen();
  return (
    <PolicyTextStyle>
      {data && (
        <img className="logo" src={data.logo} alt="Unternehmenslogo"></img>
      )}
      <div
        className="backbutton"
        onClick={() => {
          navigate("/");
        }}
      >
        <Icon name="left-black" />
        Zurück zur Homepage
      </div>
      {!loading && <div className="policy">{parse(text)}</div>}
    </PolicyTextStyle>
  );
};

export default PolicyText;

const PolicyTextStyle = styled.div`
  position: relative;
  padding: var(--space-xxl);
  height: 100vh;

  .backbutton {
    cursor: pointer;
    font-size: var(--fs-4);
    display: flex;
    align-items: center;
    gap: var(--space-lg);
  }
  
  .policy {
    margin: var(--space-lg) 0;
    height: 100%;
    overflow-y: scroll;
    h1 {
      padding: var(--space-md) 0;
    }

    h2 {
      padding: var(--space-sm) 0;
    }

    h3 {
      padding: var(--space-xs) 0;
    }
    h4 {
      padding: var(--space-xs) 0;
    }
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
  }
`;
