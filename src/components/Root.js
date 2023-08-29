import React from "react";
import { styled } from "styled-components";
import GlobalStyle from "../theme/global";

const Root = ({ children }) => {
  return (
    <LayoutStyle>
      <GlobalStyle>{children}</GlobalStyle>
    </LayoutStyle>
  );
};

export default Root;

const LayoutStyle = styled.div`
  margin: 0;
  padding: 0;
  background-color: salmon;

  * {
    box-sizing: border-box;
  }
`;
