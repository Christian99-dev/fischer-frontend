import React from "react";
import styled from "styled-components";

const SpaceVariableView = () => {
  return (
    <SpaceVariableViewStyle>
      <Bar width="calc(var(--space-giant) * 2)" color="black"/>
      <Bar width="calc(var(--space-xxxl) * 2)" color="gray"/>
      <Bar width="calc(var(--space-xxl) * 2)" color="pink"/>
      <Bar width="calc(var(--space-xl) * 2)" color="purple"/>
      <Bar width="calc(var(--space-lg) * 2)" color="orange"/>
      <Bar width="calc(var(--space-md) * 2)" color="yellow"/>
      <Bar width="calc(var(--space-sm) * 2)" color="green"/>
      <Bar width="calc(var(--space-xs) * 2)" color="blue"/>
      <Bar width="calc(var(--space-xxs) * 2)" color="red"/>
    </SpaceVariableViewStyle>
  );
};

export default SpaceVariableView;

const SpaceVariableViewStyle = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
`;

const Bar = styled.div`
  height: 100px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
`;
