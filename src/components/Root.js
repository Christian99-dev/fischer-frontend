import React from "react";
import { styled } from "gatsby-plugin-styled-components";
import GlobalStyle from "../theme/global";

const Root = ({ children }) => {
  return (
    <LayoutStyle>
      <GlobalStyle />
      {children}
    </LayoutStyle>
  );
};

export default Root;

const LayoutStyle = styled.div`
  height: 100vh;
`;
