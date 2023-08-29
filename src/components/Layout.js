import React from "react";
import { styled } from "styled-components";

const Layout = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;

const LayoutStyle = styled.div`
  margin: 0;
  background-color: salmon;
`;
