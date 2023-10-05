import React from "react";
import styled from "styled-components";

const Circle = ({ children, padding = "0px" }) => {
  return <CircleStyle padding={padding}>{children}</CircleStyle>;
};

export default Circle;

const CircleStyle = styled.div`
  /* clip-path: circle(50% at 50% 50%); */
  /* background-color: red; */
  /* padding: ${(props) => props.padding}; */
  /* height: 100%; */
`;

